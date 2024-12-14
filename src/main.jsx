import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { Helmet } from "react-helmet";
import App from "./App.jsx";
import "./index.css";

const ogData = {
  title: "Diplomacy community",
  description: "Diplomacy community website",
  url: "https://diplomacycommunity.org/",
  siteName: "diplomacycommunity",
};

const canonicalUrl = "https://diplomacycommunity.org/";

createRoot(document.getElementById("root")).render(
  <ConfigProvider>
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta name="description" content={ogData.description} />
    </Helmet>
    <App />
  </ConfigProvider>
);
