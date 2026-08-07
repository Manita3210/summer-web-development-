import { Router } from "express";
import {
  getActorRecommendation,
  writeBio,
} from "../controllers/aiController.js";

const router = Router();

router.post("/actor-recommend", getActorRecommendation);
router.post("/write-bio", writeBio);
export default router;
