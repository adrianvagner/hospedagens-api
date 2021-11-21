import { ValidationException } from "../../../exception"

export const validateSaveUser = (user) => {
    if (user.name == null || user.name === '') {
        throw new ValidationException('Nome é obrigatório!')
    }

    if (user.email == null || user.email === '') {
        throw new ValidationException('E-mail é obrigatório!')
    }

    if (user.password == null || user.password === '') {
        throw new ValidationException('Senha é obrigatória!')
    }

    if (user.type == null || user.type === '') {
        throw new ValidationException('Tipo de usuário é obrigatório!')
    }
} 