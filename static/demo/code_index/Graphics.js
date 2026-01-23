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
var Cf=[0,0];var BD="Can not resize explicitly attached graphics engine bitmaps";
var E6=[0,0,0,0];var Hq="No graphics engine bitmap attached to this canvas";var I0=
"The canvas is already initialized with a graphics engine bitmap";var Iv="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O9="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P_="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P$=[1,1];var CR=[2,2];var Fc="Missing matrices to interpolate";
C.Canvas={C1:null,AEI:null,QP:A.wg,Pz:0,Azj:false,Lg:function(){if(this.Azj)this.
DetachBitmap();},Init:function(aArg){this.N6=true;},ArQ:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cf;if(A.aaX(E,this.FrameSize))return;if(this.Azj)throw new Error(BD);
this.FrameSize=E;this.VF=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cf;this.FrameDelay=0;this.NoOfFrames=1;}this.QP=[].concat(
Cf,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pz;for(this.Pz=this.NoOfFrames-
1;this.Pz>=0;this.Pz--)this.Avh(this.QP,this.QP,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pz=dstFrameNr;}}if(!(((B=this.QP)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEI)?B[1].call(B[0],
this):null;this.QP=E6;}},DetachBitmap:function(){if(!this.Azj)throw new Error(Hq
);this.bitmap=null;this.Azj=false;this.FrameSize=Cf;this.FrameDelay=0;this.NoOfFrames=
1;this.VF=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I0);if(!aBitmap)return this;this.bitmap=aBitmap;this.Azj=true;var noOfFrames=
1;var frameSize=Cf;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VF=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BiP:function(aClip,Aox,Bcd,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!Aox){Aox.Aja();attrSet=Aox.attrSet;}if(
!!Bcd)attrString=Bcd.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pz;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6A:function(
aClip,AfK,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1o,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfK||!AfK.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1o===1)orient=90;else if(A1o===2)orient=180;else if(A1o===
3)orient=270;var dstFrameNo=this.Pz;var dstBitmap=this.bitmap;var srcFont=AfK.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BiR:function(aClip
,aBitmap,aFrameNr,aDstRect,Atq,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atq)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pz;var srcRect=[].concat(
Cf,aBitmap.FrameSize);var left=((Atq&0x1)===0x1);var top=((Atq&0x2)===0x2);var right=((
Atq&0x4)===0x4);var bottom=((Atq&0x8)===0x8);var interior=((Atq&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ho:function(aClip
,AoH,aDstRect,aFlipY,aOffset,aWidth,Byj,Bxv,BxQ,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoH||!AoH.path)return;var style=0;switch(Byj){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bxv){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BxQ){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pz;var path=AoH.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhQ:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Iv);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pz;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bpc:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O9);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pz;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A6a:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pz;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aeo:function(aClip,AoH,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bxz){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoH||!AoH.path)return;var nonZeroWinding=Bxz===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pz;var path=AoH.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BiS:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pz;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avh:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pz;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BiU:function(aClip,aDstPos1,aDstPos2,Byp,Byq,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agr=Byp;var Ags=Byq;var Adz=aDstPos1;
var AdA=aDstPos2;if(A.aaX(Adz,AdA))return;if(Agr<=1)Agr=1;if(Ags<=1)Ags=1;var Aiz=
Agr/2;var AiA=Ags/2;var Aph=Adz[0];var Api=Adz[1];var Apj=AdA[0];var Apk=AdA[1];
var Kd=Apj-Aph;var Ke=Apk-Api;var I5=Math.sqrt((Kd*Kd)+(Ke*Ke));if(((Agr>4096)||(
Ags>4096))||(I5>4096)){A.ab5("%s",P_);return;}Kd=Kd/I5;Ke=Ke/I5;var x1=Aph+(Ke*Aiz
);var y1=Api-(Kd*Aiz);var x2=Apj+(Ke*AiA);var y2=Apk-(Kd*AiA);var x3=Apj-(Ke*AiA
);var y3=Apk+(Kd*AiA);var x4=Aph-(Ke*Aiz);var y4=Api+(Kd*Aiz);var BfU=A.aaL(A.aci.
AsW);var srcRect=[].concat(P$,A.abe(BfU.FrameSize,CR));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pz;var srcBitmap=BfU.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au4:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pz;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lg();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEI)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax0={Wi:1,Wj:0,Y5:0,Y6:
0,Wk:0,Wl:1,Y7:0,Y8:0,Q0:0,Q1:0,Y9:1,Wm:0,Ua:0,Ub:0,Y_:0,Wn:1,UV:0,P8:0,P7:0,AgU:
0,AlP:true,ACf:function(aX,aY){var Vv=((aX*this.Q0)+(aY*this.Q1))+this.Wm;var BZ=((
aX*this.Ua)+(aY*this.Ub))+this.Wn;if(!!BZ&&(BZ!==1))Vv=Vv/BZ;this.UV=Vv;return true;
},Afa:function(aX,aY){var AtP=this.AgU;if(AtP<0)return false;var Ep=((aX*this.Wi
)+(aY*this.Wj))+this.Y6;var Dh=((aX*this.Wk)+(aY*this.Wl))+this.Y8;var Vv=((aX*this.
Q0)+(aY*this.Q1))+this.Wm;var BZ=((aX*this.Ua)+(aY*this.Ub))+this.Wn;var AA6=1;if(
!!BZ&&(BZ!==1)){Ep=Ep/BZ;Dh=Dh/BZ;Vv=Vv/BZ;}if(AtP!==-Vv)AA6=1/(Vv+AtP);if(!!AtP
)AA6=AA6*AtP;this.P7=Ep*AA6;this.P8=Dh*AA6;this.UV=Vv+AtP;return true;},Bj3:function(
Ha,Pc,Qe){if(!Ha||!Pc)throw new Error(Fc);this.Wi=Ha.Wi+((Pc.Wi-Ha.Wi)*Qe);this.
Wj=Ha.Wj+((Pc.Wj-Ha.Wj)*Qe);this.Y5=Ha.Y5+((Pc.Y5-Ha.Y5)*Qe);this.Y6=Ha.Y6+((Pc.
Y6-Ha.Y6)*Qe);this.Wk=Ha.Wk+((Pc.Wk-Ha.Wk)*Qe);this.Wl=Ha.Wl+((Pc.Wl-Ha.Wl)*Qe);
this.Y7=Ha.Y7+((Pc.Y7-Ha.Y7)*Qe);this.Y8=Ha.Y8+((Pc.Y8-Ha.Y8)*Qe);this.Q0=Ha.Q0+((
Pc.Q0-Ha.Q0)*Qe);this.Q1=Ha.Q1+((Pc.Q1-Ha.Q1)*Qe);this.Y9=Ha.Y9+((Pc.Y9-Ha.Y9)*Qe
);this.Wm=Ha.Wm+((Pc.Wm-Ha.Wm)*Qe);this.Ua=Ha.Ua+((Pc.Ua-Ha.Ua)*Qe);this.Ub=Ha.Ub+((
Pc.Ub-Ha.Ub)*Qe);this.Y_=Ha.Y_+((Pc.Y_-Ha.Y_)*Qe);this.Wn=Ha.Wn+((Pc.Wn-Ha.Wn)*Qe
);this.AgU=Ha.AgU+((Pc.AgU-Ha.AgU)*Qe);this.AlP=false;return this;},Afg:function(
AJf,AJg,AJh){this.Wi=this.Wi*AJf;this.Wj=this.Wj*AJg;this.Y5=this.Y5*AJh;this.Wk=
this.Wk*AJf;this.Wl=this.Wl*AJg;this.Y7=this.Y7*AJh;this.Q0=this.Q0*AJf;this.Q1=
this.Q1*AJg;this.Y9=this.Y9*AJh;this.Ua=this.Ua*AJf;this.Ub=this.Ub*AJg;this.Y_=
this.Y_*AJh;this.AlP=false;return this;},Bqu:function(AI9,AI_,AI$){this.Y6=((this.
Y6+(this.Wi*AI9))+(this.Wj*AI_))+(this.Y5*AI$);this.Y8=((this.Y8+(this.Wk*AI9))+(
this.Wl*AI_))+(this.Y7*AI$);this.Wm=((this.Wm+(this.Q0*AI9))+(this.Q1*AI_))+(this.
Y9*AI$);this.Wn=((this.Wn+(this.Ua*AI9))+(this.Ub*AI_))+(this.Y_*AI$);this.AlP=false;
return this;},AD8:function(){return this.AlP||((((((((((((((((this.Wi===1)&&!this.
Wj)&&!this.Y5)&&!this.Y6)&&!this.Wk)&&(this.Wl===1))&&!this.Y7)&&!this.Y8)&&!this.
Q0)&&!this.Q1)&&(this.Y9===1))&&!this.Wm)&&!this.Ua)&&!this.Ub)&&!this.Y_)&&(this.
Wn===1));},ANR:function(Ah8,Ah$,Ah9,Aia,AoP,AoQ,Ah_,Aib){var AzK=Ah9-AoP;var AzM=
Aia-AoQ;var AzL=Ah_-AoP;var AzN=Aib-AoQ;var ABo=((Ah8-Ah9)+AoP)-Ah_;var ABp=((Ah$-
Aia)+AoQ)-Aib;var Ao3=(AzK*AzN)-(AzM*AzL);if(!Ao3)return null;this.Q0=((ABo*AzN)-(
ABp*AzL))/Ao3;this.Q1=((AzK*ABp)-(AzM*ABo))/Ao3;this.Y9=0;this.Wm=1;this.Wi=(Ah9-
Ah8)+(this.Q0*Ah9);this.Wj=(Ah_-Ah8)+(this.Q1*Ah_);this.Y5=0;this.Y6=Ah8;this.Wk=(
Aia-Ah$)+(this.Q0*Aia);this.Wl=(Aib-Ah$)+(this.Q1*Aib);this.Y7=0;this.Y8=Ah$;this.
Ua=0;this.Ub=0;this.Y_=0;this.Wn=1;this.AlP=false;return this;},BhL:function(Mb){
if(!Mb)return this;this.Wi=Mb.Wi;this.Wj=Mb.Wj;this.Y5=Mb.Y5;this.Y6=Mb.Y6;this.
Wk=Mb.Wk;this.Wl=Mb.Wl;this.Y7=Mb.Y7;this.Y8=Mb.Y8;this.Q0=Mb.Q0;this.Q1=Mb.Q1;this.
Y9=Mb.Y9;this.Wm=Mb.Wm;this.Ua=Mb.Ua;this.Ub=Mb.Ub;this.Y_=Mb.Y_;this.Wn=Mb.Wn;this.
AlP=Mb.AlP;this.AgU=Mb.AgU;return this;},A7X:function(){this.Wi=1;this.Wj=0;this.
Y5=0;this.Y6=0;this.Wk=0;this.Wl=1;this.Y7=0;this.Y8=0;this.Q0=0;this.Q1=0;this.
Y9=1;this.Wm=0;this.Ua=0;this.Ub=0;this.Y_=0;this.Wn=1;this.AlP=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax0;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7F={BdZ:1,Bd0:0,Bd1:0,Bd2:0,Bd3:1,Bd4:0,Bd5:0,Bd6:0,Bd7:1,P8:0,P7:0,A2Q:false
,Afa:function(Fe){if(!this.A2Q)return false;var A44=Fe[0];var A46=Fe[1];var BDd=((
A44*this.BdZ)+(A46*this.Bd0))+this.Bd1;var BDe=((A44*this.Bd2)+(A46*this.Bd3))+this.
Bd4;var A4e=((A44*this.Bd5)+(A46*this.Bd6))+this.Bd7;if(!!A4e){this.P7=BDd/A4e;this.
P8=BDe/A4e;return true;}return false;},ANR:function(Ah8,Ah$,Ah9,Aia,AoP,AoQ,Ah_,
Aib){var AzK=Ah9-AoP;var AzM=Aia-AoQ;var AzL=Ah_-AoP;var AzN=Aib-AoQ;var ABo=((Ah8-
Ah9)+AoP)-Ah_;var ABp=((Ah$-Aia)+AoQ)-Aib;var Ao3=(AzK*AzN)-(AzM*AzL);this.A2Q=false;
if(!Ao3)return;var AiB=((ABo*AzN)-(ABp*AzL))/Ao3;var BL=((AzK*ABp)-(AzM*ABo))/Ao3;
var a=(Ah9-Ah8)+(AiB*Ah9);var RA=(Ah_-Ah8)+(BL*Ah_);var B4=Ah8;var d=(Aia-Ah$)+(
AiB*Aia);var AJ2=(Aib-Ah$)+(BL*Aib);var LO=Ah$;this.BdZ=AJ2-(LO*BL);this.Bd0=(B4
*BL)-RA;this.Bd1=(RA*LO)-(B4*AJ2);this.Bd2=(LO*AiB)-d;this.Bd3=a-(B4*AiB);this.Bd4=(
B4*d)-(a*LO);this.Bd5=(d*BL)-(AJ2*AiB);this.Bd6=(RA*AiB)-(a*BL);this.Bd7=(a*AJ2)-(
RA*d);this.A2Q=true;},_Init:function(aArg){this.__proto__=C.A7F;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5D={C5:A.wf,attrString:null,Lg:function(){this.A6s(
);},A6s:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C5=Cf;},Aj2:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BjM:function(
){return this.C5;},Boz:function(Aox,aString,aWidth,aEnableBidiText){this.A6s();var
attrSet=null;var handle=null;var s=Cf;if(!!Aox){Aox.Aja();attrSet=Aox.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C5=s;},_Init:function(
aArg){this.__proto__=C.A5D;A.h7++;},_Done:function(){this.Lg();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aif:null,AfV:null,Aie:null,Ape:A.abi(4,null,null),RC:A.abi(10,null,
null),A6V:null,A5Q:null,attrSet:null,Azv:A.abi(10,0,{0:0xFF000000}),Lg:function(
){this.AJ0();},Init:function(aArg){if(!!this.RC.Get(0)&&this.RC.Get(0).N6)A.zV([
this,this.AAT],this.RC.Get(0),0);},AJ0:function(){var handle=this.attrSet;if(!handle
)return;A.aaj(handle);this.attrSet=null;},Aja:function(){if(!!this.attrSet)return;
var handle=null;var noOfColors=this.BjC();var noOfBitmaps=this.BjB();var noOfFonts=
this.BjD();handle=A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(
!handle)return;var AKu=this.Aie;var Adp=this.AfV;var AKv=this.Aif;var inx;var lnx;
for(inx=0;inx<10;inx=inx+1){var entry=this.Azv.Get(inx);if(entry!==0x00000000)A.
abF(handle,inx,entry);}while(!!AKu){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKu.KJ.
Get(lnx);if(entry!==0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKu=AKu.Ah;
}for(inx=0;inx<10;inx=inx+1){var entry=this.RC.Get(inx);if(!!entry){entry.Update(
);var bitmap=entry.bitmap;A.abE(handle,inx,bitmap);}}while(!!Adp){for(lnx=0;lnx<
20;lnx=lnx+1){var entry=Adp.KJ.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx+lnx,bitmap);}}inx=inx+20;Adp=Adp.Ah;}for(inx=0;inx<4;inx=
inx+1){var entry=this.Ape.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,
inx,font);}}while(!!AKv){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKv.KJ.Get(lnx);if(
!!entry){var font=entry.font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKv=AKv.Ah;
}},AAT:function(G){var handle=this.attrSet;var Adp=this.AfV;var inx;var lnx;for(
inx=0;inx<10;inx=inx+1)if(!!this.RC.Get(inx)&&this.RC.Get(inx).N6){var bitmap=this.
RC.Get(inx).bitmap;A.abE(handle,inx,bitmap);}while(!!Adp){for(lnx=0;lnx<20;lnx=lnx+
1)if(!!Adp.KJ.Get(lnx)&&Adp.KJ.Get(lnx).N6){var bitmap=Adp.KJ.Get(lnx).bitmap;A.
abE(handle,inx+lnx,bitmap);}inx=inx+20;Adp=Adp.Ah;}A.we(this,1);},Bm6:function(E
){this.AUR(3,E);},A_r:function(E){this.AUR(1,E);},Ahp:function(E){this.AUR(0,E);
},A91:function(E){this.Bpn(0,E);},Bmv:function(E){this.AGL(3,E);},A95:function(E
){this.AGL(2,E);},A94:function(E){this.AGL(1,E);},Ahm:function(E){this.AGL(0,E);
},AUR:function(aFontNo,AfK){var Adk=aFontNo;var HZ=false;if(Adk<0)return;if(Adk<
4){HZ=this.Ape.Get(Adk)!==AfK;this.Ape.Set(Adk,AfK);}else{var Bz=this.Aif;Adk=Adk-
4;while(!!Bz&&(Adk>=20)){Bz=Bz.Ah;Adk=Adk-20;}if(!!Bz){HZ=Bz.KJ.Get(Adk)!==AfK;Bz.
KJ.Set(Adk,AfK);}}if(HZ&&!!this.attrSet){var handle=this.attrSet;var font=null;if(
!!AfK)font=AfK.font;A.abG(handle,aFontNo,font);}if(HZ)A.we(this,1);},Bpt:function(
Xs){var HZ=false;if(Xs<4)Xs=4;if(Xs>256)Xs=256;Xs=Xs-4;if((Xs>0)&&!this.Aif){this.
Aif=A._NewObject(C.AB5,0);HZ=true;}if(!Xs&&!!this.Aif){this.Aif=null;HZ=true;}var
Bz=this.Aif;while(Xs>0){if((Xs>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB5,0);HZ=true;
}Xs=Xs-20;if(Xs>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HZ=true;}if(HZ){this.AJ0(
);A.we(this,1);}},BjD:function(){var CB=4;var Bz=this.Aif;while(!!Bz){CB=CB+20;Bz=
Bz.Ah;}return CB;},Bpn:function(aBitmapNo,aBitmap){var Qj=aBitmapNo;var HZ=false;
if(Qj<0)return;if(Qj<10){HZ=this.RC.Get(Qj)!==aBitmap;if(!!this.RC.Get(Qj)&&this.
RC.Get(Qj).N6)A.z9([this,this.AAT],this.RC.Get(Qj),0);this.RC.Set(Qj,aBitmap);if(
!!aBitmap&&aBitmap.N6)A.zV([this,this.AAT],aBitmap,0);}else{var Bz=this.AfV;Qj=Qj-
10;while(!!Bz&&(Qj>=20)){Bz=Bz.Ah;Qj=Qj-20;}if(!!Bz){HZ=Bz.KJ.Get(Qj)!==aBitmap;
if(!!Bz.KJ.Get(Qj)&&Bz.KJ.Get(Qj).N6)A.z9([this,this.AAT],Bz.KJ.Get(Qj),0);Bz.KJ.
Set(Qj,aBitmap);if(!!aBitmap&&aBitmap.N6)A.zV([this,this.AAT],aBitmap,0);}}if(HZ&&
!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap){aBitmap.Update(
);bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo,bitmap);}if(HZ)A.we(this,1);},Bpr:
function(Xq){var HZ=false;if(Xq<10)Xq=10;if(Xq>256)Xq=256;Xq=Xq-10;if((Xq>0)&&!this.
AfV){this.AfV=A._NewObject(C.AB3,0);HZ=true;}if(!Xq&&!!this.AfV){this.AfV=null;HZ=
true;}var Bz=this.AfV;while(Xq>0){if((Xq>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB3,0
);HZ=true;}Xq=Xq-20;if(Xq>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HZ=true;}if(HZ
){this.AJ0();A.we(this,1);}},BjB:function(){var CB=10;var Bz=this.AfV;while(!!Bz
){CB=CB+20;Bz=Bz.Ah;}return CB;},AGL:function(aColorNo,aColor){var Ac$=aColorNo;
var HZ=false;if(Ac$<0)return;if(Ac$<10){HZ=this.Azv.Get(Ac$)!==aColor;this.Azv.Set(
Ac$,aColor);}else{var Bz=this.Aie;Ac$=Ac$-10;while(!!Bz&&(Ac$>=20)){Bz=Bz.Ah;Ac$=
Ac$-20;}if(!!Bz){HZ=Bz.KJ.Get(Ac$)!==aColor;Bz.KJ.Set(Ac$,aColor);}}if(HZ&&!!this.
attrSet){var handle=this.attrSet;A.abF(handle,aColorNo,aColor);}if(HZ)A.we(this,
0);},Bps:function(Xr){var HZ=false;if(Xr<10)Xr=10;if(Xr>256)Xr=256;Xr=Xr-10;if((
Xr>0)&&!this.Aie){this.Aie=A._NewObject(C.AB4,0);HZ=true;}if(!Xr&&!!this.Aie){this.
Aie=null;HZ=true;}var Bz=this.Aie;while(Xr>0){if((Xr>20)&&!Bz.Ah){Bz.Ah=A._NewObject(
C.AB4,0);HZ=true;}Xr=Xr-20;if(Xr>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HZ=true;
}if(HZ){this.AJ0();A.we(this,1);}},BjC:function(){var CB=10;var Bz=this.Aie;while(
!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},_Init:function(aArg){(this.Ape=[]).__proto__=
C.AttrSet.Ape;(this.RC=[]).__proto__=C.AttrSet.RC;(this.Azv=[]).__proto__=C.AttrSet.
Azv;this.__proto__=C.AttrSet;this.Ape.Set(0,A.aaL(A.aci.ACL));this.RC.Set(0,A.aaL(
A.aci.TR));this.A6V=A.aaL(A.aci.ACL);this.A5Q=A.aaL(A.aci.TR);this.Init(aArg);A.
h7++;},_Done:function(){this.Lg();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Aif)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aie)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aa6(this.Ape,D);A.aa6(this.RC,D);if((B=this.A6V)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A5Q)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.AB5={Ah:null,KJ:A.abi(20,null,null),_Init:function(aArg){(
this.KJ=[]).__proto__=C.AB5.KJ;this.__proto__=C.AB5;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KJ,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AB3={Ah:null,KJ:A.abi(20,null,null),_Init:function(aArg){(this.KJ=[]).__proto__=
C.AB3.KJ;this.__proto__=C.AB3;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.KJ,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.AB4={Ah:
null,KJ:A.abi(20,0,null),_Init:function(aArg){(this.KJ=[]).__proto__=C.AB4.KJ;this.
__proto__=C.AB4;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hz={path:null,Lg:function(){if(!this.path)return;var
handle=this.path;A.e6(handle);this.path=null;},Adx:function(G){A.we(this,0);},Fi:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.pe([this,this.Adx],this);var handle=this.path;var result=0;{result=A.dU(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A5f:function(aSubPathNo,aX,aY){A.pe([this,this.Adx],this);var
handle=this.path;var result=0;result=A.m5(handle,aSubPathNo,aX,aY);return result;
},VT:function(aSubPathNo){A.pe([this,this.Adx],this);var handle=this.path;A.jU(handle
,aSubPathNo);},VK:function(aSubPathNo,aX,aY){A.pe([this,this.Adx],this);var handle=
this.path;A.rt(handle,aSubPathNo,aX,aY);},Jy:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.Axw(1);A.pe([this,this.Adx],this);var handle=this.
path;var result=false;result=A.gM(handle,aSubPathNo,aMaxNoOfEdges);return result;
},BjE:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.aax(handle);return result;},Axw:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.BjE()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.e6(handle);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;
A.pe([this,this.Adx],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hz;A.h7++;},_Done:function(){this.Lg();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Au5={Left:0x1,ZU:0x2
,Right:0x4,A5R:0x8,BEP:0x10};C.BEv={BEj:0,BFn:1};C.BFv={BDE:0,BE$:1,Bo9:2};C.BFu={
BEx:0,BGe:1,Bo9:2,AxT:3};C.BDw={BDv:0,BF$:1,BFz:2,BFA:3,BFC:4,BFB:5};C.AMN={NV:360
,J4:0,It:0,Rd:0,Ajb:function(G){var B;var FE=this.NV;var FV;if((FE>=360)||(FE<=-
360))FE=360;this.Axw(2);{var Az=Math.max(this.It,this.J4);FV=1+((90/((Math.acos(
1-(0.5/(Az+1)))*A.rE)|0))|0);FV*=4;if(FE<360)FV=((FE*FV)/360)|0;FV=Math.max(FV,-
FV,1);}if(((!FE||!this.It)||!this.J4)||(((((this.Rd===2)||(this.Rd===3))||(this.
Rd===4))||(this.Rd===5))&&((0>=this.It)||(0>=this.J4)))){this.Jy(0,0);this.Jy(1,
0);return;}if(FE===360){this.Jy(0,FV+1);this.Jy(1,0);this.Fi(0,0,0,this.It,this.
J4,0,360,FV);this.VT(0);return;}if(!this.Rd){this.Jy(0,FV+1);this.Jy(1,0);this.Fi(
0,0,0,this.It,this.J4,0,FE,FV);return;}if(this.Rd===1){this.Jy(0,FV+1);this.Jy(1
,0);this.Fi(0,0,0,this.It,this.J4,0,FE,FV);this.VT(0);return;}if(this.Rd===2){this.
Jy(0,FV+1);this.Jy(1,0);this.VK(0,0,0);this.Fi(0,0,0,this.It,this.J4,0,FE,FV);this.
VT(0);return;}if(this.Rd===4){var Ow=this.It;var LL=Math.sqrt(Ow*Ow);var Tr=((LL
*0.25)|0)+3;this.Jy(0,(FV+Tr)+2);this.Jy(1,0);this.VK(0,0,0);if(FE>=0)this.Fi(0,
Ow/2,0,LL/2,LL/2,180,360,Tr);else this.Fi(0,Ow/2,0,LL/2,LL/2,180,0,Tr);this.Fi(0
,0,0,this.It,this.J4,0,FE,FV);this.VT(0);return;}if(this.Rd===5){var JJ=FE;var Ow=
this.It*Math.cos(JJ*A.k$);var AiP=this.J4*Math.sin(JJ*A.k$);var LL=Math.sqrt((Ow
*Ow)+(AiP*AiP));var Tr=((LL*0.25)|0)+3;this.Jy(0,(FV+Tr)+2);this.Jy(1,0);this.VK(
0,0,0);this.Fi(0,0,0,this.It,this.J4,0,FE,FV);if(FE>=0)this.Fi(0,Ow/2,AiP/2,LL/2
,LL/2,JJ,JJ+180,Tr);else this.Fi(0,Ow/2,AiP/2,LL/2,LL/2,JJ,JJ-180,Tr);this.VT(0);
return;}if(this.Rd===3){var Ai8=this.It;var AdG=Math.sqrt(Ai8*Ai8);var JJ=FE;var
Ais=this.It*Math.cos(JJ*A.k$);var Ait=this.J4*Math.sin(JJ*A.k$);var Adf=Math.sqrt((
Ais*Ais)+(Ait*Ait));var Apz=((AdG*0.25)|0)+3;var Apy=((Adf*0.25)|0)+3;this.Jy(0,((
FV+Apz)+Apy)+10);this.Jy(1,0);this.VK(0,0,0);if(FE>=0){this.Fi(0,Ai8/2,0,AdG/2,AdG
/2,180,360,Apz);this.Fi(0,0,0,this.It,this.J4,0,FE,FV);this.Fi(0,Ais/2,Ait/2,Adf
/2,Adf/2,JJ,JJ+180,Apy);}else{this.Fi(0,Ai8/2,0,AdG/2,AdG/2,180,0,Apz);this.Fi(0
,0,0,this.It,this.J4,0,FE,FV);this.Fi(0,Ais/2,Ait/2,Adf/2,Adf/2,JJ,JJ-180,Apy);}
this.VT(0);return;}if(this.Rd===2){this.Jy(0,(FV*2)+1);this.Jy(1,0);this.Fi(0,0,
0,this.It,this.J4,0,FE,FV);this.Fi(0,0,0,0,0,this.NV,this.NV-FE,FV);this.VT(0);return;
}if(this.Rd===4){var Ow=this.It;var LL=Math.sqrt(Ow*Ow);var Tr=((LL*0.25)|0)+3;this.
Jy(0,((FV*2)+Tr)+2);this.Jy(1,0);if(FE>=0){this.Fi(0,0,0,this.It,this.J4,0,FE,FV
);this.Fi(0,0,0,0,0,this.NV,this.NV-FE,FV);this.Fi(0,Ow/2,0,LL/2,LL/2,180,360,Tr
);}else{this.Fi(0,0,0,this.It,this.J4,0,FE,FV);this.Fi(0,0,0,0,0,this.NV,this.NV-
FE,FV);this.Fi(0,Ow/2,0,LL/2,LL/2,180,0,Tr);}this.VT(0);return;}if(this.Rd===5){
var JJ=FE;var sin=Math.sin(JJ*A.k$);var cos=Math.cos(JJ*A.k$);var Ow=this.It*cos;
var AiP=this.J4*sin;var LL=Math.sqrt((Ow*Ow)+(AiP*AiP));var Tr=((LL*0.25)|0)+3;this.
Jy(0,((FV*2)+Tr)+2);this.Jy(1,0);if(FE>=0){this.Fi(0,0,0,this.It,this.J4,0,FE,FV
);this.Fi(0,Ow/2,AiP/2,LL/2,LL/2,JJ,JJ+180,Tr);this.Fi(0,0,0,0,0,this.NV,this.NV-
FE,FV);}else{this.Fi(0,0,0,this.It,this.J4,0,FE,FV);this.Fi(0,Ow/2,AiP/2,LL/2,LL
/2,JJ,JJ-180,Tr);this.Fi(0,0,0,0,0,this.NV,this.NV-FE,FV);}this.VT(0);return;}if(
this.Rd===3){var JJ=FE;var Bzy=Math.sin(JJ*A.k$);var Bzt=Math.cos(JJ*A.k$);var Ai8=
this.It;var Ais=this.It*Bzt;var Ait=this.J4*Bzy;var AdG=Math.sqrt(Ai8*Ai8);var Adf=
Math.sqrt((Ais*Ais)+(Ait*Ait));var Apz=((AdG*0.25)|0)+3;var Apy=((Adf*0.25)|0)+3;
this.Jy(0,(((FV*2)+Apz)+Apy)+4);this.Jy(1,0);if(FE>=0){this.Fi(0,0,0,this.It,this.
J4,0,FE,FV);this.Fi(0,Ais/2,Ait/2,Adf/2,Adf/2,JJ,JJ+180,Apy);this.Fi(0,0,0,0,0,this.
NV,this.NV-FE,FV);this.Fi(0,Ai8/2,0,AdG/2,AdG/2,180,360,Apz);}else{this.Fi(0,0,0
,this.It,this.J4,0,FE,FV);this.Fi(0,Ais/2,Ait/2,Adf/2,Adf/2,JJ,JJ-180,Apy);this.
Fi(0,0,0,0,0,this.NV,this.NV-FE,FV);this.Fi(0,Ai8/2,0,AdG/2,AdG/2,180,0,Apz);}this.
VT(0);return;}},BmI:function(E){if(E===this.NV)return;this.NV=E;if((this.It>0)&&(
this.J4>0))A.pe([this,this.Ajb],this);},BnY:function(E){if((E===this.It)&&(E===this.
J4))return;this.It=E;this.J4=E;if(!!this.NV)A.pe([this,this.Ajb],this);},Bn9:function(
E){if(E===this.Rd)return;this.Rd=E;if((!!this.NV&&(this.It>0))&&(this.J4>0))A.pe([
this,this.Ajb],this);},_Init:function(aArg){C.Hz._Init.call(this,aArg);this.__proto__=
C.AMN;},_className:"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMN.__proto__=C.Hz;};C._ReInit=function(
){};C.DI=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */