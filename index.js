import 'express-async-errors'
import express from 'express'
import { errorHandler } from './middleware'
import defineUserRoutes from './routes/userRoutes'
import defineListingTypeRoutes from './routes/listingTypeRoutes'
import defineListingRoutes from './routes/listingRoutes'

const app = express()
app.use(express.json())

defineUserRoutes(app)
defineListingTypeRoutes(app)
defineListingRoutes(app)
errorHandler(app)

app.listen(8081, () => console.log('Hospedagem API is up!'))