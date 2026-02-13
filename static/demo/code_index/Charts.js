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
);if(index.acv)throw new Error("The unit file 'Charts.js' included twice!");index.
acv=(function(){var A=index;var C={};
var Cg=[10,10];var BF=[80,50];var E7=[0,0,360,240];var Hr=[0,0,370,270];var I1=[0
,0,260,240];
C.A6m={Ah:null,P9:0,P_:0,_Init:function(aArg){this.__proto__=C.A6m;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DS={E0:null,Art:null,PA:null,Background:null,Aru:0xFFFFFFFF,Arv:3,AmQ:0xFFFFFFFF
,AmR:0,Abl:A.wf,Asm:Cg,A5V:0xFF000000,ADJ:0xFF6E0E0C,AHn:0xFF6E0E0C,ON:BF,AqM:0,
Ks:function(C2,aClip,aOffset,Ck,aBlend){var B;var XP=0;var XQ=0;var AAY=0;var AAZ=
0;var RK=this.M[0]+aOffset[0];var RL=this.M[1]+aOffset[1];var Apa=this.AmQ;var Apz=
this.Aru;var Apv=this.ADJ;var Aqd=this.AHn;var AlX=this.Arv/2;var RJ=this.AmR/2;
var Kl=(((Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kl<256){Apa=(
Apa&0x00FFFFFF)|((((((Apa>>24)&0xFF)*Kl)>>8)&0xFF)<<24);Apz=(Apz&0x00FFFFFF)|((((((
Apz>>24)&0xFF)*Kl)>>8)&0xFF)<<24);Apv=(Apv&0x00FFFFFF)|((((((Apv>>24)&0xFF)*Kl)>>
8)&0xFF)<<24);Aqd=(Aqd&0x00FFFFFF)|((((((Aqd>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}A.Core.
P.Ks.call(this,C2,aClip,aOffset,Ck,aBlend);if(((this.ADJ>>24)&0xFF)>0){var Di;for(
Di=this.Abl[1]+RL;Di>=RL;Di=Di-this.ON[1])C2.Ava(aClip,[RK,Di],[RK+((B=this.M)[2
]-B[0]),Di],Apv,Apv,aBlend);for(Di=(this.Abl[1]+RL)+this.ON[1];Di<(RL+((B=this.M
)[3]-B[1]));Di=Di+this.ON[1])C2.Ava(aClip,[RK,Di],[RK+((B=this.M)[2]-B[0]),Di],Apv
,Apv,aBlend);}if(((this.AHn>>24)&0xFF)>0){var Eq;for(Eq=this.Abl[0]+RK;Eq>=RK;Eq=
Eq-this.ON[0])C2.Ava(aClip,[Eq,RL],[Eq,RL+((B=this.M)[3]-B[1])],Aqd,Aqd,aBlend);
for(Eq=(this.Abl[0]+RK)+this.ON[0];Eq<(RK+((B=this.M)[2]-B[0]));Eq=Eq+this.ON[0]
)C2.Ava(aClip,[Eq,RL],[Eq,RL+((B=this.M)[3]-B[1])],Aqd,Aqd,aBlend);}if(!this.E0)
return;var JI=this.E0.AlO;if(!!JI){XP=(RK+this.Abl[0])+(JI.P9*this.Asm[0]);XQ=(RL+
this.Abl[1])+(JI.P_*this.Asm[1]);JI=JI.Ah;}while(!!JI){AAY=(RK+this.Abl[0])+(JI.
P9*this.Asm[0]);AAZ=(RL+this.Abl[1])+(JI.P_*this.Asm[1]);var Ke=AAY-XP;var Kf=AAZ-
XQ;var I6=Math.sqrt((Ke*Ke)+(Kf*Kf));if(!!I6){Ke=Ke/I6;Kf=Kf/I6;}if(!!this.Art)C2.
AhW(aClip,this.Art,0,XP-(Kf*AlX),XQ+(Ke*AlX),1,XP+(Kf*AlX),XQ-(Ke*AlX),1,AAY+(Kf
*AlX),AAZ-(Ke*AlX),1,AAY-(Kf*AlX),AAZ+(Ke*AlX),1,[0,0,this.Art.FrameSize[0],this.
Art.FrameSize[1]],Apz,Apz,Apz,Apz,aBlend,true);if((this.AmR>0)&&!!this.PA)C2.AhW(
aClip,this.PA,this.AqM,XP-RJ,XQ-RJ,1,XP+RJ,XQ-RJ,1,XP+RJ,XQ+RJ,1,XP-RJ,XQ+RJ,1,[
0,0,this.PA.FrameSize[0],this.PA.FrameSize[1]],Apa,Apa,Apa,Apa,aBlend,true);XP=AAY;
XQ=AAZ;JI=JI.Ah;}if((this.AmR>0)&&!!this.PA)C2.AhW(aClip,this.PA,this.AqM,XP-RJ,
XQ-RJ,1,XP+RJ,XQ-RJ,1,XP+RJ,XQ+RJ,1,XP-RJ,XQ+RJ,1,[0,0,this.PA.FrameSize[0],this.
PA.FrameSize[1]],this.AmQ,this.AmQ,this.AmQ,this.AmQ,aBlend,true);},Ae6:function(
E){var B;this.E0=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATy:function(
E){var B;if(E===this.Aru)return;this.Aru=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATz:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arv=E;this.Bi([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmR:function(E){var B;if(E===this.AmQ)return;
this.AmQ=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATn:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmR=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmN:
function(E){var B;if(A.aaX(E,this.Abl))return;this.Abl=E;this.Bi([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bn7:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asm))return;this.Asm=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},BmB:function(E){if(E===this.A5V)return;this.A5V=E;this.Background.L(E);
},Bno:function(E){var B;if(E===this.ADJ)return;this.ADJ=E;this.Bi([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bos:function(E){var B;if(E===this.AHn)return;this.AHn=E;
this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnG:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.ON))return;this.ON=E;this.Bi([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATl:function(E){var B;if(E===this.PA)return;this.
PA=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATm:function(E){var B;if(E<0)
E=0;this.AqM=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DS;this.H(E7);this.Background.A1(0x3F);this.Background.H(Hr);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Art=A.aaL(C.ARN);this.PA=
A.aaL(C.ACQ);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.E0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Art)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.PA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACx={AlO:null,AAp:
null,A0:0,AEs:10,Yr:function(){this.AlO=null;this.AAp=null;this.A0=0;},Aqk:function(
aX,aY){var JI=null;if((this.AEs>0)&&(this.A0===this.AEs)){JI=this.AlO;this.AlO=JI.
Ah;JI.Ah=null;this.A0=this.A0-1;}else JI=A._NewObject(C.A6m,0);JI.P9=aX;JI.P_=aY;
if(!this.AlO){this.AlO=JI;this.AAp=JI;this.A0=1;}else{this.AAp.Ah=JI;this.AAp=JI;
this.A0=this.A0+1;}},Aw0:function(E){if(E<1)E=1;this.AEs=E;},_Init:function(aArg
){this.__proto__=C.ACx;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlO)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SU={WY:null,Agw:null,Ob:null,AGl:270,AGG:1,Ks:function(C2,aClip,aOffset
,Ck,aBlend){var Vw;var BdD;Vw=0;BdD=this.AGl;while(Vw<0)Vw=Vw+360;while(Vw>=360)
Vw=Vw-360;var RK=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RL=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Ks.call(this,C2,aClip,aOffset,Ck,aBlend);if(!!this.
Ob&&(this.Ob.AHc>0)){var Hi=this.Ob.K6;while(!!Hi){var FF=(Hi.A6/this.Ob.AHc)*BdD;
this.BdJ(C2,aClip,RK,RL,Vw,FF,this.AGG,0,Hi.AR,Ck,aBlend);Vw=Vw+FF;if(Vw>=360)Vw=
Vw-360;Hi=Hi.Ah;}}else this.BdJ(C2,aClip,RK,RL,Vw,this.AGl,this.AGG,0,0xFF800000
,Ck,aBlend);},Bn6:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGl)return;
this.AGl=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bog:function(E){var B;if(
E===this.WY)return;this.WY=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Boe:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGG)return;this.AGG=E;this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BdJ:function(C2,aClip,aX,aY,aStartAngle
,Xs,Als,A1m,aColor,Ck,aBlend){var B;var JS;var JJ;var Agp;var Agq;var Agr;var Ags;
var Bgc;var Bgd;var Al$;var Ama;var LL;var B5=aColor;var Kl=(((Ck+1)*this.G9)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kl<256)B5=(B5&0x00FFFFFF)|((((((B5>>24
)&0xFF)*Kl)>>8)&0xFF)<<24);if(!this.WY)return;var B0=this.WY.FrameSize[0];var BM=
this.WY.FrameSize[1];var I8=0;if(Xs>=360){aStartAngle=0;Xs=360;}if(A1m>0){var BdF=
aStartAngle+(Xs/2);JS=Math.sin(BdF*A.k$);JJ=Math.cos(BdF*A.k$);aX=aX+((A1m*JS)|0
);aY=aY-((A1m*JJ)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I8=I8+90;
}if(!this.Agw||!A.aaX(this.Agw.FrameSize,this.WY.FrameSize)){this.Agw=A._NewObject(
A.Graphics.Canvas,0);this.Agw.ArV(this.WY.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xs)<90)){JS=Math.sin(Xs*A.k$);JJ=Math.cos(Xs*A.k$);Agp=(-B0*JJ)+(BM*JS);Agq=(-BM
*JJ)-(B0*JS);Agr=BM*JS;Ags=-BM*JJ;Al$=-B0*JJ;Ama=-B0*JS;this.Agw.Avp([0,0,B0,BM]
,[0,0,this.Agw.FrameSize[0],this.Agw.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agw.AhW([0,0,B0,BM],this.WY,0,Agp,Agq+BM,1,Agr,Ags+BM,1,
0,BM,1,Al$,Ama+BM,1,[0,0,B0,BM],B5,B5,B5,B5,true,true);JS=Math.sin((aStartAngle+
I8)*A.k$)*Als;JJ=Math.cos((aStartAngle+I8)*A.k$)*Als;Agp=BM*JS;Agq=-BM*JJ;Agr=(B0
*JJ)+(BM*JS);Ags=(-BM*JJ)+(B0*JS);Bgc=B0*JJ;Bgd=B0*JS;C2.AhW(aClip,this.Agw,0,Agp+
aX,Agq+aY,1,Agr+aX,Ags+aY,1,Bgc+aX,Bgd+aY,1,aX,aY,1,[0,0,B0,BM],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JS=Math.sin(((90+I8)+
aStartAngle)*A.k$)*Als;JJ=Math.cos(((90+I8)+aStartAngle)*A.k$)*Als;Agp=(-B0*JJ)+(
BM*JS);Agq=(-BM*JJ)-(B0*JS);Agr=BM*JS;Ags=-BM*JJ;Al$=-B0*JJ;Ama=-B0*JS;if(!I8)LL=[
aX,-10000,10000,aY];else if(I8===90)LL=[aX,aY,10000,10000];else if(I8===180)LL=[-
10000,aY,aX,10000];else LL=[-10000,-10000,aX,aY];C2.AhW(A.lb(aClip,LL),this.WY,0
,Agp+aX,Agq+aY,1,Agr+aX,Ags+aY,1,aX,aY,1,Al$+aX,Ama+aY,1,[0,0,B0,BM],B5,B5,B5,B5
,aBlend,true);I8=I8+90;if(I8>=360)I8=I8-360;Xs=Xs-(90-aStartAngle);}while(Xs>=90
){JS=Math.sin((90+I8)*A.k$)*Als;JJ=Math.cos((90+I8)*A.k$)*Als;Agp=(-B0*JJ)+(BM*JS
);Agq=(-BM*JJ)-(B0*JS);Agr=BM*JS;Ags=-BM*JJ;Al$=-B0*JJ;Ama=-B0*JS;if(!I8)LL=[aX,-
10000,10000,aY];else if(I8===90)LL=[aX,aY,10000,10000];else if(I8===180)LL=[-10000
,aY,aX,10000];else LL=[-10000,-10000,aX,aY];C2.AhW(A.lb(aClip,LL),this.WY,0,Agp+
aX,Agq+aY,1,Agr+aX,Ags+aY,1,aX,aY,1,Al$+aX,Ama+aY,1,[0,0,B0,BM],B5,B5,B5,B5,aBlend
,true);I8=I8+90;if(I8>=360)I8=I8-360;Xs=Xs-90;}JS=Math.sin((Xs+I8)*A.k$)*Als;JJ=
Math.cos((Xs+I8)*A.k$)*Als;Agp=(-B0*JJ)+(BM*JS);Agq=(-BM*JJ)-(B0*JS);Agr=BM*JS;Ags=-
BM*JJ;Al$=-B0*JJ;Ama=-B0*JS;if(!I8)LL=[aX,-10000,10000,aY];else if(I8===90)LL=[aX
,aY,10000,10000];else if(I8===180)LL=[-10000,aY,aX,10000];else LL=[-10000,-10000
,aX,aY];C2.AhW(A.lb(aClip,LL),this.WY,0,Agp+aX,Agq+aY,1,Agr+aX,Ags+aY,1,aX,aY,1,
Al$+aX,Ama+aY,1,[0,0,B0,BM],B5,B5,B5,B5,aBlend,true);}},Ace:function(E){var B;this.
Ob=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SU;this.H(I1);this.WY=A.aaL(C.
AUe);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ob)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AUe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A6:0,AR:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUG={K6:null,M6:null,A0:10,AHc:0,OC:function(A9,aColor){var Hi;
Hi=A._NewObject(C.Record,0);Hi.A6=A9;Hi.AR=aColor;if(!this.K6){this.K6=Hi;this.M6=
Hi;this.A0=1;}else{this.M6.Ah=Hi;this.M6=Hi;this.A0=this.A0+1;}this.AHc=this.AHc+
A9;},_Init:function(aArg){this.__proto__=C.AUG;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AUf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DS.__proto__=A.Core.P;C.SU.__proto__=A.Core.P;};C._ReInit=function(
){};C.DJ=function(D){var B;if((B=C.ARN[0]._this)&&(B._cycle!=D))B._Done(C.ARN[0].
_this=null);if((B=C.AUe[0]._this)&&(B._cycle!=D))B._Done(C.AUe[0]._this=null);if((
B=C.AUf[0]._this)&&(B._cycle!=D))B._Done(C.AUf[0]._this=null);if((B=C.ACQ[0]._this
)&&(B._cycle!=D))B._Done(C.ACQ[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */