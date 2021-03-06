import connect from "../../db"
import ListingType from "../../models/ListingType"

export const save = async (data) => {
    const con = await connect()

    const listingType = new ListingType(data)
    
    await listingType.save()

    await con.disconnect()
}

export const findAll = async () => {
    const con = await connect()
    
    const listingTypes = await ListingType.find()

    await con.disconnect()

    return listingTypes;
}
