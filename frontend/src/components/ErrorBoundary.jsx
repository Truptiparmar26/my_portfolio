import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 selection:bg-[#B921FF]/30 font-sans">
          {/* Glowing background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#B921FF]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
          
          <div className="max-w-xl w-full bg-[#090B17]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <span className="text-3xl">⚡</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-white">
              System Interrupted
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
              We encountered a slight glitch while initializing the interface. Don&apos;t worry, your data is completely safe and you can quickly refresh to restore access.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-white bg-gradient-to-r from-[#7000FF] to-[#B921FF] hover:from-[#00E5FF] hover:to-[#00FFFF] hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(185,33,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] font-semibold text-sm cursor-pointer"
              >
                Reload System
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/25 text-gray-300 hover:text-white transition-all duration-300 text-sm font-semibold cursor-pointer"
              >
                Return to Home
              </button>
            </div>

            {/* Diagnostics box for developer */}
            {this.state.error && (
              <details className="text-left bg-black/40 border border-white/5 rounded-2xl p-4 text-xs font-mono text-gray-400 overflow-x-auto">
                <summary className="cursor-pointer font-semibold text-[#00E5FF] select-none">
                  View Technical Diagnostics
                </summary>
                <div className="mt-3 text-red-400 font-bold whitespace-pre-wrap break-words">
                  {this.state.error.toString()}
                </div>
                {this.state.errorInfo && (
                  <div className="mt-2 text-gray-500 text-[10px] leading-relaxed whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </div>
                )}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
