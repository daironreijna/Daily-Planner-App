// create a variable to display current day and time in HTML
let today = dayjs().format('dddd DD MMMM YYYY');
let time = dayjs().format('hh:mm a x')

$('#currentDay').text(`${today}`);
$('#currentTime').text(`${time}`)
