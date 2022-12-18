import { Link } from 'react-router-dom';

export default function Product(props) {

    // console.log(props);
    const { product ,showButton} = props;
    return (<>
    <div className="card" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description}
              </p>
              <p className="card-text">{product.price}</p>
              {showButton && <Link to={`/ProductDetails/${product.id}`} className="btn btn-primary">
                Details
              </Link>}
              
            </div>
          </div> 
    </>);
}