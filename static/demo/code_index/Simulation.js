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
);if(index.acx)throw new Error("The unit file 'Simulation.js' included twice!");
index.acx=(function(){var A=index;var C={};
var Cf=[26,26];
C.Aci={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AuV={_Init:function(){A.acs.AVx._Init.call(this,0);this.Bnz(0xFF706E6C);
this.BnC(0xFF706E6C);this.BnB(0xFFABABA8);this.BnA(0xFF706E6C);this.Bnv(0xFF706E6C
);this.Bny(0xFF706E6C);this.Bnx(0xFFABABA8);this.Bnw(0xFF706E6C);this.Bnu(34);this.
Bni(0xFF706E6C);this.Bnl(0xFF706E6C);this.Bnk(0xAAABABA8);this.Bnj(0xFF706E6C);this.
Bne(0xFF706E6C);this.Bnh(0xFF706E6C);this.Bng(0xAAABABA8);this.Bnf(0xFF706E6C);this.
Bnd(34);this.Bns(0x11);this.A_z(A.aaL(A.fl.Ak));this.A_y(A.aaL(A.fl.Ak));this.Bnb(
0x11);this.BmN(0x4);this.Bm0(7);this.Bm3(5);this.Bm2(1);this.Bm1(3);this.BmW(A.aaL(
A.acs.Ad_));this.BmZ(A.aaL(A.acs.Ad_));this.BmY(A.aaL(A.acs.Ad_));this.BmX(A.aaL(
A.acs.Ad_));this.BmS(6);this.BmV(4);this.BmU(0);this.BmT(2);this.BmO(A.aaL(A.acs.
Ad_));this.BmR(A.aaL(A.acs.Ad_));this.BmQ(A.aaL(A.acs.Ad_));this.BmP(A.aaL(A.acs.
Ad_));this.AGd(Cf);},_ReInit:function(){this.A_z(A.aaL(A.fl.Ak));this.A_y(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AuV._this))B._ReInit(),C.
AuV._ReInit.call(B);};C.DI=function(D){var B;if((B=C.Aci[0]._this)&&(B._cycle!=D
))B._Done(C.Aci[0]._this=null);if((B=C.ARE[0]._this)&&(B._cycle!=D))B._Done(C.ARE[
0]._this=null);if((B=C.AuV._this)&&(B._cycle!=D))B._Done(C.AuV._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */