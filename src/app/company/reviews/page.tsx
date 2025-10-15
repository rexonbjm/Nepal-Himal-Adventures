import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Rexon Bajimaya",
      rating: 5,
      review: "Such a great experience with Nepal Himal Adventures!!",
      date: "March 2025",
      trek: "Everest Base Camp Trek",
    },
    {
      id: 2,
      name: "Lakpa Sherpa",
      rating: 5,
      review:
        "Reaching Gosaikunda was tough, but the first glimpse of that turquoise lake nestled beneath snowy peaks felt like magic. Our guide's warm stories and steady encouragement made every icy step feel worth it.",
      date: "February 2025",
      trek: "Gosaikunda Trek",
    },
    {
      id: 3,
      name: "Pemba Tamang",
      rating: 5,
      review:
        "Stepping into the Annapurna foothills felt instantly uplifting—the towering snow-capped peaks and lush rhododendron forests took my breath away. Our guide's expert pacing and heartfelt tales of local villages made every step feel meaningful, and I left feeling inspired and deeply connected to the mountains.",
      date: "January 2025",
      trek: "Annapurna Base Camp Trek",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Nepal Himal Adventures provided an exceptional trekking experience! Our guide was incredibly knowledgeable about the local culture and terrain. The accommodation and meals were excellent throughout the journey. I felt safe and well-cared for every step of the way. Highly recommend!",
      date: "December 2024",
      trek: "Langtang Valley Trek",
    },
    {
      id: 5,
      name: "David Chen",
      rating: 5,
      review:
        "Our guide was exceptional—brimming with local knowledge, patient answers to every question, and a warm, encouraging presence that turned a tough hike into an inspiring adventure. 😁",
      date: "November 2024",
      trek: "Manaslu Circuit Trek",
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      rating: 5,
      review:
        "Starting the trail into Mustang felt tough at first, but stepping into those vast, windswept valleys was nothing short of magical—quiet, rugged, and utterly mesmerizing. Our guide's stories brought the ancient cliffs and hidden gompas to life, and before we knew it, the journey was over, leaving our hearts full of wonder. 😍",
      date: "October 2024",
      trek: "Upper Mustang Trek",
    },
    {
      id: 7,
      name: "James Wilson",
      rating: 5,
      review:
        "The entire experience exceeded my expectations. From the initial planning to the final day, everything was perfectly organized. The team's attention to detail and genuine care for our wellbeing made this trek unforgettable.",
      date: "September 2024",
      trek: "Everest Base Camp Trek",
    },
    {
      id: 8,
      name: "Yuki Tanaka",
      rating: 5,
      review:
        "Beautiful landscapes, wonderful people, and an amazing guide who made sure we were comfortable every step of the way. This was my first trek in Nepal and it won't be my last!",
      date: "August 2024",
      trek: "Poon Hill Trek",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "fill-[#f2b203] text-[#f2b203]" : "text-gray-300"}`} />
    ))
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-b pt-24 lg:pt-32 from-slate-900 to-slate-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Customer Reviews</h1>
          <div className="w-20 h-1 rounded-2xl bg-[#f2b203] mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Read what our trekkers have to say about their adventures with Nepal Himal Adventures. These reviews are
            from real travelers who have experienced the magic of the Himalayas with us.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Header with avatar and name */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {getInitials(review.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{review.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                  </div>
                </div>

                {/* Trek name */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {review.trek}
                  </span>
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed text-sm">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Trekkers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">40+</div>
              <div className="text-sm text-gray-600">Trek Routes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to Create Your Own Story?</h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of satisfied trekkers who have experienced the adventure of a lifetime with Nepal Himal
          Adventures.
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
  )
}
