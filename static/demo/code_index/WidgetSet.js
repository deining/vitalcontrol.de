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
);if(index.acs)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
acs=(function(){var A=index;var C={};
var Cg=[0,0,200,50];var BF=[0,0,150,50];var E7=[0,50];var Hr=[150,50];var I1=[150
,0];var Iw=[0,0];
C.Aef={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADI={AxY:null,AxX:null,AVj:500,AHe:-1,AVM:0xFFFFFFFF,AHd:-1,Xd:A.wf,Bon:
function(E){if(this.AVj===E)return;this.AVj=E;A.pe([this,this.EH],this);},A$j:function(
E){if(this.AHe===E)return;this.AHe=E;A.pe([this,this.EH],this);},A$i:function(E){
if(this.AxY===E)return;this.AxY=E;A.pe([this,this.EH],this);},A$h:function(E){if(
this.AVM===E)return;this.AVM=E;A.pe([this,this.EH],this);},A$g:function(E){if(this.
AHd===E)return;this.AHd=E;A.pe([this,this.EH],this);},A$f:function(E){if(this.AxX===
E)return;this.AxX=E;A.pe([this,this.EH],this);},AGe:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Xd,E))return;this.Xd=E;A.pe([this,this.EH
],this);},_Init:function(aArg){C.Aoj._Init.call(this,aArg);this.__proto__=C.ADI;
},_Mark:function(D){var B;C.Aoj._Mark.call(this,D);if((B=this.AxY)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVF={Av0:null,AvZ:null,Avj:null,Avm:null
,Avl:null,Avk:null,Avf:null,Avi:null,Avh:null,Avg:null,ARF:0xFF000000,ARI:0xFF000000
,ARH:0xFF000000,ARG:0xFF000000,ARB:0xFF000000,ARE:0xFF000000,ARD:0xFF000000,ARC:
0xFF000000,ARA:0,A7M:0xFFFFFFFF,A7P:0xFFFFFFFF,A7O:0xFFFFFFFF,A7N:0xFFFFFFFF,A7I:
0xFFFFFFFF,A7L:0xFFFFFFFF,A7K:0xFFFFFFFF,A7J:0xFFFFFFFF,A7H:0,ARz:0x12,A7G:0x12,
AOw:0x3F,AOB:-1,AOE:-1,AOD:-1,AOC:-1,AOx:-1,AOA:-1,AOz:-1,AOy:-1,Xd:A.wf,BnN:function(
E){if(this.ARF===E)return;this.ARF=E;A.pe([this,this.EH],this);},BnQ:function(E){
if(this.ARI===E)return;this.ARI=E;A.pe([this,this.EH],this);},BnP:function(E){if(
this.ARH===E)return;this.ARH=E;A.pe([this,this.EH],this);},BnO:function(E){if(this.
ARG===E)return;this.ARG=E;A.pe([this,this.EH],this);},BnJ:function(E){if(this.ARB===
E)return;this.ARB=E;A.pe([this,this.EH],this);},BnM:function(E){if(this.ARE===E)
return;this.ARE=E;A.pe([this,this.EH],this);},BnL:function(E){if(this.ARD===E)return;
this.ARD=E;A.pe([this,this.EH],this);},BnK:function(E){if(this.ARC===E)return;this.
ARC=E;A.pe([this,this.EH],this);},BnI:function(E){if(this.ARA===E)return;this.ARA=
E;A.pe([this,this.EH],this);},Bnw:function(E){if(this.A7M===E)return;this.A7M=E;
A.pe([this,this.EH],this);},Bnz:function(E){if(this.A7P===E)return;this.A7P=E;A.
pe([this,this.EH],this);},Bny:function(E){if(this.A7O===E)return;this.A7O=E;A.pe([
this,this.EH],this);},Bnx:function(E){if(this.A7N===E)return;this.A7N=E;A.pe([this
,this.EH],this);},Bns:function(E){if(this.A7I===E)return;this.A7I=E;A.pe([this,this.
EH],this);},Bnv:function(E){if(this.A7L===E)return;this.A7L=E;A.pe([this,this.EH
],this);},Bnu:function(E){if(this.A7K===E)return;this.A7K=E;A.pe([this,this.EH],
this);},Bnt:function(E){if(this.A7J===E)return;this.A7J=E;A.pe([this,this.EH],this
);},Bnr:function(E){if(this.A7H===E)return;this.A7H=E;A.pe([this,this.EH],this);
},BnG:function(E){if(this.ARz===E)return;this.ARz=E;A.pe([this,this.EH],this);},
A_P:function(E){if(this.Av0===E)return;this.Av0=E;A.pe([this,this.EH],this);},A_O:
function(E){if(this.AvZ===E)return;this.AvZ=E;A.pe([this,this.EH],this);},Bnp:function(
E){if(this.A7G===E)return;this.A7G=E;A.pe([this,this.EH],this);},Bm1:function(E){
if(this.AOw===E)return;this.AOw=E;A.pe([this,this.EH],this);},Bnc:function(E){if(
this.AOB===E)return;this.AOB=E;A.pe([this,this.EH],this);},Bnf:function(E){if(this.
AOE===E)return;this.AOE=E;A.pe([this,this.EH],this);},Bne:function(E){if(this.AOD===
E)return;this.AOD=E;A.pe([this,this.EH],this);},Bnd:function(E){if(this.AOC===E)
return;this.AOC=E;A.pe([this,this.EH],this);},Bm_:function(E){if(this.Avj===E)return;
this.Avj=E;A.pe([this,this.EH],this);},Bnb:function(E){if(this.Avm===E)return;this.
Avm=E;A.pe([this,this.EH],this);},Bna:function(E){if(this.Avl===E)return;this.Avl=
E;A.pe([this,this.EH],this);},Bm$:function(E){if(this.Avk===E)return;this.Avk=E;
A.pe([this,this.EH],this);},Bm6:function(E){if(this.AOx===E)return;this.AOx=E;A.
pe([this,this.EH],this);},Bm9:function(E){if(this.AOA===E)return;this.AOA=E;A.pe([
this,this.EH],this);},Bm8:function(E){if(this.AOz===E)return;this.AOz=E;A.pe([this
,this.EH],this);},Bm7:function(E){if(this.AOy===E)return;this.AOy=E;A.pe([this,this.
EH],this);},Bm2:function(E){if(this.Avf===E)return;this.Avf=E;A.pe([this,this.EH
],this);},Bm5:function(E){if(this.Avi===E)return;this.Avi=E;A.pe([this,this.EH],
this);},Bm4:function(E){if(this.Avh===E)return;this.Avh=E;A.pe([this,this.EH],this
);},Bm3:function(E){if(this.Avg===E)return;this.Avg=E;A.pe([this,this.EH],this);
},AGe:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Xd,E))
return;this.Xd=E;A.pe([this,this.EH],this);},_Init:function(aArg){C.Aoj._Init.call(
this,aArg);this.__proto__=C.AVF;},_Mark:function(D){var B;C.Aoj._Mark.call(this,
D);if((B=this.Av0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Avm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avl)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Avf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avi)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Avh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avg)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aoj={
EH:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aoj;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADH={LW:null,LV:null,Appearance:null
,Nh:null,Aio:0,Gg:100,Gt:0,AM:50,BgW:true,H:function(E){var B;if(!!this.Appearance
){var AzF=[E[2]-E[0],E[3]-E[1]];var Ow=AzF;if(Ow[0]<this.Appearance.Xd[0])Ow=[this.
Appearance.Xd[0],Ow[1]];if(Ow[1]<this.Appearance.Xd[1])Ow=[Ow[0],this.Appearance.
Xd[1]];var Hc=A.abe(Ow,AzF);if(!!Hc[0]){var HV=((this.PT&0x4)===0x4);var HW=((this.
PT&0x8)===0x8);if(HV&&!HW)E=A.abN(E,E[2]+Hc[0]);else if(!HV&&HW)E=[].concat(E[0]-
Hc[0],E.slice(1,4));else{E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ow[0]);}}if(!!Hc[1]){var HX=((this.PT&0x10)===0x10);var HU=((this.PT&0x20)===
0x20);if(HX&&!HU)E=[].concat(E.slice(0,3),E[3]+Hc[1]);else if(!HX&&HU)E=A.abP(E,
E[1]-Hc[1]);else{E=A.abP(E,E[1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ow[
1]);}}}A.Core.P.H.call(this,E);},Aj:function(Ae){var B;A.Core.P.Aj.call(this,Ae);
var Be2=!!this.Appearance&&!!this.Appearance.AxX;var Be3=!!this.Appearance&&!!this.
Appearance.AxY;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(Be2&&!!!this.LV){this.
LV=A._NewObject(A.acg.N1,0);this.J(this.LV,0);}else if(!Be2&&!!this.LV){this.HQ(
this.LV);this.LV=null;}if(Be3&&!!!this.LW){this.LW=A._NewObject(A.acg.N1,0);this.
J(this.LW,0);}else if(!Be3&&!!this.LW){this.HQ(this.LW);this.LW=null;}if(!!this.
LV){this.LV.Ax(this.Appearance.AxX);this.LV.L(this.Appearance.AVM);this.LV.A_B(0x1B
);this.LV.Ar$(54);if(this.Appearance.AHd<0){this.LV.Zz(true);this.LV.Cx(0);}else{
this.LV.Zz(false);this.LV.Cx(this.Appearance.AHd);}}if(!!this.LW){this.LW.Ax(this.
Appearance.AxY);this.LW.L(0xFFFFFFFF);this.LW.A_B(0x1E);this.LW.Ar$(35);if(this.
Appearance.AHe<0){this.LW.Zz(true);this.LW.Cx(0);}else{this.LW.Zz(false);this.LW.
Cx(this.Appearance.AHe);}}var pos=((AE[2]-AE[0])*this.Aio)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LV&&!!this.LV.Al){var s=this.LV.Al.FrameSize;
var x2=AE[2]-AE[0];var Eq=pos;if(Eq>x2)Eq=x2;this.LV.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Eq,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LV.A_S([x2-((s[0]
/3)|0),this.LV.Anp[1]]);this.LV.Z(true);}if(!!this.LW&&!!this.LW.Al){var s=this.
LW.Al.FrameSize;var x2=AE[2]-AE[0];var Eq=pos;if(Eq<0)Eq=0;this.LW.H([Eq,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LW.A_S([x2-((s[0]/3)|0),this.LW.Anp[1]]);this.LW.Z(true);}},AKQ:function(G){var At$=
this.Aio;var ALl=0;if(!!this.Appearance)ALl=this.Appearance.AVj;if(this.BgW&&(this.
Gg!==this.Gt)){this.Aio=-this.Gt/(this.Gg-this.Gt);At$=this.Aio;this.BgW=false;}
if(this.Gg!==this.Gt)At$=(this.Uo()-this.Gt)/(this.Gg-this.Gt);if(At$===this.Aio
)return;this.Nh.As(false);if(ALl<=0){this.Aio=At$;this.Am();return;}var AKX=At$-
this.Aio;if(AKX<0)AKX=-AKX;this.Nh.WQ(14);this.Nh.Cy=this.Aio;this.Nh.B4=At$;this.
Nh.Fq((10+((ALl/2)|0))+((((ALl*AKX)|0)/2)|0));this.Nh.As(true);},BBl:function(G){
},BBo:function(G){this.Aio=this.Nh.A6;this.Am();},ApM:function(G){A.pe([this,this.
AKQ],this);if(!!this.Appearance)this.H(this.M);this.Am();},EV:function(E){if(this.
Gg===E)return;this.Gg=E;A.pe([this,this.AKQ],this);},Gh:function(E){if(this.Gt===
E)return;this.Gt=E;A.pe([this,this.AKQ],this);},Uo:function(){var E=this.AM;if(this.
Gt>this.Gg){if(E<this.Gg)E=this.Gg;if(E>this.Gt)E=this.Gt;}else{if(E<this.Gt)E=this.
Gt;if(E>this.Gg)E=this.Gg;}return E;},By:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKQ],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApM],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApM],E,0);A.pe([this,this.ApM],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.Nh._Init.call(this.Nh={I:this},0);this.__proto__=
C.ADH;this.H(Cg);this.Nh.WQ(14);this.Nh.HP(1);this.Nh.SL=[this,this.BBl];this.Nh.
Ahr=[this,this.BBo];},_Done:function(){this.__proto__=A.Core.P;this.Nh._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Nh.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LW)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LV)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nh)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UQ={QD:null
,Vn:null,Appearance:null,Q:null,Bo:null,Do:null,CT:null,AEj:A.jV,AEi:A.jV,A35:0,
BCd:0,VX:false,H:function(E){var B;if(!!this.Appearance){var AzF=[E[2]-E[0],E[3]-
E[1]];var Ow=AzF;if(Ow[0]<this.Appearance.Xd[0])Ow=[this.Appearance.Xd[0],Ow[1]];
if(Ow[1]<this.Appearance.Xd[1])Ow=[Ow[0],this.Appearance.Xd[1]];var Hc=A.abe(Ow,
AzF);if(!!Hc[0]){var HV=((this.PT&0x4)===0x4);var HW=((this.PT&0x8)===0x8);if(HV&&
!HW)E=A.abN(E,E[2]+Hc[0]);else if(!HV&&HW)E=[].concat(E[0]-Hc[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ow[0]);}}if(!!Hc[1]){
var HX=((this.PT&0x10)===0x10);var HU=((this.PT&0x20)===0x20);if(HX&&!HU)E=[].concat(
E.slice(0,3),E[3]+Hc[1]);else if(!HX&&HU)E=A.abP(E,E[1]-Hc[1]);else{E=A.abP(E,E[
1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ow[1]);}}}A.Core.P.H.call(this,E
);},Aj:function(Ae){var B;A.Core.P.Aj.call(this,Ae);var Be1=!!this.Appearance&&(((((((
!!this.Appearance.Avg||!!this.Appearance.Avh)||!!this.Appearance.Avi)||!!this.Appearance.
Avf)||!!this.Appearance.Avk)||!!this.Appearance.Avl)||!!this.Appearance.Avm)||!!
this.Appearance.Avj);var Be4=!!this.Appearance&&((!!this.AEi&&!!this.Appearance.
AvZ)||(!!this.AEj&&!!this.Appearance.Av0));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Aga;if(Be1&&!!!this.Vn){this.Vn=A._NewObject(A.acg.N1,0);this.J(this.Vn,
0);}else if(!Be1&&!!this.Vn){this.HQ(this.Vn);this.Vn=null;}if(Be4&&!!!this.QD){
this.QD=A._NewObject(A.acg.Text,0);this.J(this.QD,0);this.QD.BmU(true);}else if(
!Be4&&!!this.QD){this.HQ(this.QD);this.QD=null;}if(!((Ae&0x10)===0x10))Aga=0x44;
else if(((this.CT.Down&&this.CT.YR)||this.Do.Down)||this.Bo.Bw)Aga=0x41;else if(((
Ae&0x40)===0x40))Aga=0x46;else Aga=0x45;if(!this.VX)Aga=String.fromCharCode(Aga).
toLowerCase().charCodeAt(0)||0;this.BCd=Aga;if(!!this.Vn){var bitmap;var AaE;var
EX=this.Appearance.AOw;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Aga){case 0x44:{bitmap=
this.Appearance.Avl;AaE=this.Appearance.AOD;}break;case 0x41:{bitmap=this.Appearance.
Avj;AaE=this.Appearance.AOB;}break;case 0x46:{bitmap=this.Appearance.Avm;AaE=this.
Appearance.AOE;}break;case 0x45:{bitmap=this.Appearance.Avk;AaE=this.Appearance.
AOC;}break;case 0x64:{bitmap=this.Appearance.Avh;AaE=this.Appearance.AOz;}break;
case 0x61:{bitmap=this.Appearance.Avf;AaE=this.Appearance.AOx;}break;case 0x66:{
bitmap=this.Appearance.Avi;AaE=this.Appearance.AOA;}break;default:{bitmap=this.Appearance.
Avg;AaE=this.Appearance.AOy;}}this.Vn.Zz(AaE<0);this.Vn.L(0xFFFFFFFF);if(AaE<0)AaE=
0;if(!!bitmap&&!((EX&0x1)===0x1)){var HV=((EX&0x4)===0x4);var HW=((EX&0x8)===0x8
);var B0=bitmap.FrameSize[0];if(HV&&!HW)Az=A.abN(Az,Az[0]+B0);else if(!HV&&HW)Az=[
].concat(Az[2]-B0,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
B0/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+B0);}}if(!!bitmap&&!((EX&0x2)===0x2)){
var HX=((EX&0x10)===0x10);var HU=((EX&0x20)===0x20);var BM=bitmap.FrameSize[1];if(
HX&&!HU)Az=[].concat(Az.slice(0,3),Az[1]+BM);else if(!HX&&HU)Az=A.abP(Az,Az[3]-BM
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BM/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BM);}}this.Vn.Cx(AaE);this.Vn.Ax(bitmap);this.Vn.H(Az);this.Vn.Ar$(16
);}if(!!this.QD){var Ain;var font;var A28;switch(Aga){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.Av0;A28=this.AEj;}break;default:{font=this.Appearance.
AvZ;A28=this.AEi;}}switch(Aga){case 0x44:Ain=this.Appearance.ARH;break;case 0x41:
Ain=this.Appearance.ARF;break;case 0x46:Ain=this.Appearance.ARI;break;case 0x45:
Ain=this.Appearance.ARG;break;case 0x64:Ain=this.Appearance.ARD;break;case 0x61:
Ain=this.Appearance.ARB;break;case 0x66:Ain=this.Appearance.ARE;break;default:Ain=
this.Appearance.ARC;}this.QD.H([AE[0]+this.Appearance.ARA,AE[1],AE[2],AE[3]]);this.
QD.A4(this.Appearance.ARz);this.QD.S(font);this.QD.R(A28);this.QD.L(Ain);this.QD.
Lx(true);this.QD.BmT(true);this.QD.Ar$(92);}this.ExtendClipping(0,0,0,0);{var AuE=
AE;this.CT.DO(AuE.slice(0,2));this.CT.KB(AuE.slice(2,4));this.CT.DE([AuE[2],AuE[
1]]);this.CT.J5([AuE[0],AuE[3]]);}},ApM:function(G){var Bfb=this.Do.Filter;this.
Do.Filter=149;if(!Bfb&&!!this.Do.Filter)this.Ct(0x4,0x0);if(!!Bfb&&!this.Do.Filter
)this.Ct(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Hg:function(G){
var F;if(!!this.Q)this.ArS((F=this.Q,F[1].call(F[0])));},Qw:function(G){var F;this.
Am();this.ArS(!this.VX);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VX));A.abo(this.
Q,0);}},BBL:function(G){var F;var ApX=0;if(!!this.Appearance)ApX=50;this.CT.As(true
);this.Am();if(((this.Do.Bq-this.A35)|0)>=ApX){this.ArS(!this.VX);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VX));A.abo(this.Q,0);}}else{this.Bo.WN(ApX-((this.Do.
Bq-this.A35)|0));this.Bo.As(true);}},AiS:function(G){var F;this.CT.As(false);this.
Am();if(this.Bo.Bw){this.Bo.As(false);this.ArS(!this.VX);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VX));A.abo(this.Q,0);}}this.A35=this.Do.Bq;},BBr:function(G){
this.Am();},BBn:function(G){this.Am();},AAR:function(G){var F;var ApX=0;if(!!this.
Appearance)ApX=50;this.Do.Bw=true;if(!this.CT.YR)return;if(this.CT.NT)return;if(
this.CT.JA>=ApX){this.ArS(!this.VX);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VX
));A.abo(this.Q,0);}}else{this.Bo.WN(ApX-this.CT.JA);this.Bo.As(true);}},AAQ:function(
G){var F;this.Do.Bw=false;if(this.Bo.Bw){this.Bo.As(false);this.ArS(!this.VX);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VX));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Hg],E,0);if(!!E)this.Hg(this);},ArS:function(E){if(this.VX===
E)return;this.VX=E;this.Am();},A_N:function(E){if((E===this.AEi)&&(E===this.AEj)
)return;this.AEi=E;this.AEj=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApM],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApM],E,0);A.pe([this,this.ApM],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BG._Init.call(this.Do={I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.UQ;this.H(BF);this.Bo.PZ(0);this.Bo.WN(50);this.Do.Filter=149;this.CT.
J5(E7);this.CT.KB(Hr);this.CT.DE(I1);this.CT.DO(Iw);this.CT.Bob(16);this.CT.AFG(
100);this.J(this.CT,0);this.Bo.MN=[this,this.Qw];this.Do.Lt=[this,this.BBL];this.
Do.BH=[this,this.AiS];this.CT.AE0=[this,this.BBr];this.CT.Awb=[this,this.BBn];this.
CT.Lt=[this,this.AAR];this.CT.BH=[this,this.AAQ];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Do._Done();this.CT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit(
);this.CT._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.QD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vn)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADI.__proto__=C.Aoj;C.AVF.__proto__=C.Aoj;C.ADH.__proto__=A.
Core.P;C.UQ.__proto__=A.Core.P;};C._ReInit=function(){};C.DJ=function(D){var B;if((
B=C.Aef[0]._this)&&(B._cycle!=D))B._Done(C.Aef[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */