import express from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    message: 'Photo uploaded successfully',
    file: req.file,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});