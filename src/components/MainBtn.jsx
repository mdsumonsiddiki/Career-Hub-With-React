import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const MainBtn = ({btnName}) => {
    return (
        <Link className='text-white text-xl font-medium px-5 py-3 rounded-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>{btnName}</Link>
    );
};
MainBtn.propTypes = {
    btnName: PropTypes.string.isRequired,

}
export default MainBtn;