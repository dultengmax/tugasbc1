// const testimonialData = [
//     {
//       author: "Abdul",
//       quote: "gila banget sih ini",
//       image: "https://images.unsplash.com/photo-1691558326149-89e131a8e44f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       rating: 5,
//     },
//     {
//       author: "aziz",
//       quote: "suka banget sama yang punya web",
//       image: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       rating: 4,
//     },
//     {
//       author: "nashir",
//       quote: "sarangheyooo",
//       image: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       rating: 4,
//     },
//     {
//       author: "rudin",
//       quote: " yang bikin di doain masuk surga",
//       image:"https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       rating: 2,
//     },
//   ];

//   function allTestimonial() {
//     let testimonialHTML = "";

//     testimonialData.forEach(function (item) {
//       testimonialHTML += `
//               <div class="testimonial">
//                   <img
//                       class="profile-testimonial"
//                       src="${item.image}"
//                       alt="profile"
//                   />
//                   <p class="quote">${item.quote}</p>
//                   <p class="author">- ${item.author}</p>
//                   <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
//               </div>
//           `;
//     });

//     document.getElementById("testimonials").innerHTML = testimonialHTML;
//   }

//   allTestimonial();

//   // filtered testimonial
//   function filterTestimonial(rating) {
//     let testimonialHTML = "";

//     const testimonialFiltered = testimonialData.filter(function (item) {
//       return item.rating === rating;
//     });

//     console.log(testimonialFiltered);

//     if (testimonialFiltered.length === 0) {
//       testimonialHTML += `<h1> Data not found! </h1>`;
//     } else {
//       testimonialFiltered.forEach(function (item) {
//         testimonialHTML += `
//               <div class="testimonial">
//                   <img
//                       class="profile-testimonial"
//                       src="${item.image}"
//                       alt="profile"
//                   />
//                   <p class="quote">${item.quote}</p>
//                   <p class="author">- ${item.author}</p>
//                   <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
//               </div>
//           `;
//       });
//     }

//     document.getElementById("testimonials").innerHTML = testimonialHTML;
//   }

const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/eeb356f848f031376c1b", true);

  xhr.onload = () => {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("error loading data");
    }
  };

  xhr.onerror = () => {
    reject("network error");
  };

  xhr.send();
});

async function allTestimonial() {
  try {
    const response = await testimonial;

    let testimonialHTML = "";
    response.forEach(function (item) {
      testimonialHTML += `
           <div class="cols ">
           <div class="card  my-2  mx-3">
           <img
           class="card-img-top" width="200" height="220"
           src="${item.image}"
           alt="profile"
           />
           <p class="quote">${item.comment}</p>
           <p class="author">- ${item.name}</p>
           <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
           </div>
           </div>
          
          `;
    });
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (error) {
    console.log(error);
  }
}

allTestimonial()

 //filtered testimonial
  async function filterTestimonial(rating) {

    try {

      const response = await testimonial

      let testimonialHTML = "";
      const testimonialFiltered = response.filter(function (item) {
        return item.rating === rating;
      });
  
      console.log(testimonialFiltered);
  
      if (testimonialFiltered.length === 0) {
        testimonialHTML += `<h1> Data not found! </h1>`;
      } else {
        testimonialFiltered.forEach(function (item) {
          testimonialHTML += `
                <<div class="cols-md-3">
                <div class="card  my-2 ">
                <img
                class="card-img-top" width="200" height="220"
                src="${item.image}"
                alt="profile"
                />
                <p class="quote">${item.comment}</p>
                <p class="author">- ${item.name}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                </div>
                </div>
               
               `;
        });
      }
  
      document.getElementById("testimonials").innerHTML = testimonialHTML;
      
    } catch (error) {
      console.log(error);
      
    }
   
  }

  


