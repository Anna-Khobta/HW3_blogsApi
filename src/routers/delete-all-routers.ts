import {Request, Response, Router} from "express";

import {blogsRepository} from "../repositories/blogs-db-repositories";

export const deleteAllRouter = Router({})

deleteAllRouter.delete('/testing/all-data',

    async (req: Request, res: Response ) => {

        const deleteAll = await blogsRepository.deleteAllBlogs()

        if (deleteAll) {
            res.send(204)
        } else {
            res.send(404)
        }
    })


/*
let arr: any[]  = []
deleteAllRouter.delete('/testing/all-data', (req: Request, res: Response ) => {
    arr = []
    res.status(204).send('All data is deleted')
})
*/

