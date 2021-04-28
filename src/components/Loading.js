function Loading({ day }) {
  return (
    <div className={`spinner-grow loading ${day}-text`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loading;
