import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a237e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shanti Enterprises</h3>
            <p className="text-gray-300 mb-4">
              Leading manufacturer of premium metal furniture and storage solutions since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products/almirahs" className="text-gray-300 hover:text-white">Steel Almirahs</Link></li>
              <li><Link href="/products/beds" className="text-gray-300 hover:text-white">Metal Beds</Link></li>
              <li><Link href="/products/coolers" className="text-gray-300 hover:text-white">Metal Air Coolers</Link></li>
              <li><Link href="/products/racks" className="text-gray-300 hover:text-white">Shoe Racks</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span className="text-gray-300">Champua,Odisha</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+919312276207" className="text-gray-300 hover:text-white">+91 82521 643097</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@shantienterprises.com" className="text-gray-300 hover:text-white">info@shantienterprises.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            Copyright © {new Date().getFullYear()} Shanti Enterprises | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}