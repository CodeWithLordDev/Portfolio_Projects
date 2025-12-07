export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Purple Blob - Top Left */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px] top-10 left-20 animate-pulse" />

      {/* Cyan Blob - Bottom Right */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[180px] bottom-10 right-20 animate-pulse" />

      {/* Blue Blob - Center */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[160px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "0.5s" }} />

      {/* Pink Blob - Top Right */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-[140px] top-20 right-40 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Green Blob - Bottom Left */}
      <div className="absolute w-[450px] h-[450px] bg-green-500/10 rounded-full blur-[150px] bottom-20 left-1/3 animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.3) 100%)" />
    </div>
  );
}