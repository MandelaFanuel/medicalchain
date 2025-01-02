<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container">
        <!-- Logo et titre de l'application -->
        <a class="navbar-brand @if(Request::route()->getName() == 'app_about') active @endif" href="{{ route('app_home') }}" style="text-decoration:none;">
            <span class="navbar-title fw-bold" style="border: 2px solid #000055; color: #000055; padding: 10px; display: inline-block; border-radius: 5px;">
                {{ config('app.name') }} - @yield('title')
            </span>
        </a>

        <!-- Bouton toggle pour le menu mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu principal -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="mb-2 navbar-nav me-auto mb-lg-0">
                <!-- Lien Home -->
                <li class="nav-item fw-bold" style="list-style:none;">
                    <a class="nav-link @if(Request::route()->getName() == 'app_home') active @endif" href="{{ route('app_home') }}" style="text-decoration: none;">Home</a>
                </li>

                <!-- Liens pour les utilisateurs authentifiés -->
                @auth
                    <li class="nav-item fw-bold" style="list-style:none;">
                        <a class="nav-link" href="{{ route('appointments.index') }}" style="text-decoration: none;">Appointments</a>
                    </li>
                    <li class="nav-item fw-bold" style="list-style:none;">
                        <a class="nav-link" href="{{ route('doctors.consultation') }}" style="text-decoration: none;">Consultation</a>
                    </li>

                    <!-- Lien pour l'administrateur uniquement -->
                    @if(auth()->user()->role === 'admin')
                        <li class="nav-item fw-bold" style="list-style:none;">
                            <a class="nav-link" href="{{ route('admins.dashboard') }}" style="text-decoration: none;">Admin-Dashboard</a>
                        </li>
                    @endif
                @endauth

                <!-- Liens About et Contact -->
                <li class="nav-item fw-bold" style="list-style:none;">
                    <a class="nav-link @if(Request::route()->getName() == 'app_about') active @endif" href="{{ route('app_about') }}" style="text-decoration: none;">About</a>
                </li>
                <li class="nav-item fw-bold" style="list-style:none;">
                    <a class="nav-link @if(Request::route()->getName() == 'app_contact') active @endif" href="{{ route('app_contact') }}" style="text-decoration: none;">Contact</a>
                </li>
            </ul>

            <!-- Menu de droite : gestion du compte -->
            <div class="btn-group">
                @guest
                    <!-- Si l'utilisateur n'est pas authentifié -->
                    <button type="button" class="btn btn-light fw-bold">My Account</button>
                    <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item fw-bold" href="{{ route('login') }}" style="text-decoration: none;">Login</a></li>
                        <li><a class="dropdown-item fw-bold" href="{{ route('register') }}" style="text-decoration: none;">Register</a></li>
                    </ul>
                @endguest

                @auth
                    <!-- Si l'utilisateur est authentifié -->
                    <li class="nav-item dropdown" style="list-style: none;">
                        <a class="btn btn-light fw-bold dropdown-toggle" href="#" id="navbarDropdown" style="text-decoration: none;" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ Auth::user()->first_name }} {{ Auth::user()->last_name }}
                        </a>
                        <ul class="mt-4 shadow-sm dropdown-menu dropdown-menu-end" style="width: 18rem;" aria-labelledby="navbarDropdown">
                            <!-- Photo et informations utilisateur -->
                            <li class="p-3" style="list-style:none;">
                                <img src="{{ Auth::user()->photo ? asset('storage/' . Auth::user()->photo) : asset('default-avatar.png') }}"
                                     alt="Profile Picture"
                                     class="rounded-circle"
                                     style="width: 80px; height: 80px; margin-bottom: 1rem;">
                                <p class="text-muted small"> <strong>ID Card:</strong>  {{ Auth::user()->userIdNumber }}</p>
                                <p class="text-muted small"> <strong>Phone:</strong>  {{ Auth::user()->phone }}</p>
                                <p class="text-muted small"> <strong>Address:</strong>  {{ Auth::user()->user_address }}</p>
                                <p class="text-muted small"> <strong>Birth Date:</strong>  {{ Auth::user()->user_birth_date ? \Carbon\Carbon::parse(Auth::user()->user_birth_date)->format('d M, Y') : '' }}</p>
                                <p class="text-muted small"> <strong>Function:</strong>  {{ Auth::user()->current_function }}</p>
                                <p class="text-muted small"> <strong>Status:</strong>  {{ Auth::user()->user_status }}</p>
                                <p class="text-muted small"> <strong>Email:</strong>  {{ Auth::user()->email }}</p>

                                <p class="text-muted small fw-bold">
                                    <a class="nav-link" href="{{ route('notifications.index') }}" >
                                        Notifications
                                        @if(auth()->user()->notifications()->unread()->count() > 0)
                                            <span class="badge bg-danger">
                                                {{ auth()->user()->notifications()->unread()->count() }}
                                            </span>
                                        @endif
                                    </a>
                                </p>
                                <p class="text-muted small">
                                    <strong>Consultation Fee:</strong>
                                    <span class="{{ Auth::user()->consultation_fee_paid === 'paid' ? 'text-success' : 'text-danger' }}">
                                        {{ Auth::user()->consultation_fee_paid === 'paid' ? 'Paid' : 'Not Paid' }}
                                    </span>
                                </p>
                            </li>

                            <hr class="dropdown-divider">

                            <!-- Boutons Edit et Logout -->
                            <li class="mb-2 text-center" style="list-style:none;">
                                <a href="{{ route('profile.edit') }}" class="btn btn-sm btn-outline fw-bold" style="text-decoration: none; color:blue;border:solid 1px #0000ffaf;">Edit Profile</a>
                            </li>
                            <li class="text-center" style="list-style: none;">
                                <a href="#" class="dropdown-item text-danger fw-bold" style="text-decoration: none;" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </li>
                        </ul>
                    </li>
                @endauth
            </div>
        </div>
    </div>
</nav>
