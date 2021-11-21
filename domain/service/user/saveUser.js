import bcrypt from 'bcrypt'
import { userRepository } from '../../../data/repository'
import { BusinessException, ServerException } from '../../../exception'
import { validateSaveUser } from "../../validators"

export const save = async (data) => {
    validateSaveUser(data)

    let user = await userRepository.findByEmail(data.email)
    
    console.log(user);
    if (user != null) {
        throw new BusinessException('E-mail já cadastrado!')
    }

    try {
        data.password = bcrypt.hashSync(data.password, 10)
        await userRepository.save(data)
    } catch (error) {
        throw new ServerException("Não foi possível inserir o usuário!")
    }
}