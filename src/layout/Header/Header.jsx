import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import "./style.scss";
// import { Button } from 'antd';
export default function Header() {
  const [modalVisible, setmodalVisible] = useState(false);

  const showModal = () => {
    setmodalVisible(true);
  };

  const handleOk = () => {
    setmodalVisible(false);
  };
  return (
    <div className="header-container">
      <div className="header-left">
        {/* <Button onClick={() => showModal()} name={'Create New Task'}/> */}
        <button onClick={() => showModal()}>Add New Task</button>
      </div>
      <div className="header-right">
        <input placeholder="Search for..." />
        <Button name={"Search"} />
      </div>
      {modalVisible && <Modal onOk={handleOk} />}
    </div>
  );
}