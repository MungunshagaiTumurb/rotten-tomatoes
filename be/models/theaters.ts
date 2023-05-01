import mongoose, { Schema } from "mongoose";
interface IAddress {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}
interface IGeo {
  type: string;
  coordinates: [Number, Number];
}
interface ILocation {
  address: IAddress;
  geo: IGeo;
}
interface ITheater {
  thaterId: number;
  location: ILocation;
}

const Theatrschema = new Schema<ITheater>({});

const TheatherModel = mongoose.model<ITheater>("Theater", Theatrschema);
export default TheatherModel;
