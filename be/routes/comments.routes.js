"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comments_controller_1 = require("../controllers/comments.controller");
const CommentsRouter = express_1.default.Router();
CommentsRouter.get("/:id", comments_controller_1.getAllComment);
exports.default = CommentsRouter;
