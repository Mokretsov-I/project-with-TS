import { Todos } from "todos/models";
import { request } from "api";

export class TodosService {
	getTodos = (userId: string): Promise<Todos[]> => {
		return request(`/users/${userId}/todos`);
	};
}
