import styles from '../styles/encounteCard.module.css';
import { encounterCard } from '../types';


export default function EncounterCard({ card, setCard }: {
    card: encounterCard,
    setCard: Function
}) {
    const setValue = <K extends keyof encounterCard, V extends encounterCard[K]>(key: K, value: V) => {
        let newCard = card;
        newCard[key] = value;
        setCard(newCard);
    }


    return (
        <div className={styles.card}>
            <div className={styles.initPicName}>
                <div className={styles.initiative}>
                    <div>
                        Initiative:
                        <input className={styles.inputPrimary} value={card.initiative} onChange={e => {
                            if (+e.target.value) {
                                setValue("initiative", +e.target.value);
                            }
                        }} />
                    </div>
                    <div className={styles.counterBox}>
                        Health:
                        <div>
                            <div className={styles.plusButton} onClick={() => setValue("health", card.health - 1)}>-</div>
                            <input className={styles.inputPrimary} value={card.health} onChange={e => {
                                if (+e.target.value) {
                                    setValue("health", +e.target.value)
                                }
                            }} />
                            <div className={styles.plusButton} onClick={() => setValue("health", card.health + 1)}>+</div>
                        </div>
                    </div>
                </div>
                <img className={styles.thumbnail} />
                <div className={styles.name}>{card.name}
                    <div className={styles.counterBox}>
                        <div>
                            <div className={styles.plusButton} onClick={() => setValue("counter1", card.counter1 - 1)}>-</div>
                            <input className={styles.inputSecondary} value={card.counter1} onChange={e => {
                                if (+e.target.value) {
                                    setValue("counter1", +e.target.value);
                                }
                            }} />
                            <div className={styles.plusButton} onClick={() => setValue("counter1", card.counter1 + 1)}>+</div>
                        </div>
                        <div>
                            <div className={styles.plusButton} onClick={() => setValue("counter2", card.counter2 - 1)}>-</div>
                            <input className={styles.inputSecondary} value={card.counter2} onChange={e => {
                                if (+e.target.value) {
                                    setValue("counter2", +e.target.value);
                                }
                            }} />
                            <div className={styles.plusButton} onClick={() => setValue("counter2", card.counter2 + 1)}>+</div>
                        </div>
                        <div>
                            <div className={styles.plusButton} onClick={() => setValue("counter3", card.counter3 - 1)}>-</div>
                            <input className={styles.inputSecondary} value={card.counter3} onChange={e => {
                                if (+e.target.value) {
                                    setValue("counter3", +e.target.value);
                                }
                            }} />
                            <div className={styles.plusButton} onClick={() => setValue("counter3", card.counter3 + 1)}>+</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.status}>
                <div>
                    Status Info
                </div>
            </div>
        </div>
    )
}
