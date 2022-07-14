window.onload = () => {
  const moon = document.querySelector('#moon');
  const mars = document.querySelector('#mars');
  const europa = document.querySelector('#europa');
  const titan = document.querySelector('#titan');

  const planets = { moon, mars, europa, titan }

  const planetImg = document.querySelector('#planetImg');

  moon.addEventListener('click', () => {
    planetImg.src = '../assets/destination/image-moon.png';
    changeActiveTab("moon");
  });

  mars.addEventListener('click', () => {
    planetImg.src = '../assets/destination/image-mars.png';
    changeActiveTab("mars");
  });

  europa.addEventListener('click', () => {
    planetImg.src = '../assets/destination/image-europa.png';
    changeActiveTab("europa");
  });

  titan.addEventListener('click', () => {
    planetImg.src = '../assets/destination/image-titan.png';
    changeActiveTab("titan");
  });

  function changeActiveTab(name) {
    console.log(Object.keys(planets));
    Object.keys(planets).forEach((planetName) => {
      planets[planetName].classList = name === planetName ? 'planet-current' : 'planet-not-current';
    })
  }
}