import { useState } from 'react';
import { Mail, Phone, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-4">
          Contato
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Vamos criar algo especial juntos
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6 text-gray-900">
                Entre em contato
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Estou sempre disponível para conversar sobre novos projetos,
                ensaios fotográficos e oportunidades criativas. Envie sua mensagem
                e retornarei o mais breve possível.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:contato@vitoriaresinente.com"
                className="flex items-center gap-4 text-gray-700 hover:text-black transition-colors"
              >
                <Mail size={24} strokeWidth={1.5} />
                <span>contato@vitoriaresinente.com</span>
              </a>

              <a
                href="tel:+5511999999999"
                className="flex items-center gap-4 text-gray-700 hover:text-black transition-colors"
              >
                <Phone size={24} strokeWidth={1.5} />
                <span>(11) 99999-9999</span>
              </a>

              <a
                href="https://instagram.com/vitoriaresinente"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-black transition-colors"
              >
                <Instagram size={24} strokeWidth={1.5} />
                <span>@vitoriaresinente</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-gray-400"
              >
                {submitted ? (
                  'Mensagem enviada!'
                ) : (
                  <>
                    Enviar mensagem
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
