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
);if(index.Core)throw new Error("The unit file 'Core.js' included twice!");index.
Core=(function(){var A=index;var C={};
var Cg=[0,0];var BD=[0,0,0,0];var E6="The view does not belong to this group";var
Hr=[1000,740];var I0="The dialog component is already presented";var Iv="The dialog component is actually not presented";
var O8="No fader to perform the fade-in/out operation";var P_="Trying to use the same fader twice";
var P$="Trying to fade-in/out a group which belongs to another owner";var CR="No view to restack";
var Fc="View is not in this group";var LA="Sibling view does not belong to the group";
var Qa="No view to remove";var J_="No view to add";var Oh="View already in a group";
var Qb="Recursive invalidate during active update cycle.";var MR=[-8,-8,9,9];var
Tg="No group to end the modal state.";var UX="The group is not modal.";var Aaa="No group to obtain the modal state.";
var Xc="The group serves already as the \'virtual keyboard\'.";var Iw="The group is already modal.";
var UY="View is not in the same group or it is not embedded within the Outline "+
"Box";var Aab="The method SwitchToDialog() is not available in Core::VerticalList.";
var UZ="The method DismissDialog() is not available in Core::VerticalList.";var Aac=
"The method PresentDialog() is not available in Core::VerticalList.";var Xd="The method FadeGroup() is not available in Core::VerticalList.";
var Aad="The method RestackBehind() is not available in Core::VerticalList.";var
Aae="The method RestackTop() is not available in Core::VerticalList.";var U0="The method Restack() is not available in Core::VerticalList.";
var Xe="The method Remove() is not available in Core::VerticalList.";var O9="The method AddBehind() is not available in Core::VerticalList.";
var Aaf="The method Add() is not available in Core::VerticalList.";var Oi="The Slide Touch Handler:";
var Rn="is already connected with a view.";var Xf="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Xg=[0,0,170,120];var U1="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Xh="The method DismissDialog() is not available in Core::HorizontalList.";var
Aag="The method PresentDialog() is not available in Core::HorizontalList.";var Xi=
"The method FadeGroup() is not available in Core::HorizontalList.";var U2="The method RestackBehind() is not available in Core::HorizontalList.";
var Xj="The method RestackTop() is not available in Core::HorizontalList.";var Xk=
"The method Restack() is not available in Core::HorizontalList.";var Xl="The method Remove() is not available in Core::HorizontalList.";
var Ro="The method AddBehind() is not available in Core::HorizontalList.";var Th=
"The method Add() is not available in Core::HorizontalList.";var Aah=[0,0,1,1];var
AfC="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aai="Trying to cancel a task not belonging to this queue!";var Xm="Trying to enqueue a task twice!";
var Aaj="12";var Aak="%";
C.Cj={Ah:null,AI:null,Ab:null,Ev:null,U:0x103,J8:0,PP:0x14,AtZ:function(BJ,Ah5){}
,Ar7:function(E){if(this.J8===E)return;this.J8=E;if(!!this.Ab){var Ai3=this.Ah;var
Hc=0;while(!!Ai3&&(E>Ai3.J8)){Ai3=Ai3.Ah;Hc=Hc+1;}Ai3=this.AI;while(!!Ai3&&(E<Ai3.
J8)){Ai3=Ai3.AI;Hc=Hc-1;}if(!!Hc)this.Ab.J6(this,Hc);}},A1:function(E){var B;var
Hc=E^this.PP;if(!Hc)return;this.PP=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JQ],this);this.Ab.Bi([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.NK.U=this.Ev.
NK.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JQ],this);}},Ip:function(
){var B1=this.Ab;while(!!B1){var IH=(C.Root.isPrototypeOf(B1)?B1:null);if(!!IH)return IH;
B1=B1.Ab;}return null;},Kr:function(C1,aClip,aOffset,Ck,aBlend){},GetClipping:function(
){return this.GetExtent();},G4:function(CM){return null;},Yq:function(Dc,BH,Om,Aar
,Ac5,Ac4){return null;},AuK:function(Dc){return Dc;},AuT:function(BJ,MV){return Cg;
},Ani:function(aOffset,Atv){},GetExtent:function(){return BD;},Ct:function(Rv,Va
){var B;if(((this.U&0x200)===0x200))Rv=Rv&~0x400;var A3n=(this.U&~Va)|Rv;var XE=
A3n^this.U;this.U=A3n;if(!!this.Ab&&!!(XE&0x14)){var BdO=((this.U&0x14)===0x14);
if(BdO&&!this.Ab.AV)this.Ab.Ba(this);if(!BdO&&(this.Ab.AV===this))this.Ab.Ba(this.
Ab.AC3(this,0x14));}if(!!this.Ab&&!!(XE&0x403))this.Ab.Bi(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A3n&0x400)===0x400))&&((XE&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JQ],this);}if(!!this.Ab&&((XE&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JQ],this);}if(((((XE&0x100000)===0x100000)&&((Va&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Ct(0x0,0x10);if(((((
XE&0x100000)===0x100000)&&((Rv&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Ct(0x10,0x0);if(((((XE&0x200000)===0x200000)&&((Va&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Ct(
0x10,0x0);if((((((XE&0x200000)===0x200000)&&((Rv&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hd.C2!==this)))
)this.Ct(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cj;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akd={ED:A.wf,Et:A.wf
,AtZ:function(BJ,Ah5){var Ar=A._NewObject(C.AEl,0);this.Ev=null;Ar.extent=this.getExtent(
);Ar.Bd=BJ;Ar.NK=Ah5;Ar.AiQ=this.Et;Ar.AiR=this.ED;this.Ev=Ar;},AuT:function(BJ,
MV){var B;var EW=this.PP;var Ar=(C.AEl.isPrototypeOf(B=this.Ev)?B:null);var x1=Ar.
extent[0];var y1=Ar.extent[1];var x2=Ar.extent[2];var y2=Ar.extent[3];var Kf=[BJ[
2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=y2-y1;var tmp;if(!MV){var NN=[(B=Ar.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Bd[0];y1=y1-Ar.Bd[1];if(NN[0]!==Kf[0]){var HV=((EW&
0x4)===0x4);var HW=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HV&&(Qx||!HW))x1=((
x1*Kf[0])/NN[0])|0;if(!HW&&(Qx||!HV)){x2=x2-Ar.Bd[0];x2=((x2*Kf[0])/NN[0])|0;x2=
x2-Kf[0];}else x2=x2-Ar.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];if(!Qx){if(HV&&!HW)x2=x1+BZ;
else if(!HV&&HW)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ)/2)|0);x2=x1+BZ;}}}else{x2=x2-
Ar.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kf[1]){var HX=((EW&0x10)===0x10);var
HU=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HX&&(Qy||!HU))y1=((y1*Kf[1])/NN[
1])|0;if(!HU&&(Qy||!HX)){y2=y2-Ar.Bd[1];y2=((y2*Kf[1])/NN[1])|0;y2=y2-Kf[1];}else
y2=y2-Ar.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!Qy){if(HX&&!HU)y2=y1+BL;else if(!HX&&
HU)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-Ar.Bd[3];y1=y1+
BJ[1];y2=y2+BJ[3];}}else{switch(MV){case 3:{x1=BJ[0];x2=x1+BZ;}break;case 4:{x2=
BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;}break;case 2:{y2=BJ[3];y1=y2-BL;
}break;default:;}if((MV===3)||(MV===4)){var HX=((EW&0x10)===0x10);var HU=((EW&0x20
)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BJ[1];y2=BJ[3];}else if(HX&&!HU){y1=
BJ[1];y2=y1+BL;}else if(HU&&!HX){y2=BJ[3];y1=y2-BL;}else{y1=BJ[1]+((((BJ[3]-BJ[1
])-BL)/2)|0);y2=y1+BL;}}if((MV===1)||(MV===2)){var HV=((EW&0x4)===0x4);var HW=((
EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BJ[0];x2=BJ[2];}else if(HV&&!HW
){x1=BJ[0];x2=x1+BZ;}else if(HW&&!HV){x2=BJ[2];x1=x2-BZ;}else{x1=BJ[0]+((((BJ[2]-
BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=y2);BZ=x2-x1;BL=y2-y1;if(
Ar.AiR[0]<Ar.AiQ[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(Ar.AiR[1]<Ar.AiQ[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Et=[x1,y1];this.ED=[x2,y2];}else{this.DO([x1,y1]);this.DE([x2,y2]);this.
Ev=Ar;}return[BZ,BL];},Ani:function(aOffset,Atv){if(Atv){this.Et=A.abf(this.Et,aOffset
);this.ED=A.abf(this.ED,aOffset);}else{this.DO(A.abf(this.Et,aOffset));this.DE(A.
abf(this.ED,aOffset));}},GetExtent:function(){if(!!this.Ev&&this.Ev.isEmpty)return BD;
return this.getExtent();},getExtent:function(){var x1=this.Et[0];var y1=this.Et[
1];var x2=this.ED[0];var y2=this.ED[1];var BZ=x2-x1;var BL=y2-y1;var tmp;if(BZ<0
)BZ=-BZ;if(BL<0)BL=-BL;if(BZ>=BL){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BL>=BZ){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DE:function(E){var B;if(A.aaX(E,this.
ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JQ],this);}},DO:function(
E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.GetClipping());this.Ev=null;this.Et=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JQ],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.
Akd;},_className:"Core::LineView"};C.ZJ={KC:A.wf,MM:A.wf,ED:A.wf,Et:A.wf,AtZ:function(
BJ,Ah5){var Ar=A._NewObject(C.AEm,0);this.Ev=null;Ar.extent=this.GetExtent();Ar.
Bd=BJ;Ar.NK=Ah5;Ar.AiQ=this.Et;Ar.AiR=this.ED;Ar.AA3=this.MM;Ar.AA4=this.KC;this.
Ev=Ar;},AuT:function(BJ,MV){var B;var EW=this.PP;var Ar=(C.AEm.isPrototypeOf(B=this.
Ev)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.extent[2];var y2=Ar.
extent[3];var Kf=[BJ[2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=y2-y1;if(!MV){var
NN=[(B=Ar.Bd)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Bd[0];y1=y1-Ar.Bd[1];if(NN[0]!==Kf[0]){
var HV=((EW&0x4)===0x4);var HW=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HV&&(
Qx||!HW))x1=((x1*Kf[0])/NN[0])|0;if(!HW&&(Qx||!HV)){x2=x2-Ar.Bd[0];x2=((x2*Kf[0]
)/NN[0])|0;x2=x2-Kf[0];}else x2=x2-Ar.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];if(!Qx){if(HV&&
!HW)x2=x1+BZ;else if(!HV&&HW)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ)/2)|0);x2=x1+BZ;}
}}else{x2=x2-Ar.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kf[1]){var HX=((EW&0x10
)===0x10);var HU=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HX&&(Qy||!HU))y1=((
y1*Kf[1])/NN[1])|0;if(!HU&&(Qy||!HX)){y2=y2-Ar.Bd[1];y2=((y2*Kf[1])/NN[1])|0;y2=
y2-Kf[1];}else y2=y2-Ar.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!Qy){if(HX&&!HU)y2=y1+BL;
else if(!HX&&HU)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-
Ar.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];}}else{switch(MV){case 3:{x1=BJ[0];x2=x1+BZ;}break;
case 4:{x2=BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;}break;case 2:{y2=BJ[
3];y1=y2-BL;}break;default:;}if((MV===3)||(MV===4)){var HX=((EW&0x10)===0x10);var
HU=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BJ[1];y2=BJ[3];}else if(
HX&&!HU){y1=BJ[1];y2=y1+BL;}else if(HU&&!HX){y2=BJ[3];y1=y2-BL;}else{y1=BJ[1]+((((
BJ[3]-BJ[1])-BL)/2)|0);y2=y1+BL;}}if((MV===1)||(MV===2)){var HV=((EW&0x4)===0x4);
var HW=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BJ[0];x2=BJ[2];}else if(
HV&&!HW){x1=BJ[0];x2=x1+BZ;}else if(HW&&!HV){x2=BJ[2];x1=x2-BZ;}else{x1=BJ[0]+((((
BJ[2]-BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=y2);BZ=(x2-x1)-1;BL=(
y2-y1)-1;var Aiv=Ar.extent[0];var Aix=Ar.extent[1];var Af3=(Ar.extent[2]-Aiv)-1;
var Af2=(Ar.extent[3]-Aix)-1;if(!Af3)Af3=1;if(!Af2)Af2=1;if(((this.U&0x100)===0x100
)){this.Et=[x1+((((Ar.AiQ[0]-Aiv)*BZ)/Af3)|0),y1+((((Ar.AiQ[1]-Aix)*BL)/Af2)|0)];
this.ED=[x1+((((Ar.AiR[0]-Aiv)*BZ)/Af3)|0),y1+((((Ar.AiR[1]-Aix)*BL)/Af2)|0)];this.
MM=[x1+((((Ar.AA3[0]-Aiv)*BZ)/Af3)|0),y1+((((Ar.AA3[1]-Aix)*BL)/Af2)|0)];this.KC=[
x1+((((Ar.AA4[0]-Aiv)*BZ)/Af3)|0),y1+((((Ar.AA4[1]-Aix)*BL)/Af2)|0)];}else{this.
DO([x1+((((Ar.AiQ[0]-Aiv)*BZ)/Af3)|0),y1+((((Ar.AiQ[1]-Aix)*BL)/Af2)|0)]);this.DE([
x1+((((Ar.AiR[0]-Aiv)*BZ)/Af3)|0),y1+((((Ar.AiR[1]-Aix)*BL)/Af2)|0)]);this.Kz([x1+((((
Ar.AA3[0]-Aiv)*BZ)/Af3)|0),y1+((((Ar.AA3[1]-Aix)*BL)/Af2)|0)]);this.J2([x1+((((Ar.
AA4[0]-Aiv)*BZ)/Af3)|0),y1+((((Ar.AA4[1]-Aix)*BL)/Af2)|0)]);this.Ev=Ar;}return[BZ+
1,BL+1];},Ani:function(aOffset,Atv){if(Atv){this.Et=A.abf(this.Et,aOffset);this.
ED=A.abf(this.ED,aOffset);this.MM=A.abf(this.MM,aOffset);this.KC=A.abf(this.KC,aOffset
);}else{this.DO(A.abf(this.Et,aOffset));this.DE(A.abf(this.ED,aOffset));this.Kz(
A.abf(this.MM,aOffset));this.J2(A.abf(this.KC,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BD;var x1=this.Et[0];var y1=this.Et[1];var x2=
this.MM[0];var y2=this.MM[1];if((((this.KC[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.KC[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.MM[0]<x1)x1=
this.MM[0];if(this.KC[0]<x1)x1=this.KC[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
MM[1]<y1)y1=this.MM[1];if(this.KC[1]<y1)y1=this.KC[1];if(this.Et[0]>x2)x2=this.Et[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.KC[0]>x2)x2=this.KC[0];if(this.Et[1]>y2
)y2=this.Et[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.KC[1]>y2)y2=this.KC[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},J2:function(E){var B;if(A.aaX(E,this.KC))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ev=null;this.KC=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JQ],this);}},Kz:function(E){var B;if(A.aaX(E,
this.MM))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Ev=null;this.MM=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JQ],this);}},DE:function(
E){var B;if(A.aaX(E,this.ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.GetClipping());this.Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JQ],this);}},DO:function(E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ev=null;this.Et=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JQ],this);}},ARr:function(K3){var HD=A.abi(4,
A.wf,null);var O=0;var Ij=3;var A2S=false;var A2T=false;HD.Set(0,this.Et);HD.Set(
1,this.ED);HD.Set(2,this.MM);HD.Set(3,this.KC);while(O<4){var Bhy=HD.Get(O)[0];var
ALB=HD.Get(O)[1];var BDn=HD.Get(Ij)[0];var A4_=HD.Get(Ij)[1];if(((ALB>K3[1])!==(
A4_>K3[1]))||((ALB<K3[1])!==(A4_<K3[1]))){var Ep=((((BDn-Bhy)*(K3[1]-ALB))/(A4_-
ALB))|0)+Bhy;if(K3[0]>Ep)A2S=!A2S;if(K3[0]<Ep)A2T=!A2T;}Ij=O;O=O+1;}return A2S||
A2T;},Bj2:function(){return((((this.Et[0]===this.KC[0])&&(this.ED[0]===this.MM[0
]))&&(this.Et[1]===this.ED[1]))&&(this.MM[1]===this.KC[1]))||((((this.Et[0]===this.
ED[0])&&(this.MM[0]===this.KC[0]))&&(this.Et[1]===this.KC[1]))&&(this.ED[1]===this.
MM[1]));},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.ZJ;},
_className:"Core::QuadView"};C.Eu={M:A.wg,AtZ:function(BJ,Ah5){var Ar=A._NewObject(
C.Arm,0);Ar.extent=this.M;Ar.Bd=BJ;Ar.NK=Ah5;this.Ev=Ar;},AuT:function(BJ,MV){var
B;var EW=this.PP;var Ar=this.Ev;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var Kf=[BJ[2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=
y2-y1;if(!MV){var NN=[(B=Ar.Bd)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Bd[0];y1=y1-Ar.Bd[1];
if(NN[0]!==Kf[0]){var HV=((EW&0x4)===0x4);var HW=((EW&0x8)===0x8);var Qx=((EW&0x1
)===0x1);if(!HV&&(Qx||!HW))x1=((x1*Kf[0])/NN[0])|0;if(!HW&&(Qx||!HV)){x2=x2-Ar.Bd[
0];x2=((x2*Kf[0])/NN[0])|0;x2=x2-Kf[0];}else x2=x2-Ar.Bd[2];x1=x1+BJ[0];x2=x2+BJ[
2];if(!Qx){if(HV&&!HW)x2=x1+BZ;else if(!HV&&HW)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ
)/2)|0);x2=x1+BZ;}}}else{x2=x2-Ar.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kf[1
]){var HX=((EW&0x10)===0x10);var HU=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(
!HX&&(Qy||!HU))y1=((y1*Kf[1])/NN[1])|0;if(!HU&&(Qy||!HX)){y2=y2-Ar.Bd[1];y2=((y2
*Kf[1])/NN[1])|0;y2=y2-Kf[1];}else y2=y2-Ar.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!Qy
){if(HX&&!HU)y2=y1+BL;else if(!HX&&HU)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=
y1+BL;}}}else{y2=y2-Ar.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];}}else{switch(MV){case 3:{x1=
BJ[0];x2=x1+BZ;}break;case 4:{x2=BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;
}break;case 2:{y2=BJ[3];y1=y2-BL;}break;default:;}if((MV===3)||(MV===4)){var HX=((
EW&0x10)===0x10);var HU=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BJ[
1];y2=BJ[3];}else if(HX&&!HU){y1=BJ[1];y2=y1+BL;}else if(HU&&!HX){y2=BJ[3];y1=y2-
BL;}else{y1=BJ[1]+((((BJ[3]-BJ[1])-BL)/2)|0);y2=y1+BL;}}if((MV===1)||(MV===2)){var
HV=((EW&0x4)===0x4);var HW=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BJ[
0];x2=BJ[2];}else if(HV&&!HW){x1=BJ[0];x2=x1+BZ;}else if(HW&&!HV){x2=BJ[2];x1=x2-
BZ;}else{x1=BJ[0]+((((BJ[2]-BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Ev=Ar;}return[x2-x1,y2-y1];},Ani:function(aOffset,Atv){if(Atv)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.GetClipping());this.Ev=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JQ],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.
__proto__=C.Eu;},_className:"Core::RectView"};C.P={B_:null,B$:null,AKv:null,FF:null
,Hd:null,XF:null,ApN:null,AV:null,G9:255,AzT:0,AzW:0,AzV:0,AzU:0,Init:function(aArg
){this.Am();},Kr:function(C1,aClip,aOffset,Ck,aBlend){var B;Ck=((Ck+1)*this.G9)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FF||(C1.C2===this))this.BdD(C1,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ck,aBlend);else{var B4=255|(255<<8)|(255<<16)|((
Ck&0xFF)<<24);this.FF.Update();C1.A6j(aClip,this.FF,0,A.abh(this.M,aOffset),Cg,B4
,B4,B4,B4,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FF)return Az;
Az=[].concat(Az[0]-this.AzU,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzW);Az=A.abN(
Az,Az[2]+this.AzV);Az=[].concat(Az.slice(0,3),Az[3]+this.AzT);if(((this.U&0x80000
)===0x80000)){var Ap0=BD;var X;for(X=this.B_;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap0=
A.wC(Ap0,X.GetClipping());Az=A.wC(Az,A.abh(Ap0,this.M.slice(0,2)));}return Az;},
Yq:function(Dc,BH,Om,Aar,Ac5,Ac4){var B;var X=this.B$;var Aph=null;var AE=BD;var
Kg=null;var A3c=!!this.XF&&(!!this.XF.FT||!!this.XF.B_);if(((B=A.lb(Dc,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Dc=A.abg(Dc,this.M.slice(0,2));if(!!Ac5){X=Ac5;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kg){Kg=X.
AI;while(!!Kg&&!((Kg.U&0x200)===0x200))Kg=Kg.AI;if(!!Kg)AE=A.lb(Dc,Kg.GetExtent(
));else AE=BD;}if(Kg===X){Kg=null;AE=BD;}if((!!Aar&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hd.C2===X)&&!A3c))
)){var extent=X.GetExtent();var AJ0=Aar;var Ao3=null;if(AJ0===X)AJ0=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao3=X.Yq(AE
,BH,Om,AJ0,Ac5,Ac4);}else if(!(((B=A.lb(extent,Dc))[0]>=B[2])||(B[1]>=B[3]))||(Aar===
X))Ao3=X.Yq(Dc,BH,Om,AJ0,Ac5,Ac4);X=X.AI;if(!!Ao3){if(!Aph||((Ao3.Au3<Aph.Au3)&&(
Ao3.Au3>=0)))Aph=Ao3;if(!Ao3.Au3)X=null;}}else X=X.AI;Ac5=null;}return Aph;},AuK:
function(Dc){var B;var F;var X=this.B_;var LI=BD;var AAX=true;var result=(Dc=F=A.
abg(Dc,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At$=(C.Y.isPrototypeOf(
X)?X:null);LI=A.lb(Dc,At$.M);AAX=((At$.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAX){var AE=A.lb(X.GetClipping(),LI);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuK(AE));}}else{var AE=A.lb(X.GetClipping(),
Dc);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuK(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Ct:function(Rv,Va){var B;
var Tt=this.U;if(((!!this.Ab&&!!!this.FF)&&((this.U&0x80001)===0x80001))&&((Va&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());C.Eu.Ct.call(this,Rv,Va);if((((!!this.
Ab&&!!!this.FF)&&((this.U&0x1)===0x1))&&((Rv&0x80000)===0x80000))&&!((Tt&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());var XE=this.U^Tt;if(!!this.AV&&((XE&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Ct(0x40,0x0);else this.AV.Ct(0x0
,0x40);}if(!!this.Hd&&((XE&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hd.C2.
U&0x14)===0x14))this.Hd.C2.Ct(0x40,0x0);else this.Hd.C2.Ct(0x0,0x40);}if(((XE&0x10
)===0x10)){var X;for(X=this.B_;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hd.C2===X)))X.Ct(Rv&0x10,Va&
0x10);}if(!!XE){this.U=this.U|0x8000;A.pe([this,this.ABC],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlZ=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKD=[
E[2]-E[0],E[3]-E[1]];var ApW=!A.aaX(AlZ,AKD);if(ApW&&!!this.FF){this.FF.ArR(AKD);
A.we(this,0);A.we(this.FF,0);}C.Eu.H.call(this,E);if((ApW&&(AlZ[0]>0))&&(AlZ[1]>
0)){var Bd=[].concat(Cg,AlZ);var X=this.B_;while(!!X){if((!X.Ev&&(X.PP!==0x14))&&
!((X.U&0x400)===0x400))X.AtZ(Bd,null);X=X.Ah;}}if(ApW){this.U=this.U|0x5000;A.pe([
this,this.ABC],this);}},A4k:function(CM){var BeA=(C.KeyEvent.isPrototypeOf(CM)?CM:
null);var D6=this.AKv;if(!BeA)return null;while(!!D6&&(!D6.Bw||!D6.G4(BeA)))D6=D6.
Ah;return D6;},BC9:function(G){if(!!this.FF){this.FF.C2=this;var AE=A.abg(this.AuK(
A.abh(this.FF.QP,this.M.slice(0,2))),this.M.slice(0,2));this.FF.Avl(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BdD(this.FF,AE,Cg,255,true);this.FF.
C2=null;}},BdD:function(C1,aClip,aOffset,Ck,aBlend){var B;var X=this.B_;var LI=BD;
var AAX=true;this.Bi0(C1,aClip,aOffset,Ck,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At$=(C.Y.isPrototypeOf(X)?X:null);AAX=((At$.U&0x1)===0x1);LI=aClip;if(!((
At$.U&0x80000)===0x80000))LI=A.lb(LI,A.abh(At$.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAX){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LI
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kr(C1,AE,aOffset,Ck,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kr(C1,AE,aOffset,Ck,aBlend);}}X=X.Ah;}this.Bi3(C1,aClip,aOffset,Ck,aBlend);},Bgw:
function(){var B;var A2L=((this.U&0x1000)===0x1000);var AiC=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aaz=false;var Adm=BD;var K5=BD;var AaA=Cg;var AtV=0;var AtW=0;
var AtU=0;var Qq=0;var X=this.B$;var Kg=null;var AlR=null;while(!!X){if(((X.U&0x800
)===0x800)){Aaz=true;X.U=X.U&~0x800;}if(Aaz&&((X.U&0x200)===0x200)){Aaz=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgY)X.U=X.U|0x1000;}X=X.AI;}Aaz=false;X=this.B_;
if(A2L){this.U=this.U&~0x1000;A2L=!((AiC[0]>=AiC[2])||(AiC[1]>=AiC[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlR&&(AtU!==Qq)){var AdK=X;var AK0=0;var ABh=Adm[2]-
Adm[0];var Azu=Adm[3]-Adm[1];var AJQ=0;var Ap8=Cg;do if(((AdK.U&0x200)===0x200))
AdK=null;else if(((AdK.U&0x401)===0x401)){Ap8=[(B=AdK.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qq===3)||(Qq===4))ABh=ABh-Ap8[0];if((Qq===1)||(Qq===2))Azu=Azu-Ap8[1];
if(!AlR||((ABh>=0)&&(Azu>=0))){AlR=AdK;AdK=AdK.Ah;if((Qq===3)||(Qq===4)){ABh=ABh-
AtV;if(Ap8[1]>AK0)AK0=Ap8[1];}if((Qq===1)||(Qq===2)){Azu=Azu-AtW;if(Ap8[0]>AJQ)AJQ=
Ap8[0];}}else AdK=null;}else AdK=AdK.Ah;while(!!AdK);if(!AlR)AlR=Kg;K5=Adm;switch(
AtU){case 9:case 11:K5=[].concat(K5.slice(0,3),K5[1]+AK0);break;case 10:case 12:
K5=A.abP(K5,K5[3]-AK0);break;case 5:case 7:K5=A.abN(K5,K5[0]+AJQ);break;case 6:case
8:K5=[].concat(K5[2]-AJQ,K5.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ev&&(X.Ev.NK!==Kg))X.Ev=null;if((!X.Ev&&Aaz)&&((X.PP!==0x14)||!!Qq))X.
AtZ(K5,Kg);}if(!!X.Ev){if(A2L&&!((X.U&0x400)===0x400))X.AuT(AiC,0);if(Aaz&&((X.U&
0x400)===0x400)){var C7=X.AuT(A.abh(K5,AaA),Qq);if(((X.U&0x1)===0x1)){var Br=Cg;
switch(Qq){case 3:Br=[C7[0]+AtV,Br[1]];break;case 4:Br=[-C7[0]-AtV,Br[1]];break;
case 1:Br=[Br[0],C7[1]+AtW];break;case 2:Br=[Br[0],-C7[1]-AtW];break;default:;}AaA=
A.abf(AaA,Br);}}}if(((X.U&0x200)===0x200)){if(Aaz)A.pe(Kg.En,Kg);Aaz=((X.U&0x1000
)===0x1000);Kg=(C.Y.isPrototypeOf(X)?X:null);if(Aaz){X.U=X.U&~0x1000;AtU=Kg.AgY;
Qq=AtU;Adm=A.abh(Kg.M,Kg.Bs);K5=Adm;AaA=Cg;AtV=Kg.Space+Kg.AVd;AtW=Kg.Space;Aaz=
!((Adm[0]>=Adm[2])||(Adm[1]>=Adm[3]));AlR=null;switch(AtU){case 9:case 10:Qq=3;break;
case 11:case 12:Qq=4;break;case 5:case 6:Qq=1;break;case 7:case 8:Qq=2;break;default:;
}}if(Aaz)this.Bi(Kg.M);}if(X===AlR){switch(AtU){case 9:case 11:AaA=[0,(AaA[1]+(K5[
3]-K5[1]))+AtW];break;case 10:case 12:AaA=[0,(AaA[1]-(K5[3]-K5[1]))-AtW];break;case
5:case 7:AaA=[(AaA[0]+(K5[2]-K5[0]))+AtV,0];break;case 6:case 8:AaA=[(AaA[0]-(K5[
2]-K5[0]))-AtV,0];break;default:;}AlR=null;}X=X.Ah;}if(Aaz)A.pe(Kg.En,Kg);this.U=
this.U&~0x2000;this.Bl([AiC[2]-AiC[0],AiC[3]-AiC[1]]);},JQ:function(G){A.pe([this
,this.ABC],this);},ABC:function(G){var B;var BDf=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bgw();}if(((this.U&0x8000)===
0x8000)||BDf){this.U=this.U&~0x8000;this.Aj(this.U);}},Ba:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E6);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Ct(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Ct(0x60,0x0);else E.Ct(0x20
,0x0);}},BbM:function(Aq){this.Ba(Aq);},ASG:function(){return!!this.FF;},ArL:function(
E){var B;if(!!this.FF===E)return;if(!E){this.FF.AEK=null;this.FF.ArR(Cg);this.FF=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(E){this.
FF=A._NewObject(A.Graphics.Canvas,0);this.FF.ArR([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FF.AEK=[this,this.BC9];}A.we(this,0);},A8_:function(){var B;return((this.U&
0x100000)===0x100000);},As:function(E){if(E)this.Ct(0x100000,0x0);else this.Ct(0x0
,0x100000);},C0:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;
this.G9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},A0K:
function(Aq){this.C0(Aq);},Ai:function(E){if(E)this.Ct(0x400,0x0);else this.Ct(0x0
,0x400);},Bmu:function(E){if(E)this.Ct(0x2,0x0);else this.Ct(0x0,0x2);},Fo:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.
Ct(0x0,0x1);},ExtendClipping:function(AoD,AoE,AoF,AoC){var B;var Azl=this.M;var RC=
Azl;if(AoD<0)AoD=0;if(AoD>255)AoD=255;if(AoE<0)AoE=0;if(AoE>255)AoE=255;if(AoF<0
)AoF=0;if(AoF>255)AoF=255;if(AoC<0)AoC=0;if(AoC>255)AoC=255;RC=[].concat(RC[0]-(
Math.max(AoD,this.AzU)&0xFF),RC.slice(1,4));RC=A.abN(RC,RC[2]+(Math.max(AoE,this.
AzV)&0xFF));RC=A.abP(RC,RC[1]-(Math.max(AoF,this.AzW)&0xFF));RC=[].concat(RC.slice(
0,3),RC[3]+(Math.max(AoC,this.AzT)&0xFF));if(AoD!==this.AzU){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FF)&&!((this.U&0x80000)===0x80000)){var Az=RC;Az=A.abN(Az
,Azl[0]);this.Ab.Bi(Az);}this.AzU=AoD&0xFF;}if(AoE!==this.AzV){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FF)&&!((this.U&0x80000)===0x80000)){var Az=RC;Az=[].
concat(Azl[2],Az.slice(1,4));this.Ab.Bi(Az);}this.AzV=AoE&0xFF;}if(AoF!==this.AzW
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FF)&&!((this.U&0x80000)===0x80000
)){var Az=RC;Az=[].concat(Az.slice(0,3),Azl[1]);this.Ab.Bi(Az);}this.AzW=AoF&0xFF;
}if(AoC!==this.AzT){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FF)&&!((this.
U&0x80000)===0x80000)){var Az=RC;Az=A.abP(Az,Azl[3]);this.Ab.Bi(Az);}this.AzT=AoC&
0xFF;}},Bi3:function(C1,aClip,aOffset,Ck,aBlend){},Bi0:function(C1,aClip,aOffset
,Ck,aBlend){},GetMaximalSize:function(){return Hr;},GetMinimalSize:function(){return Cg;
},AVk:function(Ix,Ol,Xr,Tk,Tl,Ah6,Pc,Ru,LE,LC,LD){var B;if(!this.Hd){this.AkI(Ix
,Ol,Xr,Tk,Tl,null,null,LE,LC,LD);return;}var AlY=this.Hd;var JN=AlY.Ah;if(((Ix.U&
0x10000)===0x10000)&&(this.Hd.C2!==Ix))throw new Error(I0);var Ads=A._NewObject(
C.AN4,0);var RG=AlY.RG;var RP=null;var Mj=null;if(!!JN){RP=JN.RP;Mj=JN.Mj;}if(!!
JN&&!!AlY.ApM)RP=AlY.ApM;if(!!JN&&!!Pc)Mj=Pc;if(!!Ah6)RG=Ah6;if(!Ol)Ol=A._GetAutoObject(
A.acl.AsF);if(!Xr)Xr=Ol;if(!Tl)Tl=Tk;if(!Tk)Tk=Tl;Ads.RG=Xr;Ads.Mj=Tk;Ads.RP=Tl;
Ads.ApM=Ru;Ads.C2=Ix;Ads.Ah=this.Hd.Ah;this.Hd.Ah=null;this.Hd=Ads;if(this.AV===
Ix)this.Ba(null);AlY.C2.Ct(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ix.U&0x4)===
0x4))Ix.Ct(0x10040,0x0);else Ix.Ct(0x10000,0x0);if(!!Mj){this.NX(JN.C2,Mj.Aeb(),
null,null,LD);this.NX(AlY.C2,RG.Sh(),null,null,true);this.NX(Ads.C2,Ol.Si(),LE,LC
,true);}else if(!!RP){this.NX(JN.C2,RP.Aec(),null,null,LD);this.NX(AlY.C2,RG.Sh(
),null,null,true);this.NX(Ads.C2,Ol.Si(),LE,LC,true);}else if(!!RG){this.NX(AlY.
C2,RG.Sh(),null,null,LD);this.NX(Ads.C2,Ol.Si(),LE,LC,true);}else this.NX(Ads.C2
,Ol.Si(),LE,LC,LD);},AqF:function(Ix,Ah6,Pc,Ru,LE,LC,LD){var B;if(!this.Hd)return;
if(!Ix)return;var KH=this.Hd;var JN=this.Hd.Ah;var ApS=null;while((!!KH&&(KH.C2!==
Ix))&&!!KH.Ah){ApS=KH;KH=JN;JN=KH.Ah;}if(!KH||(KH.C2!==Ix))throw new Error(Iv);if(
!ApS){this.Hd=JN;KH.Ah=null;}else{ApS.Ah=JN;KH.Ah=null;}KH.C2.Ct(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JN)&&!ApS)&&((JN.C2.U&0x200000)===0x200000))JN.C2.Ct(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JN)&&!ApS)&&((JN.C2.U&0x4)===0x4))JN.C2.Ct(
0x40,0x0);var RG=KH.RG;var RP=null;var Mj=null;if(!!JN)RP=JN.RP;if(!!JN&&!!KH.ApM
)RP=KH.ApM;if(!!JN&&!!Ru)RP=Ru;if(!!ApS&&!!JN)Mj=JN.Mj;if((!!ApS&&!!JN)&&!!Pc)Mj=
Pc;if(!!Ah6)RG=Ah6;if(!!Mj){this.NX(JN.C2,Mj.Aeb(),null,null,LD);this.NX(KH.C2,RG.
Sh(),LE,LC,true);}else if(!!RP){this.NX(JN.C2,RP.Aec(),null,null,LD);this.NX(KH.
C2,RG.Sh(),LE,LC,true);}else this.NX(KH.C2,RG.Sh(),LE,LC,LD);},AkI:function(Ix,Ol
,Xr,Tk,Tl,Pc,Ru,LE,LC,LD){var B;if(!Ix)return;if(!!this.Hd&&(this.Hd.C2===Ix)){this.
AVk(Ix,Ol,Xr,Tk,Tl,null,Pc,Ru,LE,LC,LD);return;}if(((Ix.U&0x10000)===0x10000))throw new
Error(I0);var KH=A._NewObject(C.AN4,0);if(!!this.Hd&&!this.Hd.Mj){if(!Ru)Ru=Pc;if(
!Pc)Pc=Ru;}var Mj=null;if(!!this.Hd)Mj=this.Hd.Mj;if(!!this.Hd&&!!Pc)Mj=Pc;if(!Ol
)Ol=A._GetAutoObject(A.acl.AsF);if(!Xr)Xr=Ol;if(!Tl)Tl=Tk;if(!Tk)Tk=Tl;KH.RG=Xr;
KH.Mj=Tk;KH.RP=Tl;KH.ApM=Ru;if(this.AV===Ix)this.Ba(null);if(!!this.Hd&&((this.Hd.
C2.U&0x200000)===0x200000))this.Hd.C2.Ct(0x0,0x10);if(!!this.Hd)this.Hd.C2.Ct(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Ix.U&0x4)===0x4))Ix.Ct(0x10040,0x0);else Ix.
Ct(0x10000,0x0);KH.C2=Ix;KH.Ah=this.Hd;this.Hd=KH;if(!!Mj){this.NX(this.Hd.Ah.C2
,Mj.Aeb(),null,null,LD);this.NX(Ix,Ol.Si(),LE,LC,true);}else this.NX(Ix,Ol.Si(),
LE,LC,LD);},A7v:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A79:function(
K3){var tmp=this;while(!!tmp){K3=A.abe(K3,tmp.M.slice(0,2));tmp=tmp.Ab;}return K3;
},BjZ:function(K3){var tmp=this;while(!!tmp){K3=A.abf(K3,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K3;},DispatchEvent:function(CM){var B;var X=this.AV;var B1=(C.P.isPrototypeOf(
X)?X:null);var GE=null;var A3c=!!this.XF&&(!!this.XF.FT||!!this.XF.B_);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B1=null;}if(!!this.Hd&&!A3c)GE=this.Hd.C2.DispatchEvent(CM);if(!GE&&!!B1)
GE=B1.DispatchEvent(CM);else if(!GE&&!!X)GE=X.G4(CM);if(!GE)GE=this.G4(CM);if(!GE
)GE=this.A4k(CM);return GE;},BroadcastEventAtPosition:function(CM,HB,aFilter){var
B;var X=this.B$;var GE=null;while(!!X&&!GE){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HB)){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GE=B1.
BroadcastEventAtPosition(CM,A.abe(HB,B1.M.slice(0,2)),aFilter);else GE=X.G4(CM);
}X=X.AI;}if(!GE)GE=this.G4(CM);return GE;},BroadcastEvent:function(CM,aFilter){var
B;var X=this.B$;var GE=null;while(!!X&&!GE){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GE=B1.BroadcastEvent(CM,aFilter
);else GE=X.G4(CM);}X=X.AI;}if(!GE)GE=this.G4(CM);if(!GE)GE=this.A4k(CM);return GE;
},Bl:function(aSize){},Aj:function(Ae){},Bkd:function(){this.U=this.U|0x4000;A.pe([
this,this.ABC],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABC],this
);},Bi:function(Dc){var B;var B1=this;while(!!B1&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3
]))){var Aaw=B1.FF;if(!B1.Ab&&(B1!==this)){B1.Bi(Dc);return;}if(!!Aaw){var BAU=Aaw.
QP;Aaw.QP=A.wC(Aaw.QP,Dc);if(!A.aaY(BAU,Aaw.QP)){A.we(B1,0);A.we(Aaw,0);}}if(!((
B1.U&0x1)===0x1))return;var Az=B1.M;Dc=A.abh(Dc,Az.slice(0,2));if(!!B1.FF||!((B1.
U&0x80000)===0x80000)){if(!!!B1.FF){Az=[].concat(Az[0]-B1.AzU,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B1.AzW);Az=A.abN(Az,Az[2]+B1.AzV);Az=[].concat(Az.slice(0,3),Az[3
]+B1.AzT);}Dc=A.lb(Dc,Az);}B1=B1.Ab;}},QK:function(Ag,GB,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agj=A.aaI(Ag.GetExtent());var X=Ag;var A1U=null;var
Bdg=0;var I6=0x10000;var AKW;if(((aFilter&0x10000)===0x10000))I6=0x0;var top=((GB===
4)||(GB===1))||(GB===6);var bottom=((GB===5)||(GB===3))||(GB===8);var left=((GB===
2)||(GB===1))||(GB===3);var right=((GB===7)||(GB===6))||(GB===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AI;if(!X)X=this.B$;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I6||!((B=I6)&&((X.U&B)===B
))))for(AKW=0;AKW<2;AKW++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKW){if((left&&(s[0]>s[1]))&&(Az[2]<Agj[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agj[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agj[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agj[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Br=A.abe(A.aaI(Az),Agj);var
Rx=Br;if(Rx[0]<0)Rx=[-Rx[0],Rx[1]];if(Rx[1]<0)Rx=[Rx[0],-Rx[1]];if(((((!left||(Br[
0]<=-Rx[1]))&&(!right||(Br[0]>=Rx[1])))&&(!top||(Br[1]<=-Rx[0])))&&(!bottom||(Br[
1]>=Rx[0])))&&((Rx[0]>0)||(Rx[1]>0))){var RI=Br[0];var RJ=Br[1];var Jr=Math.sqrt((
RI*RI)+(RJ*RJ));var AKu=0;if(!left&&!right)AKu=Jr/Rx[1];if(!top&&!bottom)AKu=Jr/
Rx[0];Jr=(Jr*AKu)*AKu;if((Jr<Bdg)||!A1U){Bdg=Jr;A1U=X;}}}}return A1U;},AqM:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B$;var I6=0x10000;
if(((aFilter&0x10000)===0x10000))I6=0x0;if(!!Ag)X=Ag.AI;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;X=X.AI;}return null;
},TU:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B_;
var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},AC3:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlW=Ag.Ah;var Al9=Ag.AI;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;
while(!!AlW||!!Al9){if((!!AlW&&(!aFilter||((B=aFilter)&&((AlW.U&B)===B))))&&(!I6||
!((B=I6)&&((AlW.U&B)===B))))return AlW;if((!!Al9&&(!aFilter||((B=aFilter)&&((Al9.
U&B)===B))))&&(!I6||!((B=I6)&&((Al9.U&B)===B))))return Al9;if(!!AlW)AlW=AlW.Ah;if(
!!Al9)Al9=Al9.AI;}return null;},Dd:function(aFilter){var B;var X=this.B_;var AE=
BD;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I6||!((B=I6)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NX:function(KG,FS,LE,LC
,LD){var B;if(!KG)return;if(!FS)throw new Error(O8);if((!!FS.P||!!FS.Ab)||!!FS.Pn
)throw new Error(P_);if(!!KG.Ab&&(KG.Ab!==this))throw new Error(P$);if(!this.XF)
this.XF=A._NewObject(C.AVp,0);FS.Ab=this;FS.P=KG;FS.AKG=LC;FS.A3E=LE;if(!!KG.ApN
)KG.ApN.Pn.Bo_(KG.ApN);KG.ApN=FS;KG.U=KG.U|0x20000;if((LD&&!!this.XF.B$)&&!this.
XF.B$.ARn())(A.acl.ACY.isPrototypeOf(B=this.XF.B$)?B:null).A5n(FS);else{var Pn=A.
_NewObject(A.acl.ACY,0);Pn.A5n(FS);this.XF.A$R(Pn,false);}},AhB:function(Ag,Kb){
var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new Error(Fc);if(!!Kb&&(Kb.
Ab!==this))throw new Error(LA);if(Ag.Ah===Kb)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AI&&!!Ag.Ev)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JQ],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JQ],this);}if(!!Ag.Ah)Ag.Ah.
AI=Ag.AI;else this.B$=Ag.AI;if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;else this.B_=Ag.Ah;var GD=
null;var IA=this.B$;var LV=Ag.J8;if(!!Kb){GD=Kb;IA=Kb.AI;}if(!!GD&&(LV>GD.J8))LV=
GD.J8;if(!!IA&&(LV<IA.J8))LV=IA.J8;if(LV!==Ag.J8){Ag.Ab=null;Ag.Ar7(LV);Ag.Ab=this;
}if(!Kb){if(!!this.B$)this.B$.Ah=Ag;Ag.AI=this.B$;Ag.Ah=null;this.B$=Ag;}else{Ag.
Ah=Kb;Ag.AI=Kb.AI;Kb.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}if(this.B_===Kb)this.B_=Ag;if(((
Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},ZL:function(Ag){var B;if(!Ag)throw new
Error(CR);if(Ag.Ab!==this)throw new Error(Fc);if(!Ag.Ah)return;var IA=this.B$;var
LV=Ag.J8;while(!!IA&&(IA.J8>LV))IA=IA.AI;if(((IA===Ag)||!IA)||(IA.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AI&&!!Ag.Ev)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JQ],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AI)Ag.AI.U=Ag.AI.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JQ],this);}if(!
!Ag.AI)Ag.AI.Ah=Ag.Ah;else this.B_=Ag.Ah;Ag.Ah.AI=Ag.AI;Ag.AI=IA;Ag.Ah=IA.Ah;IA.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AI=Ag;else this.B$=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping(
));},J6:function(Ag,Qh){var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new
Error(Fc);var IA=Ag;var GD=Ag;var LV=Ag.J8;while(((Qh>0)&&!!IA.Ah)&&(IA.Ah.J8<=LV
)){IA=IA.Ah;Qh=Qh-1;}while(((Qh<0)&&!!GD.AI)&&(GD.AI.J8>=LV)){GD=GD.AI;Qh=Qh+1;}
if((IA===Ag)&&(GD===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AI&&!!Ag.Ev)Ag.
AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JQ],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JQ],this);}if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AI=Ag.AI;if(this.B_===Ag)this.B_=Ag.Ah;if(this.B$===Ag)this.B$=Ag.AI;if(IA
!==Ag){Ag.Ah=IA.Ah;Ag.AI=IA;IA.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AI=Ag;}if(GD!==Ag){Ag.Ah=GD;
Ag.AI=GD.AI;GD.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}if(!Ag.Ah)this.B$=Ag;if(!Ag.AI)this.
B_=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},HQ:function(Ag){var B;if(
!Ag)throw new Error(Qa);if(Ag.Ab!==this)throw new Error(Fc);if((((Ag.U&0x401)===
0x401)&&!!Ag.AI)&&!!Ag.Ev){Ag.AI.U=Ag.AI.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JQ],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JQ],this);}Ag.Ev=null;if(this.AV===Ag)this.Ba(this.
AC3(Ag,0x14));if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AI=Ag.AI;if(this.B_===Ag
)this.B_=Ag.Ah;if(this.B$===Ag)this.B$=Ag.AI;Ag.Ab=null;Ag.Ah=null;Ag.AI=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Ct(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},AMf:function(Ag,Kb
){var B;if(!Ag)throw new Error(J_);if(!!Ag.Ab)throw new Error(Oh);if(!!Kb&&(Kb.Ab
!==this))throw new Error(LA);var GD=null;var IA=this.B$;var LV=Ag.J8;if(!!Kb){GD=
Kb;IA=Kb.AI;}if(!!GD&&(LV>GD.J8))LV=GD.J8;if(!!IA&&(LV<IA.J8))LV=IA.J8;if(LV!==Ag.
J8){Ag.Ab=null;Ag.Ar7(LV);Ag.Ab=this;}if(!Kb){if(!!this.B$)this.B$.Ah=Ag;Ag.AI=this.
B$;this.B$=Ag;}else{Ag.Ah=Kb;Ag.AI=Kb.AI;Kb.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}Ag.Ab=
this;if(this.B_===Kb)this.B_=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOV()===Ag))Ag.Ct(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Ct(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Ct(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Ba(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JQ],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JQ],this);}},J:function(Ag,Qh){var B;if(!Ag)throw new Error(
J_);if(!!Ag.Ab)throw new Error(Oh);var GD=null;var LV=Ag.J8;if(((Qh<0)&&!!this.B$
)&&(this.B$.J8>=LV)){GD=this.B$;Qh=Qh+1;}while((((Qh<0)&&!!GD)&&!!GD.AI)&&(GD.AI.
J8>=LV)){GD=GD.AI;Qh=Qh+1;}if((!GD&&!!this.B$)&&(this.B$.J8>LV))GD=this.B$;while((
!!GD&&!!GD.AI)&&(GD.AI.J8>LV))GD=GD.AI;if(!GD){Ag.Ab=this;Ag.AI=this.B$;if(!!this.
B$)this.B$.Ah=Ag;if(!this.B_)this.B_=Ag;this.B$=Ag;}else{Ag.Ab=this;Ag.AI=GD.AI;
Ag.Ah=GD;GD.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;else this.B_=Ag;}if(((Ag.U&0x1)===0x1))
this.Bi(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOV()===Ag))Ag.Ct(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Ct(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Ct(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Ba(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JQ],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JQ],this);}},A9a:function(){return this.
AV;},Awn:function(){return this.G9;},_Init:function(aArg){C.Eu._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eu._Mark.call(this,D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKv)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RM:null,JM:null,Ft:A.abi(10,null
,null),AtH:null,Ain:null,ABE:0,Ih:0,Mf:A.abi(10,0,null),AJW:A.abi(10,A.wg,null),
XD:A.abi(10,0,null),Af1:A.abi(10,A.wf,null),AtM:A.abi(10,0,null),Aim:A.abi(10,A.
wf,null),XC:A.abi(10,A.wf,null),RF:A.abi(10,A.wf,null),Add:A.abi(10,A.wf,null),EO:
0,AKh:0,AKg:0,Oy:A.abi(4,0,null),Kl:A.abi(4,A.wg,null),Ki:0,AAj:0,At1:0,Az5:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Ip:function(){return this;
},Kr:function(C1,aClip,aOffset,Ck,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)C1.Avl(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kr.call(this,C1,aClip
,aOffset,Ck,aBlend);},Ct:function(Rv,Va){var B;C.P.Ct.call(this,Rv,Va);if(!this.
Ab&&(((Rv&0x1)===0x1)||((Va&0x1)===0x1)))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rv&0x2)===0x2)||((Va&0x2)===0x2)))this.Bi([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Ba:function(E){if((E!==null)||!E)C.P.Ba.call(this,E);},ArL:
function(E){var B;var BAS=this.FF;C.P.ArL.call(this,E);if(((BAS!==this.FF)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},C0:function(
E){var B;var BP=this.G9;C.P.C0.call(this,E);if(((BP!==this.G9)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CM){if(!!CM){CM.AvU=!!this.Ih;if(!!this.Ih)CM.Bq=this.Ih;}var GE=null;if(!!this.
JM){GE=this.JM.C2.DispatchEvent(CM);if(!GE)GE=this.G4(CM);if(!GE)GE=this.A4k(CM);
this.Ih=0;return GE;}GE=C.P.DispatchEvent.call(this,CM);this.Ih=0;return GE;},BroadcastEvent:
function(CM,aFilter){if(!!CM){CM.AvU=!!this.Ih;if(!!this.Ih)CM.Bq=this.Ih;}var GE=
C.P.BroadcastEvent.call(this,CM,aFilter);this.Ih=0;return GE;},Bi:function(Dc){var
B;if(this.ABE>0)throw new Error(Qb);if(!!this.FF&&!this.Ab){if(((B=this.FF.QP)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FF,0);}this.FF.QP=A.wC(this.FF.QP
,Dc);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Dc=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bi.call(this,Dc);return;}Dc=A.
lb(A.abh(Dc,this.M.slice(0,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;
var O;for(O=0;O<this.Ki;O=O+1)if(!(((B=A.lb(this.Kl.Get(O),Dc))[0]>=B[2])||(B[1]>=
B[3]))){this.Kl.Set(O,A.wC(this.Kl.Get(O),Dc));this.Oy.Set(O,A.aaH(this.Kl.Get(O
)));return;}if(this.Ki<3){this.Kl.Set(this.Ki,Dc);this.Oy.Set(this.Ki,A.aaH(Dc));
this.Ki=this.Ki+1;return;}var Ij;var RL;var AAi=0;var AAl=0;var Bdf=2147483647;this.
Kl.Set(this.Ki,Dc);this.Oy.Set(this.Ki,A.aaH(Dc));for(Ij=0;Ij<=this.Ki;Ij=Ij+1)for(
RL=Ij+1;RL<=this.Ki;RL=RL+1){var ALo=A.aaH(A.wC(this.Kl.Get(Ij),this.Kl.Get(RL))
);var Bf7=((ALo<<8)/(this.Oy.Get(Ij)+this.Oy.Get(RL)))|0;if(Bf7<Bdf){Bdf=Bf7;AAi=
Ij;AAl=RL;}}this.Kl.Set(AAi,A.wC(this.Kl.Get(AAi),this.Kl.Get(AAl)));this.Oy.Set(
AAi,A.aaH(this.Kl.Get(AAi)));if(AAl!==this.Ki){this.Kl.Set(AAl,this.Kl.Get(this.
Ki));this.Oy.Set(AAl,this.Oy.Get(this.Ki));}},Bzn:function(){var LO=A._NewObject(
C.AqH,0);LO.AvU=!!this.Ih;if(!!this.Ih)LO.Bq=this.Ih;return LO;},Ao1:function(){
var LO=A._NewObject(C.Aee,0);LO.AvU=!!this.Ih;if(!!this.Ih)LO.Bq=this.Ih;return LO;
},AtL:function(){var LO=A._NewObject(C.Au0,0);LO.AvU=!!this.Ih;if(!!this.Ih)LO.Bq=
this.Ih;return LO;},Bzr:function(G){var O;var Aph=false;for(O=0;O<10;O=O+1)if(!!
this.Ft.Get(O)){var pos=this.RF.Get(O);var B1=this.Ft.Get(O).Ab;while(!!B1&&(B1!==
this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Ft.Get(O)!==this)){
var tmp=this.Ft.Get(O);this.EO=O;this.Ft.Set(O,null);tmp.G4(this.Ao1().InitializeUp(
O,this.Aim.Get(O),this.Af1.Get(O),this.XD.Get(O),this.Mf.Get(O)+1,this.XC.Get(O)
,false,this.RF.Get(O),this.Add.Get(O)));this.BroadcastEvent(this.AtL().InitializeUp(
O,this.Mf.Get(O)+1,false,tmp,this.RF.Get(O)),0x18);}else{this.XD.Set(O,(this.Ain.
Bq-this.AtM.Get(O))|0);if(this.XD.Get(O)<10)this.XD.Set(O,10);this.EO=O;this.Ft.
Get(O).G4(this.Ao1().InitializeHold(O,pos,this.Af1.Get(O),this.XD.Get(O),this.Mf.
Get(O)+1,this.XC.Get(O),this.RF.Get(O),this.Add.Get(O)));Aph=true;}}if(!Aph)this.
Ain.As(false);},GetFPS:function(){var ticksCount=0;var BdT=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKh&&(ticksCount>this.AKh))BdT=((this.AKg*1000)/((
ticksCount-this.AKh)|0))|0;this.AKg=0;this.AKh=ticksCount;return BdT;},Update:function(
){var B;if(!this.AtH)this.AtH=A._NewObject(A.Graphics.Canvas,0);this.AtH.ArR([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtH.Update();return this.UpdateGE20(this.AtH);}
,UpdateGE20:function(C1){if(!this.BeginUpdate())return BD;var Agu=this.UpdateCanvas(
C1,Cg);this.EndUpdate();return Agu;},EndUpdate:function(){if(this.Ki>0){this.AKg=
this.AKg+1;this.Ki=0;}},UpdateCanvas:function(C1,aOffset){var B;var Agu=BD;var By7=[
].concat(aOffset,A.abf(C1.FrameSize,aOffset));var O;var Ij=this.Ki;this.ABE=this.
ABE+1;C1.C2=this;for(O=0;(O<Ij)&&(O<4);O=O+1)if(this.Oy.Get(O)>0){this.Kr(C1,A.abg(
this.Kl.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agu=A.wC(Agu,A.lb(By7
,this.Kl.Get(O)));}else Ij=Ij+1;C1.C2=null;this.ABE=this.ABE-1;if(!((Agu[0]>=Agu[
2])||(Agu[1]>=Agu[3])))return A.abg(Agu,aOffset);else return Agu;},GetUpdateRegion:
function(AJh){var O;var Ij=this.Ki;if(AJh<0)return BD;for(O=0;(O<Ij)&&(O<4);O=O+
1)if(!this.Oy.Get(O)){Ij=Ij+1;AJh=AJh+1;}else if(O===AJh)return this.Kl.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Ki&&!A.aaY(this.Kl.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bha=A.abi(3,A.wg,null);var Bg$=this.Ki;for(O=0;
O<Bg$;O++)Bha.Set(O,this.Kl.Get(O));for(O=0;O<Bg$;O++){var Bgr=A.abh(Bha.Get(O),
this.M.slice(0,2));var Bgs=this.AuK(Bgr);if(!A.aaY(Bgr,Bgs))this.Bi(A.abg(Bgs,this.
M.slice(0,2)));}}var Ij;var RL;for(Ij=0;Ij<(this.Ki-1);Ij++)if(this.Oy.Get(Ij)>0
)for(RL=Ij+1;RL<this.Ki;RL++)if(this.Oy.Get(RL)>0){var ALo=A.aaH(A.wC(this.Kl.Get(
Ij),this.Kl.Get(RL)));if(((ALo-this.Oy.Get(Ij))-this.Oy.Get(RL))<0){this.Kl.Set(
Ij,A.wC(this.Kl.Get(Ij),this.Kl.Get(RL)));this.Oy.Set(Ij,ALo);this.Oy.Set(RL,0);
}}for(O=this.Ki-1;O>=0;O--)if(!this.Oy.Get(O))this.Ki=this.Ki-1;return this.Ki;}
,DoesNeedUpdate:function(){if(this.Ki>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cg,aSize));if(this.Az5)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bi(this.M);return this;},SetRootFocus:function(A1k){if(A1k===this.Az5
)return false;this.Az5=A1k;if(!A1k){if(!!this.JM)this.JM.C2.Ct(0x0,0x40);else this.
Ct(0x0,0x40);}else if(!!this.JM)this.JM.C2.Ct(0x40,0x0);else this.Ct(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qi){this.Ih=Qi;},DriveKeyboardHitting:function(
KF,Ay8,Tj){var B;var A4l=!!this.RM;if(!!this.RM&&((!Tj||(this.AAj!==KF))||(this.
At1!==Ay8))){var LO=null;var X=(C.Cj.isPrototypeOf(B=this.RM)?B:null);var D6=(C.
BF.isPrototypeOf(B=this.RM)?B:null);if(!!this.AAj)LO=A._NewObject(C.KeyEvent,0).
Initialize(this.AAj,false);if(this.At1!==0x00)LO=A._NewObject(C.KeyEvent,0).Initialize2(
this.At1,false);if(!!D6)D6.G4(LO);else if(!!X)X.G4(LO);this.AAj=0;this.At1=0x00;
this.RM=null;}if(!!this.RM){var LO=null;var X=(C.Cj.isPrototypeOf(B=this.RM)?B:null
);var D6=(C.BF.isPrototypeOf(B=this.RM)?B:null);if(!!KF)LO=A._NewObject(C.KeyEvent
,0).Initialize(KF,true);if(this.At1!==0x00)LO=A._NewObject(C.KeyEvent,0).Initialize2(
Ay8,true);if(!!D6)D6.G4(LO);else if(!!X)X.G4(LO);}if(!this.RM&&Tj){if(!!KF)this.
RM=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KF,true));if(Ay8!==0x00
)this.RM=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(Ay8,true));if(
!(C.BF.isPrototypeOf(B=this.RM)?B:null)&&!(C.Cj.isPrototypeOf(B=this.RM)?B:null)
)this.RM=null;this.AAj=KF;this.At1=Ay8;A4l=A4l||!!this.RM;}this.Ih=0;return A4l;
},DriveCursorMovement:function(Fe){return this.DriveMultiTouchMovement(this.EO,Fe
);},DriveMultiTouchMovement:function(BH,Fe){if((BH<0)||(BH>9)){this.Ih=0;return false;
}var Fv=A.abe(Fe,this.RF.Get(BH));this.RF.Set(BH,Fe);if(!this.Ft.Get(BH)||A.aaX(
Fv,Cg)){this.Ih=0;return false;}var pos=Fe;var B1=this.Ft.Get(BH).Ab;while(!!B1&&(
B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Ft.Get(BH)!==
this)){var tmp=this.Ft.Get(BH);this.EO=BH;this.Ft.Set(BH,null);tmp.G4(this.Ao1().
InitializeUp(BH,this.Aim.Get(BH),this.Af1.Get(BH),this.XD.Get(BH),this.Mf.Get(BH
)+1,this.XC.Get(BH),false,this.RF.Get(BH),this.Add.Get(BH)));this.BroadcastEvent(
this.AtL().InitializeUp(BH,this.Mf.Get(BH)+1,false,tmp,Fe),0x18);}else{this.Aim.
Set(BH,pos);this.EO=BH;this.Ft.Get(BH).G4(this.Bzn().Initialize(BH,pos,this.Af1.
Get(BH),Fv,this.XD.Get(BH),this.Mf.Get(BH)+1,this.XC.Get(BH),Fe,this.Add.Get(BH)
));}this.Ih=0;return true;},DriveCursorHitting:function(Tj,BH,Fe){return this.DriveMultiTouchHitting(
Tj,BH,Fe);},DriveMultiTouchHitting:function(Tj,BH,Fe){if((BH<0)||(BH>9)){this.Ih=
0;return false;}var ticksCount=this.Ih;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BCp=this.Ih;this.DriveMultiTouchMovement(BH,Fe);Fe=this.RF.Get(BH);
this.Ih=BCp;if(Tj)this.Add.Set(BH,Fe);if(Tj&&!this.Ft.Get(BH)){var JL;var pos=Fe;
if(A.wa(this.AJW.Get(BH),Fe)&&((ticksCount-this.AtM.Get(BH))<=250))this.Mf.Set(BH
,this.Mf.Get(BH)+1);else this.Mf.Set(BH,0);this.AJW.Set(BH,A.abh(MR,Fe));this.AtM.
Set(BH,ticksCount);if(!!this.JM)JL=this.Yq(A.abh(MR,Fe),BH,this.Mf.Get(BH)+1,this.
JM.C2,null,0x0);else JL=this.Yq(A.abh(MR,Fe),BH,this.Mf.Get(BH)+1,null,null,0x0);
if(!!JL){this.BroadcastEvent(this.AtL().InitializeDown(BH,this.Mf.Get(BH)+1,false
,JL.Cj,Fe),0x18);this.Ft.Set(BH,JL.Cj);this.XC.Set(BH,JL.DI);}else{this.Ft.Set(BH
,null);this.XC.Set(BH,Cg);this.Ih=0;return false;}var B1=JL.Cj.Ab;while(!!B1&&(B1
!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}this.Af1.Set(BH,pos);this.Aim.
Set(BH,pos);this.XD.Set(BH,0);this.Ain.As(true);this.EO=BH;this.Ft.Get(BH).G4(this.
Ao1().InitializeDown(BH,pos,this.Mf.Get(BH)+1,this.XC.Get(BH),false,Fe));this.Ih=
0;return true;}if(!Tj&&!!this.Ft.Get(BH)){var pos=Fe;var B1=this.Ft.Get(BH).Ab;while(
!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1)pos=this.Aim.
Get(BH);this.EO=BH;var tmp=this.Ft.Get(BH);this.Ft.Set(BH,null);tmp.G4(this.Ao1(
).InitializeUp(BH,pos,this.Af1.Get(BH),this.XD.Get(BH),this.Mf.Get(BH)+1,this.XC.
Get(BH),false,Fe,this.Add.Get(BH)));this.BroadcastEvent(this.AtL().InitializeUp(
BH,this.Mf.Get(BH)+1,false,tmp,Fe),0x18);this.Ih=0;return true;}this.Ih=0;return false;
},AUI:function(Aat,BcB,Ac5,Ac4){if(Aat===this)Aat=null;if(!!!Aat&&!!this.JM)Aat=
this.JM.C2;if(!this.Ft.Get(this.EO))return;var JL;JL=this.Yq(A.abh(MR,this.RF.Get(
this.EO)),this.EO,1,Aat,Ac5,Ac4);if(!!JL&&(this.Ft.Get(this.EO)!==JL.Cj))this.ANU(
JL.Cj,JL.DI);if(!JL&&(this.Ft.Get(this.EO)!==BcB))this.ANU(BcB,Cg);},ANU:function(
Aat,Xs){if(!this.Ft.Get(this.EO)||(this.Ft.Get(this.EO)===Aat))return;var tmp=this.
Ft.Get(this.EO);this.Ft.Set(this.EO,null);tmp.G4(this.Ao1().InitializeUp(this.EO
,this.Aim.Get(this.EO),this.Af1.Get(this.EO),this.XD.Get(this.EO),this.Mf.Get(this.
EO)+1,this.XC.Get(this.EO),true,this.RF.Get(this.EO),this.Add.Get(this.EO)));this.
BroadcastEvent(this.AtL().InitializeUp(this.EO,this.Mf.Get(this.EO)+1,true,tmp,this.
RF.Get(this.EO)),0x18);var pos=this.RF.Get(this.EO);var B1=null;if(!!Aat)B1=Aat.
Ab;while(!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(Aat
!==this)){this.Ft.Set(this.EO,null);return;}this.BroadcastEvent(this.AtL().InitializeDown(
this.EO,this.Mf.Get(this.EO)+1,true,Aat,this.RF.Get(this.EO)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Ft.Set(this.EO,Aat);this.XC.Set(
this.EO,Xs);this.Af1.Set(this.EO,pos);this.Aim.Set(this.EO,pos);this.Mf.Set(this.
EO,0);this.XD.Set(this.EO,0);this.AtM.Set(this.EO,ticksCount);this.Add.Set(this.
EO,this.RF.Get(this.EO));this.Ft.Get(this.EO).G4(this.Ao1().InitializeDown(this.
EO,pos,this.Mf.Get(this.EO)+1,this.XC.Get(this.EO),true,this.Add.Get(this.EO)));
},AOV:function(){if(!!this.JM)return this.JM.C2;return null;},ACV:function(KG){var
B;if(!KG)throw new Error(Tg);if(!((KG.U&0x80)===0x80))throw new Error(UX);if(this.
JM.C2===KG)this.JM=this.JM.Ah;else{var Az4=this.JM;while(Az4.Ah.C2!==KG)Az4=Az4.
Ah;Az4.Ah=Az4.Ah.Ah;}KG.Ct(0x0,0xD0);if(this.Az5){if(!!this.JM)this.JM.C2.Ct(0x50
,0x0);else this.Ct(0x50,0x0);}},AM0:function(KG){var B;var Ar=A._NewObject(C.A8j
,0);if(!KG)throw new Error(Aaa);if(KG===null)throw new Error(Xc);if(((KG.U&0x80)===
0x80))throw new Error(Iw);if(!!this.JM)this.JM.C2.Ct(0x0,0x50);else this.Ct(0x0,
0x50);Ar.Ah=this.JM;Ar.C2=KG;this.JM=Ar;if(this.Az5)KG.Ct(0xD0,0x0);else KG.Ct(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Ain={
I:this},0);(this.Ft=[]).__proto__=C.Root.Ft;(this.Mf=[]).__proto__=C.Root.Mf;(this.
AJW=[]).__proto__=C.Root.AJW;(this.XD=[]).__proto__=C.Root.XD;(this.Af1=[]).__proto__=
C.Root.Af1;(this.AtM=[]).__proto__=C.Root.AtM;(this.Aim=[]).__proto__=C.Root.Aim;(
this.XC=[]).__proto__=C.Root.XC;(this.RF=[]).__proto__=C.Root.RF;(this.Add=[]).__proto__=
C.Root.Add;(this.Oy=[]).__proto__=C.Root.Oy;(this.Kl=[]).__proto__=C.Root.Kl;this.
__proto__=C.Root;this.U=0x10007F;this.Ain.PW(10);this.Ain.MK=[this,this.Bzr];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Ain._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Ain._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RM)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JM)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ft,D);if((B=this.
AtH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ain)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bq:0,AvU:false,Init:function(aArg){this.Bq=
this.Avt();},Avt:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,Dz:0,Down:false
,Initialize2:function(KF,Tj){this.CO=0;this.Dz=KF;this.Down=Tj;if((KF>=0x30)&&(KF<=
0x39))this.CO=(10+KF)-48;if((KF>=0x41)&&(KF<=0x5A))this.CO=(105+KF)-65;if((KF>=0x61
)&&(KF<=0x7A))this.CO=(105+KF)-97;if(KF===0x20)this.CO=131;if(!this.CO)switch(KF
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(KF,Tj){this.CO=KF;this.
Down=Tj;this.Dz=0x00;var A10=KF-10;var AtG=KF-105;if((A10>=0)&&(A10<=9))this.Dz=(
48+A10)&0xFFFF;if((AtG>=0)&&(AtG<=25))this.Dz=(65+AtG)&0xFFFF;if(KF===131)this.Dz=
0x20;if(this.Dz===0x00)switch(KF){case 132:this.Dz=0x2B;break;case 133:this.Dz=0x2D;
break;case 134:this.Dz=0x2A;break;case 135:this.Dz=0x2F;break;case 136:this.Dz=0x3D;
break;case 137:this.Dz=0x2E;break;case 138:this.Dz=0x2C;break;case 139:this.Dz=0x3A;
break;case 140:this.Dz=0x3B;break;default:;}return this;},Bki:function(Bcq){switch(
Bcq){case 141:return((this.Dz>=0x41)&&(this.Dz<=0x5A))||((this.Dz>=0x61)&&(this.
Dz<=0x7A));case 142:return(((this.Dz>=0x41)&&(this.Dz<=0x5A))||((this.Dz>=0x61)&&(
this.Dz<=0x7A)))||((this.Dz>=0x30)&&(this.Dz<=0x39));case 143:return(this.Dz>=0x30
)&&(this.Dz<=0x39);case 144:return(((this.Dz>=0x41)&&(this.Dz<=0x46))||((this.Dz>=
0x61)&&(this.Dz<=0x66)))||((this.Dz>=0x30)&&(this.Dz<=0x39));case 145:return this.
Dz!==0x00;case 146:return(this.Dz===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.Dz!==0x00
)||!!this.CO;default:;}return Bcq===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARG={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARG;},_className:
"Core::LanguageEvent"};C.Au0={AxR:null,L0:A.wf,Oc:0,IO:0,Down:false,NQ:false,InitializeUp:
function(BH,Om,Aoy,A1C,Aas){this.Down=false;this.IO=BH;this.Oc=Om;this.L0=Aas;this.
AxR=A1C;this.NQ=Aoy;return this;},InitializeDown:function(BH,Om,Aoy,A1C,Aas){this.
Down=true;this.IO=BH;this.Oc=Om;this.L0=Aas;this.AxR=A1C;this.NQ=Aoy;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Au0;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxR)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aee={Ag0:A.wf,L0:A.wf,Oc:0,Jy:
0,NZ:A.wf,H4:A.wf,IO:0,Down:false,NQ:false,InitializeHold:function(BH,All,Ay_,Ay$
,Om,Xs,Aas,Ay9){this.Down=true;this.IO=BH;this.H4=A.abf(All,Xs);this.NZ=A.abf(Ay_
,Xs);this.Jy=Ay$;this.Oc=Om;this.L0=Aas;this.Ag0=Ay9;return this;},InitializeUp:
function(BH,All,Ay_,Ay$,Om,Xs,Aoy,Aas,Ay9){this.Down=false;this.IO=BH;this.H4=A.
abf(All,Xs);this.NZ=A.abf(Ay_,Xs);this.Jy=Ay$;this.Oc=Om;this.NQ=Aoy;this.L0=Aas;
this.Ag0=Ay9;return this;},InitializeDown:function(BH,All,Om,Xs,Aoy,Aas){this.Down=
true;this.IO=BH;this.H4=A.abf(All,Xs);this.NZ=A.abf(All,Xs);this.Jy=0;this.Oc=Om;
this.NQ=Aoy;this.L0=Aas;this.Ag0=Aas;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aee;},_className:"Core::CursorEvent"};C.AqH={
Ag0:A.wf,L0:A.wf,Oc:0,Jy:0,DI:A.wf,NZ:A.wf,H4:A.wf,IO:0,Initialize:function(BH,All
,Ay_,aOffset,Ay$,Byr,Xs,Aas,Ay9){this.IO=BH;this.H4=A.abf(All,Xs);this.NZ=A.abf(
Ay_,Xs);this.DI=aOffset;this.Jy=Ay$;this.Oc=Byr;this.L0=Aas;this.Ag0=Ay9;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqH;},_className:
"Core::DragEvent"};C.Y={BY:null,NI:null,En:null,Bs:A.wf,AVd:0,Space:0,AgY:0,Kr:function(
C1,aClip,aOffset,Ck,aBlend){},GetClipping:function(){var B;var Az=C.Eu.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap0=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap0=A.wC(Ap0,X.GetClipping());
Az=A.wC(Az,Ap0);}return Az;},Ct:function(Rv,Va){var B;var Tt=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((Va&0x80000)===0x80000))this.Ab.Bi(this.GetClipping(
));C.Eu.Ct.call(this,Rv,Va);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rv&0x80000)===
0x80000))&&!((Tt&0x80000)===0x80000))this.Ab.Bi(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlZ=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKD=[
E[2]-E[0],E[3]-E[1]];var ApW=!A.aaX(AlZ,AKD);var Fv=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fv,Cg)&&!ApW){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ani(Fv,tmp);}X=X.Ah;}A.pe(this.
En,this);}if((ApW&&(AlZ[0]>0))&&(AlZ[1]>0)){var Bd=A.abh(this.M,this.Bs);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
NK!==this))X.Ev=null;if(!X.Ev&&((X.PP!==0x14)||!!this.AgY))X.AtZ(Bd,this);}X=X.Ah;
}A.pe(this.En,this);}C.Eu.H.call(this,E);if(!!this.Ab&&ApW){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JQ],this);}}},Bgl:function(){var B;if((!this.AgY||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A2k=((this.U&0x1000)===0x1000);for(;!!X&&!A2k;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A2k=true;if(((X.U&0x200)===
0x200))break;}if(A2k){this.U=this.U&~0x4000;this.Ab.Bgw();}},ApH:function(G){var
B;this.BY.Q=null;this.BY.Qw=null;this.BY=null;(B=this.NI)?B[1].call(B[0],this):null;
},Gf:function(E){var B;var Fv=A.abe(E,this.Bs);if(A.aaX(Fv,Cg))return;this.Bs=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ani(Fv,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bi(this.M);A.pe(
this.En,this);},A_9:function(E){var B;if(E<0)E=0;if(E===this.AVd)return;this.AVd=
E;if(!!this.Ab&&!!this.AgY){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JQ],this);}},Bof:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgY){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JQ],this);}},J0:function(E){var B;if(E===this.AgY)return;
this.AgY=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JQ],this);}},VF:function(AcZ,E7){var AtG=this.Dd(0x1);var RB=this.M;var
Vp=A.abe(AtG.slice(0,2),RB.slice(0,2));var Mh=A.abe(AtG.slice(2,4),RB.slice(2,4)
);var Br=Cg;if((Vp[0]>0)&&(Mh[0]>Vp[0]))Br=[Vp[0],Br[1]];else if((Vp[0]>0)&&(Mh[
0]>0))Br=[Mh[0],Br[1]];if((Mh[0]<0)&&(Vp[0]<Mh[0]))Br=[Mh[0],Br[1]];else if((Mh[
0]<0)&&(Vp[0]<0))Br=[Vp[0],Br[1]];if((Vp[1]>0)&&(Mh[1]>Vp[1]))Br=[Br[0],Vp[1]];else
if((Vp[1]>0)&&(Mh[1]>0))Br=[Br[0],Mh[1]];if((Mh[1]<0)&&(Vp[1]<Mh[1]))Br=[Br[0],Mh[
1]];else if((Mh[1]<0)&&(Vp[1]<0))Br=[Br[0],Vp[1]];if(A.aaX(Br,Cg)){(E7)?E7[1].call(
E7[0],this):null;return;}if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.BY.
Qw=null;this.NI=null;}this.BY=AcZ;if(!this.BY){this.Gf(A.abe(this.Bs,Br));(E7)?E7[
1].call(E7[0],this):null;}else{this.BY.As(false);this.BY.HP(1);this.BY.Q=[this,this.
Anu,this.Gf];this.BY.Cy=this.Bs;this.BY.B3=A.abe(this.Bs,Br);this.BY.Qw=[this,this.
ApH];this.BY.Ae_(false);this.BY.As(true);this.NI=E7;}},HJ:function(Ag,Ac2,AcZ,E7
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UY);this.Bgl();var Az=Ag.GetExtent();var Bd=this.M;var LT=A.lb(Az,Bd);if((!Ac2&&
!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac2&&A.aaY(LT,Az))){(E7)?E7[1].call(E7[0],this
):null;return;}var Br=Cg;if(Az[2]>Bd[2])Br=[Az[2]-Bd[2],Br[1]];if(Az[3]>Bd[3])Br=[
Br[0],Az[3]-Bd[3]];if(Br[0]>(Az[0]-Bd[0]))Br=[Az[0]-Bd[0],Br[1]];if(Br[1]>(Az[1]-
Bd[1]))Br=[Br[0],Az[1]-Bd[1]];if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.
BY.Qw=null;this.NI=null;}this.BY=AcZ;if(!this.BY){this.Gf(A.abe(this.Bs,Br));(E7
)?E7[1].call(E7[0],this):null;}else{this.BY.As(false);this.BY.HP(1);this.BY.Q=[this
,this.Anu,this.Gf];this.BY.Cy=this.Bs;this.BY.B3=A.abe(this.Bs,Br);this.BY.Qw=[this
,this.ApH];this.BY.Ae_(false);this.BY.As(true);this.NI=E7;}},BjK:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AI;}return CB;
},TU:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dd:function(aFilter){var B;var X=this.Ah;var AE=BD;var I6=0x10000;this.Bgl();if(((
aFilter&0x10000)===0x10000))I6=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!I6||!((B=I6)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anu:function(){return this.Bs;},_Init:
function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eu._Mark.call(this,D);if((B=this.BY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
En)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CL={
HC:null,BY:null,Cj:null,WZ:null,NI:null,En:null,Hn:null,Tq:-1,Tp:0,Ju:-1,Ht:0,AiG:
8,Ot:0,UD:0,AcM:A.wf,G6:-1,Bs:0,Gu:-1,OW:0,GP:24,A0:0,Lm:null,NW:false,At2:false
,AVk:function(Ix,Ol,Xr,Tk,Tl,Ah6,Pc,Ru,LE,LC,LD){throw new Error(Aab);},AqF:function(
Ix,Ah6,Pc,Ru,LE,LC,LD){throw new Error(UZ);},AkI:function(Ix,Ol,Xr,Tk,Tl,Pc,Ru,LE
,LC,LD){throw new Error(Aac);},DispatchEvent:function(CM){var B;var result=null;
if(((this.Gu>=0)&&(this.Gu<this.A0))&&!this.AV){this.G6=this.Gu;this.Cj=(C.Cj.isPrototypeOf(
B=A._NewObject(this.Lm,0))?B:null);if(!!this.B$)this.B$.Ah=this.Cj;else this.B_=
this.Cj;this.Cj.AI=this.B$;this.B$=this.Cj;this.Cj.Ab=this;this.AcM=[(B=this.M)[
2]-B[0],this.GP];(B=this.Hn)?B[1].call(B[0],this):null;var B1=(C.P.isPrototypeOf(
B=this.Cj)?B:null);if(!!B1)result=B1.DispatchEvent(CM);else result=this.Cj.G4(CM
);if(!!this.Cj.AI)this.Cj.AI.Ah=null;else this.B_=null;this.B$=this.Cj.AI;this.Cj.
AI=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=C.P.DispatchEvent.call(this
,CM);return result;},Aj:function(Ae){var B;if(!this.Lm){A.pe(this.En,this);return;
}this.At2=true;var AA0=0;if(!this.NW)AA0=this.OW;var FW=this.Al8(-AA0-this.Bs,1);
var G1=this.Al8(((((B=this.M)[3]-B[1])-AA0)-this.Bs)-1,2);var CB=G1-FW;if(CB<1)CB=
1;var Aih=(CB/2)|0;var Aii=(CB/3)|0;if(!Aih)Aih=1;if(!Aii)Aii=1;if(FW<this.Ht){FW=
FW-Aih;G1=G1+Aii;}else if(G1>this.Ju){FW=FW-Aii;G1=G1+Aih;}else{FW=this.Ht;G1=this.
Ju;}if(!this.NW){if(FW>=this.A0){FW=0;G1=-1;}else if(G1<0){FW=0;G1=-1;}if(G1>=this.
A0)G1=this.A0-1;if(FW<0)FW=0;}else if(this.A0<=0){FW=0;G1=-1;}var AiW=this.Ht;var
AiX=this.Ju;var Apu=0;var Apv=-1;if(FW>AiW)AiW=FW;if(G1<AiX)AiX=G1;if(AiW<=AiX){
while((this.Ju<G1)&&(this.Ht<AiW)){this.AdF();this.Azz();}while((this.Ht>FW)&&(this.
Ju>AiX)){this.ABb();this.Azy();}}else{this.Ju=(this.Ju-this.Ht)+FW;this.Ht=FW;Apu=
this.Ht;Apv=this.Ju;}while(this.Ht<FW)this.AdF();while(this.Ju>G1)this.ABb();while(
this.Ht>FW)this.Azy();while(this.Ju<G1)this.Azz();var Aa=this.B_;var inx=this.Ht;
var pos=[0,(AA0+this.Bs)+this.Js(inx,0)];var BL=(B=this.M)[3]-B[1];var AlI=null;
var Bhk=(B=this.M)[2]-B[0];while(!!Aa){var IE=inx;if(this.NW){if(IE<0)IE=this.A0-(-
IE%this.A0);if(IE>0)IE=IE%this.A0;}var AdG=((IE>=this.Tp)&&(IE<=this.Tq))||((inx>=
Apu)&&(inx<=Apv));var Apa=Aa.GetExtent();var Br=A.abe(pos,Apa.slice(0,2));if(AdG
)this.UD=this.GP;else this.UD=Apa[3]-Apa[1];var A22=pos[1];var A23=pos[1]+this.UD;
if(!A.aaX(Br,Cg))Aa.Ani(Br,true);if((AdG&&(A22<BL))&&(A23>0)){this.Cj=Aa;this.G6=
IE;this.AcM=[Bhk,this.UD];(B=this.Hn)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.UD];}inx=this.Ht;Aa=this.B_;pos=[0,(AA0+this.Bs)+this.Js(
inx,0)];while(!!Aa){var IE=inx;if(this.NW){if(IE<0)IE=this.A0-(-IE%this.A0);if(IE>
0)IE=IE%this.A0;}var AdG=((IE>=this.Tp)&&(IE<=this.Tq))||((inx>=Apu)&&(inx<=Apv)
);if(AdG)this.UD=this.GP;else this.UD=(B=Aa.GetExtent())[3]-B[1];var A22=pos[1];
var A23=pos[1]+this.UD;if(AdG&&!((A22<BL)&&(A23>0))){this.Cj=Aa;this.G6=IE;this.
AcM=[Bhk,this.UD];(B=this.Hn)?B[1].call(B[0],this):null;}if(((IE===this.Gu)&&this.
NW)&&!!AlI){var RB=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),RB))>A.aaH(A.lb(AlI.GetExtent(),RB)))AlI=Aa;}else if(IE===this.Gu)AlI=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.UD];}this.Tp=0;this.Tq=-1;this.Cj=null;this.G6=-
1;this.Ba(AlI);this.At2=false;A.pe(this.En,this);},QK:function(Ag,GB,aFilter){return null;
},AqM:function(Ag,aFilter){return null;},TU:function(Ag,aFilter){return null;},AC3:
function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NX:function(
KG,FS,LE,LC,LD){throw new Error(Xd);},AhB:function(Ag,Kb){throw new Error(Aad);}
,ZL:function(Ag){throw new Error(Aae);},J6:function(Ag,Qh){throw new Error(U0);}
,HQ:function(Ag){throw new Error(Xe);},AMf:function(Ag,Kb){throw new Error(O9);}
,J:function(Ag,Qh){throw new Error(Aaf);},Js:function(Ha,A1b){return Ha*this.GP;
},Al8:function(Fe,A1b){return(Fe/this.GP)|0;},ABb:function(){var Aa=this.B$;if(!
Aa)return null;if(Aa===this.AV)this.Ba(null);this.Ju=this.Ju-1;if(!!Aa.AI)Aa.AI.
Ah=null;else this.B_=null;this.B$=Aa.AI;Aa.AI=null;Aa.Ab=null;Aa.Ev=null;if(this.
Ot<this.AiG){if(!!this.HC)this.HC.AI=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ot++;}return Aa;
},Azz:function(){var B;var Aa=this.HC;var Adp=this.Lm;var AdJ=++this.Ju;if(this.
NW){if(AdJ<0)AdJ=this.A0-(-AdJ%this.A0);if(AdJ>0)AdJ=AdJ%this.A0;}while(!!Aa&&(((
B=Aa)?B.__proto__:null)!==Adp))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!
Aa.AI)Aa.AI.Ah=Aa.Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ot--;
}else{Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Adp,0))?B:null);Aa.A1(0x1D);if(!!this.
Ot)this.AiG++;}this.UD=this.GP;this.G6=AdJ;this.AcM=[(B=this.M)[2]-B[0],this.UD];
this.Cj=Aa;(B=this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.
B$)this.B$.Ah=Aa;Aa.Ab=this;Aa.AI=this.B$;this.B$=Aa;if(!this.B_)this.B_=Aa;if(AdJ===
this.Gu)this.Ba(Aa);return Aa;},AdF:function(){var Aa=this.B_;if(!Aa)return null;
if(Aa===this.AV)this.Ba(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AI=null;else this.
B$=null;this.B_=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiG){if(!
!this.HC)this.HC.AI=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ot++;}return Aa;},Azy:function(
){var B;var Aa=this.HC;var Adp=this.Lm;var M_=--this.Ht;if(this.NW){if(M_<0)M_=this.
A0-(-M_%this.A0);if(M_>0)M_=M_%this.A0;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==
Adp))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.AI.Ah=Aa.Ah;if(this.
HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ot--;}else{Aa=(C.Cj.isPrototypeOf(
B=A._NewObject(Adp,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.AiG++;}this.UD=this.
GP;this.G6=M_;this.AcM=[(B=this.M)[2]-B[0],this.UD];this.Cj=Aa;(B=this.Hn)?B[1].
call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B_)this.B_.AI=Aa;Aa.Ab=this;
Aa.Ah=this.B_;this.B_=Aa;if(!this.B$)this.B$=Aa;if(M_===this.Gu)this.Ba(Aa);return Aa;
},ApH:function(G){var B;this.BY.Q=null;this.BY.Qw=null;this.BY=null;(B=this.NI)?
B[1].call(B[0],this):null;},BBM:function(G){this.Gf(this.WZ.DI[1]);},BBN:function(
G){var B;if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.BY.Qw=null;this.BY=
null;}if(!this.NW){var AE=this.AqT(0,this.A0-1);var Agj=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OW);if(AE[0]>Agj[0])AE=[].concat(Agj[0],AE.slice(1,4));if(AE[1]>Agj[
1])AE=A.abP(AE,Agj[1]);var Fv=AE[1]-this.M[1];var A3h=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A3h>0)A3h=0;this.WZ.DI=[0,this.Bs];this.WZ.Gr=[0,(this.Bs+A3h)-Fv];this.
WZ.Gc=[0,this.Bs-Fv];}else{var Fv=32000-(32000%this.GP);this.WZ.DI=[0,this.Bs];this.
WZ.Gr=[0,this.Bs-Fv];this.WZ.Gc=[0,this.Bs+Fv];}},ATk:function(E){var B;if(this.
NW===E)return;this.NW=E;while(!!this.AdF());this.Am();this.Bi([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw_:function(E){if(E===this.WZ)return;if(!!E&&!!E.Aud){A.ab5(
"%s%*%s",Oi,E,Rn);throw new Error(Xf);}if(!!this.WZ){this.WZ.AKQ=null;this.WZ.Aud=
null;}this.WZ=E;if(!!E){E.AKQ=[this,this.BBN];E.Aud=[this,this.BBM];}},Gf:function(
E){var B;if(this.NW&&(this.A0>0)){var HF=this.Js(this.A0,3);if(E<0)E=HF-(-E%HF);
if(E>0)E=E%HF;if(E>0)E=E-HF;}if(E===this.Bs)return;this.Bs=E;this.Am();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GU:function(E){if(E<0)E=-1;if(E===this.Gu)return;
this.Gu=E;this.Am();},A_W:function(E){var B;if(E<0)E=0;if(E===this.OW)return;this.
OW=E;if(!this.NW){this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae7:function(
E){var B;if(E<1)E=1;if(E===this.GP)return;this.GP=E;while(!!this.AdF());this.Am(
);this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JD:function(E){var B;if(E<0)E=0;
if(E===this.A0)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NW){if(
E>this.A0){AE=[].concat(AE.slice(0,3),(this.OW+this.Bs)+this.Js(E,3));AE=A.abP(AE
,(this.OW+this.Bs)+this.Js(this.A0,3));}else{AE=A.abP(AE,(this.OW+this.Bs)+this.
Js(E,3));AE=[].concat(AE.slice(0,3),(this.OW+this.Bs)+this.Js(this.A0,3));}}else
while(!!this.AdF());this.A0=E;this.Am();this.Bi(AE);},N8:function(E){var B;if(E===
this.Lm)return;this.Lm=E;while(!!this.AdF());this.HC=null;this.Ot=0;this.Am();this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjY:function(Ha){if(this.At2)return null;
if((Ha<0)||(Ha>=this.A0))return null;if(!this.NW){if((Ha<this.Ht)||(Ha>this.Ju))
return null;var X=this.B_;while(Ha>this.Ht){X=X.Ah;Ha=Ha-1;}return X;}else{var M_=
this.Ht;if(M_<0)M_=this.A0-(-M_%this.A0);if(M_>0)M_=M_%this.A0;var X=this.B_;while(
!!X){if((M_%this.A0)===Ha)return X;X=X.Ah;M_=M_+1;}return null;}},ABV:function(AcZ
,E7){var B;if(this.NW){(E7)?E7[1].call(E7[0],this):null;return;}var AKi=this.Bs;
var BdU=((((B=this.M)[3]-B[1])-this.Bs)-this.OW)-this.Js(this.A0,3);var Br=0;if(
AKi>0)Br=-AKi;else if(BdU>0)Br=BdU;if((Br>0)&&(Br>-AKi))Br=-AKi;if(!Br){(E7)?E7[
1].call(E7[0],this):null;return;}if(!!this.BY){this.BY.As(false);this.BY.Q=null;
this.BY.Qw=null;this.NI=null;}this.BY=AcZ;if(!this.BY){this.Gf(this.Bs+Br);(E7)?
E7[1].call(E7[0],this):null;}else{this.BY.As(false);this.BY.HP(1);this.BY.Q=[this
,this.Anu,this.Gf];this.BY.Cy=this.Bs;this.BY.B3=this.Bs+Br;this.BY.Qw=[this,this.
ApH];this.BY.Ae_(false);this.BY.As(true);this.NI=E7;}},HJ:function(Ha,Ac2,AcZ,E7
){var B;if((Ha<0)||(Ha>=this.A0))return;var Az=this.AqT(Ha,Ha);var Bd=this.M;var
LT=A.lb(Az,Bd);if((!Ac2&&!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac2&&A.aaY(LT,Az))
){(E7)?E7[1].call(E7[0],this):null;return;}var Br=0;if(Az[3]>Bd[3])Br=Az[3]-Bd[3
];if(Br>(Az[1]-Bd[1]))Br=Az[1]-Bd[1];if(!!this.BY){this.BY.As(false);this.BY.Q=null;
this.BY.Qw=null;this.NI=null;}this.BY=AcZ;if(!this.BY){this.Gf(this.Bs-Br);(E7)?
E7[1].call(E7[0],this):null;}else{this.BY.As(false);this.BY.HP(1);this.BY.Q=[this
,this.Anu,this.Gf];this.BY.Cy=this.Bs;this.BY.B3=this.Bs-Br;this.BY.Qw=[this,this.
ApH];this.BY.Ae_(false);this.BY.As(true);this.NI=E7;}},BjP:function(){return BD;
},AOX:function(){if((this.OW<=0)||this.NW)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Bs);AE=[].concat(AE.slice(0,3),AE[1]+this.OW);return AE;},A7j:function(Fe
){if(((this.A0<=0)||(Fe[0]<this.M[0]))||(Fe[0]>=this.M[2]))return-1;Fe=A.abe(Fe,
this.M.slice(0,2));if(!this.NW){var Aa=(Fe[1]-this.Bs)-this.OW;if(Aa>0)Aa=this.Al8(
Aa,0);if((Aa<0)||(Aa>=this.A0))return-1;return Aa;}var Aa=Fe[1]-this.Bs;if(Aa>0)
Aa=this.Al8(Aa,0);if(Aa<0)Aa=this.Al8(Aa,0)-1;if(Aa<0)Aa=this.A0-(-Aa%this.A0);if(
Aa>0)Aa=Aa%this.A0;return Aa;},AqT:function(Ka,Ma){if(Ka<0)Ka=0;if(Ma>=this.A0)Ma=
this.A0-1;if(Ka>Ma)return BD;var AE=this.M;var Br=this.Bs;if(this.NW){var HF=this.
Js(this.A0,3);if(Br<0)Br=HF-(-Br%HF);if(Br>0)Br=Br%HF;if(Br>0)Br=Br-HF;}else Br=
Br+this.OW;AE=[].concat(AE.slice(0,3),(AE[1]+Br)+this.Js(Ma+1,0));AE=A.abP(AE,(AE[
1]+Br)+this.Js(Ka,0));return AE;},AbL:function(Ka,Ma){var B;if(Ka<0)Ka=0;if(Ka>Ma
)return;if(this.Tp>this.Tq){this.Tp=Ka;this.Tq=Ma;}else{if(Ka<this.Tp)this.Tp=Ka;
if(Ma>this.Tq)this.Tq=Ma;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NW){
AE=A.abP(AE,(this.OW+this.Bs)+this.Js(Ka,0));AE=[].concat(AE.slice(0,3),(this.OW+
this.Bs)+this.Js(Ma+1,0));}else if((this.Js(this.A0-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Br=this.Bs;var HF=this.Js(this.A0,3);if(Br<0)Br=HF-(-Br%HF);if(
Br>0)Br=Br%HF;if(Br>0)Br=Br-HF;AE=A.abP(AE,Br+this.Js(Ka,0));AE=[].concat(AE.slice(
0,3),Br+this.Js(Ma+1,0));}this.Am();this.Bi(AE);},Anu:function(){return this.Bs;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CL;this.H(Xg);
this.Lm=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HC
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WZ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.En)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hn)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.DC={HC:null
,BY:null,Cj:null,NI:null,Hn:null,Tq:-1,Tp:0,Ju:-1,Ht:0,AiG:8,Ot:0,SU:0,AcM:A.wf,
G6:-1,Bs:0,Gu:-1,Wi:24,A0:0,Lm:null,At2:false,AVk:function(Ix,Ol,Xr,Tk,Tl,Ah6,Pc
,Ru,LE,LC,LD){throw new Error(U1);},AqF:function(Ix,Ah6,Pc,Ru,LE,LC,LD){throw new
Error(Xh);},AkI:function(Ix,Ol,Xr,Tk,Tl,Pc,Ru,LE,LC,LD){throw new Error(Aag);},DispatchEvent:
function(CM){var B;var result=null;if(((this.Gu>=0)&&(this.Gu<this.A0))&&!this.AV
){this.G6=this.Gu;this.Cj=(C.Cj.isPrototypeOf(B=A._NewObject(this.Lm,0))?B:null);
if(!!this.B$)this.B$.Ah=this.Cj;else this.B_=this.Cj;this.Cj.AI=this.B$;this.B$=
this.Cj;this.Cj.Ab=this;this.AcM=[this.SU,(B=this.M)[3]-B[1]];(B=this.Hn)?B[1].call(
B[0],this):null;var B1=(C.P.isPrototypeOf(B=this.Cj)?B:null);if(!!B1)result=B1.DispatchEvent(
CM);else result=this.Cj.G4(CM);if(!!this.Cj.AI)this.Cj.AI.Ah=null;else this.B_=null;
this.B$=this.Cj.AI;this.Cj.AI=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=
C.P.DispatchEvent.call(this,CM);return result;},Aj:function(Ae){var B;if(!this.Lm
)return;this.At2=true;var FW=this.Al8(0-this.Bs,1);var G1=this.Al8((((B=this.M)[
2]-B[0])-this.Bs)-1,2);var CB=G1-FW;if(CB<1)CB=1;var Aih=(CB/2)|0;var Aii=(CB/3)|
0;if(!Aih)Aih=1;if(!Aii)Aii=1;if(FW<this.Ht){FW=FW-Aih;G1=G1+Aii;}else if(G1>this.
Ju){FW=FW-Aii;G1=G1+Aih;}else{FW=this.Ht;G1=this.Ju;}if(FW>=this.A0){FW=0;G1=-1;
}else if(G1<0){FW=0;G1=-1;}if(G1>=this.A0)G1=this.A0-1;if(FW<0)FW=0;var AiW=this.
Ht;var AiX=this.Ju;var Apu=0;var Apv=-1;if(FW>AiW)AiW=FW;if(G1<AiX)AiX=G1;if(AiW<=
AiX){while((this.Ju<G1)&&(this.Ht<AiW)){this.AdF();this.Azz();}while((this.Ht>FW
)&&(this.Ju>AiX)){this.ABb();this.Azy();}}else{this.Ju=(this.Ju-this.Ht)+FW;this.
Ht=FW;Apu=this.Ht;Apv=this.Ju;}while(this.Ht<FW)this.AdF();while(this.Ju>G1)this.
ABb();while(this.Ht>FW)this.Azy();while(this.Ju<G1)this.Azz();var Aa=this.B_;var
inx=this.Ht;var pos=[this.Bs+this.Js(inx,0),0];var BZ=(B=this.M)[2]-B[0];var AlI=
null;var Bg9=(B=this.M)[3]-B[1];while(!!Aa){var IE=inx;var AdG=((IE>=this.Tp)&&(
IE<=this.Tq))||((inx>=Apu)&&(inx<=Apv));var Apa=Aa.GetExtent();var Br=A.abe(pos,
Apa.slice(0,2));if(AdG)this.SU=this.Wi;else this.SU=Apa[2]-Apa[0];var A20=pos[0];
var A21=pos[0]+this.SU;if(!A.aaX(Br,Cg))Aa.Ani(Br,true);if((AdG&&(A20<BZ))&&(A21>
0)){this.Cj=Aa;this.G6=IE;this.AcM=[this.SU,Bg9];(B=this.Hn)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SU,pos[1]];}inx=this.Ht;Aa=this.B_;pos=[
this.Bs+this.Js(inx,0),0];while(!!Aa){var IE=inx;var AdG=((IE>=this.Tp)&&(IE<=this.
Tq))||((inx>=Apu)&&(inx<=Apv));if(AdG)this.SU=this.Wi;else this.SU=(B=Aa.GetExtent(
))[2]-B[0];var A20=pos[0];var A21=pos[0]+this.SU;if(AdG&&!((A20<BZ)&&(A21>0))){this.
Cj=Aa;this.G6=IE;this.AcM=[this.SU,Bg9];(B=this.Hn)?B[1].call(B[0],this):null;}if(
IE===this.Gu)AlI=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SU,pos[1]];}this.Tp=0;this.
Tq=-1;this.Cj=null;this.G6=-1;this.Ba(AlI);this.At2=false;},QK:function(Ag,GB,aFilter
){return null;},AqM:function(Ag,aFilter){return null;},TU:function(Ag,aFilter){return null;
},AC3:function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NX:function(
KG,FS,LE,LC,LD){throw new Error(Xi);},AhB:function(Ag,Kb){throw new Error(U2);},
ZL:function(Ag){throw new Error(Xj);},J6:function(Ag,Qh){throw new Error(Xk);},HQ:
function(Ag){throw new Error(Xl);},AMf:function(Ag,Kb){throw new Error(Ro);},J:function(
Ag,Qh){throw new Error(Th);},Js:function(Ha,A1b){return Ha*this.Wi;},Al8:function(
Fe,A1b){return(Fe/this.Wi)|0;},ABb:function(){var Aa=this.B$;if(!Aa)return null;
if(Aa===this.AV)this.Ba(null);this.Ju=this.Ju-1;if(!!Aa.AI)Aa.AI.Ah=null;else this.
B_=null;this.B$=Aa.AI;Aa.AI=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiG){if(!
!this.HC)this.HC.AI=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ot++;}return Aa;},Azz:function(
){var B;var Aa=this.HC;var Adp=this.Lm;var AdJ=++this.Ju;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adp))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.
AI.Ah=Aa.Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ot--;}else{
Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Adp,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.
AiG++;}this.SU=this.Wi;this.G6=AdJ;this.AcM=[this.SU,(B=this.M)[3]-B[1]];this.Cj=
Aa;(B=this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B$)this.
B$.Ah=Aa;Aa.Ab=this;Aa.AI=this.B$;this.B$=Aa;if(!this.B_)this.B_=Aa;if(AdJ===this.
Gu)this.Ba(Aa);return Aa;},AdF:function(){var Aa=this.B_;if(!Aa)return null;if(Aa===
this.AV)this.Ba(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AI=null;else this.B$=null;
this.B_=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiG){if(!!this.HC
)this.HC.AI=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ot++;}return Aa;},Azy:function(){var
B;var Aa=this.HC;var Adp=this.Lm;var M_=--this.Ht;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adp))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.AI.Ah=Aa.
Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ot--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adp,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.AiG++;
}this.SU=this.Wi;this.G6=M_;this.AcM=[this.SU,(B=this.M)[3]-B[1]];this.Cj=Aa;(B=
this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B_)this.B_.
AI=Aa;Aa.Ab=this;Aa.Ah=this.B_;this.B_=Aa;if(!this.B$)this.B$=Aa;if(M_===this.Gu
)this.Ba(Aa);return Aa;},ApH:function(G){var B;this.BY.Q=null;this.BY.Qw=null;this.
BY=null;(B=this.NI)?B[1].call(B[0],this):null;},Gf:function(E){var B;if(E===this.
Bs)return;this.Bs=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GU:function(
E){if(E<0)E=-1;if(E===this.Gu)return;this.Gu=E;this.Am();},AFx:function(E){var B;
if(E<1)E=1;if(E===this.Wi)return;this.Wi=E;while(!!this.AdF());this.Am();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JD:function(E){var B;if(E<0)E=0;if(E===this.
A0)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.A0){AE=[].concat(this.
Bs+this.Js(this.A0,3),AE.slice(1,4));AE=A.abN(AE,this.Bs+this.Js(E,3));}else{AE=
A.abN(AE,this.Bs+this.Js(this.A0,3));AE=[].concat(this.Bs+this.Js(E,3),AE.slice(
1,4));}this.A0=E;this.Am();this.Bi(AE);},N8:function(E){var B;if(E===this.Lm)return;
this.Lm=E;while(!!this.AdF());this.HC=null;this.Ot=0;this.Am();this.Bi([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BpT:function(Bys,Byt){if(!this.BY)return;if(Bys)this.Gf(
this.BY.B3);var A4Y=this.NI;this.BY.As(false);this.BY.Q=null;this.BY.Qw=null;this.
NI=null;this.BY=null;if(Byt)(A4Y)?A4Y[1].call(A4Y[0],this):null;},Bkn:function(){
return!!this.BY;},HJ:function(Ha,Ac2,AcZ,E7){var B;if((Ha<0)||(Ha>=this.A0))return;
var Az=this.AqT(Ha,Ha);var Bd=this.M;var LT=A.lb(Az,Bd);if((!Ac2&&!((LT[0]>=LT[2
])||(LT[1]>=LT[3])))||(Ac2&&A.aaY(LT,Az))){(E7)?E7[1].call(E7[0],this):null;return;
}var Br=0;if(Az[2]>Bd[2])Br=Az[2]-Bd[2];if(Br>(Az[0]-Bd[0]))Br=Az[0]-Bd[0];if(!!
this.BY){this.BY.As(false);this.BY.Q=null;this.BY.Qw=null;this.NI=null;}this.BY=
AcZ;if(!this.BY){this.Gf(this.Bs-Br);(E7)?E7[1].call(E7[0],this):null;}else{this.
BY.As(false);this.BY.HP(1);this.BY.Q=[this,this.Anu,this.Gf];this.BY.Cy=this.Bs;
this.BY.B3=this.Bs-Br;this.BY.Qw=[this,this.ApH];this.BY.Ae_(false);this.BY.As(true
);this.NI=E7;}},AqT:function(Ka,Ma){if(Ka<0)Ka=0;if(Ma>=this.A0)Ma=this.A0-1;if(
Ka>Ma)return BD;var AE=this.M;var Br=this.Bs;AE=A.abN(AE,(AE[0]+Br)+this.Js(Ma+1
,0));AE=[].concat((AE[0]+Br)+this.Js(Ka,0),AE.slice(1,4));return AE;},AbL:function(
Ka,Ma){var B;if(Ka<0)Ka=0;if(Ka>Ma)return;if(this.Tp>this.Tq){this.Tp=Ka;this.Tq=
Ma;}else{if(Ka<this.Tp)this.Tp=Ka;if(Ma>this.Tq)this.Tq=Ma;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Bs+this.Js(Ka,0),AE.slice(1,4));AE=A.abN(
AE,this.Bs+this.Js(Ma+1,0));this.Am();this.Bi(AE);},Anu:function(){return this.Bs;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.DC;this.H(Xg);
this.Lm=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HC
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASy:null,AE0:null,Av_:null,D2:null,
Lr:null,BG:null,ALd:0,Bp:0,IO:0,Bq:0,Oc:0,Jy:0,DI:A.wf,NZ:A.wf,H4:A.wf,Axz:8,Aff:
0,A8c:1,Down:false,YP:false,NQ:false,A2r:false,AAt:0,Kr:function(C1,aClip,aOffset
,Ck,aBlend){},G4:function(CM){var B;var BO=(C.Aee.isPrototypeOf(CM)?CM:null);var
D5=(C.AqH.isPrototypeOf(CM)?CM:null);var AKs=this.YP;var AaP;var Vm;var ABw;var M7;
var AzR;if(!BO&&!D5)return null;AaP=(!!BO&&BO.Down)&&!BO.Jy;Vm=(!!BO&&BO.Down)&&(
BO.Jy>0);ABw=(!!BO&&BO.Down)&&(BO.Jy>this.AAt);M7=!!BO&&!BO.Down;AzR=!!D5;if(AaP
)this.AAt=((B=(BO.NQ?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Aff&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var IC=(C.Au0.isPrototypeOf(CM)?CM:null);if(((
!!IC&&IC.Down)&&(IC.AxR!==this))&&A.wa(this.GetExtent(),this.Ab.A79(IC.L0))){this.
ALd=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaP){var ApB=0;var Adk;this.Bp=
this.Bp|(1<<BO.IO);for(Adk=this.Bp&4095;Adk>0;Adk=Adk>>1)if(!!(Adk&1))ApB=ApB+1;
if(ApB===1)this.Bp=(this.Bp|16777216)|(4096<<BO.IO);}if(M7&&(this.Bp<16777216)){
var IH=this.Ip();var JL=null;if(!!IH){var A4P=(!!this.AI?this.AI:this.Ab);var A2f=(
!!IH.JM?IH.JM.C2:null);JL=IH.Yq(A.abh(Aah,BO.L0),BO.IO,BO.Oc,A2f,A4P,0x0);}if(!!
JL){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JL.Cj.G4(A._NewObject(C.Aee,0).
InitializeDown(O,BO.H4,BO.Oc,Cg,true,BO.L0));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JL.Cj.G4(A._NewObject(C.Aee,0).InitializeUp(O,BO.H4,BO.H4,0,BO.Oc,Cg,false,BO.
L0,BO.L0));}}if(M7)this.Bp=(this.Bp&~(1<<BO.IO))|33554432;if(ABw&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(M7&&BO.NQ)this.Bp=this.Bp|67108864;if(M7&&!(this.Bp&
4095))this.ALd=0x0;if(M7&&!(this.Bp&16777215))this.Bp=0;if(Vm&&(this.Bp>=67108864
)){var IH=this.Ip();if(!!IH)IH.AUI(null,null,this,this.ALd);}if((Vm&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Vm=false;M7=true;}if(!!BO&&!(this.Bp&(4096<<BO.
IO)))return this;if(!!D5&&!(this.Bp&(4096<<D5.IO)))return this;if(M7&&!(this.Bp&
16777216))return this;if(((AaP||AzR)||Vm)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(M7)this.Bp=this.Bp&3758100479;if(M7&&!(this.Bp&16777215))this.
Bp=0;if(!!BO){this.Down=AaP||Vm;this.YP=this.ARr(BO.H4);this.NZ=BO.NZ;this.H4=BO.
H4;this.DI=Cg;this.Jy=BO.Jy;this.Oc=BO.Oc;this.NQ=BO.NQ;this.IO=BO.IO;this.Bq=BO.
Bq;if(BO.Down&&!BO.Jy)AKs=false;}if(!!D5){this.Down=true;this.YP=this.ARr(D5.H4);
this.NZ=D5.NZ;this.H4=D5.H4;this.DI=D5.DI;this.Jy=D5.Jy;this.Oc=D5.Oc;this.IO=D5.
IO;this.NQ=false;this.Bq=D5.Bq;}var A2l=this.Down;if(!!D5)(B=this.ASy)?B[1].call(
B[0],this):null;if((!!BO&&this.Down)&&!this.Jy)(B=this.BG)?B[1].call(B[0],this):
null;if((!!BO&&this.Down)&&(this.Jy>0))(B=this.D2)?B[1].call(B[0],this):null;if((
this.Down&&this.YP)&&!AKs){this.A2r=true;(B=this.Av_)?B[1].call(B[0],this):null;
}if(this.A2r&&(((A2l&&!this.YP)&&AKs)||((!A2l&&this.YP)&&AKs))){this.A2r=false;(
B=this.AE0)?B[1].call(B[0],this):null;}if(!!BO&&!A2l)(B=this.Lr)?B[1].call(B[0],
this):null;if(!!this.Aff){var AdE=0x0;if(((((this.Aff&0x10)===0x10)&&!!BO)&&BO.Down
)&&(BO.Jy>=1000))AdE=0x10;if((((this.Aff&0x1)===0x1)&&!!D5)&&((D5.L0[1]-D5.Ag0[1
])<=-this.Axz))AdE=0x1;if((((this.Aff&0x2)===0x2)&&!!D5)&&((D5.L0[1]-D5.Ag0[1])>=
this.Axz))AdE=0x2;if((((this.Aff&0x4)===0x4)&&!!D5)&&((D5.L0[0]-D5.Ag0[0])<=-this.
Axz))AdE=0x4;if((((this.Aff&0x8)===0x8)&&!!D5)&&((D5.L0[0]-D5.Ag0[0])>=this.Axz)
)AdE=0x8;if(!!AdE){var IH=this.Ip();if(!!IH){this.ALd=AdE;IH.AUI(null,this,this,
AdE);}}}return this;},Yq:function(Dc,BH,Om,Aar,Ac5,Ac4){var B;if(!!Aar&&(Aar!==this
))return null;if((Om<1)||(Om>this.A8c))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BH)))return null;if(!!(Ac4&this.Aff))return null;
if(this.Bj2()){var Az=A.lb(Dc,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qk=A.aaI(Dc);var Fv=Cg;if(Qk[0]<Az[0])Fv=[Az[0]-Qk[0],Fv[1]];if(Qk[0]>=
Az[2])Fv=[(Az[2]-Qk[0])-1,Fv[1]];if(Qk[1]<Az[1])Fv=[Fv[0],Az[1]-Qk[1]];if(Qk[1]>=
Az[3])Fv=[Fv[0],(Az[3]-Qk[1])-1];return A._NewObject(C.Au1,0).Initialize(this,Fv
);}}else{var HD=A.abi(9,A.wf,null);var O;HD.Set(0,A.aaI(Dc));HD.Set(1,HD.Get(0));
HD.Set(2,HD.Get(0));HD.Set(3,HD.Get(0));HD.Set(4,HD.Get(0));HD.Set(1,[Dc[0],HD.Get(
1)[1]]);HD.Set(2,[HD.Get(2)[0],Dc[1]]);HD.Set(3,[Dc[2],HD.Get(3)[1]]);HD.Set(4,[
HD.Get(4)[0],Dc[3]]);HD.Set(5,Dc.slice(0,2));HD.Set(6,[Dc[2],Dc[1]]);HD.Set(7,[Dc[
0],Dc[3]]);HD.Set(8,Dc.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARr(HD.Get(O)))return A.
_NewObject(C.Au1,0).Initialize(this,A.abe(HD.Get(O),HD.Get(0)));}return null;},Bn9:
function(E){if(E<1)E=1;this.Axz=E;},AFG:function(E){if(E<1)E=1;this.A8c=E;},As:function(
E){if(E)this.Ct(0x100000,0x0);else this.Ct(0x0,0x100000);},_Init:function(aArg){
C.ZJ._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZJ._Mark.call(this,D);if((B=this.ASy)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AE0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av_
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D2)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Lr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.Ib={timer:null,AKQ:null,Aud:null,AGf:null,Zt:null,SR:null,Bp:0,AJt:0,Adn:5000
,ApV:0,AKr:A.wf,Ao9:0,AfQ:0,EY:0,Ami:0,Aur:0,Ao8:0,AfP:0,EX:0,Amh:0,Amf:0,NZ:A.wf
,A6u:A.wf,Gc:A.wf,Gr:A.wf,DI:A.wf,W1:A.wf,A68:0.5,A$O:true,AGW:true,ZT:false,XP:
false,XQ:false,AoS:false,AAt:0,Kr:function(C1,aClip,aOffset,Ck,aBlend){},G4:function(
CM){var B;var BO=(C.Aee.isPrototypeOf(CM)?CM:null);var D5=(C.AqH.isPrototypeOf(CM
)?CM:null);var IC=(C.Au0.isPrototypeOf(CM)?CM:null);var AaP;var Vm;var ABw;var M7;
var AzR;AaP=(!!BO&&BO.Down)&&!BO.Jy;Vm=(!!BO&&BO.Down)&&(BO.Jy>0);ABw=(!!BO&&BO.
Down)&&(BO.Jy>this.AAt);M7=!!BO&&!BO.Down;AzR=!!D5;if(AaP)this.AAt=((B=(BO.NQ?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaP){var ApB=0;var Adk;this.Bp=this.Bp|(1<<BO.
IO);for(Adk=this.Bp&4095;Adk>0;Adk=Adk>>1)if(!!(Adk&1))ApB=ApB+1;if(ApB===1)this.
Bp=(this.Bp|16777216)|(4096<<BO.IO);}if(M7&&(this.Bp<16777216)){var IH=this.Ip();
var JL=null;if(!!IH){var A4P=(!!this.AI?this.AI:this.Ab);var A2f=(!!IH.JM?IH.JM.
C2:null);JL=IH.Yq(A.abh(Aah,BO.L0),BO.IO,BO.Oc,A2f,A4P,0x0);}if(!!JL){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JL.Cj.G4(A._NewObject(C.Aee,0).InitializeDown(
O,BO.H4,BO.Oc,Cg,true,BO.L0));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JL.Cj.G4(A.
_NewObject(C.Aee,0).InitializeUp(O,BO.H4,BO.H4,0,BO.Oc,Cg,false,BO.L0,BO.L0));}}
if(M7)this.Bp=(this.Bp&~(1<<BO.IO))|33554432;if(ABw&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M7&&BO.NQ)this.Bp=this.Bp|67108864;if(M7&&!(this.Bp&16777215
))this.Bp=0;if(Vm&&(this.Bp>=67108864)){var IH=this.Ip();if(!!IH)IH.AUI(null,null
,this,0x0);}if((Vm&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vm=false;M7=true;
}if(!!BO&&!(this.Bp&(4096<<BO.IO)))return this;if(!!D5&&!(this.Bp&(4096<<D5.IO))
)return this;if(M7&&!(this.Bp&16777216))return this;if(((AaP||AzR)||Vm)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(M7)this.Bp=this.Bp&3758100479;
if(M7&&!(this.Bp&16777215))this.Bp=0;if(!!IC&&(IC.AxR===this))return null;if((!!
IC&&IC.Down)&&(this.AoS||!this.ZT))return null;if((!!IC&&IC.Down)&&!A.wa(this.M,
this.Ab.A79(IC.L0)))return null;if((!!IC&&!IC.Down)&&(!this.AoS||(this.AJt!==IC.
IO)))return null;if((!BO&&!D5)&&!IC)return null;if(!!BO){this.AoS=AaP||Vm;this.AJt=
BO.IO;this.NZ=BO.NZ;}if(!!D5)this.AJt=D5.IO;if(!!IC){this.AoS=IC.Down;this.AJt=IC.
IO;}if(!!IC&&IC.Down){this.A4Q();this.EX=(((IC.Bq-this.Amf)*0.001)*this.AfP)+this.
EX;this.EY=(((IC.Bq-this.Aur)*0.001)*this.AfQ)+this.EY;if(this.XP)this.EX=0;if(this.
XQ)this.EY=0;this.AfP=0;this.AfQ=0;this.XP=false;this.XQ=false;this.AKr=this.DI;
this.ApV=IC.Bq;return this;}if(AaP){this.A4Q();this.EX=(((BO.Bq-this.Amf)*0.001)
*this.AfP)+this.EX;this.EY=(((BO.Bq-this.Aur)*0.001)*this.AfQ)+this.EY;if(this.XP||
!this.ZT)this.EX=0;if(this.XQ||!this.ZT)this.EY=0;this.AfP=0;this.AfQ=0;this.XP=
false;this.XQ=false;if(!this.ZT){this.ZT=true;(B=this.SR)?B[1].call(B[0],this):null;(
B=this.AKQ)?B[1].call(B[0],this):null;}this.AKr=this.DI;this.ApV=BO.Bq;}if(!!D5){
var Hc=A.abe(D5.H4,D5.NZ);var CD=this.DI;if(this.AGW)CD=[this.AKr[0]+Hc[0],CD[1]
];CD=[CD[0],this.AKr[1]+Hc[1]];if(this.A$O){if(CD[0]<this.Gr[0])CD=[this.Gr[0]+(((
CD[0]-this.Gr[0])/2)|0),CD[1]];else if(CD[0]>this.Gc[0])CD=[this.Gc[0]+(((CD[0]-
this.Gc[0])/2)|0),CD[1]];if(CD[1]<this.Gr[1])CD=[CD[0],this.Gr[1]+(((CD[1]-this.
Gr[1])/2)|0)];else if(CD[1]>this.Gc[1])CD=[CD[0],this.Gc[1]+(((CD[1]-this.Gc[1])
/2)|0)];}else{if(CD[0]<this.Gr[0])CD=[this.Gr[0],CD[1]];else if(CD[0]>this.Gc[0]
)CD=[this.Gc[0],CD[1]];if(CD[1]<this.Gr[1])CD=[CD[0],this.Gr[1]];else if(CD[1]>this.
Gc[1])CD=[CD[0],this.Gc[1]];}if(!A.aaX(CD,this.DI)){this.A6u=A.abe(CD,this.DI);this.
DI=CD;(B=this.Aud)?B[1].call(B[0],this):null;(B=this.AGf)?B[1].call(B[0],this):null;
}}if((!!IC&&!IC.Down)&&((IC.Bq-this.ApV)>=200)){this.EX=0;this.EY=0;}if(Vm&&((BO.
Bq-this.ApV)>=200)){this.EX=0;this.EY=0;}if(!!D5&&(D5.Bq>this.ApV)){var Hc=D5.DI;
var Bem=1000/(D5.Bq-this.ApV);var AiJ=0;var AiK;if(this.AGW)AiJ=Hc[0]*Bem;AiK=Hc[
1]*Bem;if((AiJ*this.EX)<0)this.EX=0;if((AiK*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiJ)*0.5;this.EY=(this.EY+AiK)*0.5;this.ApV=D5.Bq;}if(!M7&&!IC)return this;if(!!
BO&&BO.NQ){this.EX=0;this.EY=0;}if((this.DI[0]<=this.Gr[0])||(this.DI[0]>=this.Gc[
0]))this.EX=0;else if(!this.EX){var EQ=this.DI[0];var Fg=this.Gr[0];var EI=this.
Gc[0];if(EQ<Fg)EI=this.Gr[0];else if(EQ>EI)Fg=this.Gc[0];else if(this.W1[0]<=1){
Fg=EQ;EI=EQ;}else{var Adr=(EI-EQ)%this.W1[0];EI=(EQ-this.W1[0])+Adr;Fg=EQ+Adr;if(
EI<this.Gr[0])EI=this.Gr[0];if(Fg>this.Gc[0])Fg=this.Gc[0];}if((Fg-EQ)<=(EQ-EI))
EQ=Fg;else EQ=EI;if(EQ!==this.DI[0]){var Jr=EQ-this.DI[0];if(Jr>0)this.EX=Math.sqrt((
Jr*2)*this.Adn)+20;if(Jr<0)this.EX=-Math.sqrt((-Jr*2)*this.Adn)-20;this.AfP=(400-(
this.EX*this.EX))/(2*Jr);this.Ao8=EQ;}}else{var BCK=this.EX*this.EX;var Jr=BCK/(
2*this.Adn);var EQ=this.DI[0];if(this.EX>0)EQ=EQ+(Jr|0);if(this.EX<0)EQ=EQ-(Jr|0
);if(EQ>this.Gc[0])EQ=this.Gc[0];else if(EQ<this.Gr[0])EQ=this.Gr[0];var Bg4=EQ;
var Fg=this.Gr[0];var EI=this.Gc[0];if(EQ<Fg)EI=this.Gr[0];else if(EQ>EI)Fg=this.
Gc[0];else if(this.W1[0]<=1){Fg=EQ;EI=EQ;}else{var Adr=(EI-EQ)%this.W1[0];EI=(EQ-
this.W1[0])+Adr;Fg=EQ+Adr;if(EI<this.Gr[0])EI=this.Gr[0];if(Fg>this.Gc[0])Fg=this.
Gc[0];}if(this.EX>0){if(EI<=this.DI[0])EQ=Fg;else if((EQ-EI)<(Fg-EQ))EQ=EI;else EQ=
Fg;}else if(Fg>=this.DI[0])EQ=EI;else if((EQ-EI)>(Fg-EQ))EQ=Fg;else EQ=EI;if(EQ!==
this.DI[0]){Jr=EQ-this.DI[0];if(EQ!==Bg4){var Ai5=EQ-Bg4;if(Ai5>0)this.EX=this.EX+
Math.sqrt((Ai5*2)*this.Adn);if(Ai5<0)this.EX=this.EX-Math.sqrt((-Ai5*2)*this.Adn
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfP=(400-(
this.EX*this.EX))/(2*Jr);this.Ao8=EQ;}else this.EX=0;}if((this.DI[1]<=this.Gr[1]
)||(this.DI[1]>=this.Gc[1]))this.EY=0;else if(!this.EY){var ER=this.DI[1];var Fg=
this.Gr[1];var EI=this.Gc[1];if(ER<Fg)EI=this.Gr[1];else if(ER>EI)Fg=this.Gc[1];
else if(this.W1[1]<=1){Fg=ER;EI=ER;}else{var Adr=(EI-ER)%this.W1[1];EI=(ER-this.
W1[1])+Adr;Fg=ER+Adr;if(EI<this.Gr[1])EI=this.Gr[1];if(Fg>this.Gc[1])Fg=this.Gc[
1];}if((Fg-ER)<=(ER-EI))ER=Fg;else ER=EI;if(ER!==this.DI[1]){var Jr=ER-this.DI[1
];if(Jr>0)this.EY=Math.sqrt((Jr*2)*this.Adn)+20;if(Jr<0)this.EY=-Math.sqrt((-Jr*
2)*this.Adn)-20;this.AfQ=(400-(this.EY*this.EY))/(2*Jr);this.Ao9=ER;}}else{var BCL=
this.EY*this.EY;var Jr=BCL/(2*this.Adn);var ER=this.DI[1];if(this.EY>0)ER=ER+(Jr|
0);if(this.EY<0)ER=ER-(Jr|0);if(ER>this.Gc[1])ER=this.Gc[1];else if(ER<this.Gr[1
])ER=this.Gr[1];var Bg5=ER;var Fg=this.Gr[1];var EI=this.Gc[1];if(ER<Fg)EI=this.
Gr[1];else if(ER>EI)Fg=this.Gc[1];else if(this.W1[1]<=1){Fg=ER;EI=ER;}else{var Adr=(
EI-ER)%this.W1[1];EI=(ER-this.W1[1])+Adr;Fg=ER+Adr;if(EI<this.Gr[1])EI=this.Gr[1
];if(Fg>this.Gc[1])Fg=this.Gc[1];}if(this.EY>0){if(EI<=this.DI[1])ER=Fg;else if((
ER-EI)<(Fg-ER))ER=EI;else ER=Fg;}else if(Fg>=this.DI[1])ER=EI;else if((ER-EI)>(Fg-
ER))ER=Fg;else ER=EI;if(ER!==this.DI[1]){Jr=ER-this.DI[1];if(ER!==Bg5){var Ai5=ER-
Bg5;if(Ai5>0)this.EY=this.EY+Math.sqrt((Ai5*2)*this.Adn);if(Ai5<0)this.EY=this.EY-
Math.sqrt((-Ai5*2)*this.Adn);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfQ=(400-(this.EY*this.EY))/(2*Jr);this.Ao9=ER;}else this.EY=
0;}if(!!BO)this.Amf=BO.Bq;if(!!IC)this.Amf=IC.Bq;this.Aur=this.Amf;this.Amh=this.
DI[0];this.Ami=this.DI[1];this.BCM();return this;},Yq:function(Dc,BH,Om,Aar,Ac5,
Ac4){var B;if(!!Aar&&(Aar!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BH)))return null;if(!this.AGW&&!!(Ac4&0xC))
return null;var Az=A.lb(Dc,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qk=
A.aaI(Dc);var Fv=Cg;if(Qk[0]<Az[0])Fv=[Az[0]-Qk[0],Fv[1]];if(Qk[0]>=Az[2])Fv=[(Az[
2]-Qk[0])-1,Fv[1]];if(Qk[1]<Az[1])Fv=[Fv[0],Az[1]-Qk[1]];if(Qk[1]>=Az[3])Fv=[Fv[
0],(Az[3]-Qk[1])-1];return A._NewObject(C.Au1,0).Initialize(this,Fv);}return null;
},A4Q:function(){if(!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;
}},BCM:function(){this.timer=A._GetAutoObject(A.acl.Aei);A.zV([this,this.Ml],this.
timer,0);},Ml:function(G){var B;if(!this.timer)return;var Auw=(this.timer.Bq-this.
Amf)*0.001;var Aux=(this.timer.Bq-this.Aur)*0.001;var BCX=Auw*Auw;var BCY=Aux*Aux;
var AiJ=(this.AfP*Auw)+this.EX;var AiK=(this.AfQ*Aux)+this.EY;var CD=[((((this.AfP
*0.5)*BCX)+(this.EX*Auw))+this.Amh)|0,((((this.AfQ*0.5)*BCY)+(this.EY*Aux))+this.
Ami)|0];if(this.XP&&(Auw>=0.5)){CD=[this.Ao8,CD[1]];this.EX=0;this.AfP=0;this.Amh=
CD[0];this.XP=false;}else if(this.XP){var LP=1-Math.pow(1-(Auw/0.5),5);CD=[(this.
Amh+((this.Ao8-this.Amh)*LP))|0,CD[1]];}if(this.XQ&&(Aux>=0.5)){CD=[CD[0],this.Ao9
];this.EY=0;this.AfQ=0;this.Ami=CD[1];this.XQ=false;}else if(this.XQ){var LP=1-Math.
pow(1-(Aux/0.5),5);CD=[CD[0],(this.Ami+((this.Ao9-this.Ami)*LP))|0];}if(((this.EX>
0)&&(AiJ<0))||((this.EX<0)&&(AiJ>0))){AiJ=0;CD=[this.DI[0],CD[1]];}if(((this.EY>
0)&&(AiK<0))||((this.EY<0)&&(AiK>0))){AiK=0;CD=[CD[0],this.DI[1]];}if(!this.XP&&(
CD[0]<this.Gr[0])){this.Amh=CD[0];this.Ao8=this.Gr[0];this.Amf=this.timer.Bq;this.
XP=true;}else if(!this.XP&&(CD[0]>this.Gc[0])){this.Amh=CD[0];this.Ao8=this.Gc[0
];this.Amf=this.timer.Bq;this.XP=true;}if(!this.XQ&&(CD[1]<this.Gr[1])){this.Ami=
CD[1];this.Ao9=this.Gr[1];this.Aur=this.timer.Bq;this.XQ=true;}else if(!this.XQ&&(
CD[1]>this.Gc[1])){this.Ami=CD[1];this.Ao9=this.Gc[1];this.Aur=this.timer.Bq;this.
XQ=true;}if(((!this.XP&&!!this.EX)&&(AiJ>-20))&&(AiJ<20)){CD=[this.Ao8,CD[1]];this.
EX=0;this.AfP=0;this.Amh=CD[0];}if(((!this.XQ&&!!this.EY)&&(AiK>-20))&&(AiK<20)){
CD=[CD[0],this.Ao9];this.EY=0;this.AfQ=0;this.Ami=CD[1];}if(!A.aaX(CD,this.DI)){
this.A6u=A.abe(CD,this.DI);this.DI=CD;(B=this.Aud)?B[1].call(B[0],this):null;(B=
this.AGf)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XP)&&!this.
XQ){this.A4Q();this.ZT=false;(B=this.Zt)?B[1].call(B[0],this):null;}},ATR:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.W1=E;},ATm:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A68)return;this.A68=E;if(E<(1e-007))E=1e-007;this.Adn=
E*10000;},_Init:function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Ib;this.
U=0x10011B;},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aud)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AGf
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zt)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BF={Ah:null,Lr:null,BG:null,D2:null,ApQ:
0,Bq:0,A$J:0,Filter:148,CO:0,Dz:0,Bw:true,Down:false,Acn:false,Mx:false,Init:function(
aArg){var B;var C2=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C2)throw new Error(AfC
);this.Ah=C2.AKv;C2.AKv=this;},G4:function(CM){var B;if(!!CM&&CM.Bki(this.Filter
)){this.Down=CM.Down;this.CO=CM.CO;this.Dz=CM.Dz;this.Bq=CM.Bq;this.Mx=false;if(
CM.Down){this.A$J=this.ApQ;this.Acn=this.ApQ>0;if(this.Acn)(B=this.D2)?B[1].call(
B[0],this):null;else(B=this.BG)?B[1].call(B[0],this):null;if(!this.Mx)this.ApQ=this.
ApQ+1;return!this.Mx;}if(!CM.Down){this.Acn=this.ApQ>1;this.A$J=this.ApQ-1;this.
ApQ=0;(B=this.Lr)?B[1].call(B[0],this):null;return!this.Mx;}}return false;},_Init:
function(aArg){this.__proto__=C.BF;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lr)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Au1={Cj:null,Au3:0,DI:A.wf,Initialize:function(Ag,aOffset){this.Cj=Ag;this.DI=
aOffset;this.Au3=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Au1;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cj)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A8j={Ah:null,C2:null,_Init:
function(aArg){this.__proto__=C.A8j;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Arm={NK:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Arm;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.NK)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AEl={AiR:A.wf,AiQ:A.wf,_Init:function(aArg
){C.Arm._Init.call(this,aArg);this.__proto__=C.AEl;},_className:"Core::LayoutLineContext"
};C.AEm={AA4:A.wf,AA3:A.wf,AiR:A.wf,AiQ:A.wf,_Init:function(aArg){C.Arm._Init.call(
this,aArg);this.__proto__=C.AEm;},_className:"Core::LayoutQuadContext"};C.AN4={C2:
null,Ah:null,RG:null,RP:null,Mj:null,ApM:null,_Init:function(aArg){this.__proto__=
C.AN4;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RG)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mj)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApM)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVp={FT:null,B$:null,B_:null,Beu:false,
Bzh:function(){if(!this.FT)return;var Pn=this.FT;this.FT.Pj=null;this.FT=null;A.
pe([this,this.A3Y],this);Pn.A8K(this);},BBc:function(G){if(!!this.FT)return;if(!
this.B_)return;this.FT=this.B_;this.B_=this.B_.Ah;if(!!this.B_)this.B_.AI=null;else
this.B$=null;this.FT.Ah=null;this.Beu=true;this.FT.SR(this);this.Beu=false;},BBy:
function(G){A.pe([this,this.BBc],this);},BBx:function(G){A.pe([this,this.BBy],this
);},A3Y:function(G){A.pe([this,this.BBx],this);},Bif:function(Jo){if(!Jo||!Jo.Pj
)return;if(Jo.Pj!==this)throw new Error(Aai);var Bhz=false;if(this.FT===Jo){this.
FT=null;Bhz=true;A.pe([this,this.A3Y],this);}else{if(!!Jo.Ah)Jo.Ah.AI=Jo.AI;else
this.B$=Jo.AI;if(!!Jo.AI)Jo.AI.Ah=Jo.Ah;else this.B_=Jo.Ah;Jo.AI=null;Jo.Ah=null;
}Jo.Pj=null;if(Bhz)Jo.A8J(this);},A$R:function(Jo,A1I){if(!Jo)return;if(!!Jo.Pj)
throw new Error(Xm);Jo.Pj=this;if(A1I){Jo.Ah=this.B_;if(!!this.B_)this.B_.AI=Jo;
else this.B$=Jo;this.B_=Jo;}else{Jo.AI=this.B$;if(!!this.B$)this.B$.Ah=Jo;else this.
B_=Jo;this.B$=Jo;}if(!this.FT)A.pe([this,this.A3Y],this);},_Init:function(aArg){
this.__proto__=C.AVp;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkV={Pj:null,AI:null,Ah:
null,A8K:function(Atz){},A8J:function(Atz){},SR:function(Atz){this.AmB();},Mw:function(
){if(!!this.Pj&&(this.Pj.FT===this))this.Pj.Bzh();},AmB:function(){if(!!this.Pj)
this.Pj.Bif(this);},ARn:function(){return!!this.Pj&&(this.Pj.FT===this);},_Init:
function(aArg){this.__proto__=C.AkV;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pj)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVn={Ar:null,Aut:
null,SR:function(Atz){this.Aut.Ar=this.Ar;A.we(this.Aut,0);A.pe([this,this.BA$],
this);},BA$:function(G){this.Aut.Ar=null;this.Aut=null;this.Ar=null;this.Mw();},
_Init:function(aArg){C.AkV._Init.call(this,aArg);this.__proto__=C.AVn;},_Mark:function(
D){var B;C.AkV._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aut)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxQ={_Init:function(){C.AVp._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhA={resource:null,Lf:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhA;this.Init(aArg);A.h7++;},_Done:function(){this.Lf();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={MK:null,timer:null,Bq:0,Period:1000,VN:0,Bw:false,Lf:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKY:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PW:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKY(this.VN,E);},WK:function(E){if(E<0)E=0;if(E===
this.VN)return;this.VN=E;if(this.Bw)this.AKY(E,this.Period);},As:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKY(this.VN,this.Period);else this.AKY(0,
0);this.Bq=this.Avt();},Avt:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bq=this.Avt();if(!this.
Period)this.As(false);(B=this.MK)?B[1].call(B[0],this):null;},AxO:function(G){this.
As(false);},StartTimer:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lf();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MK)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bq={AUS:0,Av3:0
,AjQ:0,GM:0,Hl:0,Year:0,Bd1:function(AfM,A0$){if(A0$)switch(AfM){case 1:return A.
aci.Bkr;case 2:return A.aci.Bjj;case 3:return A.aci.BkK;case 4:return A.aci.BhV;
case 5:return A.aci.BkO;case 6:return A.aci.Bku;case 7:return A.aci.Bkt;case 8:return A.
aci.BhX;case 9:return A.aci.Bpt;case 10:return A.aci.Bk8;case 11:return A.aci.Bk7;
case 12:return A.aci.BiD;default:return A.jV;}else switch(AfM){case 1:return A.aci.
AEf;case 2:return A.aci.AC0;case 3:return A.aci.AEr;case 4:return A.aci.AB1;case
5:return A.aci.AEt;case 6:return A.aci.AEh;case 7:return A.aci.AEg;case 8:return A.
aci.AB8;case 9:return A.aci.AGK;case 10:return A.aci.AEG;case 11:return A.aci.AEE;
case 12:return A.aci.ACL;default:return A.jV;}},BdZ:function(Bcv,A0$){if(A0$)switch(
Bcv){case 1:return A.aci.BkT;case 2:return A.aci.BqK;case 3:return A.aci.Brr;case
4:return A.aci.Bqx;case 5:return A.aci.Bjw;case 6:return A.aci.Bpl;case 0:return A.
aci.Bqk;default:return A.jV;}else switch(Bcv){case 1:return A.aci.BkS;case 2:return A.
aci.BqJ;case 3:return A.aci.Brq;case 4:return A.aci.Bqw;case 5:return A.aci.Bjv;
case 6:return A.aci.Bpk;case 0:return A.aci.Bqj;default:return A.jV;}},BdY:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JZ:function(){var d=this.GM;var K7=this.Hl;var Di=this.Year-((
K7<=2)?1:0);var AzS=(((Di>=0)?Di:Di-399)/400)|0;var Amp=Di-(AzS*400);var Vk=(((((
153*(K7+((K7>2)?-3:9)))+2)/5)|0)+d)-1;var Ao5=(((Amp*365)+((Amp/4)|0))-((Amp/100
)|0))+Vk;var Qm=((AzS*146097)+Ao5)-719468;return(((Qm*86400)+(this.AjQ*3600))+(this.
Av3*60))+this.AUS;},AF1:function(E){var B;E+=62162035200;if(E<0)E=0;var Vy=Math.
trunc(E/86400)|0;var AzS=(((Vy>=0)?Vy:Vy-146096)/146097)|0;var Ao5=Vy-(AzS*146097
);var Amp=((((Ao5-((Ao5/1460)|0))+((Ao5/36524)|0))-((Ao5/146096)|0))/365)|0;var Di=
Amp+(AzS*400);var Vk=Ao5-(((365*Amp)+((Amp/4)|0))-((Amp/100)|0));var A3k=(((5*Vk
)+2)/153)|0;var d=(Vk-((((153*A3k)+2)/5)|0))+1;var K7=A3k+((A3k<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Di+((
K7<=2)?1:0);this.Ux(K7);this.Lt(d);this.AnB(BL+((BL<0)?24:0));this.AnE(O+((O<0)?
60:0));this.AnH(s+((s<0)?60:0));},Zu:function(){if(this.Hl===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hl===4)||(this.Hl===6))||(this.Hl===9))||(this.Hl===11))return 30;else return 31;
},Bmi:function(){var B;var Vk=this.Ab5()-1;var AtQ=(6+this.Awe())%7;var Ao7=((371+
AtQ)-Vk)%7;if(this.Hl===12){var d=this.GM;if((d===31)&&(AtQ<3))return 0;if((d===
30)&&(AtQ<2))return 0;if((d===29)&&(AtQ<1))return 0;}if(Ao7<=3)Vk+=Ao7;else Vk-=(
7-Ao7);if(Vk<0){var d=this.GM;var K7=this.Hl;this.Year--;this.Lt(31);this.Ux(12);
Vk=this.Ab5()-1;AtQ=(6+this.Awe())%7;Ao7=((371+AtQ)-Vk)%7;if(Ao7<=3)Vk+=Ao7;else
Vk-=Ao7;this.Year++;this.Lt(d);this.Ux(K7);}return(Vk/7)|0;},Ab5:function(){var B;
var d=this.GM;var K7=this.Hl;var Di=this.Year;var Af9=((!!!(Di%4)&&(!!(Di%100)||
!!!(Di%400)))?1:0);switch(K7){case 2:d+=31;break;case 3:d+=(59+Af9);break;case 4:
d+=(90+Af9);break;case 5:d+=(120+Af9);break;case 6:d+=(151+Af9);break;case 7:d+=(
181+Af9);break;case 8:d+=(212+Af9);break;case 9:d+=(243+Af9);break;case 10:d+=(273+
Af9);break;case 11:d+=(304+Af9);break;case 12:d+=(334+Af9);break;default:;}return d;
},Awe:function(){var B;var d=this.GM;var K7=this.Hl+((this.Hl>2)?-2:10);var Di=this.
Year-((this.Hl<=2)?1:0);var B4=(Di/100)|0;Di%=100;d+=((((((((26*K7)-2)/10)|0)+Di
)+((Di/4)|0))+((B4/4)|0))-(2*B4));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnH:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUS=E;},AnE:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av3=E;},AnB:function(E){if(E<0)E=0;if(E>23)E=23;this.AjQ=E;},Lt:function(
E){if(E<1)E=1;if(E>31)E=31;this.GM=E;},Ux:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hl=E;},Format:function(Iy){var result=A.jV;var inx=0;while(!!(Iy.charCodeAt(inx)||
0))if((Iy.charCodeAt(inx)||0)===0x25){var AaI=1;inx=inx+1;if((Iy.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaI=0;}switch(Iy.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GM,2*AaI,10);break;case 0x48:result=result+A.abl(this.AjQ,2*AaI,10);break;
case 0x49:if(!(this.AjQ%12))result=result+Aaj;else result=result+A.abl(this.AjQ%
12,2*AaI,10);break;case 0x6D:result=result+A.abl(this.Hl,2*AaI,10);break;case 0x4D:
result=result+A.abl(this.Av3,2*AaI,10);break;case 0x70:if(this.AjQ<12)result=result+
A.aci.BhF;else result=result+A.aci.BoI;break;case 0x53:result=result+A.abl(this.
AUS,2*AaI,10);break;case 0x77:result=result+A.abl(this.Awe(),AaI,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaI,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaI,10);break;case 0x25:result=result+Aak;break;case 0x6A:result=result+
A.abl(this.Ab5(),3*AaI,10);break;case 0x57:result=result+A.abl(this.Bmi(),2*AaI,
10);break;case 0x61:result=result+this.BdZ(this.Awe(),true);break;case 0x41:result=
result+this.BdZ(this.Awe(),false);break;case 0x62:result=result+this.Bd1(this.Hl
,true);break;case 0x42:result=result+this.Bd1(this.Hl,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iy.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac6,AfM,BxA,BxQ,Bx7,Byn){this.Year=Ac6;this.
Ux(AfM);this.Lt(BxA);this.AnB(BxQ);this.AnE(Bx7);this.AnH(Byn);return this;},Initialize:
function(Ah7){this.AF1(Ah7);return this;},BiI:function(Ah7){if(!Ah7)return A._NewObject(
C.An4,0).Initialize(this.JZ());return A._NewObject(C.An4,0).Initialize(this.JZ()-
Ah7.JZ());},BpX:function(Azb){if(!Azb)return this;return A._NewObject(C.Bq,0).Initialize(
this.JZ()-Azb.JZ());},J:function(Azb){if(!Azb)return this;return A._NewObject(C.
Bq,0).Initialize(this.JZ()+Azb.JZ());},_Init:function(aArg){this.__proto__=C.Bq;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An4={AGH:0,AEw:0,ADK:0,Kp:0,JZ:function(
){return(((this.Kp*86400)+(this.ADK*3600))+(this.AEw*60))+this.AGH;},AF1:function(
E){var ALa=1;this.Kp=Math.trunc(E/86400)|0;if(E<0){E=-E;ALa=-1;}this.ADK=ALa*(Math.
trunc(E/3600)%24|0);this.AEw=ALa*(Math.trunc(E/60)%60|0);this.AGH=ALa*(E%60|0);}
,Initialize2:function(BxB,BxR,Bx8,Byq){this.Kp=BxB;this.ADK=BxR;this.AEw=Bx8;this.
AGH=Byq;return this;},Initialize:function(Ah7){this.AF1(Ah7);return this;},_Init:
function(aArg){this.__proto__=C.An4;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.Baf={Ar:null,Pj:null,Trigger:function(Aoz,A1I){var Pn=A._NewObject(C.AVn,0);
Pn.Aut=this;Pn.Ar=Aoz;this.Pj.A$R(Pn,A1I);},_Init:function(aArg){this.__proto__=
C.Baf;this.Pj=A._GetAutoObject(C.AxQ);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.Bag={JT:null,Event:null,ASz:null,At8:function(G){var B;if(
!this.Event)return;this.JT=this.Event.Ar;(B=this.ASz)?B[1].call(B[0],this):null;
this.JT=null;},BmV:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.At8],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.At8],this.
Event,0);},_Init:function(aArg){this.__proto__=C.Bag;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGY={Du:0x1,BDG:0x2,BEP:0x4,BGN:0x8,Bw:0x10,Ia:0x20
,BEQ:0x40,BFr:0x80,BEL:0x100,BE7:0x200,BEz:0x400,BF6:0x800,Bl:0x1000,BGV:0x2000,
BFO:0x4000,BFP:0x8000,Abp:0x10000,BFN:0x20000,BGh:0x40000,BEq:0x80000,BFX:0x100000
,BEk:0x200000};C.PP={BF8:0x1,BF9:0x2,BDC:0x4,BDD:0x8,BDE:0x10,BDB:0x20};C.AgY={None:
0,BGJ:1,BDZ:2,BFa:3,BGa:4,BGK:5,BGL:6,BD0:7,BD1:8,BFc:9,BFb:10,BGc:11,BGb:12};C.
Au5={None:0,BGH:1,Left:2,BDX:3,ZY:4,A50:5,BGI:6,Right:7,BDY:8};C.KeyCode={NoKey:
0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:
11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:
21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:
32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:
40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48
,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,
SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:
67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:
76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,
User1:86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94
,User10:95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:
102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,
KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119
,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128
,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136
,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142
,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:146,CursorKeys:147
,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154
,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:
161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167
,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:
174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180
,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:
187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:
194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:
201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:
207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:
213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:
218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:
223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:
228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:
233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:
238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:
243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:
248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:
253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:
258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:
263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:
268,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:
272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BF_={BG4:0x1,BG1:0x2,BG2:0x4,BG3:
0x8,BFe:0x10,BES:0x20};
C._Init=function(){C.Akd.__proto__=C.Cj;C.ZJ.__proto__=C.Cj;C.Eu.__proto__=C.Cj;C.
P.__proto__=C.Eu;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARG.__proto__=
C.Event;C.Au0.__proto__=C.Event;C.Aee.__proto__=C.Event;C.AqH.__proto__=C.Event;
C.Y.__proto__=C.Eu;C.CL.__proto__=C.P;C.DC.__proto__=C.P;C.Bn.__proto__=C.ZJ;C.Ib.
__proto__=C.Eu;C.AEl.__proto__=C.Arm;C.AEm.__proto__=C.Arm;C.AVn.__proto__=C.AkV;
};C._ReInit=function(){var B;if((B=C.AxQ._this))B._ReInit(),C.AxQ._ReInit.call(B
);};C.DJ=function(D){var B;if((B=C.AxQ._this)&&(B._cycle!=D))B._Done(C.AxQ._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */