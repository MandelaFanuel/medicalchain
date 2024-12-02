<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'first_name' => ['required', 'string', 'max:30', 'min:3'],
            'last_name' => ['required', 'string', 'max:30', 'min:3'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),

            ],
            'phone' => ['required', 'string', 'max:15', 'min:10'],
            'user_birth_date' => ['required', 'date'],
            'user_address' => ['required', 'string', 'max:255'], // Correction ici de 'require' à 'required'
            'userIdNumber' => ['required', 'string', 'max:255', Rule::unique(User::class)],
            'current_function' => ['nullable', 'string', 'max:255'],
            'user_gender' => ['required', 'string', 'max:10'],
            'user_status' => ['required', 'string', 'max:10'],
            'photo' => ['required', 'image', 'mimes:jpg,jpeg,png'],
            'password' => $this->passwordRules(),

        ])->validate();




        // Ensuring that every variable is set, contains the value

        $data = [];

        if (!empty($input['first_name'])) {
            $data['first_name'] = $input['first_name'];
        }
        if (!empty($input['last_name'])) {
            $data['last_name'] = $input['last_name'];
        }
        if (!empty($input['email'])) {
            $data['email'] = $input['email'];
        }
        if (!empty($input['phone'])) {
            $data['phone'] = $input['phone'];
        }
        if (!empty($input['user_birth_date'])) {
            $data['user_birth_date'] = $input['user_birth_date'];
        }
        if (!empty($input['user_address'])) {
            $data['user_address'] = $input['user_address'];
        }
        if (!empty($input['userIdNumber'])) {
            $data['userIdNumber'] = $input['userIdNumber'];
        }
        if (!empty($input['current_function'])) {
            $data['current_function'] = $input['current_function'];
        }
        if (!empty($input['user_gender'])) {
            $data['user_gender'] = $input['user_gender'];
        }
        if (!empty($input['user_status'])) {
            $data['user_status'] = $input['user_status'];
        }



        //Add picture if it exists
        if (isset($input['photo']) && $input['photo'] instanceof \Illuminate\Http\UploadedFile) {
            $photoPath = $input['photo']->store('photos', 'public');
        } else {
            throw new \Exception("The file is not valid.");
        }


        //Manage the uploading of the picture

        return User::create([
            'first_name' => $input['first_name'],
            'last_name' => $input['last_name'],
            'email' => $input['email'],
            'phone' => $input['phone'],
            'user_birth_date' => $input['user_birth_date'],
            'user_address' => $input['user_address'],
            'userIdNumber' => $input['userIdNumber'],
            'current_function' => $input['current_function'],
            'user_gender' => $input['user_gender'],
            'user_status' => $input['user_status'],
            'photo' => $photoPath,
            'password' => Hash::make($input['password']),

        ]);
    }
}
