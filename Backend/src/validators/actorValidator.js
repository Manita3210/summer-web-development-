import { body, validationResult } from "express-validator";

const actorRules = [
  body("name")
    .notEmpty()
    .isString()
    .trim()
    .withMessage("Name is required, must be string"),

  body("totalFilms")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Total film is required, must be in positive integer"),
];

const handleActorValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export { actorRules, handleActorValidation };
