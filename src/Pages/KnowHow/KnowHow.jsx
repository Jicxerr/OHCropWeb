
import React, { useState } from "react";
import { Button, Card } from "antd";
import { categories} from "../KnowHow/Categories";

const CategoryButton = ({ category, onClick }) => (
  <Button
    onClick={onClick}
    className="flex items-center p-4 rounded-lg 
    transition-colors duration-300 text-left
   bg-white bg-opacity-80 text-gray-800 
    shadow-sm hover:bg-opacity-60 w-full"
    style={{ border: "none" }}
  >
    <span className="mr-3 text-2xl">{category.icon}</span>
    <span className="flex-1">{category.name}</span>
  </Button>
);

function KnowHow() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-300 flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-4 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 text-violet-700">Know How</h2>
        <div className="flex flex-col space-y-2">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              category={category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3 p-4">
        {activeCategory ? (
          <Card
            title={
              <div className="flex items-center">
                <span className="text-3xl mr-3">{activeCategory.icon}</span>
                <span className="text-2xl font-semibold">
                  {activeCategory.name}
                </span>
              </div>
            }
            cover={
              <img
                src={activeCategory.image || photo1} // Fallback to photo1 if no image is provided
                alt={activeCategory.name}
                className="w-full h-60 object-cover rounded-t-lg"
              />
            }
            bordered={false}
            className="mb-4 shadow-lg rounded-lg bg-white bg-opacity-90"
          >
            <p className="mb-4">{activeCategory.description}</p>
            <p className="font-semibold">{activeCategory.additionalInfo}</p>
          </Card>
        ) : (
          <p className="text-center text-lg text-gray-600">
            Select a category to see more information
          </p>
        )}
      </div>
    </div>
  );
}

export default KnowHow;
