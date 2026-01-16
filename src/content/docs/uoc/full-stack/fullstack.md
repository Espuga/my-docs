---
title: Full stack
description: Resum full stack
---

🧠 RESUM FULL STACK — APUNTS PER L’EXAMEN (Productes 1–4)

Visió global del projecte

Heu construït una plataforma de voluntariat tipus “tauler d’anuncis”:
-	Peticions (algú demana ajuda)
-	Ofertes (algú ofereix ajuda)
-	Interfície amb dashboard de targetes
-	Gestió de usuaris i voluntariats
-	Evolució: de prototip en memòria → persistència al navegador → backend GraphQL + MongoDB → fullstack amb auth, rols i temps real

---

✅ PRODUCTE 1 — Frontend bàsic (HTML/CSS/JS + Bootstrap)

Què heu fet
-	Frontend en HTML5 + CSS3 + Vanilla JS
-	Estils i components amb Bootstrap
-	Dades en un únic fitxer datos.js:
	-	Arrays d’objectes en memòria (sense BD)
	-	Export modular (import/export)
-	4 pantalles (encara que no estiguin 100% completes):
	1.	Dashboard: targetes d’ofertes i peticions (diferenciades per color)
	2.	Login: “logueig” de prototip (validant contra dades en memòria)
	3.	Gestió voluntariats: alta + llistat + baixa (sobre arrays)
	4.	Gestió usuaris: alta + llistat + baixa

Idees clau d’examen
-	No hi ha persistència: si recarregues, es perd tot.
-	És un prototip per entendre estructura i interacció.
-	JS bàsic: DOM, events, validacions, render de targetes/taules.

Preguntes típiques
-	“On estan les dades i com es comparteixen entre pàgines?”
-	“Com faries el render de targetes des d’un array?”
-	“Què fa addEventListener('click', ...) aquí?”

---

✅ PRODUCTE 2 — Frontend avançat amb APIs HTML5 + persistència al navegador

Aquí el salt és important: mateix frontend, però ara:
-	Persistència al navegador
-	Programació modular
-	Preparat per després connectar-se a backend

APIs i conceptes que heu aplicat
-	WebStorage (localStorage): guardar usuari actiu (login)
-	IndexedDB: guardar voluntariats com a “BD del navegador”
-	Canvas: gràfic de voluntariats (dibuix natiu)
-	Drag & Drop: arrossegar targetes i seleccionar voluntariats al dashboard
-	Mòduls JS:
	-	almacenaje.js concentra el CRUD comú
	-	int_1_dashboard.js, int_3_voluntariados.js, int_4_usuarios.js gestionen cada pantalla

Login (molt preguntable)
-	mostrarUsuarioActivo():
	-	si hi ha usuari actiu → mostra nom/email
	-	si no → “-no login-”
-	loguearUsuario():
	-	valida credencials
	-	guarda l’usuari actiu a localStorage

Usuari vs voluntariats (diferència important)
-	Usuaris: persistència a localStorage (simple)
-	Voluntariats: persistència a IndexedDB (més “BD real”)

Preguntes típiques
-	“Diferència entre localStorage i IndexedDB?”
-	“Per què IndexedDB és millor per llistes grans?”
-	“Què fa DOMContentLoaded i per què s’utilitza?”
-	“Quin error típic passa si oblides type="module"?”

---

✅ PRODUCTE 3 — Backend amb Node/Express + GraphQL + MongoDB (sense frontend)

Aquest producte és només backend: el frontend no es toca.

Què heu construït
-	Servidor amb Node.js + Express
-	API amb GraphQL (un únic endpoint)
-	Inicialment dades en memòria (Array/Map/Set) → després persistència real
-	Persistència final amb MongoDB (driver natiu, sense Mongoose)
-	Proves amb Postman
-	Objectiu: “portar” la lògica d’almacenaje.js al backend

Estructura GraphQL (molt preguntable)
-	Type: defineix el model (User, Voluntariado)
-	Query: lectures (getUsers, getVoluntariados, etc.)
-	Mutation: escriure (addUser, deleteUser, addVoluntariado, etc.)

MongoDB sense Mongoose
-	Treballant directament amb el driver
-	Operacions CRUD: find, insertOne, updateOne, deleteOne

Preguntes típiques
-	“Quina diferència hi ha entre REST i GraphQL?”
-	“Què és una Mutation?”
-	“Per què GraphQL té un sol endpoint?”
-	“Com provaries una query amb Postman?”
-	“Quin problema tens si no controles validacions al servidor?”

---

✅ PRODUCTE 4 — Fullstack complet (Frontend + Backend) + Auth + Rols + Temps real

Aquí feu la integració real: el frontend del producte 2 deixa d’utilitzar persistència del navegador i passa a consumir el backend.

Canvis clau
1.	Mongoose ODM

	-	Schemas i models
	-	Validació
	-	Consultes més còmodes
	-	Middlewares

2.	Fetch API

	-	El almacenaje.js ja no fa CRUD local
	-	Ara fa crides asíncrones al backend:
		-	fetch() + async/await
		-	enviar queries/mutations GraphQL per HTTP

3.	Autenticació i rols

	-	Usuari admin vs usuari normal
	-	Control d’accés:
		-	al servidor (middleware/validacions)
		-	i al client (mostrar/ocultar opcions)
	-	Sessió mantinguda al servidor (segons l’enunciat)

4.	WebSockets amb Socket.io

	-	Patró PUB/SUB
	-	Quan algú publica/selecciona voluntariat → els altres ho veuen en temps real al dashboard

Preguntes típiques
-	“Què aporta Mongoose respecte el driver natiu?”
-	“Com envies una query GraphQL amb fetch?”
-	“Per què cal validar permisos al servidor i no només al client?”
-	“Quina diferència hi ha entre HTTP (fetch) i websockets (temps real)?”

---

🧩 EL FLUX COMPLET (això t’ho poden fer explicar)
1.	Frontend mostra dashboard
2.	Usuari fa login
3.	Frontend fa fetch a GraphQL (Query/Mutation)
4.	Backend resol la query/mutation
5.	MongoDB guarda/retorna dades
6.	Frontend renderitza la resposta
7.	Si hi ha canvi, Socket.io emet event i s’actualitzen pantalles

---

🎯 COM SERÀ L’EXAMEN (segons l’anunci)

5 preguntes:
-	de “què fa aquest codi?”
-	“hi ha un error?”
-	“explica aquest concepte”
-	“com ho vau implementar als treballs?”

Això vol dir que el que has d’estudiar és:

✅ Productes 1–4, sobretot:
-	modularització
-	persistència navegador vs servidor
-	GraphQL (type/query/mutation)
-	MongoDB vs Mongoose
-	async/await + fetch
-	websockets

---

📝 MINI-LLISTA DE “COSES QUE HAS DE PODER DIR EN 20 SEGONS”
-	Producte 1: prototip, dades en memòria (datos.js), Bootstrap, 4 pantalles
-	Producte 2: WebStorage + IndexedDB + Drag&Drop + Canvas + mòduls (almacenaje.js)
-	Producte 3: backend Express + GraphQL + MongoDB, proves amb Postman
-	Producte 4: fullstack: frontend consumeix GraphQL amb fetch, auth/rols, Mongoose, Socket.io temps real
