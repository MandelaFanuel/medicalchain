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
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->string('is_read');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();

            $table->morphs('notifiable');

            if (!Schema::hasColumn('notifications', 'type')) {
                $table->string('type')->default('message');
            }
            if (!Schema::hasColumn('notifications', 'sender_id')) {
                $table->foreignId('sender_id')->nullable()->constrained('users')->onDelete('set null');
            }
            if (!Schema::hasColumn('notifications', 'data')) {
                $table->json('data')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
/*

 'user_id',
'title',
'message',
'is_read',
*/
