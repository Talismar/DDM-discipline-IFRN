import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  chose: (date?: Date) => void;
}

const CustomPickerDate: React.FC<Props> = ({ chose }) => {
  return (
    <DateTimePicker
      dateFormat="day month year"
      maximumDate={new Date(2030, 10, 20)}
      minimumDate={new Date(2020, 10, 12)}
      value={new Date()}
      onChange={(e, value) => {
        chose(value);
      }}
    />
  );
};

export default CustomPickerDate;
