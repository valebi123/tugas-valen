function News({ onEditClick }) {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const result = await trickleListObjects('post', 100, true);
      setPosts(result.items);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'PRESS RELEASE': 'bg-[var(--text-main)] text-white',
      'DISTRIBUSI': 'bg-green-100 text-green-600',
      'PROMO': 'bg-red-100 text-red-600',
      'UMUM': 'bg-blue-100 text-blue-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  try {
    return (
      <section id="news" className="scroll-mt-24" data-name="news" data-file="components/News.js">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[var(--text-main)]">Berita & Postingan</h2>
          <button 
            onClick={onEditClick}
            className="flex items-center gap-2 bg-[var(--accent-color)] text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition"
          >
            <span className="icon-plus text-base"></span>
            Tambah Postingan
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="icon-loader text-4xl text-[var(--primary-color)] animate-spin"></div>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.objectId} className="bg-white rounded-xl shadow-lg border border-[var(--secondary-color)] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {post.objectData.ImageUrl && (
                  <img 
                    src={post.objectData.ImageUrl} 
                    alt={post.objectData.Title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${getCategoryColor(post.objectData.Category)}`}>
                      {post.objectData.Category}
                    </span>
                    <span className="text-xs text-gray-400">{formatDate(post.objectData.PublishedDate)}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[var(--accent-color)] line-clamp-2">{post.objectData.Title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{post.objectData.Content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <div className="icon-file-text text-5xl text-gray-400 mb-4"></div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">Belum Ada Postingan</h3>
            <p className="text-gray-500 mb-6">Klik tombol "Tambah Postingan" untuk membuat postingan pertama Anda</p>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error('News component error:', error);
    return null;
  }
}
