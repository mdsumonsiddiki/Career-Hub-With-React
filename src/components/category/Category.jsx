import { useEffect, useState } from "react";
import SectionTitle from "../others/SectionTitle";
import CatCard from "./CatCard";


const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])
    console.log(category)
    return (
        <div className="container mx-auto py-16">
            <SectionTitle sectionTitle='Job Category List'
                sectionDescrip='Explore thousands of job opportunities with all the information you need. Its your future'></SectionTitle>
            <div className="flex items-center gap-6">
                {
                    category.map(catItem => <CatCard
                        key={catItem.id}
                        catItem={catItem}
                    ></CatCard>)
                }
            </div>
        </div>
    );
};

export default Category;