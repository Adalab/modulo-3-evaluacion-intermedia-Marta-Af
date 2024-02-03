import PropTypes from "prop-types";
import QuoteItem from "./QuoteItem";

function QuotesList({ filteredPerson }) {
  const htmlPerson = filteredPerson.map((persons, idx) => (
    <li className="item" key={idx}>
      <QuoteItem phrase={persons.quote} name={persons.character} />
    </li>
  ));
  return <ul>{htmlPerson}</ul>;
}

QuotesList.propTypes = {
  person: PropTypes.array,
};

export default QuotesList;
