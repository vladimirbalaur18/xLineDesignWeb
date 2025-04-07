import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../server/storage';
import { insertContactMessageSchema } from '../../../shared/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = insertContactMessageSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { 
          error: 'Invalid request data', 
          details: validatedData.error.format() 
        }, 
        { status: 400 }
      );
    }
    
    // Save the contact message
    const savedMessage = await storage.saveContactMessage(validatedData.data);
    
    return NextResponse.json(
      { message: 'Contact message received successfully', data: savedMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process contact message' },
      { status: 500 }
    );
  }
}