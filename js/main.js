// Add a parameter for the slider ID in the changeSlide function
function changeSlide(n, sliderId) {
    showSlide(slideIndex[sliderId] += n, sliderId);
  }
  
  // Add a parameter for the slider ID in the showSlide function
  function showSlide(n, sliderId) {
    const slides = document.getElementById(sliderId).getElementsByClassName("slides")[0].getElementsByTagName("img");
    const totalSlides = slides.length;
    
    if (n >= totalSlides) {
      slideIndex[sliderId] = totalSlides - 1;
    } else if (n < 0) {
      slideIndex[sliderId] = 0;
    } else {
      slideIndex[sliderId] = n;
    }
    
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex[sliderId]].style.display = "block";
  }
  
  // Initialize an object to store the slide index for each slider
  const slideIndex = {
    'sliderV': 2,
    'sliderA': 2,
    'sliderD': 2
  };
  
  // Initial display of slides for each slider
  showSlide(slideIndex['sliderV'], 'sliderV');
  showSlide(slideIndex['sliderA'], 'sliderA');
  showSlide(slideIndex['sliderD'], 'sliderD');