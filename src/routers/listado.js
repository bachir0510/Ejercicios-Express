const e = require("express");
const { Router } = require("express");
const router = Router();

let list = [
  "apple",
  "house",
  2,
  30008,
  "Fullstack Development",
  "Nuclio Digital School",
];

// endpoint 1
router.get("/", (req, res) => {
  list.forEach((i, n) => {
    res.json(list);
  });
});

// endpoint 2
router.get("/:posicion", (req, res) => {
  const position = req.params.posicion;
  res.json({ item: list[position] });
});

// endpoint 3
let listNumbre = [2, 30008];

let listNumbreSort = listNumbre.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a > b) {
    return -1;
  }
  return 1;
});

let listString = [
  "apple",
  "house",
  "Fullstack Development",
  "Nuclio Digital School",
];

let listStringSort = listString.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a == b) {
    return 0;
  }
  if (a > b) {
    return -1;
  }
  return 1;
});
console.log(`${listNumbreSort} ${listStringSort}`);

router.get("/sorted", (req, res) => {
  res.json({ list: `${listNumbreSort} ${listStringSort}` });
});

// endpoint 4
router.post("/substitute", (req, res) => {
  const element = req.body.element;
  const position = req.params.posicion;
  if (element) {
    res.json({ item: list[position] });
  }
});
module.exports = router;
