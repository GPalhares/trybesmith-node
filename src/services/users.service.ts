import User from '../interfaces/user.interface';
import UsersModel from '../models/users.model';
import connection from '../models/connection';

class UsersService {
  model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  async createUser(user: User) {
    return this.model.createUser(user);
  }
}

export default UsersService;
