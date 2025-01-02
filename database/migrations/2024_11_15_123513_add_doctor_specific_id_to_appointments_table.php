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
        Schema::table('appointments', function (Blueprint $table) {
            $table->unsignedBigInteger('doctor_specific_id')->nullable()->after('id');
            $table->unique(['doctor_id', 'doctor_specific_id']); // Assure l'unicité pour chaque docteur
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->dropColumn('doctor_specific_id');
            $table->dropUnique(['doctor_id', 'doctor_specific_id']);
        });
    }
};
