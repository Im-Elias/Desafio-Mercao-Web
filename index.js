import express from "express";
import exphbs from "express-handlebars";
import path from "path";

// Configuraciones
const app = express();
const __dirname = path.resolve();
const port = 3000;

// Server start
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

// Configuración de Handlebars
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    extname: "hbs",
  })
);

// Configuración de archivos estáticos
app.use(express.static("assets"));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist")); // no se ocupa, pero lo pide de requerimiento

// Rutas
app.get("/", (req, res) => {
  res.render("main", {
    producto: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
  });
});
