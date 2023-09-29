import short from "../schema/short.js";

Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export const getById = async ({ id }) => {
    let response = await short.findOne({id}).exec();

    return response;
}

export const newShort = async ({ body }) => {
    let _sh = new newShort(body);
    let response = await _sh.save();

    return response;
}