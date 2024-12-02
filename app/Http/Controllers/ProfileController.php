<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    // Editing profile form
    public function edit()
    {
        $user = Auth::user();
        return view('profile.edit', compact('user'));
    }





    // Updating profile information
    public function update(Request $request)
    {
        // Validating data
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'userIdNumber' => 'required|string|max:25',
            'phone' => 'required|string|max:15|min:10',
            'current_function' => 'required|string|max:255',
            'user_address' => 'required|string|max:255',
            'user_birth_date' => 'required|string|max:255',
            'user_status' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . Auth::id(),
        ]);

        // Getting authenticated user
        $user = Auth::user();

        // Verifying if the user exists
        if ($user) {
            // updating user info
            $user->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'userIdNumber' => $request->userIdNumber,
                'phone' => $request->phone,
                'current_function' => $request->current_function,
                'user_address' => $request->user_address,
                'user_birth_date' => $request->user_birth_date,
                'user_status' => $request->user_status,
                'email' => $request->email,
            ]);

            return redirect()->route('profile.edit')->with('success', 'Profile updated successfully.');
        } else {
            return redirect()->route('profile.edit')->with('error', 'User not found.');
        }
    }




    //Deleting profile

    public function destroy()
    {

        $user = Auth::user();

        if ($user) {

            $user->delete();

            Auth::logout();

            return redirect('/')->with('success', 'Profile deleted successfully.');
        } else {
            return redirect('/')->with('error', 'User not found.');
        }
    }


    // Profile picture update
    public function updatePhoto(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $user = auth()->user();

        // Supprimer l'ancienne photo si elle existe
        if ($user->photo) {
            Storage::delete('public/' . $user->photo);
        }

        // Enregistrer la nouvelle photo
        $path = $request->file('photo')->store('profile_photos', 'public');
        $user->photo = $path;
        $user->save();

        return redirect('doctors.consultation')->with('success', 'Profile picture updated successfully.');
    }
}
