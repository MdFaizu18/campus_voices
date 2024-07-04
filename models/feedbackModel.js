import mongoose from 'mongoose';
import { YEAR_STATUS } from '../utils/constant.js';

const FeedbackSchema = new mongoose.Schema(
    {
        name: String,
        department: {
            type: String,
        },
        year: {
            type: String,
            enum: Object.values(YEAR_STATUS),
            default: YEAR_STATUS.ONE
        },
        messageType:String,
        message: String,
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
        },
    },
    { timestamps: true }
);

export default mongoose.model('Feeds', FeedbackSchema);