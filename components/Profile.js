function Profile({ currentTab, setCurrentTab }) {
  try {
    return (
      <section id="profile" className="scroll-mt-24 bg-[#EAE0D5] rounded-3xl p-8 md:p-12" data-name="profile" data-file="components/Profile.js">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <span className="text-[#D2691E] font-bold tracking-widest uppercase text-sm">Organisasi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A4036]">Struktur & Operasional</h2>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 border-b border-[#C19A6B]/30 pb-1">
            <button 
              onClick={() => setCurrentTab('structure')} 
              className={`tab-btn text-[#4A4036] px-4 py-2 hover:text-[#D2691E] transition ${currentTab === 'structure' ? 'active' : ''}`}
            >
              Struktur Tim
            </button>
            <button 
              onClick={() => setCurrentTab('location')} 
              className={`tab-btn text-[#4A4036] px-4 py-2 hover:text-[#D2691E] transition ${currentTab === 'location' ? 'active' : ''}`}
            >
              Lokasi & Kontak
            </button>
          </div>
        </div>

        {currentTab === 'structure' && (
          <div className="grid grid-cols-1 gap-8 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#D2691E] text-center mb-4">Pimpinan Eksekutif</h3>
            
            <div className="flex justify-center mb-8">
              <div className="bg-[#4A4036] text-white p-5 rounded-xl shadow-xl text-center w-full md:w-1/3 org-node">
                <div className="font-bold text-xl">Bima Anggara</div>
                <div className="text-sm text-[#C19A6B]">Direktur Utama / CEO</div>
              </div>
            </div>

            <div className="flex justify-center -mt-4 mb-4">
              <div className="h-8 w-px bg-[#4A4036]"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-[#D2691E] text-center mb-4">Divisi Operasional</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C19A6B] text-center org-node">
                <div className="w-12 h-12 bg-[#F9F5F0] rounded-full flex items-center justify-center mx-auto mb-3 text-[#D2691E]"><i className="fas fa-industry"></i></div>
                <h4 className="font-bold text-[#4A4036]">Produksi & R&D</h4>
                <div className="text-md font-semibold text-gray-800 mt-2">Ayu Saraswati</div>
                <p className="text-sm text-gray-600">Kepala Bagian Manufaktur</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C19A6B] text-center org-node">
                <div className="w-12 h-12 bg-[#F9F5F0] rounded-full flex items-center justify-center mx-auto mb-3 text-[#D2691E]"><i className="fas fa-bullhorn"></i></div>
                <h4 className="font-bold text-[#4A4036]">Pemasaran & Humas</h4>
                <div className="text-md font-semibold text-gray-800 mt-2">Rio Prawira</div>
                <p className="text-sm text-gray-600">Kepala Bagian Pemasaran</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C19A6B] text-center org-node">
                <div className="w-12 h-12 bg-[#F9F5F0] rounded-full flex items-center justify-center mx-auto mb-3 text-[#D2691E]"><i className="fas fa-coins"></i></div>
                <h4 className="font-bold text-[#4A4036]">Keuangan & Akuntansi</h4>
                <div className="text-md font-semibold text-gray-800 mt-2">Dian Lestari</div>
                <p className="text-sm text-gray-600">Kepala Bagian Keuangan</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C19A6B] text-center org-node">
                <div className="w-12 h-12 bg-[#F9F5F0] rounded-full flex items-center justify-center mx-auto mb-3 text-[#D2691E]"><i className="fas fa-headset"></i></div>
                <h4 className="font-bold text-[#4A4036]">SDM & Pelayanan</h4>
                <div className="text-md font-semibold text-gray-800 mt-2">Joko Waluyo</div>
                <p className="text-sm text-gray-600">Kepala Bagian HRD & CS</p>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'location' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#D2691E]"><i className="fas fa-map-marker-alt fa-lg"></i></div>
                <div>
                  <div className="font-bold">Alamat Pabrik & Outlet</div>
                  <p className="text-gray-700">Jl. Musi Barat No. 24, Tanjungsari, Sukorejo, Blitar, Jawa Timur</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#D2691E]"><i className="fas fa-phone fa-lg"></i></div>
                <div>
                  <div className="font-bold">Telepon</div>
                  <p className="text-gray-700">087816626999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#D2691E]"><i className="fab fa-instagram fa-lg"></i></div>
                <div>
                  <div className="font-bold">Social Media</div>
                  <p className="text-gray-700">@roti_gan</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-inner h-64 flex items-center justify-center text-gray-400 bg-gray-100">
              <i className="fas fa-map text-4xl mr-2"></i> [Peta Lokasi Interaktif akan dimuat di sini]
            </div>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error('Profile component error:', error);
    return null;
  }
}