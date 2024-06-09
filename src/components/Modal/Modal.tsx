import "./Modal.css";

interface ModalProps {
  card: {
    id: string;
    title: string;
    content: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
    thumbnail: {
      large: string;
      small: string;
    };
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ card, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close-div">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>

        <div className="img-div">
          <img src={card.thumbnail.small} alt={card.title} className="bg-img" />
        </div>

        <div className="content-details">
          <h2>{card.title}</h2>
          <p className="modal-text">{card.content}</p>
          <div className="avatar-role">
            <img
              src={card.author.avatar}
              alt={card.author.name}
              className="author-avatar"
            />
            <div className="name-role">
              <p>
                {card.author.name} - {card.author.role}
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
