import { User } from '../../../../domain';
import { UserRepository } from '../../../../repositories';

export class UserRepositoryImpl implements UserRepository {
  private user: User[] = [];

  public async save(params: User) {
    this.user.push(params);
    return params;
  }

  public async getUser(userId: string): Promise<User | undefined> {
    return this.user.find((val) => val.getID().getValue() === userId);
  }
}