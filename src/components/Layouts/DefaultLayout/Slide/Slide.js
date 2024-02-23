import '../../../../assets/Styles/Layouts/Slide.scss';
import Slides from '../../../../assets/Images/slideshow_1.jpg';

function Slide() {
    return ( 
        <div href="Index.html" className="slide">
            <img src={Slides} alt="" />
        </div>
     );
}

export default Slide;