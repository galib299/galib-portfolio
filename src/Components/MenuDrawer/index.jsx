import React, { useState } from "react";
import { Menu, Drawer, Collapse, Typography, Image } from "antd";
import { CloseOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;
const { Text } = Typography;

import "./styles.scss";
import style from "./style.module.scss";

const ImageCarousel = ({ open, openDrawer, items }) => {
  const navigate = useNavigate();
  const [activePanels, setActivePanels] = useState([]);

  const handlePanelChange = (keys) => {
    setActivePanels(keys);
  };

  const handleDrawerClose = () => {
    openDrawer(); 
    setActivePanels([]);
  };

  return (
    <Drawer
      placement="bottom"
      closable={true}
      onClose={handleDrawerClose}
      open={open}
      height="100%"
    >
      <Collapse
        className={style.DrawerCollapse}
        activeKey={activePanels}
        onChange={handlePanelChange}
      >
        {items.map(({ header, submenu }) => (
          <Panel
            header={
              <Text className={style.MenuText}>
                {header.charAt(0).toUpperCase() + header.slice(1).toLowerCase()}
              </Text>
            }
            expandIcon={({ isActive }) =>
              isActive ? (
                <DownOutlined style={{ color: "#ffffff" }} />
              ) : (
                <RightOutlined style={{ color: "#ffffff" }} />
              )
            }
            key={header}
          >
            <Menu>
              {submenu.map(({ key, label, path }) => (
                <Menu.Item
                  key={key}
                  onClick={() => {
                    navigate(path);
                    handleDrawerClose(); 
                  }}
                >
                  <Text className={style.SubMenuText}>{label}</Text>
                </Menu.Item>
              ))}
            </Menu>
          </Panel>
        ))}
      </Collapse>
    </Drawer>
  );
};

export default ImageCarousel;
