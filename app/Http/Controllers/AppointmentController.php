<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Availability;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;  // For date calculations
use Illuminate\Container\Attributes\Auth as AttributesAuth;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class AppointmentController extends Controller
{
    /**
     * Display all appointments and doctors.
     * Fetches all appointments and all doctors along with their associated user data.
     */



    // public function index()
    // {
    //     $doctors = Doctor::with(['user', 'availabilities'])->withAppointmentCount()->get();


    //     return view('make_appointments.appointments', compact('doctors'));
    // }


    public function index()
    {
        // Getting doctors with their relations
        $doctors = Doctor::with(['user', 'availabilities'])
            ->withAppointmentCount()
            ->get();

        // Add appointment statistics
        foreach ($doctors as $doctor) {
            $doctor->totalAppointments = $doctor->appointments()->count();
            $doctor->treatedAppointments = $doctor->appointments()->where('status', 'done')->count();
            $doctor->untreatedAppointments = $doctor->totalAppointments - $doctor->treatedAppointments;

            // Calculate user's position
            $yourAppointmentId = request()->query('appointment_id');
            if ($yourAppointmentId) {
                $doctor->position = $doctor->appointments()
                    ->where('status', 'pending')
                    ->orderBy('created_at')
                    ->pluck('id')
                    ->search($yourAppointmentId) + 1;
            } else {
                $doctor->position = null;
            }
        }


        return view('make_appointments.appointments', compact('doctors'));
    }


    // ===========================================================================================================================

    // public function showAppointmentForm()
    // {


    //     $phone = User::first()->phone;


    //     return view('make_appointments.appointments', compact(var_name: 'phone'));
    // }



    // =====================================================================================================================


    /**
     * Display appointments of a specific doctor.
     * Retrieves a doctor's appointments by their ID and passes it to the view.
     */


    // public function showDoctorAppointments($doctorId)
    // {
    //     // Find the doctor by ID or fail
    //     $doctor = Doctor::findOrFail($doctorId);

    //     // Get all appointments for this specific doctor
    //     $appointments = $doctor->appointments;

    //     // Return the view with the doctor and their appointments
    //     return view('make_appointments.specific_doctor', compact('doctor', 'appointments'));
    // }


    public function showDoctorAppointments($doctorId)
    {
        // Find the doctor by ID or fail
        $doctor = Doctor::findOrFail($doctorId);

        // Get all appointments for this specific doctor
        $appointments = $doctor->appointments;

        // Total appointments
        $totalAppointments = $appointments->count();

        // Treated appointments
        $treatedAppointments = $appointments->where('status', 'done')->count();

        // Untreated appointments
        $untreatedAppointments = $appointments->where('status', 'pending')->count();

        // Position in the queue for untreated appointments (if patient is considering an appointment)
        $position = $untreatedAppointments + 1;

        // Return the view with the doctor and their appointments along with the additional data
        return view('make_appointments.specific_doctor', compact('doctor', 'appointments', 'totalAppointments', 'treatedAppointments', 'untreatedAppointments', 'position'));
    }




    // =====================================================================================================================

    /**
     * Display the form for booking an appointment.
     * Displays the booking form for the doctor selected by the user.
     */
    public function create($doctorId)
    {
        // Find the doctor by ID or fail
        $doctor = Doctor::findOrFail($doctorId);

        // Return the view with the doctor data for the booking form
        return view('make_appointments.appointments', compact('doctor'));
    }


    // =======================================================================================================================

    /**
     * Book an appointment for a user with a specific doctor.
     * The method validates the user's payment, validates the input data,
     * creates the appointment, and then displays success along with the user's age.
     */
    public function book(Request $request, $doctorId)
    {
        // Get the currently authenticated user
        $user = Auth::user();

        // Check if the user has paid the consultation fee for the specific doctor
        if (!$user->hasPaidConsultationFee($doctorId)) {
            return redirect()->back()->withErrors('You must first pay the consultation fee to book an appointment.');
        }

        // Validate the incoming request data
        $request->validate([
            'appointment_date' => 'required|date',
            'subject' => 'required|string|max:255',
        ]);

        // Find the doctor by ID
        $doctor = Doctor::findOrFail($doctorId);

        // Create the appointment
        Appointment::create([
            'user_id' => $user->id,
            'doctor_id' => $doctorId,
            'appointment_date' => $request->input('appointment_date'),
            'subject' => $request->input('subject'),
            'consultation_fee_paid' => true, // Set fee_paid to true when the appointment is created
            'location' => $doctor->hospital,
            'status' => 'pending', // Default status, can be changed later
        ]);

        // Calculate the user's age based on their birth date
        $age = Carbon::parse($user->birth_date)->age;

        // Return to the view with the doctor's details and the user's age
        return view('make_appointments.appointments', [
            'doctor' => $doctor,
            'user' => $user,
            'age' => $age, // Pass the user's age to the view
        ])->with('success', 'Appointment booked successfully!');
    }


    // ==============================================================================================

    /**
     * Show the details of a specific appointment.
     * Retrieves a specific appointment by its ID and passes it to the view.
     */
    public function show($id)
    {
        // Find the appointment by ID or fail
        $appointments = Appointment::findOrFail($id);

        // Return the view with the appointment data
        return view('make_appointments.appointments', compact('appointments'));
    }

    // ==============================================================================================

    /**
     * Store a new appointment.
     * This method validates the input data, creates a new appointment entry,
     * and saves it to the database.
     */

    // public function store(Request $request)
    // {
    //     // Validating form data
    //     $validator = FacadesValidator::make($request->all(), [
    //         'appointment_date' => 'required|date|after:today',
    //         'appointment_time' => 'required|date_format:H:i',
    //         'subject' => 'required|string|max:255',
    //         'doctor_id' => 'required|exists:doctors,id',
    //     ]);

    //     if ($validator->fails()) {
    //         // If validating fails, throw the error
    //         return redirect()->back()->withErrors($validator)->withInput();
    //     }

    //     // Getting doctor
    //     $doctor = Doctor::find($request->doctor_id);

    //     // Verify if the hour and date of the doctor march the onr given by the user
    //     $availability = $doctor->availabilities()->whereDate('available_date', Carbon::parse($request->appointment_date))
    //         ->whereTime('start_time', '<=', $request->appointment_time)
    //         ->whereTime('end_time', '>=', $request->appointment_time)
    //         ->first();

    //     if (!$availability) {
    //         // display error when availability don't march
    //         return redirect()->back()->withErrors(['appointment_error' => 'The selected time or date is unavailable for this doctor.'])->withInput();
    //     }

    //     // Create new appointment
    //     $appointment = new Appointment();
    //     $appointment->user_id = Auth::id();
    //     $appointment->doctor_id = $request->doctor_id;
    //     $appointment->appointment_date = $request->appointment_date;
    //     $appointment->appointment_time = $request->appointment_time;
    //     $appointment->subject = $request->subject;
    //     $appointment->save();


    //     return redirect()->route('appointments.index')->with('success', 'Appointment booked successfully!');
    // }

    // ============================================================================================================


    /**
     * Display all doctors and their appointments.
     * Retrieves all doctors along with their associated users and appointments
     * to display them in a list.
     */
    public function showAppointments()
    {
        // Get all doctors with their users and appointments
        $doctors = Doctor::with('user', 'appointments.user')->get();

        // Return the view with the doctor data
        return view('appointments.index', compact('doctors'));
    }

    // ============================================================================================================


    // paginating appointments

    public function fetchAppointments(Request $request)
    {
        $page = $request->page ?? 1;
        $limit = 2;

        $appointments = Appointment::where('doctor_id', auth()->user()->id)
            ->skip(($page - 1) * $limit)
            ->take($limit)
            ->get();

        return response()->json($appointments);
    }
}
