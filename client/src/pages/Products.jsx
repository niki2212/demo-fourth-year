import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import bgImg from '../assets/images/about.jpg';

import image1 from '../assets/images/onlinebanking.jpg';
import image2 from '../assets/images/onlinebooking.jpg';
import image3 from '../assets/images/jeevanpraman.jpg';
import image4 from '../assets/images/healthcare.jpg';
import image5 from '../assets/images/lastwill.jpg';
import image6 from '../assets/images/insurance.jpg';
const products = [
    {
        name: 'Online banking',
        description: "Discover our online banking solutions tailored for a seamless digital experience.",
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        imgSrc: image1
    },
    {
        name: 'Online Ticket Booking',
        description: "Explore our innovative solutions for online ticket booking, designed to simplify your travel plans.",
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        imgSrc: image2
    },
    {
        name: 'Jeevan Pramaan',
        description: "Jeevan Pramaan is a Life Certificate program affiliated with Aadhaar for people with pensions.",
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        imgSrc: image3
    },
    {
        name: 'Healthcare',
        description: "Cultivate success in agriculture with our agro textiles, offering solutions for crop protection, soil stabilization, and irrigation.",
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        imgSrc: image4
    },
    {
        name: 'Last will',
        description: "Ensure the safe transport of goods with our packaging textiles and explore a range of accessories to complement your needs.",
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        imgSrc: image5
    },
    {
        name: 'Insurance',
        description: "Ensure a secure and worry-free future for you and your loved ones with our comprehensive Life Insurance coverage.",
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        imgSrc: image6
    }
];


const ProductCard = ({ name, description, link, imgSrc }) => (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mb-8">
        <a href={link} target='_blank' rel='noreferrer'>
            <img className="w-full h-48 object-cover" src={imgSrc} alt={name} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </a>
    </div>
);

export default function Products() {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col w-screen justify-center items-center'>
        <Navbar />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            <Footer />
        </div>
    );
}
