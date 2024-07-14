import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.post("/", async (req, res) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
    }
  })

  res.status(201).json({ message: "User created successfully" })
})

app.listen(3000)