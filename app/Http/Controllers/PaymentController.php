<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function submitPhoneNumber(Request $request)
    {
        $validated = $request->validate([
            'phone_number' => 'required|digits:10', // Example validation rule (adjust as needed)
            'operator' => 'required', // Ensure operator is selected
        ]);

        // Process the phone number and operator as needed

        return redirect()->route('payment.success'); // Or redirect to a success page
    }
}
