import React from 'react';
import '../../assets/Styles/Components/product.scss';
import SP1 from '../../assets/Images/shop/sp4.jpg';
import SP2 from '../../assets/Images/shop/sp4a.jpg';
import SP3 from '../../assets/Images/shop/sp5a.jpg';
import SP4 from '../../assets/Images/shop/sp6a.jpg';




const ProductDetail = () => {
    const addCart = () => {
        // Code xử lý khi thêm sản phẩm vào giỏ hàng
    };

    const Tang = () => {
        // Code xử lý tăng số lượng sản phẩm
    };

    const Showanh2 = (element) => {
        // Code xử lý khi click vào hình ảnh sản phẩm
    };

    return (
        <>
            <section className="Content">
            <div className="Content-left">
                <div className="laptop-list-img">
                    <div><img className="img-item" onClick={() => Showanh2(this)} src={SP1} /></div>
                    <div><img className="img-item" onClick={() => Showanh2(this)} src={SP2} /></div>
                    <div><img className="img-item" onClick={() => Showanh2(this)} src={SP3} /></div>
                    <div><img className="img-item" onClick={() => Showanh2(this)} src={SP4} /></div>
                    <div><img className="img-item" onClick={() => Showanh2(this)} src={SP1} /></div>
                </div>
            </div>
            <div className="Main-Content">
                <img id="Main-Content-Adidas" src={SP1} />
                <div className="head_icon_1">
                    <a href={SP1}>
                        <i className="fa-solid fa-arrows-up-down-left-right"></i>
                    </a>
                </div>
            </div>
            <div className="Content-right">
                <div className="Content-Top">
                    <h3 className="Content_Top_O"> Kids Essentials Tee </h3>
                    <p className="Content_Top_Code_T"> Tình trạng: Còn hàng </p>
                </div>
                <div className="Content-Center">
                    <p className="price"> 250.000đ </p>
                </div>
                <div className="Content-Size">
                    <div className="Content_Center_Size_O"><input type="button" value="S" className="fist" /></div>
                    <div className="Content_Center_Size_O"><input type="button" value="M" /></div>
                    <div className="Content_Center_Size_O"><input type="button" value="L" /></div>
                    <div className="Content_Center_Size_O"><input type="button" value="XL" /></div>
                    <div className="Content_Center_Size_O"><input type="button" value="XXL" /></div>    
                </div>
                <div className="Content-Button">
                    <div className="Content_Float">
                        <input type="button" onClick={() => Tang()} value="-" className="Content_Float_add" />
                        <input type="text" value="1" min="1" className="Content_Float_minus" />
                        <input type="button" value="+" className="Content_Float_add" />
                    </div>
                    <div className="Content_Color">
                        <button className="Content_Center_Color_O" onClick={() => addCart()}> Thêm Vào Giỏ </button>
                    </div>
                </div>
                <div className="Content-Current">
                    <div className="Content_Current_0">
                        <p>Mô Tả :</p>
                        <ul className="Content_Current_1">
                            <li className="Content_Current_2">Chất liệu : Vải cotton 250 gsm</li>
                            <li className="Content_Current_2">Màu sắc : Đen</li>
                            <li className="Content_Current_2">Form dáng : T-shirt Regular</li>
                            <li className="Content_Current_2">Cảm hứng thiết kế : Mẫu T-shirt nằm trong mini collection Z-bot với mặt trước được in dòng chữ ClownZ Z-God, mặt sau được in hình nhân vật Z-bot mô phỏng một vị thần với style thiết kế theo phong cách vẽ Nhật Bản, đi kèm với các hoạ tiết lửa ấn tượng</li>
                            <li className="Content_Current_2">Công nghệ in ấn / thiết kế : In kéo lụa</li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>
            
            <div className="Content-center">
                <div className="head-block">
                    <div className="head-font">
                        <h3>SẢN PHẨM LIÊN QUAN</h3>
                    </div>
                    <section>
                        <div className="head-shop">
                            <div className="head-product">
                                <div className="head-box-jpg"> 
                                    <img src="Album/product/sanpham3.jpg" width="215px" height="235px" /> 
                                    <img className="img-hide" src="Album/product/sanpham3a.jpg" width="215px" height="235px" />
                                </div> 
                                <div className="head-box-font">
                                    <div className="head-box-name">
                                        <h5 className="box-name">NFleece Hoodie</h5>
                                    </div>
                                    <div className="head-box-price">
                                        <p className="box-price">
                                            <span>1.650.00đ</span>
                                        </p>
                                    </div>
                                </div> 
                            </div>
                            <div className="head-product">
                                <div className="head-box-jpg">
                                    <img src="Album/product/sanpham4.jpg" width="215px" height="235px" /> 
                                    <img className="img-hide" src="Album/product/sanpham5a.jpg" width="215px" height="235px" />
                                </div>
                                <div className="head-box-font">
                                    <div className="head-box-name">
                                        <h5 className="box-name">Fleece Classic Sweatpant</h5>
                                    </div>
                                    <div className="head-box-price">
                                        <p className="box-price">
                                            <span>1.650.000đ</span>
                                        </p>
                                    </div>
                                </div> 
                            </div>
                            <div className="head-product">
                                <div className="head-box-jpg">
                                    <img src="Album/product/sanpham5.jpg" width="215px" height="235px" /> 
                                    <img className="img-hide" src="Album/product/sanpham5aa.jpg" width="215px" height="235px" />
                                </div>
                                <div className="head-box-font">
                                    <div className="head-box-name">
                                        <h5 className="box-name">Fleece Polo</h5>
                                    </div>
                                    <div className="head-box-price">
                                        <p className="box-price">
                                            <span>1.650.000đ</span>
                                        </p>
                                    </div>
                                </div> 
                            </div>
                            <div className="head-product">
                                <div className="head-box-jpg">
                                    <img src="Album/product/sanpham6.jpg" width="215px" height="235px" /> 
                                    <img className="img-hide" src="Album/product/sanpham6a.jpg" width="215px" height="235px" />
                                </div> 
                                <div className="head-box-font">
                                    <div className="head-box-name">
                                        <h5 className="box-name">Fleece Relaxed Sweatpant</h5>
                                    </div>
                                    <div className="head-box-price">
                                        <p className="box-price">
                                            <span>1.950.000đ</span>
                                        </p>
                                    </div>
                                </div> 
                            </div>
                            <div className="head-product">
                                <div className="head-box-jpg">
                                    <img src="Album/product/sanpham7.jpg" width="215px" height="235px" /> 
                                    <img className="img-hide" src="Album/product/sanpham7a.jpg" width="215px" height="235px" />
                                </div> 
                                <div className="head-box-font">
                                    <div className="head-box-name">
                                        <h5 className="box-name">Fleece Hoodie</h5>
                                    </div>
                                    <div className="head-box-price">
                                        <p className="box-price">
                                            <span>2.050.000đ</span>
                                        </p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
