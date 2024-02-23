import React from 'react';
import '../../assets/Styles/Components/contact.scss';
import SP1 from '../../assets/Images/a24kkyd95giyc.jpg';

const Contacts = () => {
    return (
        <div>
            <section className="Product-title">
                <h1 className="title">Liên Hệ Với Chúng Tôi</h1>
            </section>

            <div className="Content">
                <div className="Content-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.5671313822663!2d106.42849303505871!3d20.902066790669075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313585cd89fc930d%3A0x1a654808b16d3fdf!2zQ2jDoW8gRGluaCBExrDhu6FuZw!5e0!3m2!1svi!2s!4v1689012155787!5m2!1svi!2s" width="600" height="670" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="Content-left">
                    <div className="item">
                        <b>CÔNG TY TNHH 2 THÀNH VIÊN HADES</b>
                    </div>
                    <div className="item">
                        <p>Điện thoại:</p>
                        <b><a href="tel:0334624356">0334624356</a></b>
                        <a href="tel:0334624356" className="btn-contact">Gọi ngay</a>
                    </div>
                    <div className="item">
                        <p>Email:</p>
                        <b><a href="mailto:dongvancong24@gmail.com">dongvancong24@gmail.com</a></b>
                        <a href="mailto:dongvancong24@gmail.com" className="btn-contact">Gửi ngay</a>
                    </div>
                    <div className="item">
                        <p>Chatbot:</p>
                        <b><a href="dongvancong24@gmail.com">Messenger</a></b>
                        <a href="dongvancong24@gmail.com" className="btn-contact">Nhắn ngay</a>
                    </div>
                    <div className="item">
                        <p>Giờ mở cửa:</p>
                        <b>Mon - Sun | 09:30 ~ 21:30</b>
                    </div>

                    <div className="content">
                        <table border="1" cellpadding="1" cellspacing="1">
                            <tbody>
                                <tr>
                                    <td>
                                        <p><img data-thumb="original" originalHeight="844" originalWidth="1125" src={SP1} className='imgg' alt="Clown Núi Trúc" /></p>
                                    </td>
                                    <td>
                                        <p><strong>Clown Núi Trúc</strong></p>
                                        <p>45 Núi Trúc, Ba Đình, HN</p>
                                        <p>Mở cửa:&nbsp;<strong>Mon - Sun | 09:30 ~ 21:30</strong></p>
                                        <p>Phone:&nbsp;<strong><a href="tel:0586608660" title="0586608660">058660 8660</a></strong></p>
                                        <p><a href="https://clownz.vn/clownzvn-nui-truc">Xem cửa hàng</a></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img data-thumb="original" originalHeight="267" originalWidth="400" src={SP1} className='imgg' alt="Clown Hồ Đắc Di" /></td>
                                    <td>
                                        <p><strong>Clown Hồ Đắc Di</strong></p>
                                        <p>19 Hồ Đắc Di, Đống Đa, HN</p>
                                        <p>Mở cửa:&nbsp;<strong>Mon - Sun | 09:30 ~ 21:30</strong></p>
                                        <p>Phone:&nbsp;<strong><a href="tel:0586608660" title="0586608660">058660 8660</a></strong></p>
                                        <p><a href="https://clownz.vn/clownzvn-ho-dac-di">Xem cửa hàng</a></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
