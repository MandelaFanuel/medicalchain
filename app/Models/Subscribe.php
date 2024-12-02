<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscribe extends Model
{
    use HasFactory;

    protected $fillable = [
        'doctor_id',
        'payment_id',
        'payed_amount',
        'start_date',
        'end_date',
        'status',
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    /**
     * Get payment id
     */
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
