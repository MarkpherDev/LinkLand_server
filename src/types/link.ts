import { Document, ObjectId } from "mongoose";

export interface ILink extends Document {
	_id?: string;
	userId: ObjectId;
	title: string;
	status: boolean;
	url: string;
	image: string;
}
