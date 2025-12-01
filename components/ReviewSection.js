function ReviewSection() {
  try {
    const [reviews, setReviews] = React.useState([
      {
        id: 1,
        name: 'Ibu Siti Aminah',
        rating: 5,
        comment: 'Roti Gan sangat enak dan selalu fresh! Anak-anak saya sangat suka, terutama roti cokelat. Harganya juga terjangkau.',
        date: '15 Nov 2025',
        avatar: 'SA'
      },
      {
        id: 2,
        name: 'Pak Budi Santoso',
        rating: 5,
        comment: 'Kualitas roti terbaik di Blitar. Sudah langganan sejak awal buka. Pelayanannya ramah dan lokasi mudah dijangkau.',
        date: '12 Nov 2025',
        avatar: 'BS'
      }
    ]);
    
    const [showForm, setShowForm] = React.useState(false);
    const [formData, setFormData] = React.useState({
      name: '',
      rating: 5,
      comment: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const newReview = {
        id: reviews.length + 1,
        name: formData.name,
        rating: formData.rating,
        comment: formData.comment,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
        avatar: formData.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      };
      
      setReviews([newReview, ...reviews]);
      setFormData({ name: '', rating: 5, comment: '' });
      setShowForm(false);
    };

    const renderStars = (rating) => {
      return [...Array(5)].map((_, index) => (
        <i 
          key={index} 
          className={`fas fa-star ${index < rating ? 'text-[#D2691E]' : 'text-gray-300'}`}
        ></i>
      ));
    };

    return (
      <section id="reviews" className="scroll-mt-24" data-name="reviews" data-file="components/ReviewSection.js">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#4A4036]">Ulasan Pelanggan</h2>
            <p className="text-gray-600 mt-2">Apa kata pelanggan kami tentang Roti Gan</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#D2691E] hover:bg-[#B8571A] text-white px-6 py-3 rounded-lg font-bold transition flex items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            Tulis Ulasan
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#EAE0D5] mb-8">
            <h3 className="text-xl font-bold text-[#4A4036] mb-4">Bagikan Pengalaman Anda</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama Anda</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="text-2xl focus:outline-none"
                    >
                      <i className={`fas fa-star ${star <= formData.rating ? 'text-[#D2691E]' : 'text-gray-300'}`}></i>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Ulasan Anda</label>
                <textarea
                  required
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                  placeholder="Ceritakan pengalaman Anda dengan Roti Gan..."
                ></textarea>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-[#C19A6B] hover:bg-[#A07855] text-white px-6 py-2 rounded-lg font-bold transition"
                >
                  Kirim Ulasan
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-bold transition"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md border border-[#EAE0D5] interactive-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C19A6B] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-[#4A4036]">{review.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('ReviewSection component error:', error);
    return null;
  }
}