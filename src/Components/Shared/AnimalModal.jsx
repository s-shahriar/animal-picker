import Input from "../Utils/Input";
import Modal from "../Utils/Modal";

const AnimalModal = ({ isOpen, onClose, categories, newAnimal, setNewAnimal, handleFormSubmit }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Add Animal">
        <form
          onSubmit={(e) =>
            handleFormSubmit(
              e,
              newAnimal,
              setNewAnimal,
              { name: "", category: "", imageUrl: "" },
              onClose
            )
          }
          className="space-y-4"
        >
          <Input
            value={newAnimal.name}
            onChange={(e) => setNewAnimal((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Animal Name"
          />
          <select
            value={newAnimal.category}
            onChange={(e) => setNewAnimal((prev) => ({ ...prev, category: e.target.value }))}
            className="w-full p-2 bg-gray-700 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <Input
            value={newAnimal.imageUrl}
            onChange={(e) => setNewAnimal((prev) => ({ ...prev, imageUrl: e.target.value }))}
            placeholder="Image URL"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 rounded">
            Add Animal
          </button>
        </form>
      </Modal>
    );
  };
  
  export default AnimalModal;
  