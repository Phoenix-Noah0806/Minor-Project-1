import express from 'express'
import path from "path"
import { fileURLToPath } from 'url'
import userRoutes from '../routes/complaint.routes.js'
import logger from '../Middleware/logger.middleware.js'
const app=express()

app.use(express.json())
app.use(logger)

const fileName=fileURLToPath(import.meta.url);
const dirName=path.dirname(fileName);
app.use(express.static(path.join(dirName,"../public")))

app.use('/complaints',userRoutes)
export default app