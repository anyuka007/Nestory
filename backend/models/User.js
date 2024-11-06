import mongoose from "mongoose";

// muss haben- Jian
const productSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true },
  color: { type: String, required: true },
});

// muss auch
const reviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
});

// muss wishlistSchema auch- Anna

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rememberMe: {
      type: Boolean,
      default: false,
    },
    //  so oder enum - rollen
    isAdmin: {
      type: Boolean,
      default: false,
    },

    //   wie das verbinden ...
    cart: [productSchema],
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
