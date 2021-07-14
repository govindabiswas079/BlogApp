import express from "express";
const router = express.Router();

import { createCategorie, getCategorie } from '../controllers/categories.js';

router.post('/', createCategorie);
router.get('/', getCategorie);

export default router;