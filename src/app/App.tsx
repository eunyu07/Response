import { useState } from "react";
import img1 from "../assets/24a7b96ca5df8760ffbecd0ea3753ba9c963c8a2.png";
import imgPilates from "../assets/9dd49369a3afa3e3a5f8d814512f8515c1ebe9b2.png";
import imgInterior from "../assets/e6185e6816a04db1d1e034c839ccefd41faa09b1.png";
import imgStudio from "../assets/ab40c7be905f6902ab888680ec58c951a0026b4f.png";

// SVG Paths from Figma
const CAROUSEL_ARROW =
  "M59.2769 25.5589L35.9332 48.9026C35.6898 49.146 35.3598 49.2827 35.0156 49.2827C34.6715 49.2827 34.3414 49.146 34.0981 48.9026C33.8547 48.6593 33.718 48.3292 33.718 47.9851C33.718 47.641 33.8547 47.3109 34.0981 47.0676L55.2274 25.9382H1.29688C0.952922 25.9382 0.623057 25.8016 0.379846 25.5584C0.136635 25.3152 0 24.9853 0 24.6413C0 24.2974 0.136635 23.9675 0.379846 23.7243C0.623057 23.4811 0.952922 23.3445 1.29688 23.3445H55.2274L34.0981 2.21514C33.8547 1.97179 33.718 1.64174 33.718 1.2976C33.718 0.953452 33.8547 0.623404 34.0981 0.380058C34.3414 0.136711 34.6715 6.7839e-09 35.0156 0C35.3598 -6.7839e-09 35.6898 0.13671 35.9332 0.380056L59.2769 23.7238C59.3975 23.8443 59.4932 23.9873 59.5584 24.1447C59.6237 24.3022 59.6573 24.4709 59.6573 24.6413C59.6573 24.8118 59.6237 24.9805 59.5584 25.138C59.4932 25.2954 59.3975 25.4384 59.2769 25.5589Z";

const NAV_ARROW =
  "M0 8.05L5.635 0H8.2478L3.4178 6.9H36.8L35.65 9.2H3.4178L8.2478 16.1H5.635L0 8.05Z";

// Gradient styles
const heroGradient =
  "linear-gradient(rgba(97,81,74,0.3) 0%, rgba(212,183,151,0.3) 47.115%, rgba(175,217,186,0.3) 100%)";
const sectionTwoGradient =
  "linear-gradient(rgba(97,81,74,0.3) 0%, rgba(212,183,151,0.3) 47.115%, rgba(175,217,186,0.3) 100%), linear-gradient(90deg, rgb(228,214,210) 0%, rgb(228,214,210) 100%)";
const testimonialGradient =
  "linear-gradient(rgba(97,81,74,0.3) 0%, rgba(212,183,151,0.3) 47.115%, rgba(175,217,186,0.3) 100%), linear-gradient(90deg, rgb(116,76,50) 0%, rgb(116,76,50) 100%)";

const testimonials = [
  {
    id: 1,
    text: `"The studio is absolutely amazing and incredibly spacious, setting it apart from most studios in the area. I've been taking private sessions with Lena for nearly two years, and it has truly been a game changer for my posture and core strength."`,
    author: "Parada S.",
  },
  {
    id: 2,
    text: `"Core Atelier has completely transformed my relationship with movement. The intimate group setting means every session feels tailored to me. Lena's expertise and passion shine through in every single class."`,
    author: "Maya K.",
  },
  {
    id: 3,
    text: `"I've tried many studios but none compare to Core Atelier. The atmosphere is serene, the instructors are world-class, and the results speak for themselves. My posture and strength have improved dramatically."`,
    author: "Sofia L.",
  },
  {
    id: 4,
    text: `"The small class sizes make all the difference. You receive genuine attention and corrections that truly elevate your practice. I look forward to every single session without exception."`,
    author: "Rachel M.",
  },
  {
    id: 5,
    text: `"Core Atelier is a sanctuary. The quality of instruction and the thoughtful design of every class keeps me coming back week after week. It's truly pilates elevated to an art form."`,
    author: "Diane W.",
  },
];

const navLinks = ["Home", "About", "Classes", "Book", "Shop"];
const navLinks2 = ["Events", "Press", "Rewards", "FAQ", "Careers"];
const navLinks3 = ["Contact", "instagram", "WhatsApp"];

export default function App() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const prevTestimonial = () =>
    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % testimonials.length);

  const current = testimonials[testimonialIndex];

  return (
    <div className="bg-[#25140c] flex flex-col w-full min-h-screen">

      {/* ====== HEADER ====== */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 xl:px-8 h-12">
        <p className="font-['Bookk_Myungjo:Bold',sans-serif] text-[#e4d6d2] text-[24px] xl:text-[32px] leading-normal not-italic">
          core atelier
        </p>

        {/* Desktop navigation */}
        <nav className="hidden xl:flex gap-[50px] items-center font-['Paperlogy:5_Medium',sans-serif] text-[#e4d6d2] text-[16px] whitespace-nowrap not-italic leading-normal">
          <a href="#" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Classes</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Book</a>
          <a href="#" className="hover:opacity-70 transition-opacity">shop</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Events</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
        </nav>

        {/* Desktop Sign in */}
        <div className="hidden xl:flex items-center justify-center px-2 py-2 relative cursor-pointer">
          <div className="absolute inset-0 border-b border-[#e4d6d2]" />
          <p className="font-['Paperlogy:5_Medium',sans-serif] text-[#e4d6d2] text-[16px] not-italic leading-normal">
            Sign in
          </p>
        </div>

        {/* Mobile/Tablet hamburger */}
        <button
          className="xl:hidden cursor-pointer p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
            <path
              d="M0.727 0.727H21.224M0.727 9.694H21.224"
              stroke="#E4D6D2"
              strokeWidth="1.454"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </header>

      {/* Mobile/Tablet Menu Overlay */}
      {menuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-[#25140c] flex flex-col items-center justify-center gap-8">
          <nav className="flex flex-col gap-6 items-center font-['Paperlogy:4_Regular',sans-serif] text-[#e4d6d2] text-[20px] not-italic leading-normal">
            {[...navLinks, "Events", "Contact"].map((item) => (
              <a key={item} href="#" className="hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen(false)}
            className="mt-4 cursor-pointer"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#E4D6D2"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* ====== SECTION 1: HERO ====== */}
      <section className="relative h-[757px] md:h-[717px] xl:min-h-screen overflow-hidden flex-shrink-0">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0">
          <img
            alt="Core Atelier pilates studio"
            className="absolute max-w-none object-cover size-full"
            src={img1}
          />
          <div
            className="absolute inset-0"
            style={{ background: heroGradient }}
          />
        </div>

        {/* Hero text */}
        <p
          className="absolute font-['Bookk_Myungjo:Bold',sans-serif] text-white not-italic
            left-8 right-4 top-[525px]
            text-[40px] leading-tight
            md:text-[41px]
            xl:text-[81px] xl:leading-[0.77] xl:whitespace-nowrap xl:right-auto"
        >
          elevated pilates, crafted for you.
        </p>

        {/* Sign Up button */}
        <div
          className="absolute bg-white flex items-center justify-center rounded-[27px] h-[43px] w-[135px] left-8 top-[636px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Paperlogy:4_Regular',sans-serif] text-[#25140c] text-[14px] not-italic leading-normal whitespace-nowrap">
            Sign Up Now
          </p>
        </div>

        {/* Desktop: Featured in badge (top-right of hero) */}
        <div className="hidden xl:flex flex-col items-end absolute right-20 bottom-28 gap-0">
          <p className="font-['Bookk_Gothic:Light',sans-serif] text-white text-[24px] not-italic leading-normal">
            Featured in
          </p>
          <p className="font-['Bookk_Myungjo:Bold',sans-serif] text-white text-[64px] not-italic leading-none">
            VOGUE
          </p>
        </div>
      </section>

      {/* ====== SECTION 2: CORE MESSAGES ====== */}
      <section className="w-full" style={{ backgroundImage: sectionTwoGradient }}>
        <div className="flex flex-col md:flex-row gap-0 items-stretch p-3 md:gap-8">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-5 not-italic leading-normal px-4 py-2 md:px-4 md:py-1 xl:px-5 xl:py-2.5">
            <h2 className="font-['Bookk_Myungjo:Bold',sans-serif] text-[#25140c] text-[54px] md:text-[64px] leading-tight not-italic">
              core messages
            </h2>
            <p className="font-['Paperlogy:4_Regular',sans-serif] text-black text-[13.6px] md:text-[16px] not-italic leading-normal">
              At Core Atelier, we believe Pilates is more than just exercise—it's an
              experience. Our classes are intentionally kept small with group sizes of
              just three, enabling us to craft sessions as unique as the individuals
              who step into our studio.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 relative h-[378px] md:h-[445px]">
            <img
              alt="Pilates practitioner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src={imgPilates}
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: FEATURED IN ====== */}
      <section className="bg-[#e4d6d2] h-[196px] overflow-hidden relative w-full">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 xl:gap-[52px] px-0">
          <p className="font-['Paperlogy:4_Regular',sans-serif] text-[#25140c] text-[6px] md:text-[11px] xl:text-[17px] text-center not-italic leading-normal tracking-widest uppercase">
            Featured in
          </p>
          <div className="flex items-center w-full">
            {[
              { name: "VOGUE", font: "font-['Bookk_Myungjo:Bold',sans-serif]", borderRight: true },
              { name: "Time out", font: "font-['Ok_Mallang_W:Regular',sans-serif]", borderRight: true },
              { name: "herworld", font: "font-['Bookk_Myungjo:Bold',sans-serif]", borderRight: true },
              { name: "F ZINE", font: "font-['Bookk_Gothic:Bold',sans-serif]", borderRight: true },
              { name: "LIVING", font: "font-['Bookk_Gothic:Bold',sans-serif]", borderRight: false },
            ].map((brand) => (
              <div
                key={brand.name}
                className={`flex-1 flex items-center justify-center py-1 px-1 ${brand.borderRight ? "border-r border-black" : ""}`}
              >
                <p
                  className={`${brand.font} text-black text-[15px] md:text-[28px] xl:text-[44px] not-italic leading-normal text-center`}
                >
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: IMAGE CAROUSEL ====== */}
      <section className="relative w-full h-[521px] md:h-[500px] xl:h-[697px] overflow-hidden flex-shrink-0">
        {/* Background image + gradient */}
        <div className="absolute inset-0">
          <img
            alt="Studio interior"
            className="absolute max-w-none object-cover size-full"
            src={imgInterior}
          />
          <div
            className="absolute inset-0"
            style={{ background: heroGradient }}
          />
        </div>

        {/* Left arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 size-[83px] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity overflow-hidden"
          aria-label="Previous"
        >
          <div className="rotate-180">
            <svg width="60" height="50" viewBox="0 0 59.6573 49.2827" fill="none">
              <path d={CAROUSEL_ARROW} fill="#E4D6D2" />
            </svg>
          </div>
        </button>

        {/* Right arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 size-[83px] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity overflow-hidden"
          aria-label="Next"
        >
          <svg width="60" height="50" viewBox="0 0 59.6573 49.2827" fill="none">
            <path d={CAROUSEL_ARROW} fill="#E4D6D2" />
          </svg>
        </button>
      </section>

      {/* ====== SECTION 5: TESTIMONIALS ====== */}
      <section
        className="relative w-full h-[345px] xl:h-[337px] flex items-center justify-center overflow-hidden flex-shrink-0"
        style={{ backgroundImage: testimonialGradient }}
      >
        <div className="flex flex-col gap-6 items-center justify-center px-6 md:px-12 xl:px-48 py-12 w-full h-full">
          {/* Counter */}
          <p className="font-['Paperlogy:4_Regular',sans-serif] text-[#e4d6d2] text-[16px] text-center not-italic leading-normal">
            {testimonialIndex + 1} of {testimonials.length} reflections
          </p>
          {/* Quote */}
          <p className="font-['Paperlogy:4_Regular',sans-serif] text-[#e4d6d2] text-[16px] text-center not-italic leading-normal max-w-2xl">
            {current.text}
          </p>
          {/* Author */}
          <p className="font-['Paperlogy:6_SemiBold',sans-serif] text-[#e4d6d2] text-[16px] text-center not-italic leading-normal whitespace-pre-wrap">
            {`-  ${current.author}`}
          </p>
          {/* Navigation */}
          <div className="flex gap-4 items-center justify-center">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="relative rounded-[25px] w-[86px] cursor-pointer border border-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-center px-4 py-2.5">
                <svg width="36.8" height="16.1" viewBox="0 0 36.8 16.1" fill="none">
                  <path clipRule="evenodd" d={NAV_ARROW} fill="white" fillRule="evenodd" />
                </svg>
              </div>
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="relative rounded-[25px] w-[86px] cursor-pointer border border-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-center px-4 py-2.5 -scale-y-100 rotate-180">
                <svg width="36.8" height="16.1" viewBox="0 0 36.8 16.1" fill="none">
                  <path clipRule="evenodd" d={NAV_ARROW} fill="white" fillRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ====== SECTION 6: BEGIN YOUR JOURNEY ====== */}
      <section className="bg-[#e4d6d2] w-full overflow-hidden flex-shrink-0">
        <div className="flex flex-col md:flex-row items-stretch h-auto md:h-[241px] xl:h-[397px]">
          {/* Image */}
          <div className="relative w-full md:w-[49%] xl:w-[48%] h-[225px] md:h-full">
            <img
              alt="Begin your journey studio"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src={imgStudio}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(rgba(175,217,186,0.3) 0%, rgba(228,214,210,0.3) 78.365%)",
              }}
            />
          </div>
          {/* Text + Button */}
          <div className="flex-1 flex flex-col items-start justify-start md:justify-center px-4 py-8 md:px-6 xl:px-12 gap-3">
            <h3 className="font-['Bookk_Myungjo:Light',sans-serif] text-[#25140c] text-[31px] md:text-[34px] xl:text-[40px] not-italic leading-tight">
              begin your journey
            </h3>
            <p className="font-['Paperlogy:4_Regular',sans-serif] text-[#25140c] text-[10px] md:text-[11px] xl:text-[13px] not-italic leading-normal max-w-[241px]">
              Discover our offerings and find the classes that best elevate and
              personalize your Pilates experience.
            </p>
            <button className="mt-2 md:mt-4 flex items-center justify-center h-[45px] w-[151px] rounded-[25px] border border-[#25140c] hover:bg-[#25140c]/10 transition-colors cursor-pointer">
              <p className="font-['Paperlogy:4_Regular',sans-serif] text-[#25140c] text-[16px] not-italic leading-normal whitespace-nowrap">
                Explore More
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="bg-[#25140c] w-full">

        {/* Desktop footer */}
        <div className="hidden xl:flex flex-col px-14 py-8 gap-8">
          {/* Top row: tagline + nav */}
          <div className="flex items-start justify-between gap-8">
            <p className="font-['Bookk_Myungjo:Light',sans-serif] text-[#e4d6d2] text-[40px] not-italic leading-normal max-w-[250px]">
              core artistry, in motion
            </p>
            <div className="flex gap-[74px] font-['Paperlogy:4_Regular',sans-serif] text-[#e4d6d2] text-[13px] not-italic leading-normal">
              <div className="flex flex-col gap-5">
                {navLinks.map((item) => (
                  <a key={item} href="#" className="hover:opacity-70 transition-opacity">
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-5 items-center">
                {navLinks2.map((item) => (
                  <a key={item} href="#" className="hover:opacity-70 transition-opacity">
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {navLinks3.map((item) => (
                  <a key={item} href="#" className="hover:opacity-70 transition-opacity">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="w-full border-t border-[#e4d6d2]" />
          {/* Copyright */}
          <div className="flex flex-wrap gap-6 justify-center text-[#e4d6d2]">
            <p className="font-['Paperlogy:4_Regular',sans-serif] not-italic text-[10px]">Privacy Policy</p>
            <p className="font-['Paperlogy:4_Regular',sans-serif] not-italic text-[10px]">Terms of Service</p>
            <p className="font-['Paperlogy:4_Regular',sans-serif] not-italic text-[10px]">Cookie Settings</p>
            <p className="font-['Paperlogy:4_Regular',sans-serif] text-[11px]">
              ⓒ2026 Core Atelier. All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile / Tablet footer */}
        <div className="xl:hidden flex flex-col items-center px-5 py-5 gap-10">
          <p className="font-['Bookk_Myungjo:Light',sans-serif] text-[#e4d6d2] text-[40px] not-italic leading-normal self-start">
            core artistry, in motion
          </p>
          {/* Nav columns */}
          <div className="flex gap-[74px] font-['Paperlogy:4_Regular',sans-serif] text-[#e4d6d2] text-[13.4px] not-italic leading-normal self-start">
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <a key={item} href="#" className="hover:opacity-70 transition-opacity">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5 items-center">
              {navLinks2.map((item) => (
                <a key={item} href="#" className="hover:opacity-70 transition-opacity">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {navLinks3.map((item) => (
                <a key={item} href="#" className="hover:opacity-70 transition-opacity">
                  {item}
                </a>
              ))}
            </div>
          </div>
          {/* Divider */}
          <div className="w-full border-t border-[#e4d6d2]" />
          {/* Copyright + big text */}
          <div className="flex flex-wrap gap-4 justify-center text-[#e4d6d2] w-full">
            <p className="font-['Paperlogy:4_Regular',sans-serif] not-italic text-[8px]">Privacy Policy</p>
            <p className="font-['Paperlogy:4_Regular',sans-serif] not-italic text-[8px]">Terms of Service</p>
            <p className="font-['Paperlogy:4_Regular',sans-serif] not-italic text-[8px]">Cookie Settings</p>
            <p className="font-['Paperlogy:4_Regular',sans-serif] text-[8px]">
              ⓒ2026 Core Atelier. All rights reserved.
            </p>
          </div>
          {/* Big brand name */}
          <div className="w-full overflow-hidden">
            <p className="font-['Bookk_Myungjo:Bold',sans-serif] not-italic text-[#e4d6d2] text-[71px] md:text-[128px] leading-none">
              core atelier
            </p>
          </div>
        </div>
      </footer>

      {/* Desktop: Large "core atelier" brand name */}
      <div className="hidden xl:block bg-[#25140c] w-full overflow-hidden flex-shrink-0">
        <p className="font-['Bookk_Myungjo:Bold',sans-serif] not-italic text-[#e4d6d2] leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(120px, 18.5vw, 300px)" }}
        >
          core atelier
        </p>
      </div>
    </div>
  );
}
