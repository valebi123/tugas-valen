function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  try {
    return (
      <>
        <nav className="sticky top-0 z-50 bg-[#F9F5F0] shadow-md border-b border-[#EAE0D5]" data-name="navigation" data-file="components/Navigation.js">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C19A6B] rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
              <span className="font-serif text-2xl font-bold text-[#4A4036]">Roti Gan</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#dashboard" className="text-[#4A4036] hover:text-[#D2691E] font-medium transition">Dashboard</a>
              <a href="#profile" className="text-[#4A4036] hover:text-[#D2691E] font-medium transition">Profil</a>
              <a href="#order" className="text-[#4A4036] hover:text-[#D2691E] font-medium transition">Pesan</a>
              <a href="#news" className="text-[#4A4036] hover:text-[#D2691E] font-medium transition">Berita</a>
              <a href="#reviews" className="text-[#4A4036] hover:text-[#D2691E] font-medium transition">Ulasan</a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#4A4036] text-2xl"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#F9F5F0] border-t border-[#EAE0D5] p-4 flex flex-col space-y-3">
              <a href="#dashboard" onClick={() => setMobileMenuOpen(false)} className="block text-[#4A4036]">Dashboard</a>
              <a href="#profile" onClick={() => setMobileMenuOpen(false)} className="block text-[#4A4036]">Profil</a>
              <a href="#order" onClick={() => setMobileMenuOpen(false)} className="block text-[#4A4036]">Pesan</a>
              <a href="#news" onClick={() => setMobileMenuOpen(false)} className="block text-[#4A4036]">Berita</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block text-[#4A4036]">Ulasan</a>
            </div>
          )}
        </nav>
      </>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}