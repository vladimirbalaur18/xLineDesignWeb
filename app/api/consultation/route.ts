import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../server/storage';
import { insertConsultationRequestSchema } from '../../../shared/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = insertConsultationRequestSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { 
          error: 'Invalid request data', 
          details: validatedData.error.format() 
        }, 
        { status: 400 }
      );
    }
    
    // Save the consultation request
    const savedRequest = await storage.saveConsultationRequest(validatedData.data);
    
    return NextResponse.json(
      { message: 'Consultation request received successfully', data: savedRequest },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error handling consultation request submission:', error);
    return NextResponse.json(
      { error: 'Failed to process consultation request' },
      { status: 500 }
    );
  }
}