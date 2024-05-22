// src/endpoints/login.ts
import express, { type Request, type Response } from 'express';
import {db, Usuarios} from 'astro:db'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo db.ts

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await db.Usuarios.findOne({ where: { nombreUsuario: username } });

    if (user && user.contrasena === password) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

export default router;
