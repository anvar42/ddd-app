import { UserRepository } from '../../../../repositories/user';
import { User } from '../../../../domain';

export class UserRepositoryImpl implements  UserRepository {
  public async save(params: User) {
    return params;
  }
}