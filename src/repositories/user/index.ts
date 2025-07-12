import * as Domain from "../../domain/user";

export interface UserRepository {
    save: (params: Domain.User) => Promise<Domain.User>;
}
