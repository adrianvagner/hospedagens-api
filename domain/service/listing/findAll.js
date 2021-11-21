import { listingRepository } from "../../../data/repository"
import { ServerException } from "../../../exception"

export const findAll = async () => {
    try {
        const listings = await listingRepository.findAll()

        return listings.map(listing => (
            {
                id: listing._id,
                title: listing.title,
                description: listing.description,
                price: listing.price,
                type: listing.type,
                user: listing.user._id,
                creationDate: listing.creationDate,
                rating: listing.rating,
                numberOfRatings: listing.numberOfRatings,
            }
        ))

       
    } catch (error) {
        throw new ServerException("Não foi possível listar!")
    }
}