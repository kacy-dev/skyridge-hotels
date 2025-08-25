"use client";
import Image from "next/image";
import Link from "next/link";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ArrowUpRight, CalendarIcon } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description:
      "Luxury suite with king-sized bed, private balcony & city view.",
    price: "₦50,000 / night",
     available: 3,
    capacity: "2 Adults",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Spacious executive room with modern interior & work desk.",
    price: "₦35,000 / night",
     available: 3,
    capacity: "2 Adults",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    name: "Presidential Suite",
    description: "Top-class suite with lounge, jacuzzi & VIP services.",
    price: "₦120,000 / night",
     available: 3,
    capacity: "2 Adults",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function RoomsPage() {
  return (
    <div>
      {/* Hero Section */}
      <Navbar />
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Hotel Rooms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold">Our Rooms</h1>
          <p className="mt-4 text-lg lg:px-0 px-4">
            Experience luxury and comfort at SkyRidge Hotels
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Explore Our Rooms
        </h2>

        <div className="max-w-6xl mx-auto pb-12 pt-5 px-0 lg:px-4 space-y-3 grid lg:grid-cols-2 gap-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden"
            >
              {/* Left Side - Image with Overlay */}
              <div className="relative group group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={800}
                  height={600}
                  className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 left-4 top-4 bg-amber-100  w-max h-max px-3 py-2 rounded text-amber-600 text-sm font-normal">
                  {room.name}
                </div>
              </div>

              {/* Right Side - Room Details */}
              <div className="p-6 flex flex-col justify-between bg-gradient-to-b from-amber-100 transparent">
                <div className="grid grid-cols-2 gap-3 lg:gap-0 w-full lg:flex lg:flex-col">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {room.name}
                  </h2>
                  <p className="text-gray-600 mt-2">{room.capacity}</p>
                  <p className="text-xl font-semibold text-amber-600 mt-4">
                    {room.price}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {room.available} rooms available
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 lg:grid flex flex-wrap  gap-3">
                  <button className="px-4 py-2 text-black/90 rounded-xl text-sm  outline-1 outline-offset-2 bg-amber-100 outline-amber-600 transition-all duration-300 cursor-pointer">
                    View Calendar <span> 
                    <CalendarIcon className="inline-block ml-1 w-4 h-4" />
                    </span>
                  </button>
                  <button className="px-4 py-2 text-sm flex justify-center items-center rounded-xl text-black/90   outline-1 outline-offset-2 bg-amber-100 outline-amber-600 transition-all duration-300 cursor-pointer">
                    View Details 
                    <span>
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                    </span>
                  </button>
                  <button className="px-4 py-2 bg-amber-600 text-sm text-white rounded-lg outline-1 outline-offset-2 outline-amber-600 hover:bg-transparent cursor-pointer hover:text-black/90">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
