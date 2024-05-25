import User from "../models/User";
import { LoginData, UserData, UserPayload } from "../types/user";
import {
	encryptPassword,
	generateToken,
	isPassword
} from "../utils/authHandler";
import { CODE } from "../utils/constants";
import { HttpException } from "../utils/HttpException";

class UserService {
	public findByEmail = async (email: UserData["email"]) => {
		const user = User.findOne({ email });

		if (!user) {
			return null;
		}

		return user;
	};

	public register = async (data: UserData) => {
		const user = await this.findByEmail(data.email);

		if (user) {
			throw new HttpException(CODE.BAD_REQUEST, "El email ya esta en uso");
		}

		data.password = await encryptPassword(data.password);

		return await User.create(data);
	};

	public login = async (data: LoginData) => {
		const user = await this.findByEmail(data.email);

		if (!user) {
			throw new HttpException(CODE.UNAUTHORIZED_ACCESS, "El Usuario no existe");
		}

		const correctPassword = await isPassword(data.password, user.password);

		if (!correctPassword) {
			throw new HttpException(
				CODE.UNAUTHORIZED_ACCESS,
				"La contraseña no es correcta"
			);
		}
		const payload: UserPayload = { email: user.email, name: user.name };

		return generateToken(payload);
	};
}

export default new UserService();
