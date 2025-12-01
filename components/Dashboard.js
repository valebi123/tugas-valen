function Dashboard() {
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
            backgroundColor: 'rgba(193, 154, 107, 0.2)',
            borderColor: '#C19A6B',
            borderWidth: 2,
            pointBackgroundColor: '#D2691E',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#D2691E'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
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

  try {
    return (
      <section id="dashboard" className="scroll-mt-24" data-name="dashboard" data-file="components/Dashboard.js">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[var(--text-main)] mb-3">Fokus Strategis Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Visualisasi komitmen Benu Baking Factory berdasarkan pilar utama perusahaan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[var(--secondary-color)] hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[var(--accent-color)] mb-2 flex items-center gap-2">
                <div className="icon-target text-xl"></div>
                Visi Utama
              </h3>
              <p className="text-gray-700">"Menjadi perusahaan roti yang dipercaya masyarakat dalam memberikan kebahagiaan lewat produk berkualitas dan pelayanan ramah."</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FDFBF7] p-4 rounded-lg border border-[var(--secondary-color)] text-center">
                <div className="icon-users text-3xl text-[var(--primary-color)] mb-2"></div>
                <div className="font-bold text-[var(--text-main)]">Komunitas</div>
                <div className="text-xs text-gray-500">Pemberdayaan Lokal</div>
              </div>
              <div className="bg-[#FDFBF7] p-4 rounded-lg border border-[var(--secondary-color)] text-center">
                <div className="icon-cookie text-3xl text-[var(--primary-color)] mb-2"></div>
                <div className="font-bold text-[var(--text-main)]">Produk</div>
                <div className="text-xs text-gray-500">Segar & Sehat</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-[var(--secondary-color)]">
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