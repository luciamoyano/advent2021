import {useState} from 'react';
import GiftsList from "./components/GiftsList";
import AddGift from "./components/AddGift";
import "./styles.scss";

export default function App() {
const [giftsList, setGiftsList] = useState(['mundial qatar 2022', 'milanesa con puré'])

  
  function handleClick(newGift:string) {
    setGiftsList([...giftsList, newGift]);
  }

  return (

    <div className="App">
      <main id="main-container">
      <h1>Regalos:</h1>
        <AddGift handleClick={handleClick}/>
        <div className="gifts-container">
          <GiftsList giftsList={giftsList} />
        </div>
        <div className="snowman">&#9731;</div>
      </main>
    </div>
  );
}
