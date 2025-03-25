const birthdayFormatter = (birthday: IBirthday) => {
  const { month, day } = birthday;

  const suffix = (day: number) => {
    if (day === 1 || day === 21 || day === 31) return "st";
    if (day === 2 || day === 22) return "nd";
    if (day === 3 || day === 23) return "rd";
    return "th";
  };

  return `${day}${suffix(day)} of ${new Date(0, month - 1).toLocaleString(
    "default",
    { month: "short" }
  )}`;
};

export default birthdayFormatter;
