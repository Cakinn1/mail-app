import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import renderSection from "./components/RenderSection";
import LeftPanelHeader from "./features/home/LeftPanel/LeftPanelHeader";
import LeftPanel from "./features/home/LeftPanel/LeftPanel";
import EmailHeader from "./features/home/Email/EmailHeader";
import useFetchData from "./hooks/useFetchData";
import { MailData } from "./types/mailTypes";
import EmailPanelRight from "./features/home/Email/EmailPanelRight";
import Trash from "./pages/Trash";
import Archive from "./features/archive/Archive";

export default function App() {
  const [isSelected, setIsSelected] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedMailId, setSelectedMailId] = useState<number | null>(null);
  const { mail } = useFetchData();
  const findMailById = (): MailData | undefined => {
    if (!homeProps.selectedMailId) {
      return mail.find((item) => item.id === 0);
    }
    return mail.find((item) => item.id === homeProps.selectedMailId);
  };

  const homeProps = {
    selectedMailId,
    setInputValue,
    isSelected,
    setIsSelected,
    setSelectedMailId,
    inputValue,
  };
  return (
    <div className="min-h-screen p-2/  bg-black text-white flex flex-1">
        <Router>
          {renderSection({
            headerElement: <LeftPanelHeader />,
            mainContentElement: <LeftPanel setInputValue={setInputValue} />,
            width: "20",
          })}
          <Routes>
            <Route path="/" element={<Home homeProps={homeProps} />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
          {renderSection({
            headerElement: <EmailHeader />,
            mainContentElement: (
              <EmailPanelRight
                findMailById={findMailById}
                setSelectedMailId={setSelectedMailId}
                selectedMailId={selectedMailId}
              />
            ),
            width: "40",
            isRightComponent: true,
          })}
        </Router>
    </div>
  );
}
