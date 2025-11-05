'use client'
import React from 'react';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-24 lg:pt-30 bg-white">
      
      {/* About Us Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          The Himalayas include some of the most stunning scenery on earth. Nepal Himal Adventures has painstakingly created 
          one-of-a-kind trekking adventures for you to explore the highlights of Nepal&apos;s breathtaking landscapes. 
          From the iconic trails of Everest Base Camp to the serene paths of Annapurna, Nepal Himal Adventures offers 
          unforgettable trekking experiences for every level of outdoor enthusiast.
        </p>
      </section>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Nepal Himal Adventures was founded by Jalandhar Sanjel in [BLANK] AD. After working for many years as a freelance 
          tour/trekking leader, Jalandhar established Nepal Himal Adventures with the goal of making it a fully Nepali-owned inbound operator with a 
          headquarters in Kathmandu. As a Nepalese-owned company, Nepal Himal Adventures is well versed within the Himalayan range, 
          allowing for more knowledgeable guides. This local ownership also offers wholesale tour operators the added 
          benefit of affordable ground services and superior-quality itineraries. Furthermore, as Nepal Himal Adventures has wide international 
          representatives throughout Australia, Indonesia, Switzerland, the UK, and the USA, concerns and queries can be 
          answered through them.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Nepal Himal Adventures specializes in trekking across Nepal&apos;s magnificent Himalayan landscapes. 
          We offer pre-planned trekking itineraries and custom travel planning services tailored to your preferences and fitness level. 
          Nepal Himal Adventures can accommodate both solo travelers and groups, having worked with trekking groups of various sizes. 
          We offer trips for foreign independent travelers (FITs) to book directly from our website, making it easy to plan your 
          Himalayan trekking adventure with us.
        </p>
      </section>

      {/* How We Are Different Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Are Different</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          The Nepal Himal Adventures team has spent years discovering the best trekking routes and finding comfortable places to stay 
          that complement Nepal&apos;s stunning mountain destinations. Our team members are carefully selected for their trekking expertise, 
          local knowledge, and dedication to customer satisfaction. Here are some of the <a href="/why-nha" className="text-blue-600 hover:underline">reasons to choose Nepal Himal Adventures</a> for yourself.
        </p>
      </section>

      {/* The Bottom-line Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Bottom-line</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          This is our corner of the world. We know it intimately. We love it passionately, so much so that we want to share it 
          with kindred souls. We are proud to showcase the Himalayas to the world! Come join us for your wonderful 
          mountainous and cultural experiences with Nepal Himal Adventures... HAPPY TRAVELING!!!
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to Create Your Own Story?</h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of satisfied trekkers who have experienced the adventure of a lifetime with Nepal Himal Adventures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/nepal"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
          >
            View Trek Packages
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-900 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
