import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

// Placeholder video URL
const VIDEO_URL =
  "https://videos.pexels.com/video-files/5803096/5803096-uhd_2560_1440_24fps.mp4"; // Wedding ambient video

interface VideoCardProps {
  id: number;
}

const VideoCard = ({ id }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
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
    e.stopPropagation(); // Prevent toggling play when clicking mute
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-black"
      role="region"
      aria-label={`Short video card ${id}`}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        loop
        muted={isMuted}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        playsInline
        onClick={togglePlay}
      />

      {/* Overlay Gradient for text readability if needed */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Controls Container */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-3 z-20">
        {/* Play/Pause Button */}
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

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all transform active:scale-95"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      {/* Title Overlay (Optional, matching 'Kapok Stories' style if desired in future) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center w-full px-4 z-20 pointer-events-none">
        {/* <h4 className="text-white font-display text-xl drop-shadow-md">Story {id}</h4> */}
      </div>
    </div>
  );
};

export const ShortsVideoSection = () => {
  return (
    <section className="py-24 bg-texture-floral overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display text-gray-900 mb-12 text-center">
          Our Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <VideoCard key={item} id={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
