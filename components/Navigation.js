function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  try {
    return (
      <nav className="sticky top-0 z-50 bg-[var(--bg-primary)] shadow-md border-b border-[var(--secondary-color)]" data-name="navigation" data-file="components/Navigation.js">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
            <span className="font-serif text-2xl font-bold text-[var(--text-main)]">Roti Gan</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#dashboard" className="text-[var(--text-main)] hover:text-[var(--accent-color)] font-medium transition">Dashboard</a>
            <a href="#profile" className="text-[var(--text-main)] hover:text-[var(--accent-color)] font-medium transition">Profil</a>
            <a href="#news" className="text-[var(--text-main)] hover:text-[var(--accent-color)] font-medium transition">Berita</a>
            <a href="#innovation" className="text-[var(--text-main)] hover:text-[var(--accent-color)] font-medium transition">AI Lab</a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[var(--text-main)] text-2xl"
          >
            <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-xl`}></div>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--bg-primary)] border-t border-[var(--secondary-color)] p-4 flex flex-col space-y-3">
            <a href="#dashboard" className="block text-[var(--text-main)]" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
            <a href="#profile" className="block text-[var(--text-main)]" onClick={() => setMobileMenuOpen(false)}>Profil</a>
            <a href="#news" className="block text-[var(--text-main)]" onClick={() => setMobileMenuOpen(false)}>Berita</a>
            <a href="#innovation" className="block text-[var(--text-main)]" onClick={() => setMobileMenuOpen(false)}>AI Lab</a>
          </div>
        )}
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}