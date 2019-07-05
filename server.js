const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const nextI18NextMiddleware = require("next-i18next/middleware");
const nextI18next = require("./i18n");

app.prepare().then(() => {
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.get("/productDetail/:id", (req, res) => {
    return app.render(req, res, "/productDetail", { id: req.params.id });
  });

  server.get("/posts/:id", (req, res) => {
    return app.render(req, res, "/posts", { id: req.params.id });
  });

  server.get("/product/:id", (req, res) => {
    return app.render(req, res, "/product", { id: req.params.id });
  });

  server.get("/result/:id", (req, res) => {
    return app.render(req, res, "/result", { id: req.params.id });
  });

  server.get("/blog/:id", (req, res) => {
    return app.render(req, res, "/blog", { id: req.params.id });
  });

  server.get("/work/:id", (req, res) => {
    return app.render(req, res, "/work", { id: req.params.id });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
