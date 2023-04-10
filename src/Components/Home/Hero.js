import bag from "../../images/Hero/bag.png";
import cola from "../../images/Hero/cola.png";
import ig from "../../images/Hero/ig.png";
import phone from "../../images/Hero/phone.png";
import whatsapp from "../../images/Hero/whatsapp.png";
import right from "../../images/Hero/right.png";
import left from "../../images/Hero/Vector.png";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <section>
            <div>
                <Link to="/" >
                    <img src={whatsapp} alt="کارتن پلاست ایرانیان" />
                </Link>
                <Link to="/" >
                    <img src={phone} alt="کارتن پلاست ایرانیان" />
                </Link>
                <Link to="/" >
                    <img src={ig} alt="کارتن پلاست ایرانیان" />
                </Link>
            </div>
            <div>
                <h1>کارتن پلاست ایرانیان</h1>
                <p>بزرگترین مرجع خرید و قیمت کارتن پلاست در ایران گروه صنعتی ایران کارتن پلاست می باشد. محصولات ما با ضخامت هاي 2-12 ميل و گراماژهاي متفاوت تولید می شود ،ما دارای بزگترین کارخانه محصولات تبدیلی کارتن پلاست در ایران می باشیم . این محصولات به دلیل نداشتن آثار تخريبي بر محيط زيست ، در دنيا به عنوان صنعت سبز شناخته میشود . محصول اصلی به دو شکل رول و ورق تولید میگردد که هر کدام در صنایع مختلفی کاربردهای اساسی دارد .</p>
                <Link to="/" >
                    مشاهده محصولات
                </Link>
            </div>
            <div>
                <img src={bag} alt="کارتن پلاست ایرانیان" />
                <img src={cola} alt="کارتن پلاست ایرانیان" />
                <div>
                    <img src={right} alt="ایرانیان کارتن پلاست" />
                    <img src={left} alt="ایرانیان کارتن پلاست" />
                </div>
            </div>
        </section>
    )
}
export default Hero;