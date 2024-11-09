import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Nav() {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
    setSubDropdown(null); // Close any open sub-menus when the main menu is left
  };

  const handleSubMouseEnter = (subMenu) => {
    setSubDropdown(subMenu);
  };

  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <ul className="flex gap-10 relative lg:flex xs:hidden">
      {/* Home Menu */}
      <li onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>
        <Link
          to="/"
          className={`flex items-center text-lg font-medium font-Dm tracking-[1px] ${
            isActive('/') ? 'text-orange' : 'text-blue'
          }`}
        >
          Home <IoMdArrowDropdown className="ml-1" />
        </Link>
        {dropdown === 'home' && (
          <div className="absolute bg-white shadow-lg rounded-md p-4 w-28">
            <ul className="space-y-2">
              <li><Link to="/home1" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Home 1</Link></li>
              <li><Link to="/home2" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Home 2</Link></li>
              <li><Link to="/home3" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Home 3</Link></li>
            </ul>
          </div>
        )}
      </li>
      
      {/* Product Menu */}
      <li onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
        <Link
          to=""
          className={`flex items-center text-lg font-medium font-Dm tracking-[1px] ${
            isActive('/Products') ? 'text-orange' : 'text-blue'
          }`}
        >
          Shops <IoMdArrowDropdown className="ml-1" />
        </Link>
        {dropdown === 'products' && (
          <div className="absolute bg-white shadow-lg p-4 w-56 rounded-md">
            <ul className="space-y-2">
            <li
                onMouseEnter={() => handleSubMouseEnter('shop-grid')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative"
              >
                <Link
                  to=""
                  className="flex items-center text-black hover:bg-orange hover:text-white p-2 rounded-md"
                >
                  Shop Grid <IoMdArrowDropdown className="ml-1" />
                </Link>
                {subDropdown === 'shop-grid' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-36">
                    <ul className="space-y-2">
                      <li><Link to="/ShopGrid" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Shop Grid</Link></li>
                      <li><Link to="/ShopGridLeft" className="block text-black hover:bg-orange hover:text-white p-2 rounded">ShopGridLeft</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleSubMouseEnter('shop-list')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative"
              >
                <Link
                  to=""
                  className="flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                >
                  Shop List <IoMdArrowDropdown className="ml-1" />
                </Link>
                {subDropdown === 'shop-list' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-36">
                    <ul className="space-y-2">
                      <li><Link to="/ShopList" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Shop List</Link></li>
                      <li><Link to="/ShopListLeft" className="block text-black hover:bg-orange hover:text-white p-2 rounded">ShopListLeft</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li><Link to="/ShopDetails" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Shop Details</Link></li>
              <li><Link to="/ShopCart" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Shop Cart</Link></li>
              <li><Link to="/ShopCheckOut" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Shop CheckOut</Link></li>
              <li><Link to="/OurStore" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Our Store</Link></li>
              <li><Link to="/Brands" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Brands</Link></li>
              <li><Link to="/CompanyProduct" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Company Product</Link></li>
              <li><Link to="/RecentlyViewedProduct" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Recently Viewed Product</Link></li>
            </ul>
          </div>
        )}
      </li>

      {/* Blog Menu */}
      <li onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
        <Link
          className={`flex items-center text-lg font-medium font-Dm tracking-[1px]`}
        >
          Pages <IoMdArrowDropdown className="ml-1" />
        </Link>
        {dropdown === 'blog' && (
          <div className="absolute bg-white shadow-lg p-4 w-42 rounded">
            <ul className="space-y-2">
              <li><Link to="/About-Us" className="block text-black hover:bg-orange hover:text-white p-2 rounded">About Us</Link></li>
              <li
                onMouseEnter={() => handleSubMouseEnter('my-account')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative"
              >
                <Link
                  to=""
                  className="flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                >
                  My Account <IoMdArrowDropdown className="ml-1" />
                </Link>
                {subDropdown === 'my-account' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-36">
                    <ul className="space-y-2">
                      <li><Link to="/User-Account" className="block text-black hover:bg-orange hover:text-white p-2 rounded">User Account</Link></li>
                      <li><Link to="/Billing" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Billing</Link></li>
                      <li><Link to="/Payment" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Payment</Link></li>
                      <li><Link to="/Invoice" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Invoice</Link></li>
                      <li><Link to="/Social" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Social</Link></li>
                      <li><Link to="/Notification" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Notification</Link></li>
                      <li><Link to="/Setting" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Setting</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleSubMouseEnter('email-template')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative"
              >
                <Link
                  to="/email-template"
                  className="flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                >
                  Email Template <IoMdArrowDropdown />
                </Link>
                {subDropdown === 'email-template' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-40">
                    <ul className="space-y-2">
                      <li><Link to="/Confirmation" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Confirmation</Link></li>
                      <li><Link to="/Cart" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Cart</Link></li>
                      <li><Link to="/Offer" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Offer</Link></li>
                      <li><Link to="/OrderSuccess" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Order Success</Link></li>
                      <li><Link to="/GiftVoucher" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Gift Voucher</Link></li>
                      <li><Link to="/ResetPassword" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Reset Password</Link></li>
                      <li><Link to="/ItemReview" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Item Review</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleSubMouseEnter('blogs')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
              >
                  Blog <IoMdArrowDropdown />
                {subDropdown === 'blogs' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-36">
                    <ul className="space-y-2">
                      <li><Link to="/Blog" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Blogs</Link></li>
                      <li><Link to="/BlogDetails" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Blog Detail</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li><Link to="/Career" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Career</Link></li>
              <li
                onMouseEnter={() => handleSubMouseEnter('Help-Center')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
              >
                  Help Center <IoMdArrowDropdown />
                {subDropdown === 'Help-Center' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-36">
                    <ul className="space-y-2">
                      <li><Link to="/OverView" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Overview</Link></li>
                      <li><Link to="/HelpCenterFaq" className="block text-black hover:bg-orange hover:text-white p-2 rounded">FAQs</Link></li>
                      <li><Link to="/HelpCenterGuides" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Guides</Link></li>
                      <li><Link to="/HelpCenterSupport" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Support</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleSubMouseEnter('Auth-Pages')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
              >
                  Auth Pages <IoMdArrowDropdown />
                {subDropdown === 'Auth-Pages' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-44">
                    <ul className="space-y-2">
                      <li><Link to="/Login" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Login</Link></li>
                      <li><Link to="/Register" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Signup</Link></li>
                      <li><Link to="/ForgotPassword" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Forgot Password</Link></li>
                      <li><Link to="/LockScreen" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Lock Screen</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleSubMouseEnter('Utility')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
              >
                  Utility <IoMdArrowDropdown />
                {subDropdown === 'Utility' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-44">
                    <ul className="space-y-2">
                      <li><Link to="/TermsOfService" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Terms of Services</Link></li>
                      <li><Link to="/PrivactPolicy" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Privacy Policy</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleSubMouseEnter('Special')}
                onMouseLeave={() => setSubDropdown(null)}
                className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
              >
                  Special <IoMdArrowDropdown />
                {subDropdown === 'Special' && (
                  <div className="absolute left-full top-0 bg-white rounded shadow-lg p-4 w-44">
                    <ul className="space-y-2">
                      <li><Link to="/CommingSoon" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Coming Soon</Link></li>
                      <li><Link to="/Maintanance" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Maintenance</Link></li>
                      <li><Link to="/404" className="block text-black hover:bg-orange hover:text-white p-2 rounded">404!</Link></li>
                    </ul>
                  </div>
                )}
              </li>

            </ul>
          </div>
        )}
      </li>

      {/* Sale Menu */}
      <li>
        <Link
          to="/Sale"
          className={`text-lg font-medium font-Dm tracking-[1px] ${isActive('/Sale') ? 'text-white' : 'text-blue'}`}
        >
          Sale
        </Link>
      </li>

      {/* Contact Us Menu */}
      <li>
        <Link
          to="/Contact-Us"
          className={`text-lg font-medium font-Dm tracking-[1px] ${
            isActive('/Contact-Us') ? 'text-orange' : 'text-blue'
          }`}
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
