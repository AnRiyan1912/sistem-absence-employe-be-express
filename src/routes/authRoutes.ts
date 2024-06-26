import { Router } from "express";
import { authController } from "../controller/authController";
import { fileUpload } from "../lib/multer";

const express = require("express");
export const router: Router = express.Router();

router.post(
  "/register",
  fileUpload("profile", "profile", "image").single("image"),
  authController.register.bind(authController)
);
router.post("/login", authController.login.bind(authController));
router.post("/refresh_token", authController.refreshToken.bind(authController));
router.post(
  "/forgot_password",
  authController.onForgotPassword.bind(authController)
);
router.post(
  "/verify_code",
  authController.verifyCodeForgotPassword.bind(authController)
);
router.post(
  "/update_password",
  authController.updatePassword.bind(authController)
);
