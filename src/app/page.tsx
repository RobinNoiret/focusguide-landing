"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar, Target, CheckSquare } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Intégrer avec votre backend
    console.log("Email soumis:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[var(--white)] text-[var(--black)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--white)]/95 backdrop-blur-sm border-b border-[var(--black)]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/FocusGuide.svg"
              alt="FocusGuide"
              width={160}
              height={28}
              priority
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--black)]/5 border border-[var(--black)]/10 hover:bg-[var(--green1)]/20 hover:border-[var(--green1)]/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green1)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--green1)]"></span>
            </span>
            <span className="text-xs text-[var(--black)]/70 group-hover:text-[var(--black)] transition-colors font-medium">En développement</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Main Title */}
          <h1 className="h1-title text-6xl md:text-8xl font-bold mb-6 leading-tight fade-in mt-45">
            La productivité
            <br />
            réinventée
          </h1>

          <p className="text-xl md:text-2xl text-[var(--black)]/60 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-delay">
            Gérez votre agenda, vos projets et vos tâches dans un seul outil.
            <br />
            Simple. Puissant. Fait pour vous.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16 fade-in-delay-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full bg-[var(--white)] border border-[var(--black)]/20 focus:border-[var(--green1)] focus:outline-none focus:ring-2 focus:ring-[var(--green1)]/20 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-[var(--green1)] text-[var(--black)] font-semibold hover:bg-[var(--green2)] hover:scale-105 hover:shadow-lg transition-all border-2 border-[var(--green-border)]"
              >
                {isSubmitted ? "✓ Inscrit !" : "S'inscrire"}
              </button>
            </div>
            <p className="text-sm text-[var(--black)]/40 mt-3">
              Soyez informé de la sortie de l'alpha
            </p>
          </form>

          {/* Hero Image Placeholder */}
          <div className="relative mx-auto max-w-5xl fade-in-delay-3">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--black)]/10 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--black)]/5 to-[var(--black)]/10 flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src="/logo/icon_black.svg"
                    alt="FocusGuide Preview"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 opacity-20"
                  />
                  <p className="text-lg text-[var(--black)]/40">
                    Interface à venir...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 bg-[var(--black)]/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="h1-title text-4xl md:text-6xl font-bold text-center mb-20">
            Tout ce dont vous avez besoin,
            <br />
            rien de plus
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative p-8 rounded-2xl bg-[var(--white)] border border-[var(--black)]/10 hover:border-[var(--green1)] transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[var(--green1)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--green1)]/30 transition-all">
                <Calendar className="w-6 h-6 text-[var(--black)]" strokeWidth={2} />
              </div>
              <h3 className="h1-title text-2xl font-bold mb-4">
                Agenda intelligent
              </h3>
              <p className="text-[var(--black)]/60 leading-relaxed">
                Visualisez et organisez votre temps avec clarté. Synchronisation automatique avec vos calendriers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 rounded-2xl bg-[var(--white)] border border-[var(--black)]/10 hover:border-[var(--green1)] transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[var(--green1)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--green1)]/30 transition-all">
                <Target className="w-6 h-6 text-[var(--black)]" strokeWidth={2} />
              </div>
              <h3 className="h1-title text-2xl font-bold mb-4">
                Gestion de projets
              </h3>
              <p className="text-[var(--black)]/60 leading-relaxed">
                Suivez l'avancement de vos projets avec des vues personnalisables et des indicateurs clairs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 rounded-2xl bg-[var(--white)] border border-[var(--black)]/10 hover:border-[var(--green1)] transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[var(--green1)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--green1)]/30 transition-all">
                <CheckSquare className="w-6 h-6 text-[var(--black)]" strokeWidth={2} />
              </div>
              <h3 className="h1-title text-2xl font-bold mb-4">
                To-do optimisées
              </h3>
              <p className="text-[var(--black)]/60 leading-relaxed">
                Des listes de tâches qui s'adaptent à votre workflow. Priorisation automatique et rappels intelligents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 md:p-20 rounded-3xl bg-[var(--green1)]/10 border border-[var(--green1)]/30">
            <h2 className="h1-title text-4xl md:text-6xl font-bold mb-6">
              Prêt à reprendre le contrôle ?
            </h2>
            <p className="text-xl text-[var(--black)]/60 mb-10">
              Inscrivez-vous pour être informé de la sortie de l'alpha
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-[var(--white)] border border-[var(--black)]/20 focus:border-[var(--green1)] focus:outline-none focus:ring-2 focus:ring-[var(--green1)]/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-[var(--green1)] text-[var(--black)] font-semibold hover:bg-[var(--green2)] hover:scale-105 hover:shadow-lg transition-all border-2 border-[var(--green-border)]"
                >
                  {isSubmitted ? "✓ Inscrit !" : "S'inscrire"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[var(--black)]/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/FocusGuide.svg"
              alt="FocusGuide"
              width={120}
              height={20}
            />
          </div>
          <p className="text-[var(--black)]/40 text-sm">
            © 2025 FocusGuide. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
