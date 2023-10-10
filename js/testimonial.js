
const testimonialData = [
    {
      author: "Abdul",
      quote: "gila banget sih ini",
      image: "https://unsplash.com/photos/mpw37yXc_WQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      rating: 5,
    },
    {
      author: "aziz",
      quote: "suka banget sama yang punya web",
      image: "https://unsplash.com/photos/mpw37yXc_WQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      rating: 4,
    },
    {
      author: "nashir",
      quote: "sarangheyooo",
      image: "https://unsplash.com/photos/mpw37yXc_WQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      rating: 4,
    },
    {
      author: "rudin",
      quote: " yang bikin di doain masuk surga",
      image:"https://unsplash.com/photos/mpw37yXc_WQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      rating: 2,
    },
  ];
  
  function allTestimonial() {
    let testimonialHTML = "";
  
    testimonialData.forEach(function (item) {
      testimonialHTML += `
              <div class="testimonial">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  
  allTestimonial();
  
  // filtered testimonial
  function filterTestimonial(rating) {
    let testimonialHTML = "";
  
    const testimonialFiltered = testimonialData.filter(function (item) {
      return item.rating === rating;
    });
  
    //   console.log(testimonialFiltered);
  
    if (testimonialFiltered.length === 0) {
      testimonialHTML += `<h1> Data not found! </h1>`;
    } else {
      testimonialFiltered.forEach(function (item) {
        testimonialHTML += `
              <div class="testimonial">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
      });
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }