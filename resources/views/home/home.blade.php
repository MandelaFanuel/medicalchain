@extends('base')

@section('title', 'Home')

@section('content')

    <div class="container my-5 text-center">

        <nav class="pb-2 my-3 margin-bottom">
            <h2 class="p-3 styled-title fw-bold primary" style=" font-weigh:800; color:#000055;">Blockchain Integrated!</h2>
        </nav>
        {{-- <hr> --}}
        <div class="row justify-content-center" style="margin-top: -1rem;">
            @if($doctors->isEmpty())
                <p class="text-center">Aucun docteur trouvé pour le moment.</p>
            @else
                @foreach($doctors as $doctor)
                    <div class="mb-4 col-md-6 col-lg-2 d-flex justify-content-center">
                        <div class="" style="width: 10em; margin: 5px;">
                            <div class="image-container d-flex justify-content-center align-items-center">
                                @if($doctor->user->photo)
                                    <img src="{{ asset('storage/' . $doctor->user->photo) }}"
                                         alt=""
                                         class="card-img-top"
                                         style="border-radius: 15px; width: 100%; height: auto; object-fit: cover;">
                                @else
                                    <img src="{{ asset('storage/photos/default-image.jpg') }}"
                                         alt=""
                                         class="card-img-top"
                                         style="border-radius: 15px; width: 100%; height: 80px; object-fit: cover;">
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach
            @endif
        </div>

        <nav class="" style="margin-top: -1rem;">
            <h2 class="styled-title fw-bold" style="color: #000055">Boost Your Carrieer with MedicalChain. <br> Gain Your Time Lost.</h2>
            <p class="styled-text" style=" margin-top: -1rem;">
                Get Patients among millions of them, <a href="#" style="">MedicalChain</a>  makes it easy.<br>
                <a href="{{ route('register') }}" style="">Subscribe</a>  to us and get in touch with them. Book appointments from your home.
            </p>
        </nav>

        <!-- Section des boutons en bas -->
        <div class="mt-3 d-flex justify-content-center">
        <a href="{{ route('app_homeIndex') }}" class="p-2 mx-2 text-white fw-bold" style="background-color: #000055; text-decoration:nene; text-style:none;">Take a Look on It</a>
            <a href="{{ route('login') }}" class="p-2 mx-2 text-white fw-bold" style="background-color: #000055; text-decoration:nene; text-style:none;">Get in Touch</a>
        </div>
    </div>
@endsection





{{-- ============================================================================================================================= --}}
