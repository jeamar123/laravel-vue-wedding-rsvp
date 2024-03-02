<?php

namespace App\Modules\Admin\Http\Requests;

use App\Modules\User\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LoginAdminRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
      return [
        'username' => ['required'],
        'password' => ['required'],
        'remember' => ['sometimes'],
      ];
    }
}
