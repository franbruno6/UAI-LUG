import userModel from '../../models/blogs'

const userController = {
    get: async (req, res) =>{
        try
        {
            const allBlogs = await userModel.find()
            res.status(200).send(allBlogs)
        }
        catch (error)
        {
            res.status(500).send(error)
        }
    },
    add: async (req, res) =>{
        try {
            const myUser = new userModel({...req.body})
            await myUser.save()
            res.send(myUser)
        } catch (error) {
            req.status(500).send(error)
        }
    },
}

export default userController