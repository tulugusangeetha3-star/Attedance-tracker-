import { useState } from 'react';
import axios from 'axios';

function FaceAttendance() {
  const [photo, setPhoto] = useState(null);

  const uploadPhoto = async () => {
    const formData = new FormData();

    formData.append('photo', photo);

    try {
      const res = await axios.post(
        'http://localhost:5000/upload',
        formData
      );

      alert(res.data.message);
    } catch (error) {
      alert('Upload failed');
    }
  };

  return (
    <div>
      <h1>AI Face Attendance</h1>

      <input
        type="file"
        onChange={(e) => setPhoto(e.target.files[0])}
      />

      <br /><br />

      <button onClick={uploadPhoto}>
        Scan Attendance
      </button>
    </div>
  );
}

export default FaceAttendance;