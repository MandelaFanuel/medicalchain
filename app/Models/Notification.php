<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'message',
        'type',      // 'message' ou 'email'
        'is_read',
        'sender_id', // ID de l'utilisateur qui a envoyé le message/email
        'data',      // Pour stocker des données supplémentaires en JSON si nécessaire
    ];

    protected $casts = [
        'is_read' => 'boolean',
        'data' => 'array'
    ];

    // Relation avec l'utilisateur qui reçoit la notification
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relation avec l'utilisateur qui envoie la notification
    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    // Scope pour les notifications non lues
    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }

    // Scope pour les messages
    public function scopeMessages($query)
    {
        return $query->where('type', 'message');
    }

    // Scope pour les emails
    public function scopeEmails($query)
    {
        return $query->where('type', 'email');
    }

    // Marquer comme lu
    public function markAsRead()
    {
        $this->update(['is_read' => true]);
    }

    // Vérifier si c'est un message
    public function isMessage()
    {
        return $this->type === 'message';
    }

    // Vérifier si c'est un email
    public function isEmail()
    {
        return $this->type === 'email';
    }
}
