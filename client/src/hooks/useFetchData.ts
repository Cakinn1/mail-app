import { useEffect, useState } from "react";
import { resolveData } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import {
  fetchDataError,
  fetchDataStart,
  setMailData,
} from "../redux/slices/mailDataSlice";
import { MailData } from "../types/mailTypes";
import { FetchError } from "../types/errorTypes";

export default function useFetchData() {
  const dispatch = useDispatch();
  const [fallBackData, setFallBackData] = useState<MailData[]>([]);

  const { error, loading, mail } = useSelector(
    (state: RootState) => state.mailData
  );

  function handleTimeout() {
    // didn't know this but i am creating closures like this
    // helper functions should be defined as function declartion
    let dataTimeOut: boolean = false;
    let timeoutId: NodeJS.Timeout;

    const startTimeout = () => {
      timeoutId = setTimeout(() => {
        dataTimeOut = true;
      }, 15000);
    };

    const clearTheTimeout = () => clearTimeout(timeoutId);
    return { dataTimeOut, startTimeout, clearTheTimeout };
  }

  async function fetchDataWithTimeout() {
    const { clearTheTimeout, dataTimeOut, startTimeout } = handleTimeout();
    try {
      dispatch(fetchDataStart(true));
      startTimeout();
      if (dataTimeOut) {
        dispatch(fetchDataError(FetchError.TimeoutError));
      } else {
        const data = (await resolveData()) as MailData[];
        clearTheTimeout();
        dispatch(setMailData(data));
        setFallBackData(data);
        dispatch(fetchDataError(null));
      }
    } catch (error: unknown) {
      dispatch(fetchDataStart(false));
      console.error(error, "error fetching data");
      dispatch(fetchDataError(FetchError.UnknownError));
      clearTheTimeout();
    }
  }

  useEffect(() => {
    fetchDataWithTimeout();
  }, []);

  return { error, loading, mail, fallBackData };
}
