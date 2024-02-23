import React from 'react';
import '../../assets/Styles/Components/blog.scss';

import SP1 from '../../assets/Images/mceclip1_6.jpg';
import SP2 from '../../assets/Images/mceclip2_89.jpg';
import SP3 from '../../assets/Images/mceclip3_16.jpg';
import SP4 from '../../assets/Images/358091689_645237820966949_2108057623938145981_n.jpg';
import SP5 from '../../assets/Images/bst-mua-he-coolwaves_18.jpg';

function ClientBlog() {
    return (
        <section className="client-blog">
            <div className="up-center-text">
                <h2>HADES NEW BLOG</h2>
            </div>
            <div className="update-cart">
                <div className="cart">
                    <img src={SP1} alt="" />
                    <h5>21.05.2023</h5>
                    <h4>Bí kíp phối đồ tập gym nam cực chất lại thoải mái cho chàng</h4>
                    <p>Trang phục tập gym nam là một tiêu chí quan trọng được nhiều anh em quan tâm vì nó ảnh hưởng trực tiếp đến hiệu quả tập luyện của bạn. </p>
                    <h6>Còn tiếp...</h6>
                </div>

                <div className="cart">
                    <img src={SP2} alt="" />
                    <h5>14.01.2022</h5>
                    <h4>Bí kíp tạo dáng chụp ảnh nam đẹp ngầu như mẫu nam Hàn Quốc</h4>
                    <p>Các tư thế tạo dáng chụp ảnh nam được chia thành 3 kiểu chính, đó là đứng, ngồi và ngả (nằm). Với mỗi tư thế, bạn có thể chuyển đổi các vị trí đặt chân, cánh tay hay bàn tay khác nhau.</p>
                    <h6>Còn tiếp...</h6>
                </div>

                <div className="cart">
                    <img src={SP3} alt="" />
                    <h5>21.01.2022</h5>
                    <h4>10 ý tưởng phối đồ mùa hè cực cool cùng BST Coolwaves</h4>
                    <p>BST mùa hè Coolwaves giúp bạn tận hưởng mùa hè với rất nhiều sản phẩm cực kì thời trang và sành điệu cho chàng, bạn đã kịp cập nhật những mẫu mới này chưa?</p>
                    <h6>Còn tiếp...</h6>
                </div>

                <div className="cart">
                    <img src={SP4} alt="" />
                    <h5>21.01.2022</h5>
                    <h4>Care&Share x Huỳnh Như THE MOMENTS COLLECTION</h4>
                    <p>BST mùa hè Coolwaves giúp bạn tận hưởng mùa hè với rất nhiều sản phẩm cực kì thời trang và sành điệu cho chàng, bạn đã kịp cập nhật những mẫu mới này chưa?</p>
                    <h6>Còn tiếp...</h6>
                </div>

                <div className="cart">
                    <img src={SP5} alt="" />
                    <h5>21.01.2022</h5>
                    <h4>Khám phá dòng sản phẩm mang công nghệ Excool có tại Coolmate</h4>
                    <p>BST mùa hè Coolwaves giúp bạn tận hưởng mùa hè với rất nhiều sản phẩm cực kì thời trang và sành điệu cho chàng, bạn đã kịp cập nhật những mẫu mới này chưa?</p>
                    <h6>Còn tiếp...</h6>
                </div>
            </div>
        </section>
    );
}

export default ClientBlog;
