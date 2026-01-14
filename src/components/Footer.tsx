import { Camera, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera size={28} strokeWidth={1.5} />
              <span className="text-xl font-light">Vitória Resinente</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fotografia artística que eterniza momentos e sentimentos
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">NAVEGAÇÃO</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">REDES SOCIAIS</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vitoriaresinente"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:contato@vitoriaresinente.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Vitória Resinente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
