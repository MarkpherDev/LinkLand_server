import { model, Schema } from "mongoose";
import { ILink } from "../types/link";

const linkSchema: Schema = new Schema<ILink>({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	title: {
		type: String,
		required: true,
		lowercase: true
	},
	status: {
		type: Boolean,
		required: false,
		default: true
	},
	url: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	}
});

const linkModel = model<ILink>("Link", linkSchema);

export default linkModel;
