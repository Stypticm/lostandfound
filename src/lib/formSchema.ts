import { z } from 'zod'

export const baseFormSchema = z.object({
  title: z.string().min(4),
  city: z.string().min(5),
  description: z.string().min(10),
  imageUrl: z.string().url().optional(),
})

export type FormValues = z.infer<typeof baseFormSchema>

type Dict = Record<string, string>

export const formSchema = (dict: Dict) =>
  baseFormSchema.extend({
    title: z
      .string()
      .min(4, { message: dict['messageFormTitl'] }),
    city: z
      .string()
      .min(5, { message: dict['messageFormCity'] }),
    description: z
      .string()
      .min(10, { message: dict['messageFormDesc'] }),
  })
