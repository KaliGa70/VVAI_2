import { defineDb, defineTable, column } from 'astro:db';

const Usuarios = defineTable({
  columns:{
    id: column.number({primaryKey: true, autoIncrement: true}), 
    nombreUsuario: column.text(),//Combinacion del nombre ejemplo: aagarcia
    contrasena: column.text(),
    rol: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Usuarios },
})
