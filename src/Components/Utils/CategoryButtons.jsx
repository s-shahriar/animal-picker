const CategoryButtons = ({ categories, activeCategory, handleCategoryClick }) => {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => handleCategoryClick(category.name)}
          className={`px-3 py-1 rounded-full text-sm border ${
            activeCategory === category.name
              ? "bg-opacity-100 text-white"
              : "bg-opacity-50"
          }`}
          style={{
            borderColor: category.color,
            backgroundColor:
              activeCategory === category.name ? category.color : "transparent",
            color: activeCategory === category.name ? "white" : category.color,
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
