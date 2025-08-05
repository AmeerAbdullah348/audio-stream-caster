import { Button } from "@/components/ui/button";

interface DownloadSectionProps {
  onDownload: () => void;
}

const DownloadSection = ({ onDownload }: DownloadSectionProps) => {
  return (
    <div className="text-center space-y-6">
      {/* Main Download Button */}
      <div className="flex justify-center">
        <Button 
          onClick={onDownload}
          className="download-btn text-lg px-12 py-4 hover-scale"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Click here to DOWNLOAD
        </Button>
      </div>

      {/* Format Options */}
      <div className="flex flex-wrap justify-center gap-3">
        <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
          <span className="text-sm font-medium text-secondary-foreground">WAV</span>
        </div>
        <div className="px-4 py-2 bg-muted rounded-lg border border-border text-muted-foreground">
          <span className="text-sm">MP3 (Premium)</span>
        </div>
        <div className="px-4 py-2 bg-muted rounded-lg border border-border text-muted-foreground">
          <span className="text-sm">FLAC (Premium)</span>
        </div>
      </div>

      {/* Quality Info */}
      <div className="bg-download-green-light border border-download-green/20 rounded-lg p-4">
        <div className="flex items-center justify-center gap-2 text-download-green">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">High Quality WAV Format - Free Forever</span>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;