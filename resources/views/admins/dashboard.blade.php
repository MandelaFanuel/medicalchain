@include('script')

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css">
  <!-- Ajouter Select2 CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />

<!-- Ajouter Font Awesome pour les icônes -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />

<!-- Ajouter jQuery (si nécessaire, car Select2 dépend de jQuery) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- Ajouter Select2 JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>



</head>

<style>
    .sidebar {
        background-color: #f8f9fa;
        padding-top: 20px;
        height: 100vh;
    }

    .info-card {
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    .info-card:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    .profile-pic {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    .text-primary {
        color: #007bff !important;
    }

    .text-secondary {
        color: #6c757d !important;
    }

    .text-success {
        color: #28a745 !important;
    }

    .text-warning {
        color: #ffc107 !important;
    }
</style>

<body>

    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <div class="py-4 col-md-3 col-lg-2 sidebar bg-light">
                <div class="mb-4 text-left">
                    <h3 class="fw-bold text-muted">Admins</h4>
                </div>

                <div class="dropdown d-flex align-items-center">
                    <!-- Profile Picture -->
                    <img src="{{ asset('storage/' . Auth::user()->photo) }}" alt="Profile Picture" class="mb-4 profile-pic me-2" data-bs-toggle="dropdown" aria-expanded="false"><br>

                    <!-- Name and Dropdown -->
                    <a class="mb-4 dropdown-toggle text-dark fw-bold" href="#" role="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false" style="text-decoration:none;">
                        {{-- Dr. {{ Auth::user()->first_name }}! --}}
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                        <li class="dropdown-item fw-bold" ><strong>Name :</strong> Dr. {{ Auth::user()->first_name }}  {{ Auth::user()->last_name }}</li>
                        <li class="dropdown-item"><strong>User ID:</strong> {{ Auth::user()->userIdNumber }}</li>
                        <li class="dropdown-item"><strong>Phone:</strong> {{ Auth::user()->phone }}</li>
                        <li class="dropdown-item"><strong>Function:</strong> {{ Auth::user()->current_function }}</li>
                        <li class="dropdown-item"><strong>Address:</strong> {{ Auth::user()->user_address }}</li>
                        <li class="dropdown-item"><strong>Birth Date:</strong> {{ Auth::user()->user_birth_date }}</li>
                        <li class="dropdown-item"><strong>Status:</strong> {{ Auth::user()->user_status }}</li>
                        <li><hr class="dropdown-divider"></li>

                        <!-- Edit Button -->
                        <li class="mb-2 text-center">
                            <a href="{{ route('profile.edit') }}" class="btn btn-sm btn-outline fw-bold" style="text-decoration: none; color:blue; border:solid 1px #0000ffaf;">Edit Profile</a>
                        </li>

                        <li><hr class="dropdown-divider"></li>

                        <!-- Logout Button -->
                        <li class="text-center">
                            <a href="#" class="dropdown-item text-danger fw-bold" style="text-decoration: none;" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                    </ul>
                </div>

                <ul class="navbar-nav flex-column">
                    <li class="mb-2 nav-item">
                        <a href="{{ route('doctors.consultation') }}" class="nav-link">
                            <i class="bi bi-person-lines-fill"></i> Consultation
                        </a>
                    </li>
                    <li class="mb-2 nav-item">
                        <a href="{{ route('admins.create') }}" class="nav-link">
                            <i class="bi bi-plus-circle-fill"></i> Add Doctor
                        </a>
                    </li>
                    <li class="mb-2 nav-item">
                        <a href="{{ route('doctors.availability.create') }}" class="nav-link">
                            <i class="bi bi-clock-fill"></i> Availability
                        </a>
                    </li>
                    <li class="mb-2 nav-item">
                        <a href="{{ route('admins.appointments_today') }}" class="nav-link">
                            <i class="bi bi-calendar-check-fill"></i> Appointments
                        </a>
                    </li>
                    <li class="mb-2 nav-item">
                        <a href="{{ route('auth.register') }}" class="nav-link">
                            <i class="bi bi-person-plus-fill"></i> Add New User
                        </a>
                    </li>
                    <!-- Actions Dropdown -->
                    <div class="mt-4 mb-5 col-md-8">
                        <label for="actions" class="form-label text-primary">Actions</label>
                        <select id="actions" class="form-select" aria-label="Actions">
                            <option value="" selected disabled>Action</option>
                            <option value="delete-user" data-icon="fas fa-trash-alt">Delete User</option>
                            <option value="delete-doctor" data-icon="fas fa-user-md">Delete Doctor</option>
                            <option value="delete-appointment" data-icon="fas fa-calendar-times">Delete Appointment</option>
                            <option value="delete-activity" data-icon="fas fa-clipboard-list">Delete Activity</option>
                            <option value="add-user" data-icon="fas fa-user-plus">Add User</option>
                            <option value="edit-user" data-icon="fas fa-edit">Edit User</option>
                            <option value="assign-leave" data-icon="fas fa-calendar-day">Assign</option>
                            <option value="manage-employees" data-icon="fas fa-users">Manage</option>
                        </select>
                    </div>
                </ul>
            </div>

            <!-- Main Content -->
            <div class="col-md-9 main-content">
                <div class="mt-4 mb-5 d-flex justify-content-center align-items-center" >
                    <!-- Centered Search Bar -->
                    <form class="d-flex w-100 justify-content-center" role="search">
                        @csrf
                        <input class="form-control" type="search" placeholder="Search..." aria-label="Search" style="width: 60%;">
                    </form>
                </div>

                <!-- Info Cards -->
                <div class="row">
                    <div class="mb-4 col-md-3">
                        <div class="text-center shadow-sm card info-card">
                            <div class="card-body">
                                <h6>Registered Users</h6>
                                <h3 class="text-primary">{{ $userCount }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4 col-md-3">
                        <div class="text-center shadow-sm card info-card">
                            <div class="card-body">
                                <h6>Subscribed Doctors</h6>
                                <h3 class="text-secondary">{{ $doctorCount }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4 col-md-3">
                        <div class="text-center shadow-sm card info-card">
                            <div class="card-body">
                                <h6>Current Appointments</h6>
                                <h3 class="text-success">{{ $appointmentCount }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4 col-md-3">
                        <div class="text-center shadow-sm card info-card">
                            <div class="card-body">
                                <h6>Daily Revenue</h6>
                                {{-- <h3 class="text-warning">${{ number_format($dailyRevenue, 2) }}</h3> --}}
                            </div>
                        </div>
                    </div>

                    {{-- <div class="mb-4 col-md-3">
                        <div class="text-center shadow-sm card info-card">
                            <div class="card-body">
                                <h6>Monthly Revenue</h6>
                                <h3 class="text-warning">${{ number_format($monthlyRevenue, 2) }}</h3>
                            </div>
                        </div>
                    </div> --}}
                </div>

                <!-- Revenue and Statistics Graph -->
                <div class="row">
                    <div class="mb-4 col-md-6">
                        <div class="shadow-sm card">
                            <div class="card-body">
                                <h5>Progress Statistics</h5>
                                <canvas id="progressChart" height="100"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- Recent Activities Section -->
                    <div class="mb-4 col-md-6">
                        <div class="shadow-sm card">
                            <div class="card-body">
                                <h5>Recent Activities</h5>
                                <ul class="list-group">
                                    @foreach($recentActivities as $activity)
                                        <li class="list-group-item">{{ $activity }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const ctx = document.getElementById('progressChart').getContext('2d');

            // Statistic data from the server
            const progressData = @json($progressData);

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: progressData.labels || [],
                    datasets: [{
                        label: 'Monthly Revenue',
                        data: progressData.values || [],
                        backgroundColor: '#2196F3',
                        borderColor: '#1976D2',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value;
                                }
                            }
                        }
                    }
                }
            });
        });

        // icons

        $(document).ready(function() {

        $('#actions').select2({
            templateResult: function (state) {
                if (!state.id) {
                    return state.text;
                }
                var $state = $('<span><i class="' + $(state.element).data('icon') + '"></i> ' + state.text + '</span>');
                return $state;
            }
        });
    });
    </script>
@include('footer')
</body>

</html>

