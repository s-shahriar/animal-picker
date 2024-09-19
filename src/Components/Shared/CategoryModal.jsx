import axios from "axios";
import Input from "../Utils/Input";
import Modal from "../Utils/Modal";

const CategoryModal = ({ isOpen, onClose, newCategory, setNewCategory, handleFormSubmit }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryToSubmit = { ...newCategory };
    if (!categoryToSubmit.color) {
      categoryToSubmit.color = "green";
    }
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, categoryToSubmit);
      handleFormSubmit(e, categoryToSubmit, setNewCategory, { name: "", color: "" }, onClose);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Category">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={newCategory.name}
          onChange={(e) => setNewCategory((prev) => ({ ...prev, name: e.target.value }))}
          placeholder="Category Name"
        />
        <Input
          value={newCategory.color}
          onChange={(e) => setNewCategory((prev) => ({ ...prev, color: e.target.value }))}
          placeholder="Color (e.g., red, green, blue) (optional)"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 rounded">
          Add Category
        </button>
      </form>
    </Modal>
  );
};

export default CategoryModal;
