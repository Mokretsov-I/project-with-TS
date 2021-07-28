import React from "react";
import { NavLink } from "react-router-dom";

import { useUsersContext } from "users/context/users-context";
import { Loader } from "components/Loader";

import "./UsersListPage.scss";

export const UsersListPage: React.FC = () => {
	const { users, isLoading } = useUsersContext();

	if (isLoading) return <Loader />;

	type userType = {
		id: number
		username: string
		name: string
	}

	return (
		<div className="users">
			<h1>Users</h1>
			<ol className="users__list">
				{users?.map((user: userType) => (
					<li key={user.id} className="users__item">
						<NavLink to={`/user/${user.id}`}>
							{user.username} - {user.name}
						</NavLink>
					</li>
				))}
			</ol>
		</div>
	);
};
