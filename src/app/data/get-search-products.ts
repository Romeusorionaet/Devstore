import { api } from './api'
import { Product } from './types/product'

export const getSearchProducts = async (query: string): Promise<Product[]> => {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}
