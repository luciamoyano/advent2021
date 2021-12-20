import {useState} from 'react';
import GiftsList from "./components/GiftsList";
import AddGift from "./components/AddGift";
import "./styles.scss";
import DeleteAll from './components/DeleteAll';

export default function App() {
const [giftsList, setGiftsList] = useState([{'name':'mundial de qatar 2022','quantity':1},{'name':'milanesas con puré','quantity':365}])

  
  function addGift(name:any, quantity:number) {
    let isRepeated = false;
    giftsList.map((gift, key)=>{
      if (name == gift.name) {
        isRepeated = true;
        let newList = [...giftsList];
        newList[key] = {...newList[key],'quantity':+gift.quantity + +quantity};
        setGiftsList(newList)
      }
    })
    if(!isRepeated) {
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
