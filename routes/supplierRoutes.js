const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/renderController");

// Render
router.get("/", ctrl.renderSuppliers);
router.get("/new", ctrl.renderNewSupplier);
router.get("/:id/edit", ctrl.renderEditSupplier);

// CRUD
router.post("/", ctrl.createSupplier);
router.put("/:id", ctrl.updateSupplier);
router.delete("/:id", ctrl.deleteSupplier);

module.exports = router;
