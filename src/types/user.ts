import { Document } from "mongoose";
import { ILink } from "./link";

export interface IUser extends Document {
	_id?: string;
	email: string;
	password: string;
	name: string;
	description: string;
	avatar: string;
	links: Array<ILink>;
}

export type RegisterData = Pick<IUser, "email" | "password" | "name">;

export type LoginData = Pick<IUser, "email" | "password">;

export type UserPayload = Pick<IUser, "name" | "email">;
