const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/renderController");

// Render
router.get("/", ctrl.renderProducts);
router.get("/new", ctrl.renderNewProduct);
router.get("/:id/edit", ctrl.renderEditProduct);

// CRUD
router.post("/", ctrl.createProduct);
router.put("/:id", ctrl.updateProduct);
router.delete("/:id", ctrl.deleteProduct);

module.exports = router;
