import mongoose from "mongoose";
const Schema = mongoose.Schema;
const playlistSchema = new Schema({
  title: { type: String, required: [true, "Titulo obligatorio"] },
  artist: {type: String},
  howl: {type: String, default: "null" },
  display: { type: Boolean, default: true },
  ruta: {type: String, require: [true, "Ruta obligatorio"]},
});
// Convertir a modelo
const Playlist = mongoose.model("Playlist", playlistSchema);
export default Playlist;
