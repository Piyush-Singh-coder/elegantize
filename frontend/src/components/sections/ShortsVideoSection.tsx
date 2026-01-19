import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { shortVideos } from "../../data/content";

interface VideoCardProps {
  id: number;
  videoUrl: string;
  thumbnail: string;
  title: string;
  variants: Variants;
}

const VideoCard = ({
  videoUrl,
  thumbnail,
  title,
  variants,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Facade Pattern: Only load video when user interacts
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoaded(true);
    // Timeout to allow video element to mount before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const togglePlay = () => {
    if (!isLoaded) return;
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      variants={variants}
      className="relative aspect-9/16 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-stone-900"
      role="region"
      aria-label={`Short video: ${title}`}
      onClick={!isLoaded ? handlePlayClick : undefined}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {!isLoaded ? (
        /* FACADE: Static Image to eliminate scroll lag */
        <div className="w-full h-full relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
              <Play size={32} fill="white" className="text-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-0 w-full text-center text-white/80 text-xs font-bold uppercase tracking-widest px-4">
            {title}
          </div>
        </div>
      ) : (
        /* ACTUAL VIDEO: Only rendered after click */
        <>
          <video
            ref={videoRef}
            src={videoUrl}
            loop
            muted={isMuted}
            className="w-full h-full object-cover"
            playsInline
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
          />
          {/* Controls Container - Only show controls when video is loaded */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-3 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all transform active:scale-95"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={18} fill="currentColor" />
              ) : (
                <Play size={18} fill="currentColor" className="ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all transform active:scale-95"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </>
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export const ShortsVideoSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const isScrollable = shortVideos.length > 4;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 bg-texture-floral overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-display text-gray-900 mb-12 text-center"
        >
          Our Stories
        </motion.h2>

        <div
          className={
            isScrollable
              ? "flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          }
        >
          {shortVideos.map((video) => (
            <div
              key={video.id}
              className={
                isScrollable ? "min-w-[280px] md:min-w-[320px] snap-center" : ""
              }
            >
              <VideoCard
                id={video.id}
                videoUrl={video.videoUrl}
                thumbnail={video.thumbnail}
                title={video.title}
                variants={itemVariants}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
