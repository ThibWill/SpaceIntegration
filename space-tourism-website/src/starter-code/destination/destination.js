const moonDom = document.querySelector('#moon');
const marsDom = document.querySelector('#mars');
const europaDom = document.querySelector('#europa');
const titanDom = document.querySelector('#titan');

const planetNameDom = document.querySelector('#planet-name');
const planetDescriptionDom = document.querySelector('#planet-description');
const planetDistanceDom = document.querySelector('#planet-distance');
const planetTimeDom = document.querySelector('#planet-time');

const planetImg = document.querySelector('#planetImg');

const planets = {
  moon: {
    domElement: moonDom,
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. 
    While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: "384,400 KM",
    travelTime: "3 DAYS"
  },
  mars: {
    domElement: marsDom,
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. 
    It’s two and a half times the size of Everest!`,
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS"
  },
  europa: {
    domElement: europaDom,
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. 
    With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: "628 MIL. KM",
    travelTime: "3 YEARS"
  },
  titan: {
    domElement: titanDom,
    description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). 
    As a bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS"
  },
}

Object.keys(planets).forEach((planetName) => {
  planets[planetName].domElement.addEventListener('click', () => {
    changePlanetImg(`../assets/destination/image-${planetName}.png`, planetName);
    changeActiveTab(planetName);
  });
});

function changePlanetImg(urlImage, altTitle) {
  planetImg.src = urlImage;
  planetImg.alt = altTitle;
}

function changeActiveTab(name) {
  Object.keys(planets).forEach((planetName) => {
    if (name === planetName) {
      planets[planetName].domElement.classList = 'planet-current';
      planetNameDom.innerHTML = planetName.toUpperCase();
      planetDescriptionDom.innerHTML = planets[planetName].description;
      planetDistanceDom.innerHTML = planets[planetName].distance;
      planetTimeDom.innerHTML = planets[planetName].travelTime;
      return;
    } 
    planets[planetName].domElement.classList = 'planet-not-current';
  });
}
