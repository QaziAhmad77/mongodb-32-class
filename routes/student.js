const express = require('express');
const router = express.Router();

const studentControllers = require("../controllers/student");


router.post("/",studentControllers.post);

router.get("/",studentControllers.getAll);

router.get("/:studentId",studentControllers.getSingle);

router.put("/:studentId",studentControllers.update);

router.delete("/:studentId",studentControllers.deleted);

module.exports = router;