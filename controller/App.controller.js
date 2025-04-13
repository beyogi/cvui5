sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("cvui5.controller.App", {
        onInit: function () {
            const oData = {
                name: "Hicran Korkmaz Gürgüc",
                contact: {
                    email: "korkmazhicran@hotmail.com",
                    phone: "0176 / 4264 4840",
                    address: "Reilinger Str. 3/5, D-68809 Neulußheim"
                },
                profile: "Ausgezeichnete Erfahrung in der Software-Entwicklung für umfangreiche Webanwendungen. Ehrenamtlichen Lehrerin für Informatik und Mathematik.",
                experience: [
                    {
                        position: "Software-Entwicklungsingenieurin",
                        company: "WINGCON AG (Langenargen)",
                        dates: "10/2008 – 10/2022"
                    },
                    {
                        position: "Werkstudentin Web-Applikationen",
                        company: "Ünipa A.Ş. (Izmir)",
                        dates: "09/2007 – 07/2008"
                    },
                    {
                        position: "Informatiklehrerin",
                        company: "Markus-Schule",
                        dates: "10/2022 – heute"
                    }
                ],
                education: [
                    {
                        degree: "Master of Education",
                        institution: "Ege Universität",
                        dates: "09/2015 – 07/2016"
                    },
                    {
                        degree: "Bachelor of Science in Mathematik und Informatik",
                        institution: "Ege Universität",
                        dates: "09/2003 – 07/2008"
                    }
                ],
                achievements: [
                    {
                        title: "Sencha Mobile App Wettbewerb - Gewinner",
                        date: "November 2010"
                    },
                    {
                        title: "Vodafone Türkei Mobile Widget Wettbewerb - Gewinner",
                        date: "August 2010"
                    }
                ],
                languages: [
                    { language: "Türkisch", level: "Muttersprache" },
                    { language: "Englisch", level: "Professionelle Arbeitskenntnisse" },
                    { language: "Deutsch", level: "B2 (Telc)" }
                ],
                skills: "JavaScript, TypeScript, HTML5, CSS3, ExtJS, jQuery, PHP, PostgreSQL, MySQL",
                social: [
                    { role: "Yogatrainerin", place: "Athleten Club Neulußheim" }
                ]
            };

            this.getView().setModel(new sap.ui.model.json.JSONModel(oData));
        }
    });
});
	