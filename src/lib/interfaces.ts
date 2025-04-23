export interface Item {
  id?: number
  title: string
  type: 'lost' | 'found'
  city: string
  description: string
  imageUrl?: string | null
  createdAt?: string | undefined
  telegramId?: string | null
}
