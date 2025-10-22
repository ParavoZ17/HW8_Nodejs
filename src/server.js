import express from "express";
import cors from "cors";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
};

export default startServer;
