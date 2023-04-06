const express = require("express");
const { login, register } = require("../controllers/auth.js");

const router = express.Router();

// Route pour créer un nouveau compte utilisateur
router.post("/register", register)

// Route pour se connecter à un compte existant
router.post("/login", login)

module.exports = router;
