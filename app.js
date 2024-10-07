import "dotenv/config";
import Fastify from "fastify";
import { connectDB } from './src/config/connect.js';
import { buildAdminRouter, admin } from './src/admin.js';  // Update this path

const start = async () => {
  const PORT = process.env.PORT || 3000;
  
  try {
    // Connect to the database
    await connectDB(process.env.MONGO_URI);
    
    // Create Fastify app
    const app = Fastify();
    
    // Build and register the admin router
    await buildAdminRouter(app);
    
    // Start the server
    await app.listen({ port: PORT, host: "0.0.0.0" });
    
    console.log(`Blinkit Started on http://localhost:${PORT}${admin.options.rootPath}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();