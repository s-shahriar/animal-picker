import axios from "axios";
import Input from "../Utils/Input";
import Modal from "../Utils/Modal";

const AnimalModal = ({ isOpen, onClose, categories, newAnimal, setNewAnimal, handleFormSubmit }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const animalToSubmit = { ...newAnimal };
    if (!animalToSubmit.imageUrl) {
      animalToSubmit.imageUrl = "https://i.ibb.co.com/DKW00x2/images-q-tbn-ANd9-Gc-R-w37k-M40-Nbda-SQ9-FVehjd-U8h-U32he-AAo-Ab-CNxg-Hgv-Sq-Hha-Fm-Lo-UVgzq1-Iq-G2.jpg";
    }
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/animals`, animalToSubmit);
      handleFormSubmit(e, animalToSubmit, setNewAnimal, { name: "", category: "", imageUrl: "" }, onClose);
    } catch (error) {
      console.error("Error adding animal:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Animal">
      <form onSubmit={handleSubmit} className="space-y-4">
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
          placeholder="Image URL (optional)"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 rounded">
          Add Animal
        </button>
      </form>
    </Modal>
  );
};

export default AnimalModal;
