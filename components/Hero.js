function Hero() {
  try {
    return (
      <header className="relative bg-[var(--text-main)] text-[var(--bg-primary)] overflow-hidden" data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=800&fit=crop&q=80')"}}></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <span className="bg-[var(--accent-color)] text-white px-3 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Sejak 2025</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Kehangatan Tradisi Blitar<br />di Meja Anda</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-[var(--secondary-color)]">Menghadirkan kebahagiaan melalui roti berkualitas tinggi yang memadukan resep warisan dengan inovasi modern.</p>
          <div className="flex gap-4">
            <a href="#news" className="bg-[var(--primary-color)] hover:bg-opacity-80 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg">Lihat Promo</a>
            <a href="#profile" className="border border-[var(--bg-primary)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-main)] text-[var(--bg-primary)] px-8 py-3 rounded-lg font-bold transition">Tentang Kami</a>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}