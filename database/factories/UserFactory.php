<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => fake()->first_name(),
            'last_name' => fake()->last_name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'phone' => fake()->phone(),
            'user_birth_date' => fake()->user_birth_date(),
            'user_address' => fake()->user_address(),
            'current_function' => fake()->current_function(),
            'user_gender' => fake()->user_gender(),
            'user_status' => fake()->user_status(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}

/*
  'phone' => ['required', 'string', 'max:15', 'min:10'],
    'user_birth_date' => ['required', 'date'],
    'user_address' => ['require', '|string', 'max:255'],
    'current_function' => ['nullable', 'string', 'max:255'],
    'user_gender' => ['required', 'string', 'max:10'],
    'user_status' => ['required', 'string', 'max:10'],

*/
