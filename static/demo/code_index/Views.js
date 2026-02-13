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
var Cg=[1,1];var BF=[0,0];var E7=[0,0,0,0];var Hr="\uFEFF";var I1="No matrix to perform 3D transformation";
var Iw="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C9={KP:null,Ala:1,Ak$:1,AR:0xFFFFFFFF,Ks:function(C2,aClip,aOffset,Ck,aBlend){var
B;var Agx=this.Ak$;var Agy=this.Ala;var AdG=A.abf(this.Eu,aOffset);var AdH=A.abf(
this.EE,aOffset);var AlC;var AlD;var B5=this.AR;if(A.aaX(AdG,AdH))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;AlC=AlD=B5;if(Ck<256){AlC=(AlC&0x00FFFFFF)|((((
Ck*((AlC>>24)&0xFF))>>8)&0xFF)<<24);AlD=(AlD&0x00FFFFFF)|((((Ck*((AlD>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agx===1)&&(Agy===1))C2.Ava(aClip,AdG,AdH,AlC,AlD,aBlend);else
C2.Bi9(aClip,AdG,AdH,Agx,Agy,AlC,AlD,aBlend);},GetExtent:function(){var Agx=this.
Ak$;var Agy=this.Ala;var AdG=this.Eu;var AdH=this.EE;if(((Agx===1)&&(Agy===1))||
A.aaX(AdG,AdH))return A.Core.Akh.GetExtent.call(this);var AiD=Agx/2;var AiE=Agy/
2;var Apo=AdG[0];var App=AdG[1];var Apq=AdH[0];var Apr=AdH[1];var Ke=Apq-Apo;var
Kf=Apr-App;var I6=Math.sqrt((Ke*Ke)+(Kf*Kf));Ke=Ke/I6;Kf=Kf/I6;var Bdo=Apo+(Kf*AiD
);var Bdp=App-(Ke*AiD);var AJL=Apq+(Kf*AiE);var AJM=Apr-(Ke*AiE);var AJN=Apq-(Kf
*AiE);var AJO=Apr+(Ke*AiE);var AJP=Apo-(Kf*AiD);var AJQ=App+(Ke*AiD);var left=Bdo;
var right=Bdo;var top=Bdp;var bottom=Bdp;if(AJL<left)left=AJL;if(AJN<left)left=AJN;
if(AJP<left)left=AJP;if(AJL>right)right=AJL;if(AJN>right)right=AJN;if(AJP>right)
right=AJP;if(AJM<top)top=AJM;if(AJO<top)top=AJO;if(AJQ<top)top=AJQ;if(AJM>bottom
)bottom=AJM;if(AJO>bottom)bottom=AJO;if(AJQ>bottom)bottom=AJQ;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cg));return Az;
},RQ:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},A$o:function(E){var B;if(E<1)E=1;if(E===this.Ala)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ala=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak$!==1))&&!this.KP){
this.KP=A.aaL(A.aci.As1);if(this.KP.N8)A.zV([this,this.RQ],this.KP,0);}if(((E===
1)&&(this.Ak$===1))&&!!this.KP){if(this.KP.N8)A.z9([this,this.RQ],this.KP,0);this.
KP=null;}},A$n:function(E){var B;if(E<1)E=1;if(E===this.Ak$)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak$=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ala!==1))&&!this.
KP){this.KP=A.aaL(A.aci.As1);if(this.KP.N8)A.zV([this,this.RQ],this.KP,0);}if(((
E===1)&&(this.Ala===1))&&!!this.KP){if(this.KP.N8)A.z9([this,this.RQ],this.KP,0);
this.KP=null;}},Nx:function(E){var B;if(E<1)E=1;if((E===this.Ak$)&&(E===this.Ala
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Ak$=E;this.Ala=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((E!==1)&&!this.KP){this.KP=A.aaL(A.aci.As1);if(this.KP.N8)A.zV([this,this.
RQ],this.KP,0);}if((E===1)&&!!this.KP){if(this.KP.N8)A.z9([this,this.RQ],this.KP
,0);this.KP=null;}},L:function(E){var B;if(E===this.AR)return;this.AR=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Ai:function(E){if(E)this.
Ct(0x400,0x0);else this.Ct(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},_Init:function(
aArg){A.Core.Akh._Init.call(this,aArg);this.__proto__=C.C9;},_Mark:function(D){var
B;A.Core.Akh._Mark.call(this,D);if((B=this.KP)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANw:0xFFFFFFFF,ANx:0xFFFFFFFF,ANB:0xFFFFFFFF
,ANA:0xFFFFFFFF,AR:0xFFFFFFFF,Ks:function(C2,aClip,aOffset,Ck,aBlend){var B;var DF=
this.ANA;var DQ=this.ANB;var DK=this.ANw;var DP=this.ANx;var B5=this.AR;aBlend=aBlend&&((
this.U&0x2)===0x2);Ck=Ck+1;if((((DF===DQ)&&(DK===DP))&&(DF===DK))&&(DF===0xFFFFFFFF
))DF=DQ=DK=DP=B5;else if(B5!==0xFFFFFFFF){DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)
*(((B5>>24)&0xFF)+1))>>8)&0xFF)<<24);DF=(DF&0xFFFFFF00)|((((DF&0xFF)*((B5&0xFF)+
1))>>8)&0xFF);DF=(DF&0xFFFF00FF)|((((((DF>>8)&0xFF)*(((B5>>8)&0xFF)+1))>>8)&0xFF
)<<8);DF=(DF&0xFF00FFFF)|((((((DF>>16)&0xFF)*(((B5>>16)&0xFF)+1))>>8)&0xFF)<<16);
DQ=(DQ&0x00FFFFFF)|((((((DQ>>24)&0xFF)*(((B5>>24)&0xFF)+1))>>8)&0xFF)<<24);DQ=(DQ&
0xFFFFFF00)|((((DQ&0xFF)*((B5&0xFF)+1))>>8)&0xFF);DQ=(DQ&0xFFFF00FF)|((((((DQ>>8
)&0xFF)*(((B5>>8)&0xFF)+1))>>8)&0xFF)<<8);DQ=(DQ&0xFF00FFFF)|((((((DQ>>16)&0xFF)
*(((B5>>16)&0xFF)+1))>>8)&0xFF)<<16);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*(((B5>>
24)&0xFF)+1))>>8)&0xFF)<<24);DK=(DK&0xFFFFFF00)|((((DK&0xFF)*((B5&0xFF)+1))>>8)&
0xFF);DK=(DK&0xFFFF00FF)|((((((DK>>8)&0xFF)*(((B5>>8)&0xFF)+1))>>8)&0xFF)<<8);DK=(
DK&0xFF00FFFF)|((((((DK>>16)&0xFF)*(((B5>>16)&0xFF)+1))>>8)&0xFF)<<16);DP=(DP&0x00FFFFFF
)|((((((DP>>24)&0xFF)*(((B5>>24)&0xFF)+1))>>8)&0xFF)<<24);DP=(DP&0xFFFFFF00)|((((
DP&0xFF)*((B5&0xFF)+1))>>8)&0xFF);DP=(DP&0xFFFF00FF)|((((((DP>>8)&0xFF)*(((B5>>8
)&0xFF)+1))>>8)&0xFF)<<8);DP=(DP&0xFF00FFFF)|((((((DP>>16)&0xFF)*(((B5>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ck<256){DF=(DF&0x00FFFFFF)|((((Ck*((DF>>24)&0xFF))>>8)&
0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((Ck*((DQ>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF
)|((((Ck*((DK>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF
))>>8)&0xFF)<<24);}C2.Avp(aClip,A.abh(this.M,aOffset),DF,DQ,DP,DK,aBlend);},AwC:
function(E){var B;if(E===this.ANw)return;this.ANw=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},AwD:function(E){var B;if(E===this.ANx)return;this.ANx=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},AwF:function(E){var B;
if(E===this.ANB)return;this.ANB=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.M);},AwE:function(E){var B;if(E===this.ANA)return;this.ANA=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AR)return;
this.AR=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Fp:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.
Ct(0x0,0x1);},_Init:function(aArg){A.Core.Ev._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BY={Width:1,AR:0xFFFFFFFF,Ks:function(C2
,aClip,aOffset,Ck,aBlend){var B;var DF;var DQ;var DK;var DP;var B5=this.AR;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;DF=DQ=DK=DP=B5;if(Ck<256){DF=(DF&0x00FFFFFF
)|((((Ck*((DF>>24)&0xFF))>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((Ck*((DQ>>24)&0xFF
))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ck*((DK>>24)&0xFF))>>8)&0xFF)<<24);DP=(
DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);}C2.Bi7(aClip,A.abh(this.M
,aOffset),this.Width,DF,DQ,DP,DK,aBlend);},Nx:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);},L:function(E){var B;if(E===this.AR)return;this.AR=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(
0x0,0x1);},_Init:function(aArg){A.Core.Ev._Init.call(this,aArg);this.__proto__=C.
BY;},_className:"Views::Border"};C.N1={timer:null,Al:null,M1:-1,AR:0xFFFFFFFF,Avb:
0x1F,T0:0,Dy:0,Anp:A.wf,VK:false,Ks:function(C2,aClip,aOffset,Ck,aBlend){var B;var
NG=this.T0;if(this.M1>=0)NG=this.M1;if(!this.Al||(NG>=this.Al.NoOfFrames))return;
this.Al.Update();var DF;var DQ;var DP;var DK;var B5=this.AR;var Kl=(((Ck+1)*255)>>
8)+1;var Os=this.Avb;var Az=A.abh(this.M,aOffset);var ALb=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anp);aBlend=aBlend&&((this.U&0x2)===0x2);DF=DQ=DK=DP=B5;if(Kl<256
){DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((((
DQ>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*Kl)>>8)&
0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(((this.
Anp[0]>0)&&(ALb[0]>0))&&!((Os&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-ALb[
0];if(((Os&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Os=Os|0x4;}else if(((Os&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Os=Os|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Os=Os|0x5;}}if(((this.Anp[1]>0)&&(ALb[1]>0))&&!((Os&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-ALb[1];if(((Os&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Os=Os|0x8;}else if(((Os&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Os=Os|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Os=Os|
0xA;}}C2.Bi6(aClip,this.Al,NG,Az,Os,DF,DQ,DP,DK,aBlend);},RQ:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Mn:function(G){var B;var NG=
this.M1;var Tw=0;if(!!this.Al)Tw=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.M1<0))&&(Tw>0))this.Dy=this.timer.Bq-(this.T0*this.Al.FrameDelay);if(
!!this.timer&&(Tw>0)){var Av=(this.timer.Bq-this.Dy)|0;NG=(Av/this.Al.FrameDelay
)|0;if(Av>=Tw){NG=NG%this.Al.NoOfFrames;this.Dy=this.timer.Bq-(Av%Tw);}}if(((NG!==
this.M1)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.M1=NG;if(!Tw&&
!!this.timer){A.z9([this,this.Mn],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AR)return;this.AR=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bi(this.M);},Zz:function(E){var B;if(this.VK===E)return;this.VK=E;this.M1=-1;if(
!E&&!!this.timer){A.z9([this,this.Mn],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aeo);A.zV([this,this.Mn],this.timer,0);A.pe([this,this.
Mn],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},A_B:function(
E){var B;if(E===this.Avb)return;this.Avb=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Cx:function(E){var B;if(E<0)E=0;if((E===this.T0)&&(this.M1===-1)
)return;this.T0=E;if(!this.timer)this.M1=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
N8)A.z9([this,this.RQ],this.Al,0);this.Al=E;this.M1=-1;if(!!E&&E.N8)A.zV([this,this.
RQ],E,0);if(this.VK){this.Zz(false);this.Zz(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1
);},A_S:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anp))return;this.Anp=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Avb&0xF)===
0xF))this.Ab.Bi(this.M);},_Init:function(aArg){A.Core.Ev._Init.call(this,aArg);this.
__proto__=C.N1;},_Mark:function(D){var B;A.Core.Ev._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dy:0,M1:0,AR:0xFFFFFFFF
,Kn:0x12,T0:0,G9:255,VK:false,Abc:false,Ks:function(C2,aClip,aOffset,Ck,aBlend){
var B;var NG=this.T0;if(this.M1>=0)NG=this.M1;if(!this.Al||(NG>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dd();var C7=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DF;var DQ;var DP;var DK;var B5=this.AR;var Kl=(((
Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DF=DQ=DK=DP=B5;if(Kl<256
){DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((((
DQ>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*Kl)>>8)&
0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C7))C2.A6n(aClip,this.Al,NG,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DF,DQ,DP,DK,aBlend);else C2.Bpq(aClip,this.Al,NG
,A.abh(AE,aOffset),[].concat(BF,C7),DF,DQ,DP,DK,aBlend,true);},RQ:function(G){var
B;if(((this.Abc&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Mn:function(
G){var B;var NG=this.M1;var Tw=0;if(!!this.Al)Tw=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.M1<0))&&(Tw>0))this.Dy=this.timer.Bq-(this.T0*this.Al.FrameDelay
);if(!!this.timer&&(Tw>0)){var Av=(this.timer.Bq-this.Dy)|0;NG=(Av/this.Al.FrameDelay
)|0;if(Av>=Tw){NG=NG%this.Al.NoOfFrames;this.Dy=this.timer.Bq-(Av%Tw);}}if(((NG!==
this.M1)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.M1=NG;if(!Tw&&
!!this.timer){A.z9([this,this.Mn],this.timer,0);this.timer=null;}},Jg:function(E
){if(E===this.Abc)return;this.Abc=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dd());},L:function(E){var B;if(E===this.
AR)return;this.AR=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Zz:function(
E){var B;if(this.VK===E)return;this.VK=E;this.M1=-1;if(!E&&!!this.timer){A.z9([this
,this.Mn],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aeo);A.zV([this,this.Mn],this.timer,0);A.pe([this,this.Mn],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A4:function(E){var B;if(E===this.Kn)return;
this.Kn=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Cx:function(E){
var B;if(E<0)E=0;if((E===this.T0)&&(this.M1===-1))return;this.T0=E;if(!this.timer
)this.M1=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.N8)A.z9([this,this.RQ],this.
Al,0);this.Al=E;this.M1=-1;if(!!E&&E.N8)A.zV([this,this.RQ],E,0);if(this.VK){this.
Zz(false);this.Zz(true);}if(((this.Abc&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},
C0:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;this.G9=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ai:function(E){if(E)this.Ct(
0x400,0x0);else this.Ct(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},Dd:function(){var
B;if(!this.Al)return E7;var Bu=this.Kn;var C7=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C7[0]||!C7[1])return E7;var Dh=[0,0
,width,height];var B6=Dh;if(((Bu&0x40)===0x40)){var A4F=((((Dh[2]-Dh[0])<<16)+((
C7[0]/2)|0))/C7[0])|0;var ABj=((((Dh[3]-Dh[1])<<16)+((C7[1]/2)|0))/C7[1])|0;var Ai3=
A4F;if(ABj>Ai3)Ai3=ABj;B6=A.abL(B6,((C7[0]*Ai3)+32768)>>16);B6=A.abI(B6,((C7[1]*
Ai3)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4F=((((Dh[2]-Dh[0])<<16)+((C7[
0]/2)|0))/C7[0])|0;var ABj=((((Dh[3]-Dh[1])<<16)+((C7[1]/2)|0))/C7[1])|0;var Ai3=
A4F;if(ABj<Ai3)Ai3=ABj;B6=A.abL(B6,((C7[0]*Ai3)+32768)>>16);B6=A.abI(B6,((C7[1]*
Ai3)+32768)>>16);}else if(!((Bu&0x100)===0x100))B6=A.abK(B6,C7);if((B6[2]-B6[0])
!==(Dh[2]-Dh[0])){if(((Bu&0x4)===0x4))B6=A.abM(B6,Dh[2]-(B6[2]-B6[0]));else if(((
Bu&0x2)===0x2))B6=A.abM(B6,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B6[2]-B6[0])/2)|0));
}if((B6[3]-B6[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B6=A.abO(B6,Dh[3]-(B6[3
]-B6[1]));else if(((Bu&0x10)===0x10))B6=A.abO(B6,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((
B6[3]-B6[1])/2)|0));}B6=A.abh(B6,Bd.slice(0,2));return B6;},Blu:function(){return this.
AR;},ASP:function(){return this.T0;},_Init:function(aArg){A.Core.Ev._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Ev._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B9:null,Eo:null,CK:
A.jV,String:A.jV,Oq:null,Amp:A.wf,Jj:0,Oc:0,AcT:0,Bs:A.wf,Kn:0x12,AR:0xFFFFFFFF,
AfG:false,Abc:false,Yx:false,AOk:false,H1:false,Lh:function(){if(!!this.Oq){this.
A2J(this.Oq);this.Oq=null;}},Ks:function(C2,aClip,aOffset,Ck,aBlend){var B;if((this.
CK===A.jV)||!this.B9)return;var Bu=this.Kn;var font=this.B9;var Dh=A.abh(this.M,
aOffset);var DF;var DQ;var DP;var DK;var col=this.AR;var Kl=(((Ck+1)*255)>>8)+1;
var Kk=this.CK.charCodeAt(0)||0;var AE=A.abh(this.Dd(),aOffset);var Br=[Dh[0]-AE[
0],(Dh[1]-AE[1])-font.Ascent];if(Kk<1)return;DF=DQ=DK=DP=col;if(Kl<256){DF=(DF&0x00FFFFFF
)|((((((DF>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF)|((((((DQ>>24)&0xFF)*
Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DK=(
DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kk===1)&&!((Bu&0x40)===
0x40)){C2.A6P(aClip,font,this.CK,2,(this.CK.charCodeAt(1)||0)-1,Dh,Br,0,0,DF,DQ,
DP,DK,true);return;}var leading=font.Leading;if(this.Oc>0)leading=(this.Oc-font.
Ascent)-font.Descent;var AaW=(font.Ascent+font.Descent)+leading;var Bzf=aClip[1]-
AE[1];var Bzg=aClip[3]-AE[1];var A1V=AE[2]-AE[0];var Di=0;var O=1;var B5=this.CK.
charCodeAt(1)||0;while(((Di+AaW)<Bzf)&&(B5>0)){O=O+B5;Di=Di+AaW;B5=this.CK.charCodeAt(
O)||0;}while((Di<Bzg)&&(B5>0)){var Mj=A.abe(Br,[0,Di]);var Ami=0;var Pj=false;if(((((
Bu&0x40)===0x40)&&((this.CK.charCodeAt((O+B5)-1)||0)!==0x0A))&&((this.CK.charCodeAt(
O+1)||0)!==0x0A))&&((this.CK.charCodeAt(O+B5)||0)!==0x00))Pj=true;if(Pj&&!!(Bu&0x6
)){var Ap4=O+B5;var Azr=this.CK.indexOf(String.fromCharCode(0x20),O+1);var Azs=this.
CK.indexOf(String.fromCharCode(0xA0),O+1);if(((Azr<0)||(Azr>=Ap4))&&((Azs<0)||(Azs>=
Ap4)))Pj=false;}if(Pj)Ami=A1V;else if(((Bu&0x4)===0x4))Mj=[(Mj[0]-A1V)+font.YD(this.
CK,O+1,B5-1),Mj[1]];else if(((Bu&0x2)===0x2))Mj=[(Mj[0]-((A1V/2)|0))+((font.YD(this.
CK,O+1,B5-1)/2)|0),Mj[1]];C2.A6P(aClip,font,this.CK,O+1,B5-1,Dh,Mj,Ami,0,DF,DQ,DP
,DK,true);O=O+B5;Di=Di+AaW;B5=this.CK.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BgI;BgI=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BgI&&
!this.AcT)&&this.AfG)&&this.H1)&&!((this.U&0x2000)===0x2000)){this.CK=A.jV;this.
H1=false;A.pe([this,this.Pl],this);}if(((this.Yx&&this.H1)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CK=
A.jV;this.H1=false;A.pe([this,this.Pl],this);}A.Core.Ev.H.call(this,E);A.pe([this
,this.AiW],this);},By9:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},By8:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2J:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bzs:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiW:function(G){A.pe(this.Eo
,this);},Pl:function(G){A.pe([this,this.XU],this);},XU:function(G){var B;if(this.
H1)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XM=-1;var
font=this.B9;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfG){
if(this.AcT>0)XM=this.AcT;else if(!this.Abc)XM=width-(this.Jj*2);else XM=width;if(
XM<0)XM=1;}if(!!this.Oq){this.A2J(this.Oq);this.Oq=null;}this.H1=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOk)this.Oq=this.Bzs(length
);this.CK=font.BoO(this.String,0,XM,length,this.Oq);if(!!this.Oq&&!this.Bkm()){this.
A2J(this.Oq);this.Oq=null;}}else this.CK=A.jV;this.Amp=BF;if(((this.Yx&&(this.CK
!==A.jV))&&!this.Abc)&&!!font){var Bu=this.Kn;var leading=font.Leading;var IH=this.
CK;var AK7=this.Aj6();if(((Bu&0x80)===0x80)){if(AK7)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.Oc>0)leading=(this.Oc-font.Ascent)-font.Descent;var ABe=(font.
Ascent+font.Descent)+leading;var Kk=IH.charCodeAt(0)||0;var AlZ=((height+leading
)/ABe)|0;var A19=false;var AJT=false;if(AlZ<=0)AlZ=1;if(Kk>AlZ){var Bj=0;var ABf=
0;var AK5=Kk-1;var K8;var NH=IH.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))ABf=Kk-AlZ;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){ABf=((Kk-AlZ)/2)|0;AK5=(ABf+AlZ)-1;}else
AK5=AlZ-1;A19=ABf>0;AJT=AK5<(Kk-1);for(K8=1;Bj<ABf;Bj=Bj+1)K8=K8+(IH.charCodeAt(
K8)||0);if(AJT)for(NH=K8;Bj<AK5;Bj=Bj+1)NH=NH+(IH.charCodeAt(NH)||0);if(A19){var
I6=IH.charCodeAt(K8)||0;tmp=(Hr+A.abW(IH,K8,I6))+Hr;tmp=A.abQ(tmp,0,(I6+2)&0xFFFF
);K8=K8+I6;if((tmp.charCodeAt(I6)||0)===0x0A){tmp=A.abQ(tmp,I6,0xFEFF);tmp=A.abQ(
tmp,I6+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IH,K8,NH-K8);if(AJT&&(
NH>=K8)){var I6=IH.charCodeAt(NH)||0;var QE=(Hr+A.abW(IH,NH,I6))+Hr;QE=A.abQ(QE,
0,(I6+2)&0xFFFF);QE=A.abQ(QE,1,0xFEFF);if((QE.charCodeAt(I6)||0)===0x0A){QE=A.abQ(
QE,I6,0xFEFF);QE=A.abQ(QE,I6+1,0x0A);}if((QE.charCodeAt(2)||0)===0x0A){QE=A.abQ(
QE,2,0xFEFF);QE=A.abQ(QE,1,0x0A);}else QE=A.abQ(QE,1,0xFEFF);tmp=tmp+QE;}IH=String.
fromCharCode(AlZ&0xFFFF)+tmp;}var Bj=0;var inx=1;var AKD=width-(this.Jj*2);if(this.
AfG&&(this.AcT>0))AKD=this.AcT;Kk=IH.charCodeAt(0)||0;for(;Bj<Kk;Bj=Bj+1){var Amf=
A19&&!Bj;var Amg=AJT&&(Bj===(Kk-1));var XB=false;var XC=false;var Aus=AK7;if((AK7&&
Amf)&&!Amg){Amf=false;Amg=true;}else if((AK7&&Amg)&&!Amf){Amg=false;Amf=true;}var
XV=inx+1;var I6=IH.charCodeAt(inx)||0;var K8=XV;var NH=(XV+I6)-2;var A2Y=-1;var A2Z=-
1;if(!this.AfG&&(font.YD(IH,XV,I6-1)>AKD)){var Ao0=Bu;if(((Ao0&0x2)===0x2)&&!!(Ao0&
0x5))Ao0&=~0x2;if(((Ao0&0x2)===0x2))Ao0&=~0x5;if(((Ao0&0x4)===0x4))XB=true;else if(((
Ao0&0x2)===0x2)){XB=true;XC=true;}else XC=true;}if((IH.charCodeAt(K8)||0)===0x0A
)K8=K8+1;if((IH.charCodeAt(NH)||0)===0x0A)NH=NH-1;while(XB&&((IH.charCodeAt(K8)||
0)===0xFEFF))K8=K8+1;while(XC&&((IH.charCodeAt(NH)||0)===0xFEFF))NH=NH-1;XB=XB&&
!Amg;XC=XC&&!Amf;while((((XB||XC)||Amf)||Amg)&&(K8<NH)){if((XB&&(Aus||!XC))||Amf
){if(A2Y>0)IH=A.abQ(IH,A2Y,0xFEFF);IH=A.abQ(IH,K8,0x2026);A2Y=K8;K8=K8+1;Aus=!Aus;
Amf=false;if(font.YD(IH,XV,I6-1)<=AKD){XB=false;XC=false;}else XB=XB||!XC;}if((XC&&(
!Aus||!XB))||Amg){if(A2Z>0)IH=A.abQ(IH,A2Z,0xFEFF);IH=A.abQ(IH,NH,0x2026);A2Z=NH;
NH=NH-1;Aus=!Aus;Amg=false;if(font.YD(IH,XV,I6-1)<=AKD){XB=false;XC=false;}else XC=
XC||!XB;}}inx=inx+I6;}this.Amp=[font.A7k(IH),((IH.charCodeAt(0)||0)*ABe)-leading
];this.CK=IH;}if(this.Abc&&(this.CK!==A.jV)){var Aue=[this.Jj,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dd(),Aue),this.Bs));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiW],this);},BmU:function(
E){if(E===this.AOk)return;this.AOk=E;this.CK=A.jV;this.H1=false;A.pe([this,this.
Pl],this);},Ho:function(E){if(E<0)E=0;if(this.Jj===E)return;this.Jj=E;this.CK=A.
jV;this.H1=false;A.pe([this,this.Pl],this);},Axb:function(E){var B;if(E<0)E=0;if(
this.Oc===E)return;this.Oc=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);if(this.Yx){this.CK=A.jV;this.H1=false;A.pe([this,this.Pl],this);}if(this.Abc&&
this.H1)this.H(A.abg(this.Dd(),this.Bs));if(this.H1)A.pe([this,this.AiW],this);}
,BmT:function(E){if(E===this.Yx)return;this.Yx=E;if(((this.AfG&&!!!this.AcT)||E)||
!!this.Eo)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CK=A.jV;this.H1=false;
A.pe([this,this.Pl],this);},Q9:function(E){if(A.aa0(E,this.Eo))return;this.Eo=E;
if(((!!!this.AcT&&this.AfG)||!!E)||this.Yx)this.U=this.U&~0x100;else this.U=this.
U|0x100;},Jg:function(E){if(E===this.Abc)return;this.Abc=E;if(E&&this.Yx){this.CK=
A.jV;this.H1=false;A.pe([this,this.Pl],this);}if(E&&this.H1){var Aue=[this.Jj,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dd(),Aue),this.Bs));this.U=this.U&~
0x2000;}},Bov:function(E){if(E<0)E=0;if(E===this.AcT)return;this.AcT=E;if(this.AfG&&
this.H1){this.CK=A.jV;this.H1=false;A.pe([this,this.Pl],this);}if(((!!!E&&this.AfG
)||this.Yx)||!!this.Eo)this.U=this.U&~0x100;else this.U=this.U|0x100;},Lx:function(
E){if(E===this.AfG)return;this.AfG=E;if(this.H1){this.CK=A.jV;this.H1=false;A.pe([
this,this.Pl],this);}if(((E&&!!!this.AcT)||this.Yx)||!!this.Eo)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gi:function(E){var B;if(A.aaX(E,this.Bs))return;this.
Bs=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.H1)A.pe([this
,this.AiW],this);},A4:function(E){var B;if(E===this.Kn)return;this.Kn=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.Yx){this.CK=A.jV;this.H1=false;
A.pe([this,this.Pl],this);}if(this.H1)A.pe([this,this.AiW],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CK=A.jV;this.H1=false;A.pe([this,this.
Pl],this);},S:function(E){if(E===this.B9)return;this.B9=E;this.CK=A.jV;this.H1=false;
A.pe([this,this.Pl],this);},L:function(E){var B;if(E===this.AR)return;this.AR=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ai:function(E){if(E)this.
Ct(0x400,0x0);else this.Ct(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},Aj6:function(
){if(!this.H1)this.XU(this);if(!this.Oq)return false;var result=false;var bidi=this.
Oq;result=A.v2(bidi);return result;},Bkm:function(){if(!this.H1)this.XU(this);if(
!this.Oq)return false;var result=false;var bidi=this.Oq;result=A.zZ(bidi);return result;
},AG3:function(aIndex){if(((this.String===A.jV)||!this.B9)||this.Yx)return BF;if(
!this.H1)this.XU(this);if(aIndex<0)aIndex=0;var BAM=(this.CK.charCodeAt(0)||0)-1;
var Mm=this.CK.charCodeAt(1)||0;var inx=1;var Ai8=2;var Bj=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bj<BAM)&&((inx+Mm)<=aIndex)){inx=inx+Mm;Bj=Bj+1;Ai8=Ai8+1;
aIndex=aIndex+1;Mm=this.CK.charCodeAt(inx)||0;}if(aIndex>(inx+Mm))aIndex=inx+Mm;
if(!!this.Oq)aIndex=(inx+this.By8(this.Oq,(inx+1)-Ai8,(inx+Mm)-Ai8,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var IC=this.CK.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(IC!==0xFEFF)&&(IC!==0x0A);}return[col,Bj];},AnX:function(AoP){if(((this.String===
A.jV)||!this.B9)||this.Yx)return 0;if(!this.H1)this.XU(this);var Bj=AoP[1];var col=
AoP[0];var inx=1;var Ai8=2;var Kk=this.CK.charCodeAt(0)||0;var Mm=this.CK.charCodeAt(
1)||0;if(Bj>=Kk){Bj=Kk-1;col=this.CK.length;}if(Bj<0){Bj=0;col=0;}if(col<0)col=0;
while((Bj>0)&&(Mm>0)){inx=inx+Mm;Bj=Bj-1;Ai8=Ai8+1;Mm=this.CK.charCodeAt(inx)||0;
}var XK=inx;var AK6=(inx-Ai8)+1;var Ap4=(AK6+Mm)-1;var AA2=false;while((col>=0)&&(
Mm>1)){var IC=this.CK.charCodeAt(inx+1)||0;inx=inx+1;Mm=Mm-1;AA2=(IC===0xFEFF)||(
IC===0x0A);if(!AA2){col=col-1;XK=inx;}}if((!AA2&&(col>=0))&&((this.CK.charCodeAt(
inx+1)||0)===0x00))AA2=true;if(AA2)XK=XK+1;XK=XK-Ai8;if(!!this.Oq)XK=AK6+this.By9(
this.Oq,AK6,Ap4,XK-AK6);return XK;},AUk:function(K5){var B;if((this.String===A.jV
)||!this.B9)return BF;if(!this.H1)this.XU(this);var AE=this.Dd();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BF;var font=this.B9;var Bu=this.Kn;var Kk=this.CK.charCodeAt(
0)||0;var leading=font.Leading;if(K5[1]<AE[1])K5=[K5[0],AE[1]];if(K5[1]>=AE[3])K5=[
K5[0],AE[3]-1];if(this.Oc>0)leading=(this.Oc-font.Ascent)-font.Descent;var AaW=(
font.Ascent+font.Descent)+leading;var Bj=((K5[1]-AE[1])/AaW)|0;var NP=this.ADi(Bj
);var Mm=NP.length;var Pj=false;if(((Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bj<(Kk-1)))Pj=true;if((Pj&&(
NP.indexOf(String.fromCharCode(0x20),0)<0))&&(NP.indexOf(String.fromCharCode(0xA0
),0)<0))Pj=false;if(Pj){var inx=1;var Ap3=Bj;while(Ap3>0){inx=inx+(this.CK.charCodeAt(
inx)||0);Ap3=Ap3-1;}if(((this.CK.charCodeAt(inx+1)||0)===0x0A)||((this.CK.charCodeAt((
inx+(this.CK.charCodeAt(inx)||0))-1)||0)===0x0A))Pj=false;}var Ami=0;var Eq=0;if(
Pj)Ami=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eq=(AE[2]-AE[0])-font.YD(NP,0,Mm);else
if(((Bu&0x2)===0x2))Eq=(((AE[2]-AE[0])/2)|0)-((font.YD(NP,0,Mm)/2)|0);var col=font.
Bj0(NP,0,Mm,(K5[0]-AE[0])-Eq,Ami);if(col<0)col=0;return[col,Bj];},Afm:function(AoP
){var B;if((this.String===A.jV)||!this.B9)return BF;if(!this.H1)this.XU(this);var
Kk=this.CK.charCodeAt(0)||0;var font=this.B9;var Bu=this.Kn;var Bj=AoP[1];var col=
AoP[0];if(Bj>=Kk){Bj=Kk-1;col=this.CK.length;}if(Bj<0){Bj=0;col=0;}var NP=this.ADi(
Bj);var Mm=NP.length;var AE=this.Dd();var Pj=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bj<(Kk-1)))Pj=true;if((Pj&&(NP.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NP.indexOf(String.fromCharCode(0xA0),0)<0))Pj=false;if(Pj){var inx=1;var
Ap3=Bj;while(Ap3>0){inx=inx+(this.CK.charCodeAt(inx)||0);Ap3=Ap3-1;}if(((this.CK.
charCodeAt(inx+1)||0)===0x0A)||((this.CK.charCodeAt((inx+(this.CK.charCodeAt(inx
)||0))-1)||0)===0x0A))Pj=false;}if(this.Oc>0)leading=(this.Oc-font.Ascent)-font.
Descent;var Di=(AE[1]+(Bj*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Ami=0;var Eq=AE[0];if(Pj)Ami=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eq=AE[2]-font.
YD(NP,0,Mm);else if(((Bu&0x2)===0x2))Eq=(Eq+(((AE[2]-AE[0])/2)|0))-((font.YD(NP,
0,Mm)/2)|0);var pos=font.BjV(NP,0,Mm,col,Ami);if(pos<0)pos=0;return[Eq+pos,Di];}
,AO2:function(Ad){var B;if((this.String===A.jV)||!this.B9)return E7;if(!this.H1)
this.XU(this);var Kk=this.CK.charCodeAt(0)||0;var font=this.B9;if((Ad<0)||((Ad>=
Kk)&&(Ad>0)))return E7;var Bu=this.Kn;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Jj*2);if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
Oc>0)leading=(this.Oc-font.Ascent)-font.Descent;var Di=Ad*((font.Ascent+font.Descent
)+leading);var Eq=0;while(Ad>0){inx=inx+(this.CK.charCodeAt(inx)||0);Ad=Ad-1;}var
ABg=(this.CK.charCodeAt(inx)||0)-1;var BgJ=font.YD(this.CK,inx+1,ABg);var A4B=font.
A7v(this.CK,inx+1,ABg);var Ap5=BgJ;var AaW=font.Ascent+font.Descent;var ABu=(Kk*((
font.Ascent+font.Descent)+leading))-leading;if(!Kk)ABu=AaW;if((((this.CK.charCodeAt((
inx+ABg)+1)||0)===0x00)||((this.CK.charCodeAt(inx+ABg)||0)===0x0A))||((this.CK.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap4=(inx+1)+ABg;var Azr=
this.CK.indexOf(String.fromCharCode(0x20),inx+1);var Azs=this.CK.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azr>=0)&&(Azr<Ap4))||((Azs>=0)&&(Azs<Ap4)))Ap5=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABu>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap5>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Eq=width-Ap5;else if(((Bu&0x2)===0x2))Eq=((width/2)|0)-((
Ap5/2)|0);if(((Bu&0x20)===0x20))Di=Di+(height-ABu);else if(((Bu&0x100)===0x100))
Di=((Di+((height/2)|0))-((ABu/2)|0))+(((this.B9.Descent-this.B9.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Di=(Di+((height/2)|0))-((ABu/2)|0);Eq=(Eq+A4B[0])+this.Jj;
Ap5=(Ap5+(A4B[2]-A4B[0]))-BgJ;var B6;{var Bf$=[Bd[0]+Eq,Bd[1]+Di];B6=[].concat(Bf$
,A.abf(Bf$,[Ap5,AaW]));}return A.abh(B6,this.Bs);},ADi:function(Ad){if((this.String===
A.jV)||!this.B9)return A.jV;if(!this.H1)this.XU(this);var Kk=this.CK.charCodeAt(
0)||0;var inx=1;if((!this.B9||(Ad<0))||(Ad>=Kk))return A.jV;while(Ad>0){inx=inx+(
this.CK.charCodeAt(inx)||0);Ad=Ad-1;}var XV=inx;var AtW=inx+(this.CK.charCodeAt(
inx)||0);var IC=0x00;do{XV=XV+1;IC=this.CK.charCodeAt(XV)||0;}while(((IC===0xFEFF
)||(IC===0x0A))&&(XV<=AtW));do{AtW=AtW-1;IC=this.CK.charCodeAt(AtW)||0;}while(((
IC===0xFEFF)||(IC===0x0A))&&(XV<=AtW));var NP=A.abW(this.CK,XV,(AtW-XV)+1);var Apw;
for(Apw=NP.indexOf(String.fromCharCode(0xFEFF),0);Apw>=0;Apw=NP.indexOf(String.fromCharCode(
0xFEFF),Apw+1)){var XK=Apw+1;while((NP.charCodeAt(XK)||0)===0xFEFF)XK=XK+1;NP=A.
ab1(NP,Apw,XK-Apw);}return NP;},Dd:function(){var B;if((this.String===A.jV)||!this.
B9)return E7;if(!this.H1)this.XU(this);if(this.CK===A.jV)return E7;var leading=this.
B9.Leading;var ABe=(this.B9.Ascent+this.B9.Descent)+this.B9.Leading;if(this.Oc>0
){leading=(this.Oc-this.B9.Ascent)-this.B9.Descent;ABe=this.Oc;}if(A.aaX(this.Amp
,BF))this.Amp=[this.B9.A7k(this.CK),this.Amp[1]];this.Amp=[this.Amp[0],((this.CK.
charCodeAt(0)||0)*ABe)-leading];var Bu=this.Kn;var Bd=this.M;var Aue=this.Jj;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Dh=[Aue,0,width-Aue,height];var B6=[
].concat(Dh.slice(0,2),A.abf(Dh.slice(0,2),this.Amp));if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XM=
this.AcT;if(XM<=0)XM=width-(this.Jj*2);if(XM<0)XM=0;if(XM>(B6[2]-B6[0]))B6=A.abL(
B6,XM);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B6[3]-B6[1])>(Dh[3]-Dh[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B6[2]-B6[0])>(Dh[
2]-Dh[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B6[2]-B6[0])!==(Dh[2]-Dh[0]
)){if(((Bu&0x4)===0x4))B6=A.abM(B6,Dh[2]-(B6[2]-B6[0]));else if(((Bu&0x2)===0x2)
)B6=A.abM(B6,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B6[2]-B6[0])/2)|0));}if((B6[3]-B6[
1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B6=A.abO(B6,Dh[3]-(B6[3]-B6[1]));else
if(((Bu&0x100)===0x100))B6=A.abO(B6,((Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B6[3]-B6[1
])/2)|0))+(((this.B9.Descent-this.B9.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B6=
A.abO(B6,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B6[3]-B6[1])/2)|0));}B6=A.abh(B6,Bd.slice(
0,2));return A.abh(B6,this.Bs);},_Init:function(aArg){A.Core.Ev._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lh();this.__proto__=A.Core.Ev;
A.Core.Ev._Done.call(this);},_Mark:function(D){var B;A.Core.Ev._Mark.call(this,D
);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eo)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuY={attrString:null,AttrSet:
null,String:A.jV,Kn:0x12,Ks:function(C2,aClip,aOffset,Ck,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Dd();Ck=Ck+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;C2.Bi4(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ck*255)>>8,(Ck*255)>>8,(Ck*255)>>8,(Ck
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pl],this);}A.Core.Ev.H.call(this,E);A.pe([this,this.AiW],this
);},AiW:function(G){},XU:function(G){var B;var ALM;ALM=(B=this.M)[2]-B[0];if(ALM<
0)ALM=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5Q
,0);if(!!this.attrString)this.attrString.BoN(this.AttrSet,this.String,ALM,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiW],this);
},Pl:function(G){A.pe([this,this.XU],this);},BgD:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A4:function(E){var B;E&=~0x140;if(E===this.
Kn)return;this.Kn=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([
this,this.AiW],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pl],this);},A_d:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.BgD],this.AttrSet,0);A.z9([this,this.Pl
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.BgD],this.AttrSet,0);A.zV([this,this.Pl],this.AttrSet,1);}A.pe([this,this.
Pl],this);},Dd:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E7;
if(!this.attrString)this.XU(this);if(!this.attrString)return E7;var Bu=this.Kn;var
C7=this.attrString.Bj1();var Dh=A.aaT(this.M,BF);var B6=[].concat(Dh.slice(0,2),
A.abf(Dh.slice(0,2),C7));if(!C7[0]||!C7[1])return E7;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B6[2]-B6[0])!==(Dh[
2]-Dh[0])){if(((Bu&0x4)===0x4))B6=A.abM(B6,Dh[2]-(B6[2]-B6[0]));else if(((Bu&0x2
)===0x2))B6=A.abM(B6,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B6[2]-B6[0])/2)|0));}if((B6[
3]-B6[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B6=A.abO(B6,Dh[3]-(B6[3]-B6[1])
);else if(((Bu&0x10)===0x10))B6=A.abO(B6,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B6[3]-
B6[1])/2)|0));}return B6;},_Init:function(aArg){A.Core.Ev._Init.call(this,aArg);
this.__proto__=C.AuY;this.U=0x3;},_Mark:function(D){var B;A.Core.Ev._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoi={AiJ:
null,FK:null,Aiv:0,Aiu:0,Vf:A.wf,Cl:A.abi(4,3,0,null),AGZ:A.wf,Tt:0,ApJ:0,J5:function(
E){if(A.aaX(E,this.KE))return;A.Core.ZL.J5.call(this,E);this.Cl.Set(3,0,E[0]);this.
Cl.Set(3,1,E[1]);this.Cl.Set(3,2,1);this.Tt=0x45;this.FK=null;A.pe([this,this.Aje
],this);},KB:function(E){if(A.aaX(E,this.MP))return;A.Core.ZL.KB.call(this,E);this.
Cl.Set(2,0,E[0]);this.Cl.Set(2,1,E[1]);this.Cl.Set(2,2,1);this.Tt=0x45;this.FK=null;
A.pe([this,this.Aje],this);},DE:function(E){if(A.aaX(E,this.EE))return;A.Core.ZL.
DE.call(this,E);this.Cl.Set(1,0,E[0]);this.Cl.Set(1,1,E[1]);this.Cl.Set(1,2,1);this.
Tt=0x45;this.FK=null;A.pe([this,this.Aje],this);},DO:function(E){if(A.aaX(E,this.
Eu))return;A.Core.ZL.DO.call(this,E);this.Cl.Set(0,0,E[0]);this.Cl.Set(0,1,E[1]);
this.Cl.Set(0,2,1);this.Tt=0x45;this.FK=null;A.pe([this,this.Aje],this);},A11:function(
){return;},Aje:function(G){var B;this.AiJ=null;if(this.Tt===0x00)return;if(this.
Tt===0x45){var K9=A._NewObject(A.Graphics.Ax9,0);K9=K9.ANZ(this.Cl.Get(0,0),this.
Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),this.Cl.Get(2,1),
this.Cl.Get(3,0),this.Cl.Get(3,1));if(!!K9){K9.ACh(0,0);this.Cl.Set(0,2,K9.UY*240
);K9.ACh(1,0);this.Cl.Set(1,2,K9.UY*240);K9.ACh(1,1);this.Cl.Set(2,2,K9.UY*240);
K9.ACh(0,1);this.Cl.Set(3,2,K9.UY*240);}this.A11();}if((((this.Tt===0x4D)&&!!this.
FK)&&!!this.Vf[0])&&!!this.Vf[1]){var Ai$=[].concat(BF,this.Vf);var Ai_=this.AGZ;
var Agb=Ai$[0]-Ai_[0];var Az=Ai$[2]-Ai_[0];var D$=Ai$[1]-Ai_[1];var RD=Ai$[3]-Ai_[
1];this.FK.Afi(Agb,D$);this.Cl.Set(0,0,this.FK.P9+this.Aiu);this.Cl.Set(0,1,this.
FK.P_+this.Aiv);this.Cl.Set(0,2,this.FK.UY);this.FK.Afi(Az,D$);this.Cl.Set(1,0,this.
FK.P9+this.Aiu);this.Cl.Set(1,1,this.FK.P_+this.Aiv);this.Cl.Set(1,2,this.FK.UY);
this.FK.Afi(Az,RD);this.Cl.Set(2,0,this.FK.P9+this.Aiu);this.Cl.Set(2,1,this.FK.
P_+this.Aiv);this.Cl.Set(2,2,this.FK.UY);this.FK.Afi(Agb,RD);this.Cl.Set(3,0,this.
FK.P9+this.Aiu);this.Cl.Set(3,1,this.FK.P_+this.Aiv);this.Cl.Set(3,2,this.FK.UY);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Eu=[(this.
Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.EE=[(this.Cl.Get(1,0)+0.5)|0,(
this.Cl.Get(1,1)+0.5)|0];this.MP=[(this.Cl.Get(2,0)+0.5)|0,(this.Cl.Get(2,1)+0.5
)|0];this.KE=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];this.A11();}this.
ApJ=this.Tt;this.Tt=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},Boi:function(E){if(A.aaX(E,this.AGZ))return;this.AGZ=E;if((this.ApJ!==0x45)&&(
this.Tt===0x00)){this.Tt=this.ApJ;A.pe([this,this.Aje],this);}},Arw:function(Ff){
var B;if(!!!this.AiJ){this.AiJ=A._NewObject(A.Graphics.A7U,0);this.AiJ.ANZ(this.
Cl.Get(0,0),this.Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),
this.Cl.Get(2,1),this.Cl.Get(3,0),this.Cl.Get(3,1));}if(!this.AiJ.Afi(Ff))return BF;
var Ap_=[].concat(BF,this.Vf);var Eq=this.AiJ.P9*(Ap_[2]-Ap_[0]);var Di=this.AiJ.
P_*(Ap_[3]-Ap_[1]);return A.abf([Eq|0,Di|0],Ap_.slice(0,2));},BaG:function(BcD,Md
){var B;this.AiJ=null;if(!Md)throw new Error(I1);if(!this.FK)this.FK=A._NewObject(
A.Graphics.Ax9,0);this.FK.Bh1(Md);this.Aiu=BcD[0];this.Aiv=BcD[1];this.ApJ=0x4D;
this.Tt=0x00;if(!this.Vf[0]||!this.Vf[1])return;var Ai$=[].concat(BF,this.Vf);var
Ai_=this.AGZ;var Agb=Ai$[0]-Ai_[0];var Az=Ai$[2]-Ai_[0];var D$=Ai$[1]-Ai_[1];var
RD=Ai$[3]-Ai_[1];this.FK.Afi(Agb,D$);this.Cl.Set(0,0,this.FK.P9+this.Aiu);this.Cl.
Set(0,1,this.FK.P_+this.Aiv);this.Cl.Set(0,2,this.FK.UY);this.FK.Afi(Az,D$);this.
Cl.Set(1,0,this.FK.P9+this.Aiu);this.Cl.Set(1,1,this.FK.P_+this.Aiv);this.Cl.Set(
1,2,this.FK.UY);this.FK.Afi(Az,RD);this.Cl.Set(2,0,this.FK.P9+this.Aiu);this.Cl.
Set(2,1,this.FK.P_+this.Aiv);this.Cl.Set(2,2,this.FK.UY);this.FK.Afi(Agb,RD);this.
Cl.Set(3,0,this.FK.P9+this.Aiu);this.Cl.Set(3,1,this.FK.P_+this.Aiv);this.Cl.Set(
3,2,this.FK.UY);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Eu=[(this.Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.EE=[(this.Cl.
Get(1,0)+0.5)|0,(this.Cl.Get(1,1)+0.5)|0];this.MP=[(this.Cl.Get(2,0)+0.5)|0,(this.
Cl.Get(2,1)+0.5)|0];this.KE=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.A11();},_Init:
function(aArg){A.Core.ZL._Init.call(this,aArg);(this.Cl=[]).__proto__=C.Aoi.Cl;this.
__proto__=C.Aoi;this.U=0x3;},_Mark:function(D){var B;A.Core.ZL._Mark.call(this,D
);if((B=this.AiJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FK)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AV5={Fu:null,bitmap:null
,P:null,G9:255,Ks:function(C2,aClip,aOffset,Ck,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var NJ=aOffset[0];var NK=aOffset[1];var AE=[].concat(BF,this.
Vf);aBlend=aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;var Be8;var Be9;var Be_;var Be$;
var BAX=this.G9;Be8=Be9=Be_=Be$=BAX;var AlC=255|(255<<8)|(255<<16)|((((Ck*Be8)>>
8)&0xFF)<<24);var AlD=255|(255<<8)|(255<<16)|((((Ck*Be9)>>8)&0xFF)<<24);var By_=
255|(255<<8)|(255<<16)|((((Ck*Be_)>>8)&0xFF)<<24);var By$=255|(255<<8)|(255<<16)|((((
Ck*Be$)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E7,aOffset));C2.AhW(aClip,this.bitmap
,0,this.Cl.Get(0,0)+NJ,this.Cl.Get(0,1)+NK,this.Cl.Get(0,2),this.Cl.Get(1,0)+NJ,
this.Cl.Get(1,1)+NK,this.Cl.Get(1,2),this.Cl.Get(2,0)+NJ,this.Cl.Get(2,1)+NK,this.
Cl.Get(2,2),this.Cl.Get(3,0)+NJ,this.Cl.Get(3,1)+NK,this.Cl.Get(3,2),AE,AlC,AlD,
By_,By$,aBlend,true);},G4:function(CN){if(!this.P||!this.Fu)return null;var BP=(
A.Core.Aek.isPrototypeOf(CN)?CN:null);var D7=(A.Core.AqN.isPrototypeOf(CN)?CN:null
);if(!BP&&!D7)return null;var Fw=BF;var B2=this.Fu.Ab;while(!!B2&&(B2!==this.P)){
Fw=A.abe(Fw,B2.M.slice(0,2));B2=B2.Ab;}var X=this.Fu;if(!!BP&&!BP.Down)this.Fu=null;
if(!!BP){BP.H4=A.abf(this.Arw(BP.H4),Fw);BP.N2=A.abf(this.Arw(BP.N2),Fw);return X.
G4(BP);}if(!!D7){var BA2=A.abf(this.Arw(A.abe(D7.H4,D7.DI)),Fw);D7.H4=A.abf(this.
Arw(D7.H4),Fw);D7.N2=A.abf(this.Arw(D7.N2),Fw);D7.DI=A.abe(D7.H4,BA2);return X.G4(
D7);}return C.Aoi.G4.call(this,CN);},Ys:function(Dc,BI,Oo,Aau,Ac$,Ac_){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Dc);pos=this.Arw(pos
);var Ap_=[].concat(BF,this.Vf);if(!A.wa(Ap_,pos))return null;var JO=this.P.Ys(A.
abh(A.abh([0,0,Dc[2]-Dc[0],Dc[3]-Dc[1]],pos),this.P.M.slice(0,2)),BI,Oo,Aau,null
,Ac_);if(!!JO)this.Fu=JO.Cj;else this.Fu=null;if(!!this.Fu)return A._NewObject(A.
Core.Au5,0).Initialize(this,BF);return null;},RQ:function(G){var B;var Bfa=this.
Vf;if(!!this.P)this.bitmap=this.P.FH;else this.bitmap=null;if(!!this.bitmap)this.
Vf=this.bitmap.FrameSize;else this.Vf=BF;if(((A.aaX(Bfa,this.Vf)||((this.ApJ===0x45
)&&(this.Tt===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if(((this.ApJ!==0x45)&&(this.Tt===0x00))&&!A.aaX(Bfa,this.Vf)){this.Tt=this.ApJ;
A.pe([this,this.Aje],this);}},C0:function(E){var B;if(E===this.G9)return;this.G9=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Bnm:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Iw);if(!!this.P){A.
z9([this,this.RQ],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RQ
],E,0);this.bitmap=E.FH;}this.RQ(this);},Awr:function(){return this.G9;},_Init:function(
aArg){C.Aoi._Init.call(this,aArg);this.__proto__=C.AV5;},_Mark:function(D){var B;
C.Aoi._Mark.call(this,D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aev={HA:null,AR:0xFFFFFFFF,DI:A.wf
,AOJ:false,Lh:function(){this.A2k();},Ks:function(C2,aClip,aOffset,Ck,aBlend){if(
!this.HA)return;var DF;var DQ;var DK;var DP;var B5=this.AR;Ck=Ck+1;DF=DQ=DK=DP=B5;
if(Ck<256){DF=(DF&0x00FFFFFF)|((((Ck*((DF>>24)&0xFF))>>8)&0xFF)<<24);DQ=(DQ&0x00FFFFFF
)|((((Ck*((DQ>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ck*((DK>>24)&0xFF
))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);}C2.
Aev(aClip,this.HA,A.abh(this.M,aOffset),this.AOJ,this.DI,DF,DQ,DP,DK,true,true,0
);},A2k:function(){return;},Ajf:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AR)return;this.AR=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bi(this.M);},AnM:function(E){
var B;if(A.aaX(E,this.DI))return;this.DI=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.HA)this.Ab.Bi(this.M);},Bnh:function(E){var B;if(E===this.AOJ)return;this.
AOJ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bi(this.M);},ZF:function(
E){var B;if(E===this.HA)return;if(!!this.HA)A.z9([this,this.Ajf],this.HA,0);this.
HA=E;if(!!this.HA)A.zV([this,this.Ajf],this.HA,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1
);},_Init:function(aArg){A.Core.Ev._Init.call(this,aArg);this.__proto__=C.Aev;},
_Done:function(){this.Lh();this.__proto__=A.Core.Ev;A.Core.Ev._Done.call(this);}
,_Mark:function(D){var B;A.Core.Ev._Mark.call(this,D);if((B=this.HA)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hp={HA:null,AR:0xFFFFFFFF
,DI:A.wf,Width:1,Lh:function(){this.A2k();},Ks:function(C2,aClip,aOffset,Ck,aBlend
){if(!this.HA)return;var DF;var DQ;var DK;var DP;var B5=this.AR;Ck=Ck+1;DF=DQ=DK=
DP=B5;if(Ck<256){DF=(DF&0x00FFFFFF)|((((Ck*((DF>>24)&0xFF))>>8)&0xFF)<<24);DQ=(DQ&
0x00FFFFFF)|((((Ck*((DQ>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ck*((DK>>
24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<
24);}C2.Hp(aClip,this.HA,A.abh(this.M,aOffset),false,this.DI,this.Width,0,0,0,3,
DF,DQ,DP,DK,true,true);},A2k:function(){return;},Ajf:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AR
)return;this.AR=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bi(this.
M);},AnM:function(E){var B;if(A.aaX(E,this.DI))return;this.DI=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bi(this.M);},Nx:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.HA)this.Ab.Bi(this.M);},ZF:function(E){var B;if(E===this.HA)return;if(!!this.
HA)A.z9([this,this.Ajf],this.HA,0);this.HA=E;if(!!this.HA)A.zV([this,this.Ajf],this.
HA,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E
)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},_Init:function(aArg){A.Core.Ev._Init.call(
this,aArg);this.__proto__=C.Hp;},_Done:function(){this.Lh();this.__proto__=A.Core.
Ev;A.Core.Ev._Done.call(this);},_Mark:function(D){var B;A.Core.Ev._Mark.call(this
,D);if((B=this.HA)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BE_={A5x:0x1,A5w:0x2,A5y:0x4,A5B:0x8,A5A:0x10,A5z:0x20,BGr:0x40,BGs:0x80,BGD:
0x100};C.BGI={A5x:0x1,A5w:0x2,A5y:0x4,A5B:0x8,A5A:0x10,A5z:0x20,BDG:0x40,BDF:0x80
,BDL:0x100};C.BFN={Normal:0,BGl:1,BGj:2,BGk:3};
C._Init=function(){C.C9.__proto__=A.Core.Akh;C.AK.__proto__=A.Core.Ev;C.BY.__proto__=
A.Core.Ev;C.N1.__proto__=A.Core.Ev;C.Ap.__proto__=A.Core.Ev;C.Text.__proto__=A.Core.
Ev;C.AuY.__proto__=A.Core.Ev;C.Aoi.__proto__=A.Core.ZL;C.AV5.__proto__=C.Aoi;C.Aev.
__proto__=A.Core.Ev;C.Hp.__proto__=A.Core.Ev;};C._ReInit=function(){};C.DJ=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */