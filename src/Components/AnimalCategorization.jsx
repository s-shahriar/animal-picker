"use client";

import axios from "axios";
import { PlusCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import AnimalGrid from "./AnimalGrid";
import AnimalModal from "./Shared/AnimalModal";
import CategoryModal from "./Shared/CategoryModal";
import Loading from "./Shared/Loading";
import ActionButton from "./Utils/ActionButton";
import CategoryButtons from "./Utils/CategoryButtons";

const AnimalCategorization = () => {
  const [categories, setCategories] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    category: "",
    imageUrl: "",
  });
  const [newCategory, setNewCategory] = useState({ name: "", color: "" });
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);

    // Fetch animals from API
  const fetchAnimals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/animals`
      );
      setAnimals(response.data);
    } catch (error) {
      console.error("Error fetching animals:", error);
      setAnimals([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch categories from API
  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnimals();
    fetchCategories();
  }, [fetchAnimals, fetchCategories]);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const handleFormSubmit = async (
    e,
    setItems,
    newItem,
    resetItem,
    onClose,
    fetchFunc
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetchFunc();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      resetItem();
      onClose();
      setLoading(false);
    }
  };

  const filteredAnimals = activeCategory
    ? animals.filter((animal) => animal.category === activeCategory)
    : animals;

  return (
    <div className="p-4 bg-black text-white container mx-auto">
      {loading ? <Loading />: (
        <>
          <div className="flex justify-between mb-4">
            <CategoryButtons
              categories={categories}
              activeCategory={activeCategory}
              handleCategoryClick={handleCategoryClick}
            />
            <div className="flex space-x-2">
              <ActionButton
                onClick={() => setIsAnimalModalOpen(true)}
                icon={PlusCircle}
                text="Add Animal"
              />
              <ActionButton
                onClick={() => setIsCategoryModalOpen(true)}
                icon={PlusCircle}
                text="Add Category"
              />
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
              handleFormSubmit(
                e,
                setAnimals,
                newAnimal,
                () => setNewAnimal({ name: "", category: "", imageUrl: "" }),
                () => setIsAnimalModalOpen(false),
                fetchAnimals
              )
            }
          />

          <CategoryModal
            isOpen={isCategoryModalOpen}
            onClose={() => setIsCategoryModalOpen(false)}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            handleFormSubmit={(e) =>
              handleFormSubmit(
                e,
                setCategories,
                newCategory,
                () => setNewCategory({ name: "", color: "" }),
                () => setIsCategoryModalOpen(false),
                fetchCategories
              )
            }
          />
        </>
      )}
    </div>
  );
};

export default AnimalCategorization;
