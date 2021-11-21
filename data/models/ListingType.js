import mongoose from 'mongoose'

const listingTypeSchema = mongoose.Schema({
    name: String,
})

const ListingType = mongoose.model('ListingType', listingTypeSchema)

export default ListingType