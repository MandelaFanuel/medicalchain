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
        Schema::create('blockchain_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constraint('users')->onDelete('cascade');
            $table->string('transaction_hash')->unique();
            $table->decimal('amount');
            $table->timestamp('transaction_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blockchain_transactions');
    }
};


/*

'user_id',
'transaction_hash',
'amount',
'transaction_date',

*/
