function Carousel({ day, prev, next }) {
  return (
    <div
      id="carouselControls"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
      data-bs-touch="false"
      data-bs-keyboard="false"
    >
      <div className="carousel-inner">
        <div className={`carousel-item ${day === "mon" ? "active" : ""}`}>
          <h1 className="text-light text-center">Mon</h1>
        </div>
        <div className={`carousel-item ${day === "tue" ? "active" : ""}`}>
          <h1 className="text-light text-center">Tue</h1>
        </div>
        <div className={`carousel-item ${day === "wed" ? "active" : ""}`}>
          <h1 className="text-light text-center">Wed</h1>
        </div>
        <div className={`carousel-item ${day === "thu" ? "active" : ""}`}>
          <h1 className="text-light text-center">Thurs</h1>
        </div>
        <div className={`carousel-item ${day === "fri" ? "active" : ""}`}>
          <h1 className="text-light text-center">Fri</h1>
        </div>
        <div className={`carousel-item ${day === "sat" ? "active" : ""}`}>
          <h1 className="text-light text-center">Sat</h1>
        </div>
        <div className={`carousel-item ${day === "sun" ? "active" : ""}`}>
          <h1 className="text-light text-center">Sun</h1>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselControls"
        data-bs-slide="prev"
        onClick={prev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselControls"
        data-bs-slide="next"
        onClick={next}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
