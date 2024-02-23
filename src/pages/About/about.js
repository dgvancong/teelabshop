import React from 'react';
import '../../assets/Styles/Components/about.scss';

import SP1 from '../../assets/Images/a24kkyd95giyc.jpg';


function ClientAbout() {
    return (
        <div className="Content">
            <div className="Content-right">
                <div className="Content-right-1">
                    <h3 className="Content-right-h3"> Giới Thiệu </h3>
                </div>
                <div className="Content-right-2">
                    <p className="Content-right-p"> Fanpage: <a href="https://www.facebook.com/DonggVannCongg">https://www.facebook.com/DonggVannCongg</a> </p>
                    <p className="Content-right-p"> Instagram: <a href="https://www.instagram.com/12th24.2002/">https://www.instagram.com/12th24.2002/</a> </p>
                    <p className="Content-right-p"> Shopee: <a href="https://shopee.vn/DotieShoes.studio">https://shopee.vn/DotieShoes.studio</a> </p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="Content-right-3">
                    <p className="Content-right-p-1"> Chào các bạn </p>
                    <br />
                    <p className="Content-right-p-1"> Dotie Shoes * chúng mình là một thương hiệu được ra đời vào đầu mùa xuân năm 2022 và chính thức trình làng giới local brands – streetwear tại HY, Vietnam. </p>
                    <br />
                    <p className="Content-right-p-1"> Chúng mình được ra đời trong sự chuyển tiếp giữa một năm cũ đầy biến động của toàn thế giới, bước sang một trang năm mới đầy hứa hẹn. Dotie Shoes tuy mới nhưng tụi mình là một trong những thương hiệu đầu tiên tại HY, Vietnam mang tư duy khác biệt và một cái nhìn hoàn toàn mới về phong cách thời trang đường phố. </p>
                    <br />
                    <p className="Content-right-p-1"> Dotie Shoes  là một lời gọi kết nối mọi người, kết nối giữa nền văn hóa phương Đông và phương Tây. Chúng mình sử dụng hình ảnh những ô cửa sổ chat, chứa đựng những câu chữ yêu thương cùng những hình ảnh dí dỏm, những ký tự và con số từ nay sẽ trở thành những bạn nhân vật nhỏ đáng yêu của Dotie Shoes , giúp Dotie Shoes  mang những lời nhắn nhủ tốt lành đến cho mọi người. </p>
                    <br />
                    <p className="Content-right-p-1"> Với gram màu hiện đại và phong cách tối giản, Dotie Shoes tin chắc các bạn sẽ rất hài lòng cùng Dotie Shoes sánh đôi trên mọi nẻo đường mà vẫn rất cool ngầu đó nha. </p>
                    <br />
                    <p className="Content-right-p-1"> Dotie Shoes xin phép được bật mí đến đây thôi, để dành tặng các bạn sự bất ngờ này trong những bộ sưu tập sắp tới nhen! Các bạn nhớ ủng hộ 8YO nhiệt tình nhé, 8YO luôn bên cạnh vì bạn </p>
                    <br />
                    <p className="Content-right-p-1"> (*) Tên gọi “Dotie Shoes“ (Ey Yo!!!) xuất phát từ lời chào nhau của các bạn trẻ, đặc biệt hiện nay được sử dụng nhiều bởi các bạn trong giới rapper, underground tại Việt Nam. Nhưng nguồn gốc của tên gọi này lại xuất phát từ rất lâu đời ở các quốc gia phương Tây trong thời kì cận hiện đại đến hiện đại. </p>
                </div>
            </div>
            <div className="Content-left">
                <div className="Content-left-font">
                    <h3>Danh Mục Page</h3> 
                </div>
                <div className="Content-left-font-1">
                    <p>Tìm kiếm</p>
                </div>
                <div className="Content-left-font-2">
                    <p>Giới thiệu</p>
                </div>
                <div className="Content-left-font-3">
                    <p> Chính sách đổi trả</p>
                </div>
                <div className="Content-left-font-4"> 
                    <p>Chính sách bảo mật</p>
                </div>
                <div className="Content-left-font-5"> 
                    <p>Điều khoản dịch vụ</p>
                </div>
                <div className="Content-left-img">
                    <img src={SP1} alt="Dotie Shoes Image" className='imgg' />
                </div>
            </div>
        </div>
    );
}

export default ClientAbout;
