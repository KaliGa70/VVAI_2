import { db, Usuarios } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	db.insert(Usuarios).values([{
		nombreUsuario: "aagarcia",
		contrasena: "123",
		rol: "admin",
	},
	{
		nombreUsuario: "dpalacios",
		contrasena: "456",
		rol: "admin",
	},]);
}
