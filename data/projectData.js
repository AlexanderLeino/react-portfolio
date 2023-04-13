
import netflixGrillPic from "../assets/netflix-grill.png";
import blackJack from "../assets/blackJack.png";
import weather from '../assets/weather-app-picture.PNG'
import techBlog from '../assets/tech-pic.PNG'
import pokemon from '../assets/pokemon-portfolio.png'


export const ProjectData = [
  {
    title: "Netflix & Grill",
    description:
      "This was the culmination of mine and my bootcamp cohorts first project we worked on togther. The goal of the project was to help a person or a group of people decide what to eat and watch!",
    deploy: "https://alexanderleino.github.io/Netflix-and-Grill/",
    repository: "https://github.com/AlexanderLeino/Netflix-and-Grill",
    technologies: ["HTML", "CSS", "Tailwind.css", "Javascript"],
    image: netflixGrillPic,
    tags: ["frontEnd", "all"],
    deploy: "https://alexanderleino.github.io/Netflix-and-Grill/",
    code: "https://github.com/AlexanderLeino/Netflix-and-Grill",
  },
  {
    title: "Black Jack",
    description:
      "The goal of the project was to focus on writing dense programming logic when I first started writing code as well as focus on heavy DOM manipulation by creating each individual card using BootStrap, CSS, vanilla javascript. This project is still a work in progress. Currently working on making the ui responsive for devices with a smaller screen size than a laptop. Have fun! ",
    technologies: ["HTML", "Javascript", "CSS"],
    image: blackJack,
    tags: ["frontEnd", "all"],
    deploy: "https://alexanderleino.github.io/blackjack-game/",
    code: "https://github.com/AlexanderLeino/blackjack-game",
  },
 
  {
    title: "Weather Dashboard",
    description:
      "I implemented the open weather api to obtain daily, weekly and historical forecasts. I made a simple express server to hide open weather api key. I used moment js to determine time of day based on the specific location. All components were built from scatch with styled components",
    deploy: "https://open-weather-react-app.herokuapp.com/",
    code: "https://github.com/AlexanderLeino/open-weather-react",
    repository: "https://github.com/AlexanderLeino/open-weather-react",
    technologies: ["React", "Node", "Express", "React" ,'ChartJs', "Moment.js", "Styled"
    ],
    image: weather,
    tags: ['frontEnd', 'all', 'fullStack']
  },
  {
    title: 'Tech Blog',
    description: 'One of my bootcamp project whereas we were asked to create a Full Stack Blog platform. Its is a very rudimentary implemenation where a user can view others blog posts, as well as login and create their own blog posts. A user can also update and delete their previous blog posts',
    deploy: "https://peaceful-lake-82679.herokuapp.com/",
    repository: 'https://github.com/AlexanderLeino/techblog-working',
    code: 'https://github.com/AlexanderLeino/techblog-working',
    technologies: [ "Javascript", "CSS", "MySql", "Sequelize","Handlebars.js"],
    image: techBlog,
    tags: ['frontEnd', 'all', 'fullStack']
  },
  {
    title: "Pokemon Collection",
    description: "I created a full stack application which a user can enter a few details about a specific pokemon card then the app gets the card price and picture from price charting.com. Then you can filter and keep track the value of all the cards in your collection",
    repository: 'https://github.com/AlexanderLeino/vite-pokemon-collection',
    technologies: ["React", "Tailwind", "Typescript", "Mongoose", "MongoDb", "Express", "Node"],
    image: pokemon,
   
  }

];