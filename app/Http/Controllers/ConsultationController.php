<?php


namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ConsultationController extends Controller
{
    public function index()
    {
        $doctors = Doctor::with('user', 'availabilities')->whereHas('user')->get();
        return view('doctors.consultation', compact('doctors'));
    }

    public function show()
    {
        $doctors = Doctor::with(['user', 'availabilities'])->get();

        foreach ($doctors as $doctor) {
            if ($doctor->user) {
                if ($doctor->availabilities && $doctor->availabilities->isNotEmpty()) {
                    foreach ($doctor->availabilities as $availability) {
                        $availability->start_time = \Carbon\Carbon::parse($availability->start_time)->format('h:i A');
                        $availability->end_time = \Carbon\Carbon::parse($availability->end_time)->format('h:i A');
                    }
                }
            }
        }

        return view('doctors.consultation', compact('doctors'));
    }

    public function showConsultation()
    {
        $doctors = User::where('current_function', 'doctor')->get();
        return view('doctors.consultation', compact('doctors'));
    }

    public function chat($id)
    {
        return view('chat', ['doctorId' => $id]);
    }

    public function doctorInfo($id)
    {
        $doctor = User::findOrFail($id);
        return view('doctor_info', compact('doctor'));
    }

    public function showDoctorAppointments($doctorId)
    {
        $doctor = Doctor::with('user')->find($doctorId);
        $appointments = Appointment::where('doctor_id', $doctorId)->get();
        return view('consultation', compact('doctor', 'appointments'));
    }

    public function getDoctorAndHospitalLocation($doctorId)
    {
        $doctor = Doctor::find($doctorId);
        $hospital = [
            'lat' => $doctor->hospital_latitude,
            'lng' => $doctor->hospital_longitude,
            'name' => $doctor->hospital_name,
        ];

        return response()->json(['hospital' => $hospital]);
    }

    public function showDoctorLocation($doctorId)
    {
        $doctor = Doctor::findOrFail($doctorId);
        $latitudeText = $doctor->latitude;
        $longitudeText = $doctor->longitude;
        $latitude = $this->convertToDecimal($latitudeText);
        $longitude = $this->convertToDecimal($longitudeText);

        return view('doctor.location', compact('doctor', 'latitude', 'longitude'));
    }

    private function convertToDecimal($coordinate)
    {
        preg_match('/([0-9.]+)°([NSWE])/', $coordinate, $matches);

        if (count($matches) == 3) {
            $decimal = floatval($matches[1]);
            $direction = $matches[2];

            if ($direction == 'S' || $direction == 'W') {
                $decimal *= -1;
            }

            return $decimal;
        }

        return null;
    }
}
