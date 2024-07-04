import { StatusCodes } from "http-status-codes";
import staffModel from "../models/staffModel.js";

export const getAllStaffs = async (req, res) => {
    const { search } = req.query;

    const queryObject = {};
    if (search) {
        queryObject.$or = [
            { firstName: { $regex: search, $options: 'i' } },
            { lastName: { $regex: search, $options: 'i' } },
        ];
    }
    const allStaff = await staffModel.find(queryObject);
    const TotalNoStaffs = await staffModel.countDocuments(queryObject);
    res.status(200).json({ TotalNoStaffs, staffs: allStaff, });
};

export const createStaff = async (req, res) => {
    const staff = await staffModel.create(req.body);
    res.status(200).json({ msg: "staff added... ",staff });
};

export const getOneStaff = async (req, res) => {
    const staff = await staffModel.findById(req.params.id);
    res.status(StatusCodes.OK).json({ staff });
};

export const updateStaff = async (req, res) => {
    const updatedStaff = await staffModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );
    res
        .status(StatusCodes.OK)
        .json({ msg: "Staff details modified...", updatedStaff });
};

export const deleteStaff = async (req, res) => {
    const removedStaff = await staffModel.findByIdAndDelete(req.params.id);
    res
        .status(StatusCodes.OK)
        .json({ msg: "Staff details deleted...", staff: removedStaff });
};