import "./App.css";
import RenderCard from "./components/RenderCard.jsx";
import { createCard } from "./lib/utils.js";

function App() {
  const cards = [];

  for (let i = 1; i <= 104; i++) {
    let card = createCard();
    card.cardNumber = i;
    cards.push(card);
  }

  return (
    <>
      <RenderCard key={cards[0].cardNumber} card={cards[0]} />
    </>
  );
}

export default App;
