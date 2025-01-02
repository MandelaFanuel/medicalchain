<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        // Verifying if the user is connected

        if (Auth::check() && ($request->is('login') || $request->is('register'))) {

            // Verifying if the user connected is Admin or not

            if (Auth::user()->role === 'admin') {

                // If he is, i let him register new user
                return $next($request);
            }

            // If he is not admin,he is redirected to the home page

            return redirect('/homeIndex')->withErrors([
                'message' => "You are already logged in.",
            ]);
        }

        //
        // If user is not connected ann he tries to access other pages instead of login and register, he is rejected

        if (!$request->is('login') && !$request->is('register') && !Auth::check()) {
            abort(403, 'Access not allowed');
        }

        //Next request
        return $next($request);
    }
    
}
