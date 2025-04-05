import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body using Zod schema
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Create in-memory storage for this demo
      const result = {
        id: Date.now(),
        ...contactData,
        createdAt: new Date().toISOString()
      };
      
      // Return success response
      res.status(201).json({
        message: "Message received successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        return res.status(400).json({
          message: "Invalid input data",
          errors: error.errors
        });
      }
      
      // Handle other errors
      console.error("Error processing contact form:", error);
      res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
