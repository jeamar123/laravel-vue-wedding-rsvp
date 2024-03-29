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
            $table->uuid('id')->primary();
            $table->string('full_name');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('code')->nullable();
            $table->string('group')->nullable();
            $table->boolean('pending')->default(1);
            $table->boolean('is_joining')->default(0);
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->string('role')->index();
            $table->string('login_type')->default('guest');
            $table->string('status')->default('active');
            $table->string('last_login')->nullable();
            $table->string('last_location')->nullable();
            $table->string('image')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
