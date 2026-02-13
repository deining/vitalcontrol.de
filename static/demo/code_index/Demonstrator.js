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
);if(index.acw)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.acw=(function(){var A=index;var C={};
var Cg=[0,0,370,60];var BF=[360,0,370,60];var E7=[0,0,370,710];var Hr="Unknown animalType";
var I1=[58,10,120,50];var Iw=[0,0,60,60];var O$=[120,0,360,60];var Qa="\u2015";var
Qb=[0,0,240,60];var CJ=[0,0,40,60];var Fd=[100,0,130,60];var LD=[43,0,100,60];var
Qc=[125,0,240,60];var J$=[0,0];var Oj=[100,0];var Qd=[100,60];var MU=[0,60];var Ti=[
107,0];var UZ=[240,0];var Aad=[240,60];var Xe=[107,60];var Ix="%d.%m.%Y";var U0=
"Unhandled date unit: ";var Aae=[0,0,200,180];var U1=[36,0,200,30];var Aaf=[0,30
,160,60];var Xf="Text";var Aag=[0,70,40,110];var Aah=[44,70,156,110];var U2=[160
,70,200,110];var Xg=[7,2,27,25];var Pa=[0,30,170,180];var Aai=[170,34,190,57];var
Ol=[0,0,40,40];var Rp=[0,40];var Xh=[40,40];var Xi=[40,0];var U3=[0,0,370,100];var
Xj=[20,0,290,60];var Aaj=[0,60,370,100];var Xk="Cap";var U4=[20,0,370,60];var Xl=[
310,0,370,60];var Xm=[370,0];var Xn=[370,60];var Rq="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Tj=".";var Aak=[0,0,170
,150];var AfH=[0,59,170,90];var Aal=[110,0,170,150];var Xo=[0,30];var Aam=[50,0,
100,150];var Aan=[0,0,40,150];var AhY=[0,0,370,240];var K4=[0,60,370,710];var Aao=[
0,0,370,300];var LE=[0,60,370,300];var AhZ=[0,60,370,120];var Alb=[0,120,370,180
];var Om=[0,180,370,240];var Xp=[0,240,370,300];var Aok=[370,120];var AfI=[0,120
];var Ah0=[370,180];var AcU=[0,180];var Aap=[370,240];var Ayb=[0,240];var Ayc=[370
,300];var Ayd=[0,300];var Aye=[0,0,50,60];var Alc=[50,0,100,60];var As2="Unhandled scan type";
var Ayf=[3,11,253,51];var Ayg=[57,0];var Pb=[57,60];var Rr=[100,10,370,50];var Ayh=
"276000901234567";var U5=[3,10,57,50];var As3=[3,11,55,50];var Ayi="Unhandled temperature unit";
var Ayj=[110,0,260,60];var Ald=[235,10,370,50];var Ayk="39.5";var AfJ=[0,0,270,40
];var Aol=[270,0];var I2=[270,40];var Aom=[150,0,170,40];var As4=[205,10,207,30];
var AcV=[0,0,370,40];var As5=[50,0,320,40];var As6=" ";var As7=[135,23];var Aon=[
135,0];var As8=[100,0,370,60];var Ale="Error: Nullpointer Exception";var Ayl="Unknown Date Piecker Unit Index: ";
var Aym="0";var Ayn="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.ANc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.AR6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Aju={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AsA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AV3={Aej:null,AX:null,AQ:null,Background:null,Ib:null,AD:null,IY:null,Do:
null,Lo:null,A8j:null,A8K:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IY.H(A.abP(this.IY.M,this.AD.OZ));this.IY.H([].concat(this.IY.M.slice(0,3),aSize[
1]));},Aj:function(Ae){var B;A.acn.Menu.Aj.call(this,Ae);var IG=((Ae&0x40)===0x40
);if(IG&&(this.AD.Gv<0))this.AD.GU(0);},N_:function(E){if(this.Lo===E)return;this.
Lo=E;this.AD.N_(E);},BnW:function(E){var B;if(this.A8j===E)return;if(!!this.Aej){
this.HQ(this.Aej);this.Aej=null;}if(!!E){this.Aej=(C.FD.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aej.A_T([this,this.Akr]);this.Aej.A_U([this,this.Aks]);this.Aej.
Bn2(null);this.J(this.Aej,0);this.AD.A_0((B=this.Aej.M)[3]-B[1]);}else this.AD.A_0(
0);this.IY.H(A.abP(this.IY.M,this.AD.OZ));A.pe([this,this.Fi],this);this.A8j=E;}
,Hn:function(G){var B;var Gk=this.AD.G6;var Aa=(C.A$.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.ZA(this.AX);Aa.Ci(Gk);Aa.ZE(this.AQ);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GQ]));},ZA:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ci],this.AX,0);A.z$([this,this.Aod],[B=this.AX,B.Fo
,B.Fs],0);}this.AX=E;if(!!E){A.zV([this,this.Ci],E,0);A.zX([this,this.Aod],[E,E.
Fo,E.Fs],0);}A.pe([this,this.Ci],this);A.pe([this,this.Aod],this);},Ci:function(
G){if(!!this.AX){this.AD.JF(this.AX.B_());this.AD.AbO(0,this.AD.A0-1);}else this.
AD.JF(0);if(this.A8K!==this.AD.A0){this.AD.ABV(null,null);this.A8K=this.AD.A0;}A.
pe([this,this.Fi],this);},Aks:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AO1(
))[3]-B[1]));},Akr:function(G){this.H(A.abI(this.M,180));},A98:function(G){var JL=(
A.Core.BG.isPrototypeOf(G)?G:null);var Gk=this.AD.Gv;if(JL.CP===4)Gk=Gk-1;else if(
JL.CP===5)Gk=Gk+1;else if((JL.Dz>=0x30)&&(JL.Dz<=0x39))A._GetAutoObject(A.aco.AgR
).EA(JL.Dz);else if(JL.CP===45)A._GetAutoObject(A.aco.AgR).Delete();else JL.Mz=true;
if((Gk<0)||(Gk>=this.AD.A0))return;this.AD.GU(Gk);this.BzM(Gk,true);},BzB:function(
G){var Aa=(C.A$.isPrototypeOf(G)?G:null);this.AD.GU(Aa.Hs);},BzM:function(Ha,Ac8
){var B;if((Ha<0)||(Ha>=this.AD.A0))return;var Az=this.AD.AqZ(Ha,Ha);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AO1())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AO1())[3]-B[1]))-((B=this.AD.BjU())[3]-B[1]));var LX=A.lb(Az,Bd);if((!
Ac8&&!((LX[0]>=LX[2])||(LX[1]>=LX[3])))||(Ac8&&A.aaY(LX,Az)))return;var Br=0;if(
Az[3]>Bd[3])Br=Az[3]-Bd[3];if(Br>(Az[1]-Bd[1]))Br=(Az[3]-Bd[1])-this.AD.GQ;this.
AD.Gi(this.AD.Bs-Br);},Aod:function(G){this.AD.GU(-1);},Fi:function(G){var B;this.
IY.MK(this.AD.GQ*this.AD.A0);this.IY.MM(((B=this.AD.M)[3]-B[1])-this.AD.OZ);this.
IY.ML(-this.AD.Bs);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);A.Core.Ib._Init.call(this.Ib={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IY={I:this},
0);A.Core.BG._Init.call(this.Do={I:this},0);this.__proto__=C.AV3;this.H(Cg);this.
Background.A1(0x3);this.Background.H(Cg);this.Ib.A1(0x3F);this.Ib.H(Cg);this.AD.
A1(0x3F);this.AD.H(Cg);this.AD.Afb(60);this.AD.JF(0);this.AD.N_(this.Lo);this.IY.
A1(0x3A);this.IY.H(BF);this.IY.L(0xFF808080);this.J(this.Background,0);this.J(this.
Ib,0);this.J(this.AD,0);this.J(this.IY,0);this.AD.Eo=[this,this.Fi];this.AD.Hn=[
this,this.Hn];this.AD.Axc(this.Ib);this.AQ=[this,this.BzB];this.Do.BH=[this,this.
A98];this.Do.D3=[this,this.A98];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.Ib._Done();this.AD._Done();this.IY._Done();this.Do._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.Ib._ReInit();this.AD._ReInit();this.IY._ReInit();
this.Do._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aej)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUX={GM:null,AK:null,BY:null,Init:function(aArg){var B;A.zX([this,this.GJ],[
B=A._GetAutoObject(A.aco.GO),B.A9L,B.A__],0);A.pe([this,this.GJ],this);},Ab$:function(
E){if(this.GM===E)return;if(!!this.GM)this.HQ(this.GM);this.GM=E;if(!!this.GM)this.
J(this.GM,0);this.Ba(E);this.AhG(E,this.BY);this.Am();},GJ:function(G){var B;if(
!!A._GetAutoObject(A.aco.GO).AsC)this.Ab$((C.AhL.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.GO).AsC,0))?B:null));else this.Ab$(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.BY.
_Init.call(this.BY={I:this},0);this.__proto__=C.AUX;this.H(E7);this.AK.A1(0x3F);
this.AK.H(E7);this.BY.H(E7);this.BY.L(0xFF000000);this.J(this.AK,0);this.J(this.
BY,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AK._Done();
this.BY._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AK._ReInit();this.BY._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AME={ABA:0,Jv:0,Background:null,V:null
,Ajp:null,Ad2:null,XZ:null,Ad3:null,Mt:null,Mp:0,LQ:false,KN:false,CQ:function(){
this.Am();},Aj:function(Ae){var B;C.A$.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var Fv=((Ae&0x20)===0x20);var IG=((Ae&0x40)===0x40);if(!Hf){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mt.As(false);this.Mt.Z(false);}else if(IG){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mt.As(true);this.Mt.Z(true);}else
if(Fv){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mt.As(true);this.
Mt.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mt.As(false
);this.Mt.Z(false);}if(!this.KN&&Fv)A._GetAutoObject(A.aco.GO).A_7(this.ABA);this.
Mt.BnY(this.Jv>0);this.Mt.Boq(this.ABA>0);this.V.R(this.Mp.toFixed());this.LQ=Hf;
this.KN=Fv;},Ci:function(Ad){if(!this.AX){this.XZ.Ax(A.aaL(A.ach.AeF));this.Ad2.
L(A.jb.AfA);return;}this.Hs=Ad;if(!!this.AX){this.Jv=this.AX.KU(Ad,26);this.ABA=
this.AX.KU(Ad,22);this.Mp=this.AX.CE(Ad,1);var AlT=this.AX.H6(Ad,11);var AlL=this.
AX.Jb(Ad,17);var L0=this.AX.Jb(Ad,13);var Ig=this.AX.Am0(Ad,14);var Xz=A._GetAutoObject(
A.Device.Helper).AMt(L0,AlT,AlL);switch(Ig){case 0:this.XZ.Ax(A.aaL(A.ach.AeF));
break;case 1:this.XZ.Ax(A.aaL(A.ach.AvL));break;case 2:this.XZ.Ax(A.aaL(A.ach.AvO
));break;default:A.ab5("%s%e",Hr,Ig);}this.Ad3.Ax(this.XZ.Al);this.Ad2.L(A._GetAutoObject(
A.acj.Assessment).Qt(Xz));this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajp={I:this},0);A.acg.Ap._Init.call(this.Ad2={
I:this},0);A.acg.Ap._Init.call(this.XZ={I:this},0);A.acg.Ap._Init.call(this.Ad3={
I:this},0);C.Mt._Init.call(this.Mt={I:this},0);this.__proto__=C.AME;this.Background.
A1(0x3F);this.Background.H(Cg);this.V.A1(0x3F);this.V.H(I1);this.V.R(A.aaR(A.acf.
GP));this.V.A4(0x11);this.V.L(0xFF000000);this.Ajp.H(Iw);this.Ajp.L(A.jb.Text);this.
Ad2.H(Iw);this.Ad2.L(A.jb.E2);this.XZ.H(Iw);this.Ad3.H(Iw);this.Ad3.L(A.jb.Text);
this.Ad3.Cx(1);this.Mt.A1(0x3);this.Mt.H(O$);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajp,0);this.J(this.Ad2,0);this.J(this.XZ,0);this.J(this.Ad3,0);
this.J(this.Mt,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.
aaL(A.fl.Bg));this.Ajp.Ax(A.aaL(C.AHx));this.Ad2.Ax(A.aaL(C.AWi));this.XZ.Ax(A.aaL(
A.ach.AeF));this.Ad3.Ax(A.aaL(A.ach.AeF));},_Done:function(){this.__proto__=C.A$;
this.Background._Done();this.V._Done();this.Ajp._Done();this.Ad2._Done();this.XZ.
_Done();this.Ad3._Done();this.Mt._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajp._ReInit(
);this.Ad2._ReInit();this.XZ._ReInit();this.Ad3._ReInit();this.Mt._ReInit();this.
V.R(A.aaR(A.acf.GP));this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(
A.aaL(A.fl.Bg));this.CQ();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ad3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mt={UG:null,WV:null,Ak1:null,NA:null
,Og:null,ZR:null,AcF:null,Av7:false,Ax0:false,CQ:function(){this.Am();},Aj:function(
Ae){var B;A.Core.P.Aj.call(this,Ae);var IG=((Ae&0x40)===0x40);if(IG){this.NA.L(A.
jb.Bm);this.Og.L(A.jb.Bm);}else{this.NA.L(A.jb.Text);this.Og.L(A.jb.Text);}if(this.
Ax0){this.NA.R(A.aaR(A.acf.Bpr));if(this.Av7){this.UG.Ax(A.aaL(C.Ax1));this.WV.Ax(
A.aaL(C.Ax1));}else{this.UG.Ax(A.aaL(C.AsA));this.WV.Ax(A.aaL(C.AsA));}}else if(
this.Av7){this.UG.Ax(A.aaL(C.ACS));this.WV.Ax(A.aaL(C.ACS));this.NA.R(Qa);}var A4G=
this.Ax0||this.Av7;this.UG.Z(A4G);this.WV.Z(A4G);this.NA.Z(A4G);this.ZR.As(this.
Ax0);},Boq:function(E){if(this.Ax0===E)return;this.Ax0=E;this.Am();},BnY:function(
E){if(this.Av7===E)return;this.Av7=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.UG={I:this},0);A.acg.Ap._Init.call(this.
WV={I:this},0);A.acg.Ap._Init.call(this.Ak1={I:this},0);A.kR.CG._Init.call(this.
NA={I:this},0);A.kR.CG._Init.call(this.Og={I:this},0);A.Core.Bn._Init.call(this.
ZR={I:this},0);A.Core.Bn._Init.call(this.AcF={I:this},0);this.__proto__=C.Mt;var
B;this.H(Qb);this.UG.A1(0x6);this.UG.H(CJ);this.UG.L(A.jb.CV);this.UG.Cx(1);this.
WV.A1(0x6);this.WV.H(CJ);this.WV.L(A.jb.Text);this.Ak1.A1(0xE);this.Ak1.H(Fd);this.
NA.A1(0x7);this.NA.H(LD);this.NA.A4(0x11);this.NA.L(0xFF000000);this.Og.A1(0x3);
this.Og.H(Qc);this.Og.R(A.aaR(A.acf.Temperature));this.Og.A4(0x11);this.Og.L(0xFF000000
);this.ZR.A1(0x3);this.ZR.J5(J$);this.ZR.KB(Oj);this.ZR.DE(Qd);this.ZR.DO(MU);this.
AcF.A1(0x3);this.AcF.J5(Ti);this.AcF.KB(UZ);this.AcF.DE(Aad);this.AcF.DO(Xe);this.
J(this.UG,0);this.J(this.WV,0);this.J(this.Ak1,0);this.J(this.NA,0);this.J(this.
Og,0);this.J(this.ZR,0);this.J(this.AcF,0);this.UG.Ax(A.aaL(C.AsA));this.WV.Ax(A.
aaL(C.AsA));this.Ak1.Ax(A.aaL(C.AVu));this.NA.S(A.aaL(A.fl.Af));this.NA.AY(A.aaL(
A.fl.Ak));this.NA.Cm(A.aaL(A.fl.Bg));this.Og.S(A.aaL(A.fl.Af));this.Og.AY(A.aaL(
A.fl.Ak));this.Og.Cm(A.aaL(A.fl.Bg));this.ZR.Lt=[B=A._GetAutoObject(A.aco.GO),B.
BfQ];this.AcF.Lt=[B=A._GetAutoObject(A.aco.GO),B.BfC];},_Done:function(){this.__proto__=
A.Core.P;this.UG._Done();this.WV._Done();this.Ak1._Done();this.NA._Done();this.Og.
_Done();this.ZR._Done();this.AcF._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.UG._ReInit();this.WV._ReInit();this.Ak1._ReInit(
);this.NA._ReInit();this.Og._ReInit();this.ZR._ReInit();this.AcF._ReInit();this.
Og.R(A.aaR(A.acf.Temperature));this.NA.S(A.aaL(A.fl.Af));this.NA.AY(A.aaL(A.fl.Ak
));this.NA.Cm(A.aaL(A.fl.Bg));this.Og.S(A.aaL(A.fl.Af));this.Og.AY(A.aaL(A.fl.Ak
));this.Og.Cm(A.aaL(A.fl.Bg));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.UG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Og)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.YA={CQ:function(){this.Am();
},Aj:function(Ae){C.Ark.Aj.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8R:function(G){var D8=(A.Core.BG.isPrototypeOf(G)?G:null
);if(!!D8)A._GetAutoObject(A.aco.AgR).EA(D8.Dz);},A8P:function(G){A._GetAutoObject(
A.aco.AgR).Delete();},_Init:function(aArg){C.Ark._Init.call(this,aArg);this.__proto__=
C.YA;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Ark._ReInit.call(this);this.
CQ();},_className:"Demonstrator::FilterView"};C.Abo={Dm:null,Yt:null,Sl:null,Yu:
null,DU:null,YP:null,AmM:null,Av:null,Pi:null,Nf:null,Abn:null,Gb:0,AvT:0,AGk:false
,Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.Sl.R(this.Av.Format(Ix));if(this.
AGk){this.Sl.Z(false);this.YP.Z(false);this.DU.Z(false);this.Yu.Z(false);this.Pi.
As(true);this.Pi.Z(true);this.Nf.Cx(2);this.Nf.ATH(2);this.Nf.H(A.abM(this.Nf.M,
this.Pi.M[2]));}else{this.Sl.Z(true);this.YP.Z(true);this.DU.Z(true);this.Yu.Z(true
);this.Pi.As(false);this.Pi.Z(false);this.Nf.Cx(3);this.Nf.ATH(3);this.Nf.H(A.abM(
this.Nf.M,this.Sl.M[2]));}},BBB:function(G){this.Bn5(!this.AGk);},AdF:function(G
){var F;if(!!this.Dm)this.Uv((F=this.Dm,F[1].call(F[0])));},Acd:function(E){if(A.
aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdF],this.Dm,0);this.Dm=E;if(
!!E)A.zX([this,this.AdF],E,0);if(!!E)A.pe([this,this.AdF],this);},Uv:function(E){
if(this.Gb===E)return;this.Gb=E;this.Av.Initialize(this.Gb);this.BCF(this);this.
Am();},AiI:function(G){var B;var F;var BQ=this.Gb;var Ajc=this.Abn.C8(this.AvT);
this.AJy(Ajc);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Uv(((
B=(this.Av.J2()|0))<0)?B+0x100000000:B);if(this.Gb!==BQ){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.Gb));A.abo(this.Dm,0);}},Ait:function(G){var B;var F;var BQ=
this.Gb;var Ajc=this.Abn.C8(this.AvT);this.ALj(Ajc);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Uv(((B=(this.Av.J2()|0))<0)?B+0x100000000:B);if(
this.Gb!==BQ){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.Gb));A.abo(this.Dm,0);
}},BnB:function(E){if(this.AvT===E)return;this.AvT=E;},Bn5:function(E){if(this.AGk===
E)return;this.AGk=E;this.Am();},BCb:function(G){var B;var F;var BQ=this.Gb;this.
Av.Lw(this.Pi.AEP());this.Av.Uz(this.Pi.AEU());this.Av.Year=this.Pi.ArK();this.Uv(((
B=(this.Av.J2()|0))<0)?B+0x100000000:B);if(this.Gb!==BQ){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.Gb));A.abo(this.Dm,0);}},BCF:function(G){this.Pi.Lw(this.Av.
GN);this.Pi.Uz(this.Av.Hl);this.Pi.AkG(this.Av.Year);},AJy:function(Azd){var B;switch(
Azd){case 0:if(this.Av.GN<this.Av.Zw())this.Av.Lw(this.Av.GN+1);else{this.Av.Lw(
1);this.AJy(2);}break;case 1:if((this.Av.GN+7)<=this.Av.Zw())this.Av.Lw(this.Av.
GN+7);else{this.Av.Lw((7-this.Av.Zw())+this.Av.GN);this.AJy(2);}break;case 2:if(
this.Av.Hl<12)this.Av.Uz(this.Av.Hl+1);else{this.Av.Uz(1);this.AJy(3);}break;case
3:this.Av.Year++;break;default:throw new Error(U0+Azd.toFixed());}},ALj:function(
Azd){var B;switch(Azd){case 0:if(this.Av.GN>1)this.Av.Lw(this.Av.GN-1);else{this.
ALj(2);this.Av.Lw(this.Av.Zw());}break;case 1:if((this.Av.GN-7)>0)this.Av.Lw(this.
Av.GN-7);else{this.ALj(2);this.Av.Lw(this.Av.Zw()-(7-this.Av.GN));}break;case 2:
if(this.Av.Hl>1)this.Av.Uz(this.Av.Hl-1);else{this.Av.Uz(12);this.ALj(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(U0+Azd.toFixed());}},BlK:function(
){return this.AvT;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yt={I:this},0);A.acg.Text._Init.call(this.Sl={I:this},0);C.AvJ._Init.
call(this.Yu={I:this},0);A.acr.DU._Init.call(this.DU={I:this},0);C.AvJ._Init.call(
this.YP={I:this},0);A.acg.Ap._Init.call(this.AmM={I:this},0);A.Core.Bq._Init.call(
this.Av={I:this},0);C.ANT._Init.call(this.Pi={I:this},0);C.AvJ._Init.call(this.Nf={
I:this},0);C.Abn._Init.call(this.Abn={I:this},0);this.__proto__=C.Abo;this.H(Aae
);this.Yt.H(U1);this.Yt.A4(0x11);this.Yt.R(A.aaR(A.acf.Date));this.Yt.L(0xFF000000
);this.Sl.H(Aaf);this.Sl.A4(0x11);this.Sl.R(Xf);this.Sl.L(0xFF000000);this.Yu.H(
Aag);this.Yu.A_J(200);this.DU.H(Aah);this.DU.Ar1(120);this.DU.GQ=30;this.DU.ATi(
A.jb.CV);this.DU.A_k(A.jb.CV);this.DU.A_p(A.jb.CV);this.DU.ATj(A.jb.Text);this.DU.
A_q(A.jb.Text);this.DU.A_l(A.jb.AV);this.DU.A_r(A.jb.Bm);this.DU.A_o(A.jb.AV);this.
DU.A_n(A.jb.Text);this.YP.H(U2);this.YP.A_J(200);this.AmM.H(Xg);this.Pi.H(Pa);this.
Nf.H(Aai);this.Nf.Cx(3);this.Nf.ATH(3);this.Nf.L(A.jb.Text);this.J(this.Yt,0);this.
J(this.Sl,0);this.J(this.Yu,0);this.J(this.DU,0);this.J(this.YP,0);this.J(this.AmM
,0);this.J(this.Pi,0);this.J(this.Nf,0);this.Yt.S(A.aaL(A.fl.Ak));this.Sl.S(A.aaL(
A.fl.EL));this.Yu.AQ=[this,this.Ait];this.Yu.DD(A.aaL(C.ANc));this.Yu.ATI(A.aaL(
C.ANd));this.DU.Au([this,this.BlK,this.BnB]);this.DU.A_x(this.Abn);this.DU.ArT(A.
aaL(A.fl.Ak));this.DU.AwS(A.aaL(A.fl.Ak));this.YP.AQ=[this,this.AiI];this.YP.DD(
A.aaL(C.ANe));this.YP.ATI(A.aaL(C.ANf));this.AmM.Ax(A.aaL(C.AQj));this.Pi.Dk=[this
,this.BCb];this.Nf.AQ=[this,this.BBB];this.Nf.DD(A.aaL(A.ach.Ajv));this.Nf.ATI(A.
aaL(A.ach.Ajv));},_Done:function(){this.__proto__=A.Core.P;this.Yt._Done();this.
Sl._Done();this.Yu._Done();this.DU._Done();this.YP._Done();this.AmM._Done();this.
Av._Done();this.Pi._Done();this.Nf._Done();this.Abn._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yt._ReInit();this.Sl.
_ReInit();this.Yu._ReInit();this.DU._ReInit();this.YP._ReInit();this.AmM._ReInit(
);this.Av._ReInit();this.Pi._ReInit();this.Nf._ReInit();this.Abn._ReInit();this.
Yt.R(A.aaR(A.acf.Date));this.Yt.S(A.aaL(A.fl.Ak));this.Sl.S(A.aaL(A.fl.EL));this.
DU.ArT(A.aaL(A.fl.Ak));this.DU.AwS(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvJ={C_:null,Axy:null,AN9:null,AQ:null,Bo:null,Do:null,CT:null,Hx:null,YI:null
,APU:0,T0:0,AUq:0,AR:0xFFFFFFFF,A2S:false,LQ:false,KN:false,Qx:false,Aj:function(
Ae){var B;A.acn.AhC.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===
0x20);var GG=this.CT.Down&&this.CT.YR;if(!Hf)this.Hx.Ax(this.AN9);else if(GG){this.
Hx.Ax(this.Axy);this.Hx.Cx(this.AUq);}else{this.Hx.Ax(this.C_);this.Hx.Cx(this.T0
);}this.Hx.L(this.AR);this.LQ=Hf;this.KN=Fv;this.Qx=GG;},Qw:function(G){this.Am(
);A.pe(this.AQ,this);},AiS:function(G){if(this.CT.Down)return;if(this.Do.Acr)return;
this.Am();if(this.Bo.Bw){A.pe(this.AQ,this);this.Bo.As(false);}this.Bo.As(true);
},Bfz:function(G){this.Am();},AAR:function(G){if(!this.CT.YR)return;if(this.CT.NT
)return;if((this.YI.VP<=0)||(this.CT.JA<this.YI.VP)){if(this.CT.JA>=this.Bo.VP)A.
pe(this.AQ,this);else this.Bo.As(true);}this.YI.As(false);},AAQ:function(G){this.
YI.As(true);if(this.Bo.Bw){A.pe(this.AQ,this);this.Bo.As(false);}},DD:function(E
){if(this.C_===E)return;this.C_=E;this.Am();},ATI:function(E){if(this.Axy===E)return;
this.Axy=E;this.Am();},A3R:function(G){if(!this.CT.YR)return;if(this.CT.NT)return;
if((this.APU>=0)&&this.A2S){this.A2S=false;this.YI.As(true);A.pe(this.AQ,this);}
},A_J:function(E){if(this.APU===E)return;this.APU=E;this.YI.WN(E);},BA6:function(
G){this.A2S=true;},Cx:function(E){if(this.T0===E)return;this.T0=E;this.Am();},ATH:
function(E){if(this.AUq===E)return;this.AUq=E;this.Am();},L:function(E){if(this.
AR===E)return;this.AR=E;this.Am();},_Init:function(aArg){A.acn.AhC._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BG._Init.call(this.Do={
I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);A.acg.Ap._Init.call(this.Hx={
I:this},0);A.Core.Timer._Init.call(this.YI={I:this},0);this.__proto__=C.AvJ;this.
H(Ol);this.Bo.PZ(0);this.Bo.WN(50);this.Do.Filter=149;this.CT.A1(0x3F);this.CT.J5(
Rp);this.CT.KB(Xh);this.CT.DE(Xi);this.CT.DO(J$);this.CT.Afl=0xF;this.CT.AFG(100
);this.Hx.A1(0x3F);this.Hx.H(Ol);this.Hx.A4(0x12);this.YI.PZ(0);this.J(this.CT,0
);this.J(this.Hx,0);this.Bo.MN=[this,this.Qw];this.Do.BH=[this,this.AiS];this.CT.
AE0=[this,this.Bfz];this.CT.Awb=[this,this.Bfz];this.CT.D3=[this,this.A3R];this.
CT.Lt=[this,this.AAR];this.CT.BH=[this,this.AAQ];this.Hx.Ax(A.aaL(A.aci.TU));this.
C_=A.aaL(A.aci.TU);this.Axy=A.aaL(A.aci.TU);this.AN9=A.aaL(A.aci.TU);this.YI.MN=[
this,this.BA6];},_Done:function(){this.__proto__=A.acn.AhC;this.Bo._Done();this.
Do._Done();this.CT._Done();this.Hx._Done();this.YI._Done();A.acn.AhC._Done.call(
this);},_ReInit:function(){A.acn.AhC._ReInit.call(this);this.Bo._ReInit();this.Do.
_ReInit();this.CT._ReInit();this.Hx._ReInit();this.YI._ReInit();},_Mark:function(
D){var B;A.acn.AhC._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMS={PE:null,V:null,Aex:null,_Init:function(aArg){
C.FD._Init.call(this,aArg);A.acg.AK._Init.call(this.PE={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aex._Init.call(this.Aex={I:this},0);this.__proto__=C.AMS;
this.H(U3);this.PE.A1(0x1D);this.PE.H(Cg);this.PE.L(0xFFE6E6E6);this.V.A1(0x1D);
this.V.H(Xj);this.V.A4(0x11);this.V.R(A.aaR(A.acf.A5I));this.V.L(0xFF000000);this.
Aex.H(Aaj);this.J(this.PE,0);this.J(this.V,0);this.J(this.Aex,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FD;this.PE._Done();this.V._Done();
this.Aex._Done();C.FD._Done.call(this);},_ReInit:function(){C.FD._ReInit.call(this
);this.PE._ReInit();this.V._ReInit();this.Aex._ReInit();this.V.R(A.aaR(A.acf.A5I
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FD._Mark.call(this,D);if((
B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aex)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuJ={PE:null,V:null,AeZ:null,AeX:null,Bn:null,DM:Xk,Ahq:false,Aj:function(Ae
){C.FD.Aj.call(this,Ae);if(this.Ahq){this.AeX.Z(true);this.AeZ.Z(false);}else{this.
AeX.Z(false);this.AeZ.Z(true);}},BBZ:function(G){if(this.Ahq)A.pe(this.Akr,this);
else A.pe(this.Aks,this);this.Ar2(!this.Ahq);},T:function(E){if(this.DM===E)return;
this.DM=E;this.V.R(E);},Ar2:function(E){if(this.Ahq===E)return;this.Ahq=E;this.Am(
);},_Init:function(aArg){C.FD._Init.call(this,aArg);A.acg.AK._Init.call(this.PE={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeZ={
I:this},0);A.acg.Ap._Init.call(this.AeX={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuJ;this.H(Cg);this.PE.A1(0x1D);this.PE.H(Cg);this.PE.
L(0xFFE6E6E6);this.V.A1(0x1D);this.V.H(U4);this.V.A4(0x11);this.V.R(Xk);this.V.L(
0xFF000000);this.AeZ.H(Xl);this.AeZ.Z(false);this.AeX.A1(0x3A);this.AeX.H(Xl);this.
Bn.J5(J$);this.Bn.KB(Xm);this.Bn.DE(Xn);this.Bn.DO(MU);this.J(this.PE,0);this.J(
this.V,0);this.J(this.AeZ,0);this.J(this.AeX,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeZ.Ax(A.aaL(C.AMV));this.AeX.Ax(A.aaL(C.Aju));this.Bn.Lt=[this,this.
BBZ];},_Done:function(){this.__proto__=C.FD;this.PE._Done();this.V._Done();this.
AeZ._Done();this.AeX._Done();this.Bn._Done();C.FD._Done.call(this);},_ReInit:function(
){C.FD._ReInit.call(this);this.PE._ReInit();this.V._ReInit();this.AeZ._ReInit();
this.AeX._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FD._Mark.call(this,D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.A$={AX:null,AQ:null,
CT:null,Hs:-1,ZA:function(E){if(this.AX===E)return;this.AX=E;},Ci:function(Ad){A.
ab5("%s",Rq);},ZE:function(E){if(A.aa0(this.AQ,E))return;this.AQ=E;},AAR:function(
G){if(!this.CT.YR)return;if(this.CT.NT)return;A.pe(this.AQ,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.A$;this.H(Cg);this.CT.A1(0x3F);this.CT.J5(MU);this.CT.KB(Xn);this.CT.
DE(Xm);this.CT.DO(J$);this.CT.Afl=0xF;this.CT.AFG(100);this.J(this.CT,0);this.CT.
Lt=[this,this.AAR];},_Done:function(){this.__proto__=A.Core.P;this.CT._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CT.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FD={ASB:null,Aks:null,Akr:null,Bn2:function(E){if(A.aa0(this.ASB,E))return;this.
ASB=E;},A_U:function(E){if(A.aa0(this.Aks,E))return;this.Aks=E;},A_T:function(E){
if(A.aa0(this.Akr,E))return;this.Akr=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FD;this.H(Cg);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aks)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akr)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANT={Dk:null
,Abe:null,W8:null,W7:null,W6:null,Nq:null,Np:null,KX:null,LQ:false,KN:false,BCP:
false,Aj:function(Ae){var B;A.acn.AhA.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);
var Fv=((Ae&0x20)===0x20);var BeA=(this.W6.ZW||this.W7.ZW)||this.W8.ZW;if(BeA)this.
Abe.L(A.jb.Text);else this.Abe.L(A.jb.Bb);this.LQ=Hf;this.KN=Fv;this.BCP=BeA;},AAM:
function(G){this.Am();if((!this.W6.ZW&&!this.W7.ZW)&&!this.W8.ZW){var Vl=this.AKp(
this.AEU(),this.ArK());var Adk=this.AEP();this.KX.JF(Vl);if(Adk>Vl)this.Lw(Vl);A.
pe(this.Dk,this);}},A4b:function(G){this.Am();},Bmq:function(G){var B;var Gk=this.
Nq.G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Nq.Cj)?B:null);if(!CA)return;CA.R(
A.abl(Gk+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(
CA.M,[(B=this.Nq.M)[2]-B[0],this.Nq.GQ]));},Bmp:function(G){var B;var Gk=this.Np.
G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Np.Cj)?B:null);if(!CA)return;CA.R(A.abl(
Gk+1,2,10)+Tj);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(CA.M,[(
B=this.Np.M)[2]-B[0],this.Np.GQ]));},Bmn:function(G){var B;var Gk=this.KX.G6;var
CA=(A.acg.Text.isPrototypeOf(B=this.KX.Cj)?B:null);if(!CA)return;CA.R(A.abl(Gk+1
,2,10)+Tj);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(CA.M,[(B=
this.KX.M)[2]-B[0],this.KX.GQ]));},ArK:function(){return 1900+((((-this.Nq.Bs/this.
Nq.GQ)|0)+2)%200);},AkG:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nq.Gi(((
E-1900)-2)*-this.Nq.GQ);var Vl=this.AKp(this.AEU(),E);this.KX.JF(Vl);if(this.AEP(
)>Vl)this.Lw(Vl);},AEU:function(){return 1+((((-this.Np.Bs/this.Np.GQ)|0)+2)%12);
},Uz:function(E){if(E<1)E=1;if(E>12)E=12;this.Np.Gi(((E-1)-2)*-this.Np.GQ);var Vl=
this.AKp(E,this.ArK());this.KX.JF(Vl);if(this.AEP()>Vl)this.Lw(Vl);},AEP:function(
){return 1+((((-this.KX.Bs/this.KX.GQ)|0)+2)%this.KX.A0);},Lw:function(E){var Vl=
this.AKp(this.AEU(),this.ArK());if(E<1)E=1;if(E>Vl)E=Vl;this.KX.Gi(((E-2)-1)*-this.
KX.GQ);},AKp:function(AfR,Ada){if(AfR===2){if(!(Ada%4)&&(!!(Ada%100)||!(Ada%400)
))return 29;else return 28;}else if((((AfR===4)||(AfR===6))||(AfR===9))||(AfR===
11))return 30;else return 31;},_Init:function(aArg){A.acn.AhA._Init.call(this,aArg
);A.acg.BY._Init.call(this.Abe={I:this},0);A.Core.Ib._Init.call(this.W8={I:this}
,0);A.Core.Ib._Init.call(this.W7={I:this},0);A.Core.Ib._Init.call(this.W6={I:this
},0);A.Core.CM._Init.call(this.Nq={I:this},0);A.Core.CM._Init.call(this.Np={I:this
},0);A.Core.CM._Init.call(this.KX={I:this},0);this.__proto__=C.ANT;this.H(Aak);this.
Abe.H(AfH);this.Abe.Nx(3);this.Abe.L(0xFFE1E1E1);this.Abe.Z(true);this.W8.H(Aal);
this.W8.ATV(Xo);this.W8.ATq(0.2);this.W7.H(Aam);this.W7.ATV(Xo);this.W7.ATq(0.2);
this.W6.H(Aan);this.W6.ATV(Xo);this.W6.ATq(0.2);this.Nq.H(Aal);this.Nq.ATo(true);
this.Nq.Gi(60);this.Nq.Afb(30);this.Nq.JF(200);this.Np.H(Aam);this.Np.ATo(true);
this.Np.Gi(60);this.Np.Afb(30);this.Np.JF(12);this.KX.H(Aan);this.KX.ATo(true);this.
KX.Gi(60);this.KX.Afb(30);this.KX.JF(31);this.J(this.Abe,0);this.J(this.W8,0);this.
J(this.W7,0);this.J(this.W6,0);this.J(this.Nq,0);this.J(this.Np,0);this.J(this.KX
,0);this.W8.Zv=[this,this.AAM];this.W8.ST=[this,this.A4b];this.W7.Zv=[this,this.
AAM];this.W7.ST=[this,this.A4b];this.W6.Zv=[this,this.AAM];this.W6.ST=[this,this.
A4b];this.Nq.Hn=[this,this.Bmq];this.Nq.Axc(this.W8);this.Np.Hn=[this,this.Bmp];
this.Np.Axc(this.W7);this.KX.Hn=[this,this.Bmn];this.KX.Axc(this.W6);},_Done:function(
){this.__proto__=A.acn.AhA;this.Abe._Done();this.W8._Done();this.W7._Done();this.
W6._Done();this.Nq._Done();this.Np._Done();this.KX._Done();A.acn.AhA._Done.call(
this);},_ReInit:function(){A.acn.AhA._ReInit.call(this);this.Abe._ReInit();this.
W8._ReInit();this.W7._ReInit();this.W6._ReInit();this.Nq._ReInit();this.Np._ReInit(
);this.KX._ReInit();},_Mark:function(D){var B;A.acn.AhA._Mark.call(this,D);if((B=
this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Np)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AWi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhL={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhL;this.H(E7);},_className:"Demonstrator::SelectionAreaContent"};C.AML={Y:null
,VF:null,TJ:null,BCp:function(G){var B;this.TJ.H(A.abI(this.TJ.M,((B=this.M)[3]-
B[1])-((B=this.VF.M)[3]-B[1])));},_Init:function(aArg){C.AhL._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AMe._Init.call(this.VF={I:this},0);C.
AV3._Init.call(this.TJ={I:this},0);this.__proto__=C.AML;this.Y.A1(0x3F);this.Y.H(
E7);this.Y.J3(1);this.VF.H(AhY);this.VF.Ai(true);this.VF.Ar2(false);this.TJ.A1(0x3
);this.TJ.H(K4);this.TJ.Ai(true);this.TJ.N_(C.AME);this.TJ.BnW(C.AMS);this.J(this.
Y,0);this.J(this.VF,0);this.J(this.TJ,0);this.Ba(this.TJ);this.Y.Eo=[this,this.BCp
];this.TJ.ZA(A._GetAutoObject(A.aco.Aql));},_Done:function(){this.__proto__=C.AhL;
this.Y._Done();this.VF._Done();this.TJ._Done();C.AhL._Done.call(this);},_ReInit:
function(){C.AhL._ReInit.call(this);this.Y._ReInit();this.VF._ReInit();this.TJ._ReInit(
);},_Mark:function(D){var B;C.AhL._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.VF={
_Init:function(aArg){C.AuJ._Init.call(this,aArg);this.__proto__=C.VF;this.T(A.aaR(
A.acf.A6C));},_ReInit:function(){C.AuJ._ReInit.call(this);this.T(A.aaR(A.acf.A6C
));},_className:"Demonstrator::ActionsHeader"};C.AMe={Background:null,XY:null,Y:
null,AcE:null,ZQ:null,ZP:null,AcD:null,Akc:null,Akd:null,Ake:null,Akf:null,Akg:null
,Ahq:false,Init:function(aArg){var B;A.zX([this,this.AKP],[B=A._GetAutoObject(A.
aco.GO),B.AEW,B.Ar_],0);A.pe([this,this.AKP],this);},Aks:function(G){this.Ar2(true
);},Akr:function(G){this.Ar2(false);},Ar2:function(E){if(this.Ahq===E)return;this.
Ahq=E;this.XY.Ar2(E);A.pe([this,this.Bf0],this);},AKP:function(G){var BCx=A._GetAutoObject(
A.aco.GO).Afp===2;A._GetAutoObject(A.Device.Helper).JG(this.ZP,BCx);},Bf0:function(
G){var B;if(this.Ahq)this.H(A.abI(this.M,(B=this.XY.M)[3]-B[1]));else this.H(A.abI(
this.M,((B=this.XY.M)[3]-B[1])+((B=this.Y.Dd(0x401))[3]-B[1])));},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.VF._Init.call(this.XY={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);
C.AcE._Init.call(this.AcE={I:this},0);C.ZQ._Init.call(this.ZQ={I:this},0);C.ZP._Init.
call(this.ZP={I:this},0);C.AcD._Init.call(this.AcD={I:this},0);A.acg.C9._Init.call(
this.Akc={I:this},0);A.acg.C9._Init.call(this.Akd={I:this},0);A.acg.C9._Init.call(
this.Ake={I:this},0);A.acg.C9._Init.call(this.Akf={I:this},0);A.acg.C9._Init.call(
this.Akg={I:this},0);this.__proto__=C.AMe;var B;this.H(Aao);this.Background.A1(0x3F
);this.Background.H(Aao);this.XY.A1(0x1D);this.XY.H(Cg);this.Y.H(LE);this.Y.J3(1
);this.AcE.H(AhZ);this.AcE.Ai(true);this.ZQ.H(Alb);this.ZQ.Ai(true);this.ZP.H(Om
);this.ZP.Ai(true);this.AcD.H(Xp);this.AcD.Ai(true);this.Akc.DE(Xn);this.Akc.DO(
MU);this.Akc.L(A.jb.Bb);this.Akd.DE(Aok);this.Akd.DO(AfI);this.Akd.L(A.jb.Bb);this.
Ake.DE(Ah0);this.Ake.DO(AcU);this.Ake.L(A.jb.Bb);this.Akf.DE(Aap);this.Akf.DO(Ayb
);this.Akf.L(A.jb.Bb);this.Akg.DE(Ayc);this.Akg.DO(Ayd);this.Akg.L(A.jb.Bb);this.
J(this.Background,0);this.J(this.XY,0);this.J(this.Y,0);this.J(this.AcE,0);this.
J(this.ZQ,0);this.J(this.ZP,0);this.J(this.AcD,0);this.J(this.Akc,0);this.J(this.
Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.J(this.Akg,0);this.XY.A_U([this
,this.Aks]);this.XY.A_T([this,this.Akr]);this.Y.Eo=[this,this.Bf0];this.ZQ.Bof([
B=A._GetAutoObject(A.aco.GO),B.AEW,B.Ar_]);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();this.XY._Done();this.Y._Done();this.AcE.
_Done();this.ZQ._Done();this.ZP._Done();this.AcD._Done();this.Akc._Done();this.Akd.
_Done();this.Ake._Done();this.Akf._Done();this.Akg._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
XY._ReInit();this.Y._ReInit();this.AcE._ReInit();this.ZQ._ReInit();this.ZP._ReInit(
);this.AcD._ReInit();this.Akc._ReInit();this.Akd._ReInit();this.Ake._ReInit();this.
Akf._ReInit();this.Akg._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ake)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsMenu"};C.Jx={YM:null,Ahc:null,Bn:null,C9:null,Age:function(
G){},A07:function(s){this.Age(s);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.YM={I:this},0);A.acg.Ap._Init.call(this.Ahc={I:this
},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.C9._Init.call(this.C9={I:this
},0);this.__proto__=C.Jx;this.H(Cg);this.YM.H(Aye);this.YM.L(A.jb.Text);this.Ahc.
H(Alc);this.Ahc.L(A.jb.Text);this.Ahc.Cx(0);this.Bn.J5(J$);this.Bn.KB(Oj);this.Bn.
DE(Qd);this.Bn.DO(MU);this.C9.DE(Qd);this.C9.DO(Oj);this.C9.L(A.jb.Bb);this.J(this.
YM,0);this.J(this.Ahc,0);this.J(this.Bn,0);this.J(this.C9,0);this.YM.Ax(A.aaL(A.
aci.TU));this.Ahc.Ax(A.aaL(A.aci.AUg));this.Bn.BH=[this,this.A07];},_Done:function(
){this.__proto__=A.Core.P;this.YM._Done();this.Ahc._Done();this.Bn._Done();this.
C9._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.YM._ReInit();this.Ahc._ReInit();this.Bn._ReInit();this.C9._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.YM)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsItem"};C.ZQ={Afq:null,DU:null,YL:null,BY:null,Nk:null,AhH:
null,ANN:0,Init:function(aArg){A.pe([this,this.Hg],this);},Age:function(G){var IE=
A.ab0(this.YL.String,0,10);var Il=false;switch(A._GetAutoObject(A.aco.GO).Afp){case
2:if(A._GetAutoObject(A.acq.W0).AB$)Il=A._GetAutoObject(A.aco.GO).BCM(IE);break;
case 0:case 1:Il=A._GetAutoObject(A.aco.GO).Bg0(IE);break;default:A.ab5("%s%e",As2
,A._GetAutoObject(A.aco.GO).Afp);}if(Il){IE=IE+1;this.YL.R(IE.toFixed());}},BB5:
function(G){var AJv=null;var AKF=0;switch(A._GetAutoObject(A.aco.GO).Afp){case 2:{
AJv=A.aaL(A.ach.Ara);AKF=276;}break;case 0:{AJv=A.aaL(A.ach.AjY);AKF=900;}break;
case 1:{AJv=A.aaL(C.Ax1);AKF=276;}break;default:A.ab5("%s%e",As2,A._GetAutoObject(
A.aco.GO).Afp);}this.YL.R(((AKF*1000000000000)+(A.abY(this.YL.String,0,10)%1000000000000
)).toFixed());this.YM.Ax(AJv);},Hg:function(G){var F;if(!!this.Afq)this.ATk((F=this.
Afq,F[1].call(F[0])));A.pe([this,this.BB5],this);A.we(this,0);},Bof:function(E){
if(A.aaZ(this.Afq,E))return;if(!!this.Afq)A.z$([this,this.Hg],this.Afq,0);this.Afq=
E;if(!!E)A.zX([this,this.Hg],this.Afq,0);if(!!E)A.pe([this,this.Hg],this);},ATk:
function(E){var F;if(this.ANN===E)return;this.ANN=E;if(!!this.Afq)(F=this.Afq,F[
2].call(F[0],E));A.abo([this,this.A9a,this.ATk],0);},A9a:function(){return this.
ANN;},_Init:function(aArg){C.Jx._Init.call(this,aArg);A.acr.DU._Init.call(this.DU={
I:this},0);C.Akn._Init.call(this.YL={I:this},0);A.acg.BY._Init.call(this.BY={I:this
},0);A.acg.Ap._Init.call(this.Nk={I:this},0);C.AhH._Init.call(this.AhH={I:this},
0);this.__proto__=C.ZQ;this.DU.H(Ayf);this.DU.Ar1(120);this.DU.GQ=30;this.DU.ATi(
A.jb.Rk);this.DU.A_k(A.jb.CV);this.DU.A_p(A.jb.CV);this.DU.ATj(A.jb.Rk);this.DU.
A_q(A.jb.Text);this.DU.A_l(A.jb.AV);this.DU.A_r(A.jb.Bm);this.DU.A_o(A.jb.AV);this.
DU.A_n(A.jb.Rk);this.Bn.J5(Ayg);this.Bn.DO(Pb);this.YL.H(Rr);this.YL.R(Ayh);this.
YL.L(A.jb.Text);this.BY.H(U5);this.BY.Nx(2);this.BY.L(A.jb.Text);this.Nk.H(As3);
this.Nk.L(A.jb.Text);this.Nk.A4(0xC);this.Nk.Cx(3);this.J(this.DU,-2);this.J(this.
YL,-1);this.J(this.BY,0);this.J(this.Nk,0);this.DU.Au([this,this.A9a,this.ATk]);
this.DU.A_x(this.AhH);this.DU.ArT(A.aaL(A.fl.Bg));this.DU.AwS(A.aaL(A.fl.Bg));this.
Nk.Ax(A.aaL(A.ach.Ajv));this.Init(aArg);},_Done:function(){this.__proto__=C.Jx;this.
DU._Done();this.YL._Done();this.BY._Done();this.Nk._Done();this.AhH._Done();C.Jx.
_Done.call(this);},_ReInit:function(){C.Jx._ReInit.call(this);this.DU._ReInit();
this.YL._ReInit();this.BY._ReInit();this.Nk._ReInit();this.AhH._ReInit();this.DU.
ArT(A.aaL(A.fl.Bg));this.DU.AwS(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.Jx._Mark.
call(this,D);if((B=this.Afq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AhH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.AcE={UQ:null,O2:null,A40:0,Init:function(aArg){var B;A.zX([this,this.BBH],[B=
A._GetAutoObject(A.aco.GO),B.AS0,B.ATO],0);A.zX([this,this.AAU],[B=A._GetAutoObject(
A.Device.Device),B.ArI,B.Atu],0);A.pe([this,this.AAU],this);},Aj:function(Ae){C.
Jx.Aj.call(this,Ae);this.O2.Z(!A._GetAutoObject(A.aco.GO).Axz);},Age:function(G){
var B;A._GetAutoObject(A.aco.GO).BfC(this);},AAU:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A40){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.O2.R(A.abk(A._GetAutoObject(A.aco.GO).W4/100,0,1)
);break;case 1:{var Auy=A._GetAutoObject(A.Device.Converter).AVy(A._GetAutoObject(
A.aco.GO).W4/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.O2.R(
A.abk(Auy,0,1));}break;default:A.ab5("%s%e",Ayi,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A40=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BBq:function(G){var B;var Agv=A.abX(this.O2.String,0);Agv=A._GetAutoObject(A.Device.
Converter).AVy(Agv,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agv*=100;
A._GetAutoObject(A.aco.GO).AF0(Math.round(Agv)|0);},BBH:function(G){this.Am();},
_Init:function(aArg){C.Jx._Init.call(this,aArg);A.acs.UQ._Init.call(this.UQ={I:this
},0);C.O2._Init.call(this.O2={I:this},0);this.__proto__=C.AcE;var B;this.UQ.H(Ayj
);this.UQ.A_N(A.aaR(A.acf.A5P));this.O2.H(Ald);this.O2.R(Ayk);this.O2.L(A.jb.Text
);this.O2.BmP(true);this.A40=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UQ,0);this.J(this.O2,0);this.YM.Ax(A.aaL(A.ach.Ag9));this.UQ.Au([B=A._GetAutoObject(
A.aco.GO),B.AS0,B.ATO]);this.UQ.OnSetAppearance(A._GetAutoObject(A.acx.Au3));this.
O2.Dk=[this,this.BBq];this.Init(aArg);},_Done:function(){this.__proto__=C.Jx;this.
UQ._Done();this.O2._Done();C.Jx._Done.call(this);},_ReInit:function(){C.Jx._ReInit.
call(this);this.UQ._ReInit();this.O2._ReInit();this.UQ.A_N(A.aaR(A.acf.A5P));},_Mark:
function(D){var B;C.Jx._Mark.call(this,D);if((B=this.UQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Ark={Q:null,BY:null,Bn:null,AgO:null,Ana:null,Am$:null,Arq:null,Text:null,Hp:
null,Ap:null,CZ:null,Arp:null,Arr:null,Apk:false,Bl:function(aSize){this.Hp.H(A.
abK(this.Hp.M,aSize));this.BY.AxG(1);this.BY.JB(0,40);this.BY.Fj(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BY.Fj(0,20,20,12.5,12.5,90,270,10);this.BY.VZ(0);},Aj:
function(Ae){var B;var F;A.Core.P.Aj.call(this,Ae);var IG=((Ae&0x40)===0x40);if(
IG){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgO.As(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgO.As(false
);this.CZ.Z(false);this.Ap.Z(true);}this.Apk=IG;},Age:function(G){var B;if(!((this.
U&0x80)===0x80))this.Ip().AM4(this);},A8R:function(G){},Bbw:function(s){this.A8R(
s);},BkZ:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CZ.H(A.abM(this.CZ.M,A.aaI(this.Text.M)[0]));else{this.CZ.H(A.abM(this.CZ.M
,this.Text.AO2(0)[2]+2));this.CZ.H(A.abO(this.CZ.M,this.Text.AO2(0)[1]));this.CZ.
H(A.abI(this.CZ.M,(B=this.Text.AO2(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8P:function(G){},Bbv:function(s){this.A8P(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);}
,Hg:function(G){this.Am();},Bms:function(G){var B;if(((this.U&0x80)===0x80))this.
Ip().ACV(this);},BfJ:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.HA._Init.call(this.BY={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TP._Init.call(this.AgO={I:this},0);A.Core.BG._Init.call(this.Ana={
I:this},0);A.Core.BG._Init.call(this.Am$={I:this},0);A.Core.BG._Init.call(this.Arq={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hp._Init.call(this.
Hp={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AK._Init.call(this.
CZ={I:this},0);A.Core.BG._Init.call(this.Arp={I:this},0);A.Core.BG._Init.call(this.
Arr={I:this},0);this.__proto__=C.Ark;var B;this.H(AfJ);this.Bn.A1(0x3F);this.Bn.
J5(J$);this.Bn.KB(Aol);this.Bn.DE(I2);this.Bn.DO(Rp);this.AgO.Fq(530);this.AgO.Ux(
530);this.Ana.Filter=143;this.Am$.Filter=45;this.Arq.Filter=1;this.Text.A1(0x3F);
this.Text.H(AfJ);this.Text.Jg(true);this.Text.A4(0x12);this.Text.L(0xFFB3B3B3);this.
Hp.H(AfJ);this.Hp.L(0xFFB3B3B3);this.Hp.Nx(1);this.Ap.H(Aom);this.CZ.H(As4);this.
CZ.L(0xFFB3B3B3);this.CZ.Z(false);this.Arp.Filter=138;this.Arr.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hp,0);this.J(this.Ap,0);this.J(this.CZ
,0);this.Bn.Lt=[this,this.Age];this.AgO.Q=[B=this.CZ,B.Fp,B.Z];this.Ana.BH=[this
,this.Bbw];this.Ana.D3=[this,this.Bbw];this.Am$.BH=[this,this.Bbv];this.Am$.D3=[
this,this.Bbv];this.Arq.BH=[this,this.Bms];this.Text.Q9([this,this.BkZ]);this.Text.
S(A.aaL(A.fl.Ak));this.Hp.ZF(this.BY);this.Ap.Ax(null);this.Arp.BH=[this,this.BfJ
];this.Arr.BH=[this,this.BfJ];},_Done:function(){this.__proto__=A.Core.P;this.BY.
_Done();this.Bn._Done();this.AgO._Done();this.Ana._Done();this.Am$._Done();this.
Arq._Done();this.Text._Done();this.Hp._Done();this.Ap._Done();this.CZ._Done();this.
Arp._Done();this.Arr._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BY._ReInit();this.Bn._ReInit();this.AgO._ReInit();this.
Ana._ReInit();this.Am$._ReInit();this.Arq._ReInit();this.Text._ReInit();this.Hp.
_ReInit();this.Ap._ReInit();this.CZ._ReInit();this.Arp._ReInit();this.Arr._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arp)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aex={Background:null,YA:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);C.YA._Init.call(this.YA={I:this
},0);this.__proto__=C.Aex;var B;this.H(AcV);this.Background.H(AcV);this.YA.A1(0x1D
);this.YA.H(As5);this.J(this.Background,0);this.J(this.YA,0);this.YA.Au([B=A._GetAutoObject(
A.aco.AgR),B.A9I,B.AFV]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.YA._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.YA._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.O2={Init:function(aArg){var B;A.zX([this,this.AAU],[B=A._GetAutoObject(A.Device.
Device),B.ArI,B.Atu],0);A.pe([this,this.AAU],this);},Aj:function(Ae){var B;C.Akn.
Aj.call(this,Ae);var IG=((this.U&0x40)===0x40);if(!IG&&(this.String.length>0))this.
Text.R(((this.String+As6)+A._GetAutoObject(A.acj.Temperature).AlQ())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D9>this.String.
length)this.D9=this.String.length;},AAU:function(G){this.Am();},_Init:function(aArg
){C.Akn._Init.call(this,aArg);this.__proto__=C.O2;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akn={B9:null,Dk:null,I3:null,Cr:null,AmJ:null,Sn:null,HH:null,Bn:null,Text:null
,CZ:null,AqD:null,Ask:null,BY:null,Hp:null,ArE:null,Aq8:null,AqQ:null,String:A.jV
,D9:0,AR:0xFFB3B3B3,Av3:15,ANV:false,LK:false,Bl:function(aSize){this.Hp.H(A.abK(
this.Hp.M,aSize));this.BY.AxG(1);this.BY.JB(0,40);this.BY.Fj(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BY.Fj(0,20,20,12.5,12.5,90,270,10);this.BY.VZ(0);},Aj:function(
Ae){var B;A.acn.Jk.Aj.call(this,Ae);if(((Ae&0x40)===0x40))this.I3.As(true);else{
this.I3.As(false);this.CZ.Z(false);}},A4_:function(G){var B;var Bd=this.Text.M;var
NJ=0;var NK=0;if(this.CZ.Eu[0]<Bd[0])NJ=Bd[0]-this.CZ.Eu[0];if(this.CZ.Eu[0]>Bd[
2])NJ=Bd[2]-this.CZ.Eu[0];if(this.CZ.Eu[1]<Bd[1])NK=Bd[1]-this.CZ.Eu[1];if(this.
CZ.EE[1]>Bd[3])NK=Bd[3]-this.CZ.EE[1];if(!!NJ||!!NK)this.Text.Gi(A.abf(this.Text.
Bs,[NJ,NK]));NJ=this.Text.Bs[0];NK=this.Text.Bs[1];var C7=[(B=this.Text.Dd())[2]-
B[0],B[3]-B[1]];if(C7[0]<=((B=this.Text.M)[2]-B[0]))NJ=0;if(C7[1]<=((B=this.Text.
M)[3]-B[1]))NK=0;this.Text.Gi([NJ,NK]);},Amr:function(G){if(!this.B9)return;var A4A=
this.Text.AG3(this.D9);var pos=this.Text.Afm(A4A);this.CZ.DO(A.abe(pos,[0,this.B9.
Ascent]));this.CZ.DE(A.abf(pos,[0,this.B9.Descent]));if(this.I3.Bw){this.I3.As(false
);this.I3.As(true);}if(this.LK){A.pe([this,this.A4_],this);this.LK=false;}},AAQ:
function(G){if(!this.A7z(0x80))this.Ip().AM4(this);var EI=this.Text.AUk(this.Bn.
H4);var Vq=this.Text.AnX(EI);if(Vq!==this.D9){this.D9=Vq;A.pe([this,this.Amr],this
);this.LK=true;}},AAJ:function(G){if(!this.B9)return;var EI=this.Text.AG3(this.D9
);if(this.Cr.CP===6){EI=[EI[0]-1,EI[1]];if(this.Text.AnX(EI)===this.D9){EI=[EI[0
],EI[1]-1];EI=[this.Text.ADi(EI[1]).length,EI[1]];}}if(this.Cr.CP===7){EI=[EI[0]+
1,EI[1]];if(this.Text.AnX(EI)===this.D9){EI=[EI[0],EI[1]+1];EI=[0,EI[1]];}}var Vq=
this.Text.AnX(EI);if(Vq!==this.D9){this.D9=Vq;A.pe([this,this.Amr],this);this.LK=
true;}},Bft:function(G){if(!this.D9)return;this.R(A.ab1(this.String,this.D9-1,1)
);this.D9=this.D9-1;this.LK=true;A.pe(this.Dk,this);},AAK:function(G){if(this.D9>=
this.String.length)return;this.R(A.ab1(this.String,this.D9,1));this.LK=true;A.pe(
this.Dk,this);},Bfy:function(G){if(this.String.length>=this.Av3)return;var BzD=this.
HH.Dz;var Auw=String.fromCharCode(BzD);this.R(A.abU(this.String,Auw,this.D9));this.
D9=this.D9+Auw.length;this.LK=true;A.pe(this.Dk,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D9>(E.length+1))this.D9=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LK=true;this.Text.Gi(J$);},L:function(E){if(this.AR===E
)return;this.AR=E;this.Text.L(E);this.CZ.L(E);this.Hp.L(E);},S:function(E){if(this.
B9===E)return;this.B9=E;this.Text.S(E);this.LK=true;this.Text.Gi(J$);},BfK:function(
G){if(this.ANV===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.Av3)return;this.R(A.abU(this.String,Tj,this.
D9));this.D9=this.D9+1;this.LK=true;A.pe(this.Dk,this);},Bcj:function(s){this.BfK(
s);},BmP:function(E){if(this.ANV===E)return;this.ANV=E;if(E===false){var Bgr=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bgr>=0)this.R(A.abV(this.String,Bgr
));}this.LK=true;this.Text.Gi(J$);},BnV:function(E){if(this.Av3===E)return;this.
Av3=E;this.R(A.abV(this.String,E));this.LK=true;this.Text.Gi(J$);},BBy:function(
G){if(this.A7z(0x80)){this.Ip().ACV(this);this.Ct(0x10,0x0);}this.Am();},BBm:function(
G){var Vq=this.String.length;if(Vq!==this.D9){this.D9=Vq;A.pe([this,this.Amr],this
);this.LK=true;}},BBp:function(G){if(!!this.D9){this.D9=0;A.pe([this,this.Amr],this
);this.LK=true;}},_Init:function(aArg){A.acn.Jk._Init.call(this,aArg);A.acl.TP._Init.
call(this.I3={I:this},0);A.Core.BG._Init.call(this.Cr={I:this},0);A.Core.BG._Init.
call(this.AmJ={I:this},0);A.Core.BG._Init.call(this.Sn={I:this},0);A.Core.BG._Init.
call(this.HH={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C9._Init.call(this.CZ={I:this},0);A.Core.BG._Init.
call(this.AqD={I:this},0);A.Core.BG._Init.call(this.Ask={I:this},0);A.Graphics.HA.
_Init.call(this.BY={I:this},0);A.acg.Hp._Init.call(this.Hp={I:this},0);A.Core.BG.
_Init.call(this.ArE={I:this},0);A.Core.BG._Init.call(this.Aq8={I:this},0);A.Core.
BG._Init.call(this.AqQ={I:this},0);this.__proto__=C.Akn;var B;this.H(AfJ);this.I3.
B4=false;this.I3.Cy=true;this.I3.Fq(500);this.I3.Ux(500);this.Cr.Filter=147;this.
AmJ.Filter=45;this.Sn.Filter=44;this.HH.Filter=143;this.Bn.A1(0x3F);this.Bn.J5(Rp
);this.Bn.KB(I2);this.Bn.DE(Aol);this.Bn.DO(J$);this.Bn.AFG(3);this.Text.A1(0x3F
);this.Text.H(AfJ);this.Text.Lx(false);this.Text.A4(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CZ.DE(As7);this.CZ.DO(Aon);this.CZ.A$o(2);this.CZ.A$n(2);
this.CZ.L(0xFFB3B3B3);this.CZ.Z(false);this.AqD.Filter=138;this.Ask.Filter=137;this.
Hp.H(AfJ);this.Hp.L(0xFFB3B3B3);this.Hp.Nx(1);this.ArE.Filter=1;this.Aq8.Filter=
41;this.AqQ.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CZ,0);this.
J(this.Hp,0);this.I3.Q=[B=this.CZ,B.Fp,B.Z];this.Cr.BH=[this,this.AAJ];this.Cr.D3=[
this,this.AAJ];this.AmJ.BH=[this,this.Bft];this.AmJ.D3=[this,this.Bft];this.Sn.BH=[
this,this.AAK];this.Sn.D3=[this,this.AAK];this.HH.BH=[this,this.Bfy];this.HH.D3=[
this,this.Bfy];this.Bn.BH=[this,this.AAQ];this.Text.Q9([this,this.Amr]);this.Text.
S(A.aaL(A.fl.Ak));this.B9=A.aaL(A.fl.Ak);this.AqD.BH=[this,this.Bcj];this.Ask.BH=[
this,this.Bcj];this.Hp.ZF(this.BY);this.ArE.BH=[this,this.BBy];this.Aq8.BH=[this
,this.BBp];this.AqQ.BH=[this,this.BBm];},_Done:function(){this.__proto__=A.acn.Jk;
this.I3._Done();this.Cr._Done();this.AmJ._Done();this.Sn._Done();this.HH._Done();
this.Bn._Done();this.Text._Done();this.CZ._Done();this.AqD._Done();this.Ask._Done(
);this.BY._Done();this.Hp._Done();this.ArE._Done();this.Aq8._Done();this.AqQ._Done(
);A.acn.Jk._Done.call(this);},_ReInit:function(){A.acn.Jk._ReInit.call(this);this.
I3._ReInit();this.Cr._ReInit();this.AmJ._ReInit();this.Sn._ReInit();this.HH._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CZ._ReInit();this.AqD._ReInit();this.
Ask._ReInit();this.BY._ReInit();this.Hp._ReInit();this.ArE._ReInit();this.Aq8._ReInit(
);this.AqQ._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jk._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AqD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ask)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArE)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqQ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.AcD={LabelDataSync:
null,Age:function(G){var B;A.pe([B=A._GetAutoObject(A.acq.W0),B.BCX],this);},_Init:
function(aArg){C.Jx._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.AcD;this.LabelDataSync.H(As8);this.LabelDataSync.R(A.
aaR(A.acf.A6r));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YM.Ax(A.aaL(C.AVp));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.AY(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jx;this.LabelDataSync._Done();
C.Jx._Done.call(this);},_ReInit:function(){C.Jx._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A6r));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jx._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVp={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abn={TimespanDaysToString:null,AvA:
function(aIndex){if(this.Aq1()>aIndex)return this.TimespanDaysToString.BU(aIndex
);A.ab5("%s",Ale);return A.jV;},Aq1:function(){return 4;},C8:function(aIndex){var
Ajc=0;switch(aIndex){case 0:Ajc=0;break;case 1:Ajc=1;break;case 2:Ajc=2;break;case
3:Ajc=3;break;default:throw new Error(Ayl+aIndex.toFixed());}return Ajc;},_Init:
function(aArg){A.acr.V0._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abn;},_Done:function(
){this.__proto__=A.acr.V0;this.TimespanDaysToString._Done();A.acr.V0._Done.call(
this);},_ReInit:function(){A.acr.V0._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acr.V0._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGK={GN:0,AV9:1,Hl:2,Year:3};C.ACS={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.Ax1={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZP={Aem:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bq,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Dr());var A2g=Av.Format(Ix);this.Aem.R(A2g);},
Age:function(G){var B;var JM=this.Aem.String;var O;O=JM.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){JM=A.ab1(JM,O,1);O=JM.indexOf(String.fromCharCode(0x2E),O);
}JM=JM+Aym;JM=JM+A._GetAutoObject(A.acj.VO).ADd(JM).toFixed();var A2g=A._GetAutoObject(
A.Device.AkJ).Bgf(JM);A._GetAutoObject(A.aco.GO).BCN(((B=(A2g|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jx._Init.call(this,aArg);C.ANS._Init.call(this.Aem={
I:this},0);this.__proto__=C.ZP;this.Aem.H(Rr);this.Aem.L(A.jb.Text);this.Aem.BnV(
10);this.J(this.Aem,-1);this.YM.Ax(A.aaL(A.ach.Ara));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jx;this.Aem._Done();C.Jx._Done.call(this);},_ReInit:function(
){C.Jx._ReInit.call(this);this.Aem._ReInit();},_Mark:function(D){var B;C.Jx._Mark.
call(this,D);if((B=this.Aem)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Afp={BGY:0,BGU:1,VO:2,LAST:3};C.AhH={AhI:null,AvA:function(aIndex){if(this.Aq1(
)>aIndex)return this.AhI.BU(aIndex);A.ab5("%s",Ale);return A.jV;},Aq1:function(){
return 3;},_Init:function(aArg){A.acr.V0._Init.call(this,aArg);C.AhI._Init.call(
this.AhI={I:this},0);this.__proto__=C.AhH;},_Done:function(){this.__proto__=A.acr.
V0;this.AhI._Done();A.acr.V0._Done.call(this);},_ReInit:function(){A.acr.V0._ReInit.
call(this);this.AhI._ReInit();},_Mark:function(D){var B;A.acr.V0._Mark.call(this
,D);if((B=this.AhI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhI={BU:function(A7){var BdK=A7;var ALa=A.jV;switch(BdK){case 2:ALa=A.aaR(A.
acf.VO);break;case 0:ALa=A.aaR(A.acf.Transponder);break;case 1:ALa=A.aaR(A.acf.Bjd
);break;default:throw new Error(Ayn+BdK.toFixed());}return ALa;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhI;},_className:
"Demonstrator::ScanTypeToString"};C.ANS={BfK:function(G){var Bgs=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bgs++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bgs>=2)return;if(this.String.length>=this.Av3)return;
this.R(A.abU(this.String,Tj,this.D9));this.D9=this.D9+1;this.LK=true;A.pe(this.Dk
,this);},_Init:function(aArg){C.Akn._Init.call(this,aArg);this.__proto__=C.ANS;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AV3.__proto__=A.acn.Menu;C.AUX.__proto__=A.Core.P;C.AME.__proto__=
C.A$;C.Mt.__proto__=A.Core.P;C.YA.__proto__=C.Ark;C.Abo.__proto__=A.Core.P;C.AvJ.
__proto__=A.acn.AhC;C.AMS.__proto__=C.FD;C.AuJ.__proto__=C.FD;C.A$.__proto__=A.Core.
P;C.FD.__proto__=A.Core.P;C.ANT.__proto__=A.acn.AhA;C.AhL.__proto__=A.Core.P;C.AML.
__proto__=C.AhL;C.VF.__proto__=C.AuJ;C.AMe.__proto__=A.Core.P;C.Jx.__proto__=A.Core.
P;C.ZQ.__proto__=C.Jx;C.AcE.__proto__=C.Jx;C.Ark.__proto__=A.Core.P;C.Aex.__proto__=
A.Core.P;C.O2.__proto__=C.Akn;C.Akn.__proto__=A.acn.Jk;C.AcD.__proto__=C.Jx;C.Abn.
__proto__=A.acr.V0;C.ZP.__proto__=C.Jx;C.AhH.__proto__=A.acr.V0;C.AhI.__proto__=
A.Device.EnumToString;C.ANS.__proto__=C.Akn;};C._ReInit=function(){};C.DJ=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.ANc[0]._this)&&(B._cycle!=D))B._Done(C.ANc[0]._this=null);if((B=C.
ANd[0]._this)&&(B._cycle!=D))B._Done(C.ANd[0]._this=null);if((B=C.ANe[0]._this)&&(
B._cycle!=D))B._Done(C.ANe[0]._this=null);if((B=C.ANf[0]._this)&&(B._cycle!=D))B.
_Done(C.ANf[0]._this=null);if((B=C.AQj[0]._this)&&(B._cycle!=D))B._Done(C.AQj[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.AR6[0]._this)&&(B._cycle!=D))B._Done(C.AR6[0]._this=null);if((B=C.Aju[
0]._this)&&(B._cycle!=D))B._Done(C.Aju[0]._this=null);if((B=C.AMV[0]._this)&&(B.
_cycle!=D))B._Done(C.AMV[0]._this=null);if((B=C.AsA[0]._this)&&(B._cycle!=D))B._Done(
C.AsA[0]._this=null);if((B=C.AVu[0]._this)&&(B._cycle!=D))B._Done(C.AVu[0]._this=
null);if((B=C.AHx[0]._this)&&(B._cycle!=D))B._Done(C.AHx[0]._this=null);if((B=C.
AWi[0]._this)&&(B._cycle!=D))B._Done(C.AWi[0]._this=null);if((B=C.AVp[0]._this)&&(
B._cycle!=D))B._Done(C.AVp[0]._this=null);if((B=C.ACS[0]._this)&&(B._cycle!=D))B.
_Done(C.ACS[0]._this=null);if((B=C.Ax1[0]._this)&&(B._cycle!=D))B._Done(C.Ax1[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */