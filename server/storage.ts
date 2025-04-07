import {
  users,
  contactMessages, 
  consultationRequests,
  type User,
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
  type ConsultationRequest,
  type InsertConsultationRequest
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  saveContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Consultation request methods
  saveConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequests(): Promise<ConsultationRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private consultationRequests: Map<number, ConsultationRequest>;
  private userCurrentId: number;
  private contactMessageCurrentId: number;
  private consultationRequestCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.consultationRequests = new Map();
    this.userCurrentId = 1;
    this.contactMessageCurrentId = 1;
    this.consultationRequestCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact message methods
  async saveContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const contactMessage: ContactMessage = { ...message, id };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  // Consultation request methods
  async saveConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = this.consultationRequestCurrentId++;
    const consultationRequest: ConsultationRequest = { ...request, id };
    this.consultationRequests.set(id, consultationRequest);
    return consultationRequest;
  }
  
  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return Array.from(this.consultationRequests.values());
  }
}

export const storage = new MemStorage();
