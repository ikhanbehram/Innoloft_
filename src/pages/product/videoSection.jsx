function VideoSection() {
  return (
    <div className="p-4 border-2 flex flex-col gap-2">
      <p className="text-lg text-gray-600 font-medium">Video</p>
      <div className="w-[70%] h-80 self-center">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Q7KQ9uLD4Iw?list=RDQ7KQ9uLD4Iw"
          title="poobon-del-lyrics"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoSection;
