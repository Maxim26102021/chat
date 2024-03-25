import express from "express";
import { createServer } from "node:http";

class App {
  public express: express.Application;
}

const app = express();
const server = createServer(app);

const a = 9;

app.get("/", (req: any, res: any) => {
  console.log(req);
  res.send("<h1>Hello world</h1>");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
