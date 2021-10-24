const Button = ({ getPictureFetch }) => {
  return (
    <button type="button" onClick={getPictureFetch} className="Button">
      Load more
    </button>
  );
};

export default Button;
