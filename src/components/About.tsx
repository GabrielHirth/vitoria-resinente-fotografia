export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Sobre Vitória
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sou Vitória Resinente, fotógrafa especializada em capturar a essência
              e a emoção de cada momento. Meu trabalho vai além do registro visual -
              busco contar histórias através das imagens.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Com anos de experiência e uma abordagem artística refinada, crio
              fotografias que eternizam sentimentos e celebram a beleza natural
              de cada pessoa e instante.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Meu estilo é marcado pela sensibilidade, atenção aos detalhes e
              pela busca constante pela imagem perfeita que traduza a essência
              do momento.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vitória Resinente"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gray-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
