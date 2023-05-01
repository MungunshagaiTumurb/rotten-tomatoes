"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const movies_routes_1 = __importDefault(require("./routes/movies.routes"));
const comments_routes_1 = __importDefault(require("./routes/comments.routes"));
const MONGO_CONN_STR = process.env.MONGODB_CONN_STR
  ? process.env.MONGODB_CONN_STR
  : "";
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/", movies_routes_1.default);
app.use("/comments", comments_routes_1.default);
app.listen(PORT, () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const connection = yield mongoose_1.default.connect(MONGO_CONN_STR);
    } catch (error) {
      console.log("Mongoose connection aldaa garlaa");
    }
  })
);
