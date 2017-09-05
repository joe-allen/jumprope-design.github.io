var vue = new Vue({
  el: "#app",
  data: {
    message: "Type Something",
    menuOpen: false,
    dropDownOpen: false,
    showReport: false,
    showProduct: false,
    showCityDropDown: false,
    showProductsDropDown: false,
    showCalendarMes: true,
    isLoading: true,
    mainTitle: "Alarmas"
  },

  mounted: function() {
  },

  computed: {
  },

  methods: {
  	showMenu: function() {
  		// store instance of this
  		component = this;

  		component.menuOpen = true;
  		component.showProductsDropDown = false;
  		component.showCityDropDown = false;
  	},

  	hideMenu: function() {
  		// store instance of this
  		component = this;

  		component.menuOpen = false;
  	},

  	hideDropDown: function() {
  		// store instance of this
  		component = this;

  		component.dropDownOpen = false;
  		component.showProductsDropDown = false;
  		component.showCityDropDown = false;
  	},

  	selectRow: function(event) {
  		// store instance of this
  		component = this;
  		var parentEl = event.target.parentElement;
  		var nextEl = event.target.nextElementSibling;

  		if(parentEl.classList.contains('is-selected')) {
  			parentEl.classList.remove('is-selected');
  		}
  		else {
  			parentEl.classList.add('is-selected');
  		}

  	},

  	toggleReport: function(e) {
  		// store instance of this
  		component = this;

  		if(component.mainTitle == "Reporte") {
  			component.mainTitle = "Alarmas";
  		}
  		else {
  			component.mainTitle = "Reporte";
  		}
  		component.showReport = !component.showReport;

  	},

  	toggleProduct: function(e) {
  		// store instance of this
  		component = this;
  		component.showProduct = !component.showProduct;

  	},

  	toggleCityDropDown: function() {
  		// store instance of this
  		component = this;

  		component.showCityDropDown = !component.showCityDropDown;
  		component.dropDownOpen = !component.dropDownOpen;
  		component.showProductsDropDown = false;
  	},

  	toggleProductsDropDown: function() {
  		// store instance of this
  		component = this;

  		component.showProductsDropDown = !component.showProductsDropDown;
  		component.dropDownOpen = !component.dropDownOpen;
  		component.showCityDropDown = false;
  	},

  	updateCityMainTitle: function(e) {
	  	// store instance of this
	  	component = this;

	  	component.mainTitle = e.target.innerHTML;
	  	component.hideDropDown();
  	},

  	updateProductMainTitle: function(e) {
	  	// store instance of this
	  	component = this;

	  	component.mainTitle = e.target.innerHTML;
	  	component.hideDropDown();

	  	component.showProduct = true;
  	},

  	toggleCalendar: function() {
  		// store instance of this
  		component = this;

  		if(component.showCalendarMes) {
  			component.showCalendarMes = false;
  		}
  		else {
  			component.showCalendarMes = true;
  		}

  	}
  }
});