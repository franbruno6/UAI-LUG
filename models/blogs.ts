import { Schema, model } from "mongoose";

// declaro la estructura que va a tener mi esquema/documento/tabla.
const blogSchema = new Schema(
  {
    title: {
      type: String,
      require: true
    },
    author: {type: Schema.Types.ObjectId, ref: "User"}, //El ObjectId le dice que esta relacionado con un ID de otra tabla
    content: String,
    comments: [{type: Schema.Types.ObjectId, ref: "Comment" }], //Las [] le dicen que es un array de tipo de objeto, si fuese de uno a uno no usaria las [], pero como es de uno a muchos van los []
  },
  {
    timestamps: true
  }
);

// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
// las primeras comillas sirven para los otros modelos cuando ponemos ref:
// los modelos siempre van en una misma carpeta por lo la linea de arriba
export default model("Blog", blogSchema);
