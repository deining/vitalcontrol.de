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
var Cf=[0,0,200,50];var BD=[0,0,150,50];var E6=[0,50];var Hq=[150,50];var I0=[150
,0];var Iv=[0,0];
C.Ad_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADG={AxO:null,AxN:null,AVb:500,AHc:-1,AVE:0xFFFFFFFF,AHb:-1,W_:A.wf,Bn$:
function(E){if(this.AVb===E)return;this.AVb=E;A.pe([this,this.EG],this);},A_5:function(
E){if(this.AHc===E)return;this.AHc=E;A.pe([this,this.EG],this);},A_4:function(E){
if(this.AxO===E)return;this.AxO=E;A.pe([this,this.EG],this);},A_3:function(E){if(
this.AVE===E)return;this.AVE=E;A.pe([this,this.EG],this);},A_2:function(E){if(this.
AHb===E)return;this.AHb=E;A.pe([this,this.EG],this);},A_1:function(E){if(this.AxN===
E)return;this.AxN=E;A.pe([this,this.EG],this);},AGd:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W_,E))return;this.W_=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aob._Init.call(this,aArg);this.__proto__=C.ADG;
},_Mark:function(D){var B;C.Aob._Mark.call(this,D);if((B=this.AxO)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxN)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVx={AvS:null,AvR:null,Avb:null,Ave:null
,Avd:null,Avc:null,Au9:null,Ava:null,Au$:null,Au_:null,ARx:0xFF000000,ARA:0xFF000000
,ARz:0xFF000000,ARy:0xFF000000,ARt:0xFF000000,ARw:0xFF000000,ARv:0xFF000000,ARu:
0xFF000000,ARs:0,A7x:0xFFFFFFFF,A7A:0xFFFFFFFF,A7z:0xFFFFFFFF,A7y:0xFFFFFFFF,A7t:
0xFFFFFFFF,A7w:0xFFFFFFFF,A7v:0xFFFFFFFF,A7u:0xFFFFFFFF,A7s:0,ARr:0x12,A7r:0x12,
AOo:0x3F,AOt:-1,AOw:-1,AOv:-1,AOu:-1,AOp:-1,AOs:-1,AOr:-1,AOq:-1,W_:A.wf,Bnz:function(
E){if(this.ARx===E)return;this.ARx=E;A.pe([this,this.EG],this);},BnC:function(E){
if(this.ARA===E)return;this.ARA=E;A.pe([this,this.EG],this);},BnB:function(E){if(
this.ARz===E)return;this.ARz=E;A.pe([this,this.EG],this);},BnA:function(E){if(this.
ARy===E)return;this.ARy=E;A.pe([this,this.EG],this);},Bnv:function(E){if(this.ARt===
E)return;this.ARt=E;A.pe([this,this.EG],this);},Bny:function(E){if(this.ARw===E)
return;this.ARw=E;A.pe([this,this.EG],this);},Bnx:function(E){if(this.ARv===E)return;
this.ARv=E;A.pe([this,this.EG],this);},Bnw:function(E){if(this.ARu===E)return;this.
ARu=E;A.pe([this,this.EG],this);},Bnu:function(E){if(this.ARs===E)return;this.ARs=
E;A.pe([this,this.EG],this);},Bni:function(E){if(this.A7x===E)return;this.A7x=E;
A.pe([this,this.EG],this);},Bnl:function(E){if(this.A7A===E)return;this.A7A=E;A.
pe([this,this.EG],this);},Bnk:function(E){if(this.A7z===E)return;this.A7z=E;A.pe([
this,this.EG],this);},Bnj:function(E){if(this.A7y===E)return;this.A7y=E;A.pe([this
,this.EG],this);},Bne:function(E){if(this.A7t===E)return;this.A7t=E;A.pe([this,this.
EG],this);},Bnh:function(E){if(this.A7w===E)return;this.A7w=E;A.pe([this,this.EG
],this);},Bng:function(E){if(this.A7v===E)return;this.A7v=E;A.pe([this,this.EG],
this);},Bnf:function(E){if(this.A7u===E)return;this.A7u=E;A.pe([this,this.EG],this
);},Bnd:function(E){if(this.A7s===E)return;this.A7s=E;A.pe([this,this.EG],this);
},Bns:function(E){if(this.ARr===E)return;this.ARr=E;A.pe([this,this.EG],this);},
A_z:function(E){if(this.AvS===E)return;this.AvS=E;A.pe([this,this.EG],this);},A_y:
function(E){if(this.AvR===E)return;this.AvR=E;A.pe([this,this.EG],this);},Bnb:function(
E){if(this.A7r===E)return;this.A7r=E;A.pe([this,this.EG],this);},BmN:function(E){
if(this.AOo===E)return;this.AOo=E;A.pe([this,this.EG],this);},Bm0:function(E){if(
this.AOt===E)return;this.AOt=E;A.pe([this,this.EG],this);},Bm3:function(E){if(this.
AOw===E)return;this.AOw=E;A.pe([this,this.EG],this);},Bm2:function(E){if(this.AOv===
E)return;this.AOv=E;A.pe([this,this.EG],this);},Bm1:function(E){if(this.AOu===E)
return;this.AOu=E;A.pe([this,this.EG],this);},BmW:function(E){if(this.Avb===E)return;
this.Avb=E;A.pe([this,this.EG],this);},BmZ:function(E){if(this.Ave===E)return;this.
Ave=E;A.pe([this,this.EG],this);},BmY:function(E){if(this.Avd===E)return;this.Avd=
E;A.pe([this,this.EG],this);},BmX:function(E){if(this.Avc===E)return;this.Avc=E;
A.pe([this,this.EG],this);},BmS:function(E){if(this.AOp===E)return;this.AOp=E;A.
pe([this,this.EG],this);},BmV:function(E){if(this.AOs===E)return;this.AOs=E;A.pe([
this,this.EG],this);},BmU:function(E){if(this.AOr===E)return;this.AOr=E;A.pe([this
,this.EG],this);},BmT:function(E){if(this.AOq===E)return;this.AOq=E;A.pe([this,this.
EG],this);},BmO:function(E){if(this.Au9===E)return;this.Au9=E;A.pe([this,this.EG
],this);},BmR:function(E){if(this.Ava===E)return;this.Ava=E;A.pe([this,this.EG],
this);},BmQ:function(E){if(this.Au$===E)return;this.Au$=E;A.pe([this,this.EG],this
);},BmP:function(E){if(this.Au_===E)return;this.Au_=E;A.pe([this,this.EG],this);
},AGd:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W_,E))
return;this.W_=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aob._Init.call(
this,aArg);this.__proto__=C.AVx;},_Mark:function(D){var B;C.Aob._Mark.call(this,
D);if((B=this.AvS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Avb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ave)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avd)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Au9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ava)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au_)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aob={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aob;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADF={LQ:null,LP:null,Appearance:null
,Nf:null,Aik:0,Ga:100,Gr:0,AM:50,BgG:true,H:function(E){var B;if(!!this.Appearance
){var AzD=[E[2]-E[0],E[3]-E[1]];var Ou=AzD;if(Ou[0]<this.Appearance.W_[0])Ou=[this.
Appearance.W_[0],Ou[1]];if(Ou[1]<this.Appearance.W_[1])Ou=[Ou[0],this.Appearance.
W_[1]];var Hb=A.abe(Ou,AzD);if(!!Hb[0]){var HV=((this.PQ&0x4)===0x4);var HW=((this.
PQ&0x8)===0x8);if(HV&&!HW)E=A.abN(E,E[2]+Hb[0]);else if(!HV&&HW)E=[].concat(E[0]-
Hb[0],E.slice(1,4));else{E=[].concat(E[0]-((Hb[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ou[0]);}}if(!!Hb[1]){var HX=((this.PQ&0x10)===0x10);var HU=((this.PQ&0x20)===
0x20);if(HX&&!HU)E=[].concat(E.slice(0,3),E[3]+Hb[1]);else if(!HX&&HU)E=A.abP(E,
E[1]-Hb[1]);else{E=A.abP(E,E[1]-((Hb[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ou[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BeL=!!this.Appearance&&!!this.Appearance.AxN;var BeM=!!this.Appearance&&!!this.
Appearance.AxO;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BeL&&!!!this.LP){this.
LP=A._NewObject(A.acg.NY,0);this.J(this.LP,0);}else if(!BeL&&!!this.LP){this.HP(
this.LP);this.LP=null;}if(BeM&&!!!this.LQ){this.LQ=A._NewObject(A.acg.NY,0);this.
J(this.LQ,0);}else if(!BeM&&!!this.LQ){this.HP(this.LQ);this.LQ=null;}if(!!this.
LP){this.LP.Ax(this.Appearance.AxN);this.LP.L(this.Appearance.AVE);this.LP.A_l(0x1B
);this.LP.Ar6(54);if(this.Appearance.AHb<0){this.LP.Zt(true);this.LP.Cw(0);}else{
this.LP.Zt(false);this.LP.Cw(this.Appearance.AHb);}}if(!!this.LQ){this.LQ.Ax(this.
Appearance.AxO);this.LQ.L(0xFFFFFFFF);this.LQ.A_l(0x1E);this.LQ.Ar6(35);if(this.
Appearance.AHc<0){this.LQ.Zt(true);this.LQ.Cw(0);}else{this.LQ.Zt(false);this.LQ.
Cw(this.Appearance.AHc);}}var pos=((AE[2]-AE[0])*this.Aik)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LP&&!!this.LP.Al){var s=this.LP.Al.FrameSize;
var x2=AE[2]-AE[0];var Ep=pos;if(Ep>x2)Ep=x2;this.LP.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ep,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LP.A_C([x2-((s[0]
/3)|0),this.LP.Anj[1]]);this.LP.Z(true);}if(!!this.LQ&&!!this.LQ.Al){var s=this.
LQ.Al.FrameSize;var x2=AE[2]-AE[0];var Ep=pos;if(Ep<0)Ep=0;this.LQ.H([Ep,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LQ.A_C([x2-((s[0]/3)|0),this.LQ.Anj[1]]);this.LQ.Z(true);}},AKJ:function(G){var At3=
this.Aik;var ALe=0;if(!!this.Appearance)ALe=this.Appearance.AVb;if(this.BgG&&(this.
Ga!==this.Gr)){this.Aik=-this.Gr/(this.Ga-this.Gr);At3=this.Aik;this.BgG=false;}
if(this.Ga!==this.Gr)At3=(this.Uk()-this.Gr)/(this.Ga-this.Gr);if(At3===this.Aik
)return;this.Nf.As(false);if(ALe<=0){this.Aik=At3;this.Am();return;}var AKQ=At3-
this.Aik;if(AKQ<0)AKQ=-AKQ;this.Nf.WK(14);this.Nf.Cx=this.Aik;this.Nf.B3=At3;this.
Nf.Fp((10+((ALe/2)|0))+((((ALe*AKQ)|0)/2)|0));this.Nf.As(true);},BA0:function(G){
},BA3:function(G){this.Aik=this.Nf.A6;this.Am();},ApF:function(G){A.pe([this,this.
AKJ],this);if(!!this.Appearance)this.H(this.M);this.Am();},EV:function(E){if(this.
Ga===E)return;this.Ga=E;A.pe([this,this.AKJ],this);},Gb:function(E){if(this.Gr===
E)return;this.Gr=E;A.pe([this,this.AKJ],this);},Uk:function(){var E=this.AM;if(this.
Gr>this.Ga){if(E<this.Ga)E=this.Ga;if(E>this.Gr)E=this.Gr;}else{if(E<this.Gr)E=this.
Gr;if(E>this.Ga)E=this.Ga;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKJ],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApF],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApF],E,0);A.pe([this,this.ApF],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.Nf._Init.call(this.Nf={I:this},0);this.__proto__=
C.ADF;this.H(Cf);this.Nf.WK(14);this.Nf.HO(1);this.Nf.SG=[this,this.BA0];this.Nf.
Ahl=[this,this.BA3];},_Done:function(){this.__proto__=A.Core.P;this.Nf._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Nf.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LQ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LP)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nf)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UN={QB:null
,Vi:null,Appearance:null,Q:null,Bo:null,Dn:null,CT:null,AEh:A.jV,AEg:A.jV,A3S:0,
BBS:0,VQ:false,H:function(E){var B;if(!!this.Appearance){var AzD=[E[2]-E[0],E[3]-
E[1]];var Ou=AzD;if(Ou[0]<this.Appearance.W_[0])Ou=[this.Appearance.W_[0],Ou[1]];
if(Ou[1]<this.Appearance.W_[1])Ou=[Ou[0],this.Appearance.W_[1]];var Hb=A.abe(Ou,
AzD);if(!!Hb[0]){var HV=((this.PQ&0x4)===0x4);var HW=((this.PQ&0x8)===0x8);if(HV&&
!HW)E=A.abN(E,E[2]+Hb[0]);else if(!HV&&HW)E=[].concat(E[0]-Hb[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hb[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ou[0]);}}if(!!Hb[1]){
var HX=((this.PQ&0x10)===0x10);var HU=((this.PQ&0x20)===0x20);if(HX&&!HU)E=[].concat(
E.slice(0,3),E[3]+Hb[1]);else if(!HX&&HU)E=A.abP(E,E[1]-Hb[1]);else{E=A.abP(E,E[
1]-((Hb[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ou[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BeK=!!this.Appearance&&(((((((
!!this.Appearance.Au_||!!this.Appearance.Au$)||!!this.Appearance.Ava)||!!this.Appearance.
Au9)||!!this.Appearance.Avc)||!!this.Appearance.Avd)||!!this.Appearance.Ave)||!!
this.Appearance.Avb);var BeN=!!this.Appearance&&((!!this.AEg&&!!this.Appearance.
AvR)||(!!this.AEh&&!!this.Appearance.AvS));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af6;if(BeK&&!!!this.Vi){this.Vi=A._NewObject(A.acg.NY,0);this.J(this.Vi,
0);}else if(!BeK&&!!this.Vi){this.HP(this.Vi);this.Vi=null;}if(BeN&&!!!this.QB){
this.QB=A._NewObject(A.acg.Text,0);this.J(this.QB,0);this.QB.BmG(true);}else if(
!BeN&&!!this.QB){this.HP(this.QB);this.QB=null;}if(!((Ae&0x10)===0x10))Af6=0x44;
else if(((this.CT.Down&&this.CT.YM)||this.Dn.Down)||this.Bo.Bw)Af6=0x41;else if(((
Ae&0x40)===0x40))Af6=0x46;else Af6=0x45;if(!this.VQ)Af6=String.fromCharCode(Af6).
toLowerCase().charCodeAt(0)||0;this.BBS=Af6;if(!!this.Vi){var bitmap;var Aax;var
EW=this.Appearance.AOo;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af6){case 0x44:{bitmap=
this.Appearance.Avd;Aax=this.Appearance.AOv;}break;case 0x41:{bitmap=this.Appearance.
Avb;Aax=this.Appearance.AOt;}break;case 0x46:{bitmap=this.Appearance.Ave;Aax=this.
Appearance.AOw;}break;case 0x45:{bitmap=this.Appearance.Avc;Aax=this.Appearance.
AOu;}break;case 0x64:{bitmap=this.Appearance.Au$;Aax=this.Appearance.AOr;}break;
case 0x61:{bitmap=this.Appearance.Au9;Aax=this.Appearance.AOp;}break;case 0x66:{
bitmap=this.Appearance.Ava;Aax=this.Appearance.AOs;}break;default:{bitmap=this.Appearance.
Au_;Aax=this.Appearance.AOq;}}this.Vi.Zt(Aax<0);this.Vi.L(0xFFFFFFFF);if(Aax<0)Aax=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HV=((EW&0x4)===0x4);var HW=((EW&0x8)===0x8
);var BZ=bitmap.FrameSize[0];if(HV&&!HW)Az=A.abN(Az,Az[0]+BZ);else if(!HV&&HW)Az=[
].concat(Az[2]-BZ,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BZ/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BZ);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HX=((EW&0x10)===0x10);var HU=((EW&0x20)===0x20);var BL=bitmap.FrameSize[1];if(
HX&&!HU)Az=[].concat(Az.slice(0,3),Az[1]+BL);else if(!HX&&HU)Az=A.abP(Az,Az[3]-BL
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BL/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BL);}}this.Vi.Cw(Aax);this.Vi.Ax(bitmap);this.Vi.H(Az);this.Vi.Ar6(16
);}if(!!this.QB){var Aij;var font;var A2W;switch(Af6){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvS;A2W=this.AEh;}break;default:{font=this.Appearance.
AvR;A2W=this.AEg;}}switch(Af6){case 0x44:Aij=this.Appearance.ARz;break;case 0x41:
Aij=this.Appearance.ARx;break;case 0x46:Aij=this.Appearance.ARA;break;case 0x45:
Aij=this.Appearance.ARy;break;case 0x64:Aij=this.Appearance.ARv;break;case 0x61:
Aij=this.Appearance.ARt;break;case 0x66:Aij=this.Appearance.ARw;break;default:Aij=
this.Appearance.ARu;}this.QB.H([AE[0]+this.Appearance.ARs,AE[1],AE[2],AE[3]]);this.
QB.A4(this.Appearance.ARr);this.QB.S(font);this.QB.R(A2W);this.QB.L(Aij);this.QB.
Lv(true);this.QB.BmF(true);this.QB.Ar6(92);}this.ExtendClipping(0,0,0,0);{var Auw=
AE;this.CT.DN(Auw.slice(0,2));this.CT.Kz(Auw.slice(2,4));this.CT.DD([Auw[2],Auw[
1]]);this.CT.J1([Auw[0],Auw[3]]);}},ApF:function(G){var BeW=this.Dn.Filter;this.
Dn.Filter=149;if(!BeW&&!!this.Dn.Filter)this.Cs(0x4,0x0);if(!!BeW&&!this.Dn.Filter
)this.Cs(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Hf:function(G){
var F;if(!!this.Q)this.ArL((F=this.Q,F[1].call(F[0])));},Qu:function(G){var F;this.
Am();this.ArL(!this.VQ);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VQ));A.abo(this.
Q,0);}},BBo:function(G){var F;var ApQ=0;if(!!this.Appearance)ApQ=50;this.CT.As(true
);this.Am();if(((this.Dn.Bs-this.A3S)|0)>=ApQ){this.ArL(!this.VQ);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VQ));A.abo(this.Q,0);}}else{this.Bo.WI(ApQ-((this.Dn.
Bs-this.A3S)|0));this.Bo.As(true);}},AiO:function(G){var F;this.CT.As(false);this.
Am();if(this.Bo.Bw){this.Bo.As(false);this.ArL(!this.VQ);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VQ));A.abo(this.Q,0);}}this.A3S=this.Dn.Bs;},BA6:function(G){
this.Am();},BA2:function(G){this.Am();},AAP:function(G){var F;var ApQ=0;if(!!this.
Appearance)ApQ=50;this.Dn.Bw=true;if(!this.CT.YM)return;if(this.CT.NQ)return;if(
this.CT.Jx>=ApQ){this.ArL(!this.VQ);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VQ
));A.abo(this.Q,0);}}else{this.Bo.WI(ApQ-this.CT.Jx);this.Bo.As(true);}},AAO:function(
G){var F;this.Dn.Bw=false;if(this.Bo.Bw){this.Bo.As(false);this.ArL(!this.VQ);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VQ));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hf],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Hf],E,0);if(!!E)this.Hf(this);},ArL:function(E){if(this.VQ===
E)return;this.VQ=E;this.Am();},A_x:function(E){if((E===this.AEg)&&(E===this.AEh)
)return;this.AEg=E;this.AEh=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApF],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApF],E,0);A.pe([this,this.ApF],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BF._Init.call(this.Dn={I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.UN;this.H(BD);this.Bo.PX(0);this.Bo.WI(50);this.Dn.Filter=149;this.CT.
J1(E6);this.CT.Kz(Hq);this.CT.DD(I0);this.CT.DN(Iv);this.CT.BnZ(16);this.CT.AFF(
100);this.J(this.CT,0);this.Bo.MK=[this,this.Qu];this.Dn.Ls=[this,this.BBo];this.
Dn.BG=[this,this.AiO];this.CT.AEY=[this,this.BA6];this.CT.Av6=[this,this.BA2];this.
CT.Ls=[this,this.AAP];this.CT.BG=[this,this.AAO];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dn._Done();this.CT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit(
);this.CT._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.QB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vi)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADG.__proto__=C.Aob;C.AVx.__proto__=C.Aob;C.ADF.__proto__=A.
Core.P;C.UN.__proto__=A.Core.P;};C._ReInit=function(){};C.DI=function(D){var B;if((
B=C.Ad_[0]._this)&&(B._cycle!=D))B._Done(C.Ad_[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */