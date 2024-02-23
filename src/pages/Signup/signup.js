import React from 'react';
import '../../assets/Styles/Components/login.scss';

const SignForm = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className="Content">
            <div className="Content_Left">
                <h1 className="Content_left_font"> Đăng Nhập</h1>
                <h1 className="Content_left_font_hr"></h1>
            </div>
            <form onSubmit={handleLogin}>
                <div className="Content_right_login">
                    <input type="text" name="LoginUser" placeholder="Họ và Tên" id="username" /> 
                </div>
                <div className="Content_right_login">
                    <input type="email" name="LoginUser" placeholder="Email" id="email" /> 
                </div>
                <div className="Content_right_password">
                    <input type="password" name="LoginPassword" placeholder="Mật Khẩu" id="password" /> 
                </div>
                <div className="Content_right_font">
                    Forgot Password?
                </div>
                <div className="Content_right_test" id="dangnhap">
                    <button type="submit"> Đăng Nhập </button>
                </div>
                <div className="Content_right_font_1">
                    Or login with
                </div>
                <div className="link">
                    <div className="Content_right_Facebook">
                        <a href="https://www.facebook.com/DonggVannCongg/"><i className="fa-brands fa-facebook"><span> Facebook </span></i></a>
                    </div>
                    <div className="Content_right_Instargam">
                        <a href="https://www.instagram.com/12th24.2002/"><i className="fa-brands fa-instagram"><span> Instagram </span></i></a>
                    </div>
                </div>
                <div className="Content_right_font_2">
                    Don't have account?  <span><a href="/signup"> Signup Now .</a></span>
                </div>
            </form>
        </div>
    );
}

export default SignForm;
