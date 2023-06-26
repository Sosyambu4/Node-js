import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  const { id, name, power, defense, health } = req.body;

  if (id) {
    res.status(400).json({ error: true, message: "Id should not be present" });
  } else if (!name || !power || !defense) {
    res.status(400).json({ error: true, message: "Missing required fields" });
  } else if (name.trim().length === 0) {
    res.status(400).json({ error: true, message: "Name should not be empty" });
  } else if (typeof power !== "number" || power < 1 || power > 100) {
    res.status(400).json({ error: true, message: "Power should be a number between 1 and 100" });
  } else if (typeof defense !== "number" || defense < 1 || defense > 10) {
    res.status(400).json({ error: true, message: "Defense should be a number between 1 and 10" });
  } else if (health && (typeof health !== "number" || health < 80 || health > 120)) {
    res.status(400).json({ error: true, message: "Health should be a number between 80 and 120" });
  } else {
    next();
  }
};

const updateFighterValid = (req, res, next) => {
  const { id, name, power, defense, health } = req.body;

  if (!id) {
    res.status(400).json({ error: true, message: "Id is required for updating a fighter" });
  } else if (!name && !power && !defense && !health) {
    res.status(400).json({ error: true, message: "At least one field should be present for update" });
  } else if (name && name.trim().length === 0) {
    res.status(400).json({ error: true, message: "Name should not be empty" });
  } else if (power && (typeof power !== "number" || power < 1 || power > 100)) {
    res.status(400).json({ error: true, message: "Power should be a number between 1 and 100" });
  } else if (defense && (typeof defense !== "number" || defense < 1 || defense > 10)) {
    res.status(400).json({ error: true, message: "Defense should be a number between 1 and 10" });
  } else if (health && (typeof health !== "number" || health < 80 || health > 120)) {
    res.status(400).json({ error: true, message: "Health should be a number between 80 and 120" });
  } else {
    next();
  }
};

export { createFighterValid, updateFighterValid };
