import { listingService } from "../domain/service"

const defineListingRoutes = (app) => {

    app.post('/listing', async (req, res) => {
        await listingService.save(req.body)
        res.json({})
    })

    app.get('/listing', async (req, res) => {
        const listings = await listingService.findAll()
        
        if (users.length === 0) {
            res.status(204)
            res.end()
        } else {
            res.json(listings)
        }
    })

    app.get('/listing/:type', async (req, res) => {
        const listing = await listingService.findByType(req.params.type)
        res.json(listing)
    })
}

export default defineListingRoutes