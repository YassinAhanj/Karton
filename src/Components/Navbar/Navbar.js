import { Routes, Route, Link } from 'react-router-dom';
import cpi from "../../images/Navbar/cpi.png";
import search from "../../images/Navbar/search-normal.png";
import ShopingCart from "../../images/Navbar/shopping-cart.png";
import User from "../../images/Navbar/user-square.png";
import HomePage from '../Home/HomePage';
const Navbar = () => {

    return (
        <main>
            <nav className='navbar'>

                <div className=''>
                    <Link className='button_vurud' to="/">
                        <img src={ShopingCart} />
                    </Link>
                    <Link className='button_vurud' to="/">
                        <img src={User} />
                    </Link>
                    <form>
                        <input
                            type="text"
                            placeholder="سرچ"
                        />
                        <button type='submit'>
                            <img src={search} />
                        </button>
                    </form>
                </div>
                <div className='links'>
                    <div className='link'>
                        <Link to="/" >تماس با ما</Link>
                    </div>
                    <div className='link'>
                        <Link to="/" >محصولات</Link>
                    </div>
                    <div className='link'>
                        <Link to="/" >درباره ما</Link>
                    </div>
                    <div className='link'>
                        <Link to="/" >وبلاگ</Link>
                    </div>
                </div>
                <img className='Ellipse1' src={cpi} alt="کارتن پلاست ایرانیان" />
            </nav>
            <Routes className="routes">
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </main>
    )
}
export default Navbar;
