// les-31

const user = {
  name: 'Viktor',
  _role: 'editor',

  get role() {
    return this._role;
  },

  set role(value) {
    if (value === 'reader' || value === 'admin' || value === 'editor') {
      this._role = value;
    } else {
      console.error('Error');
    }
  }
}

const userTwo = Object.create(user);