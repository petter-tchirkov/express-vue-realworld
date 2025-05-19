import type { Request, Response } from "express";

import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";

import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function register(req: Request, res: Response) {
  const { email, username, password } = req.body;

  let user = await prisma.user.findFirst({ where: { email } });
  if (user)
    throw new Error("User already exists");

  user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashSync(password, 10),
    },
  });
  res.json(user);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({ where: { email } });
  if (!user) {
    res.status(401).send("User not found");
  }
  if (!compareSync(password, user!.password)) {
    res.status(401).send("Password is incorrect");
  }

  const token = jwt.sign({ username: user!.username }, process.env.JWT_SECRET!);

  res.json({ user: token });
}
