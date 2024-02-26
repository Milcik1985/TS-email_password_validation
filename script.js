// 1. Sukurti 3 inputus bei buttona. Inputuose turi būt įrašomi vartotojo duomenys.
// 2. Typescript pagalba gauti elementus pagal id;
var nickNameInput = document.querySelector("input[id='user-nick-name']");
var emailInput = document.getElementById("user-email");
var passwordInput = document.getElementById("user-password");
var submitButton = document.getElementById("main-button");
// 4. Iš input'ų sudėti reikšmes į objekto kintamąjį. Nurodyt, kad kintamasis turėtu UserType;
var user = {
    nickName: "milcik",
    email: "milcik@gmail.com",
    password: "abrakadabra",
};
console.log(user);
var user2 = {
    nickName: "milana",
    email: "milana@gmail.com",
    password: "alphabet",
};
var user3 = {
    nickName: "wowancik",
    email: "wowancik@gmail.com",
    password: "argail",
};
// 5. Apsirayt users kintamąjį, jam nurodyt tipą;
var users = [user, user2];
console.log(users);
submitButton.addEventListener("click", function () {
    var userLogin = {
        nickName: nickNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userLogin.nickName.length <= 4) {
        alert("nickname must be at least 4 characters");
        return;
    }
    ;
    if (!emailRegex.test(userLogin.email)) {
        alert("incorrect email structure. Please provide the correct one.");
        return;
    }
    if (userLogin.password.length < 8) {
        alert("password must be at least 8 characters");
        return;
    }
    // 7. User'io atvaizduojami ekrane.
    console.log(userLogin);
});
// 8. CAO TS 1temos 3 užd.
