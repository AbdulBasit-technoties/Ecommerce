// src/App.jsx
import { useState } from 'react';
import HomePage2 from './Pages/HomePage2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage3 from './Pages/HomePage3';
import HomePage4 from './Pages/HomePage4';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import BlogPage from './Pages/BlogPage';
import BlogDetails from './Pages/BlogDetails';
import SalePage from './Pages/SalePage';
import UserAccount from './Components/MyAccount/UserAccount';
import Billing from './Components/MyAccount/Billing';
import Payment from './Components/MyAccount/Payment';
import Invoice from './Components/MyAccount/Invoice';
import Social from './Components/MyAccount/Social';
import Notification from './Components/MyAccount/Notification';
import Setting from './Components/MyAccount/Setting';
import Confirmation from './Components/EmailTemplate/Confirmation';
import Cart from './Components/EmailTemplate/Cart';
import Offer from './Components/EmailTemplate/Offer';
import OrderSuccess from './Components/EmailTemplate/OrderSuccess';
import GiftVoucher from './Components/EmailTemplate/GiftVoucher';
import ResetPassword from './Components/EmailTemplate/ResetPassword';
import ItemReview from './Components/EmailTemplate/ItemReview';
import Career from './Pages/Career';
import OverView from './HelpCenter/OverView';
import HelpCenterFaq from './HelpCenter/HelpCenterFaq';
import HelpCenterGuides from './HelpCenter/HelpCenterGuides';
import HelpCenterSupport from './HelpCenter/HelpCenterSupport';
import Login from './Components/AuthPages/Login';
import Register from './Components/AuthPages/Register';
import ForgotPassword from './Components/AuthPages/ForgotPassword';
import LockScreen from './Components/AuthPages/LockScreen';
import RegisterSuccess from './Components/AuthPages/RegisterSuccess';
import TermsOfService from './Components/Utility/TermsOfService';
import PrivactPolicy from './Components/Utility/PrivactPolicy';
import CommingSoon from './Components/Special/CommingSonn'
import Maintanance from './Components/Special/Maintanance'
import Error from './Components/Special/Error'
import ShopGrid from './Components/Shops/ShopGrid';
import ShopGridLeft from './Components/Shops/ShopGridLeft';
import ShopList from './Components/Shops/ShopList';
import ShopListLeft from './Components/Shops/ShopListLeft';
import ShopDetails from './Components/Shops/ShopDetails';
import ShopCart from './Components/Shops/ShopCart';
import ShopCheckOut from './Components/Shops/ShopCheckOut';
import OurStore from './Components/Shops/OurStore';
import Brands from './Components/Shops/Brands';
import CompanyProduct from './Components/Shops/CompanyProduct';
import RecentlyViewedProduct from './Components/Shops/RecentlyViewedProduct';
import HomePage1 from './Pages/HomePage1';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/home1" element={<HomePage2 />} />
        <Route path="/home2" element={<HomePage3 />} />
        <Route path="/home3" element={<HomePage4 />} />
        <Route path="/About-Us" element={<AboutUsPage />} />
        <Route path="/Contact-Us" element={<ContactUsPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/BlogDetails" element={<BlogDetails/>} />
        <Route path="/Sale" element={<SalePage />} />
        <Route path="/User-Account" element={<UserAccount />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/OrderSuccess" element={<OrderSuccess />} />
        <Route path="/GiftVoucher" element={<GiftVoucher />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ItemReview" element={<ItemReview />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/OverView" element={<OverView />} />
        <Route path="/HelpCenterFaq" element={<HelpCenterFaq />} />
        <Route path="/HelpCenterGuides" element={<HelpCenterGuides />} />
        <Route path="/HelpCenterSupport" element={<HelpCenterSupport />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterSuccess" element={<RegisterSuccess />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/LockScreen" element={<LockScreen />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivactPolicy" element={<PrivactPolicy />} />
        <Route path="/CommingSoon" element={<CommingSoon />} />
        <Route path="/Maintanance" element={<Maintanance />} />
        <Route path="/404" element={<Error />} />
        <Route path="/ShopGrid" element={<ShopGrid />} />
        <Route path="/ShopGridLeft" element={<ShopGridLeft />} />
        <Route path="/ShopList" element={<ShopList />} />
        <Route path="/ShopListLeft" element={<ShopListLeft />} />
        <Route path="/ShopDetails" element={<ShopDetails />} />
        <Route path="/ShopCart" element={<ShopCart />} />
        <Route path="/ShopCheckOut" element={<ShopCheckOut />} />
        <Route path="/OurStore" element={<OurStore />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/CompanyProduct" element={<CompanyProduct />} />
        <Route path="/RecentlyViewedProduct" element={<RecentlyViewedProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
