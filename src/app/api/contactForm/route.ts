import { getContactFormData } from '@/lib/contactForm'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const {name, email, opinion} = await req.json();
	const fullMessage = getContactFormData(name, email, opinion);
	return NextResponse.json(fullMessage);
}