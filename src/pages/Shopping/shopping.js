import React from 'react';
import '../../assets/Styles/Components/shop.scss';
import SP1 from '../../assets/Images/shop/sp1.jpg';
import SP2 from '../../assets/Images/shop/sp2.jpg';
import SP3 from '../../assets/Images/shop/sp3.jpg';
import SP4 from '../../assets/Images/shop/sp4.jpg';
import SP5 from '../../assets/Images/shop/sp5.jpg';
import SP6 from '../../assets/Images/shop/sp6.jpg';
import SP7 from '../../assets/Images/shop/sp7.jpg';
import SP8 from '../../assets/Images/shop/sp8.jpg';
import SP9 from '../../assets/Images/shop/sp11.jpg';
import SP10 from '../../assets/Images/shop/sp10.jpg';
import SP12 from '../../assets/Images/shop/sp12.jpg';
import SP13 from '../../assets/Images/shop/sp13.jpg';
import SP14 from '../../assets/Images/shop/sp14.jpg';
import SP15 from '../../assets/Images/shop/sp15.jpg';
import SP16 from '../../assets/Images/shop/sp16.jpg';
import SP17 from '../../assets/Images/shop/sp17.jpg';


const TrendingProducts = () => {
    return (
        <section className="trending-product" id="trending">
            <div id="primary_nav_wrap">
                <div className="fillter-right">
                    <ul>
                        <li><a href="#">Danh Mục <i className='bx bx-chevron-down'></i></a>
                            <ul>
                                <li><a href="#">Tất cả sản phẩm</a></li>
                                <li><a href="#">Accessory</a></li>
                                <li><a href="#">Top</a>
                                    <ul>
                                        <li><a href="#">T-Shirt</a></li>
                                        <li><a href="#">Polo</a></li>
                                        <li><a href="#">Hoodies & Footwear</a></li>
                                        <li><a href="#">Jacket & Vests</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Short & Trunks</a></li>
                                <li><a href="#">Caps</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="fillter-left">
                    <select name="" id="">
                        <option value="">Mới Nhất</option>
                        <option value="">Tên Từ A - Z</option>
                        <option value="">Giá Từ Cao - Thấp</option>
                        <option value="">Giá Từ Thấp - Cao</option>
                    </select>
                </div>
            </div>
            <div className="center-text">
                <h2>ESSENTIALS</h2>
            </div>

            {/* Sản Phẩm 1 */}
            <div className="products">

                <div className="row">
                    <img src={SP4} alt="" />
                    <div className="price">
                        <h4>
                            <a href="/product"> Kids Essentials Tee</a>
                        </h4>
                        <p>250.000 ₫ </p>
                    </div>
                </div>
                <div className="row">
                    <img src={SP2} alt="" />
                    <div className="price">
                        <h4>
                            Essentials Tee
                        </h4>
                        <p>150.000 ₫ </p>
                    </div>
                </div>
                <div className="row">
                    <img src={SP3} alt="" />
                    <div className="price">
                        <h4>
                            Cotton SS T-Shirt
                        </h4>
                        <p>640.000 ₫ </p>
                    </div>
                </div>
                <div className="row">
                    <img src={SP1} alt="" />
                    <div className="price">
                        <h4>
                            Fleece Classic Sweatpant
                        </h4>
                        <p>850.000 ₫ </p>
                    </div>
                </div>

            </div>

            {/* <!-- Sản Phẩm 2 --> */}
    <div className="products">
        
        <div className="row">
            <img src={SP5} alt=""/>
            <div className="price">
                <h4>
                    Lounge Short
                </h4>
                <p>450.000 ₫ </p>
            </div>
        </div>

        <div className="row">
            <img src={SP6} alt="" />
            <div className="price">
                <h4>
                    Wool Nylon Short
                </h4>
                <p>550.000 ₫ </p>
            </div>
        </div>

        <div className="row">
            <img src={SP7} alt="" />
            <div className="price">
                <h4>
                    Running Nylon Short
                </h4>
                <p>150.000 ₫ </p>
            </div>
        </div>

        <div className="row">
            <img src={SP8} alt="" />
            <div className="price">
                <h4>
                    Essentials Sweatshort
                </h4>
                <p>850.000 ₫ </p>
            </div>
        </div>

    </div>

            {/* <!-- Sản Phẩm 3 --> */}
    <div className="products">
        
        <div className="row">
            <img src={SP9} alt="" />
            <div className="price">
                <h4>
                    Wool Overcoat
                </h4>
                <p>750.000 ₫ </p>
            </div>
        </div>

        <div className="row">
            <img src={SP10} alt="" />
            <div className="price">
                <h4>
                    Twill Car Coat
                </h4>
                <p>950.000 ₫ </p>
            </div>
        </div>

        <div className="row">
            <img src={SP12} alt="" />
            <div className="price">
                <h4>
                    Twill Car Coat
                </h4>
                <p>350.000 ₫ </p>
            </div>
        </div>

        <div className="row">
            <img src={SP13} alt="" />
            <div className="price">
                <h4>
                    Twill Car Coat
                </h4>
                <p>250.000 ₫ </p>
            </div>
        </div>

    </div>

        {/* <!-- Sản Phẩm 4 --> */}
        <div className="products">
        
            <div className="row">
                <img src={SP14} alt="" />
                <div className="price">
                    <h4>
                        Essentials Crewneck
                    </h4>
                    <p>750.000 ₫ </p>
                </div>
            </div>
    
            <div className="row">
                <img src={SP15} alt="" />
                <div className="price">
                    <h4>
                        Essentials Ls Polo
                    </h4>
                    <p>950.000 ₫ </p>
                </div>
            </div>
    
            <div className="row">
                <img src={SP16} alt="" />
                <div className="price">
                    <h4>
                        Essentials Crewneck
                    </h4>
                    <p>350.000 ₫ </p>
                </div>
            </div>
    
            <div className="row">
                <img src={SP17} alt="" />
                <div className="price">
                    <h4>
                        Essentials Mockneck
                    </h4>
                    <p>250.000 ₫ </p>
                </div>
            </div>
    
        </div>

            <div className="Content_Top_2">
                <button>
                    <a> Xem Thêm </a>
                </button>
            </div>
        </section>
    );
}

export default TrendingProducts;
