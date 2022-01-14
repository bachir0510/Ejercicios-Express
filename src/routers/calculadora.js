const e = require("express");
const { Router } = require("express");
const router = Router();

// endpoint 1
router.post("/suma", (req, res) => {
  const a = req.body.a;
  const b = req.body.a;
  const suma = a + b;

  if (typeof a !== "numbre" && typeof b !== "number") {
    res.status(400).json({
      message: "Formato incorrecto",
    });
  } else {
    res.json({ suma: suma });
  }
});

// endpoint 2
router.post("/porcentaje", (req, res) => {
  const porcentaje = req.body.porcentaje;
  const x = req.body.x;

  if (typeof x !== "numbre" && typeof porcentaje !== "number") {
    res.status(400).json({
      message: "Formato incorrecto",
    });
  } else {
    res.json({
      ecuacion: (x / 100) * porcentaje,
    });
  }
});

// endpoint 3
router.post("/opera", (req, res) => {
  const operador = req.body.operador;
  const numberes = req.body.numberes;
  const operacion = numberes.reduce(cualquierOperacion);
  res.json({});

  if (typeof operador !== "numbre" && typeof numberes !== "number") {
    res.status(400).json({
      message: "Formato incorrecto",
    });
  } else {
    function cualquierOperacion(numberes) {
      return `${numberes}${operador}`;
    }
  }
  res.json({ operacion: operacion });
});

module.exports = router;
