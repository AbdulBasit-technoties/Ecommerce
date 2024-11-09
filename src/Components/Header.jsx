import React, { useState, useEffect, useRef } from 'react';
import { webLogo, navbar, shop } from '../Helpers/images';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { FiDollarSign, FiHelpCircle, FiLogOut, FiHeart, FiSearch, FiSettings, FiShoppingCart, FiUser } from "react-icons/fi";
import Toptitle from './Toptitle';
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from 'react-icons/io';
import { RxCross1 } from "react-icons/rx";
function Header({ navlight }) {
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onclick);
    return () => {
      window.removeEventListener('scroll', onclick);
    };
  }, []);
  useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [cartManu, setCartManu] = useState(false);
  let [userManu, setUserManu] = useState(false);
  let dropdownRef = useRef(null);
  let cartRef = useRef(null);
  let userRef = useRef(null)


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [ispagesOpen, setIspagesOpen] = useState(false);
  const [isshopgridOpen, setIsshopgriedOpen] = useState(false);
  const [isShopListOpen, setIsShopListOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isEmailTemplateOpen, setIsEmailTemplateOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isHelpCenterOpen, setIsHelpCenterOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const [isUtilityDropdownOpen, setIsUtilityDropdownOpen] = useState(false);
  const [isSpecialDropdownOpen, setIsSpecialDropdownOpen] = useState(false);

  const toggleSpecialDropdown = (event) => {
    setIsSpecialDropdownOpen(!isSpecialDropdownOpen);
    event.stopPropagation();
  };
  const toggleUtilityDropdown = (event) => {
    setIsUtilityDropdownOpen(!isUtilityDropdownOpen);
    event.stopPropagation();
  };
  const toggleAuthDropdown = (event) => {
    setIsAuthDropdownOpen(!isAuthDropdownOpen);
    event.stopPropagation();
  };

  const toggleHelpCenterDropdown = (event) => {
    setIsHelpCenterOpen(!isHelpCenterOpen);
    event.stopPropagation();
  };
  const toggleBlogDropdown = (event) => {
    setIsBlogOpen(!isBlogOpen);
    event.stopPropagation();
  };
  const toggleEmailTemplateDropdown = (event) => {
    setIsEmailTemplateOpen(!isEmailTemplateOpen);
    event.stopPropagation();
  };
  const toggleAccountDropdown = (event) => {
    setIsAccountOpen(!isAccountOpen);
    event.stopPropagation();
  };
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };


  const togglepages = () => {
    setIspagesOpen(!ispagesOpen);
  };
  const toggleshopgrids = (event) => {
    setIsshopgriedOpen(!isshopgridOpen);
    event.stopPropagation();
  };
  const toggleShopList = (event) => {
    setIsShopListOpen(!isShopListOpen);
    event.stopPropagation(); // Prevents the parent dropdown from closing
  };
  return (
    <>
      <Toptitle />
      <header className={`header py-5 transition-all duration-300 ease-in-out ${isScrolled ? 'fixed top-0 left-0 w-full z-50 bg-white/80 shadow-[0_0_3px_rgba(60,72,88,0.15)] backdrop-blur-lg' : 'relative bg-transparent'}`}>
        <div className='container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4'>
          <div className='flex items-center justify-between'>
            <div className='web-logo'>
              <Link to='/'><img src={webLogo} alt="Logo" /></Link>
            </div>

            <div className='main-menu lg:block sm:hidden'>
              <Nav />
            </div>

            <ul className="buy-button list-none mb-0 flex items-center gap-3">
              <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
                <button data-dropdown-toggle="dropdown" className="dropdown-toggle align-middle inline-flex search-dropdown" type="button" onClick={() => setIsOpen(!isOpen)}>
                  {navlight === true ? (
                    <>
                      <FiSearch className="size-5 dark-icon"></FiSearch>
                      <FiSearch className="size-5 white-icon text-white"></FiSearch>
                    </>
                  ) : (
                    <FiSearch className="size-5"></FiSearch>
                  )}
                </button>
                {isOpen && (
                  <div className={`dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray`}>
                    <div className="relative">
                      <FiSearch className="absolute size-4 top-[9px] end-3 text-slate-900 dark:text-white"></FiSearch>
                      <input type="text" className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..." />
                    </div>
                  </div>
                )}
              </li>

              <li className="dropdown inline-block relative ps-0.5" ref={cartRef}>
                <button data-dropdown-toggle="dropdown" className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange border border-orange text-white" type="button" onClick={() => setCartManu(!cartManu)}>
                  <FiShoppingCart className="h-4 w-4"></FiShoppingCart>
                </button>
                {cartManu && (
                  <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray">
                    <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                      <li className='ms-0'>
                        <Link to="#" className="flex items-center justify-between py-1.5 px-4">
                          <span className="flex items-center">
                            <img src={shop} className="rounded shadow dark:shadow-gray w-9" alt="" />
                            <span className="ms-3">
                              <span className="block font-semibold">T-shirt (M)</span>
                              <span className="block text-sm text-slate-400">$320 X 2</span>
                            </span>
                          </span>

                          <span className="font-semibold">$640</span>
                        </Link>
                      </li>

                      <li className='ms-0'>
                        <Link to="#" className="flex items-center justify-between py-1.5 px-4">
                          <span className="flex items-center">
                            <img src={shop} className="rounded shadow dark:shadow-gray w-9" alt="" />
                            <span className="ms-3">
                              <span className="block font-semibold">Bag</span>
                              <span className="block text-sm text-slate-400">$50 X 5</span>
                            </span>
                          </span>

                          <span className="font-semibold">$250</span>
                        </Link>
                      </li>

                      <li className='ms-0'>
                        <Link to="#" className="flex items-center justify-between py-1.5 px-4">
                          <span className="flex items-center">
                            <img src={shop} className="rounded shadow dark:shadow-gray w-9" alt="" />
                            <span className="ms-3">
                              <span className="block font-semibold">Watch (Men)</span>
                              <span className="block text-sm text-slate-400">$800 X 1</span>
                            </span>
                          </span>

                          <span className="font-semibold">$800</span>
                        </Link>
                      </li>

                      <li className="border-t border-gray-100 dark:border-gray my-2 ms-0"></li>

                      <li className="flex items-center justify-between py-1.5 px-4 ms-0">
                        <h6 className="font-semibold mb-0">Total($):</h6>
                        <h6 className="font-semibold mb-0">$1690</h6>
                      </li>

                      <li className="py-1.5 px-4 ms-0">
                        <span className="text-center block">
                          <Link to="/Cart" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange border border-orange text-white me-1">View Cart</Link>
                          <Link to="/ShopCheckOut" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange border border-orange text-white">Checkout</Link>
                        </span>
                        <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="inline-block ps-0.5">
                <Link to="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange text-white">
                  <FiHeart data-feather="heart" className="h-4 w-4"></FiHeart>
                </Link>
              </li>

              <li className="dropdown inline-block relative ps-0.5" ref={userRef}>
                <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button" onClick={() => setUserManu(!userManu)}>
                  <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange bg-orange text-white"><img src={navbar} className="rounded-full" alt="" /></span>
                </button>
                {userManu && (
                  <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
                    <ul className="py-2 text-start">
                      <li className='ms-0'>
                        <p className="text-slate-400 pt-2 px-4">Welcome Jesus!</p>
                      </li>
                      <li className='ms-0'>
                        <p className="flex items-center font-medium py-2 px-4"><FiDollarSign className="h-4 w-4 me-2"></FiDollarSign> Balance: <span className="text-orange ms-2">$ 245.10</span></p>
                      </li>
                      <li className='ms-0'>
                        <Link to="/User-Account" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange dark:hover:text-white"><FiUser className="h-4 w-4 me-2"></FiUser>Account</Link>
                      </li>
                      <li className='ms-0'>
                        <Link to="/OverView" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange dark:hover:text-white"><FiHelpCircle className="h-4 w-4 me-2"></FiHelpCircle>Helpcenter</Link>
                      </li>
                      <li className='ms-0'>
                        <Link to="/Setting" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange dark:hover:text-white"><FiSettings className="h-4 w-4 me-2"></FiSettings>Settings</Link>
                      </li>
                      <li className="border-t border-gray-100 dark:border-gray my-2"></li>
                      <li className='ms-0'>
                        <Link to="/Login" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange dark:hover:text-white"><FiLogOut className="h-4 w-4 me-2"></FiLogOut>Logout</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#" onClick={toggleMenu} className='text-2xl lg:hidden sm:inline-block'>
                  <FaBars />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={`mobile-responsive fixed bg-white p-5 z-[999] lg:hidden xs:block w-full h-4/6 ${isMenuOpen ? 'top-0' : 'top-full'}`}>
        <div className="close-menu text-2xl flex justify-end">
          <a href="#" onClick={closeMenu}><RxCross1 />
          </a>
        </div>
        <div className="">
          <ul className="flex flex-col gap-10 relative">
            {/* Home Menu */}
            <li onClick={toggleServices}>
              <Link
                to="/"
                className={`flex items-center text-lg font-medium font-Dm tracking-[1px] ${isActive('/') ? 'text-orange' : 'text-blue'
                  }`}
              >
                Home <IoMdArrowDropdown className="ml-1" />
              </Link>
              <div className={`absolute bg-white shadow-lg p-4 w-full  ${isServicesOpen ? "block" : "hidden"
                }`}>
                <ul className="space-y-2">
                  <li><Link to="/home1" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Home 1</Link></li>
                  <li><Link to="/home2" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Home 2</Link></li>
                  <li><Link to="/home3" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Home 3</Link></li>
                </ul>
              </div>
            </li>

            {/* Product Menu */}
            <li
              onClick={toggleShop}
            >
              <Link
                to=""
                className={`flex items-center text-lg font-medium font-Dm tracking-[1px] ${isActive('/Products') ? 'text-orange' : 'text-blue'
                  }`}
              >
                Shops <IoMdArrowDropdown className="ml-1" />
              </Link>
              <div className={`absolute bg-white shadow-lg p-4 w-full  ${isShopOpen ? "block" : "hidden"}`}>
                <ul className="space-y-2">
                  <li onClick={toggleshopgrids} className="relative">
                    <Link
                      to=""
                      className="flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    >
                      Shop Grid <IoMdArrowDropdown className="ml-1" />
                    </Link>
                    <div className={`absolute bg-white shadow-lg p-4 w-full z-10 ${isshopgridOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li><Link to="/ShopGrid" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Shop Grid</Link></li>
                        <li><Link to="/ShopGridLeft" className="block text-black hover:bg-orange hover:text-white p-2 rounded">ShopGridLeft</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative" onClick={toggleShopList}>
                    <Link
                      to=""
                      className="flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    >
                      Shop List <IoMdArrowDropdown className="ml-1" />
                    </Link>

                    {/* Conditionally render the submenu */}
                    <div className={`absolute bg-white shadow-lg p-4 w-full ${isShopListOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/ShopList"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()} // Prevent submenu from closing
                          >
                            Shop List
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ShopListLeft"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()} // Prevent submenu from closing
                          >
                            Shop List Left
                          </Link>
                        </li>
                      </ul>
                    </div>
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
            </li>

            {/* Blog Menu */}
            <li onClick={togglepages}>
              <Link
                className={`flex items-center text-lg font-medium font-Dm tracking-[1px]`}
              >
                Pages <IoMdArrowDropdown className="ml-1" />
              </Link>
              <div className={`absolute bg-white shadow-lg p-4 w-full  ${ispagesOpen ? "block" : "hidden"}`}>
                <ul className="space-y-2">
                  <li><Link to="/About-Us" className="block text-black hover:bg-orange hover:text-white p-2 rounded">About Us</Link></li>
                  <li className="relative" onClick={toggleAccountDropdown}>
                    <Link
                      to=""
                      className="flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    >
                      My Account <IoMdArrowDropdown className="ml-1" />
                    </Link>

                    <div className={`absolute bg-white shadow-lg p-4 w-full z-10 ${isAccountOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/User-Account"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            User Account
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Billing"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Billing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Payment"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Payment
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Invoice"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Invoice
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Social"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Social
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Notification"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Notification
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Setting"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Setting
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative"
                    onClick={toggleEmailTemplateDropdown}
                  >
                    <Link
                      to=""
                      className="flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    >
                      Email Template <IoMdArrowDropdown />
                    </Link>

                    <div className={`absolute bg-white shadow-lg p-4 w-full z-10 ${isEmailTemplateOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/Confirmation"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Confirmation
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Cart"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Offer"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Offer
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/OrderSuccess"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Order Success
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/GiftVoucher"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Gift Voucher
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ResetPassword"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Reset Password
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ItemReview"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Item Review
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    onClick={toggleBlogDropdown}
                  >
                    <span className="flex items-center">
                      Blog <IoMdArrowDropdown className="ml-1" />
                    </span>

                    <div className={`absolute bg-white top-10 shadow-lg p-4 w-full z-10 ${isBlogOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/Blog"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/BlogDetails"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Blog Detail
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><Link to="/Career" className="block text-black hover:bg-orange hover:text-white p-2 rounded">Career</Link></li>
                  <li
                    className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    onClick={toggleHelpCenterDropdown}
                  >
                    <span className="flex items-center">
                      Help Center <IoMdArrowDropdown className="ml-1" />
                    </span>

                    <div className={`absolute -top-56 z-10 bg-white shadow-lg p-4 w-full ${isHelpCenterOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/OverView"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/HelpCenterFaq"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            FAQs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/HelpCenterGuides"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Guides
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/HelpCenterSupport"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    onClick={toggleAuthDropdown}
                  >
                    <span className="flex items-center">
                      Auth Pages <IoMdArrowDropdown className="ml-1" />
                    </span>

                    <div className={`absolute -top-56 bg-white shadow-lg p-4 w-full z-10 ${isAuthDropdownOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/Login"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Register"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Signup
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ForgotPassword"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Forgot Password
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/LockScreen"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Lock Screen
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    onClick={toggleUtilityDropdown}
                  >
                    <span className="flex items-center">
                      Utility <IoMdArrowDropdown className="ml-1" />
                    </span>

                    <div className={`absolute -top-32 bg-white shadow-lg p-4 w-full z-10 ${isUtilityDropdownOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/TermsOfService"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Terms of Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/PrivacyPolicy"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative flex items-center text-black hover:bg-orange hover:text-white p-2 rounded"
                    onClick={toggleSpecialDropdown}
                  >
                    <span className="flex items-center">
                      Special <IoMdArrowDropdown className="ml-1" />
                    </span>

                    <div className={`absolute -top-44 bg-white shadow-lg p-4 w-full ${isSpecialDropdownOpen ? 'block' : 'hidden'}`}>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/ComingSoon"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Coming Soon
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Maintenance"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Maintenance
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/404"
                            className="block text-black hover:bg-orange hover:text-white p-2 rounded"
                            onClick={(event) => event.stopPropagation()}
                          >
                            404!
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                </ul>
              </div>
            </li>

            {/* Sale Menu */}
            <li>
              <Link
                to="/Sale"
                className={`text-lg font-medium font-Dm tracking-[1px] ${isActive('/Sale') ? 'text-orange' : 'text-blue'}`}
              >
                Sale
              </Link>
            </li>

            {/* Contact Us Menu */}
            <li className='pb-10'>
              <Link
                to="/Contact-Us"
                className={`text-lg font-medium font-Dm tracking-[1px] ${isActive('/Contact-Us') ? 'text-orange' : 'text-blue'
                  }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
