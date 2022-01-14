const { Router } = require("express");
const router = Router();

let texto = `Retro crucifix enamel pin normcore sartorial seitan DIY adipisicing consectetur
ipsum nulla vexillologist cillum. Scenester tattooed lumbersexual green juice, bitters
qui fixie. Tacos consectetur post-ironic, cred before they sold out skateboard coloring
book biodiesel. Drinking vinegar officia blog, exercitation nulla qui raclette vape irure
Aesthetic ad shoreditch put a bird on it gentrify dolor shabby chic you probably
haven't heard of them helvetica farm-to-table blue bottle kitsch `;

// indpoint 1
router.get("/greetings", (req, res) => {
  res.json({ message: "Hello" });
});

// indpoint 2
router.post("/greetings", (req, res) => {
  const name = req.body.name;
  if (typeof name !== "string") {
    res.status(400).json({
      message: "Formato incorrecto",
    });
  } else {
    res.json({ massage: `Hello ${name}` });
  }
});

// indpoint 3
router.post("/search", (req, res) => {
  const search = req.body.search;

  const s = search;
  function existe(texto, s) {
    return texto.indexOf(s);
  }
  if (!s) {
    res.json({ comprobar: { existe } });
  } else {
    res.json("error");
  }
});

//endpoint 4
router.get("/slice/:position", (req, res, next) => {
  const position = parseInt(req.params.position);
  if (position < 0 || position > texto.length - 1) {
    res.status(400).json({ message: "Posición inválida" });
  }
  res.json({ item: texto[position] });
});

module.exports = router;
