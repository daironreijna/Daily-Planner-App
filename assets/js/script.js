// create a variable to display current day and time in HTML
let today = dayjs().format('dddd DD MMMM YYYY');
let time = dayjs().format('hh:mm a')

$('#currentDay').text(`${today}`);
$('#currentTime').text(`${time}`)

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

let timeHour = dayjs().format('HH')

// create an event listener that will execute a function to save description to local storage

let textAreaDescription = $("textarea");

$(".saveButton").on("click", function (event) {
    event.preventDefault();

    // columnTime to identify which row has been saved.
    var columnTime = $(this).parent().children(0).prev().html();// get the text
    $q = $(this).closest('.description').find('textarea');
    var word = $q.text();
    console.log(word);
    // create an array to save details in local storage 
    let array = [{
        "id": columnTime,
        "timeSave": dayjs().format('DD-MM-YY HH:mm'),
        "description": "working on it/in progress"
    }];
    //TODO to get description section and save into above array.

    // save to local storage
    localStorage.setItem(`description-${columnTime}`, JSON.stringify(
        array
    )
    );


});
