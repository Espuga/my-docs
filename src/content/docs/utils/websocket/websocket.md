---
title: 🌐 WebSocket (React - Python)
description: Live WebSocket between python and React
---

Aquesta guia mostra com muntar una connexió **WebSocket** entre:

- **Backend:** Python amb **FastAPI** + **Uvicorn**
- **Frontend:** **React + TypeScript**

L’objectiu és que el backend vagi enviant un missatge al frontend **cada 1 segon** (prova simple).

---

## ✅ Backend (FastAPI + Uvicorn)

### Instal·lació

⚠️ Important: per WebSockets, Uvicorn necessita una llibreria compatible.

Recomanat:

```bash
pip install fastapi "uvicorn[standard]"
```

Això instal·la també websockets (i altres extras útils).

---

Exemple de servidor WebSocket

Crea main.py:

```main.py
import asyncio
from datetime import datetime

from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

@app.websocket("/ws")
async def ws_endpoint(ws: WebSocket):
  await ws.accept()
  counter = 0

  try:
    while True:
      counter += 1

      payload = {
        "type": "tick",
        "counter": counter,
        "ts": datetime.utcnow().isoformat() + "Z",
      }

      await ws.send_json(payload)
      await asyncio.sleep(1)

  except WebSocketDisconnect:
    print("Client disconnected")
```

---

Arrencar el servidor

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Endpoint WebSocket:
-	ws://localhost:8000/ws

---

✅ Frontend (React + TypeScript)

Component de prova

Crea WsDemo.tsx:
```WsDemo.tsx
import React, { useEffect, useRef, useState } from "react";

type TickMsg = {
  type: "tick";
  counter: number;
  ts: string;
};

export default function WsDemo() {
  const [status, setStatus] = useState<"connecting" | "open" | "closed" | "error">("connecting");
  const [messages, setMessages] = useState<TickMsg[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const wsUrl = "ws://localhost:8000/ws";
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setStatus("open");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as TickMsg;
        setMessages((prev) => [data, ...prev].slice(0, 50));
      } catch (err) {
        console.error("Error parsing message:", err);
      }
    };

    ws.onerror = () => {
      setStatus("error");
    };

    ws.onclose = () => {
      setStatus("closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h2>WebSocket demo</h2>
      <p>
        Status: <b>{status}</b>
      </p>

      <ul>
        {messages.map((m, i) => (
          <li key={i}>
            #{m.counter} — {m.ts}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

✅ Notes importants

1) Error típic: “No supported WebSocket library detected”

Si surt aquest warning:

WARNING: No supported WebSocket library detected…

Solució:

```bash
pip install "uvicorn[standard]"
```

---

2) Ports diferents (React i FastAPI)

Normalment:
-	React (Vite): http://localhost:5173
-	FastAPI: http://localhost:8000

El WebSocket es connecta igual apuntant a:
-	ws://localhost:8000/ws

---

✅ Exemple de missatge enviat

El backend envia JSON com aquest:

```JSON
{
  "type": "tick",
  "counter": 3,
  "ts": "2026-01-18T12:00:00.000Z"
}
```

---

✅ Millores possibles (ideas)
-	Reconnect automàtic si cau la connexió
-	Broadcast (enviar a múltiples clients connectats)
-	Autenticació (JWT / headers)
-	Rooms / channels per subscripcions
-	Guardar logs i traçabilitat (observability)
