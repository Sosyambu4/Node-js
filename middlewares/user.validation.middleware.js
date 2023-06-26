import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  const { id, firstName, lastName, email, phoneNumber, password } = req.body;

  if (id) {
    res.status(400).json({ error: true, message: "Id should not be present" });
  } else if (!firstName || !lastName || !email || !phoneNumber || !password) {
    res.status(400).json({ error: true, message: "Missing required fields" });
  } else if (firstName.trim().length === 0 || lastName.trim().length === 0) {
    res.status(400).json({ error: true, message: "First name and last name should not be empty" });
  } else if (!email.endsWith("@gmail.com")) {
    res.status(400).json({ error: true, message: "Email should be a valid @gmail.com address" });
  } else if (!phoneNumber.match(/^\+380\d{9}$/)) {
    res.status(400).json({ error: true, message: "Phone number should be in the format +380xxxxxxxxx" });
  } else if (password.length < 3) {
    res.status(400).json({ error: true, message: "Password should have a minimum of 3 characters" });
  } else {
    next();
  }
};

const updateUserValid = (req, res, next) => {
  const { id, firstName, lastName, email, phoneNumber, password } = req.body;

  if (!id) {
    res.status(400).json({ error: true, message: "Id is required for updating a user" });
  } else if (!firstName && !lastName && !email && !phoneNumber && !password) {
    res.status(400).json({ error: true, message: "At least one field should be present for update" });
  } else if (firstName && firstName.trim().length === 0) {
    res.status(400).json({ error: true, message: "First name should not be empty" });
  } else if (lastName && lastName.trim().length === 0) {
    res.status(400).json({ error: true, message: "Last name should not be empty" });
  } else if (email && !email.endsWith("@gmail.com")) {
    res.status(400).json({ error: true, message: "Email should be a valid @gmail.com address" });
  } else if (phoneNumber && !phoneNumber.match(/^\+380\d{9}$/)) {
    res.status(400).json({ error: true, message: "Phone number should be in the format +380xxxxxxxxx" });
  } else if (password && password.length < 3) {
    res.status(400).json({ error: true, message: "Password should have a minimum of 3 characters" });
  } else {
    next();
  }
};
export { createUserValid, updateUserValid };
