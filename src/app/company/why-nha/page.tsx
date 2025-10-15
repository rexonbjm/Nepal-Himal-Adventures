import { Shield, Users, DollarSign, Heart, Mountain, Award, Leaf, Clock } from "lucide-react"

export default function WhyNHA() {
  const reasons = [
    {
      icon: Mountain,
      title: "Local Himalayan Experts",
      description:
        "Born and raised in the shadow of the Himalayas, our guides possess intimate knowledge of every trail, village, and peak. We don't just guide treks—we share our home with you.",
    },
    {
      icon: Shield,
      title: "Safety First, Always",
      description:
        "Your safety is non-negotiable. Our guides are trained in high-altitude first aid, we maintain top-quality equipment, and have established emergency protocols with local rescue services.",
    },
    {
      icon: DollarSign,
      title: "Unbeatable Value",
      description:
        "As a locally-owned company, we eliminate middlemen and pass the savings directly to you. Get premium trekking experiences at honest, competitive prices without compromising quality.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "No cookie-cutter tours here. We tailor every itinerary to your fitness level, interests, and schedule. Whether solo or in a group, you receive dedicated attention throughout your journey.",
    },
    {
      icon: Heart,
      title: "Authentic Cultural Immersion",
      description:
        "Our deep local connections open doors to genuine cultural experiences. Stay in family-run teahouses, share meals with locals, and experience Himalayan hospitality at its finest.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Years of experience leading successful treks across Nepal's most challenging terrain. Our reputation is built on countless satisfied adventurers who return home with stories of a lifetime.",
    },
    {
      icon: Leaf,
      title: "Sustainable & Responsible",
      description:
        "We're committed to preserving the pristine beauty of the Himalayas. Our treks support local communities, minimize environmental impact, and promote responsible tourism practices.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "From the moment you book until you return home safely, our team is available around the clock. With international representatives across multiple continents, help is always within reach.",
    },
  ]
          // <p className="text-lg md:text-xl text-slate-200 leading-relaxed text-pretty">
  // 
//  <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
  return (
    <div className="pt-18 lg:pt-22 min-h-screen bg-background">
      {/* Hero Section */}
      <section className=" relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold white mb-6">Why Choose Nepal Himal Adventures?</h1>
          <div className="w-20 h-1 rounded-2xl bg-[#f2b203] mx-auto mb-6"></div>
          <p className="text-md md:text-xl text-slate-200 leading-relaxed text-pretty">
            When you trek with us, you're not just another tourist. You're joining a family of mountain enthusiasts who
            are passionate about sharing the magic of the Himalayas with kindred spirits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Happy Trekkers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Safety Record</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Trek Routes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Experience the Himalayas?</h2>
        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          This is our corner of the world. We know it intimately. We love it passionately, and we want to share it with
          you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/nepal"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            View Our Packages
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-accent transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
