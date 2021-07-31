import { Posts } from "posts/models";
import { request } from "api";

export class PostsService {
	getPosts = (userId: string): Promise<Posts[]> => {
		return request(`/users/${userId}/posts`);
	};
}
