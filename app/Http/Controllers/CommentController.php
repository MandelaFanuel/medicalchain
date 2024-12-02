<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    /*************  ✨ Codeium Command 🌟  *************/
    public function store(Request $request)
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    {
        // Vérifiez d'abord si l'utilisateur est connecté
        if (!Auth::check()) {
            return redirect()->route('home')->withErrors(['Vous devez être connecté pour commenter.']);
        }

        // Valider les données du formulaire
        $request->validate([
            // Les champs validés sont :
            // - content (string, max 255 caractères)
            // - doctor_id (ID de la table "doctors")
            'content' => 'required|string|max:255',
            'doctor_id' => 'required|exists:doctors,id',
        ]);

        // Création du commentaire avec l'ID de l'utilisateur connecté
        Comment::create([
            // Le champ "user_id" est automatiquement généré en base de données
            // en utilisant l'ID de l'utilisateur connecté via Auth::id()
            'content' => $request->content,
            'doctor_id' => $request->doctor_id,
            'user_id' => Auth::id(), // Utilisation de Auth::id() pour obtenir l'ID
        ]);

        // Rediriger avec un message de succès
        return redirect()->route('home')->with('success', 'Commentaire publié avec succès !');
    }
    /******  5a852fd0-73d0-41c5-88ad-5e49d3c6aef7  *******/
}
