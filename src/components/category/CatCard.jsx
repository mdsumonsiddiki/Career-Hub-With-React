import PropTypes from 'prop-types';
import logo from '../../assets/icons/accounts.png'
const CatCard = ({ catItem }) => {
    const { category_name,} = catItem;
    return (
        <div className='w-full bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-10 rounded-2xl'>
           <img className='bg-gradient-to-r from-[#7E90FE33] to-[#9873FF33] p-3 rounded-xl' src={logo} alt="" />
            
            <h2 className='text-[#474747] text-xl font-extrabold pt-8 pb-2'>{category_name
            }</h2>
            <p className='text-[#A3A3A3] font-medium'>300 Jobs Available</p>
        </div>
    );
};
CatCard.propTypes = {
    catItem: PropTypes.object.isRequired,
}
export default CatCard;