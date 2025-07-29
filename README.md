## 🧪 Test Technique – Application Pokémon

### 🎯 Objectif

Développez une application web en **ReactJS** avec **TypeScript**, accompagnée d’un backend en **Node.js/Express**.

Le backend devra faire des appels à l’API Pokémon suivante pour simuler une base de données :

👉 [https://pokebuildapi.fr/api/v1](https://pokebuildapi.fr/api/v1)

En plus de répliquer les endpoints nécessaires de cette API, vous devrez implémenter deux routes supplémentaires permettant de transformer et de télécharger les données.

L’application devra :

- Afficher tous les Pokémon dans une grille avec leur image, leurs statistiques,
- Inclure une barre de recherche et des filtres,
- Permettre de sélectionner deux Pokémon pour simuler un **combat virtuel** dans une arène,
- Afficher le **résultat du combat** généré via un LLM (modèle de langage).

---

## ⚙️ Fonctionnalités Requises

### 🔙 Backend

### 1. Endpoints généraux

- Le candidat peut soit typer les endpoints nécessaires de l’API, soit rediriger les requêtes directement vers `https://pokebuildapi.fr/api/v1/*`.

### 2. Endpoints de téléchargement

- `GET /contents/:pokemonId`

    → Récupère les informations d’un Pokémon par son ID, transforme le JSON en **Markdown**, et retourne le fichier.

- `GET /contents/all`

    → Réutilise la logique de `/contents/:pokemonId` pour exporter les données Markdown des **898 Pokémon** dans un dossier local.


### 3. Technologies

- Backend en **Node.js/Express** avec **TypeScript**.
- Utilisation libre de bibliothèques supplémentaires (notamment pour la conversion en Markdown).

---

### 🧠 Préparation de l’Arène

### 1. Création du Brain (LLM)

- Connectez-vous sur [https://app.getvirtualbrain.com/](https://app.getvirtualbrain.com/) avec le mot de passe reçu par email.
- Créez un nouveau *brain* et **importez le dossier généré par `/export`** (les 898 Pokémon).
- Vous pouvez tester des combats en posant des questions simples dans le chat, par exemple :

    *"Que se passe-t-il si Coléodôme se bat avec Astronelle ?"*


### 2. Création du chatbot

- Créez un nouveau **chatbot** à partir de ce brain.
- Récupérez l’URL de prévisualisation (valide pendant une heure), au format suivant :

```
https://chatbot.getvirtualbrain.com/{chatbot_id}?access_token={token}&preview=true
```

### 3. Utilisation du chatbot

- Faites une requête `GET` vers l’endpoint ci-dessous, en utilisant l’URL de prévisualisation. La réponse du LLM sera envoyée en **stream** :

```
curl https://chatbot-api.getvirtualbrain.com/open-completion/{chatbot_id}/query?query={ma-query} -H "Authorization: Bearer {token}"
```

---

### 🖥️ Frontend

### 1. Affichage des Pokémon

- Afficher tous les Pokémon dans une **grille responsive**.
- Chaque carte de Pokémon doit contenir :
    - Son image,
    - Ses statistiques principales : **HP**, **Attack**, **Defense**, **Speed**.

### 2. Barre de recherche et filtres

- Ajouter une **barre de recherche** pour filtrer les Pokémon par nom.
- Intégrer des **filtres par types** (feu, eau, etc.).

### 3. Sélection et combat

- Permettre la **sélection de deux Pokémon** pour les envoyer dans une arène virtuelle.
- Implémenter un **prompt LLM** pour générer un combat de pokemon, spécifier les deux pokemons ou plus devraient suffire avec quelques instructions de combat
- Utiliser le stream du chatbot pour générer le combat. (le combat n’as pas besoin d’etre parfait bien entendu, on se contente d’avoir juste le retour du stream)

### 4. Interface utilisateur

- Interface libre, mais **intuitive**. Un bon design sera valorisé.

## 🚚 Livraison

### 5. Technologies

- **React** avec **TypeScript**.
- Bibliothèques additionnelles autorisées (gestion d’état, UI, requêtes API, etc.).

---

- Le code doit être **hébergé sur un dépôt GitHub public**.
- Fournir un **README** contenant :
    - Les instructions d’installation,
    - Les étapes pour lancer le frontend et le backend.

---

## 🧠 Critères d'Évaluation

- **Qualité du code** :
    - Bonnes pratiques React (hooks, composants, gestion d’état…),
    - Organisation des fichiers, lisibilité,
    - Maîtrise de TypeScript,
    - Gestion des appels API.
- **Interface utilisateur** :
    - Ergonomie générale,
    - Qualité du design et expérience utilisateur,
    - Intuitivité de la navigation.

---

## ⏱️ Temps estimé

Environ **4 heures**. Il ne s’agit pas d’un test chronométré : concentrez-vous sur la qualité et la clarté.

---

## ⏱️ Post Scriptum

Comme vous l'avez remarqué, afin de vous faciliter la tâche, vous avez à disposition un boilerplate. N'hésitez pas à typer, créer des interfaces, modifier l'architecture déjà présente et y apporter vos évolutions ou améliorations.

Si vous avez une appétence pour le front-end, vous pouvez passer plus de temps sur l'UX/UI et retravailler totalement le front. À l'inverse, si vous êtes plutôt orienté back-end, n'hésitez pas à enrichir la logique métier, structurer le code ou améliorer les performances et la sécurité.