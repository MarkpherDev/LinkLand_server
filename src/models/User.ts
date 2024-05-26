import { model, Schema } from "mongoose";
import { IUser } from "../types/user";

const userSchema: Schema = new Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			lowercase: true
		},
		password: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		avatar: {
			type: String,
			required: false
		},
		links: [
			{
				type: Schema.Types.ObjectId,
				ref: "Link"
			}
		]
	},
	{ versionKey: false, timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
