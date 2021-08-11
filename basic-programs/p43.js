// Program to check how ‘this’ keyword works in JavaScript
const useThis = {
  fname: 'Rajan',
  lname: 'Bhatia',
  phoneNumber: 9898989898,
  emailId: 'rajanbhatia100@gmail.com',

  fullName() {
    return `${this.fname} ${this.lname}`;
  },
};
console.log(useThis.fullName());
