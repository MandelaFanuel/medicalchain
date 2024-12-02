<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class AddDoctorController extends Controller
{
    // Method to show the form for adding a doctor
    public function create()
    {
        return view('doctor.create'); // Ensure this view exists
    }

    // Method to store the doctor information
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'domain' => 'required|string|max:255',
            'experience_years' => 'required|integer',
            'diploma' => 'required|string|max:255',
            'hospital' => 'required|string|max:255',
            'doctor_description' => 'required|string',
        ]);

        // Create a new doctor record
        Doctor::create([
            'user_id' => $request->input('user_id'),
            'domain' => $request->input('domain'),
            'experience_years' => $request->input('experience_years'),
            'diploma' => $request->input('diploma'),
            'hospital' => $request->input('hospital'),
            'doctor_description' => $request->input('doctor_description'),
        ]);

        return redirect()->route('doctor.create')->with('success', 'Doctor added successfully.');
    }
}
