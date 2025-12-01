const initialPosts = [
    { id: 1, title: 'Roti Gandum Spesial: Kombinasi Sehat dan Lezat', content: 'Kami memperkenalkan varian terbaru: Roti Gandum yang dibuat dari 100% biji gandum pilihan, kaya serat, dan tetap mempertahankan kelembutan khas Roti Gan. Cocok untuk sarapan sehat Anda.', date: '10 November 2025', author: 'Redaksi Roti Gan', image: 'https://images.unsplash.com/photo-1543666504-2b62d2946979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, title: 'Sejarah Singkat Roti Tradisional Blitar', content: 'Pelajari bagaimana resep roti kami diwariskan dari generasi ke generasi di Blitar. Rasa otentik yang kami jaga sejak lama.', date: '1 Oktober 2025', author: 'Redaksi Roti Gan', image: 'https://images.unsplash.com/photo-1596701768461-9f2061e868a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, title: 'Workshop Baking Gratis di Benu Factory!', content: 'Kami mengundang Anda untuk mengikuti workshop baking bersama kepala chef kami. Daftarkan diri Anda segera, tempat terbatas!', date: '15 September 2025', author: 'Redaksi Roti Gan', image: 'https://images.unsplash.com/photo-1579737153922-4467776b772c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

const initialReviews = [
    { id: 1, name: 'Siti Nurhaliza', comment: 'Roti Abonnya enak sekali, teksturnya lembut dan abonnya melimpah. Benar-benar rasa tradisional yang tidak terlupakan!', date: '25 November 2025' },
    { id: 2, name: 'Bambang Sudiro', comment: 'Pelayanan cepat dan ramah. Roti Sisirnya mengingatkan saya pada masa kecil di Blitar. Pertahankan kualitasnya!', date: '18 November 2025' },
];


const App = () => {
    const [posts, setPosts] = React.useState(initialPosts);
    const [reviews, setReviews] = React.useState(initialReviews);
    const [activeSection, setActiveSection] = React.useState('hero'); // Untuk navigasi

    // FUNGSI UNTUK MEMPERBAIKI MASALAH POSTINGAN
    const handleNewPost = (newPost) => {
        // Menambahkan postingan baru ke awal array
        setPosts(prev => [newPost, ...prev]);
        setActiveSection('news'); // Arahkan ke section News setelah publish
    };

    // FUNGSI UNTUK MEMPERBAIKI MASALAH KOMENTAR
    const handleNewReview = (newReview) => {
        // Menambahkan review baru ke awal array
        setReviews(prev => [newReview, ...prev]);
    };
    
    // Fungsi untuk navigasi (Scroll ke bagian yang diminta)
    const handleNavigate = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="min-h-screen">
            <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
            <main>
                <Hero />
                <News posts={posts} />
                <Dashboard />
                <Reviews reviews={reviews} onPublishReview={handleNewReview} />
                <PostEditor onPublish={handleNewPost} /> {/* Komponen PostEditor kini berfungsi */}
                <Profile />
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

// Merender komponen utama ke dalam div dengan id="root"
ReactDOM.render(<App />, document.getElementById('root'));
