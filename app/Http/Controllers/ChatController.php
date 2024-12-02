<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function startChat($id)
    {
        // Verifying if Doctor exists
        $doctor = User::findOrFail($id);

        // Display Doctor chat
        return view('doctor.chat', compact('doctor'));
    }


    public function send(Request $request, $id)
    {
        $request->validate([
            'message' => 'required|string|max:255',
        ]);

        // Saving messages in the database

        return redirect()->route('chat.with.doctor', $id)->with('success', 'Message saved successfully!');
    }
}
