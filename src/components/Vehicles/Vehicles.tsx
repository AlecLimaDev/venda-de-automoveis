import React from "react";
import { vehicles } from "../../../database";
import VehiclesCard from "../VehiclesCard/VehiclesCard";

interface CoursesProp {
  handleAddItemToCart?: any;
}

const Vehicles: React.FC<CoursesProp> = ({ handleAddItemToCart }) => {
  return (
    <main>
      <section className="courses-section">
        {vehicles.map((course, index) => (
          <VehiclesCard
            key={index}
            img={course.url}
            title={course.name}
            price={course.price}
          />
        ))}
      </section>
    </main>
  );
};

export default Vehicles;
