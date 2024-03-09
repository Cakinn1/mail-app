import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { filterByCategory } from "../../../redux/slices/mailDataSlice";
import useFetchData from "../../../hooks/useFetchData";

export default function EmailHeader() {
  const renderIcons = (): JSX.Element => {
    return <div></div>;
  };

  const dispatch = useDispatch();
  const { mail } = useFetchData();
  useEffect(() => {
    console.log(mail);
  }, [mail]);
  return (
    <div>
     dsad
    </div>
  );
}
