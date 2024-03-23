import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const SecBtn = ({secBtnName}) => {
    return (
        <div>
            <Link className="border-2 border-[#9873FF] py-3 px-3 text-lg text-[#7E90FE]">{secBtnName}</Link>
        </div>
    );
};
SecBtn.propTypes = {
    secBtnName: PropTypes.string.isRequired,

}
export default SecBtn;