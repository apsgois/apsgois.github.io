const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Swagger docs disponível em http://localhost:3000");
});
