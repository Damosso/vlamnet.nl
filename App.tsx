
import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Flame, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  ArrowRight, 
  Monitor,
  ArrowLeft,
  Calendar,
  Tag,
  CheckCircle2,
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  WifiOff
} from 'lucide-react';
import { Page, BlogPost, Theme, ServiceFeature } from './types';

// --- DATA ---

const INITIAL_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Project Nebula: RTX 4090 Monster",
    category: "Gaming",
    description: "Een ultieme 4K gaming machine met custom waterkoeling loop in een Lian Li kast. Dit systeem is gebouwd voor pure prestaties.",
    fullDescription: "Een ultieme 4K gaming machine met custom waterkoeling loop in een Lian Li kast. Dit systeem is gebouwd voor pure prestaties zonder compromissen.\n\nDe custom loop koelt zowel de processor als de grafische kaart, waardoor de temperaturen zelfs onder zware belasting extreem laag blijven. We hebben gekozen voor een kleurenschema dat past bij de 'Nebula' esthetiek: diepe paarse en blauwe tinten die dynamisch reageren op in-game acties.",
    imageUrl: "https://picsum.photos/seed/pc1/800/600",
    galleryImages: [
      "https://picsum.photos/seed/pc1-detail1/800/600",
      "https://picsum.photos/seed/pc1-detail2/800/600",
      "https://picsum.photos/seed/pc1-detail3/800/600"
    ],
    specs: ["RTX 4090", "Intel i9-14900K", "64GB DDR5", "4TB NVMe", "Custom Watercooling"],
    date: "12 Okt 2023"
  },
  {
    id: 2,
    title: "Creative Studio Workstation",
    category: "Workstation",
    description: "Geoptimaliseerd voor 3D rendering en video editing. Stil, krachtig en stabiel.",
    fullDescription: "Geoptimaliseerd voor 3D rendering en video editing. Stil, krachtig en stabiel. \n\nVoor deze klant was stilte de allerbelangrijkste factor. We hebben gebruik gemaakt van geluiddempende panelen en premium fans van Noctua. Ondanks de fluisterstille werking, levert dit beest topprestaties in Blender en Premiere Pro.",
    imageUrl: "https://picsum.photos/seed/pc2/800/600",
    galleryImages: [
      "https://picsum.photos/seed/pc2-detail1/800/600",
      "https://picsum.photos/seed/pc2-detail2/800/600"
    ],
    specs: ["RTX 4000 Ada", "AMD Threadripper", "128GB ECC RAM", "8TB RAID 10"],
    date: "28 Sep 2023"
  },
  {
    id: 3,
    title: "White Ice: Budget Gaming",
    category: "Gaming",
    description: "Maximale frames per euro. Een prachtige witte build die alle moderne games aankan.",
    fullDescription: "Maximale frames per euro. Een prachtige witte build die alle moderne games aankan.\n\nWie zegt dat mooi duur moet zijn? Met de 'White Ice' build bewijzen we het tegendeel. Door slimme componentkeuzes hebben we een esthetisch perfect plaatje gecreëerd dat ook nog eens Cyberpunk 2077 op High settings draait.",
    imageUrl: "https://picsum.photos/seed/pc3/800/600",
    galleryImages: [
      "https://picsum.photos/seed/pc3-detail1/800/600",
      "https://picsum.photos/seed/pc3-detail2/800/600",
      "https://picsum.photos/seed/pc3-detail3/800/600"
    ],
    specs: ["RTX 4070", "Ryzen 7 7800X3D", "32GB DDR5", "1TB NVMe"],
    date: "15 Sep 2023"
  }
];

// --- CSS 3D PC COMPONENT ---

const GamingPCGraphic = () => {
  // Dimensions for the 3D Box
  // Width: 280px, Height: 500px, Depth: 460px
  const width = 280;
  const height = 500;
  const depth = 460;
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center perspective-1000">
      {/* 
         Wrapper for Floating Animation 
         Separated to avoid transform conflicts with rotation
      */}
      <div className="animate-float preserve-3d">
        {/* 
          The rotating container.
          Set to -55deg to show the Side View (Glass Panel) prominently but keep Front visible.
        */}
        <div 
          className="relative preserve-3d transition-transform duration-700 ease-out" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)} // Toggle for mobile tap
          style={{ 
            width: `${width}px`, 
            height: `${height}px`,
            // Default: -55deg (Side/Front Mix), Hover: -40deg (More Front)
            transform: isHovered ? 'rotateY(-40deg)' : 'rotateY(-55deg)',
          }}
        >
          
          {/* =======================
              1. FRONT FACE (Intake Fans)
              Width x Height
              TranslateZ = Depth / 2 (230px)
             ======================= */}
          <div 
            className="absolute inset-0 bg-slate-900 border-2 border-slate-800 rounded-sm flex flex-col overflow-hidden backface-hidden"
            style={{ transform: `translateZ(${depth / 2}px)` }}
          >
            {/* Diamond Mesh Pattern */}
            <div className="flex-1 relative bg-slate-950">
               {/* Mesh holes */}
               <div className="absolute inset-0 z-10 opacity-60" 
                    style={{ 
                      backgroundImage: 'radial-gradient(#1e293b 2px, transparent 2px)',
                      backgroundSize: '8px 8px'
                    }}>
               </div>
               
               {/* Fans Layer */}
               <div className="absolute inset-0 flex flex-col items-center justify-evenly py-6 z-0">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-32 h-32 relative flex items-center justify-center">
                       {/* Fan Frame */}
                       <div className="w-28 h-28 rounded-full border-[3px] border-slate-800 bg-slate-900/50 relative shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center overflow-hidden">
                          
                          {/* Inner RGB Ring Glow */}
                          <div className="absolute inset-0 rounded-full border border-orange-500/30 opacity-70"></div>
                          
                          {/* Spinning Assembly */}
                          <div className="w-full h-full animate-spin-slow relative">
                              {/* 9 Blades */}
                              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                                 <defs>
                                    <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                       <stop offset="0%" stopColor="#334155" /> 
                                       <stop offset="100%" stopColor="#1e293b" />
                                    </linearGradient>
                                 </defs>
                                 <g fill="url(#bladeGrad)" stroke="#475569" strokeWidth="0.5">
                                    {[0, 40, 80, 120, 160, 200, 240, 280, 320].map(rot => (
                                        <path 
                                          key={rot} 
                                          d="M50 50 Q 75 15 95 35 T 98 55 L 50 50" 
                                          transform={`rotate(${rot} 50 50)`}
                                          className="opacity-95"
                                        />
                                    ))}
                                 </g>
                              </svg>
                          </div>

                          {/* Central Hub */}
                          <div className="absolute w-8 h-8 bg-slate-800 rounded-full z-10 border border-slate-600 flex items-center justify-center shadow-lg">
                             <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-80 shadow-[0_0_5px_orange]"></div>
                             </div>
                          </div>

                          {/* RGB Reflection on blades (Static Overlay) */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/10 to-transparent pointer-events-none"></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            {/* Front IO Panel */}
            <div className="h-16 bg-slate-800 border-t border-slate-700 flex items-center justify-center gap-4 z-20 shadow-lg">
              <div className="w-6 h-6 rounded-full border border-slate-500 bg-slate-900 shadow-inner active:bg-orange-500 transition-colors cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <div className="w-10 h-1.5 rounded-full bg-slate-700 shadow-inner"></div>
              <div className="w-10 h-1.5 rounded-full bg-slate-700 shadow-inner"></div>
            </div>
          </div>


          {/* =======================
              2. BACK FACE (Solid)
              Width x Height
              RotateY 180deg
              TranslateZ = Depth / 2 (230px)
             ======================= */}
          <div 
            className="absolute inset-0 bg-slate-800 border-2 border-slate-700"
            style={{ transform: `rotateY(180deg) translateZ(${depth / 2}px)` }}
          >
            {/* Rear I/O Shield (Visual Ports) */}
            <div className="absolute top-12 right-12 w-10 h-32 bg-slate-400 border border-slate-500 rounded-sm flex flex-col items-center p-1 gap-1 shadow-inner z-10">
                {/* PS/2 or USB Top */}
                <div className="w-6 h-4 bg-slate-600 rounded-sm flex gap-0.5 justify-center pt-0.5">
                   <div className="w-2 h-3 bg-black/50"></div>
                   <div className="w-2 h-3 bg-blue-700/50"></div>
                </div>
                {/* HDMI / DP */}
                <div className="w-6 h-6 bg-slate-300 border border-slate-500 rounded-sm flex flex-col gap-0.5 items-center justify-center">
                    <div className="w-4 h-1 bg-black/80 rounded-[1px]"></div>
                    <div className="w-4 h-1 bg-black/80 rounded-[1px]"></div>
                </div>
                {/* USB Stack */}
                <div className="w-6 h-8 bg-slate-300 border border-slate-500 rounded-sm flex flex-col gap-1 items-center justify-center">
                    <div className="w-4 h-2 bg-blue-600 rounded-[1px]"></div>
                    <div className="w-4 h-2 bg-blue-600 rounded-[1px]"></div>
                </div>
                {/* Ethernet */}
                <div className="w-6 h-5 bg-slate-300 border border-slate-500 rounded-sm flex items-center justify-center">
                    <div className="w-4 h-3 bg-black/20 border border-slate-400"></div>
                </div>
                {/* Audio */}
                <div className="w-6 h-6 bg-slate-300 rounded-sm flex flex-wrap gap-0.5 justify-center content-center">
                   <div className="w-2 h-2 rounded-full bg-green-500 border border-black/20"></div>
                   <div className="w-2 h-2 rounded-full bg-red-500 border border-black/20"></div>
                   <div className="w-2 h-2 rounded-full bg-blue-500 border border-black/20"></div>
                </div>
             </div>

            {/* PSU Exhaust */}
            <div className="absolute bottom-4 left-8 right-8 h-20 border-2 border-dashed border-slate-600 rounded"></div>
            {/* Rear Fan */}
            <div className="absolute top-12 left-8 w-24 h-24 rounded-full border border-slate-600 bg-slate-900/50"></div>
            {/* PCI Slots */}
            <div className="absolute top-52 right-8 w-full h-48 flex flex-col gap-2 items-end px-8">
              {[1,2,3,4,5,6].map(i => <div key={i} className="w-full h-4 bg-slate-400/20 rounded-sm border border-slate-600"></div>)}
            </div>
          </div>


          {/* =======================
              3. RIGHT FACE (Glass Side Panel)
              Depth x Height (460 x 500)
              RotateY 90deg
              TranslateZ = Width / 2 (140px)
             ======================= */}
          <div 
            className="absolute bg-slate-900/30 border-2 border-slate-700/50 backdrop-blur-[0.5px] overflow-hidden group"
            style={{ 
              width: `${depth}px`, 
              height: `${height}px`,
              // Centering adjustment: Left = (Width - Depth) / 2
              left: `${(width - depth) / 2}px`,
              transform: `rotateY(90deg) translateZ(${width / 2}px)` 
            }}
          >
            {/* Glass Reflection sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-50"></div>
            
            {/* --- INTERIOR --- */}
            <div className="absolute inset-0 p-6 flex flex-col">
               
               {/* Top Fans (Replaced Radiator) */}
               <div className="h-8 w-full bg-transparent mb-4 flex items-center justify-center gap-1 opacity-60">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-2 flex-1 mx-1 bg-slate-800 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
                  ))}
               </div>

               {/* Main Chamber */}
               <div className="flex-1 bg-slate-900/80 rounded-lg border border-slate-700 relative shadow-inner p-4 overflow-hidden">
                  
                  {/* Motherboard Backplate with Tech Traces */}
                  <div className="absolute inset-2 bg-slate-800 border border-slate-600 rounded z-0 opacity-80 overflow-hidden">
                     {/* Circuitry Pattern SVG */}
                     <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                           <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" fill="none"/>
                           <circle cx="20" cy="20" r="2" fill="white" />
                           <path d="M10 10l5 5h10l5-5" stroke="white" strokeWidth="0.5" fill="none" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit)" />
                     </svg>
                  </div>

                  {/* I/O Shroud (Detailed) */}
                  <div className="absolute top-12 left-4 w-16 h-32 bg-slate-700 border border-slate-600 rounded-tl-xl rounded-bl-md shadow-lg z-10 flex flex-col relative overflow-hidden">
                     {/* Branding Line */}
                     <div className="absolute top-4 left-0 w-full h-1 bg-vlam-orange shadow-[0_0_10px_orange]"></div>
                     {/* Text */}
                     <div className="mt-8 ml-2">
                        <span className="text-[10px] font-black text-slate-400 block tracking-widest">PRO</span>
                        <span className="text-[8px] font-bold text-slate-500 block">SERIES</span>
                     </div>
                     {/* Heat fin look */}
                     <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
                        <div className="h-0.5 w-full bg-slate-600"></div>
                        <div className="h-0.5 w-3/4 bg-slate-600"></div>
                        <div className="h-0.5 w-1/2 bg-slate-600"></div>
                     </div>
                  </div>

                  {/* Top VRM Heatsink */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-8 bg-slate-600 rounded shadow-md z-10 border-b-2 border-slate-500"></div>
                  
                  {/* Capacitors */}
                  <div className="absolute top-20 left-1/2 -ml-4 flex flex-col gap-1 z-10">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-3 h-3 rounded-full bg-slate-400 shadow-sm border border-slate-500"></div>
                    ))}
                  </div>

                  {/* CPU Air Cooler (Tower) - Refined */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group/cooler">
                     
                     {/* Top Plate (Black Anodized) */}
                     <div className="w-28 h-6 bg-slate-900 rounded-t-md border border-slate-700 flex justify-between px-3 items-center shadow-lg relative z-20 overflow-hidden">
                         {/* Heatpipe Caps */}
                         <div className="flex gap-2">
                            {[1,2,3,4].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 border border-orange-700 shadow-inner"></div>)}
                         </div>
                         {/* Branding */}
                         <div className="h-0.5 w-8 bg-vlam-orange shadow-[0_0_5px_orange]"></div>
                     </div>
                     
                     {/* Heatsink Fin Stack - Tighter Pitch for realism */}
                     <div className="w-28 h-28 relative shadow-2xl border-x border-slate-500/50" 
                          style={{ background: 'repeating-linear-gradient(180deg, #cbd5e1 0px, #cbd5e1 1px, #64748b 1px, #64748b 2px)' }}>
                          
                          {/* Embossed Center Channel */}
                          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-black/10 border-x border-black/5"></div>

                          {/* Fan (Right Side - Push Configuration) */}
                          <div className="absolute -right-8 top-1 bottom-1 w-8 bg-slate-900 border border-slate-700 rounded-r-md shadow-lg flex items-center justify-center overflow-hidden">
                             {/* Fan Frame Details */}
                             <div className="absolute inset-0 border-l-4 border-slate-800 z-20"></div>
                             
                             {/* Static Fan Blades (Side View) */}
                             <div className="absolute inset-0 flex flex-col justify-evenly py-1.5 opacity-60">
                                {[1,2,3,4,5,6,7,8,9].map(i => (
                                   <div key={i} className="h-0.5 w-full bg-slate-500 transform -skew-y-6"></div>
                                ))}
                             </div>

                             {/* Fan Hub Side View (Static) */}
                             <div className="w-1.5 h-12 bg-slate-800 rounded-full absolute left-0 z-20 shadow-lg"></div>
                             
                             {/* Logo on Hub Side */}
                             <div className="absolute left-0.5 w-6 h-1 bg-vlam-orange/50 z-30 blur-[1px]"></div>
                          </div>
                          
                          {/* Fan Clips */}
                          <div className="absolute top-4 -right-1 w-2 h-0.5 bg-slate-400 z-30"></div>
                          <div className="absolute bottom-4 -right-1 w-2 h-0.5 bg-slate-400 z-30"></div>
                     </div>
                     
                     {/* Heatpipes (Base Connection) */}
                     <div className="w-24 h-6 relative flex justify-center gap-2 mt-[-2px] z-10">
                         {[1,2,3,4].map(i => (
                            <div key={i} className="w-2 h-full bg-gradient-to-b from-slate-400 to-orange-400 rounded-b-sm opacity-90"></div>
                         ))}
                     </div>

                     {/* Base Contact Block */}
                     <div className="w-24 h-5 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-sm border border-slate-600 mt-[-4px] shadow-md z-10 flex items-center justify-center">
                        <div className="w-16 h-0.5 bg-orange-500/30"></div>
                     </div>
                  </div>

                  {/* RAM Sticks */}
                  <div className="absolute top-20 right-16 flex gap-1 z-20 transform translate-x-4">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-2 h-24 bg-slate-800 border border-slate-600 rounded-sm relative shadow-md">
                          <div className="absolute top-1 left-0 right-0 h-16 bg-gradient-to-b from-purple-500 to-transparent opacity-90 blur-[1px]"></div>
                       </div>
                     ))}
                  </div>

                  {/* M.2 Heatsink */}
                  <div className="absolute top-44 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 border border-slate-500 rounded z-10 flex items-center justify-center shadow-sm">
                     <span className="text-[8px] text-slate-300 font-mono tracking-widest">NVMe 4.0</span>
                  </div>

                  {/* Vertical Mount GPU */}
                  <div className="absolute bottom-12 left-6 right-6 h-32 bg-slate-800/95 rounded-xl border border-slate-600 shadow-2xl z-30 flex flex-col items-center justify-center overflow-hidden">
                     {/* Heatsink Fins Background */}
                     <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #000 2px, #000 4px)' }}></div>
                     
                     {/* RGB Strip Top/Bottom */}
                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 blur-[2px]"></div>
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 blur-[2px]"></div>

                     {/* 3 Visible Fans */}
                     <div className="flex justify-evenly w-full relative z-10 px-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-20 h-20 rounded-full border-2 border-slate-600 bg-slate-900 relative flex items-center justify-center shadow-lg group-hover:border-vlam-orange/50 transition-colors">
                             {/* Fan Blades */}
                             <div className="w-full h-full animate-spin-slow opacity-90">
                                 <div className="absolute inset-0 m-auto w-4 h-full bg-slate-700 rounded-full"></div>
                                 <div className="absolute inset-0 m-auto w-full h-4 bg-slate-700 rounded-full"></div>
                                 <div className="absolute inset-0 m-auto w-full h-4 bg-slate-700 rounded-full rotate-45"></div>
                                 <div className="absolute inset-0 m-auto w-full h-4 bg-slate-700 rounded-full rotate-45"></div>
                                 <div className="absolute inset-0 m-auto w-full h-4 bg-slate-700 rounded-full -rotate-45"></div>
                             </div>
                             {/* Center Hub */}
                             <div className="absolute w-6 h-6 bg-slate-800 rounded-full border border-slate-500 z-20 flex items-center justify-center">
                               <div className="w-2 h-2 rounded-full bg-slate-400/50"></div>
                             </div>
                          </div>
                        ))}
                     </div>
                     
                     <span className="absolute bottom-1 right-3 text-[9px] text-slate-400 font-black tracking-widest bg-slate-900/80 px-2 rounded border border-slate-700">RTX 4090 OC</span>
                  </div>

               </div>

               {/* PSU Shroud */}
               <div className="h-20 w-full bg-slate-900 mt-4 rounded-lg border-t border-slate-700 flex items-center pl-6 shadow-2xl z-40 relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent"></div>
                  <span className="text-xl font-black text-slate-800 tracking-[0.2em] relative z-10">VLAMNET</span>
               </div>
            </div>
          </div>


          {/* =======================
              4. LEFT FACE (Solid Cable Side)
              Depth x Height (460 x 500)
              RotateY -90deg
              TranslateZ = Width / 2 (140px)
             ======================= */}
          <div 
            className="absolute bg-slate-800 border-2 border-slate-700"
            style={{ 
              width: `${depth}px`, 
              height: `${height}px`,
              left: `${(width - depth) / 2}px`,
              transform: `rotateY(-90deg) translateZ(${width / 2}px)` 
            }}
          >
            {/* Simple embossed detail for the side panel */}
            <div className="absolute inset-8 border border-slate-700/50 bg-slate-800/50 shadow-inner"></div>
          </div>


          {/* =======================
              5. TOP FACE
              Width x Depth (280 x 460)
              RotateX 90deg
              TranslateZ = Height / 2 (250px)
             ======================= */}
          <div 
            className="absolute bg-slate-900 border-2 border-slate-700 flex items-center justify-center"
            style={{ 
              width: `${width}px`, 
              height: `${depth}px`,
              top: `${(height - depth) / 2}px`,
              transform: `rotateX(90deg) translateZ(${height / 2}px)` 
            }}
          >
             {/* Magnetic Dust Filter */}
             <div className="w-[85%] h-[85%] bg-slate-950 border border-slate-800 rounded relative overflow-hidden">
               <div className="absolute inset-0 opacity-30" 
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, #334155 0, #334155 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}>
               </div>
             </div>
          </div>


          {/* =======================
              6. BOTTOM FACE (Feet)
              Width x Depth (280 x 460)
              RotateX -90deg
              TranslateZ = Height / 2 (250px)
             ======================= */}
          <div 
            className="absolute bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            style={{ 
              width: `${width}px`, 
              height: `${depth}px`,
              top: `${(height - depth) / 2}px`,
              transform: `rotateX(-90deg) translateZ(${height / 2}px)` 
            }}
          >
               {/* Case Feet */}
               <div className="absolute top-6 left-6 w-12 h-12 bg-slate-800 rounded-full shadow-lg border border-slate-700"></div>
               <div className="absolute top-6 right-6 w-12 h-12 bg-slate-800 rounded-full shadow-lg border border-slate-700"></div>
               <div className="absolute bottom-6 left-6 w-12 h-12 bg-slate-800 rounded-full shadow-lg border border-slate-700"></div>
               <div className="absolute bottom-6 right-6 w-12 h-12 bg-slate-800 rounded-full shadow-lg border border-slate-700"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- COMPONENTS ---

const VlamNetLogo: React.FC<{ className?: string; textClassName?: string }> = ({ className = "", textClassName = "" }) => {
  return (
    <div className={`flex items-center gap-3 font-bold text-2xl tracking-tight ${className}`}>
      <div className="relative group">
        <div className="absolute inset-0 blur-lg bg-vlam-orange/20 rounded-full opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <img
            src={logo}
            alt="VlamNet Logo"
            className="w-12 h-12 object-contain relative z-10 drop-shadow-md transition-transform group-hover:scale-110 duration-300"
          />
      </div>
      <span className={textClassName || "text-slate-800 dark:text-white"}>
        Vlam<span className="text-vlam-orange">Net</span>
      </span>
    </div>
  );
};

const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; 
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, variant = 'primary', onClick, className = '', type = 'button' }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white shadow-lg shadow-orange-500/30 border border-orange-400/20 transform hover:scale-105 active:scale-95",
    secondary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 transform hover:scale-105 active:scale-95",
    outline: "border-2 border-slate-300 dark:border-slate-600 hover:border-vlam-orange text-slate-700 dark:text-slate-200 hover:text-vlam-orange dark:hover:text-vlam-orange bg-transparent transform hover:scale-105 active:scale-95",
    ghost: "text-slate-600 dark:text-slate-400 hover:text-vlam-orange dark:hover:text-vlam-orange hover:bg-slate-100 dark:hover:bg-slate-800"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-20 bg-vlam-orange rounded mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white/80 dark:bg-slate-700/40 backdrop-blur-md border border-slate-200 dark:border-slate-600 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-vlam-orange/50 dark:hover:border-vlam-orange/50 ${className}`}>
    {children}
  </div>
);

// --- SECTIONS / PAGES ---

const HeroSection: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-32 px-4 md:px-6">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-t from-orange-500/10 to-transparent blur-3xl rounded-full -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
        <div className="space-y-6 md:space-y-8 animate-fade-in z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Custom Gaming & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Workstation PCs
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-200 max-w-lg leading-relaxed">
            Wij bouwen jouw droom PC op maat. Geen standaard oplossingen, maar pure performance geoptimaliseerd voor jouw gebruik, zodat jij kan 
            <span className="font-bold text-vlam-orange ml-1">Vlammen!!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button onClick={() => onNavigate(Page.BLOG)} className="w-full sm:w-auto">
              Zie builds <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" onClick={() => onNavigate(Page.CONTACT)} className="w-full sm:w-auto">
              Vraag een offerte aan
            </Button>
          </div>
        </div>
        
        {/* CSS 3D Model Section - Hidden on Mobile/Tablet */}
        <div className="hidden lg:flex h-[450px] sm:h-[550px] lg:h-[600px] w-full items-center justify-center relative z-0 mt-8 lg:mt-0 perspective-1000">
           {/* Wrapper to scale the fixed-size 3D model */}
           <div className="transform scale-[0.6] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 transition-transform duration-500 origin-center will-change-transform">
             <GamingPCGraphic />
           </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  const features: ServiceFeature[] = [
    {
      title: "Maatwerk & Persoonlijk advies",
      description: "Geen standaardoplossingen: wij luisteren naar jouw wensen en stellen een systeem samen die perfect bij jou en je budget past.",
      icon: Cpu
    },
    {
      title: "Professionele assemblage",
      description: "Elk systeem wordt gebouwd met zorg voor detail: stille koeling en strakke kabelmanagement voor een betrouwbare en mooie PC.",
      icon: Wrench
    },
    {
      title: "Uitgebreide service & garantie",
      description: "Wij staan klaar voor support, upgrades en onderhoud. Wil je ooit upgraden of onderhoud plegen dan staan wij voor jou klaar.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-100/50 dark:bg-black/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <GlassCard key={idx} className="h-full group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage: React.FC = () => (
  <div className="pt-28 pb-16 px-4 md:px-6 container mx-auto animate-fade-in space-y-12">
    
    {/* Top Section: Intro + Image */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
         <SectionHeading title="Over VlamNet" subtitle="" /> 
         
         <div className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
           <p>
             Hallo! Ik ben Rik, de oprichter van VlamNet. Al jarenlang ben ik actief in de ICT-wereld en gespecialiseerd in het bouwen van zowel gaming- als workstation-pc’s. Van professionele audio-workstations tot ultieme high-end gaming-rigs: ik heb inmiddels meer systemen gebouwd dan ik kan tellen, zowel hobbymatig als professioneel.
           </p>
           <p>
             Met mijn achtergrond in ICT en mijn opleiding ICT Infrastructuur aan Fontys combineer ik technische kennis met praktijkervaring. Elke dag houd ik me bezig met de nieuwste ontwikkelingen binnen het ICT-landschap, zodat ik altijd het beste, meest actuele advies kan geven.
           </p>
           <p>
             Bij VlamNet draait alles om kwaliteit, betrouwbaarheid en oog voor detail. Ik zorg ervoor dat elke pc niet alleen krachtig en efficiënt is, maar ook strak is afgewerkt met perfecte koeling en kabelmanagement. Zo krijg jij een systeem dat volledig aansluit op jouw wensen, tot in de kleinste details.
           </p>
         </div>
      </div>
      
      {/* Image */}
      <div className="relative">
         <img 
           src="https://gravatar.com/avatar/4cdb8ab7f3c106d676a32457a483925b5d1b892396045a8cace4a6304968ee9b?s=1024" 
           alt="VlamNet Setup" 
           className="rounded-2xl shadow-2xl border-4 border-white dark:border-slate-600 w-full object-cover h-[300px] md:h-[400px]" 
         />
      </div>
    </div>

    {/* Middle Section: Expertise & Aanpak */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Expertise */}
      <GlassCard className="h-full">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Mijn expertise</h3>
        <ul className="space-y-3">
          {[
            "Assemblage van hoogwaardige gaming en workstation-pc’s",
            "Optimalisatie van koeling",
            "Advies op maat voor componentkeuze",
            "Nette kabelmanagement",
            "Upgraden en onderhouden van bestaande systemen"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
               <span className="w-1.5 h-1.5 rounded-full bg-vlam-orange mt-2 shrink-0"></span>
               <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassCard>

      {/* Aanpak */}
      <GlassCard className="h-full">
         <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Onze aanpak</h3>
         <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Bij VlamNet geloven we dat elke gebruiker uniek is. Daarom starten we met een uitgebreid 
            gesprek over jouw wensen, toepassingen en budget. Op basis daarvan doen we concrete 
            aanbevelingen en stellen we een plan op voor jouw nieuwe PC. Tijdens de assemblage 
            houden we je op de hoogte en na levering ontvang je duidelijke documentatie en nazorg.
         </p>
      </GlassCard>
    </div>

    {/* Bottom Section: Waarden */}
    <GlassCard>
       <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Onze waarden</h3>
       <div className="space-y-4">
          {[
             { label: "Kwaliteit", text: "We selecteren componenten op betrouwbaarheid en prestaties." },
             { label: "Transparantie", text: "Geen verborgen kosten of verrassingen; je weet altijd wat je krijgt." },
             { label: "Duurzaamheid", text: "We adviseren over energiezuinige oplossingen en hergebruik van onderdelen waar mogelijk." },
             { label: "Passie", text: "We doen dit werk omdat we zelf liefhebbers zijn; dat zie je terug in elk detail." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 text-slate-600 dark:text-slate-300">
               <span className="font-bold text-slate-900 dark:text-white shrink-0">• {item.label}:</span>
               <span>{item.text}</span>
            </div>
          ))}
       </div>
    </GlassCard>

  </div>
);

const BlogPostDetail: React.FC<{ post: BlogPost; onBack: () => void }> = ({ post, onBack }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = [post.imageUrl, ...(post.galleryImages || [])];
  
  // Use fullDescription if available, otherwise fallback to description
  const content = post.fullDescription || post.description;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev! + 1) % allImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev! - 1 + allImages.length) % allImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, allImages.length]);

  return (
    <>
      <div className="pt-28 pb-16 px-4 md:px-6 container mx-auto animate-fade-in">
        <Button variant="ghost" onClick={onBack} className="mb-8 pl-0">
          <ArrowLeft className="w-5 h-5 mr-1" /> Terug naar overzicht
        </Button>

        <div className="space-y-8">
           {/* Hero Image */}
           <div 
             className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 relative group cursor-pointer"
             onClick={() => setLightboxIndex(0)}
           >
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Overlay hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                  <Maximize2 className="text-white w-12 h-12 drop-shadow-lg" />
              </div>
              <div className="absolute top-6 left-6 flex gap-2 pointer-events-none">
                 <div className="bg-vlam-orange text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-2">
                   <Tag className="w-3 h-3" /> {post.category}
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                   <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{post.date}</span>
                   </div>
                   <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {post.title}
                   </h1>
                </div>

                <div className="prose dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-300">
                   {content.split('\n').map((paragraph, idx) => (
                      <p key={idx} className="whitespace-pre-wrap mb-4">{paragraph}</p>
                   ))}
                </div>

                {/* Gallery Section */}
                {post.galleryImages && post.galleryImages.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                      <Camera className="w-6 h-6 text-vlam-orange" /> Galerij
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {/* Gallery Thumbnails */}
                      {post.galleryImages.map((img, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => setLightboxIndex(idx + 1)} 
                          className="cursor-pointer rounded-xl overflow-hidden h-24 border-2 border-transparent hover:border-vlam-orange transition-all duration-300 relative group"
                        >
                          <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={`Gallery ${idx + 1}`} />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <Maximize2 className="text-white w-6 h-6" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-slate-500 mt-2 italic">Klik op een afbeelding voor volledig scherm.</p>
                  </div>
                )}
              </div>

              {/* Sidebar Specs */}
              <div className="lg:col-span-1">
                 <GlassCard className="sticky top-28">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-vlam-orange" /> Specificaties
                    </h3>
                    <div className="space-y-3">
                       {post.specs && post.specs.length > 0 ? (
                         post.specs.map((spec, i) => (
                           <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-slate-700 dark:text-slate-200 font-medium text-sm">{spec}</span>
                           </div>
                         ))
                       ) : (
                         <p className="text-slate-500 italic">Geen specificaties beschikbaar.</p>
                       )}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                       <p className="text-sm text-slate-500 mb-4 text-center">Wil je ook zo'n systeem?</p>
                       <Button className="w-full" onClick={() => window.location.href = `mailto:info@vlamnet.nl?subject=Interesse in build: ${post.title}`}>
                          Vraag offerte aan
                       </Button>
                    </div>
                 </GlassCard>
              </div>
           </div>
        </div>
      </div>
      
      {/* LIGHTBOX OVERLAY */}
      {lightboxIndex !== null && (
         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50">
               <X className="w-10 h-10" />
            </button>
            
            {/* Prev Button */}
            <button 
              className="absolute left-2 md:left-8 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all z-50"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <img 
               src={allImages[lightboxIndex]} 
               alt="Fullscreen" 
               className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-sm select-none"
               onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            />

            {/* Next Button */}
            <button 
              className="absolute right-2 md:right-8 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all z-50"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % allImages.length); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium z-50">
               {lightboxIndex + 1} / {allImages.length}
            </div>
         </div>
       )}
    </>
  );
};

const BlogPage: React.FC<{ posts: BlogPost[]; onPostClick: (post: BlogPost) => void }> = ({ posts, onPostClick }) => {
  return (
    <div className="pt-28 pb-16 px-4 md:px-6 container mx-auto animate-fade-in">
      <SectionHeading title="Recente Builds" subtitle="Een showcase van onze laatste projecten en kunstwerken." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post) => (
          <div 
            key={post.id} 
            onClick={() => onPostClick(post)}
            className="group bg-white dark:bg-slate-700/40 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-600 flex flex-col hover:shadow-2xl hover:border-vlam-orange/50 transition-all duration-300 cursor-pointer"
          >
            <div className="relative overflow-hidden h-56">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 bg-vlam-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                {post.category}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-vlam-orange transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-1 line-clamp-3">
                {post.description}
              </p>
              <div className="border-t border-slate-100 dark:border-slate-600 pt-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {post.specs.slice(0, 3).map((spec, i) => (
                    <span key={i} className="text-xs bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 px-2 py-1 rounded">
                      {spec}
                    </span>
                  ))}
                  {post.specs.length > 3 && (
                     <span className="text-xs bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 px-2 py-1 rounded">
                       +{post.specs.length - 3}
                     </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => (
  <div className="pt-28 pb-16 px-4 md:px-6 container mx-auto animate-fade-in">
    <SectionHeading title="Contact" subtitle="Klaar om te Vlammen? Neem contact op!" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <GlassCard className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Stuur een bericht</h3>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Naam</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:border-vlam-orange focus:ring-1 focus:ring-vlam-orange outline-none transition-all" placeholder="Jouw naam" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:border-vlam-orange focus:ring-1 focus:ring-vlam-orange outline-none transition-all" placeholder="jouw@email.nl" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Bericht</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:border-vlam-orange focus:ring-1 focus:ring-vlam-orange outline-none transition-all" placeholder="Vertel ons over je droom PC..."></textarea>
          </div>
          <Button className="w-full">Verstuur Bericht</Button>
        </form>
      </GlassCard>

      <div className="space-y-8">
        <GlassCard>
           <div className="flex items-start gap-4">
             <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
               <Mail className="w-6 h-6 text-vlam-orange" />
             </div>
             <div>
               <h4 className="font-bold text-lg text-slate-900 dark:text-white">Email</h4>
               <p className="text-slate-600 dark:text-slate-300 mt-1">info@vlamnet.nl</p>
               <p className="text-sm text-slate-500 mt-1">Reactie binnen 24 uur</p>
             </div>
           </div>
        </GlassCard>

        <GlassCard>
           <div className="flex items-start gap-4">
             <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
               <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
             </div>
             <div>
               <h4 className="font-bold text-lg text-slate-900 dark:text-white">Locatie</h4>
               <p className="text-slate-600 dark:text-slate-300 mt-1">Rotterdam, Nederland</p>
               <p className="text-sm text-slate-500 mt-1">Op afspraak te bezoeken</p>
             </div>
           </div>
        </GlassCard>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center shadow-lg">
          <Monitor className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-xl font-bold mb-2">PC Assemblage Service</h3>
          <p className="opacity-90">Heb je zelf onderdelen gekocht maar durf je het niet in elkaar te zetten? Wij helpen je graag!</p>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN APP ---

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'dark';
  });
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Blog Post State Management
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isStrapiOffline, setIsStrapiOffline] = useState(false);

  // Fetch posts from Strapi
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // PRODUCTION URL
        const STRAPI_URL = 'https://admin.vlamnet.nl';
        
        // Use a timeout Promise to prevent hanging indefinitely
        const timeout = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), 5000)
        );

        // Fetch posts with all relations populated (needed for images and gallery)
        const fetchPromise = fetch(`${STRAPI_URL}/api/blogs?populate=*`);
        
        // Race the fetch against the timeout
        const res: any = await Promise.race([fetchPromise, timeout]);
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const json = await res.json();
        
        // Debugging: Log the raw response so the user can inspect it in Console
        console.log("Strapi Raw Response:", json);
        
        if (json.data && Array.isArray(json.data)) {
          const strapiPosts: BlogPost[] = json.data.map((item: any) => {
            // Robust check: item.attributes (v4) or fallback to item (v5/flattened)
            const attrs = item.attributes || item;
            
            // Helper to extract image URL from various Strapi shapes
            const extractImageUrl = (imageData: any) => {
              if (!imageData) return null;
              
              // Direct object with data property (v4 wrapper)
              const data = imageData.data || imageData;
              if (!data) return null;
              
              const attributes = data.attributes || data;
              if (attributes && attributes.url) {
                   return `${STRAPI_URL}${attributes.url}`;
              }
              if (data.url) {
                  return `${STRAPI_URL}${data.url}`;
              }
              return null;
            };

            // 1. Main Featured Image (Field: 'image')
            let imgUrl = extractImageUrl(attrs.image);
            if (!imgUrl && typeof attrs.imageUrl === 'string') {
                imgUrl = attrs.imageUrl; // Fallback
            }
            if (!imgUrl) imgUrl = "https://picsum.photos/seed/error/800/600";

            // 2. Gallery Images (Field: 'gallery')
            const gallery: string[] = [];
            const galleryData = attrs.gallery?.data || attrs.gallery;
            
            if (Array.isArray(galleryData)) {
                 galleryData.forEach((img: any) => {
                    // Reuse helper for consistency
                    // Construct a mock object structure if needed for helper or extract directly
                    const urlPart = img.attributes?.url || img.url;
                    if (urlPart) {
                        gallery.push(`${STRAPI_URL}${urlPart}`);
                    }
                 });
            }

            // 3. Descriptions 
            // - short_details -> description (for cards)
            // - details -> fullDescription (for page)

            // Function to parse Strapi Blocks (Rich Text)
            const parseRichText = (content: any) => {
                if (Array.isArray(content)) {
                    return content.map((block: any) => {
                        if (block.children && Array.isArray(block.children)) {
                            return block.children.map((child: any) => child.text).join('');
                        }
                        return '';
                    }).join('\n\n');
                }
                return typeof content === 'string' ? content : '';
            };

            const details = parseRichText(attrs.details);
            const shortDetails = attrs.short_details || "";

            let finalFullDescription = details;
            // Fallback if full details are missing but short details exist
            if (!finalFullDescription && shortDetails) finalFullDescription = shortDetails;
            if (!finalFullDescription) finalFullDescription = "Geen details beschikbaar.";

            let finalShortDescription = shortDetails;
            // Fallback if short details are missing but full details exist (truncate)
            if (!finalShortDescription && details) finalShortDescription = details.substring(0, 150) + "...";
            if (!finalShortDescription) finalShortDescription = "Geen beschrijving.";

            // 4. Specs Parsing (Field: 'specs' - JSON)
            let finalSpecs: string[] = [];
            const rawSpecs = attrs.specs;
            
            if (Array.isArray(rawSpecs)) {
                // If it is a JSON array of strings: ["RTX 4090", "64GB RAM"]
                finalSpecs = rawSpecs.map((s: any) => {
                    if (typeof s === 'object' && s !== null) {
                        return Object.values(s).join(' ');
                    }
                    return String(s);
                });
            } else if (typeof rawSpecs === 'string') {
                // Fallback if user entered comma separated string in a text field
                finalSpecs = rawSpecs.split(/,|\n/).map(s => s.trim()).filter(Boolean);
            } else if (typeof rawSpecs === 'object' && rawSpecs !== null) {
                // Handle Key-Value Object: { "cpu": "...", "gpu": "..." }
                // We convert this to an array of strings: "CPU: ..."
                finalSpecs = Object.entries(rawSpecs).map(([key, value]) => {
                     // Capitalize key for display (cpu -> CPU)
                     const label = key.toUpperCase(); 
                     return `${label}: ${value}`;
                });
            }

            // 5. Title (Field: 'title')
            const finalTitle = attrs.title || "Untitled Build";
            
            // 6. Category (Field: 'type' [enum: Gaming, Workstation] or 'category')
            let categoryField = attrs.type || attrs.category || "Gaming";
            // Ensure first letter is capitalized to match enum style/display
            const finalCategory = categoryField.charAt(0).toUpperCase() + categoryField.slice(1);

            // 7. Date (Field: 'date')
            const dateField = attrs.date || attrs.publishedAt;
            const finalDate = dateField ? new Date(dateField).toLocaleDateString("nl-NL") : new Date().toLocaleDateString("nl-NL");


            return {
              id: item.id || item.documentId || Math.random(),
              title: finalTitle,
              category: finalCategory,
              description: finalShortDescription, // Short version for cards
              fullDescription: finalFullDescription, // Long version for detail page
              imageUrl: imgUrl,
              galleryImages: gallery,
              specs: finalSpecs,
              date: finalDate
            };
          });
          
          if (strapiPosts.length > 0) {
             setPosts(strapiPosts);
             setIsStrapiOffline(false);
          }
        }
      } catch (err) {
        // Silent failure - Fallback to INITIAL_POSTS
        console.warn("Strapi connection failed or timed out. Using demo data.");
        console.warn("Details:", err);
        setIsStrapiOffline(true);
        // We do NOT setPosts here, so it stays as INITIAL_POSTS
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { label: 'Home', page: Page.HOME },
    { label: 'Blog', page: Page.BLOG },
    { label: 'Over', page: Page.ABOUT },
    { label: 'Contact', page: Page.CONTACT },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setSelectedPost(null); // Clear selected post when navigating via menu
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage(Page.BLOG);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-vlam-orange/30 text-slate-900 dark:text-slate-100">
      
      {/* BACKGROUND LAYERS (z-0) */}
      <div className="fixed inset-0 z-0 transition-opacity duration-500 bg-slate-50 dark:hidden"></div>
      {/* 
         Moving Gradient Background
         Colors: Dark Blue (#1e3a8a) <-> Dark Purple (#581c87) <-> Dark Blue (#1e3a8a)
      */}
      <div 
        className="fixed inset-0 z-0 hidden dark:block bg-gradient-to-br from-[#1e3a8a] via-[#581c87] to-[#1e3a8a] animate-gradient"
        style={{ backgroundSize: '400% 400%' }}
      ></div>
      
      {/* MAIN CONTENT WRAPPER (z-10) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* FLOATING NAVBAR */}
        <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
          <div className="bg-white/80 dark:bg-black/20 backdrop-blur-xl border border-slate-200 dark:border-white/20 shadow-2xl rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300">
            
            {/* Logo */}
            <button onClick={() => handleNavClick(Page.HOME)} className="outline-none">
              <VlamNetLogo textClassName="text-slate-900 dark:text-white text-lg md:text-xl" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-4 lg:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentPage === link.page && !selectedPost
                      ? 'bg-slate-900 text-white dark:bg-white/10 dark:text-white shadow-inner'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => handleNavClick(Page.CONTACT)}
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg shadow-orange-900/20 transition-all hover:scale-105 active:scale-95"
              >
                Offerte
              </button>
              
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-orange-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-slate-900 dark:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full mt-2 p-4 bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col gap-2 md:hidden animate-fade-in text-slate-900 dark:text-white">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className={`p-3 rounded-xl text-left font-medium transition-colors ${
                    currentPage === link.page
                      ? 'bg-vlam-orange/20 text-vlam-orange'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-slate-200 dark:bg-white/10 my-2"></div>
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-3 p-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>{theme === 'dark' ? 'Lichte modus' : 'Donkere modus'}</span>
              </button>
              <Button onClick={() => handleNavClick(Page.CONTACT)} className="w-full mt-2">
                Offerte aanvragen
              </Button>
            </div>
          )}
        </nav>

        {/* STRAPI OFFLINE WARNING BADGE */}
        {isStrapiOffline && (
          <div className="fixed bottom-4 left-4 z-50 bg-red-900/80 text-white px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-2 backdrop-blur-md border border-red-500/50 shadow-lg">
            <WifiOff className="w-3 h-3" />
            <span>Strapi Offline: Demo Mode</span>
          </div>
        )}

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          {currentPage === Page.HOME && (
            <>
              <HeroSection onNavigate={handleNavClick} />
              <FeaturesSection />
              <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="flex justify-between items-end mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Werk</h2>
                  <button onClick={() => handleNavClick(Page.BLOG)} className="text-vlam-orange font-semibold hover:underline flex items-center gap-1">
                    Alles bekijken <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {posts.slice(0, 3).map(post => (
                    <div key={post.id} className="relative group overflow-hidden rounded-xl aspect-video cursor-pointer shadow-lg hover:shadow-2xl transition-all" onClick={() => handlePostClick(post)}>
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                          <div>
                            <span className="text-xs text-vlam-orange font-bold uppercase tracking-wider">{post.category}</span>
                            <h4 className="text-white font-bold text-lg mt-1 group-hover:text-vlam-orange transition-colors">{post.title}</h4>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {currentPage === Page.ABOUT && <AboutPage />}
          {currentPage === Page.BLOG && (
            selectedPost ? (
              <BlogPostDetail post={selectedPost} onBack={handleBackToBlog} />
            ) : (
              <BlogPage posts={posts} onPostClick={handlePostClick} />
            )
          )}
          {currentPage === Page.CONTACT && <ContactPage />}
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <VlamNetLogo textClassName="text-white text-2xl" />
                <p className="mt-4 text-slate-500 max-w-sm">
                  Custom PC's gebouwd met passie, vakmanschap en oog voor detail. Klaar om jouw setup naar een hoger niveau te tillen.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Navigatie</h4>
                <ul className="space-y-2">
                  {navLinks.map(link => (
                    <li key={link.label}>
                      <button onClick={() => handleNavClick(link.page)} className="hover:text-vlam-orange transition-colors">
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@vlamnet.nl</li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Eindhoven, NL</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
              <p>&copy; {new Date().getFullYear()} VlamNet. Alle rechten voorbehouden.</p>
              <p className="flex items-center gap-2 mt-4 md:mt-0">
                Gemaakt met <span className="text-red-500">♥</span> voor hardware
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
