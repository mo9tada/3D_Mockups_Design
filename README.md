# 3D Shirt Customizer

![React](https://img.shields.io/badge/React_19-20232a?logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000?logo=threedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-000?logo=express&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_Images-412991?logo=openai&logoColor=white)

Design a T-shirt in 3D, in the browser: rotate the model, change its colour, upload a logo or full-shirt texture, or generate one from a text prompt with OpenAI's image API.

Built while learning React Three Fiber, following the [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) 3D/AI project, then updated to React 19, Vite 7 and the current OpenAI SDK.

## How it works

```
client/react  (Vite + React Three Fiber)          server  (Express)
 ├── canvas/   Shirt model, camera rig, backdrop    └── POST /api/v1/dalle  → OpenAI Images
 ├── store/    global state with Valtio                  returns a base64 PNG used as a decal
 └── pages/    Home + Customizer (colour, file, AI)
```

- **3D rendering** — `@react-three/fiber` and `drei`, with smooth camera and colour transitions via `maath`
- **State** — a single Valtio proxy store shared by the 3D scene and the UI
- **Animations** — Framer Motion for page and panel transitions
- **AI textures** — the server keeps the OpenAI key; the browser only sends the prompt

## Run locally

```bash
# API
cd server
cp .env.example .env          # add your OPENAI_API_KEY
npm install && npm start      # http://localhost:8000

# Client
cd client/react
cp .env.example .env          # VITE_API_URL=http://localhost:8000
npm install && npm run dev    # http://localhost:5173
```

## Author

**Moktada Zaidi** — [GitHub](https://github.com/mo9tada)
