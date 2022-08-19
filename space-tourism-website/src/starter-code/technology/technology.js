const launchVehicule = document.querySelector('#launchVehicule');
const spaceport = document.querySelector('#spaceport');
const spaceCapsule = document.querySelector('#spaceCapsule');

const technologyNameDom = document.querySelector('#technology-name');
const technologyDescriptionDom = document.querySelector('#technology-description');
const technologyImg = document.querySelector('#technologyImg');

const technologies = {
  launchVehicule: {
    domElement: launchVehicule,
    name: "Launch vehicle",
    images: {
      portrait: "../assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "../assets/technology/image-launch-vehicle-landscape.jpg"
    },
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  spaceport: {
    domElement: spaceport,
    name: "Spaceport",
    images: {
      portrait: "../assets/technology/image-spaceport-portrait.jpg",
      landscape: "../assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  spaceCapsule: {
    domElement: spaceCapsule,
    name: "Space capsule",
    images: {
      portrait: "../assets/technology/image-space-capsule-portrait.jpg",
      landscape: "../assets/technology/image-space-capsule-landscape.jpg"
    },
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
}

Object.keys(technologies).forEach((technologyName) => {
  technologies[technologyName].domElement.addEventListener('click', () => {
    changesTechnologyInfos(technologyName);
    changeActiveTab(technologyName);
  });
});

function changesTechnologyInfos(technologyName) {
  technologyNameDom.innerHTML = technologies[technologyName].name.toUpperCase();
  technologyDescriptionDom.innerHTML = technologies[technologyName].description;
  technologyImg.src = technologies[technologyName].images.portrait;
  technologyImg.alt = technologies[technologyName].name;
}

function changeActiveTab(name) {
  Object.keys(technologies).forEach((technologyName) => {
    if (name === technologyName) {
      technologies[technologyName].domElement.classList = 'technology-nav-dot technology-current';
      return;
    } 
    technologies[technologyName].domElement.classList = 'technology-nav-dot technology-not-current';
  });
}
