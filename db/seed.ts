import { db, Usuarios, Alertas } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Usuarios).values([{
		nombreUsuario: "aagarcia",
		contrasena: "123",
		rol: "admin",
	},
	{
		nombreUsuario: "dpalacios",
		contrasena: "456",
		rol: "admin",
	},]);

	await db.insert(Alertas).values([{
		comentario: "Se detectó movimiento en la cámara de seguridad ubicada en el pasillo principal del tercer piso del edificio de oficinas. La cámara registró una figura humana moviéndose en dirección sur, entrando en el área de las oficinas. La figura fue identificada como un individuo vestido con camisa blanca y pantalones oscuros. La persona caminó rápidamente por el pasillo en dirección a las escaleras de emergencia.",
		nombre: "CamaraSeguridad_EdificioOficinas_01",
	},
	{
		comentario: "Se detectó movimiento en la cámara de seguridad ubicada en el pasillo principal del tercer piso del edificio de oficinas. La cámara captó la presencia de un individuo portando un arma blanca.",
		nombre: "CamaraSeguridad_EdificioOficinas_02",
	},]);
}
