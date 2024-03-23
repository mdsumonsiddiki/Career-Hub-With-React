import { useEffect, useState } from "react";
import SectionTitle from "../others/SectionTitle";
import FeatureCard from "./FeatureCard";
import MainBtn from "../others/MainBtn";

const Features = () => {
    const [jobs, setJobs] = useState([]);
    const [viweJobs, setViweJobs] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [viweJobs])
    return (
        <div className="container mx-auto pt-10 pb-28">
            <SectionTitle sectionTitle='Featured Jobs'
                sectionDescrip='Explore thousands of job opportunities with all the information you need. Its your future'></SectionTitle>
            <div className="grid grid-cols-2 gap-8 pt-6">
                {
                    jobs.slice(0, viweJobs).map(job => <FeatureCard
                        key={job.id}
                        job={job}
                    ></FeatureCard>)
                }
            </div>
            <div className={viweJobs > 4? 'hidden mt-12 text-center': 'block mt-12 text-center'}>
                <MainBtn setViweJobs={setViweJobs} btnName="See All Jobs"></MainBtn>
            </div>

        </div>
    );
};

export default Features;