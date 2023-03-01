import React from 'react'
import CourseCard from '../CourseCard/CourseCard'

import { courses } from '../../database'

interface CorsesProp {
    handleAddItemToCart?: any;
}


const Courses:React.FC<CorsesProp> = ({ handleAddItemToCart }) => {
    return (
        <main>
            <section className='courses-section'>
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        img={course.url}
                        title={course.name}
                        price={course.price}

                    />
                ))}
            </section>
        </main>
    )
}

export default Courses