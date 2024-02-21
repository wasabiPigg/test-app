// import { FaCalendarAlt } from "react-icons/fa";
// export const DatePicker = () => {
//     return (
//         <>
//         <form className="row">
//         <label htmlFor="date" className="col-1 col-form-label">Date</label>
//         <div className="col-5">
//           <div className="input-group date" id="datepicker">
//             <input type="text" className="form-control" id="date"/>
//             <span className="input-group-append">
//               <span className="input-group-text bg-light d-block">
//                 <FaCalendarAlt />
//               </span>
//             </span>
//           </div>
//         </div>
//       </form>
//       </>
//     )
// }

// カレンダーを表示する
//react-datepickerを使って実装
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
//日本語化
registerLocale("ja", ja);

export const Calendar = () => {
  //初期値は当日
  const initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);

  //指定できる日付は31日後まで
  const endDate = new Date(initialDate);
  endDate.setDate(endDate.getDate() + 31);

  console.log("startDate = " + startDate);
  console.log("endDate = " + endDate);
  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <div className={"ReservationCalendar"}>
      <p className="dateText">日付:</p>
      <div className="calendar">
        <DatePicker
          locale="ja"
          selected={startDate}
          dateFormatCalendar="yyyy年 MM月"
          dateFormat="yyyy/MM/dd"
          onChange={handleChange}
          minDate={startDate}
          maxDate={endDate}
        />
      </div>
    </div>
  );
};
