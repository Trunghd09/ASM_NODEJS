import express from 'express';
import { addstudent, deletestudent, getstudent, getstudentByID, updatestudent } from '../controllers/student.js';
const router = express.Router();
router.get('/student', getstudent)
router.get('/student/:id', getstudentByID)
router.post('/student', addstudent)
router.put('/student/:id', updatestudent)
router.delete('/student/:id', deletestudent)
export default router;