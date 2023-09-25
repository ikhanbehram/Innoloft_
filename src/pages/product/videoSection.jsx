function VideoSection({ src }) {
  return (
    <div className="p-4 border-2 flex flex-col gap-2">
      <p className="text-lg text-gray-600 font-medium">Video</p>
      <div className="w-[70%] h-80 self-center">
        <iframe
          width="100%"
          height="100%"
          src={src}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoSection;
