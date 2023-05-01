import express from "express";
import { Request, Response } from "express";
import TheatherModel from "../models/theaters";

const getAllTheater = async (req: Request, res: Response) => {
  try {
    const response = await TheatherModel.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
