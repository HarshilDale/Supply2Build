import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  descript: { type: String, required: true },
  catagory: { type: String, required: true },
  photos: {
    type: mongoose.Types.ObjectId,
    ref: "Images",
  },
  price: { type: Number, default: 250, required: true },
  addOns: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Products",
    },
  ],
  shop: {
    type: mongoose.Types.ObjectId,
    ref: "Shops",
    required: true,
  },
  reviews: {},
});

export const ProductModel = mongoose.model("Products", ProductSchema);
