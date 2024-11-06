import Cart from "../models/Cart.js";

export const deleteProductFromCart = async (req, res) => {
  const { productId } = req.params;
  //   const { userId } = req.user;
  //   const { _id: userId } = req.user;
  const { id } = req.user;
  try {
    const cart = await Cart.findOne({ id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    cart.items.splice(itemIndex, 1);

    await cart.save();
    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProductInCart = async (req, res) => {
  const { productId } = req.params;
  //   const { userId } = req.user;
  //   const { _id: userId } = req.user;
  const { id } = req.user;
  const { quantity, color } = req.body;

  try {
    const cart = await Cart.findOne({ id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (!item) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    if (quantity) item.quantity = quantity;
    if (color) item.color = color;

    await cart.save();
    res.status(200).json({ message: "Product updated in cart", cart });
  } catch (error) {
    console.error("Error updating item in cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};
