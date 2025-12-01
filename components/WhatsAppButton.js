function WhatsAppButton() {
  const phoneNumber = '082334995896';
  const message = 'Halo Roti Gan, saya ingin bertanya tentang produk Anda';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  try {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        data-name="whatsapp-button"
        data-file="components/WhatsAppButton.js"
        aria-label="Chat via WhatsApp"
      >
        <span className="icon-message-circle text-2xl"></span>
      </button>
    );
  } catch (error) {
    console.error('WhatsAppButton component error:', error);
    return null;
  }
}