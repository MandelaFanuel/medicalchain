<?php


// ===============================================================================================================

use App\Http\Controllers\AddDoctorController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AvailabilityController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\PaymentController;
use App\Http\Middleware\AdminMiddleware;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\DashController;
use App\Http\Controllers\NotificationController;
use Illuminate\Support\Facades\Broadcast;

// Home links pages routes

Route::get('/', function () {
    return view('base');
})->name('app_base');

Route::get('/home', [HomeController::class, 'home'])->name('app_home');

Route::get('/about', [HomeController::class, 'about'])->name('app_about');

Route::get('/contact', [HomeController::class, 'contact'])->name('app_contact');

Route::get('/', [HomeController::class, 'index'])->name('app_home');
Route::get('/', [HomeController::class, 'index']);

Route::get('/homeIndex', [HomeController::class, 'homeIndex'])->name('app_homeIndex');

Route::get('/home/homeIndex', [HomeController::class, 'homeIndex'])->name(name: 'app_homeIndex');

// Route::get('/home', [HomeController::class, 'home'])->name('home.homeIndex');


// =================================================================================================================


// Authenticated user routes(Registered users only can access these routes)

Route::middleware(['auth'])->group(function () {

    Route::get('/doctors', [DoctorController::class, 'index'])->name('doctors.index');
    // Route::get('/doctors/{doctor}/chat', [DoctorController::class, 'chat'])->name('doctors.chat');
    Route::get('/doctors/{id}', [DoctorController::class, 'show'])->name('doctor.show');
    Route::get('/availability', [DoctorController::class, 'availability'])->name('availability');
    Route::get('/consultation', [DoctorController::class, 'consultation'])->name('doctors.consultation');
    Route::get('admin/doctors/consultation', [DoctorController::class, 'consultation'])->name('doctors.consultation');

    Route::get('/consultation', [ConsultationController::class, 'show'])->name('consultation.show');
    Route::get('/consultation', [DoctorController::class, 'consultation'])->name('doctors.consultation');
    Route::get('/doctors', [DoctorController::class, 'showDoctors']);
    Route::get('/doctors', [DoctorController::class, 'index']);


    Route::get('/doctors/consultation/appointments', [AppointmentController::class, 'consultationAppointments'])->name('make_appointments.appointments');


    Route::get('/appointments/create/{doctorId}', [AppointmentController::class, 'create'])->name('appointments.create');
    Route::post('/appointments/book/{doctorId}', [AppointmentController::class, 'book'])->name('appointments.book');
    Route::get('/make_appointments/{appointment}', [AppointmentController::class, 'show'])->name('make_appointments.show');
    Route::get('/appointments/{doctor}', [AppointmentController::class, 'show'])->name(name: 'make_appointments.show');
    Route::get('/appointments', [AppointmentController::class, 'show'])->name('appointments.index');
    // Route::get('/appointments', [ConsultationController::class, 'show'])->name('appointments.show');

    Route::get('/appointments/{appointment}', [AppointmentController::class, 'show'])->name('appointments.show');
    Route::post('/appointments', [AppointmentController::class, 'store'])->name('make_appointments.appointments.index');



    Route::get('/appointments', action: [AppointmentController::class, 'index'])->name(name: 'appointments.index');
    Route::post('/make_appointments', [AppointmentController::class, 'store'])->name('make_appointments.store');

    Route::resource('make_appointments', AppointmentController::class);


    // Displaying profile route
    Route::get('/profile', [ProfileController::class, 'show'])->middleware('auth');

    // Route pour afficher le formulaire d'édition
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');

    // Route pour mettre à jour les informations du profil
    Route::put('/profile/update', [ProfileController::class, 'update'])->name('profile.update');

    // Route pour supprimer le profil
    Route::delete('/profile/delete', [ProfileController::class, 'destroy'])->name('profile.delete');

    //getting doctor appointment and displaying int in the modal
    Route::get('/doctor/{doctorId}/appointments', [DoctorController::class, 'getAppointments'])->name('doctor.appointments');

    // verifying availabilities route
    Route::get('/appointments/check-availability', [AppointmentController::class, 'checkAvailability']);
    // Enregistrer un rendez-vous
    Route::post('/appointments', [AppointmentController::class, 'store'])->name('appointments.store');


});


//================================================================================================================================
//protection d'authentification

Route::middleware('auth')->get('/user', function () {
    return response()->json(auth()->user());
});



//===========================================================================================================================================
// getting doctor hospital locate route

Route::middleware('auth:sanctum')->group(function () {
    // Route pour envoyer un message à un médecin spécifique
    Route::post('/doctors/{id}/send-message', [DoctorController::class, 'sendMessage'])->name('doctors.sendMessage');

    // Route pour récupérer la localisation d'un hôpital d'un médecin
    Route::get('/doctor/{id}/location', [DoctorController::class, 'getHospitalLocation']);

    // Route pour récupérer la conversation d'un utilisateur avec un médecin (chat)
    Route::get('/chat/{receiverId}', [MessageController::class, 'showChat'])->name('chat.show');

    // Routes pour les notifications
    Route::get('/notifications', [NotificationController::class, 'index'])->name('notifications.index');
    Route::get('/notifications/messages', [NotificationController::class, 'getMessages'])->name('notifications.messages');
    Route::get('/notifications/emails', [NotificationController::class, 'getEmails'])->name('notifications.emails');
    Route::post('/notifications/{id}/read', [NotificationController::class, 'markAsRead'])->name('notifications.markAsRead');

    // Routes pour la gestion des messages
    Route::get('/messages', [MessageController::class, 'index']);
    Route::post('/messages', [MessageController::class, 'store']);
    Route::get('/messages/conversation/{userId}', [MessageController::class, 'getConversation']);
});



// Définir un canal privé pour les chats
Broadcast::channel('chat.{receiverId}', function ($user, $receiverId) {
    return (int) $user->id === (int) $receiverId;  // Assurez-vous que seul l'utilisateur concerné peut écouter ce canal
});


// =================================================================================================================

// Admins links, only admins are authorized to visit these pages.

Route::middleware(['auth', 'admin'])->group(function () {

    Route::get('/admin/doctors/create', [DoctorController::class, 'create'])->name('admins.create');
    Route::post('/admin/doctors/store', action: [DoctorController::class, 'store'])->name('admins.store');
    Route::get('/doctors', action: [DoctorController::class, 'index'])->name('admins.index');

    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admins.dashboard');
    Route::get('/admin/doctors/create', [AdminController::class, 'create'])->name('doctors.create');
    Route::post('/admin/doctors', [AdminController::class, 'store'])->name('doctors.store');

    Route::get('/doctors/availability', [DoctorController::class, 'availability'])->name('doctors.availability');


    Route::get('/admins/dashboard', [AdminController::class, 'index'])->name('admins.dashboard');
    Route::get('/admins/dashboard/data', [AdminController::class, 'getData'])->name('admins.dashboard.data');


    Route::get('/admins/dashboard', [AdminController::class, 'dashboard'])->name('admins.dashboard');
    Route::get('/admins/create', [DoctorController::class, 'create'])->name('admins.create');




    Route::get('/admin/doctors/availability', [AvailabilityController::class, 'create'])->name('doctors.availability.create');
    Route::get('{doctor_id}/availability', [AvailabilityController::class, 'index'])->name('doctors.availabilities.index');
    Route::post('{doctor_id}/availability', [AvailabilityController::class, 'store'])->name('doctors.availabilities.store');

    // web.php

    Route::post('/availabilities', [AvailabilityController::class, 'store'])->name('availabilities.store');

    Route::get('auth/register', [LoginController::class, 'create'])->name('auth.register');
    Route::post('/auth/register', [LoginController::class, 'store']);


    // No access to login page or register after being logged in


    // Route::get('/register', [LoginController::class, 'showRegistrationForm'])->name('auth.register');
    Route::post('/register', [LoginController::class, 'store']);
    Route::post('/register', [LoginController::class, 'register'])->name('auth.register');

    //===============================================================================================
    //Logindu Controlleur AthController pour la securite et protection par API
    Route::post('/login', [AuthController::class, 'login'])->name('login.post');



    // profile picture updating
    Route::put('/profile/update-photo', [ProfileController::class, 'updatePhoto'])->name('profile.update.photo');

    // Manage employees route
    Route::get('/manage-employees', [AdminController::class, 'manageEmployees'])->name('admins.manageEmployees');

    // Action routes
    Route::delete('/user/{id}', [AdminController::class, 'deleteUser'])->name('admins.deleteUser');
    Route::delete('/doctor/{id}', [AdminController::class, 'deleteDoctor'])->name('admins.deleteDoctor');
    Route::delete('/appointment/{id}', [AdminController::class, 'deleteAppointment'])->name('admins.deleteAppointment');
    Route::delete('/activity/{id}', [AdminController::class, 'deleteActivity'])->name('admins.deleteActivity');

    // Assign leave
    Route::post('/assign-leave', [AdminController::class, 'assignLeave'])->name('admins.assignLeave');



    // Displaying manage employees page route

    Route::get('/create', [AdminController::class, 'create'])->name('admins.create');
    Route::get('/create-doctor', [AdminController::class, 'createDoctor'])->name('admins.createDoctor');
});

// ========================================================================================================================

// messages routes

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/messages', [MessageController::class, 'index']);
    Route::post('/messages', [MessageController::class, 'store']);
    Route::get('/messages/conversation/{userId}', [MessageController::class, 'getConversation']);
});


// ========================================================================================================================

// Other routes

Route::get('/exist-email', [LoginController::class, 'existEmail'])->name('app_email_exist');
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.post');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
Route::get('/profile', [ProfileController::class, 'showProfile'])->middleware('auth')->name('profile');
Route::get('/register', [LoginController::class, 'showRegistrationForm'])->name('auth.register');



Route::middleware('nocache')->group(function () {
    Route::get('/login', [AuthController::class, 'showLoginForm']);
});

Route::post('/register', [LoginController::class, 'store']);

// =================================================================================================================================================

// Displaying appointments for specific doctor roue
Route::get('/appointments/{doctor}', [AppointmentController::class, 'showDoctorAppointments'])->name('appointments.showDoctor');

// Display appointments page
Route::get('/appointments', [AppointmentController::class, 'index'])->name('make_appointments.appointments.index');

// =================================================================================================================================================


Route::get('/consultation', [ConsultationController::class, 'index']);
Route::get('/appointments/{doctor}', [AppointmentController::class, 'showDoctorAppointments'])->name('appointments.show');
Route::get('/doctor/{doctorId}/appointments', [AppointmentController::class, 'showDoctorAppointments'])->name('appointments.showDoctorAppointments');

// =======================================================================================================================================================


// Displaying form for booking appointment route
Route::get('/appointments/create/{doctorId}', [AppointmentController::class, 'create'])->name('make_appointments.appointments.create');
Route::post('/appointments/store', [AppointmentController::class, 'store'])->name('make_appointments.store');
Route::get('/appointments', action: [AppointmentController::class, 'index'])->name(name: 'appointments.index');
// Route::post('/doctors', [DoctorController::class, 'store'])->name('doctors.store');

// =========================================================================================================================================================


Route::get('/consultation/{doctorId?}', [ConsultationController::class, 'show'])->name('consultation.show');


// ==================================================================================================================================

// Doctor controller routes

Route::resource('doctors', DoctorController::class);
// Route::post('/doctors', [DoctorController::class, 'store'])->name('doctors.store');
Route::get('/admins/create', [DoctorController::class, 'create'])->name('admins.create');
Route::get('/appointments/today', [AppointmentController::class, 'todayAppointments'])->name('admins.appointments_today');

// ========================================================================================================================================


// Admins controller routes

Route::get('/admin/dashboardData', [AdminController::class, 'getDashboardData'])->name('admin.dashboardData');
Route::get('/admin/dashboardData', [AdminController::class, 'getDashboardData'])->name('admins.dashboardData');
Route::get('/admins/appointments_today', [AdminController::class, 'appointments'])->name('admins.appointments_today');
Route::get('/admin/search', [AdminController::class, 'search'])->name('admin.search');
Route::get('/admin/check-notifications', [AdminController::class, 'checkNotifications']);

// ========================================================================================================================================

Route::post('/comment/store', [CommentController::class, 'store'])->name('comments.store');
Route::get('/search', [DoctorController::class, 'search'])->name('search');


// searching doctors based on the query at the home page
Route::get('/search-doctors', [DoctorController::class, 'searchDoctors']);
Route::get('/search/doctors', [DoctorController::class, 'searchDoctors'])->name('searchDoctors');

// ==========================================================================================================================================


Route::middleware([AdminMiddleware::class])->group(function () {
    Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [LoginController::class, 'login'])->name('login.post');

    Route::get('/register', [LoginController::class, 'showRegistrationForm'])->name('register');
    Route::post('/register', [LoginController::class, 'register'])->name('register.post');
});



// =======================================================================================================

// connect wallet redirecting route
Route::get('/payment/enter-phone-number', function () {
    return view('payment.enter_phone_number');
})->name('payment.enter_phone_number');


// Manage popup data sent to the page enter_phone_number
Route::post('/payment/enter-phone-number', function (\Illuminate\Http\Request $request) {

    return view('payment.enter_phone_number', [
        'details' => $request->all()
    ]);
})->name('payment.enter_phone_number');



Route::post('/book-appointment', function (Request $request) {
    // Gérer la réservation ici avec $request->all()

    return redirect()->route('dashboard')->with('success', 'Appointment booked successfully!');
})->name('book_appointment');


Route::get('/payment/enter_phone_number', [AppointmentController::class, 'showConfirmAppointment']);



Route::post('/save-appointment-data', [AppointmentController::class, 'saveAppointmentData']);
Route::get('/enter_phone_number', [AppointmentController::class, 'enterPhoneNumber']);
Route::post('/book_appointment', [AppointmentController::class, 'bookAppointment'])->name('book_appointment');
Route::post('/save-appointment-data', [AppointmentController::class, 'store']);



Route::get('/appointment-form/{doctorId}', [AppointmentController::class, 'showAppointmentForm']);





// ======================================================================================================================


// In routes/web.php
Route::post('/submit-phone-number', [PaymentController::class, 'submitPhoneNumber'])->name('submit-phone-number');
Route::post('/submit-payment-method', [PaymentController::class, 'submitPaymentMethod'])->name('submit-payment-method');


// =============================================================================================================================

Route::get('/fetch-appointments', [AppointmentController::class, 'fetchAppointments']);
