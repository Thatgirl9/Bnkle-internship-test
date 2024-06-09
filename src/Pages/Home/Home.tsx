import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch } from "react-redux";
import { incrementClick, cardTitles } from "../../redux/counterSlice";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";
// import axios from "axios";

interface Card {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  thumbnail: {
    large: string;
    small: string;
  };
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCards(data);
        setLoading(false);
        const cardTitle = data.map((card: Card) => ({
          id: card.id,
          title: card.title,
        }));
        dispatch(cardTitles(cardTitle));
      });
  }, [dispatch]);

  const handleCardClick = (card: Card) => {
    dispatch(incrementClick(card.id));
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <>
      <main className="container">
        <p className="next-page">
          <Link to="./analytics" className="link">
            Analytics
          </Link>
        </p>

        {loading ? (
          <Spinner />
        ) : (
          <div className="card-container">
            {cards.map((card) => (
              <div
                key={card.id}
                className="card"
                onMouseEnter={() => setIsHovered(card.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="img-container">
                  <img
                    src={card.thumbnail.small}
                    className="card-img"
                    alt={card.title}
                  />

                  {isHovered === card.id && (
                    <div className="hover-overlay">
                      <p
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(card);
                        }}
                      >
                        Learn More
                      </p>
                    </div>
                  )}
                </div>
                <div className="card-details">
                  <div className="circle-div">
                    <span className="blue-circle"></span>
                    <span className="orange-circle"></span>
                  </div>
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-text">{card.content}</p>
                  <div className="card-name-role-div">
                    <p>
                      {card.author.name} - {card.author.role}
                    </p>
                    <p>Nov 25, 2020</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {showModal && selectedCard && (
          <Modal card={selectedCard} onClose={() => setShowModal(false)} />
        )}
      </main>
    </>
  );
};

export default Home;
