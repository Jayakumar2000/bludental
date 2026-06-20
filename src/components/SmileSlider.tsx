import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowLeftRight, HelpCircle } from 'lucide-react';

export default function SmileSlider() {
  const [position, setPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-cool-gray/5">
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4">
          <span className="text-secondary font-sans text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" /> Smile Transformation Slider
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold leading-tight">
            See the Magic of <br />
            <span className="text-secondary italic font-light">Aesthetic Smile Design</span>
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            Drag the slider to compare original spaced teeth spacing with a finished, beautifully aligned smile 
            after our specialized Invisalign &amp; Veneers package. Perfect alignments improve both confidence and oral posture.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full pt-4 font-sans text-xs">
            <div className="p-4 rounded-xl bg-surface-alt border border-cool-gray/5 text-center">
              <span className="text-primary font-bold block mb-1">Invisalign Treatment</span>
              <span className="text-cool-gray">Average 12 Months</span>
            </div>
            <div className="p-4 rounded-xl bg-surface-alt border border-cool-gray/5 text-center">
              <span className="text-primary font-bold block mb-1">Aesthetic Veneers</span>
              <span className="text-cool-gray">Complete in 2 sittings</span>
            </div>
          </div>
        </div>

        {/* Right Slider Column */}
        <div className="lg:col-span-7 flex flex-col items-center gap-4">
          {/* Instructions */}
          <span className="font-sans text-xs text-cool-gray flex items-center gap-1.5 animate-pulse select-none">
            <ArrowLeftRight className="w-4 h-4" /> Drag or slide across the image to compare results
          </span>

          {/* Slider Container */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            className="relative w-full max-w-[580px] aspect-[16/10] rounded-3xl overflow-hidden premium-shadow select-none border-4 border-white cursor-ew-resize touch-none"
          >
            {/* Before Side (Crooked Alignment image - high quality realistic teeth photo or dental technology) */}
            <img
              alt="Before alignment neudental"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH8U7XLH4rKCwXgwLuZOgYnTIZzr3W77kp1L470-o4Se7FsasSYhzRtohnV-ZPGztqcsny7M1_k1Rao2Vl8ZFvVuNY62MoEPIR416PhzAz9kSLjjVfRZF0zSKx3FgPSg8ptYMpduBgT1R1TK7FGIw2ie3SeJvUk0edTokAJH5RUWBR2auI0qApQ8eN9dbZjAmWFxe_O6YOf-0imkXvBG42p8LS6nP_ZNrTnpGg3_Dfh9M-8GVGUdv7FnJnfnUrrN_yAALPZ3z_6FU"
              className="absolute top-0 left-0 w-full h-full object-cover grayscale opacity-85 select-none"
            />
            {/* Label Before */}
            <span className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded select-none">
              Before Restoration
            </span>

            {/* After Side (Slightly shifted and clipped flawless model smile) */}
            <div
              className="absolute top-0 right-0 h-full overflow-hidden select-none"
              style={{ left: `${position}%` }}
            >
              <img
                alt="After alignment neudental"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRYPY1N5BRxWSgVUk28Ik3gLagEwqfYpYc5NOMahJD5aP19oWQ_IMSkB40Hi6gF-LK7uen9y3jJnMVt1SeEkI0U1gkVyKeC3LSjdNGSuIuMQr220_R9bPBmLBFvr0BPpbB68pzzsHFnnBZ1vVDjccDiW2htNJ36K_lZ0J6OdCeaY1dBvynTTraGrfDLD6SnIaFYhQl3lI-RRaFKGKE9Mn7OPoSahY1n9merxKhYWxXpWUDFzz_FsCnbWlzCVUzyVhy-_UQ23twJmo"
                className="absolute top-0 right-0 max-w-none h-full object-cover select-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width }}
              />
              {/* Label After */}
              <span className="absolute bottom-4 right-4 bg-emerald-600/95 backdrop-blur text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded select-none">
                Flawless Alignment
              </span>
            </div>

            {/* Splitter Line handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white select-none pointer-events-none"
              style={{ left: `${position}%` }}
            >
              {/* Central handle handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center border-2 border-primary shadow-xl pointer-events-none select-none">
                <ArrowLeftRight className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
