import { userRepository } from "../../../data/repository"
import { ServerException } from "../../../exception"

export const findAll = async () => {
    try {
        const users = await userRepository.findAll()

        return users.map(user => (
            {
                id: user._id,
                name: user.name,
                email: user.email,
                type: user.type
            }
        ))

    } catch (error) {
        throw new ServerException("Não foi possível listar os usuários!")
    }
}