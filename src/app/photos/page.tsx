"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { PHOTO_ITEMS, PhotoItem } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { 
  Grid, 
  Columns, 
  BookOpen, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sliders, 
  MapPin, 
  Calendar, 
  Info, 
  Maximize2, 
  Camera
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type ViewMode = "contact" | "canvas" | "journal";
type FrameStyle = "film" | "polaroid" | "minimal";
type FilterStyle = "raw" | "mono" | "amber";

export default function PhotosPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("contact");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [frameStyle, setFrameStyle] = useState<FrameStyle>("film");
  const [filterStyle, setFilterStyle] = useState<FilterStyle>("raw");
  const [showExifDrawer, setShowExifDrawer] = useState<boolean>(true);

  const totalPhotos = PHOTO_ITEMS.length;
  const selectedPhoto = selectedIndex !== null ? PHOTO_ITEMS[selectedIndex] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, totalPhotos]);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? totalPhotos - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === totalPhotos - 1 ? 0 : (prev as number) + 1));
  };

  // Helper for filter classes
  const getFilterClass = (filter: FilterStyle) => {
    switch (filter) {
      case "mono":
        return "grayscale contrast-125 brightness-95";
      case "amber":
        return "sepia-[0.45] contrast-110 saturate-125 hue-rotate-[-10deg]";
      default:
        return "";
    }
  };

  return (
    <main className="relative bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background pb-32">
      <Navbar />

      {/* Header Section */}
      <section className="relative px-6 md:px-12 pt-36 pb-8 overflow-hidden border-b border-border">
        <div className="max-w-[1800px] mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-5xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
                Photos
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed pt-1">
                I take pictures as a hobby once in a while. Here i&apos;ll be documenting art the way I want to.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTROL & VIEW MODE BAR */}
      <div className="border-b border-border/80 px-6 md:px-12 py-4">
        <div className="max-w-[1800px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-muted/40 p-1 border border-border/80 rounded-none">
            <button
              onClick={() => setViewMode("contact")}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider transition-all rounded-none ${
                viewMode === "contact"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid size={14} />
              Sheet
            </button>
            <button
              onClick={() => setViewMode("canvas")}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider transition-all rounded-none ${
                viewMode === "canvas"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Columns size={14} />
              Canvas
            </button>
            <button
              onClick={() => setViewMode("journal")}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider transition-all rounded-none ${
                viewMode === "journal"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BookOpen size={14} />
              Roll
            </button>
          </div>
        </div>
      </div>

      {/* GALLERY MAIN DISPLAY */}
      <section className="px-6 md:px-12 py-12 max-w-[1800px] mx-auto">
        {/* MODE 1: CONTACT SHEET (Darkroom 35mm Filmstrip Layout) */}
        {viewMode === "contact" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Film Perforation Bar Header */}
            <div className="hidden md:flex justify-between items-center px-4 py-2 bg-neutral-900 border border-neutral-800 font-mono text-[9px] uppercase tracking-widest text-neutral-500 rounded-none">
              <div className="flex items-center gap-4">
                <span>35mm Film Strip</span>
                <span>•</span>
                <span>Frame Index 01 - 0{totalPhotos}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-neutral-950 border border-neutral-800 rounded-none" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {PHOTO_ITEMS.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layoutId={`card-${photo.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setSelectedIndex(index)}
                  className="group relative bg-neutral-950 border border-neutral-800 p-4 cursor-pointer hover:border-neutral-600 transition-all duration-300 shadow-xl rounded-none"
                >
                  {/* Film Header Metadata */}
                  <div className="flex items-center justify-between font-mono text-[9px] text-neutral-500 uppercase tracking-wider mb-2">
                    <span className="group-hover:text-amber-500 transition-colors font-bold">
                      EXP #0{index + 1}
                    </span>
                    <span className="opacity-60">{photo.exif?.camera}</span>
                  </div>

                  {/* Image Container with Darkroom Frame Border */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-neutral-800/80 rounded-none">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3 py-1.5 bg-neutral-900/90 text-white text-[10px] font-mono font-bold uppercase tracking-widest border border-white/20 backdrop-blur-md flex items-center gap-1.5 rounded-none">
                        <Maximize2 size={12} /> Inspect Frame
                      </span>
                    </div>
                  </div>

                  {/* Frame Footer Meta */}
                  <div className="mt-3 space-y-1">
                    <h3 className="text-base font-heading font-black tracking-tight text-neutral-100 group-hover:text-amber-400 transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-1">
                      {photo.caption}
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-1">
                      <span>{photo.location}</span>
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* MODE 2: SPATIAL CANVAS (Staggered Masonry Layout) */}
        {viewMode === "canvas" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="columns-1 md:columns-2 gap-8 space-y-8"
          >
            {PHOTO_ITEMS.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedIndex(index)}
                className="break-inside-avoid relative group cursor-pointer bg-background border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-none"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    width={1000}
                    height={800}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold mb-1">
                      {photo.exif?.camera}
                    </span>
                    <h3 className="text-3xl font-heading font-black uppercase tracking-tight">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-neutral-300 font-medium line-clamp-2 mt-1">
                      {photo.caption}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-white/20 pt-2">
                      <span>{photo.location}</span>
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* MODE 3: ROLL JOURNAL (Editorial Layout) */}
        {viewMode === "journal" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-32 max-w-5xl mx-auto"
          >
            {PHOTO_ITEMS.map((photo, index) => (
              <JournalParallaxCard
                key={photo.id}
                photo={photo}
                index={index}
                totalPhotos={totalPhotos}
                onImageClick={() => setSelectedIndex(index)}
              />
            ))}
          </motion.div>
        )}
      </section>

      {/* FULLY RESPONSIVE DARKROOM LIGHTBOX & INSPECTOR MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Responsive Top Bar */}
            <div className="p-4 md:p-6 md:px-12 border-b border-neutral-800/80 z-10 flex flex-col gap-4">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
                  <span className="px-2.5 py-0.5 bg-neutral-800 text-white font-bold rounded-none">
                    EXP 0{selectedIndex! + 1} / 0{totalPhotos}
                  </span>
                  <span className="text-neutral-200 font-bold">{selectedPhoto.title}</span>
                  <span className="hidden md:inline">• {selectedPhoto.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowExifDrawer(!showExifDrawer)}
                    className={`p-2 border transition-colors rounded-none ${
                      showExifDrawer ? "bg-neutral-800 border-neutral-700 text-white" : "border-neutral-800 text-neutral-400"
                    }`}
                    title="Toggle Info"
                  >
                    <Sliders size={16} />
                  </button>

                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="p-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors rounded-none"
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Responsive Editing Tools Row (Mobile & Desktop) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-800/60 font-mono text-[10px]">
                {/* Frame Style Switcher */}
                <div className="flex items-center gap-1 bg-neutral-900 p-1 border border-neutral-800 rounded-none">
                  <span className="text-neutral-500 px-2 uppercase font-bold text-[9px]">Frame:</span>
                  <button
                    onClick={() => setFrameStyle("film")}
                    className={`px-2.5 py-1 transition-colors rounded-none ${
                      frameStyle === "film" ? "bg-amber-500 text-black font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Film
                  </button>
                  <button
                    onClick={() => setFrameStyle("polaroid")}
                    className={`px-2.5 py-1 transition-colors rounded-none ${
                      frameStyle === "polaroid" ? "bg-amber-500 text-black font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Polaroid
                  </button>
                  <button
                    onClick={() => setFrameStyle("minimal")}
                    className={`px-2.5 py-1 transition-colors rounded-none ${
                      frameStyle === "minimal" ? "bg-amber-500 text-black font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Minimal
                  </button>
                </div>

                {/* Filter Style Switcher */}
                <div className="flex items-center gap-1 bg-neutral-900 p-1 border border-neutral-800 rounded-none">
                  <span className="text-neutral-500 px-2 uppercase font-bold text-[9px]">Filter:</span>
                  <button
                    onClick={() => setFilterStyle("raw")}
                    className={`px-2 py-1 transition-colors rounded-none ${
                      filterStyle === "raw" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    RAW
                  </button>
                  <button
                    onClick={() => setFilterStyle("mono")}
                    className={`px-2 py-1 transition-colors rounded-none ${
                      filterStyle === "mono" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    B&W
                  </button>
                  <button
                    onClick={() => setFilterStyle("amber")}
                    className={`px-2 py-1 transition-colors rounded-none ${
                      filterStyle === "amber" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Amber
                  </button>
                </div>
              </div>
            </div>

            {/* Lightbox Center Viewport Stage */}
            <div className="relative flex-1 flex items-center justify-center p-4 md:p-12 min-h-[350px]">
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-8 p-3 bg-neutral-900/90 border border-neutral-800 text-white hover:bg-neutral-800 transition-all z-20 rounded-none"
                aria-label="Previous Exposure"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-8 p-3 bg-neutral-900/90 border border-neutral-800 text-white hover:bg-neutral-800 transition-all z-20 rounded-none"
                aria-label="Next Exposure"
              >
                <ChevronRight size={20} />
              </button>

              {/* Main Frame Stage */}
              <motion.div
                key={selectedPhoto.id}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`relative max-w-5xl max-h-[65vh] w-full h-full flex items-center justify-center rounded-none ${
                  frameStyle === "polaroid"
                    ? "bg-neutral-100 p-4 md:p-8 pb-16 md:pb-24 shadow-2xl"
                    : frameStyle === "film"
                    ? "bg-neutral-950 p-3 md:p-6 border-8 border-neutral-900 shadow-2xl"
                    : ""
                }`}
              >
                <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-none ${getFilterClass(filterStyle)}`}>
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Polaroid Bottom Handwritten Caption */}
                {frameStyle === "polaroid" && (
                  <div className="absolute bottom-4 left-6 right-6 font-mono text-neutral-900 flex justify-between items-center text-xs">
                    <span className="font-bold text-sm tracking-tight">{selectedPhoto.title}</span>
                    <span>{selectedPhoto.location} — {selectedPhoto.date}</span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Lightbox Bottom EXIF Drawer */}
            <AnimatePresence>
              {showExifDrawer && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  className="bg-neutral-950/95 border-t border-neutral-800 p-4 md:px-12 backdrop-blur-md"
                >
                  <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 space-y-1">
                      <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tight">
                        {selectedPhoto.title}
                      </h3>
                      <p className="text-xs text-neutral-300 font-medium">
                        {selectedPhoto.caption}
                      </p>
                    </div>

                    <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4 font-mono text-xs text-neutral-400">
                      {selectedPhoto.exif?.camera && (
                        <div>
                          <span className="text-[9px] text-neutral-500 uppercase block">Camera</span>
                          <span className="text-white font-bold">{selectedPhoto.exif.camera}</span>
                        </div>
                      )}
                      {selectedPhoto.exif?.lens && (
                        <div>
                          <span className="text-[9px] text-neutral-500 uppercase block">Lens</span>
                          <span className="text-white font-bold">{selectedPhoto.exif.lens}</span>
                        </div>
                      )}
                      {selectedPhoto.exif?.aperture && (
                        <div>
                          <span className="text-[9px] text-neutral-500 uppercase block">Exposure</span>
                          <span className="text-white font-bold">{selectedPhoto.exif.aperture} @ {selectedPhoto.exif.shutterSpeed}</span>
                        </div>
                      )}
                      {selectedPhoto.exif?.iso && (
                        <div>
                          <span className="text-[9px] text-neutral-500 uppercase block">ISO</span>
                          <span className="text-white font-bold">{selectedPhoto.exif.iso}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-[9px] text-neutral-500 uppercase block">Location</span>
                        <span className="text-white font-bold">{selectedPhoto.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

{/* PARALLAX JOURNAL CARD COMPONENT */}
function JournalParallaxCard({
  photo,
  index,
  totalPhotos,
  onImageClick,
}: {
  photo: PhotoItem;
  index: number;
  totalPhotos: number;
  onImageClick: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div
      ref={containerRef}
      className="relative space-y-8 pb-20 border-b border-border/40 last:border-b-0"
    >
      {/* EXPOSURE HEADER */}
      <div className="border-y border-border/80 py-4 px-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-none">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 bg-amber-500 text-black text-[10px] font-mono font-bold uppercase tracking-widest rounded-none">
            0{index + 1} / 0{totalPhotos}
          </span>
          <h2 className="text-xl md:text-3xl font-heading font-black uppercase tracking-tight text-foreground">
            {photo.title}
          </h2>
        </div>

        <div className="text-xs font-mono text-muted-foreground flex items-center gap-4">
          <span className="flex items-center gap-1.5"><MapPin size={12} /> {photo.location}</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Calendar size={12} /> {photo.date}</span>
        </div>
      </div>

      {/* PARALLAX PHOTO CONTAINER */}
      <div
        onClick={onImageClick}
        className="relative group cursor-pointer aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-neutral-900 border border-border shadow-2xl mx-auto max-w-5xl rounded-none"
      >
        <motion.div style={{ y: imageY }} className="relative w-full h-[116%] -top-[8%]">
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-cover group-hover:scale-102 transition-transform duration-700"
          />
        </motion.div>

        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg border border-white/10 rounded-none">
          <Maximize2 size={12} /> Expand Photo
        </div>
      </div>

      {/* Field Notes & Technical Specs */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start px-4 md:px-0">
        <div className="md:col-span-8 space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
            <Info size={12} /> Note & Context
          </h4>
          <p className="text-base md:text-xl text-foreground/90 font-medium leading-relaxed italic">
            &quot;{photo.story || photo.caption}&quot;
          </p>
        </div>

        <div className="md:col-span-4 bg-muted/40 p-5 border border-border/60 space-y-3 font-mono text-xs shadow-inner rounded-none">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
            <Camera size={12} /> Camera Specs
          </h4>
          <div className="space-y-2 text-foreground/90">
            {photo.exif?.camera && (
              <div className="flex justify-between border-b border-border/40 pb-1.5">
                <span className="text-muted-foreground">Camera</span>
                <span className="font-bold">{photo.exif.camera}</span>
              </div>
            )}
            {photo.exif?.lens && (
              <div className="flex justify-between border-b border-border/40 pb-1.5">
                <span className="text-muted-foreground">Lens</span>
                <span className="font-bold">{photo.exif.lens}</span>
              </div>
            )}
            {photo.exif?.aperture && (
              <div className="flex justify-between border-b border-border/40 pb-1.5">
                <span className="text-muted-foreground">Aperture</span>
                <span className="font-bold">{photo.exif.aperture}</span>
              </div>
            )}
            {photo.exif?.shutterSpeed && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Exposure</span>
                <span className="font-bold">{photo.exif.shutterSpeed} @ ISO {photo.exif.iso}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
