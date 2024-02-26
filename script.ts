// 1. Sukurti 3 inputus bei buttona. Inputuose turi būt įrašomi vartotojo duomenys.
// 2. Typescript pagalba gauti elementus pagal id;
const nickNameInput: HTMLInputElement = document.querySelector("input[id='user-nick-name']")!;

const emailInput: HTMLInputElement = document.getElementById("user-email") as HTMLInputElement;

const passwordInput: HTMLInputElement = document.getElementById("user-password") as HTMLInputElement;

const submitButton: HTMLButtonElement = document.getElementById("main-button") as HTMLButtonElement;

// 3. Sukurti UserType tipą;

type UserType = {
    nickName: string,
    email: string,
    password: string,
}
// 4. Iš input'ų sudėti reikšmes į objekto kintamąjį. Nurodyt, kad kintamasis turėtu UserType;
const user: UserType = {
    nickName: "milcik",
    email: "milcik@gmail.com",
    password: "abrakadabra",
};

console.log(user);

const user2: UserType = {
    nickName: "milana",
    email: "milana@gmail.com",
    password: "alphabet",
};

const user3: UserType = {
    nickName: "wowancik",
    email: "wowancik@gmail.com",
    password: "argail",
}

// 5. Apsirayt users kintamąjį, jam nurodyt tipą;
const users: UserType[] = [user, user2];

console.log(users);

// 6. Buttonui pridėt onClick eventą. Kai paspaudžiama ant buttono į aprašytą masyvą įpushinams user.
type userLoginType = {
    nickName: string,
    email: string,
    password: string | number,
}

submitButton.addEventListener("click", () => {
    const userLogin: userLoginType = {
        nickName: nickNameInput.value,
        email: emailInput.value,
        password: passwordInput.value as string,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userLogin.nickName.length <=4) {
        alert("nickname must be at least 4 characters")
        return;
    };

    if (!emailRegex.test(userLogin.email)) {
        alert("incorrect email structure. Please provide the correct one.")
        return;
    }

    if ((userLogin.password as string).length < 8) {
        alert("password must be at least 8 characters")
        return;
    }
// 7. User'io atvaizduojami ekrane.
    console.log(userLogin)
})

// 8. CAO TS 1temos 3 užd.