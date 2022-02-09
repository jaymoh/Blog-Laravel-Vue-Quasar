<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OClient extends Model
{
    use HasFactory;
    protected $table = 'oauth_clients';
}
