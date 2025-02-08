import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/notes", async (req: Request, res: Response) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
});

app.post("/notes", async (req: Request, res: Response) => {
  // Extract title & content from request body
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).send("title and content fields required");
  }

  try {
    // Create a new note
    const note = await prisma.note.create({
      data: { title, content },
    });

    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.put("/notes/:id", async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const id = parseInt(req.params.id);

  if (!title || !content) {
    res.status(400).send("title and content fields required");
  }

  if (!id || isNaN(id)) {
    res.status(400).send("ID must be a valid number");
  }

  try {
    const updatedNote = await prisma.note.update({
      where: { id },
      data: { title, content },
    });
    res.json(updatedNote);
  } catch (error) {
    res.status(500).send("Oops, something went wrong");
  }
});

app.delete("/notes/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (!id || isNaN(id)) {
    res.status(400).send("ID field required");
  }

  try {
    await prisma.note.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Oops, something went wrong");
  }
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});
