var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
});
//Login Function
//Login Function
function logIn(e) {
    return __awaiter(this, void 0, void 0, function () {
        var loginData, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    loginData = {
                        username: e.target.username.value,
                        password: e.target.password.value,
                    };
                    url = "http://localhost:3000/auth/login?username=".concat(encodeURIComponent(loginData.username), "&password=").concat(encodeURIComponent(loginData.password));
                    return [4 /*yield*/, fetch(url, {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            cache: "default",
                        })
                            .then(function (response) {
                            if (response.ok) {
                                sessionStorage.setItem("isloggedin", "true");
                                document.querySelector(".correct").classList.toggle("invisible");
                                document
                                    .querySelector(".correct")
                                    .classList.toggle("position-absolute");
                                setTimeout(function () {
                                    var storedData = sessionStorage.getItem("fromrequest");
                                    if (storedData) {
                                        window.location.href = "../HTML Sebawi User/ServiceRequest.html";
                                    }
                                    else {
                                        window.location.href = "../HTML Sebawi User/Home.html";
                                    }
                                }, 2000);
                            }
                            else {
                                document.querySelector(".incorrect").classList.toggle("invisible");
                                document
                                    .querySelector(".incorrect")
                                    .classList.toggle("position-absolute");
                                setTimeout(function () {
                                    location.reload();
                                }, 2000);
                            }
                            return response.json(); // Return the parsed JSON from the response
                        })
                            .then(function (json) {
                            var res = json;
                            var status = res.status;
                            if (status == "admin")
                                sessionStorage.setItem("type", "admin");
                            var token = res.token;
                            console.log(token, typeof token);
                            sessionStorage.setItem("tok", String(token));
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//Signup Function
function signUp(e) {
    e.preventDefault();
    var signUpData = {
        name: e.target.fullname.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
    };
    fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
        cache: "default",
    })
        .then(function (response) {
        if (response.ok) {
            sessionStorage.setItem("isloggedin", "true");
            var storedData_1 = sessionStorage.getItem("fromrequest");
            var successDiv = document.getElementById("scorrect");
            successDiv.classList.toggle("invisible");
            successDiv.classList.toggle("position-absolute");
            setTimeout(function () {
                if (storedData_1) {
                    window.location.href = "../HTML Sebawi User/ServiceRequest.html";
                }
                else {
                    window.location.href = "../HTML Sebawi User/Home.html";
                }
            }, 2000);
        }
        else {
            return response.json().then(function (errorData) {
                document.getElementById("sincorrect").innerHTML = "";
                var err = errorData.message;
                console.log(err);
                var errorDiv = document.getElementById("sincorrect");
                if (typeof err == "string") {
                    var newdiv = document.createElement("div");
                    newdiv.innerText = err;
                    errorDiv.appendChild(newdiv);
                    errorDiv.classList.remove("invisible");
                    errorDiv.classList.remove("position-absolute");
                }
                else {
                    for (var i in err) {
                        var e_1 = err[i];
                        console.log(e_1);
                        var newdiv = document.createElement("div");
                        newdiv.innerText = e_1;
                        errorDiv.appendChild(newdiv);
                    }
                    errorDiv.classList.toggle("invisible");
                    errorDiv.classList.toggle("position-absolute");
                }
            });
        }
    })
        .catch(function (error) {
        console.error("Error:", error.message);
    });
}
//Service Request
function serviceRequest(e) {
    e.preventDefault();
    console.log(e.target.imageInput.files[0]);
    var newPost = {
        name: e.target.centerName.value,
        description: e.target.serviceDescription.value,
        contact: e.target.contactInfo.value,
        image: e.target.imageInput.files[0],
    };
    var token = sessionStorage.getItem("tok");
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(token),
        },
        body: JSON.stringify(newPost),
        cache: "default",
    }).then(function (response) {
        if (response.ok) {
            document.querySelector("#correct").classList.toggle("invisible");
            document.querySelector("#correct").classList.toggle("position-absolute");
            setTimeout(function () {
                window.location.href = "../HTML Sebawi User/Home.html";
            }, 2000);
        }
    });
}
