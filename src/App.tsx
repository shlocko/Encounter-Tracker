import { useState } from 'react';
import EncounterCard from './components/EncounterCard';
import './styles/utils.css';
import { encounterCard } from './types';

function App() {
    const [cards, setCards] = useState<encounterCard[]>([
        {
            name: "Creature",
            initiative: 12,
            health: 20,
            counter1: 1,
            counter2: 2,
            counter3: 3,
        },
    ]);

    const setCard = (newCard: encounterCard, index: number) => {
        let newCards = [...cards];
        newCards[index] = newCard;
        setCards(newCards);
    }


    return (
        <>
            <div>
                <h1 onClick={async () => {
                    try {
                        const response = await fetch('/api/items');
                        if (!response.ok) {
                            console.log("DIE");
                        } else {
                            console.log(await response.json());
                        }
                    } catch {
                        console.log("DIED");
                    }
                }}> Hello react! </h1>
                <div className={"container"}>
                    {cards.map((card, index) => (
                        <EncounterCard card={card} setCard={(newCard: encounterCard) => setCard(newCard, index)} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
