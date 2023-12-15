import BandSiteAPI from "./band-site-api.js";
const bandSiteAPI = new BandSiteAPI("jayme");

const timeTableList = document.querySelector("ul.timetable__body");

async function renderTimeTableList(){
    timeTableList.innerHTML="";
    const venues = await bandSiteAPI.getShows();
    venues.forEach((venu)=>{
        const listItem = document.createElement("li")

        const dateHeading = document.createElement('h3');
        dateHeading.classList.add("label");
        dateHeading.innerHTML="DATE";

        const dateValue = document.createElement('p');
        dateValue.classList.add("event-date");
        dateValue.innerHTML=new Date(venu.date).toLocaleDateString();;

        const venuHeading = document.createElement('h3');
        venuHeading.classList.add("label");
        venuHeading.innerHTML="VENU";

 

        const venuValue = document.createElement('p');
        venuValue.innerHTML=venu.place;



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