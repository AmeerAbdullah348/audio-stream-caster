import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import VideoPreview from "./VideoPreview";
import DownloadSection from "./DownloadSection";
import { API_ENDPOINTS } from "@/lib/api";

interface VideoInfo {
  title: string;
  thumbnail: string;
  duration: string;
  url: string;
}

const ConverterCard = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isConverting, setIsConverting] = useState(false);

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const handleUrlSubmit = async () => {
    if (!url.trim()) {
      toast({
        title: "Please enter a YouTube URL",
        description: "Copy and paste a YouTube video URL to get started.",
        variant: "destructive",
      });
      return;
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      toast({
        title: "Invalid YouTube URL",
        description: "Please enter a valid YouTube video URL.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Call backend API to get video info
    try {
      const response = await fetch(API_ENDPOINTS.VIDEO_INFO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const data = await response.json();
        const duration = data.duration
          ? `${Math.floor(data.duration / 60)}:${(data.duration % 60)
              .toString()
              .padStart(2, "0")}`
          : "Unknown";

        setVideoInfo({
          title: data.title || "YouTube Video",
          thumbnail:
            data.thumbnail ||
            `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          duration: duration,
          url: url,
        });
        toast({
          title: "Video loaded successfully!",
          description: "Ready to convert to WAV format.",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to load video");
      }
    } catch (error) {
      console.error("Error loading video:", error);
      // Fallback to basic info
      setVideoInfo({
        title: "YouTube Video - Ready for Conversion",
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        duration: "Unknown",
        url: url,
      });
      toast({
        title: "Video loaded with limited info",
        description: "Video loaded but some details may be unavailable.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!videoInfo) return;

    setIsConverting(true);
    setDownloadProgress(0);

    try {
      // Call backend API to convert and download
      const response = await fetch(API_ENDPOINTS.CONVERT_TO_WAV, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: videoInfo.url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Conversion failed");
      }
      console.log("Conversion started ", response);

      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 500);

      // Get the blob from response
      const blob = await response.blob();

      // Clear progress and set to 100%
      clearInterval(progressInterval);
      setDownloadProgress(100);

      // Get filename from response headers or use default
      const contentDisposition = response.headers.get("content-disposition");
      let fileName = `${videoInfo.title
        .replace(/[^a-z0-9]/gi, "_")
        .toLowerCase()}.wav`;

      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="(.+)"/);
        if (filenameMatch) {
          fileName = filenameMatch[1];
        }
      }

      // Create download link
      const audioUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = audioUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(audioUrl);

      toast({
        title: "Conversion complete!",
        description: "Your WAV file has been downloaded.",
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Conversion failed",
        description:
          error.message || "Failed to convert video. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConverting(false);
      setTimeout(() => setDownloadProgress(0), 2000); // Reset progress after 2 seconds
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="converter-card">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Online YouTube to WAV Converter
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            YouTube to Wav Converter is a professional online tool that helps
            users convert and download high-quality WAV sound from
            copyright-free YouTube videos without limits.
            <span className="font-semibold text-foreground">
              {" "}
              Only for personal & non-commercial use.
            </span>
          </p>
        </div>

        <div className="space-y-6">
          {/* URL Input Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Enter YouTube Video URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="url-input flex-1"
              onKeyPress={(e) => e.key === "Enter" && handleUrlSubmit()}
            />
            <Button
              onClick={handleUrlSubmit}
              disabled={isLoading}
              className="download-btn sm:w-auto w-full"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                "Download"
              )}
            </Button>
          </div>

          {/* Video Preview */}
          {videoInfo && (
            <VideoPreview
              videoInfo={videoInfo}
              isConverting={isConverting}
              downloadProgress={downloadProgress}
            />
          )}

          {/* Download Section */}
          {videoInfo && !isConverting && downloadProgress === 0 && (
            <DownloadSection onDownload={handleDownload} />
          )}

          {/* Information Text */}
          <div className="text-center pt-6">
            <p className="text-muted-foreground">
              Free Download WAV Audio from YouTube
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterCard;
