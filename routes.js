const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

// Carregar as definições de API
const api_pop_protect = yaml.load(
  fs.readFileSync("./docs/api-pop-protect.yml", "utf8")
);
const api_patch_panel_evolution = yaml.load(
  fs.readFileSync("./docs/api-patch-panel-evolution.yml", "utf8")
);
const api_cadastro_rewatech = yaml.load(
  fs.readFileSync("./docs/api-cadastro-rewatech.yml", "utf8")
);
const api_rewatech = yaml.load(
  fs.readFileSync("./docs/api-rewatech.yml", "utf8")
);
const api_controlador_de_carga_mppt = yaml.load(
  fs.readFileSync("./docs/api-controlador-de-carga-mppt.yml", "utf8")
);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "page.html"));
});

router.use("/api-docs/pop-protect1", swaggerUi.serve);

router.get("/api-docs/pop-protect1", (req, res) => {
  console.log("Acessando a documentação Pop Protect");
  swaggerUi.setup(api_pop_protect)(req, res);
});

router.use("/api-docs/rewatech", swaggerUi.serve);
router.get("/api-docs/rewatech", (req, res) => {
  console.log("Acessando a documentação Rewatech");
  swaggerUi.setup(api_rewatech)(req, res);
});

router.use("/api-docs/patch-panel-evolution", swaggerUi.serve);
router.get("/api-docs/patch-panel-evolution", (req, res) => {
  console.log("Acessando a documentação Patch Panel Evolution");
  swaggerUi.setup(api_patch_panel_evolution)(req, res);
});

router.use("/api-docs/cadastro-rewatech", swaggerUi.serve);
router.get("/api-docs/cadastro-rewatech", (req, res) => {
  console.log("Acessando a documentação Cadastro Rewatech");
  swaggerUi.setup(api_cadastro_rewatech)(req, res);
});

router.use("/api-docs/controlador-de-carga-mppt", swaggerUi.serve);
router.get("/api-docs/controlador-de-carga-mppt", (req, res) => {
  console.log("Acessando a documentação Controlador de Carga MPPT");
  swaggerUi.setup(api_controlador_de_carga_mppt)(req, res);
});

module.exports = router;
