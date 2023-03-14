import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser(user: User): Promise<User> {
    const { username, vocation, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ? ,?);',
      [username, vocation, level, password],
    );
    const { insertId: id } = result;

    const newUser: User = { id, username, vocation, level, password };
    return newUser;
  }
}

export default UsersModel;