import { useState } from "react";

// Auto-import all MP4s in src/assets/hero
const modules = import.meta.glob("../assets/hero/*.mp4", { eager: true });

// Build an array of { path, src }
let videos = Object.entries(modules).map(([path, mod]) => ({
  path,
  src: mod.default,
}));

// Sort by filename so Hero_video_1, Hero_video_2, ... are in order
videos.sort((a, b) => a.path.localeCompare(b.path));

export default function HeroMedia() {
  const [index, setIndex] = useState(0);

  if (videos.length === 0) {
    return (
      <div className="w-[90vw] max-w-6xl mx-auto aspect-[16/9] rounded-2xl border shadow bg-white grid place-items-center text-gray-500">
        <span>Add Hero_video_1.mp4 to src/assets/hero/</span>
      </div>
    );
  }

  const handleVideoEnd = () => {
    if (videos.length === 1) return; // only one video, stay on it
    setIndex((prev) => (prev + 1) % videos.length); // next video, loop
  };

  return (
    <div className="w-[90vw] max-w-6xl mx-auto aspect-[16/9] rounded-2xl border shadow overflow-hidden">
      <video
        key={videos[index].src}
        src={videos[index].src}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
