'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Facebook, Instagram, Menu, ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#1a237e] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="mailto:info@shantienterprises.com" className="flex items-center space-x-2 hover:text-gold-400">
                <Mail size={16} />
                <span>info@shantienterprises.com</span>
              </a>
              <a href="tel:+9182521 64309" className="flex items-center space-x-2 hover:text-gold-400">
                <Phone size={16} />
                <span>+91 82521 64309</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gold-400">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-gold-400">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="Shanti Enterprises" 
                width={80} 
                height={80} 
                className="w-20 h-20"
              />
              <span className="text-2xl font-bold text-[#1a237e] hidden md:block">Shanti Enterprises</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#1a237e]">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#1a237e]">About Us</Link>
              <Link href="/products" className="text-gray-700 hover:text-[#1a237e]">Products</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1a237e]">Contact</Link>
            </nav>

            {/* Cart and Account */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-[#1a237e]">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#1a237e]">About Us</Link>
              <Link href="/products" className="text-gray-700 hover:text-[#1a237e]">Products</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1a237e]">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}