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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sender_id')->constraint('users')->onDelete('cascade');
            $table->foreignId('receiver_id')->constraint('users')->onDelete('cascade');
            $table->text('body');
            $table->timestamp('sent_date');
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};

/*

 'sender_id',
'receiver_id',
'body',
'sent_date',
'status',

*/
