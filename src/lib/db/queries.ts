import { prisma } from '../../../lib/prisma'
import { Item } from '../interfaces'

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
