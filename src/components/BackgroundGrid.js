export default function BackgroundGrid() {
  return (
    <>
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Purple Blob */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px] top-10 left-20 animate-pulse" />

      {/* Cyan Blob */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[180px] bottom-10 right-20 animate-pulse" />
    </>
  );
}
