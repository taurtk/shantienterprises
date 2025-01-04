import React from 'react'
import { ShieldCheck, Wind, Bed, Grid } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: "Designer Metal Almirah",
    description: "Premium quality steel almirahs with modern designs"
  },
  {
    icon: Wind,
    title: "Energy Efficient Metal Air Cooler",
    description: "Eco-friendly cooling solutions for your space"
  },
  {
    icon: Bed,
    title: "Metal Steel Beds",
    description: "Durable and stylish metal bed frames"
  },
  {
    icon: Grid,
    title: "Powder Coated Metal Shoe Rack",
    description: "Organized storage solutions for your footwear"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-[#1a237e] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}