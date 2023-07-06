import Author from "../../models/Author.js"
export default async (req, res, next) => {
    try {
        let data = req.body
        data.user_id = req.user_id
        let one = await Author.create(data)

        return res.status(201).json({
            success: true,
            message: 'created',
            response: one
        })

    } catch (error) {
        next(error);
    }
}

