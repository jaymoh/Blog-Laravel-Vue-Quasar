<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Log;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $userIds = User::all()->pluck('id')->toArray();

        $publicationDates = [
            Carbon::now()->subDays(2)->toDateTimeString(),
            Carbon::now()->subDays(1)->toDateTimeString(),
            Carbon::now()->toDateTimeString(),
            Carbon::now()->addDays(1)->toDateTimeString(),
            Carbon::now()->addDays(2)->toDateTimeString(),
        ];

        return [
            'user_id' => $userIds[array_rand($userIds, 1)],
            'title' => $this->faker->sentence(5),
            'description' => $this->faker->paragraphs(3, true),
            'publication_date' => $publicationDates[array_rand($publicationDates, 1)]
        ];
    }
}
