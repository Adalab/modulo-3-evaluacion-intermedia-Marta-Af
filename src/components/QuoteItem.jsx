import PropTypes from "prop-types";

function QuoteItem({ phrase, name }) {
  return (
    <>
      <h3 className="phrase">{phrase}</h3>
      <h3 className="name">-{name}</h3>
    </>
  );
}
QuoteItem.propTypes = {
  phrase: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default QuoteItem;
