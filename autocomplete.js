let availableKeywords = [
    "3-4 sleeve tops online",
    "Buy 925 silvers",
    "Abayas for sale",
    "Accessories shop near me",
    "Acessories online store",
    "Best acrylics for painting",
    "Activewears for women",
    "Adhesive labels suppliers",
    "Adidas shoes on sale",
    "Adults clothing stores",
    "Anal beads for beginners",
    "Anal dildos with vibration",
    "Anal sundries online",
    "Anal toys for couples",
    "Anal vibrators for men",
    "Stylish ankle boots for women",
    "Trendy anklets for summer",
    "Shop for anoraks online",
    "Aphrodisiacs for enhancing pleasure",
    "Affordable apparels for all",
    "Best appliances for the kitchen",
    "Buy aprons for cooking",
    "Benefits of argan oils",
    "Armbands for swimming",
    "Aromas for relaxation",
    "Latest collection of Asics shoes",
    "Athleisure wear for women",
    "Athleisure outfits for men",
    "Athletics equipment store",
    "Avengers merchandise online",
    "Shop for 3-4 sleeve tops",
    "Explore 925 silvers jewelry",
    "Elegant abayas for special occasions",
    "Must-have accessories for fashionistas",
    "Top-rated acrylics for painting",
    "Activewears for fitness enthusiasts",
    "Adhesive labels for packaging",
    "Latest Adidas collection",
    "Fashionable clothing for adults",
    "Beginner's guide to anal beads",
    "Exciting anal dildos selection",
    "Find anal sundries online",
    "Explore a variety of anal toys",
    "High-quality anal vibrators",
    "Stylish ankle boots for every outfit",
    "Trendy anklets for a summer look",
    "Stay warm with stylish anoraks",
    "Discover aphrodisiacs for a romantic evening",
    "Shop for trendy apparels",
    "Best appliances for your home"
  ]



  const resultbox = document.querySelector(".result-box");
  const inputBox = document.getElementById("input-box");


  inputBox.onkeyup = function(){
    resultbox.style.display = "block";
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword) => {
            return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
    }
    display(result)
    if(!result.length){
        resultbox.innerHTML = "";
    }
  }

  function display(result){
    const content = result.map((list) => {
        return "<li onClick=selectInput(this)>" + list + "</li>";
    });

    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>"
  }

    function selectInput(list){
        let selectInput = list.textContent;
        inputBox.value = selectInput;
        resultbox.style.display = "none";
    }

    