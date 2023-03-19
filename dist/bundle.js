/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Art/frames.ts":
/*!***************************!*\
  !*** ./src/Art/frames.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const frames = {
    grumpy: [],
    sad: [],
    ok: [],
    happy: [
        `             
 ███████████  
█████████████ 
██         ██ 
██         ██ 
██  █   █  ██ 
██ █ █ █ █ ██ 
██         ██ 
██ █     █ ██ 
██  █████  ██ 
██         ██ 
██         ██ 
█████████████ 
 ███████████  
              `,
        `             
 ███████████  
█████████████ 
██         ██ 
██         ██ 
██   █   █ ██ 
██   █   █ ██ 
██         ██ 
██ █       ██ 
██  █████  ██ 
██         ██ 
██         ██ 
█████████████ 
 ███████████  
              `,
        `             
 ███████████  
█████████████ 
██         ██ 
██         ██ 
██ █    █  ██ 
██ █    █  ██ 
██         ██ 
██       █ ██ 
██  █████  ██ 
██         ██ 
██         ██ 
█████████████ 
 ███████████  
              `
    ],
    super_happy: []
};
let old = [
    `
  ████████████████████████████
████████████████████████████████
████████████████████████████████
███████                  ███████
██████                    ██████
██████      ▄▄    ▄▄      ██████
██████      ▐▌    ▐▌      ██████
██████                    ██████
██████                    ██████
██████                    ██████
██████      ▄▄▄▄▄▄▄▄      ██████
██████                    ██████
██████                    ██████
███████                  ███████
████████████████████████████████
████████████████████████████████
  ████████████████████████████
`,
    `
  ████████████████████████████
████████████████████████████████
████████████████████████████████
███████                  ███████
██████                    ██████
██████                    ██████
██████      ▄▄    ▄▄      ██████
██████                    ██████
██████                    ██████
██████                    ██████
██████      ▄▄▄▄▄▄▄▄      ██████
██████                    ██████
██████                    ██████
███████                  ███████
████████████████████████████████
████████████████████████████████
  ████████████████████████████
`,
    `
  ████████████████████████████
████████████████████████████████
████████████████████████████████
███████                  ███████
██████                    ██████
██████      ▄▄    ▄▄      ██████
██████      █     █       ██████
██████                    ██████
██████                    ██████
██████                    ██████
██████      ▄▄▄▄▄▄▄▄      ██████
██████                    ██████
██████                    ██████
███████                  ███████
████████████████████████████████
████████████████████████████████
  ████████████████████████████
`,
    `
  ████████████████████████████
████████████████████████████████
████████████████████████████████
███████                  ███████
██████                    ██████
██████      ▄▄    ▄▄      ██████
██████       █     █      ██████
██████                    ██████
██████                    ██████
██████                    ██████
██████      ▄▄▄▄▄▄▄▄      ██████
██████                    ██████
██████                    ██████
███████                  ███████
████████████████████████████████
████████████████████████████████
  ████████████████████████████
`,
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (frames);


/***/ }),

/***/ "./src/Class/Pet.ts":
/*!**************************!*\
  !*** ./src/Class/Pet.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pet)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");

class Pet {
    constructor(name = "", happiness = 5, hunger = 5, id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
    get name() {
        if (!this.name)
            return "Tamogotchi has not been given a name!";
        return `Tamogotchi is named ${this.name}`;
    }
    set name(val) {
        if (val && typeof (val) === 'string')
            this.name = val;
    }
    set happiness(val) {
        typeof (val) === 'number' && (this.happiness = val);
    }
    set hunger(val) {
        typeof (val) === 'number' && (this.hunger = val);
    }
}


/***/ }),

/***/ "./src/Constants/enums.ts":
/*!********************************!*\
  !*** ./src/Constants/enums.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var expression;
(function (expression) {
    expression[expression["GRUMPY"] = 0] = "GRUMPY";
    expression[expression["SAD"] = 1] = "SAD";
    expression[expression["OK"] = 2] = "OK";
    expression[expression["HAPPY"] = 3] = "HAPPY";
    expression[expression["SUPER_HAPPY"] = 4] = "SUPER_HAPPY";
})(expression || (expression = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expression);


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ runGame)
/* harmony export */ });
/* harmony import */ var _Class_Pet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Class/Pet */ "./src/Class/Pet.ts");
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! readline */ "readline");
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Art_frames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Art/frames */ "./src/Art/frames.ts");
/* harmony import */ var _Constants_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Constants/enums */ "./src/Constants/enums.ts");





const rl = readline__WEBPACK_IMPORTED_MODULE_1___default().createInterface({
    input: process.stdin,
    output: process.stdout,
});
let ENVIRONMENT = "development";
const jsonserver = "localhost:5000";
let activeTamogotchi;
let savedTamogotchi;
function runGame() {
    console.clear();
    rl.write('\u001B[?25l'); // hides cursor
    rl.write("Welcome to the Tamogotchi game!\n");
    try {
        savedTamogotchi = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_2__.readFileSync("../state.json", "utf8"));
    }
    catch (err) {
        throw new Error(err);
    }
    // console.log(savedTamogotchi)
    if ((savedTamogotchi === null || savedTamogotchi === void 0 ? void 0 : savedTamogotchi.pets.length) > 0) {
        selectTamogotchi(savedTamogotchi === null || savedTamogotchi === void 0 ? void 0 : savedTamogotchi.pets);
    }
    // console.log(savedTamogotchi)
    // console.log(ENVIRONMENT)
    // switch (ENVIRONMENT) {
    //     case 'development':
    //         try {
    //             fetch(`${jsonserver}/pets`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 savedTamogotchi = data?.pets
    //                 if (savedTamogotchi.length > 0) {
    //                     selectTamogotchi()
    //                 } else {
    //                     createTamogotchi()
    //                 }
    //             })
    //         } catch (err:any) {
    //             gameError(err)
    //         }
    //         break;
    //     default:
    //         break;
    // }
}
function createNewTamogotchi() {
    console.log("createTamo function");
    activeTamogotchi = new _Class_Pet__WEBPACK_IMPORTED_MODULE_0__["default"]();
}
function selectTamogotchi(pets) {
    // console.log("selectTamo function")
    // rl.write("Saved Tamogotchis detected.!");
    // create list of saved tamogotchis
    rl.question(`Saved Tamogotchi Available.
    ${pets.map((element, index) => {
        return `\n${index + 1}. ${element === null || element === void 0 ? void 0 : element.name}`;
    })}\n\nChoose your tamogotchi:`, (input) => {
        const selection = parseInt(input) - 1;
        if (selection >= 0 &&
            selection < pets.length &&
            pets[selection].id !== undefined) {
            activeTamogotchi = new _Class_Pet__WEBPACK_IMPORTED_MODULE_0__["default"](pets[selection].name, pets[selection].happiness, pets[selection].hunger, pets[selection].id);
            console.log(`\n${pets[selection].name} selected!`);
            activeTamogotchi = new _Class_Pet__WEBPACK_IMPORTED_MODULE_0__["default"]();
            continueGame(function () {
                mainGame();
            });
        }
        else if (isNaN(selection)) {
            console.log(`\n Try entering a number.`);
            continueGame(function () {
                selectTamogotchi(pets);
            });
        }
        else {
            console.log(`\n${selection + 1} isn't an available option my dude.`);
            continueGame(function () {
                selectTamogotchi(pets);
            });
        }
    });
}
function nameTamogotchi() {
    rl.question("What do you want to call your new pet?", (input) => {
        try {
            switch (input) {
                case input:
                    activeTamogotchi.name = input;
                    rl.write(`OK! Tamogotchi is now named ${activeTamogotchi.name}`);
                    break;
                default:
                    rl.write("OK! No name has been set.");
                    break;
            }
        }
        catch (_a) { }
    });
}
function mainGame() {
    setInterval(drawFrames, 3000);
}
// draw the face
let frame;
function drawFrames() {
    switch (activeTamogotchi.happiness) {
        case _Constants_enums__WEBPACK_IMPORTED_MODULE_4__["default"].HAPPY:
            let frameSet = _Art_frames__WEBPACK_IMPORTED_MODULE_3__["default"].happy;
            frame = frameSet[Math.floor(Math.random() * frameSet.length)];
            break;
        default:
            frame = "nothing to display";
            break;
    }
    console.clear();
    console.log(frame);
}
function options() {
    let options = `Options:
1. Stats
2. Feed
3. Play
4. Exit

Choose an option:
`;
    rl.question(options, (input) => {
        try {
            switch (input) {
                case "1":
                    // this.stats()
                    break;
                case "2":
                    // this.feed()
                    break;
                case "3":
                    // this.play()
                    break;
                case "4":
                    // this.exit()
                    break;
            }
        }
        catch (err) {
            // this.error(err);
        }
    });
}
function continueGame(func) {
    console.log("Press any key to continue...");
    const wasRaw = process.stdin.isRaw;
    process.stdin.setRawMode(true);
    const onData = () => {
        process.stdin.setRawMode(wasRaw);
        process.stdin.removeListener("data", onData);
        console.clear();
        rl.write(null, { ctrl: true, name: "u" }); // delete  the 'any key' entered
        func();
    };
    process.stdin.on("data", onData);
}
function gameError(err) {
    rl.write(err);
    rl.write("Exiting Program");
    exit();
}
function exit() {
    rl.write('\u001B[?25h'); // show cursor 
    rl.close();
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/native.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/native.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-node/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("readline");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.ts");

(0,_Game__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsaURBQWlELCtDQUFHLEtBQUs7O0FBRXpEO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLDhEQUFlO0FBQ3hCOztBQUVBLGlFQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQzVCYzs7QUFFL0I7QUFDQSxxQ0FBcUMsc0RBQVU7QUFDL0M7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7OztBQ052Qjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkI7QUFDN0IsaURBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW1vZ290Y2hpLy4vc3JjL0FydC9mcmFtZXMudHMiLCJ3ZWJwYWNrOi8vdGFtb2dvdGNoaS8uL3NyYy9DbGFzcy9QZXQudHMiLCJ3ZWJwYWNrOi8vdGFtb2dvdGNoaS8uL3NyYy9Db25zdGFudHMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vdGFtb2dvdGNoaS8uL3NyYy9HYW1lLnRzIiwid2VicGFjazovL3RhbW9nb3RjaGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90YW1vZ290Y2hpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9yZWdleC5qcyIsIndlYnBhY2s6Ly90YW1vZ290Y2hpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9ybmcuanMiLCJ3ZWJwYWNrOi8vdGFtb2dvdGNoaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RhbW9nb3RjaGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3Y0LmpzIiwid2VicGFjazovL3RhbW9nb3RjaGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RhbW9nb3RjaGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImNyeXB0b1wiIiwid2VicGFjazovL3RhbW9nb3RjaGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vdGFtb2dvdGNoaS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicmVhZGxpbmVcIiIsIndlYnBhY2s6Ly90YW1vZ290Y2hpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RhbW9nb3RjaGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFtb2dvdGNoaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFtb2dvdGNoaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhbW9nb3RjaGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YW1vZ290Y2hpLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmcmFtZXMgPSB7XHJcbiAgICBncnVtcHk6IFtdLFxyXG4gICAgc2FkOiBbXSxcclxuICAgIG9rOiBbXSxcclxuICAgIGhhcHB5OiBbXHJcbiAgICAgICAgYCAgICAgICAgICAgICBcclxuIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiCAgXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiCBcclxu4paI4paIICAgICAgICAg4paI4paIIFxyXG7ilojiloggICAgICAgICDilojiloggXHJcbuKWiOKWiCAg4paIICAg4paIICDilojiloggXHJcbuKWiOKWiCDilogg4paIIOKWiCDilogg4paI4paIIFxyXG7ilojiloggICAgICAgICDilojiloggXHJcbuKWiOKWiCDiloggICAgIOKWiCDilojiloggXHJcbuKWiOKWiCAg4paI4paI4paI4paI4paIICDilojiloggXHJcbuKWiOKWiCAgICAgICAgIOKWiOKWiCBcclxu4paI4paIICAgICAgICAg4paI4paIIFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojiloggXHJcbiDilojilojilojilojilojilojilojilojilojilojiloggIFxyXG4gICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgYCAgICAgICAgICAgICBcclxuIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiCAgXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiCBcclxu4paI4paIICAgICAgICAg4paI4paIIFxyXG7ilojiloggICAgICAgICDilojiloggXHJcbuKWiOKWiCAgIOKWiCAgIOKWiCDilojiloggXHJcbuKWiOKWiCAgIOKWiCAgIOKWiCDilojiloggXHJcbuKWiOKWiCAgICAgICAgIOKWiOKWiCBcclxu4paI4paIIOKWiCAgICAgICDilojiloggXHJcbuKWiOKWiCAg4paI4paI4paI4paI4paIICDilojiloggXHJcbuKWiOKWiCAgICAgICAgIOKWiOKWiCBcclxu4paI4paIICAgICAgICAg4paI4paIIFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojiloggXHJcbiDilojilojilojilojilojilojilojilojilojilojiloggIFxyXG4gICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgYCAgICAgICAgICAgICBcclxuIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiCAgXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiCBcclxu4paI4paIICAgICAgICAg4paI4paIIFxyXG7ilojiloggICAgICAgICDilojiloggXHJcbuKWiOKWiCDiloggICAg4paIICDilojiloggXHJcbuKWiOKWiCDiloggICAg4paIICDilojiloggXHJcbuKWiOKWiCAgICAgICAgIOKWiOKWiCBcclxu4paI4paIICAgICAgIOKWiCDilojiloggXHJcbuKWiOKWiCAg4paI4paI4paI4paI4paIICDilojiloggXHJcbuKWiOKWiCAgICAgICAgIOKWiOKWiCBcclxu4paI4paIICAgICAgICAg4paI4paIIFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojiloggXHJcbiDilojilojilojilojilojilojilojilojilojilojiloggIFxyXG4gICAgICAgICAgICAgIGBcclxuICAgIF0sXHJcbiAgICBzdXBlcl9oYXBweTogW11cclxufTtcclxubGV0IG9sZCA9IFtcclxuICAgIGBcclxuICDilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojiloggICAgICAgICAgICAgICAgICDilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAgICAgICAgICAgICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAg4paE4paEICAgIOKWhOKWhCAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICDilpDilowgICAg4paQ4paMICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgIOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWhCAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojiloggICAgICAgICAgICAgICAgICDilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG4gIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG5gLFxyXG4gICAgYFxyXG4gIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICDiloTiloQgICAg4paE4paEICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgIOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWhCAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojiloggICAgICAgICAgICAgICAgICDilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG4gIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG5gLFxyXG4gICAgYFxyXG4gIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICDiloTiloQgICAg4paE4paEICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgIOKWiCAgICAg4paIICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICDiloTiloTiloTiloTiloTiloTiloTiloQgICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAgICAgICAgICAgICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAgICAgICAgICAgICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paIICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxuICDilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxuYCxcclxuICAgIGBcclxuICDilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojiloggICAgICAgICAgICAgICAgICDilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAgICAgICAgICAgICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAg4paE4paEICAgIOKWhOKWhCAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojiloggICAgICAg4paIICAgICDiloggICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAgICAgICAgICAgICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAgICAgICAgICAgICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAgICAgICAgICAgICAgICDilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paIICAgICAg4paE4paE4paE4paE4paE4paE4paE4paEICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiCAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbiAg4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbmAsXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGZyYW1lcztcclxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwiXCIsIGhhcHBpbmVzcyA9IDUsIGh1bmdlciA9IDUsIGlkID0gdXVpZCgpKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHV1aWQoKTtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5uYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJUYW1vZ290Y2hpIGhhcyBub3QgYmVlbiBnaXZlbiBhIG5hbWUhXCI7XHJcbiAgICAgICAgcmV0dXJuIGBUYW1vZ290Y2hpIGlzIG5hbWVkICR7dGhpcy5uYW1lfWA7XHJcbiAgICB9XHJcbiAgICBzZXQgbmFtZSh2YWwpIHtcclxuICAgICAgICBpZiAodmFsICYmIHR5cGVvZiAodmFsKSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHZhbDtcclxuICAgIH1cclxuICAgIHNldCBoYXBwaW5lc3ModmFsKSB7XHJcbiAgICAgICAgdHlwZW9mICh2YWwpID09PSAnbnVtYmVyJyAmJiAodGhpcy5oYXBwaW5lc3MgPSB2YWwpO1xyXG4gICAgfVxyXG4gICAgc2V0IGh1bmdlcih2YWwpIHtcclxuICAgICAgICB0eXBlb2YgKHZhbCkgPT09ICdudW1iZXInICYmICh0aGlzLmh1bmdlciA9IHZhbCk7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIGV4cHJlc3Npb247XHJcbihmdW5jdGlvbiAoZXhwcmVzc2lvbikge1xyXG4gICAgZXhwcmVzc2lvbltleHByZXNzaW9uW1wiR1JVTVBZXCJdID0gMF0gPSBcIkdSVU1QWVwiO1xyXG4gICAgZXhwcmVzc2lvbltleHByZXNzaW9uW1wiU0FEXCJdID0gMV0gPSBcIlNBRFwiO1xyXG4gICAgZXhwcmVzc2lvbltleHByZXNzaW9uW1wiT0tcIl0gPSAyXSA9IFwiT0tcIjtcclxuICAgIGV4cHJlc3Npb25bZXhwcmVzc2lvbltcIkhBUFBZXCJdID0gM10gPSBcIkhBUFBZXCI7XHJcbiAgICBleHByZXNzaW9uW2V4cHJlc3Npb25bXCJTVVBFUl9IQVBQWVwiXSA9IDRdID0gXCJTVVBFUl9IQVBQWVwiO1xyXG59KShleHByZXNzaW9uIHx8IChleHByZXNzaW9uID0ge30pKTtcclxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc2lvbjtcclxuIiwiaW1wb3J0IFBldCBmcm9tIFwiLi9DbGFzcy9QZXRcIjtcclxuaW1wb3J0IHJlYWRsaW5lIGZyb20gXCJyZWFkbGluZVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IGZyYW1lcyBmcm9tIFwiLi9BcnQvZnJhbWVzXCI7XHJcbmltcG9ydCBleHByZXNpb24gZnJvbSBcIi4vQ29uc3RhbnRzL2VudW1zXCI7XHJcbmNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxyXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcclxufSk7XHJcbmxldCBFTlZJUk9OTUVOVCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xyXG5jb25zdCBqc29uc2VydmVyID0gXCJsb2NhbGhvc3Q6NTAwMFwiO1xyXG5sZXQgYWN0aXZlVGFtb2dvdGNoaTtcclxubGV0IHNhdmVkVGFtb2dvdGNoaTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuR2FtZSgpIHtcclxuICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgIHJsLndyaXRlKCdcXHUwMDFCWz8yNWwnKTsgLy8gaGlkZXMgY3Vyc29yXHJcbiAgICBybC53cml0ZShcIldlbGNvbWUgdG8gdGhlIFRhbW9nb3RjaGkgZ2FtZSFcXG5cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNhdmVkVGFtb2dvdGNoaSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiLi4vc3RhdGUuanNvblwiLCBcInV0ZjhcIikpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coc2F2ZWRUYW1vZ290Y2hpKVxyXG4gICAgaWYgKChzYXZlZFRhbW9nb3RjaGkgPT09IG51bGwgfHwgc2F2ZWRUYW1vZ290Y2hpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzYXZlZFRhbW9nb3RjaGkucGV0cy5sZW5ndGgpID4gMCkge1xyXG4gICAgICAgIHNlbGVjdFRhbW9nb3RjaGkoc2F2ZWRUYW1vZ290Y2hpID09PSBudWxsIHx8IHNhdmVkVGFtb2dvdGNoaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2F2ZWRUYW1vZ290Y2hpLnBldHMpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coc2F2ZWRUYW1vZ290Y2hpKVxyXG4gICAgLy8gY29uc29sZS5sb2coRU5WSVJPTk1FTlQpXHJcbiAgICAvLyBzd2l0Y2ggKEVOVklST05NRU5UKSB7XHJcbiAgICAvLyAgICAgY2FzZSAnZGV2ZWxvcG1lbnQnOlxyXG4gICAgLy8gICAgICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICAgICAgZmV0Y2goYCR7anNvbnNlcnZlcn0vcGV0c2ApXHJcbiAgICAvLyAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNhdmVkVGFtb2dvdGNoaSA9IGRhdGE/LnBldHNcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoc2F2ZWRUYW1vZ290Y2hpLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGFtb2dvdGNoaSgpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFtb2dvdGNoaSgpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyOmFueSkge1xyXG4gICAgLy8gICAgICAgICAgICAgZ2FtZUVycm9yKGVycilcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBicmVhaztcclxuICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgLy8gICAgICAgICBicmVhaztcclxuICAgIC8vIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYW1vZ290Y2hpKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVUYW1vIGZ1bmN0aW9uXCIpO1xyXG4gICAgYWN0aXZlVGFtb2dvdGNoaSA9IG5ldyBQZXQoKTtcclxufVxyXG5mdW5jdGlvbiBzZWxlY3RUYW1vZ290Y2hpKHBldHMpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZWN0VGFtbyBmdW5jdGlvblwiKVxyXG4gICAgLy8gcmwud3JpdGUoXCJTYXZlZCBUYW1vZ290Y2hpcyBkZXRlY3RlZC4hXCIpO1xyXG4gICAgLy8gY3JlYXRlIGxpc3Qgb2Ygc2F2ZWQgdGFtb2dvdGNoaXNcclxuICAgIHJsLnF1ZXN0aW9uKGBTYXZlZCBUYW1vZ290Y2hpIEF2YWlsYWJsZS5cclxuICAgICR7cGV0cy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBcXG4ke2luZGV4ICsgMX0uICR7ZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50Lm5hbWV9YDtcclxuICAgIH0pfVxcblxcbkNob29zZSB5b3VyIHRhbW9nb3RjaGk6YCwgKGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gcGFyc2VJbnQoaW5wdXQpIC0gMTtcclxuICAgICAgICBpZiAoc2VsZWN0aW9uID49IDAgJiZcclxuICAgICAgICAgICAgc2VsZWN0aW9uIDwgcGV0cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgcGV0c1tzZWxlY3Rpb25dLmlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYWN0aXZlVGFtb2dvdGNoaSA9IG5ldyBQZXQocGV0c1tzZWxlY3Rpb25dLm5hbWUsIHBldHNbc2VsZWN0aW9uXS5oYXBwaW5lc3MsIHBldHNbc2VsZWN0aW9uXS5odW5nZXIsIHBldHNbc2VsZWN0aW9uXS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcXG4ke3BldHNbc2VsZWN0aW9uXS5uYW1lfSBzZWxlY3RlZCFgKTtcclxuICAgICAgICAgICAgYWN0aXZlVGFtb2dvdGNoaSA9IG5ldyBQZXQoKTtcclxuICAgICAgICAgICAgY29udGludWVHYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1haW5HYW1lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc05hTihzZWxlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcXG4gVHJ5IGVudGVyaW5nIGEgbnVtYmVyLmApO1xyXG4gICAgICAgICAgICBjb250aW51ZUdhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0VGFtb2dvdGNoaShwZXRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgXFxuJHtzZWxlY3Rpb24gKyAxfSBpc24ndCBhbiBhdmFpbGFibGUgb3B0aW9uIG15IGR1ZGUuYCk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlR2FtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUYW1vZ290Y2hpKHBldHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBuYW1lVGFtb2dvdGNoaSgpIHtcclxuICAgIHJsLnF1ZXN0aW9uKFwiV2hhdCBkbyB5b3Ugd2FudCB0byBjYWxsIHlvdXIgbmV3IHBldD9cIiwgKGlucHV0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3dpdGNoIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBpbnB1dDpcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYW1vZ290Y2hpLm5hbWUgPSBpbnB1dDtcclxuICAgICAgICAgICAgICAgICAgICBybC53cml0ZShgT0shIFRhbW9nb3RjaGkgaXMgbm93IG5hbWVkICR7YWN0aXZlVGFtb2dvdGNoaS5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBybC53cml0ZShcIk9LISBObyBuYW1lIGhhcyBiZWVuIHNldC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1haW5HYW1lKCkge1xyXG4gICAgc2V0SW50ZXJ2YWwoZHJhd0ZyYW1lcywgMzAwMCk7XHJcbn1cclxuLy8gZHJhdyB0aGUgZmFjZVxyXG5sZXQgZnJhbWU7XHJcbmZ1bmN0aW9uIGRyYXdGcmFtZXMoKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGl2ZVRhbW9nb3RjaGkuaGFwcGluZXNzKSB7XHJcbiAgICAgICAgY2FzZSBleHByZXNpb24uSEFQUFk6XHJcbiAgICAgICAgICAgIGxldCBmcmFtZVNldCA9IGZyYW1lcy5oYXBweTtcclxuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZVNldFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmcmFtZVNldC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZnJhbWUgPSBcIm5vdGhpbmcgdG8gZGlzcGxheVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKGZyYW1lKTtcclxufVxyXG5mdW5jdGlvbiBvcHRpb25zKCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBgT3B0aW9uczpcclxuMS4gU3RhdHNcclxuMi4gRmVlZFxyXG4zLiBQbGF5XHJcbjQuIEV4aXRcclxuXHJcbkNob29zZSBhbiBvcHRpb246XHJcbmA7XHJcbiAgICBybC5xdWVzdGlvbihvcHRpb25zLCAoaW5wdXQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdHMoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmZlZWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmV4aXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNvbnRpbnVlR2FtZShmdW5jKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByZXNzIGFueSBrZXkgdG8gY29udGludWUuLi5cIik7XHJcbiAgICBjb25zdCB3YXNSYXcgPSBwcm9jZXNzLnN0ZGluLmlzUmF3O1xyXG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpO1xyXG4gICAgY29uc3Qgb25EYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh3YXNSYXcpO1xyXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsIG9uRGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgICAgIHJsLndyaXRlKG51bGwsIHsgY3RybDogdHJ1ZSwgbmFtZTogXCJ1XCIgfSk7IC8vIGRlbGV0ZSAgdGhlICdhbnkga2V5JyBlbnRlcmVkXHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfTtcclxuICAgIHByb2Nlc3Muc3RkaW4ub24oXCJkYXRhXCIsIG9uRGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gZ2FtZUVycm9yKGVycikge1xyXG4gICAgcmwud3JpdGUoZXJyKTtcclxuICAgIHJsLndyaXRlKFwiRXhpdGluZyBQcm9ncmFtXCIpO1xyXG4gICAgZXhpdCgpO1xyXG59XHJcbmZ1bmN0aW9uIGV4aXQoKSB7XHJcbiAgICBybC53cml0ZSgnXFx1MDAxQls/MjVoJyk7IC8vIHNob3cgY3Vyc29yIFxyXG4gICAgcmwuY2xvc2UoKTtcclxufVxyXG4iLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSUQ6IGNyeXB0by5yYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5jb25zdCBybmRzOFBvb2wgPSBuZXcgVWludDhBcnJheSgyNTYpOyAvLyAjIG9mIHJhbmRvbSB2YWx1ZXMgdG8gcHJlLWFsbG9jYXRlXG5cbmxldCBwb29sUHRyID0gcm5kczhQb29sLmxlbmd0aDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgaWYgKHBvb2xQdHIgPiBybmRzOFBvb2wubGVuZ3RoIC0gMTYpIHtcbiAgICBjcnlwdG8ucmFuZG9tRmlsbFN5bmMocm5kczhQb29sKTtcbiAgICBwb29sUHRyID0gMDtcbiAgfVxuXG4gIHJldHVybiBybmRzOFBvb2wuc2xpY2UocG9vbFB0ciwgcG9vbFB0ciArPSAxNik7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFkbGluZVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJ1bkdhbWUgZnJvbSAnLi9HYW1lJztcclxucnVuR2FtZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=