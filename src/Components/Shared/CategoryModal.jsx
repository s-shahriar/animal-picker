import Input from "../Utils/Input";
import Modal from "../Utils/Modal";

const CategoryModal = ({ isOpen, onClose, newCategory, setNewCategory, handleFormSubmit }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Add Category">
        <form
          onSubmit={(e) =>
            handleFormSubmit(
              e,
              newCategory,
              setNewCategory,
              { name: "", color: "" },
              onClose
            )
          }
          className="space-y-4"
        >
          <Input
            value={newCategory.name}
            onChange={(e) => setNewCategory((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Category Name"
          />
          <Input
            value={newCategory.color}
            onChange={(e) => setNewCategory((prev) => ({ ...prev, color: e.target.value }))}
            placeholder="Color (e.g., red, green, blue)"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 rounded">
            Add Category
          </button>
        </form>
      </Modal>
    );
  };
  
  export default CategoryModal;
  