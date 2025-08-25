"use client";

import { Button, MenuItem, Select, TextField } from "@mui/material";
import {
  MapPin,
  Filter,
  DollarSign,
  ArrowRight,
  Star,
  Calendar,
  Wifi,
  Users,
  Building2,
  Coffee,
  Music,
  Tv,
  Car,
  BedDouble,
  Utensils,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { motion } from "framer-motion";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

const features = [
  {
    title: "High-Speed WiFi",
    icon: Wifi,
    desc: "Stay connected with fast and reliable internet access throughout the property.",
  },
  {
    title: "Event-Ready Spaces",
    icon: Users,
    desc: "Spacious halls designed for conferences, weddings, and celebrations.",
  },
  {
    title: "Modern Facilities",
    icon: Building2,
    desc: "Architectural design blending contemporary elegance with comfort.",
  },
  {
    title: "Cafe & Dining",
    icon: Coffee,
    desc: "Relax in our café or enjoy local & continental dishes at the restaurant.",
  },
  {
    title: "Entertainment",
    icon: Tv,
    desc: "Smart TVs, music lounge, and vibrant spaces for relaxation.",
  },
  {
    title: "Ample Parking",
    icon: Car,
    desc: "Secure on-site parking with easy access for guests.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Organizer",
    feedback:
      "This venue exceeded expectations! The ambiance, facilities, and support made our event seamless and memorable.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Michael Brown",
    role: "Corporate Manager",
    feedback:
      "Perfect for conferences. The Wi-Fi was reliable, seating was comfortable, and staff support was outstanding.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Emily Davis",
    role: "Wedding Planner",
    feedback:
      "A hidden gem! The local charm mixed with modern facilities gave us everything we needed for a magical day.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
];


  const items = [
    {
      id: 1,
      title: "Executive Conference Room",
      subtitle: "Up to 50 Guests • Wi-Fi • AC",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 2,
      title: "Banquet Hall",
      subtitle: "200+ Guests • Stage • Event Ready",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 3,
      title: "Modern Lounge",
      subtitle: "Relax • Work • Connect",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 4,
      title: "Outdoor Terrace",
      subtitle: "Scenic Views • Events • Chill",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
  ];




export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="relative h-screen w-full">
        {/* Background image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Content */}
        <div className="relative pt-30 lg:pt-20 z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 lg:px-40">
          {/* Title */}
         
          <motion.h1
            className="text-3xl md:text-6xl font-extrabold lg:font-bold mb-4 bg-gradient-to-r from-white to-amber-600 text-transparent bg-clip-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience Luxury & Comfort at Skyridge Hotel
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[14px] lg:text-[16px] text-gray-200 leading-relaxed max-w-4xl lg:px-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
  
            Skyridge Hotel blends elegance,
            modern amenities, and top-tier hospitality — your perfect
            destination for relaxation, business, and unforgettable memories.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className=" flex flex-coll w-full lg:flex-row justify-center items-center gap-6 lg:gap-5 mt-6"
          >
            <button className="flex justify-center text-sm items-center w-full lg:max-w-max text-white/100 px-4 py-2 outline-1 outline-offset-4 outline-amber-600 rounded-xl bg-amber-600 hover:bg-transparent transition-all duration-300">
              <a href=""> Book your stay</a>
              <span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
            <button
              className=" w-full text-sm
                    lg:max-w-max
                     text-white/100 outline-1 outline-offset-4 outline-amber-500 px-4 py-2 rounded-xl hover:bg-amber-600 transition-all duration-300"
            >
              <a href="">Explore Rooms</a>
            </button>
          </motion.div>

          {/* Rating */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-8 mb-10 text-yellow-400 hidden lg:flex"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}
            <span className="text-gray-200 ml-2">Rated 5-Star by Guests</span>
          </motion.div>

          {/* Search Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full mt-8 lg:mt-0 max-w-4xl p-4  flex flex-col md:flex-row gap-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {/* Location */}
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="text-gray-500" />
              <TextField
                fullWidth
                defaultValue="Lisbon, Portugal"
                variant="standard"
              />
            </div>

            {/* Type */}
            <div className="flex flex-1 items-center gap-2">
              <Filter className="text-gray-500" />
              <Select fullWidth defaultValue="Minimalist" variant="standard">
                <MenuItem value="Minimalist">Minimalist</MenuItem>
                <MenuItem value="Luxury">Luxury</MenuItem>
                <MenuItem value="Classic">Classic</MenuItem>
              </Select>
            </div>

            {/* Price */}
            <div className="flex flex-1 items-center gap-2">
              <DollarSign className="text-gray-500" />
              <Select fullWidth defaultValue="10000-12000" variant="standard">
                <MenuItem value="5000-8000">₦5,000 - ₦8,000</MenuItem>
                <MenuItem value="8000-10000">₦8,000 - ₦10,000</MenuItem>
                <MenuItem value="10000-12000">₦10,000 - ₦12,000</MenuItem>
              </Select>
            </div>

            {/* Button */}
            <button className="flex justify-center items-center w-full lg:max-w-max text-sm text-white/100 hover:text-black px-2 py-1 outline-1 outline-offset-2 outline-amber-600 rounded-xl bg-amber-600 hover:bg-transparent transition-all duration-300">
              <a href=""> Search Room</a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}

      <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE + FLOATING CARDS */}
          <div className="relative">
            <motion.img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Hotel Entrance"
              className="rounded-3xl shadow-xl object-cover w-full h-[400px] sm:h-[500px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Floating Card - Opening */}
            <motion.div
              className="absolute top-4 left-4 bg-white rounded-2xl shadow-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 max-w-[80%] sm:max-w-none"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Calendar className="text-amber-500 shrink-0" size={20} />
              <p className="font-semibold text-xs text-gray-400 sm:text-sm">
                Opened April 2025
              </p>
            </motion.div>

            {/* Floating Card - Location */}
            <motion.div
              className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 max-w-[80%] sm:max-w-none"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MapPin className="text-blue-500 shrink-0" size={20} />
              <p className="font-semibold text-gray-400 text-xs sm:text-sm">
                Mile 50, Abakaliki
              </p>
            </motion.div>
          </div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
              About & <span className="text-amber-600 border-r-4 border-amber-600">Highlights</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Nestled in the serene heart of Ebonyi State, our hotel blends{" "}
              <span className="font-semibold text-gray-800">
                modern comfort
              </span>{" "}
              with genuine hospitality — making every stay memorable.
            </p>

            {/* Tagline */}
            <div className="border-l-4 border-amber-500 pl-4 italic text-lg sm:text-xl text-gray-800 font-medium">
              “Modern comfort meets hospitality in Ebonyi State”
            </div>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: <Star className="text-amber-500" />,
                  text: "Luxurious Rooms",
                },
                {
                  icon: <Star className="text-amber-500" />,
                  text: "Peaceful Location",
                },
                {
                  icon: <Star className="text-amber-500" />,
                  text: "Easy Accessibility",
                },
                {
                  icon: <Star className="text-amber-500" />,
                  text: "Premium Facilities",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                >
                  {item.icon}
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 overflow-hidden">
        {/* Decorative blur orbs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-25"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-100 to-amber-500 bg-clip-text text-transparent">
              Prominent Amenities
            </h2> */}
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
              Prominent <span className="text-amber-600 border-r-4 border-amber-600">Amenities</span>
            </h2>
            <p className="text-zinc-600 mt-4 text-lg max-w-2xl mx-auto">
              Discover comfort, style, and functionality — designed for events,
              relaxation, and unforgettable stays in Ebonyi State.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                // viewport={{ once: true }}
              >
                <div className="group h-full rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-lg border border-zinc-200 hover:border-amber-400">
                  <div className="p-8 flex flex-col items-start">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-amber-600 text-white shadow-md group-hover:scale-110 transform transition-transform duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-zinc-800 group-hover:text-amber-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-zinc-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
              }}
            />

            {/* Glass overlay (left) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
              className="relative bg-white/20 backdrop-blur-lg p-10 flex flex-col justify-between text-white z-10"
            >
              <div>
                <span className="uppercase tracking-widest text-xs font-medium text-zinc-200">
                  Luxe Suite
                </span>
                <h2 className="text-4xl font-bold mt-2">Luxe</h2>
                <p className="mt-3 text-sm max-w-sm">
                  Discover the unique atmosphere of our Luxe Suite, where
                  history meets modern comfort.
                </p>
              </div>

              {/* Details row */}
              <div className="flex gap-6 text-sm mt-8">
                <div className="flex items-center gap-2">
                  <BedDouble size={18} /> 2 Beds
                </div>
                <div className="flex items-center gap-2">
                  <Star size={18} /> 83 Reviews
                </div>
                <div className="flex items-center gap-2">42 m²</div>
              </div>
            </motion.div>

            {/* Right side content */}
            <div className="relative z-10 flex items-end justify-end p-6">
              {/* Floating info cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: <BedDouble className="text-emerald-500" />,
                    title: "Room with double bed",
                    desc: "Comfort and convenient location allow you to relax profitably",
                  },
                  {
                    icon: <Star className="text-amber-500" />,
                    title: "Beautiful view",
                    desc: "Comfort and convenient location allow you to relax profitably",
                  },
                  {
                    icon: <Utensils className="text-pink-500" />,
                    title: "Lunches included",
                    desc: "Comfort and convenient location allow you to relax profitably",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    // viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-4 w-72"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-100">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mini-gallery (bottom right corner) */}
              {/* <div className="absolute top-6 right-6 flex flex-col gap-3">
                {[
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=60",
                  "https://images.unsplash.com/photo-1600585153455-1f111b1d9e24?auto=format&fit=crop&w=400&q=60",
                  "https://images.unsplash.com/photo-1600585154542-2c09f0a3c1c6?auto=format&fit=crop&w=400&q=60",
                ].map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    alt={`Gallery ${idx}`}
                    className="w-28 h-20 object-cover rounded-xl shadow-md border border-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              What Our<span className="text-amber-600">Guests Say</span>
            </h2> */}

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
              What Our <span className="text-amber-600 border-r-4 border-amber-600">Guests Say</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real experiences from people who trusted us to host their special
              moments.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                  <div className="p-6 flex flex-col items-start">
                    {/* Avatar */}
                    <div className="flex items-center gap-4 mb-4">
                      <p className="h-12 w-12">
                        <img
                          src={t.image}
                          className="rounded-full"
                          alt={t.name}
                        />
                        <span>{t.name[0]}</span>
                      </p>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {t.name}
                        </h3>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-5 w-5 ${
                            idx < t.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className="text-gray-700 leading-relaxed">
                      {t.feedback}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 
            <Footer />
          
    </div>
  );
}
