import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../../assets/Styles/Components/myhome.scss';
import Block1 from '../../assets/Images/block_home_category1_new.jpg';
import Block2 from '../../assets/Images/block_home_category2_new.jpg';
import Block3 from '../../assets/Images/block_home_category3_new.jpg';

import SP1 from '../../assets/Images/product/sanpham1.jpg';
import SP2 from '../../assets/Images/product/sanpham2.jpg';
import SP3 from '../../assets/Images/product/sanpham3.jpg';
import SP4 from '../../assets/Images/product/sanpham4.jpg';
import SP5 from '../../assets/Images/product/sanpham5.jpg';
import SP6 from '../../assets/Images/product/sanpham6.jpg';
import SP7 from '../../assets/Images/product/sanpham7.jpg';
import SP8 from '../../assets/Images/product/sanpham8.jpg';
import SP9 from '../../assets/Images/product/sanpham9.jpg';
import SP10 from '../../assets/Images/product/sanpham10.jpg';
import SP11 from '../../assets/Images/product/sanpham11.jpg';
import SP12 from '../../assets/Images/product/sanpham12.jpg';
import SP13 from '../../assets/Images/z3795273869585_39f94d2936dc28ee191dd4d47e4fc321.jpg';
import SP14 from '../../assets/Images/mceclip1_6.jpg';
import SP15 from '../../assets/Images/mceclip2_89.jpg';
import SP16 from '../../assets/Images/mceclip3_16.jpg';
import Slide from '../../components/Layouts/DefaultLayout/Slide/Slide';


const MyHome = () => {
    return (
        <>
        <Slide/>
            <div className="module three-up overlay-true">
                <div className="module-interior">
                    <div className="block-module block-1">
                        <div className="ratiobox">
                            <img src={Block1} alt="" />
                            <div className="block-content block-overlay"></div>
                        </div>
                    </div>
                    <div className="block-module block-2">
                        <div className="ratiobox">
                            <img src={Block2} alt="" />
                            <div className="block-content block-overlay"></div>
                        </div>
                    </div>
                    <div className="block-module block-3">
                        <div className="ratiobox">
                            <img src={Block3} alt="" />
                            <div className="block-content block-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="trending-product" id="trending">
                <div className="center-text">
                    <h2>Our Trending Products</h2>
                </div>

                {/* Sản Phẩm 1 */}
                <div className="products">
                    <div className="row">
                        <img src={SP1} alt="" />
                        <div className="product-text">
                            <h5>Sale</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                <a href="Products.html"> Nylon Twill Bomber</a>
                            </h4>
                            <p>250.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP2} alt="" />
                        <div className="product-text">
                            <h5>Sale</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                Nylon Twill Relaxed Pant
                            </h4>
                            <p>150.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP3} alt="" />
                        <div className="product-text">
                            <h5>Sale</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                Fleece Hoodie
                            </h4>
                            <p>640.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP4} alt="" />
                        <div className="product-text">
                            <h5>Sale</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                Fleece Classic Sweatpant
                            </h4>
                            <p>850.000 ₫ </p>
                        </div>
                    </div>
                </div>

                {/* {Sản Phẩm 2} */}
                <div className="products">
                    <div className="row">
                        <img src={SP5} alt="" />
                        <div className="product-text">
                            <h5>New Arrival</h5>
                        </div>
                        <div className="ratting">
                        </div>
                        <div className="price">
                            <h4>
                                Fleece Crewneck
                            </h4>
                            <p>450.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP6} alt="" />
                        <div className="product-text">
                            <h5>New Arrival</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                Fleece Relaxed Sweatpant
                            </h4>
                            <p>550.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP7} alt="" />
                        <div className="product-text">
                            <h5>New Arrival</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                Fleece Hoodie
                            </h4>
                            <p>150.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP8} alt="" />
                        <div className="product-text">
                            <h5>New Arrival</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                Fleece Classic Sweatpant
                            </h4>
                            <p>850.000 ₫ </p>
                        </div>
                    </div>
                </div>

                {/* {Sản Phẩm 3} */}
                <div className="products">
                    <div className="row">
                        <img src={SP9} alt="" />
                        <div className="product-text">
                            <h5>Sale</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                Cotton Work Jacket
                            </h4>
                            <p>750.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP10} alt="" />
                        <div className="product-text">
                            <h5>Sale</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                Cotton Work Pant
                            </h4>
                            <p>950.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP11} alt="" />
                        <div className="product-text">
                            <h5>Sale</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                FG Hoodie
                            </h4>
                            <p>350.000 ₫ </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={SP12} alt="" />
                        <div className="product-text">
                            <h5>Sale</h5>
                        </div>
                        <div className="ratting">
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className="price">
                            <h4>
                                The Vintage Sweatpant
                            </h4>
                            <p>250.000 ₫ </p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="client-reviews">
                <div className="revies">
                    <h3>Client Reviews</h3>
                    <img src={SP13} alt="" />
                    <p>
                        Chúng tôi đam mê với việc truyền tải nền văn hoá Hip-hop, Streetwear lâu đời từ Âu Mỹ tới với những khách hàng Việt Nam. Để mỗi sản phẩm được bán ra, ngoài sự chau chuốt về chất lượng và thiết kế, chúng tôi còn đem vào đó một tinh thần vui vẻ, màu sắc và thật nhiều giá trị phía sau 
                        Và sẽ không dừng lại ở đó, ClownZ mong muốn trở thành 1 phần quan trọng trong việc phát triển, phổ biến văn hoá hiphop nói riêng & là đại diện nổi bật của tinh thần đột phá trong thời trang đường phố Việt Nam
                    </p>
                    <h2>Dong Van Cong</h2>
                </div>
            </section>

            {/* <!-- Blog --> */}
            <section className="client-blog">
                <div className="up-center-text">
                    <h2>New Blogs</h2>
                </div>
                <div className="update-cart">
                    <div className="cart">
                        <img src={SP14} alt="" />
                        <h5>21.05.2023</h5>
                        <h4>Bí kíp phối đồ tập gym nam cực chất lại thoải mái cho chàng</h4>
                        <p>Trang phục tập gym nam là một tiêu chí quan trọng được nhiều anh em quan tâm vì nó ảnh hưởng trực tiếp đến hiệu quả tập luyện của bạn. </p>
                        <h6>Còn tiếp...</h6>
                    </div>

                    <div className="cart">
                        <img src={SP15} alt="" />
                        <h5>14.01.2022</h5>
                        <h4>Bí kíp tạo dáng chụp ảnh nam đẹp ngầu như mẫu nam Hàn Quốc</h4>
                        <p>Các tư thế tạo dáng chụp ảnh nam được chia thành 3 kiểu chính, đó là đứng, ngồi và ngả (nằm). Với mỗi tư thế, bạn có thể chuyển đổi các vị trí đặt chân, cánh tay hay bàn tay khác nhau.</p>
                        <h6>Còn tiếp...</h6>
                    </div>

                    <div className="cart">
                        <img src={SP16} alt="" />
                        <h5>21.01.2022</h5>
                        <h4>10 ý tưởng phối đồ mùa hè cực cool cùng BST Coolwaves</h4>
                        <p>BST mùa hè Coolwaves giúp bạn tận hưởng mùa hè với rất nhiều sản phẩm cực kì thời trang và sành điệu cho chàng, bạn đã kịp cập nhật những mẫu mới này chưa?</p>
                        <h6>Còn tiếp...</h6>
                    </div>
                </div>

            </section>

        </> 
        
     );
}

export default MyHome;