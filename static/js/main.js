(() => {

  const app = {
    initialize() {
      console.log('Website Started')
      this.cacheElements();
      this.buildUI();
      this.MenuClickEventlistener()
      this.shoppingcart_menu();
    },
  

    // },
    cacheElements() {
      console.log('Elements Cached')
      this.$test_button = document.querySelector('.navigatemenu')
      this.$dropDownMenuEvent = document.querySelector('.dropdownmenu')
      this.$shoppingCartButton = document.querySelector('.shoppingcart_menu')
      this.$shoppingCartMenu = document.querySelector('.shoppingcartsidebar')
      this.$shoppingCartExitButton = document.querySelector('.shoppingcartexit')
      this.$flowerTypesLineUp = document.querySelector('.flower-types_lineup')
      this.$flowerSizesLineUp = document.querySelector('.flower-Sizes_lineup')
      this.$flowerparams = document.querySelector('.js_params-flower')
    },
    buildUI() {
      console.log('building UI')
      if (this.$flowerSizesLineUp) {       
      this.$flowerSizesLineUp.innerHTML = this.createLineUpForFlowersSizes();
      } if (this.$flowerTypesLineUp) {
      this.$flowerTypesLineUp.innerHTML = this.createLineUpForFlowersTypes();
      } if (this.$flowerparams) {
        this.$flowerparams.innerHTML = this.createHTMLForflowerParams();
      }
    },
    MenuClickEventlistener() {
      console.log('Starting hamburgermenu')
      this.$test_button.addEventListener('click', (evt) => {

        let check = this.$dropDownMenuEvent
        if (check.classList.contains('open')) {
          check.classList.remove('open');
        } else {
          check.classList.add('open');
        }
      })
      console.log('Started hamburgermenu')
    },
    shoppingcart_menu() {
      console.log('Starting shoppingcart')
        this.$shoppingCartButton.addEventListener('click', (evt) => {

        let cart = this.$shoppingCartMenu
        if (cart.classList.contains('open')) {
          cart.classList.remove('open');
        } else {
          cart.classList.add('open');
        }
        this.$shoppingCartExitButton.addEventListener('click', (evt) => {
          let exit = this.$shoppingCartMenu
          if (exit.classList.contains('open')) {
            exit.classList.remove('open')
          }  
        })
      })
      console.log('Started shoppingcart')
    },
    createLineUpForFlowersTypes() {
      let tempStr = ''
      flowerTypes.forEach(flower => {
        tempStr += `
       <div class="flowerinlineup">
          <img src="${flower.image}">
        <p><a href="">${flower.title}</a></p>
        </div>
      `
      });
      return tempStr;
    },
    createLineUpForFlowersSizes() {
      let tempStr = ''
      flowerSizes.forEach((flower, index) => {
        tempStr += `
      
       <div class="flowerinlineup" id="fil${index}">
        <img src="${flower.image}"
         <div>
          <p><a href="${flower.href}">${flower.title}</a> ${flower.price}</p>
         </div>
        </div>
      
      `
      });
      return tempStr;
    },
    createHTMLForflowerParams() {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const urlType = params.get('type')
      if (urlType !== null) {
        flowerSizes.forEach((it, index)  => {
          if (it.type === urlType) {
            this.$flowerparams.innerHTML = `
            <div id=fil${index}>
            <img src="${it.image}">
            </div>
            <div class="flower-details">
            <h2>${it.title}</h2>
            <p>€${it.priceSolo}</p>
            </div>
            `
            console.log(it.image)
            console.log(it.title)
            // this.$addButtonID = document.getElementById('submit')
            // this.$addButtonID.innerHTML += `<a href="${it.href}"><a>`
          }
        })
       return this.$flowerparams.innerHTML
      }
      else {
        this.$flowerparams.innerHTML =
         `
       <div class="flower-details-error">
       <h2>Type bloem niet gevonden...</h2>
       <p>Bloem details niet gevonden</p>
       `
     }
     return this.$flowerparams.innerHTML 
    }
  }
  app.initialize();
})();