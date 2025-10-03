# Bot Discord Vouch

Un bot Discord moderne pour système de vouch/recommandations avec des fonctionnalités de notation et de feedback.

---

## 🌟 Menu

• [📦 Deploy With](#-deploys)  
• [⚙️ Setting up](#-setting-up)  
• [💼 Features](#-features)  
• [🧑‍🤝‍🧑 Authors](#-authors)  
• [⚔️ Discord](#-discord)

---

## 📦 Deploys

[![Run on Replit](https://img.shields.io/badge/Replit-667881?style=for-the-badge&logo=replit&logoColor=white)](https://replit.com/github/neigexaishi/vouch-bot)
[![Remix on Glitch](https://img.shields.io/badge/Glitch-2800ff?style=for-the-badge&logo=glitch&logoColor=white)](https://glitch.com/edit/#!/import/github/neigexaishi/vouch-bot)
[![Deploy to Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://heroku.com/deploy?template=https://github.com/neigexaishi/vouch-bot)
[![Deploy on Railway](https://img.shields.io/badge/Railway-131B24?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/template/neigexaishi/vouch-bot)

---

## ⚙️ Setting up

1. [Install NodeJS](https://nodejs.org/)
2. [Install Files](https://github.com/neigexaishi/vouch-bot/archive/refs/heads/main.zip)
3. Complete the configuration in `.env`
4. Run `node deploy-commands.js` to register slash commands
5. Enjoy the tool!

---

## 💼 Features

### ⭐ Système de Vouch
- **Notation par étoiles** - Système de notation de 1 à 5 étoiles
- **Messages personnalisés** - Possibilité d'ajouter un message de feedback
- **Images** - Support des images dans les vouchs
- **Embed stylisé** - Affichage professionnel des vouchs

### 🔧 Administration
- **Commandes slash** - Interface moderne avec Discord
- **Salon dédié** - Envoi automatique dans un salon spécifique
- **Gestion des erreurs** - Système robuste de gestion d'erreurs
- **Logs détaillés** - Traçabilité des actions

### 🎨 Interface
- **Design moderne** - Interface utilisateur intuitive
- **Réponses éphémères** - Confidentialité des interactions
- **Thumbnail utilisateur** - Affichage de l'avatar de l'utilisateur
- **Date automatique** - Horodatage des vouchs

---

## 📋 Commandes

| Commande | Description | Permission |
|----------|-------------|------------|
| `/vouch etoile:<1-5> [message] [image]` | Laisse un vouch avec notation | - |

### Options de la commande `/vouch` :
- **etoile** (requis) : Nombre d'étoiles de 1 à 5
- **message** (optionnel) : Message de feedback personnalisé
- **image** (optionnel) : Image à joindre au vouch

---

## 🛠️ Configuration

Créez un fichier `.env` avec vos paramètres :

```env
# Token du bot Discord
TOKEN=votre_token_discord

# ID du client (bot)
CLIENT_ID=votre_client_id

# ID du serveur (pour les commandes slash)
GUILD_ID=votre_guild_id

# ID du salon où envoyer les vouchs
CHANNEL_ID=id_du_salon_vouchs
```

### Obtenir les IDs :
1. **TOKEN** : [Discord Developer Portal](https://discord.com/developers/applications) > Votre bot > Token
2. **CLIENT_ID** : [Discord Developer Portal](https://discord.com/developers/applications) > Votre bot > General Information > Application ID
3. **GUILD_ID** : Clic droit sur votre serveur > Copier l'ID (mode développeur activé)
4. **CHANNEL_ID** : Clic droit sur le salon > Copier l'ID (mode développeur activé)

---

## 📁 Structure

```
vouch-bot/
├── commands/           # Toutes les commandes
│   └── vouch.js       # Commande principale de vouch
├── deploy-commands.js  # Script de déploiement des commandes
├── index.js           # Point d'entrée
├── package.json       # Dépendances
└── README.md          # Documentation
```

---

## 🔧 Dépendances

- `discord.js` - API Discord officielle
- `@discordjs/rest` - REST API pour les commandes slash
- `discord-api-types` - Types TypeScript pour l'API Discord
- `dotenv` - Gestion des variables d'environnement

---

## 🚨 Permissions

Le bot a besoin de ces permissions :
- `SEND_MESSAGES` - Envoyer des messages
- `EMBED_LINKS` - Intégrer des liens
- `ATTACH_FILES` - Joindre des fichiers
- `USE_SLASH_COMMANDS` - Utiliser les commandes slash

---

## 🚀 Installation et Démarrage

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Configurer les variables d'environnement :**
   ```bash
   # Créer le fichier .env avec vos paramètres
   cp .env.example .env
   # Éditer le fichier .env avec vos valeurs
   ```

3. **Déployer les commandes slash :**
   ```bash
   node deploy-commands.js
   ```

4. **Démarrer le bot :**
   ```bash
   node index.js
   ```

---

## 📜 Terms Of Usage

✅ **Usage éducatif uniquement**  
✅ **Vous pouvez utiliser le code source si vous gardez les crédits (dans les embeds + dans le markdown), il doit rester open-source**  
✅ **Nous ne sommes PAS responsables de ce que vous faites avec notre logiciel (si c'est illégal)**

---

## 🧑‍🤝‍🧑 Authors

• [Neige](https://github.com/neigexaishi) - Créateur principal  
• [Contributeurs](https://github.com/neigexaishi/vouch-bot/graphs/contributors) - Merci à tous !

---

## ⚔️ Discord

[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/votre-serveur)

---

## 🎯 Utilisation

1. **Invitez le bot** sur votre serveur Discord
2. **Configurez** le salon de vouchs dans `.env`
3. **Déployez** les commandes slash avec `deploy-commands.js`
4. **Utilisez** `/vouch` pour laisser des recommandations

### Exemple d'utilisation :
```
/vouch etoile:5 message:Excellent service, très professionnel ! image:[fichier]
```

---

*Développé avec ❤️ pour la communauté Discord*
