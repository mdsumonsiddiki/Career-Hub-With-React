import PropTypes from 'prop-types';

const SectionTitle = ({sectionTitle, sectionDescrip}) => {
    return (
        <div className="text-center py-8 space-y-4">
            <h2 className="text-[#1A1919] font-extrabold text-5xl">{sectionTitle}</h2>
            <p className="text-[#757575] font-medium">{sectionDescrip}</p>
        </div>
    );
};
SectionTitle.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    sectionDescrip: PropTypes.string.isRequired,

}
export default SectionTitle;