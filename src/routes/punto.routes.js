const { Router } = require("express");
const {
  createPunto,
  getAllPunto,
  getPunto,
  deletePunto,
} = require("../controllers/punto.controller");

const router = Router();

// create a task
router.post("/tasks", createPunto);

router.get("/tasks", getAllPunto);

router.get("/tasks/:id", getPunto);



router.delete("/tasks/:id", deletePunto);

module.exports = router;
