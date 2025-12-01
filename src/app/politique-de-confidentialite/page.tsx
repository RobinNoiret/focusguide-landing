"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function PolitiqueConfidentialite() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de Confidentialité</h1>

          <div className="space-y-8 text-[var(--black)]/80 leading-relaxed">
            {/* Introduction */}
            <section>
              <p className="mb-4">
                La présente Politique de Confidentialité décrit la façon dont FocusGuide collecte, utilise et
                protège vos données personnelles conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés.
              </p>
              <p>
                Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles de manière
                responsable et transparente.
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">1. Responsable du traitement des données</h2>
              <p className="mb-2">Les responsables du traitement de vos données personnelles sont :</p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong>Louis DROUHIN</strong> - Mâcon, France</li>
                <li><strong>Robin NOIRET</strong> - Lyon, France</li>
              </ul>
              <p className="mt-4">
                Contact :{" "}
                <a href="mailto:louis.drouhin@proton.me" className="text-[var(--black)] font-semibold underline decoration-[var(--black)] decoration-2 underline-offset-4 hover:decoration-[var(--green1)] transition-all">
                  louis.drouhin@proton.me
                </a>
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">2. Données personnelles collectées</h2>
              <p className="mb-4">Nous collectons les données suivantes lorsque vous vous inscrivez à notre liste d'attente :</p>
              <ul className="list-disc ml-8 space-y-2">
                <li><strong>Adresse email</strong> : pour vous contacter et vous tenir informé du lancement de FocusGuide</li>
                <li><strong>Prénom</strong> : pour personnaliser nos communications</li>
                <li><strong>Statut professionnel</strong> : (étudiant, freelance, salarié, entrepreneur, autre) pour mieux comprendre nos utilisateurs et adapter notre service</li>
              </ul>
              <p className="mt-4">
                Ces données sont collectées uniquement via le formulaire d'inscription présent sur notre page d'accueil.
              </p>
            </section>

            {/* Finalités du traitement */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">3. Finalités du traitement</h2>
              <p className="mb-4">Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Gérer votre inscription à la liste d'attente de FocusGuide</li>
                <li>Vous informer du lancement de la version alpha et des évolutions du produit</li>
                <li>Vous envoyer des communications relatives à FocusGuide</li>
                <li>Analyser les profils de nos utilisateurs potentiels pour améliorer notre service</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">4. Base légale du traitement</h2>
              <p>
                Le traitement de vos données personnelles repose sur votre <strong>consentement explicite</strong>, que
                vous nous donnez en remplissant et en soumettant le formulaire d'inscription. Vous pouvez retirer
                votre consentement à tout moment en nous contactant à l'adresse email indiquée ci-dessous.
              </p>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">5. Durée de conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pendant une durée maximale de <strong>2 ans</strong> à
                compter de leur collecte, ou jusqu'à ce que vous exerciez votre droit de suppression.
              </p>
              <p className="mt-4">
                À l'issue de cette période, vos données seront automatiquement supprimées de nos systèmes, sauf
                obligation légale contraire.
              </p>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">6. Destinataires des données</h2>
              <p className="mb-4">Vos données personnelles sont uniquement accessibles aux personnes suivantes :</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Louis DROUHIN et Robin NOIRET, co-créateurs de FocusGuide</li>
                <li>Les prestataires techniques suivants, uniquement dans le cadre de leurs services :
                  <ul className="list-circle ml-8 mt-2 space-y-1">
                    <li><strong>Neon Database</strong> : hébergement de la base de données</li>
                    <li><strong>Resend</strong> : service d'envoi d'emails transactionnels</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4">
                Nous nous assurons que ces prestataires offrent des garanties suffisantes en matière de protection
                des données personnelles et respectent le RGPD.
              </p>
              <p className="mt-4">
                Vos données ne sont <strong>jamais vendues, louées ou transmises à des tiers</strong> à des fins
                commerciales.
              </p>
            </section>

            {/* Transfert hors UE */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">7. Transfert de données hors de l'Union Européenne</h2>
              <p>
                Certains de nos prestataires techniques (Neon Database, Resend) peuvent être situés en dehors de
                l'Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en
                place conformément au RGPD (clauses contractuelles types, Privacy Shield, etc.).
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">8. Cookies et technologies similaires</h2>
              <p className="mb-4">
                Notre site n'utilise <strong>aucun cookie de suivi, cookie publicitaire ou cookie analytique</strong>.
              </p>
              <p>
                Nous n'utilisons que des cookies techniques strictement nécessaires au fonctionnement du site,
                qui ne nécessitent pas de consentement.
              </p>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">9. Vos droits</h2>
              <p className="mb-4">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants
                concernant vos données personnelles :
              </p>
              <ul className="list-disc ml-8 space-y-3">
                <li>
                  <strong>Droit d'accès</strong> : vous pouvez demander une copie des données personnelles que nous
                  détenons à votre sujet
                </li>
                <li>
                  <strong>Droit de rectification</strong> : vous pouvez nous demander de corriger des données
                  inexactes ou incomplètes
                </li>
                <li>
                  <strong>Droit à l'effacement (droit à l'oubli)</strong> : vous pouvez demander la suppression de
                  vos données personnelles
                </li>
                <li>
                  <strong>Droit à la limitation du traitement</strong> : vous pouvez demander la limitation du
                  traitement de vos données dans certaines circonstances
                </li>
                <li>
                  <strong>Droit à la portabilité</strong> : vous pouvez demander à recevoir vos données dans un
                  format structuré et lisible par machine
                </li>
                <li>
                  <strong>Droit d'opposition</strong> : vous pouvez vous opposer au traitement de vos données
                  personnelles
                </li>
                <li>
                  <strong>Droit de retirer votre consentement</strong> : vous pouvez retirer votre consentement à
                  tout moment, sans affecter la licéité du traitement fondé sur le consentement effectué avant
                  le retrait
                </li>
              </ul>
              <p className="mt-6">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse :{" "}
                <a href="mailto:louis.drouhin@proton.me" className="text-[var(--black)] font-semibold underline decoration-[var(--black)] decoration-2 underline-offset-4 hover:decoration-[var(--green1)] transition-all">
                  louis.drouhin@proton.me
                </a>
              </p>
              <p className="mt-4">
                Nous nous engageons à répondre à votre demande dans un délai maximum d'<strong>un mois</strong> à
                compter de sa réception.
              </p>
              <p className="mt-4">
                Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de
                l'Informatique et des Libertés (CNIL) si vous estimez que vos droits ne sont pas respectés :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--black)] font-semibold underline decoration-[var(--black)] decoration-2 underline-offset-4 hover:decoration-[var(--green1)] transition-all"
                >
                  www.cnil.fr
                </a>
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">10. Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                données personnelles contre :
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>La destruction accidentelle ou illicite</li>
                <li>La perte accidentelle</li>
                <li>L'altération</li>
                <li>La diffusion ou l'accès non autorisés</li>
              </ul>
              <p className="mt-4">
                Ces mesures incluent notamment : le chiffrement des données en transit (HTTPS), l'utilisation de
                bases de données sécurisées, et un accès restreint aux données personnelles.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">11. Modifications de la politique de confidentialité</h2>
              <p>
                Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Toute
                modification sera publiée sur cette page avec une nouvelle date de mise à jour. Nous vous
                encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière
                de protection des données.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[var(--black)]">12. Nous contacter</h2>
              <p className="mb-4">
                Pour toute question concernant cette Politique de Confidentialité ou le traitement de vos données
                personnelles, vous pouvez nous contacter :
              </p>
              <ul className="list-none ml-4 space-y-2">
                <li>
                  <strong>Par email :</strong>{" "}
                  <a href="mailto:louis.drouhin@proton.me" className="text-[var(--black)] font-semibold underline decoration-[var(--black)] decoration-2 underline-offset-4 hover:decoration-[var(--green1)] transition-all">
                    louis.drouhin@proton.me
                  </a>
                </li>
                <li>
                  <strong>Par courrier :</strong>
                  <div className="ml-4 mt-2">
                    FocusGuide<br />
                    À l'attention de Louis DROUHIN ou Robin NOIRET<br />
                    (Voir coordonnées dans les{" "}
                    <Link href="/mentions-legales" className="text-[var(--black)] font-semibold underline decoration-[var(--black)] decoration-2 underline-offset-4 hover:decoration-[var(--green1)] transition-all">
                      Mentions Légales
                    </Link>)
                  </div>
                </li>
              </ul>
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
