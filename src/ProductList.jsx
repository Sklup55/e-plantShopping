import React, { useState, useEffect } from 'react';
import './ProductList.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CreateSlice';
import CartItem from './CartItem';

const ProductList = () => {
    const [showItems, setShowItems] = useState(false);
    const cartItems = useSelector((state) => state.cart.items); // Correct selector for cart items
    const dispatch = useDispatch();

    const handleToggleItems = () => {
        setShowItems(!showItems);
    };

    const handleToggleCart = () => {
        setShowItems(!showItems);
    };

    const handleAddToCart = (plant) => {
        const existingItem = cartItems.find(item => item.name === plant.name);
        if (existingItem) {
            dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
        } else {
            dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost, quantity: 1 }));
        }
    };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://pixabay.com/images/download/leaf-3283175_640.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Oregano",
                    image: "",
                    description: "The oregano plants contain compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: "",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                },
                {
                    name: "Lavender",
                    image: "",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: "",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: "",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22"
                }
            ]
        }
    ];

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    return (
        <div>
            <div className="navbar">
                <div className="tag">
                    <div className="luxury">
                        <img src="" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>

                <div style={styleObjUl}>
                    <div><a href="#" style={styleA}>Plants</a></div>
                    <div>
                        <button className="details_button" onClick={handleToggleCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                <rect width="156" height="156" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="main_container">
                {!showItems ? (
                    <div className="product-grid">
                        {plantsArray.map((category, index) => (
                            <div key={index}>
                                <h1>{category.category}</h1>
                                <div className="product-list">
                                    {category.plants.map((plant, plantIndex) => (
                                        <div className="product-card" key={plantIndex}>
                                            <div className="product-title">{plant.name}</div>
                                            <div className="product-cost">{plant.cost}</div>
                                            <img className="product-image" src={plant.image} alt={plant.name} />
                                            <div className="product-description">{plant.description}</div>

                                            <button onClick={() => handleAddToCart(plant)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="cart">
                        {cartItems.map((item, index) => (
                            <CartItem key={index} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductList;
