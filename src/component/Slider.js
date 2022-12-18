import './Slider.css'

export default function Slider(){
    return (
        <>
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000" className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://imageio.forbes.com/specials-images/imageserve/5d95d03767dd830006a295b6/GETTY/960x0.jpg?format=jpg&width=960" className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?w=2000" className="d-block w-100 height-500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
    );
}