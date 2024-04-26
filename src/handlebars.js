const data = {
    header: {
        discount: {
            title: "discount all products spatial for December",
            discountNumb: 30,
        },
        topBar: {
            contactLink: [
                { title: "Quick Help", link: "#!" },
                { title: "Order Tracking", link: "#!" },
                { title: "Wishlist", link: "#!" },
            ],
            contactInfor: { phone: " (+800) 1234 5678 90", email: "info@company.com" },
            language: [
                { id: 0, title: "English" },
                { id: 1, title: "Spanish" },
                { id: 2, title: "Hindi" },
                { id: 3, title: "Bangla" },
            ],
            currency: [
                { id: 0, title: "USD" },
                { id: 1, title: "Euro" },
                { id: 2, title: "Rupi" },
                { id: 3, title: "Crypto" },
            ],
        },
        middleBar: {
            logo: "./asset/imgs/logo.png",
            categories: ["Categories", "Medicine", "Equipment", "Doctor", "Medical"],
            cta: [
                { iconName: "heart-outline", quantity: 0 },
                { iconName: "swap-horizontal-outline", quantity: 0 },
                { iconName: "cart-outline", quantity: 0 ,total :0, textLeft: true},
            ],
        },
        navBar: {
            browseCate: [
                { icon: "", title: " Surgical Mask", link: "#!" },
                {
                    icon: "",
                    title: " Pharmacy",
                    link: "#!",
                    child: ["Medicine", "Medicine & Pharmacy", "Thermometer", "Medicine Supplies"],
                },
                {
                    icon: "",
                    title: "Nutritions",
                    link: "#!",
                },
                {
                    icon: "",
                    title: "Medkits",
                    link: "#!",
                    child: ["Medicine", "Medicine & Pharmacy", "Thermometer", "Medicine Supplies"],
                },
                {
                    icon: "",
                    title: "Medicine",
                    link: "#!",
                },
                {
                    icon: "",
                    title: "Beauty Product",
                    link: "#!",
                    child: ["Medicine", "Medicine & Pharmacy", "Thermometer", "Medicine Supplies"],
                },
                {
                    icon: "",
                    title: "Equipments",
                    link: "#!",
                    child: ["Medicine", "Medicine & Pharmacy", "Thermometer", "Medicine Supplies"],
                },
                {
                    icon: "",
                    title: "Medicine Supplies",
                    link: "#!",
                },
                {
                    icon: "",
                    title: "Grocery Product",
                    link: "#!",
                },
            ],
            menu: [
                {
                    id: 1,
                    title: "Home Pages",
                    link: "#!",
                    submenu: [
                        {
                            id: 11,
                            title: "Home style 1",
                            link: "#!",
                        },
                        {
                            id: 12,
                            title: "Home style 2",
                            link: "#!",
                        },
                        {
                            id: 13,
                            title: "Home style 3",
                            link: "#!",
                        },
                    ],
                },
                {
                    id: 2,
                    title: "Shop",
                    link: "#!",
                    submenu: [
                        {
                            id: 21,
                            title: "Shop",
                            link: "#!",
                        },
                        {
                            id: 22,
                            title: "Shop Single",
                            link: "#!",
                        },
                        {
                            id: 23,
                            title: "Cart",
                            link: "#!",
                        },
                        {
                            id: 24,
                            title: "Wishlist",
                            link: "#!",
                        },
                        {
                            id: 25,
                            title: "Compare",
                            link: "#!",
                        },
                        {
                            id: 26,
                            title: "Checkout",
                            link: "#!",
                        },
                    ],
                },
                {
                    id: 3,
                    title: "Pages",
                    link: "#!",
                    submenu: [
                        {
                            id: 31,
                            title: "About",
                            link: "#!",
                        },
                        {
                            id: 32,
                            title: "My Account",
                            link: "#!",
                        },
                        {
                            id: 33,
                            title: "Forgot Password",
                            link: "#!",
                        },
                        {
                            id: 34,
                            title: "Contact",
                            link: "#!",
                        },
                        {
                            id: 35,
                            title: "404",
                            link: "#!",
                        },
                    ],
                },

                {
                    id: 5,
                    title: "Blog",
                    link: "#!",
                    submenu: [
                        {
                            id: 51,
                            title: "Blog Grid",
                            link: "#!",
                        },
                        {
                            id: 52,
                            title: "Blog right sidebar",
                            link: "#!",
                        },
                        {
                            id: 52,
                            title: "Blog Left sidebar",
                            link: "#!",
                        },
                        {
                            id: 53,
                            title: "Blog full width",
                            link: "#!",
                        },
                        {
                            id: 54,
                            title: "Blog single",
                            link: "#!",
                        },
                        {
                            id: 55,
                            title: "Blog single Left sidebar",
                            link: "#!",
                        },
                        {
                            id: 56,
                            title: "Blog single Left sidebar",
                            link: "#!",
                        },
                    ],
                },
                {
                    id: 88,
                    title: "Contact",
                    link: "#!",
                },
            ],
            login: {
                isLoggin: false,
                title: "Hello, Sign In",
                name: "Khanhh",
                avatar: "",
            },
        },
    },
    mobileMenu : [
        {
            id: 1,
            title: "Home Pages",
            link: "#!",
            submenu: [
                {
                    id: 11,
                    title: "Home style 1",
                    link: "#!",
                },
                {
                    id: 12,
                    title: "Home style 2",
                    link: "#!",
                },
                {
                    id: 13,
                    title: "Home style 3",
                    link: "#!",
                },
            ],
        },
        {
            id: 2,
            title: "Shop",
            link: "#!",
            submenu: [
                {
                    id: 21,
                    title: "Shop",
                    link: "#!",
                },
                {
                    id: 22,
                    title: "Shop Single",
                    link: "#!",
                },
                {
                    id: 23,
                    title: "Cart",
                    link: "#!",
                },
                {
                    id: 24,
                    title: "Wishlist",
                    link: "#!",
                },
                {
                    id: 25,
                    title: "Compare",
                    link: "#!",
                },
                {
                    id: 26,
                    title: "Checkout",
                    link: "#!",
                },
            ],
        },
        {
            id: 3,
            title: "Pages",
            link: "#!",
            submenu: [
                {
                    id: 31,
                    title: "About",
                    link: "#!",
                },
                {
                    id: 32,
                    title: "My Account",
                    link: "#!",
                },
                {
                    id: 33,
                    title: "Forgot Password",
                    link: "#!",
                },
                {
                    id: 34,
                    title: "Contact",
                    link: "#!",
                },
                {
                    id: 35,
                    title: "404",
                    link: "#!",
                },
            ],
        },

        {
            id: 5,
            title: "Blog",
            link: "#!",
            submenu: [
                {
                    id: 51,
                    title: "Blog Grid",
                    link: "#!",
                },
                {
                    id: 52,
                    title: "Blog right sidebar",
                    link: "#!",
                },
                {
                    id: 52,
                    title: "Blog Left sidebar",
                    link: "#!",
                },
                {
                    id: 53,
                    title: "Blog full width",
                    link: "#!",
                },
                {
                    id: 54,
                    title: "Blog single",
                    link: "#!",
                },
                {
                    id: 55,
                    title: "Blog single Left sidebar",
                    link: "#!",
                },
                {
                    id: 56,
                    title: "Blog single Left sidebar",
                    link: "#!",
                },
            ],
        },
        {
            id: 88,
            title: "Contact",
            link: "#!",
        },
    ],
    hero: {
        heroLeft: {
            textTag: "100% Premium Quality",
            title: "New Antibacterial Surgical Mask",
            desc: "when unknown printer took a galley type scramble",
            link: "#!",
            backgroundColor: "bg-pink-100",
            backgroundImage:
                "https://medimela-react.envalabdemos.com/static/media/shape.b7f2272902017f5b1dd5.png",
            thumbnail: "./asset/imgs/hero/hero-1.png",
            saveOff: "SAVE 80% OFF",
            oldPrice: "62.00",
            presentPrice: "50.00",
        },
        heroRight: {
            desc: "Thermometer",
            backgroundColor: "bg-blue-50",
            title: "Digital Sx-1R",
            thumbnail: "./asset/imgs/hero/hero-2.png",
            oldPrice: "62.00",
            presentPrice: "50.00",
            link: "#!",
        },
    },
    textAnimation: [
        "Midmeal",
        "Surgical",
        "Resources",
        "Digital",
        "Product",
        "Midmeal",
        "Surgical",
        "Resources",
        "Digital",
        "Product",
    ],
    featureCate: {
        logoIcon : "./asset/imgs/logo-icon.png",
        title: "Featured Categorys",
        tabCate: [
            { name: "Gorecy", icon: "", quantity: "2" },
            {
                name: "Pharmacy",
                icon: "",
                quantity: "2",
            },
            {
                name: "Surgical Mask",
                icon: "",
                quantity: "2",
            },
            {
                name: "Medkits",
                icon: "",
                quantity: "2",
            },
            {
                name: "Medicine",
                icon: "",
                quantity: "2",
            },
            {
                name: "Stethoscope",
                icon: "",
                quantity: "2",
            },
            {
                name: "Beauty",
                icon: "",
                quantity: "2",
            },
        ],
    },
    popularCate: {
        logoIcon : "./asset/imgs/logo-icon.png",
        title: "Popular Categories",
        tabCate: [
            {
                name: "Medicine",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/1.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                          
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"

                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/3.png",
                        tags : [
                            
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"

                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/4.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline",
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "",
                active: "cate--active",
            },
            {
                name: "Stethoscope",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/5.png",
                        tags : [
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/7.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                           
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "hidden",
                active: "",
            },
            {
                name: "Beauty",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                           
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                           
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "hidden",
                active: "",
            },
        ],
    },
    latestProdut: {
        logoIcon : "./asset/imgs/logo-icon.png",
        title: "Our Latest Products",
        sidebar: {
            isTag: true,
            tagText: "100% PureHand",
            title: "Amandean Wild Caught",
            link: "#!",
            thumbnail: "./asset/imgs/our-latest-product.png",
            discount: "50%",
        },
        tabCate: [
            {
                name: "Medicine",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/1.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                          
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/3.png",
                        tags : [
                            
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/4.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "",
                active: "cate--active",
            },
            {
                name: "Stethoscope",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/5.png",
                        tags : [
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/7.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                           
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "hidden",
                active: "",
            },
            {
                name: "Beauty",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                           
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                           
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "hidden",
                active: "",
            },
        ],
    },
    dealzone: {
        logoIcon : "./asset/imgs/logo-icon.png",
        title: "Attention! Deal Zone Here",
        backgroundColor: "bg-zinc-50",
        backgroundImage: "./asset/imgs/decor-dealzone.png",
        countDown: {
            text: "Get 50% off your first purchase",
            time: "May 5, 2024 15:37:25",
        },
        product: [
            {
                thumbnail: "./asset/imgs/dealzone/dealzone-1.png",
                title: "Doctor Stethoscope",
                desc: "I have been a loyal customer of this auto parts company for years .",
                sold: "4",
                quantity: "66",
                oldPrice: "340.00",
                presentPrice: "380.00",
                backgroundColor: "bg-white",
                addtoCart : "cart-outline"
            },
            {
                thumbnail: "./asset/imgs/dealzone/dealzone-2.png",
                title: "Doctor Stethoscope",
                desc: "I have been a loyal customer of this auto parts company for years .",
                sold: "4",
                quantity: "66",
                oldPrice: "340.00",
                presentPrice: "380.00",
                backgroundColor: "bg-white",
                addtoCart : "cart-outline"

            },
            {
                thumbnail: "./asset/imgs/dealzone/dealzone-3.png",
                title: "Doctor Stethoscope",
                desc: "I have been a loyal customer of this auto parts company for years .",
                sold: "4",
                quantity: "66",
                oldPrice: "340.00",
                presentPrice: "380.00",
                backgroundColor: "bg-white",
                addtoCart : "cart-outline"

            },
        ],
    },
    bestSeller: {
        tabBestSeller: {
            title: "Best Sellers",
            productCol_1: [
                {
                    id: 0,
                    idCat: 4,
                    name: "Hand Sanitizer",
                    oldPrice: "380.00",
                    presentPrice: "$340.00",
                    image: "https://medimela-react.envalabdemos.com/product/3.png",
                },
                {
                    id: 1,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/2.png",
                },
                {
                    id: 2,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/3.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/4.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/2.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/6.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/8.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/9.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/10.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/11.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/12.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/13.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/14.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/15.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/16.png",
                },
            ],
            productCol_2: [
                {
                    id: 0,
                    idCat: 4,
                    name: "Hand Sanitizer",
                    oldPrice: "380.00",
                    presentPrice: "$340.00",
                    image: "https://medimela-react.envalabdemos.com/product/1.png",
                },
                {
                    id: 1,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/2.png",
                },
                {
                    id: 2,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/3.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/4.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/2.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/6.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/8.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/9.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/10.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/11.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/12.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/13.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/14.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/15.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/16.png",
                },
            ],
            productCol_3: [
                {
                    id: 0,
                    idCat: 4,
                    name: "Hand Sanitizer",
                    oldPrice: "380.00",
                    presentPrice: "$340.00",
                    image: "https://medimela-react.envalabdemos.com/product/1.png",
                },
                {
                    id: 1,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/2.png",
                },
                {
                    id: 2,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/3.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/4.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/2.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/6.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/8.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/9.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/10.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/11.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/12.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/13.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/14.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/15.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/16.png",
                },
            ],
        },
        tabTopProduct: {
            title: "Top Products",
            product: [
                {
                    id: 0,
                    idCat: 4,
                    name: "Hand Sanitizer",
                    oldPrice: "380.00",
                    presentPrice: "$340.00",
                    image: "https://medimela-react.envalabdemos.com/product/14.png",
                },
                {
                    id: 1,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/15.png",
                },
                {
                    id: 2,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/16.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/4.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/2.png",
                },
                {
                    id: 3,
                    idCat: 4,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/6.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/8.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/9.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/10.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/11.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/12.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/13.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/14.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/15.png",
                },
                {
                    id: 3,
                    idCat: 5,
                    name: "Moderna's Vaccine",
                    oldPrice: "85.00",
                    presentPrice: "$65.00",
                    image: "https://medimela-react.envalabdemos.com/product/16.png",
                },
            ],
        },
        sidebar: {
            text: "Popular Healthcare",
            title: "Eye Testing Machine",
            backgroundColor: "bg-blue-700",
            thumbnail: "./asset/imgs/bestseller-banner.png",
            backgroundImage: "./asset/imgs/decor-bestseller.png",
        },
    },
    dailySells: {
        logoIcon : "./asset/imgs/logo-icon.png",
        title: "Daily Best Sells",
        tabCate: [
            {
                name: "Medicine",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/1.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                          
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/3.png",
                        tags : [
                            
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/4.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "",
                active: "cate--active",
            },
            {
                name: "Stethoscope",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/5.png",
                        tags : [
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/7.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                           
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "hidden",
                active: "",
            },
            {
                name: "Beauty",
                product: [
                    {
                        id: 0,
                        idCat: 4,
                        name: "Hand Sanitizer",
                        oldPrice: "380.00",
                        presentPrice: "$340.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 1,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                           
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 2,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                           
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/2.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 4,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/6.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/8.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/9.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/10.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/11.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/12.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/13.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/14.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/15.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                    {
                        id: 3,
                        idCat: 5,
                        name: "Moderna's Vaccine",
                        oldPrice: "85.00",
                        presentPrice: "$65.00",
                        image: "https://medimela-react.envalabdemos.com/product/16.png",
                        tags : [
                            {
                                text : "sale",
                                backgroundColor : "bg-blue-500 "
                            },
                            {
                                text : "trending",
                                backgroundColor : "bg-orange-500 "
                            },
                            {
                                text : "-15%",
                                backgroundColor : "bg-red-500 "
                            }
                        ],
                        btnCTA : [
                            {icon : "heart-outline", act : ""},
                            {icon : "swap-horizontal-outline", act : ""},
                            {icon : "eye-outline", act : "Quickview"},
                        ],
                        addtoCart : "cart-outline"
                    },
                ],
                hidden: "hidden",
                active: "",
            },
        ],
    },
    banner: {
        bannerS1: [
            {
                thumbnail:
                    "https://medimela-react.envalabdemos.com/static/media/img-1.322e985c3a7de3f6494e.png",
                backgroundColor: "bg-blue-500",
                backgroundImage: "./asset/imgs/banner/backgroundImage.png",
                text: "-10% OFF",
                isTag: true,
                title: { strong: "Hand", small: "Sanitizer" },
                desc: "I have been a loyal customer of this auto parts company for years.",
                link: "#!",
            },
            {
                thumbnail:
                    "https://medimela-react.envalabdemos.com/static/media/img-1.322e985c3a7de3f6494e.png",
                backgroundColor: "bg-orange-400",
                backgroundImage: "./asset/imgs/banner/backgroundImage.png",
                text: "Upto 25% Off",
                isTag: false,
                title: { strong: "Hand", small: "Sanitizer" },
                desc: "I have been a loyal customer of this auto parts company for years.",
                link: "#!",
            },
            {
                thumbnail:
                    "https://medimela-react.envalabdemos.com/static/media/img-1.322e985c3a7de3f6494e.png",
                backgroundColor: "bg-red-600",
                backgroundImage: "./asset/imgs/banner/backgroundImage.png",
                text: "Upto 25% Off",
                isTag: false,
                title: { strong: "Hand", small: "Sanitizer" },
                desc: "I have been a loyal customer of this auto parts company for years.",
                link: "#!",
            },
        ],
        bannerS2: {
            thumbnail: "./asset/imgs/banner/banner-02.png",
            title: "Save Unto 10% Extra Enjoy FREE Delivery With PLUS Membership",
            backgroundColor: "bg-blue-700 ",
            backgroundImage: "./asset/imgs/banner/banner-decor-01.png",
            text: "New Products",
            isTag: true,
            link: "#!",
        },
        bannerS3: [
            {
                text: "New Products",
                isTag: true,
                title: "When Purchasing Any CocoSoul Product As A Gift Parachute 100% Coconut Oil.",
                backgroundColor: "bg-blue-700 ",
                backgroundImage: "./asset/imgs/decor-bestseller.png",
                link: "#!",
                thumbnail: "./asset/imgs/dealzone/banner-1.png",
                primary: "",
            },
            {
                text: "New Products",
                isTag: true,
                title: "When Purchasing Any CocoSoul Product As A Gift Parachute 100% Coconut Oil.",
                backgroundColor: "bg-orange-400 ",
                backgroundImage: "./asset/imgs/decor-bestseller.png",
                link: "#!",
                thumbnail: "./asset/imgs/dealzone/banner-1.png",
                primary: "tag--primary",
            },
        ],
        bannerS4: [
            {
                isTag: false,
                thumbnail: "./asset/imgs/banner/banner-3.png",
                title: "Sale Off 20%",
                desc: "On Sanitizers",
                link: "#!",
                backgroundColor: "bg-blue-600",
                backgroundImage: "./asset/imgs/banner/banner-decor-03.png",
                decorTriangle: "",
            },
            {
                isTag: true,
                tagText: "New Product",
                thumbnail: "./asset/imgs/banner/banner-4.png",
                title: "When Purchasing Any CocoSoul Product As A Gift Parachute 100% Coconut Oil.",
                desc: "",
                link: "#!",
                backgroundColor: "bg-orange-400",
                backgroundImage: "./asset/imgs/banner/banner-decor-03.png",
                primary: "tag--primary",
                decorTriangle: "banner--triangle",
            },
        ],
        bannerS5: [
            {
                src: "./asset/imgs/medimela.png",
            },
            {
                src: "./asset/imgs/medimela-2.png",
            },
            {
                src: "./asset/imgs/medimela-3.png",
            },
            {
                src: "./asset/imgs/medimela-4.png",
            },
            {
                src: "./asset/imgs/medimela-5.png",
            },
            {
                src: "./asset/imgs/medimela-6.png",
            },
            {
                src: "./asset/imgs/medimela-4.png",
            },
        ],
    },
    Features: {
        logoIcon : "./asset/imgs/logo-icon.png",
        title : "Know What You Pay For",
       listFeature: [
        {
            id: "1",
            icon: "icon-shipped",
            title: "In-Store Pickup",
            des: "I have been a loyal customer of this auto parts company for years .",
        },
        {
            id: "2",
            icon: "icon-product",
            title: "Free Shipping Over $20",
            des: "I have been a loyal customer of this auto parts company for years .",
        },
        {
            id: "3",
            icon: "icon-placeholder",
            title: "Store Locator",
            des: "I have been a loyal customer of this auto parts company for years .",
        },
        {
            id: "4",
            icon: "icon-vehicle",
            title: "Free Servicing",
            des: "I have been a loyal customer of this auto parts company for years .",
        },
        {
            id: "5",
            icon: "icon-quality",
            title: "100% Quality Product",
            des: "I have been a loyal customer of this auto parts company for years .",
        },
        {
            id: "6",
            icon: "icon-shopping-cart",
            title: "Speed Perks",
            des: "I have been a loyal customer of this auto parts company for years .",
        },
    ]},
    blogs: {
        title : "Our Latest Blogs",
        logoIcon : "./asset/imgs/logo-icon.png",
       blogList: [
        {
            id: "1",
            title: "Mirage Deep Dive Under anding Timin Response",
            slug: "Mirage-Deep-Dive-Under-anding-Timin-Response",
            description:
                "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.",
            author: "Loura",
            create_at: "25 Sep 2024",
            blogSingleImg:
                "https://medimela-react.envalabdemos.com/static/media/img-1.ccd0e222d3da58daed68.jpg",
            comment: "35",
            day: "28",
            month: "AUGUST",
            blClass: "format-standard-image",
            animation: "1200",
        },
        {
            id: "2",
            title: "Upload prescription and we will deliver your medicines",
            slug: "Upload-prescription-and-we-will-deliver-your-medicines",
            description:
                "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.",
            author: "David",
            create_at: "23 Sep 2024",
            blogSingleImg:
                "https://medimela-react.envalabdemos.com/static/media/img-2.88b39db5cb2c6f391416.jpg",
            comment: "80",
            day: "25",
            month: "March",
            blClass: "format-standard-image",
            animation: "1400",
        },
        {
            id: "3",
            title: "The Importance of Process Workflows and Stains in Positive",
            slug: "The-Importance-of-Process-Workflows-and-Stains-in-Positive",
            description:
                "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.",
            author: "Jenefer",
            create_at: "21 Sep 2024",
            blogSingleImg:
                "https://medimela-react.envalabdemos.com/static/media/img-3.7b11036197b063aed4f0.jpg",
            comment: "95",
            day: "23",
            month: "Sep",
            blClass: "format-video",
            animation: "1600",
        },
        {
            id: "4",
            title: "In our laboratory, if a gram stain result is not entered",
            slug: "In-our-laboratory-if-a-gram-stain-result-is-not-entered",
            description:
                "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.",
            author: "David",
            create_at: "23 Sep 2024",
            blogSingleImg:
                "https://medimela-react.envalabdemos.com/static/media/img-4.e9b359ff22390f8f7ccf.jpg",
            comment: "80",
            day: "25",
            month: "March",
            blClass: "format-standard-image",
            animation: "1400",
        },
        {
            id: "5",
            title: "Mirage Deep Dive Under anding Timin Response",
            slug: "Mirage-Deep-Dive-Under-anding-Tim-Response",
            description:
                "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.",
            author: "Loura",
            create_at: "25 Sep 2024",
            blogSingleImg:
                "https://medimela-react.envalabdemos.com/static/media/img-4.e9b359ff22390f8f7ccf.jpg",
            comment: "35",
            day: "28",
            month: "AUGUST",
            blClass: "format-standard-image",
            animation: "1200",
        },
    ]},
    testimonial: [
        {
            id: "01",
            tImg: "https://medimela-react.envalabdemos.com/static/media/img-1.49085f3d54ba49519a44.jpg",
            Des: "Transforming ideas into user-fProin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus.",
            Title: "Darlene Robertson",
            Sub: "Web design",
        },
        {
            id: "02",
            tImg: "https://medimela-react.envalabdemos.com/static/media/img-2.0b4a5696b40ebd57b8e2.jpg",
            Des: "Transforming ideas into user-fProin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus.",
            Title: "Robert Miller",
            Sub: "UX/UI Designer",
        },
        {
            id: "03",
            tImg: "https://medimela-react.envalabdemos.com/static/media/img-3.7d43a58c0f123e609fe2.jpg",
            Des: "Transforming ideas into user-fProin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus.",
            Title: "Ken William",
            Sub: "Programmer",
        },
    ],
    footer: {
        backgroundColor: "bg-[#1c263a]",
        offerFeature: [
            { icon: "", title: "FREE & FAST SHIPPING", desc: "Orders All Over $100" },
            { icon: "", title: "MONEY BACK GUARANTEE", desc: "With a 30 Day Minimum" },
            { icon: "", title: "ALL SECURE PAYMENT", desc: "Up to 12 months installments" },
            { icon: "", title: "ALL SECURE DSCOUNT", desc: "Up to 12% Discount" },
        ],
        about: {
            logo: "./asset/imgs/logo-light.png",
            desc: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.",
            phone: "+1 (230)-456-155-23",
            email: "info@yourmail.com",
            location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            workTime: "Hours 10:00 - 18:00, Mon - Sat",
        },
        information: {
            title: "Information",
            menu: [
                {
                    title: "Delivery",
                    link: "#!",
                },
                {
                    title: "About Us",
                    link: "#!",
                },
                {
                    title: "Secure Payment",
                    link: "#!",
                },
                {
                    title: "Contact Us",
                    link: "#!",
                },
                {
                    title: "Sitemap",
                    link: "#!",
                },
                {
                    title: "Stores",
                    link: "#!",
                },
            ],
        },
        customLink: {
            title: "Custom Links",
            menu: [
                {
                    title: "Custom Links",
                    link: "#!",
                },
                {
                    title: " Prices Drop",
                    link: "#!",
                },
                {
                    title: "New Products",
                    link: "#!",
                },
                {
                    title: "Best Sales",
                    link: "#!",
                },
                {
                    title: "Login",
                    link: "#!",
                },
                {
                    title: "My Account",
                    link: "#!",
                },
            ],
        },
        newsletter: {
            title: "Newsletter",
            desc: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.",
        },
        bottomFooter: {
            coppyright: {
                time: "2024",
                text: "all right reserved by",
                author: "Envalab",
            },
            paymentMethod: [],
        },
    },
};

// Blog
const blogs = document.querySelector(".blog");
const blogHandlebar = Handlebars.compile(blogs.innerHTML);
blogs.innerHTML = blogHandlebar(data);

// Testimonial
const testimonials = document.querySelector(".testimonials");
const testimonialsHdbar = Handlebars.compile(testimonials.innerHTML);
testimonials.innerHTML = testimonialsHdbar(data);

// Best  Seller
const productBestSeller = document.querySelector(".bestseller");
const bestSellerHandlerBar = Handlebars.compile(productBestSeller.innerHTML);
productBestSeller.innerHTML = bestSellerHandlerBar(data);

// Header
const header = document.querySelector(".header");
const headerHandleBar = Handlebars.compile(header.innerHTML);
header.innerHTML = headerHandleBar(data);

// Footer
const footer = document.querySelector(".footer");
const footerHandleBar = Handlebars.compile(footer.innerHTML);
footer.innerHTML = footerHandleBar(data);

// Banner
const banners = document.querySelectorAll(".banner");
banners.forEach((banner) => {
    const bannerHandleBar = Handlebars.compile(banner.innerHTML);
    banner.innerHTML = bannerHandleBar(data);
});
// text-animation
const textAnimation = document.querySelector(".text-animation");
const textAnimationHandleBar = Handlebars.compile(textAnimation.innerHTML);
textAnimation.innerHTML = textAnimationHandleBar(data);

// Hero
const hero = document.querySelector(".hero");
const heroHandleBar = Handlebars.compile(hero.innerHTML);
hero.innerHTML = heroHandleBar(data);

// featureCate
const featureCate = document.querySelector(".featureCate");
const featureCateHandleBar = Handlebars.compile(featureCate.innerHTML);
featureCate.innerHTML = featureCateHandleBar(data);

// popularcate
const popularcate = document.querySelector(".popularcate");
const popularcateHandleBar = Handlebars.compile(popularcate.innerHTML);
popularcate.innerHTML = popularcateHandleBar(data);

// Our Latest Products
const latestProdut = document.querySelector(".latestProdut");
const latestProdutHandleBar = Handlebars.compile(latestProdut.innerHTML);
latestProdut.innerHTML = latestProdutHandleBar(data);

// dealzone
const dealzone = document.querySelector(".dealzone");
const dealzoneHandleBar = Handlebars.compile(dealzone.innerHTML);
dealzone.innerHTML = dealzoneHandleBar(data);

// dailySell
const dailySell = document.querySelector(".dailySell");
const dailySellHandleBar = Handlebars.compile(dailySell.innerHTML);
dailySell.innerHTML = dailySellHandleBar(data);

// feature
const feature = document.querySelector(".feature");
const featureHandleBar = Handlebars.compile(feature.innerHTML);
feature.innerHTML = featureHandleBar(data);

// Mobile Menu
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuHandleBar = Handlebars.compile(mobileMenu.innerHTML);
mobileMenu.innerHTML = mobileMenuHandleBar(data);
