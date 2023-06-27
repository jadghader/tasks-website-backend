const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.get("/", TaskController.index);
router.post("/", TaskController.add);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.del);

module.exports = router;
