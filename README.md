# Gwenola Quelquejay - Site Personnel

Site personnel de Gwenola Quelquejay

## 🛠️ Installation et développement

### Prérequis

- Node.js 16+ 
- npm ou yarn

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/gwenolaquelquejay.git
   cd gwenolaquelquejay
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run develop
   # ou
   yarn develop
   ```

4. **Ouvrir le site**
   Le site sera disponible à l'adresse : [http://localhost:8000](http://localhost:8000)

### Scripts disponibles

```bash
npm run develop    # Démarrer le serveur de développement
npm run build      # Construire le site pour la production
npm run serve      # Servir le site construit localement
npm run clean      # Nettoyer le cache Gatsby
npm run format     # Formater le code avec Prettier
npm run deploy     # Déployer sur GitHub Pages
npm run deploy:gh  # Déploiement avec script personnalisé
```

## 🌐 Déploiement

### GitHub Pages 

Le site est configuré pour se déployer automatiquement sur GitHub Pages via GitHub Actions.

#### Déploiement automatique
1. Poussez vos changements sur la branche `main`
2. GitHub Actions construira et déploiera automatiquement le site
3. Le site sera disponible sur `https://YOUR_USERNAME.github.io/gwenolaquelquejay`

#### Déploiement manuel
```bash
npm run deploy:gh
```