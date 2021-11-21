import { listingTypeRepository } from '../../../data/repository'
import {  ServerException } from '../../../exception'
import { validateSaveListingType } from '../../validators'
export const save = async (data) => {
    validateSaveListingType(data)
   
    try {
        await listingTypeRepository.save(data)
    } catch (error) {
        throw new ServerException("Não foi possível inserir o usuário!")
    }
}