exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 9487:
/***/ (() => {



/***/ }),

/***/ 1058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4368);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6753);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8903);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7930);
/* __next_internal_client_entry_do_not_use__ Header auto */ 





function Header() {
    const [echoPrice, setEchoPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [hbarPrice, setHbarPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [saucePrice, setSaucePrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [packPrice, setPackPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchPrices() {
            try {
                const tokens = [
                    "ECHO",
                    "HBAR",
                    "SAUCE",
                    "PACK"
                ];
                const prices = await Promise.all(tokens.map(async (token)=>{
                    const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${token}`);
                    const data = await response.json();
                    return data.pairs && data.pairs.length > 0 ? data.pairs[0].priceUsd : null;
                }));
                setEchoPrice(prices[0]);
                setHbarPrice(prices[1]);
                setSaucePrice(prices[2]);
                setPackPrice(prices[3]);
            } catch (error) {
                console.error("Error fetching prices:", error);
            }
        }
        fetchPrices();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex h-14 max-w-screen-2xl items-center px-2 sm:px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mr-4 flex",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "mr-6 flex items-center space-x-2",
                            href: "/",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "https://github.com/HederaEcho/resources/blob/main/echo-logo.png?raw=true",
                                    alt: "ECHO Logo",
                                    width: 40,
                                    height: 40,
                                    className: "rounded-full"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-bold text-sm sm:text-base",
                                    children: "Hedera EchoSystem"
                                })
                            ]
                        }),
                        echoPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden items-center space-x-2 sm:flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: "ECHO:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-sm font-bold text-green-400",
                                    children: [
                                        "$",
                                        Number(echoPrice).toFixed(4)
                                    ]
                                })
                            ]
                        }),
                        hbarPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden items-center space-x-2 sm:flex ml-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: "HBAR:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-sm font-bold text-green-400",
                                    children: [
                                        "$",
                                        Number(hbarPrice).toFixed(4)
                                    ]
                                })
                            ]
                        }),
                        saucePrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden items-center space-x-2 sm:flex ml-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: "SAUCE:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-sm font-bold text-green-400",
                                    children: [
                                        "$",
                                        Number(saucePrice).toFixed(4)
                                    ]
                                })
                            ]
                        }),
                        packPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden items-center space-x-2 sm:flex ml-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: "PACK:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-sm font-bold text-green-400",
                                    children: [
                                        "$",
                                        Number(packPrice).toFixed(4)
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-1 items-center justify-between space-x-2 md:justify-end",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                            className: "flex items-center space-x-6 text-sm font-medium",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "https://twitter.com/HederaEcho",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "transition-colors hover:text-foreground/80 text-foreground/60",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: "h-5 w-5"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Twitter"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "https://docs.testecho.io",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "transition-colors hover:text-foreground/80 text-foreground/60",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            className: "h-5 w-5"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Documentation"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            variant: "outline",
                            className: "ml-auto",
                            children: [
                                "Get Listed",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    className: "ml-2 h-4 w-4"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Badge)
/* harmony export */ });
/* unused harmony export badgeVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1971);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2857);




const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}



/***/ }),

/***/ 4368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1085);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1971);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2857);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ol: () => (/* binding */ CardHeader),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   aY: () => (/* binding */ CardContent),
/* harmony export */   eW: () => (/* binding */ CardFooter),
/* harmony export */   ll: () => (/* binding */ CardTitle)
/* harmony export */ });
/* unused harmony export CardDescription */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2857);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 5538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2857);



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";



/***/ }),

/***/ 1493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ fetchSaucerSwapPrice)
/* harmony export */ });
async function fetchSaucerSwapPrice(tokenId) {
    if (!tokenId) return null;
    try {
        const response = await fetch(`https://api.saucerswap.finance/tokens/${tokenId}`);
        const data = await response.json();
        return data.priceUsd;
    } catch (error) {
        console.error("Error fetching SaucerSwap price:", error);
        return null;
    }
}


/***/ }),

/***/ 6976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ categories),
/* harmony export */   q: () => (/* binding */ projects)
/* harmony export */ });
const projects = [
    {
        id: "1",
        name: "SaucerSwap",
        logo: "https://github.com/HederaEcho/resources/blob/main/SAUCE%20Token%20Icon.png?raw=true",
        telegram: "https://t.me/saucerswap",
        twitter: "https://twitter.com/SaucerSwapLabs",
        website: "https://saucerswap.finance",
        discord: "https://discord.gg/saucerswap",
        tokenSymbol: "SAUCE",
        tokenId: "0.0.731861",
        category: [
            "DeFi",
            "DEX"
        ],
        description: "SaucerSwap is the Leading decentralized exchange built on the Hedera network.",
        teamMembers: [
            {
                name: "Peter Campbell",
                role: "Co-Founder,Operations & Marketing",
                twitter: "https://twitter.com/GlieseSauce"
            },
            {
                name: "Joseph Bergvinson",
                role: "Co-Founder, Operations & Tokenomics",
                twitter: "https://twitter.com/Hashburglar50"
            },
            {
                name: "Nube",
                role: "Project Manager",
                twitter: "https://twitter.com/nubeasado"
            },
            {
                name: "Matthew DeLorenzo",
                role: "Co-Founder, Smart Contract Engineering Lead",
                telegram: "https://t.me/littletarzan"
            }
        ],
        whitepaper: "https://saucerswap.finance/whitepaper.pdf",
        verificationLevel: "audited",
        dexScreenerPairAddress: "0x4A46705176faC8Fd5C8061F94A2C44416e7B20e6"
    },
    {
        id: "2",
        name: "HashPack",
        logo: "https://github.com/HederaEcho/resources/blob/main/Hashpack.jpg?raw=true",
        telegram: "https://t.me/hashpack",
        twitter: "https://twitter.com/hashpackwallet",
        website: "https://www.hashpack.app",
        discord: "https://discord.gg/hashpack",
        tokenSymbol: "PACK",
        tokenId: "0.0.4794920",
        category: [
            "Wallet"
        ],
        description: "HashPack is the leading Hedera wallet and your gateway to dApps, DeFi and NFTs.",
        teamMembers: [
            {
                name: "May Chan",
                role: "Co-Founder & Chief Executive Officer",
                twitter: "https://twitter.com/may_hashpack"
            },
            {
                name: "Tyler Cote",
                role: "Co-Founder & Chief Tecnology Officer",
                twitter: "https://twitter.com/pluto_hashpack"
            },
            {
                name: "Jacob D'Rozario",
                role: "Co-Founder & Chief Product Officer",
                twitter: "https://twitter.com/jacobdrozario"
            },
            {
                name: "Nicholas Hanna",
                role: "Co-Founder & Chief Information Security Officer",
                telegram: "https://t.me/ArthHashpack"
            }
        ],
        whitepaper: "",
        verificationLevel: "audited",
        dexScreenerPairAddress: ""
    },
    {
        id: "3",
        name: "HeadStarter",
        logo: "https://github.com/HederaEcho/resources/blob/main/headstarter.jpeg?raw=true",
        telegram: "https://t.me/headstarterorg",
        twitter: "https://twitter.com/headstarterorg",
        website: "https://headstarter.org",
        discord: "https://discord.gg/",
        tokenSymbol: "HST",
        tokenId: "0.0.968069",
        category: [
            "DeFi"
        ],
        description: "The project accelerator and Launchpad of the Hedera Ecosystem.",
        teamMembers: [
            {
                name: "Tudor Holotescu",
                role: "Founder",
                twitter: "https://twitter.com/Tudor_Holotescu"
            },
            {
                name: "Victor Holotescu",
                role: "Developer",
                github: "https://github.com/victorholo"
            },
            {
                name: "Victor Adascalitei",
                role: "Developer",
                github: "https://github.com/3Nigma"
            },
            {
                name: "Dana Cabau",
                role: "Marketing Lead",
                telegram: "https://twitter.com/rpcwojak"
            }
        ],
        whitepaper: "https://headstarter.org/litepaper",
        verificationLevel: "audited",
        dexScreenerPairAddress: ""
    },
    {
        id: "4",
        name: "Sentx",
        logo: "https://github.com/HederaEcho/resources/blob/main/sentx.jpeg?raw=true",
        telegram: "https://t.me/sentx",
        twitter: "https://twitter.com/sentx_io",
        website: "https://sentx.io",
        discord: "https://discord.gg/sentx",
        tokenSymbol: "SENTX",
        tokenId: "0.0.2672057",
        category: [
            "NFT"
        ],
        description: "Hedera's Leading NFT Marketplace, Gamifying NFT Trading..",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "verified",
        dexScreenerPairAddress: ""
    },
    {
        id: "5",
        name: "Altlantis",
        logo: "https://github.com/HederaEcho/resources/blob/main/altlantis.jpeg?raw=true",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/altlantisApp",
        website: "https://altlantis.market",
        discord: "https://discord.gg/",
        tokenSymbol: "ATL",
        tokenId: "",
        category: [
            "NFT"
        ],
        description: "Atlantis Market is an NFT marketplace, No-code launchpad and minting tool on hedera.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "6",
        name: "Hash Axis",
        logo: "https://github.com/HederaEcho/resources/blob/main/hashaxix.jpeg?raw=true",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/hashaxis",
        website: "https://hashaxis.com",
        discord: "https://discord.gg/",
        tokenSymbol: "HAXIS",
        tokenId: "",
        category: [
            "NFT"
        ],
        description: "Hash Axis is a Digital Marketplace for crypto collcetibles and non-fungible tokens (NFTs).",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "7",
        name: "HashGuild",
        logo: "https://github.com/HederaEcho/resources/blob/main/hashguild.jpeg?raw=true",
        telegram: "https://t.me/hashguild",
        twitter: "https://twitter.com/hashguild",
        website: "https://hashguild.xyz",
        discord: "https://discord.gg/",
        tokenSymbol: "HGUILD",
        tokenId: "",
        category: [
            "NFT"
        ],
        description: "HashGuild is an NFT marketplace on Hedera Blockchain, Collect NFTs like never before where creator meets collector and collector meets creator.",
        teamMembers: [
            {
                name: "NinjaPanda",
                role: "Community & Marketing",
                twitter: "https://twitter.com/ninjapandat"
            },
            {
                name: "lawrence",
                role: "Community & Marketing",
                twitter: "https://twitter.com/cryptolawrenxe"
            },
            {
                name: "hbarPanda",
                role: "Operation & Growth",
                twitter: "https://twitter.com/hbar_panda"
            },
            {
                name: "datproto",
                role: "Tech & Product",
                twitter: "https://twitter.com/dan_the_proto"
            }
        ],
        whitepaper: "",
        verificationLevel: "verified",
        dexScreenerPairAddress: ""
    },
    {
        id: "8",
        name: "Bonzo Finance",
        logo: "https://github.com/HederaEcho/resources/blob/main/bonzo.jpeg?raw=true",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/bonzo_finance",
        website: "https://bonzo.finance",
        discord: "https://discord.gg/",
        tokenSymbol: "BONZO",
        tokenId: "",
        category: [
            "Lending"
        ],
        description: "Bonzo Finance is a lending platform.",
        teamMembers: [
            {
                name: "Brady Gentile",
                role: "Co-Founder & CEO",
                twitter: "https://twitter.com/bmgentile"
            },
            {
                name: "Gaurang",
                role: "Co-Founder & CTO",
                twitter: "https://twitter.com/gaurangtorvekar"
            },
            {
                name: "Jason Fabritz",
                role: "Software Engineer",
                twitter: "https://twitter.com/bugbytesinc"
            },
            {
                name: "Nikhil",
                role: "Frontend Developer",
                twitter: "https://twitter.com/NikhilBAsrani"
            },
            {
                name: "Renly Smith",
                role: "Marketing & Community",
                twitter: "https://twitter.com/r3n__ly"
            }
        ],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "9",
        name: "Hedera Monkeys",
        logo: "https://github.com/HederaEcho/resources/blob/main/HMNKY.jpeg?raw=true",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/HMNKYs",
        website: "https://hederamonkeys.com",
        discord: "https://discord.gg/",
        tokenSymbol: "HMNKY",
        tokenId: "",
        category: [
            "Community",
            "NFT"
        ],
        description: "Hedera Monkeys is a community NFT project on hedera.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "10",
        name: "Hashpot",
        logo: "https://github.com/HederaEcho/resources/blob/main/hashpot.jpeg?raw=true",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/hashpotxyz",
        website: "https://hashpot.xyz",
        discord: "https://discord.gg/",
        tokenSymbol: "HPOT",
        tokenId: "",
        category: [
            "Games"
        ],
        description: "Hashpot is a casino game platform on hedera.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "11",
        name: "Hashport",
        logo: "/hashport-logo.png",
        telegram: "https://t.me/hashport",
        twitter: "https://twitter.com/hashportnetwork",
        website: "https://www.hashport.network",
        discord: "https://discord.gg/",
        tokenSymbol: "HPORT",
        tokenId: "",
        category: [
            "Bridges"
        ],
        description: "Hashport is a bridge connecting Hedera to other blockchains for assets transfer.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "12",
        name: "Hashgraph.name",
        logo: "/hashgraph-name-logo.png",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/HNS_app",
        website: "https://www.hashgraph.name",
        discord: "https://discord.gg/",
        tokenSymbol: "HGN",
        tokenId: "",
        category: [
            "Domain"
        ],
        description: "Hashgraph.name is the largest registry of web3 tokenized domains on Hedera,primarily a naming service that issues NFT top-layer domains, but aims to be much more.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "13",
        name: "4orum",
        logo: "/4orum-logo.png",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/",
        website: "https://www.4orum.io",
        discord: "https://discord.gg/",
        tokenSymbol: "4RUM",
        tokenId: "",
        category: [
            "Social"
        ],
        description: "4orum is a social media platform.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "14",
        name: "Hashgate",
        logo: "/hashgate-logo.png",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/hashgateapp",
        website: "https://www.hashgate.app",
        discord: "https://discord.gg/",
        tokenSymbol: "HGATE",
        tokenId: "",
        category: [
            "Utilities"
        ],
        description: "Hashgate is a Secure, fast and innovative non-custodial payment gateway powering seamless web3 transactions.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "15",
        name: "DavinciGraph",
        logo: "/davinci-logo.png",
        telegram: "https://t.me/davincigraph",
        twitter: "https://twitter.com/davincigraph",
        website: "https://www.davincigraph.io",
        discord: "https://discord.gg/",
        tokenSymbol: "DAVINCI",
        tokenId: "0.0.3706639",
        category: [
            "Utilities"
        ],
        description: "Davinci is a token and financial management suite on Hedera Network, designed for efficiency and security.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "16",
        name: "Kabila",
        logo: "/kabila-logo.png",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/kabilaapp",
        website: "https://www.kabila.app",
        discord: "https://discord.gg/",
        tokenSymbol: "KBL",
        tokenId: "0.0.5989978",
        category: [
            "Utilities",
            "NFT",
            "Wallet",
            "Social"
        ],
        description: "Kabila is the all-in-one NFT hub for creators and communities, explore hedera with kabila toolsets  and build loyal community thats truly yours with Kabila Wallet, Marketplace,Plaza.",
        teamMembers: [
            {
                name: "Man",
                role: "CEO",
                twitter: "https://twitter.com/"
            },
            {
                name: "Fran",
                role: "CTO",
                twitter: "https://twitter.com/"
            },
            {
                name: "Adri",
                role: "COO",
                twitter: "https://twitter.com/"
            },
            {
                name: "Rafa",
                role: "CIO",
                twitter: "https://twitter.com/"
            },
            {
                name: "Patri",
                role: "Lead Backend Engineer",
                twitter: "https://twitter.com/"
            },
            {
                name: "Alex",
                role: "Frontend Developer",
                twitter: "https://twitter.com/"
            },
            {
                name: "Jack",
                role: "Community Marketing Lead",
                twitter: "https://twitter.com/"
            },
            {
                name: "Cristina",
                role: "Lead Designer",
                twitter: "https://twitter.com/"
            }
        ],
        whitepaper: "",
        verificationLevel: "verified",
        dexScreenerPairAddress: ""
    },
    {
        id: "17",
        name: "Citadel Wallet",
        logo: "/Citadel-logo.png",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/citadelwallet",
        website: "https://www.citadelwallet.io",
        discord: "https://discord.gg/",
        tokenSymbol: "CTD",
        tokenId: "",
        category: [
            "Wallet"
        ],
        description: "Citadel is the NextGen hardware wallet, personal device of the web3 future on hedera.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "basic",
        dexScreenerPairAddress: ""
    },
    {
        id: "18",
        name: "GRELF",
        logo: "/Grelf-logo.png",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/GRELF_",
        website: "https://www.grelf.me",
        discord: "https://discord.gg/",
        tokenSymbol: "GRELF",
        tokenId: "0.0.1159074",
        category: [
            "memecoin"
        ],
        description: "Hey, everybody, Gerbert the Grelf here, the face of Grelf meme coin on hedera.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "verified",
        dexScreenerPairAddress: "0xb3f4c4bdbd2c7466c43d9c90d97d893f2914dead"
    },
    {
        id: "19",
        name: "GIB ༼ つ ◕_◕ ༽\uD83D\uDCE3",
        logo: "/Gib-logo.png",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/gib_plz",
        website: "https://www.gib.news",
        discord: "https://discord.gg/",
        tokenSymbol: "GIB",
        tokenId: "0.0.7893707",
        category: [
            "memecoin"
        ],
        description: "GIB is a memecoin and your friendly ASCII AI companion for hedera.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "verified",
        dexScreenerPairAddress: "0x5ae4d338e5c763a89dd29da5dbeaaebbdd0a390b"
    },
    {
        id: "20",
        name: "Blade Wallet",
        logo: "/bladewallet-logo.png",
        telegram: "https://t.me/",
        twitter: "https://twitter.com/BladeWallet",
        website: "https://www.bladewallet.io",
        discord: "https://discord.gg/",
        tokenSymbol: "",
        tokenId: "",
        category: [
            "wallet"
        ],
        description: "Blade wallet service is an Enterprise-grade customer acquisation and engagement tools.",
        teamMembers: [],
        whitepaper: "",
        verificationLevel: "verified",
        dexScreenerPairAddress: ""
    }
];
const categories = [
    "All",
    "DeFi",
    "Wallet",
    "Memecoin",
    "Lending",
    "CEX",
    "NFT",
    "Community",
    "Games",
    "Bridges",
    "Domain",
    "Social",
    "Utilities",
    "DEX"
];


/***/ }),

/***/ 2857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(566);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9610);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9160);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Hedera EchoSystem",
    description: "Discover projects in the Hedera ecosystem"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        className: "dark",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;