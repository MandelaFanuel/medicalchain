@extends('base')

@section('title', 'Dash')

@section('content')

<p>Dash</p>


@endsection

{{-- --}}
<!-- Sidebar
    <div class="row">
        <div class="text-white col-md-2 bg-dark vh-100">
            <ul class="py-3 nav flex-column">
                <li class="mb-3 nav-item">
                    <a href="#" class="text-white nav-link"><i class="bi bi-house"></i> Dashboard</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="text-white nav-link"><i class="bi bi-person"></i> Patients</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="text-white nav-link"><i class="bi bi-calendar"></i> Appointments</a>
                </li>
            </ul>
        </div>

        Main Content
    <div class="col-md-10">
        <div class="py-4 row">
            <div class="col-md-4">
                <div class="text-center card">
                    <div class="card-body">
                        <h5 class="card-title">Monthly Patient Count</h5>
                        <p class="card-text" id="monthlyPatients">Loading...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center card">
                    <div class="card-body">
                        <h5 class="card-title">Monthly Revenue</h5>
                        <p class="card-text" id="monthlyRevenue">Loading...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center card">
                    <div class="card-body">
                        <h5 class="card-title">Monthly Appointment Count</h5>
                        <p class="card-text" id="monthlyAppointments">Loading...</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-4 row">
            Patient List
    <div class="col-md-6">
        <h5>Patient List</h5>
        <ul class="list-group" id="patientList">
             Dynamically filled with AJAX
    </ul>
</div>

 Appointments
    <div class="col-md-6">
        <h5>Today's Appointments</h5>
        <ul class="list-group" id="appointmentList">
            Dynamically filled with AJAX
    </ul>
</div>
</div>
</div>
</div>
</div>
@endsection

<script>
    // $(document).ready(function() {
    // function loadDashData() {
    // $.ajax({
    // url: '/dash/data', // Endpoint à appeler
    // method: 'GET', // Méthode GET
    // success: function(data) {
    // // Vérifie si des données sont bien retournées
    // if (data && data.stats) {
    // // Met à jour les statistiques
    // $('#monthlyPatients').text(data.stats.monthlyPatients || 0);
    // $('#monthlyRevenue').text('$' + (data.stats.monthlyRevenue || 0));
    // $('#monthlyAppointments').text(data.stats.monthlyAppointments || 0);

    // // Met à jour la liste des docteurs
    // let patientList = '';
    // if (data.doctors && data.doctors.length > 0) {
    // data.doctors.forEach(doctor => {
    // let statusClass = doctor.status === 'done' ? 'text-success' : 'text-danger';
    // patientList += `
    // <li class="list-group-item d-flex justify-content-between align-items-center">
    // ${doctor.user.first_name} (${doctor.availability.available_date || 'N/A'})
    // <span class="${statusClass}">${doctor.appointment.status || 'Pending'}</span>
    // </li>
    // `;
    // });
    // } else {
    // patientList = '<li class="list-group-item">Aucun médecin disponible.</li>';
    // }
    // $('#patientList').html(patientList);

    // // Met à jour la liste des rendez-vous d'aujourd'hui
    // let appointmentList = '';
    // if (data.appointmentsToday && data.appointmentsToday.length > 0) {
    // data.appointmentsToday.forEach(appointment => {
    // appointmentList += `
    // <li class="list-group-item">
    // ${appointment.user.first_name || 'Inconnu'} - ${appointment.appointment_time || 'N/A'}
    // (${appointment.appointment.status || 'Pending'})
    // </li>
    // `;
    // });
    // } else {
    // appointmentList = '<li class="list-group-item">Aucun rendez-vous aujourd\'hui.</li>';
    // }
    // $('#appointmentList').html(appointmentList);
    // }
    // },
    // error: function(xhr, status, error) {
    // console.error('Erreur lors du chargement des données :', error);
    // $('#patientList').html('<li class="list-group-item text-danger">Erreur de chargement des médecins.</li>');
    // $('#appointmentList').html('<li class="list-group-item text-danger">Erreur de chargement des rendez-vous.</li>');
    // }
    // });
    // }

    // // Charge les données lors du chargement de la page
    // loadDashboardData();

    // // Rafraîchit les données toutes les 30 secondes
    // setInterval(loadDashboardData, 30000);
    // });
</script>