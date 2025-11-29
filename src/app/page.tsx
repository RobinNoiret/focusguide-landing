"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar, Target, CheckSquare, ArrowRight, Sparkles, Timer, Plus, Users, ChevronDown } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [profession, setProfession] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleCompleteSignup = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, firstName, profession }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.error || "Échec de l'inscription");
      }

      console.log("Email envoyé avec succès à:", email);
      setShowPopup(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setFirstName("");
        setProfession("");
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      setError(error instanceof Error ? error.message : "Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--white)] text-[var(--black)]">
      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setShowPopup(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[var(--black)]/20 backdrop-blur-sm animate-fade-in" />

          {/* Popup Content */}
          <div
            className="relative bg-[var(--white)] rounded-3xl border-2 border-[var(--black)]/10 shadow-2xl max-w-md w-full p-8 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Encore une petite chose...</h3>
              <p className="text-[var(--black)]/60">Pour mieux personnaliser votre expérience</p>
            </div>

            <div className="space-y-4">
              {/* Prénom */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[var(--black)]/70 mb-2">
                  Prénom
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Votre prénom"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--white)] border-2 border-[var(--black)]/20 focus:border-[var(--green1)] hover:bg-[var(--green1)]/5 focus:outline-none focus:ring-2 focus:ring-[var(--green1)]/20 transition-all"
                />
              </div>

              {/* Profession */}
              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-[var(--black)]/70 mb-2">
                  Vous êtes...
                </label>
                <select
                  id="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--white)] border-2 border-[var(--black)]/20 focus:border-[var(--green1)] hover:bg-[var(--green1)]/5 focus:outline-none focus:ring-2 focus:ring-[var(--green1)]/20 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23262626' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '12px'
                  }}
                >
                  <option value="" disabled>Sélectionnez votre profil</option>
                  <option value="student">Étudiant(e)</option>
                  <option value="freelance">Freelance</option>
                  <option value="employee">Salarié(e)</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              {/* Message d'erreur */}
              {error && (
                <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200">
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowPopup(false);
                    setError("");
                  }}
                  disabled={isLoading}
                  className="flex-1 px-6 py-3 rounded-xl bg-[var(--black)]/5 text-[var(--black)]/70 font-medium hover:bg-[var(--black)]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleCompleteSignup}
                  disabled={!firstName || !profession || isLoading}
                  className="flex-1 px-6 py-3 rounded-xl bg-[var(--green1)] text-[var(--black)] font-semibold hover:bg-[var(--green2)] transition-all border-2 border-[var(--green-border)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[var(--black)]/20 border-t-[var(--black)] rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Confirmer
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--white)]/80 backdrop-blur-md border-b border-[var(--black)]/10">
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
            <span className="text-xs text-[var(--black)]/70 group-hover:text-[var(--black)] transition-colors font-medium">
              En développement
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-0">
        <div className="max-w-6xl mx-auto px-6 text-center pt-20 pb-16">
          {/* Main Title */}
          <div className="mt-20">
            <h1 className="h1-title text-6xl md:text-8xl font-bold mb-6 leading-tight">
              La productivité
              <br />
              réinventée
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-[var(--black)]/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            Gérez votre agenda, vos projets et vos tâches dans un seul outil.
            <br />
            <span className="text-[var(--black)]/80 font-medium">
              Simple. Puissant. Fait pour vous.
            </span>
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-2xl bg-[var(--white)] border-2 border-[var(--black)]/20 focus:border-[var(--green1)] hover:bg-[var(--green1)]/5 focus:outline-none focus:ring-2 focus:ring-[var(--green1)]/20 transition-all"
              />
              <button
                type="submit"
                className="group px-8 py-4 rounded-2xl bg-[var(--green1)] text-[var(--black)] font-semibold hover:bg-[var(--green2)] transition-colors border-2 border-[var(--green-border)] flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  "✓ Inscrit !"
                ) : (
                  <>
                    S&apos;inscrire
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-[var(--black)]/40 mt-3">
              Soyez informé de la sortie de l&apos;alpha
            </p>
          </form>
        </div>

        {/* Hero Image - Large preview */}
        <div className="max-w-7xl mx-auto px-6 relative -mb-32 z-10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[var(--black)]/10 shadow-2xl">
            <Image
              src="/focusguide-interface.png"
              alt="Interface FocusGuide"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative pt-64 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green1)]/20 border border-[var(--green1)]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[var(--black)]" />
              <span className="text-sm font-medium">Modules</span>
            </div>
            <h2 className="h1-title text-4xl md:text-6xl font-bold mb-4">
              Un écosystème complet
            </h2>
            <p className="text-xl text-[var(--black)]/60 max-w-3xl mx-auto">
              Quatre modules principaux qui travaillent ensemble pour optimiser votre productivité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Calendar,
                title: "Agenda",
                description: "Visualisez et organisez votre temps avec clarté.",
                color: "green1",
              },
              {
                icon: CheckSquare,
                title: "Tasks",
                description: "Gérez vos tâches efficacement avec des to-do personnalisables.",
                color: "blue1",
              },
              {
                icon: Target,
                title: "Projets",
                description: "Suivez vos projets avec des tableaux Kanban, des vues personnalisables et des indicateurs de progression.",
                color: "green2",
              },
              {
                icon: Timer,
                title: "Pomodoro",
                description: "Maximisez votre concentration avec des sessions de travail personnalisées et des statistiques détaillées.",
                color: "green1",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-[var(--white)] border-2 border-[var(--black)]/10 hover:border-[var(--green1)] transition-all hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--green1)]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--green1)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--green1)]/30 group-hover:scale-110 transition-all">
                    <feature.icon className="w-8 h-8 text-[var(--black)]" strokeWidth={2} />
                  </div>
                  <h3 className="h1-title text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-[var(--black)]/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Et plus à venir */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--black)]/5 border-2 border-dashed border-[var(--black)]/20">
              <Plus className="w-5 h-5 text-[var(--black)]/40" />
              <span className="text-[var(--black)]/60 font-medium">Et bien d&apos;autres modules à venir...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green1)]/20 border border-[var(--green1)]/30 mb-6">
              <Users className="w-4 h-4 text-[var(--black)]" />
              <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>L&apos;équipe</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Rencontrez les créateurs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Louis Drouhin",
                role: "Co-créateur",
                image: "/picture-louis.jpg",
                portfolio: "https://beta-dev.me/",
              },
              {
                name: "Robin Noiret",
                role: "Co-créateur",
                image: "/picture-robin.png",
                portfolio: "https://robinnoiret.com/",
              },
            ].map((creator, index) => (
              <a
                key={index}
                href={creator.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--white)] to-[var(--black)]/[0.02] border-2 border-[var(--black)]/10 hover:border-[var(--green1)] transition-all hover:shadow-2xl">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[var(--black)]/5">
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--white)] via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Info */}
                  <div className="p-8 text-center">
                    <h3 className="text-3xl font-bold mb-2 text-[var(--black)]" style={{ fontFamily: 'Inter, sans-serif' }}>{creator.name}</h3>
                    <p className="text-lg font-medium text-[var(--black)]/60" style={{ fontFamily: 'Inter, sans-serif' }}>{creator.role}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green1)]/20 border border-[var(--green1)]/30 mb-6">
              <ChevronDown className="w-4 h-4 text-[var(--black)]" />
              <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>FAQ</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Questions fréquentes
            </h2>
            <p className="text-xl font-medium text-[var(--black)]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tout ce que vous devez savoir sur FocusGuide
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Quand FocusGuide sera-t-il disponible ?",
                answer: "Nous travaillons actuellement sur la version alpha de FocusGuide. Inscrivez-vous à notre liste d'attente pour être informé dès le lancement !",
              },
              {
                question: "FocusGuide sera-t-il gratuit ?",
                answer: "Nous prévoyons une version gratuite avec les fonctionnalités essentielles, ainsi qu'une version premium avec des fonctionnalités avancées pour les utilisateurs ayant des besoins plus poussés.",
              },
              {
                question: "Sur quelles plateformes FocusGuide sera-t-il disponible ?",
                answer: "FocusGuide sera disponible en tant qu'application web accessible depuis n'importe quel navigateur. Une application mobile et une extension web sont également prévues pour le futur.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-[var(--white)] border-2 border-[var(--black)]/10 hover:border-[var(--green1)] transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-all"
                >
                  <h3 className="text-lg md:text-xl font-semibold pr-4" style={{ fontFamily: 'Inter, sans-serif' }}>{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--black)] transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-base font-normal text-[var(--black)]/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Prêt à reprendre le contrôle ?
            </h2>
            <p className="text-xl font-medium text-[var(--black)]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              Inscrivez-vous pour être informés de la sortie de l&apos;alpha
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-2xl bg-[var(--white)] border-2 border-[var(--black)]/20 focus:border-[var(--green1)] hover:bg-[var(--green1)]/5 focus:outline-none focus:ring-2 focus:ring-[var(--green1)]/20 transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button
                type="submit"
                className="group px-8 py-4 rounded-2xl bg-[var(--green1)] text-[var(--black)] font-semibold hover:bg-[var(--green2)] transition-colors border-2 border-[var(--green-border)] flex items-center justify-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {isSubmitted ? (
                  "✓ Inscrit !"
                ) : (
                  <>
                    S&apos;inscrire
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
            <p className="text-sm font-medium text-[var(--black)]/40 mt-4 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              Rejoignez la liste d&apos;attente
            </p>
          </form>
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
