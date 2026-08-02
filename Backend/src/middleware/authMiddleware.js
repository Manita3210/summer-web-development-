import { verifyToken } from "../utils/auth.js";

export function protect(req, res, next) {
  const token = req.cookies["jwt-token"];
  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }
  try {
    const decoded = verifyToken(token);
    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin;
    next();
  } catch {
    return res.status(401).json({ error: "Not authorized, invalid token" });
  }
}
