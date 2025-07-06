
export interface UserRepository {
    create: () => Promise<void>;
}

export class UserRepositoryImpl implements UserRepository {
    public async create (): Promise<void> {
        
    };
}