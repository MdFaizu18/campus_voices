import mongoose from "mongoose";
import { JOB_POSTION } from "../utils/constant.js";

const staffSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    department: String,
    experience: String,
    departmentCode: String,
    staffCode: String,
    email: String,
    phoneNumber: String,
    jobPosition: {
        type: String,
        enum: Object.values(JOB_POSTION),
        default: JOB_POSTION.ASSISTANT_PROFESSOR,
    },
});
export default mongoose.model("Staff", staffSchema);