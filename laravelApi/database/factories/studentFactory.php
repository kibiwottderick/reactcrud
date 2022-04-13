<?php

namespace Database\Factories;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\student>
 */
class studentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        DB::table('students')->truncate();
        return [
            //
            'name' => $this->faker->name(),
            'course' => $this->faker->word(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => '0'.$this->faker->numberBetween(111291338, 199999999),
        ];
    }
}
