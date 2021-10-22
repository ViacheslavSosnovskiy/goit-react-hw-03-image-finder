const Button = ({ onLoadMore }) => {
  return (
    <>
      <button type="button" onLoadMore={onLoadMore} className="Button">
        Load more
      </button>
    </>
  );
};

export default Button;
