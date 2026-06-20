import React, { useState } from 'react';
import { Phone, Menu, X, Shield, Clock, MapPin, ChevronDown } from 'lucide-react';
import { TREATMENTS } from '../data';

interface NavbarProps {
onOpenBooking: () => void;
onSelectTreatment: (treatmentId: string) => void;
onHomeClick?: () => void;
}

export default function Navbar({ onOpenBooking, onSelectTreatment, onHomeClick }: NavbarProps) {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const handleLogoClick = (e: React.MouseEvent) => {
e.preventDefault();
if (onHomeClick) onHomeClick();
window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
e.preventDefault();
if (onHomeClick) onHomeClick();
const id = href.slice(1);
setTimeout(() => {
const el = document.getElementById(id);
if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
}, 100);
};

const navItems = [
{ name: 'Our Story', href: '#about' },
{ name: 'Treatments', href: '#services' },
{ name: 'Contact & Timing', href: '#location' },
];

return (
<>
<div className="bg-primary text-white text-[12px] font-sans py-2 px-margin-mobile md:px-margin-desktop text-center flex flex-col sm:flex-row justify-center items-center gap-2 border-b border-white/10 select-none">
<span className="inline-flex items-center gap-1.5 font-medium">
<span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
<span className="text-emerald-400 font-bold">CLINIC UPDATE:</span>
Safe &amp; Premium Dental Care under Dr. Swetha
</span>
<span className="hidden sm:inline opacity-60">|</span>
<span className="opacity-90">Book same-day priority appointments instantly online</span>
</div>

<header className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-cool-gray/10 transition-all premium-shadow">
<div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto w-full">
<a href="#" onClick={handleLogoClick} className="flex items-center gap-3 select-none group">
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 shrink-0">
<defs>
<linearGradient id="logoCyan" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3AC3E6" /><stop offset="100%" stopColor="#0B98C2" /></linearGradient>
</defs>
<path d="M 45 42 C 55 42, 65 44, 75 40 C 72 48, 62 55, 45 54 C 40 52, 38 48, 45 42 Z" fill="#A5F3FC" opacity="0.85" />
<path d="M 33 46 C 30 38, 38 24, 52 24 C 57 24, 60 27, 63 31 C 66 27, 69 24, 74 24 C 88 24, 96 38, 93 46 C 90 55, 87 64, 84 72 C 81 80, 78 86, 75 86 C 73 86, 72 82, 70 78 C 67 72, 63 68, 63 70 C 63 72, 59 72, 56 78 C 54 82, 53 86, 51 86 C 48 86, 45 80, 42 72 C 39 64, 36 55, 33 46 Z" stroke="url(#logoCyan)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
<path d="M 26 55 C 34 40, 48 58, 65 58 C 76 58, 86 52, 92 42" stroke="#0B3B60" strokeWidth="4.5" strokeLinecap="round" fill="none" />
<circle cx="92" cy="42" r="3" fill="#3AC3E6" />
<path d="M 85 22 L 87 25 L 90 25 L 87 27 L 88 30 L 85 28 L 82 30 L 83 27 L 80 25 L 83 25 Z" fill="#3AC3E6" />
</svg>
<div>
<div className="flex items-center gap-1">
<span className="font-sans font-extrabold text-xl md:text-2xl text-[#3AC3E6] tracking-tight leading-none">neu</span>
<span className="font-sans font-extrabold text-xl md:text-2xl text-[#0B3B60] tracking-tight leading-none">dental</span>
</div>
<p className="text-[10px] text-cool-gray tracking-wide font-sans mt-0.5">Modern Dental Care for Confident Smiles</p>
</div>
</a>

<nav className="hidden lg:flex items-center gap-6 xl:gap-8">
{navItems.map((item) => {
if (item.name === 'Treatments') {
return (
<div key={item.name} className="relative group/dropdown">
<button className="flex items-center gap-1.5 text-on-surface-variant hover:text-secondary text-sm font-sans font-medium transition-all duration-200 cursor-pointer py-2">
<span>Treatments Offered</span>
<ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180" />
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 translate-y-2 group-hover/dropdown:visible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 transition-all duration-200 z-50">
<div className="w-[320px] bg-white border border-cool-gray/10 rounded-2xl shadow-xl p-3 grid grid-cols-1 gap-0.5 max-h-[480px] overflow-y-auto">
<p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cool-gray border-b border-cool-gray/5 mb-1.5">Services Catalog</p>
{TREATMENTS.map((treat) => (
<button key={treat.id} onClick={() => { onSelectTreatment(treat.id); }} className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-secondary/5 text-left text-[#1E293B] hover:text-secondary transition-all cursor-pointer group/item hover:translate-x-0.5">
<span className="text-secondary/80 group-hover/item:text-secondary shrink-0 mt-1"><span className="block w-1.5 h-1.5 rounded-full bg-secondary/30 group-hover/item:bg-secondary transition-all" /></span>
<div className="leading-tight"><span className="text-xs font-semibold block font-sans">{treat.name}</span><span className="text-[10px] text-cool-gray line-clamp-1 block leading-normal mt-0.5 font-sans font-normal">{treat.description}</span></div>
</button>
))}
</div>
</div>
</div>
);
}
return (<a key={item.name} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-on-surface-variant hover:text-secondary text-sm font-sans font-medium hover:scale-105 transition-all duration-200">{item.name}</a>);
})}
</nav>

<div className="hidden md:flex items-center gap-4">
<a href="tel:+919342367446" className="flex items-center gap-2 text-primary font-bold hover:text-secondary font-sans transition-colors" title="Click to dial Chennai Neudental support">
<div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center text-primary"><Phone className="w-4 h-4 text-secondary" /></div>
<div className="text-left leading-none"><span className="text-[10px] block opacity-60 uppercase font-bold tracking-wider">Quick Helpline</span><span className="text-sm font-bold font-sans">+91 93423 67446</span></div>
</a>
<button id="cta_nav_book_button" onClick={onOpenBooking} className="bg-primary text-white hover:bg-secondary border border-transparent shadow shadow-primary/10 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0 px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-widest font-bold transition-all duration-200">Book Slot</button>
</div>

<button className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg active:scale-95 transition-all" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
</div>

{mobileMenuOpen && (
<div className="lg:hidden bg-white border-t border-cool-gray/10 px-margin-mobile py-6 flex flex-col gap-5 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
<nav className="flex flex-col gap-3">
{navItems.map((item) => {
if (item.name === 'Treatments') {
return (
<div key={item.name} className="flex flex-col border-b border-cool-gray/5 pb-2">
<span className="text-primary text-sm font-sans font-bold uppercase tracking-wider py-1.5 select-none text-cool-gray">Treatments Offered</span>
<div className="grid grid-cols-2 gap-1.5 pl-2 pt-1">
{TREATMENTS.map((treat) => (
<button key={treat.id} onClick={() => { onSelectTreatment(treat.id); setMobileMenuOpen(false); }} className="text-stone-700 hover:text-secondary text-[11px] font-sans font-medium text-left py-2 hover:bg-secondary/5 px-2 rounded-lg transition-colors cursor-pointer block truncate">• {treat.name}</button>
))}
</div>
</div>
);
}
return (<a key={item.name} href={item.href} className="text-primary hover:text-secondary text-base font-sans font-semibold py-2 border-b border-cool-gray/5" onClick={(e) => { setMobileMenuOpen(false); handleLinkClick(e, item.href); }}>{item.name}</a>);
})}
</nav>
<div className="flex flex-col gap-4 pt-4 border-t border-cool-gray/10">
<a href="tel:+919342367446" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-xl bg-cool-gray/5 hover:bg-cool-gray/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"><Phone className="w-5 h-5" /></div>
<div><p className="text-xs text-cool-gray uppercase font-bold tracking-wider">Quick Mobile Call</p><p className="text-sm font-bold text-primary font-sans">+91 93423 67446</p></div>
</a>
<button onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-sans text-xs uppercase tracking-widest font-bold transition-all text-center">Book An Appointment</button>
</div>
</div>
)}
</header>
</>
);
}
