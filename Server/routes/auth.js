import express from "express";
const router = express.Router();

import { register, login } from '../controllers/auth.js';

router.post("/login", login);
router.post("/register", register);

export default router;