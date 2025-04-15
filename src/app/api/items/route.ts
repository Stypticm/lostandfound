import { addItem } from '@/lib/db/queries'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const item = await addItem(body)
  return NextResponse.json(item)
}
