export type UserData = {
	name: string;
	email: string;
	password: string;
};

export type LoginData = Pick<UserData, "email" | "password">;

export type UserPayload = Pick<UserData, "name" | "email">;
