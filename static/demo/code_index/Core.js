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
var Cg=[0,0];var BF=[0,0,0,0];var E7="The view does not belong to this group";var
Hr=[1000,740];var I1="The dialog component is already presented";var Iw="The dialog component is actually not presented";
var O$="No fader to perform the fade-in/out operation";var Qa="Trying to use the same fader twice";
var Qb="Trying to fade-in/out a group which belongs to another owner";var CJ="No view to restack";
var Fd="View is not in this group";var LD="Sibling view does not belong to the group";
var Qc="No view to remove";var J$="No view to add";var Oj="View already in a group";
var Qd="Recursive invalidate during active update cycle.";var MU=[-8,-8,9,9];var
Ti="No group to end the modal state.";var UZ="The group is not modal.";var Aad="No group to obtain the modal state.";
var Xe="The group serves already as the \'virtual keyboard\'.";var Ix="The group is already modal.";
var U0="View is not in the same group or it is not embedded within the Outline "+
"Box";var Aae="The method SwitchToDialog() is not available in Core::VerticalList.";
var U1="The method DismissDialog() is not available in Core::VerticalList.";var Aaf=
"The method PresentDialog() is not available in Core::VerticalList.";var Xf="The method FadeGroup() is not available in Core::VerticalList.";
var Aag="The method RestackBehind() is not available in Core::VerticalList.";var
Aah="The method RestackTop() is not available in Core::VerticalList.";var U2="The method Restack() is not available in Core::VerticalList.";
var Xg="The method Remove() is not available in Core::VerticalList.";var Pa="The method AddBehind() is not available in Core::VerticalList.";
var Aai="The method Add() is not available in Core::VerticalList.";var Ol="The Slide Touch Handler:";
var Rp="is already connected with a view.";var Xh="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Xi=[0,0,170,120];var U3="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Xj="The method DismissDialog() is not available in Core::HorizontalList.";var
Aaj="The method PresentDialog() is not available in Core::HorizontalList.";var Xk=
"The method FadeGroup() is not available in Core::HorizontalList.";var U4="The method RestackBehind() is not available in Core::HorizontalList.";
var Xl="The method RestackTop() is not available in Core::HorizontalList.";var Xm=
"The method Restack() is not available in Core::HorizontalList.";var Xn="The method Remove() is not available in Core::HorizontalList.";
var Rq="The method AddBehind() is not available in Core::HorizontalList.";var Tj=
"The method Add() is not available in Core::HorizontalList.";var Aak=[0,0,1,1];var
AfH="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aal="Trying to cancel a task not belonging to this queue!";var Xo="Trying to enqueue a task twice!";
var Aam="12";var Aan="%";
C.Cj={Ah:null,AI:null,Ab:null,Ew:null,U:0x103,J9:0,PT:0x14,At3:function(BK,Ah9){}
,Ar$:function(E){if(this.J9===E)return;this.J9=E;if(!!this.Ab){var Ai7=this.Ah;var
Hc=0;while(!!Ai7&&(E>Ai7.J9)){Ai7=Ai7.Ah;Hc=Hc+1;}Ai7=this.AI;while(!!Ai7&&(E<Ai7.
J9)){Ai7=Ai7.AI;Hc=Hc-1;}if(!!Hc)this.Ab.Iu(this,Hc);}},A1:function(E){var B;var
Hc=E^this.PT;if(!Hc)return;this.PT=E;if(!!this.Ew&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JT],this);this.Ab.Bi([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ew&&((this.U&0x400)===0x400)){this.Ew.NN.U=this.Ew.
NN.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JT],this);}},Ip:function(
){var B2=this.Ab;while(!!B2){var II=(C.Root.isPrototypeOf(B2)?B2:null);if(!!II)return II;
B2=B2.Ab;}return null;},Ks:function(C2,aClip,aOffset,Ck,aBlend){},GetClipping:function(
){return this.GetExtent();},G4:function(CN){return null;},Ys:function(Dc,BI,Oo,Aau
,Ac$,Ac_){return null;},AuO:function(Dc){return Dc;},AuX:function(BK,MZ){return Cg;
},Ann:function(aOffset,Atz){},GetExtent:function(){return BF;},Ct:function(Rx,Vc
){var B;if(((this.U&0x200)===0x200))Rx=Rx&~0x400;var A3r=(this.U&~Vc)|Rx;var XG=
A3r^this.U;this.U=A3r;if(!!this.Ab&&!!(XG&0x14)){var BdT=((this.U&0x14)===0x14);
if(BdT&&!this.Ab.AV)this.Ab.Ba(this);if(!BdT&&(this.Ab.AV===this))this.Ab.Ba(this.
Ab.AC3(this,0x14));}if(!!this.Ab&&!!(XG&0x403))this.Ab.Bi(this.GetClipping());if(((
!!this.Ew&&!!this.Ab)&&((A3r&0x400)===0x400))&&((XG&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JT],this);}if(!!this.Ab&&((XG&0x400
)===0x400)){this.Ew=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JT],this);}if(((((XG&0x100000)===0x100000)&&((Vc&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Ct(0x0,0x10);if(((((
XG&0x100000)===0x100000)&&((Rx&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Ct(0x10,0x0);if(((((XG&0x200000)===0x200000)&&((Vc&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Ct(
0x10,0x0);if((((((XG&0x200000)===0x200000)&&((Rx&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hd.C3!==this)))
)this.Ct(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cj;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ew)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akh={EE:A.wf,Eu:A.wf
,At3:function(BK,Ah9){var Ar=A._NewObject(C.AEl,0);this.Ew=null;Ar.extent=this.getExtent(
);Ar.Bd=BK;Ar.NN=Ah9;Ar.AiU=this.Eu;Ar.AiV=this.EE;this.Ew=Ar;},AuX:function(BK,
MZ){var B;var EX=this.PT;var Ar=(C.AEl.isPrototypeOf(B=this.Ew)?B:null);var x1=Ar.
extent[0];var y1=Ar.extent[1];var x2=Ar.extent[2];var y2=Ar.extent[3];var Kg=[BK[
2]-BK[0],BK[3]-BK[1]];var B0=x2-x1;var BM=y2-y1;var tmp;if(!MZ){var NQ=[(B=Ar.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Bd[0];y1=y1-Ar.Bd[1];if(NQ[0]!==Kg[0]){var HV=((EX&
0x4)===0x4);var HW=((EX&0x8)===0x8);var Qz=((EX&0x1)===0x1);if(!HV&&(Qz||!HW))x1=((
x1*Kg[0])/NQ[0])|0;if(!HW&&(Qz||!HV)){x2=x2-Ar.Bd[0];x2=((x2*Kg[0])/NQ[0])|0;x2=
x2-Kg[0];}else x2=x2-Ar.Bd[2];x1=x1+BK[0];x2=x2+BK[2];if(!Qz){if(HV&&!HW)x2=x1+B0;
else if(!HV&&HW)x1=x2-B0;else{x1=x1+((((x2-x1)-B0)/2)|0);x2=x1+B0;}}}else{x2=x2-
Ar.Bd[2];x1=x1+BK[0];x2=x2+BK[2];}if(NQ[1]!==Kg[1]){var HX=((EX&0x10)===0x10);var
HU=((EX&0x20)===0x20);var QA=((EX&0x2)===0x2);if(!HX&&(QA||!HU))y1=((y1*Kg[1])/NQ[
1])|0;if(!HU&&(QA||!HX)){y2=y2-Ar.Bd[1];y2=((y2*Kg[1])/NQ[1])|0;y2=y2-Kg[1];}else
y2=y2-Ar.Bd[3];y1=y1+BK[1];y2=y2+BK[3];if(!QA){if(HX&&!HU)y2=y1+BM;else if(!HX&&
HU)y1=y2-BM;else{y1=y1+((((y2-y1)-BM)/2)|0);y2=y1+BM;}}}else{y2=y2-Ar.Bd[3];y1=y1+
BK[1];y2=y2+BK[3];}}else{switch(MZ){case 3:{x1=BK[0];x2=x1+B0;}break;case 4:{x2=
BK[2];x1=x2-B0;}break;case 1:{y1=BK[1];y2=y1+BM;}break;case 2:{y2=BK[3];y1=y2-BM;
}break;default:;}if((MZ===3)||(MZ===4)){var HX=((EX&0x10)===0x10);var HU=((EX&0x20
)===0x20);var QA=((EX&0x2)===0x2);if(QA){y1=BK[1];y2=BK[3];}else if(HX&&!HU){y1=
BK[1];y2=y1+BM;}else if(HU&&!HX){y2=BK[3];y1=y2-BM;}else{y1=BK[1]+((((BK[3]-BK[1
])-BM)/2)|0);y2=y1+BM;}}if((MZ===1)||(MZ===2)){var HV=((EX&0x4)===0x4);var HW=((
EX&0x8)===0x8);var Qz=((EX&0x1)===0x1);if(Qz){x1=BK[0];x2=BK[2];}else if(HV&&!HW
){x1=BK[0];x2=x1+B0;}else if(HW&&!HV){x2=BK[2];x1=x2-B0;}else{x1=BK[0]+((((BK[2]-
BK[0])-B0)/2)|0);x2=x1+B0;}}}Ar.isEmpty=(x1>=x2)||(y1>=y2);B0=x2-x1;BM=y2-y1;if(
Ar.AiV[0]<Ar.AiU[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(Ar.AiV[1]<Ar.AiU[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Eu=[x1,y1];this.EE=[x2,y2];}else{this.DO([x1,y1]);this.DE([x2,y2]);this.
Ew=Ar;}return[B0,BM];},Ann:function(aOffset,Atz){if(Atz){this.Eu=A.abf(this.Eu,aOffset
);this.EE=A.abf(this.EE,aOffset);}else{this.DO(A.abf(this.Eu,aOffset));this.DE(A.
abf(this.EE,aOffset));}},GetExtent:function(){if(!!this.Ew&&this.Ew.isEmpty)return BF;
return this.getExtent();},getExtent:function(){var x1=this.Eu[0];var y1=this.Eu[
1];var x2=this.EE[0];var y2=this.EE[1];var B0=x2-x1;var BM=y2-y1;var tmp;if(B0<0
)B0=-B0;if(BM<0)BM=-BM;if(B0>=BM){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BM>=B0){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DE:function(E){var B;if(A.aaX(E,this.
EE))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Ew=null;this.EE=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JT],this);}},DO:function(
E){var B;if(A.aaX(E,this.Eu))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.GetClipping());this.Ew=null;this.Eu=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JT],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.
Akh;},_className:"Core::LineView"};C.ZL={KE:A.wf,MP:A.wf,EE:A.wf,Eu:A.wf,At3:function(
BK,Ah9){var Ar=A._NewObject(C.AEm,0);this.Ew=null;Ar.extent=this.GetExtent();Ar.
Bd=BK;Ar.NN=Ah9;Ar.AiU=this.Eu;Ar.AiV=this.EE;Ar.AA3=this.MP;Ar.AA4=this.KE;this.
Ew=Ar;},AuX:function(BK,MZ){var B;var EX=this.PT;var Ar=(C.AEm.isPrototypeOf(B=this.
Ew)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.extent[2];var y2=Ar.
extent[3];var Kg=[BK[2]-BK[0],BK[3]-BK[1]];var B0=x2-x1;var BM=y2-y1;if(!MZ){var
NQ=[(B=Ar.Bd)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Bd[0];y1=y1-Ar.Bd[1];if(NQ[0]!==Kg[0]){
var HV=((EX&0x4)===0x4);var HW=((EX&0x8)===0x8);var Qz=((EX&0x1)===0x1);if(!HV&&(
Qz||!HW))x1=((x1*Kg[0])/NQ[0])|0;if(!HW&&(Qz||!HV)){x2=x2-Ar.Bd[0];x2=((x2*Kg[0]
)/NQ[0])|0;x2=x2-Kg[0];}else x2=x2-Ar.Bd[2];x1=x1+BK[0];x2=x2+BK[2];if(!Qz){if(HV&&
!HW)x2=x1+B0;else if(!HV&&HW)x1=x2-B0;else{x1=x1+((((x2-x1)-B0)/2)|0);x2=x1+B0;}
}}else{x2=x2-Ar.Bd[2];x1=x1+BK[0];x2=x2+BK[2];}if(NQ[1]!==Kg[1]){var HX=((EX&0x10
)===0x10);var HU=((EX&0x20)===0x20);var QA=((EX&0x2)===0x2);if(!HX&&(QA||!HU))y1=((
y1*Kg[1])/NQ[1])|0;if(!HU&&(QA||!HX)){y2=y2-Ar.Bd[1];y2=((y2*Kg[1])/NQ[1])|0;y2=
y2-Kg[1];}else y2=y2-Ar.Bd[3];y1=y1+BK[1];y2=y2+BK[3];if(!QA){if(HX&&!HU)y2=y1+BM;
else if(!HX&&HU)y1=y2-BM;else{y1=y1+((((y2-y1)-BM)/2)|0);y2=y1+BM;}}}else{y2=y2-
Ar.Bd[3];y1=y1+BK[1];y2=y2+BK[3];}}else{switch(MZ){case 3:{x1=BK[0];x2=x1+B0;}break;
case 4:{x2=BK[2];x1=x2-B0;}break;case 1:{y1=BK[1];y2=y1+BM;}break;case 2:{y2=BK[
3];y1=y2-BM;}break;default:;}if((MZ===3)||(MZ===4)){var HX=((EX&0x10)===0x10);var
HU=((EX&0x20)===0x20);var QA=((EX&0x2)===0x2);if(QA){y1=BK[1];y2=BK[3];}else if(
HX&&!HU){y1=BK[1];y2=y1+BM;}else if(HU&&!HX){y2=BK[3];y1=y2-BM;}else{y1=BK[1]+((((
BK[3]-BK[1])-BM)/2)|0);y2=y1+BM;}}if((MZ===1)||(MZ===2)){var HV=((EX&0x4)===0x4);
var HW=((EX&0x8)===0x8);var Qz=((EX&0x1)===0x1);if(Qz){x1=BK[0];x2=BK[2];}else if(
HV&&!HW){x1=BK[0];x2=x1+B0;}else if(HW&&!HV){x2=BK[2];x1=x2-B0;}else{x1=BK[0]+((((
BK[2]-BK[0])-B0)/2)|0);x2=x1+B0;}}}Ar.isEmpty=(x1>=x2)||(y1>=y2);B0=(x2-x1)-1;BM=(
y2-y1)-1;var Aiz=Ar.extent[0];var AiB=Ar.extent[1];var Af8=(Ar.extent[2]-Aiz)-1;
var Af7=(Ar.extent[3]-AiB)-1;if(!Af8)Af8=1;if(!Af7)Af7=1;if(((this.U&0x100)===0x100
)){this.Eu=[x1+((((Ar.AiU[0]-Aiz)*B0)/Af8)|0),y1+((((Ar.AiU[1]-AiB)*BM)/Af7)|0)];
this.EE=[x1+((((Ar.AiV[0]-Aiz)*B0)/Af8)|0),y1+((((Ar.AiV[1]-AiB)*BM)/Af7)|0)];this.
MP=[x1+((((Ar.AA3[0]-Aiz)*B0)/Af8)|0),y1+((((Ar.AA3[1]-AiB)*BM)/Af7)|0)];this.KE=[
x1+((((Ar.AA4[0]-Aiz)*B0)/Af8)|0),y1+((((Ar.AA4[1]-AiB)*BM)/Af7)|0)];}else{this.
DO([x1+((((Ar.AiU[0]-Aiz)*B0)/Af8)|0),y1+((((Ar.AiU[1]-AiB)*BM)/Af7)|0)]);this.DE([
x1+((((Ar.AiV[0]-Aiz)*B0)/Af8)|0),y1+((((Ar.AiV[1]-AiB)*BM)/Af7)|0)]);this.KB([x1+((((
Ar.AA3[0]-Aiz)*B0)/Af8)|0),y1+((((Ar.AA3[1]-AiB)*BM)/Af7)|0)]);this.J5([x1+((((Ar.
AA4[0]-Aiz)*B0)/Af8)|0),y1+((((Ar.AA4[1]-AiB)*BM)/Af7)|0)]);this.Ew=Ar;}return[B0+
1,BM+1];},Ann:function(aOffset,Atz){if(Atz){this.Eu=A.abf(this.Eu,aOffset);this.
EE=A.abf(this.EE,aOffset);this.MP=A.abf(this.MP,aOffset);this.KE=A.abf(this.KE,aOffset
);}else{this.DO(A.abf(this.Eu,aOffset));this.DE(A.abf(this.EE,aOffset));this.KB(
A.abf(this.MP,aOffset));this.J5(A.abf(this.KE,aOffset));}},GetExtent:function(){
if(!!this.Ew&&this.Ew.isEmpty)return BF;var x1=this.Eu[0];var y1=this.Eu[1];var x2=
this.MP[0];var y2=this.MP[1];if((((this.KE[0]!==x1)||(this.EE[1]!==y1))||(this.EE[
0]!==x2))||(this.KE[1]!==y2)){if(this.EE[0]<x1)x1=this.EE[0];if(this.MP[0]<x1)x1=
this.MP[0];if(this.KE[0]<x1)x1=this.KE[0];if(this.EE[1]<y1)y1=this.EE[1];if(this.
MP[1]<y1)y1=this.MP[1];if(this.KE[1]<y1)y1=this.KE[1];if(this.Eu[0]>x2)x2=this.Eu[
0];if(this.EE[0]>x2)x2=this.EE[0];if(this.KE[0]>x2)x2=this.KE[0];if(this.Eu[1]>y2
)y2=this.Eu[1];if(this.EE[1]>y2)y2=this.EE[1];if(this.KE[1]>y2)y2=this.KE[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},J5:function(E){var B;if(A.aaX(E,this.KE))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ew=null;this.KE=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JT],this);}},KB:function(E){var B;if(A.aaX(E,
this.MP))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Ew=null;this.MP=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JT],this);}},DE:function(
E){var B;if(A.aaX(E,this.EE))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.GetClipping());this.Ew=null;this.EE=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JT],this);}},DO:function(E){var B;if(A.aaX(E,this.Eu))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ew=null;this.Eu=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JT],this);}},ARv:function(K5){var HD=A.abi(4,
A.wf,null);var O=0;var Ij=3;var A2W=false;var A2X=false;HD.Set(0,this.Eu);HD.Set(
1,this.EE);HD.Set(2,this.MP);HD.Set(3,this.KE);while(O<4){var BhD=HD.Get(O)[0];var
ALF=HD.Get(O)[1];var BDt=HD.Get(Ij)[0];var A5c=HD.Get(Ij)[1];if(((ALF>K5[1])!==(
A5c>K5[1]))||((ALF<K5[1])!==(A5c<K5[1]))){var Eq=((((BDt-BhD)*(K5[1]-ALF))/(A5c-
ALF))|0)+BhD;if(K5[0]>Eq)A2W=!A2W;if(K5[0]<Eq)A2X=!A2X;}Ij=O;O=O+1;}return A2W||
A2X;},Bj7:function(){return((((this.Eu[0]===this.KE[0])&&(this.EE[0]===this.MP[0
]))&&(this.Eu[1]===this.EE[1]))&&(this.MP[1]===this.KE[1]))||((((this.Eu[0]===this.
EE[0])&&(this.MP[0]===this.KE[0]))&&(this.Eu[1]===this.KE[1]))&&(this.EE[1]===this.
MP[1]));},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.ZL;},
_className:"Core::QuadView"};C.Ev={M:A.wg,At3:function(BK,Ah9){var Ar=A._NewObject(
C.Ars,0);Ar.extent=this.M;Ar.Bd=BK;Ar.NN=Ah9;this.Ew=Ar;},AuX:function(BK,MZ){var
B;var EX=this.PT;var Ar=this.Ew;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var Kg=[BK[2]-BK[0],BK[3]-BK[1]];var B0=x2-x1;var BM=
y2-y1;if(!MZ){var NQ=[(B=Ar.Bd)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Bd[0];y1=y1-Ar.Bd[1];
if(NQ[0]!==Kg[0]){var HV=((EX&0x4)===0x4);var HW=((EX&0x8)===0x8);var Qz=((EX&0x1
)===0x1);if(!HV&&(Qz||!HW))x1=((x1*Kg[0])/NQ[0])|0;if(!HW&&(Qz||!HV)){x2=x2-Ar.Bd[
0];x2=((x2*Kg[0])/NQ[0])|0;x2=x2-Kg[0];}else x2=x2-Ar.Bd[2];x1=x1+BK[0];x2=x2+BK[
2];if(!Qz){if(HV&&!HW)x2=x1+B0;else if(!HV&&HW)x1=x2-B0;else{x1=x1+((((x2-x1)-B0
)/2)|0);x2=x1+B0;}}}else{x2=x2-Ar.Bd[2];x1=x1+BK[0];x2=x2+BK[2];}if(NQ[1]!==Kg[1
]){var HX=((EX&0x10)===0x10);var HU=((EX&0x20)===0x20);var QA=((EX&0x2)===0x2);if(
!HX&&(QA||!HU))y1=((y1*Kg[1])/NQ[1])|0;if(!HU&&(QA||!HX)){y2=y2-Ar.Bd[1];y2=((y2
*Kg[1])/NQ[1])|0;y2=y2-Kg[1];}else y2=y2-Ar.Bd[3];y1=y1+BK[1];y2=y2+BK[3];if(!QA
){if(HX&&!HU)y2=y1+BM;else if(!HX&&HU)y1=y2-BM;else{y1=y1+((((y2-y1)-BM)/2)|0);y2=
y1+BM;}}}else{y2=y2-Ar.Bd[3];y1=y1+BK[1];y2=y2+BK[3];}}else{switch(MZ){case 3:{x1=
BK[0];x2=x1+B0;}break;case 4:{x2=BK[2];x1=x2-B0;}break;case 1:{y1=BK[1];y2=y1+BM;
}break;case 2:{y2=BK[3];y1=y2-BM;}break;default:;}if((MZ===3)||(MZ===4)){var HX=((
EX&0x10)===0x10);var HU=((EX&0x20)===0x20);var QA=((EX&0x2)===0x2);if(QA){y1=BK[
1];y2=BK[3];}else if(HX&&!HU){y1=BK[1];y2=y1+BM;}else if(HU&&!HX){y2=BK[3];y1=y2-
BM;}else{y1=BK[1]+((((BK[3]-BK[1])-BM)/2)|0);y2=y1+BM;}}if((MZ===1)||(MZ===2)){var
HV=((EX&0x4)===0x4);var HW=((EX&0x8)===0x8);var Qz=((EX&0x1)===0x1);if(Qz){x1=BK[
0];x2=BK[2];}else if(HV&&!HW){x1=BK[0];x2=x1+B0;}else if(HW&&!HV){x2=BK[2];x1=x2-
B0;}else{x1=BK[0]+((((BK[2]-BK[0])-B0)/2)|0);x2=x1+B0;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Ew=Ar;}return[x2-x1,y2-y1];},Ann:function(aOffset,Atz){if(Atz)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.GetClipping());this.Ew=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JT],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.
__proto__=C.Ev;},_className:"Core::RectView"};C.P={B$:null,Ca:null,AKz:null,FH:null
,Hd:null,XH:null,ApT:null,AV:null,G9:255,AzU:0,AzX:0,AzW:0,AzV:0,Init:function(aArg
){this.Am();},Ks:function(C2,aClip,aOffset,Ck,aBlend){var B;Ck=((Ck+1)*this.G9)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FH||(C2.C3===this))this.BdI(C2,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ck,aBlend);else{var B5=255|(255<<8)|(255<<16)|((
Ck&0xFF)<<24);this.FH.Update();C2.A6n(aClip,this.FH,0,A.abh(this.M,aOffset),Cg,B5
,B5,B5,B5,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FH)return Az;
Az=[].concat(Az[0]-this.AzV,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzX);Az=A.abN(
Az,Az[2]+this.AzW);Az=[].concat(Az.slice(0,3),Az[3]+this.AzU);if(((this.U&0x80000
)===0x80000)){var Ap6=BF;var X;for(X=this.B$;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap6=
A.wC(Ap6,X.GetClipping());Az=A.wC(Az,A.abh(Ap6,this.M.slice(0,2)));}return Az;},
Ys:function(Dc,BI,Oo,Aau,Ac$,Ac_){var B;var X=this.Ca;var Apn=null;var AE=BF;var
Kh=null;var A3g=!!this.XH&&(!!this.XH.FW||!!this.XH.B$);if(((B=A.lb(Dc,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Dc=A.abg(Dc,this.M.slice(0,2));if(!!Ac$){X=Ac$;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kh){Kh=X.
AI;while(!!Kh&&!((Kh.U&0x200)===0x200))Kh=Kh.AI;if(!!Kh)AE=A.lb(Dc,Kh.GetExtent(
));else AE=BF;}if(Kh===X){Kh=null;AE=BF;}if((!!Aau&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hd.C3===X)&&!A3g))
)){var extent=X.GetExtent();var AJ4=Aau;var Ao9=null;if(AJ4===X)AJ4=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao9=X.Ys(AE
,BI,Oo,AJ4,Ac$,Ac_);}else if(!(((B=A.lb(extent,Dc))[0]>=B[2])||(B[1]>=B[3]))||(Aau===
X))Ao9=X.Ys(Dc,BI,Oo,AJ4,Ac$,Ac_);X=X.AI;if(!!Ao9){if(!Apn||((Ao9.Au7<Apn.Au7)&&(
Ao9.Au7>=0)))Apn=Ao9;if(!Ao9.Au7)X=null;}}else X=X.AI;Ac$=null;}return Apn;},AuO:
function(Dc){var B;var F;var X=this.B$;var LL=BF;var AAX=true;var result=(Dc=F=A.
abg(Dc,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var Aud=(C.Y.isPrototypeOf(
X)?X:null);LL=A.lb(Dc,Aud.M);AAX=((Aud.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAX){var AE=A.lb(X.GetClipping(),LL);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuO(AE));}}else{var AE=A.lb(X.GetClipping(),
Dc);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuO(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Ct:function(Rx,Vc){var B;
var Tv=this.U;if(((!!this.Ab&&!!!this.FH)&&((this.U&0x80001)===0x80001))&&((Vc&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());C.Ev.Ct.call(this,Rx,Vc);if((((!!this.
Ab&&!!!this.FH)&&((this.U&0x1)===0x1))&&((Rx&0x80000)===0x80000))&&!((Tv&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());var XG=this.U^Tv;if(!!this.AV&&((XG&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Ct(0x40,0x0);else this.AV.Ct(0x0
,0x40);}if(!!this.Hd&&((XG&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hd.C3.
U&0x14)===0x14))this.Hd.C3.Ct(0x40,0x0);else this.Hd.C3.Ct(0x0,0x40);}if(((XG&0x10
)===0x10)){var X;for(X=this.B$;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hd.C3===X)))X.Ct(Rx&0x10,Vc&
0x10);}if(!!XG){this.U=this.U|0x8000;A.pe([this,this.ABC],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Al3=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKH=[
E[2]-E[0],E[3]-E[1]];var Ap2=!A.aaX(Al3,AKH);if(Ap2&&!!this.FH){this.FH.ArV(AKH);
A.we(this,0);A.we(this.FH,0);}C.Ev.H.call(this,E);if((Ap2&&(Al3[0]>0))&&(Al3[1]>
0)){var Bd=[].concat(Cg,Al3);var X=this.B$;while(!!X){if((!X.Ew&&(X.PT!==0x14))&&
!((X.U&0x400)===0x400))X.At3(Bd,null);X=X.Ah;}}if(Ap2){this.U=this.U|0x5000;A.pe([
this,this.ABC],this);}},A4o:function(CN){var BeF=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D8=this.AKz;if(!BeF)return null;while(!!D8&&(!D8.Bw||!D8.G4(BeF)))D8=D8.
Ah;return D8;},BDd:function(G){if(!!this.FH){this.FH.C3=this;var AE=A.abg(this.AuO(
A.abh(this.FH.QR,this.M.slice(0,2))),this.M.slice(0,2));this.FH.Avp(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BdI(this.FH,AE,Cg,255,true);this.FH.
C3=null;}},BdI:function(C2,aClip,aOffset,Ck,aBlend){var B;var X=this.B$;var LL=BF;
var AAX=true;this.Bi5(C2,aClip,aOffset,Ck,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var Aud=(C.Y.isPrototypeOf(X)?X:null);AAX=((Aud.U&0x1)===0x1);LL=aClip;if(!((
Aud.U&0x80000)===0x80000))LL=A.lb(LL,A.abh(Aud.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAX){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LL
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Ks(C2,AE,aOffset,Ck,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Ks(C2,AE,aOffset,Ck,aBlend);}}X=X.Ah;}this.Bi8(C2,aClip,aOffset,Ck,aBlend);},BgB:
function(){var B;var A2P=((this.U&0x1000)===0x1000);var AiG=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var AaC=false;var Ads=BF;var K7=BF;var AaD=Cg;var AtZ=0;var At0=0;
var AtY=0;var Qs=0;var X=this.Ca;var Kh=null;var AlV=null;while(!!X){if(((X.U&0x800
)===0x800)){AaC=true;X.U=X.U&~0x800;}if(AaC&&((X.U&0x200)===0x200)){AaC=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).Ag3)X.U=X.U|0x1000;}X=X.AI;}AaC=false;X=this.B$;
if(A2P){this.U=this.U&~0x1000;A2P=!((AiG[0]>=AiG[2])||(AiG[1]>=AiG[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlV&&(AtY!==Qs)){var AdQ=X;var AK4=0;var ABh=Ads[2]-
Ads[0];var Azv=Ads[3]-Ads[1];var AJU=0;var Aqc=Cg;do if(((AdQ.U&0x200)===0x200))
AdQ=null;else if(((AdQ.U&0x401)===0x401)){Aqc=[(B=AdQ.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qs===3)||(Qs===4))ABh=ABh-Aqc[0];if((Qs===1)||(Qs===2))Azv=Azv-Aqc[1];
if(!AlV||((ABh>=0)&&(Azv>=0))){AlV=AdQ;AdQ=AdQ.Ah;if((Qs===3)||(Qs===4)){ABh=ABh-
AtZ;if(Aqc[1]>AK4)AK4=Aqc[1];}if((Qs===1)||(Qs===2)){Azv=Azv-At0;if(Aqc[0]>AJU)AJU=
Aqc[0];}}else AdQ=null;}else AdQ=AdQ.Ah;while(!!AdQ);if(!AlV)AlV=Kh;K7=Ads;switch(
AtY){case 9:case 11:K7=[].concat(K7.slice(0,3),K7[1]+AK4);break;case 10:case 12:
K7=A.abP(K7,K7[3]-AK4);break;case 5:case 7:K7=A.abN(K7,K7[0]+AJU);break;case 6:case
8:K7=[].concat(K7[2]-AJU,K7.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ew&&(X.Ew.NN!==Kh))X.Ew=null;if((!X.Ew&&AaC)&&((X.PT!==0x14)||!!Qs))X.
At3(K7,Kh);}if(!!X.Ew){if(A2P&&!((X.U&0x400)===0x400))X.AuX(AiG,0);if(AaC&&((X.U&
0x400)===0x400)){var C7=X.AuX(A.abh(K7,AaD),Qs);if(((X.U&0x1)===0x1)){var Br=Cg;
switch(Qs){case 3:Br=[C7[0]+AtZ,Br[1]];break;case 4:Br=[-C7[0]-AtZ,Br[1]];break;
case 1:Br=[Br[0],C7[1]+At0];break;case 2:Br=[Br[0],-C7[1]-At0];break;default:;}AaD=
A.abf(AaD,Br);}}}if(((X.U&0x200)===0x200)){if(AaC)A.pe(Kh.Eo,Kh);AaC=((X.U&0x1000
)===0x1000);Kh=(C.Y.isPrototypeOf(X)?X:null);if(AaC){X.U=X.U&~0x1000;AtY=Kh.Ag3;
Qs=AtY;Ads=A.abh(Kh.M,Kh.Bs);K7=Ads;AaD=Cg;AtZ=Kh.Space+Kh.AVh;At0=Kh.Space;AaC=
!((Ads[0]>=Ads[2])||(Ads[1]>=Ads[3]));AlV=null;switch(AtY){case 9:case 10:Qs=3;break;
case 11:case 12:Qs=4;break;case 5:case 6:Qs=1;break;case 7:case 8:Qs=2;break;default:;
}}if(AaC)this.Bi(Kh.M);}if(X===AlV){switch(AtY){case 9:case 11:AaD=[0,(AaD[1]+(K7[
3]-K7[1]))+At0];break;case 10:case 12:AaD=[0,(AaD[1]-(K7[3]-K7[1]))-At0];break;case
5:case 7:AaD=[(AaD[0]+(K7[2]-K7[0]))+AtZ,0];break;case 6:case 8:AaD=[(AaD[0]-(K7[
2]-K7[0]))-AtZ,0];break;default:;}AlV=null;}X=X.Ah;}if(AaC)A.pe(Kh.Eo,Kh);this.U=
this.U&~0x2000;this.Bl([AiG[2]-AiG[0],AiG[3]-AiG[1]]);},JT:function(G){A.pe([this
,this.ABC],this);},ABC:function(G){var B;var BDl=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.BgB();}if(((this.U&0x8000)===
0x8000)||BDl){this.U=this.U&~0x8000;this.Aj(this.U);}},Ba:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E7);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Ct(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Ct(0x60,0x0);else E.Ct(0x20
,0x0);}},BbQ:function(Aq){this.Ba(Aq);},ASK:function(){return!!this.FH;},ArR:function(
E){var B;if(!!this.FH===E)return;if(!E){this.FH.AEK=null;this.FH.ArV(Cg);this.FH=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(E){this.
FH=A._NewObject(A.Graphics.Canvas,0);this.FH.ArV([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FH.AEK=[this,this.BDd];}A.we(this,0);},A9c:function(){var B;return((this.U&
0x100000)===0x100000);},As:function(E){if(E)this.Ct(0x100000,0x0);else this.Ct(0x0
,0x100000);},C0:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;
this.G9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},A0O:
function(Aq){this.C0(Aq);},Ai:function(E){if(E)this.Ct(0x400,0x0);else this.Ct(0x0
,0x400);},Bmy:function(E){if(E)this.Ct(0x2,0x0);else this.Ct(0x0,0x2);},Fp:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.
Ct(0x0,0x1);},ExtendClipping:function(AoJ,AoK,AoL,AoI){var B;var Azm=this.M;var RE=
Azm;if(AoJ<0)AoJ=0;if(AoJ>255)AoJ=255;if(AoK<0)AoK=0;if(AoK>255)AoK=255;if(AoL<0
)AoL=0;if(AoL>255)AoL=255;if(AoI<0)AoI=0;if(AoI>255)AoI=255;RE=[].concat(RE[0]-(
Math.max(AoJ,this.AzV)&0xFF),RE.slice(1,4));RE=A.abN(RE,RE[2]+(Math.max(AoK,this.
AzW)&0xFF));RE=A.abP(RE,RE[1]-(Math.max(AoL,this.AzX)&0xFF));RE=[].concat(RE.slice(
0,3),RE[3]+(Math.max(AoI,this.AzU)&0xFF));if(AoJ!==this.AzV){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FH)&&!((this.U&0x80000)===0x80000)){var Az=RE;Az=A.abN(Az
,Azm[0]);this.Ab.Bi(Az);}this.AzV=AoJ&0xFF;}if(AoK!==this.AzW){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FH)&&!((this.U&0x80000)===0x80000)){var Az=RE;Az=[].
concat(Azm[2],Az.slice(1,4));this.Ab.Bi(Az);}this.AzW=AoK&0xFF;}if(AoL!==this.AzX
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FH)&&!((this.U&0x80000)===0x80000
)){var Az=RE;Az=[].concat(Az.slice(0,3),Azm[1]);this.Ab.Bi(Az);}this.AzX=AoL&0xFF;
}if(AoI!==this.AzU){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FH)&&!((this.
U&0x80000)===0x80000)){var Az=RE;Az=A.abP(Az,Azm[3]);this.Ab.Bi(Az);}this.AzU=AoI&
0xFF;}},Bi8:function(C2,aClip,aOffset,Ck,aBlend){},Bi5:function(C2,aClip,aOffset
,Ck,aBlend){},GetMaximalSize:function(){return Hr;},GetMinimalSize:function(){return Cg;
},AVo:function(Iy,On,Xt,Tm,Tn,Ah_,Pf,Rw,LJ,LF,LI){var B;if(!this.Hd){this.AkM(Iy
,On,Xt,Tm,Tn,null,null,LJ,LF,LI);return;}var Al2=this.Hd;var JQ=Al2.Ah;if(((Iy.U&
0x10000)===0x10000)&&(this.Hd.C3!==Iy))throw new Error(I1);var Ady=A._NewObject(
C.AN8,0);var RI=Al2.RI;var RR=null;var Ml=null;if(!!JQ){RR=JQ.RR;Ml=JQ.Ml;}if(!!
JQ&&!!Al2.ApS)RR=Al2.ApS;if(!!JQ&&!!Pf)Ml=Pf;if(!!Ah_)RI=Ah_;if(!On)On=A._GetAutoObject(
A.acl.AsI);if(!Xt)Xt=On;if(!Tn)Tn=Tm;if(!Tm)Tm=Tn;Ady.RI=Xt;Ady.Ml=Tm;Ady.RR=Tn;
Ady.ApS=Rw;Ady.C3=Iy;Ady.Ah=this.Hd.Ah;this.Hd.Ah=null;this.Hd=Ady;if(this.AV===
Iy)this.Ba(null);Al2.C3.Ct(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iy.U&0x4)===
0x4))Iy.Ct(0x10040,0x0);else Iy.Ct(0x10000,0x0);if(!!Ml){this.N0(JQ.C3,Ml.Aeh(),
null,null,LI);this.N0(Al2.C3,RI.Sj(),null,null,true);this.N0(Ady.C3,On.Sk(),LJ,LF
,true);}else if(!!RR){this.N0(JQ.C3,RR.Aei(),null,null,LI);this.N0(Al2.C3,RI.Sj(
),null,null,true);this.N0(Ady.C3,On.Sk(),LJ,LF,true);}else if(!!RI){this.N0(Al2.
C3,RI.Sj(),null,null,LI);this.N0(Ady.C3,On.Sk(),LJ,LF,true);}else this.N0(Ady.C3
,On.Sk(),LJ,LF,LI);},AqL:function(Iy,Ah_,Pf,Rw,LJ,LF,LI){var B;if(!this.Hd)return;
if(!Iy)return;var KJ=this.Hd;var JQ=this.Hd.Ah;var ApY=null;while((!!KJ&&(KJ.C3!==
Iy))&&!!KJ.Ah){ApY=KJ;KJ=JQ;JQ=KJ.Ah;}if(!KJ||(KJ.C3!==Iy))throw new Error(Iw);if(
!ApY){this.Hd=JQ;KJ.Ah=null;}else{ApY.Ah=JQ;KJ.Ah=null;}KJ.C3.Ct(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JQ)&&!ApY)&&((JQ.C3.U&0x200000)===0x200000))JQ.C3.Ct(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JQ)&&!ApY)&&((JQ.C3.U&0x4)===0x4))JQ.C3.Ct(
0x40,0x0);var RI=KJ.RI;var RR=null;var Ml=null;if(!!JQ)RR=JQ.RR;if(!!JQ&&!!KJ.ApS
)RR=KJ.ApS;if(!!JQ&&!!Rw)RR=Rw;if(!!ApY&&!!JQ)Ml=JQ.Ml;if((!!ApY&&!!JQ)&&!!Pf)Ml=
Pf;if(!!Ah_)RI=Ah_;if(!!Ml){this.N0(JQ.C3,Ml.Aeh(),null,null,LI);this.N0(KJ.C3,RI.
Sj(),LJ,LF,true);}else if(!!RR){this.N0(JQ.C3,RR.Aei(),null,null,LI);this.N0(KJ.
C3,RI.Sj(),LJ,LF,true);}else this.N0(KJ.C3,RI.Sj(),LJ,LF,LI);},AkM:function(Iy,On
,Xt,Tm,Tn,Pf,Rw,LJ,LF,LI){var B;if(!Iy)return;if(!!this.Hd&&(this.Hd.C3===Iy)){this.
AVo(Iy,On,Xt,Tm,Tn,null,Pf,Rw,LJ,LF,LI);return;}if(((Iy.U&0x10000)===0x10000))throw new
Error(I1);var KJ=A._NewObject(C.AN8,0);if(!!this.Hd&&!this.Hd.Ml){if(!Rw)Rw=Pf;if(
!Pf)Pf=Rw;}var Ml=null;if(!!this.Hd)Ml=this.Hd.Ml;if(!!this.Hd&&!!Pf)Ml=Pf;if(!On
)On=A._GetAutoObject(A.acl.AsI);if(!Xt)Xt=On;if(!Tn)Tn=Tm;if(!Tm)Tm=Tn;KJ.RI=Xt;
KJ.Ml=Tm;KJ.RR=Tn;KJ.ApS=Rw;if(this.AV===Iy)this.Ba(null);if(!!this.Hd&&((this.Hd.
C3.U&0x200000)===0x200000))this.Hd.C3.Ct(0x0,0x10);if(!!this.Hd)this.Hd.C3.Ct(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iy.U&0x4)===0x4))Iy.Ct(0x10040,0x0);else Iy.
Ct(0x10000,0x0);KJ.C3=Iy;KJ.Ah=this.Hd;this.Hd=KJ;if(!!Ml){this.N0(this.Hd.Ah.C3
,Ml.Aeh(),null,null,LI);this.N0(Iy,On.Sk(),LJ,LF,true);}else this.N0(Iy,On.Sk(),
LJ,LF,LI);},A7z:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A8b:function(
K5){var tmp=this;while(!!tmp){K5=A.abe(K5,tmp.M.slice(0,2));tmp=tmp.Ab;}return K5;
},Bj4:function(K5){var tmp=this;while(!!tmp){K5=A.abf(K5,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K5;},DispatchEvent:function(CN){var B;var X=this.AV;var B2=(C.P.isPrototypeOf(
X)?X:null);var GF=null;var A3g=!!this.XH&&(!!this.XH.FW||!!this.XH.B$);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B2=null;}if(!!this.Hd&&!A3g)GF=this.Hd.C3.DispatchEvent(CN);if(!GF&&!!B2)
GF=B2.DispatchEvent(CN);else if(!GF&&!!X)GF=X.G4(CN);if(!GF)GF=this.G4(CN);if(!GF
)GF=this.A4o(CN);return GF;},BroadcastEventAtPosition:function(CN,HB,aFilter){var
B;var X=this.Ca;var GF=null;while(!!X&&!GF){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HB)){var B2=(C.P.isPrototypeOf(X)?X:null);if(!!B2)GF=B2.
BroadcastEventAtPosition(CN,A.abe(HB,B2.M.slice(0,2)),aFilter);else GF=X.G4(CN);
}X=X.AI;}if(!GF)GF=this.G4(CN);return GF;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.Ca;var GF=null;while(!!X&&!GF){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B2=(C.P.isPrototypeOf(X)?X:null);if(!!B2)GF=B2.BroadcastEvent(CN,aFilter
);else GF=X.G4(CN);}X=X.AI;}if(!GF)GF=this.G4(CN);if(!GF)GF=this.A4o(CN);return GF;
},Bl:function(aSize){},Aj:function(Ae){},Bki:function(){this.U=this.U|0x4000;A.pe([
this,this.ABC],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABC],this
);},Bi:function(Dc){var B;var B2=this;while(!!B2&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3
]))){var Aaz=B2.FH;if(!B2.Ab&&(B2!==this)){B2.Bi(Dc);return;}if(!!Aaz){var BA1=Aaz.
QR;Aaz.QR=A.wC(Aaz.QR,Dc);if(!A.aaY(BA1,Aaz.QR)){A.we(B2,0);A.we(Aaz,0);}}if(!((
B2.U&0x1)===0x1))return;var Az=B2.M;Dc=A.abh(Dc,Az.slice(0,2));if(!!B2.FH||!((B2.
U&0x80000)===0x80000)){if(!!!B2.FH){Az=[].concat(Az[0]-B2.AzV,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B2.AzX);Az=A.abN(Az,Az[2]+B2.AzW);Az=[].concat(Az.slice(0,3),Az[3
]+B2.AzU);}Dc=A.lb(Dc,Az);}B2=B2.Ab;}},QM:function(Ag,GC,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Ago=A.aaI(Ag.GetExtent());var X=Ag;var A1Y=null;var
Bdl=0;var I7=0x10000;var AK0;if(((aFilter&0x10000)===0x10000))I7=0x0;var top=((GC===
4)||(GC===1))||(GC===6);var bottom=((GC===5)||(GC===3))||(GC===8);var left=((GC===
2)||(GC===1))||(GC===3);var right=((GC===7)||(GC===6))||(GC===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AI;if(!X)X=this.Ca;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I7||!((B=I7)&&((X.U&B)===B
))))for(AK0=0;AK0<2;AK0++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AK0){if((left&&(s[0]>s[1]))&&(Az[2]<Ago[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Ago[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Ago[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Ago[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Br=A.abe(A.aaI(Az),Ago);var
Rz=Br;if(Rz[0]<0)Rz=[-Rz[0],Rz[1]];if(Rz[1]<0)Rz=[Rz[0],-Rz[1]];if(((((!left||(Br[
0]<=-Rz[1]))&&(!right||(Br[0]>=Rz[1])))&&(!top||(Br[1]<=-Rz[0])))&&(!bottom||(Br[
1]>=Rz[0])))&&((Rz[0]>0)||(Rz[1]>0))){var RK=Br[0];var RL=Br[1];var Jt=Math.sqrt((
RK*RK)+(RL*RL));var AKy=0;if(!left&&!right)AKy=Jt/Rz[1];if(!top&&!bottom)AKy=Jt/
Rz[0];Jt=(Jt*AKy)*AKy;if((Jt<Bdl)||!A1Y){Bdl=Jt;A1Y=X;}}}}return A1Y;},AqS:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.Ca;var I7=0x10000;
if(((aFilter&0x10000)===0x10000))I7=0x0;if(!!Ag)X=Ag.AI;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!I7||!((B=I7)&&((X.U&B)===B))))return X;X=X.AI;}return null;
},TX:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B$;
var I7=0x10000;if(((aFilter&0x10000)===0x10000))I7=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!I7||!((B=I7)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},AC3:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var Al0=Ag.Ah;var Amc=Ag.AI;var I7=0x10000;if(((aFilter&0x10000)===0x10000))I7=0x0;
while(!!Al0||!!Amc){if((!!Al0&&(!aFilter||((B=aFilter)&&((Al0.U&B)===B))))&&(!I7||
!((B=I7)&&((Al0.U&B)===B))))return Al0;if((!!Amc&&(!aFilter||((B=aFilter)&&((Amc.
U&B)===B))))&&(!I7||!((B=I7)&&((Amc.U&B)===B))))return Amc;if(!!Al0)Al0=Al0.Ah;if(
!!Amc)Amc=Amc.AI;}return null;},Dd:function(aFilter){var B;var X=this.B$;var AE=
BF;var I7=0x10000;if(((aFilter&0x10000)===0x10000))I7=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I7||!((B=I7)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},N0:function(KI,FV,LJ,LF
,LI){var B;if(!KI)return;if(!FV)throw new Error(O$);if((!!FV.P||!!FV.Ab)||!!FV.Pq
)throw new Error(Qa);if(!!KI.Ab&&(KI.Ab!==this))throw new Error(Qb);if(!this.XH)
this.XH=A._NewObject(C.AVt,0);FV.Ab=this;FV.P=KI;FV.AKK=LF;FV.A3I=LJ;if(!!KI.ApT
)KI.ApT.Pq.Bpc(KI.ApT);KI.ApT=FV;KI.U=KI.U|0x20000;if((LI&&!!this.XH.Ca)&&!this.
XH.Ca.ARr())(A.acl.ACY.isPrototypeOf(B=this.XH.Ca)?B:null).A5r(FV);else{var Pq=A.
_NewObject(A.acl.ACY,0);Pq.A5r(FV);this.XH.A$V(Pq,false);}},AhG:function(Ag,Kc){
var B;if(!Ag)throw new Error(CJ);if(Ag.Ab!==this)throw new Error(Fd);if(!!Kc&&(Kc.
Ab!==this))throw new Error(LD);if(Ag.Ah===Kc)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AI&&!!Ag.Ew)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JT],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JT],this);}if(!!Ag.Ah)Ag.Ah.
AI=Ag.AI;else this.Ca=Ag.AI;if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;else this.B$=Ag.Ah;var GE=
null;var IB=this.Ca;var LZ=Ag.J9;if(!!Kc){GE=Kc;IB=Kc.AI;}if(!!GE&&(LZ>GE.J9))LZ=
GE.J9;if(!!IB&&(LZ<IB.J9))LZ=IB.J9;if(LZ!==Ag.J9){Ag.Ab=null;Ag.Ar$(LZ);Ag.Ab=this;
}if(!Kc){if(!!this.Ca)this.Ca.Ah=Ag;Ag.AI=this.Ca;Ag.Ah=null;this.Ca=Ag;}else{Ag.
Ah=Kc;Ag.AI=Kc.AI;Kc.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}if(this.B$===Kc)this.B$=Ag;if(((
Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},ZN:function(Ag){var B;if(!Ag)throw new
Error(CJ);if(Ag.Ab!==this)throw new Error(Fd);if(!Ag.Ah)return;var IB=this.Ca;var
LZ=Ag.J9;while(!!IB&&(IB.J9>LZ))IB=IB.AI;if(((IB===Ag)||!IB)||(IB.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AI&&!!Ag.Ew)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JT],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AI)Ag.AI.U=Ag.AI.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JT],this);}if(!
!Ag.AI)Ag.AI.Ah=Ag.Ah;else this.B$=Ag.Ah;Ag.Ah.AI=Ag.AI;Ag.AI=IB;Ag.Ah=IB.Ah;IB.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AI=Ag;else this.Ca=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping(
));},Iu:function(Ag,Qj){var B;if(!Ag)throw new Error(CJ);if(Ag.Ab!==this)throw new
Error(Fd);var IB=Ag;var GE=Ag;var LZ=Ag.J9;while(((Qj>0)&&!!IB.Ah)&&(IB.Ah.J9<=LZ
)){IB=IB.Ah;Qj=Qj-1;}while(((Qj<0)&&!!GE.AI)&&(GE.AI.J9>=LZ)){GE=GE.AI;Qj=Qj+1;}
if((IB===Ag)&&(GE===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AI&&!!Ag.Ew)Ag.
AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JT],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JT],this);}if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AI=Ag.AI;if(this.B$===Ag)this.B$=Ag.Ah;if(this.Ca===Ag)this.Ca=Ag.AI;if(IB
!==Ag){Ag.Ah=IB.Ah;Ag.AI=IB;IB.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AI=Ag;}if(GE!==Ag){Ag.Ah=GE;
Ag.AI=GE.AI;GE.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}if(!Ag.Ah)this.Ca=Ag;if(!Ag.AI)this.
B$=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},HQ:function(Ag){var B;if(
!Ag)throw new Error(Qc);if(Ag.Ab!==this)throw new Error(Fd);if((((Ag.U&0x401)===
0x401)&&!!Ag.AI)&&!!Ag.Ew){Ag.AI.U=Ag.AI.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JT],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AI)Ag.AI.U=Ag.AI.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JT],this);}Ag.Ew=null;if(this.AV===Ag)this.Ba(this.
AC3(Ag,0x14));if(!!Ag.AI)Ag.AI.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AI=Ag.AI;if(this.B$===Ag
)this.B$=Ag.Ah;if(this.Ca===Ag)this.Ca=Ag.AI;Ag.Ab=null;Ag.Ah=null;Ag.AI=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Ct(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},AMj:function(Ag,Kc
){var B;if(!Ag)throw new Error(J$);if(!!Ag.Ab)throw new Error(Oj);if(!!Kc&&(Kc.Ab
!==this))throw new Error(LD);var GE=null;var IB=this.Ca;var LZ=Ag.J9;if(!!Kc){GE=
Kc;IB=Kc.AI;}if(!!GE&&(LZ>GE.J9))LZ=GE.J9;if(!!IB&&(LZ<IB.J9))LZ=IB.J9;if(LZ!==Ag.
J9){Ag.Ab=null;Ag.Ar$(LZ);Ag.Ab=this;}if(!Kc){if(!!this.Ca)this.Ca.Ah=Ag;Ag.AI=this.
Ca;this.Ca=Ag;}else{Ag.Ah=Kc;Ag.AI=Kc.AI;Kc.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;}Ag.Ab=
this;if(this.B$===Kc)this.B$=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOZ()===Ag))Ag.Ct(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Ct(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Ct(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Ba(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JT],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JT],this);}},J:function(Ag,Qj){var B;if(!Ag)throw new Error(
J$);if(!!Ag.Ab)throw new Error(Oj);var GE=null;var LZ=Ag.J9;if(((Qj<0)&&!!this.Ca
)&&(this.Ca.J9>=LZ)){GE=this.Ca;Qj=Qj+1;}while((((Qj<0)&&!!GE)&&!!GE.AI)&&(GE.AI.
J9>=LZ)){GE=GE.AI;Qj=Qj+1;}if((!GE&&!!this.Ca)&&(this.Ca.J9>LZ))GE=this.Ca;while((
!!GE&&!!GE.AI)&&(GE.AI.J9>LZ))GE=GE.AI;if(!GE){Ag.Ab=this;Ag.AI=this.Ca;if(!!this.
Ca)this.Ca.Ah=Ag;if(!this.B$)this.B$=Ag;this.Ca=Ag;}else{Ag.Ab=this;Ag.AI=GE.AI;
Ag.Ah=GE;GE.AI=Ag;if(!!Ag.AI)Ag.AI.Ah=Ag;else this.B$=Ag;}if(((Ag.U&0x1)===0x1))
this.Bi(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOZ()===Ag))Ag.Ct(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Ct(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Ct(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Ba(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JT],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JT],this);}},A9e:function(){return this.
AV;},Awr:function(){return this.G9;},_Init:function(aArg){C.Ev._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Ev._Mark.call(this,D);if((B=this.B$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ca)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKz)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RO:null,JP:null,Fu:A.abi(10,null
,null),AtL:null,Air:null,ABE:0,Ih:0,Mh:A.abi(10,0,null),AJ0:A.abi(10,A.wg,null),
XF:A.abi(10,0,null),Af6:A.abi(10,A.wf,null),AtQ:A.abi(10,0,null),Aiq:A.abi(10,A.
wf,null),XE:A.abi(10,A.wf,null),RH:A.abi(10,A.wf,null),Adj:A.abi(10,A.wf,null),EP:
0,AKl:0,AKk:0,OA:A.abi(4,0,null),Km:A.abi(4,A.wg,null),Kj:0,AAk:0,At5:0,Az6:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Ip:function(){return this;
},Ks:function(C2,aClip,aOffset,Ck,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)C2.Avp(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Ks.call(this,C2,aClip
,aOffset,Ck,aBlend);},Ct:function(Rx,Vc){var B;C.P.Ct.call(this,Rx,Vc);if(!this.
Ab&&(((Rx&0x1)===0x1)||((Vc&0x1)===0x1)))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rx&0x2)===0x2)||((Vc&0x2)===0x2)))this.Bi([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Ba:function(E){if((E!==null)||!E)C.P.Ba.call(this,E);},ArR:
function(E){var B;var BAY=this.FH;C.P.ArR.call(this,E);if(((BAY!==this.FH)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},C0:function(
E){var B;var BQ=this.G9;C.P.C0.call(this,E);if(((BQ!==this.G9)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvY=!!this.Ih;if(!!this.Ih)CN.Bq=this.Ih;}var GF=null;if(!!this.
JP){GF=this.JP.C3.DispatchEvent(CN);if(!GF)GF=this.G4(CN);if(!GF)GF=this.A4o(CN);
this.Ih=0;return GF;}GF=C.P.DispatchEvent.call(this,CN);this.Ih=0;return GF;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvY=!!this.Ih;if(!!this.Ih)CN.Bq=this.Ih;}var GF=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ih=0;return GF;},Bi:function(Dc){var
B;if(this.ABE>0)throw new Error(Qd);if(!!this.FH&&!this.Ab){if(((B=this.FH.QR)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FH,0);}this.FH.QR=A.wC(this.FH.QR
,Dc);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Dc=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bi.call(this,Dc);return;}Dc=A.
lb(A.abh(Dc,this.M.slice(0,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;
var O;for(O=0;O<this.Kj;O=O+1)if(!(((B=A.lb(this.Km.Get(O),Dc))[0]>=B[2])||(B[1]>=
B[3]))){this.Km.Set(O,A.wC(this.Km.Get(O),Dc));this.OA.Set(O,A.aaH(this.Km.Get(O
)));return;}if(this.Kj<3){this.Km.Set(this.Kj,Dc);this.OA.Set(this.Kj,A.aaH(Dc));
this.Kj=this.Kj+1;return;}var Ij;var RN;var AAj=0;var AAm=0;var Bdk=2147483647;this.
Km.Set(this.Kj,Dc);this.OA.Set(this.Kj,A.aaH(Dc));for(Ij=0;Ij<=this.Kj;Ij=Ij+1)for(
RN=Ij+1;RN<=this.Kj;RN=RN+1){var ALs=A.aaH(A.wC(this.Km.Get(Ij),this.Km.Get(RN))
);var Bga=((ALs<<8)/(this.OA.Get(Ij)+this.OA.Get(RN)))|0;if(Bga<Bdk){Bdk=Bga;AAj=
Ij;AAm=RN;}}this.Km.Set(AAj,A.wC(this.Km.Get(AAj),this.Km.Get(AAm)));this.OA.Set(
AAj,A.aaH(this.Km.Get(AAj)));if(AAm!==this.Kj){this.Km.Set(AAm,this.Km.Get(this.
Kj));this.OA.Set(AAm,this.OA.Get(this.Kj));}},Bzt:function(){var LS=A._NewObject(
C.AqN,0);LS.AvY=!!this.Ih;if(!!this.Ih)LS.Bq=this.Ih;return LS;},Ao7:function(){
var LS=A._NewObject(C.Aek,0);LS.AvY=!!this.Ih;if(!!this.Ih)LS.Bq=this.Ih;return LS;
},AtP:function(){var LS=A._NewObject(C.Au4,0);LS.AvY=!!this.Ih;if(!!this.Ih)LS.Bq=
this.Ih;return LS;},Bzx:function(G){var O;var Apn=false;for(O=0;O<10;O=O+1)if(!!
this.Fu.Get(O)){var pos=this.RH.Get(O);var B2=this.Fu.Get(O).Ab;while(!!B2&&(B2!==
this)){pos=A.abe(pos,B2.M.slice(0,2));B2=B2.Ab;}if(!B2&&(this.Fu.Get(O)!==this)){
var tmp=this.Fu.Get(O);this.EP=O;this.Fu.Set(O,null);tmp.G4(this.Ao7().InitializeUp(
O,this.Aiq.Get(O),this.Af6.Get(O),this.XF.Get(O),this.Mh.Get(O)+1,this.XE.Get(O)
,false,this.RH.Get(O),this.Adj.Get(O)));this.BroadcastEvent(this.AtP().InitializeUp(
O,this.Mh.Get(O)+1,false,tmp,this.RH.Get(O)),0x18);}else{this.XF.Set(O,(this.Air.
Bq-this.AtQ.Get(O))|0);if(this.XF.Get(O)<10)this.XF.Set(O,10);this.EP=O;this.Fu.
Get(O).G4(this.Ao7().InitializeHold(O,pos,this.Af6.Get(O),this.XF.Get(O),this.Mh.
Get(O)+1,this.XE.Get(O),this.RH.Get(O),this.Adj.Get(O)));Apn=true;}}if(!Apn)this.
Air.As(false);},GetFPS:function(){var ticksCount=0;var BdY=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKl&&(ticksCount>this.AKl))BdY=((this.AKk*1000)/((
ticksCount-this.AKl)|0))|0;this.AKk=0;this.AKl=ticksCount;return BdY;},Update:function(
){var B;if(!this.AtL)this.AtL=A._NewObject(A.Graphics.Canvas,0);this.AtL.ArV([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtL.Update();return this.UpdateGE20(this.AtL);}
,UpdateGE20:function(C2){if(!this.BeginUpdate())return BF;var Agz=this.UpdateCanvas(
C2,Cg);this.EndUpdate();return Agz;},EndUpdate:function(){if(this.Kj>0){this.AKk=
this.AKk+1;this.Kj=0;}},UpdateCanvas:function(C2,aOffset){var B;var Agz=BF;var Bzb=[
].concat(aOffset,A.abf(C2.FrameSize,aOffset));var O;var Ij=this.Kj;this.ABE=this.
ABE+1;C2.C3=this;for(O=0;(O<Ij)&&(O<4);O=O+1)if(this.OA.Get(O)>0){this.Ks(C2,A.abg(
this.Km.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agz=A.wC(Agz,A.lb(Bzb
,this.Km.Get(O)));}else Ij=Ij+1;C2.C3=null;this.ABE=this.ABE-1;if(!((Agz[0]>=Agz[
2])||(Agz[1]>=Agz[3])))return A.abg(Agz,aOffset);else return Agz;},GetUpdateRegion:
function(AJl){var O;var Ij=this.Kj;if(AJl<0)return BF;for(O=0;(O<Ij)&&(O<4);O=O+
1)if(!this.OA.Get(O)){Ij=Ij+1;AJl=AJl+1;}else if(O===AJl)return this.Km.Get(O);return BF;
},BeginUpdate:function(){var B;var O;if(!!this.Kj&&!A.aaY(this.Km.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bhf=A.abi(3,A.wg,null);var Bhe=this.Kj;for(O=0;
O<Bhe;O++)Bhf.Set(O,this.Km.Get(O));for(O=0;O<Bhe;O++){var Bgw=A.abh(Bhf.Get(O),
this.M.slice(0,2));var Bgx=this.AuO(Bgw);if(!A.aaY(Bgw,Bgx))this.Bi(A.abg(Bgx,this.
M.slice(0,2)));}}var Ij;var RN;for(Ij=0;Ij<(this.Kj-1);Ij++)if(this.OA.Get(Ij)>0
)for(RN=Ij+1;RN<this.Kj;RN++)if(this.OA.Get(RN)>0){var ALs=A.aaH(A.wC(this.Km.Get(
Ij),this.Km.Get(RN)));if(((ALs-this.OA.Get(Ij))-this.OA.Get(RN))<0){this.Km.Set(
Ij,A.wC(this.Km.Get(Ij),this.Km.Get(RN)));this.OA.Set(Ij,ALs);this.OA.Set(RN,0);
}}for(O=this.Kj-1;O>=0;O--)if(!this.OA.Get(O))this.Kj=this.Kj-1;return this.Kj;}
,DoesNeedUpdate:function(){if(this.Kj>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cg,aSize));if(this.Az6)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bi(this.M);return this;},SetRootFocus:function(A1o){if(A1o===this.Az6
)return false;this.Az6=A1o;if(!A1o){if(!!this.JP)this.JP.C3.Ct(0x0,0x40);else this.
Ct(0x0,0x40);}else if(!!this.JP)this.JP.C3.Ct(0x40,0x0);else this.Ct(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qk){this.Ih=Qk;},DriveKeyboardHitting:function(
KH,Ay9,Tl){var B;var A4p=!!this.RO;if(!!this.RO&&((!Tl||(this.AAk!==KH))||(this.
At5!==Ay9))){var LS=null;var X=(C.Cj.isPrototypeOf(B=this.RO)?B:null);var D8=(C.
BG.isPrototypeOf(B=this.RO)?B:null);if(!!this.AAk)LS=A._NewObject(C.KeyEvent,0).
Initialize(this.AAk,false);if(this.At5!==0x00)LS=A._NewObject(C.KeyEvent,0).Initialize2(
this.At5,false);if(!!D8)D8.G4(LS);else if(!!X)X.G4(LS);this.AAk=0;this.At5=0x00;
this.RO=null;}if(!!this.RO){var LS=null;var X=(C.Cj.isPrototypeOf(B=this.RO)?B:null
);var D8=(C.BG.isPrototypeOf(B=this.RO)?B:null);if(!!KH)LS=A._NewObject(C.KeyEvent
,0).Initialize(KH,true);if(this.At5!==0x00)LS=A._NewObject(C.KeyEvent,0).Initialize2(
Ay9,true);if(!!D8)D8.G4(LS);else if(!!X)X.G4(LS);}if(!this.RO&&Tl){if(!!KH)this.
RO=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KH,true));if(Ay9!==0x00
)this.RO=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(Ay9,true));if(
!(C.BG.isPrototypeOf(B=this.RO)?B:null)&&!(C.Cj.isPrototypeOf(B=this.RO)?B:null)
)this.RO=null;this.AAk=KH;this.At5=Ay9;A4p=A4p||!!this.RO;}this.Ih=0;return A4p;
},DriveCursorMovement:function(Ff){return this.DriveMultiTouchMovement(this.EP,Ff
);},DriveMultiTouchMovement:function(BI,Ff){if((BI<0)||(BI>9)){this.Ih=0;return false;
}var Fw=A.abe(Ff,this.RH.Get(BI));this.RH.Set(BI,Ff);if(!this.Fu.Get(BI)||A.aaX(
Fw,Cg)){this.Ih=0;return false;}var pos=Ff;var B2=this.Fu.Get(BI).Ab;while(!!B2&&(
B2!==this)){pos=A.abe(pos,B2.M.slice(0,2));B2=B2.Ab;}if(!B2&&(this.Fu.Get(BI)!==
this)){var tmp=this.Fu.Get(BI);this.EP=BI;this.Fu.Set(BI,null);tmp.G4(this.Ao7().
InitializeUp(BI,this.Aiq.Get(BI),this.Af6.Get(BI),this.XF.Get(BI),this.Mh.Get(BI
)+1,this.XE.Get(BI),false,this.RH.Get(BI),this.Adj.Get(BI)));this.BroadcastEvent(
this.AtP().InitializeUp(BI,this.Mh.Get(BI)+1,false,tmp,Ff),0x18);}else{this.Aiq.
Set(BI,pos);this.EP=BI;this.Fu.Get(BI).G4(this.Bzt().Initialize(BI,pos,this.Af6.
Get(BI),Fw,this.XF.Get(BI),this.Mh.Get(BI)+1,this.XE.Get(BI),Ff,this.Adj.Get(BI)
));}this.Ih=0;return true;},DriveCursorHitting:function(Tl,BI,Ff){return this.DriveMultiTouchHitting(
Tl,BI,Ff);},DriveMultiTouchHitting:function(Tl,BI,Ff){if((BI<0)||(BI>9)){this.Ih=
0;return false;}var ticksCount=this.Ih;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BCv=this.Ih;this.DriveMultiTouchMovement(BI,Ff);Ff=this.RH.Get(BI);
this.Ih=BCv;if(Tl)this.Adj.Set(BI,Ff);if(Tl&&!this.Fu.Get(BI)){var JO;var pos=Ff;
if(A.wa(this.AJ0.Get(BI),Ff)&&((ticksCount-this.AtQ.Get(BI))<=250))this.Mh.Set(BI
,this.Mh.Get(BI)+1);else this.Mh.Set(BI,0);this.AJ0.Set(BI,A.abh(MU,Ff));this.AtQ.
Set(BI,ticksCount);if(!!this.JP)JO=this.Ys(A.abh(MU,Ff),BI,this.Mh.Get(BI)+1,this.
JP.C3,null,0x0);else JO=this.Ys(A.abh(MU,Ff),BI,this.Mh.Get(BI)+1,null,null,0x0);
if(!!JO){this.BroadcastEvent(this.AtP().InitializeDown(BI,this.Mh.Get(BI)+1,false
,JO.Cj,Ff),0x18);this.Fu.Set(BI,JO.Cj);this.XE.Set(BI,JO.DI);}else{this.Fu.Set(BI
,null);this.XE.Set(BI,Cg);this.Ih=0;return false;}var B2=JO.Cj.Ab;while(!!B2&&(B2
!==this)){pos=A.abe(pos,B2.M.slice(0,2));B2=B2.Ab;}this.Af6.Set(BI,pos);this.Aiq.
Set(BI,pos);this.XF.Set(BI,0);this.Air.As(true);this.EP=BI;this.Fu.Get(BI).G4(this.
Ao7().InitializeDown(BI,pos,this.Mh.Get(BI)+1,this.XE.Get(BI),false,Ff));this.Ih=
0;return true;}if(!Tl&&!!this.Fu.Get(BI)){var pos=Ff;var B2=this.Fu.Get(BI).Ab;while(
!!B2&&(B2!==this)){pos=A.abe(pos,B2.M.slice(0,2));B2=B2.Ab;}if(!B2)pos=this.Aiq.
Get(BI);this.EP=BI;var tmp=this.Fu.Get(BI);this.Fu.Set(BI,null);tmp.G4(this.Ao7(
).InitializeUp(BI,pos,this.Af6.Get(BI),this.XF.Get(BI),this.Mh.Get(BI)+1,this.XE.
Get(BI),false,Ff,this.Adj.Get(BI)));this.BroadcastEvent(this.AtP().InitializeUp(
BI,this.Mh.Get(BI)+1,false,tmp,Ff),0x18);this.Ih=0;return true;}this.Ih=0;return false;
},AUM:function(Aaw,BcG,Ac$,Ac_){if(Aaw===this)Aaw=null;if(!!!Aaw&&!!this.JP)Aaw=
this.JP.C3;if(!this.Fu.Get(this.EP))return;var JO;JO=this.Ys(A.abh(MU,this.RH.Get(
this.EP)),this.EP,1,Aaw,Ac$,Ac_);if(!!JO&&(this.Fu.Get(this.EP)!==JO.Cj))this.ANY(
JO.Cj,JO.DI);if(!JO&&(this.Fu.Get(this.EP)!==BcG))this.ANY(BcG,Cg);},ANY:function(
Aaw,Xu){if(!this.Fu.Get(this.EP)||(this.Fu.Get(this.EP)===Aaw))return;var tmp=this.
Fu.Get(this.EP);this.Fu.Set(this.EP,null);tmp.G4(this.Ao7().InitializeUp(this.EP
,this.Aiq.Get(this.EP),this.Af6.Get(this.EP),this.XF.Get(this.EP),this.Mh.Get(this.
EP)+1,this.XE.Get(this.EP),true,this.RH.Get(this.EP),this.Adj.Get(this.EP)));this.
BroadcastEvent(this.AtP().InitializeUp(this.EP,this.Mh.Get(this.EP)+1,true,tmp,this.
RH.Get(this.EP)),0x18);var pos=this.RH.Get(this.EP);var B2=null;if(!!Aaw)B2=Aaw.
Ab;while(!!B2&&(B2!==this)){pos=A.abe(pos,B2.M.slice(0,2));B2=B2.Ab;}if(!B2&&(Aaw
!==this)){this.Fu.Set(this.EP,null);return;}this.BroadcastEvent(this.AtP().InitializeDown(
this.EP,this.Mh.Get(this.EP)+1,true,Aaw,this.RH.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fu.Set(this.EP,Aaw);this.XE.Set(
this.EP,Xu);this.Af6.Set(this.EP,pos);this.Aiq.Set(this.EP,pos);this.Mh.Set(this.
EP,0);this.XF.Set(this.EP,0);this.AtQ.Set(this.EP,ticksCount);this.Adj.Set(this.
EP,this.RH.Get(this.EP));this.Fu.Get(this.EP).G4(this.Ao7().InitializeDown(this.
EP,pos,this.Mh.Get(this.EP)+1,this.XE.Get(this.EP),true,this.Adj.Get(this.EP)));
},AOZ:function(){if(!!this.JP)return this.JP.C3;return null;},ACV:function(KI){var
B;if(!KI)throw new Error(Ti);if(!((KI.U&0x80)===0x80))throw new Error(UZ);if(this.
JP.C3===KI)this.JP=this.JP.Ah;else{var Az5=this.JP;while(Az5.Ah.C3!==KI)Az5=Az5.
Ah;Az5.Ah=Az5.Ah.Ah;}KI.Ct(0x0,0xD0);if(this.Az6){if(!!this.JP)this.JP.C3.Ct(0x50
,0x0);else this.Ct(0x50,0x0);}},AM4:function(KI){var B;var Ar=A._NewObject(C.A8n
,0);if(!KI)throw new Error(Aad);if(KI===null)throw new Error(Xe);if(((KI.U&0x80)===
0x80))throw new Error(Ix);if(!!this.JP)this.JP.C3.Ct(0x0,0x50);else this.Ct(0x0,
0x50);Ar.Ah=this.JP;Ar.C3=KI;this.JP=Ar;if(this.Az6)KI.Ct(0xD0,0x0);else KI.Ct(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Air={
I:this},0);(this.Fu=[]).__proto__=C.Root.Fu;(this.Mh=[]).__proto__=C.Root.Mh;(this.
AJ0=[]).__proto__=C.Root.AJ0;(this.XF=[]).__proto__=C.Root.XF;(this.Af6=[]).__proto__=
C.Root.Af6;(this.AtQ=[]).__proto__=C.Root.AtQ;(this.Aiq=[]).__proto__=C.Root.Aiq;(
this.XE=[]).__proto__=C.Root.XE;(this.RH=[]).__proto__=C.Root.RH;(this.Adj=[]).__proto__=
C.Root.Adj;(this.OA=[]).__proto__=C.Root.OA;(this.Km=[]).__proto__=C.Root.Km;this.
__proto__=C.Root;this.U=0x10007F;this.Air.PZ(10);this.Air.MN=[this,this.Bzx];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Air._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Air._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RO)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JP)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fu,D);if((B=this.
AtL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Air)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bq:0,AvY:false,Init:function(aArg){this.Bq=
this.Avx();},Avx:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CP:0,Dz:0,Down:false
,Initialize2:function(KH,Tl){this.CP=0;this.Dz=KH;this.Down=Tl;if((KH>=0x30)&&(KH<=
0x39))this.CP=(10+KH)-48;if((KH>=0x41)&&(KH<=0x5A))this.CP=(105+KH)-65;if((KH>=0x61
)&&(KH<=0x7A))this.CP=(105+KH)-97;if(KH===0x20)this.CP=131;if(!this.CP)switch(KH
){case 0x2B:this.CP=132;break;case 0x2D:this.CP=133;break;case 0x2A:this.CP=134;
break;case 0x2F:this.CP=135;break;case 0x3D:this.CP=136;break;case 0x2E:this.CP=
137;break;case 0x2C:this.CP=138;break;case 0x3A:this.CP=139;break;case 0x3B:this.
CP=140;break;default:;}return this;},Initialize:function(KH,Tl){this.CP=KH;this.
Down=Tl;this.Dz=0x00;var A14=KH-10;var AtK=KH-105;if((A14>=0)&&(A14<=9))this.Dz=(
48+A14)&0xFFFF;if((AtK>=0)&&(AtK<=25))this.Dz=(65+AtK)&0xFFFF;if(KH===131)this.Dz=
0x20;if(this.Dz===0x00)switch(KH){case 132:this.Dz=0x2B;break;case 133:this.Dz=0x2D;
break;case 134:this.Dz=0x2A;break;case 135:this.Dz=0x2F;break;case 136:this.Dz=0x3D;
break;case 137:this.Dz=0x2E;break;case 138:this.Dz=0x2C;break;case 139:this.Dz=0x3A;
break;case 140:this.Dz=0x3B;break;default:;}return this;},Bkn:function(Bcv){switch(
Bcv){case 141:return((this.Dz>=0x41)&&(this.Dz<=0x5A))||((this.Dz>=0x61)&&(this.
Dz<=0x7A));case 142:return(((this.Dz>=0x41)&&(this.Dz<=0x5A))||((this.Dz>=0x61)&&(
this.Dz<=0x7A)))||((this.Dz>=0x30)&&(this.Dz<=0x39));case 143:return(this.Dz>=0x30
)&&(this.Dz<=0x39);case 144:return(((this.Dz>=0x41)&&(this.Dz<=0x46))||((this.Dz>=
0x61)&&(this.Dz<=0x66)))||((this.Dz>=0x30)&&(this.Dz<=0x39));case 145:return this.
Dz!==0x00;case 146:return(this.Dz===0x00)&&!!this.CP;case 147:return(((this.CP===
6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:return(this.Dz!==0x00
)||!!this.CP;default:;}return Bcv===this.CP;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARK={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARK;},_className:
"Core::LanguageEvent"};C.Au4={AxV:null,L4:A.wf,Oe:0,IP:0,Down:false,NT:false,InitializeUp:
function(BI,Oo,AoE,A1G,Aav){this.Down=false;this.IP=BI;this.Oe=Oo;this.L4=Aav;this.
AxV=A1G;this.NT=AoE;return this;},InitializeDown:function(BI,Oo,AoE,A1G,Aav){this.
Down=true;this.IP=BI;this.Oe=Oo;this.L4=Aav;this.AxV=A1G;this.NT=AoE;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Au4;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aek={Ag5:A.wf,L4:A.wf,Oe:0,JA:
0,N2:A.wf,H4:A.wf,IP:0,Down:false,NT:false,InitializeHold:function(BI,Alp,Ay$,Aza
,Oo,Xu,Aav,Ay_){this.Down=true;this.IP=BI;this.H4=A.abf(Alp,Xu);this.N2=A.abf(Ay$
,Xu);this.JA=Aza;this.Oe=Oo;this.L4=Aav;this.Ag5=Ay_;return this;},InitializeUp:
function(BI,Alp,Ay$,Aza,Oo,Xu,AoE,Aav,Ay_){this.Down=false;this.IP=BI;this.H4=A.
abf(Alp,Xu);this.N2=A.abf(Ay$,Xu);this.JA=Aza;this.Oe=Oo;this.NT=AoE;this.L4=Aav;
this.Ag5=Ay_;return this;},InitializeDown:function(BI,Alp,Oo,Xu,AoE,Aav){this.Down=
true;this.IP=BI;this.H4=A.abf(Alp,Xu);this.N2=A.abf(Alp,Xu);this.JA=0;this.Oe=Oo;
this.NT=AoE;this.L4=Aav;this.Ag5=Aav;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aek;},_className:"Core::CursorEvent"};C.AqN={
Ag5:A.wf,L4:A.wf,Oe:0,JA:0,DI:A.wf,N2:A.wf,H4:A.wf,IP:0,Initialize:function(BI,Alp
,Ay$,aOffset,Aza,Byx,Xu,Aav,Ay_){this.IP=BI;this.H4=A.abf(Alp,Xu);this.N2=A.abf(
Ay$,Xu);this.DI=aOffset;this.JA=Aza;this.Oe=Byx;this.L4=Aav;this.Ag5=Ay_;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqN;},_className:
"Core::DragEvent"};C.Y={BZ:null,NL:null,Eo:null,Bs:A.wf,AVh:0,Space:0,Ag3:0,Ks:function(
C2,aClip,aOffset,Ck,aBlend){},GetClipping:function(){var B;var Az=C.Ev.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap6=BF;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap6=A.wC(Ap6,X.GetClipping());
Az=A.wC(Az,Ap6);}return Az;},Ct:function(Rx,Vc){var B;var Tv=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((Vc&0x80000)===0x80000))this.Ab.Bi(this.GetClipping(
));C.Ev.Ct.call(this,Rx,Vc);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rx&0x80000)===
0x80000))&&!((Tv&0x80000)===0x80000))this.Ab.Bi(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var Al3=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKH=[
E[2]-E[0],E[3]-E[1]];var Ap2=!A.aaX(Al3,AKH);var Fw=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fw,Cg)&&!Ap2){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ann(Fw,tmp);}X=X.Ah;}A.pe(this.
Eo,this);}if((Ap2&&(Al3[0]>0))&&(Al3[1]>0)){var Bd=A.abh(this.M,this.Bs);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ew&&(X.Ew.
NN!==this))X.Ew=null;if(!X.Ew&&((X.PT!==0x14)||!!this.Ag3))X.At3(Bd,this);}X=X.Ah;
}A.pe(this.Eo,this);}C.Ev.H.call(this,E);if(!!this.Ab&&Ap2){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JT],this);}}},Bgq:function(){var B;if((!this.Ag3||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A2o=((this.U&0x1000)===0x1000);for(;!!X&&!A2o;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A2o=true;if(((X.U&0x200)===
0x200))break;}if(A2o){this.U=this.U&~0x4000;this.Ab.BgB();}},ApN:function(G){var
B;this.BZ.Q=null;this.BZ.Qy=null;this.BZ=null;(B=this.NL)?B[1].call(B[0],this):null;
},Gi:function(E){var B;var Fw=A.abe(E,this.Bs);if(A.aaX(Fw,Cg))return;this.Bs=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ann(Fw,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bi(this.M);A.pe(
this.Eo,this);},A$b:function(E){var B;if(E<0)E=0;if(E===this.AVh)return;this.AVh=
E;if(!!this.Ab&&!!this.Ag3){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JT],this);}},Boj:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Ag3){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JT],this);}},J3:function(E){var B;if(E===this.Ag3)return;
this.Ag3=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JT],this);}},VH:function(Ac5,E8){var AtK=this.Dd(0x1);var RD=this.M;var
Vr=A.abe(AtK.slice(0,2),RD.slice(0,2));var Mj=A.abe(AtK.slice(2,4),RD.slice(2,4)
);var Br=Cg;if((Vr[0]>0)&&(Mj[0]>Vr[0]))Br=[Vr[0],Br[1]];else if((Vr[0]>0)&&(Mj[
0]>0))Br=[Mj[0],Br[1]];if((Mj[0]<0)&&(Vr[0]<Mj[0]))Br=[Mj[0],Br[1]];else if((Mj[
0]<0)&&(Vr[0]<0))Br=[Vr[0],Br[1]];if((Vr[1]>0)&&(Mj[1]>Vr[1]))Br=[Br[0],Vr[1]];else
if((Vr[1]>0)&&(Mj[1]>0))Br=[Br[0],Mj[1]];if((Mj[1]<0)&&(Vr[1]<Mj[1]))Br=[Br[0],Mj[
1]];else if((Mj[1]<0)&&(Vr[1]<0))Br=[Br[0],Vr[1]];if(A.aaX(Br,Cg)){(E8)?E8[1].call(
E8[0],this):null;return;}if(!!this.BZ){this.BZ.As(false);this.BZ.Q=null;this.BZ.
Qy=null;this.NL=null;}this.BZ=Ac5;if(!this.BZ){this.Gi(A.abe(this.Bs,Br));(E8)?E8[
1].call(E8[0],this):null;}else{this.BZ.As(false);this.BZ.HP(1);this.BZ.Q=[this,this.
Anz,this.Gi];this.BZ.Cy=this.Bs;this.BZ.B4=A.abe(this.Bs,Br);this.BZ.Qy=[this,this.
ApN];this.BZ.Aff(false);this.BZ.As(true);this.NL=E8;}},HJ:function(Ag,Ac8,Ac5,E8
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
U0);this.Bgq();var Az=Ag.GetExtent();var Bd=this.M;var LX=A.lb(Az,Bd);if((!Ac8&&
!((LX[0]>=LX[2])||(LX[1]>=LX[3])))||(Ac8&&A.aaY(LX,Az))){(E8)?E8[1].call(E8[0],this
):null;return;}var Br=Cg;if(Az[2]>Bd[2])Br=[Az[2]-Bd[2],Br[1]];if(Az[3]>Bd[3])Br=[
Br[0],Az[3]-Bd[3]];if(Br[0]>(Az[0]-Bd[0]))Br=[Az[0]-Bd[0],Br[1]];if(Br[1]>(Az[1]-
Bd[1]))Br=[Br[0],Az[1]-Bd[1]];if(!!this.BZ){this.BZ.As(false);this.BZ.Q=null;this.
BZ.Qy=null;this.NL=null;}this.BZ=Ac5;if(!this.BZ){this.Gi(A.abe(this.Bs,Br));(E8
)?E8[1].call(E8[0],this):null;}else{this.BZ.As(false);this.BZ.HP(1);this.BZ.Q=[this
,this.Anz,this.Gi];this.BZ.Cy=this.Bs;this.BZ.B4=A.abe(this.Bs,Br);this.BZ.Qy=[this
,this.ApN];this.BZ.Aff(false);this.BZ.As(true);this.NL=E8;}},BjP:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AI;}return CB;
},TX:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var I7=0x10000;if(((aFilter&0x10000)===0x10000))I7=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!I7||!((B=I7)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dd:function(aFilter){var B;var X=this.Ah;var AE=BF;var I7=0x10000;this.Bgq();if(((
aFilter&0x10000)===0x10000))I7=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!I7||!((B=I7)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anz:function(){return this.Bs;},_Init:
function(aArg){C.Ev._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Ev._Mark.call(this,D);if((B=this.BZ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Eo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HC:null,BZ:null,Cj:null,W1:null,NL:null,Eo:null,Hn:null,Ts:-1,Tr:0,Jw:-1,Ht:0,AiK:
8,Ov:0,UF:0,AcR:A.wf,G6:-1,Bs:0,Gv:-1,OZ:0,GQ:24,A0:0,Lo:null,NZ:false,At6:false
,AVo:function(Iy,On,Xt,Tm,Tn,Ah_,Pf,Rw,LJ,LF,LI){throw new Error(Aae);},AqL:function(
Iy,Ah_,Pf,Rw,LJ,LF,LI){throw new Error(U1);},AkM:function(Iy,On,Xt,Tm,Tn,Pf,Rw,LJ
,LF,LI){throw new Error(Aaf);},DispatchEvent:function(CN){var B;var result=null;
if(((this.Gv>=0)&&(this.Gv<this.A0))&&!this.AV){this.G6=this.Gv;this.Cj=(C.Cj.isPrototypeOf(
B=A._NewObject(this.Lo,0))?B:null);if(!!this.Ca)this.Ca.Ah=this.Cj;else this.B$=
this.Cj;this.Cj.AI=this.Ca;this.Ca=this.Cj;this.Cj.Ab=this;this.AcR=[(B=this.M)[
2]-B[0],this.GQ];(B=this.Hn)?B[1].call(B[0],this):null;var B2=(C.P.isPrototypeOf(
B=this.Cj)?B:null);if(!!B2)result=B2.DispatchEvent(CN);else result=this.Cj.G4(CN
);if(!!this.Cj.AI)this.Cj.AI.Ah=null;else this.B$=null;this.Ca=this.Cj.AI;this.Cj.
AI=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Aj:function(Ae){var B;if(!this.Lo){A.pe(this.Eo,this);return;
}this.At6=true;var AA0=0;if(!this.NZ)AA0=this.OZ;var FZ=this.Amb(-AA0-this.Bs,1);
var G1=this.Amb(((((B=this.M)[3]-B[1])-AA0)-this.Bs)-1,2);var CB=G1-FZ;if(CB<1)CB=
1;var Ail=(CB/2)|0;var Aim=(CB/3)|0;if(!Ail)Ail=1;if(!Aim)Aim=1;if(FZ<this.Ht){FZ=
FZ-Ail;G1=G1+Aim;}else if(G1>this.Jw){FZ=FZ-Aim;G1=G1+Ail;}else{FZ=this.Ht;G1=this.
Jw;}if(!this.NZ){if(FZ>=this.A0){FZ=0;G1=-1;}else if(G1<0){FZ=0;G1=-1;}if(G1>=this.
A0)G1=this.A0-1;if(FZ<0)FZ=0;}else if(this.A0<=0){FZ=0;G1=-1;}var Ai0=this.Ht;var
Ai1=this.Jw;var ApA=0;var ApB=-1;if(FZ>Ai0)Ai0=FZ;if(G1<Ai1)Ai1=G1;if(Ai0<=Ai1){
while((this.Jw<G1)&&(this.Ht<Ai0)){this.AdL();this.AzA();}while((this.Ht>FZ)&&(this.
Jw>Ai1)){this.ABb();this.Azz();}}else{this.Jw=(this.Jw-this.Ht)+FZ;this.Ht=FZ;ApA=
this.Ht;ApB=this.Jw;}while(this.Ht<FZ)this.AdL();while(this.Jw>G1)this.ABb();while(
this.Ht>FZ)this.Azz();while(this.Jw<G1)this.AzA();var Aa=this.B$;var inx=this.Ht;
var pos=[0,(AA0+this.Bs)+this.Ju(inx,0)];var BM=(B=this.M)[3]-B[1];var AlM=null;
var Bhp=(B=this.M)[2]-B[0];while(!!Aa){var IF=inx;if(this.NZ){if(IF<0)IF=this.A0-(-
IF%this.A0);if(IF>0)IF=IF%this.A0;}var AdM=((IF>=this.Tr)&&(IF<=this.Ts))||((inx>=
ApA)&&(inx<=ApB));var Apg=Aa.GetExtent();var Br=A.abe(pos,Apg.slice(0,2));if(AdM
)this.UF=this.GQ;else this.UF=Apg[3]-Apg[1];var A26=pos[1];var A27=pos[1]+this.UF;
if(!A.aaX(Br,Cg))Aa.Ann(Br,true);if((AdM&&(A26<BM))&&(A27>0)){this.Cj=Aa;this.G6=
IF;this.AcR=[Bhp,this.UF];(B=this.Hn)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.UF];}inx=this.Ht;Aa=this.B$;pos=[0,(AA0+this.Bs)+this.Ju(
inx,0)];while(!!Aa){var IF=inx;if(this.NZ){if(IF<0)IF=this.A0-(-IF%this.A0);if(IF>
0)IF=IF%this.A0;}var AdM=((IF>=this.Tr)&&(IF<=this.Ts))||((inx>=ApA)&&(inx<=ApB)
);if(AdM)this.UF=this.GQ;else this.UF=(B=Aa.GetExtent())[3]-B[1];var A26=pos[1];
var A27=pos[1]+this.UF;if(AdM&&!((A26<BM)&&(A27>0))){this.Cj=Aa;this.G6=IF;this.
AcR=[Bhp,this.UF];(B=this.Hn)?B[1].call(B[0],this):null;}if(((IF===this.Gv)&&this.
NZ)&&!!AlM){var RD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),RD))>A.aaH(A.lb(AlM.GetExtent(),RD)))AlM=Aa;}else if(IF===this.Gv)AlM=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.UF];}this.Tr=0;this.Ts=-1;this.Cj=null;this.G6=-
1;this.Ba(AlM);this.At6=false;A.pe(this.Eo,this);},QM:function(Ag,GC,aFilter){return null;
},AqS:function(Ag,aFilter){return null;},TX:function(Ag,aFilter){return null;},AC3:
function(Ag,aFilter){return null;},Dd:function(aFilter){return BF;},N0:function(
KI,FV,LJ,LF,LI){throw new Error(Xf);},AhG:function(Ag,Kc){throw new Error(Aag);}
,ZN:function(Ag){throw new Error(Aah);},Iu:function(Ag,Qj){throw new Error(U2);}
,HQ:function(Ag){throw new Error(Xg);},AMj:function(Ag,Kc){throw new Error(Pa);}
,J:function(Ag,Qj){throw new Error(Aai);},Ju:function(Ha,A1f){return Ha*this.GQ;
},Amb:function(Ff,A1f){return(Ff/this.GQ)|0;},ABb:function(){var Aa=this.Ca;if(!
Aa)return null;if(Aa===this.AV)this.Ba(null);this.Jw=this.Jw-1;if(!!Aa.AI)Aa.AI.
Ah=null;else this.B$=null;this.Ca=Aa.AI;Aa.AI=null;Aa.Ab=null;Aa.Ew=null;if(this.
Ov<this.AiK){if(!!this.HC)this.HC.AI=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ov++;}return Aa;
},AzA:function(){var B;var Aa=this.HC;var Adv=this.Lo;var AdP=++this.Jw;if(this.
NZ){if(AdP<0)AdP=this.A0-(-AdP%this.A0);if(AdP>0)AdP=AdP%this.A0;}while(!!Aa&&(((
B=Aa)?B.__proto__:null)!==Adv))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!
Aa.AI)Aa.AI.Ah=Aa.Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ov--;
}else{Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Adv,0))?B:null);Aa.A1(0x1D);if(!!this.
Ov)this.AiK++;}this.UF=this.GQ;this.G6=AdP;this.AcR=[(B=this.M)[2]-B[0],this.UF];
this.Cj=Aa;(B=this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.
Ca)this.Ca.Ah=Aa;Aa.Ab=this;Aa.AI=this.Ca;this.Ca=Aa;if(!this.B$)this.B$=Aa;if(AdP===
this.Gv)this.Ba(Aa);return Aa;},AdL:function(){var Aa=this.B$;if(!Aa)return null;
if(Aa===this.AV)this.Ba(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AI=null;else this.
Ca=null;this.B$=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ew=null;if(this.Ov<this.AiK){if(!
!this.HC)this.HC.AI=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ov++;}return Aa;},Azz:function(
){var B;var Aa=this.HC;var Adv=this.Lo;var Na=--this.Ht;if(this.NZ){if(Na<0)Na=this.
A0-(-Na%this.A0);if(Na>0)Na=Na%this.A0;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==
Adv))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.AI.Ah=Aa.Ah;if(this.
HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ov--;}else{Aa=(C.Cj.isPrototypeOf(
B=A._NewObject(Adv,0))?B:null);Aa.A1(0x1D);if(!!this.Ov)this.AiK++;}this.UF=this.
GQ;this.G6=Na;this.AcR=[(B=this.M)[2]-B[0],this.UF];this.Cj=Aa;(B=this.Hn)?B[1].
call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B$)this.B$.AI=Aa;Aa.Ab=this;
Aa.Ah=this.B$;this.B$=Aa;if(!this.Ca)this.Ca=Aa;if(Na===this.Gv)this.Ba(Aa);return Aa;
},ApN:function(G){var B;this.BZ.Q=null;this.BZ.Qy=null;this.BZ=null;(B=this.NL)?
B[1].call(B[0],this):null;},BBS:function(G){this.Gi(this.W1.DI[1]);},BBT:function(
G){var B;if(!!this.BZ){this.BZ.As(false);this.BZ.Q=null;this.BZ.Qy=null;this.BZ=
null;}if(!this.NZ){var AE=this.AqZ(0,this.A0-1);var Ago=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OZ);if(AE[0]>Ago[0])AE=[].concat(Ago[0],AE.slice(1,4));if(AE[1]>Ago[
1])AE=A.abP(AE,Ago[1]);var Fw=AE[1]-this.M[1];var A3l=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A3l>0)A3l=0;this.W1.DI=[0,this.Bs];this.W1.Gs=[0,(this.Bs+A3l)-Fw];this.
W1.Gf=[0,this.Bs-Fw];}else{var Fw=32000-(32000%this.GQ);this.W1.DI=[0,this.Bs];this.
W1.Gs=[0,this.Bs-Fw];this.W1.Gf=[0,this.Bs+Fw];}},ATo:function(E){var B;if(this.
NZ===E)return;this.NZ=E;while(!!this.AdL());this.Am();this.Bi([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Axc:function(E){if(E===this.W1)return;if(!!E&&!!E.Auh){A.ab5(
"%s%*%s",Ol,E,Rp);throw new Error(Xh);}if(!!this.W1){this.W1.AKU=null;this.W1.Auh=
null;}this.W1=E;if(!!E){E.AKU=[this,this.BBT];E.Auh=[this,this.BBS];}},Gi:function(
E){var B;if(this.NZ&&(this.A0>0)){var HF=this.Ju(this.A0,3);if(E<0)E=HF-(-E%HF);
if(E>0)E=E%HF;if(E>0)E=E-HF;}if(E===this.Bs)return;this.Bs=E;this.Am();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GU:function(E){if(E<0)E=-1;if(E===this.Gv)return;
this.Gv=E;this.Am();},A_0:function(E){var B;if(E<0)E=0;if(E===this.OZ)return;this.
OZ=E;if(!this.NZ){this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Afb:function(
E){var B;if(E<1)E=1;if(E===this.GQ)return;this.GQ=E;while(!!this.AdL());this.Am(
);this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JF:function(E){var B;if(E<0)E=0;
if(E===this.A0)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NZ){if(
E>this.A0){AE=[].concat(AE.slice(0,3),(this.OZ+this.Bs)+this.Ju(E,3));AE=A.abP(AE
,(this.OZ+this.Bs)+this.Ju(this.A0,3));}else{AE=A.abP(AE,(this.OZ+this.Bs)+this.
Ju(E,3));AE=[].concat(AE.slice(0,3),(this.OZ+this.Bs)+this.Ju(this.A0,3));}}else
while(!!this.AdL());this.A0=E;this.Am();this.Bi(AE);},N_:function(E){var B;if(E===
this.Lo)return;this.Lo=E;while(!!this.AdL());this.HC=null;this.Ov=0;this.Am();this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bj3:function(Ha){if(this.At6)return null;
if((Ha<0)||(Ha>=this.A0))return null;if(!this.NZ){if((Ha<this.Ht)||(Ha>this.Jw))
return null;var X=this.B$;while(Ha>this.Ht){X=X.Ah;Ha=Ha-1;}return X;}else{var Na=
this.Ht;if(Na<0)Na=this.A0-(-Na%this.A0);if(Na>0)Na=Na%this.A0;var X=this.B$;while(
!!X){if((Na%this.A0)===Ha)return X;X=X.Ah;Na=Na+1;}return null;}},ABV:function(Ac5
,E8){var B;if(this.NZ){(E8)?E8[1].call(E8[0],this):null;return;}var AKm=this.Bs;
var BdZ=((((B=this.M)[3]-B[1])-this.Bs)-this.OZ)-this.Ju(this.A0,3);var Br=0;if(
AKm>0)Br=-AKm;else if(BdZ>0)Br=BdZ;if((Br>0)&&(Br>-AKm))Br=-AKm;if(!Br){(E8)?E8[
1].call(E8[0],this):null;return;}if(!!this.BZ){this.BZ.As(false);this.BZ.Q=null;
this.BZ.Qy=null;this.NL=null;}this.BZ=Ac5;if(!this.BZ){this.Gi(this.Bs+Br);(E8)?
E8[1].call(E8[0],this):null;}else{this.BZ.As(false);this.BZ.HP(1);this.BZ.Q=[this
,this.Anz,this.Gi];this.BZ.Cy=this.Bs;this.BZ.B4=this.Bs+Br;this.BZ.Qy=[this,this.
ApN];this.BZ.Aff(false);this.BZ.As(true);this.NL=E8;}},HJ:function(Ha,Ac8,Ac5,E8
){var B;if((Ha<0)||(Ha>=this.A0))return;var Az=this.AqZ(Ha,Ha);var Bd=this.M;var
LX=A.lb(Az,Bd);if((!Ac8&&!((LX[0]>=LX[2])||(LX[1]>=LX[3])))||(Ac8&&A.aaY(LX,Az))
){(E8)?E8[1].call(E8[0],this):null;return;}var Br=0;if(Az[3]>Bd[3])Br=Az[3]-Bd[3
];if(Br>(Az[1]-Bd[1]))Br=Az[1]-Bd[1];if(!!this.BZ){this.BZ.As(false);this.BZ.Q=null;
this.BZ.Qy=null;this.NL=null;}this.BZ=Ac5;if(!this.BZ){this.Gi(this.Bs-Br);(E8)?
E8[1].call(E8[0],this):null;}else{this.BZ.As(false);this.BZ.HP(1);this.BZ.Q=[this
,this.Anz,this.Gi];this.BZ.Cy=this.Bs;this.BZ.B4=this.Bs-Br;this.BZ.Qy=[this,this.
ApN];this.BZ.Aff(false);this.BZ.As(true);this.NL=E8;}},BjU:function(){return BF;
},AO1:function(){if((this.OZ<=0)||this.NZ)return BF;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Bs);AE=[].concat(AE.slice(0,3),AE[1]+this.OZ);return AE;},A7n:function(Ff
){if(((this.A0<=0)||(Ff[0]<this.M[0]))||(Ff[0]>=this.M[2]))return-1;Ff=A.abe(Ff,
this.M.slice(0,2));if(!this.NZ){var Aa=(Ff[1]-this.Bs)-this.OZ;if(Aa>0)Aa=this.Amb(
Aa,0);if((Aa<0)||(Aa>=this.A0))return-1;return Aa;}var Aa=Ff[1]-this.Bs;if(Aa>0)
Aa=this.Amb(Aa,0);if(Aa<0)Aa=this.Amb(Aa,0)-1;if(Aa<0)Aa=this.A0-(-Aa%this.A0);if(
Aa>0)Aa=Aa%this.A0;return Aa;},AqZ:function(Kb,Mc){if(Kb<0)Kb=0;if(Mc>=this.A0)Mc=
this.A0-1;if(Kb>Mc)return BF;var AE=this.M;var Br=this.Bs;if(this.NZ){var HF=this.
Ju(this.A0,3);if(Br<0)Br=HF-(-Br%HF);if(Br>0)Br=Br%HF;if(Br>0)Br=Br-HF;}else Br=
Br+this.OZ;AE=[].concat(AE.slice(0,3),(AE[1]+Br)+this.Ju(Mc+1,0));AE=A.abP(AE,(AE[
1]+Br)+this.Ju(Kb,0));return AE;},AbO:function(Kb,Mc){var B;if(Kb<0)Kb=0;if(Kb>Mc
)return;if(this.Tr>this.Ts){this.Tr=Kb;this.Ts=Mc;}else{if(Kb<this.Tr)this.Tr=Kb;
if(Mc>this.Ts)this.Ts=Mc;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NZ){
AE=A.abP(AE,(this.OZ+this.Bs)+this.Ju(Kb,0));AE=[].concat(AE.slice(0,3),(this.OZ+
this.Bs)+this.Ju(Mc+1,0));}else if((this.Ju(this.A0-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Br=this.Bs;var HF=this.Ju(this.A0,3);if(Br<0)Br=HF-(-Br%HF);if(
Br>0)Br=Br%HF;if(Br>0)Br=Br-HF;AE=A.abP(AE,Br+this.Ju(Kb,0));AE=[].concat(AE.slice(
0,3),Br+this.Ju(Mc+1,0));}this.Am();this.Bi(AE);},Anz:function(){return this.Bs;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(Xi);
this.Lo=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HC
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BZ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W1)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Eo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hn)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.DC={HC:null
,BZ:null,Cj:null,NL:null,Hn:null,Ts:-1,Tr:0,Jw:-1,Ht:0,AiK:8,Ov:0,SW:0,AcR:A.wf,
G6:-1,Bs:0,Gv:-1,Wk:24,A0:0,Lo:null,At6:false,AVo:function(Iy,On,Xt,Tm,Tn,Ah_,Pf
,Rw,LJ,LF,LI){throw new Error(U3);},AqL:function(Iy,Ah_,Pf,Rw,LJ,LF,LI){throw new
Error(Xj);},AkM:function(Iy,On,Xt,Tm,Tn,Pf,Rw,LJ,LF,LI){throw new Error(Aaj);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gv>=0)&&(this.Gv<this.A0))&&!this.AV
){this.G6=this.Gv;this.Cj=(C.Cj.isPrototypeOf(B=A._NewObject(this.Lo,0))?B:null);
if(!!this.Ca)this.Ca.Ah=this.Cj;else this.B$=this.Cj;this.Cj.AI=this.Ca;this.Ca=
this.Cj;this.Cj.Ab=this;this.AcR=[this.SW,(B=this.M)[3]-B[1]];(B=this.Hn)?B[1].call(
B[0],this):null;var B2=(C.P.isPrototypeOf(B=this.Cj)?B:null);if(!!B2)result=B2.DispatchEvent(
CN);else result=this.Cj.G4(CN);if(!!this.Cj.AI)this.Cj.AI.Ah=null;else this.B$=null;
this.Ca=this.Cj.AI;this.Cj.AI=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Aj:function(Ae){var B;if(!this.Lo
)return;this.At6=true;var FZ=this.Amb(0-this.Bs,1);var G1=this.Amb((((B=this.M)[
2]-B[0])-this.Bs)-1,2);var CB=G1-FZ;if(CB<1)CB=1;var Ail=(CB/2)|0;var Aim=(CB/3)|
0;if(!Ail)Ail=1;if(!Aim)Aim=1;if(FZ<this.Ht){FZ=FZ-Ail;G1=G1+Aim;}else if(G1>this.
Jw){FZ=FZ-Aim;G1=G1+Ail;}else{FZ=this.Ht;G1=this.Jw;}if(FZ>=this.A0){FZ=0;G1=-1;
}else if(G1<0){FZ=0;G1=-1;}if(G1>=this.A0)G1=this.A0-1;if(FZ<0)FZ=0;var Ai0=this.
Ht;var Ai1=this.Jw;var ApA=0;var ApB=-1;if(FZ>Ai0)Ai0=FZ;if(G1<Ai1)Ai1=G1;if(Ai0<=
Ai1){while((this.Jw<G1)&&(this.Ht<Ai0)){this.AdL();this.AzA();}while((this.Ht>FZ
)&&(this.Jw>Ai1)){this.ABb();this.Azz();}}else{this.Jw=(this.Jw-this.Ht)+FZ;this.
Ht=FZ;ApA=this.Ht;ApB=this.Jw;}while(this.Ht<FZ)this.AdL();while(this.Jw>G1)this.
ABb();while(this.Ht>FZ)this.Azz();while(this.Jw<G1)this.AzA();var Aa=this.B$;var
inx=this.Ht;var pos=[this.Bs+this.Ju(inx,0),0];var B0=(B=this.M)[2]-B[0];var AlM=
null;var Bhc=(B=this.M)[3]-B[1];while(!!Aa){var IF=inx;var AdM=((IF>=this.Tr)&&(
IF<=this.Ts))||((inx>=ApA)&&(inx<=ApB));var Apg=Aa.GetExtent();var Br=A.abe(pos,
Apg.slice(0,2));if(AdM)this.SW=this.Wk;else this.SW=Apg[2]-Apg[0];var A24=pos[0];
var A25=pos[0]+this.SW;if(!A.aaX(Br,Cg))Aa.Ann(Br,true);if((AdM&&(A24<B0))&&(A25>
0)){this.Cj=Aa;this.G6=IF;this.AcR=[this.SW,Bhc];(B=this.Hn)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SW,pos[1]];}inx=this.Ht;Aa=this.B$;pos=[
this.Bs+this.Ju(inx,0),0];while(!!Aa){var IF=inx;var AdM=((IF>=this.Tr)&&(IF<=this.
Ts))||((inx>=ApA)&&(inx<=ApB));if(AdM)this.SW=this.Wk;else this.SW=(B=Aa.GetExtent(
))[2]-B[0];var A24=pos[0];var A25=pos[0]+this.SW;if(AdM&&!((A24<B0)&&(A25>0))){this.
Cj=Aa;this.G6=IF;this.AcR=[this.SW,Bhc];(B=this.Hn)?B[1].call(B[0],this):null;}if(
IF===this.Gv)AlM=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SW,pos[1]];}this.Tr=0;this.
Ts=-1;this.Cj=null;this.G6=-1;this.Ba(AlM);this.At6=false;},QM:function(Ag,GC,aFilter
){return null;},AqS:function(Ag,aFilter){return null;},TX:function(Ag,aFilter){return null;
},AC3:function(Ag,aFilter){return null;},Dd:function(aFilter){return BF;},N0:function(
KI,FV,LJ,LF,LI){throw new Error(Xk);},AhG:function(Ag,Kc){throw new Error(U4);},
ZN:function(Ag){throw new Error(Xl);},Iu:function(Ag,Qj){throw new Error(Xm);},HQ:
function(Ag){throw new Error(Xn);},AMj:function(Ag,Kc){throw new Error(Rq);},J:function(
Ag,Qj){throw new Error(Tj);},Ju:function(Ha,A1f){return Ha*this.Wk;},Amb:function(
Ff,A1f){return(Ff/this.Wk)|0;},ABb:function(){var Aa=this.Ca;if(!Aa)return null;
if(Aa===this.AV)this.Ba(null);this.Jw=this.Jw-1;if(!!Aa.AI)Aa.AI.Ah=null;else this.
B$=null;this.Ca=Aa.AI;Aa.AI=null;Aa.Ab=null;Aa.Ew=null;if(this.Ov<this.AiK){if(!
!this.HC)this.HC.AI=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ov++;}return Aa;},AzA:function(
){var B;var Aa=this.HC;var Adv=this.Lo;var AdP=++this.Jw;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adv))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.
AI.Ah=Aa.Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ov--;}else{
Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Adv,0))?B:null);Aa.A1(0x1D);if(!!this.Ov)this.
AiK++;}this.SW=this.Wk;this.G6=AdP;this.AcR=[this.SW,(B=this.M)[3]-B[1]];this.Cj=
Aa;(B=this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.Ca)this.
Ca.Ah=Aa;Aa.Ab=this;Aa.AI=this.Ca;this.Ca=Aa;if(!this.B$)this.B$=Aa;if(AdP===this.
Gv)this.Ba(Aa);return Aa;},AdL:function(){var Aa=this.B$;if(!Aa)return null;if(Aa===
this.AV)this.Ba(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AI=null;else this.Ca=null;
this.B$=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ew=null;if(this.Ov<this.AiK){if(!!this.HC
)this.HC.AI=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ov++;}return Aa;},Azz:function(){var
B;var Aa=this.HC;var Adv=this.Lo;var Na=--this.Ht;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adv))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AI=Aa.AI;if(!!Aa.AI)Aa.AI.Ah=Aa.
Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AI=null;this.Ov--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adv,0))?B:null);Aa.A1(0x1D);if(!!this.Ov)this.AiK++;
}this.SW=this.Wk;this.G6=Na;this.AcR=[this.SW,(B=this.M)[3]-B[1]];this.Cj=Aa;(B=
this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B$)this.B$.
AI=Aa;Aa.Ab=this;Aa.Ah=this.B$;this.B$=Aa;if(!this.Ca)this.Ca=Aa;if(Na===this.Gv
)this.Ba(Aa);return Aa;},ApN:function(G){var B;this.BZ.Q=null;this.BZ.Qy=null;this.
BZ=null;(B=this.NL)?B[1].call(B[0],this):null;},Gi:function(E){var B;if(E===this.
Bs)return;this.Bs=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GU:function(
E){if(E<0)E=-1;if(E===this.Gv)return;this.Gv=E;this.Am();},AFx:function(E){var B;
if(E<1)E=1;if(E===this.Wk)return;this.Wk=E;while(!!this.AdL());this.Am();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JF:function(E){var B;if(E<0)E=0;if(E===this.
A0)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.A0){AE=[].concat(this.
Bs+this.Ju(this.A0,3),AE.slice(1,4));AE=A.abN(AE,this.Bs+this.Ju(E,3));}else{AE=
A.abN(AE,this.Bs+this.Ju(this.A0,3));AE=[].concat(this.Bs+this.Ju(E,3),AE.slice(
1,4));}this.A0=E;this.Am();this.Bi(AE);},N_:function(E){var B;if(E===this.Lo)return;
this.Lo=E;while(!!this.AdL());this.HC=null;this.Ov=0;this.Am();this.Bi([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BpX:function(Byy,Byz){if(!this.BZ)return;if(Byy)this.Gi(
this.BZ.B4);var A42=this.NL;this.BZ.As(false);this.BZ.Q=null;this.BZ.Qy=null;this.
NL=null;this.BZ=null;if(Byz)(A42)?A42[1].call(A42[0],this):null;},Bks:function(){
return!!this.BZ;},HJ:function(Ha,Ac8,Ac5,E8){var B;if((Ha<0)||(Ha>=this.A0))return;
var Az=this.AqZ(Ha,Ha);var Bd=this.M;var LX=A.lb(Az,Bd);if((!Ac8&&!((LX[0]>=LX[2
])||(LX[1]>=LX[3])))||(Ac8&&A.aaY(LX,Az))){(E8)?E8[1].call(E8[0],this):null;return;
}var Br=0;if(Az[2]>Bd[2])Br=Az[2]-Bd[2];if(Br>(Az[0]-Bd[0]))Br=Az[0]-Bd[0];if(!!
this.BZ){this.BZ.As(false);this.BZ.Q=null;this.BZ.Qy=null;this.NL=null;}this.BZ=
Ac5;if(!this.BZ){this.Gi(this.Bs-Br);(E8)?E8[1].call(E8[0],this):null;}else{this.
BZ.As(false);this.BZ.HP(1);this.BZ.Q=[this,this.Anz,this.Gi];this.BZ.Cy=this.Bs;
this.BZ.B4=this.Bs-Br;this.BZ.Qy=[this,this.ApN];this.BZ.Aff(false);this.BZ.As(true
);this.NL=E8;}},AqZ:function(Kb,Mc){if(Kb<0)Kb=0;if(Mc>=this.A0)Mc=this.A0-1;if(
Kb>Mc)return BF;var AE=this.M;var Br=this.Bs;AE=A.abN(AE,(AE[0]+Br)+this.Ju(Mc+1
,0));AE=[].concat((AE[0]+Br)+this.Ju(Kb,0),AE.slice(1,4));return AE;},AbO:function(
Kb,Mc){var B;if(Kb<0)Kb=0;if(Kb>Mc)return;if(this.Tr>this.Ts){this.Tr=Kb;this.Ts=
Mc;}else{if(Kb<this.Tr)this.Tr=Kb;if(Mc>this.Ts)this.Ts=Mc;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Bs+this.Ju(Kb,0),AE.slice(1,4));AE=A.abN(
AE,this.Bs+this.Ju(Mc+1,0));this.Am();this.Bi(AE);},Anz:function(){return this.Bs;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.DC;this.H(Xi);
this.Lo=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HC
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BZ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASC:null,AE0:null,Awb:null,D3:null,
Lt:null,BH:null,ALh:0,Bp:0,IP:0,Bq:0,Oe:0,JA:0,DI:A.wf,N2:A.wf,H4:A.wf,AxD:8,Afl:
0,A8g:1,Down:false,YR:false,NT:false,A2v:false,AAu:0,Ks:function(C2,aClip,aOffset
,Ck,aBlend){},G4:function(CN){var B;var BP=(C.Aek.isPrototypeOf(CN)?CN:null);var
D7=(C.AqN.isPrototypeOf(CN)?CN:null);var AKw=this.YR;var AaS;var Vo;var ABw;var M9;
var AzS;if(!BP&&!D7)return null;AaS=(!!BP&&BP.Down)&&!BP.JA;Vo=(!!BP&&BP.Down)&&(
BP.JA>0);ABw=(!!BP&&BP.Down)&&(BP.JA>this.AAu);M9=!!BP&&!BP.Down;AzS=!!D7;if(AaS
)this.AAu=((B=(BP.NT?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afl&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var ID=(C.Au4.isPrototypeOf(CN)?CN:null);if(((
!!ID&&ID.Down)&&(ID.AxV!==this))&&A.wa(this.GetExtent(),this.Ab.A8b(ID.L4))){this.
ALh=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaS){var ApH=0;var Adq;this.Bp=
this.Bp|(1<<BP.IP);for(Adq=this.Bp&4095;Adq>0;Adq=Adq>>1)if(!!(Adq&1))ApH=ApH+1;
if(ApH===1)this.Bp=(this.Bp|16777216)|(4096<<BP.IP);}if(M9&&(this.Bp<16777216)){
var II=this.Ip();var JO=null;if(!!II){var A4T=(!!this.AI?this.AI:this.Ab);var A2j=(
!!II.JP?II.JP.C3:null);JO=II.Ys(A.abh(Aak,BP.L4),BP.IP,BP.Oe,A2j,A4T,0x0);}if(!!
JO){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JO.Cj.G4(A._NewObject(C.Aek,0).
InitializeDown(O,BP.H4,BP.Oe,Cg,true,BP.L4));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JO.Cj.G4(A._NewObject(C.Aek,0).InitializeUp(O,BP.H4,BP.H4,0,BP.Oe,Cg,false,BP.
L4,BP.L4));}}if(M9)this.Bp=(this.Bp&~(1<<BP.IP))|33554432;if(ABw&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(M9&&BP.NT)this.Bp=this.Bp|67108864;if(M9&&!(this.Bp&
4095))this.ALh=0x0;if(M9&&!(this.Bp&16777215))this.Bp=0;if(Vo&&(this.Bp>=67108864
)){var II=this.Ip();if(!!II)II.AUM(null,null,this,this.ALh);}if((Vo&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Vo=false;M9=true;}if(!!BP&&!(this.Bp&(4096<<BP.
IP)))return this;if(!!D7&&!(this.Bp&(4096<<D7.IP)))return this;if(M9&&!(this.Bp&
16777216))return this;if(((AaS||AzS)||Vo)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(M9)this.Bp=this.Bp&3758100479;if(M9&&!(this.Bp&16777215))this.
Bp=0;if(!!BP){this.Down=AaS||Vo;this.YR=this.ARv(BP.H4);this.N2=BP.N2;this.H4=BP.
H4;this.DI=Cg;this.JA=BP.JA;this.Oe=BP.Oe;this.NT=BP.NT;this.IP=BP.IP;this.Bq=BP.
Bq;if(BP.Down&&!BP.JA)AKw=false;}if(!!D7){this.Down=true;this.YR=this.ARv(D7.H4);
this.N2=D7.N2;this.H4=D7.H4;this.DI=D7.DI;this.JA=D7.JA;this.Oe=D7.Oe;this.IP=D7.
IP;this.NT=false;this.Bq=D7.Bq;}var A2p=this.Down;if(!!D7)(B=this.ASC)?B[1].call(
B[0],this):null;if((!!BP&&this.Down)&&!this.JA)(B=this.BH)?B[1].call(B[0],this):
null;if((!!BP&&this.Down)&&(this.JA>0))(B=this.D3)?B[1].call(B[0],this):null;if((
this.Down&&this.YR)&&!AKw){this.A2v=true;(B=this.Awb)?B[1].call(B[0],this):null;
}if(this.A2v&&(((A2p&&!this.YR)&&AKw)||((!A2p&&this.YR)&&AKw))){this.A2v=false;(
B=this.AE0)?B[1].call(B[0],this):null;}if(!!BP&&!A2p)(B=this.Lt)?B[1].call(B[0],
this):null;if(!!this.Afl){var AdK=0x0;if(((((this.Afl&0x10)===0x10)&&!!BP)&&BP.Down
)&&(BP.JA>=1000))AdK=0x10;if((((this.Afl&0x1)===0x1)&&!!D7)&&((D7.L4[1]-D7.Ag5[1
])<=-this.AxD))AdK=0x1;if((((this.Afl&0x2)===0x2)&&!!D7)&&((D7.L4[1]-D7.Ag5[1])>=
this.AxD))AdK=0x2;if((((this.Afl&0x4)===0x4)&&!!D7)&&((D7.L4[0]-D7.Ag5[0])<=-this.
AxD))AdK=0x4;if((((this.Afl&0x8)===0x8)&&!!D7)&&((D7.L4[0]-D7.Ag5[0])>=this.AxD)
)AdK=0x8;if(!!AdK){var II=this.Ip();if(!!II){this.ALh=AdK;II.AUM(null,this,this,
AdK);}}}return this;},Ys:function(Dc,BI,Oo,Aau,Ac$,Ac_){var B;if(!!Aau&&(Aau!==this
))return null;if((Oo<1)||(Oo>this.A8g))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BI)))return null;if(!!(Ac_&this.Afl))return null;
if(this.Bj7()){var Az=A.lb(Dc,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qm=A.aaI(Dc);var Fw=Cg;if(Qm[0]<Az[0])Fw=[Az[0]-Qm[0],Fw[1]];if(Qm[0]>=
Az[2])Fw=[(Az[2]-Qm[0])-1,Fw[1]];if(Qm[1]<Az[1])Fw=[Fw[0],Az[1]-Qm[1]];if(Qm[1]>=
Az[3])Fw=[Fw[0],(Az[3]-Qm[1])-1];return A._NewObject(C.Au5,0).Initialize(this,Fw
);}}else{var HD=A.abi(9,A.wf,null);var O;HD.Set(0,A.aaI(Dc));HD.Set(1,HD.Get(0));
HD.Set(2,HD.Get(0));HD.Set(3,HD.Get(0));HD.Set(4,HD.Get(0));HD.Set(1,[Dc[0],HD.Get(
1)[1]]);HD.Set(2,[HD.Get(2)[0],Dc[1]]);HD.Set(3,[Dc[2],HD.Get(3)[1]]);HD.Set(4,[
HD.Get(4)[0],Dc[3]]);HD.Set(5,Dc.slice(0,2));HD.Set(6,[Dc[2],Dc[1]]);HD.Set(7,[Dc[
0],Dc[3]]);HD.Set(8,Dc.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARv(HD.Get(O)))return A.
_NewObject(C.Au5,0).Initialize(this,A.abe(HD.Get(O),HD.Get(0)));}return null;},Bob:
function(E){if(E<1)E=1;this.AxD=E;},AFG:function(E){if(E<1)E=1;this.A8g=E;},As:function(
E){if(E)this.Ct(0x100000,0x0);else this.Ct(0x0,0x100000);},_Init:function(aArg){
C.ZL._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZL._Mark.call(this,D);if((B=this.ASC)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AE0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Awb
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D3)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Lt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.Ib={timer:null,AKU:null,Auh:null,AGf:null,Zv:null,ST:null,Bp:0,AJx:0,Adt:5000
,Ap1:0,AKv:A.wf,Apd:0,AfV:0,EZ:0,Amn:0,Auv:0,Apc:0,AfU:0,EY:0,Amm:0,Amk:0,N2:A.wf
,A6y:A.wf,Gf:A.wf,Gs:A.wf,DI:A.wf,W3:A.wf,A7a:0.5,A$S:true,AGX:true,ZW:false,XR:
false,XS:false,AoY:false,AAu:0,Ks:function(C2,aClip,aOffset,Ck,aBlend){},G4:function(
CN){var B;var BP=(C.Aek.isPrototypeOf(CN)?CN:null);var D7=(C.AqN.isPrototypeOf(CN
)?CN:null);var ID=(C.Au4.isPrototypeOf(CN)?CN:null);var AaS;var Vo;var ABw;var M9;
var AzS;AaS=(!!BP&&BP.Down)&&!BP.JA;Vo=(!!BP&&BP.Down)&&(BP.JA>0);ABw=(!!BP&&BP.
Down)&&(BP.JA>this.AAu);M9=!!BP&&!BP.Down;AzS=!!D7;if(AaS)this.AAu=((B=(BP.NT?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaS){var ApH=0;var Adq;this.Bp=this.Bp|(1<<BP.
IP);for(Adq=this.Bp&4095;Adq>0;Adq=Adq>>1)if(!!(Adq&1))ApH=ApH+1;if(ApH===1)this.
Bp=(this.Bp|16777216)|(4096<<BP.IP);}if(M9&&(this.Bp<16777216)){var II=this.Ip();
var JO=null;if(!!II){var A4T=(!!this.AI?this.AI:this.Ab);var A2j=(!!II.JP?II.JP.
C3:null);JO=II.Ys(A.abh(Aak,BP.L4),BP.IP,BP.Oe,A2j,A4T,0x0);}if(!!JO){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JO.Cj.G4(A._NewObject(C.Aek,0).InitializeDown(
O,BP.H4,BP.Oe,Cg,true,BP.L4));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JO.Cj.G4(A.
_NewObject(C.Aek,0).InitializeUp(O,BP.H4,BP.H4,0,BP.Oe,Cg,false,BP.L4,BP.L4));}}
if(M9)this.Bp=(this.Bp&~(1<<BP.IP))|33554432;if(ABw&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M9&&BP.NT)this.Bp=this.Bp|67108864;if(M9&&!(this.Bp&16777215
))this.Bp=0;if(Vo&&(this.Bp>=67108864)){var II=this.Ip();if(!!II)II.AUM(null,null
,this,0x0);}if((Vo&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vo=false;M9=true;
}if(!!BP&&!(this.Bp&(4096<<BP.IP)))return this;if(!!D7&&!(this.Bp&(4096<<D7.IP))
)return this;if(M9&&!(this.Bp&16777216))return this;if(((AaS||AzS)||Vo)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(M9)this.Bp=this.Bp&3758100479;
if(M9&&!(this.Bp&16777215))this.Bp=0;if(!!ID&&(ID.AxV===this))return null;if((!!
ID&&ID.Down)&&(this.AoY||!this.ZW))return null;if((!!ID&&ID.Down)&&!A.wa(this.M,
this.Ab.A8b(ID.L4)))return null;if((!!ID&&!ID.Down)&&(!this.AoY||(this.AJx!==ID.
IP)))return null;if((!BP&&!D7)&&!ID)return null;if(!!BP){this.AoY=AaS||Vo;this.AJx=
BP.IP;this.N2=BP.N2;}if(!!D7)this.AJx=D7.IP;if(!!ID){this.AoY=ID.Down;this.AJx=ID.
IP;}if(!!ID&&ID.Down){this.A4U();this.EY=(((ID.Bq-this.Amk)*0.001)*this.AfU)+this.
EY;this.EZ=(((ID.Bq-this.Auv)*0.001)*this.AfV)+this.EZ;if(this.XR)this.EY=0;if(this.
XS)this.EZ=0;this.AfU=0;this.AfV=0;this.XR=false;this.XS=false;this.AKv=this.DI;
this.Ap1=ID.Bq;return this;}if(AaS){this.A4U();this.EY=(((BP.Bq-this.Amk)*0.001)
*this.AfU)+this.EY;this.EZ=(((BP.Bq-this.Auv)*0.001)*this.AfV)+this.EZ;if(this.XR||
!this.ZW)this.EY=0;if(this.XS||!this.ZW)this.EZ=0;this.AfU=0;this.AfV=0;this.XR=
false;this.XS=false;if(!this.ZW){this.ZW=true;(B=this.ST)?B[1].call(B[0],this):null;(
B=this.AKU)?B[1].call(B[0],this):null;}this.AKv=this.DI;this.Ap1=BP.Bq;}if(!!D7){
var Hc=A.abe(D7.H4,D7.N2);var CD=this.DI;if(this.AGX)CD=[this.AKv[0]+Hc[0],CD[1]
];CD=[CD[0],this.AKv[1]+Hc[1]];if(this.A$S){if(CD[0]<this.Gs[0])CD=[this.Gs[0]+(((
CD[0]-this.Gs[0])/2)|0),CD[1]];else if(CD[0]>this.Gf[0])CD=[this.Gf[0]+(((CD[0]-
this.Gf[0])/2)|0),CD[1]];if(CD[1]<this.Gs[1])CD=[CD[0],this.Gs[1]+(((CD[1]-this.
Gs[1])/2)|0)];else if(CD[1]>this.Gf[1])CD=[CD[0],this.Gf[1]+(((CD[1]-this.Gf[1])
/2)|0)];}else{if(CD[0]<this.Gs[0])CD=[this.Gs[0],CD[1]];else if(CD[0]>this.Gf[0]
)CD=[this.Gf[0],CD[1]];if(CD[1]<this.Gs[1])CD=[CD[0],this.Gs[1]];else if(CD[1]>this.
Gf[1])CD=[CD[0],this.Gf[1]];}if(!A.aaX(CD,this.DI)){this.A6y=A.abe(CD,this.DI);this.
DI=CD;(B=this.Auh)?B[1].call(B[0],this):null;(B=this.AGf)?B[1].call(B[0],this):null;
}}if((!!ID&&!ID.Down)&&((ID.Bq-this.Ap1)>=200)){this.EY=0;this.EZ=0;}if(Vo&&((BP.
Bq-this.Ap1)>=200)){this.EY=0;this.EZ=0;}if(!!D7&&(D7.Bq>this.Ap1)){var Hc=D7.DI;
var Ber=1000/(D7.Bq-this.Ap1);var AiN=0;var AiO;if(this.AGX)AiN=Hc[0]*Ber;AiO=Hc[
1]*Ber;if((AiN*this.EY)<0)this.EY=0;if((AiO*this.EZ)<0)this.EZ=0;this.EY=(this.EY+
AiN)*0.5;this.EZ=(this.EZ+AiO)*0.5;this.Ap1=D7.Bq;}if(!M9&&!ID)return this;if(!!
BP&&BP.NT){this.EY=0;this.EZ=0;}if((this.DI[0]<=this.Gs[0])||(this.DI[0]>=this.Gf[
0]))this.EY=0;else if(!this.EY){var ER=this.DI[0];var Fh=this.Gs[0];var EJ=this.
Gf[0];if(ER<Fh)EJ=this.Gs[0];else if(ER>EJ)Fh=this.Gf[0];else if(this.W3[0]<=1){
Fh=ER;EJ=ER;}else{var Adx=(EJ-ER)%this.W3[0];EJ=(ER-this.W3[0])+Adx;Fh=ER+Adx;if(
EJ<this.Gs[0])EJ=this.Gs[0];if(Fh>this.Gf[0])Fh=this.Gf[0];}if((Fh-ER)<=(ER-EJ))
ER=Fh;else ER=EJ;if(ER!==this.DI[0]){var Jt=ER-this.DI[0];if(Jt>0)this.EY=Math.sqrt((
Jt*2)*this.Adt)+20;if(Jt<0)this.EY=-Math.sqrt((-Jt*2)*this.Adt)-20;this.AfU=(400-(
this.EY*this.EY))/(2*Jt);this.Apc=ER;}}else{var BCQ=this.EY*this.EY;var Jt=BCQ/(
2*this.Adt);var ER=this.DI[0];if(this.EY>0)ER=ER+(Jt|0);if(this.EY<0)ER=ER-(Jt|0
);if(ER>this.Gf[0])ER=this.Gf[0];else if(ER<this.Gs[0])ER=this.Gs[0];var Bg9=ER;
var Fh=this.Gs[0];var EJ=this.Gf[0];if(ER<Fh)EJ=this.Gs[0];else if(ER>EJ)Fh=this.
Gf[0];else if(this.W3[0]<=1){Fh=ER;EJ=ER;}else{var Adx=(EJ-ER)%this.W3[0];EJ=(ER-
this.W3[0])+Adx;Fh=ER+Adx;if(EJ<this.Gs[0])EJ=this.Gs[0];if(Fh>this.Gf[0])Fh=this.
Gf[0];}if(this.EY>0){if(EJ<=this.DI[0])ER=Fh;else if((ER-EJ)<(Fh-ER))ER=EJ;else ER=
Fh;}else if(Fh>=this.DI[0])ER=EJ;else if((ER-EJ)>(Fh-ER))ER=Fh;else ER=EJ;if(ER!==
this.DI[0]){Jt=ER-this.DI[0];if(ER!==Bg9){var Ai9=ER-Bg9;if(Ai9>0)this.EY=this.EY+
Math.sqrt((Ai9*2)*this.Adt);if(Ai9<0)this.EY=this.EY-Math.sqrt((-Ai9*2)*this.Adt
);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.EY=this.EY-20;this.AfU=(400-(
this.EY*this.EY))/(2*Jt);this.Apc=ER;}else this.EY=0;}if((this.DI[1]<=this.Gs[1]
)||(this.DI[1]>=this.Gf[1]))this.EZ=0;else if(!this.EZ){var ES=this.DI[1];var Fh=
this.Gs[1];var EJ=this.Gf[1];if(ES<Fh)EJ=this.Gs[1];else if(ES>EJ)Fh=this.Gf[1];
else if(this.W3[1]<=1){Fh=ES;EJ=ES;}else{var Adx=(EJ-ES)%this.W3[1];EJ=(ES-this.
W3[1])+Adx;Fh=ES+Adx;if(EJ<this.Gs[1])EJ=this.Gs[1];if(Fh>this.Gf[1])Fh=this.Gf[
1];}if((Fh-ES)<=(ES-EJ))ES=Fh;else ES=EJ;if(ES!==this.DI[1]){var Jt=ES-this.DI[1
];if(Jt>0)this.EZ=Math.sqrt((Jt*2)*this.Adt)+20;if(Jt<0)this.EZ=-Math.sqrt((-Jt*
2)*this.Adt)-20;this.AfV=(400-(this.EZ*this.EZ))/(2*Jt);this.Apd=ES;}}else{var BCR=
this.EZ*this.EZ;var Jt=BCR/(2*this.Adt);var ES=this.DI[1];if(this.EZ>0)ES=ES+(Jt|
0);if(this.EZ<0)ES=ES-(Jt|0);if(ES>this.Gf[1])ES=this.Gf[1];else if(ES<this.Gs[1
])ES=this.Gs[1];var Bg_=ES;var Fh=this.Gs[1];var EJ=this.Gf[1];if(ES<Fh)EJ=this.
Gs[1];else if(ES>EJ)Fh=this.Gf[1];else if(this.W3[1]<=1){Fh=ES;EJ=ES;}else{var Adx=(
EJ-ES)%this.W3[1];EJ=(ES-this.W3[1])+Adx;Fh=ES+Adx;if(EJ<this.Gs[1])EJ=this.Gs[1
];if(Fh>this.Gf[1])Fh=this.Gf[1];}if(this.EZ>0){if(EJ<=this.DI[1])ES=Fh;else if((
ES-EJ)<(Fh-ES))ES=EJ;else ES=Fh;}else if(Fh>=this.DI[1])ES=EJ;else if((ES-EJ)>(Fh-
ES))ES=Fh;else ES=EJ;if(ES!==this.DI[1]){Jt=ES-this.DI[1];if(ES!==Bg_){var Ai9=ES-
Bg_;if(Ai9>0)this.EZ=this.EZ+Math.sqrt((Ai9*2)*this.Adt);if(Ai9<0)this.EZ=this.EZ-
Math.sqrt((-Ai9*2)*this.Adt);}if(this.EZ>0)this.EZ=this.EZ+20;if(this.EZ<0)this.
EZ=this.EZ-20;this.AfV=(400-(this.EZ*this.EZ))/(2*Jt);this.Apd=ES;}else this.EZ=
0;}if(!!BP)this.Amk=BP.Bq;if(!!ID)this.Amk=ID.Bq;this.Auv=this.Amk;this.Amm=this.
DI[0];this.Amn=this.DI[1];this.BCS();return this;},Ys:function(Dc,BI,Oo,Aau,Ac$,
Ac_){var B;if(!!Aau&&(Aau!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BI)))return null;if(!this.AGX&&!!(Ac_&0xC))
return null;var Az=A.lb(Dc,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qm=
A.aaI(Dc);var Fw=Cg;if(Qm[0]<Az[0])Fw=[Az[0]-Qm[0],Fw[1]];if(Qm[0]>=Az[2])Fw=[(Az[
2]-Qm[0])-1,Fw[1]];if(Qm[1]<Az[1])Fw=[Fw[0],Az[1]-Qm[1]];if(Qm[1]>=Az[3])Fw=[Fw[
0],(Az[3]-Qm[1])-1];return A._NewObject(C.Au5,0).Initialize(this,Fw);}return null;
},A4U:function(){if(!!this.timer){A.z9([this,this.Mn],this.timer,0);this.timer=null;
}},BCS:function(){this.timer=A._GetAutoObject(A.acl.Aeo);A.zV([this,this.Mn],this.
timer,0);},Mn:function(G){var B;if(!this.timer)return;var AuA=(this.timer.Bq-this.
Amk)*0.001;var AuB=(this.timer.Bq-this.Auv)*0.001;var BC3=AuA*AuA;var BC4=AuB*AuB;
var AiN=(this.AfU*AuA)+this.EY;var AiO=(this.AfV*AuB)+this.EZ;var CD=[((((this.AfU
*0.5)*BC3)+(this.EY*AuA))+this.Amm)|0,((((this.AfV*0.5)*BC4)+(this.EZ*AuB))+this.
Amn)|0];if(this.XR&&(AuA>=0.5)){CD=[this.Apc,CD[1]];this.EY=0;this.AfU=0;this.Amm=
CD[0];this.XR=false;}else if(this.XR){var LT=1-Math.pow(1-(AuA/0.5),5);CD=[(this.
Amm+((this.Apc-this.Amm)*LT))|0,CD[1]];}if(this.XS&&(AuB>=0.5)){CD=[CD[0],this.Apd
];this.EZ=0;this.AfV=0;this.Amn=CD[1];this.XS=false;}else if(this.XS){var LT=1-Math.
pow(1-(AuB/0.5),5);CD=[CD[0],(this.Amn+((this.Apd-this.Amn)*LT))|0];}if(((this.EY>
0)&&(AiN<0))||((this.EY<0)&&(AiN>0))){AiN=0;CD=[this.DI[0],CD[1]];}if(((this.EZ>
0)&&(AiO<0))||((this.EZ<0)&&(AiO>0))){AiO=0;CD=[CD[0],this.DI[1]];}if(!this.XR&&(
CD[0]<this.Gs[0])){this.Amm=CD[0];this.Apc=this.Gs[0];this.Amk=this.timer.Bq;this.
XR=true;}else if(!this.XR&&(CD[0]>this.Gf[0])){this.Amm=CD[0];this.Apc=this.Gf[0
];this.Amk=this.timer.Bq;this.XR=true;}if(!this.XS&&(CD[1]<this.Gs[1])){this.Amn=
CD[1];this.Apd=this.Gs[1];this.Auv=this.timer.Bq;this.XS=true;}else if(!this.XS&&(
CD[1]>this.Gf[1])){this.Amn=CD[1];this.Apd=this.Gf[1];this.Auv=this.timer.Bq;this.
XS=true;}if(((!this.XR&&!!this.EY)&&(AiN>-20))&&(AiN<20)){CD=[this.Apc,CD[1]];this.
EY=0;this.AfU=0;this.Amm=CD[0];}if(((!this.XS&&!!this.EZ)&&(AiO>-20))&&(AiO<20)){
CD=[CD[0],this.Apd];this.EZ=0;this.AfV=0;this.Amn=CD[1];}if(!A.aaX(CD,this.DI)){
this.A6y=A.abe(CD,this.DI);this.DI=CD;(B=this.Auh)?B[1].call(B[0],this):null;(B=
this.AGf)?B[1].call(B[0],this):null;}if(((!this.EY&&!this.EZ)&&!this.XR)&&!this.
XS){this.A4U();this.ZW=false;(B=this.Zv)?B[1].call(B[0],this):null;}},ATV:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.W3=E;},ATq:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A7a)return;this.A7a=E;if(E<(1e-007))E=1e-007;this.Adt=
E*10000;},_Init:function(aArg){C.Ev._Init.call(this,aArg);this.__proto__=C.Ib;this.
U=0x10011B;},_Mark:function(D){var B;C.Ev._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKU)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Auh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AGf
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zv)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.ST)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BG={Ah:null,Lt:null,BH:null,D3:null,ApW:
0,Bq:0,A$N:0,Filter:148,CP:0,Dz:0,Bw:true,Down:false,Acr:false,Mz:false,Init:function(
aArg){var B;var C3=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C3)throw new Error(AfH
);this.Ah=C3.AKz;C3.AKz=this;},G4:function(CN){var B;if(!!CN&&CN.Bkn(this.Filter
)){this.Down=CN.Down;this.CP=CN.CP;this.Dz=CN.Dz;this.Bq=CN.Bq;this.Mz=false;if(
CN.Down){this.A$N=this.ApW;this.Acr=this.ApW>0;if(this.Acr)(B=this.D3)?B[1].call(
B[0],this):null;else(B=this.BH)?B[1].call(B[0],this):null;if(!this.Mz)this.ApW=this.
ApW+1;return!this.Mz;}if(!CN.Down){this.Acr=this.ApW>1;this.A$N=this.ApW-1;this.
ApW=0;(B=this.Lt)?B[1].call(B[0],this):null;return!this.Mz;}}return false;},_Init:
function(aArg){this.__proto__=C.BG;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lt)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Au5={Cj:null,Au7:0,DI:A.wf,Initialize:function(Ag,aOffset){this.Cj=Ag;this.DI=
aOffset;this.Au7=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Au5;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cj)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A8n={Ah:null,C3:null,_Init:
function(aArg){this.__proto__=C.A8n;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Ars={NN:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Ars;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.NN)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AEl={AiV:A.wf,AiU:A.wf,_Init:function(aArg
){C.Ars._Init.call(this,aArg);this.__proto__=C.AEl;},_className:"Core::LayoutLineContext"
};C.AEm={AA4:A.wf,AA3:A.wf,AiV:A.wf,AiU:A.wf,_Init:function(aArg){C.Ars._Init.call(
this,aArg);this.__proto__=C.AEm;},_className:"Core::LayoutQuadContext"};C.AN8={C3:
null,Ah:null,RI:null,RR:null,Ml:null,ApS:null,_Init:function(aArg){this.__proto__=
C.AN8;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ml)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApS)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVt={FW:null,Ca:null,B$:null,Bez:false,
Bzn:function(){if(!this.FW)return;var Pq=this.FW;this.FW.Pm=null;this.FW=null;A.
pe([this,this.A32],this);Pq.A8O(this);},BBi:function(G){if(!!this.FW)return;if(!
this.B$)return;this.FW=this.B$;this.B$=this.B$.Ah;if(!!this.B$)this.B$.AI=null;else
this.Ca=null;this.FW.Ah=null;this.Bez=true;this.FW.ST(this);this.Bez=false;},BBE:
function(G){A.pe([this,this.BBi],this);},BBD:function(G){A.pe([this,this.BBE],this
);},A32:function(G){A.pe([this,this.BBD],this);},Bik:function(Jq){if(!Jq||!Jq.Pm
)return;if(Jq.Pm!==this)throw new Error(Aal);var BhE=false;if(this.FW===Jq){this.
FW=null;BhE=true;A.pe([this,this.A32],this);}else{if(!!Jq.Ah)Jq.Ah.AI=Jq.AI;else
this.Ca=Jq.AI;if(!!Jq.AI)Jq.AI.Ah=Jq.Ah;else this.B$=Jq.Ah;Jq.AI=null;Jq.Ah=null;
}Jq.Pm=null;if(BhE)Jq.A8N(this);},A$V:function(Jq,A1M){if(!Jq)return;if(!!Jq.Pm)
throw new Error(Xo);Jq.Pm=this;if(A1M){Jq.Ah=this.B$;if(!!this.B$)this.B$.AI=Jq;
else this.Ca=Jq;this.B$=Jq;}else{Jq.AI=this.Ca;if(!!this.Ca)this.Ca.Ah=Jq;else this.
B$=Jq;this.Ca=Jq;}if(!this.FW)A.pe([this,this.A32],this);},_Init:function(aArg){
this.__proto__=C.AVt;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ca)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B$)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Ak0={Pm:null,AI:null,Ah:
null,A8O:function(AtD){},A8N:function(AtD){},ST:function(AtD){this.AmG();},My:function(
){if(!!this.Pm&&(this.Pm.FW===this))this.Pm.Bzn();},AmG:function(){if(!!this.Pm)
this.Pm.Bik(this);},ARr:function(){return!!this.Pm&&(this.Pm.FW===this);},_Init:
function(aArg){this.__proto__=C.Ak0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pm)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVr={Ar:null,Aux:
null,ST:function(AtD){this.Aux.Ar=this.Ar;A.we(this.Aux,0);A.pe([this,this.BBf],
this);},BBf:function(G){this.Aux.Ar=null;this.Aux=null;this.Ar=null;this.My();},
_Init:function(aArg){C.Ak0._Init.call(this,aArg);this.__proto__=C.AVr;},_Mark:function(
D){var B;C.Ak0._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aux)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxU={_Init:function(){C.AVt._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhF={resource:null,Lh:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhF;this.Init(aArg);A.h7++;},_Done:function(){this.Lh();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={MN:null,timer:null,Bq:0,Period:1000,VP:0,Bw:false,Lh:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AK2:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PZ:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AK2(this.VP,E);},WN:function(E){if(E<0)E=0;if(E===
this.VP)return;this.VP=E;if(this.Bw)this.AK2(E,this.Period);},As:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AK2(this.VP,this.Period);else this.AK2(0,
0);this.Bq=this.Avx();},Avx:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bq=this.Avx();if(!this.
Period)this.As(false);(B=this.MN)?B[1].call(B[0],this):null;},AxS:function(G){this.
As(false);},StartTimer:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lh();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MN)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bq={AUW:0,Av6:0
,AjU:0,GN:0,Hl:0,Year:0,Bd6:function(AfR,A1d){if(A1d)switch(AfR){case 1:return A.
aci.Bkw;case 2:return A.aci.Bjo;case 3:return A.aci.BkP;case 4:return A.aci.Bh0;
case 5:return A.aci.BkT;case 6:return A.aci.Bkz;case 7:return A.aci.Bky;case 8:return A.
aci.Bh2;case 9:return A.aci.Bpx;case 10:return A.aci.Blb;case 11:return A.aci.Bla;
case 12:return A.aci.BiI;default:return A.jV;}else switch(AfR){case 1:return A.aci.
AEf;case 2:return A.aci.AC0;case 3:return A.aci.AEr;case 4:return A.aci.AB1;case
5:return A.aci.AEt;case 6:return A.aci.AEh;case 7:return A.aci.AEg;case 8:return A.
aci.AB8;case 9:return A.aci.AGL;case 10:return A.aci.AEG;case 11:return A.aci.AEE;
case 12:return A.aci.ACL;default:return A.jV;}},Bd4:function(BcA,A1d){if(A1d)switch(
BcA){case 1:return A.aci.BkY;case 2:return A.aci.BqO;case 3:return A.aci.Brv;case
4:return A.aci.BqB;case 5:return A.aci.BjB;case 6:return A.aci.Bpp;case 0:return A.
aci.Bqo;default:return A.jV;}else switch(BcA){case 1:return A.aci.BkX;case 2:return A.
aci.BqN;case 3:return A.aci.Bru;case 4:return A.aci.BqA;case 5:return A.aci.BjA;
case 6:return A.aci.Bpo;case 0:return A.aci.Bqn;default:return A.jV;}},Bd3:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},J2:function(){var d=this.GN;var K9=this.Hl;var Di=this.Year-((
K9<=2)?1:0);var AzT=(((Di>=0)?Di:Di-399)/400)|0;var Amu=Di-(AzT*400);var Vm=(((((
153*(K9+((K9>2)?-3:9)))+2)/5)|0)+d)-1;var Ao$=(((Amu*365)+((Amu/4)|0))-((Amu/100
)|0))+Vm;var Qo=((AzT*146097)+Ao$)-719468;return(((Qo*86400)+(this.AjU*3600))+(this.
Av6*60))+this.AUW;},AF1:function(E){var B;E+=62162035200;if(E<0)E=0;var VA=Math.
trunc(E/86400)|0;var AzT=(((VA>=0)?VA:VA-146096)/146097)|0;var Ao$=VA-(AzT*146097
);var Amu=((((Ao$-((Ao$/1460)|0))+((Ao$/36524)|0))-((Ao$/146096)|0))/365)|0;var Di=
Amu+(AzT*400);var Vm=Ao$-(((365*Amu)+((Amu/4)|0))-((Amu/100)|0));var A3o=(((5*Vm
)+2)/153)|0;var d=(Vm-((((153*A3o)+2)/5)|0))+1;var K9=A3o+((A3o<10)?3:-9);var BM=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Di+((
K9<=2)?1:0);this.Uz(K9);this.Lw(d);this.AnH(BM+((BM<0)?24:0));this.AnK(O+((O<0)?
60:0));this.AnN(s+((s<0)?60:0));},Zw:function(){if(this.Hl===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hl===4)||(this.Hl===6))||(this.Hl===9))||(this.Hl===11))return 30;else return 31;
},Bmm:function(){var B;var Vm=this.Ab8()-1;var AtU=(6+this.Awh())%7;var Apb=((371+
AtU)-Vm)%7;if(this.Hl===12){var d=this.GN;if((d===31)&&(AtU<3))return 0;if((d===
30)&&(AtU<2))return 0;if((d===29)&&(AtU<1))return 0;}if(Apb<=3)Vm+=Apb;else Vm-=(
7-Apb);if(Vm<0){var d=this.GN;var K9=this.Hl;this.Year--;this.Lw(31);this.Uz(12);
Vm=this.Ab8()-1;AtU=(6+this.Awh())%7;Apb=((371+AtU)-Vm)%7;if(Apb<=3)Vm+=Apb;else
Vm-=Apb;this.Year++;this.Lw(d);this.Uz(K9);}return(Vm/7)|0;},Ab8:function(){var B;
var d=this.GN;var K9=this.Hl;var Di=this.Year;var Agc=((!!!(Di%4)&&(!!(Di%100)||
!!!(Di%400)))?1:0);switch(K9){case 2:d+=31;break;case 3:d+=(59+Agc);break;case 4:
d+=(90+Agc);break;case 5:d+=(120+Agc);break;case 6:d+=(151+Agc);break;case 7:d+=(
181+Agc);break;case 8:d+=(212+Agc);break;case 9:d+=(243+Agc);break;case 10:d+=(273+
Agc);break;case 11:d+=(304+Agc);break;case 12:d+=(334+Agc);break;default:;}return d;
},Awh:function(){var B;var d=this.GN;var K9=this.Hl+((this.Hl>2)?-2:10);var Di=this.
Year-((this.Hl<=2)?1:0);var B5=(Di/100)|0;Di%=100;d+=((((((((26*K9)-2)/10)|0)+Di
)+((Di/4)|0))+((B5/4)|0))-(2*B5));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnN:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUW=E;},AnK:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av6=E;},AnH:function(E){if(E<0)E=0;if(E>23)E=23;this.AjU=E;},Lw:function(
E){if(E<1)E=1;if(E>31)E=31;this.GN=E;},Uz:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hl=E;},Format:function(Iz){var result=A.jV;var inx=0;while(!!(Iz.charCodeAt(inx)||
0))if((Iz.charCodeAt(inx)||0)===0x25){var AaL=1;inx=inx+1;if((Iz.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaL=0;}switch(Iz.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GN,2*AaL,10);break;case 0x48:result=result+A.abl(this.AjU,2*AaL,10);break;
case 0x49:if(!(this.AjU%12))result=result+Aam;else result=result+A.abl(this.AjU%
12,2*AaL,10);break;case 0x6D:result=result+A.abl(this.Hl,2*AaL,10);break;case 0x4D:
result=result+A.abl(this.Av6,2*AaL,10);break;case 0x70:if(this.AjU<12)result=result+
A.aci.BhK;else result=result+A.aci.BoM;break;case 0x53:result=result+A.abl(this.
AUW,2*AaL,10);break;case 0x77:result=result+A.abl(this.Awh(),AaL,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaL,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaL,10);break;case 0x25:result=result+Aan;break;case 0x6A:result=result+
A.abl(this.Ab8(),3*AaL,10);break;case 0x57:result=result+A.abl(this.Bmm(),2*AaL,
10);break;case 0x61:result=result+this.Bd4(this.Awh(),true);break;case 0x41:result=
result+this.Bd4(this.Awh(),false);break;case 0x62:result=result+this.Bd6(this.Hl
,true);break;case 0x42:result=result+this.Bd6(this.Hl,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iz.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ada,AfR,BxH,BxX,Byb,Byt){this.Year=Ada;this.
Uz(AfR);this.Lw(BxH);this.AnH(BxX);this.AnK(Byb);this.AnN(Byt);return this;},Initialize:
function(Ah$){this.AF1(Ah$);return this;},BiN:function(Ah$){if(!Ah$)return A._NewObject(
C.An_,0).Initialize(this.J2());return A._NewObject(C.An_,0).Initialize(this.J2()-
Ah$.J2());},Bp1:function(Azc){if(!Azc)return this;return A._NewObject(C.Bq,0).Initialize(
this.J2()-Azc.J2());},J:function(Azc){if(!Azc)return this;return A._NewObject(C.
Bq,0).Initialize(this.J2()+Azc.J2());},_Init:function(aArg){this.__proto__=C.Bq;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An_={AGI:0,AEw:0,ADK:0,Kq:0,J2:function(
){return(((this.Kq*86400)+(this.ADK*3600))+(this.AEw*60))+this.AGI;},AF1:function(
E){var ALe=1;this.Kq=Math.trunc(E/86400)|0;if(E<0){E=-E;ALe=-1;}this.ADK=ALe*(Math.
trunc(E/3600)%24|0);this.AEw=ALe*(Math.trunc(E/60)%60|0);this.AGI=ALe*(E%60|0);}
,Initialize2:function(BxI,BxY,Byc,Byw){this.Kq=BxI;this.ADK=BxY;this.AEw=Byc;this.
AGI=Byw;return this;},Initialize:function(Ah$){this.AF1(Ah$);return this;},_Init:
function(aArg){this.__proto__=C.An_;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.Baj={Ar:null,Pm:null,Trigger:function(AoF,A1M){var Pq=A._NewObject(C.AVr,0);
Pq.Aux=this;Pq.Ar=AoF;this.Pm.A$V(Pq,A1M);},_Init:function(aArg){this.__proto__=
C.Baj;this.Pm=A._GetAutoObject(C.AxU);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.Bak={JW:null,Event:null,ASD:null,Aua:function(G){var B;if(
!this.Event)return;this.JW=this.Event.Ar;(B=this.ASD)?B[1].call(B[0],this):null;
this.JW=null;},BmZ:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.Aua],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.Aua],this.
Event,0);},_Init:function(aArg){this.__proto__=C.Bak;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BG4={Du:0x1,BDM:0x2,BEV:0x4,BGT:0x8,Bw:0x10,Ia:0x20
,BEW:0x40,BFx:0x80,BER:0x100,BFb:0x200,BEF:0x400,BGa:0x800,Bl:0x1000,BG1:0x2000,
BFU:0x4000,BFV:0x8000,Abs:0x10000,BFT:0x20000,BGn:0x40000,BEw:0x80000,BF3:0x100000
,BEq:0x200000};C.PT={BGc:0x1,BGd:0x2,BDI:0x4,BDJ:0x8,BDK:0x10,BDH:0x20};C.Ag3={None:
0,BGP:1,BD5:2,BFg:3,BGg:4,BGQ:5,BGR:6,BD6:7,BD7:8,BFi:9,BFh:10,BGi:11,BGh:12};C.
Au9={None:0,BGN:1,Left:2,BD3:3,Z1:4,A54:5,BGO:6,Right:7,BD4:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BGe={BG_:0x1,BG7:0x2,BG8:0x4,BG9:
0x8,BFk:0x10,BEY:0x20};
C._Init=function(){C.Akh.__proto__=C.Cj;C.ZL.__proto__=C.Cj;C.Ev.__proto__=C.Cj;C.
P.__proto__=C.Ev;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARK.__proto__=
C.Event;C.Au4.__proto__=C.Event;C.Aek.__proto__=C.Event;C.AqN.__proto__=C.Event;
C.Y.__proto__=C.Ev;C.CM.__proto__=C.P;C.DC.__proto__=C.P;C.Bn.__proto__=C.ZL;C.Ib.
__proto__=C.Ev;C.AEl.__proto__=C.Ars;C.AEm.__proto__=C.Ars;C.AVr.__proto__=C.Ak0;
};C._ReInit=function(){var B;if((B=C.AxU._this))B._ReInit(),C.AxU._ReInit.call(B
);};C.DJ=function(D){var B;if((B=C.AxU._this)&&(B._cycle!=D))B._Done(C.AxU._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */