import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Heart, 
  Leaf, 
  ShieldCheck, 
  Users,
  BrainCircuit,
  Euro
} from 'lucide-react';
import AITribute from './components/AITribute';

// Definición de tipos
type Service = {
  title: string;
  price: string;
  desc: string;
  highlight?: boolean;
};

type TeamMember = {
  name: string;
  role: string;
  img: string;
};

// Datos extraídos del PDF
const services: Service[] = [
  {
    title: "Servicio Básico de Sepelio",
    price: "1.800€",
    desc: "Incluye féretro estándar, preparación del difunto, velatorio en sala común y ceremonia básica. Descuento del 15% disponible.",
  },
  {
    title: "Servicio de Cremación",
    price: "1.500€",
    desc: "Incluye urna básica, ceremonia íntima y gestión completa de cenizas. Una opción digna y respetuosa.",
    highlight: true,
  },
  {
    title: "Velatorio Privado",
    price: "450€",
    desc: "Sala privada con servicio de café y refrigerios durante 24 horas. Privacidad total para la familia.",
  },
  {
    title: "Traslados",
    price: "Desde 250€",
    desc: "Transporte local y nacional. Gestión profesional del traslado dentro de Sevilla o cualquier punto de España.",
  }
];

const team: TeamMember[] = [
  { name: "Alaya", role: "CEO", img: "https://picsum.photos/200/200?random=1" },
  { name: "Pablo Avecilla", role: "Servicios Funerarios", img: "https://picsum.photos/200/200?random=2" },
  { name: "Abrahán García", role: "Transporte Funerario", img: "https://picsum.photos/200/200?random=3" },
  { name: "Juan Parejo", role: "Admin. e Informática", img: "https://picsum.photos/200/200?random=4" },
  { name: "Antonio M. Oliver", role: "Servicios Funerarios", img: "https://picsum.photos/200/200?random=5" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* Top Bar - Contacto 24/7 */}
      <div className="bg-brand-900 text-white py-2 px-4 text-xs md:text-sm font-medium">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Atención 24 Horas</span>
            <span className="hidden md:flex items-center gap-1"><MapPin className="w-4 h-4" /> Los Palacios y Villafranca, Sevilla</span>
          </div>
          <a href="tel:+34900000000" className="flex items-center gap-1 hover:text-brand-gold transition">
            <Phone className="w-4 h-4" /> 900 000 000
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
             {/* Logo conceptual basado en la descripción: Carruaje/Caballos */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 rounded-full flex items-center justify-center text-brand-gold">
               <img src="https://picsum.photos/100/100" alt="Logo" className="w-full h-full object-cover rounded-full opacity-80" />
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-brand-900 leading-none">Último Paseíto</h1>
              <p className="text-xs text-gray-500 tracking-wider hidden md:block">FUNERARIA</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <button onClick={() => scrollTo('inicio')} className="hover:text-brand-800 transition">Inicio</button>
            <button onClick={() => scrollTo('servicios')} className="hover:text-brand-800 transition">Servicios</button>
            <button onClick={() => scrollTo('innovacion')} className="hover:text-brand-800 transition">Innovación & IA</button>
            <button onClick={() => scrollTo('nosotros')} className="hover:text-brand-800 transition">Nosotros</button>
            <button onClick={() => scrollTo('contacto')} className="px-5 py-2 bg-brand-800 text-white rounded-full hover:bg-brand-900 transition shadow-md">
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brand-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="flex flex-col p-4 gap-4 text-center">
              <button onClick={() => scrollTo('inicio')} className="py-2 hover:bg-gray-50 rounded">Inicio</button>
              <button onClick={() => scrollTo('servicios')} className="py-2 hover:bg-gray-50 rounded">Servicios</button>
              <button onClick={() => scrollTo('innovacion')} className="py-2 hover:bg-gray-50 rounded">Innovación</button>
              <button onClick={() => scrollTo('nosotros')} className="py-2 hover:bg-gray-50 rounded">Nosotros</button>
              <button onClick={() => scrollTo('contacto')} className="py-3 bg-brand-800 text-white rounded font-bold">Contactar</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[80vh] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Cielo sereno" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-white/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mt-10">
          <div className="mb-6 inline-block p-3 bg-white/20 backdrop-blur rounded-full border border-white/40">
            <span className="text-brand-900 font-semibold px-4 py-1">Honor y Serenidad</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-brand-900 mb-6 leading-tight drop-shadow-sm">
            Porque cada despedida merece un último paseo.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 font-light max-w-2xl mx-auto">
            Combinamos la tradición, el respeto y la innovación para ofrecer un servicio humano en los momentos más difíciles.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo('contacto')} className="px-8 py-4 bg-brand-800 text-white rounded-lg font-semibold hover:bg-brand-900 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Atención Inmediata
            </button>
            <button onClick={() => scrollTo('servicios')} className="px-8 py-4 bg-white text-brand-900 border border-brand-200 rounded-lg font-semibold hover:bg-gray-50 transition shadow-md">
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition (Why Us?) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-2xl bg-brand-50/50 hover:bg-brand-50 transition duration-300">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-800">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trato Humano</h3>
              <p className="text-gray-600 leading-relaxed">
                Priorizamos la empatía y el apoyo emocional. No somos una empresa fría; somos compañeros en el duelo.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-brand-50/50 hover:bg-brand-50 transition duration-300">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-800">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparencia Total</h3>
              <p className="text-gray-600 leading-relaxed">
                Precios claros y cerrados desde el primer momento. Sin sorpresas inesperadas ni costes ocultos.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-brand-50/50 hover:bg-brand-50 transition duration-300">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-800">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovación con IA</h3>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos Inteligencia Artificial para crear recuerdos digitales únicos y vídeos conmemorativos gratuitos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section (AI Feature) */}
      <section id="innovacion" className="py-20 bg-gradient-to-br from-brand-900 to-slate-800 text-white overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800 border border-brand-700 text-brand-gold text-sm font-semibold mb-6">
                <SparklesIcon className="w-4 h-4" /> Tecnología al servicio del recuerdo
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Recuerdos Eternos con Inteligencia Artificial
              </h2>
              <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                En "Último Paseíto", creemos que la tecnología puede ayudarnos a sanar. Ofrecemos gratuitamente la creación de vídeos realistas y textos conmemorativos utilizando IA avanzada para revivir momentos felices.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-gold">✓</div>
                  <span>Restauración digital de fotografías antiguas.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-gold">✓</div>
                  <span>Generación de obituarios y discursos personalizados.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-gold">✓</div>
                  <span>100% Gratuito y opcional para nuestros clientes.</span>
                </li>
              </ul>
            </div>
            
            {/* Interactive Component */}
            <div className="lg:w-1/2 w-full">
               <AITribute />
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600">
              Tarifas claras adaptadas a las necesidades de cada familia. Ofrecemos servicios ecológicos y personalizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 p-6 flex flex-col border ${service.highlight ? 'border-brand-500 ring-1 ring-brand-500 relative' : 'border-gray-100'}`}
              >
                {service.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Más Solicitado
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-3xl font-serif font-bold text-brand-800 mb-4">{service.price}</div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{service.desc}</p>
                <button className={`w-full py-2 rounded-lg font-medium transition ${service.highlight ? 'bg-brand-800 text-white hover:bg-brand-900' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                  Solicitar Info
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-700 rounded-full mt-1">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Compromiso Ecológico</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Disponemos de ataúdes biodegradables y urnas ecológicas. Fomentamos prácticas respetuosas con el medio ambiente en cada despedida.
                </p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 text-purple-700 rounded-full mt-1">
                <Euro className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Ayudas y Financiación</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Gestionamos todo tipo de ayudas y ofrecemos asesoramiento financiero transparente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="nosotros" className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos Pablo, Abrahán, Juan, Antonio y Alaya. Un equipo joven, cercano y profesional comprometido con acompañarte.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="w-48 text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-brand-200 transition">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
                <p className="text-brand-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-white shadow-xl">
            {/* Form */}
            <div className="p-8 md:p-12">
              <h2 className="font-serif text-3xl font-bold text-brand-900 mb-6">Estamos aquí para ayudarte</h2>
              <p className="text-gray-600 mb-8">
                Disponibles las 24 horas del día. Llámanos o escríbenos para cualquier consulta urgente o planificación.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre completo" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
                  <input type="tel" placeholder="Teléfono" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
                <textarea rows={4} placeholder="¿En qué podemos ayudarte?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"></textarea>
                <button type="button" className="w-full py-4 bg-brand-800 text-white font-bold rounded-lg hover:bg-brand-900 transition flex items-center justify-center gap-2">
                  Enviar Mensaje <Users className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-8 flex items-center gap-4 text-brand-800 bg-brand-50 p-4 rounded-lg">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="font-bold text-lg">Urgencias 24h</p>
                  <p className="text-sm">900 000 000</p>
                </div>
              </div>
            </div>

            {/* Map Info */}
            <div className="bg-brand-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
               {/* Decorative background map pattern */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/1024px-Google_Maps_Logo_2020.svg.png')] bg-cover grayscale bg-center pointer-events-none"></div>
               
               <div>
                  <h3 className="font-serif text-2xl font-bold mb-6">Ubicación</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-brand-gold mt-1" />
                      <div>
                        <p className="font-bold text-lg">Los Palacios y Villafranca</p>
                        <p className="text-brand-100">Calle Francisca y Bernarda, 41720<br/>Sevilla, España</p>
                        <a href="https://maps.app.goo.gl/MBNzx7aJtoFr3ARP8" target="_blank" rel="noreferrer" className="text-brand-gold hover:underline text-sm mt-2 inline-block">
                          Ver en Google Maps &rarr;
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-brand-gold mt-1" />
                      <div>
                        <p className="font-bold text-lg">Horario</p>
                        <p className="text-brand-100">Atención telefónica: 24 Horas<br/>Oficina: 9:00 - 20:00</p>
                      </div>
                    </div>
                  </div>
               </div>

               <div className="mt-12">
                 <p className="italic text-brand-200 text-sm">
                   "Porque cada despedida merece un último paseo con honor y serenidad."
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-sm">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-4">Último Paseíto</h4>
            <p className="mb-4">Funeraria innovadora en Sevilla.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Sepelio</a></li>
              <li><a href="#" className="hover:text-white">Cremación</a></li>
              <li><a href="#" className="hover:text-white">Traslados</a></li>
              <li><a href="#" className="hover:text-white">Homenaje IA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <p>Calle Francisca y Bernarda, 41720</p>
            <p>Los Palacios y Villafranca, Sevilla</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Funeraria Último Paseíto S.L. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

// Icon wrapper helper
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 5H5"/><path d="M19 15v4"/><path d="M15 17h4"/></svg>
);

export default App;