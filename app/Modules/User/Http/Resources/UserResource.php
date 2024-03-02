<?php

namespace App\Modules\User\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'full_name' => $this->resource->getAttribute('full_name'),
            'first_name' => $this->resource->getAttribute('first_name'),
            'last_name' => $this->resource->getAttribute('last_name'),
            'email' => $this->resource->getAttribute('email'),
            'code' => $this->resource->getAttribute('code'),
            'group' => $this->resource->getAttribute('group'),
            'is_joining' => $this->resource->getAttribute('is_joining') ? true : false,
            'pending' => $this->resource->getAttribute('pending') ? true : false,
            'created_at' => $this->resource->getAttribute('created_at'),
        ];
    }
}
