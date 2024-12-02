<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Availability;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class AvailabilityController extends Controller
{

    public function create()
    {
        $doctors = Doctor::all();
        return view('doctors.availability', compact('doctors'));
    }


    // =================================================================================================================================
    public function index($doctor_id)
    {
        $doctor = Doctor::findOrFail($doctor_id);
        $availabilities = $doctor->availabilities;

        return view('doctors.availabilities.index', compact('doctor', 'availabilities'));
    }

    // =====================================================================================================================================

    public function store(Request $request)
    {
        // Validating data
        $validatedData = $request->validate([
            'doctor_id' => 'required|exists:doctors,id',
            'available_date' => 'required|array',
            'available_date.*' => 'required|date',
            'start_time' => 'required|array',
            'start_time.*' => 'required|date_format:H:i',
            'end_time' => 'required|array',
            'end_time.*' => 'required|date_format:H:i',
        ]);

        // Registration of availability
        foreach ($validatedData['available_date'] as $index => $date) {
            $availability = new Availability();
            $availability->doctor_id = $request->doctor_id;
            $availability->available_date = $date;
            $availability->start_time = $validatedData['start_time'][$index];
            $availability->end_time = $validatedData['end_time'][$index];
            $availability->save();
        }

        return redirect()->back()->with('success', 'Availability added successfully.');
    }

    // ==========================================================================================================================================


    public function showAvailability()
    {

        $doctors = \App\Models\Doctor::with('user')->get();

        return view('doctors.availability', compact('doctors'));
    }
}
