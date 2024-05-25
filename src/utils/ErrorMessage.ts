import { Response } from "express";
import { HttpException } from "./HttpException";
import { CODE } from "./constants";

export const errorMessage = (res: Response, error: unknown) => {
	if (error instanceof HttpException) {
		res.status(error.status).json({ message: error.message });
	} else {
		console.log(error);
		res
			.status(CODE.INTERNAL_SERVER_ERROR)
			.json({ message: "Ocurrió un Error" });
	}
};
