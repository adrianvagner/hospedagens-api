import { ValidationException } from "../../../exception"

export const validateFindUser = (userId) => { 
    if (userId == null || userId === '') {
        throw new ValidationException('Id do usuário é obrigatório!')
    }
}