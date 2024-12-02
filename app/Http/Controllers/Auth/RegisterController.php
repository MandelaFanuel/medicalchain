<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)

    {

        // dd($request->all());

        // Data Validation
        $request->validate(
            [
                'first_name' => 'required|string|max:30|min:3',
                'last_name' => 'required|string|max:30|min:3',
                'email' => 'required|string|email|max:255|unique:users,email',
                'phone' => 'required|string|max:15|min:10',
                'password' => 'required|string|confirmed|min:8|', // "confirmed" checks for password_confirmation
                'user_birth_date' => 'required|date',
                'user_address' => 'required|string|max:255',
                'current_function' => 'nullable|string|max:255',
                'user_gender' => 'required|string|max:10',
                'user_status' => 'required|string|max:10',
            ],
            [
                'email.unique' => 'This email has already been used',
                'userIdNumber.unique' => 'This ID Number has already been used.',
            ]
        );

        //Management of the photo if it exists
        $photoPath = null;
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('photos', 'public');
        }

        // User Creation
        User::create(
            [
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
            ]
        );

        // Redirection after registration
        return response()->json(['success' => 'Registration successful.'], 201);
    }
}
