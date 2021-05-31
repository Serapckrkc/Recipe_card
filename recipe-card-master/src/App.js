import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Yaprak Sarması",
    date: "31 Mayıs 2021",
    image:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/5b645cde66be5d25a0c1e13c.jpg",
    description:
      "Zeytinyağlı yaprak sarma, günün her öğününde tüketilebilen, davet sofralarına ve özel günlere yakışan bir lezzet. Pirinç, kuru soğan, çeşitli yeşillikler ve baharatlarla karıştırılarak harmanlanır. Asma yaprağıyla hazırlanan iç harçla doldurularak sarılır. Üzerine dilimlenen limon ya da yoğurtla sunuma hazırlanır. ",
  };

  const likeCount = 572;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          isLiked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;
