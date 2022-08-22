const navDouglas = document.querySelector("#crew-douglas");
const navMark = document.querySelector("#crew-mark");
const navVictor = document.querySelector("#crew-victor");
const navAnousheh = document.querySelector("#crew-anousheh");

const crewName = document.querySelector("#crew-name");
const crewRole = document.querySelector("#crew-role");
const crewBio = document.querySelector("#crew-bio");
const crewImg = document.querySelector("#crew-img");

const crew = {
  "Douglas Hurley" : {
    domElement: navDouglas,
    images: {
      png: "../assets/crew/image-douglas-hurley.png",
      webp: "../assets/crew/image-douglas-hurley.webp"
    },
    role: "Commander",
    bio: {
      text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      width: "458px"
    } 
  },
  "Mark Shuttleworth" : {
    domElement: navMark,
    images: {
      png: "../assets/crew/image-mark-shuttleworth.png",
      webp: "../assets/crew/image-mark-shuttleworth.webp"
    },
    role: "Mission Specialist",
    bio: {
      text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      width: "520px"
    } 
  },
  "Victor Glover" : {
    domElement: navVictor,
    images: {
      png: "../assets/crew/image-victor-glover.png",
      webp: "../assets/crew/image-victor-glover.webp"
    },
    role: "Pilot",
    bio: {
      text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      width: "592px"
    } 
  },
  "Anousheh Ansari" : {
    domElement: navAnousheh,
    images: {
      png: "../assets/crew/image-anousheh-ansari.png",
      webp: "../assets/crew/image-anousheh-ansari.webp"
    },
    role: "Flight Engineer",
    bio: {
      text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      width: "536px"
    } 
  }
}

Object.keys(crew).forEach((astronautName) => {
  crew[astronautName].domElement.addEventListener('click', () => {
    crewName.innerHTML = astronautName.toUpperCase();
    crewRole.innerHTML = crew[astronautName].role.toUpperCase();
    crewBio.innerHTML = crew[astronautName].bio.text;
    crewBio.style['maxWidth'] = crew[astronautName].bio.width;
    crewImg.src = crew[astronautName].images.webp;
    crewImg.alt = `${astronautName} Image`;
    changeActiveNav(astronautName);
  });
});

function changeActiveNav(astronautName) {
  Object.keys(crew).forEach((name) => {
    if (name === astronautName) {
      crew[name].domElement.classList = 'nav-dot crew-active';
      return;
    } 
    crew[name].domElement.classList = 'nav-dot crew-inactive';
  });
}