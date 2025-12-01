const ChartJS = window.Chart;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Terjadi kesalahan</h1>
            <p className="text-gray-600 mb-4">Maaf, terjadi sesuatu yang tidak terduga.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[var(--accent-color)] text-white px-6 py-2 rounded-lg"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [showEditor, setShowEditor] = React.useState(false);

  try {
    return (
      <div className="flex flex-col min-h-screen" data-name="app" data-file="app.js">
        <Navigation />
        <Hero />
        <main className="flex-grow container mx-auto px-4 py-12 space-y-20">
          <Dashboard />
          <Profile />
          <News onEditClick={() => setShowEditor(true)} />
          <Reviews />
        </main>
        <Footer />
        <WhatsAppButton />
        {showEditor && <PostEditor onClose={() => setShowEditor(false)} />}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);