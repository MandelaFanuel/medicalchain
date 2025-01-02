<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{
    // Assurer que l'utilisateur est authentifié pour les méthodes suivantes
    public function __construct()
    {
        $this->middleware('auth:sanctum');  // Utilisation du middleware Sanctum pour l'authentification API
    }

    public function index()
    {
        $userId = auth()->id();

        // Récupérer les conversations de l'utilisateur (les messages envoyés ou reçus)
        $conversations = Message::where(function ($query) use ($userId) {
            $query->where('sender_id', $userId)
                  ->orWhere('receiver_id', $userId);
        })
        ->distinct()
        ->get();

        return response()->json($conversations);
    }

    public function store(Request $request)
    {
        // Validation des données d'entrée
        $validated = $request->validate([
            'receiver_id' => 'required|integer',
            'receiver_type' => 'required|in:User,Doctor',
            'body' => 'required|string',
        ]);

        try {
            // Créer un nouveau message
            $message = new Message();
            $message->sender_id = auth()->id();
            $message->receiver_id = $validated['receiver_id'];
            $message->receiver_type = $validated['receiver_type'];
            $message->body = $validated['body'];
            $message->sent_date = now();
            $message->save();

            return response()->json($message, 201);  // Réponse JSON pour un message créé
        } catch (\Exception $e) {
            Log::error('Error storing message: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to send message. Please try again.'], 500);
        }
    }

    // Récupérer la conversation entre l'utilisateur et le médecin
    public function getConversation($doctorId)
    {
        $userId = auth()->id(); // ID de l'utilisateur actuellement connecté

        // Récupérer les messages entre l'utilisateur et le médecin
        $messages = Message::where(function ($query) use ($userId, $doctorId) {
            $query->where('sender_id', $userId)
                  ->where('receiver_id', $doctorId);
        })
        ->orWhere(function ($query) use ($userId, $doctorId) {
            $query->where('sender_id', $doctorId)
                  ->where('receiver_id', $userId);
        })
        ->orderBy('sent_date')  // Tri par date d'envoi des messages
        ->get();

        return response()->json($messages);  // Retourner les messages sous forme JSON
    }

    // Afficher le chat dans une vue (si besoin pour l'interface frontend)
    public function showChat($receiverId, $receiverType)
    {
        // Obtenir la conversation
        $messages = $this->getConversation($receiverId)->original;

        // Retourner la vue avec les messages
        return view('chat.show', compact('messages', 'receiverId', 'receiverType'));
    }
}
