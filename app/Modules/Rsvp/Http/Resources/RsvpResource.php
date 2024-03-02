<?php

namespace App\Modules\Rsvp\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RsvpResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->resource->id,
            'user_id' => $this->resource->getAttribute('user_id'),
            'is_joining' => $this->resource->getAttribute('is_joining'),
        ];
    }
}
