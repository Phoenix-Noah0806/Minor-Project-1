import express from 'express'
import {getComplaints,newComplaints,updateComplaint,deleteComplaint} from '../Controllers/complaint.controller.js'
import authMiddleware from '../Middleware/auth.middleware.js'
const router=express.Router()

router.get('/',getComplaints)
router.post('/',newComplaints)
router.put('/:id/resolve',authMiddleware,updateComplaint)
router.delete('/:id',authMiddleware,deleteComplaint)

export default router