import { Schema, model } from "mongoose";

const ShortSchema = new Schema({
    pathname: { type: String, required: true, maxLength: 100 },
    location: { type: String, required: true, maxLength: 100 },
    create_at: { type: Date, required: true },
    user_id: { type: String },
    limit_to: { type: Date }
});

export default model("Short_l", ShortSchema);