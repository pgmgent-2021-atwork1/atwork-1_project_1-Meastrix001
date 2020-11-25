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
    },
    buildUI() {
      console.log('building UI')
      this.$flowerTypesLineUp.innerHTML = this.createLineUpForFlowersTypes();
      this.$flowerSizesLineUp.innerHTML = this.createLineUpForFlowersSizes();
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
      flowerSizes.forEach(flower => {
        tempStr += `
      
       <div class="flowerinlineup">
        <img src="${flower.image}"
         <div>
          <p><a href="">${flower.title}</a> ${flower.price}</p>
         </div>
        </div>
      
      `
      });
      return tempStr;
    },
  }
  app.initialize();
})();