<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles,HasApiTokens;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'phone',
        'user_birth_date',
        'user_address',
        'userIdNumber',
        'current_function',
        'user_gender',
        'user_status',
        'photo',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function availabilities()
    {
        return $this->hasManyThrough(Availability::class, Doctor::class, 'user_id', 'doctor_id');
    }

    public function doctor()
    {
        return $this->hasOne(Doctor::class, 'user_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }


    public function hasPaidConsultationFee($doctorId)
    {

        return $this->appointments()
            ->where('doctor_id', $doctorId)
            ->where('consultation_fee_paid', operator: true)
            ->exists();
    }


    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Determine if the user is an admin.
     *
     * @return bool
     */
    /******  65e612e3-0b6d-4cf2-aaf9-ba37d5ef35ac  *******/
    public function isAdmin()
    {
        return $this->hasRole('admin');
    }

    public function isUser()
    {
        return $this->hasRole('user');
    }


    public function leaves()
    {
        return $this->hasMany(Leave::class);
    }

    //================================================================
    //Message



    public function messagesReceived()
    {
        return $this->morphMany(Message::class, 'receiver');
    }

    public function messagesSent()
    {
        return $this->hasMany(Message::class, 'sender_id');
    }
}
