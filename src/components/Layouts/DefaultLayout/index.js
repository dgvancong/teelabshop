import Header from "./Header/Header";
import Slide from "./Slide/Slide";
import Footers from "./Footer/Footer";


function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
            <Footers/>
        </div>
     );
}

export default DefaultLayout;