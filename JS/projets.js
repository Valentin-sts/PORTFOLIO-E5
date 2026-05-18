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
          description: "Déploiement d'un contrôleur de domaine sous Windows Server 2022 pour centraliser la gestion des utilisateurs et des accès.",
          items: [
            "Déploiement AD DS et promotion en contrôleur de domaine",
            "Configuration DNS et zone de recherche inversée",
            "Création des OU, utilisateurs, groupes et droits NTFS",
            "Mise en place des GPO et recensement des ressources"
          ],
          file: { href: "../PROCEDURE/bloc1.pdf", label: "Consulter la procédure AD DS (PDF)" }
        },
        {
          title: "Mise en place d'un serveur de fichiers SAMBA sous Linux",
          description: "Déploiement d'un serveur SAMBA sous Debian pour centraliser les partages réseau et gérer les droits d'accès.",
          items: [
            "Installation et configuration de SAMBA (smb.conf, partages)",
            "Création et gestion des utilisateurs SAMBA",
            "Définition des droits d'accès par partage",
            "Tests d'accès depuis un poste client Windows"
          ],
          file: { href: "../PROCEDURE/Procedure_SAMBA_LINUX.pdf", label: "Consulter la procédure SAMBA (PDF)" }
        },
        {
          title: "Intégration Active Directory sur Linux – Authentification LDAP/Kerberos",
          description: "Intégration de machines Linux au domaine Active Directory via SSSD / realmd / Kerberos 5 pour centraliser l'authentification.",
          items: [
            "Jonction au domaine via realm join et configuration de sssd.conf",
            "Authentification des comptes AD en session locale et via SSH",
            "Création automatique des répertoires home au premier login",
            "Attribution de droits sudo et restriction des accès par groupe AD"
          ],
          file: { href: "../PROCEDURE/T1_Integration_AD_Linux_.pdf", label: "Consulter la procédure Intégration AD Linux (PDF)" }
        },
        {
          title: "Haute Disponibilité – Switchs de cœur (HSRP + RSTP)",
          description: "Mise en place d'une architecture redondante sur les switchs de cœur avec basculement automatique et convergence rapide.",
          items: [
            "Configuration du trunk 802.1Q et des VLANs sur SW3 et SW4",
            "Rapid-PVST : SW3 root bridge primaire, SW4 secondaire",
            "HSRP : SW3 actif, SW4 standby, IP virtuelle .254 partagée",
            "Test de bascule (failover) et retour automatique via preempt"
          ],
          file: { href: "../PROCEDURE/PROCEDURE_HAUTE_DISPONIBILITE.pdf", label: "Consulter la procédure Haute Disponibilité (PDF)" }
        },
        {
          title: "Gestion des droits utilisateurs",
          description: "Refonte des droits d'accès via une organisation par groupes de sécurité.",
          items: [
            "Audit des droits existants",
            "Création des groupes de sécurité",
            "Affectation des utilisateurs aux groupes",
            "Attribution des groupes aux dossiers"
          ],
          file: { href: "../PROCEDURE/DROITS.pdf", label: "Consulter la procédure de gestion des droits (PDF)" }
        }
      ]
    },

    "2": {
      title: "Bloc 2 – Réponse aux incidents et assistance",
      description: "Support utilisateur et résolution d'incidents liés aux postes, au réseau et aux services.",
      projects: [
        {
          title: "Traitement des incidents utilisateurs",
          description: "Gestion des demandes de support depuis la réception jusqu'à la résolution et la traçabilité.",
          items: [
            "Réception de l'appel et création d'un ticket",
            "Prise en charge et résolution du problème",
            "Validation avec l'utilisateur",
            "Rédaction du bon d'intervention"
          ],
          file: { href: "../PROCEDURE/bloc2.pdf", label: "Consulter la procédure de gestion des tickets (PDF)" }
        }
      ]
    },

    "3": {
      title: "Bloc 3 – Développement de la présence en ligne",
      description: "Valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique.",
      projects: [
        {
          title: "Valorisation d'un projet technique sur LinkedIn (DALTONER)",
          description: "Publication d'un post LinkedIn mettant en avant le déploiement de 10 postes Windows 11.",
          items: [
            "Rédaction d'un contenu professionnel valorisant le projet",
            "Respect du cadre juridique (confidentialité, données clients)",
            "Contribution à la visibilité numérique de l'entreprise"
          ],
          file: { href: "../PROCEDURE/poste.png", label: "Voir la photo du projet" }
        }
      ]
    },

    "4": {
      title: "Bloc 4 – Travail en mode projet",
      description: "Participation à un projet réseau en suivant les différentes étapes.",
      projects: [
        {
          title: "Participation à un projet réseau",
          description: "Participation à un projet client en respectant les étapes définies : audit, conception, validation, déploiement.",
          items: [
            "Prise de contact et recueil des besoins client",
            "Réalisation d'un audit technique",
            "Conception de la solution et schéma d'infrastructure",
            "Validation client et déploiement"
          ],
          file: { href: "../PROCEDURE/bloc4.pdf", label: "Consulter la procédure du projet réseau (PDF)" }
        },
        {
          title: "Rédaction d'une procédure interne",
          description: "Rédaction d'une procédure technique pour standardiser une intervention et faciliter sa reproduction.",
          items: [
            "Identification du besoin et du périmètre",
            "Rédaction structurée des étapes",
            "Relecture et mise en forme pour l'équipe",
            "Dépôt et mise à disposition en interne"
          ],
          file: { href: "../PROCEDURE/bloc3.pdf", label: "Consulter la procédure interne (PDF)" }
        }
      ]
    },

    "5": {
      title: "Bloc 5 – Mise à disposition des utilisateurs d'un service informatique",
      projects: [
        {
          title: "Configuration d'un VPN IPsec sur FortiGate",
          description: "Mise en place d'un accès distant sécurisé via un tunnel VPN IPsec sur FortiGate avec authentification Active Directory.",
          items: [
            "Configuration du tunnel VPN IPsec sur FortiGate",
            "Intégration AD/LDAP pour l'authentification",
            "Définition des politiques de sécurité et règles pare-feu",
            "Tests et validation des accès depuis un poste externe"
          ],
          file: { href: "../PROCEDURE/bloc5.pdf", label: "Consulter la procédure VPN IPsec (PDF)" }
        },
        {
          title: "Mise en place d'une authentification multi-facteurs (MFA)",
          description: "Renforcement des accès Microsoft 365 via MFA combinant Microsoft Authenticator et une clé de sécurité physique.",
          items: [
            "Activation de la MFA sur Microsoft 365",
            "Configuration de Microsoft Authenticator comme méthode principale",
            "Ajout d'une clé de sécurité physique en secours",
            "Accompagnement des utilisateurs et validation du service"
          ],
          file: { href: "../PROCEDURE/bloc3.pdf", label: "Consulter la procédure MFA (PDF)" }
        },
        {
          title: "Installation et administration d'un serveur DHCP Debian",
          description: "Déploiement d'un serveur DHCP sous Debian pour automatiser l'attribution des adresses IP.",
          items: [
            "Installation et configuration d'isc-dhcp-server",
            "Définition des plages IP, options réseau et baux statiques",
            "Vérification sur les clients et supervision des baux actifs"
          ],
          file: { href: "../PROCEDURE/dhcp-debian.pdf", label: "Consulter la procédure DHCP Debian (PDF)" }
        },
        {
          title: "Configuration Réseau : VLANs, DHCP, Routage, VTP et Sécurité",
          description: "Mise en place d'une infrastructure réseau segmentée par VLANs avec routage inter-VLAN, attribution dynamique des adresses IP et sécurisation des équipements.",
          items: [
            "Création des VLANs et configuration du VTP (serveur/client) entre SW1 et SW2",
            "Routage inter-VLAN via sous-interfaces dot1Q sur routeur Cisco",
            "Configuration du DHCP par VLAN (ADMIN, TECH, COMMERCIAL)",
            "Sécurisation des accès : console, VTY, SSH, enable secret et bannière"
          ],
          file: { href: "../PROCEDURE/Procédure de Configuration Réseau.pdf", label: "Consulter la procédure Configuration Réseau (PDF)" }
        }
      ]
    },

    "6": {
      title: "Bloc 6 – Développement professionnel",
      description: "Veille technologique et amélioration continue.",
      projects: [
        {
          title: "Veille technologique & développement professionnel",
          description: "Veille régulière sur les évolutions réseau, systèmes et cybersécurité avec mise à jour du profil professionnel.",
          items: [
            "Veille sécurité et technologique (CVE, correctifs, articles)",
            "Synthèse et capitalisation des informations",
            "Mise à jour du CV, portfolio et profil LinkedIn"
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

    const article = document.createElement("article");
    article.className = "project-card";

    article.innerHTML = `
      <div class="project-card__body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul>${project.items.map(i => `<li>${i}</li>`).join("")}</ul>
        ${projectFileHtml}
      </div>
    `;

    container.appendChild(article);
  });

})();