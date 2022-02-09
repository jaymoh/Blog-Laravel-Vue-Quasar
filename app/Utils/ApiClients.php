<?php

namespace App\Utils;

use Illuminate\Support\Facades\Http;

class ApiClients
{
    public static function sq1Client()
    {
        return
            Http::baseUrl(config('services.sq1.base_url'))
                ->withHeaders([
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                ]);
    }
}
