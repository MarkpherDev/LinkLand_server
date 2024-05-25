import { compare, genSalt, hash } from "bcrypt";
import { UserPayload } from "../types/user";
import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET } from "./constants";

export const encryptPassword = async (password: string) => {
	const salt = await genSalt(10);
	return await hash(password, salt);
};

export const isPassword = async (password: string, hashedPassword: string) => {
	return await compare(password, hashedPassword);
};

export const generateToken = (payload: UserPayload) => {
	return sign(payload, JWT_SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token: string) => {
	return verify(token, JWT_SECRET);
};
