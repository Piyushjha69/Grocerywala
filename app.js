import "dotenv/config";
import Fastify  from "fastify";
import {connectDB} from './src/config/connect.js';

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const app = Fastify(); 
  const PORT = process.env.PORT || 3000;
  
  try {
    await app.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`Blinkit Started on http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();