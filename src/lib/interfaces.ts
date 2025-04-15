export interface Item {
  id?: number
  title: string
  type: 'lost' | 'found'
  city: string
  description: string
  imageUrl?: string
  createdAt?: Date
}
