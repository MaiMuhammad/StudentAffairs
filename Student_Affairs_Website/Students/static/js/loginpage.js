class admin{
  constructor(name, phone, email, password, repeatedpassword) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

}
const form = document.querySelector('form');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

