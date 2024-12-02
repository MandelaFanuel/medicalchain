@extends('admins.admin')


@section('content')


{{-- ===============================Search bar====================================================== --}}

<div class="mb-4 d-flex justify-content-center align-items-center">
    <div class="search-bar">
        <input type="text" id="searchInput" class="form-control" placeholder="Rechercher...">
    </div>
    <div class="notification-icon">
        <i class="fas fa-bell" id="notificationBell"></i>
        <span id="notificationCount" class="badge badge-danger">0</span>
    </div>
</div>

<div id="searchResults"></div>

{{-- ==============================End of Search bar====================================================== --}}


<script>
    $(document).ready(function() {
        $('#searchInput').on('keyup', function() {
            let query = $(this).val();
            if(query.length > 2) {
                $.ajax({
                    url: "{{ route('admin.search') }}",
                    type: "GET",
                    data: { query: query },
                    success: function(response) {
                        let resultsHTML = '<h5>Résultats de recherche :</h5>';
                        resultsHTML += '<ul>';
                        response.users.forEach(user => {
                            resultsHTML += `<li>Utilisateur: ${user.first_name} ${user.last_name} - ${user.email}</li>`;
                        });
                        response.doctors.forEach(doctor => {
                            resultsHTML += `<li>Docteur: ${doctor.domain} à ${doctor.hospital}</li>`;
                        });
                        response.appointments.forEach(appointment => {
                            resultsHTML += `<li>Rendez-vous: ${appointment.status} - Date: ${appointment.date}</li>`;
                        });
                        resultsHTML += '</ul>';
                        $('#searchResults').html(resultsHTML);
                    }
                });
            } else {
                $('#searchResults').html('');
            }
        });

        // Simulation de notifications dynamiques
        setInterval(function() {
            $.ajax({
                url: "/admin/check-notifications",
                type: "GET",
                success: function(count) {
                    if(count > 0) {
                        $('#notificationCount').text(count);
                        $('#notificationBell').addClass('text-danger');
                    }
                }
            });
        }, 5000);
    });
</script>
