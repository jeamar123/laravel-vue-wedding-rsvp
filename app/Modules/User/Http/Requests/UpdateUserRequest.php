<?php

namespace App\Modules\User\Http\Requests;

use App\Modules\User\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'username' => ['sometimes', 'string', 'max:255'],
            'image' => ['nullable'],
            'role' => ['somtimes'],
            'email' => ['nullable', 'email', Rule::unique(User::class, 'email')->ignore($this->user)],
            'login_type' => ['nullable'],
            'status' => ['nullable'],
        ];
    }
}
