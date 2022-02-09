<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return response()
            ->view('app')
            ->header('Cache-Control', 'no-store, no-cache, must-revalidate');
    }
}
