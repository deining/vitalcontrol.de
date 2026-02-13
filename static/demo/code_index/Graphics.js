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
var Cg=[0,0];var BF="Can not resize explicitly attached graphics engine bitmaps";
var E7=[0,0,0,0];var Hr="No graphics engine bitmap attached to this canvas";var I1=
"The canvas is already initialized with a graphics engine bitmap";var Iw="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O$="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Qa="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Qb=[1,1];var CJ=[2,2];var Fd="Missing matrices to interpolate";
C.Canvas={C3:null,AEK:null,QR:A.wg,PB:0,Azl:false,Lh:function(){if(this.Azl)this.
DetachBitmap();},Init:function(aArg){this.N8=true;},ArV:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cg;if(A.aaX(E,this.FrameSize))return;if(this.Azl)throw new Error(BF);
this.FrameSize=E;this.VK=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cg;this.FrameDelay=0;this.NoOfFrames=1;}this.QR=[].concat(
Cg,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.PB;for(this.PB=this.NoOfFrames-
1;this.PB>=0;this.PB--)this.Avp(this.QR,this.QR,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.PB=dstFrameNr;}}if(!(((B=this.QR)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEK)?B[1].call(B[0],
this):null;this.QR=E7;}},DetachBitmap:function(){if(!this.Azl)throw new Error(Hr
);this.bitmap=null;this.Azl=false;this.FrameSize=Cg;this.FrameDelay=0;this.NoOfFrames=
1;this.VK=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I1);if(!aBitmap)return this;this.bitmap=aBitmap;this.Azl=true;var noOfFrames=
1;var frameSize=Cg;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VK=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},Bi4:function(aClip,AoD,Bct,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoD){AoD.Aje();attrSet=AoD.attrSet;}if(
!!Bct)attrString=Bct.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.PB;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6P:function(
aClip,AfQ,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1y,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfQ||!AfQ.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1y===1)orient=90;else if(A1y===2)orient=180;else if(A1y===
3)orient=270;var dstFrameNo=this.PB;var dstBitmap=this.bitmap;var srcFont=AfQ.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Bi6:function(aClip
,aBitmap,aFrameNr,aDstRect,Aty,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Aty)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.PB;var srcRect=[].concat(
Cg,aBitmap.FrameSize);var left=((Aty&0x1)===0x1);var top=((Aty&0x2)===0x2);var right=((
Aty&0x4)===0x4);var bottom=((Aty&0x8)===0x8);var interior=((Aty&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hp:function(aClip
,AoO,aDstRect,aFlipY,aOffset,aWidth,ByA,BxN,Bx7,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoO||!AoO.path)return;var style=0;switch(ByA){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BxN){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bx7){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.PB;var path=AoO.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhW:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Iw);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.PB;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bpq:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O$);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.PB;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A6n:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.PB;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aev:function(aClip,AoO,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BxR){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoO||!AoO.path)return;var nonZeroWinding=BxR===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.PB;var path=AoO.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bi7:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.PB;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avp:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.PB;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bi9:function(aClip,aDstPos1,aDstPos2,ByG,ByH,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agx=ByG;var Agy=ByH;var AdG=aDstPos1;
var AdH=aDstPos2;if(A.aaX(AdG,AdH))return;if(Agx<=1)Agx=1;if(Agy<=1)Agy=1;var AiD=
Agx/2;var AiE=Agy/2;var Apo=AdG[0];var App=AdG[1];var Apq=AdH[0];var Apr=AdH[1];
var Ke=Apq-Apo;var Kf=Apr-App;var I6=Math.sqrt((Ke*Ke)+(Kf*Kf));if(((Agx>4096)||(
Agy>4096))||(I6>4096)){A.ab5("%s",Qa);return;}Ke=Ke/I6;Kf=Kf/I6;var x1=Apo+(Kf*AiD
);var y1=App-(Ke*AiD);var x2=Apq+(Kf*AiE);var y2=Apr-(Ke*AiE);var x3=Apq-(Kf*AiE
);var y3=Apr+(Ke*AiE);var x4=Apo-(Kf*AiD);var y4=App+(Ke*AiD);var Bf_=A.aaL(A.aci.
As1);var srcRect=[].concat(Qb,A.abe(Bf_.FrameSize,CJ));var dstBitmap=this.bitmap;
var dstFrameNo=this.PB;var srcBitmap=Bf_.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Ava:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.PB;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lh();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEK)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax9={Wm:1,Wn:0,Y$:0,Za:
0,Wo:0,Wp:1,Zb:0,Zc:0,Q2:0,Q3:0,Zd:1,Wq:0,Ue:0,Uf:0,Ze:0,Wr:1,UY:0,P_:0,P9:0,Ag0:
0,AlU:true,ACh:function(aX,aY){var VA=((aX*this.Q2)+(aY*this.Q3))+this.Wq;var B0=((
aX*this.Ue)+(aY*this.Uf))+this.Wr;if(!!B0&&(B0!==1))VA=VA/B0;this.UY=VA;return true;
},Afi:function(aX,aY){var AtX=this.Ag0;if(AtX<0)return false;var Eq=((aX*this.Wm
)+(aY*this.Wn))+this.Za;var Di=((aX*this.Wo)+(aY*this.Wp))+this.Zc;var VA=((aX*this.
Q2)+(aY*this.Q3))+this.Wq;var B0=((aX*this.Ue)+(aY*this.Uf))+this.Wr;var AA8=1;if(
!!B0&&(B0!==1)){Eq=Eq/B0;Di=Di/B0;VA=VA/B0;}if(AtX!==-VA)AA8=1/(VA+AtX);if(!!AtX
)AA8=AA8*AtX;this.P9=Eq*AA8;this.P_=Di*AA8;this.UY=VA+AtX;return true;},Bkg:function(
Hb,Pe,Qg){if(!Hb||!Pe)throw new Error(Fd);this.Wm=Hb.Wm+((Pe.Wm-Hb.Wm)*Qg);this.
Wn=Hb.Wn+((Pe.Wn-Hb.Wn)*Qg);this.Y$=Hb.Y$+((Pe.Y$-Hb.Y$)*Qg);this.Za=Hb.Za+((Pe.
Za-Hb.Za)*Qg);this.Wo=Hb.Wo+((Pe.Wo-Hb.Wo)*Qg);this.Wp=Hb.Wp+((Pe.Wp-Hb.Wp)*Qg);
this.Zb=Hb.Zb+((Pe.Zb-Hb.Zb)*Qg);this.Zc=Hb.Zc+((Pe.Zc-Hb.Zc)*Qg);this.Q2=Hb.Q2+((
Pe.Q2-Hb.Q2)*Qg);this.Q3=Hb.Q3+((Pe.Q3-Hb.Q3)*Qg);this.Zd=Hb.Zd+((Pe.Zd-Hb.Zd)*Qg
);this.Wq=Hb.Wq+((Pe.Wq-Hb.Wq)*Qg);this.Ue=Hb.Ue+((Pe.Ue-Hb.Ue)*Qg);this.Uf=Hb.Uf+((
Pe.Uf-Hb.Uf)*Qg);this.Ze=Hb.Ze+((Pe.Ze-Hb.Ze)*Qg);this.Wr=Hb.Wr+((Pe.Wr-Hb.Wr)*Qg
);this.Ag0=Hb.Ag0+((Pe.Ag0-Hb.Ag0)*Qg);this.AlU=false;return this;},Afn:function(
AJm,AJn,AJo){this.Wm=this.Wm*AJm;this.Wn=this.Wn*AJn;this.Y$=this.Y$*AJo;this.Wo=
this.Wo*AJm;this.Wp=this.Wp*AJn;this.Zb=this.Zb*AJo;this.Q2=this.Q2*AJm;this.Q3=
this.Q3*AJn;this.Zd=this.Zd*AJo;this.Ue=this.Ue*AJm;this.Uf=this.Uf*AJn;this.Ze=
this.Ze*AJo;this.AlU=false;return this;},BqI:function(AJd,AJe,AJf){this.Za=((this.
Za+(this.Wm*AJd))+(this.Wn*AJe))+(this.Y$*AJf);this.Zc=((this.Zc+(this.Wo*AJd))+(
this.Wp*AJe))+(this.Zb*AJf);this.Wq=((this.Wq+(this.Q2*AJd))+(this.Q3*AJe))+(this.
Zd*AJf);this.Wr=((this.Wr+(this.Ue*AJd))+(this.Uf*AJe))+(this.Ze*AJf);this.AlU=false;
return this;},AD_:function(){return this.AlU||((((((((((((((((this.Wm===1)&&!this.
Wn)&&!this.Y$)&&!this.Za)&&!this.Wo)&&(this.Wp===1))&&!this.Zb)&&!this.Zc)&&!this.
Q2)&&!this.Q3)&&(this.Zd===1))&&!this.Wq)&&!this.Ue)&&!this.Uf)&&!this.Ze)&&(this.
Wr===1));},ANZ:function(Aia,Aid,Aib,Aie,AoW,AoX,Aic,Aif){var AzM=Aib-AoW;var AzO=
Aie-AoX;var AzN=Aic-AoW;var AzP=Aif-AoX;var ABq=((Aia-Aib)+AoW)-Aic;var ABr=((Aid-
Aie)+AoX)-Aif;var Ao_=(AzM*AzP)-(AzO*AzN);if(!Ao_)return null;this.Q2=((ABq*AzP)-(
ABr*AzN))/Ao_;this.Q3=((AzM*ABr)-(AzO*ABq))/Ao_;this.Zd=0;this.Wq=1;this.Wm=(Aib-
Aia)+(this.Q2*Aib);this.Wn=(Aic-Aia)+(this.Q3*Aic);this.Y$=0;this.Za=Aia;this.Wo=(
Aie-Aid)+(this.Q2*Aie);this.Wp=(Aif-Aid)+(this.Q3*Aif);this.Zb=0;this.Zc=Aid;this.
Ue=0;this.Uf=0;this.Ze=0;this.Wr=1;this.AlU=false;return this;},Bh1:function(Md){
if(!Md)return this;this.Wm=Md.Wm;this.Wn=Md.Wn;this.Y$=Md.Y$;this.Za=Md.Za;this.
Wo=Md.Wo;this.Wp=Md.Wp;this.Zb=Md.Zb;this.Zc=Md.Zc;this.Q2=Md.Q2;this.Q3=Md.Q3;this.
Zd=Md.Zd;this.Wq=Md.Wq;this.Ue=Md.Ue;this.Uf=Md.Uf;this.Ze=Md.Ze;this.Wr=Md.Wr;this.
AlU=Md.AlU;this.Ag0=Md.Ag0;return this;},A8a:function(){this.Wm=1;this.Wn=0;this.
Y$=0;this.Za=0;this.Wo=0;this.Wp=1;this.Zb=0;this.Zc=0;this.Q2=0;this.Q3=0;this.
Zd=1;this.Wq=0;this.Ue=0;this.Uf=0;this.Ze=0;this.Wr=1;this.AlU=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax9;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7U={Bed:1,Bee:0,Bef:0,Beg:0,Beh:1,Bei:0,Bej:0,Bek:0,Bel:1,P_:0,P9:0,A22:false
,Afi:function(Ff){if(!this.A22)return false;var A5f=Ff[0];var A5h=Ff[1];var BDA=((
A5f*this.Bed)+(A5h*this.Bee))+this.Bef;var BDB=((A5f*this.Beg)+(A5h*this.Beh))+this.
Bei;var A4r=((A5f*this.Bej)+(A5h*this.Bek))+this.Bel;if(!!A4r){this.P9=BDA/A4r;this.
P_=BDB/A4r;return true;}return false;},ANZ:function(Aia,Aid,Aib,Aie,AoW,AoX,Aic,
Aif){var AzM=Aib-AoW;var AzO=Aie-AoX;var AzN=Aic-AoW;var AzP=Aif-AoX;var ABq=((Aia-
Aib)+AoW)-Aic;var ABr=((Aid-Aie)+AoX)-Aif;var Ao_=(AzM*AzP)-(AzO*AzN);this.A22=false;
if(!Ao_)return;var AiF=((ABq*AzP)-(ABr*AzN))/Ao_;var BM=((AzM*ABr)-(AzO*ABq))/Ao_;
var a=(Aib-Aia)+(AiF*Aib);var RD=(Aic-Aia)+(BM*Aic);var B5=Aia;var d=(Aie-Aid)+(
AiF*Aie);var AJ9=(Aif-Aid)+(BM*Aif);var LT=Aid;this.Bed=AJ9-(LT*BM);this.Bee=(B5
*BM)-RD;this.Bef=(RD*LT)-(B5*AJ9);this.Beg=(LT*AiF)-d;this.Beh=a-(B5*AiF);this.Bei=(
B5*d)-(a*LT);this.Bej=(d*BM)-(AJ9*AiF);this.Bek=(RD*AiF)-(a*BM);this.Bel=(a*AJ9)-(
RD*d);this.A22=true;},_Init:function(aArg){this.__proto__=C.A7U;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5Q={C7:A.wf,attrString:null,Lh:function(){this.A6H(
);},A6H:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C7=Cg;},Aj6:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},Bj1:function(
){return this.C7;},BoN:function(AoD,aString,aWidth,aEnableBidiText){this.A6H();var
attrSet=null;var handle=null;var s=Cg;if(!!AoD){AoD.Aje();attrSet=AoD.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C7=s;},_Init:function(
aArg){this.__proto__=C.A5Q;A.h7++;},_Done:function(){this.Lh();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aij:null,Af1:null,Aii:null,Apl:A.abi(4,null,null),RF:A.abi(10,null,
null),A6_:null,A53:null,attrSet:null,Azx:A.abi(10,0,{0:0xFF000000}),Lh:function(
){this.AJ7();},Init:function(aArg){if(!!this.RF.Get(0)&&this.RF.Get(0).N8)A.zV([
this,this.AAV],this.RF.Get(0),0);},AJ7:function(){var handle=this.attrSet;if(!handle
)return;A.aaj(handle);this.attrSet=null;},Aje:function(){if(!!this.attrSet)return;
var handle=null;var noOfColors=this.BjR();var noOfBitmaps=this.BjQ();var noOfFonts=
this.BjS();handle=A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(
!handle)return;var AKB=this.Aii;var Adw=this.Af1;var AKC=this.Aij;var inx;var lnx;
for(inx=0;inx<10;inx=inx+1){var entry=this.Azx.Get(inx);if(entry!==0x00000000)A.
abF(handle,inx,entry);}while(!!AKB){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKB.KL.
Get(lnx);if(entry!==0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKB=AKB.Ah;
}for(inx=0;inx<10;inx=inx+1){var entry=this.RF.Get(inx);if(!!entry){entry.Update(
);var bitmap=entry.bitmap;A.abE(handle,inx,bitmap);}}while(!!Adw){for(lnx=0;lnx<
20;lnx=lnx+1){var entry=Adw.KL.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx+lnx,bitmap);}}inx=inx+20;Adw=Adw.Ah;}for(inx=0;inx<4;inx=
inx+1){var entry=this.Apl.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,
inx,font);}}while(!!AKC){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKC.KL.Get(lnx);if(
!!entry){var font=entry.font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKC=AKC.Ah;
}},AAV:function(G){var handle=this.attrSet;var Adw=this.Af1;var inx;var lnx;for(
inx=0;inx<10;inx=inx+1)if(!!this.RF.Get(inx)&&this.RF.Get(inx).N8){var bitmap=this.
RF.Get(inx).bitmap;A.abE(handle,inx,bitmap);}while(!!Adw){for(lnx=0;lnx<20;lnx=lnx+
1)if(!!Adw.KL.Get(lnx)&&Adw.KL.Get(lnx).N8){var bitmap=Adw.KL.Get(lnx).bitmap;A.
abE(handle,inx+lnx,bitmap);}inx=inx+20;Adw=Adw.Ah;}A.we(this,1);},Bni:function(E
){this.AUZ(3,E);},A_H:function(E){this.AUZ(1,E);},Ahv:function(E){this.AUZ(0,E);
},A_f:function(E){this.BpB(0,E);},BmJ:function(E){this.AGN(3,E);},A_j:function(E
){this.AGN(2,E);},A_i:function(E){this.AGN(1,E);},Ahs:function(E){this.AGN(0,E);
},AUZ:function(aFontNo,AfQ){var Adr=aFontNo;var HZ=false;if(Adr<0)return;if(Adr<
4){HZ=this.Apl.Get(Adr)!==AfQ;this.Apl.Set(Adr,AfQ);}else{var BC=this.Aij;Adr=Adr-
4;while(!!BC&&(Adr>=20)){BC=BC.Ah;Adr=Adr-20;}if(!!BC){HZ=BC.KL.Get(Adr)!==AfQ;BC.
KL.Set(Adr,AfQ);}}if(HZ&&!!this.attrSet){var handle=this.attrSet;var font=null;if(
!!AfQ)font=AfQ.font;A.abG(handle,aFontNo,font);}if(HZ)A.we(this,1);},BpH:function(
Xx){var HZ=false;if(Xx<4)Xx=4;if(Xx>256)Xx=256;Xx=Xx-4;if((Xx>0)&&!this.Aij){this.
Aij=A._NewObject(C.AB7,0);HZ=true;}if(!Xx&&!!this.Aij){this.Aij=null;HZ=true;}var
BC=this.Aij;while(Xx>0){if((Xx>20)&&!BC.Ah){BC.Ah=A._NewObject(C.AB7,0);HZ=true;
}Xx=Xx-20;if(Xx>0)BC=BC.Ah;}if(!!BC&&!!BC.Ah){BC.Ah=null;HZ=true;}if(HZ){this.AJ7(
);A.we(this,1);}},BjS:function(){var CB=4;var BC=this.Aij;while(!!BC){CB=CB+20;BC=
BC.Ah;}return CB;},BpB:function(aBitmapNo,aBitmap){var Ql=aBitmapNo;var HZ=false;
if(Ql<0)return;if(Ql<10){HZ=this.RF.Get(Ql)!==aBitmap;if(!!this.RF.Get(Ql)&&this.
RF.Get(Ql).N8)A.z9([this,this.AAV],this.RF.Get(Ql),0);this.RF.Set(Ql,aBitmap);if(
!!aBitmap&&aBitmap.N8)A.zV([this,this.AAV],aBitmap,0);}else{var BC=this.Af1;Ql=Ql-
10;while(!!BC&&(Ql>=20)){BC=BC.Ah;Ql=Ql-20;}if(!!BC){HZ=BC.KL.Get(Ql)!==aBitmap;
if(!!BC.KL.Get(Ql)&&BC.KL.Get(Ql).N8)A.z9([this,this.AAV],BC.KL.Get(Ql),0);BC.KL.
Set(Ql,aBitmap);if(!!aBitmap&&aBitmap.N8)A.zV([this,this.AAV],aBitmap,0);}}if(HZ&&
!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap){aBitmap.Update(
);bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo,bitmap);}if(HZ)A.we(this,1);},BpF:
function(Xv){var HZ=false;if(Xv<10)Xv=10;if(Xv>256)Xv=256;Xv=Xv-10;if((Xv>0)&&!this.
Af1){this.Af1=A._NewObject(C.AB5,0);HZ=true;}if(!Xv&&!!this.Af1){this.Af1=null;HZ=
true;}var BC=this.Af1;while(Xv>0){if((Xv>20)&&!BC.Ah){BC.Ah=A._NewObject(C.AB5,0
);HZ=true;}Xv=Xv-20;if(Xv>0)BC=BC.Ah;}if(!!BC&&!!BC.Ah){BC.Ah=null;HZ=true;}if(HZ
){this.AJ7();A.we(this,1);}},BjQ:function(){var CB=10;var BC=this.Af1;while(!!BC
){CB=CB+20;BC=BC.Ah;}return CB;},AGN:function(aColorNo,aColor){var Adh=aColorNo;
var HZ=false;if(Adh<0)return;if(Adh<10){HZ=this.Azx.Get(Adh)!==aColor;this.Azx.Set(
Adh,aColor);}else{var BC=this.Aii;Adh=Adh-10;while(!!BC&&(Adh>=20)){BC=BC.Ah;Adh=
Adh-20;}if(!!BC){HZ=BC.KL.Get(Adh)!==aColor;BC.KL.Set(Adh,aColor);}}if(HZ&&!!this.
attrSet){var handle=this.attrSet;A.abF(handle,aColorNo,aColor);}if(HZ)A.we(this,
0);},BpG:function(Xw){var HZ=false;if(Xw<10)Xw=10;if(Xw>256)Xw=256;Xw=Xw-10;if((
Xw>0)&&!this.Aii){this.Aii=A._NewObject(C.AB6,0);HZ=true;}if(!Xw&&!!this.Aii){this.
Aii=null;HZ=true;}var BC=this.Aii;while(Xw>0){if((Xw>20)&&!BC.Ah){BC.Ah=A._NewObject(
C.AB6,0);HZ=true;}Xw=Xw-20;if(Xw>0)BC=BC.Ah;}if(!!BC&&!!BC.Ah){BC.Ah=null;HZ=true;
}if(HZ){this.AJ7();A.we(this,1);}},BjR:function(){var CB=10;var BC=this.Aii;while(
!!BC){CB=CB+20;BC=BC.Ah;}return CB;},_Init:function(aArg){(this.Apl=[]).__proto__=
C.AttrSet.Apl;(this.RF=[]).__proto__=C.AttrSet.RF;(this.Azx=[]).__proto__=C.AttrSet.
Azx;this.__proto__=C.AttrSet;this.Apl.Set(0,A.aaL(A.aci.ACN));this.RF.Set(0,A.aaL(
A.aci.TU));this.A6_=A.aaL(A.aci.ACN);this.A53=A.aaL(A.aci.TU);this.Init(aArg);A.
h7++;},_Done:function(){this.Lh();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Aij)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Af1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aii)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aa6(this.Apl,D);A.aa6(this.RF,D);if((B=this.A6_)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A53)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.AB7={Ah:null,KL:A.abi(20,null,null),_Init:function(aArg){(
this.KL=[]).__proto__=C.AB7.KL;this.__proto__=C.AB7;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KL,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AB5={Ah:null,KL:A.abi(20,null,null),_Init:function(aArg){(this.KL=[]).__proto__=
C.AB5.KL;this.__proto__=C.AB5;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.KL,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.AB6={Ah:
null,KL:A.abi(20,0,null),_Init:function(aArg){(this.KL=[]).__proto__=C.AB6.KL;this.
__proto__=C.AB6;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.HA={path:null,Lh:function(){if(!this.path)return;var
handle=this.path;A.e6(handle);this.path=null;},AdE:function(G){A.we(this,0);},Fj:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.pe([this,this.AdE],this);var handle=this.path;var result=0;{result=A.dU(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A5s:function(aSubPathNo,aX,aY){A.pe([this,this.AdE],this);var
handle=this.path;var result=0;result=A.m5(handle,aSubPathNo,aX,aY);return result;
},VZ:function(aSubPathNo){A.pe([this,this.AdE],this);var handle=this.path;A.jU(handle
,aSubPathNo);},VP:function(aSubPathNo,aX,aY){A.pe([this,this.AdE],this);var handle=
this.path;A.rt(handle,aSubPathNo,aX,aY);},JB:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AxG(1);A.pe([this,this.AdE],this);var handle=this.
path;var result=false;result=A.gM(handle,aSubPathNo,aMaxNoOfEdges);return result;
},BjT:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.aax(handle);return result;},AxG:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.BjT()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.e6(handle);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;
A.pe([this,this.AdE],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.HA;A.h7++;},_Done:function(){this.Lh();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Avb={Left:0x1,Z1:0x2
,Right:0x4,A54:0x8,BFa:0x10};C.BES={BEG:0,BFK:1};C.BFS={BD1:0,BFw:1,Bpl:2};C.BFR={
BEU:0,BGC:1,Bpl:2,Ax2:3};C.BDT={BDS:0,BGw:1,BFW:2,BFX:3,BFZ:4,BFY:5};C.AMU={NY:360
,J8:0,It:0,Rf:0,Ajf:function(G){var B;var FF=this.NY;var F0;if((FF>=360)||(FF<=-
360))FF=360;this.AxG(2);{var Az=Math.max(this.It,this.J8);F0=1+((90/((Math.acos(
1-(0.5/(Az+1)))*A.rE)|0))|0);F0*=4;if(FF<360)F0=((FF*F0)/360)|0;F0=Math.max(F0,-
F0,1);}if(((!FF||!this.It)||!this.J8)||(((((this.Rf===2)||(this.Rf===3))||(this.
Rf===4))||(this.Rf===5))&&((0>=this.It)||(0>=this.J8)))){this.JB(0,0);this.JB(1,
0);return;}if(FF===360){this.JB(0,F0+1);this.JB(1,0);this.Fj(0,0,0,this.It,this.
J8,0,360,F0);this.VZ(0);return;}if(!this.Rf){this.JB(0,F0+1);this.JB(1,0);this.Fj(
0,0,0,this.It,this.J8,0,FF,F0);return;}if(this.Rf===1){this.JB(0,F0+1);this.JB(1
,0);this.Fj(0,0,0,this.It,this.J8,0,FF,F0);this.VZ(0);return;}if(this.Rf===2){this.
JB(0,F0+1);this.JB(1,0);this.VP(0,0,0);this.Fj(0,0,0,this.It,this.J8,0,FF,F0);this.
VZ(0);return;}if(this.Rf===4){var Oy=this.It;var LP=Math.sqrt(Oy*Oy);var Tu=((LP
*0.25)|0)+3;this.JB(0,(F0+Tu)+2);this.JB(1,0);this.VP(0,0,0);if(FF>=0)this.Fj(0,
Oy/2,0,LP/2,LP/2,180,360,Tu);else this.Fj(0,Oy/2,0,LP/2,LP/2,180,0,Tu);this.Fj(0
,0,0,this.It,this.J8,0,FF,F0);this.VZ(0);return;}if(this.Rf===5){var JN=FF;var Oy=
this.It*Math.cos(JN*A.k$);var AiT=this.J8*Math.sin(JN*A.k$);var LP=Math.sqrt((Oy
*Oy)+(AiT*AiT));var Tu=((LP*0.25)|0)+3;this.JB(0,(F0+Tu)+2);this.JB(1,0);this.VP(
0,0,0);this.Fj(0,0,0,this.It,this.J8,0,FF,F0);if(FF>=0)this.Fj(0,Oy/2,AiT/2,LP/2
,LP/2,JN,JN+180,Tu);else this.Fj(0,Oy/2,AiT/2,LP/2,LP/2,JN,JN-180,Tu);this.VZ(0);
return;}if(this.Rf===3){var Aja=this.It;var AdN=Math.sqrt(Aja*Aja);var JN=FF;var
Aiw=this.It*Math.cos(JN*A.k$);var Aix=this.J8*Math.sin(JN*A.k$);var Adm=Math.sqrt((
Aiw*Aiw)+(Aix*Aix));var ApG=((AdN*0.25)|0)+3;var ApF=((Adm*0.25)|0)+3;this.JB(0,((
F0+ApG)+ApF)+10);this.JB(1,0);this.VP(0,0,0);if(FF>=0){this.Fj(0,Aja/2,0,AdN/2,AdN
/2,180,360,ApG);this.Fj(0,0,0,this.It,this.J8,0,FF,F0);this.Fj(0,Aiw/2,Aix/2,Adm
/2,Adm/2,JN,JN+180,ApF);}else{this.Fj(0,Aja/2,0,AdN/2,AdN/2,180,0,ApG);this.Fj(0
,0,0,this.It,this.J8,0,FF,F0);this.Fj(0,Aiw/2,Aix/2,Adm/2,Adm/2,JN,JN-180,ApF);}
this.VZ(0);return;}if(this.Rf===2){this.JB(0,(F0*2)+1);this.JB(1,0);this.Fj(0,0,
0,this.It,this.J8,0,FF,F0);this.Fj(0,0,0,0,0,this.NY,this.NY-FF,F0);this.VZ(0);return;
}if(this.Rf===4){var Oy=this.It;var LP=Math.sqrt(Oy*Oy);var Tu=((LP*0.25)|0)+3;this.
JB(0,((F0*2)+Tu)+2);this.JB(1,0);if(FF>=0){this.Fj(0,0,0,this.It,this.J8,0,FF,F0
);this.Fj(0,0,0,0,0,this.NY,this.NY-FF,F0);this.Fj(0,Oy/2,0,LP/2,LP/2,180,360,Tu
);}else{this.Fj(0,0,0,this.It,this.J8,0,FF,F0);this.Fj(0,0,0,0,0,this.NY,this.NY-
FF,F0);this.Fj(0,Oy/2,0,LP/2,LP/2,180,0,Tu);}this.VZ(0);return;}if(this.Rf===5){
var JN=FF;var sin=Math.sin(JN*A.k$);var cos=Math.cos(JN*A.k$);var Oy=this.It*cos;
var AiT=this.J8*sin;var LP=Math.sqrt((Oy*Oy)+(AiT*AiT));var Tu=((LP*0.25)|0)+3;this.
JB(0,((F0*2)+Tu)+2);this.JB(1,0);if(FF>=0){this.Fj(0,0,0,this.It,this.J8,0,FF,F0
);this.Fj(0,Oy/2,AiT/2,LP/2,LP/2,JN,JN+180,Tu);this.Fj(0,0,0,0,0,this.NY,this.NY-
FF,F0);}else{this.Fj(0,0,0,this.It,this.J8,0,FF,F0);this.Fj(0,Oy/2,AiT/2,LP/2,LP
/2,JN,JN-180,Tu);this.Fj(0,0,0,0,0,this.NY,this.NY-FF,F0);}this.VZ(0);return;}if(
this.Rf===3){var JN=FF;var BzO=Math.sin(JN*A.k$);var BzJ=Math.cos(JN*A.k$);var Aja=
this.It;var Aiw=this.It*BzJ;var Aix=this.J8*BzO;var AdN=Math.sqrt(Aja*Aja);var Adm=
Math.sqrt((Aiw*Aiw)+(Aix*Aix));var ApG=((AdN*0.25)|0)+3;var ApF=((Adm*0.25)|0)+3;
this.JB(0,(((F0*2)+ApG)+ApF)+4);this.JB(1,0);if(FF>=0){this.Fj(0,0,0,this.It,this.
J8,0,FF,F0);this.Fj(0,Aiw/2,Aix/2,Adm/2,Adm/2,JN,JN+180,ApF);this.Fj(0,0,0,0,0,this.
NY,this.NY-FF,F0);this.Fj(0,Aja/2,0,AdN/2,AdN/2,180,360,ApG);}else{this.Fj(0,0,0
,this.It,this.J8,0,FF,F0);this.Fj(0,Aiw/2,Aix/2,Adm/2,Adm/2,JN,JN-180,ApF);this.
Fj(0,0,0,0,0,this.NY,this.NY-FF,F0);this.Fj(0,Aja/2,0,AdN/2,AdN/2,180,0,ApG);}this.
VZ(0);return;}},BmW:function(E){if(E===this.NY)return;this.NY=E;if((this.It>0)&&(
this.J8>0))A.pe([this,this.Ajf],this);},Boa:function(E){if((E===this.It)&&(E===this.
J8))return;this.It=E;this.J8=E;if(!!this.NY)A.pe([this,this.Ajf],this);},Bol:function(
E){if(E===this.Rf)return;this.Rf=E;if((!!this.NY&&(this.It>0))&&(this.J8>0))A.pe([
this,this.Ajf],this);},_Init:function(aArg){C.HA._Init.call(this,aArg);this.__proto__=
C.AMU;},_className:"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMU.__proto__=C.HA;};C._ReInit=function(
){};C.DJ=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */