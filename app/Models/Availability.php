<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Availability extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'doctor_id',
        'available_date',
        'start_time',
        'end_time',
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class, foreignKey: 'doctor_id');
    }

    public function getDayAttribute()
    {
        return Carbon::parse($this->available_date)->format('l');
    }
}
