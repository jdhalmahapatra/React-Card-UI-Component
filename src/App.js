import React from 'react';
import './App.css';
import Card from './components/Card';
import CardData from'./datamodel/carddata';

const App = () => {
  const cardComponent = CardData.map((cardData) => {
    return <Card key={cardData.id} cssName = {cardData.className} title={cardData.title} description={cardData.description} />
  })
  return (
    <div className="App">
      <header>
        <h2>Custom Contact Card</h2>
        <br />
      </header>
      <main>
        <div className='container'>
          <div className='row'>
            {cardComponent}
          </div>
        </div>
      </main> 
    </div>
  );
}
export default App;
