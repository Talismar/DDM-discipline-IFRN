import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const CustomPickerDate: React.FC<{ chose: () => void }> = ({ chose }) => {
  const [date, setDate] = React.useState<Date>();

  console.log(date);

  return (
    <DateTimePicker
      dateFormat="day month year"
      maximumDate={new Date(2030, 10, 20)}
      minimumDate={new Date(2020, 10, 12)}
      value={new Date()}
      onChange={(e, value) => {
        setDate(value);
        chose();
      }}
    />
  );
};

export default CustomPickerDate;
