"use client"
import Image from "next/image"

export default function LegalDocuments() {
  const legalDocs = [
    {
      title: "Company Registration Certificate",
      image: "/docs/company-register.jpg",
      alt: "Company Registration Certificate",
    },
    {
      title: "Nepal Rastra Bank License",
      image: "/docs/NRB.jpg",
      alt: "Nepal Rastra Bank License",
    },
    {
      title: "Valley tourism office license",
      image: "/docs/VTO.jpg",
      alt: "Valley tourism office license",
    },

  ]

  const membershipCerts = [
    {
      title: "First Aid Certificate",
      image: "/docs/first-aid-cert.jpg",
      alt: "First Aid Certificate",
    },
    {
      title: "KEEP Certificate",
      image: "/docs/keep-cert.jpg",
      alt: "KEEP Certificate",
    },
    {
      title: "TAAN Certificate",
      image: "/docs/TAAN.jpg",
      alt: "TAAN Certificate",
    },

  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-24 lg:pt-30 bg-white">
      {/* Page Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Legal Document</h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Nepal Himal Adventures is a trading name of Nepal Himal Adventures Trekking Pvt. Ltd and Nepal Himal
          Adventures Tours and Travels Pvt. Ltd, we are committed to ensuring you have a safe and enjoyable holiday;
          therefore all travel arrangements prepared by us are completely secure.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Nepal Himal Adventures Trekking Pvt. Ltd and Nepal Himal Adventures Tours and Travels Pvt. Ltd is a well-known
          government licensed trekking and touring company in Nepal. Please find the details of government licenses and
          authorities that Nepal Himal Adventures holds:
        </p>
      </section>

      {/* Legal Documents Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Documents From Government Authorities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalDocs.map((doc, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[3/4] bg-gray-100">
                <Image src={doc.image || "/placeholder.svg"} alt={doc.alt} fill className="object-cover" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-base font-semibold text-gray-900 text-center">{doc.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Certificates Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Membership Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {membershipCerts.map((cert, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[3/4] bg-gray-100">
                <Image src={cert.image || "/placeholder.svg"} alt={cert.alt} fill className="object-cover" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-base font-semibold text-gray-900 text-center">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
