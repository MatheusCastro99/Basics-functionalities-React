import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./ListGroup.css";

//it is also possible to reuse code by using props and interfaces
//this way, we would pass the items of the list and the titles as
//arguments of an ListGroup object
interface ListGroupProps {
  items: string[];
  listName: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  // triState = [];
  //var indexOf = -1;
  const [indexOf, setSelectedIndex] = useState(-1);

  /*function checkLength() {
    return triState.length === 0 ? <p>No item found</p> : null;
  }*/

  return (
    //Fragments can be substituted by simply <> </> wraps
    <Fragment>
      <h1>{props.listName}</h1>
      {/* {checkLength()} 
      The line bellow shows a shorter,
      more compact way to check and respond*/}
      {props.items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {props.items.map((listItem, index) => (
          <li
            className={
              indexOf === index ? "list-group-item bg-info" : "list-group-item"
            }
            style={{
              transition: "ease-in-out",
              transitionDuration: "0.5s",
            }}
            key={listItem}
            onClick={() => {
              props.onSelectItem(listItem);
            }}
            onMouseEnter={
              /*function/response goes here*/
              () => {
                setSelectedIndex(index);
              }
            }
            onMouseLeave={() => setSelectedIndex(-1)}
          >
            {listItem}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
