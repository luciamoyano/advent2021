import {useState} from 'react';
import GiftsList from "./components/GiftsList";
import AddGift from "./components/AddGift";
import "./styles.scss";
import DeleteAll from './components/DeleteAll';

export default function App() {
const [giftsList, setGiftsList] = useState(['mundial qatar 2022', 'milanesa con puré'])

  
  function addGift(newGift:string) {
    if(!giftsList.includes(newGift)) {
      setGiftsList([...giftsList, newGift]);
    }
  }

  function deleteGift(name:string) {
    const newList = giftsList.filter((gift) => {
      return name !== gift
    })
    setGiftsList(newList);  
  }

  function deleteAll() {
    setGiftsList([]);
  }

  return (

    <div className="App">
      <main id="main-container">
      <h1>Regalos:</h1>
        <AddGift handleCallback={addGift}/>
        <div className="gifts-container">
          <GiftsList giftsList={giftsList} deleteGift={deleteGift}  />
        </div>
        <DeleteAll deleteAll={deleteAll}/>
        <div className="snowman">&#9731;</div>
      </main>
    </div>
  );
}
