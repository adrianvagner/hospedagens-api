import { listingTypeService } from "../domain/service"

const defineListingTypeRoutes = (app) => {

    app.post('/listingType', async (req, res) => {
        await listingTypeService.save(req.body)
        res.json({})
    })

    app.get('/listingType', async (req, res) => {
        const users = await listingTypeService.findAll()

        if (users.length === 0) {
            res.status(204)
            res.end()
        } else {
            res.json(users)
        }
    })
}

export default defineListingTypeRoutes