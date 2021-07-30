import { Users } from "users/models";
import { request } from "api";

export class UsersService {
	getUsers = (): Promise<Users[]> => {
		return request(`/users`);
	};
}
