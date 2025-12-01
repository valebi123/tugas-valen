function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-main)] text-[var(--bg-primary)] py-12 mt-20" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
                <span className="font-serif text-2xl font-bold">Roti Gan</span>
              </div>
              <p className="text-[var(--secondary-color)] text-sm">
                Menghadirkan kebahagiaan melalui roti berkualitas tinggi dari Blitar.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Kontak Kami</h4>
              <div className="space-y-2 text-sm text-[var(--secondary-color)]">
                <div className="flex items-center gap-2">
                  <span className="icon-map-pin text-base"></span>
                  <span>Jl. Musi Barat No. 24, Blitar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="icon-phone text-base"></span>
                  <span>087816626999</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="icon-instagram text-base"></span>
                  <span>@roti_gan</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Jam Operasional</h4>
              <div className="space-y-2 text-sm text-[var(--secondary-color)]">
                <p>Senin - Sabtu: 07:00 - 20:00</p>
                <p>Minggu: 08:00 - 18:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[var(--primary-color)] pt-6 text-center text-sm text-[var(--secondary-color)]">
            <p>&copy; 2025 Benu Baking Factory - Roti Gan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}