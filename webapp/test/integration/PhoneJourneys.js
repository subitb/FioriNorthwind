sap.ui.define([
	"sap/ui/test/Opa5",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/arrangements/Arrangement",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/NavigationJourneyPhone",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/NotFoundJourneyPhone",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "com.mycompany.northwind.Fiori_Northwind.view.",
		autoWait: true
	});
});
