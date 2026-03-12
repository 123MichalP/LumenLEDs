import { useContext } from "react";
import {
  Lightbulb,
  Zap,
  Home,
  Gamepad2,
  Smartphone,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Aurora from "/src/components/Aurora.jsx";
import ColorPicker from "@/components/ColorPicker";
import { LanguageContext, LanguageProvider } from "@/contexts/LanguageContext";

function AppContent() {
  const { language, toggleLanguage, t } = useContext(LanguageContext);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                LumenLEDs
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#products"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t.nav.products}
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t.nav.features}
              </a>
              <a
                href="#solutions"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t.nav.solutions}
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t.nav.contact}
              </a>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              {t.nav.shopNow}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-full font-medium text-gray-300 hover:text-cyan-400 transition-colors hover:translate-y-0"
            >
              {language === "en" ? "PL" : "EN"}
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-scree">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 z-0 pt-1 pb-1">
          <Aurora
            colorStops={["#811197", "#0d97c5"]}
            amplitude={1}
            blend={0.5}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto bg-gray-950/40 backdrop-blur-sm rounded-3xl p-8 mt-8">
            <div className="inline-flex items-center space-x-2 bg-cyan-950/30 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <span className="text-sm text-cyan-400">{t.hero.tagline}</span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p
              className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.2)" }}
            >
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2">
                <span>{t.hero.explore}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 hover:border-cyan-500/50 transition-all">
                {t.hero.viewDemo}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.products.title}
            </h2>
            <p className="text-xl text-gray-400">{t.products.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {t.products.strips.name}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t.products.strips.description}
              </p>
              <div className="flex items-center text-cyan-400 group-hover:gap-2 transition-all cursor-pointer">
                <span className="font-medium">{t.nav.shopNow}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {t.products.panels.name}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t.products.panels.description}
              </p>
              <div className="flex items-center text-cyan-400 group-hover:gap-2 transition-all cursor-pointer">
                <span className="font-medium">{t.nav.shopNow}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {t.products.lamps.name}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t.products.lamps.description}
              </p>
              <div className="flex items-center text-cyan-400 group-hover:gap-2 transition-all cursor-pointer">
                <span className="font-medium">{t.nav.shopNow}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.solutions.title}
            </h2>
            <p className="text-xl text-gray-400">{t.solutions.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all">
              <Home className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {t.solutions.homeowners.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t.solutions.homeowners.description}
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all">
              <Smartphone className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {t.solutions.smart.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t.solutions.smart.description}
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all">
              <Gamepad2 className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {t.solutions.gamers.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t.solutions.gamers.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.features.title}
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t.features.titleHighlight}
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {t.features.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.features.efficient.title}
                    </h4>
                    <p className="text-gray-400">
                      {t.features.efficient.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.features.app.title}
                    </h4>
                    <p className="text-gray-400">
                      {t.features.app.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t.features.customization.title}
                    </h4>
                    <p className="text-gray-400">
                      {t.features.customization.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl border border-cyan-500/20 flex items-center justify-center">
                <ColorPicker />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-400 mb-12">{t.contact.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all">
              {t.contact.getStarted}
            </button>
            <button className="border border-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 hover:border-cyan-500/50 transition-all">
              {t.contact.contactSales}
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                LumenLEDs
              </span>
            </div>

            <div className="text-gray-400 text-sm">{t.footer.copyright}</div>

            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                {t.footer.terms}
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                {t.footer.support}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
