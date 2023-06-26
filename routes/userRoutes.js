import { Router } from "express";
import { userService } from "../services/userService.js";
import { createUserValid, updateUserValid } from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get("/api/users", (req, res, next) => {
  const users = getAllUsers();
  res.data = users;
  next();
});

router.get("/api/users/:id", (req, res, next) => {
  const { id } = req.params;

  const user = getUserById(id);

  if (!user) {
    res.status(404).json({ error: true, message: "User not found" });
  } else {
    res.data = user;
  }

  next();
});

router.post("/api/users", createUserValid, (req, res, next) => {
  const userData = req.body;

  const createdUser = createUser(userData);

  res.data = createdUser;
  next();
});

router.put("/api/users/:id", updateUserValid, (req, res, next) => {
  const { id } = req.params;
  const updatedUserData = req.body;

  const updatedUser = updateUser(id, updatedUserData);

  if (!updatedUser) {
    res.status(404).json({ error: true, message: "User not found" });
  } else {
    res.data = updatedUser;
  }

  next();
});

router.delete("/api/users/:id", (req, res, next) => {
  const { id } = req.params;

  const deletedUser = deleteUser(id);

  if (!deletedUser) {
    res.status(404).json({ error: true, message: "User not found" });
  } else {
    res.data = deletedUser;
  }

  next();
});

export { router };
