export const getAge = (birthday: string) => {
  if (!birthday) return;
  const birthdayDate = new Date(birthday);
  const ageDifMonths = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageDifMonths);
  return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
};
