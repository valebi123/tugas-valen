function WhatsAppButton() {
  try {
    const whatsappNumber = '6282334995896';
    const message = 'Halo Roti Gan! Saya ingin bertanya tentang produk Anda.';
    
    const handleWhatsAppClick = () => {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };

    return (
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-gentle"
        aria-label="Chat via WhatsApp"
        data-name="whatsapp-button"
        data-file="components/WhatsAppButton.js"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </button>
    );
  } catch (error) {
    console.error('WhatsAppButton component error:', error);
    return null;
  }
}
