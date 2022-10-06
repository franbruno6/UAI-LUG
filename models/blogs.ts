import { Schema, model } from "mongoose";

// declaro la estructura que va a tener mi esquema/documento/tabla.
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: {type: Schema.Types.ObjectId, ref: "User"}, //El ObjectId le dice que esta relacionado con un ID de orta tabla
  body: String,
  comments: [{type: Schema.Types.ObjectId, ref: "Comment" }], //Las [] le dicen que es un array de tipo de objeto, si fuese de uno a uno no usaria las [], pero como es de uno a muchos van los []
});
// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model("Blog", blogSchema);
