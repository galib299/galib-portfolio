import React, { useState, useEffect } from "react";
import { Layout, Dropdown, Menu, Typography, Image, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import style from "./style.module.scss";
const { Header } = Layout;
const { Text } = Typography;
import { MenuDrawer } from "../../Components";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    {
      header: "ABOUT US",
      submenu: [
        { key: "whoWeAre", label: "Who We Are", path: "/whoweare" },
        { key: "ourStory", label: "Our Story", path: "/ourstory" },
        { key: "ourMission", label: "Our Mission", path: "/ourmission" },
        { key: "secretaryGeneral", label: "About Secretary-General", path: "/secretarygeneral" },
        { key: "dcAward", label: "DC Award", path: "/dcaward" },
      ],
    },
    {
      header: "ACTIVITIES",
      submenu: [
        { key: "highLevelMeetings", label: "High Level Meetings", path: "/highlevelmeetings" },
        { key: "diplomatMeetings", label: "Diplomat Meetings", path: "/diplomatmeetings" },
        { key: "debateSessions", label: "Debate Sessions", path: "/debatesessions" },
        { key: "workshops", label: "Workshops and Seminars", path: "/workshops" },
        { key: "networkingEvents", label: "Networking Events", path: "/networkingevents" },
        { key: "culturalExchange", label: "Cultural Exchange Programs", path: "/culturalexchange" },
      ],
    },
    {
      header: "DIPLOMACY COMMUNITY",
      submenu: [
        { key: "constitution", label: "Constitution", path: "/constitution" },
        { key: "internalInterests", label: "Internal Interests", path: "/internalinterests" },
        {
          key: "internationalInterests",
          label: "International Interests",
          path: "/internationalinterests",
        },
        { key: "structure", label: "Structure", path: "/structure" },
        { key: "stakeholders", label: "Our Stakeholders", path: "/stakeholders" },
        { key: "youngLeaders", label: "Young Leaders Platform", path: "/youngleaders" },
      ],
    },
    {
      header: "PUBLICATIONS",
      submenu: [
        { key: "journals", label: "Journals", path: "/journals" },
        { key: "articles", label: "Articles", path: "/articles" },
        { key: "becomeAuthor", label: "Become an Author", path: "/becomeauthor" },
        { key: "shareResearch", label: "Share Your Research", path: "/shareresearch" },
      ],
    },
    {
      header: "NEWSROOM",
      submenu: [
        { key: "event1", label: "Event 1", path: "/event1" },
        { key: "event2", label: "Event 2", path: "/event1" },
        { key: "event3", label: "Event 3", path: "/event1" },
        { key: "event4", label: "Event 4", path: "/event1" },
      ],
    },
  ];

  const openDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoWidth = location.pathname === "/" ? "100%" : "80%";
  const marginLeft = logoWidth === "100%" ? "15px" : "-15px";

  return (
    <Header className={style.Header}>
      {screenSize?.width > 769 ? (
        <div className={style.NavBar}>
          {menuItems.map(({ header, submenu }) => (
            <Dropdown
              key={header}
              overlay={
                <Menu>
                  {submenu.map(({ key, label, path }) => (
                    <Menu.Item key={key} onClick={() => navigate(path)}>
                      {label}
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomCenter"
            >
              <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
                {header}
              </Text>
            </Dropdown>
          ))}
        </div>
      ) : (
        <MenuDrawer items={menuItems} open={drawerVisible} openDrawer={openDrawer} />
      )}
    </Header>
  );
};

export default Index;
