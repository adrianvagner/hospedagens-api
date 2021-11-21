import { listingRepository} from "../../../data/repository"
import {  ServerException } from "../../../exception"

export const findByType = async (type) => {

    let listing = null

    try {
        listing = await listingRepository.findByType(type)
    } catch (error) {
        throw new ServerException("Não foi possível obter os dados da lista!")
    }

    return {
        id: listing._id,
        title: listing.title,
        description: listing.description,
        price: listing.price,
        type: listing.type,
        user: listing.user,
        creationDate: listing.creationDate,
        rating: listing.rating,
        numberOfRatings: listing.numberOfRatings,
    }
}