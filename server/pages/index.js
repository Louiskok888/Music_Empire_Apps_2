(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,929];
exports.modules = {

/***/ 5350:
/***/ ((module) => {

// Exports
module.exports = {
	"mainAddButton": "Add_mainAddButton__jwM2b",
	"container": "Add_container__nehfK",
	"wrapper": "Add_wrapper__JHSck",
	"close": "Add_close__1Bqhj",
	"item": "Add_item__pgcYA",
	"label": "Add_label__jItnq",
	"input": "Add_input__EuiD8",
	"priceContainer": "Add_priceContainer__WuGaE",
	"inputSm": "Add_inputSm__dPDFU",
	"extra": "Add_extra__3fi1Q",
	"extraItems": "Add_extraItems__GWk48",
	"extraItem": "Add_extraItem__9Z9sH",
	"addButton": "Add_addButton__6OqWh"
};


/***/ }),

/***/ 9923:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Featured_container__djdhp",
	"arrowContainer": "Featured_arrowContainer__eRP7q",
	"wrapper": "Featured_wrapper__Up3ZO",
	"imgContainer": "Featured_imgContainer__bP_Gp"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"adminButton": "Home_adminButton__VbR9m"
};


/***/ }),

/***/ 6088:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "PianoCard_container__Z_N0y",
	"title": "PianoCard_title__eo6qQ",
	"price": "PianoCard_price__qKjKP",
	"desc": "PianoCard_desc__FB4TG"
};


/***/ }),

/***/ 1335:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "PianoList_container__TK94f",
	"desc": "PianoList_desc__6Ei0d",
	"wrapper": "PianoList_wrapper__rlMAo",
	"title": "PianoList_title__ADGSO"
};


/***/ }),

/***/ 1157:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Profile_container__1nDQX"
};


/***/ }),

/***/ 6515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1157);
/* harmony import */ var _styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Profile = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default().profileButton),
        children: "User profile"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);


/***/ }),

/***/ 7937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Add.module.css
var Add_module = __webpack_require__(5350);
var Add_module_default = /*#__PURE__*/__webpack_require__.n(Add_module);
;// CONCATENATED MODULE: ./components/AddButton.jsx


const AddButton = ({ setClose  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: ()=>setClose(false)
        ,
        className: (Add_module_default()).mainAddButton,
        children: "Add New Instrument"
    }));
};
/* harmony default export */ const components_AddButton = (AddButton);

;// CONCATENATED MODULE: ./components/AddButton2.jsx


const AddButton2 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Add_module_default()).mainAddButton,
        children: "Admin page"
    }));
};
/* harmony default export */ const components_AddButton2 = (AddButton2);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/Add.jsx





const Add = ({ setClose  })=>{
    const { 0: file , 1: setFile  } = (0,external_react_.useState)(null);
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)(null);
    const { 0: desc , 1: setDesc  } = (0,external_react_.useState)(null);
    const { 0: prices , 1: setPrices  } = (0,external_react_.useState)([]);
    const { 0: extraOptions , 1: setExtraOptions  } = (0,external_react_.useState)([]);
    const { 0: extra , 1: setExtra  } = (0,external_react_.useState)(null);
    const changePrice = (e, index)=>{
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };
    const handleExtraInput = (e)=>{
        setExtra({
            ...extra,
            [e.target.name]: e.target.value
        });
    };
    const handleExtra = (e)=>{
        setExtraOptions((prev)=>[
                ...prev,
                extra
            ]
        );
    };
    const handleCreate = async ()=>{
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await external_axios_default().post("https://api.cloudinary.com/v1_1/dwyvzpvp2/image/upload", data);
            const { url  } = uploadRes.data;
            const newProduct = {
                title,
                desc,
                prices,
                extraOptions,
                img: url
            };
            await external_axios_default().post("http://localhost:3000/api/products", newProduct);
            setClose(true);
            router_default().push("/");
        } catch (err) {
            console.log(err);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Add_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Add_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    onClick: ()=>setClose(true)
                    ,
                    className: (Add_module_default()).close,
                    children: "X"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Add a new Instrument"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Choose an image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "file",
                            onChange: (e)=>setFile(e.target.files[0])
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Title"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: (Add_module_default()).input,
                            type: "text",
                            onChange: (e)=>setTitle(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Desc"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            rows: 4,
                            type: "text",
                            onChange: (e)=>setDesc(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Prices"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Add_module_default()).priceContainer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "number",
                                    placeholder: "Small",
                                    onChange: (e)=>changePrice(e, 0)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "number",
                                    placeholder: "Medium",
                                    onChange: (e)=>changePrice(e, 1)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "number",
                                    placeholder: "Large",
                                    onChange: (e)=>changePrice(e, 2)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Extra"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Add_module_default()).extra,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "text",
                                    placeholder: "Item",
                                    name: "text",
                                    onChange: handleExtraInput
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "number",
                                    placeholder: "Price",
                                    name: "price",
                                    onChange: handleExtraInput
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (Add_module_default()).extraButton,
                                    onClick: handleExtra,
                                    children: "Add"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Add_module_default()).extraItems,
                            children: extraOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (Add_module_default()).extraItem,
                                    children: option.text
                                }, option.text)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (Add_module_default()).addButton,
                    onClick: handleCreate,
                    children: "Create"
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Add = (Add);

// EXTERNAL MODULE: ./styles/Featured.module.css
var Featured_module = __webpack_require__(9923);
var Featured_module_default = /*#__PURE__*/__webpack_require__.n(Featured_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Featured.jsx




const Featured = ()=>{
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(0);
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png", 
    ];
    const handleArrow = (direction)=>{
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Featured_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).arrowContainer,
                style: {
                    left: 0
                },
                onClick: ()=>handleArrow("l")
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/img/arrowl.png",
                    alt: "",
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).wrapper,
                style: {
                    transform: `translateX(${-100 * index}vw)`
                },
                children: images.map((img, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Featured_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: img,
                            alt: "",
                            layout: "fill",
                            objectFit: "contain"
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).arrowContainer,
                style: {
                    right: 0
                },
                onClick: ()=>handleArrow("r")
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/img/arrowr.png",
                    layout: "fill",
                    alt: "",
                    objectFit: "contain"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Featured = (Featured);

// EXTERNAL MODULE: ./styles/PianoList.module.css
var PianoList_module = __webpack_require__(1335);
var PianoList_module_default = /*#__PURE__*/__webpack_require__.n(PianoList_module);
// EXTERNAL MODULE: ./styles/PianoCard.module.css
var PianoCard_module = __webpack_require__(6088);
var PianoCard_module_default = /*#__PURE__*/__webpack_require__.n(PianoCard_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/PianoCard.jsx




const PianoCard = ({ piano  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PianoCard_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/product/${piano._id}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: piano.img,
                    alt: "",
                    width: "500",
                    height: "500"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (PianoCard_module_default()).title,
                children: piano.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (PianoCard_module_default()).price,
                children: [
                    "$",
                    piano.prices[0]
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (PianoCard_module_default()).desc,
                children: piano.desc
            })
        ]
    }));
};
/* harmony default export */ const components_PianoCard = (PianoCard);

;// CONCATENATED MODULE: ./components/PianoList.jsx



const PianoList = ({ pianoList  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PianoList_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (PianoList_module_default()).title,
                children: "CHOOSE AN INSTRUMENT THAT MATHES YOU!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (PianoList_module_default()).desc,
                children: "Are you looking for an musical instrument that will inspire you to create beautiful music? Look no further than our music store! We offer a wide range of musical instrument for sale, including grand pianos, guitars, drums, violin and etc. Whether you are a beginner or a seasoned musician, we have an instrument that will meet your needs."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (PianoList_module_default()).wrapper,
                children: pianoList.map((piano)=>/*#__PURE__*/ jsx_runtime_.jsx(components_PianoCard, {
                        piano: piano
                    }, piano._id)
                )
            })
        ]
    }));
};
/* harmony default export */ const components_PianoList = (PianoList);

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./pages/Profile.jsx
var Profile = __webpack_require__(6515);
;// CONCATENATED MODULE: ./pages/index.js












function Home({ pianoList , admin , user  }) {
    const { 0: close , 1: setClose  } = (0,external_react_.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Music Empire"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Best piano distributor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Featured, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).adminButton,
                children: [
                    admin && /*#__PURE__*/ jsx_runtime_.jsx(components_AddButton, {
                        setClose: setClose
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/admin",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: admin && /*#__PURE__*/ jsx_runtime_.jsx(components_AddButton2, {
                            })
                        })
                    }),
                    user && /*#__PURE__*/ jsx_runtime_.jsx(Profile["default"], {
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_PianoList, {
                pianoList: pianoList
            }),
            !close && /*#__PURE__*/ jsx_runtime_.jsx(components_Add, {
                setClose: setClose,
                pianoList: pianoList
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    var ref;
    const myCookie = ((ref = ctx.req) === null || ref === void 0 ? void 0 : ref.cookies) || "";
    let admin = false;
    let user = false;
    if (myCookie.token === process.env.TOKEN) {
        admin = true;
        user = true;
    }
    const res = await external_axios_default().get("http://localhost:3000/api/products");
    return {
        props: {
            pianoList: res.data,
            admin,
            user
        }
    };
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,675,664], () => (__webpack_exec__(7937)));
module.exports = __webpack_exports__;

})();