interface SectionProps {
  width: string;
  mainContentElement: React.ReactNode;
  headerElement: React.ReactNode;
  isRightComponent?: boolean;
}
export default function renderSection(props: SectionProps): JSX.Element {
  return (
    <div
      style={{ width: `${props.width}%` }}
      className={` border ${
        props.isRightComponent ? "border-r" : "border-r-0"
      } `}
    >
      <div className="h-[54px] p-2  border border-r-0 border-t-0 border-l-0">
        {props.headerElement}
      </div>
      {props.mainContentElement}
    </div>
  );
}
