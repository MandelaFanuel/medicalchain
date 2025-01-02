<?php

namespace App\Http\Controllers;

// use Illuminate\Container\Attributes\Auth;

use App\Models\Doctor;
use App\Models\User;
// use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class LoginController extends Controller
{

    protected $request;

    function __construct(Request $request)
    {
        $this->request = $request;
    }

    // ========================================================
    public function showLoginForm()
    {
        return view('auth.login');
    }


    // ======================================================================================================

    public function showRegistrationForm()
    {
        return view('auth.register');
    }



    // ====================================================================================================

    public function register(Request $request)
    {
        // Validation des champs
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|string|max:20',
            'password' => 'required|string|confirmed|min:8',
            'user_birth_date' => 'required|date',
            'user_address' => 'required|string|max:255',
            'userIdNumber' => 'required|string|max:50',
            'current_function' => 'nullable|string|max:255',
            'user_gender' => 'required|in:Female,Male,Other',
            'user_status' => 'required|in:Married,Single,Divorced,Separated',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:4096',

        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Saving the user
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|max:15',
            'password' => 'required|string|min:8|confirmed',
            'user_birth_date' => 'required|date',
            'user_address' => 'required|string|max:255',
            'userIdNumber' => 'required|string|max:20',
            'current_function' => 'nullable|string|max:255',
            'user_gender' => 'required|in:Female,Male,Other',
            'user_status' => 'required|in:Married,Single,Divorced,Separated',
            'photo' => 'required|image|max:4096', //on image with 4 GB

        ]);

        // Saving the user
        $user = new User();
        $user->first_name = $validatedData['first_name'];
        $user->last_name = $validatedData['last_name'];
        $user->email = $validatedData['email'];
        $user->phone = $validatedData['phone'];
        $user->password = Hash::make($validatedData['password']);
        $user->user_birth_date = $validatedData['user_birth_date'];
        $user->user_address = $validatedData['user_address'];
        $user->userIdNumber = $validatedData['userIdNumber'];
        $user->current_function = $validatedData['current_function'];
        $user->user_gender = $validatedData['user_gender'];
        $user->user_status = $validatedData['user_status'];

        //Saving the photo
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('photos', 'public');
            $user->photo = $path;
        }

        $user->save();


        return redirect()->route('login')->with('success', 'Account created successfully. Please log in.');
    }

    // ========================================================================================


  public function login(Request $request)
{
    // Vérifier si l'utilisateur est déjà connecté
    if (Auth::check()) {
        return redirect()->route('consultation')->withErrors([
            'error' => "You're already logged in. Please log out before trying to log in with a different account.",
        ]);
    }

    // Validation des données de connexion
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|string|min:8',
    ]);

    // Tentative d'authentification
    if (Auth::attempt($request->only('email', 'password'), $request->boolean('remember'))) {
        // Rediriger vers une page intentionnée après connexion réussie
        return redirect()->intended('/consultation');
    }

    // En cas d'échec de connexion
    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ])->withInput(); // Permet de garder l'email dans le champ en cas d'erreur
}


    // ========================================================================================

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate(); // session invalidation
        $request->session()->regenerateToken(); // token CSRF generation

        return redirect('/login'); // User redirection
    }



    // ============================================================================

    public function create()
    {
        return view('auth.register');
    }


    // ========================================================================================

    public function index()
    {
        //Fetching doctor with availabilities and appointments
        $doctors = Doctor::with('user', 'availabilities', 'appointments')->get();


        return view('doctors.consultation', compact('doctors'));
    }
}
