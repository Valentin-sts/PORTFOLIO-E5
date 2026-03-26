(function () {
  const params = new URLSearchParams(window.location.search);
  const bloc = params.get("bloc");

  const data = {

    "1": {
      title: "Bloc 1 – Gestion du patrimoine informatique",
      description: " ",
      pdf: "../procedure/bloc1.pdf",
      projects: [
        {
          title: "Mise en place d’un contrôleur de domaine Active Directory (AD DS)",
          description:
            "Dans le cadre de mon BTS SIO, j’ai mis en place un contrôleur de domaine sous Windows Server 2022. " +
            "J’ai configuré Active Directory et le service DNS afin de centraliser la gestion des utilisateurs, des postes et des droits d’accès.",
          items: [
            "Configuration d’une adresse IP statique et des paramètres DNS du serveur",
            "Installation du rôle Active Directory Domain Services (AD DS)",
            "Promotion du serveur en contrôleur de domaine (nouvelle forêt)",
            "Vérification du domaine et des services AD/DNS",
            "Création de la zone DNS de recherche inversée",
            "Structuration de l’annuaire (OU, utilisateurs, groupes de sécurité)",
            "Gestion des droits NTFS et de partage via groupes",
            "Application de stratégies de groupe (GPO)",
            "Recensement des ressources (postes, serveurs, adresses IP)"
          ]
        }
      ]
    },

    "2": {
      title: "Bloc 2 – Réponse aux incidents et assistance",
      description:
        "Support utilisateur et résolution d’incidents liés aux postes, au réseau et aux services.",
      pdf: "../procedure/bloc2.pdf",
      projects: [
        {
          title: "Traitement des incidents utilisateurs",
          description:
            "Gestion des demandes de support depuis l’analyse jusqu’à la résolution.",
          items: [
            "Réception de l’appel et création d’un ticket",
            "Prise en charge du ticket, traitement de la demande ou résolution du problème",
            "Validation avec l’utilisateur",
            "Création d’un bon d’intervention détaillant les actions réalisées lors de l’intervention"
          ],
          preuves: ["Ticket ou demande utilisateur", "Compte-rendu d’intervention"],
          file: {
            href: "../procedure/bloc2.pdf",
            label: "Ouvrir la procédure (PDF)"
          }
        },
        {
          title: "Dépannage réseau",
          description:
            "Résolution des problèmes de connectivité et d’accès aux ressources.",
          items: [
            "Vérification de la connexion (Wi-Fi / IP)",
            "Tests réseau de base (ping, accès partages)",
            "Correction de la configuration",
            "Validation du fonctionnement"
          ],
          preuves: ["Capture des tests réseau", "Accès rétabli aux ressources"]
        },
        {
          title: "Gestion des comptes utilisateurs",
          description:
            "Création et gestion de comptes et droits dans Active Directory.",
          items: [
            "Création et modification de comptes",
            "Réinitialisation de mots de passe",
            "Gestion des groupes et droits d’accès"
          ],
          preuves: ["Capture AD (comptes / groupes)", "Procédure de création de compte"],
          file: {
            href: "../procedure/DROITS.xlsx",
            label: "Ouvrir le fichier (XLSX)"
          }
        }
      ]
    },

    "3": {
  title: "Bloc 3 – Développement de la présence en ligne",
  description:
    "Participation à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques.",
  projects: [
    {
      title: "Valorisation d’un projet technique sur LinkedIn (DALTONER)",
      description:
        "Publication d’un post LinkedIn mettant en avant le déploiement de 10 postes Windows 11.",
      items: [
        "Rédaction d’un contenu professionnel valorisant le projet",
        "Mise en avant du déploiement de 10 postes Windows 11",
        "Respect du cadre juridique (confidentialité, données clients)",
        "Contribution à l’image et à la visibilité numérique de l’entreprise"
      ],
      file: {
        href: "../procedure/poste.png",
        label: "Voir la photo du projet"
      }
    }
  ]
},



    "4": {
      title: "Bloc 4 – Travail en mode projet",
      description:
        "Participation à un projet réseau en suivant les différentes étapes.",
      pdf: "../procedure/bloc4.pdf",
      projects: [
        {
          title: "Participation à un projet réseau",
          description:
            "Participation à un projet client en respectant les étapes définies (audit, conception, validation, déploiement).",
          items: [
            "Prise de contact et recueil des besoins client",
            "Réalisation d’un audit technique",
            "Concertation interne et conception de la solution",
            "Réalisation du schéma d’infrastructure (avant / après) et validation client"
          ]
        }
      ]
    },

   "5": {
      title: "Bloc 5 – Mise à disposition d’un service",
      description:
        "Déploiement d’un service VPN IPsec sécurisé avec authentification AD/LDAP et authentification multifacteur.",
      pdf: "../procedure/bloc5.pdf",
      projects: [
        {
          title: "VPN IPsec + Double Authentification (FortiGate & Microsoft 365)",
          description:
            "Mise en place d’un accès distant sécurisé avec renforcement de la sécurité via MFA.",
          items: [
            "Configuration du tunnel VPN IPsec sur FortiGate",
            "Intégration AD/LDAP pour l’authentification",
            "Activation de l’authentification multifacteur",
            "Configuration Microsoft Authenticator",
            "Ajout d’une méthode secondaire physique",
            "Accompagnement des utilisateurs à l’installation et au scan du QR Code",
            "Tests de connexion et validation"
          ],
          file: {
            href: "../procedure/bloc3.pdf",
            label: "Ouvrir la procédure MFA (PDF)"
          }
        }
      ]
    }

  ,

    "6": {
      title: "Bloc 6 – Développement professionnel",
      description:
        "Veille technologique et amélioration continue.",
      pdf: "../procedure/bloc6.pdf",
      projects: [
        {
          title: "Veille technologique & développement professionnel",
          description:
            "Réalisation d’une veille régulière et mise à jour du profil professionnel.",
          items: [
            "Veille sécurité et technologique (CVE, articles, correctifs)",
            "Suivi des évolutions réseau et cybersécurité",
            "Synthèse et capitalisation des informations",
            "Mise à jour du profil professionnel (CV, LinkedIn)"
          ]
        }
      ]
    }

  }; // ✅ fermeture correcte de data

  const titleEl = document.getElementById("bloc-title");
  const descEl = document.getElementById("bloc-description");
  const container = document.getElementById("projects-container");

  if (!titleEl || !descEl || !container) return;

  const blocData = data[String(bloc)];

  if (!blocData) {
    titleEl.textContent = "Bloc introuvable";
    descEl.textContent = "Lien incorrect.";
    return;
  }

  titleEl.textContent = blocData.title;
  descEl.textContent = blocData.description;

  container.innerHTML = "";

  blocData.projects.forEach((project) => {

    const preuvesHtml =
      Array.isArray(project.preuves) && project.preuves.length
        ? `
          <div style="margin-top:14px;">
            <strong>Éléments de preuve :</strong>
            <ul>
              ${project.preuves.map(p => `<li>${p}</li>`).join("")}
            </ul>
          </div>
        `
        : "";

    const projectFileHtml =
      project.file && project.file.href
        ? `
          <div style="margin-top:14px;">
            <a class="btn ghost" href="${project.file.href}" target="_blank">
              ${project.file.label}
            </a>
          </div>
        `
        : "";

    const blocPdfHtml =
      blocData.pdf && String(bloc) !== "2"
        ? `
          <div style="margin-top:10px;">
            <a class="btn ghost" href="${blocData.pdf}" target="_blank">
              Ouvrir la procédure (PDF)
            </a>
          </div>
        `
        : "";

    const article = document.createElement("article");
    article.className = "project-card";

    article.innerHTML = `
      <div class="project-card__body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul>${project.items.map(i => `<li>${i}</li>`).join("")}</ul>
        ${preuvesHtml}
        ${projectFileHtml}
        ${blocPdfHtml}
      </div>
    `;

    container.appendChild(article);
  });

})();
