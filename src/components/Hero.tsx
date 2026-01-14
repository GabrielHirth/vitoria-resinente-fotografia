import { Camera } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Photography"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center text-white animate-fade-in">
          <div className="flex justify-center mb-6">
            <Camera size={48} strokeWidth={1.5} className="animate-float" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Vitória Resinente
          </h1>

          <p className="text-xl md:text-3xl font-light mb-4 text-gray-200">
            Fotografia que eterniza momentos e sentimentos
          </p>

          <p className="text-base md:text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Transformando instantes em memórias através de um olhar artístico e sensível
          </p>

          <button
            onClick={scrollToContact}
            className="bg-white text-black px-10 py-4 text-lg font-light hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Agendar Ensaio
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
