import mongoose from 'mongoose'

const listingSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number ,
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ListingType"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    creationDate: Date,
    rating: Number ,
    numberOfRatings: Number ,
})

const Listing = mongoose.model('Listing', listingSchema)

export default Listing