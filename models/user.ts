import { Schema, model } from "mongoose";

// declaro la estructura que va a tener mi esquema/documento/tabla.
const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
    email: {
    type: String,
    require: true
  }
},
{
  timestamps: true
}
);

// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
// las primeras comillas sirven para los otros modelos cuando ponemos ref:
// los modelos siempre van en una misma carpeta por lo la linea de arriba
export default model("User", userSchema);