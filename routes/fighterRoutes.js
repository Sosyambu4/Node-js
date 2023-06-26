import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import { createFighterValid, updateFighterValid } from "../middlewares/fighter.validation.middleware.js";

const router = Router();
router.get("/api/fighters", (req, res, next) => {
  const fighters = getAllFighters();

  res.data = fighters;
  next();
});

router.get("/api/fighters/:id", (req, res, next) => {
  const { id } = req.params;

  const fighter = getFighterById(id);

  if (!fighter) {
    res.status(404).json({ error: true, message: "Fighter not found" });
  } else {
    res.data = fighter;
  }

  next();
});

router.post("/api/fighters", createFighterValid, (req, res, next) => {
  const fighterData = req.body;

  const createdFighter = createFighter(fighterData);

  res.data = createdFighter;
  next();
});

router.put("/api/fighters/:id", updateFighterValid, (req, res, next) => {
  const { id } = req.params;
  const updatedFighterData = req.body;

  const updatedFighter = updateFighter(id, updatedFighterData);

  if (!updatedFighter) {
    res.status(404).json({ error: true, message: "Fighter not found" });
  } else {
    res.data = updatedFighter;
  }

  next();
});

router.delete("/api/fighters/:id", (req, res, next) => {
  const { id } = req.params;

  const deletedFighter = deleteFighter(id);

  if (!deletedFighter) {
    res.status(404).json({ error: true, message: "Fighter not found" });
  } else {
    res.data = deletedFighter;
  }

  next();
});

export { router };
