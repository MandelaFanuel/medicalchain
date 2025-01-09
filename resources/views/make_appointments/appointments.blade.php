@extends('base')

@include('script')

@section('content')

<div class="container mt-0">
    <h3 class="mb-5 text-center fw-bold text-muted t-0">Book Appointment</h3>
    <div class="row">
        @foreach($doctors as $doctor)
        <div class="mb-4 col-md-6">
            <div class="shadow card">
                <div class="card-body">
                    <div class="row">

                        {{-- ===================================================================================================================== --}}
                        {{-- Doctor information--}}

                        <div class="col-md-6">
                            <div class="text-left card-body">
                                <img src="{{ asset('storage/' . $doctor->user->photo) }}" alt="doctor picture" class="mb-3 img-fluid" style="max-height: 150px;border-radius:15px;"><br>
                                <h5>Dr. {{ $doctor->user->first_name }} {{ $doctor->user->last_name }}</h5>
                                <span class="text-muted"> <span class="fw-bold ">Domain :</span>  {{ $doctor->domain }}</span><br>
                                <span class="text-muted"> <span class="fw-bold">Adresse :</span>  {{ $doctor->user->user_address }}</span><br>
                                <span class="text-muted doctor-location fw-bold"> Location : {{ $doctor->hospital }}</span><br>
                                <span class="text-muted"> <span class="fw-bold">Experience :</span>  {{ $doctor->experience_years }}</span> years<br>
                                <span style="color:#f313f3; font-size:0.77rem;"> <strong>Amount for consultation is : <br> </strong><strong class="text-center" style="color:#0D6EFD;text-align:center;">20.000FBU</strong></span>


{{-- ======================================================================================================================================================================= --}}

                                    {{-- Doctor availabilities --}}

                                <p class="mt-4 text-muted fw-bold">Doctor Availabilities
                                    @if($doctor->availabilities->isNotEmpty())
                                    <table class="table table-bordered table-sm" style="font-size: 0.9rem; line-height: 1.2; padding: 0.5rem;">
                                        <thead>
                                            <tr>
                                                <th style="color: #0D6EFD; font-size: 0.9rem;" class="fw-bold;">Date</th>
                                                <th style="color: #0D6EFD; font-size: 0.9rem;" class="fw-bold;">Start</th>
                                                <th style="color: #0D6EFD; font-size: 0.9rem;" class="fw-bold;">End</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($doctor->availabilities as $availability)
                                                <tr style="font-size: 0.9rem;">
                                                    <td style="color: #f313f3;" id="doctor-available-date-1">{{ $availability->available_date }}</td>
                                                    <td style="color: #f313f3;" id="doctor-start-time-1">{{ $availability->start_time ?? 'Non specified' }}</td>
                                                    <td style="color: #f313f3;" id="doctor-end-time-1">{{ $availability->end_time ?? 'Non specified' }}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                    @else
                                    <p class="text-center fw-bold" style="color: #de3d3d; font-size:0.7rem;">No availability at the moment !.</p>
                                    @endif
                            </p>

{{-- ======================================================================================================================================================================= --}}

                                <!-- Responsive grid for statistics -->

                                <div class="container mt-2">
                                    <p class="mt-4 text-muted fw-bold">Doctor Performance</p>
                                    {{-- @foreach($doctors as $doctor) --}}
                                    <div class="p-1 text-center row" id="statsContainer_{{ $doctor->id }}">
                                        <!-- Page 1: Total Appointments -->
                                        <div class="mb-3 page page-{{ $doctor->id }}" id="page1_{{ $doctor->id }}">
                                            <div class="p-3 border rounded">
                                                <h6 class="fw-bold" style="color: #0D6EFD;">Total Appointments</h6>
                                                <p style="color: #f313f3;" id="totalAppointments_{{ $doctor->id }}">{{ $doctor->totalAppointments }}</p>
                                            </div>
                                        </div>

                                        <!-- Page 2: Treated Appointments -->
                                        <div class="mb-3 page page-{{ $doctor->id }}" id="page2_{{ $doctor->id }}" style="display: none;">
                                            <div class="p-3 border rounded">
                                                <h6 class="fw-bold" style="color: #0D6EFD;">Treated Appointments</h6>
                                                <p style="color: #f313f3;" id="treatedAppointments_{{ $doctor->id }}">{{ $doctor->treatedAppointments }}</p>
                                            </div>
                                        </div>

                                        <!-- Page 3: Untreated Appointments -->
                                        <div class=" page page-{{ $doctor->id }}" id="page3_{{ $doctor->id }}" style="display: none;">
                                            <div class="p-3 border rounded">
                                                <h6 class="fw-bold" style="color: #0D6EFD;">Untreated Appointments</h6>
                                                <p style="color: #f313f3;" id="untreatedAppointments_{{ $doctor->id }}">{{ $doctor->untreatedAppointments }}</p>
                                            </div>
                                        </div>

                                        <!-- Page 4: Your Position -->
                                        <div class=" page page-{{ $doctor->id }}" id="page4_{{ $doctor->id }}" style="display: none;">
                                            <div class="p-3 border rounded">
                                                <h6 class="fw-bold" style="color: #0D6EFD;">Your Position</h6>
                                                <p style="color: #f313f3;" id="position_{{ $doctor->id }}">{{ $doctor->position ?? 'N/A' }}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Pagination buttons for each doctor -->
                                    <div class="mt-3 d-flex justify-content-center pagination-buttons" data-doctor-id="{{ $doctor->id }}">
                                        <button data-page="1" class="btn btn-primary mx-2 page-button page-btn-{{ $doctor->id }}">1</button>
                                        <button data-page="2" class="btn btn-primary mx-2 page-button page-btn-{{ $doctor->id }}">2</button>
                                        <button data-page="3" class="btn btn-primary mx-2 page-button page-btn-{{ $doctor->id }}">3</button>
                                        <button data-page="4" class="btn btn-primary mx-2 page-button page-btn-{{ $doctor->id }}">4</button>
                                    </div>
                                    {{-- @endforeach --}}
                                </div>
                            </div>
                        </div>


{{-- =============================================================================================================================================================== --}}

                        {{-- Booking appointment form--}}


                        <div class="col-md-6">
                            <form id="appointment-form-{{ $doctor->id }}">
                                @csrf

                                <h4 class="mb-5 fw-bold text-center" style="color:#0D6EFD;font-size:1.5rem;" >Book appointment</h4>

                                <input type="hidden" name="doctor_id" value="{{ $doctor->id }}">
                                <input type="hidden" name="method" id="method-{{ $doctor->id }}">

                                {{-- Date and Hour --}}
                                <div class="mb-3">
                                    <label for="appointment_date" class="form-label">Date</label>
                                    <input type="date" class="form-control" name="appointment_date" required>
                                    <div class="error text-danger" id="error-appointment_date-{{ $doctor->id }}"></div>
                                </div>

                                <div class="mb-3">
                                    <label for="appointment_time" class="form-label">Hour</label>
                                    <input type="time" class="form-control" name="appointment_time" required>
                                    <div class="error text-danger" id="error-appointment_time-{{ $doctor->id }}"></div>
                                </div>

{{-- =================================================================================================================================================================== --}}


                                {{-- Toggle entre crypto et mobile --}}


                                <div class="mb-3 form-check form-switch">
                                    <input class="form-check-input toggle-payment-method" type="checkbox" id="toggle-payment-method-{{ $doctor->id }}">
                                    <label class="form-check-label fw-bold text-muted" for="toggle-payment-method-{{ $doctor->id }}">Choose payment Method</label>
                                </div>

{{-- ================================================================================================================================================================== --}}

                                {{-- Mobile payment--}}

                                <div id="mobile-payment-section-{{ $doctor->id }}" class="payment-section">
                                    <div class="mb-3">
                                        <label for="mobile_operator" class="form-label fw-bold" style="color:#0D6EFD;">Mobile Payment</label>
                                        <select class="form-select" name="mobile_operator">
                                            <option class="fw-bold" value="">Select a service provider</option>
                                            <option class="fw-bold" value="lumitel">Lumicash</option>
                                            <option class="fw-bold" value="econetleo">EcoCash</option>
                                            <option class="fw-bold" value="onatel">Onamob</option>
                                            <option class="fw-bold" value="vodacom">Vodacom</option>
                                        </select>
                                        <div class="error text-danger" id="error-mobile_operator-{{ $doctor->id }}"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="mobile_amount" class="form-label">Amount</label>
                                        <input type="number" class="form-control" name="mobile_amount" placeholder="Enter amount">
                                        <div class="error text-danger" id="error-mobile_amount-{{ $doctor->id }}"></div>
                                    </div>

                                    <div class="mb3-3">
                                        <label for="appointment_time" class="form-label">Transfer On :</label>
                                        <input type="text" class="form-control fw-bold" name="phone" id="phone" style="color: #0e3a5b;border:none;" value="{{ $doctor->user->phone }}" readonly>
                                        <div class="error text-danger" id="error-phone-{{ $doctor->id }}"></div>
                                    </div>
                                </div>

{{-- ====================================================================================================================================================================== --}}

                                {{-- Crypto Payment--}}

                                <div id="crypto-payment-section-{{ $doctor->id }}" class="payment-section d-none">
                                    <div class="mb-3">
                                        <label for="crypto_currency" class="form-label fw-bold" style="color:#0D6EFD;">Cryptocurrency Payment</label>
                                        <select class="form-select" name="crypto_currency">
                                            <option class="fw-bold" value="">Select a currency</option>
                                            <option class="fw-bold" value="btc">Bitcoin</option>
                                            <option class="fw-bold" value="eth">Ethereum</option>
                                            <option class="fw-bold" value="picoin">Picoin</option>
                                            <option class="fw-bold" value="ltc">LTC</option>
                                        </select>
                                        <div class="error text-danger" id="error-crypto_currency-{{ $doctor->id }}"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="crypto_amount" class="form-label">Amount</label>
                                        <input type="number" class="form-control" name="crypto_amount" placeholder="Enter amount">
                                        <div class="error text-danger" id="error-crypto_amount-{{ $doctor->id }}"></div>
                                    </div>
                                </div>

                                <button type="button" class="mt-3 btn btn-primary w-100 fw-bold" onclick="showPopup({{ $doctor->id }})">Book Apoointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>



{{-- ===================================================================================================================================== --}}

{{-- Modal --}}
<div class="modal fade" id="appointment-modal" tabindex="-1" aria-labelledby="appointmentModalLabel" aria-hidden="true">
    <div class="modal-dialog col-md-4">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="text-center modal-title fw-bold text-muted" id="appointmentModalLabel">Confirm your Appointment</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="appointment-details">
                {{-- Popup generated content --}}
            </div>
            <div class="modal-footer" id="modal-footer">
                <button type="button" class="btn btn-secondary fw-bold text-muted" data-bs-dismiss="modal">Cancel</button>
                {{-- Wllet and Pay Now buttons --}}
            </div>
        </div>
    </div>
</div>


{{-- ================================================================================================================================================================== --}}

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>

    $(document).ready(function () {

        // Managing pagination clicks
        $('.page-button').on('click', function () {
            let doctorId = $(this).closest('.pagination-buttons').data('doctor-id');
            let targetPage = $(this).data('page');

            // Hiding all pages for this doctor
            $(`.page-${doctorId}`).hide();

            // Displaying the current page
            $(`#page${targetPage}_${doctorId}`).show();

            // Activate the active  button
            $(`.page-btn-${doctorId}`).removeClass('btn-secondary').addClass('btn-primary');
            $(this).removeClass('btn-primary').addClass('btn-secondary');
        });

        // Initialize the first page
        $('.pagination-buttons').each(function () {
            let doctorId = $(this).data('doctor-id');
            $(`.page-${doctorId}`).hide();
            $(`#page1_${doctorId}`).show();
            $(`.page-btn-${doctorId}[data-page="1"]`).addClass('btn-secondary').removeClass('btn-primary');
        });
    });
</script>
@endsection

{{-- ============================================================================================================================ --}}

