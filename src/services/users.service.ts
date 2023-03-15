import { User, Login } from '../interfaces/user.interface';
import UsersModel from '../models/users.model';
import connection from '../models/connection';

class UsersService {
  model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  async login(login: Login) {
    const user = await this.model.checkUsername(login);
    if (!user) {
      return 'passwordInvalid';
    }
    if (user.password !== login.password) {
      return 'passwordInvalid';
    }
    return { id: user.id, username: user.username };
  }

  async createUser(user: User) {
    return this.model.createUser(user);
  }
}

export default UsersService;
