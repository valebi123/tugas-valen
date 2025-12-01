function Reviews() {
  const [reviews, setReviews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', rating: 5, comment: '' });
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const result = await trickleListObjects('review', 100, true);
      setReviews(result.items);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await trickleCreateObject('review', {
        Name: formData.name,
        Rating: formData.rating,
        Comment: formData.comment,
        CreatedDate: new Date().toISOString()
      });
      setFormData({ name: '', rating: 5, comment: '' });
      setShowForm(false);
      loadReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`icon-star text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}></span>
    ));
  };

  try {
    return (
      <section id="reviews" className="scroll-mt-24" data-name="reviews" data-file="components/Reviews.js">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[var(--text-main)]">Ulasan Pelanggan</h2>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition"
          >
            <span className="icon-message-square text-base"></span>
            Tulis Ulasan
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg border border-[var(--secondary-color)] mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[var(--text-main)] mb-2">Nama Anda</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--text-main)] mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(num => (
                    <button 
                      key={num}
                      type="button"
                      onClick={() => setFormData({...formData, rating: num})}
                      className={`icon-star text-2xl ${num <= formData.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    ></button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--text-main)] mb-2">Komentar</label>
                <textarea 
                  required
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20 h-24 resize-none"
                  placeholder="Tulis ulasan Anda di sini..."
                ></textarea>
              </div>
              <div className="flex gap-3">
                <button 
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-[var(--accent-color)] text-white py-2 rounded-lg font-bold hover:bg-opacity-90 transition disabled:opacity-50"
                >
                  {submitting ? 'Mengirim...' : 'Kirim Ulasan'}
                </button>
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg font-bold hover:bg-gray-50 transition"
                >
                  Batal
                </button>
              </div>
            </div>
          </form>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="icon-loader text-4xl text-[var(--primary-color)] animate-spin"></div>
          </div>
        ) : reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.objectId} className="bg-white p-6 rounded-xl shadow-md border border-[var(--secondary-color)] hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-[var(--text-main)]">{review.objectData.Name}</h4>
                  <div className="flex gap-1">{renderStars(review.objectData.Rating)}</div>
                </div>
                <p className="text-gray-700 text-sm">{review.objectData.Comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">Belum ada ulasan. Jadilah yang pertama memberikan ulasan!</p>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error('Reviews component error:', error);
    return null;
  }
}