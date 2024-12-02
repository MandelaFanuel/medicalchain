@extends('base')
@include('script')

@section('content')

<div class="container mt-0">
    <h3 class="mb-5 text-center fw-bold text-muted t-0">Book Appointment</h3>
    <div class="row">
        <div class="mb-4 col-md-12">
            <div class="shadow card">
                <div class="card-body">
                    <div class="row">
 {{-- ==================================================================================================================================--}}
                        {{-- Doctor information--}}

                        <div class="col-md-6">
                            <div class="text-left">
                                <img src="{{ asset('storage/' . $doctor->user->photo) }}" alt="Photo du docteur" class="mb-3 img-fluid" style="max-height: 150px;border-radius:15px;"><br>
                                <h5>Dr. {{ $doctor->user->first_name }} {{ $doctor->user->last_name }}</h5>
                                <span class="text-muted"> <span class="fw-bold">Domain :</span>  {{ $doctor->domain }}</span><br>
                                <span class="text-muted"> <span class="fw-bold">Adresse :</span>  {{ $doctor->user->user_address }}</span><br>
                                <span class="text-muted doctor-location">{{ $doctor->hospital }}</span><br>
                                <span class="text-muted"> <span class="fw-bold">Experience :</span>  {{ $doctor->experience_years }}</span><br>

{{-- ============================================================================================================================================================== --}}
                                {{-- Statics display--}}

                                <p class="mt-4 text-muted fw-bold">Appointments Statistics
                                    @if($doctor->appointments->isNotEmpty())
                                        <table class="table table-bordered table-sm" style="font-size: 0.9rem; line-height: 1.2; padding: 0.5rem;">
                                            <thead>
                                                <tr>
                                                    <th style="color: blue; font-size: 0.9rem;" class="fw-bold;">Total appointments</th>
                                                    <th style="color: blue; font-size: 0.9rem;" class="fw-bold;">Treated appointments</th>
                                                    <th style="color: blue; font-size: 0.9rem;" class="fw-bold;">Appointments on queue</th>
                                                    <th style="color: blue; font-size: 0.9rem;" class="fw-bold;">Your position</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style="font-size: 0.9rem;">
                                                    <td style="color: #f313f3;">{{ $totalAppointments }}</td>
                                                    <td style="color: #f313f3;">{{ $treatedAppointments }}</td>
                                                    <td style="color: #f313f3;">{{ $untreatedAppointments }}</td>
                                                    <td style="color: #f313f3;">{{ $position }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    @else
                                        <p class="text-center fw-bold" style="color: #de3d3d; font-size:0.7rem;">No appointment at the moment!</p>
                                    @endif
                                <p>
{{-- /================================================================================================================================================================--}}

                                <p class="mt-4 text-muted fw-bold">Doctor Availabilities
                                        @if($doctor->availabilities->isNotEmpty())
                                        <table class="table table-bordered table-sm" style="font-size: 0.9rem; line-height: 1.2; padding: 0.5rem;">
                                            <thead>
                                                <tr>
                                                    <th style="color: blue; font-size: 0.9rem;" class="fw-bold;">Date</th>
                                                    <th style="color: blue; font-size: 0.9rem;" class="fw-bold;">Start time</th>
                                                    <th style="color: blue; font-size: 0.9rem;" class="fw-bold;">End time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach($doctor->availabilities as $availability)
                                                    <tr style="font-size: 0.9rem;">
                                                        <td style="color: #f313f3;">{{ $availability->available_date }}</td>
                                                        <td style="color: #f313f3;">{{ $availability->start_time ?? 'Non specified' }}</td>
                                                        <td style="color: #f313f3;">{{ $availability->end_time ?? 'Non specified' }}</td>
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    @else
                                        <p class="text-center fw-bold" style="color: #de3d3d; font-size:0.7rem;">No availability at the moment !.</p>
                                    @endif
                                </p>
                            </div>
                        </div>

{{-- =============================================================================================================================================================== --}}
                        {{-- Booking appointment form --}}

                        <div class="col-md-6">
                            <form id="appointment-form-{{ $doctor->id }}">
                                @csrf

                                <h4 class="mb-5 fw-bold text-muted" style="border-bottom: solid 0.1px #0e3a5b;" >Appointment Form</h4>

                                <input type="hidden" name="doctor_id" value="{{ $doctor->id }}">
                                <input type="hidden" name="method" id="method-{{ $doctor->id }}">

                                {{--Date and Hour --}}
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

{{-- ======================================================================================================================================================= --}}

                                {{-- Toggle entre crypto et mobile --}}
                                <div class="mb-3 form-check form-switch">
                                    <input class="form-check-input toggle-payment-method" type="checkbox" id="toggle-payment-method-{{ $doctor->id }}">
                                    <label class="form-check-label fw-bold text-muted" for="toggle-payment-method-{{ $doctor->id }}">Choose payment Method</label>
                                </div>

{{-- ======================================================================================================================================================= --}}
                                {{--Mobile payment --}}
                                <div id="mobile-payment-section-{{ $doctor->id }}" class="payment-section">
                                    <div class="mb-3">
                                        <label for="mobile_operator" class="form-label fw-bold" style="color:#0e3a5b;">Mobile Payment</label>
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


{{-- ======================================================================================================================================================= --}}
                                {{-- Crypto Payment --}}
                                <div id="crypto-payment-section-{{ $doctor->id }}" class="payment-section d-none">
                                    <div class="mb-3">
                                        <label for="crypto_currency" class="form-label fw-bold" style="color:#0e3a5b;">Cryptocurrency Payment</label>
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
                                <button type="button" class="mt-3 btn btn-primary w-100 fw-bold" onclick="showPopup({{ $doctor->id }})">Book Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                {{--Popup generated content --}}
            </div>
            <div class="modal-footer" id="modal-footer">
                <button type="button" class="btn btn-secondary fw-bold text-muted" data-bs-dismiss="modal">Cancel</button>
                {{-- Wallet button and Pay Now --}}
            </div>
        </div>
    </div>
</div>
@endsection
{{-- ============================================================================================================================ --}}



