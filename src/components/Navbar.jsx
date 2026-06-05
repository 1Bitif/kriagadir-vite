// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Search, 
//   ChevronDown, 
//   Menu, 
//   X,
//   User,
//   Globe,
//   Home,
//   Car,
//   Phone,
//   Grid3x3
// } from 'lucide-react';

// // shadcn/ui components
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { t, i18n } = useTranslation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const languages = [
//     { code: 'fr', name: 'Français', flag: '🇫🇷' },
//     { code: 'en', name: 'English', flag: '🇬🇧' },
//     { code: 'ar', name: 'العربية', flag: '🇲🇦' },
//   ];

//   const navLinks = [
//     { label: t('home'), action: () => scrollTo('home'), icon: Home },
//     { label: t('vehicles'), action: () => scrollTo('fleet'), icon: Car },
//     { label: t('ourCars'), action: () => navigate('/cars'), icon: Grid3x3 },
//     { label: t('contact'), action: () => scrollTo('contact'), icon: Phone },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollTo = (sectionId) => {
//     setMenuOpen(false);
//     setSearchOpen(false);
//     if (location.pathname !== '/') {
//       navigate('/');
//       setTimeout(() => {
//         document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     } else {
//       document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const currentLang = languages.find(l => l.code === i18n.language);

//   // Animation variants
//   const navVariants = {
//     initial: { y: -100, opacity: 0 },
//     animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const mobileMenuVariants = {
//     closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
//     open: { opacity: 1, height: "auto", transition: { duration: 0.3 } }
//   };

//   const searchBarVariants = {
//     hidden: { opacity: 0, height: 0, y: -10 },
//     visible: { opacity: 1, height: "auto", y: 0, transition: { duration: 0.3 } }
//   };

//   return (
//     <>
//       <motion.nav 
//         initial="initial"
//         animate="animate"
//         variants={navVariants}
//         className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//           scrolled 
//             ? 'bg-white/10 backdrop-blur-md border-b border-white/10' 
//             : 'bg-transparent'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
//           {/* Logo with animation */}
//           <motion.button
//             onClick={() => scrollTo('home')}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="text-white font-bold italic text-2xl tracking-tight select-none hover:opacity-90 transition-opacity bg-transparent border-none cursor-pointer drop-shadow-lg"
//           >
//             kriagadir
//           </motion.button>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center gap-2 lg:gap-4 absolute left-1/2 -translate-x-1/2">
//             {navLinks.map(({ label, action, icon: Icon }, index) => (
//               <motion.button
//                 key={label}
//                 onClick={action}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 text-white/75 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg hover:bg-white/10"
//               >
//                 <Icon className="w-4 h-4" />
//                 {label}
//               </motion.button>
//             ))}
//           </div>

//           {/* Right Icons */}
//           <div className="flex items-center gap-1">
            
//             {/* Search Button with animation */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="text-white/75 hover:text-white p-2.5 rounded-full hover:bg-white/10 transition-all"
//             >
//               <Search className="w-[18px] h-[18px]" />
//             </motion.button>

//             {/* Language Dropdown with shadcn */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="hidden md:flex items-center gap-1 text-white/75 hover:text-white p-2.5 rounded-full hover:bg-white/10 transition-all text-sm"
//                 >
//                   <span className="text-base">{currentLang?.flag}</span>
//                   <ChevronDown className="w-3 h-3" />
//                 </motion.button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="bg-gray-950/95 backdrop-blur-sm border-white/10 text-white">
//                 {languages.map(lang => (
//                   <DropdownMenuItem
//                     key={lang.code}
//                     onClick={() => i18n.changeLanguage(lang.code)}
//                     className={`cursor-pointer gap-2 focus:bg-white/10 focus:text-white ${
//                       i18n.language === lang.code ? 'bg-white/10 text-white font-medium' : 'text-white/65'
//                     }`}
//                   >
//                     <span className="text-base">{lang.flag}</span>
//                     <span>{lang.name}</span>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Mobile Menu Button with animation */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="flex md:hidden flex-col justify-center items-center gap-[5px] p-2.5 rounded-full hover:bg-white/10 transition-all w-10 h-10"
//             >
//               <AnimatePresence mode="wait">
//                 {menuOpen ? (
//                   <motion.div
//                     key="close"
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                   >
//                     <X className="w-[18px] h-[18px] text-white" />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="menu"
//                     initial={{ rotate: 90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: -90, opacity: 0 }}
//                   >
//                     <Menu className="w-[18px] h-[18px] text-white" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </div>
//         </div>

//         {/* Search Bar with animation */}
//         <AnimatePresence>
//           {searchOpen && (
//             <motion.div
//               variants={searchBarVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="border-t border-white/10 bg-white/40 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3"
//             >
//               <div className="max-w-7xl mx-auto">
//                 <Input
//                   autoFocus
//                   type="text"
//                   placeholder={t('search') || 'Search for cars...'}
//                   className="w-full bg-white/10 text-white placeholder-white/40 rounded-full px-5 py-2.5 text-sm outline-none border-white/15 focus:border-white/30 transition-colors"
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Mobile Menu with animation */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               variants={mobileMenuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="md:hidden border-t border-white/10 bg-white/60 backdrop-blur-md"
//             >
//               <div className="px-4 py-3 space-y-1">
//                 {navLinks.map(({ label, action, icon: Icon }, index) => (
//                   <motion.button
//                     key={label}
//                     onClick={action}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="flex items-center gap-3 text-white/80 hover:text-white text-sm py-3.5 px-3 w-full text-left border-b border-white/10 last:border-0 transition-all rounded-lg hover:bg-white/10"
//                   >
//                     <Icon className="w-4 h-4" />
//                     {label}
//                   </motion.button>
//                 ))}

//                 {/* Language selector for mobile */}
//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="flex gap-2 pt-4 pb-1 flex-wrap"
//                 >
//                   {languages.map(lang => (
//                     <motion.button
//                       key={lang.code}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => { i18n.changeLanguage(lang.code); setMenuOpen(false); }}
//                       className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs border transition-all
//                         ${i18n.language === lang.code
//                           ? 'border-white/60 text-white bg-white/10'
//                           : 'border-white/20 text-white/55 hover:border-white/40 hover:text-white'
//                         }`}
//                     >
//                       {lang.flag} {lang.name}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Spacer to prevent content hiding under navbar */}
//       <div className="h-16" />
//     </>
//   );
// }

// export default Navbar;