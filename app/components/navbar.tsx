
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { XIcon, MenuIcon, MoreVerticalIcon } from "lucide-react";
import {  Home, Info, Phone, BedDouble } from "lucide-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    const handleScroll = () => {
      if (isMobile) {
        if (window.scrollY > 50) {
          setShowNavbar(false);
          setShowTab(true);
        } else {
          setShowNavbar(true);
          setShowTab(false);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full bg-white border-t-4 border-amber-600 rounded lg:rounded-xl shadow-md z-50 lg:mt-3 lg:mx-4 "
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-amber-600">SKYRIDGE-HOTELS</h1>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <XIcon className="text-amber-600" /> : <MenuIcon className="text-amber-600" />}
            </button>
          ) : (
            <div className="flex space-x-6 font-medium">
              <a href="#home" className="text-black">Home</a>
              <a href="#rooms" className="text-black">Rooms</a>
              <a href="#about" className="text-black">About</a>
              <a href="#contact" className="text-black">Contact</a>
            </div>
          )}
                     <button className="flex justify-center items-center text-sm hidden lg:flex w-full lg:max-w-max text-white/100 px-4 py-2 outline-1 outline-offset-2 outline-amber-600 rounded-xl bg-amber-600 hover:bg-transparent transition-all duration-300">
                      <a href="">Book Now</a>
                     </button>
        </div>

        <AnimatePresence>
          {menuOpen && isMobile && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden "
            >
              <div className="flex flex-col px-6 py-4 space-y-3">
                <a href="#home" className="text-black">Home</a>
                <a href="#rooms" className="text-black">Rooms</a>
                <a href="#about" className="text-black">About</a>
                <a href="#contact" className="text-black">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {showTab && isMobile && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t flex justify-around py-3 z-50"
          >
            <Link href="/" className="flex flex-col items-center text-gray-700">
             <Home className="w-6 h-6" />
             <span className="text-xs">Home</span>
           </Link>
           <Link href="#about" className="flex flex-col items-center text-gray-700">
             <Info className="w-6 h-6" />
             <span className="text-xs">About</span>
           </Link>
           <Link href="#rooms" className="flex flex-col items-center text-gray-700">
             <BedDouble className="w-6 h-6" />
             <span className="text-xs">Rooms</span>
           </Link>
           <Link href="#contact" className="flex flex-col items-center text-gray-700">
             <Phone className="w-6 h-6" />
             <span className="text-xs">Contact</span>
           </Link>
           
            <IconButton onClick={handleClick}>
              <MoreVerticalIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Booking</MenuItem>
              <MenuItem onClick={handleClose}>Logistics</MenuItem>
              <MenuItem onClick={handleClose}>Events</MenuItem>
              <MenuItem onClick={handleClose}>Restaurant</MenuItem>

            </Menu>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
