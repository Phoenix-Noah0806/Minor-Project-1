import express from 'express'
import {getComplaints,newComplaints,updateComplaint,deleteComplaint,getComplaintbyId} from '../Controllers/complaint.controller.js'
import authMiddleware from '../Middleware/auth.middleware.js'
const router=express.Router()

router.get('/',getComplaints)
router.get('/:id',getComplaintbyId)
router.post('/',newComplaints)
router.put('/:id/',authMiddleware,updateComplaint)
router.delete('/:id',authMiddleware,deleteComplaint)

export default router 