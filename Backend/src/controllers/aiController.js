import { generateAIResponse, generateBio } from "../services/geminiApi.js";

export const getActorRecommendation = async (req, res) => {
  try {
    const response = await generateAIResponse(req.body.query);
    return res.status(200).json({ data: response });
  } catch (error) {
    if (error.status === 429) {
      res.status(429).json({ error: "Rate limit exceeded." });
    } else if (error.status === 500) {
      res.status(500).json({ error: "Internal server error." });
    } else {
      res
        .status(500)
        .json({ error: error.message || "An unexpected error occurred." });
    }
  }
};

export const writeBio = async (req, res) => {
  try {
    const { name, filmList } = req.body;
    if (!name || !filmList) {
      return res.status(400).json({ error: "name and filmList are required" });
    }
    const bio = await generateBio(name, filmList);
    return res.status(200).json({ data: bio });
  } catch (error) {
    if (error.status === 429) {
      res.status(429).json({ error: "Rate limit exceeded." });
    } else {
      res
        .status(500)
        .json({ error: error.message || "An unexpected error occurred." });
    }
  }
};
