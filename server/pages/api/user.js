"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5748);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);


async function handler(req, res) {
    const { method  } = req;
    (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (method === "GET") {
        try {
            const users = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "POST") {
        try {
            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}; //   app.post("/api/login", async (req, res) => {
 //     const { email, password } = req.body;
 //     const userDoc = await User.findOne({ email });
 //     if (userDoc) {
 //       const passOk = bcrypt.compareSync(password, userDoc.password);
 //       if (passOk) {
 //         jwt.sign(
 //           {
 //             email: userDoc.email,
 //             id: userDoc._id,
 //           },
 //           process.env.jwtSecret,
 //           {},
 //           (err, token) => {
 //             if (err) throw err;
 //             res.cookie("token", token).json(userDoc);
 //           }
 //         );
 //       } else {
 //         res.status(422).json("pass not ok");
 //       }
 //     } else {
 //       res.json("not found");
 //     }
 //   });


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [355], () => (__webpack_exec__(2512)));
module.exports = __webpack_exports__;

})();