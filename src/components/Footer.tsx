import React from 'react';
import { Phone, MapPin, Mail, ShieldAlert, Sparkles } from 'lucide-react';

export default function Footer() {
return (
<footer className="bg-primary text-white border-t border-white/5 pt-16 pb-8 px-margin-mobile md:px-margin-desktop">
<div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12 font-sans mb-12">
{/* Left Column Brand info */}
<div className="space-y-4">
<div className="flex items-center gap-3">
{/* White-contrast version of high fidelity SVG logo */}
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 shrink-0">
<defs>
<linearGradient id="footerLogoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#3AC3E6" />
<stop offset="100%" stopColor="#2DD4BF" />
</linearGradient>
<linearGradient id="footerWaveSoft" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#FFFFFF" />
<stop offset="100%" stopColor="#A5F3FC" />
</linearGradient>
</defs>
<path d="M 45 42 C 55 42, 65 44, 75 40 C 72 48, 62 55, 45 54 C 40 52, 38 48, 45 42 Z" fill="url(#footerWaveSoft)" opacity="0.3" />
<path d="M 33 46 C 30 38, 38 24, 52 24 C 57 24, 60 27, 63 31 C 66 27, 69 24, 74 24 C 88 24, 96 38, 93 46 C 90 55, 87 64, 84 72 C 81 80, 78 86, 75 86 C 73 86, 72 82, 70 78 C 67 72, 63 68, 63 70 C 63 72, 59 72, 56 78 C 54 82, 53 86, 51 86 C 48 86, 45 80, 42 72 C 39 64, 36 55, 33 46 Z" stroke="url(#footerLogoCyan)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
<path d="M 26 55 C 34 40, 48 58, 65 58 C 76 58, 86 52, 92 42" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
<circle cx="92" cy="42" r="3" fill="#3AC3E6" />
<path d="M 85 22 L 87 25 L 90 25 L 87 27 L 88 30 L 85 28 L 82 30 L 83 27 L 80 25 L 83 25 Z" fill="#3AC3E6" />
</svg>
<div>
<div className="flex items-center gap-1.5">
<span className="font-sans font-extrabold text-xl tracking-tight text-[#3AC3E6]">neu</span>
<span className="font-sans font-extrabold text-xl tracking-tight text-white">dental</span>
</div>
<p className="text-[9px] text-[#A5F3FC] uppercase tracking-widest font-bold leading-none mt-0.5">Modern Dental Care for Confident Smiles</p>
</div>
</div>
<p className="text-xs text-white/70 leading-relaxed pt-2">
Providing comprehensive dental treatments including Painless RCT, Invisalign clear alignments,
and biocompatible implant operations with advanced patient-first technology.
</p>
<div className="pt-2 text-xs text-mint/95 space-y-1">
<p className="flex items-center gap-1.5 font-bold">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
Class-B Sterilization Standard
</p>
<p className="flex items-center gap-1.5 font-bold">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
TN State Dental Council Registered
</p>
</div>
</div>
{/* Column 2 Services short links */}
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-[#E0F2F1] mb-6">Our Services</h4>
<ul className="space-y-3 text-xs text-white/70 font-medium">
<li><a href="#services" className="hover:text-[#E0F2F1] transition-colors">Painless Root Canal (RCT)</a></li>
<li><a href="#services" className="hover:text-[#E0F2F1] transition-colors">Invisalign Clear Aligners</a></li>
<li><a href="#services" className="hover:text-[#E0F2F1] transition-colors">Biocompatible Dental Implants</a></li>
<li><a href="#services" className="hover:text-[#E0F2F1] transition-colors">Aerosol Dental Scaling</a></li>
<li><a href="#services" className="hover:text-[#E0F2F1] transition-colors">Composite Teeth Fillings</a></li>
<li><a href="#services" className="hover:text-[#E0F2F1] transition-colors">Wisdom Tooth Extractions</a></li>
</ul>
</div>
{/* Column 3 Quick Links */}
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-[#E0F2F1] mb-6">Patient Navigation</h4>
<ul className="space-y-3 text-xs text-white/70 font-medium">
<li><a href="#about" className="hover:text-[#E0F2F1] transition-colors">Our Story</a></li>
<li><a href="#services" className="hover:text-[#E0F2F1] transition-colors">Treatments Catalog</a></li>
<li><a href="#location" className="hover:text-[#E0F2F1] transition-colors">Clinical Session Location</a></li>
</ul>
</div>
{/* Column 4 Direct support contact */}
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-[#E0F2F1] mb-6">Connect &amp; Support</h4>
<ul className="space-y-4 text-xs text-white/80 font-medium">
<li className="flex items-start gap-2.5">
<Phone className="w-4.5 h-4.5 text-mint shrink-0 mt-0.5" />
<div>
<span className="block text-[10px] text-white/50 text-bold uppercase">Call Patient Care:</span>
<a href="tel:+919342367446" className="text-[#E0F2F1] font-bold text-sm tracking-wide">+91 93423 67446</a>
</div>
</li>
<li className="flex items-start gap-2.5">
<MapPin className="w-4.5 h-4.5 text-mint shrink-0 mt-0.5" />
<div>
<span className="block text-[10px] text-white/50 text-bold uppercase">Physical Address:</span>
<span className="leading-snug select-all text-white/80 block mt-0.5">
Door No 13, 1st Main Road, Kodungaiyur East, Vasuki Nagar, Chennai - 600118
</span>
</div>
</li>
</ul>
</div>
</div>
{/* Sub copyright row */}
<div className="max-w-[1280px] mx-auto w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
<p className="font-sans font-medium">
{new Date().getFullYear()} neudental premium clinic. All rights reserved.
</p>
<div className="flex gap-6 font-semibold select-none">
<a href="#booking-section" className="hover:text-[#E0F2F1] transition-colors">Book Priority Slot</a>
<span className="text-white/10">|</span>
<a href="#location" className="hover:text-[#E0F2F1] transition-colors">Clinical Timings</a>
<span className="text-white/10">|</span>
<span className="text-emerald-400 font-bold">100% Secure &amp; Sterilized</span>
</div>
</div>
</footer>
);
}
