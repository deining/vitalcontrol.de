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
);if(index.acg)throw new Error("The unit file 'Views.js' included twice!");index.
acg=(function(){var A=index;var C={};
var Cg=[1,1];var BD=[0,0];var E6=[0,0,0,0];var Hr="\uFEFF";var I0="No matrix to perform 3D transformation";
var Iv="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C9={KN:null,Ak8:1,Ak7:1,AQ:0xFFFFFFFF,Kr:function(C1,aClip,aOffset,Ck,aBlend){var
B;var Ags=this.Ak7;var Agt=this.Ak8;var AdA=A.abf(this.Et,aOffset);var AdB=A.abf(
this.ED,aOffset);var Aly;var Alz;var B4=this.AQ;if(A.aaX(AdA,AdB))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;Aly=Alz=B4;if(Ck<256){Aly=(Aly&0x00FFFFFF)|((((
Ck*((Aly>>24)&0xFF))>>8)&0xFF)<<24);Alz=(Alz&0x00FFFFFF)|((((Ck*((Alz>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Ags===1)&&(Agt===1))C1.Au8(aClip,AdA,AdB,Aly,Alz,aBlend);else
C1.Bi4(aClip,AdA,AdB,Ags,Agt,Aly,Alz,aBlend);},GetExtent:function(){var Ags=this.
Ak7;var Agt=this.Ak8;var AdA=this.Et;var AdB=this.ED;if(((Ags===1)&&(Agt===1))||
A.aaX(AdA,AdB))return A.Core.Akd.GetExtent.call(this);var Aiz=Ags/2;var AiA=Agt/
2;var Api=AdA[0];var Apj=AdA[1];var Apk=AdB[0];var Apl=AdB[1];var Kd=Apk-Api;var
Ke=Apl-Apj;var I5=Math.sqrt((Kd*Kd)+(Ke*Ke));Kd=Kd/I5;Ke=Ke/I5;var Bdj=Api+(Ke*Aiz
);var Bdk=Apj-(Kd*Aiz);var AJH=Apk+(Ke*AiA);var AJI=Apl-(Kd*AiA);var AJJ=Apk-(Ke
*AiA);var AJK=Apl+(Kd*AiA);var AJL=Api-(Ke*Aiz);var AJM=Apj+(Kd*Aiz);var left=Bdj;
var right=Bdj;var top=Bdk;var bottom=Bdk;if(AJH<left)left=AJH;if(AJJ<left)left=AJJ;
if(AJL<left)left=AJL;if(AJH>right)right=AJH;if(AJJ>right)right=AJJ;if(AJL>right)
right=AJL;if(AJI<top)top=AJI;if(AJK<top)top=AJK;if(AJM<top)top=AJM;if(AJI>bottom
)bottom=AJI;if(AJK>bottom)bottom=AJK;if(AJM>bottom)bottom=AJM;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cg));return Az;
},RO:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},A$k:function(E){var B;if(E<1)E=1;if(E===this.Ak8)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak8=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak7!==1))&&!this.KN){
this.KN=A.aaL(A.aci.AsY);if(this.KN.N6)A.zV([this,this.RO],this.KN,0);}if(((E===
1)&&(this.Ak7===1))&&!!this.KN){if(this.KN.N6)A.z9([this,this.RO],this.KN,0);this.
KN=null;}},A$j:function(E){var B;if(E<1)E=1;if(E===this.Ak7)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak7=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak8!==1))&&!this.
KN){this.KN=A.aaL(A.aci.AsY);if(this.KN.N6)A.zV([this,this.RO],this.KN,0);}if(((
E===1)&&(this.Ak8===1))&&!!this.KN){if(this.KN.N6)A.z9([this,this.RO],this.KN,0);
this.KN=null;}},Nu:function(E){var B;if(E<1)E=1;if((E===this.Ak7)&&(E===this.Ak8
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Ak7=E;this.Ak8=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((E!==1)&&!this.KN){this.KN=A.aaL(A.aci.AsY);if(this.KN.N6)A.zV([this,this.
RO],this.KN,0);}if((E===1)&&!!this.KN){if(this.KN.N6)A.z9([this,this.RO],this.KN
,0);this.KN=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Ai:function(E){if(E)this.
Ct(0x400,0x0);else this.Ct(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},_Init:function(
aArg){A.Core.Akd._Init.call(this,aArg);this.__proto__=C.C9;},_Mark:function(D){var
B;A.Core.Akd._Mark.call(this,D);if((B=this.KN)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANs:0xFFFFFFFF,ANt:0xFFFFFFFF,ANx:0xFFFFFFFF
,ANw:0xFFFFFFFF,AQ:0xFFFFFFFF,Kr:function(C1,aClip,aOffset,Ck,aBlend){var B;var DF=
this.ANw;var DQ=this.ANx;var DK=this.ANs;var DP=this.ANt;var B4=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ck=Ck+1;if((((DF===DQ)&&(DK===DP))&&(DF===DK))&&(DF===0xFFFFFFFF
))DF=DQ=DK=DP=B4;else if(B4!==0xFFFFFFFF){DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)
*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DF=(DF&0xFFFFFF00)|((((DF&0xFF)*((B4&0xFF)+
1))>>8)&0xFF);DF=(DF&0xFFFF00FF)|((((((DF>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF
)<<8);DF=(DF&0xFF00FFFF)|((((((DF>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);
DQ=(DQ&0x00FFFFFF)|((((((DQ>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DQ=(DQ&
0xFFFFFF00)|((((DQ&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DQ=(DQ&0xFFFF00FF)|((((((DQ>>8
)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DQ=(DQ&0xFF00FFFF)|((((((DQ>>16)&0xFF)
*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*(((B4>>
24)&0xFF)+1))>>8)&0xFF)<<24);DK=(DK&0xFFFFFF00)|((((DK&0xFF)*((B4&0xFF)+1))>>8)&
0xFF);DK=(DK&0xFFFF00FF)|((((((DK>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DK=(
DK&0xFF00FFFF)|((((((DK>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DP=(DP&0x00FFFFFF
)|((((((DP>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DP=(DP&0xFFFFFF00)|((((
DP&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DP=(DP&0xFFFF00FF)|((((((DP>>8)&0xFF)*(((B4>>8
)&0xFF)+1))>>8)&0xFF)<<8);DP=(DP&0xFF00FFFF)|((((((DP>>16)&0xFF)*(((B4>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ck<256){DF=(DF&0x00FFFFFF)|((((Ck*((DF>>24)&0xFF))>>8)&
0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((Ck*((DQ>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF
)|((((Ck*((DK>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF
))>>8)&0xFF)<<24);}C1.Avl(aClip,A.abh(this.M,aOffset),DF,DQ,DP,DK,aBlend);},Awy:
function(E){var B;if(E===this.ANs)return;this.ANs=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Awz:function(E){var B;if(E===this.ANt)return;this.ANt=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},AwB:function(E){var B;
if(E===this.ANx)return;this.ANx=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.M);},AwA:function(E){var B;if(E===this.ANw)return;this.ANw=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Fo:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.
Ct(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BX={Width:1,AQ:0xFFFFFFFF,Kr:function(C1
,aClip,aOffset,Ck,aBlend){var B;var DF;var DQ;var DK;var DP;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;DF=DQ=DK=DP=B4;if(Ck<256){DF=(DF&0x00FFFFFF
)|((((Ck*((DF>>24)&0xFF))>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((Ck*((DQ>>24)&0xFF
))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ck*((DK>>24)&0xFF))>>8)&0xFF)<<24);DP=(
DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);}C1.Bi2(aClip,A.abh(this.M
,aOffset),this.Width,DF,DQ,DP,DK,aBlend);},Nu:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(
0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.
BX;},_className:"Views::Border"};C.NY={timer:null,Al:null,MY:-1,AQ:0xFFFFFFFF,Au9:
0x1F,TY:0,Dy:0,Ank:A.wf,VI:false,Kr:function(C1,aClip,aOffset,Ck,aBlend){var B;var
ND=this.TY;if(this.MY>=0)ND=this.MY;if(!this.Al||(ND>=this.Al.NoOfFrames))return;
this.Al.Update();var DF;var DQ;var DP;var DK;var B4=this.AQ;var Kk=(((Ck+1)*255)>>
8)+1;var Oq=this.Au9;var Az=A.abh(this.M,aOffset);var AK9=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Ank);aBlend=aBlend&&((this.U&0x2)===0x2);DF=DQ=DK=DP=B4;if(Kk<256
){DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((((
DQ>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*Kk)>>8)&
0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*Kk)>>8)&0xFF)<<24);}if(((this.
Ank[0]>0)&&(AK9[0]>0))&&!((Oq&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AK9[
0];if(((Oq&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oq=Oq|0x4;}else if(((Oq&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oq=Oq|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oq=Oq|0x5;}}if(((this.Ank[1]>0)&&(AK9[1]>0))&&!((Oq&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AK9[1];if(((Oq&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oq=Oq|0x8;}else if(((Oq&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oq=Oq|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oq=Oq|
0xA;}}C1.Bi1(aClip,this.Al,ND,Az,Oq,DF,DQ,DP,DK,aBlend);},RO:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ml:function(G){var B;var ND=
this.MY;var Tu=0;if(!!this.Al)Tu=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MY<0))&&(Tu>0))this.Dy=this.timer.Bq-(this.TY*this.Al.FrameDelay);if(
!!this.timer&&(Tu>0)){var Av=(this.timer.Bq-this.Dy)|0;ND=(Av/this.Al.FrameDelay
)|0;if(Av>=Tu){ND=ND%this.Al.NoOfFrames;this.Dy=this.timer.Bq-(Av%Tu);}}if(((ND!==
this.MY)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.MY=ND;if(!Tu&&
!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bi(this.M);},Zx:function(E){var B;if(this.VI===E)return;this.VI=E;this.MY=-1;if(
!E&&!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aei);A.zV([this,this.Ml],this.timer,0);A.pe([this,this.
Ml],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},A_x:function(
E){var B;if(E===this.Au9)return;this.Au9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Cx:function(E){var B;if(E<0)E=0;if((E===this.TY)&&(this.MY===-1)
)return;this.TY=E;if(!this.timer)this.MY=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
N6)A.z9([this,this.RO],this.Al,0);this.Al=E;this.MY=-1;if(!!E&&E.N6)A.zV([this,this.
RO],E,0);if(this.VI){this.Zx(false);this.Zx(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1
);},A_O:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Ank))return;this.Ank=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au9&0xF)===
0xF))this.Ab.Bi(this.M);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.
__proto__=C.NY;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dy:0,MY:0,AQ:0xFFFFFFFF
,Km:0x12,TY:0,G9:255,VI:false,Aa$:false,Kr:function(C1,aClip,aOffset,Ck,aBlend){
var B;var ND=this.TY;if(this.MY>=0)ND=this.MY;if(!this.Al||(ND>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dd();var C7=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DF;var DQ;var DP;var DK;var B4=this.AQ;var Kk=(((
Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DF=DQ=DK=DP=B4;if(Kk<256
){DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((((
DQ>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*Kk)>>8)&
0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*Kk)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C7))C1.A6j(aClip,this.Al,ND,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DF,DQ,DP,DK,aBlend);else C1.Bpm(aClip,this.Al,ND
,A.abh(AE,aOffset),[].concat(BD,C7),DF,DQ,DP,DK,aBlend,true);},RO:function(G){var
B;if(((this.Aa$&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ml:function(
G){var B;var ND=this.MY;var Tu=0;if(!!this.Al)Tu=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MY<0))&&(Tu>0))this.Dy=this.timer.Bq-(this.TY*this.Al.FrameDelay
);if(!!this.timer&&(Tu>0)){var Av=(this.timer.Bq-this.Dy)|0;ND=(Av/this.Al.FrameDelay
)|0;if(Av>=Tu){ND=ND%this.Al.NoOfFrames;this.Dy=this.timer.Bq-(Av%Tu);}}if(((ND!==
this.MY)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.MY=ND;if(!Tu&&
!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;}},Je:function(E
){if(E===this.Aa$)return;this.Aa$=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dd());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Zx:function(
E){var B;if(this.VI===E)return;this.VI=E;this.MY=-1;if(!E&&!!this.timer){A.z9([this
,this.Ml],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aei);A.zV([this,this.Ml],this.timer,0);A.pe([this,this.Ml],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A4:function(E){var B;if(E===this.Km)return;
this.Km=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Cx:function(E){
var B;if(E<0)E=0;if((E===this.TY)&&(this.MY===-1))return;this.TY=E;if(!this.timer
)this.MY=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.N6)A.z9([this,this.RO],this.
Al,0);this.Al=E;this.MY=-1;if(!!E&&E.N6)A.zV([this,this.RO],E,0);if(this.VI){this.
Zx(false);this.Zx(true);}if(((this.Aa$&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},
C0:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;this.G9=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ai:function(E){if(E)this.Ct(
0x400,0x0);else this.Ct(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},Dd:function(){var
B;if(!this.Al)return E6;var Bu=this.Km;var C7=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C7[0]||!C7[1])return E6;var Dh=[0,0
,width,height];var B5=Dh;if(((Bu&0x40)===0x40)){var A4B=((((Dh[2]-Dh[0])<<16)+((
C7[0]/2)|0))/C7[0])|0;var ABj=((((Dh[3]-Dh[1])<<16)+((C7[1]/2)|0))/C7[1])|0;var AiZ=
A4B;if(ABj>AiZ)AiZ=ABj;B5=A.abL(B5,((C7[0]*AiZ)+32768)>>16);B5=A.abI(B5,((C7[1]*
AiZ)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4B=((((Dh[2]-Dh[0])<<16)+((C7[
0]/2)|0))/C7[0])|0;var ABj=((((Dh[3]-Dh[1])<<16)+((C7[1]/2)|0))/C7[1])|0;var AiZ=
A4B;if(ABj<AiZ)AiZ=ABj;B5=A.abL(B5,((C7[0]*AiZ)+32768)>>16);B5=A.abI(B5,((C7[1]*
AiZ)+32768)>>16);}else if(!((Bu&0x100)===0x100))B5=A.abK(B5,C7);if((B5[2]-B5[0])
!==(Dh[2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((
Bu&0x2)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3
]-B5[1]));else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(0,2));return B5;},Blp:function(){return this.
AQ;},ASL:function(){return this.TY;},_Init:function(aArg){A.Core.Eu._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B8:null,En:null,CJ:
A.jV,String:A.jV,Oo:null,Amk:A.wf,Jh:0,Oa:0,AcO:0,Bs:A.wf,Km:0x12,AQ:0xFFFFFFFF,
AfB:false,Aa$:false,Yv:false,AOg:false,H1:false,Lf:function(){if(!!this.Oo){this.
A2F(this.Oo);this.Oo=null;}},Kr:function(C1,aClip,aOffset,Ck,aBlend){var B;if((this.
CJ===A.jV)||!this.B8)return;var Bu=this.Km;var font=this.B8;var Dh=A.abh(this.M,
aOffset);var DF;var DQ;var DP;var DK;var col=this.AQ;var Kk=(((Ck+1)*255)>>8)+1;
var Kj=this.CJ.charCodeAt(0)||0;var AE=A.abh(this.Dd(),aOffset);var Br=[Dh[0]-AE[
0],(Dh[1]-AE[1])-font.Ascent];if(Kj<1)return;DF=DQ=DK=DP=col;if(Kk<256){DF=(DF&0x00FFFFFF
)|((((((DF>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((((DQ>>24)&0xFF)*
Kk)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DK=(
DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*Kk)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kj===1)&&!((Bu&0x40)===
0x40)){C1.A6L(aClip,font,this.CJ,2,(this.CJ.charCodeAt(1)||0)-1,Dh,Br,0,0,DF,DQ,
DP,DK,true);return;}var leading=font.Leading;if(this.Oa>0)leading=(this.Oa-font.
Ascent)-font.Descent;var AaT=(font.Ascent+font.Descent)+leading;var By$=aClip[1]-
AE[1];var Bza=aClip[3]-AE[1];var A1R=AE[2]-AE[0];var Di=0;var O=1;var B4=this.CJ.
charCodeAt(1)||0;while(((Di+AaT)<By$)&&(B4>0)){O=O+B4;Di=Di+AaT;B4=this.CJ.charCodeAt(
O)||0;}while((Di<Bza)&&(B4>0)){var Mh=A.abe(Br,[0,Di]);var Amd=0;var Pg=false;if(((((
Bu&0x40)===0x40)&&((this.CJ.charCodeAt((O+B4)-1)||0)!==0x0A))&&((this.CJ.charCodeAt(
O+1)||0)!==0x0A))&&((this.CJ.charCodeAt(O+B4)||0)!==0x00))Pg=true;if(Pg&&!!(Bu&0x6
)){var ApY=O+B4;var Azq=this.CJ.indexOf(String.fromCharCode(0x20),O+1);var Azr=this.
CJ.indexOf(String.fromCharCode(0xA0),O+1);if(((Azq<0)||(Azq>=ApY))&&((Azr<0)||(Azr>=
ApY)))Pg=false;}if(Pg)Amd=A1R;else if(((Bu&0x4)===0x4))Mh=[(Mh[0]-A1R)+font.YB(this.
CJ,O+1,B4-1),Mh[1]];else if(((Bu&0x2)===0x2))Mh=[(Mh[0]-((A1R/2)|0))+((font.YB(this.
CJ,O+1,B4-1)/2)|0),Mh[1]];C1.A6L(aClip,font,this.CJ,O+1,B4-1,Dh,Mh,Amd,0,DF,DQ,DP
,DK,true);O=O+B4;Di=Di+AaT;B4=this.CJ.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BgD;BgD=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BgD&&
!this.AcO)&&this.AfB)&&this.H1)&&!((this.U&0x2000)===0x2000)){this.CJ=A.jV;this.
H1=false;A.pe([this,this.Pi],this);}if(((this.Yv&&this.H1)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CJ=
A.jV;this.H1=false;A.pe([this,this.Pi],this);}A.Core.Eu.H.call(this,E);A.pe([this
,this.AiS],this);},By3:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},By2:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2F:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bzm:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiS:function(G){A.pe(this.En
,this);},Pi:function(G){A.pe([this,this.XS],this);},XS:function(G){var B;if(this.
H1)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XK=-1;var
font=this.B8;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfB){
if(this.AcO>0)XK=this.AcO;else if(!this.Aa$)XK=width-(this.Jh*2);else XK=width;if(
XK<0)XK=1;}if(!!this.Oo){this.A2F(this.Oo);this.Oo=null;}this.H1=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOg)this.Oo=this.Bzm(length
);this.CJ=font.BoK(this.String,0,XK,length,this.Oo);if(!!this.Oo&&!this.Bkh()){this.
A2F(this.Oo);this.Oo=null;}}else this.CJ=A.jV;this.Amk=BD;if(((this.Yv&&(this.CJ
!==A.jV))&&!this.Aa$)&&!!font){var Bu=this.Km;var leading=font.Leading;var IG=this.
CJ;var AK3=this.Aj2();if(((Bu&0x80)===0x80)){if(AK3)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var ABe=(font.
Ascent+font.Descent)+leading;var Kj=IG.charCodeAt(0)||0;var AlV=((height+leading
)/ABe)|0;var A15=false;var AJP=false;if(AlV<=0)AlV=1;if(Kj>AlV){var Bj=0;var ABf=
0;var AK1=Kj-1;var K6;var NE=IG.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))ABf=Kj-AlV;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){ABf=((Kj-AlV)/2)|0;AK1=(ABf+AlV)-1;}else
AK1=AlV-1;A15=ABf>0;AJP=AK1<(Kj-1);for(K6=1;Bj<ABf;Bj=Bj+1)K6=K6+(IG.charCodeAt(
K6)||0);if(AJP)for(NE=K6;Bj<AK1;Bj=Bj+1)NE=NE+(IG.charCodeAt(NE)||0);if(A15){var
I5=IG.charCodeAt(K6)||0;tmp=(Hr+A.abW(IG,K6,I5))+Hr;tmp=A.abQ(tmp,0,(I5+2)&0xFFFF
);K6=K6+I5;if((tmp.charCodeAt(I5)||0)===0x0A){tmp=A.abQ(tmp,I5,0xFEFF);tmp=A.abQ(
tmp,I5+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IG,K6,NE-K6);if(AJP&&(
NE>=K6)){var I5=IG.charCodeAt(NE)||0;var QC=(Hr+A.abW(IG,NE,I5))+Hr;QC=A.abQ(QC,
0,(I5+2)&0xFFFF);QC=A.abQ(QC,1,0xFEFF);if((QC.charCodeAt(I5)||0)===0x0A){QC=A.abQ(
QC,I5,0xFEFF);QC=A.abQ(QC,I5+1,0x0A);}if((QC.charCodeAt(2)||0)===0x0A){QC=A.abQ(
QC,2,0xFEFF);QC=A.abQ(QC,1,0x0A);}else QC=A.abQ(QC,1,0xFEFF);tmp=tmp+QC;}IG=String.
fromCharCode(AlV&0xFFFF)+tmp;}var Bj=0;var inx=1;var AKz=width-(this.Jh*2);if(this.
AfB&&(this.AcO>0))AKz=this.AcO;Kj=IG.charCodeAt(0)||0;for(;Bj<Kj;Bj=Bj+1){var Ama=
A15&&!Bj;var Amb=AJP&&(Bj===(Kj-1));var Xz=false;var XA=false;var Auo=AK3;if((AK3&&
Ama)&&!Amb){Ama=false;Amb=true;}else if((AK3&&Amb)&&!Ama){Amb=false;Ama=true;}var
XT=inx+1;var I5=IG.charCodeAt(inx)||0;var K6=XT;var NE=(XT+I5)-2;var A2U=-1;var A2V=-
1;if(!this.AfB&&(font.YB(IG,XT,I5-1)>AKz)){var AoU=Bu;if(((AoU&0x2)===0x2)&&!!(AoU&
0x5))AoU&=~0x2;if(((AoU&0x2)===0x2))AoU&=~0x5;if(((AoU&0x4)===0x4))Xz=true;else if(((
AoU&0x2)===0x2)){Xz=true;XA=true;}else XA=true;}if((IG.charCodeAt(K6)||0)===0x0A
)K6=K6+1;if((IG.charCodeAt(NE)||0)===0x0A)NE=NE-1;while(Xz&&((IG.charCodeAt(K6)||
0)===0xFEFF))K6=K6+1;while(XA&&((IG.charCodeAt(NE)||0)===0xFEFF))NE=NE-1;Xz=Xz&&
!Amb;XA=XA&&!Ama;while((((Xz||XA)||Ama)||Amb)&&(K6<NE)){if((Xz&&(Auo||!XA))||Ama
){if(A2U>0)IG=A.abQ(IG,A2U,0xFEFF);IG=A.abQ(IG,K6,0x2026);A2U=K6;K6=K6+1;Auo=!Auo;
Ama=false;if(font.YB(IG,XT,I5-1)<=AKz){Xz=false;XA=false;}else Xz=Xz||!XA;}if((XA&&(
!Auo||!Xz))||Amb){if(A2V>0)IG=A.abQ(IG,A2V,0xFEFF);IG=A.abQ(IG,NE,0x2026);A2V=NE;
NE=NE-1;Auo=!Auo;Amb=false;if(font.YB(IG,XT,I5-1)<=AKz){Xz=false;XA=false;}else XA=
XA||!Xz;}}inx=inx+I5;}this.Amk=[font.A7g(IG),((IG.charCodeAt(0)||0)*ABe)-leading
];this.CJ=IG;}if(this.Aa$&&(this.CJ!==A.jV)){var Aua=[this.Jh,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dd(),Aua),this.Bs));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiS],this);},BmQ:function(
E){if(E===this.AOg)return;this.AOg=E;this.CJ=A.jV;this.H1=false;A.pe([this,this.
Pi],this);},Ho:function(E){if(E<0)E=0;if(this.Jh===E)return;this.Jh=E;this.CJ=A.
jV;this.H1=false;A.pe([this,this.Pi],this);},Aw9:function(E){var B;if(E<0)E=0;if(
this.Oa===E)return;this.Oa=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);if(this.Yv){this.CJ=A.jV;this.H1=false;A.pe([this,this.Pi],this);}if(this.Aa$&&
this.H1)this.H(A.abg(this.Dd(),this.Bs));if(this.H1)A.pe([this,this.AiS],this);}
,BmP:function(E){if(E===this.Yv)return;this.Yv=E;if(((this.AfB&&!!!this.AcO)||E)||
!!this.En)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CJ=A.jV;this.H1=false;
A.pe([this,this.Pi],this);},Q7:function(E){if(A.aa0(E,this.En))return;this.En=E;
if(((!!!this.AcO&&this.AfB)||!!E)||this.Yv)this.U=this.U&~0x100;else this.U=this.
U|0x100;},Je:function(E){if(E===this.Aa$)return;this.Aa$=E;if(E&&this.Yv){this.CJ=
A.jV;this.H1=false;A.pe([this,this.Pi],this);}if(E&&this.H1){var Aua=[this.Jh,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dd(),Aua),this.Bs));this.U=this.U&~
0x2000;}},Bor:function(E){if(E<0)E=0;if(E===this.AcO)return;this.AcO=E;if(this.AfB&&
this.H1){this.CJ=A.jV;this.H1=false;A.pe([this,this.Pi],this);}if(((!!!E&&this.AfB
)||this.Yv)||!!this.En)this.U=this.U&~0x100;else this.U=this.U|0x100;},Lu:function(
E){if(E===this.AfB)return;this.AfB=E;if(this.H1){this.CJ=A.jV;this.H1=false;A.pe([
this,this.Pi],this);}if(((E&&!!!this.AcO)||this.Yv)||!!this.En)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gf:function(E){var B;if(A.aaX(E,this.Bs))return;this.
Bs=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.H1)A.pe([this
,this.AiS],this);},A4:function(E){var B;if(E===this.Km)return;this.Km=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.Yv){this.CJ=A.jV;this.H1=false;
A.pe([this,this.Pi],this);}if(this.H1)A.pe([this,this.AiS],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CJ=A.jV;this.H1=false;A.pe([this,this.
Pi],this);},S:function(E){if(E===this.B8)return;this.B8=E;this.CJ=A.jV;this.H1=false;
A.pe([this,this.Pi],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ai:function(E){if(E)this.
Ct(0x400,0x0);else this.Ct(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},Aj2:function(
){if(!this.H1)this.XS(this);if(!this.Oo)return false;var result=false;var bidi=this.
Oo;result=A.v2(bidi);return result;},Bkh:function(){if(!this.H1)this.XS(this);if(
!this.Oo)return false;var result=false;var bidi=this.Oo;result=A.zZ(bidi);return result;
},AG2:function(aIndex){if(((this.String===A.jV)||!this.B8)||this.Yv)return BD;if(
!this.H1)this.XS(this);if(aIndex<0)aIndex=0;var BAG=(this.CJ.charCodeAt(0)||0)-1;
var Mk=this.CJ.charCodeAt(1)||0;var inx=1;var Ai4=2;var Bj=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bj<BAG)&&((inx+Mk)<=aIndex)){inx=inx+Mk;Bj=Bj+1;Ai4=Ai4+1;
aIndex=aIndex+1;Mk=this.CJ.charCodeAt(inx)||0;}if(aIndex>(inx+Mk))aIndex=inx+Mk;
if(!!this.Oo)aIndex=(inx+this.By2(this.Oo,(inx+1)-Ai4,(inx+Mk)-Ai4,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var IB=this.CJ.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(IB!==0xFEFF)&&(IB!==0x0A);}return[col,Bj];},AnR:function(AoJ){if(((this.String===
A.jV)||!this.B8)||this.Yv)return 0;if(!this.H1)this.XS(this);var Bj=AoJ[1];var col=
AoJ[0];var inx=1;var Ai4=2;var Kj=this.CJ.charCodeAt(0)||0;var Mk=this.CJ.charCodeAt(
1)||0;if(Bj>=Kj){Bj=Kj-1;col=this.CJ.length;}if(Bj<0){Bj=0;col=0;}if(col<0)col=0;
while((Bj>0)&&(Mk>0)){inx=inx+Mk;Bj=Bj-1;Ai4=Ai4+1;Mk=this.CJ.charCodeAt(inx)||0;
}var XI=inx;var AK2=(inx-Ai4)+1;var ApY=(AK2+Mk)-1;var AA2=false;while((col>=0)&&(
Mk>1)){var IB=this.CJ.charCodeAt(inx+1)||0;inx=inx+1;Mk=Mk-1;AA2=(IB===0xFEFF)||(
IB===0x0A);if(!AA2){col=col-1;XI=inx;}}if((!AA2&&(col>=0))&&((this.CJ.charCodeAt(
inx+1)||0)===0x00))AA2=true;if(AA2)XI=XI+1;XI=XI-Ai4;if(!!this.Oo)XI=AK2+this.By3(
this.Oo,AK2,ApY,XI-AK2);return XI;},AUg:function(K3){var B;if((this.String===A.jV
)||!this.B8)return BD;if(!this.H1)this.XS(this);var AE=this.Dd();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B8;var Bu=this.Km;var Kj=this.CJ.charCodeAt(
0)||0;var leading=font.Leading;if(K3[1]<AE[1])K3=[K3[0],AE[1]];if(K3[1]>=AE[3])K3=[
K3[0],AE[3]-1];if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var AaT=(
font.Ascent+font.Descent)+leading;var Bj=((K3[1]-AE[1])/AaT)|0;var NM=this.ADi(Bj
);var Mk=NM.length;var Pg=false;if(((Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bj<(Kj-1)))Pg=true;if((Pg&&(
NM.indexOf(String.fromCharCode(0x20),0)<0))&&(NM.indexOf(String.fromCharCode(0xA0
),0)<0))Pg=false;if(Pg){var inx=1;var ApX=Bj;while(ApX>0){inx=inx+(this.CJ.charCodeAt(
inx)||0);ApX=ApX-1;}if(((this.CJ.charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((
inx+(this.CJ.charCodeAt(inx)||0))-1)||0)===0x0A))Pg=false;}var Amd=0;var Ep=0;if(
Pg)Amd=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=(AE[2]-AE[0])-font.YB(NM,0,Mk);else
if(((Bu&0x2)===0x2))Ep=(((AE[2]-AE[0])/2)|0)-((font.YB(NM,0,Mk)/2)|0);var col=font.
BjV(NM,0,Mk,(K3[0]-AE[0])-Ep,Amd);if(col<0)col=0;return[col,Bj];},Afg:function(AoJ
){var B;if((this.String===A.jV)||!this.B8)return BD;if(!this.H1)this.XS(this);var
Kj=this.CJ.charCodeAt(0)||0;var font=this.B8;var Bu=this.Km;var Bj=AoJ[1];var col=
AoJ[0];if(Bj>=Kj){Bj=Kj-1;col=this.CJ.length;}if(Bj<0){Bj=0;col=0;}var NM=this.ADi(
Bj);var Mk=NM.length;var AE=this.Dd();var Pg=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bj<(Kj-1)))Pg=true;if((Pg&&(NM.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NM.indexOf(String.fromCharCode(0xA0),0)<0))Pg=false;if(Pg){var inx=1;var
ApX=Bj;while(ApX>0){inx=inx+(this.CJ.charCodeAt(inx)||0);ApX=ApX-1;}if(((this.CJ.
charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((inx+(this.CJ.charCodeAt(inx
)||0))-1)||0)===0x0A))Pg=false;}if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.
Descent;var Di=(AE[1]+(Bj*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Amd=0;var Ep=AE[0];if(Pg)Amd=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=AE[2]-font.
YB(NM,0,Mk);else if(((Bu&0x2)===0x2))Ep=(Ep+(((AE[2]-AE[0])/2)|0))-((font.YB(NM,
0,Mk)/2)|0);var pos=font.BjQ(NM,0,Mk,col,Amd);if(pos<0)pos=0;return[Ep+pos,Di];}
,AOY:function(Ad){var B;if((this.String===A.jV)||!this.B8)return E6;if(!this.H1)
this.XS(this);var Kj=this.CJ.charCodeAt(0)||0;var font=this.B8;if((Ad<0)||((Ad>=
Kj)&&(Ad>0)))return E6;var Bu=this.Km;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Jh*2);if(((
Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var Di=Ad*((font.Ascent+font.Descent
)+leading);var Ep=0;while(Ad>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var
ABg=(this.CJ.charCodeAt(inx)||0)-1;var BgE=font.YB(this.CJ,inx+1,ABg);var A4x=font.
A7r(this.CJ,inx+1,ABg);var ApZ=BgE;var AaT=font.Ascent+font.Descent;var ABu=(Kj*((
font.Ascent+font.Descent)+leading))-leading;if(!Kj)ABu=AaT;if((((this.CJ.charCodeAt((
inx+ABg)+1)||0)===0x00)||((this.CJ.charCodeAt(inx+ABg)||0)===0x0A))||((this.CJ.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var ApY=(inx+1)+ABg;var Azq=
this.CJ.indexOf(String.fromCharCode(0x20),inx+1);var Azr=this.CJ.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azq>=0)&&(Azq<ApY))||((Azr>=0)&&(Azr<ApY)))ApZ=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABu>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(ApZ>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Ep=width-ApZ;else if(((Bu&0x2)===0x2))Ep=((width/2)|0)-((
ApZ/2)|0);if(((Bu&0x20)===0x20))Di=Di+(height-ABu);else if(((Bu&0x100)===0x100))
Di=((Di+((height/2)|0))-((ABu/2)|0))+(((this.B8.Descent-this.B8.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Di=(Di+((height/2)|0))-((ABu/2)|0);Ep=(Ep+A4x[0])+this.Jh;
ApZ=(ApZ+(A4x[2]-A4x[0]))-BgE;var B5;{var Bf6=[Bd[0]+Ep,Bd[1]+Di];B5=[].concat(Bf6
,A.abf(Bf6,[ApZ,AaT]));}return A.abh(B5,this.Bs);},ADi:function(Ad){if((this.String===
A.jV)||!this.B8)return A.jV;if(!this.H1)this.XS(this);var Kj=this.CJ.charCodeAt(
0)||0;var inx=1;if((!this.B8||(Ad<0))||(Ad>=Kj))return A.jV;while(Ad>0){inx=inx+(
this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var XT=inx;var AtS=inx+(this.CJ.charCodeAt(
inx)||0);var IB=0x00;do{XT=XT+1;IB=this.CJ.charCodeAt(XT)||0;}while(((IB===0xFEFF
)||(IB===0x0A))&&(XT<=AtS));do{AtS=AtS-1;IB=this.CJ.charCodeAt(AtS)||0;}while(((
IB===0xFEFF)||(IB===0x0A))&&(XT<=AtS));var NM=A.abW(this.CJ,XT,(AtS-XT)+1);var Apq;
for(Apq=NM.indexOf(String.fromCharCode(0xFEFF),0);Apq>=0;Apq=NM.indexOf(String.fromCharCode(
0xFEFF),Apq+1)){var XI=Apq+1;while((NM.charCodeAt(XI)||0)===0xFEFF)XI=XI+1;NM=A.
ab1(NM,Apq,XI-Apq);}return NM;},Dd:function(){var B;if((this.String===A.jV)||!this.
B8)return E6;if(!this.H1)this.XS(this);if(this.CJ===A.jV)return E6;var leading=this.
B8.Leading;var ABe=(this.B8.Ascent+this.B8.Descent)+this.B8.Leading;if(this.Oa>0
){leading=(this.Oa-this.B8.Ascent)-this.B8.Descent;ABe=this.Oa;}if(A.aaX(this.Amk
,BD))this.Amk=[this.B8.A7g(this.CJ),this.Amk[1]];this.Amk=[this.Amk[0],((this.CJ.
charCodeAt(0)||0)*ABe)-leading];var Bu=this.Km;var Bd=this.M;var Aua=this.Jh;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Dh=[Aua,0,width-Aua,height];var B5=[
].concat(Dh.slice(0,2),A.abf(Dh.slice(0,2),this.Amk));if(((Bu&0x80)===0x80)){if(
this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XK=
this.AcO;if(XK<=0)XK=width-(this.Jh*2);if(XK<0)XK=0;if(XK>(B5[2]-B5[0]))B5=A.abL(
B5,XK);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B5[3]-B5[1])>(Dh[3]-Dh[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B5[2]-B5[0])>(Dh[
2]-Dh[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B5[2]-B5[0])!==(Dh[2]-Dh[0]
)){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2)===0x2)
)B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[3]-B5[
1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1]));else
if(((Bu&0x100)===0x100))B5=A.abO(B5,((Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-B5[1
])/2)|0))+(((this.B8.Descent-this.B8.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B5=
A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(
0,2));return A.abh(B5,this.Bs);},_Init:function(aArg){A.Core.Eu._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lf();this.__proto__=A.Core.Eu;
A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.En)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuU={attrString:null,AttrSet:
null,String:A.jV,Km:0x12,Kr:function(C1,aClip,aOffset,Ck,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Dd();Ck=Ck+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;C1.BiZ(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ck*255)>>8,(Ck*255)>>8,(Ck*255)>>8,(Ck
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pi],this);}A.Core.Eu.H.call(this,E);A.pe([this,this.AiS],this
);},AiS:function(G){},XS:function(G){var B;var ALI;ALI=(B=this.M)[2]-B[0];if(ALI<
0)ALI=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5M
,0);if(!!this.attrString)this.attrString.BoJ(this.AttrSet,this.String,ALI,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiS],this);
},Pi:function(G){A.pe([this,this.XS],this);},Bgy:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A4:function(E){var B;E&=~0x140;if(E===this.
Km)return;this.Km=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([
this,this.AiS],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pi],this);},A9$:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bgy],this.AttrSet,0);A.z9([this,this.Pi
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bgy],this.AttrSet,0);A.zV([this,this.Pi],this.AttrSet,1);}A.pe([this,this.
Pi],this);},Dd:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E6;
if(!this.attrString)this.XS(this);if(!this.attrString)return E6;var Bu=this.Km;var
C7=this.attrString.BjW();var Dh=A.aaT(this.M,BD);var B5=[].concat(Dh.slice(0,2),
A.abf(Dh.slice(0,2),C7));if(!C7[0]||!C7[1])return E6;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B5[2]-B5[0])!==(Dh[
2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2
)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1])
);else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);
this.__proto__=C.AuU;this.U=0x3;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoc={AiF:
null,FI:null,Air:0,Aiq:0,Vd:A.wf,Cl:A.abi(4,3,0,null),AGY:A.wf,Tr:0,ApD:0,J2:function(
E){if(A.aaX(E,this.KC))return;A.Core.ZJ.J2.call(this,E);this.Cl.Set(3,0,E[0]);this.
Cl.Set(3,1,E[1]);this.Cl.Set(3,2,1);this.Tr=0x45;this.FI=null;A.pe([this,this.Aja
],this);},Kz:function(E){if(A.aaX(E,this.MM))return;A.Core.ZJ.Kz.call(this,E);this.
Cl.Set(2,0,E[0]);this.Cl.Set(2,1,E[1]);this.Cl.Set(2,2,1);this.Tr=0x45;this.FI=null;
A.pe([this,this.Aja],this);},DE:function(E){if(A.aaX(E,this.ED))return;A.Core.ZJ.
DE.call(this,E);this.Cl.Set(1,0,E[0]);this.Cl.Set(1,1,E[1]);this.Cl.Set(1,2,1);this.
Tr=0x45;this.FI=null;A.pe([this,this.Aja],this);},DO:function(E){if(A.aaX(E,this.
Et))return;A.Core.ZJ.DO.call(this,E);this.Cl.Set(0,0,E[0]);this.Cl.Set(0,1,E[1]);
this.Cl.Set(0,2,1);this.Tr=0x45;this.FI=null;A.pe([this,this.Aja],this);},A1X:function(
){return;},Aja:function(G){var B;this.AiF=null;if(this.Tr===0x00)return;if(this.
Tr===0x45){var K7=A._NewObject(A.Graphics.Ax5,0);K7=K7.ANV(this.Cl.Get(0,0),this.
Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),this.Cl.Get(2,1),
this.Cl.Get(3,0),this.Cl.Get(3,1));if(!!K7){K7.ACh(0,0);this.Cl.Set(0,2,K7.UW*240
);K7.ACh(1,0);this.Cl.Set(1,2,K7.UW*240);K7.ACh(1,1);this.Cl.Set(2,2,K7.UW*240);
K7.ACh(0,1);this.Cl.Set(3,2,K7.UW*240);}this.A1X();}if((((this.Tr===0x4D)&&!!this.
FI)&&!!this.Vd[0])&&!!this.Vd[1]){var Ai7=[].concat(BD,this.Vd);var Ai6=this.AGY;
var Af8=Ai7[0]-Ai6[0];var Az=Ai7[2]-Ai6[0];var D9=Ai7[1]-Ai6[1];var RB=Ai7[3]-Ai6[
1];this.FI.Afb(Af8,D9);this.Cl.Set(0,0,this.FI.P7+this.Aiq);this.Cl.Set(0,1,this.
FI.P8+this.Air);this.Cl.Set(0,2,this.FI.UW);this.FI.Afb(Az,D9);this.Cl.Set(1,0,this.
FI.P7+this.Aiq);this.Cl.Set(1,1,this.FI.P8+this.Air);this.Cl.Set(1,2,this.FI.UW);
this.FI.Afb(Az,RB);this.Cl.Set(2,0,this.FI.P7+this.Aiq);this.Cl.Set(2,1,this.FI.
P8+this.Air);this.Cl.Set(2,2,this.FI.UW);this.FI.Afb(Af8,RB);this.Cl.Set(3,0,this.
FI.P7+this.Aiq);this.Cl.Set(3,1,this.FI.P8+this.Air);this.Cl.Set(3,2,this.FI.UW);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Et=[(this.
Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.Get(1,0)+0.5)|0,(
this.Cl.Get(1,1)+0.5)|0];this.MM=[(this.Cl.Get(2,0)+0.5)|0,(this.Cl.Get(2,1)+0.5
)|0];this.KC=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];this.A1X();}this.
ApD=this.Tr;this.Tr=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},Boe:function(E){if(A.aaX(E,this.AGY))return;this.AGY=E;if((this.ApD!==0x45)&&(
this.Tr===0x00)){this.Tr=this.ApD;A.pe([this,this.Aja],this);}},Arq:function(Fe){
var B;if(!!!this.AiF){this.AiF=A._NewObject(A.Graphics.A7Q,0);this.AiF.ANV(this.
Cl.Get(0,0),this.Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),
this.Cl.Get(2,1),this.Cl.Get(3,0),this.Cl.Get(3,1));}if(!this.AiF.Afb(Fe))return BD;
var Ap4=[].concat(BD,this.Vd);var Ep=this.AiF.P7*(Ap4[2]-Ap4[0]);var Di=this.AiF.
P8*(Ap4[3]-Ap4[1]);return A.abf([Ep|0,Di|0],Ap4.slice(0,2));},BaC:function(Bcy,Mb
){var B;this.AiF=null;if(!Mb)throw new Error(I0);if(!this.FI)this.FI=A._NewObject(
A.Graphics.Ax5,0);this.FI.BhW(Mb);this.Aiq=Bcy[0];this.Air=Bcy[1];this.ApD=0x4D;
this.Tr=0x00;if(!this.Vd[0]||!this.Vd[1])return;var Ai7=[].concat(BD,this.Vd);var
Ai6=this.AGY;var Af8=Ai7[0]-Ai6[0];var Az=Ai7[2]-Ai6[0];var D9=Ai7[1]-Ai6[1];var
RB=Ai7[3]-Ai6[1];this.FI.Afb(Af8,D9);this.Cl.Set(0,0,this.FI.P7+this.Aiq);this.Cl.
Set(0,1,this.FI.P8+this.Air);this.Cl.Set(0,2,this.FI.UW);this.FI.Afb(Az,D9);this.
Cl.Set(1,0,this.FI.P7+this.Aiq);this.Cl.Set(1,1,this.FI.P8+this.Air);this.Cl.Set(
1,2,this.FI.UW);this.FI.Afb(Az,RB);this.Cl.Set(2,0,this.FI.P7+this.Aiq);this.Cl.
Set(2,1,this.FI.P8+this.Air);this.Cl.Set(2,2,this.FI.UW);this.FI.Afb(Af8,RB);this.
Cl.Set(3,0,this.FI.P7+this.Aiq);this.Cl.Set(3,1,this.FI.P8+this.Air);this.Cl.Set(
3,2,this.FI.UW);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Et=[(this.Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.
Get(1,0)+0.5)|0,(this.Cl.Get(1,1)+0.5)|0];this.MM=[(this.Cl.Get(2,0)+0.5)|0,(this.
Cl.Get(2,1)+0.5)|0];this.KC=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.A1X();},_Init:
function(aArg){A.Core.ZJ._Init.call(this,aArg);(this.Cl=[]).__proto__=C.Aoc.Cl;this.
__proto__=C.Aoc;this.U=0x3;},_Mark:function(D){var B;A.Core.ZJ._Mark.call(this,D
);if((B=this.AiF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FI)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AV1={Ft:null,bitmap:null
,P:null,G9:255,Kr:function(C1,aClip,aOffset,Ck,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var NG=aOffset[0];var NH=aOffset[1];var AE=[].concat(BD,this.
Vd);aBlend=aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;var Be3;var Be4;var Be5;var Be6;
var BAR=this.G9;Be3=Be4=Be5=Be6=BAR;var Aly=255|(255<<8)|(255<<16)|((((Ck*Be3)>>
8)&0xFF)<<24);var Alz=255|(255<<8)|(255<<16)|((((Ck*Be4)>>8)&0xFF)<<24);var By4=
255|(255<<8)|(255<<16)|((((Ck*Be5)>>8)&0xFF)<<24);var By5=255|(255<<8)|(255<<16)|((((
Ck*Be6)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E6,aOffset));C1.AhR(aClip,this.bitmap
,0,this.Cl.Get(0,0)+NG,this.Cl.Get(0,1)+NH,this.Cl.Get(0,2),this.Cl.Get(1,0)+NG,
this.Cl.Get(1,1)+NH,this.Cl.Get(1,2),this.Cl.Get(2,0)+NG,this.Cl.Get(2,1)+NH,this.
Cl.Get(2,2),this.Cl.Get(3,0)+NG,this.Cl.Get(3,1)+NH,this.Cl.Get(3,2),AE,Aly,Alz,
By4,By5,aBlend,true);},G4:function(CM){if(!this.P||!this.Ft)return null;var BO=(
A.Core.Aee.isPrototypeOf(CM)?CM:null);var D5=(A.Core.AqH.isPrototypeOf(CM)?CM:null
);if(!BO&&!D5)return null;var Fv=BD;var B1=this.Ft.Ab;while(!!B1&&(B1!==this.P)){
Fv=A.abe(Fv,B1.M.slice(0,2));B1=B1.Ab;}var X=this.Ft;if(!!BO&&!BO.Down)this.Ft=null;
if(!!BO){BO.H4=A.abf(this.Arq(BO.H4),Fv);BO.NZ=A.abf(this.Arq(BO.NZ),Fv);return X.
G4(BO);}if(!!D5){var BAV=A.abf(this.Arq(A.abe(D5.H4,D5.DI)),Fv);D5.H4=A.abf(this.
Arq(D5.H4),Fv);D5.NZ=A.abf(this.Arq(D5.NZ),Fv);D5.DI=A.abe(D5.H4,BAV);return X.G4(
D5);}return C.Aoc.G4.call(this,CM);},Yq:function(Dc,BH,Om,Aar,Ac5,Ac4){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Dc);pos=this.Arq(pos
);var Ap4=[].concat(BD,this.Vd);if(!A.wa(Ap4,pos))return null;var JL=this.P.Yq(A.
abh(A.abh([0,0,Dc[2]-Dc[0],Dc[3]-Dc[1]],pos),this.P.M.slice(0,2)),BH,Om,Aar,null
,Ac4);if(!!JL)this.Ft=JL.Cj;else this.Ft=null;if(!!this.Ft)return A._NewObject(A.
Core.Au1,0).Initialize(this,BD);return null;},RO:function(G){var B;var Be7=this.
Vd;if(!!this.P)this.bitmap=this.P.FF;else this.bitmap=null;if(!!this.bitmap)this.
Vd=this.bitmap.FrameSize;else this.Vd=BD;if(((A.aaX(Be7,this.Vd)||((this.ApD===0x45
)&&(this.Tr===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if(((this.ApD!==0x45)&&(this.Tr===0x00))&&!A.aaX(Be7,this.Vd)){this.Tr=this.ApD;
A.pe([this,this.Aja],this);}},C0:function(E){var B;if(E===this.G9)return;this.G9=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Bni:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Iv);if(!!this.P){A.
z9([this,this.RO],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RO
],E,0);this.bitmap=E.FF;}this.RO(this);},Awn:function(){return this.G9;},_Init:function(
aArg){C.Aoc._Init.call(this,aArg);this.__proto__=C.AV1;},_Mark:function(D){var B;
C.Aoc._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aep={HA:null,AQ:0xFFFFFFFF,DI:A.wf
,AOF:false,Lf:function(){this.A2g();},Kr:function(C1,aClip,aOffset,Ck,aBlend){if(
!this.HA)return;var DF;var DQ;var DK;var DP;var B4=this.AQ;Ck=Ck+1;DF=DQ=DK=DP=B4;
if(Ck<256){DF=(DF&0x00FFFFFF)|((((Ck*((DF>>24)&0xFF))>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF
)|((((Ck*((DQ>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ck*((DK>>24)&0xFF
))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);}C1.
Aep(aClip,this.HA,A.abh(this.M,aOffset),this.AOF,this.DI,DF,DQ,DP,DK,true,true,0
);},A2g:function(){return;},Ajb:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bi(this.M);},AnG:function(E){
var B;if(A.aaX(E,this.DI))return;this.DI=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.HA)this.Ab.Bi(this.M);},Bnd:function(E){var B;if(E===this.AOF)return;this.
AOF=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bi(this.M);},ZD:function(
E){var B;if(E===this.HA)return;if(!!this.HA)A.z9([this,this.Ajb],this.HA,0);this.
HA=E;if(!!this.HA)A.zV([this,this.Ajb],this.HA,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1
);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.Aep;},
_Done:function(){this.Lf();this.__proto__=A.Core.Eu;A.Core.Eu._Done.call(this);}
,_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.HA)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hp={HA:null,AQ:0xFFFFFFFF
,DI:A.wf,Width:1,Lf:function(){this.A2g();},Kr:function(C1,aClip,aOffset,Ck,aBlend
){if(!this.HA)return;var DF;var DQ;var DK;var DP;var B4=this.AQ;Ck=Ck+1;DF=DQ=DK=
DP=B4;if(Ck<256){DF=(DF&0x00FFFFFF)|((((Ck*((DF>>24)&0xFF))>>8)&0xFF)<<24);DQ=(DQ&
0x00FFFFFF)|((((Ck*((DQ>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ck*((DK>>
24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<
24);}C1.Hp(aClip,this.HA,A.abh(this.M,aOffset),false,this.DI,this.Width,0,0,0,3,
DF,DQ,DP,DK,true,true);},A2g:function(){return;},Ajb:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bi(this.
M);},AnG:function(E){var B;if(A.aaX(E,this.DI))return;this.DI=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bi(this.M);},Nu:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.HA)this.Ab.Bi(this.M);},ZD:function(E){var B;if(E===this.HA)return;if(!!this.
HA)A.z9([this,this.Ajb],this.HA,0);this.HA=E;if(!!this.HA)A.zV([this,this.Ajb],this.
HA,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E
)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(
this,aArg);this.__proto__=C.Hp;},_Done:function(){this.Lf();this.__proto__=A.Core.
Eu;A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.HA)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BE4={A5t:0x1,A5s:0x2,A5u:0x4,A5x:0x8,A5w:0x10,A5v:0x20,BGl:0x40,BGm:0x80,BGw:
0x100};C.BGC={A5t:0x1,A5s:0x2,A5u:0x4,A5x:0x8,A5w:0x10,A5v:0x20,BDA:0x40,BDz:0x80
,BDF:0x100};C.BFH={Normal:0,BGf:1,BGd:2,BGe:3};
C._Init=function(){C.C9.__proto__=A.Core.Akd;C.AK.__proto__=A.Core.Eu;C.BX.__proto__=
A.Core.Eu;C.NY.__proto__=A.Core.Eu;C.Ap.__proto__=A.Core.Eu;C.Text.__proto__=A.Core.
Eu;C.AuU.__proto__=A.Core.Eu;C.Aoc.__proto__=A.Core.ZJ;C.AV1.__proto__=C.Aoc;C.Aep.
__proto__=A.Core.Eu;C.Hp.__proto__=A.Core.Eu;};C._ReInit=function(){};C.DJ=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */