const Card = (props) => {
  const { children, imageUrl } = props;
  return (
    <div className="card">
      <div className="card-image">
        {<img src={imageUrl} alt="" height={300} style={{ zIndex: 0 }} />}
      </div>
      <div className="card-body px-4 pb-8">{children}</div>
    </div>
  );
};

export default Card;
