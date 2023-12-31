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
);if(index.eV)throw new Error("The unit file 'Fonts.js' included twice!");index.
eV=(function(){var A=index;var C={};

C.AB={_class:function(){return A.abj.B6;},0:{Data:function(){return A.abI;},Cache:[
],_this:null}};C.Aw={_class:function(){return A.abj.B6;},0:{Data:function(){return A.
abH;},Cache:[],_this:null}};C.Gw={_class:function(){return A.abj.B6;},0:{Data:function(
){return A.abG;},Cache:[],_this:null}};C.Ads={_class:function(){return A.abj.B6;
},0:{Data:function(){return A.abM;},Cache:[],_this:null}};C.Hg={_class:function(
){return A.abj.B6;},0:{Data:function(){return A.abJ;},Cache:[],_this:null}};C.Cx={
_class:function(){return A.abj.B6;},0:{Data:function(){return A.abN;},Cache:[],_this:
null}};C.AMl={_class:function(){return A.abj.B6;},0:{Data:function(){return A.abK;
},Cache:[],_this:null}};C.LC={_class:function(){return A.abj.B6;},0:{Data:function(
){return A.abF;},Cache:[],_this:null}};C.Pg={_class:function(){return A.abj.B6;}
,0:{Data:function(){return A.abE;},Cache:[],_this:null}};C.AMm={_class:function(
){return A.abj.B6;},0:{Data:function(){return A.abL;},Cache:[],_this:null}};
C._Init=function(){};C._ReInit=function(){};C.DE=function(D){var B;if((B=C.AB[0].
_this)&&(B._cycle!=D))B._Done(C.AB[0]._this=null);if((B=C.Aw[0]._this)&&(B._cycle
!=D))B._Done(C.Aw[0]._this=null);if((B=C.Gw[0]._this)&&(B._cycle!=D))B._Done(C.Gw[
0]._this=null);if((B=C.Ads[0]._this)&&(B._cycle!=D))B._Done(C.Ads[0]._this=null);
if((B=C.Hg[0]._this)&&(B._cycle!=D))B._Done(C.Hg[0]._this=null);if((B=C.Cx[0]._this
)&&(B._cycle!=D))B._Done(C.Cx[0]._this=null);if((B=C.AMl[0]._this)&&(B._cycle!=D
))B._Done(C.AMl[0]._this=null);if((B=C.LC[0]._this)&&(B._cycle!=D))B._Done(C.LC[
0]._this=null);if((B=C.Pg[0]._this)&&(B._cycle!=D))B._Done(C.Pg[0]._this=null);if((
B=C.AMm[0]._this)&&(B._cycle!=D))B._Done(C.AMm[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */