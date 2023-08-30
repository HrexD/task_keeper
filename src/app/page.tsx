// src/app/page.tsx

// Importez depuis le nouveau chemin d'accès
import HomePage from './pages/HomePage/page'; 

// Utilisez le composant HomePage
const App: React.FC = () => {
  return (
    <div className="app">
      <HomePage />
    </div>
  );
};

export default App;
