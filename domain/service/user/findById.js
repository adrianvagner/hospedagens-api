import { userRepository } from "../../../data/repository"
import { NotFoundException, ServerException } from "../../../exception"
import { validateFindUser } from "../../validators"

export const findById = async (userId) => {
    validateFindUser(userId)

    let user = null

    try {
        user = await userRepository.findById(userId)
    } catch (error) {
        throw new ServerException("Não foi possível obter os dados do usuário!")
    }

    if (user == null) {
        throw new NotFoundException("Usuário não encontrado para o id!")
    }

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        type: user.type
    }    
}