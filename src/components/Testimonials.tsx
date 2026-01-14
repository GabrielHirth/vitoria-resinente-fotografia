import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Vitória tem um olhar único e sensível. As fotos do nosso casamento superaram todas as expectativas!",
    author: "Ana & Carlos",
    role: "Casamento 2024"
  },
  {
    text: "Profissional incrível! Me senti completamente confortável durante o ensaio e o resultado foi simplesmente perfeito.",
    author: "Juliana Santos",
    role: "Ensaio Pessoal"
  },
  {
    text: "A Vitória captou a essência da nossa família de forma autêntica e emocionante. Fotos que vamos guardar para sempre.",
    author: "Família Oliveira",
    role: "Ensaio Família"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-4">
          Depoimentos
        </h2>
        <p className="text-center text-gray-600 mb-16">
          O que meus clientes dizem
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote size={32} className="text-gray-300 mb-4" strokeWidth={1.5} />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
