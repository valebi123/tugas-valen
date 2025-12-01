function NewsRoom() {
  try {
    return (
      <section id="news" className="scroll-mt-24" data-name="newsroom" data-file="components/NewsRoom.js">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#4A4036]">Pusat Berita & Aktivitas</h2>
          <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold animate-pulse">Live: Promo November</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-[#EAE0D5] overflow-hidden interactive-card">
            <div className="bg-[#4A4036] text-white p-4 flex justify-between items-center">
              <span className="font-bold">PRESS RELEASE</span>
              <span className="text-sm opacity-75">22 Okt 2025</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#D2691E]">Benu Baking Factory Hadirkan Roti Berkualitas dengan Sentuhan Tradisi Blitar</h3>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                 22 Oktober 2025 — Benu Baking Factory, yang dikenal dengan merek dagang “Roti Gan,” hari ini mengumumkan pelaksanaan program promosi produk roti berkualitas tinggi yang mengusung cita rasa tradisional khas Blitar. Program ini bertujuan menjangkau masyarakat luas di kota Blitar dan sekitarnya melalui
 berbagai metode pemasaran modern dan interaktif, sekaligus memperkuat loyalitas pelanggan. Benu Baking Factory berdiri dengan visi menjadi perusahaan roti yang dipercaya masyarakat dalam memberikan kebahagiaan lewat produk berkualitas dan pelayanan ramah. Misi perusahaan fokus menyediakan roti segar dan sehat
 menggunakan bahan pilihan, mempererat relasi dengan komunitas lokal, dan mendukung pemberdayaan sumber daya manusia setempat. wakil humas valen
              </p>
              <button className="mt-4 w-full bg-[#C19A6B] text-white py-2 rounded-lg font-bold hover:bg-[#A07855] transition text-sm">
                Baca Selengkapnya
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-[#EAE0D5] overflow-hidden interactive-card">
            <img 
                 
                 src="https://app.trickle.so/storage/app/download (4).jpeg" alt="Distribusi Roti Gan" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">DISTRIBUSI</span>
                <span className="text-xs text-gray-500">15 Nov 2025</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#4A4036]">Program Gizi Kota Blitar</h3>
              <p className="text-gray-700 text-sm">Roti Gan kini menjadi mitra Satuan Pemenuhan Gizi Kota Blitar untuk mendukung program kesehatan masyarakat.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-[#EAE0D5] overflow-hidden interactive-card">
            <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=600" 
                 alt="Workshop Roti Gan" 
                 className="w-full h-48 object-cover"/>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">WORKSHOP</span>
                <span className="text-xs text-gray-500">10 Nov 2025</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#4A4036]">Pelatihan Pembuatan Roti untuk UMKM</h3>
              <p className="text-gray-700 text-sm">Benu Baking Factory mengadakan workshop gratis untuk pelaku UMKM lokal tentang teknik produksi roti berkualitas.</p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('NewsRoom component error:', error);
    return null;
  }
}
