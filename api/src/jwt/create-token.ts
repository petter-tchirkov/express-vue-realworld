import type { User } from "@prisma/client";

import jwt from "jsonwebtoken";
import crypto from "node:crypto";

export function generateAccessToken(user: User) {
  return jwt.sign({ userId: user.name }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
}

export function generateRefreshtoken() {
  const token = crypto.randomBytes(16).toString("base64url");
  return token;
}
