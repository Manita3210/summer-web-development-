import { Router } from "express";
import { getActorRecommendation } from "../controllers/aiController.js";

const router = Router();

router.post("/actor-recommend", getActorRecommendation);

export default router;
