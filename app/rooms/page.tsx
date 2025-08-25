"use client";
import Image from "next/image";
import Link from "next/link";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ArrowUpRight } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Luxury suite with king-sized bed, private balcony & city view.",
    price: "₦50,000 / night",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Spacious executive room with modern interior & work desk.",
    price: "₦35,000 / night",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    name: "Presidential Suite",
    description: "Top-class suite with lounge, jacuzzi & VIP services.",
    price: "₦120,000 / night",
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
          <p className="mt-4 text-lg">
            Experience luxury and comfort at SkyRidge Hotels
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Explore Our Rooms
        </h2>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={room.image}
                alt={room.name}
                width={600}
                height={400}
                className="object-cover w-full h-72 group-hover:scale-110 transition-transform duration-500 group-hover:brightness-120"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                <p className="text-gray-200 text-sm mt-2">{room.description}</p>
                <p className="text-amber-400  mt-2 font-semibold">
                  {room.price}
                </p>
                <div className="flex gap-3 mt-4">
                  <Link
                    href={`/rooms/${room.id}`}
                    className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
                  >
                    View Details

                    <span>
                        <ArrowUpRight className="inline-block ml-1 w-4 h-4" />
                    </span>
                  </Link>
                  <button className="bg-amber-600 outline-1 outline-amber-600 outline-offset-2 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition">
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
