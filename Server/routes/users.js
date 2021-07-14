import express from "express";
const router = express.Router();

import { updateUser, deleteUser, getUser } from '../controllers/users.js';

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);

export default router;