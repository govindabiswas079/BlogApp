import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import postRoute from './routes/posts.js';
import categoryRoute from './routes/categories.js';
import multer from 'multer';
import path from 'path';
import mongoose from './db.js';
import cors from 'cors';

var app = express();

dotenv.config();
app.use(express.json());
//app.use("/images", express.static(path.join("/images")));
app.use(cors({ origin: 'http://localhost:3000' }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running on 5000.");
});
