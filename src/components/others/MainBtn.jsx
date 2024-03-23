import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const MainBtn = ({btnName, setViweJobs}) => {
    return (
        <Link onClick={()=> setViweJobs(8)} className='text-white text-xl font-medium px-5 py-3 rounded-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>{btnName}</Link>
    );
};
MainBtn.propTypes = {
    btnName: PropTypes.string.isRequired,
    setViweJobs: PropTypes.func.isRequired,

}
export default MainBtn;