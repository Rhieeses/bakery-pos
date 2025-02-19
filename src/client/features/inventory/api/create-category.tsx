import axios from "axios";

type categoryDataType = {
    name: string;
    icon: string;
};

export async function createCategory(categoryData: categoryDataType) {
    console.log(categoryData);
    const response = await axios.post(
        "/api/category/create-category",
        categoryData,
    );

    if (!response.status) {
        console.log("Failed to create a category");
    }
    return response;
}
