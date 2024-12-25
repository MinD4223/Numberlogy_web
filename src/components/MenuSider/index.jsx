import {
  LineChartOutlined,
  MailOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
//   import { useState } from "react";
import { Link } from "react-router-dom";
//   import { setScorePass } from "../../services/serviceDashBoard";

function MenuSider() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [score, setScore] = useState(null);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = async () => {
  //   setIsModalOpen(false);
  //   const options = {
  //     score: score,
  //   };
  //   const response = await setScorePass(options);
  //   if (
  //     (response.response_data.message = "Score updated or created successfully")
  //   ) {
  //     setIsModalOpen(false);
  //   }
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  const items = [
    {
      label: <Link to="admin-dashboard">DashBoard</Link>,
      icon: <LineChartOutlined />,
      key: "menu-1",
    },
    {
      label: <Link to="admin-jobs">Job Manage</Link>,
      icon: <ProfileOutlined />,
      key: "menu-2",
    },
    {
      label: <Link to="admin-manage-cv/:id">CV Manage</Link>,
      icon: <MailOutlined />,
      key: "menu-3",
    },
  ];
  return (
    <>
      <div className="menu">
        <Menu mode="inline" items={items} />
      </div>
    </>
  );
}

export default MenuSider;
