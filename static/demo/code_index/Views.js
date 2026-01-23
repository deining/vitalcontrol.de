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
var Cf=[1,1];var BD=[0,0];var E6=[0,0,0,0];var Hq="\uFEFF";var I0="No matrix to perform 3D transformation";
var Iv="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C7={KN:null,Ak9:1,Ak8:1,AQ:0xFFFFFFFF,Kr:function(C0,aClip,aOffset,Cj,aBlend){var
B;var Agr=this.Ak8;var Ags=this.Ak9;var Adz=A.abf(this.Et,aOffset);var AdA=A.abf(
this.ED,aOffset);var Alx;var Aly;var B4=this.AQ;if(A.aaX(Adz,AdA))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;Alx=Aly=B4;if(Cj<256){Alx=(Alx&0x00FFFFFF)|((((
Cj*((Alx>>24)&0xFF))>>8)&0xFF)<<24);Aly=(Aly&0x00FFFFFF)|((((Cj*((Aly>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agr===1)&&(Ags===1))C0.Au4(aClip,Adz,AdA,Alx,Aly,aBlend);else
C0.BiU(aClip,Adz,AdA,Agr,Ags,Alx,Aly,aBlend);},GetExtent:function(){var Agr=this.
Ak8;var Ags=this.Ak9;var Adz=this.Et;var AdA=this.ED;if(((Agr===1)&&(Ags===1))||
A.aaX(Adz,AdA))return A.Core.Akd.GetExtent.call(this);var Aiz=Agr/2;var AiA=Ags/
2;var Aph=Adz[0];var Api=Adz[1];var Apj=AdA[0];var Apk=AdA[1];var Kd=Apj-Aph;var
Ke=Apk-Api;var I5=Math.sqrt((Kd*Kd)+(Ke*Ke));Kd=Kd/I5;Ke=Ke/I5;var Bc_=Aph+(Ke*Aiz
);var Bc$=Api-(Kd*Aiz);var AJE=Apj+(Ke*AiA);var AJF=Apk-(Kd*AiA);var AJG=Apj-(Ke
*AiA);var AJH=Apk+(Kd*AiA);var AJI=Aph-(Ke*Aiz);var AJJ=Api+(Kd*Aiz);var left=Bc_;
var right=Bc_;var top=Bc$;var bottom=Bc$;if(AJE<left)left=AJE;if(AJG<left)left=AJG;
if(AJI<left)left=AJI;if(AJE>right)right=AJE;if(AJG>right)right=AJG;if(AJI>right)
right=AJI;if(AJF<top)top=AJF;if(AJH<top)top=AJH;if(AJJ<top)top=AJJ;if(AJF>bottom
)bottom=AJF;if(AJH>bottom)bottom=AJH;if(AJJ>bottom)bottom=AJJ;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cf));return Az;
},RM:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},A__:function(E){var B;if(E<1)E=1;if(E===this.Ak9)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak9=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak8!==1))&&!this.KN){
this.KN=A.aaL(A.aci.AsW);if(this.KN.N6)A.zV([this,this.RM],this.KN,0);}if(((E===
1)&&(this.Ak8===1))&&!!this.KN){if(this.KN.N6)A.z9([this,this.RM],this.KN,0);this.
KN=null;}},A_9:function(E){var B;if(E<1)E=1;if(E===this.Ak8)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak8=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak9!==1))&&!this.
KN){this.KN=A.aaL(A.aci.AsW);if(this.KN.N6)A.zV([this,this.RM],this.KN,0);}if(((
E===1)&&(this.Ak9===1))&&!!this.KN){if(this.KN.N6)A.z9([this,this.RM],this.KN,0);
this.KN=null;}},Nu:function(E){var B;if(E<1)E=1;if((E===this.Ak8)&&(E===this.Ak9
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Ak8=E;this.Ak9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((E!==1)&&!this.KN){this.KN=A.aaL(A.aci.AsW);if(this.KN.N6)A.zV([this,this.
RM],this.KN,0);}if((E===1)&&!!this.KN){if(this.KN.N6)A.z9([this,this.RM],this.KN
,0);this.KN=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(
aArg){A.Core.Akd._Init.call(this,aArg);this.__proto__=C.C7;},_Mark:function(D){var
B;A.Core.Akd._Mark.call(this,D);if((B=this.KN)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANp:0xFFFFFFFF,ANq:0xFFFFFFFF,ANu:0xFFFFFFFF
,ANt:0xFFFFFFFF,AQ:0xFFFFFFFF,Kr:function(C0,aClip,aOffset,Cj,aBlend){var B;var DE=
this.ANt;var DP=this.ANu;var DJ=this.ANp;var DO=this.ANq;var B4=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Cj=Cj+1;if((((DE===DP)&&(DJ===DO))&&(DE===DJ))&&(DE===0xFFFFFFFF
))DE=DP=DJ=DO=B4;else if(B4!==0xFFFFFFFF){DE=(DE&0x00FFFFFF)|((((((DE>>24)&0xFF)
*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DE=(DE&0xFFFFFF00)|((((DE&0xFF)*((B4&0xFF)+
1))>>8)&0xFF);DE=(DE&0xFFFF00FF)|((((((DE>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF
)<<8);DE=(DE&0xFF00FFFF)|((((((DE>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);
DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DP=(DP&
0xFFFFFF00)|((((DP&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DP=(DP&0xFFFF00FF)|((((((DP>>8
)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DP=(DP&0xFF00FFFF)|((((((DP>>16)&0xFF)
*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*(((B4>>
24)&0xFF)+1))>>8)&0xFF)<<24);DJ=(DJ&0xFFFFFF00)|((((DJ&0xFF)*((B4&0xFF)+1))>>8)&
0xFF);DJ=(DJ&0xFFFF00FF)|((((((DJ>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DJ=(
DJ&0xFF00FFFF)|((((((DJ>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DO=(DO&0x00FFFFFF
)|((((((DO>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DO=(DO&0xFFFFFF00)|((((
DO&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DO=(DO&0xFFFF00FF)|((((((DO>>8)&0xFF)*(((B4>>8
)&0xFF)+1))>>8)&0xFF)<<8);DO=(DO&0xFF00FFFF)|((((((DO>>16)&0xFF)*(((B4>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Cj<256){DE=(DE&0x00FFFFFF)|((((Cj*((DE>>24)&0xFF))>>8)&
0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Cj*((DP>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF
)|((((Cj*((DJ>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF
))>>8)&0xFF)<<24);}C0.Avh(aClip,A.abh(this.M,aOffset),DE,DP,DO,DJ,aBlend);},Awu:
function(E){var B;if(E===this.ANp)return;this.ANp=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Awv:function(E){var B;if(E===this.ANq)return;this.ANq=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Awx:function(E){var B;
if(E===this.ANu)return;this.ANu=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.M);},Aww:function(E){var B;if(E===this.ANt)return;this.ANt=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Fo:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BW={Width:1,AQ:0xFFFFFFFF,Kr:function(C0
,aClip,aOffset,Cj,aBlend){var B;var DE;var DP;var DJ;var DO;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;DE=DP=DJ=DO=B4;if(Cj<256){DE=(DE&0x00FFFFFF
)|((((Cj*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Cj*((DP>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Cj*((DJ>>24)&0xFF))>>8)&0xFF)<<24);DO=(
DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);}C0.BiS(aClip,A.abh(this.M
,aOffset),this.Width,DE,DP,DO,DJ,aBlend);},Nu:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(
0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.
BW;},_className:"Views::Border"};C.NY={timer:null,Al:null,MY:-1,AQ:0xFFFFFFFF,Au5:
0x1F,TW:0,Dx:0,Anj:A.wf,VF:false,Kr:function(C0,aClip,aOffset,Cj,aBlend){var B;var
ND=this.TW;if(this.MY>=0)ND=this.MY;if(!this.Al||(ND>=this.Al.NoOfFrames))return;
this.Al.Update();var DE;var DP;var DO;var DJ;var B4=this.AQ;var Kk=(((Cj+1)*255)>>
8)+1;var Oq=this.Au5;var Az=A.abh(this.M,aOffset);var AK6=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anj);aBlend=aBlend&&((this.U&0x2)===0x2);DE=DP=DJ=DO=B4;if(Kk<256
){DE=(DE&0x00FFFFFF)|((((((DE>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((
DP>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kk)>>8)&
0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kk)>>8)&0xFF)<<24);}if(((this.
Anj[0]>0)&&(AK6[0]>0))&&!((Oq&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AK6[
0];if(((Oq&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oq=Oq|0x4;}else if(((Oq&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oq=Oq|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oq=Oq|0x5;}}if(((this.Anj[1]>0)&&(AK6[1]>0))&&!((Oq&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AK6[1];if(((Oq&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oq=Oq|0x8;}else if(((Oq&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oq=Oq|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oq=Oq|
0xA;}}C0.BiR(aClip,this.Al,ND,Az,Oq,DE,DP,DO,DJ,aBlend);},RM:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ml:function(G){var B;var ND=
this.MY;var Tt=0;if(!!this.Al)Tt=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MY<0))&&(Tt>0))this.Dx=this.timer.Bs-(this.TW*this.Al.FrameDelay);if(
!!this.timer&&(Tt>0)){var Av=(this.timer.Bs-this.Dx)|0;ND=(Av/this.Al.FrameDelay
)|0;if(Av>=Tt){ND=ND%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tt);}}if(((ND!==
this.MY)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.MY=ND;if(!Tt&&
!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bi(this.M);},Zt:function(E){var B;if(this.VF===E)return;this.VF=E;this.MY=-1;if(
!E&&!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aeh);A.zV([this,this.Ml],this.timer,0);A.pe([this,this.
Ml],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},A_l:function(
E){var B;if(E===this.Au5)return;this.Au5=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Cw:function(E){var B;if(E<0)E=0;if((E===this.TW)&&(this.MY===-1)
)return;this.TW=E;if(!this.timer)this.MY=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
N6)A.z9([this,this.RM],this.Al,0);this.Al=E;this.MY=-1;if(!!E&&E.N6)A.zV([this,this.
RM],E,0);if(this.VF){this.Zt(false);this.Zt(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},A_C:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anj))return;this.Anj=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au5&0xF)===
0xF))this.Ab.Bi(this.M);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.
__proto__=C.NY;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MY:0,AQ:0xFFFFFFFF
,Km:0x12,TW:0,G8:255,VF:false,Aa7:false,Kr:function(C0,aClip,aOffset,Cj,aBlend){
var B;var ND=this.TW;if(this.MY>=0)ND=this.MY;if(!this.Al||(ND>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dc();var C5=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DE;var DP;var DO;var DJ;var B4=this.AQ;var Kk=(((
Cj+1)*this.G8)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DE=DP=DJ=DO=B4;if(Kk<256
){DE=(DE&0x00FFFFFF)|((((((DE>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((
DP>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kk)>>8)&
0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kk)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C5))C0.A6a(aClip,this.Al,ND,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DE,DP,DO,DJ,aBlend);else C0.Bpc(aClip,this.Al,ND
,A.abh(AE,aOffset),[].concat(BD,C5),DE,DP,DO,DJ,aBlend,true);},RM:function(G){var
B;if(((this.Aa7&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dc());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ml:function(
G){var B;var ND=this.MY;var Tt=0;if(!!this.Al)Tt=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MY<0))&&(Tt>0))this.Dx=this.timer.Bs-(this.TW*this.Al.FrameDelay
);if(!!this.timer&&(Tt>0)){var Av=(this.timer.Bs-this.Dx)|0;ND=(Av/this.Al.FrameDelay
)|0;if(Av>=Tt){ND=ND%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tt);}}if(((ND!==
this.MY)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.MY=ND;if(!Tt&&
!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;}},Je:function(E
){if(E===this.Aa7)return;this.Aa7=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dc());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Zt:function(
E){var B;if(this.VF===E)return;this.VF=E;this.MY=-1;if(!E&&!!this.timer){A.z9([this
,this.Ml],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aeh);A.zV([this,this.Ml],this.timer,0);A.pe([this,this.Ml],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A4:function(E){var B;if(E===this.Km)return;
this.Km=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Cw:function(E){
var B;if(E<0)E=0;if((E===this.TW)&&(this.MY===-1))return;this.TW=E;if(!this.timer
)this.MY=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.N6)A.z9([this,this.RM],this.
Al,0);this.Al=E;this.MY=-1;if(!!E&&E.N6)A.zV([this,this.RM],E,0);if(this.VF){this.
Zt(false);this.Zt(true);}if(((this.Aa7&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dc());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},
CZ:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G8)return;this.G8=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Aj:function(E){if(E)this.Cs(
0x400,0x0);else this.Cs(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Dc:function(){var
B;if(!this.Al)return E6;var Bu=this.Km;var C5=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C5[0]||!C5[1])return E6;var Dg=[0,0
,width,height];var B5=Dg;if(((Bu&0x40)===0x40)){var A4s=((((Dg[2]-Dg[0])<<16)+((
C5[0]/2)|0))/C5[0])|0;var ABh=((((Dg[3]-Dg[1])<<16)+((C5[1]/2)|0))/C5[1])|0;var AiZ=
A4s;if(ABh>AiZ)AiZ=ABh;B5=A.abL(B5,((C5[0]*AiZ)+32768)>>16);B5=A.abI(B5,((C5[1]*
AiZ)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4s=((((Dg[2]-Dg[0])<<16)+((C5[
0]/2)|0))/C5[0])|0;var ABh=((((Dg[3]-Dg[1])<<16)+((C5[1]/2)|0))/C5[1])|0;var AiZ=
A4s;if(ABh<AiZ)AiZ=ABh;B5=A.abL(B5,((C5[0]*AiZ)+32768)>>16);B5=A.abI(B5,((C5[1]*
AiZ)+32768)>>16);}else if(!((Bu&0x100)===0x100))B5=A.abK(B5,C5);if((B5[2]-B5[0])
!==(Dg[2]-Dg[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dg[2]-(B5[2]-B5[0]));else if(((
Bu&0x2)===0x2))B5=A.abM(B5,(Dg[0]+(((Dg[2]-Dg[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(Dg[3]-Dg[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dg[3]-(B5[3
]-B5[1]));else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(0,2));return B5;},Blf:function(){return this.
AQ;},ASH:function(){return this.TW;},_Init:function(aArg){A.Core.Eu._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B7:null,Em:null,CI:
A.jV,String:A.jV,Oo:null,Amj:A.wf,Jh:0,Oa:0,AcK:0,Br:A.wf,Km:0x12,AQ:0xFFFFFFFF,
AfA:false,Aa7:false,Ys:false,AOc:false,H1:false,Lg:function(){if(!!this.Oo){this.
A2x(this.Oo);this.Oo=null;}},Kr:function(C0,aClip,aOffset,Cj,aBlend){var B;if((this.
CI===A.jV)||!this.B7)return;var Bu=this.Km;var font=this.B7;var Dg=A.abh(this.M,
aOffset);var DE;var DP;var DO;var DJ;var col=this.AQ;var Kk=(((Cj+1)*255)>>8)+1;
var Kj=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Dc(),aOffset);var Bq=[Dg[0]-AE[
0],(Dg[1]-AE[1])-font.Ascent];if(Kj<1)return;DE=DP=DJ=DO=col;if(Kk<256){DE=(DE&0x00FFFFFF
)|((((((DE>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*
Kk)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kk)>>8)&0xFF)<<24);DJ=(
DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kk)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kj===1)&&!((Bu&0x40)===
0x40)){C0.A6A(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Dg,Bq,0,0,DE,DP,
DO,DJ,true);return;}var leading=font.Leading;if(this.Oa>0)leading=(this.Oa-font.
Ascent)-font.Descent;var AaP=(font.Ascent+font.Descent)+leading;var By0=aClip[1]-
AE[1];var By1=aClip[3]-AE[1];var A1L=AE[2]-AE[0];var Dh=0;var O=1;var B4=this.CI.
charCodeAt(1)||0;while(((Dh+AaP)<By0)&&(B4>0)){O=O+B4;Dh=Dh+AaP;B4=this.CI.charCodeAt(
O)||0;}while((Dh<By1)&&(B4>0)){var Mh=A.abe(Bq,[0,Dh]);var Amc=0;var Ph=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B4)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B4)||0)!==0x00))Ph=true;if(Ph&&!!(Bu&0x6
)){var ApX=O+B4;var Azp=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Azq=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Azp<0)||(Azp>=ApX))&&((Azq<0)||(Azq>=
ApX)))Ph=false;}if(Ph)Amc=A1L;else if(((Bu&0x4)===0x4))Mh=[(Mh[0]-A1L)+font.Yy(this.
CI,O+1,B4-1),Mh[1]];else if(((Bu&0x2)===0x2))Mh=[(Mh[0]-((A1L/2)|0))+((font.Yy(this.
CI,O+1,B4-1)/2)|0),Mh[1]];C0.A6A(aClip,font,this.CI,O+1,B4-1,Dg,Mh,Amc,0,DE,DP,DO
,DJ,true);O=O+B4;Dh=Dh+AaP;B4=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bgs;Bgs=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bgs&&
!this.AcK)&&this.AfA)&&this.H1)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
H1=false;A.pe([this,this.Pj],this);}if(((this.Ys&&this.H1)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.H1=false;A.pe([this,this.Pj],this);}A.Core.Eu.H.call(this,E);A.pe([this
,this.AiS],this);},ByS:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},ByR:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2x:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bzc:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiS:function(G){A.pe(this.Em
,this);},Pj:function(G){A.pe([this,this.XP],this);},XP:function(G){var B;if(this.
H1)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XH=-1;var
font=this.B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfA){
if(this.AcK>0)XH=this.AcK;else if(!this.Aa7)XH=width-(this.Jh*2);else XH=width;if(
XH<0)XH=1;}if(!!this.Oo){this.A2x(this.Oo);this.Oo=null;}this.H1=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOc)this.Oo=this.Bzc(length
);this.CI=font.BoA(this.String,0,XH,length,this.Oo);if(!!this.Oo&&!this.Bj9()){this.
A2x(this.Oo);this.Oo=null;}}else this.CI=A.jV;this.Amj=BD;if(((this.Ys&&(this.CI
!==A.jV))&&!this.Aa7)&&!!font){var Bu=this.Km;var leading=font.Leading;var IG=this.
CI;var AK0=this.Aj2();if(((Bu&0x80)===0x80)){if(AK0)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var ABc=(font.
Ascent+font.Descent)+leading;var Kj=IG.charCodeAt(0)||0;var AlU=((height+leading
)/ABc)|0;var A1Z=false;var AJM=false;if(AlU<=0)AlU=1;if(Kj>AlU){var Bj=0;var ABd=
0;var AKY=Kj-1;var K7;var NE=IG.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))ABd=Kj-AlU;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){ABd=((Kj-AlU)/2)|0;AKY=(ABd+AlU)-1;}else
AKY=AlU-1;A1Z=ABd>0;AJM=AKY<(Kj-1);for(K7=1;Bj<ABd;Bj=Bj+1)K7=K7+(IG.charCodeAt(
K7)||0);if(AJM)for(NE=K7;Bj<AKY;Bj=Bj+1)NE=NE+(IG.charCodeAt(NE)||0);if(A1Z){var
I5=IG.charCodeAt(K7)||0;tmp=(Hq+A.abW(IG,K7,I5))+Hq;tmp=A.abQ(tmp,0,(I5+2)&0xFFFF
);K7=K7+I5;if((tmp.charCodeAt(I5)||0)===0x0A){tmp=A.abQ(tmp,I5,0xFEFF);tmp=A.abQ(
tmp,I5+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IG,K7,NE-K7);if(AJM&&(
NE>=K7)){var I5=IG.charCodeAt(NE)||0;var QC=(Hq+A.abW(IG,NE,I5))+Hq;QC=A.abQ(QC,
0,(I5+2)&0xFFFF);QC=A.abQ(QC,1,0xFEFF);if((QC.charCodeAt(I5)||0)===0x0A){QC=A.abQ(
QC,I5,0xFEFF);QC=A.abQ(QC,I5+1,0x0A);}if((QC.charCodeAt(2)||0)===0x0A){QC=A.abQ(
QC,2,0xFEFF);QC=A.abQ(QC,1,0x0A);}else QC=A.abQ(QC,1,0xFEFF);tmp=tmp+QC;}IG=String.
fromCharCode(AlU&0xFFFF)+tmp;}var Bj=0;var inx=1;var AKw=width-(this.Jh*2);if(this.
AfA&&(this.AcK>0))AKw=this.AcK;Kj=IG.charCodeAt(0)||0;for(;Bj<Kj;Bj=Bj+1){var Al$=
A1Z&&!Bj;var Ama=AJM&&(Bj===(Kj-1));var Xw=false;var Xx=false;var Auk=AK0;if((AK0&&
Al$)&&!Ama){Al$=false;Ama=true;}else if((AK0&&Ama)&&!Al$){Ama=false;Al$=true;}var
XQ=inx+1;var I5=IG.charCodeAt(inx)||0;var K7=XQ;var NE=(XQ+I5)-2;var A2M=-1;var A2N=-
1;if(!this.AfA&&(font.Yy(IG,XQ,I5-1)>AKw)){var AoT=Bu;if(((AoT&0x2)===0x2)&&!!(AoT&
0x5))AoT&=~0x2;if(((AoT&0x2)===0x2))AoT&=~0x5;if(((AoT&0x4)===0x4))Xw=true;else if(((
AoT&0x2)===0x2)){Xw=true;Xx=true;}else Xx=true;}if((IG.charCodeAt(K7)||0)===0x0A
)K7=K7+1;if((IG.charCodeAt(NE)||0)===0x0A)NE=NE-1;while(Xw&&((IG.charCodeAt(K7)||
0)===0xFEFF))K7=K7+1;while(Xx&&((IG.charCodeAt(NE)||0)===0xFEFF))NE=NE-1;Xw=Xw&&
!Ama;Xx=Xx&&!Al$;while((((Xw||Xx)||Al$)||Ama)&&(K7<NE)){if((Xw&&(Auk||!Xx))||Al$
){if(A2M>0)IG=A.abQ(IG,A2M,0xFEFF);IG=A.abQ(IG,K7,0x2026);A2M=K7;K7=K7+1;Auk=!Auk;
Al$=false;if(font.Yy(IG,XQ,I5-1)<=AKw){Xw=false;Xx=false;}else Xw=Xw||!Xx;}if((Xx&&(
!Auk||!Xw))||Ama){if(A2N>0)IG=A.abQ(IG,A2N,0xFEFF);IG=A.abQ(IG,NE,0x2026);A2N=NE;
NE=NE-1;Auk=!Auk;Ama=false;if(font.Yy(IG,XQ,I5-1)<=AKw){Xw=false;Xx=false;}else Xx=
Xx||!Xw;}}inx=inx+I5;}this.Amj=[font.A67(IG),((IG.charCodeAt(0)||0)*ABc)-leading
];this.CI=IG;}if(this.Aa7&&(this.CI!==A.jV)){var At8=[this.Jh,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dc(),At8),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiS],this);},BmG:function(
E){if(E===this.AOc)return;this.AOc=E;this.CI=A.jV;this.H1=false;A.pe([this,this.
Pj],this);},Hn:function(E){if(E<0)E=0;if(this.Jh===E)return;this.Jh=E;this.CI=A.
jV;this.H1=false;A.pe([this,this.Pj],this);},Aw3:function(E){var B;if(E<0)E=0;if(
this.Oa===E)return;this.Oa=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);if(this.Ys){this.CI=A.jV;this.H1=false;A.pe([this,this.Pj],this);}if(this.Aa7&&
this.H1)this.H(A.abg(this.Dc(),this.Br));if(this.H1)A.pe([this,this.AiS],this);}
,BmF:function(E){if(E===this.Ys)return;this.Ys=E;if(((this.AfA&&!!!this.AcK)||E)||
!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.H1=false;
A.pe([this,this.Pj],this);},Q7:function(E){if(A.aa0(E,this.Em))return;this.Em=E;
if(((!!!this.AcK&&this.AfA)||!!E)||this.Ys)this.U=this.U&~0x100;else this.U=this.
U|0x100;},Je:function(E){if(E===this.Aa7)return;this.Aa7=E;if(E&&this.Ys){this.CI=
A.jV;this.H1=false;A.pe([this,this.Pj],this);}if(E&&this.H1){var At8=[this.Jh,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dc(),At8),this.Br));this.U=this.U&~
0x2000;}},Boh:function(E){if(E<0)E=0;if(E===this.AcK)return;this.AcK=E;if(this.AfA&&
this.H1){this.CI=A.jV;this.H1=false;A.pe([this,this.Pj],this);}if(((!!!E&&this.AfA
)||this.Ys)||!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;},Lv:function(
E){if(E===this.AfA)return;this.AfA=E;if(this.H1){this.CI=A.jV;this.H1=false;A.pe([
this,this.Pj],this);}if(((E&&!!!this.AcK)||this.Ys)||!!this.Em)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gc:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.H1)A.pe([this
,this.AiS],this);},A4:function(E){var B;if(E===this.Km)return;this.Km=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.Ys){this.CI=A.jV;this.H1=false;
A.pe([this,this.Pj],this);}if(this.H1)A.pe([this,this.AiS],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.H1=false;A.pe([this,this.
Pj],this);},S:function(E){if(E===this.B7)return;this.B7=E;this.CI=A.jV;this.H1=false;
A.pe([this,this.Pj],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Aj2:function(
){if(!this.H1)this.XP(this);if(!this.Oo)return false;var result=false;var bidi=this.
Oo;result=A.v2(bidi);return result;},Bj9:function(){if(!this.H1)this.XP(this);if(
!this.Oo)return false;var result=false;var bidi=this.Oo;result=A.zZ(bidi);return result;
},AG1:function(aIndex){if(((this.String===A.jV)||!this.B7)||this.Ys)return BD;if(
!this.H1)this.XP(this);if(aIndex<0)aIndex=0;var BAp=(this.CI.charCodeAt(0)||0)-1;
var Mk=this.CI.charCodeAt(1)||0;var inx=1;var Ai4=2;var Bj=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bj<BAp)&&((inx+Mk)<=aIndex)){inx=inx+Mk;Bj=Bj+1;Ai4=Ai4+1;
aIndex=aIndex+1;Mk=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Mk))aIndex=inx+Mk;
if(!!this.Oo)aIndex=(inx+this.ByR(this.Oo,(inx+1)-Ai4,(inx+Mk)-Ai4,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var IB=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(IB!==0xFEFF)&&(IB!==0x0A);}return[col,Bj];},AnQ:function(AoI){if(((this.String===
A.jV)||!this.B7)||this.Ys)return 0;if(!this.H1)this.XP(this);var Bj=AoI[1];var col=
AoI[0];var inx=1;var Ai4=2;var Kj=this.CI.charCodeAt(0)||0;var Mk=this.CI.charCodeAt(
1)||0;if(Bj>=Kj){Bj=Kj-1;col=this.CI.length;}if(Bj<0){Bj=0;col=0;}if(col<0)col=0;
while((Bj>0)&&(Mk>0)){inx=inx+Mk;Bj=Bj-1;Ai4=Ai4+1;Mk=this.CI.charCodeAt(inx)||0;
}var XF=inx;var AKZ=(inx-Ai4)+1;var ApX=(AKZ+Mk)-1;var AA0=false;while((col>=0)&&(
Mk>1)){var IB=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Mk=Mk-1;AA0=(IB===0xFEFF)||(
IB===0x0A);if(!AA0){col=col-1;XF=inx;}}if((!AA0&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AA0=true;if(AA0)XF=XF+1;XF=XF-Ai4;if(!!this.Oo)XF=AKZ+this.ByS(
this.Oo,AKZ,ApX,XF-AKZ);return XF;},AUc:function(K4){var B;if((this.String===A.jV
)||!this.B7)return BD;if(!this.H1)this.XP(this);var AE=this.Dc();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B7;var Bu=this.Km;var Kj=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(K4[1]<AE[1])K4=[K4[0],AE[1]];if(K4[1]>=AE[3])K4=[
K4[0],AE[3]-1];if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var AaP=(
font.Ascent+font.Descent)+leading;var Bj=((K4[1]-AE[1])/AaP)|0;var NM=this.ADg(Bj
);var Mk=NM.length;var Ph=false;if(((Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bj<(Kj-1)))Ph=true;if((Ph&&(
NM.indexOf(String.fromCharCode(0x20),0)<0))&&(NM.indexOf(String.fromCharCode(0xA0
),0)<0))Ph=false;if(Ph){var inx=1;var ApW=Bj;while(ApW>0){inx=inx+(this.CI.charCodeAt(
inx)||0);ApW=ApW-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))Ph=false;}var Amc=0;var Ep=0;if(
Ph)Amc=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=(AE[2]-AE[0])-font.Yy(NM,0,Mk);else
if(((Bu&0x2)===0x2))Ep=(((AE[2]-AE[0])/2)|0)-((font.Yy(NM,0,Mk)/2)|0);var col=font.
BjL(NM,0,Mk,(K4[0]-AE[0])-Ep,Amc);if(col<0)col=0;return[col,Bj];},Aff:function(AoI
){var B;if((this.String===A.jV)||!this.B7)return BD;if(!this.H1)this.XP(this);var
Kj=this.CI.charCodeAt(0)||0;var font=this.B7;var Bu=this.Km;var Bj=AoI[1];var col=
AoI[0];if(Bj>=Kj){Bj=Kj-1;col=this.CI.length;}if(Bj<0){Bj=0;col=0;}var NM=this.ADg(
Bj);var Mk=NM.length;var AE=this.Dc();var Ph=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bj<(Kj-1)))Ph=true;if((Ph&&(NM.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NM.indexOf(String.fromCharCode(0xA0),0)<0))Ph=false;if(Ph){var inx=1;var
ApW=Bj;while(ApW>0){inx=inx+(this.CI.charCodeAt(inx)||0);ApW=ApW-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))Ph=false;}if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.
Descent;var Dh=(AE[1]+(Bj*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Amc=0;var Ep=AE[0];if(Ph)Amc=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=AE[2]-font.
Yy(NM,0,Mk);else if(((Bu&0x2)===0x2))Ep=(Ep+(((AE[2]-AE[0])/2)|0))-((font.Yy(NM,
0,Mk)/2)|0);var pos=font.BjG(NM,0,Mk,col,Amc);if(pos<0)pos=0;return[Ep+pos,Dh];}
,AOU:function(Ad){var B;if((this.String===A.jV)||!this.B7)return E6;if(!this.H1)
this.XP(this);var Kj=this.CI.charCodeAt(0)||0;var font=this.B7;if((Ad<0)||((Ad>=
Kj)&&(Ad>0)))return E6;var Bu=this.Km;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Jh*2);if(((
Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var Dh=Ad*((font.Ascent+font.Descent
)+leading);var Ep=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
ABe=(this.CI.charCodeAt(inx)||0)-1;var Bgt=font.Yy(this.CI,inx+1,ABe);var A4o=font.
A7g(this.CI,inx+1,ABe);var ApY=Bgt;var AaP=font.Ascent+font.Descent;var ABs=(Kj*((
font.Ascent+font.Descent)+leading))-leading;if(!Kj)ABs=AaP;if((((this.CI.charCodeAt((
inx+ABe)+1)||0)===0x00)||((this.CI.charCodeAt(inx+ABe)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var ApX=(inx+1)+ABe;var Azp=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Azq=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azp>=0)&&(Azp<ApX))||((Azq>=0)&&(Azq<ApX)))ApY=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABs>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(ApY>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Ep=width-ApY;else if(((Bu&0x2)===0x2))Ep=((width/2)|0)-((
ApY/2)|0);if(((Bu&0x20)===0x20))Dh=Dh+(height-ABs);else if(((Bu&0x100)===0x100))
Dh=((Dh+((height/2)|0))-((ABs/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dh=(Dh+((height/2)|0))-((ABs/2)|0);Ep=(Ep+A4o[0])+this.Jh;
ApY=(ApY+(A4o[2]-A4o[0]))-Bgt;var B5;{var BfV=[Bd[0]+Ep,Bd[1]+Dh];B5=[].concat(BfV
,A.abf(BfV,[ApY,AaP]));}return A.abh(B5,this.Br);},ADg:function(Ad){if((this.String===
A.jV)||!this.B7)return A.jV;if(!this.H1)this.XP(this);var Kj=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B7||(Ad<0))||(Ad>=Kj))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XQ=inx;var AtO=inx+(this.CI.charCodeAt(
inx)||0);var IB=0x00;do{XQ=XQ+1;IB=this.CI.charCodeAt(XQ)||0;}while(((IB===0xFEFF
)||(IB===0x0A))&&(XQ<=AtO));do{AtO=AtO-1;IB=this.CI.charCodeAt(AtO)||0;}while(((
IB===0xFEFF)||(IB===0x0A))&&(XQ<=AtO));var NM=A.abW(this.CI,XQ,(AtO-XQ)+1);var App;
for(App=NM.indexOf(String.fromCharCode(0xFEFF),0);App>=0;App=NM.indexOf(String.fromCharCode(
0xFEFF),App+1)){var XF=App+1;while((NM.charCodeAt(XF)||0)===0xFEFF)XF=XF+1;NM=A.
ab1(NM,App,XF-App);}return NM;},Dc:function(){var B;if((this.String===A.jV)||!this.
B7)return E6;if(!this.H1)this.XP(this);if(this.CI===A.jV)return E6;var leading=this.
B7.Leading;var ABc=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;if(this.Oa>0
){leading=(this.Oa-this.B7.Ascent)-this.B7.Descent;ABc=this.Oa;}if(A.aaX(this.Amj
,BD))this.Amj=[this.B7.A67(this.CI),this.Amj[1]];this.Amj=[this.Amj[0],((this.CI.
charCodeAt(0)||0)*ABc)-leading];var Bu=this.Km;var Bd=this.M;var At8=this.Jh;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Dg=[At8,0,width-At8,height];var B5=[
].concat(Dg.slice(0,2),A.abf(Dg.slice(0,2),this.Amj));if(((Bu&0x80)===0x80)){if(
this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XH=
this.AcK;if(XH<=0)XH=width-(this.Jh*2);if(XH<0)XH=0;if(XH>(B5[2]-B5[0]))B5=A.abL(
B5,XH);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B5[3]-B5[1])>(Dg[3]-Dg[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B5[2]-B5[0])>(Dg[
2]-Dg[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B5[2]-B5[0])!==(Dg[2]-Dg[0]
)){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dg[2]-(B5[2]-B5[0]));else if(((Bu&0x2)===0x2)
)B5=A.abM(B5,(Dg[0]+(((Dg[2]-Dg[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[3]-B5[
1])!==(Dg[3]-Dg[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dg[3]-(B5[3]-B5[1]));else
if(((Bu&0x100)===0x100))B5=A.abO(B5,((Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((B5[3]-B5[1
])/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B5=
A.abO(B5,(Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(
0,2));return A.abh(B5,this.Br);},_Init:function(aArg){A.Core.Eu._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lg();this.__proto__=A.Core.Eu;
A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuQ={attrString:null,AttrSet:
null,String:A.jV,Km:0x12,Kr:function(C0,aClip,aOffset,Cj,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Dc();Cj=Cj+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;C0.BiP(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Cj*255)>>8,(Cj*255)>>8,(Cj*255)>>8,(Cj
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pj],this);}A.Core.Eu.H.call(this,E);A.pe([this,this.AiS],this
);},AiS:function(G){},XP:function(G){var B;var ALF;ALF=(B=this.M)[2]-B[0];if(ALF<
0)ALF=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5D
,0);if(!!this.attrString)this.attrString.Boz(this.AttrSet,this.String,ALF,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiS],this);
},Pj:function(G){A.pe([this,this.XP],this);},Bgn:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A4:function(E){var B;E&=~0x140;if(E===this.
Km)return;this.Km=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([
this,this.AiS],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pj],this);},A9Z:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bgn],this.AttrSet,0);A.z9([this,this.Pj
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bgn],this.AttrSet,0);A.zV([this,this.Pj],this.AttrSet,1);}A.pe([this,this.
Pj],this);},Dc:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E6;
if(!this.attrString)this.XP(this);if(!this.attrString)return E6;var Bu=this.Km;var
C5=this.attrString.BjM();var Dg=A.aaT(this.M,BD);var B5=[].concat(Dg.slice(0,2),
A.abf(Dg.slice(0,2),C5));if(!C5[0]||!C5[1])return E6;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B5[2]-B5[0])!==(Dg[
2]-Dg[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dg[2]-(B5[2]-B5[0]));else if(((Bu&0x2
)===0x2))B5=A.abM(B5,(Dg[0]+(((Dg[2]-Dg[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(Dg[3]-Dg[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dg[3]-(B5[3]-B5[1])
);else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);
this.__proto__=C.AuQ;this.U=0x3;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoa={AiF:
null,FI:null,Air:0,Aiq:0,Va:A.wf,Ck:A.abi(4,3,0,null),AGX:A.wf,Tq:0,ApC:0,J1:function(
E){if(A.aaX(E,this.KC))return;A.Core.ZF.J1.call(this,E);this.Ck.Set(3,0,E[0]);this.
Ck.Set(3,1,E[1]);this.Ck.Set(3,2,1);this.Tq=0x45;this.FI=null;A.pe([this,this.Aja
],this);},Kz:function(E){if(A.aaX(E,this.MM))return;A.Core.ZF.Kz.call(this,E);this.
Ck.Set(2,0,E[0]);this.Ck.Set(2,1,E[1]);this.Ck.Set(2,2,1);this.Tq=0x45;this.FI=null;
A.pe([this,this.Aja],this);},DD:function(E){if(A.aaX(E,this.ED))return;A.Core.ZF.
DD.call(this,E);this.Ck.Set(1,0,E[0]);this.Ck.Set(1,1,E[1]);this.Ck.Set(1,2,1);this.
Tq=0x45;this.FI=null;A.pe([this,this.Aja],this);},DN:function(E){if(A.aaX(E,this.
Et))return;A.Core.ZF.DN.call(this,E);this.Ck.Set(0,0,E[0]);this.Ck.Set(0,1,E[1]);
this.Ck.Set(0,2,1);this.Tq=0x45;this.FI=null;A.pe([this,this.Aja],this);},A1R:function(
){return;},Aja:function(G){var B;this.AiF=null;if(this.Tq===0x00)return;if(this.
Tq===0x45){var K8=A._NewObject(A.Graphics.Ax0,0);K8=K8.ANR(this.Ck.Get(0,0),this.
Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),this.Ck.Get(2,1),
this.Ck.Get(3,0),this.Ck.Get(3,1));if(!!K8){K8.ACf(0,0);this.Ck.Set(0,2,K8.UV*240
);K8.ACf(1,0);this.Ck.Set(1,2,K8.UV*240);K8.ACf(1,1);this.Ck.Set(2,2,K8.UV*240);
K8.ACf(0,1);this.Ck.Set(3,2,K8.UV*240);}this.A1R();}if((((this.Tq===0x4D)&&!!this.
FI)&&!!this.Va[0])&&!!this.Va[1]){var Ai7=[].concat(BD,this.Va);var Ai6=this.AGX;
var Af7=Ai7[0]-Ai6[0];var Az=Ai7[2]-Ai6[0];var D8=Ai7[1]-Ai6[1];var RA=Ai7[3]-Ai6[
1];this.FI.Afa(Af7,D8);this.Ck.Set(0,0,this.FI.P7+this.Aiq);this.Ck.Set(0,1,this.
FI.P8+this.Air);this.Ck.Set(0,2,this.FI.UV);this.FI.Afa(Az,D8);this.Ck.Set(1,0,this.
FI.P7+this.Aiq);this.Ck.Set(1,1,this.FI.P8+this.Air);this.Ck.Set(1,2,this.FI.UV);
this.FI.Afa(Az,RA);this.Ck.Set(2,0,this.FI.P7+this.Aiq);this.Ck.Set(2,1,this.FI.
P8+this.Air);this.Ck.Set(2,2,this.FI.UV);this.FI.Afa(Af7,RA);this.Ck.Set(3,0,this.
FI.P7+this.Aiq);this.Ck.Set(3,1,this.FI.P8+this.Air);this.Ck.Set(3,2,this.FI.UV);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Et=[(this.
Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.ED=[(this.Ck.Get(1,0)+0.5)|0,(
this.Ck.Get(1,1)+0.5)|0];this.MM=[(this.Ck.Get(2,0)+0.5)|0,(this.Ck.Get(2,1)+0.5
)|0];this.KC=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];this.A1R();}this.
ApC=this.Tq;this.Tq=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},Bn6:function(E){if(A.aaX(E,this.AGX))return;this.AGX=E;if((this.ApC!==0x45)&&(
this.Tq===0x00)){this.Tq=this.ApC;A.pe([this,this.Aja],this);}},Arp:function(Fe){
var B;if(!!!this.AiF){this.AiF=A._NewObject(A.Graphics.A7F,0);this.AiF.ANR(this.
Ck.Get(0,0),this.Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),
this.Ck.Get(2,1),this.Ck.Get(3,0),this.Ck.Get(3,1));}if(!this.AiF.Afa(Fe))return BD;
var Ap3=[].concat(BD,this.Va);var Ep=this.AiF.P7*(Ap3[2]-Ap3[0]);var Dh=this.AiF.
P8*(Ap3[3]-Ap3[1]);return A.abf([Ep|0,Dh|0],Ap3.slice(0,2));},Baq:function(Bcn,Mb
){var B;this.AiF=null;if(!Mb)throw new Error(I0);if(!this.FI)this.FI=A._NewObject(
A.Graphics.Ax0,0);this.FI.BhL(Mb);this.Aiq=Bcn[0];this.Air=Bcn[1];this.ApC=0x4D;
this.Tq=0x00;if(!this.Va[0]||!this.Va[1])return;var Ai7=[].concat(BD,this.Va);var
Ai6=this.AGX;var Af7=Ai7[0]-Ai6[0];var Az=Ai7[2]-Ai6[0];var D8=Ai7[1]-Ai6[1];var
RA=Ai7[3]-Ai6[1];this.FI.Afa(Af7,D8);this.Ck.Set(0,0,this.FI.P7+this.Aiq);this.Ck.
Set(0,1,this.FI.P8+this.Air);this.Ck.Set(0,2,this.FI.UV);this.FI.Afa(Az,D8);this.
Ck.Set(1,0,this.FI.P7+this.Aiq);this.Ck.Set(1,1,this.FI.P8+this.Air);this.Ck.Set(
1,2,this.FI.UV);this.FI.Afa(Az,RA);this.Ck.Set(2,0,this.FI.P7+this.Aiq);this.Ck.
Set(2,1,this.FI.P8+this.Air);this.Ck.Set(2,2,this.FI.UV);this.FI.Afa(Af7,RA);this.
Ck.Set(3,0,this.FI.P7+this.Aiq);this.Ck.Set(3,1,this.FI.P8+this.Air);this.Ck.Set(
3,2,this.FI.UV);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Et=[(this.Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.ED=[(this.Ck.
Get(1,0)+0.5)|0,(this.Ck.Get(1,1)+0.5)|0];this.MM=[(this.Ck.Get(2,0)+0.5)|0,(this.
Ck.Get(2,1)+0.5)|0];this.KC=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.A1R();},_Init:
function(aArg){A.Core.ZF._Init.call(this,aArg);(this.Ck=[]).__proto__=C.Aoa.Ck;this.
__proto__=C.Aoa;this.U=0x3;},_Mark:function(D){var B;A.Core.ZF._Mark.call(this,D
);if((B=this.AiF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FI)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVX={Ft:null,bitmap:null
,P:null,G8:255,Kr:function(C0,aClip,aOffset,Cj,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var NG=aOffset[0];var NH=aOffset[1];var AE=[].concat(BD,this.
Va);aBlend=aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;var BeR;var BeS;var BeT;var BeU;
var BAA=this.G8;BeR=BeS=BeT=BeU=BAA;var Alx=255|(255<<8)|(255<<16)|((((Cj*BeR)>>
8)&0xFF)<<24);var Aly=255|(255<<8)|(255<<16)|((((Cj*BeS)>>8)&0xFF)<<24);var ByT=
255|(255<<8)|(255<<16)|((((Cj*BeT)>>8)&0xFF)<<24);var ByU=255|(255<<8)|(255<<16)|((((
Cj*BeU)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E6,aOffset));C0.AhQ(aClip,this.bitmap
,0,this.Ck.Get(0,0)+NG,this.Ck.Get(0,1)+NH,this.Ck.Get(0,2),this.Ck.Get(1,0)+NG,
this.Ck.Get(1,1)+NH,this.Ck.Get(1,2),this.Ck.Get(2,0)+NG,this.Ck.Get(2,1)+NH,this.
Ck.Get(2,2),this.Ck.Get(3,0)+NG,this.Ck.Get(3,1)+NH,this.Ck.Get(3,2),AE,Alx,Aly,
ByT,ByU,aBlend,true);},G3:function(CM){if(!this.P||!this.Ft)return null;var BO=(
A.Core.Aed.isPrototypeOf(CM)?CM:null);var D4=(A.Core.AqG.isPrototypeOf(CM)?CM:null
);if(!BO&&!D4)return null;var Fv=BD;var B1=this.Ft.Ab;while(!!B1&&(B1!==this.P)){
Fv=A.abe(Fv,B1.M.slice(0,2));B1=B1.Ab;}var X=this.Ft;if(!!BO&&!BO.Down)this.Ft=null;
if(!!BO){BO.H4=A.abf(this.Arp(BO.H4),Fv);BO.NZ=A.abf(this.Arp(BO.NZ),Fv);return X.
G3(BO);}if(!!D4){var BAE=A.abf(this.Arp(A.abe(D4.H4,D4.DH)),Fv);D4.H4=A.abf(this.
Arp(D4.H4),Fv);D4.NZ=A.abf(this.Arp(D4.NZ),Fv);D4.DH=A.abe(D4.H4,BAE);return X.G3(
D4);}return C.Aoa.G3.call(this,CM);},Yn:function(Db,BH,Om,Aan,Ac3,Ac2){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Db);pos=this.Arp(pos
);var Ap3=[].concat(BD,this.Va);if(!A.wa(Ap3,pos))return null;var JK=this.P.Yn(A.
abh(A.abh([0,0,Db[2]-Db[0],Db[3]-Db[1]],pos),this.P.M.slice(0,2)),BH,Om,Aan,null
,Ac2);if(!!JK)this.Ft=JK.Ci;else this.Ft=null;if(!!this.Ft)return A._NewObject(A.
Core.AuX,0).Initialize(this,BD);return null;},RM:function(G){var B;var BeV=this.
Va;if(!!this.P)this.bitmap=this.P.FF;else this.bitmap=null;if(!!this.bitmap)this.
Va=this.bitmap.FrameSize;else this.Va=BD;if(((A.aaX(BeV,this.Va)||((this.ApC===0x45
)&&(this.Tq===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if(((this.ApC!==0x45)&&(this.Tq===0x00))&&!A.aaX(BeV,this.Va)){this.Tq=this.ApC;
A.pe([this,this.Aja],this);}},CZ:function(E){var B;if(E===this.G8)return;this.G8=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Bm_:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Iv);if(!!this.P){A.
z9([this,this.RM],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RM
],E,0);this.bitmap=E.FF;}this.RM(this);},Awj:function(){return this.G8;},_Init:function(
aArg){C.Aoa._Init.call(this,aArg);this.__proto__=C.AVX;},_Mark:function(D){var B;
C.Aoa._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aeo={Hz:null,AQ:0xFFFFFFFF,DH:A.wf
,AOB:false,Lg:function(){this.A1_();},Kr:function(C0,aClip,aOffset,Cj,aBlend){if(
!this.Hz)return;var DE;var DP;var DJ;var DO;var B4=this.AQ;Cj=Cj+1;DE=DP=DJ=DO=B4;
if(Cj<256){DE=(DE&0x00FFFFFF)|((((Cj*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF
)|((((Cj*((DP>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Cj*((DJ>>24)&0xFF
))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);}C0.
Aeo(aClip,this.Hz,A.abh(this.M,aOffset),this.AOB,this.DH,DE,DP,DO,DJ,true,true,0
);},A1_:function(){return;},Ajb:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bi(this.M);},AnF:function(E){
var B;if(A.aaX(E,this.DH))return;this.DH=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bi(this.M);},Bm5:function(E){var B;if(E===this.AOB)return;this.
AOB=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bi(this.M);},Zz:function(
E){var B;if(E===this.Hz)return;if(!!this.Hz)A.z9([this,this.Ajb],this.Hz,0);this.
Hz=E;if(!!this.Hz)A.zV([this,this.Ajb],this.Hz,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.Aeo;},
_Done:function(){this.Lg();this.__proto__=A.Core.Eu;A.Core.Eu._Done.call(this);}
,_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Ho={Hz:null,AQ:0xFFFFFFFF
,DH:A.wf,Width:1,Lg:function(){this.A1_();},Kr:function(C0,aClip,aOffset,Cj,aBlend
){if(!this.Hz)return;var DE;var DP;var DJ;var DO;var B4=this.AQ;Cj=Cj+1;DE=DP=DJ=
DO=B4;if(Cj<256){DE=(DE&0x00FFFFFF)|((((Cj*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&
0x00FFFFFF)|((((Cj*((DP>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Cj*((DJ>>
24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<
24);}C0.Ho(aClip,this.Hz,A.abh(this.M,aOffset),false,this.DH,this.Width,0,0,0,3,
DE,DP,DO,DJ,true,true);},A1_:function(){return;},Ajb:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bi(this.
M);},AnF:function(E){var B;if(A.aaX(E,this.DH))return;this.DH=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bi(this.M);},Nu:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bi(this.M);},Zz:function(E){var B;if(E===this.Hz)return;if(!!this.
Hz)A.z9([this,this.Ajb],this.Hz,0);this.Hz=E;if(!!this.Hz)A.zV([this,this.Ajb],this.
Hz,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E
)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(
this,aArg);this.__proto__=C.Ho;},_Done:function(){this.Lg();this.__proto__=A.Core.
Eu;A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BEN={A5k:0x1,A5j:0x2,A5l:0x4,A5o:0x8,A5n:0x10,A5m:0x20,BF6:0x40,BF7:0x80,BGf:
0x100};C.BGk={A5k:0x1,A5j:0x2,A5l:0x4,A5o:0x8,A5n:0x10,A5m:0x20,BDj:0x40,BDi:0x80
,BDo:0x100};C.BFq={Normal:0,BF0:1,BFY:2,BFZ:3};
C._Init=function(){C.C7.__proto__=A.Core.Akd;C.AK.__proto__=A.Core.Eu;C.BW.__proto__=
A.Core.Eu;C.NY.__proto__=A.Core.Eu;C.Ap.__proto__=A.Core.Eu;C.Text.__proto__=A.Core.
Eu;C.AuQ.__proto__=A.Core.Eu;C.Aoa.__proto__=A.Core.ZF;C.AVX.__proto__=C.Aoa;C.Aeo.
__proto__=A.Core.Eu;C.Ho.__proto__=A.Core.Eu;};C._ReInit=function(){};C.DI=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */