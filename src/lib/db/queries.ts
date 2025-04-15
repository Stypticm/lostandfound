import { Item } from '@/lib/interfaces'

import { v4 as uuidv4 } from 'uuid'
import { prisma } from '../../../lib/prisma'

export const addItem = async (item: Item) => {
  const id = uuidv4()
  const createdAt = new Date()

  try {
    const data = await prisma.item.create({
      data: {
        id,
        ...item,
        createdAt,
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
