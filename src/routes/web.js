const express = require("express");
const {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/create", getCreatePage);
router.get("/update/:userId", getUpdatePage);
router.post("/update_user", postUpdateUser);
router.post("/create_user", postCreateUser);

module.exports = router;
