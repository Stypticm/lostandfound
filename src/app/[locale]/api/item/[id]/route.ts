import { NextResponse, NextRequest } from 'next/server';
import { getItemById } from '@/lib/db/queries';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const item = await getItemById(Number(id));
  return NextResponse.json(item);
}
