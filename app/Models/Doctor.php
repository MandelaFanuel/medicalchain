<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'domain',
        'experience_years',
        'hospital',
        'doctor_description',
        'amount',
        'diploma',
        'latitude',
        'longitude',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function availabilities()
    {
        return $this->hasMany(Availability::class, 'doctor_id');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'doctor_id');
    }


    public function leaves()
    {
        return $this->hasMany(Leave::class);
    }


    public function appointmentCount()
    {
        return $this->appointments()->count();
    }

    // Calcul du nombre de rendez-vous (eager loading)
    public function scopeWithAppointmentCount($query)
    {
        return $query->withCount('appointments');
    }

    //================================================================================================
    //Messages

    public function messagesReceived()
    {
        return $this->morphMany(Message::class, 'receiver');
    }

    public function messagesSent()
    {
        return $this->hasMany(Message::class, 'sender_id');
    }
}
