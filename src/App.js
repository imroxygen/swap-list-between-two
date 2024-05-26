import { useState } from "react";
import "./styles.css";

export default function App() {
  const [list1, setList1] = useState([
    { title: "Item 1", checked: false },
    { title: "Item 2", checked: false },
    { title: "Item 3", checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: "Item A", checked: false },
    { title: "Item B", checked: false },
    { title: "Item C", checked: false },
  ]);
  const changeState = (ind) => {
    const updateList1 = [...list1];
    updateList1[ind].checked = !updateList1[ind].checked;
    setList1(updateList1);
  };
  const changeList = () => {
    const updateList1 = [...list1];
    const updateList2 = [...list2];
    updateList1.forEach((el, ind) => {
      if (el.checked === true) {
        let temp = updateList2[ind];
        updateList2[ind] = updateList1[ind];
        updateList1[ind] = temp;
        updateList1[ind].checked = false;
      }
    });
    setList1(updateList1);
    setList2(updateList2);
  };
  return (
    <>
      <div>list1</div>
      <ul>
        {list1.map((el, ind) => (
          <li key={ind}>
            {" "}
            <input
              type="checkbox"
              checked={el.checked}
              onClick={() => changeState(ind)}
            />{" "}
            {el.title}
          </li>
        ))}
      </ul>
      <div>list2</div>
      <ul>
        {list2.map((el, ind) => (
          <li>{el.title}</li>
        ))}
      </ul>
      <button onClick={changeList}>swap list</button>
    </>
  );
}
