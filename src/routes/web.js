const express = require("express");
const {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/create", getCreatePage);
router.get("/update/:userId", getUpdatePage);
router.post("/delete_user/:userId", postDeleteUser);
router.post("/delete_user", postHandleRemoveUser);
router.post("/update_user", postUpdateUser);
router.post("/create_user", postCreateUser);

module.exports = router;
