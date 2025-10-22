import ShoppingHeader from '@/components/shopping-view/header'
import React from 'react'

function About() {
  return (
    <>
    <ShoppingHeader/>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        About Us
      </h1>

      {/* Content */}
      <div className="space-y-6 text-gray-700 text-justify">
        <p>
          <span className="font-semibold">Mayukha Fashion Store online</span> is the ultimate destination for ladies fashion retail in Irinjalakuda, Thrissur with a stunning collection of women’s ethnic and contemporary looks. With an emphasis on design and detail, we carry the best sarees, kurtis, salwar sets, gowns, and accessories that marry traditional art and modern style.
        </p>

        <p>
          For years, <span className="font-semibold">Mayukha</span> has emerged as the go-to women’s fashion store in Kerala; if you are looking for quality fabrics, the latest trends, or just a luxe experience, look no further. We have one purpose – to help every woman find her own uniqueness as well as feel relaxed, confident, and beautiful.
        </p>

        <p>
          At <span className="font-semibold">Mayukha</span>, fashion is more than just clothing – it is a feeling. Welcome to a world where elegance meets affordability, only at <span className="font-semibold">Mayukha Fashion Store</span>.
        </p>
      </div>
    </div>
    </>
  )
}

export default About