import { BusinessException, NotFoundException, ValidationException } from "../../exception"

const errorHandler = (app) => {
    app.use( (error, req, res, next) => {

        if (error instanceof NotFoundException) {
            res.status(404)
        } else if (error instanceof ValidationException) {
            res.status(422)
        } else if (error instanceof BusinessException) {
            res.status(400)
        } else { 
            res.status(500)
        }
    
        res.json({
            message: error.message
        })
    })
}

export default errorHandler