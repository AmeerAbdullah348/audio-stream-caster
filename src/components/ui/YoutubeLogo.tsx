const YoutubeLogo = () => {
  return (
    <div className="youtube-logo">
      {/* YouTube Play Button Icon */}
      <div className="relative">
        <div className="w-8 h-8 bg-youtube-red rounded-sm flex items-center justify-center hover:bg-youtube-red-hover transition-colors duration-300">
          <svg 
            className="w-5 h-5 text-white ml-0.5" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      
      {/* Brand Text */}
      <div className="flex items-center">
        <span className="youtube-text">YouTube</span>
        <span className="wav-text font-normal">to</span>
        <span className="wav-text font-bold">WAV</span>
      </div>
    </div>
  );
};

export default YoutubeLogo;