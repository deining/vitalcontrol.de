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
var Cf=[0,0];var BD=[0,0,0,0];var E6="The view does not belong to this group";var
Hq=[1000,740];var I0="The dialog component is already presented";var Iv="The dialog component is actually not presented";
var O9="No fader to perform the fade-in/out operation";var P_="Trying to use the same fader twice";
var P$="Trying to fade-in/out a group which belongs to another owner";var CR="No view to restack";
var Fc="View is not in this group";var L8="Sibling view does not belong to the group";
var Qa="No view to remove";var J9="No view to add";var Oh="View already in a group";
var Qb="Recursive invalidate during active update cycle.";var MR=[-8,-8,9,9];var
Te="No group to end the modal state.";var UW="The group is not modal.";var Z8="No group to obtain the modal state.";
var W$="The group serves already as the \'virtual keyboard\'.";var Iw="The group is already modal.";
var UX="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z9="The method SwitchToDialog() is not available in Core::VerticalList.";
var UY="The method DismissDialog() is not available in Core::VerticalList.";var Z_=
"The method PresentDialog() is not available in Core::VerticalList.";var Xa="The method FadeGroup() is not available in Core::VerticalList.";
var Z$="The method RestackBehind() is not available in Core::VerticalList.";var Aaa=
"The method RestackTop() is not available in Core::VerticalList.";var UZ="The method Restack() is not available in Core::VerticalList.";
var Xb="The method Remove() is not available in Core::VerticalList.";var O_="The method AddBehind() is not available in Core::VerticalList.";
var Aab="The method Add() is not available in Core::VerticalList.";var Oi="The Slide Touch Handler:";
var Rn="is already connected with a view.";var Xc="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Xd=[0,0,170,120];var Tf="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Xe="The method DismissDialog() is not available in Core::HorizontalList.";var
Aac="The method PresentDialog() is not available in Core::HorizontalList.";var Xf=
"The method FadeGroup() is not available in Core::HorizontalList.";var Xg="The method RestackBehind() is not available in Core::HorizontalList.";
var Xh="The method RestackTop() is not available in Core::HorizontalList.";var Xi=
"The method Restack() is not available in Core::HorizontalList.";var Xj="The method Remove() is not available in Core::HorizontalList.";
var Aad="The method AddBehind() is not available in Core::HorizontalList.";var Tg=
"The method Add() is not available in Core::HorizontalList.";var Aae=[0,0,1,1];var
AfB="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aaf="Trying to cancel a task not belonging to this queue!";var Xk="Trying to enqueue a task twice!";
var Aag="12";var Xl="%";
C.Ci={Ah:null,AI:null,Ab:null,Ev:null,U:0x103,J7:0,PQ:0x14,AtV:function(BJ,Ah5){}
,Ar6:function(E){if(this.J7===E)return;this.J7=E;if(!!this.Ab){var Ai3=this.Ah;var
Hb=0;while(!!Ai3&&(E>Ai3.J7)){Ai3=Ai3.Ah;Hb=Hb+1;}Ai3=this.AI;while(!!Ai3&&(E<Ai3.
J7)){Ai3=Ai3.AI;Hb=Hb-1;}if(!!Hb)this.Ab.J5(this,Hb);}},A1:function(E){var B;var
Hb=E^this.PQ;if(!Hb)return;this.PQ=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JP],this);this.Ab.Bi([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.NK.U=this.Ev.
NK.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},Ip:function(
){var B1=this.Ab;while(!!B1){var IH=(C.Root.isPrototypeOf(B1)?B1:null);if(!!IH)return IH;
B1=B1.Ab;}return null;},Kr:function(C0,aClip,aOffset,Cj,aBlend){},GetClipping:function(
){return this.GetExtent();},G3:function(CM){return null;},Yn:function(Db,BH,Om,Aan
,Ac3,Ac2){return null;},AuG:function(Db){return Db;},AuP:function(BJ,MV){return Cf;
},Anh:function(aOffset,Atr){},GetExtent:function(){return BD;},Cs:function(Ru,U9
){var B;if(((this.U&0x200)===0x200))Ru=Ru&~0x400;var A3f=(this.U&~U9)|Ru;var XB=
A3f^this.U;this.U=A3f;if(!!this.Ab&&!!(XB&0x14)){var BdD=((this.U&0x14)===0x14);
if(BdD&&!this.Ab.AV)this.Ab.Ba(this);if(!BdD&&(this.Ab.AV===this))this.Ab.Ba(this.
Ab.AC1(this,0x14));}if(!!this.Ab&&!!(XB&0x403))this.Ab.Bi(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A3f&0x400)===0x400))&&((XB&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}if(!!this.Ab&&((XB&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JP],this);}if(((((XB&0x100000)===0x100000)&&((U9&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cs(0x0,0x10);if(((((
XB&0x100000)===0x100000)&&((Ru&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cs(0x10,0x0);if(((((XB&0x200000)===0x200000)&&((U9&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cs(
0x10,0x0);if((((((XB&0x200000)===0x200000)&&((Ru&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hc.C1!==this)))
)this.Cs(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ci;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akd={ED:A.wf,Et:A.wf
,AtV:function(BJ,Ah5){var Ar=A._NewObject(C.AEj,0);this.Ev=null;Ar.extent=this.getExtent(
);Ar.Bd=BJ;Ar.NK=Ah5;Ar.AiQ=this.Et;Ar.AiR=this.ED;this.Ev=Ar;},AuP:function(BJ,
MV){var B;var EW=this.PQ;var Ar=(C.AEj.isPrototypeOf(B=this.Ev)?B:null);var x1=Ar.
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
)){this.Et=[x1,y1];this.ED=[x2,y2];}else{this.DN([x1,y1]);this.DD([x2,y2]);this.
Ev=Ar;}return[BZ,BL];},Anh:function(aOffset,Atr){if(Atr){this.Et=A.abf(this.Et,aOffset
);this.ED=A.abf(this.ED,aOffset);}else{this.DN(A.abf(this.Et,aOffset));this.DD(A.
abf(this.ED,aOffset));}},GetExtent:function(){if(!!this.Ev&&this.Ev.isEmpty)return BD;
return this.getExtent();},getExtent:function(){var x1=this.Et[0];var y1=this.Et[
1];var x2=this.ED[0];var y2=this.ED[1];var BZ=x2-x1;var BL=y2-y1;var tmp;if(BZ<0
)BZ=-BZ;if(BL<0)BL=-BL;if(BZ>=BL){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BL>=BZ){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DD:function(E){var B;if(A.aaX(E,this.
ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},DN:function(
E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.GetClipping());this.Ev=null;this.Et=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JP],this);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.
Akd;},_className:"Core::LineView"};C.ZF={KC:A.wf,MM:A.wf,ED:A.wf,Et:A.wf,AtV:function(
BJ,Ah5){var Ar=A._NewObject(C.AEk,0);this.Ev=null;Ar.extent=this.GetExtent();Ar.
Bd=BJ;Ar.NK=Ah5;Ar.AiQ=this.Et;Ar.AiR=this.ED;Ar.AA1=this.MM;Ar.AA2=this.KC;this.
Ev=Ar;},AuP:function(BJ,MV){var B;var EW=this.PQ;var Ar=(C.AEk.isPrototypeOf(B=this.
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
y2-y1)-1;var Aiv=Ar.extent[0];var Aix=Ar.extent[1];var Af2=(Ar.extent[2]-Aiv)-1;
var Af1=(Ar.extent[3]-Aix)-1;if(!Af2)Af2=1;if(!Af1)Af1=1;if(((this.U&0x100)===0x100
)){this.Et=[x1+((((Ar.AiQ[0]-Aiv)*BZ)/Af2)|0),y1+((((Ar.AiQ[1]-Aix)*BL)/Af1)|0)];
this.ED=[x1+((((Ar.AiR[0]-Aiv)*BZ)/Af2)|0),y1+((((Ar.AiR[1]-Aix)*BL)/Af1)|0)];this.
MM=[x1+((((Ar.AA1[0]-Aiv)*BZ)/Af2)|0),y1+((((Ar.AA1[1]-Aix)*BL)/Af1)|0)];this.KC=[
x1+((((Ar.AA2[0]-Aiv)*BZ)/Af2)|0),y1+((((Ar.AA2[1]-Aix)*BL)/Af1)|0)];}else{this.
DN([x1+((((Ar.AiQ[0]-Aiv)*BZ)/Af2)|0),y1+((((Ar.AiQ[1]-Aix)*BL)/Af1)|0)]);this.DD([
x1+((((Ar.AiR[0]-Aiv)*BZ)/Af2)|0),y1+((((Ar.AiR[1]-Aix)*BL)/Af1)|0)]);this.Kz([x1+((((
Ar.AA1[0]-Aiv)*BZ)/Af2)|0),y1+((((Ar.AA1[1]-Aix)*BL)/Af1)|0)]);this.J1([x1+((((Ar.
AA2[0]-Aiv)*BZ)/Af2)|0),y1+((((Ar.AA2[1]-Aix)*BL)/Af1)|0)]);this.Ev=Ar;}return[BZ+
1,BL+1];},Anh:function(aOffset,Atr){if(Atr){this.Et=A.abf(this.Et,aOffset);this.
ED=A.abf(this.ED,aOffset);this.MM=A.abf(this.MM,aOffset);this.KC=A.abf(this.KC,aOffset
);}else{this.DN(A.abf(this.Et,aOffset));this.DD(A.abf(this.ED,aOffset));this.Kz(
A.abf(this.MM,aOffset));this.J1(A.abf(this.KC,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BD;var x1=this.Et[0];var y1=this.Et[1];var x2=
this.MM[0];var y2=this.MM[1];if((((this.KC[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.KC[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.MM[0]<x1)x1=
this.MM[0];if(this.KC[0]<x1)x1=this.KC[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
MM[1]<y1)y1=this.MM[1];if(this.KC[1]<y1)y1=this.KC[1];if(this.Et[0]>x2)x2=this.Et[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.KC[0]>x2)x2=this.KC[0];if(this.Et[1]>y2
)y2=this.Et[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.KC[1]>y2)y2=this.KC[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},J1:function(E){var B;if(A.aaX(E,this.KC))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ev=null;this.KC=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},Kz:function(E){var B;if(A.aaX(E,
this.MM))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Ev=null;this.MM=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},DD:function(
E){var B;if(A.aaX(E,this.ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.GetClipping());this.Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JP],this);}},DN:function(E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ev=null;this.Et=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},ARn:function(K4){var HC=A.abi(4,
A.wf,null);var O=0;var Ij=3;var A2K=false;var A2L=false;HC.Set(0,this.Et);HC.Set(
1,this.ED);HC.Set(2,this.MM);HC.Set(3,this.KC);while(O<4){var Bhn=HC.Get(O)[0];var
ALy=HC.Get(O)[1];var BC8=HC.Get(Ij)[0];var A41=HC.Get(Ij)[1];if(((ALy>K4[1])!==(
A41>K4[1]))||((ALy<K4[1])!==(A41<K4[1]))){var Ep=((((BC8-Bhn)*(K4[1]-ALy))/(A41-
ALy))|0)+Bhn;if(K4[0]>Ep)A2K=!A2K;if(K4[0]<Ep)A2L=!A2L;}Ij=O;O=O+1;}return A2K||
A2L;},BjS:function(){return((((this.Et[0]===this.KC[0])&&(this.ED[0]===this.MM[0
]))&&(this.Et[1]===this.ED[1]))&&(this.MM[1]===this.KC[1]))||((((this.Et[0]===this.
ED[0])&&(this.MM[0]===this.KC[0]))&&(this.Et[1]===this.KC[1]))&&(this.ED[1]===this.
MM[1]));},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.ZF;},
_className:"Core::QuadView"};C.Eu={M:A.wg,AtV:function(BJ,Ah5){var Ar=A._NewObject(
C.Arl,0);Ar.extent=this.M;Ar.Bd=BJ;Ar.NK=Ah5;this.Ev=Ar;},AuP:function(BJ,MV){var
B;var EW=this.PQ;var Ar=this.Ev;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
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
this.Ev=Ar;}return[x2-x1,y2-y1];},Anh:function(aOffset,Atr){if(Atr)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.GetClipping());this.Ev=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JP],this);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.
__proto__=C.Eu;},_className:"Core::RectView"};C.P={B9:null,B_:null,AKs:null,FF:null
,Hc:null,XC:null,ApM:null,AV:null,G8:255,AzS:0,AzV:0,AzU:0,AzT:0,Init:function(aArg
){this.Am();},Kr:function(C0,aClip,aOffset,Cj,aBlend){var B;Cj=((Cj+1)*this.G8)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FF||(C0.C1===this))this.Bds(C0,aClip
,A.abf(aOffset,this.M.slice(0,2)),Cj,aBlend);else{var B4=255|(255<<8)|(255<<16)|((
Cj&0xFF)<<24);this.FF.Update();C0.A6a(aClip,this.FF,0,A.abh(this.M,aOffset),Cf,B4
,B4,B4,B4,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FF)return Az;
Az=[].concat(Az[0]-this.AzT,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzV);Az=A.abN(
Az,Az[2]+this.AzU);Az=[].concat(Az.slice(0,3),Az[3]+this.AzS);if(((this.U&0x80000
)===0x80000)){var ApZ=BD;var X;for(X=this.B9;!!X;X=X.Ah)if(((X.U&0x1)===0x1))ApZ=
A.wC(ApZ,X.GetClipping());Az=A.wC(Az,A.abh(ApZ,this.M.slice(0,2)));}return Az;},
Yn:function(Db,BH,Om,Aan,Ac3,Ac2){var B;var X=this.B_;var Apg=null;var AE=BD;var
Kg=null;var A26=!!this.XC&&(!!this.XC.FS||!!this.XC.B9);if(((B=A.lb(Db,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Db=A.abg(Db,this.M.slice(0,2));if(!!Ac3){X=Ac3;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kg){Kg=X.
AI;while(!!Kg&&!((Kg.U&0x200)===0x200))Kg=Kg.AI;if(!!Kg)AE=A.lb(Db,Kg.GetExtent(
));else AE=BD;}if(Kg===X){Kg=null;AE=BD;}if((!!Aan&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hc.C1===X)&&!A26))
)){var extent=X.GetExtent();var AJX=Aan;var Ao2=null;if(AJX===X)AJX=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao2=X.Yn(AE
,BH,Om,AJX,Ac3,Ac2);}else if(!(((B=A.lb(extent,Db))[0]>=B[2])||(B[1]>=B[3]))||(Aan===
X))Ao2=X.Yn(Db,BH,Om,AJX,Ac3,Ac2);X=X.AI;if(!!Ao2){if(!Apg||((Ao2.AuZ<Apg.AuZ)&&(
Ao2.AuZ>=0)))Apg=Ao2;if(!Ao2.AuZ)X=null;}}else X=X.AI;Ac3=null;}return Apg;},AuG:
function(Db){var B;var F;var X=this.B9;var LF=BD;var AAV=true;var result=(Db=F=A.
abg(Db,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At7=(C.Y.isPrototypeOf(
X)?X:null);LF=A.lb(Db,At7.M);AAV=((At7.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAV){var AE=A.lb(X.GetClipping(),LF);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuG(AE));}}else{var AE=A.lb(X.GetClipping(),
Db);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuG(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cs:function(Ru,U9){var B;
var Ts=this.U;if(((!!this.Ab&&!!!this.FF)&&((this.U&0x80001)===0x80001))&&((U9&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());C.Eu.Cs.call(this,Ru,U9);if((((!!this.
Ab&&!!!this.FF)&&((this.U&0x1)===0x1))&&((Ru&0x80000)===0x80000))&&!((Ts&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());var XB=this.U^Ts;if(!!this.AV&&((XB&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cs(0x40,0x0);else this.AV.Cs(0x0
,0x40);}if(!!this.Hc&&((XB&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hc.C1.
U&0x14)===0x14))this.Hc.C1.Cs(0x40,0x0);else this.Hc.C1.Cs(0x0,0x40);}if(((XB&0x10
)===0x10)){var X;for(X=this.B9;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hc.C1===X)))X.Cs(Ru&0x10,U9&
0x10);}if(!!XB){this.U=this.U|0x8000;A.pe([this,this.ABA],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlY=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKA=[
E[2]-E[0],E[3]-E[1]];var ApV=!A.aaX(AlY,AKA);if(ApV&&!!this.FF){this.FF.ArQ(AKA);
A.we(this,0);A.we(this.FF,0);}C.Eu.H.call(this,E);if((ApV&&(AlY[0]>0))&&(AlY[1]>
0)){var Bd=[].concat(Cf,AlY);var X=this.B9;while(!!X){if((!X.Ev&&(X.PQ!==0x14))&&
!((X.U&0x400)===0x400))X.AtV(Bd,null);X=X.Ah;}}if(ApV){this.U=this.U|0x5000;A.pe([
this,this.ABA],this);}},A4b:function(CM){var Beo=(C.KeyEvent.isPrototypeOf(CM)?CM:
null);var D5=this.AKs;if(!Beo)return null;while(!!D5&&(!D5.Bw||!D5.G3(Beo)))D5=D5.
Ah;return D5;},BCS:function(G){if(!!this.FF){this.FF.C1=this;var AE=A.abg(this.AuG(
A.abh(this.FF.QP,this.M.slice(0,2))),this.M.slice(0,2));this.FF.Avh(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bds(this.FF,AE,Cf,255,true);this.FF.
C1=null;}},Bds:function(C0,aClip,aOffset,Cj,aBlend){var B;var X=this.B9;var LF=BD;
var AAV=true;this.BiQ(C0,aClip,aOffset,Cj,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At7=(C.Y.isPrototypeOf(X)?X:null);AAV=((At7.U&0x1)===0x1);LF=aClip;if(!((
At7.U&0x80000)===0x80000))LF=A.lb(LF,A.abh(At7.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAV){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LF
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kr(C0,AE,aOffset,Cj,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kr(C0,AE,aOffset,Cj,aBlend);}}X=X.Ah;}this.BiT(C0,aClip,aOffset,Cj,aBlend);},Bgl:
function(){var B;var A2D=((this.U&0x1000)===0x1000);var AiC=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aav=false;var Adl=BD;var K6=BD;var Aaw=Cf;var AtR=0;var AtS=0;
var AtQ=0;var Qq=0;var X=this.B_;var Kg=null;var AlQ=null;while(!!X){if(((X.U&0x800
)===0x800)){Aav=true;X.U=X.U&~0x800;}if(Aav&&((X.U&0x200)===0x200)){Aav=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgX)X.U=X.U|0x1000;}X=X.AI;}Aav=false;X=this.B9;
if(A2D){this.U=this.U&~0x1000;A2D=!((AiC[0]>=AiC[2])||(AiC[1]>=AiC[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlQ&&(AtQ!==Qq)){var AdJ=X;var AKX=0;var ABf=Adl[2]-
Adl[0];var Azt=Adl[3]-Adl[1];var AJN=0;var Ap7=Cf;do if(((AdJ.U&0x200)===0x200))
AdJ=null;else if(((AdJ.U&0x401)===0x401)){Ap7=[(B=AdJ.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qq===3)||(Qq===4))ABf=ABf-Ap7[0];if((Qq===1)||(Qq===2))Azt=Azt-Ap7[1];
if(!AlQ||((ABf>=0)&&(Azt>=0))){AlQ=AdJ;AdJ=AdJ.Ah;if((Qq===3)||(Qq===4)){ABf=ABf-
AtR;if(Ap7[1]>AKX)AKX=Ap7[1];}if((Qq===1)||(Qq===2)){Azt=Azt-AtS;if(Ap7[0]>AJN)AJN=
Ap7[0];}}else AdJ=null;}else AdJ=AdJ.Ah;while(!!AdJ);if(!AlQ)AlQ=Kg;K6=Adl;switch(
AtQ){case 9:case 11:K6=[].concat(K6.slice(0,3),K6[1]+AKX);break;case 10:case 12:
K6=A.abP(K6,K6[3]-AKX);break;case 5:case 7:K6=A.abN(K6,K6[0]+AJN);break;case 6:case
8:K6=[].concat(K6[2]-AJN,K6.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ev&&(X.Ev.NK!==Kg))X.Ev=null;if((!X.Ev&&Aav)&&((X.PQ!==0x14)||!!Qq))X.
AtV(K6,Kg);}if(!!X.Ev){if(A2D&&!((X.U&0x400)===0x400))X.AuP(AiC,0);if(Aav&&((X.U&
0x400)===0x400)){var C5=X.AuP(A.abh(K6,Aaw),Qq);if(((X.U&0x1)===0x1)){var Bq=Cf;
switch(Qq){case 3:Bq=[C5[0]+AtR,Bq[1]];break;case 4:Bq=[-C5[0]-AtR,Bq[1]];break;
case 1:Bq=[Bq[0],C5[1]+AtS];break;case 2:Bq=[Bq[0],-C5[1]-AtS];break;default:;}Aaw=
A.abf(Aaw,Bq);}}}if(((X.U&0x200)===0x200)){if(Aav)A.pe(Kg.Em,Kg);Aav=((X.U&0x1000
)===0x1000);Kg=(C.Y.isPrototypeOf(X)?X:null);if(Aav){X.U=X.U&~0x1000;AtQ=Kg.AgX;
Qq=AtQ;Adl=A.abh(Kg.M,Kg.Br);K6=Adl;Aaw=Cf;AtR=Kg.Space+Kg.AU$;AtS=Kg.Space;Aav=
!((Adl[0]>=Adl[2])||(Adl[1]>=Adl[3]));AlQ=null;switch(AtQ){case 9:case 10:Qq=3;break;
case 11:case 12:Qq=4;break;case 5:case 6:Qq=1;break;case 7:case 8:Qq=2;break;default:;
}}if(Aav)this.Bi(Kg.M);}if(X===AlQ){switch(AtQ){case 9:case 11:Aaw=[0,(Aaw[1]+(K6[
3]-K6[1]))+AtS];break;case 10:case 12:Aaw=[0,(Aaw[1]-(K6[3]-K6[1]))-AtS];break;case
5:case 7:Aaw=[(Aaw[0]+(K6[2]-K6[0]))+AtR,0];break;case 6:case 8:Aaw=[(Aaw[0]-(K6[
2]-K6[0]))-AtR,0];break;default:;}AlQ=null;}X=X.Ah;}if(Aav)A.pe(Kg.Em,Kg);this.U=
this.U&~0x2000;this.Bl([AiC[2]-AiC[0],AiC[3]-AiC[1]]);},JP:function(G){A.pe([this
,this.ABA],this);},ABA:function(G){var B;var BC0=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bgl();}if(((this.U&0x8000)===
0x8000)||BC0){this.U=this.U&~0x8000;this.Ai(this.U);}},Ba:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E6);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cs(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cs(0x60,0x0);else E.Cs(0x20
,0x0);}},BbB:function(Aq){this.Ba(Aq);},ASC:function(){return!!this.FF;},ArK:function(
E){var B;if(!!this.FF===E)return;if(!E){this.FF.AEI=null;this.FF.ArQ(Cf);this.FF=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(E){this.
FF=A._NewObject(A.Graphics.Canvas,0);this.FF.ArQ([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FF.AEI=[this,this.BCS];}A.we(this,0);},A8Y:function(){var B;return((this.U&
0x100000)===0x100000);},As:function(E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0
,0x100000);},CZ:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G8)return;
this.G8=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},A0E:
function(Aq){this.CZ(Aq);},Aj:function(E){if(E)this.Cs(0x400,0x0);else this.Cs(0x0
,0x400);},Bmk:function(E){if(E)this.Cs(0x2,0x0);else this.Cs(0x0,0x2);},Fo:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},ExtendClipping:function(AoC,AoD,AoE,AoB){var B;var Azk=this.M;var RB=
Azk;if(AoC<0)AoC=0;if(AoC>255)AoC=255;if(AoD<0)AoD=0;if(AoD>255)AoD=255;if(AoE<0
)AoE=0;if(AoE>255)AoE=255;if(AoB<0)AoB=0;if(AoB>255)AoB=255;RB=[].concat(RB[0]-(
Math.max(AoC,this.AzT)&0xFF),RB.slice(1,4));RB=A.abN(RB,RB[2]+(Math.max(AoD,this.
AzU)&0xFF));RB=A.abP(RB,RB[1]-(Math.max(AoE,this.AzV)&0xFF));RB=[].concat(RB.slice(
0,3),RB[3]+(Math.max(AoB,this.AzS)&0xFF));if(AoC!==this.AzT){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FF)&&!((this.U&0x80000)===0x80000)){var Az=RB;Az=A.abN(Az
,Azk[0]);this.Ab.Bi(Az);}this.AzT=AoC&0xFF;}if(AoD!==this.AzU){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FF)&&!((this.U&0x80000)===0x80000)){var Az=RB;Az=[].
concat(Azk[2],Az.slice(1,4));this.Ab.Bi(Az);}this.AzU=AoD&0xFF;}if(AoE!==this.AzV
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FF)&&!((this.U&0x80000)===0x80000
)){var Az=RB;Az=[].concat(Az.slice(0,3),Azk[1]);this.Ab.Bi(Az);}this.AzV=AoE&0xFF;
}if(AoB!==this.AzS){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FF)&&!((this.
U&0x80000)===0x80000)){var Az=RB;Az=A.abP(Az,Azk[3]);this.Ab.Bi(Az);}this.AzS=AoB&
0xFF;}},BiT:function(C0,aClip,aOffset,Cj,aBlend){},BiQ:function(C0,aClip,aOffset
,Cj,aBlend){},GetMaximalSize:function(){return Hq;},GetMinimalSize:function(){return Cf;
},AVg:function(Ix,Ol,Xo,Tj,Tk,Ah6,Pd,Rt,LD,LB,LC){var B;if(!this.Hc){this.AkI(Ix
,Ol,Xo,Tj,Tk,null,null,LD,LB,LC);return;}var AlX=this.Hc;var JM=AlX.Ah;if(((Ix.U&
0x10000)===0x10000)&&(this.Hc.C1!==Ix))throw new Error(I0);var Adr=A._NewObject(
C.AN0,0);var RE=AlX.RE;var RN=null;var Mj=null;if(!!JM){RN=JM.RN;Mj=JM.Mj;}if(!!
JM&&!!AlX.ApL)RN=AlX.ApL;if(!!JM&&!!Pd)Mj=Pd;if(!!Ah6)RE=Ah6;if(!Ol)Ol=A._GetAutoObject(
A.acl.AsE);if(!Xo)Xo=Ol;if(!Tk)Tk=Tj;if(!Tj)Tj=Tk;Adr.RE=Xo;Adr.Mj=Tj;Adr.RN=Tk;
Adr.ApL=Rt;Adr.C1=Ix;Adr.Ah=this.Hc.Ah;this.Hc.Ah=null;this.Hc=Adr;if(this.AV===
Ix)this.Ba(null);AlX.C1.Cs(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ix.U&0x4)===
0x4))Ix.Cs(0x10040,0x0);else Ix.Cs(0x10000,0x0);if(!!Mj){this.NX(JM.C1,Mj.Aea(),
null,null,LC);this.NX(AlX.C1,RE.Sf(),null,null,true);this.NX(Adr.C1,Ol.Sg(),LD,LB
,true);}else if(!!RN){this.NX(JM.C1,RN.Aeb(),null,null,LC);this.NX(AlX.C1,RE.Sf(
),null,null,true);this.NX(Adr.C1,Ol.Sg(),LD,LB,true);}else if(!!RE){this.NX(AlX.
C1,RE.Sf(),null,null,LC);this.NX(Adr.C1,Ol.Sg(),LD,LB,true);}else this.NX(Adr.C1
,Ol.Sg(),LD,LB,LC);},AqE:function(Ix,Ah6,Pd,Rt,LD,LB,LC){var B;if(!this.Hc)return;
if(!Ix)return;var KH=this.Hc;var JM=this.Hc.Ah;var ApR=null;while((!!KH&&(KH.C1!==
Ix))&&!!KH.Ah){ApR=KH;KH=JM;JM=KH.Ah;}if(!KH||(KH.C1!==Ix))throw new Error(Iv);if(
!ApR){this.Hc=JM;KH.Ah=null;}else{ApR.Ah=JM;KH.Ah=null;}KH.C1.Cs(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JM)&&!ApR)&&((JM.C1.U&0x200000)===0x200000))JM.C1.Cs(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JM)&&!ApR)&&((JM.C1.U&0x4)===0x4))JM.C1.Cs(
0x40,0x0);var RE=KH.RE;var RN=null;var Mj=null;if(!!JM)RN=JM.RN;if(!!JM&&!!KH.ApL
)RN=KH.ApL;if(!!JM&&!!Rt)RN=Rt;if(!!ApR&&!!JM)Mj=JM.Mj;if((!!ApR&&!!JM)&&!!Pd)Mj=
Pd;if(!!Ah6)RE=Ah6;if(!!Mj){this.NX(JM.C1,Mj.Aea(),null,null,LC);this.NX(KH.C1,RE.
Sf(),LD,LB,true);}else if(!!RN){this.NX(JM.C1,RN.Aeb(),null,null,LC);this.NX(KH.
C1,RE.Sf(),LD,LB,true);}else this.NX(KH.C1,RE.Sf(),LD,LB,LC);},AkI:function(Ix,Ol
,Xo,Tj,Tk,Pd,Rt,LD,LB,LC){var B;if(!Ix)return;if(!!this.Hc&&(this.Hc.C1===Ix)){this.
AVg(Ix,Ol,Xo,Tj,Tk,null,Pd,Rt,LD,LB,LC);return;}if(((Ix.U&0x10000)===0x10000))throw new
Error(I0);var KH=A._NewObject(C.AN0,0);if(!!this.Hc&&!this.Hc.Mj){if(!Rt)Rt=Pd;if(
!Pd)Pd=Rt;}var Mj=null;if(!!this.Hc)Mj=this.Hc.Mj;if(!!this.Hc&&!!Pd)Mj=Pd;if(!Ol
)Ol=A._GetAutoObject(A.acl.AsE);if(!Xo)Xo=Ol;if(!Tk)Tk=Tj;if(!Tj)Tj=Tk;KH.RE=Xo;
KH.Mj=Tj;KH.RN=Tk;KH.ApL=Rt;if(this.AV===Ix)this.Ba(null);if(!!this.Hc&&((this.Hc.
C1.U&0x200000)===0x200000))this.Hc.C1.Cs(0x0,0x10);if(!!this.Hc)this.Hc.C1.Cs(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Ix.U&0x4)===0x4))Ix.Cs(0x10040,0x0);else Ix.
Cs(0x10000,0x0);KH.C1=Ix;KH.Ah=this.Hc;this.Hc=KH;if(!!Mj){this.NX(this.Hc.Ah.C1
,Mj.Aea(),null,null,LC);this.NX(Ix,Ol.Sg(),LD,LB,true);}else this.NX(Ix,Ol.Sg(),
LD,LB,LC);},A7k:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7Y:function(
K4){var tmp=this;while(!!tmp){K4=A.abe(K4,tmp.M.slice(0,2));tmp=tmp.Ab;}return K4;
},BjP:function(K4){var tmp=this;while(!!tmp){K4=A.abf(K4,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K4;},DispatchEvent:function(CM){var B;var X=this.AV;var B1=(C.P.isPrototypeOf(
X)?X:null);var GC=null;var A26=!!this.XC&&(!!this.XC.FS||!!this.XC.B9);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B1=null;}if(!!this.Hc&&!A26)GC=this.Hc.C1.DispatchEvent(CM);if(!GC&&!!B1)
GC=B1.DispatchEvent(CM);else if(!GC&&!!X)GC=X.G3(CM);if(!GC)GC=this.G3(CM);if(!GC
)GC=this.A4b(CM);return GC;},BroadcastEventAtPosition:function(CM,HA,aFilter){var
B;var X=this.B_;var GC=null;while(!!X&&!GC){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HA)){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GC=B1.
BroadcastEventAtPosition(CM,A.abe(HA,B1.M.slice(0,2)),aFilter);else GC=X.G3(CM);
}X=X.AI;}if(!GC)GC=this.G3(CM);return GC;},BroadcastEvent:function(CM,aFilter){var
B;var X=this.B_;var GC=null;while(!!X&&!GC){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GC=B1.BroadcastEvent(CM,aFilter
);else GC=X.G3(CM);}X=X.AI;}if(!GC)GC=this.G3(CM);if(!GC)GC=this.A4b(CM);return GC;
},Bl:function(aSize){},Ai:function(Ae){},Bj5:function(){this.U=this.U|0x4000;A.pe([
this,this.ABA],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABA],this
);},Bi:function(Db){var B;var B1=this;while(!!B1&&!((Db[0]>=Db[2])||(Db[1]>=Db[3
]))){var Aas=B1.FF;if(!B1.Ab&&(B1!==this)){B1.Bi(Db);return;}if(!!Aas){var BAD=Aas.
QP;Aas.QP=A.wC(Aas.QP,Db);if(!A.aaY(BAD,Aas.QP)){A.we(B1,0);A.we(Aas,0);}}if(!((
B1.U&0x1)===0x1))return;var Az=B1.M;Db=A.abh(Db,Az.slice(0,2));if(!!B1.FF||!((B1.
U&0x80000)===0x80000)){if(!!!B1.FF){Az=[].concat(Az[0]-B1.AzT,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B1.AzV);Az=A.abN(Az,Az[2]+B1.AzU);Az=[].concat(Az.slice(0,3),Az[3
]+B1.AzS);}Db=A.lb(Db,Az);}B1=B1.Ab;}},QK:function(Ag,Gz,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agi=A.aaI(Ag.GetExtent());var X=Ag;var A1O=null;var
Bc7=0;var I6=0x10000;var AKT;if(((aFilter&0x10000)===0x10000))I6=0x0;var top=((Gz===
4)||(Gz===1))||(Gz===6);var bottom=((Gz===5)||(Gz===3))||(Gz===8);var left=((Gz===
2)||(Gz===1))||(Gz===3);var right=((Gz===7)||(Gz===6))||(Gz===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AI;if(!X)X=this.B_;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I6||!((B=I6)&&((X.U&B)===B
))))for(AKT=0;AKT<2;AKT++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKT){if((left&&(s[0]>s[1]))&&(Az[2]<Agi[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agi[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agi[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agi[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agi);var
Rw=Bq;if(Rw[0]<0)Rw=[-Rw[0],Rw[1]];if(Rw[1]<0)Rw=[Rw[0],-Rw[1]];if(((((!left||(Bq[
0]<=-Rw[1]))&&(!right||(Bq[0]>=Rw[1])))&&(!top||(Bq[1]<=-Rw[0])))&&(!bottom||(Bq[
1]>=Rw[0])))&&((Rw[0]>0)||(Rw[1]>0))){var RG=Bq[0];var RH=Bq[1];var Jq=Math.sqrt((
RG*RG)+(RH*RH));var AKr=0;if(!left&&!right)AKr=Jq/Rw[1];if(!top&&!bottom)AKr=Jq/
Rw[0];Jq=(Jq*AKr)*AKr;if((Jq<Bc7)||!A1O){Bc7=Jq;A1O=X;}}}}return A1O;},AqL:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B_;var I6=0x10000;
if(((aFilter&0x10000)===0x10000))I6=0x0;if(!!Ag)X=Ag.AI;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;X=X.AI;}return null;
},TS:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;
var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},AC1:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlV=Ag.Ah;var Al8=Ag.AI;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;
while(!!AlV||!!Al8){if((!!AlV&&(!aFilter||((B=aFilter)&&((AlV.U&B)===B))))&&(!I6||
!((B=I6)&&((AlV.U&B)===B))))return AlV;if((!!Al8&&(!aFilter||((B=aFilter)&&((Al8.
U&B)===B))))&&(!I6||!((B=I6)&&((Al8.U&B)===B))))return Al8;if(!!AlV)AlV=AlV.Ah;if(
!!Al8)Al8=Al8.AI;}return null;},Dc:function(aFilter){var B;var X=this.B9;var AE=
BD;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I6||!((B=I6)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NX:function(KG,FQ,LD,LB
,LC){var B;if(!KG)return;if(!FQ)throw new Error(O9);if((!!FQ.P||!!FQ.Ab)||!!FQ.Po
)throw new Error(P_);if(!!KG.Ab&&(KG.Ab!==this))throw new Error(P$);if(!this.XC)
this.XC=A._NewObject(C.AVl,0);FQ.Ab=this;FQ.P=KG;FQ.AKD=LB;FQ.A3w=LD;if(!!KG.ApM
)KG.ApM.Po.Bo0(KG.ApM);KG.ApM=FQ;KG.U=KG.U|0x20000;if((LC&&!!this.XC.B_)&&!this.
XC.B_.ARj())(A.acl.ACW.isPrototypeOf(B=this.XC.B_)?B:null).A5e(FQ);else{var Po=A.
_NewObject(A.acl.ACW,0);Po.A5e(FQ);this.XC.A$F(Po,false);}},AhA:function(Ag,Ka){
var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new Error(Fc);if(!!Ka&&(Ka.
Ab!==this))throw new Error(L8);if(Ag.Ah===Ka)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AI&&!!Ag.Ev)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(!!Ag.Ah)Ag.Ah.
AI=Ag.AI;else this.B_=Ag.AI;if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;else this.B9=Ag.Ah;var GB=
null;var IA=this.B_;var LU=Ag.J7;if(!!Ka){GB=Ka;IA=Ka.AI;}if(!!GB&&(LU>GB.J7))LU=
GB.J7;if(!!IA&&(LU<IA.J7))LU=IA.J7;if(LU!==Ag.J7){Ag.Ab=null;Ag.Ar6(LU);Ag.Ab=this;
}if(!Ka){if(!!this.B_)this.B_.Ah=Ag;Ag.AI=this.B_;Ag.Ah=null;this.B_=Ag;}else{Ag.
Ah=Ka;Ag.AI=Ka.AI;Ka.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}if(this.B9===Ka)this.B9=Ag;if(((
Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},ZH:function(Ag){var B;if(!Ag)throw new
Error(CR);if(Ag.Ab!==this)throw new Error(Fc);if(!Ag.Ah)return;var IA=this.B_;var
LU=Ag.J7;while(!!IA&&(IA.J7>LU))IA=IA.AI;if(((IA===Ag)||!IA)||(IA.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AI&&!!Ag.Ev)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AI)Ag.AI.U=Ag.AI.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(!
!Ag.AI)Ag.AI.Ah=Ag.Ah;else this.B9=Ag.Ah;Ag.Ah.AI=Ag.AI;Ag.AI=IA;Ag.Ah=IA.Ah;IA.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AI=Ag;else this.B_=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping(
));},J5:function(Ag,Qh){var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new
Error(Fc);var IA=Ag;var GB=Ag;var LU=Ag.J7;while(((Qh>0)&&!!IA.Ah)&&(IA.Ah.J7<=LU
)){IA=IA.Ah;Qh=Qh-1;}while(((Qh<0)&&!!GB.AI)&&(GB.AI.J7>=LU)){GB=GB.AI;Qh=Qh+1;}
if((IA===Ag)&&(GB===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AI&&!!Ag.Ev)Ag.
AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JP],this);}if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AI=Ag.AI;if(this.B9===Ag)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AI;if(IA
!==Ag){Ag.Ah=IA.Ah;Ag.AI=IA;IA.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AI=Ag;}if(GB!==Ag){Ag.Ah=GB;
Ag.AI=GB.AI;GB.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}if(!Ag.Ah)this.B_=Ag;if(!Ag.AI)this.
B9=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},HP:function(Ag){var B;if(
!Ag)throw new Error(Qa);if(Ag.Ab!==this)throw new Error(Fc);if((((Ag.U&0x401)===
0x401)&&!!Ag.AI)&&!!Ag.Ev){Ag.AI.U=Ag.AI.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JP],this);}Ag.Ev=null;if(this.AV===Ag)this.Ba(this.
AC1(Ag,0x14));if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AI=Ag.AI;if(this.B9===Ag
)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AI;Ag.Ab=null;Ag.Ah=null;Ag.AI=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cs(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},AMc:function(Ag,Ka
){var B;if(!Ag)throw new Error(J9);if(!!Ag.Ab)throw new Error(Oh);if(!!Ka&&(Ka.Ab
!==this))throw new Error(L8);var GB=null;var IA=this.B_;var LU=Ag.J7;if(!!Ka){GB=
Ka;IA=Ka.AI;}if(!!GB&&(LU>GB.J7))LU=GB.J7;if(!!IA&&(LU<IA.J7))LU=IA.J7;if(LU!==Ag.
J7){Ag.Ab=null;Ag.Ar6(LU);Ag.Ab=this;}if(!Ka){if(!!this.B_)this.B_.Ah=Ag;Ag.AI=this.
B_;this.B_=Ag;}else{Ag.Ah=Ka;Ag.AI=Ka.AI;Ka.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}Ag.Ab=
this;if(this.B9===Ka)this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOR()===Ag))Ag.Cs(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cs(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Ba(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JP],this);}},J:function(Ag,Qh){var B;if(!Ag)throw new Error(
J9);if(!!Ag.Ab)throw new Error(Oh);var GB=null;var LU=Ag.J7;if(((Qh<0)&&!!this.B_
)&&(this.B_.J7>=LU)){GB=this.B_;Qh=Qh+1;}while((((Qh<0)&&!!GB)&&!!GB.AI)&&(GB.AI.
J7>=LU)){GB=GB.AI;Qh=Qh+1;}if((!GB&&!!this.B_)&&(this.B_.J7>LU))GB=this.B_;while((
!!GB&&!!GB.AI)&&(GB.AI.J7>LU))GB=GB.AI;if(!GB){Ag.Ab=this;Ag.AI=this.B_;if(!!this.
B_)this.B_.Ah=Ag;if(!this.B9)this.B9=Ag;this.B_=Ag;}else{Ag.Ab=this;Ag.AI=GB.AI;
Ag.Ah=GB;GB.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;else this.B9=Ag;}if(((Ag.U&0x1)===0x1))
this.Bi(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOR()===Ag))Ag.Cs(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cs(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Ba(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}},A80:function(){return this.
AV;},Awj:function(){return this.G8;},_Init:function(aArg){C.Eu._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eu._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKs)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RK:null,JL:null,Ft:A.abi(10,null
,null),AtD:null,Ain:null,ABC:0,Ih:0,Mf:A.abi(10,0,null),AJT:A.abi(10,A.wg,null),
XA:A.abi(10,0,null),Af0:A.abi(10,A.wf,null),AtI:A.abi(10,0,null),Aim:A.abi(10,A.
wf,null),Xz:A.abi(10,A.wf,null),RD:A.abi(10,A.wf,null),Adc:A.abi(10,A.wf,null),EP:
0,AKe:0,AKd:0,Oy:A.abi(4,0,null),Kl:A.abi(4,A.wg,null),Ki:0,AAh:0,AtX:0,Az4:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Ip:function(){return this;
},Kr:function(C0,aClip,aOffset,Cj,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)C0.Avh(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kr.call(this,C0,aClip
,aOffset,Cj,aBlend);},Cs:function(Ru,U9){var B;C.P.Cs.call(this,Ru,U9);if(!this.
Ab&&(((Ru&0x1)===0x1)||((U9&0x1)===0x1)))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Ru&0x2)===0x2)||((U9&0x2)===0x2)))this.Bi([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Ba:function(E){if((E!==null)||!E)C.P.Ba.call(this,E);},ArK:
function(E){var B;var BAB=this.FF;C.P.ArK.call(this,E);if(((BAB!==this.FF)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},CZ:function(
E){var B;var BP=this.G8;C.P.CZ.call(this,E);if(((BP!==this.G8)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CM){if(!!CM){CM.AvQ=!!this.Ih;if(!!this.Ih)CM.Bs=this.Ih;}var GC=null;if(!!this.
JL){GC=this.JL.C1.DispatchEvent(CM);if(!GC)GC=this.G3(CM);if(!GC)GC=this.A4b(CM);
this.Ih=0;return GC;}GC=C.P.DispatchEvent.call(this,CM);this.Ih=0;return GC;},BroadcastEvent:
function(CM,aFilter){if(!!CM){CM.AvQ=!!this.Ih;if(!!this.Ih)CM.Bs=this.Ih;}var GC=
C.P.BroadcastEvent.call(this,CM,aFilter);this.Ih=0;return GC;},Bi:function(Db){var
B;if(this.ABC>0)throw new Error(Qb);if(!!this.FF&&!this.Ab){if(((B=this.FF.QP)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FF,0);}this.FF.QP=A.wC(this.FF.QP
,Db);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Db=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bi.call(this,Db);return;}Db=A.
lb(A.abh(Db,this.M.slice(0,2)),this.M);if((Db[0]>=Db[2])||(Db[1]>=Db[3]))return;
var O;for(O=0;O<this.Ki;O=O+1)if(!(((B=A.lb(this.Kl.Get(O),Db))[0]>=B[2])||(B[1]>=
B[3]))){this.Kl.Set(O,A.wC(this.Kl.Get(O),Db));this.Oy.Set(O,A.aaH(this.Kl.Get(O
)));return;}if(this.Ki<3){this.Kl.Set(this.Ki,Db);this.Oy.Set(this.Ki,A.aaH(Db));
this.Ki=this.Ki+1;return;}var Ij;var RJ;var AAg=0;var AAj=0;var Bc6=2147483647;this.
Kl.Set(this.Ki,Db);this.Oy.Set(this.Ki,A.aaH(Db));for(Ij=0;Ij<=this.Ki;Ij=Ij+1)for(
RJ=Ij+1;RJ<=this.Ki;RJ=RJ+1){var ALl=A.aaH(A.wC(this.Kl.Get(Ij),this.Kl.Get(RJ))
);var BfW=((ALl<<8)/(this.Oy.Get(Ij)+this.Oy.Get(RJ)))|0;if(BfW<Bc6){Bc6=BfW;AAg=
Ij;AAj=RJ;}}this.Kl.Set(AAg,A.wC(this.Kl.Get(AAg),this.Kl.Get(AAj)));this.Oy.Set(
AAg,A.aaH(this.Kl.Get(AAg)));if(AAj!==this.Ki){this.Kl.Set(AAj,this.Kl.Get(this.
Ki));this.Oy.Set(AAj,this.Oy.Get(this.Ki));}},Bzd:function(){var LN=A._NewObject(
C.AqG,0);LN.AvQ=!!this.Ih;if(!!this.Ih)LN.Bs=this.Ih;return LN;},Ao0:function(){
var LN=A._NewObject(C.Aed,0);LN.AvQ=!!this.Ih;if(!!this.Ih)LN.Bs=this.Ih;return LN;
},AtH:function(){var LN=A._NewObject(C.AuW,0);LN.AvQ=!!this.Ih;if(!!this.Ih)LN.Bs=
this.Ih;return LN;},Bzh:function(G){var O;var Apg=false;for(O=0;O<10;O=O+1)if(!!
this.Ft.Get(O)){var pos=this.RD.Get(O);var B1=this.Ft.Get(O).Ab;while(!!B1&&(B1!==
this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Ft.Get(O)!==this)){
var tmp=this.Ft.Get(O);this.EP=O;this.Ft.Set(O,null);tmp.G3(this.Ao0().InitializeUp(
O,this.Aim.Get(O),this.Af0.Get(O),this.XA.Get(O),this.Mf.Get(O)+1,this.Xz.Get(O)
,false,this.RD.Get(O),this.Adc.Get(O)));this.BroadcastEvent(this.AtH().InitializeUp(
O,this.Mf.Get(O)+1,false,tmp,this.RD.Get(O)),0x18);}else{this.XA.Set(O,(this.Ain.
Bs-this.AtI.Get(O))|0);if(this.XA.Get(O)<10)this.XA.Set(O,10);this.EP=O;this.Ft.
Get(O).G3(this.Ao0().InitializeHold(O,pos,this.Af0.Get(O),this.XA.Get(O),this.Mf.
Get(O)+1,this.Xz.Get(O),this.RD.Get(O),this.Adc.Get(O)));Apg=true;}}if(!Apg)this.
Ain.As(false);},GetFPS:function(){var ticksCount=0;var BdI=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKe&&(ticksCount>this.AKe))BdI=((this.AKd*1000)/((
ticksCount-this.AKe)|0))|0;this.AKd=0;this.AKe=ticksCount;return BdI;},Update:function(
){var B;if(!this.AtD)this.AtD=A._NewObject(A.Graphics.Canvas,0);this.AtD.ArQ([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtD.Update();return this.UpdateGE20(this.AtD);}
,UpdateGE20:function(C0){if(!this.BeginUpdate())return BD;var Agt=this.UpdateCanvas(
C0,Cf);this.EndUpdate();return Agt;},EndUpdate:function(){if(this.Ki>0){this.AKd=
this.AKd+1;this.Ki=0;}},UpdateCanvas:function(C0,aOffset){var B;var Agt=BD;var ByW=[
].concat(aOffset,A.abf(C0.FrameSize,aOffset));var O;var Ij=this.Ki;this.ABC=this.
ABC+1;C0.C1=this;for(O=0;(O<Ij)&&(O<4);O=O+1)if(this.Oy.Get(O)>0){this.Kr(C0,A.abg(
this.Kl.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agt=A.wC(Agt,A.lb(ByW
,this.Kl.Get(O)));}else Ij=Ij+1;C0.C1=null;this.ABC=this.ABC-1;if(!((Agt[0]>=Agt[
2])||(Agt[1]>=Agt[3])))return A.abg(Agt,aOffset);else return Agt;},GetUpdateRegion:
function(AJe){var O;var Ij=this.Ki;if(AJe<0)return BD;for(O=0;(O<Ij)&&(O<4);O=O+
1)if(!this.Oy.Get(O)){Ij=Ij+1;AJe=AJe+1;}else if(O===AJe)return this.Kl.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Ki&&!A.aaY(this.Kl.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bg1=A.abi(3,A.wg,null);var Bg0=this.Ki;for(O=0;
O<Bg0;O++)Bg1.Set(O,this.Kl.Get(O));for(O=0;O<Bg0;O++){var Bgg=A.abh(Bg1.Get(O),
this.M.slice(0,2));var Bgh=this.AuG(Bgg);if(!A.aaY(Bgg,Bgh))this.Bi(A.abg(Bgh,this.
M.slice(0,2)));}}var Ij;var RJ;for(Ij=0;Ij<(this.Ki-1);Ij++)if(this.Oy.Get(Ij)>0
)for(RJ=Ij+1;RJ<this.Ki;RJ++)if(this.Oy.Get(RJ)>0){var ALl=A.aaH(A.wC(this.Kl.Get(
Ij),this.Kl.Get(RJ)));if(((ALl-this.Oy.Get(Ij))-this.Oy.Get(RJ))<0){this.Kl.Set(
Ij,A.wC(this.Kl.Get(Ij),this.Kl.Get(RJ)));this.Oy.Set(Ij,ALl);this.Oy.Set(RJ,0);
}}for(O=this.Ki-1;O>=0;O--)if(!this.Oy.Get(O))this.Ki=this.Ki-1;return this.Ki;}
,DoesNeedUpdate:function(){if(this.Ki>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cf,aSize));if(this.Az4)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bi(this.M);return this;},SetRootFocus:function(A1e){if(A1e===this.Az4
)return false;this.Az4=A1e;if(!A1e){if(!!this.JL)this.JL.C1.Cs(0x0,0x40);else this.
Cs(0x0,0x40);}else if(!!this.JL)this.JL.C1.Cs(0x40,0x0);else this.Cs(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qi){this.Ih=Qi;},DriveKeyboardHitting:function(
KF,Ay6,Ti){var B;var A4c=!!this.RK;if(!!this.RK&&((!Ti||(this.AAh!==KF))||(this.
AtX!==Ay6))){var LN=null;var X=(C.Ci.isPrototypeOf(B=this.RK)?B:null);var D5=(C.
BF.isPrototypeOf(B=this.RK)?B:null);if(!!this.AAh)LN=A._NewObject(C.KeyEvent,0).
Initialize(this.AAh,false);if(this.AtX!==0x00)LN=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtX,false);if(!!D5)D5.G3(LN);else if(!!X)X.G3(LN);this.AAh=0;this.AtX=0x00;
this.RK=null;}if(!!this.RK){var LN=null;var X=(C.Ci.isPrototypeOf(B=this.RK)?B:null
);var D5=(C.BF.isPrototypeOf(B=this.RK)?B:null);if(!!KF)LN=A._NewObject(C.KeyEvent
,0).Initialize(KF,true);if(this.AtX!==0x00)LN=A._NewObject(C.KeyEvent,0).Initialize2(
Ay6,true);if(!!D5)D5.G3(LN);else if(!!X)X.G3(LN);}if(!this.RK&&Ti){if(!!KF)this.
RK=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KF,true));if(Ay6!==0x00
)this.RK=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(Ay6,true));if(
!(C.BF.isPrototypeOf(B=this.RK)?B:null)&&!(C.Ci.isPrototypeOf(B=this.RK)?B:null)
)this.RK=null;this.AAh=KF;this.AtX=Ay6;A4c=A4c||!!this.RK;}this.Ih=0;return A4c;
},DriveCursorMovement:function(Fe){return this.DriveMultiTouchMovement(this.EP,Fe
);},DriveMultiTouchMovement:function(BH,Fe){if((BH<0)||(BH>9)){this.Ih=0;return false;
}var Fv=A.abe(Fe,this.RD.Get(BH));this.RD.Set(BH,Fe);if(!this.Ft.Get(BH)||A.aaX(
Fv,Cf)){this.Ih=0;return false;}var pos=Fe;var B1=this.Ft.Get(BH).Ab;while(!!B1&&(
B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Ft.Get(BH)!==
this)){var tmp=this.Ft.Get(BH);this.EP=BH;this.Ft.Set(BH,null);tmp.G3(this.Ao0().
InitializeUp(BH,this.Aim.Get(BH),this.Af0.Get(BH),this.XA.Get(BH),this.Mf.Get(BH
)+1,this.Xz.Get(BH),false,this.RD.Get(BH),this.Adc.Get(BH)));this.BroadcastEvent(
this.AtH().InitializeUp(BH,this.Mf.Get(BH)+1,false,tmp,Fe),0x18);}else{this.Aim.
Set(BH,pos);this.EP=BH;this.Ft.Get(BH).G3(this.Bzd().Initialize(BH,pos,this.Af0.
Get(BH),Fv,this.XA.Get(BH),this.Mf.Get(BH)+1,this.Xz.Get(BH),Fe,this.Adc.Get(BH)
));}this.Ih=0;return true;},DriveCursorHitting:function(Ti,BH,Fe){return this.DriveMultiTouchHitting(
Ti,BH,Fe);},DriveMultiTouchHitting:function(Ti,BH,Fe){if((BH<0)||(BH>9)){this.Ih=
0;return false;}var ticksCount=this.Ih;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BB_=this.Ih;this.DriveMultiTouchMovement(BH,Fe);Fe=this.RD.Get(BH);
this.Ih=BB_;if(Ti)this.Adc.Set(BH,Fe);if(Ti&&!this.Ft.Get(BH)){var JK;var pos=Fe;
if(A.wa(this.AJT.Get(BH),Fe)&&((ticksCount-this.AtI.Get(BH))<=250))this.Mf.Set(BH
,this.Mf.Get(BH)+1);else this.Mf.Set(BH,0);this.AJT.Set(BH,A.abh(MR,Fe));this.AtI.
Set(BH,ticksCount);if(!!this.JL)JK=this.Yn(A.abh(MR,Fe),BH,this.Mf.Get(BH)+1,this.
JL.C1,null,0x0);else JK=this.Yn(A.abh(MR,Fe),BH,this.Mf.Get(BH)+1,null,null,0x0);
if(!!JK){this.BroadcastEvent(this.AtH().InitializeDown(BH,this.Mf.Get(BH)+1,false
,JK.Ci,Fe),0x18);this.Ft.Set(BH,JK.Ci);this.Xz.Set(BH,JK.DH);}else{this.Ft.Set(BH
,null);this.Xz.Set(BH,Cf);this.Ih=0;return false;}var B1=JK.Ci.Ab;while(!!B1&&(B1
!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}this.Af0.Set(BH,pos);this.Aim.
Set(BH,pos);this.XA.Set(BH,0);this.Ain.As(true);this.EP=BH;this.Ft.Get(BH).G3(this.
Ao0().InitializeDown(BH,pos,this.Mf.Get(BH)+1,this.Xz.Get(BH),false,Fe));this.Ih=
0;return true;}if(!Ti&&!!this.Ft.Get(BH)){var pos=Fe;var B1=this.Ft.Get(BH).Ab;while(
!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1)pos=this.Aim.
Get(BH);this.EP=BH;var tmp=this.Ft.Get(BH);this.Ft.Set(BH,null);tmp.G3(this.Ao0(
).InitializeUp(BH,pos,this.Af0.Get(BH),this.XA.Get(BH),this.Mf.Get(BH)+1,this.Xz.
Get(BH),false,Fe,this.Adc.Get(BH)));this.BroadcastEvent(this.AtH().InitializeUp(
BH,this.Mf.Get(BH)+1,false,tmp,Fe),0x18);this.Ih=0;return true;}this.Ih=0;return false;
},AUE:function(Aap,Bcq,Ac3,Ac2){if(Aap===this)Aap=null;if(!!!Aap&&!!this.JL)Aap=
this.JL.C1;if(!this.Ft.Get(this.EP))return;var JK;JK=this.Yn(A.abh(MR,this.RD.Get(
this.EP)),this.EP,1,Aap,Ac3,Ac2);if(!!JK&&(this.Ft.Get(this.EP)!==JK.Ci))this.ANQ(
JK.Ci,JK.DH);if(!JK&&(this.Ft.Get(this.EP)!==Bcq))this.ANQ(Bcq,Cf);},ANQ:function(
Aap,Xp){if(!this.Ft.Get(this.EP)||(this.Ft.Get(this.EP)===Aap))return;var tmp=this.
Ft.Get(this.EP);this.Ft.Set(this.EP,null);tmp.G3(this.Ao0().InitializeUp(this.EP
,this.Aim.Get(this.EP),this.Af0.Get(this.EP),this.XA.Get(this.EP),this.Mf.Get(this.
EP)+1,this.Xz.Get(this.EP),true,this.RD.Get(this.EP),this.Adc.Get(this.EP)));this.
BroadcastEvent(this.AtH().InitializeUp(this.EP,this.Mf.Get(this.EP)+1,true,tmp,this.
RD.Get(this.EP)),0x18);var pos=this.RD.Get(this.EP);var B1=null;if(!!Aap)B1=Aap.
Ab;while(!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(Aap
!==this)){this.Ft.Set(this.EP,null);return;}this.BroadcastEvent(this.AtH().InitializeDown(
this.EP,this.Mf.Get(this.EP)+1,true,Aap,this.RD.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Ft.Set(this.EP,Aap);this.Xz.Set(
this.EP,Xp);this.Af0.Set(this.EP,pos);this.Aim.Set(this.EP,pos);this.Mf.Set(this.
EP,0);this.XA.Set(this.EP,0);this.AtI.Set(this.EP,ticksCount);this.Adc.Set(this.
EP,this.RD.Get(this.EP));this.Ft.Get(this.EP).G3(this.Ao0().InitializeDown(this.
EP,pos,this.Mf.Get(this.EP)+1,this.Xz.Get(this.EP),true,this.Adc.Get(this.EP)));
},AOR:function(){if(!!this.JL)return this.JL.C1;return null;},ACT:function(KG){var
B;if(!KG)throw new Error(Te);if(!((KG.U&0x80)===0x80))throw new Error(UW);if(this.
JL.C1===KG)this.JL=this.JL.Ah;else{var Az3=this.JL;while(Az3.Ah.C1!==KG)Az3=Az3.
Ah;Az3.Ah=Az3.Ah.Ah;}KG.Cs(0x0,0xD0);if(this.Az4){if(!!this.JL)this.JL.C1.Cs(0x50
,0x0);else this.Cs(0x50,0x0);}},AMX:function(KG){var B;var Ar=A._NewObject(C.A7_
,0);if(!KG)throw new Error(Z8);if(KG===null)throw new Error(W$);if(((KG.U&0x80)===
0x80))throw new Error(Iw);if(!!this.JL)this.JL.C1.Cs(0x0,0x50);else this.Cs(0x0,
0x50);Ar.Ah=this.JL;Ar.C1=KG;this.JL=Ar;if(this.Az4)KG.Cs(0xD0,0x0);else KG.Cs(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Ain={
I:this},0);(this.Ft=[]).__proto__=C.Root.Ft;(this.Mf=[]).__proto__=C.Root.Mf;(this.
AJT=[]).__proto__=C.Root.AJT;(this.XA=[]).__proto__=C.Root.XA;(this.Af0=[]).__proto__=
C.Root.Af0;(this.AtI=[]).__proto__=C.Root.AtI;(this.Aim=[]).__proto__=C.Root.Aim;(
this.Xz=[]).__proto__=C.Root.Xz;(this.RD=[]).__proto__=C.Root.RD;(this.Adc=[]).__proto__=
C.Root.Adc;(this.Oy=[]).__proto__=C.Root.Oy;(this.Kl=[]).__proto__=C.Root.Kl;this.
__proto__=C.Root;this.U=0x10007F;this.Ain.PX(10);this.Ain.MK=[this,this.Bzh];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Ain._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Ain._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RK)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JL)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ft,D);if((B=this.
AtD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ain)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvQ:false,Init:function(aArg){this.Bs=
this.Avp();},Avp:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,Dy:0,Down:false
,Initialize2:function(KF,Ti){this.CO=0;this.Dy=KF;this.Down=Ti;if((KF>=0x30)&&(KF<=
0x39))this.CO=(10+KF)-48;if((KF>=0x41)&&(KF<=0x5A))this.CO=(105+KF)-65;if((KF>=0x61
)&&(KF<=0x7A))this.CO=(105+KF)-97;if(KF===0x20)this.CO=131;if(!this.CO)switch(KF
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(KF,Ti){this.CO=KF;this.
Down=Ti;this.Dy=0x00;var A1U=KF-10;var AtC=KF-105;if((A1U>=0)&&(A1U<=9))this.Dy=(
48+A1U)&0xFFFF;if((AtC>=0)&&(AtC<=25))this.Dy=(65+AtC)&0xFFFF;if(KF===131)this.Dy=
0x20;if(this.Dy===0x00)switch(KF){case 132:this.Dy=0x2B;break;case 133:this.Dy=0x2D;
break;case 134:this.Dy=0x2A;break;case 135:this.Dy=0x2F;break;case 136:this.Dy=0x3D;
break;case 137:this.Dy=0x2E;break;case 138:this.Dy=0x2C;break;case 139:this.Dy=0x3A;
break;case 140:this.Dy=0x3B;break;default:;}return this;},Bj_:function(Bcf){switch(
Bcf){case 141:return((this.Dy>=0x41)&&(this.Dy<=0x5A))||((this.Dy>=0x61)&&(this.
Dy<=0x7A));case 142:return(((this.Dy>=0x41)&&(this.Dy<=0x5A))||((this.Dy>=0x61)&&(
this.Dy<=0x7A)))||((this.Dy>=0x30)&&(this.Dy<=0x39));case 143:return(this.Dy>=0x30
)&&(this.Dy<=0x39);case 144:return(((this.Dy>=0x41)&&(this.Dy<=0x46))||((this.Dy>=
0x61)&&(this.Dy<=0x66)))||((this.Dy>=0x30)&&(this.Dy<=0x39));case 145:return this.
Dy!==0x00;case 146:return(this.Dy===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.Dy!==0x00
)||!!this.CO;default:;}return Bcf===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARC={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARC;},_className:
"Core::LanguageEvent"};C.AuW={AxL:null,LZ:A.wf,Oc:0,IO:0,Down:false,NQ:false,InitializeUp:
function(BH,Om,Aoy,A1w,Aao){this.Down=false;this.IO=BH;this.Oc=Om;this.LZ=Aao;this.
AxL=A1w;this.NQ=Aoy;return this;},InitializeDown:function(BH,Om,Aoy,A1w,Aao){this.
Down=true;this.IO=BH;this.Oc=Om;this.LZ=Aao;this.AxL=A1w;this.NQ=Aoy;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuW;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxL)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aed={AgZ:A.wf,LZ:A.wf,Oc:0,Jx:
0,NZ:A.wf,H4:A.wf,IO:0,Down:false,NQ:false,InitializeHold:function(BH,Alk,Ay9,Ay_
,Om,Xp,Aao,Ay8){this.Down=true;this.IO=BH;this.H4=A.abf(Alk,Xp);this.NZ=A.abf(Ay9
,Xp);this.Jx=Ay_;this.Oc=Om;this.LZ=Aao;this.AgZ=Ay8;return this;},InitializeUp:
function(BH,Alk,Ay9,Ay_,Om,Xp,Aoy,Aao,Ay8){this.Down=false;this.IO=BH;this.H4=A.
abf(Alk,Xp);this.NZ=A.abf(Ay9,Xp);this.Jx=Ay_;this.Oc=Om;this.NQ=Aoy;this.LZ=Aao;
this.AgZ=Ay8;return this;},InitializeDown:function(BH,Alk,Om,Xp,Aoy,Aao){this.Down=
true;this.IO=BH;this.H4=A.abf(Alk,Xp);this.NZ=A.abf(Alk,Xp);this.Jx=0;this.Oc=Om;
this.NQ=Aoy;this.LZ=Aao;this.AgZ=Aao;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aed;},_className:"Core::CursorEvent"};C.AqG={
AgZ:A.wf,LZ:A.wf,Oc:0,Jx:0,DH:A.wf,NZ:A.wf,H4:A.wf,IO:0,Initialize:function(BH,Alk
,Ay9,aOffset,Ay_,Byg,Xp,Aao,Ay8){this.IO=BH;this.H4=A.abf(Alk,Xp);this.NZ=A.abf(
Ay9,Xp);this.DH=aOffset;this.Jx=Ay_;this.Oc=Byg;this.LZ=Aao;this.AgZ=Ay8;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqG;},_className:
"Core::DragEvent"};C.Y={BY:null,NI:null,Em:null,Br:A.wf,AU$:0,Space:0,AgX:0,Kr:function(
C0,aClip,aOffset,Cj,aBlend){},GetClipping:function(){var B;var Az=C.Eu.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var ApZ=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))ApZ=A.wC(ApZ,X.GetClipping());
Az=A.wC(Az,ApZ);}return Az;},Cs:function(Ru,U9){var B;var Ts=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U9&0x80000)===0x80000))this.Ab.Bi(this.GetClipping(
));C.Eu.Cs.call(this,Ru,U9);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Ru&0x80000)===
0x80000))&&!((Ts&0x80000)===0x80000))this.Ab.Bi(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlY=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKA=[
E[2]-E[0],E[3]-E[1]];var ApV=!A.aaX(AlY,AKA);var Fv=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fv,Cf)&&!ApV){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Anh(Fv,tmp);}X=X.Ah;}A.pe(this.
Em,this);}if((ApV&&(AlY[0]>0))&&(AlY[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
NK!==this))X.Ev=null;if(!X.Ev&&((X.PQ!==0x14)||!!this.AgX))X.AtV(Bd,this);}X=X.Ah;
}A.pe(this.Em,this);}C.Eu.H.call(this,E);if(!!this.Ab&&ApV){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JP],this);}}},Bga:function(){var B;if((!this.AgX||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A2c=((this.U&0x1000)===0x1000);for(;!!X&&!A2c;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A2c=true;if(((X.U&0x200)===
0x200))break;}if(A2c){this.U=this.U&~0x4000;this.Ab.Bgl();}},ApG:function(G){var
B;this.BY.Q=null;this.BY.Qw=null;this.BY=null;(B=this.NI)?B[1].call(B[0],this):null;
},Gc:function(E){var B;var Fv=A.abe(E,this.Br);if(A.aaX(Fv,Cf))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Anh(Fv,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bi(this.M);A.pe(
this.Em,this);},A_X:function(E){var B;if(E<0)E=0;if(E===this.AU$)return;this.AU$=
E;if(!!this.Ab&&!!this.AgX){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JP],this);}},Bn7:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgX){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JP],this);}},JZ:function(E){var B;if(E===this.AgX)return;
this.AgX=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JP],this);}},VC:function(AcW,E7){var AtC=this.Dc(0x1);var RA=this.M;var
Vm=A.abe(AtC.slice(0,2),RA.slice(0,2));var Mh=A.abe(AtC.slice(2,4),RA.slice(2,4)
);var Bq=Cf;if((Vm[0]>0)&&(Mh[0]>Vm[0]))Bq=[Vm[0],Bq[1]];else if((Vm[0]>0)&&(Mh[
0]>0))Bq=[Mh[0],Bq[1]];if((Mh[0]<0)&&(Vm[0]<Mh[0]))Bq=[Mh[0],Bq[1]];else if((Mh[
0]<0)&&(Vm[0]<0))Bq=[Vm[0],Bq[1]];if((Vm[1]>0)&&(Mh[1]>Vm[1]))Bq=[Bq[0],Vm[1]];else
if((Vm[1]>0)&&(Mh[1]>0))Bq=[Bq[0],Mh[1]];if((Mh[1]<0)&&(Vm[1]<Mh[1]))Bq=[Bq[0],Mh[
1]];else if((Mh[1]<0)&&(Vm[1]<0))Bq=[Bq[0],Vm[1]];if(A.aaX(Bq,Cf)){(E7)?E7[1].call(
E7[0],this):null;return;}if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.BY.
Qw=null;this.NI=null;}this.BY=AcW;if(!this.BY){this.Gc(A.abe(this.Br,Bq));(E7)?E7[
1].call(E7[0],this):null;}else{this.BY.As(false);this.BY.HO(1);this.BY.Q=[this,this.
Ant,this.Gc];this.BY.Cx=this.Br;this.BY.B3=A.abe(this.Br,Bq);this.BY.Qw=[this,this.
ApG];this.BY.Ae9(false);this.BY.As(true);this.NI=E7;}},HI:function(Ag,Ac0,AcW,E7
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UX);this.Bga();var Az=Ag.GetExtent();var Bd=this.M;var LS=A.lb(Az,Bd);if((!Ac0&&
!((LS[0]>=LS[2])||(LS[1]>=LS[3])))||(Ac0&&A.aaY(LS,Az))){(E7)?E7[1].call(E7[0],this
):null;return;}var Bq=Cf;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.
BY.Qw=null;this.NI=null;}this.BY=AcW;if(!this.BY){this.Gc(A.abe(this.Br,Bq));(E7
)?E7[1].call(E7[0],this):null;}else{this.BY.As(false);this.BY.HO(1);this.BY.Q=[this
,this.Ant,this.Gc];this.BY.Cx=this.Br;this.BY.B3=A.abe(this.Br,Bq);this.BY.Qw=[this
,this.ApG];this.BY.Ae9(false);this.BY.As(true);this.NI=E7;}},BjA:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AI;}return CB;
},TS:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dc:function(aFilter){var B;var X=this.Ah;var AE=BD;var I6=0x10000;this.Bga();if(((
aFilter&0x10000)===0x10000))I6=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!I6||!((B=I6)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Ant:function(){return this.Br;},_Init:
function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eu._Mark.call(this,D);if((B=this.BY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CL={
HB:null,BY:null,Ci:null,WW:null,NI:null,Em:null,Hm:null,Tp:-1,To:0,Jt:-1,Hs:0,AiG:
8,Ot:0,UB:0,AcI:A.wf,G5:-1,Br:0,Gt:-1,OW:0,GN:24,A0:0,Ln:null,NW:false,AtY:false
,AVg:function(Ix,Ol,Xo,Tj,Tk,Ah6,Pd,Rt,LD,LB,LC){throw new Error(Z9);},AqE:function(
Ix,Ah6,Pd,Rt,LD,LB,LC){throw new Error(UY);},AkI:function(Ix,Ol,Xo,Tj,Tk,Pd,Rt,LD
,LB,LC){throw new Error(Z_);},DispatchEvent:function(CM){var B;var result=null;if(((
this.Gt>=0)&&(this.Gt<this.A0))&&!this.AV){this.G5=this.Gt;this.Ci=(C.Ci.isPrototypeOf(
B=A._NewObject(this.Ln,0))?B:null);if(!!this.B_)this.B_.Ah=this.Ci;else this.B9=
this.Ci;this.Ci.AI=this.B_;this.B_=this.Ci;this.Ci.Ab=this;this.AcI=[(B=this.M)[
2]-B[0],this.GN];(B=this.Hm)?B[1].call(B[0],this):null;var B1=(C.P.isPrototypeOf(
B=this.Ci)?B:null);if(!!B1)result=B1.DispatchEvent(CM);else result=this.Ci.G3(CM
);if(!!this.Ci.AI)this.Ci.AI.Ah=null;else this.B9=null;this.B_=this.Ci.AI;this.Ci.
AI=null;this.Ci.Ab=null;this.Ci=null;}if(!result)result=C.P.DispatchEvent.call(this
,CM);return result;},Ai:function(Ae){var B;if(!this.Ln){A.pe(this.Em,this);return;
}this.AtY=true;var AAY=0;if(!this.NW)AAY=this.OW;var FU=this.Al7(-AAY-this.Br,1);
var G0=this.Al7(((((B=this.M)[3]-B[1])-AAY)-this.Br)-1,2);var CB=G0-FU;if(CB<1)CB=
1;var Aih=(CB/2)|0;var Aii=(CB/3)|0;if(!Aih)Aih=1;if(!Aii)Aii=1;if(FU<this.Hs){FU=
FU-Aih;G0=G0+Aii;}else if(G0>this.Jt){FU=FU-Aii;G0=G0+Aih;}else{FU=this.Hs;G0=this.
Jt;}if(!this.NW){if(FU>=this.A0){FU=0;G0=-1;}else if(G0<0){FU=0;G0=-1;}if(G0>=this.
A0)G0=this.A0-1;if(FU<0)FU=0;}else if(this.A0<=0){FU=0;G0=-1;}var AiW=this.Hs;var
AiX=this.Jt;var Apt=0;var Apu=-1;if(FU>AiW)AiW=FU;if(G0<AiX)AiX=G0;if(AiW<=AiX){
while((this.Jt<G0)&&(this.Hs<AiW)){this.AdE();this.Azy();}while((this.Hs>FU)&&(this.
Jt>AiX)){this.AA$();this.Azx();}}else{this.Jt=(this.Jt-this.Hs)+FU;this.Hs=FU;Apt=
this.Hs;Apu=this.Jt;}while(this.Hs<FU)this.AdE();while(this.Jt>G0)this.AA$();while(
this.Hs>FU)this.Azx();while(this.Jt<G0)this.Azy();var Aa=this.B9;var inx=this.Hs;
var pos=[0,(AAY+this.Br)+this.Jr(inx,0)];var BL=(B=this.M)[3]-B[1];var AlH=null;
var Bg$=(B=this.M)[2]-B[0];while(!!Aa){var IE=inx;if(this.NW){if(IE<0)IE=this.A0-(-
IE%this.A0);if(IE>0)IE=IE%this.A0;}var AdF=((IE>=this.To)&&(IE<=this.Tp))||((inx>=
Apt)&&(inx<=Apu));var Ao$=Aa.GetExtent();var Bq=A.abe(pos,Ao$.slice(0,2));if(AdF
)this.UB=this.GN;else this.UB=Ao$[3]-Ao$[1];var A2U=pos[1];var A2V=pos[1]+this.UB;
if(!A.aaX(Bq,Cf))Aa.Anh(Bq,true);if((AdF&&(A2U<BL))&&(A2V>0)){this.Ci=Aa;this.G5=
IE;this.AcI=[Bg$,this.UB];(B=this.Hm)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.UB];}inx=this.Hs;Aa=this.B9;pos=[0,(AAY+this.Br)+this.Jr(
inx,0)];while(!!Aa){var IE=inx;if(this.NW){if(IE<0)IE=this.A0-(-IE%this.A0);if(IE>
0)IE=IE%this.A0;}var AdF=((IE>=this.To)&&(IE<=this.Tp))||((inx>=Apt)&&(inx<=Apu)
);if(AdF)this.UB=this.GN;else this.UB=(B=Aa.GetExtent())[3]-B[1];var A2U=pos[1];
var A2V=pos[1]+this.UB;if(AdF&&!((A2U<BL)&&(A2V>0))){this.Ci=Aa;this.G5=IE;this.
AcI=[Bg$,this.UB];(B=this.Hm)?B[1].call(B[0],this):null;}if(((IE===this.Gt)&&this.
NW)&&!!AlH){var RA=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),RA))>A.aaH(A.lb(AlH.GetExtent(),RA)))AlH=Aa;}else if(IE===this.Gt)AlH=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.UB];}this.To=0;this.Tp=-1;this.Ci=null;this.G5=-
1;this.Ba(AlH);this.AtY=false;A.pe(this.Em,this);},QK:function(Ag,Gz,aFilter){return null;
},AqL:function(Ag,aFilter){return null;},TS:function(Ag,aFilter){return null;},AC1:
function(Ag,aFilter){return null;},Dc:function(aFilter){return BD;},NX:function(
KG,FQ,LD,LB,LC){throw new Error(Xa);},AhA:function(Ag,Ka){throw new Error(Z$);},
ZH:function(Ag){throw new Error(Aaa);},J5:function(Ag,Qh){throw new Error(UZ);},
HP:function(Ag){throw new Error(Xb);},AMc:function(Ag,Ka){throw new Error(O_);},
J:function(Ag,Qh){throw new Error(Aab);},Jr:function(G$,A07){return G$*this.GN;}
,Al7:function(Fe,A07){return(Fe/this.GN)|0;},AA$:function(){var Aa=this.B_;if(!Aa
)return null;if(Aa===this.AV)this.Ba(null);this.Jt=this.Jt-1;if(!!Aa.AI)Aa.AI.Ah=
null;else this.B9=null;this.B_=Aa.AI;Aa.AI=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<
this.AiG){if(!!this.HB)this.HB.AI=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Ot++;}return Aa;
},Azy:function(){var B;var Aa=this.HB;var Ado=this.Ln;var AdI=++this.Jt;if(this.
NW){if(AdI<0)AdI=this.A0-(-AdI%this.A0);if(AdI>0)AdI=AdI%this.A0;}while(!!Aa&&(((
B=Aa)?B.__proto__:null)!==Ado))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!
Aa.AI)Aa.AI.Ah=Aa.Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ot--;
}else{Aa=(C.Ci.isPrototypeOf(B=A._NewObject(Ado,0))?B:null);Aa.A1(0x1D);if(!!this.
Ot)this.AiG++;}this.UB=this.GN;this.G5=AdI;this.AcI=[(B=this.M)[2]-B[0],this.UB];
this.Ci=Aa;(B=this.Hm)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.
B_)this.B_.Ah=Aa;Aa.Ab=this;Aa.AI=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdI===
this.Gt)this.Ba(Aa);return Aa;},AdE:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Ba(null);this.Hs=this.Hs+1;if(!!Aa.Ah)Aa.Ah.AI=null;else this.
B_=null;this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiG){if(!
!this.HB)this.HB.AI=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Ot++;}return Aa;},Azx:function(
){var B;var Aa=this.HB;var Ado=this.Ln;var M_=--this.Hs;if(this.NW){if(M_<0)M_=this.
A0-(-M_%this.A0);if(M_>0)M_=M_%this.A0;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==
Ado))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.AI.Ah=Aa.Ah;if(this.
HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ot--;}else{Aa=(C.Ci.isPrototypeOf(
B=A._NewObject(Ado,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.AiG++;}this.UB=this.
GN;this.G5=M_;this.AcI=[(B=this.M)[2]-B[0],this.UB];this.Ci=Aa;(B=this.Hm)?B[1].
call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B9)this.B9.AI=Aa;Aa.Ab=this;
Aa.Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(M_===this.Gt)this.Ba(Aa);return Aa;
},ApG:function(G){var B;this.BY.Q=null;this.BY.Qw=null;this.BY=null;(B=this.NI)?
B[1].call(B[0],this):null;},BBv:function(G){this.Gc(this.WW.DH[1]);},BBw:function(
G){var B;if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.BY.Qw=null;this.BY=
null;}if(!this.NW){var AE=this.AqS(0,this.A0-1);var Agi=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OW);if(AE[0]>Agi[0])AE=[].concat(Agi[0],AE.slice(1,4));if(AE[1]>Agi[
1])AE=A.abP(AE,Agi[1]);var Fv=AE[1]-this.M[1];var A2$=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2$>0)A2$=0;this.WW.DH=[0,this.Br];this.WW.Gq=[0,(this.Br+A2$)-Fv];this.
WW.F$=[0,this.Br-Fv];}else{var Fv=32000-(32000%this.GN);this.WW.DH=[0,this.Br];this.
WW.Gq=[0,this.Br-Fv];this.WW.F$=[0,this.Br+Fv];}},ATg:function(E){var B;if(this.
NW===E)return;this.NW=E;while(!!this.AdE());this.Am();this.Bi([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw4:function(E){if(E===this.WW)return;if(!!E&&!!E.At$){A.ab5(
"%s%*%s",Oi,E,Rn);throw new Error(Xc);}if(!!this.WW){this.WW.AKN=null;this.WW.At$=
null;}this.WW=E;if(!!E){E.AKN=[this,this.BBw];E.At$=[this,this.BBv];}},Gc:function(
E){var B;if(this.NW&&(this.A0>0)){var HD=this.Jr(this.A0,3);if(E<0)E=HD-(-E%HD);
if(E>0)E=E%HD;if(E>0)E=E-HD;}if(E===this.Br)return;this.Br=E;this.Am();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(E){if(E<0)E=-1;if(E===this.Gt)return;
this.Gt=E;this.Am();},A_K:function(E){var B;if(E<0)E=0;if(E===this.OW)return;this.
OW=E;if(!this.NW){this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae6:function(
E){var B;if(E<1)E=1;if(E===this.GN)return;this.GN=E;while(!!this.AdE());this.Am(
);this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JC:function(E){var B;if(E<0)E=0;
if(E===this.A0)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NW){if(
E>this.A0){AE=[].concat(AE.slice(0,3),(this.OW+this.Br)+this.Jr(E,3));AE=A.abP(AE
,(this.OW+this.Br)+this.Jr(this.A0,3));}else{AE=A.abP(AE,(this.OW+this.Br)+this.
Jr(E,3));AE=[].concat(AE.slice(0,3),(this.OW+this.Br)+this.Jr(this.A0,3));}}else
while(!!this.AdE());this.A0=E;this.Am();this.Bi(AE);},N8:function(E){var B;if(E===
this.Ln)return;this.Ln=E;while(!!this.AdE());this.HB=null;this.Ot=0;this.Am();this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjO:function(G$){if(this.AtY)return null;
if((G$<0)||(G$>=this.A0))return null;if(!this.NW){if((G$<this.Hs)||(G$>this.Jt))
return null;var X=this.B9;while(G$>this.Hs){X=X.Ah;G$=G$-1;}return X;}else{var M_=
this.Hs;if(M_<0)M_=this.A0-(-M_%this.A0);if(M_>0)M_=M_%this.A0;var X=this.B9;while(
!!X){if((M_%this.A0)===G$)return X;X=X.Ah;M_=M_+1;}return null;}},ABT:function(AcW
,E7){var B;if(this.NW){(E7)?E7[1].call(E7[0],this):null;return;}var AKf=this.Br;
var BdJ=((((B=this.M)[3]-B[1])-this.Br)-this.OW)-this.Jr(this.A0,3);var Bq=0;if(
AKf>0)Bq=-AKf;else if(BdJ>0)Bq=BdJ;if((Bq>0)&&(Bq>-AKf))Bq=-AKf;if(!Bq){(E7)?E7[
1].call(E7[0],this):null;return;}if(!!this.BY){this.BY.As(false);this.BY.Q=null;
this.BY.Qw=null;this.NI=null;}this.BY=AcW;if(!this.BY){this.Gc(this.Br+Bq);(E7)?
E7[1].call(E7[0],this):null;}else{this.BY.As(false);this.BY.HO(1);this.BY.Q=[this
,this.Ant,this.Gc];this.BY.Cx=this.Br;this.BY.B3=this.Br+Bq;this.BY.Qw=[this,this.
ApG];this.BY.Ae9(false);this.BY.As(true);this.NI=E7;}},HI:function(G$,Ac0,AcW,E7
){var B;if((G$<0)||(G$>=this.A0))return;var Az=this.AqS(G$,G$);var Bd=this.M;var
LS=A.lb(Az,Bd);if((!Ac0&&!((LS[0]>=LS[2])||(LS[1]>=LS[3])))||(Ac0&&A.aaY(LS,Az))
){(E7)?E7[1].call(E7[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BY){this.BY.As(false);this.BY.Q=null;
this.BY.Qw=null;this.NI=null;}this.BY=AcW;if(!this.BY){this.Gc(this.Br-Bq);(E7)?
E7[1].call(E7[0],this):null;}else{this.BY.As(false);this.BY.HO(1);this.BY.Q=[this
,this.Ant,this.Gc];this.BY.Cx=this.Br;this.BY.B3=this.Br-Bq;this.BY.Qw=[this,this.
ApG];this.BY.Ae9(false);this.BY.As(true);this.NI=E7;}},BjF:function(){return BD;
},AOT:function(){if((this.OW<=0)||this.NW)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OW);return AE;},A6_:function(Fe
){if(((this.A0<=0)||(Fe[0]<this.M[0]))||(Fe[0]>=this.M[2]))return-1;Fe=A.abe(Fe,
this.M.slice(0,2));if(!this.NW){var Aa=(Fe[1]-this.Br)-this.OW;if(Aa>0)Aa=this.Al7(
Aa,0);if((Aa<0)||(Aa>=this.A0))return-1;return Aa;}var Aa=Fe[1]-this.Br;if(Aa>0)
Aa=this.Al7(Aa,0);if(Aa<0)Aa=this.Al7(Aa,0)-1;if(Aa<0)Aa=this.A0-(-Aa%this.A0);if(
Aa>0)Aa=Aa%this.A0;return Aa;},AqS:function(J$,Ma){if(J$<0)J$=0;if(Ma>=this.A0)Ma=
this.A0-1;if(J$>Ma)return BD;var AE=this.M;var Bq=this.Br;if(this.NW){var HD=this.
Jr(this.A0,3);if(Bq<0)Bq=HD-(-Bq%HD);if(Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;}else Bq=
Bq+this.OW;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jr(Ma+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jr(J$,0));return AE;},AbH:function(J$,Ma){var B;if(J$<0)J$=0;if(J$>Ma
)return;if(this.To>this.Tp){this.To=J$;this.Tp=Ma;}else{if(J$<this.To)this.To=J$;
if(Ma>this.Tp)this.Tp=Ma;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NW){
AE=A.abP(AE,(this.OW+this.Br)+this.Jr(J$,0));AE=[].concat(AE.slice(0,3),(this.OW+
this.Br)+this.Jr(Ma+1,0));}else if((this.Jr(this.A0-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HD=this.Jr(this.A0,3);if(Bq<0)Bq=HD-(-Bq%HD);if(
Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;AE=A.abP(AE,Bq+this.Jr(J$,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jr(Ma+1,0));}this.Am();this.Bi(AE);},Ant:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CL;this.H(Xd);
this.Ln=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ci)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WW)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.DB={HB:null
,BY:null,Ci:null,NI:null,Hm:null,Tp:-1,To:0,Jt:-1,Hs:0,AiG:8,Ot:0,SS:0,AcI:A.wf,
G5:-1,Br:0,Gt:-1,Wg:24,A0:0,Ln:null,AtY:false,AVg:function(Ix,Ol,Xo,Tj,Tk,Ah6,Pd
,Rt,LD,LB,LC){throw new Error(Tf);},AqE:function(Ix,Ah6,Pd,Rt,LD,LB,LC){throw new
Error(Xe);},AkI:function(Ix,Ol,Xo,Tj,Tk,Pd,Rt,LD,LB,LC){throw new Error(Aac);},DispatchEvent:
function(CM){var B;var result=null;if(((this.Gt>=0)&&(this.Gt<this.A0))&&!this.AV
){this.G5=this.Gt;this.Ci=(C.Ci.isPrototypeOf(B=A._NewObject(this.Ln,0))?B:null);
if(!!this.B_)this.B_.Ah=this.Ci;else this.B9=this.Ci;this.Ci.AI=this.B_;this.B_=
this.Ci;this.Ci.Ab=this;this.AcI=[this.SS,(B=this.M)[3]-B[1]];(B=this.Hm)?B[1].call(
B[0],this):null;var B1=(C.P.isPrototypeOf(B=this.Ci)?B:null);if(!!B1)result=B1.DispatchEvent(
CM);else result=this.Ci.G3(CM);if(!!this.Ci.AI)this.Ci.AI.Ah=null;else this.B9=null;
this.B_=this.Ci.AI;this.Ci.AI=null;this.Ci.Ab=null;this.Ci=null;}if(!result)result=
C.P.DispatchEvent.call(this,CM);return result;},Ai:function(Ae){var B;if(!this.Ln
)return;this.AtY=true;var FU=this.Al7(0-this.Br,1);var G0=this.Al7((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=G0-FU;if(CB<1)CB=1;var Aih=(CB/2)|0;var Aii=(CB/3)|
0;if(!Aih)Aih=1;if(!Aii)Aii=1;if(FU<this.Hs){FU=FU-Aih;G0=G0+Aii;}else if(G0>this.
Jt){FU=FU-Aii;G0=G0+Aih;}else{FU=this.Hs;G0=this.Jt;}if(FU>=this.A0){FU=0;G0=-1;
}else if(G0<0){FU=0;G0=-1;}if(G0>=this.A0)G0=this.A0-1;if(FU<0)FU=0;var AiW=this.
Hs;var AiX=this.Jt;var Apt=0;var Apu=-1;if(FU>AiW)AiW=FU;if(G0<AiX)AiX=G0;if(AiW<=
AiX){while((this.Jt<G0)&&(this.Hs<AiW)){this.AdE();this.Azy();}while((this.Hs>FU
)&&(this.Jt>AiX)){this.AA$();this.Azx();}}else{this.Jt=(this.Jt-this.Hs)+FU;this.
Hs=FU;Apt=this.Hs;Apu=this.Jt;}while(this.Hs<FU)this.AdE();while(this.Jt>G0)this.
AA$();while(this.Hs>FU)this.Azx();while(this.Jt<G0)this.Azy();var Aa=this.B9;var
inx=this.Hs;var pos=[this.Br+this.Jr(inx,0),0];var BZ=(B=this.M)[2]-B[0];var AlH=
null;var BgY=(B=this.M)[3]-B[1];while(!!Aa){var IE=inx;var AdF=((IE>=this.To)&&(
IE<=this.Tp))||((inx>=Apt)&&(inx<=Apu));var Ao$=Aa.GetExtent();var Bq=A.abe(pos,
Ao$.slice(0,2));if(AdF)this.SS=this.Wg;else this.SS=Ao$[2]-Ao$[0];var A2S=pos[0];
var A2T=pos[0]+this.SS;if(!A.aaX(Bq,Cf))Aa.Anh(Bq,true);if((AdF&&(A2S<BZ))&&(A2T>
0)){this.Ci=Aa;this.G5=IE;this.AcI=[this.SS,BgY];(B=this.Hm)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SS,pos[1]];}inx=this.Hs;Aa=this.B9;pos=[
this.Br+this.Jr(inx,0),0];while(!!Aa){var IE=inx;var AdF=((IE>=this.To)&&(IE<=this.
Tp))||((inx>=Apt)&&(inx<=Apu));if(AdF)this.SS=this.Wg;else this.SS=(B=Aa.GetExtent(
))[2]-B[0];var A2S=pos[0];var A2T=pos[0]+this.SS;if(AdF&&!((A2S<BZ)&&(A2T>0))){this.
Ci=Aa;this.G5=IE;this.AcI=[this.SS,BgY];(B=this.Hm)?B[1].call(B[0],this):null;}if(
IE===this.Gt)AlH=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SS,pos[1]];}this.To=0;this.
Tp=-1;this.Ci=null;this.G5=-1;this.Ba(AlH);this.AtY=false;},QK:function(Ag,Gz,aFilter
){return null;},AqL:function(Ag,aFilter){return null;},TS:function(Ag,aFilter){return null;
},AC1:function(Ag,aFilter){return null;},Dc:function(aFilter){return BD;},NX:function(
KG,FQ,LD,LB,LC){throw new Error(Xf);},AhA:function(Ag,Ka){throw new Error(Xg);},
ZH:function(Ag){throw new Error(Xh);},J5:function(Ag,Qh){throw new Error(Xi);},HP:
function(Ag){throw new Error(Xj);},AMc:function(Ag,Ka){throw new Error(Aad);},J:
function(Ag,Qh){throw new Error(Tg);},Jr:function(G$,A07){return G$*this.Wg;},Al7:
function(Fe,A07){return(Fe/this.Wg)|0;},AA$:function(){var Aa=this.B_;if(!Aa)return null;
if(Aa===this.AV)this.Ba(null);this.Jt=this.Jt-1;if(!!Aa.AI)Aa.AI.Ah=null;else this.
B9=null;this.B_=Aa.AI;Aa.AI=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiG){if(!
!this.HB)this.HB.AI=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Ot++;}return Aa;},Azy:function(
){var B;var Aa=this.HB;var Ado=this.Ln;var AdI=++this.Jt;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Ado))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.
AI.Ah=Aa.Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ot--;}else{
Aa=(C.Ci.isPrototypeOf(B=A._NewObject(Ado,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.
AiG++;}this.SS=this.Wg;this.G5=AdI;this.AcI=[this.SS,(B=this.M)[3]-B[1]];this.Ci=
Aa;(B=this.Hm)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B_)this.
B_.Ah=Aa;Aa.Ab=this;Aa.AI=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdI===this.
Gt)this.Ba(Aa);return Aa;},AdE:function(){var Aa=this.B9;if(!Aa)return null;if(Aa===
this.AV)this.Ba(null);this.Hs=this.Hs+1;if(!!Aa.Ah)Aa.Ah.AI=null;else this.B_=null;
this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiG){if(!!this.HB
)this.HB.AI=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Ot++;}return Aa;},Azx:function(){var
B;var Aa=this.HB;var Ado=this.Ln;var M_=--this.Hs;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ado))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.AI.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ot--;}else{Aa=(C.Ci.
isPrototypeOf(B=A._NewObject(Ado,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.AiG++;
}this.SS=this.Wg;this.G5=M_;this.AcI=[this.SS,(B=this.M)[3]-B[1]];this.Ci=Aa;(B=
this.Hm)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B9)this.B9.
AI=Aa;Aa.Ab=this;Aa.Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(M_===this.Gt
)this.Ba(Aa);return Aa;},ApG:function(G){var B;this.BY.Q=null;this.BY.Qw=null;this.
BY=null;(B=this.NI)?B[1].call(B[0],this):null;},Gc:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(
E){if(E<0)E=-1;if(E===this.Gt)return;this.Gt=E;this.Am();},AFw:function(E){var B;
if(E<1)E=1;if(E===this.Wg)return;this.Wg=E;while(!!this.AdE());this.Am();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JC:function(E){var B;if(E<0)E=0;if(E===this.
A0)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.A0){AE=[].concat(this.
Br+this.Jr(this.A0,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jr(E,3));}else{AE=
A.abN(AE,this.Br+this.Jr(this.A0,3));AE=[].concat(this.Br+this.Jr(E,3),AE.slice(
1,4));}this.A0=E;this.Am();this.Bi(AE);},N8:function(E){var B;if(E===this.Ln)return;
this.Ln=E;while(!!this.AdE());this.HB=null;this.Ot=0;this.Am();this.Bi([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BpJ:function(Byh,Byi){if(!this.BY)return;if(Byh)this.Gc(
this.BY.B3);var A4P=this.NI;this.BY.As(false);this.BY.Q=null;this.BY.Qw=null;this.
NI=null;this.BY=null;if(Byi)(A4P)?A4P[1].call(A4P[0],this):null;},Bkd:function(){
return!!this.BY;},HI:function(G$,Ac0,AcW,E7){var B;if((G$<0)||(G$>=this.A0))return;
var Az=this.AqS(G$,G$);var Bd=this.M;var LS=A.lb(Az,Bd);if((!Ac0&&!((LS[0]>=LS[2
])||(LS[1]>=LS[3])))||(Ac0&&A.aaY(LS,Az))){(E7)?E7[1].call(E7[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BY){this.BY.As(false);this.BY.Q=null;this.BY.Qw=null;this.NI=null;}this.BY=
AcW;if(!this.BY){this.Gc(this.Br-Bq);(E7)?E7[1].call(E7[0],this):null;}else{this.
BY.As(false);this.BY.HO(1);this.BY.Q=[this,this.Ant,this.Gc];this.BY.Cx=this.Br;
this.BY.B3=this.Br-Bq;this.BY.Qw=[this,this.ApG];this.BY.Ae9(false);this.BY.As(true
);this.NI=E7;}},AqS:function(J$,Ma){if(J$<0)J$=0;if(Ma>=this.A0)Ma=this.A0-1;if(
J$>Ma)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jr(Ma+1
,0));AE=[].concat((AE[0]+Bq)+this.Jr(J$,0),AE.slice(1,4));return AE;},AbH:function(
J$,Ma){var B;if(J$<0)J$=0;if(J$>Ma)return;if(this.To>this.Tp){this.To=J$;this.Tp=
Ma;}else{if(J$<this.To)this.To=J$;if(Ma>this.Tp)this.Tp=Ma;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jr(J$,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jr(Ma+1,0));this.Am();this.Bi(AE);},Ant:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.DB;this.H(Xd);
this.Ln=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ci)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASu:null,AEY:null,Av6:null,D1:null,
Ls:null,BG:null,ALa:0,Bp:0,IO:0,Bs:0,Oc:0,Jx:0,DH:A.wf,NZ:A.wf,H4:A.wf,Axt:8,Afe:
0,A73:1,Down:false,YM:false,NQ:false,A2j:false,AAr:0,Kr:function(C0,aClip,aOffset
,Cj,aBlend){},G3:function(CM){var B;var BO=(C.Aed.isPrototypeOf(CM)?CM:null);var
D4=(C.AqG.isPrototypeOf(CM)?CM:null);var AKp=this.YM;var AaL;var Vj;var ABu;var M7;
var AzQ;if(!BO&&!D4)return null;AaL=(!!BO&&BO.Down)&&!BO.Jx;Vj=(!!BO&&BO.Down)&&(
BO.Jx>0);ABu=(!!BO&&BO.Down)&&(BO.Jx>this.AAr);M7=!!BO&&!BO.Down;AzQ=!!D4;if(AaL
)this.AAr=((B=(BO.NQ?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afe&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var IC=(C.AuW.isPrototypeOf(CM)?CM:null);if(((
!!IC&&IC.Down)&&(IC.AxL!==this))&&A.wa(this.GetExtent(),this.Ab.A7Y(IC.LZ))){this.
ALa=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaL){var ApA=0;var Adj;this.Bp=
this.Bp|(1<<BO.IO);for(Adj=this.Bp&4095;Adj>0;Adj=Adj>>1)if(!!(Adj&1))ApA=ApA+1;
if(ApA===1)this.Bp=(this.Bp|16777216)|(4096<<BO.IO);}if(M7&&(this.Bp<16777216)){
var IH=this.Ip();var JK=null;if(!!IH){var A4G=(!!this.AI?this.AI:this.Ab);var A19=(
!!IH.JL?IH.JL.C1:null);JK=IH.Yn(A.abh(Aae,BO.LZ),BO.IO,BO.Oc,A19,A4G,0x0);}if(!!
JK){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Ci.G3(A._NewObject(C.Aed,0).
InitializeDown(O,BO.H4,BO.Oc,Cf,true,BO.LZ));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JK.Ci.G3(A._NewObject(C.Aed,0).InitializeUp(O,BO.H4,BO.H4,0,BO.Oc,Cf,false,BO.
LZ,BO.LZ));}}if(M7)this.Bp=(this.Bp&~(1<<BO.IO))|33554432;if(ABu&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(M7&&BO.NQ)this.Bp=this.Bp|67108864;if(M7&&!(this.Bp&
4095))this.ALa=0x0;if(M7&&!(this.Bp&16777215))this.Bp=0;if(Vj&&(this.Bp>=67108864
)){var IH=this.Ip();if(!!IH)IH.AUE(null,null,this,this.ALa);}if((Vj&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Vj=false;M7=true;}if(!!BO&&!(this.Bp&(4096<<BO.
IO)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IO)))return this;if(M7&&!(this.Bp&
16777216))return this;if(((AaL||AzQ)||Vj)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(M7)this.Bp=this.Bp&3758100479;if(M7&&!(this.Bp&16777215))this.
Bp=0;if(!!BO){this.Down=AaL||Vj;this.YM=this.ARn(BO.H4);this.NZ=BO.NZ;this.H4=BO.
H4;this.DH=Cf;this.Jx=BO.Jx;this.Oc=BO.Oc;this.NQ=BO.NQ;this.IO=BO.IO;this.Bs=BO.
Bs;if(BO.Down&&!BO.Jx)AKp=false;}if(!!D4){this.Down=true;this.YM=this.ARn(D4.H4);
this.NZ=D4.NZ;this.H4=D4.H4;this.DH=D4.DH;this.Jx=D4.Jx;this.Oc=D4.Oc;this.IO=D4.
IO;this.NQ=false;this.Bs=D4.Bs;}var A2d=this.Down;if(!!D4)(B=this.ASu)?B[1].call(
B[0],this):null;if((!!BO&&this.Down)&&!this.Jx)(B=this.BG)?B[1].call(B[0],this):
null;if((!!BO&&this.Down)&&(this.Jx>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YM)&&!AKp){this.A2j=true;(B=this.Av6)?B[1].call(B[0],this):null;
}if(this.A2j&&(((A2d&&!this.YM)&&AKp)||((!A2d&&this.YM)&&AKp))){this.A2j=false;(
B=this.AEY)?B[1].call(B[0],this):null;}if(!!BO&&!A2d)(B=this.Ls)?B[1].call(B[0],
this):null;if(!!this.Afe){var AdD=0x0;if(((((this.Afe&0x10)===0x10)&&!!BO)&&BO.Down
)&&(BO.Jx>=1000))AdD=0x10;if((((this.Afe&0x1)===0x1)&&!!D4)&&((D4.LZ[1]-D4.AgZ[1
])<=-this.Axt))AdD=0x1;if((((this.Afe&0x2)===0x2)&&!!D4)&&((D4.LZ[1]-D4.AgZ[1])>=
this.Axt))AdD=0x2;if((((this.Afe&0x4)===0x4)&&!!D4)&&((D4.LZ[0]-D4.AgZ[0])<=-this.
Axt))AdD=0x4;if((((this.Afe&0x8)===0x8)&&!!D4)&&((D4.LZ[0]-D4.AgZ[0])>=this.Axt)
)AdD=0x8;if(!!AdD){var IH=this.Ip();if(!!IH){this.ALa=AdD;IH.AUE(null,this,this,
AdD);}}}return this;},Yn:function(Db,BH,Om,Aan,Ac3,Ac2){var B;if(!!Aan&&(Aan!==this
))return null;if((Om<1)||(Om>this.A73))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BH)))return null;if(!!(Ac2&this.Afe))return null;
if(this.BjS()){var Az=A.lb(Db,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qk=A.aaI(Db);var Fv=Cf;if(Qk[0]<Az[0])Fv=[Az[0]-Qk[0],Fv[1]];if(Qk[0]>=
Az[2])Fv=[(Az[2]-Qk[0])-1,Fv[1]];if(Qk[1]<Az[1])Fv=[Fv[0],Az[1]-Qk[1]];if(Qk[1]>=
Az[3])Fv=[Fv[0],(Az[3]-Qk[1])-1];return A._NewObject(C.AuX,0).Initialize(this,Fv
);}}else{var HC=A.abi(9,A.wf,null);var O;HC.Set(0,A.aaI(Db));HC.Set(1,HC.Get(0));
HC.Set(2,HC.Get(0));HC.Set(3,HC.Get(0));HC.Set(4,HC.Get(0));HC.Set(1,[Db[0],HC.Get(
1)[1]]);HC.Set(2,[HC.Get(2)[0],Db[1]]);HC.Set(3,[Db[2],HC.Get(3)[1]]);HC.Set(4,[
HC.Get(4)[0],Db[3]]);HC.Set(5,Db.slice(0,2));HC.Set(6,[Db[2],Db[1]]);HC.Set(7,[Db[
0],Db[3]]);HC.Set(8,Db.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARn(HC.Get(O)))return A.
_NewObject(C.AuX,0).Initialize(this,A.abe(HC.Get(O),HC.Get(0)));}return null;},BnZ:
function(E){if(E<1)E=1;this.Axt=E;},AFF:function(E){if(E<1)E=1;this.A73=E;},As:function(
E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},_Init:function(aArg){
C.ZF._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZF._Mark.call(this,D);if((B=this.ASu)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AEY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av6
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Ls)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.Ib={timer:null,AKN:null,At$:null,AGe:null,Zp:null,SP:null,Bp:0,AJq:0,Adm:5000
,ApU:0,AKo:A.wf,Ao8:0,AfP:0,EY:0,Amh:0,Aun:0,Ao7:0,AfO:0,EX:0,Amg:0,Ame:0,NZ:A.wf
,A6j:A.wf,F$:A.wf,Gq:A.wf,DH:A.wf,WY:A.wf,A6X:0.5,A$C:true,AGV:true,ZP:false,XM:
false,XN:false,AoR:false,AAr:0,Kr:function(C0,aClip,aOffset,Cj,aBlend){},G3:function(
CM){var B;var BO=(C.Aed.isPrototypeOf(CM)?CM:null);var D4=(C.AqG.isPrototypeOf(CM
)?CM:null);var IC=(C.AuW.isPrototypeOf(CM)?CM:null);var AaL;var Vj;var ABu;var M7;
var AzQ;AaL=(!!BO&&BO.Down)&&!BO.Jx;Vj=(!!BO&&BO.Down)&&(BO.Jx>0);ABu=(!!BO&&BO.
Down)&&(BO.Jx>this.AAr);M7=!!BO&&!BO.Down;AzQ=!!D4;if(AaL)this.AAr=((B=(BO.NQ?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaL){var ApA=0;var Adj;this.Bp=this.Bp|(1<<BO.
IO);for(Adj=this.Bp&4095;Adj>0;Adj=Adj>>1)if(!!(Adj&1))ApA=ApA+1;if(ApA===1)this.
Bp=(this.Bp|16777216)|(4096<<BO.IO);}if(M7&&(this.Bp<16777216)){var IH=this.Ip();
var JK=null;if(!!IH){var A4G=(!!this.AI?this.AI:this.Ab);var A19=(!!IH.JL?IH.JL.
C1:null);JK=IH.Yn(A.abh(Aae,BO.LZ),BO.IO,BO.Oc,A19,A4G,0x0);}if(!!JK){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Ci.G3(A._NewObject(C.Aed,0).InitializeDown(
O,BO.H4,BO.Oc,Cf,true,BO.LZ));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Ci.G3(A.
_NewObject(C.Aed,0).InitializeUp(O,BO.H4,BO.H4,0,BO.Oc,Cf,false,BO.LZ,BO.LZ));}}
if(M7)this.Bp=(this.Bp&~(1<<BO.IO))|33554432;if(ABu&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M7&&BO.NQ)this.Bp=this.Bp|67108864;if(M7&&!(this.Bp&16777215
))this.Bp=0;if(Vj&&(this.Bp>=67108864)){var IH=this.Ip();if(!!IH)IH.AUE(null,null
,this,0x0);}if((Vj&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vj=false;M7=true;
}if(!!BO&&!(this.Bp&(4096<<BO.IO)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IO))
)return this;if(M7&&!(this.Bp&16777216))return this;if(((AaL||AzQ)||Vj)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(M7)this.Bp=this.Bp&3758100479;
if(M7&&!(this.Bp&16777215))this.Bp=0;if(!!IC&&(IC.AxL===this))return null;if((!!
IC&&IC.Down)&&(this.AoR||!this.ZP))return null;if((!!IC&&IC.Down)&&!A.wa(this.M,
this.Ab.A7Y(IC.LZ)))return null;if((!!IC&&!IC.Down)&&(!this.AoR||(this.AJq!==IC.
IO)))return null;if((!BO&&!D4)&&!IC)return null;if(!!BO){this.AoR=AaL||Vj;this.AJq=
BO.IO;this.NZ=BO.NZ;}if(!!D4)this.AJq=D4.IO;if(!!IC){this.AoR=IC.Down;this.AJq=IC.
IO;}if(!!IC&&IC.Down){this.A4H();this.EX=(((IC.Bs-this.Ame)*0.001)*this.AfO)+this.
EX;this.EY=(((IC.Bs-this.Aun)*0.001)*this.AfP)+this.EY;if(this.XM)this.EX=0;if(this.
XN)this.EY=0;this.AfO=0;this.AfP=0;this.XM=false;this.XN=false;this.AKo=this.DH;
this.ApU=IC.Bs;return this;}if(AaL){this.A4H();this.EX=(((BO.Bs-this.Ame)*0.001)
*this.AfO)+this.EX;this.EY=(((BO.Bs-this.Aun)*0.001)*this.AfP)+this.EY;if(this.XM||
!this.ZP)this.EX=0;if(this.XN||!this.ZP)this.EY=0;this.AfO=0;this.AfP=0;this.XM=
false;this.XN=false;if(!this.ZP){this.ZP=true;(B=this.SP)?B[1].call(B[0],this):null;(
B=this.AKN)?B[1].call(B[0],this):null;}this.AKo=this.DH;this.ApU=BO.Bs;}if(!!D4){
var Hb=A.abe(D4.H4,D4.NZ);var CD=this.DH;if(this.AGV)CD=[this.AKo[0]+Hb[0],CD[1]
];CD=[CD[0],this.AKo[1]+Hb[1]];if(this.A$C){if(CD[0]<this.Gq[0])CD=[this.Gq[0]+(((
CD[0]-this.Gq[0])/2)|0),CD[1]];else if(CD[0]>this.F$[0])CD=[this.F$[0]+(((CD[0]-
this.F$[0])/2)|0),CD[1]];if(CD[1]<this.Gq[1])CD=[CD[0],this.Gq[1]+(((CD[1]-this.
Gq[1])/2)|0)];else if(CD[1]>this.F$[1])CD=[CD[0],this.F$[1]+(((CD[1]-this.F$[1])
/2)|0)];}else{if(CD[0]<this.Gq[0])CD=[this.Gq[0],CD[1]];else if(CD[0]>this.F$[0]
)CD=[this.F$[0],CD[1]];if(CD[1]<this.Gq[1])CD=[CD[0],this.Gq[1]];else if(CD[1]>this.
F$[1])CD=[CD[0],this.F$[1]];}if(!A.aaX(CD,this.DH)){this.A6j=A.abe(CD,this.DH);this.
DH=CD;(B=this.At$)?B[1].call(B[0],this):null;(B=this.AGe)?B[1].call(B[0],this):null;
}}if((!!IC&&!IC.Down)&&((IC.Bs-this.ApU)>=200)){this.EX=0;this.EY=0;}if(Vj&&((BO.
Bs-this.ApU)>=200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApU)){var Hb=D4.DH;
var Bea=1000/(D4.Bs-this.ApU);var AiJ=0;var AiK;if(this.AGV)AiJ=Hb[0]*Bea;AiK=Hb[
1]*Bea;if((AiJ*this.EX)<0)this.EX=0;if((AiK*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiJ)*0.5;this.EY=(this.EY+AiK)*0.5;this.ApU=D4.Bs;}if(!M7&&!IC)return this;if(!!
BO&&BO.NQ){this.EX=0;this.EY=0;}if((this.DH[0]<=this.Gq[0])||(this.DH[0]>=this.F$[
0]))this.EX=0;else if(!this.EX){var ER=this.DH[0];var Fg=this.Gq[0];var EI=this.
F$[0];if(ER<Fg)EI=this.Gq[0];else if(ER>EI)Fg=this.F$[0];else if(this.WY[0]<=1){
Fg=ER;EI=ER;}else{var Adq=(EI-ER)%this.WY[0];EI=(ER-this.WY[0])+Adq;Fg=ER+Adq;if(
EI<this.Gq[0])EI=this.Gq[0];if(Fg>this.F$[0])Fg=this.F$[0];}if((Fg-ER)<=(ER-EI))
ER=Fg;else ER=EI;if(ER!==this.DH[0]){var Jq=ER-this.DH[0];if(Jq>0)this.EX=Math.sqrt((
Jq*2)*this.Adm)+20;if(Jq<0)this.EX=-Math.sqrt((-Jq*2)*this.Adm)-20;this.AfO=(400-(
this.EX*this.EX))/(2*Jq);this.Ao7=ER;}}else{var BCt=this.EX*this.EX;var Jq=BCt/(
2*this.Adm);var ER=this.DH[0];if(this.EX>0)ER=ER+(Jq|0);if(this.EX<0)ER=ER-(Jq|0
);if(ER>this.F$[0])ER=this.F$[0];else if(ER<this.Gq[0])ER=this.Gq[0];var BgT=ER;
var Fg=this.Gq[0];var EI=this.F$[0];if(ER<Fg)EI=this.Gq[0];else if(ER>EI)Fg=this.
F$[0];else if(this.WY[0]<=1){Fg=ER;EI=ER;}else{var Adq=(EI-ER)%this.WY[0];EI=(ER-
this.WY[0])+Adq;Fg=ER+Adq;if(EI<this.Gq[0])EI=this.Gq[0];if(Fg>this.F$[0])Fg=this.
F$[0];}if(this.EX>0){if(EI<=this.DH[0])ER=Fg;else if((ER-EI)<(Fg-ER))ER=EI;else ER=
Fg;}else if(Fg>=this.DH[0])ER=EI;else if((ER-EI)>(Fg-ER))ER=Fg;else ER=EI;if(ER!==
this.DH[0]){Jq=ER-this.DH[0];if(ER!==BgT){var Ai5=ER-BgT;if(Ai5>0)this.EX=this.EX+
Math.sqrt((Ai5*2)*this.Adm);if(Ai5<0)this.EX=this.EX-Math.sqrt((-Ai5*2)*this.Adm
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfO=(400-(
this.EX*this.EX))/(2*Jq);this.Ao7=ER;}else this.EX=0;}if((this.DH[1]<=this.Gq[1]
)||(this.DH[1]>=this.F$[1]))this.EY=0;else if(!this.EY){var ES=this.DH[1];var Fg=
this.Gq[1];var EI=this.F$[1];if(ES<Fg)EI=this.Gq[1];else if(ES>EI)Fg=this.F$[1];
else if(this.WY[1]<=1){Fg=ES;EI=ES;}else{var Adq=(EI-ES)%this.WY[1];EI=(ES-this.
WY[1])+Adq;Fg=ES+Adq;if(EI<this.Gq[1])EI=this.Gq[1];if(Fg>this.F$[1])Fg=this.F$[
1];}if((Fg-ES)<=(ES-EI))ES=Fg;else ES=EI;if(ES!==this.DH[1]){var Jq=ES-this.DH[1
];if(Jq>0)this.EY=Math.sqrt((Jq*2)*this.Adm)+20;if(Jq<0)this.EY=-Math.sqrt((-Jq*
2)*this.Adm)-20;this.AfP=(400-(this.EY*this.EY))/(2*Jq);this.Ao8=ES;}}else{var BCu=
this.EY*this.EY;var Jq=BCu/(2*this.Adm);var ES=this.DH[1];if(this.EY>0)ES=ES+(Jq|
0);if(this.EY<0)ES=ES-(Jq|0);if(ES>this.F$[1])ES=this.F$[1];else if(ES<this.Gq[1
])ES=this.Gq[1];var BgU=ES;var Fg=this.Gq[1];var EI=this.F$[1];if(ES<Fg)EI=this.
Gq[1];else if(ES>EI)Fg=this.F$[1];else if(this.WY[1]<=1){Fg=ES;EI=ES;}else{var Adq=(
EI-ES)%this.WY[1];EI=(ES-this.WY[1])+Adq;Fg=ES+Adq;if(EI<this.Gq[1])EI=this.Gq[1
];if(Fg>this.F$[1])Fg=this.F$[1];}if(this.EY>0){if(EI<=this.DH[1])ES=Fg;else if((
ES-EI)<(Fg-ES))ES=EI;else ES=Fg;}else if(Fg>=this.DH[1])ES=EI;else if((ES-EI)>(Fg-
ES))ES=Fg;else ES=EI;if(ES!==this.DH[1]){Jq=ES-this.DH[1];if(ES!==BgU){var Ai5=ES-
BgU;if(Ai5>0)this.EY=this.EY+Math.sqrt((Ai5*2)*this.Adm);if(Ai5<0)this.EY=this.EY-
Math.sqrt((-Ai5*2)*this.Adm);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfP=(400-(this.EY*this.EY))/(2*Jq);this.Ao8=ES;}else this.EY=
0;}if(!!BO)this.Ame=BO.Bs;if(!!IC)this.Ame=IC.Bs;this.Aun=this.Ame;this.Amg=this.
DH[0];this.Amh=this.DH[1];this.BCv();return this;},Yn:function(Db,BH,Om,Aan,Ac3,
Ac2){var B;if(!!Aan&&(Aan!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BH)))return null;if(!this.AGV&&!!(Ac2&0xC))
return null;var Az=A.lb(Db,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qk=
A.aaI(Db);var Fv=Cf;if(Qk[0]<Az[0])Fv=[Az[0]-Qk[0],Fv[1]];if(Qk[0]>=Az[2])Fv=[(Az[
2]-Qk[0])-1,Fv[1]];if(Qk[1]<Az[1])Fv=[Fv[0],Az[1]-Qk[1]];if(Qk[1]>=Az[3])Fv=[Fv[
0],(Az[3]-Qk[1])-1];return A._NewObject(C.AuX,0).Initialize(this,Fv);}return null;
},A4H:function(){if(!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;
}},BCv:function(){this.timer=A._GetAutoObject(A.acl.Aeh);A.zV([this,this.Ml],this.
timer,0);},Ml:function(G){var B;if(!this.timer)return;var Aus=(this.timer.Bs-this.
Ame)*0.001;var Aut=(this.timer.Bs-this.Aun)*0.001;var BCG=Aus*Aus;var BCH=Aut*Aut;
var AiJ=(this.AfO*Aus)+this.EX;var AiK=(this.AfP*Aut)+this.EY;var CD=[((((this.AfO
*0.5)*BCG)+(this.EX*Aus))+this.Amg)|0,((((this.AfP*0.5)*BCH)+(this.EY*Aut))+this.
Amh)|0];if(this.XM&&(Aus>=0.5)){CD=[this.Ao7,CD[1]];this.EX=0;this.AfO=0;this.Amg=
CD[0];this.XM=false;}else if(this.XM){var LO=1-Math.pow(1-(Aus/0.5),5);CD=[(this.
Amg+((this.Ao7-this.Amg)*LO))|0,CD[1]];}if(this.XN&&(Aut>=0.5)){CD=[CD[0],this.Ao8
];this.EY=0;this.AfP=0;this.Amh=CD[1];this.XN=false;}else if(this.XN){var LO=1-Math.
pow(1-(Aut/0.5),5);CD=[CD[0],(this.Amh+((this.Ao8-this.Amh)*LO))|0];}if(((this.EX>
0)&&(AiJ<0))||((this.EX<0)&&(AiJ>0))){AiJ=0;CD=[this.DH[0],CD[1]];}if(((this.EY>
0)&&(AiK<0))||((this.EY<0)&&(AiK>0))){AiK=0;CD=[CD[0],this.DH[1]];}if(!this.XM&&(
CD[0]<this.Gq[0])){this.Amg=CD[0];this.Ao7=this.Gq[0];this.Ame=this.timer.Bs;this.
XM=true;}else if(!this.XM&&(CD[0]>this.F$[0])){this.Amg=CD[0];this.Ao7=this.F$[0
];this.Ame=this.timer.Bs;this.XM=true;}if(!this.XN&&(CD[1]<this.Gq[1])){this.Amh=
CD[1];this.Ao8=this.Gq[1];this.Aun=this.timer.Bs;this.XN=true;}else if(!this.XN&&(
CD[1]>this.F$[1])){this.Amh=CD[1];this.Ao8=this.F$[1];this.Aun=this.timer.Bs;this.
XN=true;}if(((!this.XM&&!!this.EX)&&(AiJ>-20))&&(AiJ<20)){CD=[this.Ao7,CD[1]];this.
EX=0;this.AfO=0;this.Amg=CD[0];}if(((!this.XN&&!!this.EY)&&(AiK>-20))&&(AiK<20)){
CD=[CD[0],this.Ao8];this.EY=0;this.AfP=0;this.Amh=CD[1];}if(!A.aaX(CD,this.DH)){
this.A6j=A.abe(CD,this.DH);this.DH=CD;(B=this.At$)?B[1].call(B[0],this):null;(B=
this.AGe)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XM)&&!this.
XN){this.A4H();this.ZP=false;(B=this.Zp)?B[1].call(B[0],this):null;}},ATN:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WY=E;},ATi:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6X)return;this.A6X=E;if(E<(1e-007))E=1e-007;this.Adm=
E*10000;},_Init:function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Ib;this.
U=0x10011B;},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKN)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AGe
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zp)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BF={Ah:null,Ls:null,BG:null,D1:null,ApP:
0,Bs:0,A$x:0,Filter:148,CO:0,Dy:0,Bw:true,Down:false,Acj:false,Mx:false,Init:function(
aArg){var B;var C1=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C1)throw new Error(AfB
);this.Ah=C1.AKs;C1.AKs=this;},G3:function(CM){var B;if(!!CM&&CM.Bj_(this.Filter
)){this.Down=CM.Down;this.CO=CM.CO;this.Dy=CM.Dy;this.Bs=CM.Bs;this.Mx=false;if(
CM.Down){this.A$x=this.ApP;this.Acj=this.ApP>0;if(this.Acj)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BG)?B[1].call(B[0],this):null;if(!this.Mx)this.ApP=this.
ApP+1;return!this.Mx;}if(!CM.Down){this.Acj=this.ApP>1;this.A$x=this.ApP-1;this.
ApP=0;(B=this.Ls)?B[1].call(B[0],this):null;return!this.Mx;}}return false;},_Init:
function(aArg){this.__proto__=C.BF;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ls)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuX={Ci:null,AuZ:0,DH:A.wf,Initialize:function(Ag,aOffset){this.Ci=Ag;this.DH=
aOffset;this.AuZ=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuX;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ci)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7_={Ah:null,C1:null,_Init:
function(aArg){this.__proto__=C.A7_;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Arl={NK:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Arl;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.NK)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AEj={AiR:A.wf,AiQ:A.wf,_Init:function(aArg
){C.Arl._Init.call(this,aArg);this.__proto__=C.AEj;},_className:"Core::LayoutLineContext"
};C.AEk={AA2:A.wf,AA1:A.wf,AiR:A.wf,AiQ:A.wf,_Init:function(aArg){C.Arl._Init.call(
this,aArg);this.__proto__=C.AEk;},_className:"Core::LayoutQuadContext"};C.AN0={C1:
null,Ah:null,RE:null,RN:null,Mj:null,ApL:null,_Init:function(aArg){this.__proto__=
C.AN0;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RE)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mj)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApL)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVl={FS:null,B_:null,B9:null,Bei:false,
By8:function(){if(!this.FS)return;var Po=this.FS;this.FS.Pk=null;this.FS=null;A.
pe([this,this.A3P],this);Po.A8z(this);},BAW:function(G){if(!!this.FS)return;if(!
this.B9)return;this.FS=this.B9;this.B9=this.B9.Ah;if(!!this.B9)this.B9.AI=null;else
this.B_=null;this.FS.Ah=null;this.Bei=true;this.FS.SP(this);this.Bei=false;},BBh:
function(G){A.pe([this,this.BAW],this);},BBg:function(G){A.pe([this,this.BBh],this
);},A3P:function(G){A.pe([this,this.BBg],this);},Bh6:function(Jn){if(!Jn||!Jn.Pk
)return;if(Jn.Pk!==this)throw new Error(Aaf);var Bho=false;if(this.FS===Jn){this.
FS=null;Bho=true;A.pe([this,this.A3P],this);}else{if(!!Jn.Ah)Jn.Ah.AI=Jn.AI;else
this.B_=Jn.AI;if(!!Jn.AI)Jn.AI.Ah=Jn.Ah;else this.B9=Jn.Ah;Jn.AI=null;Jn.Ah=null;
}Jn.Pk=null;if(Bho)Jn.A8y(this);},A$F:function(Jn,A1C){if(!Jn)return;if(!!Jn.Pk)
throw new Error(Xk);Jn.Pk=this;if(A1C){Jn.Ah=this.B9;if(!!this.B9)this.B9.AI=Jn;
else this.B_=Jn;this.B9=Jn;}else{Jn.AI=this.B_;if(!!this.B_)this.B_.Ah=Jn;else this.
B9=Jn;this.B_=Jn;}if(!this.FS)A.pe([this,this.A3P],this);},_Init:function(aArg){
this.__proto__=C.AVl;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkV={Pk:null,AI:null,Ah:
null,A8z:function(Atv){},A8y:function(Atv){},SP:function(Atv){this.AmA();},Mw:function(
){if(!!this.Pk&&(this.Pk.FS===this))this.Pk.By8();},AmA:function(){if(!!this.Pk)
this.Pk.Bh6(this);},ARj:function(){return!!this.Pk&&(this.Pk.FS===this);},_Init:
function(aArg){this.__proto__=C.AkV;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pk)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVj={Ar:null,Aup:
null,SP:function(Atv){this.Aup.Ar=this.Ar;A.we(this.Aup,0);A.pe([this,this.BAT],
this);},BAT:function(G){this.Aup.Ar=null;this.Aup=null;this.Ar=null;this.Mw();},
_Init:function(aArg){C.AkV._Init.call(this,aArg);this.__proto__=C.AVj;},_Mark:function(
D){var B;C.AkV._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aup)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxK={_Init:function(){C.AVl._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahz={resource:null,Lg:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahz;this.Init(aArg);A.h7++;},_Done:function(){this.Lg();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={MK:null,timer:null,Bs:0,Period:1000,VK:0,Bw:false,Lg:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKV:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PX:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKV(this.VK,E);},WI:function(E){if(E<0)E=0;if(E===
this.VK)return;this.VK=E;if(this.Bw)this.AKV(E,this.Period);},As:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKV(this.VK,this.Period);else this.AKV(0,
0);this.Bs=this.Avp();},Avp:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avp();if(!this.
Period)this.As(false);(B=this.MK)?B[1].call(B[0],this):null;},AxI:function(G){this.
As(false);},StartTimer:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lg();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MK)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUO:0,AvZ:0
,AjQ:0,GK:0,Hk:0,Year:0,BdQ:function(AfL,A05){if(A05)switch(AfL){case 1:return A.
aci.Bkh;case 2:return A.aci.Bi$;case 3:return A.aci.BkA;case 4:return A.aci.BhK;
case 5:return A.aci.BkE;case 6:return A.aci.Bkk;case 7:return A.aci.Bkj;case 8:return A.
aci.BhM;case 9:return A.aci.Bpj;case 10:return A.aci.BkY;case 11:return A.aci.BkX;
case 12:return A.aci.Bit;default:return A.jV;}else switch(AfL){case 1:return A.aci.
AEd;case 2:return A.aci.ACY;case 3:return A.aci.AEp;case 4:return A.aci.ABZ;case
5:return A.aci.AEr;case 6:return A.aci.AEf;case 7:return A.aci.AEe;case 8:return A.
aci.AB6;case 9:return A.aci.AGJ;case 10:return A.aci.AEE;case 11:return A.aci.AEC;
case 12:return A.aci.ACJ;default:return A.jV;}},BdO:function(Bck,A05){if(A05)switch(
Bck){case 1:return A.aci.BkJ;case 2:return A.aci.BqA;case 3:return A.aci.Brh;case
4:return A.aci.Bqn;case 5:return A.aci.Bjm;case 6:return A.aci.Bpb;case 0:return A.
aci.Bqa;default:return A.jV;}else switch(Bck){case 1:return A.aci.BkI;case 2:return A.
aci.Bqz;case 3:return A.aci.Brg;case 4:return A.aci.Bqm;case 5:return A.aci.Bjl;
case 6:return A.aci.Bpa;case 0:return A.aci.Bp$;default:return A.jV;}},BdN:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JY:function(){var d=this.GK;var K8=this.Hk;var Dh=this.Year-((
K8<=2)?1:0);var AzR=(((Dh>=0)?Dh:Dh-399)/400)|0;var Amo=Dh-(AzR*400);var Vh=(((((
153*(K8+((K8>2)?-3:9)))+2)/5)|0)+d)-1;var Ao4=(((Amo*365)+((Amo/4)|0))-((Amo/100
)|0))+Vh;var Qm=((AzR*146097)+Ao4)-719468;return(((Qm*86400)+(this.AjQ*3600))+(this.
AvZ*60))+this.AUO;},AF0:function(E){var B;E+=62162035200;if(E<0)E=0;var Vv=Math.
trunc(E/86400)|0;var AzR=(((Vv>=0)?Vv:Vv-146096)/146097)|0;var Ao4=Vv-(AzR*146097
);var Amo=((((Ao4-((Ao4/1460)|0))+((Ao4/36524)|0))-((Ao4/146096)|0))/365)|0;var Dh=
Amo+(AzR*400);var Vh=Ao4-(((365*Amo)+((Amo/4)|0))-((Amo/100)|0));var A3c=(((5*Vh
)+2)/153)|0;var d=(Vh-((((153*A3c)+2)/5)|0))+1;var K8=A3c+((A3c<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dh+((
K8<=2)?1:0);this.Uv(K8);this.Lu(d);this.AnA(BL+((BL<0)?24:0));this.AnD(O+((O<0)?
60:0));this.AnG(s+((s<0)?60:0));},Zq:function(){if(this.Hk===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hk===4)||(this.Hk===6))||(this.Hk===9))||(this.Hk===11))return 30;else return 31;
},Bl_:function(){var B;var Vh=this.Ab1()-1;var AtM=(6+this.Awa())%7;var Ao6=((371+
AtM)-Vh)%7;if(this.Hk===12){var d=this.GK;if((d===31)&&(AtM<3))return 0;if((d===
30)&&(AtM<2))return 0;if((d===29)&&(AtM<1))return 0;}if(Ao6<=3)Vh+=Ao6;else Vh-=(
7-Ao6);if(Vh<0){var d=this.GK;var K8=this.Hk;this.Year--;this.Lu(31);this.Uv(12);
Vh=this.Ab1()-1;AtM=(6+this.Awa())%7;Ao6=((371+AtM)-Vh)%7;if(Ao6<=3)Vh+=Ao6;else
Vh-=Ao6;this.Year++;this.Lu(d);this.Uv(K8);}return(Vh/7)|0;},Ab1:function(){var B;
var d=this.GK;var K8=this.Hk;var Dh=this.Year;var Af8=((!!!(Dh%4)&&(!!(Dh%100)||
!!!(Dh%400)))?1:0);switch(K8){case 2:d+=31;break;case 3:d+=(59+Af8);break;case 4:
d+=(90+Af8);break;case 5:d+=(120+Af8);break;case 6:d+=(151+Af8);break;case 7:d+=(
181+Af8);break;case 8:d+=(212+Af8);break;case 9:d+=(243+Af8);break;case 10:d+=(273+
Af8);break;case 11:d+=(304+Af8);break;case 12:d+=(334+Af8);break;default:;}return d;
},Awa:function(){var B;var d=this.GK;var K8=this.Hk+((this.Hk>2)?-2:10);var Dh=this.
Year-((this.Hk<=2)?1:0);var B4=(Dh/100)|0;Dh%=100;d+=((((((((26*K8)-2)/10)|0)+Dh
)+((Dh/4)|0))+((B4/4)|0))-(2*B4));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnG:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUO=E;},AnD:function(E){if(E<0)E=0;if(E>
59)E=59;this.AvZ=E;},AnA:function(E){if(E<0)E=0;if(E>23)E=23;this.AjQ=E;},Lu:function(
E){if(E<1)E=1;if(E>31)E=31;this.GK=E;},Uv:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hk=E;},Format:function(Iy){var result=A.jV;var inx=0;while(!!(Iy.charCodeAt(inx)||
0))if((Iy.charCodeAt(inx)||0)===0x25){var AaE=1;inx=inx+1;if((Iy.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaE=0;}switch(Iy.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GK,2*AaE,10);break;case 0x48:result=result+A.abl(this.AjQ,2*AaE,10);break;
case 0x49:if(!(this.AjQ%12))result=result+Aag;else result=result+A.abl(this.AjQ%
12,2*AaE,10);break;case 0x6D:result=result+A.abl(this.Hk,2*AaE,10);break;case 0x4D:
result=result+A.abl(this.AvZ,2*AaE,10);break;case 0x70:if(this.AjQ<12)result=result+
A.aci.Bhu;else result=result+A.aci.Boy;break;case 0x53:result=result+A.abl(this.
AUO,2*AaE,10);break;case 0x77:result=result+A.abl(this.Awa(),AaE,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaE,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaE,10);break;case 0x25:result=result+Xl;break;case 0x6A:result=result+
A.abl(this.Ab1(),3*AaE,10);break;case 0x57:result=result+A.abl(this.Bl_(),2*AaE,
10);break;case 0x61:result=result+this.BdO(this.Awa(),true);break;case 0x41:result=
result+this.BdO(this.Awa(),false);break;case 0x62:result=result+this.BdQ(this.Hk
,true);break;case 0x42:result=result+this.BdQ(this.Hk,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iy.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac4,AfL,Bxp,BxF,BxW,Byc){this.Year=Ac4;this.
Uv(AfL);this.Lu(Bxp);this.AnA(BxF);this.AnD(BxW);this.AnG(Byc);return this;},Initialize:
function(Ah7){this.AF0(Ah7);return this;},Biy:function(Ah7){if(!Ah7)return A._NewObject(
C.An3,0).Initialize(this.JY());return A._NewObject(C.An3,0).Initialize(this.JY()-
Ah7.JY());},BpN:function(Aza){if(!Aza)return this;return A._NewObject(C.Bs,0).Initialize(
this.JY()-Aza.JY());},J:function(Aza){if(!Aza)return this;return A._NewObject(C.
Bs,0).Initialize(this.JY()+Aza.JY());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An3={AGG:0,AEu:0,ADI:0,Kp:0,JY:function(
){return(((this.Kp*86400)+(this.ADI*3600))+(this.AEu*60))+this.AGG;},AF0:function(
E){var AK9=1;this.Kp=Math.trunc(E/86400)|0;if(E<0){E=-E;AK9=-1;}this.ADI=AK9*(Math.
trunc(E/3600)%24|0);this.AEu=AK9*(Math.trunc(E/60)%60|0);this.AGG=AK9*(E%60|0);}
,Initialize2:function(Bxq,BxG,BxX,Byf){this.Kp=Bxq;this.ADI=BxG;this.AEu=BxX;this.
AGG=Byf;return this;},Initialize:function(Ah7){this.AF0(Ah7);return this;},_Init:
function(aArg){this.__proto__=C.An3;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$5={Ar:null,Pk:null,Trigger:function(Aoz,A1C){var Po=A._NewObject(C.AVj,0);
Po.Aup=this;Po.Ar=Aoz;this.Pk.A$F(Po,A1C);},_Init:function(aArg){this.__proto__=
C.A$5;this.Pk=A._GetAutoObject(C.AxK);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$6={JS:null,Event:null,ASv:null,At4:function(G){var B;if(
!this.Event)return;this.JS=this.Event.Ar;(B=this.ASv)?B[1].call(B[0],this):null;
this.JS=null;},BmL:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.At4],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.At4],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$6;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGH={Ds:0x1,BDp:0x2,BEy:0x4,BGv:0x8,Bw:0x10,Ia:0x20
,BEz:0x40,BFa:0x80,BEu:0x100,BEQ:0x200,BEi:0x400,BFP:0x800,Bl:0x1000,BGE:0x2000,
BFx:0x4000,BFy:0x8000,Abl:0x10000,BFw:0x20000,BF2:0x40000,BD$:0x80000,BFG:0x100000
,BD5:0x200000};C.PQ={BFR:0x1,BFS:0x2,BDl:0x4,BDm:0x8,BDn:0x10,BDk:0x20};C.AgX={None:
0,BGr:1,BDI:2,BEV:3,BFV:4,BGs:5,BGt:6,BDJ:7,BDK:8,BEX:9,BEW:10,BFX:11,BFW:12};C.
Au1={None:0,BGp:1,Left:2,BDG:3,ZU:4,A5R:5,BGq:6,Right:7,BDH:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BFT={BGN:0x1,BGK:0x2,BGL:0x4,BGM:
0x8,BEZ:0x10,BEB:0x20};
C._Init=function(){C.Akd.__proto__=C.Ci;C.ZF.__proto__=C.Ci;C.Eu.__proto__=C.Ci;C.
P.__proto__=C.Eu;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARC.__proto__=
C.Event;C.AuW.__proto__=C.Event;C.Aed.__proto__=C.Event;C.AqG.__proto__=C.Event;
C.Y.__proto__=C.Eu;C.CL.__proto__=C.P;C.DB.__proto__=C.P;C.Bn.__proto__=C.ZF;C.Ib.
__proto__=C.Eu;C.AEj.__proto__=C.Arl;C.AEk.__proto__=C.Arl;C.AVj.__proto__=C.AkV;
};C._ReInit=function(){var B;if((B=C.AxK._this))B._ReInit(),C.AxK._ReInit.call(B
);};C.DI=function(D){var B;if((B=C.AxK._this)&&(B._cycle!=D))B._Done(C.AxK._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */