import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Users, MapPin, Camera, Heart } from "lucide-react"

export default function NepalPage() {
  const annapurnaTreks = [
    {
      title: "Annapurna Base Camp Trek",
      duration: "10-12 Days",
      difficulty: "Moderate",
      // image: "/annapurna-base-camp-mountain-view.jpg",
      description: "Journey to the heart of the Annapurna Sanctuary with stunning mountain panoramas.",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      href: "/nepal/annapurna/annapurna-base-camp-trek",
    },
    {
      title: "Annapurna Circuit Trek",
      duration: "15-18 Days",
      difficulty: "Challenging",
      // image: "/annapurna-circuit-thorong-la-pass.jpg",
      description: "Classic trek crossing Thorong La Pass with breathtaking Annapurna views.",
      badge: "Classic",
      badgeColor: "bg-purple-500",
      href: "/nepal/annapurna/annapurna-circuit-trek",
    },
    {
      title: "Ghorepani Poon Hill Trek",
      duration: "4-5 Days",
      difficulty: "Easy",
      // image: "/poon-hill-sunrise-annapurna.jpg",
      description: "Perfect for beginners with spectacular sunrise views from Poon Hill.",
      badge: "Beginner Friendly",
      badgeColor: "bg-green-500",
      href: "/nepal/annapurna/ghorepani-poon-hill-trek",
    },
    {
      title: "Mardi Himal Trek",
      duration: "7-9 Days",
      difficulty: "Moderate",
      // image: "/mardi-himal-base-camp-view.jpg",
      description: "Hidden gem with intimate views of Machapuchare and pristine forests.",
      badge: "Off the Beaten Path",
      badgeColor: "bg-teal-500",
      href: "/nepal/annapurna/mardi-himal-trek",
    },
    {
      title: "Nar Phu Valley Trek",
      duration: "14-16 Days",
      difficulty: "Challenging",
      // image: "/nar-phu-valley-remote-village.jpg",
      description: "Remote valley with ancient Tibetan culture and dramatic landscapes.",
      badge: "Remote",
      badgeColor: "bg-orange-500",
      href: "/nepal/annapurna/nar-phu-valley-trek",
    },
  ]

  const everestTreks = [
    {
      title: "Everest Base Camp Trek",
      duration: "12-14 Days",
      difficulty: "Challenging",
      // image: "/everest-base-camp-trail.jpg",
      description: "Trek to the base of the world's highest mountain through Sherpa villages.",
      badge: "Iconic",
      badgeColor: "bg-red-500",
      href: "/nepal/everest/everest-base-camp-trek",
    },
    {
      title: "Gokyo Lake Trek",
      duration: "12-14 Days",
      difficulty: "Moderate",
      // image: "/gokyo-lakes-turquoise-water.jpg",
      description: "Stunning turquoise lakes with panoramic views from Gokyo Ri.",
      badge: "Scenic",
      badgeColor: "bg-cyan-500",
      href: "/nepal/everest/gokyo-lake-trek",
    },
    {
      title: "Everest Three Passes Trek",
      duration: "18-20 Days",
      difficulty: "Strenuous",
      // image: "/everest-three-passes-mountain-view.jpg",
      description: "Ultimate challenge crossing three high passes in the Khumbu region.",
      badge: "Adventure",
      badgeColor: "bg-indigo-500",
      href: "/nepal/everest/everest-three-passes-trek",
    },
  ]

  const langtangTreks = [
    {
      title: "Langtang Valley Trek",
      duration: "7-9 Days",
      difficulty: "Moderate",
      // image: "/langtang-valley-mountain-landscape.jpg",
      description: "Beautiful valley trek through forests and traditional Tamang villages.",
      badge: "Accessible",
      badgeColor: "bg-emerald-500",
      href: "/nepal/langtang/langtang-valley-trek",
    },
    {
      title: "Langtang Heritage Trek",
      duration: "10-12 Days",
      difficulty: "Moderate",
      // image: "/langtang-heritage-village-culture.jpg",
      description: "Immerse in rich Tamang culture and visit ancient monasteries.",
      badge: "Cultural",
      badgeColor: "bg-amber-500",
      href: "/nepal/langtang/langtang-heritage-trek",
    },
    {
      title: "Langtang Gosaikunda Trek",
      duration: "12-14 Days",
      difficulty: "Challenging",
      // image: "/gosaikunda-sacred-lake.jpg",
      description: "Combine Langtang Valley with sacred Gosaikunda Lakes.",
      badge: "Spiritual",
      badgeColor: "bg-violet-500",
      href: "/nepal/langtang/langtang-gosaikunda-trek",
    },
    {
      title: "Langtang Gosaikunda Helambu Trek",
      duration: "14-16 Days",
      difficulty: "Challenging",
      // image: "/helambu-valley-terraced-fields.jpg",
      description: "Complete experience through three distinct beautiful regions.",
      badge: "Complete",
      badgeColor: "bg-pink-500",
      href: "/nepal/langtang/langtang-gosaikunda-helambu-trek",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image src="/nepal-hero-section.jpg" alt="Nepal Himalayas" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <nav className="flex items-center justify-center space-x-2 mb-8 text-sm">
              <Link href="/" className="hover:underline">
                home
              </Link>
              <span>{">"}</span>
              <span>nepal</span>
            </nav>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">Nepal</h1>
          </div>
        </div>
      </div>

      {/* About Nepal Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="items-center mb-16 text-base md:text-xl">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Discover the Land of the Himalayas</h2>
            <p className=" text-gray-600 mb-4">
              <strong>Nepal</strong> is a land of staggering heights and cultural treasures, home to over 1,300 peaks
              above 6,000 m, 90 above 7,000 m, and eight legendary 8,000 m giants, including Everest and Annapurna—all
              within its borders.The landscapes shift dramatically—from lush rhododendron forests to high-altitude
              deserts—offering awe-inspiring vistas and once-in-a-lifetime trekking experiences .
            </p>
            <p className="text-gray-600 mb-4">
              At Nepal Himal Adventures, we craft ambitious yet accessible journeys that go beyond the trail. Whether
              guiding you over iconic passes like Thorong La, introducing you to resilient mountain communities, or
              ensuring your safety at every altitude, we aim to deliver more than a trek—we deliver a lifelong memory.
              Your adventure with us isn't just a hike; it's a personal story woven into the heart of the Himalayas.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Mountain className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">8 of 14 Highest Peaks</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">World's Best Trekking</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">Rich Cultural Heritage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Nepal Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Nepal is Perfect for Trekking</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mountain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Majestic Himalayas</h4>
              <p className="text-gray-600 text-sm">
                Home to the world's highest peaks including Everest, Lhotse, Makalu, and Cho Oyu
              </p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Authentic Village Life</h4>
              <p className="text-gray-600 text-sm">
                Immerse yourself in Nepal's diverse culture—meet local communities, experience traditional customs, and
                enjoy genuine hospitality.
              </p>
            </div>

            <div className="text-center">
              <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Diverse Landscapes</h4>
              <p className="text-gray-600 text-sm">
                From lush rhododendron forests to glacial valleys and high‑altitude deserts
              </p>
            </div>
          </div>
        </div>

        {/* Nepal Himal Adventures Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">How Nepal Himal Adventures Can Help You</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Expert Local Guides</h4>
              <p className="text-gray-600 mb-4">
                Our experienced Sherpa guides have intimate knowledge of the Himalayan terrain, weather patterns, and
                local culture. They ensure your safety while sharing fascinating stories about the mountains and their
                significance.
              </p>
              <h4 className="text-xl font-semibold mb-4">Comprehensive Trek Packages</h4>
              <p className="text-gray-600 mb-4">
                We offer complete trekking solutions including permits, accommodation, meals, transportation, and
                emergency support. Our packages are designed to provide maximum comfort and safety in the challenging
                mountain environment.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Helicopter Services</h4>
              <p className="text-gray-600 mb-4">
                Experience the Himalayas from a unique perspective with our helicopter tours and rescue services.
                Perfect for those with limited time or seeking a luxurious mountain experience.
              </p>
              <h4 className="text-xl font-semibold mb-4">Customized Adventures</h4>
              <p className="text-gray-600 mb-4">
                Whether you're a beginner or experienced mountaineer, we customize our treks to match your fitness
                level, interests, and time constraints. From tea house treks to camping expeditions.
              </p>
            </div>
          </div>
        </div>

        {/* Trekking Programs Section */}
        <div>
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-4">The following is a list of the programs we provide in Nepal:</p>
            <h2 className="text-4xl font-bold">TREKKING IN NEPAL</h2>
          </div>

          {/* Annapurna Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">ANNAPURNA TREKKING PACKAGES</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {annapurnaTreks.map((trek, index) => (
                <Link key={index} href={trek.href} className="block">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="relative h-40">
                      {/* <Image src={trek.image || "/placeholder.svg"} alt={trek.title} fill className="object-cover" /> */}
                      <Badge className={`absolute top-2 left-2 text-xs text-white ${trek.badgeColor}`}>
                        {trek.badge}
                      </Badge>
                    </div>
                    <CardHeader className="p-3 pb-2">
                      <div className="flex items-center justify-between mb-1 text-xs text-gray-500">
                        <span>{trek.duration}</span>
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {trek.difficulty}
                        </span>
                      </div>
                      <CardTitle className="text-base hover:text-blue-600 transition-colors">{trek.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <CardDescription className="text-xs text-gray-600 line-clamp-2">
                        {trek.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Everest Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-red-600">EVEREST TREKKING PACKAGES</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {everestTreks.map((trek, index) => (
                <Link key={index} href={trek.href} className="block">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="relative h-40">
                      {/* <Image src={trek.image || "/placeholder.svg"} alt={trek.title} fill className="object-cover" /> */}
                      <Badge className={`absolute top-2 left-2 text-xs text-white ${trek.badgeColor}`}>
                        {trek.badge}
                      </Badge>
                    </div>
                    <CardHeader className="p-3 pb-2">
                      <div className="flex items-center justify-between mb-1 text-xs text-gray-500">
                        <span>{trek.duration}</span>
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {trek.difficulty}
                        </span>
                      </div>
                      <CardTitle className="text-base hover:text-blue-600 transition-colors">{trek.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <CardDescription className="text-xs text-gray-600 line-clamp-2">
                        {trek.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Langtang Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-emerald-600">LANGTANG / GOSAIKUNDA TREKKING PACKAGES</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {langtangTreks.map((trek, index) => (
                <Link key={index} href={trek.href} className="block">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="relative h-40">
                      {/* <Image src={trek.image || "/placeholder.svg"} alt={trek.title} fill className="object-cover" /> */}
                      <Badge className={`absolute top-2 left-2 text-xs text-white ${trek.badgeColor}`}>
                        {trek.badge}
                      </Badge>
                    </div>
                    <CardHeader className="p-3 pb-2">
                      <div className="flex items-center justify-between mb-1 text-xs text-gray-500">
                        <span>{trek.duration}</span>
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {trek.difficulty}
                        </span>
                      </div>
                      <CardTitle className="text-base hover:text-blue-600 transition-colors">{trek.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <CardDescription className="text-xs text-gray-600 line-clamp-2">
                        {trek.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready for Your Himalayan Adventure?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let Nepal Himal Adventures guide you through the world's most spectacular mountain landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Mountain className="h-5 w-5 mr-2" />
              Plan Your Trek
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
