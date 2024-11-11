// HEADER LOGO IMAGE //
import webLogo from '../assets/images/web-logo.png'
// navbar
import navbar from "../assets/images/navbar.jpg";
import shop from "../assets/images/shop.jpg";


import Feature1 from "../assets/images/feature1.jpg";
import Feature2 from "../assets/images/feature2.jpg";
import Feature3 from "../assets/images/feature3.jpg";
import Feature4 from "../assets/images/feature4.jpg";


import banner1 from "../assets/images/home3banner1.jpg";
import banner2 from "../assets/images/home3banner2.jpg";
import banner3 from "../assets/images/home3banner3.jpg";

// Home 1
import bg from "../assets/images/home1bg.png";
import homecollection from "../assets/images/homecollection.jpg";
import sale from "../assets/images/sale-bg.png";

import smart from "../assets/images/smart.jpg";

import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpg";

import contact from "../assets/images/contact.svg";

import blog1 from "../assets/images/blog1.jpg";
import blogdetail from "../assets/images/blogdetail.jpg";
import blogdetail1 from "../assets/images/blogdetail1.jpg";

import mobile from "../assets/images/mobile.svg";
import app from "../assets/images/app.png";
import app1 from "../assets/images/app1.png";

import user from "../assets/images/user_account1.jpg";
import user_img from "../assets/images/user_img.jpg";
import payment from "../assets/images/payment.jfif";
import confirmation from "../assets/images/confirmation.png";
import product from "../assets/images/black-print-t-shirt.jpg";
import user_banner_bg from "../assets/images/user_banner_bg.jpg";
import order from "../assets/images/email_order.svg";
import career from "../assets/images/career.jpg";

import register from "../assets/images/register.jpg";
import login from "../assets/images/login.jpg";
import forgot from "../assets/images/forgotpassword.jpg";
import error from "../assets/images/error.svg";
import tshirt from "../assets/images/tshirt.jpg";
import ourstore from '../assets/images/ourstore.jpg'


// Creating the JSON-like object
export const imageAssets = {
    navbar: {
        src: navbar
    },
    shop: {
        src: shop
    },
    logo: {
        src: webLogo
    },
    features: {
      feature1: Feature1,
      feature2: Feature2,
      feature3: Feature3,
      feature4: Feature4
    },
    banners: {
      banner1: banner1,
      banner2: banner2,
      banner3: banner3
    },
    home1: {
      bg: bg,
      homecollection: homecollection,
      sale: sale
    },
    products: {
      smart: smart,
      product: product,
      tshirt: tshirt
    },
    about: {
      about1: about1,
      about2: about2,
      about3: about3
    },
    contact: {
      contact: contact,
      mobile: mobile,
      app: app,
      app1: app1
    },
    blog: {
      blog1: blog1,
      blogdetail: blogdetail,
      blogdetail1: blogdetail1
    },
    user: {
      user: user,
      user_img: user_img,
      confirmation: confirmation,
      user_banner_bg: user_banner_bg,
      order: order
    },
    auth: {
      register: register,
      login: login,
      forgot: forgot,
      error: error
    },
    payment: {
      payment: payment,
      career: career
    },
    store: {
      ourstore: ourstore
    }
  };
  

// Product //
import product1 from '../assets/images/black-print-t-shirt.jpg'
export const collections = [
    {
        image:homecollection,
        name:"Men's Wear"
    },
    {
        image:homecollection,
        name:"homecollection"
    },
    {
        image:homecollection,
        name:"homecollection"
    },
    {
        image:homecollection,
        name:"Smart Watch"
    },
    {
        image:homecollection,
        name:"Sunglasses"
    },
]

export const newProduct =[
    {
        id:1,
        image:product1,
        tag:'-40% Off',
        name:'Black Print T-Shirt',
        amount:'$21.00',
        desRate:'$16.00',
        offer:true,
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:2,
        image:product1,
        tag:'New',
        name:'Fashion Shoes Sneaker',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:3,
        image:product1,
        tag:'',
        name:'Mens White Slip Shoes',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:4,
        image:product1,
        tag:'',
        name:'Ladies Luxurious Bag',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:5,
        image:product1,
        tag:'',
        name:'Ladies Green Top',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:6,
        image:product1,
        tag:'',
        name:'Ladies Onepiece Wear',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:7,
        image:product1,
        tag:'Featured',
        name:'Mens Brown Jecket',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:8,
        image:product1,
        tag:'',
        name:'Sweater T-Shirt',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:9,
        image:product1,
        tag:'',
        name:'Trendy T-shirt',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:10,
        image:product1,
        tag:'New',
        name:'Men Sun Glasses',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:11,
        image:product1,
        tag:'-25% Off',
        name:'Women White Low Heel Shoes',
        amount:'$21.00',
        desRate:'$16.00',
        offer:true,
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:12,
        image:product1,
        tag:'Featured',
        name:'Black Print T-Shirt',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:13,
        image:product1,
        tag:'New',
        name:'Orange Luxurious Bag',
        rate:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:14,
        image:product1,
        tag:'',
        name:'Smart Watch',
        rate:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:15,
        image:product1,
        tag:'',
        name:'White Sandals',
        rate:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:16,
        image:product1,
        tag:'',
        name:'Ladies Skirt',
        rate:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
]

// BEST SELLER //
import saller1 from '../assets/images/best-seller.jpg'


export const bestSaller =[
    {
        id:1,
        image:saller1,
        tag:'',
        name:'Black Print T-Shirt',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:2,
        image:saller1,
        tag:'New',
        name:'Fashion Shoes Sneaker',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:3,
        image:saller1,
        tag:'-25% Off',
        name:'Mens White Slip Shoes',
        amount:'$21.00',
        desRate:'$16.00',
        offer:true,
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:4,
        image:saller1,
        tag:'Featured',
        name:'Ladies Luxurious Bag',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:5,
        image:saller1,
        tag:'Featured',
        name:'Ladies Luxurious Bag',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:6,
        image:saller1,
        tag:'Featured',
        name:'Ladies Luxurious Bag',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },

    {
        id:7,
        image:saller1,
        tag:'Featured',
        name:'Ladies Luxurious Bag',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:8,
        image:saller1,
        tag:'Featured',
        name:'Ladies Luxurious Bag',
        amount:'$21.00',
        desRate:'$16.00',
        desc:'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
]

// CUSTOMER REVIEW //
import customer from '../assets/images/customer1.jpg'

export const clientData = [
    {
        image:customer,
        name:'Christa Smith',
        possition:'Manager',
        desc:'" Cartzio made the processes so easy. Cartzio instantly increased the amount of interest and ultimately saved us over $10,000. "'
    },
    {
        image:customer,
        name:'Christa Smith',
        possition:'Manager',
        desc:'" I highly recommend Cartzio as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "'
    },
    {
        image:customer,
        name:'Christa Smith',
        possition:'Manager',
        desc:'" My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! "'
    },
    {
        image:customer,
        name:'Christa Smith',
        possition:'Manager',
        desc:'" Great experience all around! Easy to use and efficient."'
    },
    {
        image:customer,
        name:'Christa Smith',
        possition:'Manager',
        desc:'" Cartzio made selling my home easy and stress free. They went above and beyond what is expected.. "'
    },
    {
        image:customer,
        name:'Christa Smith',
        possition:'Manager',
        desc:'" Cartzio is fair priced, quick to respond, and easy to use. I highly recommend their services! "'
    },
]

// FOOTER JSON //
import { FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail, FiGithub, FiYoutube, FiGitlab } from "react-icons/fi";

export const footerSocial = [
    {
        icon: FiShoppingCart,
        link: 'https://1.envato.market/shreethemes-portfolio'
    },
    {
        icon: FiDribbble,
        link: 'https://dribbble.com/shreethemes'
    },
    {
        icon: FiLinkedin,
        link: 'http://linkedin.com/company/shreethemes'
    },
    {
        icon: FiFacebook,
        link: 'https://www.facebook.com/shreethemes'
    },
    {
        icon: FiInstagram,
        link: 'https://www.instagram.com/shreethemes'
    },
    {
        icon: FiTwitter,
        link: 'https://twitter.com/shreethemes'
    },
    {
        icon: FiMail,
        link: 'mailto:support@shreethemes.in'
    },
];

export const footerShopping1 = [
    'Men', 'Jackets & Coats', 'Jeans', 'Loungewear', 'Polo shirts', 'Shirts'
];

export const footerShopping2 = [
    'Shorts', 'Suits Swimwear', 'T-shirts', 'Tracksuits', 'Trousers', 'Shirts'
];

export const footerShopping3 = [
    'My account', 'Order History', 'Wish List', 'Newsletter', 'Affiliate', 'Returns'
];

export const footerServices = [
    {
        icon: 'mdi mdi-truck-check-outline',
        name: 'Free delivery'
    },
    {
        icon: 'mdi mdi-archive',
        name: 'Non-contact shipping'
    },
    {
        icon: 'mdi mdi-cash-multiple',
        name: 'Money-back guarantee'  // Fixed typo: "quarantee" to "guarantee"
    },
    {
        icon: 'mdi mdi-shield-check',
        name: 'Secure payments'
    },
];
// HOME PAGE 3 START


// HOME PAGE 4 START
export const categories = [
    {
        image:smart,
        title:'Smart Watch'
    },
    {
        image:smart,
        title:'Sunglasses'
    },
    {
        image:smart,
        title:'Casual Shoes'
    },
    {
        image:smart,
        title:'Ladies Wear'
    },
    {
        image:smart,
        title:'Kids Wear'
    },
    {
        image:smart,
        title:'Gents Wear'
    },
]
// About



export const teamData = [
    {
        image:about3,
        name:'Jack John',
        possition:'Designer'
    },
    {
        image:about3,
        name:'Krista John',
        possition:'Designer'
    },
    {
        image:about3,
        name:'Roger Jackson',
        possition:'Designer'
    },
    {
        image:about3,
        name:'Johnny English',
        possition:'Designer'
    },
]
import { MdLocalShipping, MdSupportAgent, MdPayment } from 'react-icons/md';
export const promiseData = [
    {
        icon: MdLocalShipping ,
        title: 'Free Shipping',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon: MdSupportAgent,
        title: '24/7 Support',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon: MdPayment,
        title: 'Payment Process',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
];
// Contact

// Blog

export const blogData = [
    {
        id:1,
        image:imageAssets.blog.blog1,
        title:'The History Of Patterned Dresses',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'13th Sep 2024'
    },
    {
        id:2,
        image:imageAssets.blog.blog1,
        title:'Swimsuits For The Whole Family',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'29th Nov 2024'
    },
    {
        id:3,
        image:imageAssets.blog.blog1,
        title:'Good Products For Lovely Girls',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'29th Dec 2024'
    },
    {
        id:4,
        image:imageAssets.blog.blog1,
        title:'Latest Swimsuit Model This Year',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'13th March 2024'
    },
    {
        id:5,
        image:imageAssets.blog.blog1,
        title:'Summer Travel Fashion 2023',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'5th May 2024'
    },
    {
        id:6,
        image:imageAssets.blog.blog1,
        title:'Exploring the Timeless Allure of Fashion',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'19th June 2024'
    },
    {
        id:7,
        image:imageAssets.blog.blog1,
        title:'A Chic Journey Through Fashion Trends',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'20th June 2024'
    },
    {
        id:8,
        image:imageAssets.blog.blog1,
        title:'Unique Autumn Fashion Ideas',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'31st Aug 2024'
    },
    {
        id:9,
        image:imageAssets.blog.blog1,
        title:'Tips For Wearing Loose T-shirts',
        desc:"This is required when, for example, the final text is not yet available.",
        date:'1st Sep 2024'
    },
]

export const social = [
    FiFacebook,FiInstagram,FiTwitter,FiLinkedin,FiGithub,FiYoutube,FiGitlab
]
// SALE 

export const salesData = [
    {
        tag:'20% Off',
        title:'Sale 20% Off',
        desc:"for 20% Off",
        code:'SALE20OFF'
    },
    {
        tag:'30% Off',
        title:'Sale 30% Off',
        desc:"for 30% Off",
        code:'SALE30OFF'
    },
    {
        tag:'50% Off',
        title:'Sale 50% Off',
        desc:"for 50% Off",
        code:'SALE50OFF'
    },
    {
        tag:'75% Off',
        title:'Sale 75% Off',
        desc:"for 75% Off",
        code:'SALE75OFF'
    },
]
// My Acoount //
// User Account //

export const userOrder = [
    {
        no:'7107',
        date:'13th March 2024',
        status:'Delivered',
        total:'$ 320',
        item:'for 2items'
    },
    {
        no:'8007',
        date:'5th May 2024',
        status:'Processing',
        total:'$ 800',
        item:'for 1items'
    },
    {
        no:'8008',
        date:'19th June 2024',
        status:'Canceled',
        total:'$ 800',
        item:'for 1items'
    },
]
export const userFvtItem = [
    {
        image:user,
        name:'Apple Smart Watch',
        rate:' $21.00',
        descRate:'$16.00'
    },
    {
        image:user,
        name:'Ladies Top',
        rate:' $21.00',
        descRate:'$16.00'
    },
    {
        image:user,
        name:'Ladies Sunglasses',
        rate:' $21.00',
        descRate:'$16.00'
    },
]
// PAYMENT
export const paymentMethod = [
    {
        image:payment,
        name:'Visa ending in 4578',
        expires:'Expires in 13/03/2024'
    },
    {
        image:payment,
        name:'American Express ending in 4578',
        expires:'Expires in 05/05/2024'
    },
    {
        image:payment,
        name:'Discover ending in 4578',
        expires:'Expires in 19/07/2024'
    },
    {
        image:payment,
        name:'Master Card ending in 4578',
        expires:'Expires in 20/07/2024'
    },
]

export const userSocial = [
    {
        icon: FiTwitter,
        title: 'Twitter',
        placeholder: 'Twitter Profile Name',
        desc: 'Add your Twitter username (e.g. your_username).'
    },
    {
        icon: FiFacebook,
        title: 'Facebook',
        placeholder: 'Facebook Profile Name',
        desc: 'Add your Facebook username (e.g. your_username).'
    },
    {
        icon: FiInstagram,
        title: 'Instagram',
        placeholder: 'Instagram Profile Name',
        desc: 'Add your Instagram username (e.g. your_username).'
    },
    {
        icon: FiLinkedin,
        title: 'LinkedIn',
        placeholder: 'LinkedIn Profile Name',
        desc: 'Add your LinkedIn username (e.g. your_username).'
    },
    {
        icon: FiYoutube,
        title: 'YouTube',
        placeholder: 'YouTube URL',
        desc: 'Add your YouTube URL.'
    }
];
// CARTuser_banner_bg
// OFFER
// ORDER SUCCESS
// CAREER

export const jobData = [
    {
        name:'Frontend Developer',
        openings:'Total Openings: 1'
    },
    {
        name:'Business Development Manager',
        openings:'Total Openings: 2'
    },
    {
        name:'Backend Developer',
        openings:'Total Openings: 4'
    },
]
// OVER VIEW
import { FiHelpCircle, FiBookmark, FiSettings } from 'react-icons/fi';

export const faqAbout = [
    {
        icon:FiHelpCircle,
        title:'FAQs',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon:FiBookmark,
        title:'Guides / Support',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon:FiSettings,
        title:'Support Request',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
]
// HELP FAQ
export const faqData = [
    {
        id:1,
        title:'How does it work ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:2,
        title:'Do I need a designer to use Cartzio ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:3,
        title:'What do I need to do to start selling ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:4,
        title:'What happens when I receive an order ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
]
// HELPCENTER GUIDES
export const guidenceData = [
    {
        name:'Getting started',
        features:['Deciding to purchase','List your space','Landing an experience or adventure','Top uses questions']
    },
    {
        name:'Your calendar',
        features:['Pricing & availability','Booking settings','Responding to enquiries & requests','Snoozing or deactivating your listing']
    },
    {
        name:'Your listings',
        features:['Updating your listing','Neighbourhoods','Listing photos & photography','Cartzio Plus','API-connected software']
    },
    {
        name:'How payouts work',
        features:['Getting paid','Adding payout info','Your payout status','Donations','Taxes']
    },
    {
        name:'Your reservations',
        features:['Cartzio safely','Cartzio Experiences and Adventures','Changing a reservation','Cancelling a reservation','Long-term reservations']
    },
    {
        name:'Reservation help',
        features:['Help with a reservation or guest','Guest cancellations']
    },
    {
        name:'Your account',
        features:['Your profile','Account security','Identification & verifications','Reviews','Superhost status']
    },
]
// LOGIN

// terms of service
export const termsData = [
    'Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand','Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand'
]
// Color filter
export const colorFilter = [
    'bg-red-600','bg-indigo-600','bg-emerald-600','bg-slate-900','bg-gray','bg-orange','bg-violet-600'
]
export const brandFilter = [
    'Alexander McQueen','Alexander Wang','Allegra K','AllSaints','Badgley Mischka','Baldinini'
]
export const sizeFilter = [
    'S','M','L','XL','2XL','3XL','4XL'
]
// product detail
export const commentsData = [
    {
        image:imageAssets.products.tshirt,
        name:'Calvin Carlo',
        time:'13th March 2024 at 01:00 pm',
        desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image:imageAssets.products.tshirt,
        name:'Calvin Carlo',
        time:'5th May 2024 at 10:00 am',
        desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image:imageAssets.products.tshirt,
        name:'Calvin Carlo',
        time:'19th June 2024 at 00:00 1m',
        desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image:imageAssets.products.tshirt,
        name:'Calvin Carlo',
        time:'20th June 2024 at 01:30 pm',
        desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
]
export const cartData = [
    {
        image:product1,
        name:'T-shirt (M)',
        qtn:3,
        price:280
    },
    {
        image:product1,
        name:'Sneaker Shoes',
        qtn:1,
        price:160
    },
    {
        image:product1,
        name:'Ladies Skirt',
        qtn:1,
        price:500
    },
]
// ourstore
// brands
export const brand = [
    {
        id:1,
        name:[
            'Adrianna Papell','AG - Adriano','Aglini','Alberta Ferretti','Alexander McQueen','Alexander Wang','Allegra K','AllSaints','Badgley Mischka','Baldinini','Balenciaga','Ballantyne','Ballard Designs','Bally','Balmain','Barba','Barbour'
        ]
    },
    {
        id:2,
        name:[
            'Barena','BaubleBar','Baxton Studio','BCBGeneration','Bcbgmaxazria','Beatrice .B','C.P. Company','Cafènoir','Caliban','Camper','Carhartt Work in Progress','Carolines Treasures','Carve Designs','Casadei','Catch Some Rays','Certified International','Champion'
        ]
    },
    {
        id:3,
        name:[
            'Cherokee','Chiara Ferragni','Daniele Alessandrini','Daniele Fiesoli','Demdaco','Department Five','Design Toscano','Designq','Desigual','Dolce Vita','Dondup','Dorothee Schumacher','Doucals','Dr. Martens','Logitech','Cartzio',
        ]
    },
]