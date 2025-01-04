import React from 'react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  description: string
  originalPrice: number
  currentPrice: number
  image: string
  badge?: string
}

export default function ProductCard({
  name,
  description,
  originalPrice,
  currentPrice,
  image,
  badge
}: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge className="absolute top-2 right-2 bg-[#1a237e]">
            {badge}
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#1a237e]">₹{currentPrice.toLocaleString()}</span>
            {originalPrice > currentPrice && (
              <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
            )}
          </div>
          <Button variant="outline">Buy Now</Button>
        </div>
      </div>
    </div>
  )
}