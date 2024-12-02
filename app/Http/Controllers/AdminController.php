<?php

// AdminController.php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Availability;
use App\Models\Doctor;
use App\Models\Leave;
use App\Models\Payment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        // Getting users:
        $users = User::all();
        $userCount = $users->count();

        $doctors = Doctor::all();
        $doctorCount = $doctors->count();

        $appointments = Appointment::all();
        $appointmentCount = $appointments->count();

        $dailyRevenue = Payment::whereDate('created_at', Carbon::today())->sum('amount');
        $monthlyRevenue = Payment::whereMonth('created_at', Carbon::now()->month)->sum('amount');

        $recentActivities = [
            'A new user registered',
            'An appointment has been taken',
            'A new doctor has been added',
        ];

        $progressData = $this->getProgressData(); // Retrieve progress data

        return view('admins.dashboard', compact('users', 'userCount', 'doctors', 'doctorCount', 'appointments', 'appointmentCount', 'dailyRevenue', 'monthlyRevenue', 'recentActivities', 'progressData'));
    }


    // ============================================================================================================================
    // Admins dashboard
    public function dashboard()
    {
        $users = User::all();
        $userCount = User::count();
        $doctorCount = Doctor::count();
        $appointmentCount = Appointment::count();

        // Daily revenue
        $dailyRevenueFromDoctors = Doctor::whereDate('created_at', Carbon::today())->sum('amount');

        // Monthly revenue
        $monthlyRevenueFromDoctors = Doctor::whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)
            ->sum('amount');

        $recentActivities = $this->getRecentActivities();
        $progressData = $this->getProgressData();

        return view('admins.dashboard', compact(
            'users',
            'userCount',
            'doctorCount',
            'appointmentCount',
            'dailyRevenueFromDoctors',
            'monthlyRevenueFromDoctors',
            'recentActivities',
            'progressData'
        ));
    }

    // ==================================================================================================================

    public function getData()
    {
        $userCount = User::count();
        $doctorCount = Doctor::count();
        $appointmentCount = Appointment::count();
        $dailyRevenue = Payment::whereDate('created_at', now())->sum('amount');
        $monthlyRevenue = Payment::whereMonth('created_at', now()->month)->sum('amount');
        $recentActivities = $this->getRecentActivities();
        $progressData = $this->getProgressData();

        return response()->json([
            'userCount' => $userCount,
            'doctorCount' => $doctorCount,
            'appointmentCount' => $appointmentCount,
            'dailyRevenue' => $dailyRevenue,
            'monthlyRevenue' => $monthlyRevenue,
            'recentActivities' => $recentActivities,
            'progressData' => $progressData,
        ]);
    }

    // ======================================================================================================

    public function getRecentActivities()
    {
        // Getting 5 recent activities
        $recentActivities = collect();

        // Getting user activities and checking if they are within the last 2 weeks
        $userActivities = User::latest()->take(5)->get(['first_name', 'last_name', 'created_at']);
        foreach ($userActivities as $user) {
            // Check if the activity is within the last 2 weeks
            if ($user->created_at->greaterThanOrEqualTo(now()->subWeeks(2))) {
                $recentActivities->push("New user registered: {$user->first_name} {$user->last_name} on {$user->created_at->format('d/m/Y')}");
            }
        }

        // Getting doctor activities and checking if they are within the last 2 weeks
        $doctorActivities = Doctor::latest()->take(5)->get(['domain', 'hospital', 'created_at']);
        foreach ($doctorActivities as $doctor) {
            // Check if the activity is within the last 2 weeks
            if ($doctor->created_at->greaterThanOrEqualTo(now()->subWeeks(2))) {
                $recentActivities->push("New doctor added: {$doctor->domain} at {$doctor->hospital} on {$doctor->created_at->format('d/m/Y')}");
            }
        }

        // Getting appointment activities and checking if they are within the last 2 weeks
        $appointmentActivities = Appointment::latest()->take(5)->get(['status', 'created_at']);
        foreach ($appointmentActivities as $appointment) {
            // Check if the activity is within the last 2 weeks
            if ($appointment->created_at->greaterThanOrEqualTo(now()->subWeeks(2))) {
                $recentActivities->push("Appointment status: {$appointment->status} on {$appointment->created_at->format('d/m/Y')}");
            }
        }

        // Limiting to only 5 recent activities
        return $recentActivities->take(5);
    }


    // =============================================================================================================================================



    private function getProgressData()
    {
        // Getting revenues of each month and each year
        $monthlyRevenues = Payment::selectRaw('MONTH(created_at) as month, SUM(amount) as total')
            ->whereYear('created_at', now()->year)
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('total', 'month')
            ->toArray();

        // Every year and month labels
        $labels = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

        // Generate values for each month
        $values = [];
        for ($i = 1; $i <= 12; $i++) {
            $values[] = $monthlyRevenues[$i] ?? 0; // use 0 if there is no month revenue
        }

        return [
            'labels' => $labels,
            'values' => $values,
            'colors' => [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(99, 255, 132, 0.2)',
                'rgba(162, 54, 235, 0.2)',
                'rgba(206, 255, 86, 0.2)',
                'rgba(192, 75, 192, 0.2)',
                'rgba(102, 153, 255, 0.2)',
                'rgba(159, 255, 64, 0.2)',
            ]
        ];
    }



    // ===================================================================================================

    public function appointmentsFromNavbar()
    {
        // Getting appointments with important relations
        $appointments = Appointment::with(['doctor.user', 'user'])->get();

        // Retourner la vue appointments
        return view('admins.appointments_today', compact('appointments'));
    }

    public function appointments()
    {
        // Getting appointments with important relations from the dashboard
        $appointments = Appointment::with(['doctor.user', 'user'])->get();

        $appointments->each(function ($appointment) {
            if ($appointment->user && $appointment->user->birth_date) {
                $appointment->user->age = Carbon::parse($appointment->user->birth_date)->age;
            }
        });

        return view('admins.appointments_today', compact('appointments'));
    }





    // ==========================================================================================================

    // Fetching data from the database on real time with ajax
    public function search(Request $request)
    {
        $query = $request->input('query');

        // Searching from the users table
        $users = User::where('first_name', 'LIKE', "%$query%")
            ->orWhere('last_name', 'LIKE', "%$query%")
            ->orWhere('email', 'LIKE', "%$query%")
            ->get();

        // Searching from the doctors table
        $doctors = Doctor::where('domain', 'LIKE', "%$query%")
            ->orWhere('hospital', 'LIKE', "%$query%")
            ->get();

        // Searching from the appointment table
        $appointments = Appointment::where('status', 'LIKE', "%$query%")
            ->get();

        return response()->json([
            'users' => $users,
            'doctors' => $doctors,
            'appointments' => $appointments,
        ]);
    }

    // ===================================================================================================

    // Checking notifications from the appointment table
    public function checkNotifications()
    {
        // Counting the new appointments unread
        $unreadAppointments = Appointment::where('status', 'pending')->count();

        return response()->json($unreadAppointments);
    }



    // ====================================================================================================
    // Managing employees
    public function manageEmployees()
    {
        $users = User::all();
        $doctors = Doctor::all();

        return view('admins.manage_employees', compact('users', 'doctors'));
    }



    // ========================================================================================================
    // Assigning holydays to users or to doctors

    public function assignLeave(Request $request)
    {
        //Validate Leave form
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'doctor_id' => 'required|exists:doctors,id',
            'leave_start' => 'required|date',
            'leave_end' => 'required|date',
        ]);

        // Creating new holyday for user
        Leave::create([
            'user_id' => $request->user_id,
            'doctor_id' => $request->doctor_id,
            'leave_start' => $request->leave_start,
            'leave_end' => $request->leave_end,
        ]);


        return redirect()->route('admins.manageEmployees')->with('success', 'Leave assigned successfully.');
    }


    // =====================================================================================================================================

    public function create()
    {
        // Getting users with current_function=doctor
        $users = User::where('current_function', 'doctor')->get();

        // Passer la variable $users à la vue
        return view('admins.create', compact('users'));
    }
}
