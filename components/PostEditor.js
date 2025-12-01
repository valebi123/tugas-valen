function PostEditor({ onClose }) {
  const [formData, setFormData] = React.useState({
    title: '',
    content: '',
    imageUrl: '',
    category: 'UMUM'
  });
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await trickleCreateObject('post', {
        Title: formData.title,
        Content: formData.content,
        ImageUrl: formData.imageUrl,
        Category: formData.category,
        PublishedDate: new Date().toISOString()
      });
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  try {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-name="post-editor" data-file="components/PostEditor.js">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Tambah Postingan Baru</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <span className="icon-x text-2xl"></span>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-bold text-[var(--text-main)] mb-2">Judul</label>
                <input 
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                  placeholder="Masukkan judul postingan"
                />
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--text-main)] mb-2">Kategori</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
              >
                <option value="UMUM">UMUM</option>
                <option value="PRESS RELEASE">PRESS RELEASE</option>
                <option value="DISTRIBUSI">DISTRIBUSI</option>
                <option value="PROMO">PROMO</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--text-main)] mb-2">URL Gambar (Opsional)</label>
              <input 
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">Gunakan URL gambar dari Unsplash, Pexels, atau layanan hosting lainnya</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--text-main)] mb-2">Konten</label>
              <textarea 
                required
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20 h-40 resize-none"
                placeholder="Tulis konten postingan di sini..."
              ></textarea>
            </div>

            <div className="flex gap-3 pt-4">
              <button 
                type="submit"
                disabled={submitting}
                className="flex-1 bg-[var(--accent-color)] text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {submitting ? 'Menyimpan...' : 'Publikasikan'}
              </button>
              <button 
                type="button"
                onClick={onClose}
                className="px-8 py-3 border border-gray-300 rounded-lg font-bold hover:bg-gray-50 transition"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PostEditor component error:', error);
    return null;
  }
}