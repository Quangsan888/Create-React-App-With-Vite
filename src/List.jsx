import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItem = itemList.map((item) => (
    <li key={item.id}>
      {item.name} <br />
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <div>
      <h3>{category}</h3>
      <ol>{listItem}</ol>
    </div>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};


List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
