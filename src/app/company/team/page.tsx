'use client'

import React from 'react'
import Image from 'next/image'

export default function MeetOurTeam() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-24 lg:pt-30 bg-white">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h1>

        <div className="space-y-4 max-w-5xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our passionate team of mountain guides comes from the heart of Nepal&apos;s trekking regions, bringing authentic local knowledge and generations of mountaineering expertise. Each guide is licensed by Nepal&apos;s Ministry of Tourism and holds crucial wilderness first aid certifications to ensure your safety on every trail.
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            What sets our guides apart is their genuine love for sharing Nepal&apos;s hidden treasures with travelers. They don&apos;t just lead treks—they open doors to local communities, share ancient mountain stories, and reveal breathtaking viewpoints that only locals know about. As you journey together, you&apos;ll discover their unique personalities, hear about their families and traditions, and gain insights into the Himalayan way of life.
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            With warm hospitality and excellent interpersonal skills, our team creates a comfortable, friendly atmosphere that turns challenging mountain trails into unforgettable adventures. At Nepal Himal Adventures, we&apos;re committed to providing you with exceptional service and creating memories that last a lifetime.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'RAJENDRA NEUPANE', role: 'Trekking Guide', imgAlt: 'Rajendra Neupane' },
          { name: 'MILAN ADHIKARI', role: 'Trekking Guide', imgAlt: 'Milan Adhikari' },
          { name: 'PASANG DAWA SHERPA', role: 'Trekking Guide', imgAlt: 'Pasang Dawa Sherpa' },
          { name: '[NAME]', role: 'Trekking Guide', imgAlt: 'Team Member 4' },
          { name: '[NAME]', role: 'Trekking Guide', imgAlt: 'Team Member 5' },
          { name: '[NAME]', role: 'Trekking Guide', imgAlt: 'Team Member 6' },
        ].map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/5] bg-gray-200 relative">
              <Image
                src="/api/placeholder/400/500"
                alt={member.imgAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600 text-sm font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
