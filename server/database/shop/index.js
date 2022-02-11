import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  mapLocation: { type: String, required: true },
  shopTimings: String,
  contactNumber: Number,
  website: String,
  popularProducts: [String],
  averageCost: Number,
  amenities: [String],
  menuImage: {
    type: mongoose.Types.ObjectId,
    ref: "Images",
  },
  menu: {
    type: mongoose.Types.ObjectId,
    ref: "Menu",
  },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }],
  photos: {
    type: mongoose.Types.ObjectId,
    ref: "Images",
  },
});

export const ShopModel = mongoose.model("Shops", ShopSchema);
