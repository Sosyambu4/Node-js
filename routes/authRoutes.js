import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = findUserByEmailAndPassword(email, password);

      if (!user) {
        res.status(404).json({ error: true, message: "User not found or invalid credentials" });
      } else {
        res.data = user;
      }
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

export { router };
