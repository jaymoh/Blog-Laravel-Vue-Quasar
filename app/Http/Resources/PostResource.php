<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' =>$this->user_id,
            'title' => $this->title,
            'description' => $this->description,
            'publication_date' => Carbon::parse( $this->publication_date)->toDateTimeString(),
            'is_active' => $this->is_active,
            'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            'updated_at' => Carbon::parse($this->updated_at)->toDateTimeString(),
            'relationships' => [
                'user' => new UserResource($this->whenLoaded('user'))
            ]
        ];
    }
}
