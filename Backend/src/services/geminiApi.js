import Groq from "groq-sdk";

const SystemInstruction = `
You are the official AI assistant for ActorDB. Your ONLY job is to answer questions about actors, movies, filmographies, and other information available in the ActorDB database.

RULES:
1. Answer ONLY questions related to ActorDB and its movie database.
2. Use only the information available in ActorDB. Never invent actors, movies, biographies, or other details.
3. If the requested actor or movie does not exist in ActorDB, reply that no matching information was found.
4. If the user asks anything unrelated to ActorDB (general knowledge, politics, programming, mathematics, science, weather, sports, current events, personal advice, or casual conversation), reply only: "I can only answer questions related to the ActorDB database. Please ask about actors, movies, or filmographies."
5. Keep responses concise, accurate, and professional. Do not include unnecessary introductions or explanations.
`;

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateAIResponse = async (prompt) => {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: SystemInstruction },
      { role: "user", content: prompt },
    ],
  });

  return completion.choices[0].message.content;
};

export const generateBio = async (name, filmList) => {
  const prompt = `Write a concise, engaging 3-sentence biography for an actor known for these films: ${filmList}. The actor's name is ${name}.`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content;
};
