import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AudioScience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Audio Science & Technology
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the technical aspects of audio conversion, formats, and quality optimization.
            </p>
          </div>

          <div className="space-y-12">
            {/* WAV Format Explanation */}
            <section className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">What is WAV Format?</h2>
              <div className="prose prose-gray max-w-none text-muted-foreground">
                <p className="mb-4">
                  WAV (Waveform Audio File Format) is an uncompressed audio format that preserves the original quality of the sound. 
                  Unlike compressed formats like MP3, WAV files contain all the audio data without any loss of quality.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Advantages:</h3>
                    <ul className="space-y-2">
                      <li>• Uncompressed, lossless audio quality</li>
                      <li>• Compatible with all audio software</li>
                      <li>• Perfect for professional audio work</li>
                      <li>• No quality degradation over time</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Technical Specs:</h3>
                    <ul className="space-y-2">
                      <li>• Sample Rate: Up to 192 kHz</li>
                      <li>• Bit Depth: 16, 24, or 32-bit</li>
                      <li>• Channels: Mono or Stereo</li>
                      <li>• File Size: Larger than compressed formats</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Audio Quality Comparison */}
            <section className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Audio Quality Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Format</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Quality</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">File Size</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium text-accent">WAV</td>
                      <td className="py-3 px-4 text-muted-foreground">Lossless</td>
                      <td className="py-3 px-4 text-muted-foreground">Large</td>
                      <td className="py-3 px-4 text-muted-foreground">Professional Audio</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">FLAC</td>
                      <td className="py-3 px-4 text-muted-foreground">Lossless</td>
                      <td className="py-3 px-4 text-muted-foreground">Medium</td>
                      <td className="py-3 px-4 text-muted-foreground">Archival</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">MP3</td>
                      <td className="py-3 px-4 text-muted-foreground">Lossy</td>
                      <td className="py-3 px-4 text-muted-foreground">Small</td>
                      <td className="py-3 px-4 text-muted-foreground">General Listening</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Conversion Process */}
            <section className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">How Audio Conversion Works</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">
                  When converting YouTube videos to WAV format, our system extracts the audio stream and processes it through several stages:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Extract audio stream from the video container</li>
                  <li>Decode the compressed audio (usually AAC or Opus)</li>
                  <li>Apply any necessary sample rate conversion</li>
                  <li>Encode to uncompressed WAV format</li>
                  <li>Optimize file headers for compatibility</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AudioScience;