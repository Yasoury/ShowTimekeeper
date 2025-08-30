import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve app-ads.txt file
  app.get("/app-ads.txt", (req, res) => {
    const appAdsPath = path.join(process.cwd(), "public", "app-ads.txt");
    
    if (fs.existsSync(appAdsPath)) {
      res.setHeader('Content-Type', 'text/plain');
      res.sendFile(appAdsPath);
    } else {
      res.status(404).send('app-ads.txt not found');
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      service: "Show Timekeeper Landing Page"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
