import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  description: String,
  image: String,
});

const Property = mongoose.model("Property", propertySchema);
export default Property;
