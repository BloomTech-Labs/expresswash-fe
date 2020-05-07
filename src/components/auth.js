class Auth {
  constructor() {
    this.authenticated = localStorage.getItem("token") ? false : false; // change back to "true : false" to get working again. disabling now for testing purposes.
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
