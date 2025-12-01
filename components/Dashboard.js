function Dashboard() {
  try {
    const chartRef = React.useRef(null);
    const chartInstance = React.useRef(null);

    React.useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new ChartJS(ctx, {
          type: 'radar',
          data: {
            labels: ['Kualitas Produk', 'Komunitas', 'SDM', 'Inovasi'],
            datasets: [{
              label: 'Fokus Strategis',
              data: [85, 90, 75, 80],
              fill: true,
              backgroundColor: 'rgba(193, 154, 107, 0.2)',
              borderColor: '#C19A6B',
              pointBackgroundColor: '#D2691E',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#D2691E'
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20
                }
              }
            }
          }
        });
      }

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, []);

    return (
      <section id="dashboard" className="scroll-mt-24" data-name="dashboard" data-file="components/Dashboard.js">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#4A4036] mb-3">Fokus Strategis Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Visualisasi komitmen Benu Baking Factory berdasarkan pilar utama perusahaan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#EAE0D5] interactive-card">
              <h3 className="text-xl font-bold text-[#D2691E] mb-2"><i className="fas fa-bullseye mr-2"></i>Visi Utama</h3>
              <p className="text-gray-700">"Menjadi perusahaan roti yang dipercaya masyarakat dalam memberikan kebahagiaan lewat produk berkualitas dan pelayanan ramah."</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FDFBF7] p-4 rounded-lg border border-[#EAE0D5] text-center">
                <i className="fas fa-users text-3xl text-[#C19A6B] mb-2"></i>
                <div className="font-bold text-[#4A4036]">Komunitas</div>
                <div className="text-xs text-gray-500">Pemberdayaan Lokal</div>
              </div>
              <div className="bg-[#FDFBF7] p-4 rounded-lg border border-[#EAE0D5] text-center">
                <i className="fas fa-bread-slice text-3xl text-[#C19A6B] mb-2"></i>
                <div className="font-bold text-[#4A4036]">Produk</div>
                <div className="text-xs text-gray-500">Segar & Sehat</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-[#EAE0D5]">
            <h4 className="text-center font-bold text-gray-500 text-sm mb-4 uppercase tracking-widest">Metrik Prioritas Misi</h4>
            <div className="chart-container">
              <canvas ref={chartRef}></canvas>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">Data representatif berdasarkan pernyataan Misi Perusahaan</p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Dashboard component error:', error);
    return null;
  }
}