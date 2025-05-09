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
var E8=[0,0,0,0];var Hs="No graphics engine bitmap attached to this canvas";var I0=
"The canvas is already initialized with a graphics engine bitmap";var Iw="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O$="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Qb="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Qc=[1,1];var CR=[2,2];var Fe="Missing matrices to interpolate";
C.Canvas={C2:null,AEN:null,QQ:A.wg,PB:0,Azo:false,Lh:function(){if(this.Azo)this.
DetachBitmap();},Init:function(aArg){this.N6=true;},ArY:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cf;if(A.aaX(E,this.FrameSize))return;if(this.Azo)throw new Error(BD);
this.FrameSize=E;this.VJ=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cf;this.FrameDelay=0;this.NoOfFrames=1;}this.QQ=[].concat(
Cf,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.PB;for(this.PB=this.NoOfFrames-
1;this.PB>=0;this.PB--)this.Avq(this.QQ,this.QQ,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.PB=dstFrameNr;}}if(!(((B=this.QQ)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEN)?B[1].call(B[0],
this):null;this.QQ=E8;}},DetachBitmap:function(){if(!this.Azo)throw new Error(Hs
);this.bitmap=null;this.Azo=false;this.FrameSize=Cf;this.FrameDelay=0;this.NoOfFrames=
1;this.VJ=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I0);if(!aBitmap)return this;this.bitmap=aBitmap;this.Azo=true;var noOfFrames=
1;var frameSize=Cf;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VJ=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BiW:function(aClip,AoG,Bcl,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoG){AoG.Aje();attrSet=AoG.attrSet;}if(
!!Bcl)attrString=Bcl.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.PB;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6I:function(
aClip,AfN,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1w,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfN||!AfN.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1w===1)orient=90;else if(A1w===2)orient=180;else if(A1w===
3)orient=270;var dstFrameNo=this.PB;var dstBitmap=this.bitmap;var srcFont=AfN.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BiY:function(aClip
,aBitmap,aFrameNr,aDstRect,Aty,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Aty)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.PB;var srcRect=[].concat(
Cf,aBitmap.FrameSize);var left=((Aty&0x1)===0x1);var top=((Aty&0x2)===0x2);var right=((
Aty&0x4)===0x4);var bottom=((Aty&0x8)===0x8);var interior=((Aty&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hq:function(aClip
,AoQ,aDstRect,aFlipY,aOffset,aWidth,Bys,BxD,BxZ,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoQ||!AoQ.path)return;var style=0;switch(Bys){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BxD){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BxZ){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.PB;var path=AoQ.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhV:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
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
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bpj:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O$);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.PB;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A6i:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.PB;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aer:function(aClip,AoQ,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BxH){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoQ||!AoQ.path)return;var nonZeroWinding=BxH===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.PB;var path=AoQ.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BiZ:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.PB;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avq:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.PB;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bi1:function(aClip,aDstPos1,aDstPos2,Byy,Byz,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agv=Byy;var Agw=Byz;var AdC=aDstPos1;
var AdD=aDstPos2;if(A.aaX(AdC,AdD))return;if(Agv<=1)Agv=1;if(Agw<=1)Agw=1;var AiE=
Agv/2;var AiF=Agw/2;var Apq=AdC[0];var Apr=AdC[1];var Aps=AdD[0];var Apt=AdD[1];
var Ke=Aps-Apq;var Kf=Apt-Apr;var I5=Math.sqrt((Ke*Ke)+(Kf*Kf));if(((Agv>4096)||(
Agw>4096))||(I5>4096)){A.ab5("%s",Qb);return;}Ke=Ke/I5;Kf=Kf/I5;var x1=Apq+(Kf*AiE
);var y1=Apr-(Ke*AiE);var x2=Aps+(Kf*AiF);var y2=Apt-(Ke*AiF);var x3=Aps-(Kf*AiF
);var y3=Apt+(Ke*AiF);var x4=Apq-(Kf*AiE);var y4=Apr+(Ke*AiE);var Bf2=A.aaL(A.aci.
As4);var srcRect=[].concat(Qc,A.abe(Bf2.FrameSize,CR));var dstBitmap=this.bitmap;
var dstFrameNo=this.PB;var srcBitmap=Bf2.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Avb:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.PB;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lh();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEN)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax9={Wn:1,Wo:0,Y8:0,Y9:
0,Wp:0,Wq:1,Y_:0,Y$:0,Q1:0,Q2:0,Za:1,Wr:0,Uf:0,Ug:0,Zb:0,Ws:1,UZ:0,P$:0,P_:0,AgZ:
0,AlV:true,ACk:function(aX,aY){var Vz=((aX*this.Q1)+(aY*this.Q2))+this.Wr;var BZ=((
aX*this.Uf)+(aY*this.Ug))+this.Ws;if(!!BZ&&(BZ!==1))Vz=Vz/BZ;this.UZ=Vz;return true;
},Afd:function(aX,aY){var AtX=this.AgZ;if(AtX<0)return false;var Ep=((aX*this.Wn
)+(aY*this.Wo))+this.Y9;var Di=((aX*this.Wp)+(aY*this.Wq))+this.Y$;var Vz=((aX*this.
Q1)+(aY*this.Q2))+this.Wr;var BZ=((aX*this.Uf)+(aY*this.Ug))+this.Ws;var AA$=1;if(
!!BZ&&(BZ!==1)){Ep=Ep/BZ;Di=Di/BZ;Vz=Vz/BZ;}if(AtX!==-Vz)AA$=1/(Vz+AtX);if(!!AtX
)AA$=AA$*AtX;this.P_=Ep*AA$;this.P$=Di*AA$;this.UZ=Vz+AtX;return true;},Bj9:function(
Hc,Pe,Qh){if(!Hc||!Pe)throw new Error(Fe);this.Wn=Hc.Wn+((Pe.Wn-Hc.Wn)*Qh);this.
Wo=Hc.Wo+((Pe.Wo-Hc.Wo)*Qh);this.Y8=Hc.Y8+((Pe.Y8-Hc.Y8)*Qh);this.Y9=Hc.Y9+((Pe.
Y9-Hc.Y9)*Qh);this.Wp=Hc.Wp+((Pe.Wp-Hc.Wp)*Qh);this.Wq=Hc.Wq+((Pe.Wq-Hc.Wq)*Qh);
this.Y_=Hc.Y_+((Pe.Y_-Hc.Y_)*Qh);this.Y$=Hc.Y$+((Pe.Y$-Hc.Y$)*Qh);this.Q1=Hc.Q1+((
Pe.Q1-Hc.Q1)*Qh);this.Q2=Hc.Q2+((Pe.Q2-Hc.Q2)*Qh);this.Za=Hc.Za+((Pe.Za-Hc.Za)*Qh
);this.Wr=Hc.Wr+((Pe.Wr-Hc.Wr)*Qh);this.Uf=Hc.Uf+((Pe.Uf-Hc.Uf)*Qh);this.Ug=Hc.Ug+((
Pe.Ug-Hc.Ug)*Qh);this.Zb=Hc.Zb+((Pe.Zb-Hc.Zb)*Qh);this.Ws=Hc.Ws+((Pe.Ws-Hc.Ws)*Qh
);this.AgZ=Hc.AgZ+((Pe.AgZ-Hc.AgZ)*Qh);this.AlV=false;return this;},Afj:function(
AJn,AJo,AJp){this.Wn=this.Wn*AJn;this.Wo=this.Wo*AJo;this.Y8=this.Y8*AJp;this.Wp=
this.Wp*AJn;this.Wq=this.Wq*AJo;this.Y_=this.Y_*AJp;this.Q1=this.Q1*AJn;this.Q2=
this.Q2*AJo;this.Za=this.Za*AJp;this.Uf=this.Uf*AJn;this.Ug=this.Ug*AJo;this.Zb=
this.Zb*AJp;this.AlV=false;return this;},BqB:function(AJf,AJg,AJh){this.Y9=((this.
Y9+(this.Wn*AJf))+(this.Wo*AJg))+(this.Y8*AJh);this.Y$=((this.Y$+(this.Wp*AJf))+(
this.Wq*AJg))+(this.Y_*AJh);this.Wr=((this.Wr+(this.Q1*AJf))+(this.Q2*AJg))+(this.
Za*AJh);this.Ws=((this.Ws+(this.Uf*AJf))+(this.Ug*AJg))+(this.Zb*AJh);this.AlV=false;
return this;},AEb:function(){return this.AlV||((((((((((((((((this.Wn===1)&&!this.
Wo)&&!this.Y8)&&!this.Y9)&&!this.Wp)&&(this.Wq===1))&&!this.Y_)&&!this.Y$)&&!this.
Q1)&&!this.Q2)&&(this.Za===1))&&!this.Wr)&&!this.Uf)&&!this.Ug)&&!this.Zb)&&(this.
Ws===1));},AN1:function(Aib,Aie,Aic,Aif,AoY,AoZ,Aid,Aig){var AzP=Aic-AoY;var AzR=
Aif-AoZ;var AzQ=Aid-AoY;var AzS=Aig-AoZ;var ABt=((Aib-Aic)+AoY)-Aid;var ABu=((Aie-
Aif)+AoZ)-Aig;var Apa=(AzP*AzS)-(AzR*AzQ);if(!Apa)return null;this.Q1=((ABt*AzS)-(
ABu*AzQ))/Apa;this.Q2=((AzP*ABu)-(AzR*ABt))/Apa;this.Za=0;this.Wr=1;this.Wn=(Aic-
Aib)+(this.Q1*Aic);this.Wo=(Aid-Aib)+(this.Q2*Aid);this.Y8=0;this.Y9=Aib;this.Wp=(
Aif-Aie)+(this.Q1*Aif);this.Wq=(Aig-Aie)+(this.Q2*Aig);this.Y_=0;this.Y$=Aie;this.
Uf=0;this.Ug=0;this.Zb=0;this.Ws=1;this.AlV=false;return this;},BhS:function(Mc){
if(!Mc)return this;this.Wn=Mc.Wn;this.Wo=Mc.Wo;this.Y8=Mc.Y8;this.Y9=Mc.Y9;this.
Wp=Mc.Wp;this.Wq=Mc.Wq;this.Y_=Mc.Y_;this.Y$=Mc.Y$;this.Q1=Mc.Q1;this.Q2=Mc.Q2;this.
Za=Mc.Za;this.Wr=Mc.Wr;this.Uf=Mc.Uf;this.Ug=Mc.Ug;this.Zb=Mc.Zb;this.Ws=Mc.Ws;this.
AlV=Mc.AlV;this.AgZ=Mc.AgZ;return this;},A75:function(){this.Wn=1;this.Wo=0;this.
Y8=0;this.Y9=0;this.Wp=0;this.Wq=1;this.Y_=0;this.Y$=0;this.Q1=0;this.Q2=0;this.
Za=1;this.Wr=0;this.Uf=0;this.Ug=0;this.Zb=0;this.Ws=1;this.AlV=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax9;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7N={Bd7:1,Bd8:0,Bd9:0,Bd_:0,Bd$:1,Bea:0,Beb:0,Bec:0,Bed:1,P$:0,P_:0,A2Y:false
,Afd:function(Fg){if(!this.A2Y)return false;var A5a=Fg[0];var A5c=Fg[1];var BDm=((
A5a*this.Bd7)+(A5c*this.Bd8))+this.Bd9;var BDn=((A5a*this.Bd_)+(A5c*this.Bd$))+this.
Bea;var A4m=((A5a*this.Beb)+(A5c*this.Bec))+this.Bed;if(!!A4m){this.P_=BDm/A4m;this.
P$=BDn/A4m;return true;}return false;},AN1:function(Aib,Aie,Aic,Aif,AoY,AoZ,Aid,
Aig){var AzP=Aic-AoY;var AzR=Aif-AoZ;var AzQ=Aid-AoY;var AzS=Aig-AoZ;var ABt=((Aib-
Aic)+AoY)-Aid;var ABu=((Aie-Aif)+AoZ)-Aig;var Apa=(AzP*AzS)-(AzR*AzQ);this.A2Y=false;
if(!Apa)return;var AiG=((ABt*AzS)-(ABu*AzQ))/Apa;var BL=((AzP*ABu)-(AzR*ABt))/Apa;
var a=(Aic-Aib)+(AiG*Aic);var RC=(Aid-Aib)+(BL*Aid);var B4=Aib;var d=(Aif-Aie)+(
AiG*Aif);var AJ$=(Aig-Aie)+(BL*Aig);var LP=Aie;this.Bd7=AJ$-(LP*BL);this.Bd8=(B4
*BL)-RC;this.Bd9=(RC*LP)-(B4*AJ$);this.Bd_=(LP*AiG)-d;this.Bd$=a-(B4*AiG);this.Bea=(
B4*d)-(a*LP);this.Beb=(d*BL)-(AJ$*AiG);this.Bec=(RC*AiG)-(a*BL);this.Bed=(a*AJ$)-(
RC*d);this.A2Y=true;},_Init:function(aArg){this.__proto__=C.A7N;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5L={C6:A.wf,attrString:null,Lh:function(){this.A6A(
);},A6A:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C6=Cf;},Aj6:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BjS:function(
){return this.C6;},BoG:function(AoG,aString,aWidth,aEnableBidiText){this.A6A();var
attrSet=null;var handle=null;var s=Cf;if(!!AoG){AoG.Aje();attrSet=AoG.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C6=s;},_Init:function(
aArg){this.__proto__=C.A5L;A.h7++;},_Done:function(){this.Lh();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aik:null,AfY:null,Aij:null,Apn:A.abi(4,null,null),RE:A.abi(10,null,
null),A63:null,A5Y:null,attrSet:null,AzA:A.abi(10,0,{0:0xFF000000}),Lh:function(
){this.AJ9();},Init:function(aArg){if(!!this.RE.Get(0)&&this.RE.Get(0).N6)A.zV([
this,this.AAY],this.RE.Get(0),0);},AJ9:function(){var handle=this.attrSet;if(!handle
)return;A.aaj(handle);this.attrSet=null;},Aje:function(){if(!!this.attrSet)return;
var handle=null;var noOfColors=this.BjJ();var noOfBitmaps=this.BjI();var noOfFonts=
this.BjK();handle=A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(
!handle)return;var AKE=this.Aij;var Ads=this.AfY;var AKF=this.Aik;var inx;var lnx;
for(inx=0;inx<10;inx=inx+1){var entry=this.AzA.Get(inx);if(entry!==0x00000000)A.
abF(handle,inx,entry);}while(!!AKE){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKE.KK.
Get(lnx);if(entry!==0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKE=AKE.Ah;
}for(inx=0;inx<10;inx=inx+1){var entry=this.RE.Get(inx);if(!!entry){entry.Update(
);var bitmap=entry.bitmap;A.abE(handle,inx,bitmap);}}while(!!Ads){for(lnx=0;lnx<
20;lnx=lnx+1){var entry=Ads.KK.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx+lnx,bitmap);}}inx=inx+20;Ads=Ads.Ah;}for(inx=0;inx<4;inx=
inx+1){var entry=this.Apn.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,
inx,font);}}while(!!AKF){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKF.KK.Get(lnx);if(
!!entry){var font=entry.font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKF=AKF.Ah;
}},AAY:function(G){var handle=this.attrSet;var Ads=this.AfY;var inx;var lnx;for(
inx=0;inx<10;inx=inx+1)if(!!this.RE.Get(inx)&&this.RE.Get(inx).N6){var bitmap=this.
RE.Get(inx).bitmap;A.abE(handle,inx,bitmap);}while(!!Ads){for(lnx=0;lnx<20;lnx=lnx+
1)if(!!Ads.KK.Get(lnx)&&Ads.KK.Get(lnx).N6){var bitmap=Ads.KK.Get(lnx).bitmap;A.
abE(handle,inx+lnx,bitmap);}inx=inx+20;Ads=Ads.Ah;}A.we(this,1);},Bnb:function(E
){this.AU0(3,E);},A_z:function(E){this.AU0(1,E);},Ahu:function(E){this.AU0(0,E);
},A99:function(E){this.Bpu(0,E);},BmC:function(E){this.AGS(3,E);},A_b:function(E
){this.AGS(2,E);},A_a:function(E){this.AGS(1,E);},Ahr:function(E){this.AGS(0,E);
},AU0:function(aFontNo,AfN){var Adn=aFontNo;var H0=false;if(Adn<0)return;if(Adn<
4){H0=this.Apn.Get(Adn)!==AfN;this.Apn.Set(Adn,AfN);}else{var Bz=this.Aik;Adn=Adn-
4;while(!!Bz&&(Adn>=20)){Bz=Bz.Ah;Adn=Adn-20;}if(!!Bz){H0=Bz.KK.Get(Adn)!==AfN;Bz.
KK.Set(Adn,AfN);}}if(H0&&!!this.attrSet){var handle=this.attrSet;var font=null;if(
!!AfN)font=AfN.font;A.abG(handle,aFontNo,font);}if(H0)A.we(this,1);},BpA:function(
Xv){var H0=false;if(Xv<4)Xv=4;if(Xv>256)Xv=256;Xv=Xv-4;if((Xv>0)&&!this.Aik){this.
Aik=A._NewObject(C.AB_,0);H0=true;}if(!Xv&&!!this.Aik){this.Aik=null;H0=true;}var
Bz=this.Aik;while(Xv>0){if((Xv>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB_,0);H0=true;
}Xv=Xv-20;if(Xv>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;H0=true;}if(H0){this.AJ9(
);A.we(this,1);}},BjK:function(){var CB=4;var Bz=this.Aik;while(!!Bz){CB=CB+20;Bz=
Bz.Ah;}return CB;},Bpu:function(aBitmapNo,aBitmap){var Qm=aBitmapNo;var H0=false;
if(Qm<0)return;if(Qm<10){H0=this.RE.Get(Qm)!==aBitmap;if(!!this.RE.Get(Qm)&&this.
RE.Get(Qm).N6)A.z9([this,this.AAY],this.RE.Get(Qm),0);this.RE.Set(Qm,aBitmap);if(
!!aBitmap&&aBitmap.N6)A.zV([this,this.AAY],aBitmap,0);}else{var Bz=this.AfY;Qm=Qm-
10;while(!!Bz&&(Qm>=20)){Bz=Bz.Ah;Qm=Qm-20;}if(!!Bz){H0=Bz.KK.Get(Qm)!==aBitmap;
if(!!Bz.KK.Get(Qm)&&Bz.KK.Get(Qm).N6)A.z9([this,this.AAY],Bz.KK.Get(Qm),0);Bz.KK.
Set(Qm,aBitmap);if(!!aBitmap&&aBitmap.N6)A.zV([this,this.AAY],aBitmap,0);}}if(H0&&
!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap){aBitmap.Update(
);bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo,bitmap);}if(H0)A.we(this,1);},Bpy:
function(Xt){var H0=false;if(Xt<10)Xt=10;if(Xt>256)Xt=256;Xt=Xt-10;if((Xt>0)&&!this.
AfY){this.AfY=A._NewObject(C.AB8,0);H0=true;}if(!Xt&&!!this.AfY){this.AfY=null;H0=
true;}var Bz=this.AfY;while(Xt>0){if((Xt>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB8,0
);H0=true;}Xt=Xt-20;if(Xt>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;H0=true;}if(H0
){this.AJ9();A.we(this,1);}},BjI:function(){var CB=10;var Bz=this.AfY;while(!!Bz
){CB=CB+20;Bz=Bz.Ah;}return CB;},AGS:function(aColorNo,aColor){var Adc=aColorNo;
var H0=false;if(Adc<0)return;if(Adc<10){H0=this.AzA.Get(Adc)!==aColor;this.AzA.Set(
Adc,aColor);}else{var Bz=this.Aij;Adc=Adc-10;while(!!Bz&&(Adc>=20)){Bz=Bz.Ah;Adc=
Adc-20;}if(!!Bz){H0=Bz.KK.Get(Adc)!==aColor;Bz.KK.Set(Adc,aColor);}}if(H0&&!!this.
attrSet){var handle=this.attrSet;A.abF(handle,aColorNo,aColor);}if(H0)A.we(this,
0);},Bpz:function(Xu){var H0=false;if(Xu<10)Xu=10;if(Xu>256)Xu=256;Xu=Xu-10;if((
Xu>0)&&!this.Aij){this.Aij=A._NewObject(C.AB9,0);H0=true;}if(!Xu&&!!this.Aij){this.
Aij=null;H0=true;}var Bz=this.Aij;while(Xu>0){if((Xu>20)&&!Bz.Ah){Bz.Ah=A._NewObject(
C.AB9,0);H0=true;}Xu=Xu-20;if(Xu>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;H0=true;
}if(H0){this.AJ9();A.we(this,1);}},BjJ:function(){var CB=10;var Bz=this.Aij;while(
!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},_Init:function(aArg){(this.Apn=[]).__proto__=
C.AttrSet.Apn;(this.RE=[]).__proto__=C.AttrSet.RE;(this.AzA=[]).__proto__=C.AttrSet.
AzA;this.__proto__=C.AttrSet;this.Apn.Set(0,A.aaL(A.aci.ACQ));this.RE.Set(0,A.aaL(
A.aci.TW));this.A63=A.aaL(A.aci.ACQ);this.A5Y=A.aaL(A.aci.TW);this.Init(aArg);A.
h7++;},_Done:function(){this.Lh();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Aik)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aij)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aa6(this.Apn,D);A.aa6(this.RE,D);if((B=this.A63)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A5Y)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.AB_={Ah:null,KK:A.abi(20,null,null),_Init:function(aArg){(
this.KK=[]).__proto__=C.AB_.KK;this.__proto__=C.AB_;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KK,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AB8={Ah:null,KK:A.abi(20,null,null),_Init:function(aArg){(this.KK=[]).__proto__=
C.AB8.KK;this.__proto__=C.AB8;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.KK,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.AB9={Ah:
null,KK:A.abi(20,0,null),_Init:function(aArg){(this.KK=[]).__proto__=C.AB9.KK;this.
__proto__=C.AB9;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.HA={path:null,Lh:function(){if(!this.path)return;var
handle=this.path;A.e6(handle);this.path=null;},AdA:function(G){A.we(this,0);},Fk:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.pe([this,this.AdA],this);var handle=this.path;var result=0;{result=A.dU(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A5n:function(aSubPathNo,aX,aY){A.pe([this,this.AdA],this);var
handle=this.path;var result=0;result=A.m5(handle,aSubPathNo,aX,aY);return result;
},VY:function(aSubPathNo){A.pe([this,this.AdA],this);var handle=this.path;A.jU(handle
,aSubPathNo);},VO:function(aSubPathNo,aX,aY){A.pe([this,this.AdA],this);var handle=
this.path;A.rt(handle,aSubPathNo,aX,aY);},Jz:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AxF(1);A.pe([this,this.AdA],this);var handle=this.
path;var result=false;result=A.gM(handle,aSubPathNo,aMaxNoOfEdges);return result;
},BjL:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.aax(handle);return result;},AxF:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.BjL()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.e6(handle);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;
A.pe([this,this.AdA],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.HA;A.h7++;},_Done:function(){this.Lh();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Avc={Left:0x1,ZZ:0x2
,Right:0x4,A5Z:0x8,BEY:0x10};C.BEE={BEs:0,BFw:1};C.BFE={BDN:0,BFi:1,Bpe:2};C.BFD={
BEG:0,BGn:1,Bpe:2,Ax2:3};C.BDF={BDE:0,BGi:1,BFI:2,BFJ:3,BFL:4,BFK:5};C.AMX={NV:360
,J4:0,Iu:0,Rf:0,Ajf:function(G){var B;var FF=this.NV;var FV;if((FF>=360)||(FF<=-
360))FF=360;this.AxF(2);{var Az=Math.max(this.Iu,this.J4);FV=1+((90/((Math.acos(
1-(0.5/(Az+1)))*A.rE)|0))|0);FV*=4;if(FF<360)FV=((FF*FV)/360)|0;FV=Math.max(FV,-
FV,1);}if(((!FF||!this.Iu)||!this.J4)||(((((this.Rf===2)||(this.Rf===3))||(this.
Rf===4))||(this.Rf===5))&&((0>=this.Iu)||(0>=this.J4)))){this.Jz(0,0);this.Jz(1,
0);return;}if(FF===360){this.Jz(0,FV+1);this.Jz(1,0);this.Fk(0,0,0,this.Iu,this.
J4,0,360,FV);this.VY(0);return;}if(!this.Rf){this.Jz(0,FV+1);this.Jz(1,0);this.Fk(
0,0,0,this.Iu,this.J4,0,FF,FV);return;}if(this.Rf===1){this.Jz(0,FV+1);this.Jz(1
,0);this.Fk(0,0,0,this.Iu,this.J4,0,FF,FV);this.VY(0);return;}if(this.Rf===2){this.
Jz(0,FV+1);this.Jz(1,0);this.VO(0,0,0);this.Fk(0,0,0,this.Iu,this.J4,0,FF,FV);this.
VY(0);return;}if(this.Rf===4){var Ow=this.Iu;var LM=Math.sqrt(Ow*Ow);var Tv=((LM
*0.25)|0)+3;this.Jz(0,(FV+Tv)+2);this.Jz(1,0);this.VO(0,0,0);if(FF>=0)this.Fk(0,
Ow/2,0,LM/2,LM/2,180,360,Tv);else this.Fk(0,Ow/2,0,LM/2,LM/2,180,0,Tv);this.Fk(0
,0,0,this.Iu,this.J4,0,FF,FV);this.VY(0);return;}if(this.Rf===5){var JJ=FF;var Ow=
this.Iu*Math.cos(JJ*A.k$);var AiT=this.J4*Math.sin(JJ*A.k$);var LM=Math.sqrt((Ow
*Ow)+(AiT*AiT));var Tv=((LM*0.25)|0)+3;this.Jz(0,(FV+Tv)+2);this.Jz(1,0);this.VO(
0,0,0);this.Fk(0,0,0,this.Iu,this.J4,0,FF,FV);if(FF>=0)this.Fk(0,Ow/2,AiT/2,LM/2
,LM/2,JJ,JJ+180,Tv);else this.Fk(0,Ow/2,AiT/2,LM/2,LM/2,JJ,JJ-180,Tv);this.VY(0);
return;}if(this.Rf===3){var Aja=this.Iu;var AdJ=Math.sqrt(Aja*Aja);var JJ=FF;var
Aix=this.Iu*Math.cos(JJ*A.k$);var Aiy=this.J4*Math.sin(JJ*A.k$);var Adi=Math.sqrt((
Aix*Aix)+(Aiy*Aiy));var ApI=((AdJ*0.25)|0)+3;var ApH=((Adi*0.25)|0)+3;this.Jz(0,((
FV+ApI)+ApH)+10);this.Jz(1,0);this.VO(0,0,0);if(FF>=0){this.Fk(0,Aja/2,0,AdJ/2,AdJ
/2,180,360,ApI);this.Fk(0,0,0,this.Iu,this.J4,0,FF,FV);this.Fk(0,Aix/2,Aiy/2,Adi
/2,Adi/2,JJ,JJ+180,ApH);}else{this.Fk(0,Aja/2,0,AdJ/2,AdJ/2,180,0,ApI);this.Fk(0
,0,0,this.Iu,this.J4,0,FF,FV);this.Fk(0,Aix/2,Aiy/2,Adi/2,Adi/2,JJ,JJ-180,ApH);}
this.VY(0);return;}if(this.Rf===2){this.Jz(0,(FV*2)+1);this.Jz(1,0);this.Fk(0,0,
0,this.Iu,this.J4,0,FF,FV);this.Fk(0,0,0,0,0,this.NV,this.NV-FF,FV);this.VY(0);return;
}if(this.Rf===4){var Ow=this.Iu;var LM=Math.sqrt(Ow*Ow);var Tv=((LM*0.25)|0)+3;this.
Jz(0,((FV*2)+Tv)+2);this.Jz(1,0);if(FF>=0){this.Fk(0,0,0,this.Iu,this.J4,0,FF,FV
);this.Fk(0,0,0,0,0,this.NV,this.NV-FF,FV);this.Fk(0,Ow/2,0,LM/2,LM/2,180,360,Tv
);}else{this.Fk(0,0,0,this.Iu,this.J4,0,FF,FV);this.Fk(0,0,0,0,0,this.NV,this.NV-
FF,FV);this.Fk(0,Ow/2,0,LM/2,LM/2,180,0,Tv);}this.VY(0);return;}if(this.Rf===5){
var JJ=FF;var sin=Math.sin(JJ*A.k$);var cos=Math.cos(JJ*A.k$);var Ow=this.Iu*cos;
var AiT=this.J4*sin;var LM=Math.sqrt((Ow*Ow)+(AiT*AiT));var Tv=((LM*0.25)|0)+3;this.
Jz(0,((FV*2)+Tv)+2);this.Jz(1,0);if(FF>=0){this.Fk(0,0,0,this.Iu,this.J4,0,FF,FV
);this.Fk(0,Ow/2,AiT/2,LM/2,LM/2,JJ,JJ+180,Tv);this.Fk(0,0,0,0,0,this.NV,this.NV-
FF,FV);}else{this.Fk(0,0,0,this.Iu,this.J4,0,FF,FV);this.Fk(0,Ow/2,AiT/2,LM/2,LM
/2,JJ,JJ-180,Tv);this.Fk(0,0,0,0,0,this.NV,this.NV-FF,FV);}this.VY(0);return;}if(
this.Rf===3){var JJ=FF;var BzH=Math.sin(JJ*A.k$);var BzC=Math.cos(JJ*A.k$);var Aja=
this.Iu;var Aix=this.Iu*BzC;var Aiy=this.J4*BzH;var AdJ=Math.sqrt(Aja*Aja);var Adi=
Math.sqrt((Aix*Aix)+(Aiy*Aiy));var ApI=((AdJ*0.25)|0)+3;var ApH=((Adi*0.25)|0)+3;
this.Jz(0,(((FV*2)+ApI)+ApH)+4);this.Jz(1,0);if(FF>=0){this.Fk(0,0,0,this.Iu,this.
J4,0,FF,FV);this.Fk(0,Aix/2,Aiy/2,Adi/2,Adi/2,JJ,JJ+180,ApH);this.Fk(0,0,0,0,0,this.
NV,this.NV-FF,FV);this.Fk(0,Aja/2,0,AdJ/2,AdJ/2,180,360,ApI);}else{this.Fk(0,0,0
,this.Iu,this.J4,0,FF,FV);this.Fk(0,Aix/2,Aiy/2,Adi/2,Adi/2,JJ,JJ-180,ApH);this.
Fk(0,0,0,0,0,this.NV,this.NV-FF,FV);this.Fk(0,Aja/2,0,AdJ/2,AdJ/2,180,0,ApI);}this.
VY(0);return;}},BmP:function(E){if(E===this.NV)return;this.NV=E;if((this.Iu>0)&&(
this.J4>0))A.pe([this,this.Ajf],this);},Bn5:function(E){if((E===this.Iu)&&(E===this.
J4))return;this.Iu=E;this.J4=E;if(!!this.NV)A.pe([this,this.Ajf],this);},Boe:function(
E){if(E===this.Rf)return;this.Rf=E;if((!!this.NV&&(this.Iu>0))&&(this.J4>0))A.pe([
this,this.Ajf],this);},_Init:function(aArg){C.HA._Init.call(this,aArg);this.__proto__=
C.AMX;},_className:"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMX.__proto__=C.HA;};C._ReInit=function(
){};C.DI=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */