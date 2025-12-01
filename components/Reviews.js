const ReviewCard = ({ review }) => (
    <div className="bg-white p-5 rounded-lg shadow-md">
        <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                {review.name.charAt(0)}
            </div>
            <div>
                <p className="font-semibold text-[var(--text-main)]">{review.name}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
            </div>
        </div>
        <p className="italic text-gray-700">"{review.comment}"</p>
    </div>
);

const ReviewForm = ({ onPublishReview }) => {
    const [name, setName] = React.useState('');
    const [comment, setComment] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name.trim() && comment.trim()) {
            onPublishReview({
                id: Date.now(),
                name: name,
                comment: comment,
                date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
            });
            
            setName('');
            setComment('');
            alert('Komentar berhasil dipublikasikan! (Simulasi)');
        } else {
            alert('Nama dan komentar harus diisi.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg mt-8 border border-[var(--secondary-color)]">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>Tinggalkan Ulasan Anda</h3>
            <div className="mb-4">
                <label htmlFor="reviewer-name" className="block text-sm font-medium mb-2">Nama Anda</label>
                <input
                    id="reviewer-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="review-comment" className="block text-sm font-medium mb-2">Komentar</label>
                <textarea
                    id="review-comment"
                    rows="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                    required
                ></textarea>
            </div>
            
            <button
                type="submit"
                className="w-full bg-[var(--accent-color)] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#a0522d] transition-colors"
            >
                <i className="lucide lucide-message-square-plus w-4 h-4 mr-2 inline-block"></i>
                Kirim Ulasan
            </button>
        </form>
    );
};

const Reviews = ({ reviews, onPublishReview }) => {
    return (
        <section id="reviews" className="py-16 bg-[var(--secondary-color)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: 'var(--primary-color)' }}>Apa Kata Pelanggan Kami?</h2>
                
                <ReviewForm onPublishReview={onPublishReview} />
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                    {reviews.length === 0 && <p className="text-center text-gray-500 col-span-full">Belum ada ulasan. Jadilah yang pertama!</p>}
                </div>
            </div>
        </section>
    );
};
