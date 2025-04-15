export interface Item {
  id?: string
  title: string
  type: 'lost' | 'found'
  city: string
  description: string
  imageUrl?: string
  createdAt?: Date
}
