import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User, Login, ResponseLogin } from '../interfaces/user.interface';

class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async checkUsername(login: Login): Promise<ResponseLogin> {
    const [rows] = await this.connection.execute<RowDataPacket[]>(
      'SELECT id, username, password FROM Trybesmith.users WHERE username = ?',
      [login.username],
    );
    const user = rows[0];
    if (user) {
      return {
        id: user.id,
        username: user.username,
        password: user.password,
      };
    } 
    return [] as ResponseLogin;
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
