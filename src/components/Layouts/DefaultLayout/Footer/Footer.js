import React from 'react';
import '../../../../assets/Styles/Layouts/Footer.scss';
import Logo from '../../../../assets/Images/logo_menu_scroll.webp';
import SP1 from '../../../../assets/Images/icon-pay-01.png';
import SP2 from '../../../../assets/Images/icon-pay-02.png';
import SP3 from '../../../../assets/Images/icon-pay-03.png';

const Footers = () => {
    return (
        <>
            <footer className="contact">
                <div className="contact-info">
                    <div className="first-info">
                        <img src={Logo} alt="" />
                        <p>So 10 TT.ThanhHa HaiDuong</p>
                        <p>0334624356</p>
                        <p>dongvancong24@gmail.com</p>
                        <div className="first-icon">
                            <a href="https://www.facebook.com/"><i className='bx bxl-facebook-circle'></i></a>
                            <a href="https://www.tiktok.com/"><i className='bx bxl-tiktok' ></i></a>
                            <a href="https://www.instagram.com/"><i className='bx bxl-instagram' ></i></a>
                            <a href="https://www.youtube.com/"><i className='bx bxl-youtube' ></i></a>
                            <a href="https://www.twitch.com/"><i className='bx bxl-twitch' ></i></a>
                        </div>
                    </div>

                    <div className="second-info">
                        <h4>Support</h4>
                        <p>Contact us</p>
                        <p>About page</p>
                        <p>Size Guide</p>
                        <p>Shopping & Resturns</p>
                        <p>Privacy</p>
                    </div>

                    <div className="third-info">
                        <h4>Shop</h4>
                        <p>Men's Shopping</p>
                        <p>Women's Shopping</p>
                        <p>Kids's Shopping</p>
                        <p>Furniture</p>
                        <p>Discount</p>
                    </div>

                    <div className="fourth-info">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Affiliate</p>
                        <p>Login</p>
                    </div>

                    <div className="five-info">
                        <h4>Subscribe</h4>
                        <img src={SP1} alt="payment-1" />
                        <img src={SP2} alt="payment-2" />
                        <img src={SP3} alt="payment-3" />
                    </div>
                </div>
                <div className="end-text">
                    <p>Copyright @2022. All Rights Reserved. Designed By Dong Van Cong. </p>
                </div>
            </footer>
        </>
    );
};

export default Footers;
