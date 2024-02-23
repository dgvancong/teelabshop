import Blog from '../pages/Blog/blog';
import Shopping from '../pages/Shopping/shopping';
import Login from '../pages/Login/login';
import Signup from '../pages/Signup/signup';
import MyHome from '../pages/MyHome/myhome';
import Contacts from '../pages/Contacts/contacts';
import ClientAbout from '../pages/About/about';
import Product from '../pages/Product/product';

const publicRouters = [
    {path: '/', components: MyHome},
    {path: '/blog', components: Blog},
    {path: '/contact', components: Contacts},
    {path: '/shoping', components: Shopping},
    {path: '/login', components: Login},
    {path: '/signup', components: Signup},
    {path: '/about', components:ClientAbout },
    {path: '/product', components:Product },
]

const privateRouters = [

]

export { publicRouters, privateRouters }