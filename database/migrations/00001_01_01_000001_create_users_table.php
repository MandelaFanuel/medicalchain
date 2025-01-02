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
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // unsigned bigint
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone');
            $table->date('user_birth_date');
            $table->string('user_address');
            $table->string('userIdNumber');
            $table->string('current_function');
            $table->enum('user_gender', ['Female', 'Male', 'Other'])->nullable();
            $table->enum('user_status', ['Married', 'Single', 'Divorced', 'separated'])->nullable();
            $table->string('photo');
            $table->boolean('consultation_fee_paid')->default(false);
            $table->string('role')->default('user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('consultation_fee_paid');
        });
    }
};
