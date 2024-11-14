interface Translations {
  [key: string]: {
    hero: {
      title: string;
      subtitle: string;
      getStarted: string;
      learnMore: string;
    };
    features: {
      title: string;
      cards: Array<{
        title: string;
        description: string;
      }>;
    };
    benefits: {
      title: string;
      items: string[];
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
}

export const translations: Translations = {
  en: {
    hero: {
      title: "Transform Documents into FALC Format",
      subtitle: "Make your content accessible to everyone with our intelligent document transformation platform. Simple, fast, and compliant with accessibility standards.",
      getStarted: "Get Started",
      learnMore: "Learn More"
    },
    features: {
      title: "Key Features",
      cards: [
        {
          title: "Multi-Format Support",
          description: "Import PDF, DOCX, TXT, and HTML files with ease. Process multiple documents simultaneously."
        },
        {
          title: "AI-Powered Transformation",
          description: "Automatic simplification using advanced AI to follow FALC guidelines and standards."
        },
        {
          title: "Manual Editing Tools",
          description: "Fine-tune your documents with our intuitive editing interface and real-time suggestions."
        },
        {
          title: "Text-to-Speech",
          description: "Built-in voice synthesis for enhanced accessibility and better comprehension."
        },
        {
          title: "Secure & Compliant",
          description: "GDPR-compliant with enterprise-grade security for your sensitive documents."
        },
        {
          title: "Version Control",
          description: "Track changes and maintain document history with automatic backups."
        }
      ]
    },
    benefits: {
      title: "Why Choose Our Solution?",
      items: [
        "Compliant with latest accessibility standards",
        "Intuitive interface for all user levels",
        "Rapid document processing",
        "Comprehensive editing tools",
        "Multi-platform support"
      ]
    },
    cta: {
      title: "Ready to Make Your Documents Accessible?",
      subtitle: "Join organizations already using our platform to make their content accessible to everyone.",
      button: "Start Free Trial"
    }
  },
  fr: {
    hero: {
      title: "Transformez vos Documents en Format FALC",
      subtitle: "Rendez votre contenu accessible à tous grâce à notre plateforme intelligente de transformation de documents. Simple, rapide et conforme aux normes d'accessibilité.",
      getStarted: "Commencer",
      learnMore: "En savoir plus"
    },
    features: {
      title: "Fonctionnalités Clés",
      cards: [
        {
          title: "Support Multi-Format",
          description: "Importez facilement des fichiers PDF, DOCX, TXT et HTML. Traitez plusieurs documents simultanément."
        },
        {
          title: "Transformation par IA",
          description: "Simplification automatique utilisant l'IA avancée pour suivre les directives FALC."
        },
        {
          title: "Outils d'Édition Manuelle",
          description: "Affinez vos documents avec notre interface intuitive et nos suggestions en temps réel."
        },
        {
          title: "Synthèse Vocale",
          description: "Synthèse vocale intégrée pour une meilleure accessibilité et compréhension."
        },
        {
          title: "Sécurisé & Conforme",
          description: "Conforme au RGPD avec une sécurité de niveau entreprise pour vos documents."
        },
        {
          title: "Contrôle de Version",
          description: "Suivez les modifications et conservez l'historique des documents avec des sauvegardes automatiques."
        }
      ]
    },
    benefits: {
      title: "Pourquoi Choisir Notre Solution ?",
      items: [
        "Conforme aux dernières normes d'accessibilité",
        "Interface intuitive pour tous les niveaux",
        "Traitement rapide des documents",
        "Outils d'édition complets",
        "Support multi-plateforme"
      ]
    },
    cta: {
      title: "Prêt à Rendre vos Documents Accessibles ?",
      subtitle: "Rejoignez les organisations qui utilisent déjà notre plateforme pour rendre leur contenu accessible à tous.",
      button: "Essai Gratuit"
    }
  }
};