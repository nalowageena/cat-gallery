let email_regex = /^[A-Za-z-.]+\w*@[A-Za-z]+.[a-z]{2,3}$/;

let my_email = 'somethi.n-g@gmail.com';

console.log(email_regex.test(my_email));

let username_regex = /^[A-Za-z]+[A-Za-z0-9-.@]*$/;

let my_name = 'Nalowa_geena';

console.log(username_regex.test(my_name));


// a password should be atleast 08 characters in length
// it should have special characters
// it should have a capital letter
// it should have a number
// it should have small case letters
let special_char = "~`!@#\$%\^&\*()_-+={\\[}]|:;\"\'<,>.?/";
let password_regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.'\@#-+=?/,+_()£"!$%^&*|])(?=.{8,})/;

let my_password = 'myblog1';

console.log(password_regex.test(my_password));