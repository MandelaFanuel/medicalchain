

//  ============================================================================================================================ --}}

    document.addEventListener('DOMContentLoaded', function () {
        // Managing the toggle
        document.querySelectorAll('.toggle-payment-method').forEach(toggle => {
            toggle.addEventListener('change', function () {
                const doctorId = this.id.split('-').pop();
                const mobileSection = document.getElementById('mobile-payment-section-' + doctorId);
                const cryptoSection = document.getElementById('crypto-payment-section-' + doctorId);


                if (this.checked) {
                    //Hiding mobile method when crypto is selected
                    mobileSection.classList.add('d-none');
                    cryptoSection.classList.remove('d-none');
                    document.getElementById('method-' + doctorId).value = 'crypto';
                } else {

                    // Hiding crypto method when mobile is selected
                    cryptoSection.classList.add('d-none');
                    mobileSection.classList.remove('d-none');
                    document.getElementById('method-' + doctorId).value = 'mobile';
                }
            });
        });

        // Defining default Method
        document.querySelectorAll('.toggle-payment-method').forEach(toggle => {
            const doctorId = toggle.id.split('-').pop();
            toggle.checked = false;
            toggle.dispatchEvent(new Event('change'));
        });
    });

{/* ========================================================================================== */}

    function showPopup(doctorId) {
        const form = document.getElementById('appointment-form-' + doctorId);
        const formData = new FormData(form);
        const details = {};

        formData.forEach((value, key) => {
            if (value) details[key] = value;
        });

        // Verification and displaying errors
        const errors = validateForm(details, doctorId);
        if (Object.keys(errors).length > 0) {
            displayErrors(errors, doctorId);
            return;
        }

        // Getting doctor infos
        const doctorPhoto = form.closest('.card-body').querySelector('img').src;
        const doctorName = form.closest('.card-body').querySelector('h5').textContent;

        // Getting Doctor hospital
        const locationElement = form.closest('.card-body').querySelector('.doctor-location');
        const doctorHospital = locationElement ? locationElement.textContent.trim() : 'Unknown hospital';

        // const popupDoctorHospital = document.querySelector('.doctor-/location');

        // Fetching payment information
        const mobileOperator = details['mobile_operator'] || 'None selected';
        const cryptoCurrency = details['crypto_currency'] || 'None selected';
        const phone = details['phone'] || 'None selected';

        // Generate Popup content
        let modalContent = `
            <p>
                <img src="${doctorPhoto}" alt="Doctor" class="img-thumbnail me-2" style="max-width: 50px;">
                <strong>${doctorName}</strong>
            </p>


            <p class="alert alert-warning d-flex align-items-center img-thumbnail fw-bold" role="alert"  style="max-width: 100%;color:#0e3a5b;">
                <i class="bi bi-exclamation-triangle-fill me-2"></i> Your appointment details!</p>

        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;"><strong>Hospital </strong></td>
                <td style="border: 1px solid #ccc; padding: 8px;">${doctorHospital} </td>
            </tr>

            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;"><strong>Appointment Date </strong></td>
                <td style="border: 1px solid #ccc; padding: 8px;"> ${details['appointment_date']} </td>
            </tr>

            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;"><strong>Appointment Hour </strong></td>
                <td style="border: 1px solid #ccc; padding: 8px;"> ${details['appointment_time']} </td>
            </tr>

            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;"><strong>Payment Method </strong></td>
                <td style="border: 1px solid #ccc; padding: 8px;"> ${details['method']} </td>
            </tr>

            ${details['method'] === 'mobile' ? `
            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;"><strong>Service Provider </strong></td>
                <td style="border: 1px solid #ccc; padding: 8px;"> ${mobileOperator} </td>
            </tr>

            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;"><strong>Amount </strong></td>
                <td style="border: 1px solid #ccc; padding: 8px;"> ${details['mobile_amount']} FBU</td>
            </tr>

            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;" colspan="2">
                    <strong> ${details['mobile_amount']} FBU</strong> will be transferred to <strong>${phone}</strong> (${mobileOperator}).
                </td>
            </tr>
            ` : ''}

            ${details['method'] === 'crypto' ? `
            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;"><strong> Cryptocurrency</strong></td>
                <td style="border: 1px solid #ccc; padding: 8px;"> ${cryptoCurrency}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;"><strong>Crypto Amount</strong></td>
                <td style="border: 1px solid #ccc; padding: 8px;"> ${details['crypto_amount']} ${cryptoCurrency}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;" colspan="2">
                    <strong> ${details['crypto_amount']} ${cryptoCurrency} </strong> will be transferred to <strong> 0xA7C9Ae55F0d7a5790D46a6267f76AC9c70AD419F</strong>
                </td>
            </tr>
            . ` : ''}
        </table>

        `;

        let modalFooter = '';
        if (details['method'] === 'crypto') {
            modalFooter += `<button class="btn btn-success" onclick="connectWallet()">Connect Wallet</button>`;
            modalFooter += `<button class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>`;
        } else {
            modalFooter += `<button class="btn btn-success" onclick="payNow()">Pay Now</button>`;
            modalFooter += `<button class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>`;
        }

        // Updating modal content

        document.getElementById('appointment-details').innerHTML = modalContent;
        document.getElementById('modal-footer').innerHTML = modalFooter;

        // Displaying the Modal
        const modal = new bootstrap.Modal(document.getElementById('appointment-modal'));
        modal.show();
    }

    function validateForm(details, doctorId) {
        let errors = {};

        if (!details['appointment_date']) {
            errors['appointment_date'] = 'The date is required.';
        }
        if (!details['appointment_time']) {
            errors['appointment_time'] = 'The time is required.';
        }
        if (details['method'] === 'mobile' && !details['mobile_operator']) {
            errors['mobile_operator'] = 'The service provider is required.';
        }
        if (details['method'] === 'mobile' && !details['mobile_amount']) {
            errors['mobile_amount'] = 'The amount is required.';
        }
        if (details['method'] === 'mobile' && details['mobile_amount'] < 20000) {
            errors['mobile_amount'] = 'Amount must not be less than 20000.';
        }
        if (details['method'] === 'crypto' && !details['crypto_currency']) {
            errors['crypto_currency'] = 'The cryptocurrency is required.';
        }
        if (details['method'] === 'crypto' && !details['crypto_amount']) {
            errors['crypto_amount'] = 'The amount is required.';
        }

        return errors;
    }

    function displayErrors(errors, doctorId) {
        document.querySelectorAll(`#appointment-form-${doctorId} .error`).forEach(error => error.textContent = '');

        for (let field in errors) {
            const errorElement = document.getElementById(`error-${field}-${doctorId}`);
            if (errorElement) {
                errorElement.textContent = errors[field];
            }
        }

        setTimeout(() => {
            document.querySelectorAll(`#appointment-form-${doctorId} .error`).forEach(error => error.textContent = '');
        }, 5000);
    }

    function payNow() {
        console.log('Proceed to mobile payment.');
    }

    function connectWallet() {
        console.log('Wallet connection process initiated.');
    }


