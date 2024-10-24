import Categories from "../../components/Categories/Categories";
import { useParams } from "react-router-dom";

const Category = () => {
    const { categoryName } = useParams();
    return (
        <div>
            <h1>Category: {categoryName}</h1>
            <Categories categoryName={categoryName} />
        </div>
    );
};

export default Category;
