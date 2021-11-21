import connect from "../../db"
import User from "../../models/user"

export const save = async (data) => {
    const con = await connect()

    const user = new User(data)
    await user.save()

    await con.disconnect()
}

export const findAll = async () => {
    const con = await connect()
    const users = await User.find()
    await con.disconnect()

    return users
}

export const findById = async (userId) => {
    const con = await connect()
    const user = await User.findById(userId)
    await con.disconnect()

    return user
}

export const findByEmail = async (email) => {
    const con = await connect()
    const user = await User.findOne({ email })
    await con.disconnect()
    
    return user
}