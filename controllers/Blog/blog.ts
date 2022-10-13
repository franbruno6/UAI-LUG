import { Request, Response } from "express";
import blogModel from "../../models/blogs"

export const blogController = {  //ya lo exporto desde el principio
  get: async (req: Request, res: Response) =>{
    try
    {
        const allBlog = await blogModel.find()
        res.status(200).send(allBlog)
    }
    catch (error)
    {
        res.status(500).send(error)
    }
  },
  add: async (req: Request, res: Response) =>{
    try {
        const myBlog = new blogModel({...req.body})
        await myBlog.save()
        res.send(myBlog)
    } catch (error) {
        res.status(500).send(error)
    }
  },
  addComment: async (req: Request, res: Response) =>{
    try {
      const myBlog = await blogModel.find({_id: req.params.id}) //req.params.id es lo que ponemos en postman
      if (myBlog.length){ //para saber que no esta vacio
        myBlog[0].comments.push({...req.body}) //las {...} es para copiar todas las propiedades
      }
      res.send(myBlog)
    } catch (error) {
        res.status(500).send(error)
    }
  },
};
