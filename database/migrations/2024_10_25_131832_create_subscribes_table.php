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
        Schema::create('subscribes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constraint('doctors')->onDelete('cascade');
            $table->foreignId('payment_id')->constraint('payments')->onDelete('cascade');
            $table->decimal('payed_amount');
            $table->timestamp('start_date');
            $table->dateTime('end_date');
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscribes');
    }
};
/*

'doctor_id',
'payment_id',
'start_date',
'end_date',
'payed_amount',
'status',
*/
