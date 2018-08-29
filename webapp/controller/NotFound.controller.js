sap.ui.define([
	"com/mycompany/northwind/Fiori_Northwind/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.mycompany.northwind.Fiori_Northwind.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
