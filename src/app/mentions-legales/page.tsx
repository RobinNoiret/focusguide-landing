"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[var(--white)] text-[var(--black)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--white)]/80 backdrop-blur-md border-b border-[var(--black)]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/FocusGuide.svg"
              alt="FocusGuide"
              width={160}
              height={28}
              priority
            />
          </Link>
          <Link
            href="/"
            className="p-2 rounded-full hover:bg-[var(--black)]/5 transition-colors"
            aria-label="Retour à l'accueil"
          >
            <X className="w-6 h-6 text-[var(--black)]" strokeWidth={2} />
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions Légales</h1>

          <div className="space-y-8 text-[var(--black)]/80 leading-relaxed">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">1. Éditeur du site</h2>
              <p className="mb-2">Le site FocusGuide (focusguide.fr) est édité par :</p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong>Louis DROUHIN</strong></li>
                <li>Mâcon, France</li>
                <li><strong>Robin NOIRET</strong></li>
                <li>Lyon, France</li>
              </ul>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">2. Directeur de publication</h2>
              <p>Le directeur de la publication du site est :</p>
              <p className="ml-4"><strong>Robin NOIRET</strong></p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">3. Contact</h2>
              <p>Pour toute question ou demande concernant le site, vous pouvez nous contacter à l'adresse suivante :</p>
              <p className="ml-4">
                <a href="mailto:louis.drouhin@proton.me" className="text-[var(--black)] font-semibold underline decoration-[var(--black)] decoration-2 underline-offset-4 hover:decoration-[var(--green1)] transition-all">
                  louis.drouhin@proton.me
                </a>
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">4. Hébergement</h2>
              <p className="mb-2">Le site est hébergé par :</p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong>Louis DROUHIN</strong></li>
                <li>Mâcon, France</li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">5. Propriété intellectuelle</h2>
              <p className="mb-4">
                L'ensemble du contenu présent sur le site FocusGuide (textes, images, graphismes, logo, icônes, etc.)
                est la propriété exclusive de Louis DROUHIN et Robin NOIRET, sauf mention contraire.
              </p>
              <p className="mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces
                différents éléments est strictement interdite sans l'accord exprès par écrit des éditeurs.
              </p>
              <p>
                Toute utilisation non autorisée du contenu du site constitue une violation des droits d'auteur et
                peut donner lieu à des poursuites judiciaires.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">6. Données personnelles</h2>
              <p>
                Pour plus d'informations sur la collecte et le traitement de vos données personnelles,
                veuillez consulter notre{" "}
                <Link href="/politique-de-confidentialite" className="text-[var(--black)] font-semibold underline decoration-[var(--black)] decoration-2 underline-offset-4 hover:decoration-[var(--green1)] transition-all">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">7. Limitation de responsabilité</h2>
              <p className="mb-4">
                Les éditeurs ne peuvent être tenus responsables des dommages directs ou indirects qui pourraient
                résulter de l'accès au site ou de l'utilisation de celui-ci.
              </p>
              <p>
                Les éditeurs déclinent toute responsabilité quant aux éventuelles interruptions du site et aux
                conséquences qui peuvent en découler pour l'utilisateur.
              </p>
            </section>

            {/* Loi applicable */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">8. Loi applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut
                d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de
                compétence en vigueur.
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-8 border-t border-[var(--black)]/10">
              <p className="text-sm text-[var(--black)]/60">
                Dernière mise à jour : 1er décembre 2025
              </p>
            </section>
          </div>
        </div>
      </main>

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
          <div className="flex gap-6 text-sm text-[var(--black)]/60">
            <Link href="/mentions-legales" className="hover:text-[var(--black)] transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-[var(--black)] transition-colors">
              Politique de confidentialité
            </Link>
          </div>
          <p className="text-[var(--black)]/40 text-sm">
            © 2025 FocusGuide. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
