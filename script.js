//id is login!
console.log(window)
function readFile(input) {
    let value__login = "";
    let value__password = "";
    try {
        value__login = document.querySelector('.login').value;
        value__password = document.querySelector('.password').value;
        alert("Login: " + value__login + "\nPassword: " + value__password);
    } catch (e) {
        console.log(e.message);
    }

    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        console.log(reader.result);
        let str1Lvl = reader.result.split('\n');
        for (let index = 0; index < str1Lvl.length - 1; index++) {
            let str2lvl = str1Lvl[index].split(' ');
            console.log(value__login + " " + str2lvl[0] + '\n' + value__password + " " + str2lvl[2]);
            if (str2lvl[0] === value__login && str2lvl[2].replace(/\r/g, '') === value__password) {
                alert("User defined!");
                window.location.href = 'secret.html';
            }
        }

    };
}