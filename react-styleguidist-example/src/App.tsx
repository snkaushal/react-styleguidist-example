import React from 'react';
import './App.css';
import { ArticleCard } from './components/ArticleCard/ArticleCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ArticleCard 
          name={'Article 1'}
          background={'white'}
          title={'Article Card 1'}
        />
      </header>
    </div>
  );
}

export default App;
