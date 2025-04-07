import { NextResponse, type NextRequest } from 'next/server'
import { insertContactMessageSchema } from '../../../shared/schema'
import { storage } from '../../../server/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = insertContactMessageSchema.parse(body)
    
    // Save the contact message using our storage implementation
    const savedMessage = await storage.saveContactMessage(validatedData)
    
    return NextResponse.json(
      { success: true, message: 'Contact message sent successfully', data: savedMessage },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in contact API route:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 400 }
    )
  }
}