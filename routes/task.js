const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.get("/", TaskController.index);
router.get("/:id", TaskController.show);
router.post("/", TaskController.add);
router.put("/", TaskController.update);

module.exports = router;
