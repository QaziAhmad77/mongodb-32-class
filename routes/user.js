const express = require('express');
const router = express.Router();

const userControllers = require("../controllers/user");


router.post("/",userControllers.post);

router.get("/",userControllers.getAll);

router.get("/:userId",userControllers.getSingle);

router.put("/:userId",userControllers.update);

router.delete("/:useerId",userControllers.deleted);

module.exports = router;