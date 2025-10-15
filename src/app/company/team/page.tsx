import React from 'react';

export default function MeetOurTeam() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-24 lg:pt-30 bg-white">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
        
        <div className="space-y-4 max-w-5xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our passionate team of mountain guides comes from the heart of Nepal's trekking regions, bringing authentic local knowledge and generations of mountaineering expertise. Each guide is licensed by Nepal's Ministry of Tourism and holds crucial wilderness first aid certifications to ensure your safety on every trail.
          </p>
          
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            What sets our guides apart is their genuine love for sharing Nepal's hidden treasures with travelers. They don't just lead treks—they open doors to local communities, share ancient mountain stories, and reveal breathtaking viewpoints that only locals know about. As you journey together, you'll discover their unique personalities, hear about their families and traditions, and gain insights into the Himalayan way of life.
          </p>
          
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            With warm hospitality and excellent interpersonal skills, our team creates a comfortable, friendly atmosphere that turns challenging mountain trails into unforgettable adventures. At Nepal Himal Adventures, we're committed to providing you with exceptional service and creating memories that last a lifetime.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[4/5] bg-gray-200">
            <img 
              src="/api/placeholder/400/500" 
              alt="Rajendra Neupane" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">RAJENDRA NEUPANE</h3>
            <p className="text-gray-600 text-sm font-medium">Trekking Guide</p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[4/5] bg-gray-200">
            <img 
              src="/api/placeholder/400/500" 
              alt="Milan Adhikari" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">MILAN ADHIKARI</h3>
            <p className="text-gray-600 text-sm font-medium">Trekking Guide</p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[4/5] bg-gray-200">
            <img 
              src="/api/placeholder/400/500" 
              alt="Pasang Dawa Sherpa" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">PASANG DAWA SHERPA</h3>
            <p className="text-gray-600 text-sm font-medium">Trekking Guide</p>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[4/5] bg-gray-200">
            <img 
              src="/api/placeholder/400/500" 
              alt="Team Member 4" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">[NAME]</h3>
            <p className="text-gray-600 text-sm font-medium">Trekking Guide</p>
          </div>
        </div>

        {/* Team Member 5 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[4/5] bg-gray-200">
            <img 
              src="/api/placeholder/400/500" 
              alt="Team Member 5" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">[NAME]</h3>
            <p className="text-gray-600 text-sm font-medium">Trekking Guide</p>
          </div>
        </div>

        {/* Team Member 6 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[4/5] bg-gray-200">
            <img 
              src="/api/placeholder/400/500" 
              alt="Team Member 6" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">[NAME]</h3>
            <p className="text-gray-600 text-sm font-medium">Trekking Guide</p>
          </div>
        </div>
      </div>
    </div>
  );
}