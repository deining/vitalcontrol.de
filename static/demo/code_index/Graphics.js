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
);if(index.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);index.Graphics=(function(){var A=index;var C={};
var Cg=[0,0];var BD="Can not resize explicitly attached graphics engine bitmaps";
var E6=[0,0,0,0];var Hr="No graphics engine bitmap attached to this canvas";var I0=
"The canvas is already initialized with a graphics engine bitmap";var Iv="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O8="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P_="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P$=[1,1];var CR=[2,2];var Fc="Missing matrices to interpolate";
C.Canvas={C2:null,AEK:null,QP:A.wg,Py:0,Azk:false,Lf:function(){if(this.Azk)this.
DetachBitmap();},Init:function(aArg){this.N6=true;},ArR:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cg;if(A.aaX(E,this.FrameSize))return;if(this.Azk)throw new Error(BD);
this.FrameSize=E;this.VI=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cg;this.FrameDelay=0;this.NoOfFrames=1;}this.QP=[].concat(
Cg,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Py;for(this.Py=this.NoOfFrames-
1;this.Py>=0;this.Py--)this.Avl(this.QP,this.QP,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Py=dstFrameNr;}}if(!(((B=this.QP)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEK)?B[1].call(B[0],
this):null;this.QP=E6;}},DetachBitmap:function(){if(!this.Azk)throw new Error(Hr
);this.bitmap=null;this.Azk=false;this.FrameSize=Cg;this.FrameDelay=0;this.NoOfFrames=
1;this.VI=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I0);if(!aBitmap)return this;this.bitmap=aBitmap;this.Azk=true;var noOfFrames=
1;var frameSize=Cg;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VI=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BiZ:function(aClip,Aox,Bco,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!Aox){Aox.Aja();attrSet=Aox.attrSet;}if(
!!Bco)attrString=Bco.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Py;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6L:function(
aClip,AfL,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1u,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfL||!AfL.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1u===1)orient=90;else if(A1u===2)orient=180;else if(A1u===
3)orient=270;var dstFrameNo=this.Py;var dstBitmap=this.bitmap;var srcFont=AfL.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Bi1:function(aClip
,aBitmap,aFrameNr,aDstRect,Atu,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atu)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Py;var srcRect=[].concat(
Cg,aBitmap.FrameSize);var left=((Atu&0x1)===0x1);var top=((Atu&0x2)===0x2);var right=((
Atu&0x4)===0x4);var bottom=((Atu&0x8)===0x8);var interior=((Atu&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hp:function(aClip
,AoI,aDstRect,aFlipY,aOffset,aWidth,Byu,BxG,Bx1,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoI||!AoI.path)return;var style=0;switch(Byu){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BxG){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bx1){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Py;var path=AoI.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhR:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Iv);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Py;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bpm:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O8);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Py;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A6j:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Py;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aep:function(aClip,AoI,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BxK){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoI||!AoI.path)return;var nonZeroWinding=BxK===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Py;var path=AoI.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bi2:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Py;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avl:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Py;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bi4:function(aClip,aDstPos1,aDstPos2,ByA,ByB,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Ags=ByA;var Agt=ByB;var AdA=aDstPos1;
var AdB=aDstPos2;if(A.aaX(AdA,AdB))return;if(Ags<=1)Ags=1;if(Agt<=1)Agt=1;var Aiz=
Ags/2;var AiA=Agt/2;var Api=AdA[0];var Apj=AdA[1];var Apk=AdB[0];var Apl=AdB[1];
var Kd=Apk-Api;var Ke=Apl-Apj;var I5=Math.sqrt((Kd*Kd)+(Ke*Ke));if(((Ags>4096)||(
Agt>4096))||(I5>4096)){A.ab5("%s",P_);return;}Kd=Kd/I5;Ke=Ke/I5;var x1=Api+(Ke*Aiz
);var y1=Apj-(Kd*Aiz);var x2=Apk+(Ke*AiA);var y2=Apl-(Kd*AiA);var x3=Apk-(Ke*AiA
);var y3=Apl+(Kd*AiA);var x4=Api-(Ke*Aiz);var y4=Apj+(Kd*Aiz);var Bf5=A.aaL(A.aci.
AsY);var srcRect=[].concat(P$,A.abe(Bf5.FrameSize,CR));var dstBitmap=this.bitmap;
var dstFrameNo=this.Py;var srcBitmap=Bf5.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au8:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Py;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lf();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEK)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax5={Wk:1,Wl:0,Y9:0,Y_:
0,Wm:0,Wn:1,Y$:0,Za:0,Q0:0,Q1:0,Zb:1,Wo:0,Uc:0,Ud:0,Zc:0,Wp:1,UW:0,P8:0,P7:0,AgV:
0,AlQ:true,ACh:function(aX,aY){var Vy=((aX*this.Q0)+(aY*this.Q1))+this.Wo;var BZ=((
aX*this.Uc)+(aY*this.Ud))+this.Wp;if(!!BZ&&(BZ!==1))Vy=Vy/BZ;this.UW=Vy;return true;
},Afb:function(aX,aY){var AtT=this.AgV;if(AtT<0)return false;var Ep=((aX*this.Wk
)+(aY*this.Wl))+this.Y_;var Di=((aX*this.Wm)+(aY*this.Wn))+this.Za;var Vy=((aX*this.
Q0)+(aY*this.Q1))+this.Wo;var BZ=((aX*this.Uc)+(aY*this.Ud))+this.Wp;var AA8=1;if(
!!BZ&&(BZ!==1)){Ep=Ep/BZ;Di=Di/BZ;Vy=Vy/BZ;}if(AtT!==-Vy)AA8=1/(Vy+AtT);if(!!AtT
)AA8=AA8*AtT;this.P7=Ep*AA8;this.P8=Di*AA8;this.UW=Vy+AtT;return true;},Bkb:function(
Hb,Pb,Qe){if(!Hb||!Pb)throw new Error(Fc);this.Wk=Hb.Wk+((Pb.Wk-Hb.Wk)*Qe);this.
Wl=Hb.Wl+((Pb.Wl-Hb.Wl)*Qe);this.Y9=Hb.Y9+((Pb.Y9-Hb.Y9)*Qe);this.Y_=Hb.Y_+((Pb.
Y_-Hb.Y_)*Qe);this.Wm=Hb.Wm+((Pb.Wm-Hb.Wm)*Qe);this.Wn=Hb.Wn+((Pb.Wn-Hb.Wn)*Qe);
this.Y$=Hb.Y$+((Pb.Y$-Hb.Y$)*Qe);this.Za=Hb.Za+((Pb.Za-Hb.Za)*Qe);this.Q0=Hb.Q0+((
Pb.Q0-Hb.Q0)*Qe);this.Q1=Hb.Q1+((Pb.Q1-Hb.Q1)*Qe);this.Zb=Hb.Zb+((Pb.Zb-Hb.Zb)*Qe
);this.Wo=Hb.Wo+((Pb.Wo-Hb.Wo)*Qe);this.Uc=Hb.Uc+((Pb.Uc-Hb.Uc)*Qe);this.Ud=Hb.Ud+((
Pb.Ud-Hb.Ud)*Qe);this.Zc=Hb.Zc+((Pb.Zc-Hb.Zc)*Qe);this.Wp=Hb.Wp+((Pb.Wp-Hb.Wp)*Qe
);this.AgV=Hb.AgV+((Pb.AgV-Hb.AgV)*Qe);this.AlQ=false;return this;},Afh:function(
AJi,AJj,AJk){this.Wk=this.Wk*AJi;this.Wl=this.Wl*AJj;this.Y9=this.Y9*AJk;this.Wm=
this.Wm*AJi;this.Wn=this.Wn*AJj;this.Y$=this.Y$*AJk;this.Q0=this.Q0*AJi;this.Q1=
this.Q1*AJj;this.Zb=this.Zb*AJk;this.Uc=this.Uc*AJi;this.Ud=this.Ud*AJj;this.Zc=
this.Zc*AJk;this.AlQ=false;return this;},BqE:function(AJa,AJb,AJc){this.Y_=((this.
Y_+(this.Wk*AJa))+(this.Wl*AJb))+(this.Y9*AJc);this.Za=((this.Za+(this.Wm*AJa))+(
this.Wn*AJb))+(this.Y$*AJc);this.Wo=((this.Wo+(this.Q0*AJa))+(this.Q1*AJb))+(this.
Zb*AJc);this.Wp=((this.Wp+(this.Uc*AJa))+(this.Ud*AJb))+(this.Zc*AJc);this.AlQ=false;
return this;},AD_:function(){return this.AlQ||((((((((((((((((this.Wk===1)&&!this.
Wl)&&!this.Y9)&&!this.Y_)&&!this.Wm)&&(this.Wn===1))&&!this.Y$)&&!this.Za)&&!this.
Q0)&&!this.Q1)&&(this.Zb===1))&&!this.Wo)&&!this.Uc)&&!this.Ud)&&!this.Zc)&&(this.
Wp===1));},ANV:function(Ah8,Ah$,Ah9,Aia,AoQ,AoR,Ah_,Aib){var AzL=Ah9-AoQ;var AzN=
Aia-AoR;var AzM=Ah_-AoQ;var AzO=Aib-AoR;var ABq=((Ah8-Ah9)+AoQ)-Ah_;var ABr=((Ah$-
Aia)+AoR)-Aib;var Ao4=(AzL*AzO)-(AzN*AzM);if(!Ao4)return null;this.Q0=((ABq*AzO)-(
ABr*AzM))/Ao4;this.Q1=((AzL*ABr)-(AzN*ABq))/Ao4;this.Zb=0;this.Wo=1;this.Wk=(Ah9-
Ah8)+(this.Q0*Ah9);this.Wl=(Ah_-Ah8)+(this.Q1*Ah_);this.Y9=0;this.Y_=Ah8;this.Wm=(
Aia-Ah$)+(this.Q0*Aia);this.Wn=(Aib-Ah$)+(this.Q1*Aib);this.Y$=0;this.Za=Ah$;this.
Uc=0;this.Ud=0;this.Zc=0;this.Wp=1;this.AlQ=false;return this;},BhW:function(Mb){
if(!Mb)return this;this.Wk=Mb.Wk;this.Wl=Mb.Wl;this.Y9=Mb.Y9;this.Y_=Mb.Y_;this.
Wm=Mb.Wm;this.Wn=Mb.Wn;this.Y$=Mb.Y$;this.Za=Mb.Za;this.Q0=Mb.Q0;this.Q1=Mb.Q1;this.
Zb=Mb.Zb;this.Wo=Mb.Wo;this.Uc=Mb.Uc;this.Ud=Mb.Ud;this.Zc=Mb.Zc;this.Wp=Mb.Wp;this.
AlQ=Mb.AlQ;this.AgV=Mb.AgV;return this;},A78:function(){this.Wk=1;this.Wl=0;this.
Y9=0;this.Y_=0;this.Wm=0;this.Wn=1;this.Y$=0;this.Za=0;this.Q0=0;this.Q1=0;this.
Zb=1;this.Wo=0;this.Uc=0;this.Ud=0;this.Zc=0;this.Wp=1;this.AlQ=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax5;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7Q={Bd_:1,Bd$:0,Bea:0,Beb:0,Bec:1,Bed:0,Bee:0,Bef:0,Beg:1,P8:0,P7:0,A2Y:false
,Afb:function(Fe){if(!this.A2Y)return false;var A5b=Fe[0];var A5d=Fe[1];var BDu=((
A5b*this.Bd_)+(A5d*this.Bd$))+this.Bea;var BDv=((A5b*this.Beb)+(A5d*this.Bec))+this.
Bed;var A4n=((A5b*this.Bee)+(A5d*this.Bef))+this.Beg;if(!!A4n){this.P7=BDu/A4n;this.
P8=BDv/A4n;return true;}return false;},ANV:function(Ah8,Ah$,Ah9,Aia,AoQ,AoR,Ah_,
Aib){var AzL=Ah9-AoQ;var AzN=Aia-AoR;var AzM=Ah_-AoQ;var AzO=Aib-AoR;var ABq=((Ah8-
Ah9)+AoQ)-Ah_;var ABr=((Ah$-Aia)+AoR)-Aib;var Ao4=(AzL*AzO)-(AzN*AzM);this.A2Y=false;
if(!Ao4)return;var AiB=((ABq*AzO)-(ABr*AzM))/Ao4;var BL=((AzL*ABr)-(AzN*ABq))/Ao4;
var a=(Ah9-Ah8)+(AiB*Ah9);var RB=(Ah_-Ah8)+(BL*Ah_);var B4=Ah8;var d=(Aia-Ah$)+(
AiB*Aia);var AJ5=(Aib-Ah$)+(BL*Aib);var LP=Ah$;this.Bd_=AJ5-(LP*BL);this.Bd$=(B4
*BL)-RB;this.Bea=(RB*LP)-(B4*AJ5);this.Beb=(LP*AiB)-d;this.Bec=a-(B4*AiB);this.Bed=(
B4*d)-(a*LP);this.Bee=(d*BL)-(AJ5*AiB);this.Bef=(RB*AiB)-(a*BL);this.Beg=(a*AJ5)-(
RB*d);this.A2Y=true;},_Init:function(aArg){this.__proto__=C.A7Q;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5M={C7:A.wf,attrString:null,Lf:function(){this.A6D(
);},A6D:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C7=Cg;},Aj2:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BjW:function(
){return this.C7;},BoJ:function(Aox,aString,aWidth,aEnableBidiText){this.A6D();var
attrSet=null;var handle=null;var s=Cg;if(!!Aox){Aox.Aja();attrSet=Aox.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C7=s;},_Init:function(
aArg){this.__proto__=C.A5M;A.h7++;},_Done:function(){this.Lf();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aif:null,AfW:null,Aie:null,Apf:A.abi(4,null,null),RD:A.abi(10,null,
null),A66:null,A5Z:null,attrSet:null,Azw:A.abi(10,0,{0:0xFF000000}),Lf:function(
){this.AJ3();},Init:function(aArg){if(!!this.RD.Get(0)&&this.RD.Get(0).N6)A.zV([
this,this.AAV],this.RD.Get(0),0);},AJ3:function(){var handle=this.attrSet;if(!handle
)return;A.aaj(handle);this.attrSet=null;},Aja:function(){if(!!this.attrSet)return;
var handle=null;var noOfColors=this.BjM();var noOfBitmaps=this.BjL();var noOfFonts=
this.BjN();handle=A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(
!handle)return;var AKx=this.Aie;var Adq=this.AfW;var AKy=this.Aif;var inx;var lnx;
for(inx=0;inx<10;inx=inx+1){var entry=this.Azw.Get(inx);if(entry!==0x00000000)A.
abF(handle,inx,entry);}while(!!AKx){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKx.KJ.
Get(lnx);if(entry!==0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKx=AKx.Ah;
}for(inx=0;inx<10;inx=inx+1){var entry=this.RD.Get(inx);if(!!entry){entry.Update(
);var bitmap=entry.bitmap;A.abE(handle,inx,bitmap);}}while(!!Adq){for(lnx=0;lnx<
20;lnx=lnx+1){var entry=Adq.KJ.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx+lnx,bitmap);}}inx=inx+20;Adq=Adq.Ah;}for(inx=0;inx<4;inx=
inx+1){var entry=this.Apf.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,
inx,font);}}while(!!AKy){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKy.KJ.Get(lnx);if(
!!entry){var font=entry.font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKy=AKy.Ah;
}},AAV:function(G){var handle=this.attrSet;var Adq=this.AfW;var inx;var lnx;for(
inx=0;inx<10;inx=inx+1)if(!!this.RD.Get(inx)&&this.RD.Get(inx).N6){var bitmap=this.
RD.Get(inx).bitmap;A.abE(handle,inx,bitmap);}while(!!Adq){for(lnx=0;lnx<20;lnx=lnx+
1)if(!!Adq.KJ.Get(lnx)&&Adq.KJ.Get(lnx).N6){var bitmap=Adq.KJ.Get(lnx).bitmap;A.
abE(handle,inx+lnx,bitmap);}inx=inx+20;Adq=Adq.Ah;}A.we(this,1);},Bne:function(E
){this.AUV(3,E);},A_D:function(E){this.AUV(1,E);},Ahq:function(E){this.AUV(0,E);
},A_b:function(E){this.Bpx(0,E);},BmF:function(E){this.AGM(3,E);},A_f:function(E
){this.AGM(2,E);},A_e:function(E){this.AGM(1,E);},Ahn:function(E){this.AGM(0,E);
},AUV:function(aFontNo,AfL){var Adl=aFontNo;var HZ=false;if(Adl<0)return;if(Adl<
4){HZ=this.Apf.Get(Adl)!==AfL;this.Apf.Set(Adl,AfL);}else{var Bz=this.Aif;Adl=Adl-
4;while(!!Bz&&(Adl>=20)){Bz=Bz.Ah;Adl=Adl-20;}if(!!Bz){HZ=Bz.KJ.Get(Adl)!==AfL;Bz.
KJ.Set(Adl,AfL);}}if(HZ&&!!this.attrSet){var handle=this.attrSet;var font=null;if(
!!AfL)font=AfL.font;A.abG(handle,aFontNo,font);}if(HZ)A.we(this,1);},BpD:function(
Xv){var HZ=false;if(Xv<4)Xv=4;if(Xv>256)Xv=256;Xv=Xv-4;if((Xv>0)&&!this.Aif){this.
Aif=A._NewObject(C.AB7,0);HZ=true;}if(!Xv&&!!this.Aif){this.Aif=null;HZ=true;}var
Bz=this.Aif;while(Xv>0){if((Xv>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB7,0);HZ=true;
}Xv=Xv-20;if(Xv>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HZ=true;}if(HZ){this.AJ3(
);A.we(this,1);}},BjN:function(){var CB=4;var Bz=this.Aif;while(!!Bz){CB=CB+20;Bz=
Bz.Ah;}return CB;},Bpx:function(aBitmapNo,aBitmap){var Qj=aBitmapNo;var HZ=false;
if(Qj<0)return;if(Qj<10){HZ=this.RD.Get(Qj)!==aBitmap;if(!!this.RD.Get(Qj)&&this.
RD.Get(Qj).N6)A.z9([this,this.AAV],this.RD.Get(Qj),0);this.RD.Set(Qj,aBitmap);if(
!!aBitmap&&aBitmap.N6)A.zV([this,this.AAV],aBitmap,0);}else{var Bz=this.AfW;Qj=Qj-
10;while(!!Bz&&(Qj>=20)){Bz=Bz.Ah;Qj=Qj-20;}if(!!Bz){HZ=Bz.KJ.Get(Qj)!==aBitmap;
if(!!Bz.KJ.Get(Qj)&&Bz.KJ.Get(Qj).N6)A.z9([this,this.AAV],Bz.KJ.Get(Qj),0);Bz.KJ.
Set(Qj,aBitmap);if(!!aBitmap&&aBitmap.N6)A.zV([this,this.AAV],aBitmap,0);}}if(HZ&&
!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap){aBitmap.Update(
);bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo,bitmap);}if(HZ)A.we(this,1);},BpB:
function(Xt){var HZ=false;if(Xt<10)Xt=10;if(Xt>256)Xt=256;Xt=Xt-10;if((Xt>0)&&!this.
AfW){this.AfW=A._NewObject(C.AB5,0);HZ=true;}if(!Xt&&!!this.AfW){this.AfW=null;HZ=
true;}var Bz=this.AfW;while(Xt>0){if((Xt>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB5,0
);HZ=true;}Xt=Xt-20;if(Xt>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HZ=true;}if(HZ
){this.AJ3();A.we(this,1);}},BjL:function(){var CB=10;var Bz=this.AfW;while(!!Bz
){CB=CB+20;Bz=Bz.Ah;}return CB;},AGM:function(aColorNo,aColor){var Adb=aColorNo;
var HZ=false;if(Adb<0)return;if(Adb<10){HZ=this.Azw.Get(Adb)!==aColor;this.Azw.Set(
Adb,aColor);}else{var Bz=this.Aie;Adb=Adb-10;while(!!Bz&&(Adb>=20)){Bz=Bz.Ah;Adb=
Adb-20;}if(!!Bz){HZ=Bz.KJ.Get(Adb)!==aColor;Bz.KJ.Set(Adb,aColor);}}if(HZ&&!!this.
attrSet){var handle=this.attrSet;A.abF(handle,aColorNo,aColor);}if(HZ)A.we(this,
0);},BpC:function(Xu){var HZ=false;if(Xu<10)Xu=10;if(Xu>256)Xu=256;Xu=Xu-10;if((
Xu>0)&&!this.Aie){this.Aie=A._NewObject(C.AB6,0);HZ=true;}if(!Xu&&!!this.Aie){this.
Aie=null;HZ=true;}var Bz=this.Aie;while(Xu>0){if((Xu>20)&&!Bz.Ah){Bz.Ah=A._NewObject(
C.AB6,0);HZ=true;}Xu=Xu-20;if(Xu>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HZ=true;
}if(HZ){this.AJ3();A.we(this,1);}},BjM:function(){var CB=10;var Bz=this.Aie;while(
!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},_Init:function(aArg){(this.Apf=[]).__proto__=
C.AttrSet.Apf;(this.RD=[]).__proto__=C.AttrSet.RD;(this.Azw=[]).__proto__=C.AttrSet.
Azw;this.__proto__=C.AttrSet;this.Apf.Set(0,A.aaL(A.aci.ACN));this.RD.Set(0,A.aaL(
A.aci.TS));this.A66=A.aaL(A.aci.ACN);this.A5Z=A.aaL(A.aci.TS);this.Init(aArg);A.
h7++;},_Done:function(){this.Lf();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Aif)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aie)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aa6(this.Apf,D);A.aa6(this.RD,D);if((B=this.A66)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A5Z)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.AB7={Ah:null,KJ:A.abi(20,null,null),_Init:function(aArg){(
this.KJ=[]).__proto__=C.AB7.KJ;this.__proto__=C.AB7;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KJ,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AB5={Ah:null,KJ:A.abi(20,null,null),_Init:function(aArg){(this.KJ=[]).__proto__=
C.AB5.KJ;this.__proto__=C.AB5;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.KJ,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.AB6={Ah:
null,KJ:A.abi(20,0,null),_Init:function(aArg){(this.KJ=[]).__proto__=C.AB6.KJ;this.
__proto__=C.AB6;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.HA={path:null,Lf:function(){if(!this.path)return;var
handle=this.path;A.e6(handle);this.path=null;},Ady:function(G){A.we(this,0);},Fi:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.pe([this,this.Ady],this);var handle=this.path;var result=0;{result=A.dU(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A5o:function(aSubPathNo,aX,aY){A.pe([this,this.Ady],this);var
handle=this.path;var result=0;result=A.m5(handle,aSubPathNo,aX,aY);return result;
},VX:function(aSubPathNo){A.pe([this,this.Ady],this);var handle=this.path;A.jU(handle
,aSubPathNo);},VN:function(aSubPathNo,aX,aY){A.pe([this,this.Ady],this);var handle=
this.path;A.rt(handle,aSubPathNo,aX,aY);},Jz:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AxC(1);A.pe([this,this.Ady],this);var handle=this.
path;var result=false;result=A.gM(handle,aSubPathNo,aMaxNoOfEdges);return result;
},BjO:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.aax(handle);return result;},AxC:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.BjO()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.e6(handle);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;
A.pe([this,this.Ady],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.HA;A.h7++;},_Done:function(){this.Lf();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Au9={Left:0x1,ZY:0x2
,Right:0x4,A50:0x8,BE6:0x10};C.BEM={BEA:0,BFE:1};C.BFM={BDV:0,BFq:1,Bph:2};C.BFL={
BEO:0,BGv:1,Bph:2,AxY:3};C.BDN={BDM:0,BGq:1,BFQ:2,BFR:3,BFT:4,BFS:5};C.AMQ={NV:360
,J5:0,It:0,Rd:0,Ajb:function(G){var B;var FE=this.NV;var FX;if((FE>=360)||(FE<=-
360))FE=360;this.AxC(2);{var Az=Math.max(this.It,this.J5);FX=1+((90/((Math.acos(
1-(0.5/(Az+1)))*A.rE)|0))|0);FX*=4;if(FE<360)FX=((FE*FX)/360)|0;FX=Math.max(FX,-
FX,1);}if(((!FE||!this.It)||!this.J5)||(((((this.Rd===2)||(this.Rd===3))||(this.
Rd===4))||(this.Rd===5))&&((0>=this.It)||(0>=this.J5)))){this.Jz(0,0);this.Jz(1,
0);return;}if(FE===360){this.Jz(0,FX+1);this.Jz(1,0);this.Fi(0,0,0,this.It,this.
J5,0,360,FX);this.VX(0);return;}if(!this.Rd){this.Jz(0,FX+1);this.Jz(1,0);this.Fi(
0,0,0,this.It,this.J5,0,FE,FX);return;}if(this.Rd===1){this.Jz(0,FX+1);this.Jz(1
,0);this.Fi(0,0,0,this.It,this.J5,0,FE,FX);this.VX(0);return;}if(this.Rd===2){this.
Jz(0,FX+1);this.Jz(1,0);this.VN(0,0,0);this.Fi(0,0,0,this.It,this.J5,0,FE,FX);this.
VX(0);return;}if(this.Rd===4){var Ow=this.It;var LM=Math.sqrt(Ow*Ow);var Ts=((LM
*0.25)|0)+3;this.Jz(0,(FX+Ts)+2);this.Jz(1,0);this.VN(0,0,0);if(FE>=0)this.Fi(0,
Ow/2,0,LM/2,LM/2,180,360,Ts);else this.Fi(0,Ow/2,0,LM/2,LM/2,180,0,Ts);this.Fi(0
,0,0,this.It,this.J5,0,FE,FX);this.VX(0);return;}if(this.Rd===5){var JK=FE;var Ow=
this.It*Math.cos(JK*A.k$);var AiP=this.J5*Math.sin(JK*A.k$);var LM=Math.sqrt((Ow
*Ow)+(AiP*AiP));var Ts=((LM*0.25)|0)+3;this.Jz(0,(FX+Ts)+2);this.Jz(1,0);this.VN(
0,0,0);this.Fi(0,0,0,this.It,this.J5,0,FE,FX);if(FE>=0)this.Fi(0,Ow/2,AiP/2,LM/2
,LM/2,JK,JK+180,Ts);else this.Fi(0,Ow/2,AiP/2,LM/2,LM/2,JK,JK-180,Ts);this.VX(0);
return;}if(this.Rd===3){var Ai8=this.It;var AdH=Math.sqrt(Ai8*Ai8);var JK=FE;var
Ais=this.It*Math.cos(JK*A.k$);var Ait=this.J5*Math.sin(JK*A.k$);var Adg=Math.sqrt((
Ais*Ais)+(Ait*Ait));var ApA=((AdH*0.25)|0)+3;var Apz=((Adg*0.25)|0)+3;this.Jz(0,((
FX+ApA)+Apz)+10);this.Jz(1,0);this.VN(0,0,0);if(FE>=0){this.Fi(0,Ai8/2,0,AdH/2,AdH
/2,180,360,ApA);this.Fi(0,0,0,this.It,this.J5,0,FE,FX);this.Fi(0,Ais/2,Ait/2,Adg
/2,Adg/2,JK,JK+180,Apz);}else{this.Fi(0,Ai8/2,0,AdH/2,AdH/2,180,0,ApA);this.Fi(0
,0,0,this.It,this.J5,0,FE,FX);this.Fi(0,Ais/2,Ait/2,Adg/2,Adg/2,JK,JK-180,Apz);}
this.VX(0);return;}if(this.Rd===2){this.Jz(0,(FX*2)+1);this.Jz(1,0);this.Fi(0,0,
0,this.It,this.J5,0,FE,FX);this.Fi(0,0,0,0,0,this.NV,this.NV-FE,FX);this.VX(0);return;
}if(this.Rd===4){var Ow=this.It;var LM=Math.sqrt(Ow*Ow);var Ts=((LM*0.25)|0)+3;this.
Jz(0,((FX*2)+Ts)+2);this.Jz(1,0);if(FE>=0){this.Fi(0,0,0,this.It,this.J5,0,FE,FX
);this.Fi(0,0,0,0,0,this.NV,this.NV-FE,FX);this.Fi(0,Ow/2,0,LM/2,LM/2,180,360,Ts
);}else{this.Fi(0,0,0,this.It,this.J5,0,FE,FX);this.Fi(0,0,0,0,0,this.NV,this.NV-
FE,FX);this.Fi(0,Ow/2,0,LM/2,LM/2,180,0,Ts);}this.VX(0);return;}if(this.Rd===5){
var JK=FE;var sin=Math.sin(JK*A.k$);var cos=Math.cos(JK*A.k$);var Ow=this.It*cos;
var AiP=this.J5*sin;var LM=Math.sqrt((Ow*Ow)+(AiP*AiP));var Ts=((LM*0.25)|0)+3;this.
Jz(0,((FX*2)+Ts)+2);this.Jz(1,0);if(FE>=0){this.Fi(0,0,0,this.It,this.J5,0,FE,FX
);this.Fi(0,Ow/2,AiP/2,LM/2,LM/2,JK,JK+180,Ts);this.Fi(0,0,0,0,0,this.NV,this.NV-
FE,FX);}else{this.Fi(0,0,0,this.It,this.J5,0,FE,FX);this.Fi(0,Ow/2,AiP/2,LM/2,LM
/2,JK,JK-180,Ts);this.Fi(0,0,0,0,0,this.NV,this.NV-FE,FX);}this.VX(0);return;}if(
this.Rd===3){var JK=FE;var BzI=Math.sin(JK*A.k$);var BzD=Math.cos(JK*A.k$);var Ai8=
this.It;var Ais=this.It*BzD;var Ait=this.J5*BzI;var AdH=Math.sqrt(Ai8*Ai8);var Adg=
Math.sqrt((Ais*Ais)+(Ait*Ait));var ApA=((AdH*0.25)|0)+3;var Apz=((Adg*0.25)|0)+3;
this.Jz(0,(((FX*2)+ApA)+Apz)+4);this.Jz(1,0);if(FE>=0){this.Fi(0,0,0,this.It,this.
J5,0,FE,FX);this.Fi(0,Ais/2,Ait/2,Adg/2,Adg/2,JK,JK+180,Apz);this.Fi(0,0,0,0,0,this.
NV,this.NV-FE,FX);this.Fi(0,Ai8/2,0,AdH/2,AdH/2,180,360,ApA);}else{this.Fi(0,0,0
,this.It,this.J5,0,FE,FX);this.Fi(0,Ais/2,Ait/2,Adg/2,Adg/2,JK,JK-180,Apz);this.
Fi(0,0,0,0,0,this.NV,this.NV-FE,FX);this.Fi(0,Ai8/2,0,AdH/2,AdH/2,180,0,ApA);}this.
VX(0);return;}},BmS:function(E){if(E===this.NV)return;this.NV=E;if((this.It>0)&&(
this.J5>0))A.pe([this,this.Ajb],this);},Bn8:function(E){if((E===this.It)&&(E===this.
J5))return;this.It=E;this.J5=E;if(!!this.NV)A.pe([this,this.Ajb],this);},Boh:function(
E){if(E===this.Rd)return;this.Rd=E;if((!!this.NV&&(this.It>0))&&(this.J5>0))A.pe([
this,this.Ajb],this);},_Init:function(aArg){C.HA._Init.call(this,aArg);this.__proto__=
C.AMQ;},_className:"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMQ.__proto__=C.HA;};C._ReInit=function(
){};C.DJ=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */