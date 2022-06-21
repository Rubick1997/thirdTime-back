import User from "./User.js";

class UserService {
  async create(user) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async getAll() {
    const users = await User.find();
    return users;
  }
}
export default new UserService();
