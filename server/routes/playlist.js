import express from "express";
const router = express.Router();

// importar el modelo playlist
import Playlist from "../models/playlist";

// Agregar una cancion a la playlist
router.post("/playlist", async (req, res) => {
  const body = req.body;
  try {
    const playlist = await Playlist.create(body);
    res.status(200).json(playlist);
  } catch (error) {
    return res.status(500).json({ mensaje: "Ocurrio un error", error });
  }
});

// Get con parámetros
router.get("/playlist/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const playlist = await Playlist.findOne({ _id });
    res.json(playlist);
  } catch (error) {
    return res.status(400).json({ mensaje: "Ocurrio un error", error });
  }
});

router.get("/playlist/:title", async (req, res) => {
  const title = req.params.title;
  try {
    const playlist = await Playlist.findOne({ title });
    res.json(playlist);
  } catch (error) {
    return res.status(400).json({ mensaje: "Ocurrio un error", error });
  }
});

// Get con todos los documentos
router.get("/Remember", async (req, res) => {
  try {
    const playlist = await Playlist.find();
    res.json(playlist);
  } catch (error) {
    return res.status(400).json({ mensaje: "Ocurrio un error", error });
  }
});

// Delete eliminar una playlist
router.delete("/playlist/:id", async (req, res) => {
  const _id= req.params.id;
  try {
    const playlist = await Playlist.findByIdAndDelete({ _id });
    if (!playlist) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(playlist);
  } catch (error) {
    return res.status(400).json({ mensaje: "Ocurrio un error", error });
  }
});
   
// Put actualizar una cancion 
router.put("/playlist/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const playlist = await Playlist.findByIdAndUpdate(_id, body, { new: true });
    res.json(playlist);
  } catch (error) {
    return res.status(400).json({ mensaje: "Ocurrio un error", error });
  }
});

// Exportamos la configuración de express app
module.exports = router;