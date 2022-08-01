import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
// import Modal from "../../components/Modal/Modal";
import "./style.scss";
export default function Header() {
  // const [modalVisible, setmodalVisible] = useState(false);

  // const showModal = () => {
  //   setmodalVisible(true);
  // };

  // const handleOk = () => {
  //   setmodalVisible(false);
  // };
  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="./add">
        <button>Add New Task</button>
        </Link>
        {/* <button onClick={() => showModal()}>Add New Task</button> */}
      </div>
      <div className="header-right">
        <input placeholder="Search for..." />
        <Button name={"Search"} />
      </div>
      {/* {modalVisible && <Modal onOk={handleOk} />} */}
    </div>
  );
}