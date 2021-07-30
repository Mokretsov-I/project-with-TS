import { Albums } from "albums/models";
import { request } from "api";

export class AlbumsService {
	getAlbums = (userId: string): Promise<Albums[]> => {
		return request(`/users/${userId}/albums`);
	};
}
