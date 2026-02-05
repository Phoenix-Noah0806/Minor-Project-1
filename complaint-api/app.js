import express from 'express'
import userRoutes from '../routes/complaint.routes.js'
import logger from '../Middleware/logger.middleware.js'
const app=express()

app.use(express.json())
app.use(logger)

app.use('/complaints',userRoutes)
export default app