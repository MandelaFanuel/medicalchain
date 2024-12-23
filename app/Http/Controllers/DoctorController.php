<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\User;
use App\Models\Availability;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class DoctorController extends Controller
{
    // Displaying all doctors
    public function index()
    {
        $doctors = Doctor::with('user')->get();
        return view('doctors.consultation', data: compact('doctors'));
    }

    // Searching doctors by their domains
    public function search(Request $request)
    {
        $query = $request->input('query');
        $doctors = Doctor::where('domain', 'LIKE', '%' . $query . '%')->get();
        return view('home.homeIndex', compact('doctors'));
    }

    // Searching doctor and be suggested
    public function searchDoctors(Request $request)
    {
        $query = $request->query('query');
        $doctors = Doctor::whereHas('user', function ($q) use ($query) {
            $q->where('first_name', 'like', "%$query%")
                ->orWhere('last_name', 'like', "%$query%");
        })
            ->orWhere('domain', 'like', "%$query%")
            ->with('user')
            ->take(5)
            ->get();
        return response()->json($doctors);
    }

    // Displaying doctors on consultation page
    public function consultation()
    {
        $doctors = Doctor::with(['user', 'availabilities'])->get();
        return view('doctors.consultation', compact('doctors'));
    }

    // Displaying doctor's details
    public function show($id)
    {
        $doctor = Doctor::with('user')->findOrFail($id);
        return view('doctors.show', compact('doctor'));
    }

    // Displaying of the doctor edit
    public function edit($id)
    {
        $doctor = Doctor::findOrFail($id);
        $users = User::where('role', '!=', 'admin')
            ->whereDoesntHave('doctor')
            ->orWhere('id', $doctor->user_id)
            ->get();

        return view('doctors.edit', compact('doctor', 'users'));
    }

    // Displaying of availabilities
    public function availability()
    {
        return view('doctors.availability');
    }

    // ===============================================================================================

    // Creating the doctor associated to a user
    public function create()
    {
        $users = User::where('current_function', 'doctor')
            ->whereDoesntHave('doctor')
            ->get();
        return view('admins.create', compact('users'));
    }

    // =====================================================================================================


    // Registration of a user with function doctor
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:30|min:3',
            'last_name' => 'required|string|max:30|min:3',
            'email' => 'required|string|email|max:255|unique:users,email',
            'phone' => 'required|string|max:15|min:10',
            'password' => 'required|string|confirmed|min:8',
            'user_birth_date' => 'required|date',
            'user_address' => 'required|string|max:255',
            'current_function' => 'nullable|string|max:255',
            'user_gender' => 'required|string|max:10',
            'user_status' => 'required|string|max:10',
        ]);

        $photoPath = null;
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('photos', 'public');
        }

        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'user_birth_date' => $request->user_birth_date,
            'user_address' => $request->user_address,
            'current_function' => $request->current_function,
            'user_gender' => $request->user_gender,
            'user_status' => $request->user_status,
            'photo' => $photoPath,
        ]);

        return redirect()->route('doctors.consultation')->with('success', 'Registration successful.');
    }

    // Registering the doctor
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'domain' => 'required|string',
            'experience_years' => 'required|integer',
            'hospital' => 'required|string',
            'doctor_description' => 'required|string',
            'amount' => 'required|integer',
            'diploma' => 'required|file|mimes:pdf,doc,docx,ppt',
        ]);

        $doctor = new Doctor([
            'user_id' => $request->input('user_id'),
            'domain' => $request->input('domain'),
            'experience_years' => $request->input('experience_years'),
            'hospital' => $request->input('hospital'),
            'doctor_description' => $request->input('doctor_description'),
            'amount' => $request->input('amount'),
        ]);

        if ($request->hasFile('diploma')) {
            $path = $request->file('diploma')->store('diplomas', 'public');
            $doctor->diploma = $path;
        }

        $doctor->save();

        return redirect()->route('doctors.index')->with('success', 'Doctor added successfully.');
    }

    // Registration of doctor's availabilities
    public function storeAvailability(Request $request, $doctorId)
    {
        $request->validate([
            'available_date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i',
        ]);

        Availability::create([
            'doctor_id' => $doctorId,
            'available_date' => $request->available_date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
        ]);

        return redirect()->back()->with('success', 'Availability added successfully.');
    }

    // Updating the doctor
    public function update(Request $request, $id)
    {
        $request->validate([
            'domain' => 'required|string',
            'experience_years' => 'required|integer',
            'hospital' => 'required|string',
            'doctor_description' => 'required|string',
            'amount' => 'required|integer',
        ]);

        $doctor = Doctor::findOrFail($id);
        $doctor->update($request->all());

        return redirect()->route('doctors.index')->with('success', 'Doctor updated successfully.');
    }

    // Deleting a doctor
    public function destroy($id)
    {
        $doctor = Doctor::findOrFail($id);
        $doctor->availabilities()->delete();
        $doctor->delete();

        return redirect()->route('doctors.index')->with('success', 'Doctor deleted successfully.');
    }

    // Updating availabilities
    public function updateAvailability(Request $request, $id)
    {
        $request->validate([
            'available_date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i',
        ]);

        $availability = Availability::findOrFail($id);
        $availability->update($request->all());

        return redirect()->back()->with('success', 'Availability updated successfully.');
    }

    // Deleting availabilities
    public function destroyAvailability($id)
    {
        $availability = Availability::findOrFail($id);
        $availability->delete();

        return redirect()->back()->with('success', 'Availability deleted successfully.');
    }

    // Displying of doctor consultation
    public function showConsultation()
    {
        $doctors = Doctor::with('appointments')->get();
        return view('doctors.consultation', compact('doctors'));
    }
}




// =====================================================================================================================
