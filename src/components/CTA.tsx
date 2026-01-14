export default function CTA() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.pexels.com/photos/1559117/pexels-photo-1559117.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Vamos transformar seu momento em uma lembrança eterna?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Entre em contato e vamos conversar sobre como posso capturar a essência
          do seu momento especial
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-black px-12 py-5 text-lg font-light hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Fale comigo agora
        </button>
      </div>
    </section>
  );
}
