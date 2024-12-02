@extends('base')
@include('script')

@section('content')
<div class="container">
    <h3 class="mb-5 text-center fw-bold">Add Availabilities</h3>

    <div class="row">
        @foreach($doctors as $doctor)
            <div class="mb-3 col-md-3">
                <div class="p-2 shadow-sm card" style="border-radius: 10px;">
                    <h5 class="fw-bold">Dr. {{ $doctor->user->first_name }} {{ $doctor->user->last_name }}</h5>

                    <div class="col-md-6 g-2" style="border-radius: 15px;">
                        <img src="{{ asset('storage/' . $doctor->user->photo) }}" alt="Photo du docteur" class="img-fluid" style="border-radius: 15px; height: 100px; object-fit: cover;">
                    </div>
                    <p><strong>Domain:</strong><span style="color: green;" class="fw-bold"> {{ $doctor->domain }}</span> </p>

                    @if($doctor->availabilities->isNotEmpty())
                        <table class="table table-bordered table-sm" style="font-size: 0.9rem; line-height: 1.2; padding: 0.5rem;">
                            <thead>
                                <tr>
                                    <th style="color: blue; font-size: 0.9rem;">Date</th>
                                    <th style="color: blue; font-size: 0.9rem;">Start time</th>
                                    <th style="color: blue; font-size: 0.9rem;">End time</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($doctor->availabilities as $availability)
                                    <tr style="font-size: 0.9rem;">
                                        <td style="color: #f313f3;">{{ $availability->available_date }}</td>
                                        <td style="color: #f313f3;">{{ $availability->start_time ?? 'Non spécifié' }}</td>
                                        <td style="color: #f313f3;">{{ $availability->end_time ?? 'Non spécifié' }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @else
                        <p class="text-center fw-bold" style="color: #de3d3d; font-size:0.7rem;">No availability at the moment !.</p>
                    @endif


                    <form action="{{ route('availabilities.store') }}" method="POST" class="mt-2">
                        @csrf
                        <input type="hidden" name="doctor_id" value="{{ $doctor->id }}">

                        <div class="mb-2 form-group fw-bold">
                            <label for="available_date[]">Date</label>
                            <input type="date" name="available_date[]" id="date" class="form-control form-control-sm" required>
                            <small id="day" class="form-text text-muted"></small>
                        </div>

                        <div class="mb-2 form-group fw-bold">
                            <label for="start_time[]">Start time</label>
                            <input type="time" name="start_time[]" class="form-control form-control-sm" required>
                        </div>

                        <div class="mb-2 form-group fw-bold">
                            <label for="end_time[]">End time</label>
                            <input type="time" name="end_time[]" class="form-control form-control-sm" required>
                        </div>

                        <button type="submit" class="btn btn-primary btn-sm btn-block fw-bold">Create availability</button>
                    </form>
                </div>
            </div>
        @endforeach

    </div>
</div>


<script>
    // Détecter automatiquement le jour associé à la date sélectionnée
    document.getElementById('date').addEventListener('change', function() {
        let available_date = new Date(this.value);
        let options = { weekday: 'long' }; // Format pour afficher le jour complet
        let day = available_date.toLocaleDateString('en-US', options); // Récupère le jour en anglais, vous pouvez modifier la locale si nécessaire
        document.getElementById('day').textContent = "Day: " + day;
    });
</script>
@endsection

{{-- ===================================================================== --}}
