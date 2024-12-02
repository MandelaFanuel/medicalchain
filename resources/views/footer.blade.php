

@section('title', 'Footer')

<footer style="background-color: #000055; color: #ffffffaa; padding: 40px 20px; font-family: Arial, sans-serif;width: 100%; " class="fixed mt-5 mb-0">
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
      <!-- Section 1: Navigation -->
      <div style="flex: 1; min-width: 200px; margin-bottom: 20px;">
        <h3 style="font-size: 18px; font-weight: bold;">Find your way</h3>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin: 5px 0;"><a href="#" style="color: #ffffffaa; text-decoration: none;">Home</a></li>
          <li style="margin: 5px 0;"><a href="#" style="color: #ffffffaa; text-decoration: none;">Pricing</a></li>
          <li style="margin: 5px 0;"><a href="#" style="color: #ffffffaa; text-decoration: none;">Product</a></li>
          <li style="margin: 5px 0;"><a href="#" style="color: #ffffffaa; text-decoration: none;">Blog</a></li>
          <li style="margin: 5px 0;"><a href="#" style="color: #ffffffaa; text-decoration: none;">Support</a></li>
        </ul>
      </div>

      <!-- Section 2: Newsletter -->
      <div style="flex: 1; min-width: 200px; margin-bottom: 20px;">
        <h3 style="font-size: 18px; font-weight: bold;">Get our newsletter</h3>
        <p style="margin: 10px 0;">Contact us</p>
        <form method="POST" action="{{ route('register') }}" class="row g-3" id="form-register" enctype="multipart/form-data">
            @csrf

            @csrf

          <div class="col-md-9">
                <label for="email" class="mb-1 form-label fw-bold text" style="#ffffffaa">Sign Up</label>
                <input type="email" class="form-control" id="email" name="email"   value="{{ old('email') }}"  autocomplete  autofocus url-emailExist="{{ route('app_email_exist') }}" token="{{ csrf_token() }}" required placeholder="Email">
                <small class="text-message fw-bold message" id="error-register-email"></small>


                <div class="mb-3" >
                    <label for="subject" class="form-label fw-bold text" style="color: #ffffffaa">Subject</label>
                    <textarea class="form-control" name="subject" id="subject" rows="" required></textarea>
                </div>


                <button class="mt-2 btn btn-primary fw-bold" type="submit" id="register-user" name="register-user">Sign Up</button>
            </div>
        </form>
      </div>

      <!-- Section 3: Video/Media -->
      {{-- <div style="flex: 1; margin-bottom: 20px; text-align: center;  padding:1rem;">
        <div class="home_images" style="border-radius:50%;">
            <div class="background_home_images image3"></div> --}}
            {{-- <div class="background_images image2"></div> --}}

        {{-- </div>
      </div> --}}
    </div>

    <!-- Bottom Row: Links and Logo -->
    <div
      style="margin-top: 20px; border-top: 1px solid #444; padding-top: 20px; display: flex; justify-content: space-between; flex-wrap: wrap;"
    >
      <div style="color: #0000ffaf; font-size: 24px;">🌿</div>
      <div>
        <a href="#" style="color: #ffffffaa; text-decoration: none; margin-right: 20px;">Terms of Service</a>
        <a href="#" style="color: #ffffffaa; text-decoration: none;">Privacy Policy</a>
      </div>
    </div>
  </footer>
