import { Play, Volume2, VolumeX, Pause } from "lucide-react";
import { useState, useRef } from "react";

// Using a placeholder video URL. Ideally this would be local assets or hosted links.
const VIDEO_URL =
  "https://videos.pexels.com/video-files/5803096/5803096-uhd_2560_1440_24fps.mp4"; // Wedding ambient video

export const ShortsVideoSection = () => {
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-12 bg-black overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            loop
            muted={isMuted}
            className="w-full h-full object-cover opacity-80"
            playsInline
          />

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-8 bg-black/10 group-hover:bg-black/20 transition-colors">
            <button
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-md p-6 rounded-full text-white hover:bg-white/40 transition-all transform hover:scale-110"
            >
              {isPlaying ? (
                <Pause size={32} />
              ) : (
                <Play size={32} className="ml-1" />
              )}
            </button>
          </div>

          <div className="absolute bottom-6 right-6">
            <button
              onClick={toggleMute}
              className="bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/60 transition-all"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
