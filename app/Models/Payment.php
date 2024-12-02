<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //

    use HasFactory;

    protected $fillable = [
        'user_id',
        'amount',
        'transaction_date',
        'payment_method',
        'status',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get payment id.
     */
    public function subscription()
    {
        return $this->belongsTo(Subscribe::class, 'subscribe_id');
    }
}
