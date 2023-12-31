/*******************************************************************************
*
* V I T A L C O N T R O L    D E M O N S T R A T I O N    A P P
*
*                                             specification: Urban GmbH & Co. KG
*                                         programming: Tara Systems GmbH, Munich
*
********************************************************************************
*
* Urban VitalControl is a novel equipment for digital health control of farm
* animals suitable for a variety of documentation and monitoring tasks.
*
* The device combines an RFID reader for animal transponders with a rectal
* fever thermometer. Data transfer and exchange is possible via USB, WiFi
* or bluetooth
*
* VitalControl device is developed and distributed by Urban GmbH & Co.KG:
* https://www.urbanonline.de
*
* For further information visit the product home page:
* https://www.vitalcontrol.de
*
* This file is part of demonstration application developed in order to be able
* to demonstrate the use of the device to both interested parties and 
* prospective customers.
*
* The demonstration application is browser based and can be run from inside any
*  WebGL enabled web browser (Firefox, Chrome, Edge, ...):
*
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.abu)throw new Error("The unit file 'Months.js' included twice!");index.
abu=(function(){var A=index;var C={};

C.AzV={0:"April",8:"Avril",15:"\u0410\u043F\u0440\u0435\u043B\u044C",16:"Abril"};
C.Az3={0:"August",8:"Ao\xFBt",15:"\u0410\u0432\u0433\u0443\u0441\u0442",16:"Agosto"
};C.AAE={0:"December",8:"D\xE9cembre",9:"Dezember",15:"\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
,16:"Diciembre"};C.AAU={0:"February",8:"F\xE9vrier",9:"Februar",15:"\u0424\u0435\u0432\u0440\u0430\u043B\u044C"
,16:"Febrero"};C.AB3={0:"January",8:"Janvier",9:"Januar",15:"P\u043D\u0432\u0430\u0440\u044C"
,16:"Enero"};C.AB4={0:"July",8:"Juillet",9:"Juli",15:"\u0414\u0436\u0443\u043B\u0438"
,16:"Julio  "};C.AB5={0:"June",8:"Juin",9:"Juni",15:"\u0414\u0436\u0443\u043D\u0438"
,16:"Junio"};C.ACd={0:"March",8:"Mars",9:"M\xE4rz",15:"\u041C\u0430\u0440\u0448\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
,16:"Marzo"};C.ACg={0:"May",8:"Mai",9:"Mai",15:"\u041C\u0430\u0439",16:"Mayo"};C.
ACs={0:"November",8:"Novembre",15:"\u041D\u043E\u044F\u0431\u0440\u044C",16:"Noviembre"
};C.ACu={0:"October",8:"Octobre",9:"Oktober",15:"\u041E\u043A\u0442\u044F\u0431\u0440\u044C"
,16:"Octubre"};C.AEx={0:"September",8:"Septembre",15:"\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C"
,16:"Septiembre"};
C._Init=function(){};C._ReInit=function(){};C.DE=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */