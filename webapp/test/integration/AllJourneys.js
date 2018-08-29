// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/arrangements/Arrangement","com/mycompany/northwind/Fiori_Northwind/test/integration/MasterJourney",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/NavigationJourney",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/NotFoundJourney",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "com.mycompany.northwind.Fiori_Northwind.view.",
		autoWait: true
	});
});
