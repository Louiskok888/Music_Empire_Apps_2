"use strict";
(() => {
var exports = {};
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9032:
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
    if (method === "POST") {
        try {
            const { email , password  } = req.body;
            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
                email,
                password
            });
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [355], () => (__webpack_exec__(9032)));
module.exports = __webpack_exports__;

})();