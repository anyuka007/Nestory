import StarRating from "../../components/StarRating/StarRating";
import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";

// const reviews = [
//   {
//     id: 1,
//     name: "Sara James",
//     avatar: "/images/avatars/Sara.webp",
//     date: "October 10, 2024",
//     rating: 5,
//     text: "Nice quality!",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     avatar: "/images/avatars/John.avif",
//     date: "March 15, 2024",
//     rating: 4,
//     text: "Great product, would recommend!",
//   },
//   {
//     id: 3,
//     name: "Ming Jong",
//     avatar: "/images/avatars/Ming.webp",
//     date: "April 20, 2023",
//     rating: 5,
//     text: "Absolutely love it!",
//   },
// ];

// const product = {
//   _id: 1234,
//   name: "Circle corners table",
//   rating: 4.2,
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
//   price: 223,
//   discount: 10,
//   imgUrl:
//     "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic10-800x800.webp",
// };

const ReviewSection = ({ product }) => {
  // eslint-disable-next-line no-unused-vars
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, text: "" });
  const [allReviews, setAllReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { loginSuccess, user } = useContext(AppContext);
  // const [isSignUp, setIsSignUp] = useState(false);
  // const navigate = useNavigate();

  const handleSubmitWithVisibility = (event) => {
    event.preventDefault();
    handleSubmit(event);
    setIsFormVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/review/${product._id}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data);
        setAllReviews(data);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchReviews();
  }, [product._id]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newReviewEntry = {
  //     id: allReviews.length + 1, // id generieren
  //     ...newReview,
  //     avatar: "/images/avatars/defaultAvatar.webp", // user.photo
  //     date: new Date().toLocaleDateString(),
  //   };
  //   setAllReviews((prev) => [...prev, newReviewEntry]);
  //   setNewReview({ name: "", rating: 0, text: "" }); // for form reset
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReviewEntry = {
      ...newReview,
      avatar: "/images/avatars/avatar1.webp",
      date: new Date().toLocaleDateString(),
    };

    try {
      const response = await fetch(
        `http://localhost:3000/api/review/${product._id}`,
        // "http://localhost:3000/api/review/:productId",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product._id,
            ...newReviewEntry,
          }),
          credentials: "include",
        }
      );
      console.log("Response Status:", response.status);
      if (response.status === 201) {
        const newReviewData = await response.json();

        setAllReviews((prev) => [...prev, newReviewData]);
        setNewReview({ name: "", rating: 0, text: "" });
      } else {
        console.error("Failed to submit review. Status:", response.status);
      }
    } catch (error) {
      console.error("Error submitting review", error);
      alert("Failed to submit review.");
    }
  };

  return (
    <div className="parent review-section mt-10 p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-colorPrimary">
        {allReviews.length} review{allReviews.length > 1 ? "s" : ""} for{" "}
        {product.name}
      </h2>

      {allReviews.map((review) => (
        <div
          key={review.id}
          className="review-item flex items-start mb-8 p-6 bg-gray-50 rounded-lg shadow"
        >
          <div className="avatar mr-4">
            <img
              src={review.avatar}
              alt={`${review.name} avatar`}
              className="rounded-full w-14 h-14"
            />
          </div>
          <div className="content flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <div className="rating mt-2">
              <StarRating rate={review.rating} />
            </div>
            <p className="mt-2 text-gray-700">{review.text}</p>
          </div>
        </div>
      ))}

      {loginSuccess ? (
        <div>
          {!isFormVisible ? (
            <button
              onClick={() => setIsFormVisible(true)} // Покажи ја формата
              className="text-colorTertiary font-semibold hover:underline"
            >
              Add a review
            </button>
          ) : (
            <form
              onSubmit={handleSubmitWithVisibility}
              className="add-review-form mt-8"
            >
              <h3 className="text-xl font-semibold mb-4">Add a review</h3>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="name">
                  Your Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={newReview.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Rating:</label>
                <StarRating
                  rate={newReview.rating}
                  onChange={(value) =>
                    setNewReview((prev) => ({ ...prev, rating: value }))
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="text">
                  Your Review:
                </label>
                <textarea
                  name="text"
                  id="text"
                  value={newReview.text}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded w-full"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="bg-colorPrimary text-white px-4 py-2 rounded"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setIsFormVisible(false)} // Скриј форма ако корисникот избере "Cancel"
                className="ml-4 text-colorPrimary hover:underline"
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="add-review">
          <p className="text-xl font-semibold">Add a review</p>
          <p className="text-gray-600">
            You must be{" "}
            <a href="/login" className="text-colorTertiary hover:underline">
              logged in
            </a>{" "}
            to post a review.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
