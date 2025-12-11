import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";

export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
    </div>
  );
}
