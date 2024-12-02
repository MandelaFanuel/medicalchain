<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Doctor;

class DashController extends Controller
{
    public function index()
    {
        return view('doctors.dash');
    }

    //     public function getDashData()
    //     {
    //         $doctors = Doctor::with('user', 'availabilities')->get();
    //         $appointmentsToday = Appointment::all();

    //         return response()->json([
    //             'doctors' => $doctors,
    //             'appointmentsToday' => $appointmentsToday,
    //             'stats' => [
    //                 'monthlyPatients' => Doctor::count(),
    //                 'monthlyRevenue' => Appointment::sum('fee_paid') ?? 0,
    //                 'monthlyAppointments' => Appointment::count() ?? 0,
    //             ],
    //         ]);
    //     }
}
