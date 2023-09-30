import short from "../schema/short.js";
import mongoose from "mongoose";
import 'dotenv/config'

mongoose.connect(process.env.MONGO_SERVER)
  .then(() => console.log('Connected!'));


export class shortModel {
    static async findById (id) {
        let response = await short.findOne({"pathname": id}).exec();
        console.log(id)

        return response;
    }

    static async appendShort ({ body }) {
        let _sh = new short(body);
        let response = await _sh.save();

        return response;
    }
}