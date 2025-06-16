import { NextRequest } from 'next/server';
import { prisma } from '@lib/prisma';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const data = await req.json();

  try {
    const updatedItem = await prisma.item.update({
      where: { id },
      data: {
        title: data.title,
        city: data.city,
        description: data.description,
        imageUrl: data.imageUrl,
        type: data.type,
      },
    });

    return Response.json(updatedItem);
  } catch (error) {
    console.error(error);
    return new Response('Ошибка при обновлении', {
      status: 500,
    });
  }
}
