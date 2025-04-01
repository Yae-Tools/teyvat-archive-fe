import { format } from "date-fns";
import { IBirthday } from "~/types/enka/character.types";

const birthdayFormatter = (birthday: IBirthday) => {
  const { month, day } = birthday;

  //use date-fns to format the date
  const date = new Date(0, month - 1, day);
  const formattedDate = format(date, "do 'of' MMM");
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

export default birthdayFormatter;
