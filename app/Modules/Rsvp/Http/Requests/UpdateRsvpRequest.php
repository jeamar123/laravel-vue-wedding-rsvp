<?php

namespace App\Modules\Rsvp\Http\Requests;

use App\Modules\User\Models\Rsvp;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRsvpRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'is_joining' => ['required', 'boolean'],
        ];
    }
}
