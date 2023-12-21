import { ImageResponse } from 'next/server'
import { ProductProps } from './page'
import colors from 'tailwindcss/colors'
import { getProduct } from '@/app/data/get-products'
import { env } from '@/app/env'

export const runtime = 'edge'

export const alt = ''

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OgImage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img style={{ width: '100%' }} src={productImageURL} alt="" />
      </div>
    ),
    {
      ...size,
    },
  )
}
