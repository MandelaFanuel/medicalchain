<?php
// app/Models/Review.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', // The ID of the Doctor who receive opinions
        'patient_name',
        'rating',
        'comment',
    ];

    //Relation with the User Model
    public function doctor()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
