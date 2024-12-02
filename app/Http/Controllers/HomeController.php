<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function home()
    {
        $doctors = Doctor::with('user')->take(3)->get();

        return view('home.home', compact('doctors'));
    }

    // =============================================================================================================

    public function doctors()
    {
        return view('home.doctors');
    }


    // =============================================================================================================================

    public function about()
    {
        return view('home.about');
    }

    // =======================================================================================================================

    public function contact()
    {
        return view('home.contact');
    }

    // ==========================================================================================================================

    public function index()
    {
        $doctors = Doctor::all();
        $doctors = Doctor::with('user')->take(3)->get();

        return view('home.home', compact(var_name: 'doctors'));
    }


    // =========================================================================================================================================================
    public function homeIndex()
    {

        $doctors = Doctor::with('availabilities')->get();


        $doctorStats = [];

        foreach ($doctors as $doctor) {

            $appointmentsCount = Appointment::where('doctor_id', $doctor->id)->count();


            $usersWithAppointmentsCount = Appointment::where('doctor_id', $doctor->id)->distinct('user_id')->count('user_id');

            $doctorStats[$doctor->id] = [
                'appointmentsCount' => $appointmentsCount,
                'usersWithAppointmentsCount' => $usersWithAppointmentsCount,
            ];
        }

        return view('home.homeIndex', compact('doctors', 'doctorStats'));
    }
}
