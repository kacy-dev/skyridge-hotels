import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-6 overflow-hidden">
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

      <div className="relative container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Our Company</h3>
          <p className="text-gray-400 mb-4">
            Delivering quality experiences with modern designs and timeless elegance.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition text-sm">About Us</a></li>
            <li><a href="#" className="hover:text-white transition text-sm" >Services</a></li>
            <li><a href="#" className="hover:text-white transition text-sm">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition text-sm">Contact</a></li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition text-sm">Blog</a></li>
            <li><a href="#" className="hover:text-white transition text-sm">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition text-sm">Privacy Policy</a></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex items-center bg-white/10 rounded-full p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-gradient-to-r from-amber-200 to-amber-600 rounded-full hover:scale-105 transition"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 z-10">
        <p>&copy; {new Date().getFullYear()} SKYRIDGE-HOTELS. All Rights Reserved.</p>
        <div className="mt-3 flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-white transition">Cookies</a>
          <a href="#" className="hover:text-white transition">Legal</a>
          <a href="#" className="hover:text-white transition">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
