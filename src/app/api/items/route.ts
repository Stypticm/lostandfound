import { addItem } from '@/lib/db/queries';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log('DATABASE_URL on Vercel:', process.env.DATABASE_URL);

    const body = await req.json();
    const item = await addItem(body);
    return NextResponse.json(item, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error: any) {
    let errorMessage = 'Something went wrong';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('API Error:', error);

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
