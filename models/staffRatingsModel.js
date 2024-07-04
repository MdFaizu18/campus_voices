import mongoose from "mongoose";

const staffRatingsSchema = new mongoose.Schema({
    name: String,
    department: String,
    staffCode: String,
    ratings: [
        {
            quotient: String,
            star: [Number],
        },
    ],
});

export default mongoose.model("StaffRatting", staffRatingsSchema);