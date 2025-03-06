# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Pre requisito:
### Start
- [React](https://www.npmjs.com/package/react): Executar a linha de comando `npm i react`, mas utilizaremos [Vite](https://www.npmjs.com/package/vite) para criar a estrutura basica e um package.json. Executar o comando: `npm create vite@latest`
- Instalar a biblioteca Axios para conectar com o backend. Executando o comando: `npm install axios`
- Para funcionar devidamente, é necessário conectar a uma API.
### Clone
- Para instalar as bibliotecas mapeadas no package.json, execute: `npm install`
- Para executar o projeto, execute: `npm run dev`
### CORS
- Caso retorne erro de CORS, executar: `npm install cors`;
- Importar no server.js: `import cors from 'cors'`
- Insira no código do backend: `app.use(cors(https://localhost:XXXX)) front door`