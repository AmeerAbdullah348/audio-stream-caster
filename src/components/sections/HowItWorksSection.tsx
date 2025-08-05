const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Copy YouTube URL",
      description: "Find the YouTube video you want to convert and copy its URL from the address bar.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      step: "2",
      title: "Paste & Click Download",
      description: "Paste the YouTube URL into our converter field and click the green Download button.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      step: "3",
      title: "Get Your WAV File",
      description: "Wait a few seconds for the conversion to complete, then download your high-quality WAV audio file.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Convert YouTube to WAV Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Converting YouTube videos to WAV is very easy with YouTubetoWAV.com. It allows users to convert copyright-free YouTube videos to WAV file and download to their local devices like computer or smartphones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent transform -translate-x-8 z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full text-2xl font-bold mb-6 hover-scale">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="text-accent mb-4 flex justify-center">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              All that ends TODAY!
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to our one of a kind YouTube to WAV downloader, which allows you to <span className="font-semibold text-accent">convert to wav</span> and download all your favorite tunes and musics in a few simple steps from <span className="font-semibold text-youtube-red">YouTube HQ</span>!
            </p>
            <p className="text-lg text-foreground">
              And the best part of our WAV downloader? It's all completely <span className="font-bold text-download-green">free of cost!</span> No hidden charges, no commitments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;