import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
var __dirname = path.resolve();
const vite = await createViteServer({
	server: { middlewareMode: true },
	appType: "custom",
});
let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
template = await vite.transformIndexHtml("", template);
const { render } = await vite.ssrLoadModule("/src/entry-server.js");
