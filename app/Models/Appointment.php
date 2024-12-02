<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'user_id',
        'doctor_id',
        'appointment_date',
        'subject',
        'fee-paid',
        'location',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function doctor()
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }


    protected static function boot()
    {
        parent::boot();

        static::creating(function ($appointment) {

            $lastSpecificId = Appointment::where('doctor_id', $appointment->doctor_id)
                ->max('doctor_specific_id');

            $appointment->doctor_specific_id = $lastSpecificId ? $lastSpecificId + 1 : 1;
        });
    }


    public static function appointmentCount()
    {
        return self::count();
    }
}
