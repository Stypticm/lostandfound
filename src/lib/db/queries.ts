import { prisma } from '../../../lib/prisma'
import { Item } from '../interfaces'
import { supabase } from '../supabase'

export const addItem = async (item: Item) => {
  const createdAt = new Date()

  try {
    const data = await prisma.item.create({
      data: {
        ...item,
        createdAt,
      },
    })
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getLostItems = async () => {
  try {
    const data = await prisma.item.findMany({
      where: { type: 'lost' },
      select: {
        id: true,
        title: true,
        city: true,
        createdAt: true,
      },
    })
    return data.map((item) => ({
      ...item,
      createdAt: new Date(
        item.createdAt
      ).toLocaleDateString('ru-RU'),
    }))
  } catch (error) {
    console.error(error)
  }
}

export const getFoundItems = async () => {
  try {
    const data = await prisma.item.findMany({
      where: { type: 'found' },
      select: {
        id: true,
        title: true,
        city: true,
        createdAt: true,
      },
    })
    return data.map((item) => ({
      ...item,
      createdAt: new Date(
        item.createdAt
      ).toLocaleDateString('ru-RU'),
    }))
  } catch (error) {
    console.error(error)
  }
}

export const deleteItem = async (
  id: number,
  idStorageItem: string
) => {
  try {
    await prisma.item.delete({
      where: { id },
    })
    await supabase.storage
      .from('items')
      .remove([idStorageItem])
  } catch (error) {
    console.error(error)
  }
}

export const getItemById = async (id: number) => {
  try {
    const data = await prisma.item.findUnique({
      where: { id },
    })
    return data
  } catch (error) {
    console.error(error)
  }
}

// export const getMyItems = async (telegramId: string) => {
//   try {
//     const data = await prisma.item.findMany({
//       where: { telegramId },
//     })
//     return data
//   } catch (error) {
//     console.error(error)
//   }
// }
