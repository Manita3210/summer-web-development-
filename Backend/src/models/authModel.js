import User from "../../data/user.js";
import bcrypt from "bcryptjs";

export async function register(userDetails) {
  const existing = await User.findOne({ email: userDetails.email });
  if (existing) throw new Error("Email is already registered");
  return await User.create(userDetails);
}

export async function login({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
}

export async function getUserById(id) {
  return await User.findById(id);
}
