// ----------------------------------------------------------------
// Plants Array
// ----------------------------------------------------------------

const plants = [
    {
      "name": "Fikus Tree",
      "price": 350,
      "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor.",
      "image": "plant1.png"
    },
    {
      "name": "White Sprite Succulent",
      "price": 200,
      "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
      "image": "plant2.png"
    },
    {
      "name": "Snake Plant",
      "price": 400,
      "description": "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
      "image": "plant3.png"
    },
    {
      "name": "Parlour Palm",
      "price": 350,
      "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
      "image": "plant4.png"
    },
    {
      "name": "Japanese Maple",
      "price": 1200,
      "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
      "image": "plant5.png"
    }
  ];


  
  // ----------------------------------------------------------------
  // When loads
  // ----------------------------------------------------------------
  
  $(document).ready(function(){
  
      console.log("Hello world");
  
      // -----------------------------------------
      // Home Page
  
      // When loads, animate the hero image
      $(".hero-image").animate({top: '-=100px'});
  
      // -----------------------------------------
      // Browse Page
  
      loadPlants();

      // -----------------------------------------
      // Wishlist Page

      $(".table").animate({right: '-=100px'});
  
  }); 


  
  // ----------------------------------------------------------------
  // Load all plants
  // ----------------------------------------------------------------
  
  function loadPlants() {
  
      // Load and display all the plants
      for (let i = 0; i < plants.length; i++) {
        const plant = plants[i];
        
        console.log(plant);
  
        // 1: Select plants container and add the current array plant to it
        $("#plantsContainer").append($("#plantCardTemplate").html());
  
        // 2: Create a variable that contains the most recently added plant card
        let currentChild = $("#plantsContainer").children().eq(i+1);
  
        // 3: Set the content for the plant card from the plants list
        $(currentChild).find(".card-img-top").attr('src','assets/' + plant.image);
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text('R' + plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
  
        // 4: Hide the description text from the plant card
        $(currentChild).find("#descriptionText").hide();
  
      }
  }

  
  // ----------------------------------------------------------------
  // When the card is clicked
  // ----------------------------------------------------------------
  
  $("#plantsContainer").on('click', '.card', function(){
  
    // Toggle the price & description text
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additional content
    $(this).find(".card-img-top").toggleClass("small");
  
  });


  // ----------------------------------------------------------------
  // When remove icon is clicked
  // ----------------------------------------------------------------

  $(document).on('click', ".delete", function(){
    $(this).parents("tr").remove();
    $(".add-new").removeAttr("disabled");
  })




  


  // ----------------------------------------------------------------
  // Notes
  // ----------------------------------------------------------------

  // .element selects class
  // (no dot)element selects tag
  // #element selects id
  // const = can't change info
  // let = variable 

  // for loops-
  // i = 0 creating a new variable and setting to 0
  // i < arrayPlants.length  tells for loop how many times to run (i < 5)(is question) check how many times it has run up to the i++
  // i++ its shorthand for i = + 1; ,,,1 (5<5) stop running
