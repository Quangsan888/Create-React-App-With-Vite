// import List from "./List.jsx";
// import ProfilePicture from "./ProfilePicture.jsx";
// import MyComponent1 from "./MyComponent1.jsx";
// import Counter from "./Counter.jsx";
// import MyComponent from "./MyComponent.jsx";
// import ColorPicker from "./ColorPicker.jsx";
// import MyObject from "./MyOBject.jsx";
// import MyComponentFoodArray from "./MyComponentFoodArray.jsx";
// import MyComponentArrayOfObject from "./MyComponentArrayOfObject.jsx";
// import ToDoList from "./ToDoList.jsx";
// import MyComponentUseEffect from "./MyComponentUseEffect.jsx";
import DigitalClock from "./DigitalClock.jsx";

// import "./index.css";
import "./digital.css";
function App() {
  const fruits = [
    { id: 1, name: "Banana", calories: 85 },
    { id: 2, name: "Apple", calories: 85 },
    { id: 3, name: "Mango", calories: 85 },
  ];

  const vegatable = [
    { id: 4, name: "carrot", calories: 85 },
    { id: 5, name: "yasai", calories: 85 },
    { id: 6, name: "bean", calories: 85 },
  ];

  return (
    // <div>
    //    {fruits.length > 0 && <List items={fruits}  category="fruits"/>}
    //    {vegatable.length > 0 && <List items={vegatable}  category="vegatable"/>}
    // </div>
    // <Button/>
    // <ProfilePicture/>
    // <MyComponent1 />
    // <Counter/>
    //  <MyComponent />
    // <ColorPicker/>
    // <MyObject />
    //  <MyComponentFoodArray />
    // <MyComponentArrayOfObject/>
    // <ToDoList />
    // <MyComponentUseEffect/>

    <DigitalClock />
  );
}

export default App;
