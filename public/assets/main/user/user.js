
// resources/js/custom.js
$(document).ready(function() {
    // To scrolling fom down to up
    $(window).scrollTop(0);
});
// =============================================================================


// script for user registration form control and verification
$(document).ready(function() {

    // All inputs verification function
    function validateField(field, regex) {
      let message = field.siblings('.text-message');
      if (regex.test(field.val())) {
        field.removeClass('is-invalid').addClass('is-valid');
        message.text('Valid').css('color', '#008000');
      } else {
        field.removeClass('is-valid').addClass('is-invalid');
        message.text('Invalid').css('color', '#fa080853');
      }


      // Message delay(5 minutes)
      setTimeout(function() {
        message.text('');
        field.removeClass('is-valid is-invalid');
      }, 5000);
    }


    // Names validation(Only letters up to 3 characters)
    $('#first_name, #last_name').on('input', function() {
      validateField($(this), /^[a-zA-Z]{3,}$/);
    });


    // International Email validation(email format)
    $('#email').on('input', function() {
      validateField($(this), /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
    });


    // International phone number verification
    $('#phone').on('input', function() {
      validateField($(this), /^\+?\d{10,15}$/);
    });


    // Password verification(only up to 8 characters)
    $('#password').on('input', function() {
      validateField($(this), /^.{8,}$/);
    });



    // Verifying if passwords march
    $('#confirm_password').on('input', function() {
      let message = $(this).siblings('.text-message');

      if ($(this).val() === $('#password').val() && $(this).val().length >= 8) {
        $(this).removeClass('is-invalid').addClass('is-valid');
        message.text('March').css('color', '#008000');
      } else {
        $(this).removeClass('is-valid').addClass('is-invalid');
        message.text('Not march').css('color', '#fa080853');
      }


      // delaying message(5 minutes)
      setTimeout(function() {
        message.text('');
        $(this).removeClass('is-valid is-invalid');
      }.bind(this), 2000);

      $('#user_birth_date').on('input', function() {
        validateField($(this),isValidDate(birth_date));
      });


      $('#user_address').on('input', function() {
        validateField($(this));
      });

      $('userIdNumber').on('input',function() {
        validateField($(this));
      });


      $('#user_gender').on('input', function() {
        validateField($(this));
      });

      $('#user_status').on('input', function() {
        validateField($(this));
      });

    });



    // Global verification before submitting form
    $('#register-user').on('#register-user', function(e) {
      e.preventDefault();


      // All inputs validation
      $('#first_name, #last_name').trigger('input');
      $('#email').trigger('input');
      $('#phone').trigger('input');
      $('#password').trigger('input');
      $('#confirm_password').trigger('input');
      $('#user_birth_date').trigger('input');
      $('#user_address').trigger('input');
      $('userIdNumber').trigger('input');
      $('current_function').trigger('input');
      $('#user_gender').trigger('input');
      $( "user_status").trigger('input');
      $('#agreeTerms').trigger('input');


      // Verifying if all inputs are validated
      if ($('.is-invalid').length === 0) {
        alert('User registered successfully!');
      } else {
        alert('Unknown error').css('color','#fa080853');
      }
    });
  });

//   ===============================================================




 // Terms checking verification after clicking on the register button function

$(document).ready(function() {

    $('#register-user').on('click', function() {
        let agreeTerms = $('#agreeTerms');
        let message = $('#error-register-agreeTerms');

        if (!agreeTerms.is(':checked')) {

            // Displaying an error message if it's not checked
            agreeTerms.removeClass('is-valid').addClass('is-invalid');
            message.text('You must agree to our terms and conditions to continue').css('color', '#fa080853');
        } else {
            // Displaying off an error message if it's checked
            agreeTerms.removeClass('is-invalid').addClass('is-valid');
            message.text('').css('color','#008000');
        }

        setTimeout(function() {
            message.text('');
            agreeTerms.removeClass('is-valid is-invalid');
            }, 2000);
    });
});

// ================================================================




//Preventing the page to reload and display errors while inputs are empty

$('#register-user').click(function(){
    // event.preventDefault();

    first_name = $('#first_name').val();
    last_name = $('#last_name').val();
    email = $('#email').val();
    phone = $('#phone').val();
    password = $('#password').val();
    passwordLength = password.length;
    confirm_password = $('#password_confirmation').val();
    birth_date = $('#user_birth_date').val();
    address = $('#user_address').val();
    userIdNumber = $('#userIdNumber').val();
    current_function = $('#current_function').val();
    gender = $('#user_gender').val();
    user_status = $('#user_status').val();

    if(first_name !== "" && /^[a-zA-Z]{3,}$/.test(first_name)){

        $('#first_name').removeClass('is-invalid');
        $('#first_name').addClass('is-valid');
        $('#error-register-confirm-first_name').text("");

        if(last_name !== "" && /^[a-zA-Z]{3,}$/.test(last_name)){

            $('#last_name').removeClass('is-invalid');
            $('#last_name').addClass('is-valid');
            $('#error-register-confirm-last_name').text("");

            if(email !== "" && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)){

                $('#email').removeClass('is-invalid');
                $('#email').addClass('is-valid');
                $('#error-register-confirm-email').text("");

                if(passwordLength >= 8){

                    $('#password').removeClass('is-invalid');
                    $('#password').addClass('is-valid');
                    $('#error-register-confirm-confirm-password').text("");

                    if(password === confirm_password){

                        $('#password_confirmation').removeClass('is-invalid');
                        $('#password_confirmation').addClass('is-valid');
                        $('#error-register-confirm-password_confirmation').text("");

                        if(phone !== "" && /^\+?\d{10,15}$/.test(phone)){

                            $('#phone').removeClass('is-invalid');
                            $('#phone').addClass('is-valid');
                            $('#error-register-confirm-phone').text("");


                            if(birth_date !== ""){

                                $('#user_birth_date').removeClass('is-invalid');
                                $('#user_birth_date').addClass('is-valid');
                                $('#error-register-confirm-user_birth_date').text("");


                                if(address !== ""){

                                    $('#user_address').removeClass('is-invalid');
                                    $('#user_address').addClass('is-valid');
                                    $('#error-register-confirm-user_address').text("");

                                    if(userIdNumber !== ""){

                                        $('#userIdNumber').removeClass('is-invalid');
                                        $('#userIdNumber').addClass('is-valid');
                                        $('#error-register-confirm-userIdNumber').text("");

                                        if($current_function !== "") {

                                            $('#current_function').removeClass('is-invalid');
                                            $('#current_function').addClass('is-valid');
                                            $('#error-register-confirm-current_function').text("");

                                            if(gender !== ""){

                                                $('#user_gender').removeClass('is-invalid');
                                                $('#user_gender').addClass('is-valid');
                                                $('#error-register-confirm-user_gender').text("Error");


 // ===========================================================================================================================================


                                                 // Submitting form
                                                // var res =  checkEmail(email);


                                                // (res !== "exist") ? $('#form-register').submit()
                                                // :   $(('#email').addClass('is-invalid'),
                                                //     $('#email').removeClass('is-valid'),
                                                //     $('#error-register-email').text("Email already exist").css('color','#fa080853'));


                                                // if(res !== "exist"){
                                                //     $('#form-register').submit();
                                                // }else {
                                                //     $('#email').addClass('is-invalid');
                                                //     $('#email').removeClass('is-valid');
                                                //     $('#error-register-email').text("Email already exist").css('color','#fa080853');
                                                // }


// ===============================================================================================================================================

                                            }else {

                                                $('#user_gender').removeClass('is-valid');
                                                $('#user_gender').addClass('is-invalid');
                                                $('#error-register-confirm-user_gender').text("Do select your gender please").css('color','#fa080853');
                                            }


                                        } else {
                                            $('#current_function').removeClass('is-valid');
                                            $('#current_function').addClass('is-invalid');
                                            $('#error-register-confirm-current_function').text("Function is  your gender please").css('color','#fa080853');
                                        }

                                    }else {
                                        $('#userIdNumber').removeClass('is-valid');
                                        $('#userIdNumber').addClass('is-invalid');
                                        $('#error-register-confirm-userIdNumber').text("Please submit your ID ").css('color','#fa080853');
                                    }

                                }else {

                                    $('#user_address').removeClass('is-valid');
                                    $('#user_address').addClass('is-invalid');
                                    $('#error-register-confirm-muser_address').text("The Address Field is empty").css('color','#fa080853');
                                }
                            }else {

                                $('#user_birth_date').removeClass('is-valid');
                                $('#user_birth_date').addClass('is-invalid');
                                $('#error-register-confirm-user_birth_date').text("The date is not correct").css('color','#fa080853');
                            }

                        }else {

                            $('#phone').removeClass('is-valid');
                            $('#phone').addClass('is-invalid');
                            $('#error-register-confirm-phone').text("Phone Number is not correct").css('color','#fa080853');
                        }

                    }else {

                        $('#password_confirmation').addClass('is-invalid');
                        $('#password_confirmation').removeClass('is-valid');
                        $('#error-register-confirm-password_confirmation').text("Password do not march").css('color','#fa080853');
                    }

                }else {

                    $('#password').addClass('is-invalid');
                    $('#password').removeClass('is-valid');
                    $('#error-register-confirm-password').text("Password must be at least 8 characters").css('color','#fa080853');
                }
            }else{

                $('#email').addClass('is-invalid');
                $('#email').removeClass('is-valid');
                $('#error-register-confirm-email').text("Email is not correct").css('color','#fa080853');
            }
        }else{

            $('#last_name').addClass('is-invalid');
            $('#last_name').removeClass('is-valid');
            $('#error-register-confirm-last_name').text("Last Name is not correct").css('color','#fa080853');
        }

    }else {

        $('#first_name').addClass('is-invalid');
        $('#first_name').removeClass('is-valid');
        $('#error-register-confirm-first_name').text("First Name is not correct").css('color','#fa080853');
    }

 });

 // ==============================================================================================================



//  Appointments popup

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


/* ========================================================================================== */


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


        <p class="align-items-center img-thumbnail fw-bold text-center" role="alert"  style="max-width: 100%;color:blue; background-color:#2450d655;border:solid 2px #0505cfd3;letter-spacing:0.3rem;">
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
        modalFooter += `<button class="btn btn-success" style="background-color:blue;" onclick="connectWallet()"> <strong>Connect Wallet</strong></button>`;
        modalFooter += `<button class="btn btn-danger" data-bs-dismiss="modal"><strong>Cancel</strong></button>`;
    } else {
        modalFooter += `<button class="btn btn-success" style="background-color:blue;" onclick="payNow()"><strong>Pay Now</strong></button>`;
        modalFooter += `<button class="btn btn-danger" data-bs-dismiss="modal"><strong>Cancel</strong></button>`;
    }

    // Updating modal content

    document.getElementById('appointment-details').innerHTML = modalContent;
    document.getElementById('modal-footer').innerHTML = modalFooter;

    // Displaying the Modal
    const modal = new bootstrap.Modal(document.getElementById('appointment-modal'));
    modal.show();
}

// ===================================================================================================================================

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


// ==================================================================================================================================
// toggling the eyed icon for password

    // Verifying errors
    if (document.getElementById('customErrorMessage')) {
        setTimeout(function() {
            document.getElementById('customErrorMessage').style.display = 'none';
        }, 8000);
    }

    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    togglePassword.addEventListener('click', function() {
        // Toggle the password field visibility
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;

        // Toggle the eye icon to represent visibility of the password
        if (type === 'password') {
            eyeIcon.setAttribute('class', 'bi bi-eye');
        } else {
            eyeIcon.setAttribute('class', 'bi bi-eye-slash'); // Eye with a slash (indicating password is visible)
        }
    });

// ==========================================================================================================================================





