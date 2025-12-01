const PostEditor = ({ onPublish }) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title.trim() && content.trim()) {
      onPublish({
        id: Date.now(),
        title: title,
        content: content,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        author: 'Admin Roti Gan',
        image: 'https://images.unsplash.com/photo-1542826438-bd32f4a431a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Default image
      });
      
      setTitle('');
      setContent('');
      setIsOpen(false);
      alert('Postingan berhasil dipublikasikan! (Simulasi)');
    } else {
      alert('Judul dan konten harus diisi.');
    }
  };

  return (
    <section id="post-editor" className="py-10 bg-[var(--secondary-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-main)' }}>Editor Postingan (Admin)</h2>
        
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center bg-[var(--accent-color)] text-white py-2 px-4 rounded-lg hover:bg-[#a0522d] transition-colors mb-4"
        >
            <i className="lucide lucide-plus-circle w-5 h-5 mr-2"></i>
            {isOpen ? 'Tutup Editor' : 'Buat Postingan Baru'}
        </button>

        {isOpen && (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300">
                <div className="mb-4">
                    <label htmlFor="post-title" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-main)' }}>Judul Postingan</label>
                    <input
                        id="post-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                        placeholder="Masukkan judul di sini..."
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="post-content" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-main)' }}>Konten</label>
                    <textarea
                        id="post-content"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                        placeholder="Tulis konten postingan di sini..."
                        required
                    ></textarea>
                </div>
                
                <button
                    type="submit"
                    className="bg-[var(--primary-color)] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#96795b] transition-colors"
                >
                    <i className="lucide lucide-send w-4 h-4 mr-2 inline-block"></i>
                    Publikasikan Postingan
                </button>
            </form>
        )}
      </div>
    </section>
  );
};
