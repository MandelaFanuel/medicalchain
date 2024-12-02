<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;
// use App\Http\Controllers\ConsultationController;

class ConsultationController extends Controller
{


    public function index()
    {
        // Getting all doctors


        // $doctors = User::where('current_function', 'doctor')->get();
        $doctors = Doctor::with('user', 'availabilities')->whereHas('user')->get();

        return view('doctors.consultation', compact('doctors'));
    }


    // =================================================================================================================


    public function show()
    {
        // Fetching Doctors with their related user and availabilities data
        $doctors = Doctor::with(['user', 'availabilities'])->get();

        // Checking each doctor and formatting the availability time
        foreach ($doctors as $doctor) {
            // Ensure that user data and availabilities are not null
            if ($doctor->user) {
                // If availability exists and is a collection, format start_time and end_time
                if ($doctor->availabilities && $doctor->availabilities->isNotEmpty()) {
                    foreach ($doctor->availabilities as $availability) {
                        $availability->start_time = \Carbon\Carbon::parse($availability->start_time)->format('h:i A');
                        $availability->end_time = \Carbon\Carbon::parse($availability->end_time)->format('h:i A');
                    }
                }
            }
        }

        // Return the view with the doctors' data
        return view('doctors.consultation', compact('doctors'));
    }


    // ===================================================================================================================================




    public function showConsultation()
    {
        // Getting all Doctors with current_function="doctor
        $doctors = User::where('current_function', 'doctor')->get();

        return view('doctors.consultation', compact('doctors'));
    }

    public function chat($id)
    {
        // Managing chats

        return view('chat', ['doctorId' => $id]);
    }

    public function doctorInfo($id)
    {
        $doctor = User::findOrFail($id); // Getting doctor ID
        return view('doctor_info', compact('doctor'));
    }


    // ================================================================================================================



    // showing doctor appointment

    public function showDoctorAppointments($doctorId)
    {
        $doctor = Doctor::with('user')->find($doctorId);
        $appointments = Appointment::where('doctor_id', $doctorId)->get();
        return view('consultation', compact('doctor', 'appointments'));
    }
}
