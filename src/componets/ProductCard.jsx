import './product.css';
import Camara from '../assests/images/camara.jpg'

let ProductCard=()=>{
    return(
       <div className='main-body'>
        <div className='container'>
            <div className='box-one'>
                <div className='details'>
                    <div className='topic'>
                        Description
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
                        </p>
                    <div className='rating'>
                    <i className="bx bx-star" style={{ color: "#13386d" }}></i>
                    <i className="bx bx-star" style={{ color: "#13386d" }}></i>
                    <i className="bx bx-star" style={{ color: "#13386d" }}></i>
                    <i className="bx bx-star" style={{ color: "#13386d" }}></i>
                    <i className="bx bx-star" style={{ color: "#13386d" }}></i>
                    <i className="bx bx-star" style={{ color: "#13386d" }}></i>
                    </div>
                    <div className='price-box'>
                        <div className='discount'>
                            $1800.00
                        </div>
                        <div className='price'>$13000.00</div>
                    </div>
                    <div className='button1'>
                        <button>Add To Card</button>
                    </div>
                </div>
            </div>
            <div className='box-two'>
                <div className='image-box'>
                    <div className='image'>
                        <img src={Camara} alt="Camara"/>
                    </div>
                </div>
                <div className='info'>
                    <div className='brand'>
                        Sony
                    </div>
                    <div className='name'>
                        SONY AlPHA A7 KIT
                    </div>
                    <div className='shipping'>FREE SHIPPING</div>
                    <div className='button2'>
                        <button>Login For More</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default ProductCard;