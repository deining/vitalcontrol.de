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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.fl)throw new Error("The unit file 'Fonts.js' included twice!");index.
fl=(function(){var A=index;var C={};

C.Ak={_class:function(){return A.aci.B7;},0:{Data:function(){return A.acG;},Cache:[
],_this:null}};C.Af={_class:function(){return A.aci.B7;},0:{Data:function(){return A.
acF;},Cache:[],_this:null}};C.EK={_class:function(){return A.aci.B7;},0:{Data:function(
){return A.acE;},Cache:[],_this:null}};C.Aex={_class:function(){return A.aci.B7;
},0:{Data:function(){return A.acK;},Cache:[],_this:null}};C.H6={_class:function(
){return A.aci.B7;},0:{Data:function(){return A.acH;},Cache:[],_this:null}};C.Bh={
_class:function(){return A.aci.B7;},0:{Data:function(){return A.acL;},Cache:[],_this:
null}};C.AOO={_class:function(){return A.aci.B7;},0:{Data:function(){return A.acI;
},Cache:[],_this:null}};C.HL={_class:function(){return A.aci.B7;},0:{Data:function(
){return A.acD;},Cache:[],_this:null}};C.Kt={_class:function(){return A.aci.B7;}
,0:{Data:function(){return A.acC;},Cache:[],_this:null}};C.AOP={_class:function(
){return A.aci.B7;},0:{Data:function(){return A.acJ;},Cache:[],_this:null}};
C._Init=function(){};C._ReInit=function(){};C.DI=function(D){var B;if((B=C.Ak[0].
_this)&&(B._cycle!=D))B._Done(C.Ak[0]._this=null);if((B=C.Af[0]._this)&&(B._cycle
!=D))B._Done(C.Af[0]._this=null);if((B=C.EK[0]._this)&&(B._cycle!=D))B._Done(C.EK[
0]._this=null);if((B=C.Aex[0]._this)&&(B._cycle!=D))B._Done(C.Aex[0]._this=null);
if((B=C.H6[0]._this)&&(B._cycle!=D))B._Done(C.H6[0]._this=null);if((B=C.Bh[0]._this
)&&(B._cycle!=D))B._Done(C.Bh[0]._this=null);if((B=C.AOO[0]._this)&&(B._cycle!=D
))B._Done(C.AOO[0]._this=null);if((B=C.HL[0]._this)&&(B._cycle!=D))B._Done(C.HL[
0]._this=null);if((B=C.Kt[0]._this)&&(B._cycle!=D))B._Done(C.Kt[0]._this=null);if((
B=C.AOP[0]._this)&&(B._cycle!=D))B._Done(C.AOP[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */