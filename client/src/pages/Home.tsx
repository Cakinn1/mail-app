import InboxHeader from "../features/home/Inbox/InboxHeader";
import Inbox from "../features/home/Inbox/Inbox";
import renderSection from "../components/RenderSection";
import DynamicHeader from "../components/DynamicHeader";
import InboxProvider from "../context/InboxProvider";

interface Props {
  homeProps: {
    selectedMailId: number | null;
    setInputValue: (value: string) => void;
    isSelected: string;
    setIsSelected: (value: string) => void;
    setSelectedMailId: (value: number | null) => void;
    inputValue: string;
  };
}

export default function Home(props: Props): JSX.Element {
  const { homeProps } = props;

  return (
    <>
      <InboxProvider>
        {renderSection({
          headerElement: <DynamicHeader />,
          mainContentElement: (
            <Inbox
              setSelectedMailId={homeProps.setSelectedMailId}
              inputValue={homeProps.inputValue}
              setInputValue={homeProps.setInputValue}
            />
          ),
          width: "40",
        })}
      </InboxProvider>
    </>
  );
}
