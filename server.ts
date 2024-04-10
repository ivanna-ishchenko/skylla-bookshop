import express, { Request, Response } from "express";
import axios from "axios";
import path from "path";

const app = express();
const port = process.env.PORT || 3050;

// Serve the client
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api/books", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=nosql"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle other routes
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
