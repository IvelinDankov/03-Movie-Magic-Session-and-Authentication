import User from "../models/User.js";

export default {
  register(userData) {
    // send data to model
    return User.create(userData);
  },
};
