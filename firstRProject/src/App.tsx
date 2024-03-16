import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  var triState = ["New York", "New Jersey", "Connecticut"];
  var capital = ["Manhattan", "Trenton", "Danbury"];

  const handleSelectItem = (item: string) => {
    console.log(item, "Clicked");
  };
  return (
    <div>
      <ListGroup
        items={triState}
        listName="Tri State Area"
        onSelectItem={handleSelectItem}
      />
      <Alert alertName="Warning!!!" />
      {
        //We are now able to set up different lists just by
        //passing new properties
      }
      <ListGroup
        items={capital}
        listName="Capitals"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
