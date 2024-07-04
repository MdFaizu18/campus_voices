import moment from 'moment'; // Import moment.js for date manipulation
import departRatingsModel from '../models/depratingModel.js';

export const getDepartRatings = async (req, res) => {
    try {
        const ratings = await departRatingsModel.find({});

        // Calculate total rating and total ratings count
        let totalRating = 0;
        let totalRatingsCount = ratings.reduce((acc, doc) => {
            // Calculate total rating
            doc.ratings.forEach((rating) => {
                totalRating += parseInt(rating);
            });
            // Accumulate total ratings count
            return acc + doc.ratings.length;
        }, 0);

        res.status(200).json({ totalRating: totalRating, totalRatingsCount: totalRatingsCount,rating: ratings,  });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// // Controller
export const addDepartRatings = async (req, res) => {
    try {
        const { rating ,userId} = req.body;
        console.log(rating);
        // console.log(req.body.userId);
        // Find the existing ratings document
        let existingRatings = await departRatingsModel.findOne({});

        // If there's no existing ratings document, create a new one
        if (!existingRatings) {
            const newRatings = new departRatingsModel({ ratings: [rating] });
            await newRatings.save();
        } else {
            // If there's an existing ratings document, push the new rating to the array
            existingRatings.ratings.push(rating);
            await existingRatings.save();
        }

        // Get all ratings after update
        const updatedRatings = await departRatingsModel.find({});

        // Calculate total rating
        let totalRating = 0;
        updatedRatings.forEach((doc) => {
            doc.ratings.forEach((rating) => {
                totalRating += parseInt(rating);
            });
        });

        // Calculate total ratings count
        let totalRatingsCount = updatedRatings.reduce((acc, doc) => acc + doc.ratings.length, 0);

        // Omit the "rating" field from the response
        res.status(200).json({ message: "Rating added successfully.", totalRating: totalRating, totalRatingsCount: totalRatingsCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
