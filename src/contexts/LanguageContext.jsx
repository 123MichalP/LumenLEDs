import { createContext, useState, ReactNode } from 'react';

export const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      products: 'Products',
      features: 'Features',
      solutions: 'Solutions',
      contact: 'Contact',
      shopNow: 'Shop Now',
    },
    hero: {
      tagline: 'Illuminate Your Future',
      title: 'Designer LED Lighting',
      titleHighlight: 'That Transforms Spaces',
      description:
        'Premium ambient lighting solutions for modern homes, smart living spaces, and gaming setups. Make every room extraordinary.',
      explore: 'Explore Collection',
      viewDemo: 'View Demo',
    },
    products: {
      title: 'Our Collection',
      subtitle: 'Discover the perfect lighting for every space',
      strips: {
        name: 'Ambient Strips',
        description:
          'Flexible LED strips that contour to any surface. Perfect for creating stunning backlighting effects.',
      },
      panels: {
        name: 'Smart Panels',
        description:
          'Modular smart panels with millions of colors. Sync with music, games, and smart home systems.',
      },
      lamps: {
        name: 'Designer Lamps',
        description:
          'Statement pieces that combine artistic design with cutting-edge LED technology.',
      },
    },
    solutions: {
      title: 'Perfect For Everyone',
      subtitle: 'Tailored lighting solutions for your lifestyle',
      homeowners: {
        title: 'New Homeowners',
        description:
          'Transform your new space into a modern sanctuary with elegant ambient lighting that adds character and warmth.',
      },
      smart: {
        title: 'Smart Home Enthusiasts',
        description:
          'Seamlessly integrate with your smart home ecosystem. Voice control, automation, and app-based customization.',
      },
      gamers: {
        title: 'Gamers',
        description:
          'Elevate your setup with reactive lighting that syncs with your games. Create the ultimate immersive experience.',
      },
    },
    features: {
      title: 'Living in the',
      titleHighlight: 'Future of Lighting',
      description:
        'Our LED solutions combine cutting-edge technology with stunning design to create environments that inspire and energize.',
      efficient: {
        title: 'Energy Efficient',
        description:
          'Save up to 80% on energy costs while enjoying brilliant illumination.',
      },
      app: {
        title: 'App Controlled',
        description:
          'Control brightness, color, and effects from your smartphone or tablet.',
      },
      customization: {
        title: 'Endless Customization',
        description:
          '16 million colors and dynamic effects to match any mood or occasion.',
      },
    },
    contact: {
      title: 'Ready to Transform Your Space?',
      description: 'Join thousands of customers who have elevated their homes with LumenLEDs',
      getStarted: 'Get Started Today',
      contactSales: 'Contact Sales',
    },
    footer: {
      copyright: '© 2026 LumenLEDs. Illuminating the future.',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
    },
    picker: {
      description: 'Choose your perfect LED color. See the preview update in real-time.',
    },
  },
  pl: {
    nav: {
      products: 'Produkty',
      features: 'Funkcje',
      solutions: 'Rozwiązania',
      contact: 'Kontakt',
      shopNow: 'Kup teraz',
    },
    hero: {
      tagline: 'Oświetl swoją przyszłość',
      title: 'Projektanckie oświetlenie LED',
      titleHighlight: 'Które odmienia przestrzenie',
      description:
        'Nowoczesne rozwiązania oświetlenia dla domów, inteligentnych przestrzeni życiowych i setup\'ów gamingowych. Spraw, by każdy pokój stał się wyjątkowy.',
      explore: 'Odkryj kolekcję',
      viewDemo: 'Obejrzyj demo',
    },
    products: {
      title: 'Nasza kolekcja',
      subtitle: 'Odkryj idealne oświetlenie dla każdej przestrzeni',
      strips: {
        name: 'Paski otoczenia',
        description:
          'Elastyczne paski LED, które dopasowują się do dowolnej powierzchni. Idealne do tworzenia oszałamiających efektów podświetlenia.',
      },
      panels: {
        name: 'Panele inteligentne',
        description:
          'Modularne panele inteligentne z milionami kolorów. Synchronizuj z muzyką, grami i systemami smart home.',
      },
      lamps: {
        name: 'Lampy designerskie',
        description:
          'Wyraziste elementy wystroju, które łączą artystyczne wzornictwo z nowoczesną technologią LED.',
      },
    },
    solutions: {
      title: 'Idealne dla wszystkich',
      subtitle: 'Dostosowane rozwiązania oświetlenia do twojego stylu życia',
      homeowners: {
        title: 'Nowi właściciele domów',
        description:
          'Przekształć swoją nową przestrzeń w nowoczesne sanktuarium za pomocą eleganckiego oświetlenia otoczenia, które dodaje charakteru i ciepła.',
      },
      smart: {
        title: 'Entuzjaści inteligentnych domów',
        description:
          'Bezproblemowo integruj się z ekosystemem inteligentnego domu. Sterowanie głosem, automatyzacja i dostosowywanie za pomocą aplikacji.',
      },
      gamers: {
        title: 'Gracze',
        description:
          'Zanurz się w swoim setupie za pomocą reaktywnego oświetlenia, które synchronizuje się z Twoimi grami. Stwórz ostateczne doświadczenie immersyjne.',
      },
    },
    features: {
      title: 'Żyj w',
      titleHighlight: 'przyszłości oświetlenia',
      description:
        'Nasze rozwiązania LED łączą zaawansowaną technologię z oszałamiającym designem, aby stworzyć środowiska, które inspirują i pobudzaja.',
      efficient: {
        title: 'Energooszczędne',
        description:
          'Zaoszczędź do 80% na kosztach energii, ciesząc się wspaniałym oświetleniem.',
      },
      app: {
        title: 'Sterowanie aplikacją',
        description:
          'Steruj jasnością, kolorem i efektami ze smartfonu lub tabletu.',
      },
      customization: {
        title: 'Nieskończone dostosowanie',
        description:
          '16 milionów kolorów i efektów dynamicznych, aby dopasować dowolny nastrój lub okazję.',
      },
    },
    contact: {
      title: 'Gotów do transformacji swojej przestrzeni?',
      description: 'Dołącz do tysięcy klientów, którzy oświetlili swoje domy za pomocą LumenLEDs',
      getStarted: 'Zacznij już dziś',
      contactSales: 'Kontakt z działem sprzedaży',
    },
    footer: {
      copyright: '© 2026 LumenLEDs. Oświetlanie przyszłości.',
      privacy: 'Prywatność',
      terms: 'Warunki',
      support: 'Wsparcie',
    },
    picker: {
      description: 'Wybierz idealny kolor LED. Zobacz podgląd aktualizowany w czasie rzeczywistym.',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === 'en' ? 'pl' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}
