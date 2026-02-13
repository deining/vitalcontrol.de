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
var Cg=[26,26];
C.Acq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au3={_Init:function(){A.acs.AVF._Init.call(this,0);this.BnN(0xFF706E6C);
this.BnQ(0xFF706E6C);this.BnP(0xFFABABA8);this.BnO(0xFF706E6C);this.BnJ(0xFF706E6C
);this.BnM(0xFF706E6C);this.BnL(0xFFABABA8);this.BnK(0xFF706E6C);this.BnI(34);this.
Bnw(0xFF706E6C);this.Bnz(0xFF706E6C);this.Bny(0xAAABABA8);this.Bnx(0xFF706E6C);this.
Bns(0xFF706E6C);this.Bnv(0xFF706E6C);this.Bnu(0xAAABABA8);this.Bnt(0xFF706E6C);this.
Bnr(34);this.BnG(0x11);this.A_P(A.aaL(A.fl.Ak));this.A_O(A.aaL(A.fl.Ak));this.Bnp(
0x11);this.Bm1(0x4);this.Bnc(7);this.Bnf(5);this.Bne(1);this.Bnd(3);this.Bm_(A.aaL(
A.acs.Aef));this.Bnb(A.aaL(A.acs.Aef));this.Bna(A.aaL(A.acs.Aef));this.Bm$(A.aaL(
A.acs.Aef));this.Bm6(6);this.Bm9(4);this.Bm8(0);this.Bm7(2);this.Bm2(A.aaL(A.acs.
Aef));this.Bm5(A.aaL(A.acs.Aef));this.Bm4(A.aaL(A.acs.Aef));this.Bm3(A.aaL(A.acs.
Aef));this.AGe(Cg);},_ReInit:function(){this.A_P(A.aaL(A.fl.Ak));this.A_O(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au3._this))B._ReInit(),C.
Au3._ReInit.call(B);};C.DJ=function(D){var B;if((B=C.Acq[0]._this)&&(B._cycle!=D
))B._Done(C.Acq[0]._this=null);if((B=C.ARM[0]._this)&&(B._cycle!=D))B._Done(C.ARM[
0]._this=null);if((B=C.Au3._this)&&(B._cycle!=D))B._Done(C.Au3._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */