<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constraint('users')->onDelete('cascade');
            $table->decimal('amount');
            $table->string('payment_method');
            $table->timestamp('transaction_date');
            $table->string('status')->default('completed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};

/*

   'user_id',
        'amount',
        'transaction_date',
        'payment_method',
        'status',
*/
