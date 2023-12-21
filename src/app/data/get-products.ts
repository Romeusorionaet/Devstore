import { api } from './api'
import { Product } from './types/product'

export const getProduct = async (slug: string): Promise<Product> => {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}
