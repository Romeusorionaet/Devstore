import { api } from './api'
import { Product } from './types/product'

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products.featuredProducts
}
