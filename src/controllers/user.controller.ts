import { Request, Response } from "express";
import { errorMessage } from "../utils/ErrorMessage";
import { CODE } from "../utils/constants";
import UserService from "../services/user.service";

export class UserController {
	static register = async (req: Request, res: Response) => {
		try {
			const response = await UserService.register(req.body);
			res
				.status(CODE.CREATED)
				.json({ data: response, message: "Usuario creado Correctamente" });
		} catch (error) {
			errorMessage(res, error);
		}
	};

	static login = async (req: Request, res: Response) => {
		try {
			const response = await UserService.login(req.body);
			res
				.status(CODE.ACCEPTED)
				.json({ data: response, message: "Inicio de Sesion Exitoso" });
		} catch (error) {
			errorMessage(res, error);
		}
	};
}
