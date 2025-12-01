function Footer() {
  try {
    return (
      <footer className="bg-[#4A4036] text-[#F9F5F0] py-8" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-xl mb-3 font-serif">Roti Gan</h3>
              <p className="text-sm text-[#EAE0D5]">Menghadirkan kebahagiaan melalui roti berkualitas dari Blitar.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Kontak</h4>
              <p className="text-sm text-[#EAE0D5]">Jl. Musi Barat No. 24<br/>Blitar, Jawa Timur</p>
              <p className="text-sm text-[#EAE0D5] mt-2">Tel: 087816626999</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="#" className="text-[#C19A6B] hover:text-[#D2691E] transition">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-[#C19A6B] hover:text-[#D2691E] transition">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#C19A6B]/30 pt-4 text-center text-sm text-[#EAE0D5]">
            © 2025 Benu Baking Factory - Roti Gan. All rights reserved.
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
