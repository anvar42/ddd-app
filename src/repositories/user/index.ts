import * as Domain from "../../domain/user";

export interface UserRepository {
    save: (params: Domain.User) => Promise<Domain.User>;
    getUser: (userId: string) => Promise<Domain.User | undefined>;
}
