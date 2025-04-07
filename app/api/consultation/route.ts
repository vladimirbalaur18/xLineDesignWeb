import { NextResponse, type NextRequest } from 'next/server'
import { insertConsultationRequestSchema } from '../../../shared/schema'
import { storage } from '../../../server/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body using our schema
    const validatedData = insertConsultationRequestSchema.parse(body)
    
    // Save the consultation request
    const savedConsultation = await storage.saveConsultationRequest(validatedData)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request received successfully', 
        data: savedConsultation 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in consultation API route:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 400 }
    )
  }
}