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
var Cg=[0,0,200,50];var BD=[0,0,150,50];var E6=[0,50];var Hr=[150,50];var I0=[150
,0];var Iv=[0,0];
C.Ad$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADI={AxU:null,AxT:null,AVf:500,AHd:-1,AVI:0xFFFFFFFF,AHc:-1,Xb:A.wf,Boj:
function(E){if(this.AVf===E)return;this.AVf=E;A.pe([this,this.EG],this);},A$f:function(
E){if(this.AHd===E)return;this.AHd=E;A.pe([this,this.EG],this);},A$e:function(E){
if(this.AxU===E)return;this.AxU=E;A.pe([this,this.EG],this);},A$d:function(E){if(
this.AVI===E)return;this.AVI=E;A.pe([this,this.EG],this);},A$c:function(E){if(this.
AHc===E)return;this.AHc=E;A.pe([this,this.EG],this);},A$b:function(E){if(this.AxT===
E)return;this.AxT=E;A.pe([this,this.EG],this);},AGe:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Xb,E))return;this.Xb=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aod._Init.call(this,aArg);this.__proto__=C.ADI;
},_Mark:function(D){var B;C.Aod._Mark.call(this,D);if((B=this.AxU)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxT)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVB={AvW:null,AvV:null,Avf:null,Avi:null
,Avh:null,Avg:null,Avb:null,Ave:null,Avd:null,Avc:null,ARB:0xFF000000,ARE:0xFF000000
,ARD:0xFF000000,ARC:0xFF000000,ARx:0xFF000000,ARA:0xFF000000,ARz:0xFF000000,ARy:
0xFF000000,ARw:0,A7I:0xFFFFFFFF,A7L:0xFFFFFFFF,A7K:0xFFFFFFFF,A7J:0xFFFFFFFF,A7E:
0xFFFFFFFF,A7H:0xFFFFFFFF,A7G:0xFFFFFFFF,A7F:0xFFFFFFFF,A7D:0,ARv:0x12,A7C:0x12,
AOs:0x3F,AOx:-1,AOA:-1,AOz:-1,AOy:-1,AOt:-1,AOw:-1,AOv:-1,AOu:-1,Xb:A.wf,BnJ:function(
E){if(this.ARB===E)return;this.ARB=E;A.pe([this,this.EG],this);},BnM:function(E){
if(this.ARE===E)return;this.ARE=E;A.pe([this,this.EG],this);},BnL:function(E){if(
this.ARD===E)return;this.ARD=E;A.pe([this,this.EG],this);},BnK:function(E){if(this.
ARC===E)return;this.ARC=E;A.pe([this,this.EG],this);},BnF:function(E){if(this.ARx===
E)return;this.ARx=E;A.pe([this,this.EG],this);},BnI:function(E){if(this.ARA===E)
return;this.ARA=E;A.pe([this,this.EG],this);},BnH:function(E){if(this.ARz===E)return;
this.ARz=E;A.pe([this,this.EG],this);},BnG:function(E){if(this.ARy===E)return;this.
ARy=E;A.pe([this,this.EG],this);},BnE:function(E){if(this.ARw===E)return;this.ARw=
E;A.pe([this,this.EG],this);},Bns:function(E){if(this.A7I===E)return;this.A7I=E;
A.pe([this,this.EG],this);},Bnv:function(E){if(this.A7L===E)return;this.A7L=E;A.
pe([this,this.EG],this);},Bnu:function(E){if(this.A7K===E)return;this.A7K=E;A.pe([
this,this.EG],this);},Bnt:function(E){if(this.A7J===E)return;this.A7J=E;A.pe([this
,this.EG],this);},Bno:function(E){if(this.A7E===E)return;this.A7E=E;A.pe([this,this.
EG],this);},Bnr:function(E){if(this.A7H===E)return;this.A7H=E;A.pe([this,this.EG
],this);},Bnq:function(E){if(this.A7G===E)return;this.A7G=E;A.pe([this,this.EG],
this);},Bnp:function(E){if(this.A7F===E)return;this.A7F=E;A.pe([this,this.EG],this
);},Bnn:function(E){if(this.A7D===E)return;this.A7D=E;A.pe([this,this.EG],this);
},BnC:function(E){if(this.ARv===E)return;this.ARv=E;A.pe([this,this.EG],this);},
A_L:function(E){if(this.AvW===E)return;this.AvW=E;A.pe([this,this.EG],this);},A_K:
function(E){if(this.AvV===E)return;this.AvV=E;A.pe([this,this.EG],this);},Bnl:function(
E){if(this.A7C===E)return;this.A7C=E;A.pe([this,this.EG],this);},BmX:function(E){
if(this.AOs===E)return;this.AOs=E;A.pe([this,this.EG],this);},Bm_:function(E){if(
this.AOx===E)return;this.AOx=E;A.pe([this,this.EG],this);},Bnb:function(E){if(this.
AOA===E)return;this.AOA=E;A.pe([this,this.EG],this);},Bna:function(E){if(this.AOz===
E)return;this.AOz=E;A.pe([this,this.EG],this);},Bm$:function(E){if(this.AOy===E)
return;this.AOy=E;A.pe([this,this.EG],this);},Bm6:function(E){if(this.Avf===E)return;
this.Avf=E;A.pe([this,this.EG],this);},Bm9:function(E){if(this.Avi===E)return;this.
Avi=E;A.pe([this,this.EG],this);},Bm8:function(E){if(this.Avh===E)return;this.Avh=
E;A.pe([this,this.EG],this);},Bm7:function(E){if(this.Avg===E)return;this.Avg=E;
A.pe([this,this.EG],this);},Bm2:function(E){if(this.AOt===E)return;this.AOt=E;A.
pe([this,this.EG],this);},Bm5:function(E){if(this.AOw===E)return;this.AOw=E;A.pe([
this,this.EG],this);},Bm4:function(E){if(this.AOv===E)return;this.AOv=E;A.pe([this
,this.EG],this);},Bm3:function(E){if(this.AOu===E)return;this.AOu=E;A.pe([this,this.
EG],this);},BmY:function(E){if(this.Avb===E)return;this.Avb=E;A.pe([this,this.EG
],this);},Bm1:function(E){if(this.Ave===E)return;this.Ave=E;A.pe([this,this.EG],
this);},Bm0:function(E){if(this.Avd===E)return;this.Avd=E;A.pe([this,this.EG],this
);},BmZ:function(E){if(this.Avc===E)return;this.Avc=E;A.pe([this,this.EG],this);
},AGe:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Xb,E))
return;this.Xb=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aod._Init.call(
this,aArg);this.__proto__=C.AVB;},_Mark:function(D){var B;C.Aod._Mark.call(this,
D);if((B=this.AvW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Avf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Avi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avh)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Avb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ave)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Avd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avc)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aod={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aod;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADH={LS:null,LQ:null,Appearance:null
,Nf:null,Aik:0,Gd:100,Gs:0,AM:50,BgR:true,H:function(E){var B;if(!!this.Appearance
){var AzE=[E[2]-E[0],E[3]-E[1]];var Ou=AzE;if(Ou[0]<this.Appearance.Xb[0])Ou=[this.
Appearance.Xb[0],Ou[1]];if(Ou[1]<this.Appearance.Xb[1])Ou=[Ou[0],this.Appearance.
Xb[1]];var Hc=A.abe(Ou,AzE);if(!!Hc[0]){var HV=((this.PP&0x4)===0x4);var HW=((this.
PP&0x8)===0x8);if(HV&&!HW)E=A.abN(E,E[2]+Hc[0]);else if(!HV&&HW)E=[].concat(E[0]-
Hc[0],E.slice(1,4));else{E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ou[0]);}}if(!!Hc[1]){var HX=((this.PP&0x10)===0x10);var HU=((this.PP&0x20)===
0x20);if(HX&&!HU)E=[].concat(E.slice(0,3),E[3]+Hc[1]);else if(!HX&&HU)E=A.abP(E,
E[1]-Hc[1]);else{E=A.abP(E,E[1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ou[
1]);}}}A.Core.P.H.call(this,E);},Aj:function(Ae){var B;A.Core.P.Aj.call(this,Ae);
var BeX=!!this.Appearance&&!!this.Appearance.AxT;var BeY=!!this.Appearance&&!!this.
Appearance.AxU;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BeX&&!!!this.LQ){this.
LQ=A._NewObject(A.acg.NY,0);this.J(this.LQ,0);}else if(!BeX&&!!this.LQ){this.HQ(
this.LQ);this.LQ=null;}if(BeY&&!!!this.LS){this.LS=A._NewObject(A.acg.NY,0);this.
J(this.LS,0);}else if(!BeY&&!!this.LS){this.HQ(this.LS);this.LS=null;}if(!!this.
LQ){this.LQ.Ax(this.Appearance.AxT);this.LQ.L(this.Appearance.AVI);this.LQ.A_x(0x1B
);this.LQ.Ar7(54);if(this.Appearance.AHc<0){this.LQ.Zx(true);this.LQ.Cx(0);}else{
this.LQ.Zx(false);this.LQ.Cx(this.Appearance.AHc);}}if(!!this.LS){this.LS.Ax(this.
Appearance.AxU);this.LS.L(0xFFFFFFFF);this.LS.A_x(0x1E);this.LS.Ar7(35);if(this.
Appearance.AHd<0){this.LS.Zx(true);this.LS.Cx(0);}else{this.LS.Zx(false);this.LS.
Cx(this.Appearance.AHd);}}var pos=((AE[2]-AE[0])*this.Aik)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LQ&&!!this.LQ.Al){var s=this.LQ.Al.FrameSize;
var x2=AE[2]-AE[0];var Ep=pos;if(Ep>x2)Ep=x2;this.LQ.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ep,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LQ.A_O([x2-((s[0]
/3)|0),this.LQ.Ank[1]]);this.LQ.Z(true);}if(!!this.LS&&!!this.LS.Al){var s=this.
LS.Al.FrameSize;var x2=AE[2]-AE[0];var Ep=pos;if(Ep<0)Ep=0;this.LS.H([Ep,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LS.A_O([x2-((s[0]/3)|0),this.LS.Ank[1]]);this.LS.Z(true);}},AKM:function(G){var At7=
this.Aik;var ALh=0;if(!!this.Appearance)ALh=this.Appearance.AVf;if(this.BgR&&(this.
Gd!==this.Gs)){this.Aik=-this.Gs/(this.Gd-this.Gs);At7=this.Aik;this.BgR=false;}
if(this.Gd!==this.Gs)At7=(this.Um()-this.Gs)/(this.Gd-this.Gs);if(At7===this.Aik
)return;this.Nf.As(false);if(ALh<=0){this.Aik=At7;this.Am();return;}var AKT=At7-
this.Aik;if(AKT<0)AKT=-AKT;this.Nf.WN(14);this.Nf.Cy=this.Aik;this.Nf.B3=At7;this.
Nf.Fp((10+((ALh/2)|0))+((((ALh*AKT)|0)/2)|0));this.Nf.As(true);},BBf:function(G){
},BBi:function(G){this.Aik=this.Nf.A6;this.Am();},ApG:function(G){A.pe([this,this.
AKM],this);if(!!this.Appearance)this.H(this.M);this.Am();},EU:function(E){if(this.
Gd===E)return;this.Gd=E;A.pe([this,this.AKM],this);},Ge:function(E){if(this.Gs===
E)return;this.Gs=E;A.pe([this,this.AKM],this);},Um:function(){var E=this.AM;if(this.
Gs>this.Gd){if(E<this.Gd)E=this.Gd;if(E>this.Gs)E=this.Gs;}else{if(E<this.Gs)E=this.
Gs;if(E>this.Gd)E=this.Gd;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKM],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApG],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApG],E,0);A.pe([this,this.ApG],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.Nf._Init.call(this.Nf={I:this},0);this.__proto__=
C.ADH;this.H(Cg);this.Nf.WN(14);this.Nf.HP(1);this.Nf.SJ=[this,this.BBf];this.Nf.
Ahm=[this,this.BBi];},_Done:function(){this.__proto__=A.Core.P;this.Nf._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Nf.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LS)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nf)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UO={QB:null
,Vl:null,Appearance:null,Q:null,Bo:null,Do:null,CT:null,AEj:A.jV,AEi:A.jV,A31:0,
BB9:0,VU:false,H:function(E){var B;if(!!this.Appearance){var AzE=[E[2]-E[0],E[3]-
E[1]];var Ou=AzE;if(Ou[0]<this.Appearance.Xb[0])Ou=[this.Appearance.Xb[0],Ou[1]];
if(Ou[1]<this.Appearance.Xb[1])Ou=[Ou[0],this.Appearance.Xb[1]];var Hc=A.abe(Ou,
AzE);if(!!Hc[0]){var HV=((this.PP&0x4)===0x4);var HW=((this.PP&0x8)===0x8);if(HV&&
!HW)E=A.abN(E,E[2]+Hc[0]);else if(!HV&&HW)E=[].concat(E[0]-Hc[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ou[0]);}}if(!!Hc[1]){
var HX=((this.PP&0x10)===0x10);var HU=((this.PP&0x20)===0x20);if(HX&&!HU)E=[].concat(
E.slice(0,3),E[3]+Hc[1]);else if(!HX&&HU)E=A.abP(E,E[1]-Hc[1]);else{E=A.abP(E,E[
1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ou[1]);}}}A.Core.P.H.call(this,E
);},Aj:function(Ae){var B;A.Core.P.Aj.call(this,Ae);var BeW=!!this.Appearance&&(((((((
!!this.Appearance.Avc||!!this.Appearance.Avd)||!!this.Appearance.Ave)||!!this.Appearance.
Avb)||!!this.Appearance.Avg)||!!this.Appearance.Avh)||!!this.Appearance.Avi)||!!
this.Appearance.Avf);var BeZ=!!this.Appearance&&((!!this.AEi&&!!this.Appearance.
AvV)||(!!this.AEj&&!!this.Appearance.AvW));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af7;if(BeW&&!!!this.Vl){this.Vl=A._NewObject(A.acg.NY,0);this.J(this.Vl,
0);}else if(!BeW&&!!this.Vl){this.HQ(this.Vl);this.Vl=null;}if(BeZ&&!!!this.QB){
this.QB=A._NewObject(A.acg.Text,0);this.J(this.QB,0);this.QB.BmQ(true);}else if(
!BeZ&&!!this.QB){this.HQ(this.QB);this.QB=null;}if(!((Ae&0x10)===0x10))Af7=0x44;
else if(((this.CT.Down&&this.CT.YP)||this.Do.Down)||this.Bo.Bw)Af7=0x41;else if(((
Ae&0x40)===0x40))Af7=0x46;else Af7=0x45;if(!this.VU)Af7=String.fromCharCode(Af7).
toLowerCase().charCodeAt(0)||0;this.BB9=Af7;if(!!this.Vl){var bitmap;var AaB;var
EW=this.Appearance.AOs;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af7){case 0x44:{bitmap=
this.Appearance.Avh;AaB=this.Appearance.AOz;}break;case 0x41:{bitmap=this.Appearance.
Avf;AaB=this.Appearance.AOx;}break;case 0x46:{bitmap=this.Appearance.Avi;AaB=this.
Appearance.AOA;}break;case 0x45:{bitmap=this.Appearance.Avg;AaB=this.Appearance.
AOy;}break;case 0x64:{bitmap=this.Appearance.Avd;AaB=this.Appearance.AOv;}break;
case 0x61:{bitmap=this.Appearance.Avb;AaB=this.Appearance.AOt;}break;case 0x66:{
bitmap=this.Appearance.Ave;AaB=this.Appearance.AOw;}break;default:{bitmap=this.Appearance.
Avc;AaB=this.Appearance.AOu;}}this.Vl.Zx(AaB<0);this.Vl.L(0xFFFFFFFF);if(AaB<0)AaB=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HV=((EW&0x4)===0x4);var HW=((EW&0x8)===0x8
);var BZ=bitmap.FrameSize[0];if(HV&&!HW)Az=A.abN(Az,Az[0]+BZ);else if(!HV&&HW)Az=[
].concat(Az[2]-BZ,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BZ/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BZ);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HX=((EW&0x10)===0x10);var HU=((EW&0x20)===0x20);var BL=bitmap.FrameSize[1];if(
HX&&!HU)Az=[].concat(Az.slice(0,3),Az[1]+BL);else if(!HX&&HU)Az=A.abP(Az,Az[3]-BL
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BL/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BL);}}this.Vl.Cx(AaB);this.Vl.Ax(bitmap);this.Vl.H(Az);this.Vl.Ar7(16
);}if(!!this.QB){var Aij;var font;var A24;switch(Af7){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvW;A24=this.AEj;}break;default:{font=this.Appearance.
AvV;A24=this.AEi;}}switch(Af7){case 0x44:Aij=this.Appearance.ARD;break;case 0x41:
Aij=this.Appearance.ARB;break;case 0x46:Aij=this.Appearance.ARE;break;case 0x45:
Aij=this.Appearance.ARC;break;case 0x64:Aij=this.Appearance.ARz;break;case 0x61:
Aij=this.Appearance.ARx;break;case 0x66:Aij=this.Appearance.ARA;break;default:Aij=
this.Appearance.ARy;}this.QB.H([AE[0]+this.Appearance.ARw,AE[1],AE[2],AE[3]]);this.
QB.A4(this.Appearance.ARv);this.QB.S(font);this.QB.R(A24);this.QB.L(Aij);this.QB.
Lu(true);this.QB.BmP(true);this.QB.Ar7(92);}this.ExtendClipping(0,0,0,0);{var AuA=
AE;this.CT.DO(AuA.slice(0,2));this.CT.Kz(AuA.slice(2,4));this.CT.DE([AuA[2],AuA[
1]]);this.CT.J2([AuA[0],AuA[3]]);}},ApG:function(G){var Be8=this.Do.Filter;this.
Do.Filter=149;if(!Be8&&!!this.Do.Filter)this.Ct(0x4,0x0);if(!!Be8&&!this.Do.Filter
)this.Ct(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Hg:function(G){
var F;if(!!this.Q)this.ArM((F=this.Q,F[1].call(F[0])));},Qu:function(G){var F;this.
Am();this.ArM(!this.VU);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VU));A.abo(this.
Q,0);}},BBF:function(G){var F;var ApR=0;if(!!this.Appearance)ApR=50;this.CT.As(true
);this.Am();if(((this.Do.Bq-this.A31)|0)>=ApR){this.ArM(!this.VU);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VU));A.abo(this.Q,0);}}else{this.Bo.WK(ApR-((this.Do.
Bq-this.A31)|0));this.Bo.As(true);}},AiO:function(G){var F;this.CT.As(false);this.
Am();if(this.Bo.Bw){this.Bo.As(false);this.ArM(!this.VU);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VU));A.abo(this.Q,0);}}this.A31=this.Do.Bq;},BBl:function(G){
this.Am();},BBh:function(G){this.Am();},AAR:function(G){var F;var ApR=0;if(!!this.
Appearance)ApR=50;this.Do.Bw=true;if(!this.CT.YP)return;if(this.CT.NQ)return;if(
this.CT.Jy>=ApR){this.ArM(!this.VU);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VU
));A.abo(this.Q,0);}}else{this.Bo.WK(ApR-this.CT.Jy);this.Bo.As(true);}},AAQ:function(
G){var F;this.Do.Bw=false;if(this.Bo.Bw){this.Bo.As(false);this.ArM(!this.VU);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VU));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Hg],E,0);if(!!E)this.Hg(this);},ArM:function(E){if(this.VU===
E)return;this.VU=E;this.Am();},A_J:function(E){if((E===this.AEi)&&(E===this.AEj)
)return;this.AEi=E;this.AEj=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApG],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApG],E,0);A.pe([this,this.ApG],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BF._Init.call(this.Do={I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.UO;this.H(BD);this.Bo.PW(0);this.Bo.WK(50);this.Do.Filter=149;this.CT.
J2(E6);this.CT.Kz(Hr);this.CT.DE(I0);this.CT.DO(Iv);this.CT.Bn9(16);this.CT.AFG(
100);this.J(this.CT,0);this.Bo.MK=[this,this.Qu];this.Do.Lr=[this,this.BBF];this.
Do.BG=[this,this.AiO];this.CT.AE0=[this,this.BBl];this.CT.Av_=[this,this.BBh];this.
CT.Lr=[this,this.AAR];this.CT.BG=[this,this.AAQ];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Do._Done();this.CT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit(
);this.CT._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.QB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vl)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADI.__proto__=C.Aod;C.AVB.__proto__=C.Aod;C.ADH.__proto__=A.
Core.P;C.UO.__proto__=A.Core.P;};C._ReInit=function(){};C.DJ=function(D){var B;if((
B=C.Ad$[0]._this)&&(B._cycle!=D))B._Done(C.Ad$[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */