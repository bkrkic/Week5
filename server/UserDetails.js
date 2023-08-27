module.exports = {
  User: class {
      username = "";
      birthdate = "";
      age = "";
      email = "";
      password = "";
      valid = false;
      constructor(username, birthdate, age, email, password) {
          this.username = username;
          this.birthdate = birthdate;
          this.age = age;
          this.email = email;
          this.password = password;
      }
  }
}
