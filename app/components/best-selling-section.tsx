import React from 'react'
import ProductCard from './product-card'

const bestSellingProducts = [
  {
    name: "DREAMLINE 34 DESIGNER FULL WARDROBE",
    description: "DESIGNER STEEL DOMESTIC ALMIRAH",
    originalPrice: 21884,
    currentPrice: 17507,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400&h=400",
    badge: "Best Seller"
  },
  {
    name: "DREAMLINE 40 DESIGNER FULL WARDROBE",
    description: "DESIGNER STEEL DOMESTIC ALMIRAH",
    originalPrice: 23599,
    currentPrice: 18599,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=400&h=400",
    badge: "Best Seller"
  },
  {
    name: "DREAMLINE 40 FULL WARDROBE",
    description: "POWDER COATED DOMESTIC ALMIRAH",
    originalPrice: 22599,
    currentPrice: 17599,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "DREAMLINE 34 FULL WARDROBE",
    description: "POWDER COATED DOMESTIC ALMIRAH",
    originalPrice: 19999,
    currentPrice: 16507,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=400&h=400"
  }
]

export default function BestSellingSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a237e] text-center mb-12">Best Selling Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellingProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}