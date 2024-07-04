import mongoose from "mongoose";

const depRatingsSchema = new mongoose.Schema({
    ratings:[String]
});

export default mongoose.model("DepartmentRatings", depRatingsSchema);




// ratings: [{
//     userId: {
//         type: String,
//         required: true
//     },
//     rating: {
//         type: String,
//         required: true
//     }
// }],
// createdAt: {
//     type: Date,
//     default: Date.now
// }