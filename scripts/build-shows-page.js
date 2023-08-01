const concertsData = [
    {
       Date: "Mon Sept 06 2021",
       Venue: "Ronald Lane",
       Location: "San Francisco, CA" 
    },
    {
        Date: "Tue Sept 21 2021",
        Venue: "Pier 3 East",
        Location: "San Francisco, CA" 
    },
    {
        Date: "Fri Oct 15 2021",
        Venue: "View Lounge",
        Location: "San Francisco, CA"
    },
    {
        Date: "Sat Nov 06 2021",
        Venue: "Hyatt Agency",
        Location: "San Francisco, CA"
    },
    {
        Date: "Fri Nov 26 2021",
        Venue:"Moscow Center",
        Location: "San Francisco, CA"
    },
    {
        Date: "Wed Dec 15 2021",
        Venue:"Press Club",
        Location: "San Francisco, CA"
    }
]

const showsSection = document.querySelector(".shows");
const showsHeader  = document.createElement("h1");
showsHeader.classList.add("shows__header");
showsHeader.textContent = "Shows";
showsSection.appendChild(showsHeader);

const showsListings = document.createElement("div");
showsListings.classList.add("shows__listings");
showsSection.appendChild(showsListings);

const tableHeader = document.createElement("div");
tableHeader.setAttribute("id", "table--header");
showsListings.appendChild(tableHeader);
const pOne = document.createElement("p");
pOne.classList.add("shows__text--one");
pOne.textContent = "DATE"
tableHeader.appendChild(pOne);
const pTwo = document.createElement("p");
pTwo.classList.add("shows__text--one");
pTwo.textContent = "VENUE"
tableHeader.appendChild(pTwo);
const pThree = document.createElement("p");
pThree.classList.add("shows__text--one");
pThree.textContent = "LOCATION"
tableHeader.appendChild(pThree);

const showsContOne = document.createElement("div");
showsContOne.classList.add("shows__container");
showsContOne.setAttribute("id", "cont--one");
showsListings.appendChild(showsContOne);
const pFour = document.createElement("p");
const pFive = document.createElement("p");
const pSix = document.createElement("p");
const buttonOne = document.createElement("button");
pFour.classList.add("shows__text--two");
pFive.classList.add("shows__text--three");
pSix.classList.add("shows__text--three");
buttonOne.classList.add("tickets--button");
pFour.textContent = concertsData[0].Date;
pFive.textContent = concertsData[0].Venue;
pSix.textContent = concertsData[0].Location;
buttonOne.textContent = "BUY TICKETS";
showsContOne.appendChild(pFour);
showsContOne.appendChild(pFive);
showsContOne.appendChild(pSix);
showsContOne.appendChild(buttonOne);

const showsContTwo = document.createElement("div");
showsContTwo.classList.add("shows__container");
showsContTwo.setAttribute("id", "cont--two");
showsListings.appendChild(showsContTwo);
const pSeven = document.createElement("p");
const pEight = document.createElement("p");
const pNine = document.createElement("p");
const buttonTwo = document.createElement("button");
pSeven.classList.add("shows__text--two");
pEight.classList.add("shows__text--three");
pNine.classList.add("shows__text--three");
buttonTwo.classList.add("tickets--button");
pSeven.textContent = concertsData[1].Date;
pEight.textContent = concertsData[1].Venue;
pNine.textContent = concertsData[1].Location;
buttonTwo.textContent = "BUY TICKETS";
showsContTwo.appendChild(pSeven);
showsContTwo.appendChild(pEight);
showsContTwo.appendChild(pNine);
showsContTwo.appendChild(buttonTwo);

const showsContThree = document.createElement("div");
showsContThree.classList.add("shows__container");
showsContThree.setAttribute("id", "cont--three");
showsListings.appendChild(showsContThree);
const pTen = document.createElement("p");
const pEleven = document.createElement("p");
const pTwelve = document.createElement("p");
const buttonThree = document.createElement("button");
pTen.classList.add("shows__text--two");
pEleven.classList.add("shows__text--three");
pTwelve.classList.add("shows__text--three");
buttonThree.classList.add("tickets--button");
pTen.textContent = concertsData[2].Date;
pEleven.textContent = concertsData[2].Venue;
pTwelve.textContent = concertsData[2].Location;
buttonThree.textContent = "BUY TICKETS";
showsContThree.appendChild(pTen);
showsContThree.appendChild(pEleven);
showsContThree.appendChild(pTwelve);
showsContThree.appendChild(buttonThree);

const showsContFour = document.createElement("div");
showsContFour.classList.add("shows__container");
showsContFour.setAttribute("id", "cont--four");
showsListings.appendChild(showsContFour);
const pThirteen = document.createElement("p");
const pFourteen = document.createElement("p");
const pFifteen = document.createElement("p");
const buttonFour = document.createElement("button");
pThirteen.classList.add("shows__text--two");
pFourteen.classList.add("shows__text--three");
pFifteen.classList.add("shows__text--three");
buttonFour.classList.add("tickets--button");
pThirteen.textContent = concertsData[3].Date;
pFourteen.textContent = concertsData[3].Venue;
pFifteen.textContent = concertsData[3].Location;
buttonFour.textContent = "BUY TICKETS";
showsContFour.appendChild(pThirteen);
showsContFour.appendChild(pFourteen);
showsContFour.appendChild(pFifteen);
showsContFour.appendChild(buttonFour);

const showsContFive = document.createElement("div");
showsContFive.classList.add("shows__container");
showsContFive.setAttribute("id", "cont--five");
showsListings.appendChild(showsContFive);
const pSixteen = document.createElement("p");
const pSeventeen = document.createElement("p");
const pEighteen = document.createElement("p");
const buttonFive = document.createElement("button");
pSixteen.classList.add("shows__text--two");
pSeventeen.classList.add("shows__text--three");
pEighteen.classList.add("shows__text--three");
buttonFive.classList.add("tickets--button");
pSixteen.textContent = concertsData[4].Date;
pSeventeen.textContent = concertsData[4].Venue;
pEighteen.textContent = concertsData[4].Location;
buttonFive.textContent = "BUY TICKETS";
showsContFive.appendChild(pSixteen);
showsContFive.appendChild(pSeventeen);
showsContFive.appendChild(pEighteen);
showsContFive.appendChild(buttonFive);

const showsContSix = document.createElement("div");
showsContSix.classList.add("shows__container");
showsContSix.setAttribute("id", "cont--six");
showsListings.appendChild(showsContSix);
const pNineteen = document.createElement("p");
const pTwenty = document.createElement("p");
const pTwentyOne = document.createElement("p");
const buttonSix = document.createElement("button");
pNineteen.classList.add("shows__text--two");
pTwenty.classList.add("shows__text--three");
pTwentyOne.classList.add("shows__text--three");
buttonSix.classList.add("tickets--button");
pNineteen.textContent = concertsData[5].Date;
pTwenty.textContent = concertsData[5].Venue;
pTwentyOne.textContent = concertsData[5].Location;
buttonSix.textContent = "BUY TICKETS";
showsContSix.appendChild(pNineteen);
showsContSix.appendChild(pTwenty);
showsContSix.appendChild(pTwentyOne);
showsContSix.appendChild(buttonSix);

// showsContOne.onclick = function () {
//     if (showsContTwo.backgroundColor === "#e1e1e1") {
//         showsContTwo.backgroundColor = "#afafaf";
//     }
// document.getElementById("cont--one").style.backgroundColor = "#e1e1e1";
// };
// showsContTwo.onclick = function () {
//     document.getElementById("cont--two").style.backgroundColor = "#e1e1e1";
//     };