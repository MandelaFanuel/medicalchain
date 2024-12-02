@extends('base')

@section('title', 'Home')

@section('content')
<div class="container col-md-12">
    <div class="row">
        <!-- Right Section with Scrolling and Responsive Adjustments -->
        <div class="order-2 col-md-3 order-md-2"
             style="overflow-y: auto; max-height: 100vh;
                    padding: 1rem;">
            <div class="scroll-bar-container"
                 style="padding: 1rem;
                        background-color: #f8f9faa7;
                        border-radius: 10px;">
                <h3 class="text-center">Information zone <br> (Coming soon) </h3>
                <p class="text-center text-muted">I'll soon add other informations about doctors or some consils,  statistics, or other importent links.</p>
                <ul>
                    {{-- <li><strong>Conseil :</strong> Ajouter un bouton pour commencer à chercher un docteur.</li> --}}
                    <li><strong>Statistics :</strong> Total appointments reserved to day.</li>
                    <li><strong>Opinions :</strong> I'll soon add patient's opinions related to specific doctors.</li>
                </ul>
            </div>
            @if ($errors->has('message'))
                <div class="p-4 alert alert-danger fw-bold" id="error-message" style="position: absolute; top: 30%; right: 50%; color: red;">
                    {{ $errors->first('message') }}
                </div>
            @endif
        </div>

        <!-- Doctor Images Section, Responsive Scrolling Enabled -->
        <div class="order-1 col-md-9 order-md-1 doctor-section"
             style="overflow-y: auto; max-height: 100vh; padding-top: 100px;"> <!-- Adding padding-top to prevent overlap with search box -->

            <!-- Search Box Section (Fixed Position Above Images) -->
            <div class="p-3 rounded shadow search-box bg-light col-md-7" style="position: fixed; top: 95px; z-index: 1000;  left: 37%; transform: translateX(-50%);">
                <form action="{{ route('search') }}" method="GET" class="d-flex">
                    <input type="text" name="query" class="form-control me-2" placeholder="Search a doctor by its domain">
                    <button type="submit" class="btn btn-primary" style="background-color: #0000ffaf;">Search</button>
                    <div id="suggestions" class="text-center fw-bold" style="position: absolute; width: 100%;border:none; font-size:1rem; background-color: #4646d8;; z-index: 10; border: 1px solid #ddd; border-radius: none;display: none; margin-top: 4rem;color:aliceblue;">
                    </div>
                </form>

                <button id="back-arrow" style="display: none; position: relative; margin-top: 15px; left: 50%; transform: translateX(-50%); background-color: blue; color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 1.5rem; text-align: center;">
                    &#x21A9; <!-- Unicode for the left arrow icon -->
                </button>
            </div>

            {{-- background image --}}
            <div class="home_display_images">

                <div class="background_images image1"></div>
                <div class="background_images image2"></div>

            </div>

            {{-- <h2 class="mb-4 text-center">Stay Healthy with MedicalChain</h2> --}}
            <div class="row">
                @foreach ($doctors as $doctor)
                    <div class="mb-4 col-md-6 col-sm-6"> <!-- 2 images per row on larger screens, 1 per row on small screens -->
                        <div class="shadow-sm card">
                            <div class="card-body">
                                <div class="mb-3 img-container" style="border-radius: 10px; overflow: hidden;">
                                    <img src="{{ asset('storage/' . $doctor->user->photo) }}" alt="Photo de {{ $doctor->user->first_name }}" class="img-fluid" style="object-fit: cover; border-radius: 10px;">
                                </div>
                                <div style="height:40px;">
                                    <h5 class="text-center card-title" style="font-size: 1rem;">{{ $doctor->user->first_name }} {{ $doctor->user->last_name }}</h5>
                                    <p class="text-center fw-bold" style="color: #0000ffaf;">{{ $doctor->domain }}</p>
                                </div>

                                <!-- Availability Section -->
                                <div class="availability-section">
                                    <h4 style="font-size: 0.7rem;">Availabilities :</h4>
                                    <div class="row availability-table" style="height:25px;">
                                        <div style="font-size: 0.7rem;" class="col-3"><strong>Day</strong></div>
                                        <div style="font-size: 0.7rem;" class="col-3"><strong>Date</strong></div>
                                        <div style="font-size: 0.7rem;" class="col-3"><strong>Hour</strong></div>
                                        <div style="font-size: 0.7rem;" class="col-3"><strong>Patients</strong></div>

                                        @foreach ($doctor->availabilities as $availability)
                                            <div style="font-size: 0.7rem;" class="col-3">{{ $availability->available_date }}</div>
                                            <div style="font-size: 0.7rem;" class="col-3">{{ $availability->available_date }}</div>
                                            <div style="font-size: 0.7rem;" class="col-3">{{ $availability->start_time }}</div>
                                            <div style="font-size: 0.7rem;" class="col-3"><i class="bi bi-person-fill"></i> {{ $doctor->appointments->count() }}</div>
                                        @endforeach
                                    </div>
                                </div>

                                <!-- Interaction Section -->
                                <div class="interaction-section">
                                    <div class="icon-group d-flex justify-content-between align-items-center">
                                        <!-- Bouton J’aime -->
                                        <span class="icon" style="display: flex; align-items: center;" style="font-size: 0.77rem;">
                                            <i class="bi bi-hand-thumbs-up" style="margin-right: 5px;"></i> Like
                                        </span>

                                        <!-- Bouton Je n’aime pas -->
                                        <span class="icon" style="display: flex; align-items: center;" style="font-size: 0.77rem;">
                                            <i class="bi bi-hand-thumbs-down" style="margin-right: 5px;"></i> Unlike
                                        </span>

                                        <!-- Bouton Commenter -->
                                        <span class="icon" style="display: flex; align-items: center;" style="font-size: 0.77rem;">
                                            <i class="bi bi-chat-dots" style="margin-right: 5px;"></i> Comment
                                        </span>

                                        <!-- Bouton Partager -->
                                        <div class="share-button-container">
                                            <span class="icon" style="display: flex; align-items: center;" style="font-size: 0.77rem;">
                                                <i class="bi bi-share" style="margin-right: 5px;"></i> Share
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>

<script>

    // ==========================================================================================================================


    // Listen for the input event on the search box
    document.querySelector('input[name="query"]').addEventListener('input', function() {
        let query = this.value;

        // If the input is empty, clear the suggestions and hide them
        if (!query) {
            document.getElementById('suggestions').style.display = 'none';
            return;
        }

        // Send AJAX request to the server
        fetch('{{ route("searchDoctors") }}?query=' + query)
            .then(response => response.json())
            .then(data => {
                let suggestionsContainer = document.getElementById('suggestions');
                suggestionsContainer.innerHTML = ''; // Clear previous suggestions

                if (data.length === 0) {
                    suggestionsContainer.innerHTML = '<p style="color:red;margin-top:40px;border-radius:15px;">No items found !</p>';
                } else {
                    data.forEach(doctor => {
                        let suggestionItem = document.createElement('div');
                        suggestionItem.innerHTML = `${doctor.user.first_name} ${doctor.user.last_name} - ${doctor.domain}`;
                        suggestionItem.classList.add('suggestion-item');

                        // Add click event to populate the input field
                        suggestionItem.addEventListener('click', function() {
                            document.querySelector('input[name="query"]').value = doctor.domain;
                            suggestionsContainer.style.display = 'none'; // Hide suggestions after selection
                        });

                        suggestionsContainer.appendChild(suggestionItem);
                    });
                }
                suggestionsContainer.style.display = 'block'; // Show suggestions
            })
            .catch(error => console.error('Error fetching suggestions:', error));
    });

    // Hide suggestions if the user clicks anywhere outside the search box or suggestions
    document.addEventListener('click', function(event) {
        let suggestions = document.getElementById('suggestions');
        let searchBox = document.querySelector('.search-box');

        // If the click is outside the search box and suggestions container, hide suggestions
        if (!searchBox.contains(event.target) && !suggestions.contains(event.target)) {
            suggestions.style.display = 'none';
        }
    });



        // ===============================================================================================================================
        // Disparaît automatiquement après 8 secondes
        setTimeout(function() {
            var message = document.getElementById('error-message');
            if (message) {
                message.style.display = 'none';
            }
        }, 8000); // 8000 millisecondes = 8 secondes

    </script>
@endsection




{{--


@extends('base')

@section('title', 'Home')

@section('content')
<div class="container">
    <div class="row">
        <!-- Right Section with Scrolling and Responsive Adjustments -->
        <div class="order-2 col-md-3 order-md-2"
             style="overflow-y: auto; max-height: 100vh;
                    padding: 1rem;">
            <div class="scroll-bar-container"
                 style="padding: 1rem;
                        background-color: #f8f9faa7;
                        border-radius: 10px;">
                <h3 class="text-center">Titre de la zone vide</h3>
                <p class="text-center text-muted">Ici, tu peux ajouter des informations supplémentaires comme des conseils, des statistiques, ou des liens utiles.</p>
                <ul>
                    <li><strong>Conseil :</strong> Ajouter un bouton pour commencer à chercher un docteur.</li>
                    <li><strong>Statistiques :</strong> Nombre de rendez-vous réservés aujourd'hui.</li>
                    <li><strong>Avis :</strong> Ajouter des avis de patients pour chaque docteur.</li>
                </ul>
            </div>
            @if ($errors->has('message'))
                <div class="p-4 alert alert-danger fw-bold" id="error-message" style="position: absolute; top: 30%; right: 50%; color: red;">
                    {{ $errors->first('message') }}
                </div>
            @endif
        </div>

        <!-- Doctor Images Section, Responsive Scrolling Enabled -->
        <div class="order-1 col-md-9 order-md-1 doctor-section"
             style="overflow-y: auto; max-height: 100vh; padding-top: 100px;">

            <!-- Search Box Section (Fixed Position Above Images) -->
            <div class="p-3 rounded shadow search-box bg-light col-md-7" style="position: fixed; top: 95px; z-index: 1000;  left: 37%; transform: translateX(-50%);">
                <form action="{{ route('search') }}" method="GET" class="d-flex">
                    <input type="text" name="query" class="form-control me-2" placeholder="Rechercher un docteur par spécialité">
                    <button type="submit" class="btn btn-primary">Rechercher</button>
                    <div id="suggestions" class="text-center fw-bold" style="position: absolute; width: 80%; max-width: 600px; font-size:1rem; background-color: #f0f0f077;; z-index: 10; border: 1px solid #ddd; border-radius: 15px;display: none;">
                    </div>
                </form>

                <button id="back-arrow" style="display: none; position: relative; margin-top: 15px; left: 50%; transform: translateX(-50%); background-color: blue; color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 1.5rem; text-align: center;">
                    &#x21A9; <!-- Unicode for the left arrow icon -->
                </button>
            </div>

            <div class="row" id="doctor-list">
                @foreach ($doctors as $doctor)
                    <div class="mb-4 col-md-6 col-sm-6">
                        <div class="shadow-sm card">
                            <div class="card-body">
                                <div class="mb-3 img-container" style="border-radius: 10px; overflow: hidden;">
                                    <img src="{{ asset('storage/' . $doctor->user->photo) }}" alt="Photo de {{ $doctor->user->first_name }}" class="img-fluid" style="object-fit: cover; border-radius: 10px;">
                                </div>
                                <div style="height:40px;">
                                    <h5 class="text-center card-title" style="font-size: 1rem;">{{ $doctor->user->first_name }} {{ $doctor->user->last_name }}</h5>
                                    <p class="text-center fw-bold" style="color: #0000ffaf;">{{ $doctor->domain }}</p>
                                </div>

                                <div class="availability-section">
                                    <h4 style="font-size: 0.7rem;">Disponibilité :</h4>
                                    <div class="row availability-table" style="height:25px;">
                                        <div style="font-size: 0.7rem;" class="col-3"><strong>Jour</strong></div>
                                        <div style="font-size: 0.7rem;" class="col-3"><strong>Date</strong></div>
                                        <div style="font-size: 0.7rem;" class="col-3"><strong>Heure</strong></div>
                                        <div style="font-size: 0.7rem;" class="col-3"><strong>Patients</strong></div>

                                        @foreach ($doctor->availabilities as $availability)
                                            <div style="font-size: 0.7rem;" class="col-3">{{ $availability->available_date }}</div>
                                            <div style="font-size: 0.7rem;" class="col-3">{{ $availability->available_date }}</div>
                                            <div style="font-size: 0.7rem;" class="col-3">{{ $availability->start_time }}</div>
                                            <div style="font-size: 0.7rem;" class="col-3"><i class="bi bi-person-fill"></i> {{ $doctor->appointments->count() }}</div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>

<script>
    // ==========================================================================================================================

    // Capture form submission for searching doctors
    document.querySelector('.search-box form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const query = document.querySelector('input[name="query"]').value;

        // Fetch the search results
        fetch('{{ route("search") }}?query=' + query)
            .then(response => response.text())
            .then(html => {
                // Replace the doctor list with the search results
                document.getElementById('doctor-list').innerHTML = html;

                // Display the back button at the bottom of the results
                document.getElementById('back-arrow').style.display = 'block';
            })
            .catch(error => console.error('Error searching doctors:', error));
    });

    // Back arrow button functionality to return to the original doctor list
    document.getElementById('back-arrow').addEventListener('click', function() {
        this.style.display = 'none'; // Hide the back button

        // Fetch the full list of doctors
        fetch('{{ route("doctors.index") }}')
            .then(response => response.text())
            .then(html => {
                // Replace the content with the original doctor list
                document.getElementById('doctor-list').innerHTML = html;
            })
            .catch(error => console.error('Error loading doctors:', error));
    });
</script>
@endsection







--}}
