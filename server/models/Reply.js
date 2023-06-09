const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema(
	{
		content: String,
		user: {
			type: mongoose.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = ReplySchema;
