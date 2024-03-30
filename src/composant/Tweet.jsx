export function Tweet({ id, name, content, like, onDelete, onLike }) {
  const handleLikeClick = () => {

    onLike(id);
  };

  return (
    <div className="tweet">
      <button className="delete" onClick={() => onDelete(id)}>
        X
      </button>
      <h3>{name}</h3>
      <h3>{content}</h3>
      <button onClick={handleLikeClick}>{like}</button>
    </div>
  );
}