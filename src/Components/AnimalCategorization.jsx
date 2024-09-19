"use client";

import { PlusCircle } from 'lucide-react';
import { useState } from "react";
import AnimalGrid from "./AnimalGrid";
import AnimalModal from "./Shared/AnimalModal";
import CategoryModal from "./Shared/CategoryModal";
import ActionButton from "./Utils/ActionButton";
import CategoryButtons from "./Utils/CategoryButtons";


const AnimalCategorization = () => {
  const [categories, setCategories] = useState([
    { name: "Land Animal", color: "green" },
    { name: "Bird", color: "red" },
    { name: "Fish", color: "blue" },
    { name: "Insect", color: "yellow" },
  ]);

  const [animals, setAnimals] = useState([
    { name: "ELEPHANT", category: "Land Animal", imageUrl: "/images/elephant.png" },
    { name: "HORSE", category: "Land Animal", imageUrl: "/images/horse.png" },
    { name: "FOX", category: "Land Animal", imageUrl: "/images/fox.png" },
    { name: "COCKATOO", category: "Bird", imageUrl: "/images/cockatoo.png" },
    { name: "PHOENIX", category: "Bird", imageUrl: "/images/phoenix.png" },
    { name: "SPARROW", category: "Bird", imageUrl: "/images/sparrow.png" },
  ]);

  const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [newAnimal, setNewAnimal] = useState({ name: "", category: "", imageUrl: "" });
  const [newCategory, setNewCategory] = useState({ name: "", color: "" });
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const handleFormSubmit = (e, setItems, newItem, resetItem, onClose) => {
    e.preventDefault();
    setItems((prevItems) => [...prevItems, newItem]); // Correctly updating the list of items (animals or categories)
    resetItem(); // Reset the new item input state
    onClose(); // Close the modal
  };
  

  const filteredAnimals = activeCategory
    ? animals.filter((animal) => animal.category === activeCategory)
    : animals;

  return (
    <div className="p-4 bg-black text-white container mx-auto">
      <div className="flex justify-between mb-4">
        <CategoryButtons
          categories={categories}
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <div className="flex space-x-2">
          <ActionButton onClick={() => setIsAnimalModalOpen(true)} icon={PlusCircle} text="Add Animal" />
          <ActionButton onClick={() => setIsCategoryModalOpen(true)} icon={PlusCircle} text="Add Category" />
        </div>
      </div>

      <AnimalGrid animals={filteredAnimals} />

      <AnimalModal
        isOpen={isAnimalModalOpen}
        onClose={() => setIsAnimalModalOpen(false)}
        categories={categories}
        newAnimal={newAnimal}
        setNewAnimal={setNewAnimal}
        handleFormSubmit={(e) =>
          handleFormSubmit(e, setAnimals, newAnimal, () => setNewAnimal({ name: "", category: "", imageUrl: "" }), () => setIsAnimalModalOpen(false))
        }
      />

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        handleFormSubmit={(e) =>
          handleFormSubmit(e, setCategories, newCategory, () => setNewCategory({ name: "", color: "" }), () => setIsCategoryModalOpen(false))
        }
      />
    </div>
  );
};

export default AnimalCategorization;
