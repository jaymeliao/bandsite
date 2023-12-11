const venues = [
    {
        date: "Mon Sept 06 2021",
        venueName: "Ronald Lane",
        location: "San Francisco",
    },
    {
        date: "Tue Sept 21 2021",
        venueName: "Pier 3 East",
        location: "San Francisco",
    },
    {
        date: "Fri Oct 15 2021",
        venueName: "View Lounge",
        location: "San Francisco",
    },
    {
        date: "Sat Nov 06 2021",
        venueName: "Hyatt Agency",
        location: "San Francisco",
    },
    {
        date: "Fri Nov 26 2021",
        venueName: "Moscow Center",
        location: "San Francisco",
    },
    {
        date: "Wed Dec 15 2021",
        venueName: "Press Club",
        location: "San Francisco",
    },
];


const timeTableList = document.querySelector("ul.timetable__body");

function renderTimeTableList(){
    timeTableList.innerHTML="";
    venues.forEach((venu)=>{
        const listItem = document.createElement("li")

        const dateHeading = document.createElement('h3');
        dateHeading.classList.add("label");
        dateHeading.innerHTML="DATE";

        const dateValue = document.createElement('p');
        dateValue.classList.add("event-date");
        dateValue.innerHTML=venu.date;

        const venuHeading = document.createElement('h3');
        venuHeading.classList.add("label");
        venuHeading.innerHTML="VENU";

 

        const venuValue = document.createElement('p');
        venuValue.innerHTML=venu.venueName;



        const locationHeading = document.createElement('h3');
        locationHeading.classList.add("label");
        locationHeading.innerHTML="LOCATION";

        const locationValue = document.createElement('p');
        locationValue.innerHTML=venu.location;

        const buyTicketButton = document.createElement('button');
        buyTicketButton.innerHTML="BUY TICKETS";
        
        listItem.appendChild(dateHeading);
        listItem.appendChild(dateValue);
        listItem.appendChild(venuHeading);
        listItem.appendChild(venuValue);
        listItem.appendChild(locationHeading);
        listItem.appendChild(locationValue);
        listItem.appendChild(buyTicketButton);
        timeTableList.appendChild(listItem);
    })


}


renderTimeTableList();