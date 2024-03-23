import SecBtn from "../others/SecBtn";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import MainBtn from "../others/MainBtn";
import icon from '../../assets/logo/google.png'
import PropTypes from 'prop-types';

const FeatureCard = ({job}) => {
    const {job_title , company_name, remote_or_onsite, job_type , location, salary} = job;
    return (
        <div className="border-2 p-8 rounded-xl border-[#9873FF]">
            <img src={icon} alt="" />
            <div className="mb-10 mt-6">
                <h2 className="text-[#474747] text-2xl font-extrabold">{job_title}</h2>
                <h3 className="text-[#757575] font-extrabold text-xl pt-4">{company_name}</h3>
            </div>
            <div className="flex gap-6">
                <SecBtn secBtnName={remote_or_onsite}></SecBtn>
                <SecBtn secBtnName={job_type}></SecBtn>
            </div>
            <ul className="my-10  text-[#757575]  font-semibold text-xl flex items-center gap-12">
                <li className="flex items-center gap-3"><FaMapMarkerAlt size={'30px'} />{location}</li>
                <li className="flex items-center gap-3"><CiDollar size={'30px'} />Salary : {salary}</li>
            </ul>
            <MainBtn btnName="View Details" ></MainBtn>
        </div>
    );
};
FeatureCard.propTypes = {
    job: PropTypes.object.isRequired,

}
export default FeatureCard;