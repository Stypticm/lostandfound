import { addItem } from '@/lib/db/queries';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('DATABASE_URL on Vercel:', process.env.DATABASE_URL);

  const body = await req.json();
  const item = await addItem(body);
  return NextResponse.json(item, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
