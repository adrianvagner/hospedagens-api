import { ValidationException } from "../../../exception"

export const validateSaveListingType = (type) => {
    if (type.name == null || type.name === '') {
        throw new ValidationException('Nome é obrigatório!')
    }
} 