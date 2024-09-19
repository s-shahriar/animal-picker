const AnimalGrid = ({ animals }) => {
    return (
      <div className="grid grid-cols-6 gap-4">
        {animals.map((animal) => (
          <div key={animal.name} className="bg-gray-800 p-2 rounded">
            <img src={animal.imageUrl} alt={animal.name} className="w-full h-auto" />
            <p className="text-center mt-2">{animal.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default AnimalGrid;
  