"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, MessageCircle, Menu, X, ChevronRight, ChevronLeft } from "lucide-react"

type MenuLevel = "main" | "nepal" | "about" | "nepal-category"
type NepalCategory = "annapurna" | "everest" | "langtang"

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<null | "nepal" | "about">(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuLevel, setMobileMenuLevel] = useState<MenuLevel>("main")
  const [selectedNepalCategory, setSelectedNepalCategory] = useState<NepalCategory | null>(null)
  const [selectedMobileCategory, setSelectedMobileCategory] = useState<NepalCategory | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileButtonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = (menu: "nepal" | "about") => {
    setActiveMenu((prev) => (prev === menu ? null : menu))
    if (activeMenu === menu) {
      setSelectedNepalCategory(null)
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setActiveMenu(null)
    setMobileMenuLevel("main")
    setSelectedMobileCategory(null)
  }

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMobileMenuOpen(!mobileMenuOpen)
    if (mobileMenuOpen) {
      setActiveMenu(null)
      setMobileMenuLevel("main")
      setSelectedMobileCategory(null)
    }
  }

  const goToNepalSubmenu = () => {
    setMobileMenuLevel("nepal")
  }

  const goToAboutSubmenu = () => {
    setMobileMenuLevel("about")
  }

  const goToNepalCategory = (category: NepalCategory) => {
    setSelectedMobileCategory(category)
    setMobileMenuLevel("nepal-category")
  }

  const goBackToMain = () => {
    setMobileMenuLevel("main")
  }

  const goBackToNepal = () => {
    setMobileMenuLevel("nepal")
    setSelectedMobileCategory(null)
  }

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node

      if (mobileButtonRef.current && mobileButtonRef.current.contains(target)) {
        return
      }

      if (menuRef.current && !menuRef.current.contains(target)) {
        setActiveMenu(null)
        setSelectedNepalCategory(null)
      }

      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        closeMobileMenu()
      }
    }

    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Nepal menu categories
  const nepalCategories = [
    { id: "annapurna" as NepalCategory, name: "Annapurna Trekking Packages", href: "/nepal/annapurna" },
    { id: "everest" as NepalCategory, name: "Everest Trekking Packages", href: "/nepal/everest" },
    { id: "langtang" as NepalCategory, name: "Langtang / Gosaikunda Trekking Packages", href: "/nepal/langtang" },
  ]

  // Trekking options for Annapurna region
  const annapurnaTreks = [
    "Annapurna Base Camp Trek",
    "Annapurna Circuit Trek",
    "Ghorepani / Poon Hill Mini-Circuit Trek",
    "Mardi Himal Trek",
    "Nar Phu Valley Trek",
  ]

  // Trekking options for Everest region
  const everestTreks = ["Everest Base Camp Trek", "Gokyo Lake Trek", "Everest Three Passes Trek"]

  // Trekking options for Langtang/Gosaikunda region
  const langtangTreks = [
    "Langtang Valley Trek",
    "Langtang Heritage Trek",
    "Langtang Gosaikunda Trek",
    "Langtang Gosaikunda and Hellambu Trek",
  ]

  // About Us menu items
  const aboutUsItems = [
    { name: "About Us", href: "/company/about" },
    { name: "Meet Our Team", href: "/company/team" },
    { name: "Why NHA?", href: "/company/why-nha" },
    { name: "Legal Documents", href: "/company/documents" },
    { name: "Terms and Conditions", href: "/company/terms" },
    { name: "Customer Reviews", href: "/company/reviews" },
  ]

  return (
    <div>
      <div className="w-full fixed lg:p-2 p-0 top-0 left-0 right-0 z-50 bg-black/90 text-white shadow-md">
        <div className="font-inter w-full mx-auto">
          <div className="flex items-center justify-between h-18">
            {/* Left side - Logo */}
            <div className="flex-shrink-0 ml-4 md:ml-1">
              <Link href="/" onClick={closeMobileMenu}>
                <Image src="/logo.jpg" alt="Company Logo" width={130} height={45} className="object-contain" priority />
              </Link>
            </div>

            {/* Center - Menu items (Desktop) */}
            <div className="hidden md:flex items-center space-x-6" ref={menuRef}>
              {/* Nepal */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("nepal")}
                  className="flex items-center gap-1 text-lg text-white hover:text-blue-400 px-3 py-2 rounded transition-colors duration-200 focus:outline-none"
                >
                  Nepal <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === "nepal" && (
                  <div
                    className="absolute top-full mt-2 bg-white text-black shadow-xl rounded-md overflow-hidden"
                    style={{ width: "800px", left: "-300px" }}
                  >
                    <div className="flex">
                      <div className="w-1/3 bg-gray-50 border-r">
                        <Link
                          href="/nepal"
                          onClick={() => setActiveMenu(null)}
                          className="block w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-200"
                        >
                          All Packages in Nepal
                        </Link>
                        {nepalCategories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedNepalCategory(category.id)}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-200 flex items-center justify-between ${
                              selectedNepalCategory === category.id ? "bg-blue-50 text-blue-600" : ""
                            }`}
                          >
                            {category.name}
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ))}
                      </div>
                      <div className="w-2/3 p-6">
                        {selectedNepalCategory === null && (
                          <div>
                            <p className="text-sm text-gray-600">
                              Select a trekking region from the left to view available packages.
                            </p>
                          </div>
                        )}
                        {selectedNepalCategory === "annapurna" && (
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Annapurna Trekking Packages</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {annapurnaTreks.map((trek, index) => (
                                <Link
                                  key={index}
                                  href={`/nepal/annapurna/${trek.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}`}
                                  className="text-sm hover:text-blue-600 py-1"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {trek}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedNepalCategory === "everest" && (
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Everest Trekking Packages</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {everestTreks.map((trek, index) => (
                                <Link
                                  key={index}
                                  href={`/nepal/everest/${trek.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="text-sm hover:text-blue-600 py-1"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {trek}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedNepalCategory === "langtang" && (
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Langtang / Gosaikunda Trekking Packages</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {langtangTreks.map((trek, index) => (
                                <Link
                                  key={index}
                                  href={`/nepal/langtang/${trek.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="text-sm hover:text-blue-600 py-1"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {trek}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("about")}
                  className="flex items-center gap-1 text-lg text-white hover:text-blue-400 px-4 py-3 rounded transition-colors duration-200 focus:outline-none"
                >
                  Company <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === "about" && (
                  <div
                    className="absolute top-full mt-2 bg-white text-black shadow-xl rounded-md overflow-hidden"
                    style={{ width: "400px", left: "-150px" }}
                  >
                    <div className="p-4">
                      {aboutUsItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 hover:text-blue-600"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Contact Us */}
              <Link
                href="/contact"
                className="text-white text-lg hover:text-blue-400 px-3 py-2 rounded transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Right side - WhatsApp Contact */}
            <a
              href="https://wa.me/97798512337IO"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-white font-medium text-lg">+97798512337IO</span>
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden mr-4">
              <button
                ref={mobileButtonRef}
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-400 p-2 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="md:hidden bg-white text-black absolute top-full left-0 right-0 h-screen overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Menu Level */}
              {mobileMenuLevel === "main" && (
                <div className="py-4">
                  <Link
                    href="/"
                    className="block px-6 py-4 text-lg font-medium border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>

                  <button
                    onClick={goToNepalSubmenu}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
                  >
                    Nepal
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>

                  <button
                    onClick={goToAboutSubmenu}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
                  >
                    About Us
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>

                  <Link
                    href="/contact"
                    className="block px-6 py-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              )}

              {/* Nepal Submenu Level */}
              {mobileMenuLevel === "nepal" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToMain} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="py-2">
                    <Link
                      href="/nepal"
                      className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <span className="font-medium">All Packages in Nepal</span>
                    </Link>

                    {nepalCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => goToNepalCategory(category.id)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 border-b border-gray-100"
                      >
                        <span className="font-medium">{category.name}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* About Us Submenu Level */}
              {mobileMenuLevel === "about" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToMain} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="py-2">
                    {aboutUsItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
                        onClick={closeMobileMenu}
                      >
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Nepal Category Detail Level - Annapurna */}
              {mobileMenuLevel === "nepal-category" && selectedMobileCategory === "annapurna" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToNepal} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">Annapurna Trekking Packages</h3>
                  </div>

                  <div className="py-2">
                    {annapurnaTreks.map((trek, index) => (
                      <Link
                        key={index}
                        href={`/nepal/annapurna/${trek.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}`}
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 border-b border-gray-50"
                        onClick={closeMobileMenu}
                      >
                        {trek}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Nepal Category Detail Level - Everest */}
              {mobileMenuLevel === "nepal-category" && selectedMobileCategory === "everest" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToNepal} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">Everest Trekking Packages</h3>
                  </div>

                  <div className="py-2">
                    {everestTreks.map((trek, index) => (
                      <Link
                        key={index}
                        href={`/nepal/everest/${trek.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 border-b border-gray-50"
                        onClick={closeMobileMenu}
                      >
                        {trek}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Nepal Category Detail Level - Langtang */}
              {mobileMenuLevel === "nepal-category" && selectedMobileCategory === "langtang" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToNepal} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">Langtang / Gosaikunda Trekking Packages</h3>
                  </div>

                  <div className="py-2">
                    {langtangTreks.map((trek, index) => (
                      <Link
                        key={index}
                        href={`/nepal/langtang/${trek.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 border-b border-gray-50"
                        onClick={closeMobileMenu}
                      >
                        {trek}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
