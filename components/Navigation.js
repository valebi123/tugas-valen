const Navigation = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero', name: 'Beranda' },
    { id: 'news', name: 'Berita' },
    { id: 'dashboard', name: 'Statistik' },
    { id: 'reviews', name: 'Ulasan' },
    { id: 'profile', name: 'Profil' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-main)' }}>Roti Gan</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-white bg-[var(--primary-color)]' 
                    : 'text-[var(--text-main)] hover:bg-[var(--secondary-color)]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
             {/* Mobile Menu Icon Placeholder */}
            <button className="text-[var(--text-main)] hover:text-[var(--primary-color)] p-2 rounded-md">
                <i className="lucide lucide-menu w-6 h-6"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
