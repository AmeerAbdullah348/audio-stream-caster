import { Progress } from "@/components/ui/progress";

interface VideoInfo {
  title: string;
  thumbnail: string;
  duration: string;
  url: string;
}

interface VideoPreviewProps {
  videoInfo: VideoInfo;
  isConverting: boolean;
  downloadProgress: number;
}

const VideoPreview = ({ videoInfo, isConverting, downloadProgress }: VideoPreviewProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover-glow">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Thumbnail */}
        <div className="relative group cursor-pointer">
          <div className="w-full md:w-48 h-32 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={videoInfo.thumbnail} 
              alt={videoInfo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='128' viewBox='0 0 192 128'%3E%3Crect width='192' height='128' fill='%23f3f4f6'/%3E%3Ctext x='96' y='64' font-family='Arial' font-size='14' text-anchor='middle' fill='%236b7280'%3EVideo Thumbnail%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          
          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="w-12 h-12 bg-youtube-red rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-semibold text-foreground line-clamp-2">
            {videoInfo.title}
          </h3>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Duration: {videoInfo.duration}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Ready for conversion
            </span>
          </div>

          {/* Progress Bar (shown during conversion) */}
          {isConverting && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Converting to WAV...</span>
                <span className="text-accent font-medium">{downloadProgress}%</span>
              </div>
              <Progress value={downloadProgress} className="h-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;