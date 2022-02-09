<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'publication_date'
    ];

    const availableRelations = [
        'user'
    ];

    protected $casts = [
       // 'publication_date' => 'datetime',
        'is_active' => 'boolean'
    ];

    /**
     * A post belongs to a user
     *
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
