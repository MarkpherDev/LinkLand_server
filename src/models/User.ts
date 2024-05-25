import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
	email: string;
	password: string;
	name: string;
}

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
			required: true
		}
	},
	{ versionKey: false, timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
