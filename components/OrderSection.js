function OrderSection() {
  try {
    const [selectedOutlet, setSelectedOutlet] = React.useState('');
    const [orderForm, setOrderForm] = React.useState({
      name: '',
      phone: '',
      address: '',
      items: '',
      notes: ''
    });
    const [showOrderForm, setShowOrderForm] = React.useState(false);

    const outlets = [
      {
        id: 'outlet1',
        name: 'Gerai Roti Gan - Tanjungsari',
        address: 'Jl. Musi Barat No. 24, Tanjungsari, Sukorejo, Blitar',
        phone: '087816626999',
        hours: '06:00 - 20:00',
        delivery: true
      },
      {
        id: 'outlet2',
        name: 'Gerai Roti Gan - Pasar Legi',
        address: 'Pasar Legi Blitar, Kios B-15, Blitar',
        phone: '087816627000',
        hours: '05:00 - 14:00',
        delivery: true
      },
      {
        id: 'outlet3',
        name: 'Gerai Roti Gan - Sananwetan',
        address: 'Jl. Merdeka No. 45, Sananwetan, Blitar',
        phone: '087816627111',
        hours: '07:00 - 21:00',
        delivery: true
      }
    ];

    const handleOrderSubmit = (e) => {
      e.preventDefault();
      console.log('Order submitted:', { outlet: selectedOutlet, ...orderForm });
      setShowOrderForm(false);
      setOrderForm({ name: '', phone: '', address: '', items: '', notes: '' });
      setSelectedOutlet('');
    };

    return (
      <section id="order" className="scroll-mt-24 bg-gradient-to-br from-[#F9F5F0] to-[#EAE0D5] rounded-3xl p-8 md:p-12" data-name="order" data-file="components/OrderSection.js">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D2691E] text-white px-4 py-2 rounded-full mb-4">
            <i className="fas fa-motorcycle"></i>
            <span className="font-bold text-sm">Kerjasama dengan Kurir Qu Kota Blitar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4036] mb-3">Pesan Roti Gan Sekarang</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Pilih gerai terdekat dan pesan roti segar dengan pengiriman cepat</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {outlets.map((outlet) => (
            <div key={outlet.id} className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-[#C19A6B] transition interactive-card">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#EAE0D5] rounded-lg flex items-center justify-center">
                  <i className="fas fa-store text-2xl text-[#D2691E]"></i>
                </div>
                {outlet.delivery && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                    <i className="fas fa-check-circle"></i> Delivery
                  </span>
                )}
              </div>
              
              <h3 className="font-bold text-lg text-[#4A4036] mb-3">{outlet.name}</h3>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-start gap-2">
                  <i className="fas fa-map-marker-alt text-[#C19A6B] mt-1"></i>
                  <span>{outlet.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-phone text-[#C19A6B]"></i>
                  <span>{outlet.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-clock text-[#C19A6B]"></i>
                  <span>{outlet.hours}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedOutlet(outlet.id);
                  setShowOrderForm(true);
                }}
                className="w-full bg-[#D2691E] hover:bg-[#B8571A] text-white py-2 rounded-lg font-bold transition"
              >
                Pesan Dari Gerai Ini
              </button>
            </div>
          ))}
        </div>

        {showOrderForm && (
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 border border-[#EAE0D5]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#4A4036]">Form Pemesanan</h3>
              <button
                onClick={() => setShowOrderForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nomor Telepon *</label>
                  <input
                    type="tel"
                    required
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Alamat Pengiriman *</label>
                <textarea
                  required
                  value={orderForm.address}
                  onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                  placeholder="Alamat lengkap untuk pengiriman"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Pesanan Anda *</label>
                <textarea
                  required
                  value={orderForm.items}
                  onChange={(e) => setOrderForm({...orderForm, items: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                  placeholder="Contoh: 2 Roti Cokelat, 1 Roti Keju, 3 Roti Manis"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Catatan (Opsional)</label>
                <textarea
                  value={orderForm.notes}
                  onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                  placeholder="Permintaan khusus atau catatan tambahan"
                ></textarea>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <i className="fas fa-info-circle text-blue-600 mt-1"></i>
                <p className="text-sm text-blue-800">
                  Pesanan Anda akan dikirim melalui <strong>Kurir Qu Kota Blitar</strong>. Tim kami akan menghubungi Anda untuk konfirmasi pesanan dan pembayaran.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C19A6B] hover:bg-[#A07855] text-white py-3 rounded-lg font-bold transition text-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Kirim Pesanan
              </button>
            </form>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error('OrderSection component error:', error);
    return null;
  }
}