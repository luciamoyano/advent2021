import {useState} from 'react';
import GiftsList from "./components/GiftsList";
import AddGift from "./components/AddGift";
import "./styles.scss";
import DeleteAll from './components/DeleteAll';

export default function App() {
const [giftsList, setGiftsList] = useState([{'name':'mundial de qatar 2022','quantity':1},{'name':'milanesas con puré','quantity':365}])

  
  function addGift(name:any, quantity:number) {
    if(!giftsList.includes(name)) {
      setGiftsList(
        [...giftsList, {'name':name, 'quantity': quantity}
      ]);
    }
  }

  function deleteGift(deletedGiftName:any) {
    const newList = giftsList.filter((gift) => {
      return deletedGiftName !== gift.name
    })
    setGiftsList(newList);  
  }

  function deleteAll() {
    setGiftsList([]);
  }

  console.log(giftsList)

  return (

    <div className="App">
      <main id="main-container">
      <h1>Regalos:</h1>
        <AddGift handleCallback={addGift}/>
        <div className="gifts-container">
          {giftsList.length !== 0 ? 
            <GiftsList giftsList={giftsList} deleteGift={deleteGift}  />
            : <p>Agrega algun regalo</p>
          }
        </div>
        <DeleteAll deleteAll={deleteAll}/>
        <div className="snowman">&#9731;</div>
      </main>
    </div>
  );
}
