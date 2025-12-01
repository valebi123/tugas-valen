function Profile() {
  const [activeTab, setActiveTab] = React.useState('structure');

  try {
    return (
      <section id="profile" className="scroll-mt-24 bg-[var(--secondary-color)] rounded-3xl p-8 md:p-12" data-name="profile" data-file="components/Profile.js">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <span className="text-[var(--accent-color)] font-bold tracking-widest uppercase text-sm">Organisasi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">Struktur & Operasional</h2>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 border-b border-[var(--primary-color)] pb-1">
            <button 
              onClick={() => setActiveTab('structure')} 
              className={`px-4 py-2 hover:text-[var(--accent-color)] transition ${activeTab === 'structure' ? 'border-b-3 border-[var(--accent-color)] text-[var(--accent-color)] font-bold' : 'text-[var(--text-main)]'}`}
            >
              Struktur Tim
            </button>
            <button 
              onClick={() => setActiveTab('location')} 
              className={`px-4 py-2 hover:text-[var(--accent-color)] transition ${activeTab === 'location' ? 'border-b-3 border-[var(--accent-color)] text-[var(--accent-color)] font-bold' : 'text-[var(--text-main)]'}`}
            >
              Lokasi & Kontak
            </button>
          </div>
        </div>

        {activeTab === 'structure' && (
          <div className="grid grid-cols-1 gap-8">
            <h3 className="text-2xl font-bold text-[var(--accent-color)] text-center mb-4">Pimpinan Eksekutif</h3>
            
            <div className="flex justify-center mb-8">
              <div className="bg-[var(--text-main)] text-white p-5 rounded-xl shadow-xl text-center w-full md:w-1/3 hover:bg-[var(--accent-color)] transition-all duration-300 cursor-default">
                <div className="font-bold text-xl">Bima Anggara</div>
                <div className="text-sm text-[var(--primary-color)]">Direktur Utama / CEO</div>
              </div>
            </div>

            <div className="flex justify-center -mt-4 mb-4">
              <div className="h-8 w-px bg-[var(--text-main)]"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-[var(--accent-color)] text-center mb-4">Divisi Operasional</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[var(--primary-color)] text-center hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 cursor-default group">
                <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-full flex items-center justify-center mx-auto mb-3 text-[var(--accent-color)] group-hover:bg-white">
                  <div className="icon-factory text-xl"></div>
                </div>
                <h4 className="font-bold text-[var(--text-main)] group-hover:text-white">Produksi & R&D</h4>
                <div className="text-md font-semibold text-gray-800 mt-2 group-hover:text-white">Ayu Saraswati</div>
                <p className="text-sm text-gray-600 group-hover:text-white">Kepala Bagian Manufaktur</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[var(--primary-color)] text-center hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 cursor-default group">
                <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-full flex items-center justify-center mx-auto mb-3 text-[var(--accent-color)] group-hover:bg-white">
                  <div className="icon-megaphone text-xl"></div>
                </div>
                <h4 className="font-bold text-[var(--text-main)] group-hover:text-white">Pemasaran & Humas</h4>
                <div className="text-md font-semibold text-gray-800 mt-2 group-hover:text-white">Rio Prawira</div>
                <p className="text-sm text-gray-600 group-hover:text-white">Kepala Bagian Pemasaran</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[var(--primary-color)] text-center hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 cursor-default group">
                <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-full flex items-center justify-center mx-auto mb-3 text-[var(--accent-color)] group-hover:bg-white">
                  <div className="icon-coins text-xl"></div>
                </div>
                <h4 className="font-bold text-[var(--text-main)] group-hover:text-white">Keuangan & Akuntansi</h4>
                <div className="text-md font-semibold text-gray-800 mt-2 group-hover:text-white">Dian Lestari</div>
                <p className="text-sm text-gray-600 group-hover:text-white">Kepala Bagian Keuangan</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[var(--primary-color)] text-center hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 cursor-default group">
                <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-full flex items-center justify-center mx-auto mb-3 text-[var(--accent-color)] group-hover:bg-white">
                  <div className="icon-headset text-xl"></div>
                </div>
                <h4 className="font-bold text-[var(--text-main)] group-hover:text-white">SDM & Pelayanan</h4>
                <div className="text-md font-semibold text-gray-800 mt-2 group-hover:text-white">Joko Waluyo</div>
                <p className="text-sm text-gray-600 group-hover:text-white">Kepala Bagian HRD & CS</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--accent-color)]">
                  <div className="icon-map-pin text-2xl"></div>
                </div>
                <div>
                  <div className="font-bold">Alamat Pabrik & Outlet</div>
                  <p className="text-gray-700">Jl. Musi Barat No. 24, Tanjungsari, Sukorejo, Blitar, Jawa Timur</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--accent-color)]">
                  <div className="icon-phone text-2xl"></div>
                </div>
                <div>
                  <div className="font-bold">Telepon</div>
                  <p className="text-gray-700">087816626999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--accent-color)]">
                  <div className="icon-instagram text-2xl"></div>
                </div>
                <div>
                  <div className="font-bold">Social Media</div>
                  <p className="text-gray-700">@roti_gan</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-inner h-64 flex items-center justify-center text-gray-400 bg-gray-100">
              <div className="icon-map text-4xl mr-2"></div>
              <span>[Peta Lokasi Interaktif akan dimuat di sini]</span>
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