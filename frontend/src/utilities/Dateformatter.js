export const formatDate = (input) => {
const originalDateTimeString = input;

const originalDateTime = new Date(originalDateTimeString);

const options = {
  timeZone: 'Asia/Kolkata',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const formattedISTDateTime = new Intl.DateTimeFormat('en-IN', options).format(originalDateTime);

return formattedISTDateTime
}