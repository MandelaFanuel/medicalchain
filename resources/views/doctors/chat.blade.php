
@extends('base')

@section('title', 'Consultation')

@section('content')

<div class="container mt-4">
    <h2>Chat avec Dr. {{ $doctor->first_name }} {{ $doctor->last_name }}</h2>

    <div class="chat-window">
        <!-- Ici, vous pouvez intégrer une logique de chat ou une API, ou juste afficher un message simple -->
        <p>Bienvenue dans le chat. Posez vos questions à {{ $doctor->first_name }}.</p>

        <!-- Vous pouvez ajouter ici un formulaire pour envoyer un message -->
        <form action="{{ route('chat.send', $doctor->id) }}" method="POST">
            @csrf
            <div class="form-group">
                <textarea name="message" class="form-control" rows="3" placeholder="Votre message..."></textarea>
            </div>
            <button type="submit" class="mt-2 btn btn-primary">Envoyer</button>
        </form>
    </div>
</div>
@endsection
