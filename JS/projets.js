(function () {
  const params = new URLSearchParams(window.location.search);
  const bloc = params.get("bloc");

  const data = {

    "1": {
      title: "Bloc 1 – Gestion du patrimoine informatique",
      description: " ",
      projects: [
        {
          title: "Mise en place d'un contrôleur de domaine Active Directory (AD DS)",
          description:
            "Dans le cadre de mon BTS SIO, j'ai mis en place un contrôleur de domaine sous Windows Server 2022. " +
            "J'ai configuré Active Directory et le service DNS afin de centraliser la gestion des utilisateurs, des postes et des droits d'accès.",
          items: [
            "Déploiement AD DS (IP statique, installation du rôle, promotion en DC, nouvelle forêt)",
            "Configuration DNS (vérification des services, zone de recherche inversée)",
            "Structuration de l'annuaire (OU, utilisateurs, groupes de sécurité, droits NTFS/partage)",
            "Administration & GPO (stratégies de groupe, recensement des ressources)"
          ],
          file: {
            href: "../PROCEDURE/bloc1.pdf",
            label: "Consulter la procédure AD DS (PDF)"
          }
        },
        {
          title: "Mise en place d'un serveur de fichiers SAMBA sous Linux",
          description:
            "Dans le cadre de mon BTS SIO, j'ai déployé un serveur de partage de fichiers SAMBA sous Linux (Debian). " +
            "Cette solution permet de centraliser l'accès aux ressources réseau, de gérer les droits d'accès par utilisateur et par groupe, " +
            "et d'assurer la continuité de service pour les postes Windows du réseau.",
          items: [
            "Installation et configuration de SAMBA (smb.conf, paramètres globaux et partages)",
            "Création et gestion des utilisateurs SAMBA (smbpasswd, groupes Linux)",
            "Définition des droits d'accès par partage (valid users, read only, create mask, permissions NTFS)",
            "Vérification des partages et tests d'accès depuis un poste client Windows",
            "Consultation des journaux d'accès (/var/log/samba/) et supervision via smbstatus",
            "Sauvegarde de la configuration (smb.conf, base des utilisateurs)"
          ],
          file: {
            href: "../PROCEDURE/Procedure_SAMBA_LINUX.pdf",
            label: "Consulter la procédure SAMBA (PDF)"
          }
        }
      ]
    },

    "2": {
      title: "Bloc 2 – Réponse aux incidents et assistance",
      description:
        "Support utilisateur et résolution d'incidents liés aux postes, au réseau et aux services.",
      pdf: "../PROCEDURE/bloc2.pdf",
      projects: [
        {
          title: "Traitement des incidents utilisateurs",
          description:
            "Gestion des demandes de support depuis l'analyse jusqu'à la résolution.",
          items: [
            "Réception de l'appel et création d'un ticket",
            "Prise en charge du ticket, traitement de la demande ou résolution du problème",
            "Validation avec l'utilisateur",
            "Création d'un bon d'intervention détaillant les actions réalisées lors de l'intervention"
          ],
          preuves: ["Ticket ou demande utilisateur", "Compte-rendu d'intervention"],
          file: {
            href: "../PROCEDURE/bloc2.pdf",
            label: "Consulter la procédure de gestion des tickets (PDF)"
          } 
        },
        {
          title: "Dépannage réseau",
          description:
            "Résolution des problèmes de connectivité et d'accès aux ressources.",
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
            "Gestion des groupes et droits d'accès"
          ],
          preuves: ["Capture AD (comptes / groupes)", "Procédure de création de compte"],
          file: {
            href: "../PROCEDURE/DROITS.pdf",
            label: "Consulter le fichier des droits NTFS (PDF)"
          }
        }
      ]
    },

    "3": {
      title: "Bloc 3 – Développement de la présence en ligne",
      description:
        "Participation à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques.",
      projects: [
        {
          title: "Valorisation d'un projet technique sur LinkedIn (DALTONER)",
          description:
            "Publication d'un post LinkedIn mettant en avant le déploiement de 10 postes Windows 11.",
          items: [
            "Rédaction d'un contenu professionnel valorisant le projet",
            "Mise en avant du déploiement de 10 postes Windows 11",
            "Respect du cadre juridique (confidentialité, données clients)",
            "Contribution à l'image et à la visibilité numérique de l'entreprise"
          ],
          file: {
            href: "../PROCEDURE/poste.png",
            label: "Voir la photo du projet"
          }
        }
      ]
    },

    "4": {
      title: "Bloc 4 – Travail en mode projet",
      description:
        "Participation à un projet réseau en suivant les différentes étapes.",
      pdf: "../PROCEDURE/bloc4.pdf",
      projects: [
        {
          title: "Participation à un projet réseau",
          description:
            "Participation à un projet client en respectant les étapes définies (audit, conception, validation, déploiement).",
          items: [
            "Prise de contact et recueil des besoins client",
            "Réalisation d'un audit technique",
            "Concertation interne et conception de la solution",
            "Réalisation du schéma d'infrastructure (avant / après) et validation client"
          ]
        }
      ]
    },

    "5": {
      title: "Bloc 5 – Mise à disposition d'un service",

      projects: [
        {
          title: "Configuration d'un VPN IPsec sur FortiGate",
          description:
            "Mise en place d'un accès distant sécurisé via un tunnel VPN IPsec configuré sur un pare-feu FortiGate, " +
            "avec intégration de l'annuaire Active Directory pour la gestion centralisée des accès.",
          items: [
            "Configuration du tunnel VPN IPsec sur FortiGate",
            "Intégration AD/LDAP pour l'authentification des utilisateurs",
            "Définition des politiques de sécurité et des règles de pare-feu",
            "Tests de connexion depuis un poste client externe",
            "Validation du tunnel et des accès aux ressources internes"
          ],
          file: {
            href: "../PROCEDURE/bloc5.pdf",
            label: "Consulter la procédure VPN IPsec (PDF)"
          }
        },
        {
          title: "Mise en place d'une authentification multi-facteurs (MFA)",
          description:
            "Renforcement de la sécurité des accès via la mise en place d'une authentification multifacteur sur Microsoft 365, " +
            "combinant l'application Microsoft Authenticator et une méthode de secours physique.",
          items: [
            "Activation de l'authentification multifacteur sur Microsoft 365",
            "Configuration de Microsoft Authenticator comme méthode principale",
            "Ajout d'une méthode secondaire physique (clé de sécurité)",
            "Accompagnement des utilisateurs à l'installation et au scan du QR Code",
            "Tests de connexion et validation du service"
          ],
          file: {
            href: "../PROCEDURE/bloc3.pdf",
            label: "Consulter la procédure d’authentification à deux facteurs (PDF)"
          }
        },
        {
          title: "Installation et administration d'un serveur DHCP Debian",
          description:
            "Mise en place d'un serveur DHCP sous Debian afin d'automatiser l'attribution des adresses IP " +
            "aux équipements du réseau et de centraliser la gestion des baux.",
          items: [
            "Installation du paquet isc-dhcp-server sur Debian",
            "Configuration des plages d'adresses IP et des options réseau (passerelle, DNS, masque)",
            "Définition des baux statiques pour les équipements fixes",
            "Démarrage et activation du service au démarrage",
            "Vérification de l'attribution des adresses sur les clients",
            "Consultation des journaux et supervision des baux actifs"
          ],
          file: {
            href: "../PROCEDURE/dhcp-debian.pdf",
            label: "Consulter la procédure DHCP Debian (PDF)"
          }
        }
      ]
    },

    "6": {
      title: "Bloc 6 – Développement professionnel",
      description:
        "Veille technologique et amélioration continue.",
      pdf: "../PROCEDURE/bloc6.pdf",
      projects: [
        {
          title: "Veille technologique & développement professionnel",
          description:
            "Réalisation d'une veille régulière et mise à jour du profil professionnel.",
          items: [
            "Veille sécurité et technologique (CVE, articles, correctifs)",
            "Suivi des évolutions réseau et cybersécurité",
            "Synthèse et capitalisation des informations",
            "Mise à jour du profil professionnel (CV, LinkedIn)"
          ]
        }
      ]
    }

  };

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
          <div class="btn-wrapper">
            <a class="btn ghost" href="${project.file.href}" target="_blank">
              ${project.file.label}
            </a>
          </div>
        `
        : "";

    const blocPdfHtml =
      blocData.pdf && String(bloc) !== "2"
        ? `
          <div class="btn-wrapper">
            <a class="btn ghost" href="${blocData.pdf}" target="_blank">
              Consulter la procédure complète (PDF)
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