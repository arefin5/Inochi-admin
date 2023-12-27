import { useState } from "react";

const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleImageChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="p-4 w-100 d-flex justify-content-center">
      <div className="w-100 d-flex flex-column align-items-center">
        <h3 className="text-center">Create a Blog</h3>
        <div className="w-75">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control w-100"
              type="text"
              value={title}
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Blogs Title Image (if you want)
            </label>
            <input
              className="form-control w-100"
              type="file"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="form-select"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
              <option value="category4">Category 4</option>
              <option value="category5">Category 5</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="6"
              value={content}
              placeholder="Content here"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex gap-4">
            <button
              type="button"
              className="btn btn-sm"
              style={{ backgroundColor: "#4F46E5", color: "white" }}
            >
              Preview
            </button>
            <button
              type="button"
              className="btn bg-success btn-sm text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
