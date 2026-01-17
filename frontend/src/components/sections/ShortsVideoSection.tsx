import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

// Using a placeholder video URL. Ideally this would be local assets or hosted links.
const VIDEO_URL =
  "https://videos.pexels.com/video-files/5803096/5803096-uhd_2560_1440_24fps.mp4"; // Wedding ambient video

export const ShortsVideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 bg-black overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-display text-white mb-12 text-center">
          Cinematic Experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-2xl group/video"
            >
              <video
                src={VIDEO_URL}
                loop
                muted={isMuted}
                className="w-full h-full object-cover opacity-80"
                playsInline
                ref={item === 1 ? videoRef : null} // Control first video with main controls for now, others could be independent
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => e.currentTarget.pause()}
              />
              <div className="absolute inset-0 bg-black/20 group-hover/video:bg-transparent transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Global Mute Toggle for ambiance */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={toggleMute}
            className="bg-primary/80 backdrop-blur-md p-4 rounded-full text-white hover:bg-primary transition-all shadow-lg"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      </div>
    </section>
  );
};
