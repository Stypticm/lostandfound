import { NextResponse } from 'next/server'
import { getItemById } from '@/lib/db/queries'

export async function GET(
  req: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params
  const item = await getItemById(id)
  return NextResponse.json(item)
}
