"use client"
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

interface Product {
    quantity: number;
    id: number;
    name: string;
    price: number;
    image: string;
    rank: number;
    description: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Strawberry ',
        price: 5,
        quantity: 0,
        image: 'https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg',
        rank: 4,
        description: 'A high-quality, eco-friendly strawberry designed for convenience and durability.',
    },
    {
        id: 2,
        name: 'Cara Cara orange',
        price: 2,
        quantity: 0,
        image: 'https://www.health.com/thmb/eyXq25eUWPG-lMUQUYjATKqnyQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CaraCara-1331414930-f09aa301b0234ebaaec5f76b27dbe8f5.jpg',
        rank: 5,
        description: 'This Cara Cara orange offers unmatched performance and exceptional value.',
    },
    {
        id: 3,
        name: 'Kiwi',
        price: 4,
        quantity: 0,
        image: 'https://images.petlebi.com/v7/_ptlb/up/gallery/kivi-ve-muhabbet-kuslarinin-beslenmesi-1851.jpg',
        rank: 3,
        description: 'This kiwi fruit is packed with nutrients and flavor.',
    },
    {
        id: 4,
        name: 'Banana',
        price: 2,
        quantity: 0,
        image: 'https://cdn.jwplayer.com/v2/media/z7kqs6bQ/thumbnails/4eQJtFs0.jpg',
        rank: 4,
        description: 'A sweet and creamy fruit, bananas are perfect for a quick snack or as an ingredient in smoothies and desserts. Rich in potassium and vitamins, they provide energy and are great for maintaining heart health.',
    },
    {
        id: 5,
        name: 'Apple',
        price: 4,
        quantity: 0,
        image: 'https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg',
        rank: 5,
        description: 'A delicious and nutritious apple for a healthy snack.',
    },
    {
        id: 6,
        name: 'Mango',
        price: 5,
        quantity: 0,
        image: 'https://media.istockphoto.com/id/1140919483/photo/mango-fruit-on-green-leaf-background.jpg?s=612x612&w=0&k=20&c=K-XdpWRu6N3OiqWkbeY1UBDWsNpmxycJpiRTHTswRbw=',
        rank: 5,
        description: 'Sweet and juicy mango, perfect for desserts and smoothies.',
    },
    {
        id: 7,
        name: 'Cheeries',
        price: 3,
        quantity: 0,
        image: 'https://nativepet.com/cdn/shop/articles/Cherries.jpg?v=1681955445',
        rank: 3,
        description: 'Delicious cherries that are great for snacking and baking.',
    },
    {
        id: 8,
        name: 'Pineapple',
        price: 5,
        quantity: 0,
        image: 'https://5aday.co.nz/assets/site/fruit-and-vegetables/_articleHero/Pineapple.jpg',
        rank: 4,
        description: 'Tropical pineapple with a sweet and tangy flavor.',
    },
    {
        id: 9,
        name: 'Watermelon',
        price: 2,
        quantity: 0,
        image: 'https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg?crop=1xw:0.84296xh;center,top&resize=1200:*',
        rank: 4,
        description: 'Refreshing and hydrating, perfect for hot days.',
    },

    // VEGETABLES ID'SSSSSSS

    {
        id: 10,
        name: 'Potato',
        price: 2,
        quantity: 0,
        image: 'https://www.mashed.com/img/gallery/real-talk-is-a-potato-a-fruit-or-vegetable/l-intro-1692783163.jpg',
        rank: 5,
        description: 'This product offers unmatched performance and exceptional value.',
    },
    {
        id: 11,
        name: 'Onion',
        price: 3,
        quantity: 0,
        image: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/12/onions-1702267188.jpg',
        rank: 5,
        description: 'This product offers unmatched performance and exceptional value.',
    },
    {
        id: 12,
        name: 'Tomato',
        price: 3,
        quantity: 0,
        image: 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/tomatoes.jpg.webp?itok=_S4tzH4T',
        rank: 5,
        description: 'This product offers unmatched performance and exceptional value.',
    },
    {
        id: 13,
        name: 'Brinjal',
        price: 1,
        quantity: 0,
        image: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/07/24151803/20.jpg',
        rank: 3,
        description: 'This product offers unmatched performance and exceptional value.',
    },
    {
        id: 14,
        name: 'Capsicum',
        price: 2,
        quantity: 0,
        image: 'https://www.shutterstock.com/image-photo/capsicums-on-bowl-wooden-table-600nw-2468844711.jpg',
        rank: 4,
        description: 'This product offers unmatched performance and exceptional value.',
    },
    {
        id: 15,
        name: 'Cauliflower',
        price: 1,
        quantity: 0,
        image: 'https://img.freepik.com/premium-photo/fresh-cauliflower-basket_390829-1229.jpg',
        rank: 4,
        description: 'This product offers unmatched performance and exceptional value.',
    },
    {
        id: 16,
        name: 'Lady Finger',
        price: 4,
        quantity: 0,
        image: 'https://www.trustbasket.com/cdn/shop/articles/Lady_Finger.webp?v=1681366481',
        rank: 5,
        description: 'This product offers unmatched performance and exceptional value.',
    },
    {
        id: 17,
        name: 'Beetroot',
        price: 2,
        quantity: 0,
        image: 'https://www.shutterstock.com/image-photo/cut-whole-raw-beets-on-600nw-1813955732.jpg',
        rank: 3,
        description: 'This product offers unmatched performance and exceptional value.',
    },
    {
        id: 18,
        name: 'Bitter Gourd',
        price: 2,
        quantity: 0,
        image: 'https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM=',
        rank: 3,
        description: 'This product offers unmatched performance and exceptional value.',
    },
];


function App() {
    const [cart, setCart] = useState<Product[]>([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

// Search

    const [searchTerm, setSearchTerm] = useState('');

    // Filter products based on the search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );







    const deliveryCharge = 1; // Delivery charge for each item

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            return existingProduct
                ? prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
                : [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const increaseQuantity = (id: number) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const removeFromCart = (id: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const toggleCartVisibility = () => setIsCartVisible(!isCartVisible);


    const handleReadMoreClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity) + (deliveryCharge * item.quantity), 0);
    };













    return (
        <div className="container mx-auto p-4">
            <header className="flex justify-between items-center p-4 bg-teal-700 text-white rounded shadow-md">
                <h1 className="text-2xl font-bold">HG.</h1>




                <div className="relative flex items-center mx-auto">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 mx-auto w-[150px] md:w-auto rounded bg-teal-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <AiOutlineSearch size={24} className="absolute right-2 text-yellow-400" />
                </div>




                <div className="relative ">
                    <FaShoppingCart
                        size={30}
                        onClick={toggleCartVisibility}
                        className="cursor-pointer  hover:text-yellow-400"
                    />
                    {cart.length > 0 && (
                        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2">
                            {cart.reduce((acc, item) => acc + item.quantity, 0)}
                        </span>
                    )}
                    {isCartVisible && (
                        <div className="absolute right-0 mt-2 w-64 p-4 bg-white text-black shadow-lg rounded border z-10">
                            <h2 className="font-semibold mb-2">Cart</h2>
                            {cart.length === 0 ? (
                                <p className="text-center text-gray-500">Your cart is empty</p>
                            ) : (
                                cart.map(item => (
                                    <div key={item.id} className="flex items-center py-10 border-b">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover rounded mr-3"
                                            height={48}
                                            width={48}
                                        />
                                        <div className="flex-1">

                                            <div className='flex flex-row items-center justify-between'>
                                                <p className="text-sm font-semibold">{item.name}</p>
                                                <AiOutlineClose
                                                    className="cursor-pointer text-2xl text-red-500"
                                                    onClick={() => removeFromCart(item.id)}
                                                />
                                            </div>


                                            <p className="text-xs text-gray-600">Price: ${item.price}</p>
                                            <div className="flex items-center">
                                                <div className='border-2 rounded-md font-bold h-[28px] w-[28px]'>
                                                    <AiOutlineMinus className="cursor-pointer text-2xl" onClick={() => decreaseQuantity(item.id)} />
                                                </div>
                                                <span className="mx-2 text-teal-700 text-bold text-lg">{item.quantity}</span>
                                                <div className='border-2 font-bold rounded-md h-[28px] w-[28px]'>
                                                    <AiOutlinePlus className="cursor-pointer text-2xl" onClick={() => increaseQuantity(item.id)} />
                                                </div>
                                            </div>
                                            <div className="flex mt-1">
                                                {[...Array(item.rank)].map((_, index) => (
                                                    <MdOutlineStar key={index} className="text-yellow-400" />
                                                ))}

                                            </div>
                                            <p className='text-sm'>Delivery Charge : 1$</p>
                                        </div>
                                    </div>
                                ))
                            )}
                            {cart.length > 0 && (
                                <div className="mt-4 font-semibold">
                                    Total Price: ${calculateTotalPrice()}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </header>




            {/* Headings for Fruits and Vegetables */}



            <div className="mt-8">
                {/* <h2 className="text-4xl text-stone-700 font-bold my-8 te">Fruits</h2> */}

                <h2 className="md:text-4xl text-2xl text-stone-700 font-bold my-8">Products</h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredProducts.slice(0, 9).map(product => (
                        <div
                            key={product.id}
                            className="border rounded shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-200"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded mb-3"
                                height={256}
                                width={100}
                            />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-700">Price: ${product.price}</p>
                            <div className="flex mt-1">
                                {[...Array(product.rank)].map((_, index) => (
                                    <MdOutlineStar key={index} className="text-yellow-400" />
                                ))}
                            </div>
                            <button
                                className="mt-3 w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition duration-200"
                                onClick={() => handleReadMoreClick(product)}
                            >
                                Read more
                            </button>
                        </div>
                    ))}
                </div>



                {/* VEGETABLES */}


                {/* <h2 className="text-4xl text-stone-700 font-bold my-8">Vegetables</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.slice(9, 18).map(product => (
                        <div
                            key={product.id}
                            className="border rounded shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-200"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded mb-3"
                                height={256}
                                width={100}
                            />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-700">Price: ${product.price}</p>
                            <div className="flex mt-1">
                                {[...Array(product.rank)].map((_, index) => (
                                    <MdOutlineStar key={index} className="text-yellow-400" />
                                ))}
                            </div>
                            <button
                                className="mt-3 w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition duration-200"
                                onClick={() => handleReadMoreClick(product)}
                            >
                                Read more
                            </button>
                        </div>
                    ))}
                </div>
            </div>


          


            <main>


                {/* <h2 className="mt-4 text-2xl font-semibold text-teal-700">Products</h2> */}
               

                {/* Modal for Product Details */}
                {selectedProduct && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded p-6 w-96">
                            <h2 className="text-xl font-semibold mb-2">{selectedProduct.name}</h2>
                            <Image
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-full h-48 object-cover rounded mb-3"
                                width={100}
                                height={192}
                            />
                            <p className="mb-4">{selectedProduct.description}</p>
                            <p className="font-semibold">Price: ${selectedProduct.price}</p>
                            <button
                                className="mt-3 w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition duration-200"
                                onClick={() => {
                                    addToCart(selectedProduct);
                                    closeModal();
                                }}
                            >
                                Add to Cart
                            </button>
                            <button className="mt-2 text-red-500" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
 
);
}

export default App;
