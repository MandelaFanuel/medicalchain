<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_specific_id')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->nullable()->after('doctor_id');;
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');
            $table->dateTime('appointment_date');
            $table->dateTime('appointment_time');
            $table->string('subject');
            $table->boolean('fee_paid')->default(false);
            $table->string('location')->nullable();
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->dropColumn('user_id');
            $table->dropColumn('doctor_specific_id');
            $table->dropUnique(['doctor_id', 'doctor_specific_id']);
        });
    }
}
