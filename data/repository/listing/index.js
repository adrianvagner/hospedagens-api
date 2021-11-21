import connect from "../../db"
import Listing from "../../models/Listing"

export const save = async (data) => {
    const con = await connect()

    const listing = new Listing(data)

    await listing.save()

    await con.disconnect()
}

export const findAll = async () => {
    const con = await connect()

    const listings = await Listing.find()

    await con.disconnect()

    return listings
}

export const findByType = async (type) => {
    const con = await connect()

    const listing = await Listing.findByType(type)

    await con.disconnect()

    return listing
}
