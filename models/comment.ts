import { Schema, model } from "mongoose";

// declaro la estructura que va a tener mi esquema/documento/tabla
const commentSchema = new Schema({
    date: Date,
    content: String
})
//exporto mi modelo, el cual me permite acceder a ls metodos de la bd
export default model("Comment", commentSchema)