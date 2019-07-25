import * as React from 'react';
import './App.css';
import { ArticleCard } from './lib/components/Cards/ArticleCard/ArticleCard';
import { MenuCard } from './lib/components/Cards/MenuCard/MenuCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ArticleCard
          title={'Article 1'}
          description={'no description'}
          imageUrl = {'https://designshack.net/wp-content/uploads/placeholder-image.png'}
          url={'https://designshack.net/wp-content/uploads/placeholder-image.png'}
        />
        <MenuCard 
          name={'Menu Card 1'}
          imageUrl={'https://designshack.net/wp-content/uploads/placeholder-image.png'}
          clickHandler={() => console.log('Menu Card 1 Clicked')}
          location={'https://designshack.net/wp-content/uploads/placeholder-image.png'}
        />
      </header>
    </div>
  );
}

export default App;
