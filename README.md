# Anime Search and Favorites App - Technical Test

This project is a **technical test** built to demonstrate the ability to search, view, and save favorite anime using the AniList GraphQL API. The app allows users to search for anime, view their details, and add them to a favorites list.

## Features

### ✅ A search bar to filter animes
A search bar that allows the user to search for an anime by its name, with results displayed in real-time.

### ✅ Display results in card format
Anime results are displayed in a clean, card-style layout, making it easy for the user to see relevant information at a glance.

### ✅ Ability to mark cards as favorites
Users can mark an anime as a favorite by clicking on a heart icon, which then adds it to a list of favorites.

### ✅ A separate page to view favorites
A dedicated "Favorites" page shows all the anime marked as favorites by the user.

### Navigation Structure

- ✅ **Home Page**: Displays a list of anime cards with a search bar.
- ✅ **Favorites Page**: Displays a list of anime marked as favorites.

### Additional Desired Features

- **Expanded view of information when clicking on favorite cards**.
- ✅ **Persistence of favorite data** (using localStorage or other techniques).
- ✅ **Persistence of the search query on page reload**.
- ✅ **Search parameters in the URL** (e.g., `?search=naruto`).
- ✅ **Usage of react-query to consume the API endpoint**.
- ✅ **Responsive design for mobile devices**.
- ✅ **Modal with detailed view when clicking on a card**.
- ✅ **Deployment on free services like Vercel or Netlify**.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TanStack Router**: A flexible and performant router for React applications.
- **TanStack Query**: A data-fetching and state management library for handling server state and caching.
- **GraphQL**: A query language for APIs used to fetch anime data from AniList API.
- **Zustand**: A state management library to handle app-wide state, including favorites.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly.
- **TypeScript**: A superset of JavaScript that adds static types, improving developer productivity and code quality.
- **Vite**: A fast build tool that serves as the development server.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository:
    ```bash
    git clone <https://github.com/josueJouvin/Frontend-Developer---Take-home-challenge.git>
    ```

2. Navigate into the project folder:
    ```bash
    cd <project-folder>
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Visit `https://challenge-frontend-anilist.netlify.app/?page=1` in your browser to see the app in action.


