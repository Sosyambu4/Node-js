import { Router } from "express";
import { fightersService } from "../services/fightService.js";
import { createUserValid, updateUserValid } from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get("/api/fights", (req, res, next) => {
  const fights = getAllFights();

  res.data = fights;
  next();
});

router.get("/api/fights/:id", (req, res, next) => {
  const { id } = req.params;

  const fight = getFightById(id);

  if (!fight) {
    res.status(404).json({ error: true, message: "Fight not found" });
  } else {
    res.data = fight;
  }

  next();
});

router.post("/api/fights", createFightValid, (req, res, next) => {
  const fightData = req.body;

  const createdFight = createFight(fightData);

  res.data = createdFight;
  next();
});

router.put("/api/fights/:id", updateFightValid, (req, res, next) => {
  const { id } = req.params;
  const updatedFightData = req.body;

  const updatedFight = updateFight(id, updatedFightData);

  if (!updatedFight) {
    res.status(404).json({ error: true, message: "Fight not found" });
  } else {
    res.data = updatedFight;
  }

  next();
});

router.delete("/api/fights/:id", (req, res, next) => {
  const { id } = req.params;

  const deletedFight = deleteFight(id);

  if (!deletedFight) {
    res.status(404).json({ error: true, message: "Fight not found" });
  } else {
    res.data = deletedFight;
  }

  next();
});

export { router };
