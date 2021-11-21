import { listingRepository } from "../../../data/repository"
import { ServerException } from "../../../exception"

export const save = async (data) => {


     data.creationDate = new Date();

    try {
        await listingRepository.save(data)
    } catch (error) {
        throw new ServerException("Não foi possível inserir!")
    }
}