import { listingTypeRepository } from "../../../data/repository"
import { ServerException } from "../../../exception"

export const findAll = async () => {
    try {
        const types = await listingTypeRepository.findAll()

        return types.map(type => (
            {
                id: type._id,
                name: type.name,
            }
        ))

    } catch (error) {
        throw new ServerException("Não foi possível listar os tipos!")
    }
}