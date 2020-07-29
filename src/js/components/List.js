
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articleList: state.articleList };
};

const ConnectedList = ({ articleList }) => (
  <ul>
    {articleList.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;