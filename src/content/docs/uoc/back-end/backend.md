---
title: Back-end
description: Resum Back-end
---

🧠 RESUM COMPLET BACK-END — APUNTS PER A L’EXAMEN

1️⃣ VISIÓ GLOBAL DE L’ASSIGNATURA

L’assignatura de Back-End ha consistit a muntar un entorn servidor real, desenvolupar una aplicació web amb PHP, després migrar-la a Laravel, crear un Web Service REST i finalment consumir-lo des de WordPress, tot desplegat en AWS.

👉 Objectiu real de l’examen:

Que puguis explicar com funciona tot el flux, no només el codi.

---

2️⃣ ENTORN TÈCNIC (MOLT PREGUNTABLE)

🔹 Arquitectura general
-	Docker (local) → entorn de desenvolupament
-	AWS (producció) → servidor final
-	LAMP:
    -	Linux
    -	Apache
    -	MySQL
    -	PHP

🔹 Per què Docker?
-	Tenir el mateix entorn per tots
-	Evitar problemes de versions
-	Facilitar migració a AWS

🔹 Connexió a Base de Dades (clau d’examen)

PHP natiu (Producte 2):
-	Connexió amb mysqli o PDO
-	Fitxer típic: config/db.php
-	Variables:
    -	host
    -	usuari
    -	password
    -	base de dades

👉 Exemple d’explicació:

“La connexió es fa des d’un fitxer centralitzat que reutilitzen tots els models per evitar duplicar codi.”

Laravel (Producte 3):
-	Connexió definida a .env
-	Laravel usa Eloquent ORM
-	No escrius SQL directament (excepte casos concrets)

---

3️⃣ PRODUCTE 1 — INFRAESTRUCTURA

Què has fet
-	Instal·lar Docker
-	Crear contenidors amb:
    -	Apache
    -	PHP
    -	MySQL
    -	PHPMyAdmin
-	Provar PHP amb un Hola Mundo
-	Accedir a la DB amb PHPMyAdmin
-	Instal·lar:
    -	WordPress
    -	Laravel
-	Migrar tot a AWS
    -	FTP (FileZilla)
    -	Export/import DB

Què demostres:
- Entens què és un servidor
- Saps desplegar una app
- Saps migrar de local a producció

---

4️⃣ PRODUCTE 2 — APLICACIÓ EN PHP NATIU (MVC)

Tecnologia
-	PHP pur (sense Laravel)
-	Arquitectura MVC
-	MySQL
-	Git + GitHub
-	Docker + AWS

Estructura típica (MOLT preguntable)

```code
/controllers
/models
/views
/config
/public
```

Funcionalitats clau
-	Login / registre
-	Rols:
    -	Admin
    -	Usuari particular
    -	Hotels (corporatius)
-	Gestió de reserves
-	Calendari de reserves
-	Enviament de correus
-	Localitzador únic

Per què MVC?
-	Separació de responsabilitats
-	Millor manteniment
-	Escalabilitat

👉 Resposta d’examen típica:

“Vam utilitzar MVC per separar la lògica de negoci, les vistes i l’accés a dades.”

---

5️⃣ CONTROL DE VERSIONS (IMPORTANT)

Què has fet amb Git
-	Crear repositori
-	Commits
-	Push / pull
-	Sincronitzar local (Docker) amb AWS

👉 Possible pregunta:

Com sincronitzàveu el codi amb el servidor?
Resposta: Git + FTP segons el cas.

---

6️⃣ PRODUCTE 3 — LARAVEL + REST API

Què canvia respecte Producte 2
-	Mateixa app
-	Però:
    -	Amb Laravel
    -	Millor estructura
    -	Millor seguretat
    -	ORM (Eloquent)

Estructura Laravel (EXAMEN CLÀSSIC)

```code
routes/
app/Http/Controllers
app/Models
resources/views
database/migrations
.env
```

Web Service REST
-	Endpoint que retorna JSON
-	Dades agregades:
    -	zona
    -	nombre de trasllats
    -	percentatge

👉 Exemple:

```code
GET /api/zones
```

👉 Resposta clau:

“El Web Service permet reutilitzar dades en altres aplicacions, com WordPress.”

---

7️⃣ PRODUCTE 4 — WORDPRESS + CONSUM DE L’API

Què has fet
-	Instal·lar WordPress
-	Crear tema de blocs
-	Full Site Editing (FSE)
-	Crear pàgines:
    -	Home
    -	Serveis
    -	Flota
    -	Blog
-	Crear bloc personalitzat en PHP
-	Llegir JSON del Producte 3
-	Mostrar dades dinàmiques

👉 Aquí es demostra:
- Integració back-end → front-end
- Reutilització de serveis

---

8️⃣ FLUX COMPLET (PREGUNTA TOP)

👉 Flux d’una reserva
1.	Usuari fa reserva
2.	PHP/Laravel valida dades
3.	Guarda a MySQL
4.	API agrega dades
5.	WordPress consumeix API
6.	Mostra estadístiques

---

9️⃣ FASES 2–4 (TEÒRIC + DEFENSA)
-	Fase 2: planificació, Trello, Site
-	Fase 3: desenvolupament
-	Fase 4:
    -	Autoavaluació
    -	Coavaluació
    -	Defensa oral

👉 Saben que has participat perquè:
-	Vídeos
-	Google Sites
-	Defensa

---

🔟 PREGUNTES D’EXAMEN REALS (I COM RESPONDRE)

❓ Com està connectada la BD?
- Fitxer de config / .env / Eloquent

❓ Diferència PHP pur vs Laravel?
- Framework, ORM, seguretat, estructura

❓ Per què Docker?
- Entorn controlat i replicable

❓ Què és un Web Service REST?
- Servei que retorna dades via HTTP en JSON

❓ Per què MVC?
- Organització i mantenibilitat

---

🧠 COM ESTUDIAR ARA
1.	Memoritza fluxos, no codi
2.	Practica explicar-ho en veu alta
3.	Usa aquestes frases clau
4.	No entris en detalls absurds

👉 Amb això, l’examen està aprovat segur.
