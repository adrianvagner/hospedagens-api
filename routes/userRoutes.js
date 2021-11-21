import { userService } from "../domain/service"

const defineUserRoutes = (app) => {

    app.post('/user', async (req, res) => {
        await userService.save(req.body)
        res.json({})
    })

    app.get('/user', async (req, res) => {
        const users = await userService.findAll()

        if (users.length === 0) {
            res.status(204)
            res.end()
        } else {
            res.json(users)
        }
    })

    app.get('/user/:userId', async (req, res) => {
        const user = await userService.findById(req.params.userId)
        res.json(user)
    })
}

export default defineUserRoutes