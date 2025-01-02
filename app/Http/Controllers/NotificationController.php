<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    // Afficher toutes les notifications
    public function index()
    {
        $notifications = auth()->user()->notifications()
            ->orderBy('created_at', 'desc')
            ->get();

        return view('notifications.index', compact('notifications'));
    }

    // Afficher uniquement les messages
    public function getMessages()
    {
        $notifications = auth()->user()->notifications()
            ->messages()
            ->unread()
            ->orderBy('created_at', 'desc')
            ->get();

        return view('notifications.messages', compact('notifications'));
    }

    // Afficher uniquement les emails
    public function getEmails()
    {
        $notifications = auth()->user()->notifications()
            ->emails()
            ->unread()
            ->orderBy('created_at', 'desc')
            ->get();

        return view('notifications.emails', compact('notifications'));
    }

    // Marquer une notification comme lue
    public function markAsRead($id)
    {
        $notification = Notification::findOrFail($id);
        $notification->markAsRead();

        return redirect()->back()->with('success', 'Notification marked as read.');
    }
}
