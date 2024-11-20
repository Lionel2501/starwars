import React from "react";
import { useTranslation } from 'react-i18next';
import Parallax from "../components/Parallax";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div>
        <Parallax />
    </div>
  );
}

export default Home;
