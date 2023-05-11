export const prerender = true;

export const load = async () => {
    let products = [
        {
          image: '/images/product-1.webp',
          class: 'rotate-2'
        },
        {
          image: '/images/product-2.webp',
          class: '-rotate-2'
        },
        {
          image: '/images/product-3.webp',
          class: 'rotate-2'
        },
        {
          image: '/images/product-4.webp',
          class: '-rotate-2'
        },
        {
          image: '/images/product-5.webp',
          class: 'rotate-2'
        },
        {
          image: '/images/product-6.webp',
          class: 'rotate-2'
        },
        {
          image: '/images/product-7.webp',
          class: '-rotate-2'
        },
        {
          image: '/images/product-8.webp',
          class: 'rotate-2'
        },
        {
          image: '/images/product-9.webp',
          class: '-rotate-2'
        },
        {
          image: '/images/product-10.webp',
          class: 'rotate-2'
        },
      ]
    return {
        products
    }
}