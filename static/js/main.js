(() => {

  const app = {
    initialize() {
      console.log('Website Started')
      this.indexChecker();
      this.cacheElements();
      this.buildUI();
      this.MenuClickEventlistener()
    },
    indexChecker() {

    },
    cacheElements() {
      console.log('Elements Cached')
      this.$test_button = document.querySelector('.navigatemenu')
      this.$dropDownMenuEvent = document.querySelector('.dropdownmenu')
      this.$flowerTypesLineUp = document.querySelector('.flower-types_lineup')
      this.$flowerSizesLineUp = document.querySelector('.flower-Sizes_lineup')
      this.$flowerparams = document.querySelector('.js_params-flower')
    },
    buildUI() {
      console.log('building UI')
      this.$flowerTypesLineUp.innerHTML = this.createLineUpForFlowersTypes();
      this.$flowerSizesLineUp.innerHTML = this.createLineUpForFlowersSizes();
      this.$flowerparams.innerHTML = this.createHTMLForflowerParams();
    },

    MenuClickEventlistener() {
      this.$test_button.addEventListener('click', (evt) => {

        let check = this.$dropDownMenuEvent
        if (check.style.visibility === "visible") {
          check.style.visibility = "hidden";
        } else {
          check.style.visibility = "visible";
        }
      })
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
            <img src="${it.image}">
            <div class="flower-details">
            <h2>${it.title}</h2>
            <p>€${it.priceSolo}</p>
            </div>
            `
            console.log(it.image)
            console.log(it.title)
          }
        })
       return this.$flowerparams.innerHTML
      }
    }
  }
  app.initialize();
})();