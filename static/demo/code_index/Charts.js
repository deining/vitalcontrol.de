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
var Cg=[10,10];var BD=[80,50];var E6=[0,0,360,240];var Hr=[0,0,370,270];var I0=[0
,0,260,240];
C.A6i={Ah:null,P7:0,P8:0,_Init:function(aArg){this.__proto__=C.A6i;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DS={EZ:null,Arn:null,Px:null,Background:null,Aro:0xFFFFFFFF,Arp:3,AmL:0xFFFFFFFF
,AmM:0,Abi:A.wf,Asi:Cg,A5R:0xFF000000,ADJ:0xFF6E0E0C,AHm:0xFF6E0E0C,OL:BD,AqG:0,
Kr:function(C1,aClip,aOffset,Ck,aBlend){var B;var XN=0;var XO=0;var AAY=0;var AAZ=
0;var RI=this.M[0]+aOffset[0];var RJ=this.M[1]+aOffset[1];var Ao6=this.AmL;var Apt=
this.Aro;var App=this.ADJ;var Ap9=this.AHm;var AlT=this.Arp/2;var RH=this.AmM/2;
var Kk=(((Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kk<256){Ao6=(
Ao6&0x00FFFFFF)|((((((Ao6>>24)&0xFF)*Kk)>>8)&0xFF)<<24);Apt=(Apt&0x00FFFFFF)|((((((
Apt>>24)&0xFF)*Kk)>>8)&0xFF)<<24);App=(App&0x00FFFFFF)|((((((App>>24)&0xFF)*Kk)>>
8)&0xFF)<<24);Ap9=(Ap9&0x00FFFFFF)|((((((Ap9>>24)&0xFF)*Kk)>>8)&0xFF)<<24);}A.Core.
P.Kr.call(this,C1,aClip,aOffset,Ck,aBlend);if(((this.ADJ>>24)&0xFF)>0){var Di;for(
Di=this.Abi[1]+RJ;Di>=RJ;Di=Di-this.OL[1])C1.Au8(aClip,[RI,Di],[RI+((B=this.M)[2
]-B[0]),Di],App,App,aBlend);for(Di=(this.Abi[1]+RJ)+this.OL[1];Di<(RJ+((B=this.M
)[3]-B[1]));Di=Di+this.OL[1])C1.Au8(aClip,[RI,Di],[RI+((B=this.M)[2]-B[0]),Di],App
,App,aBlend);}if(((this.AHm>>24)&0xFF)>0){var Ep;for(Ep=this.Abi[0]+RI;Ep>=RI;Ep=
Ep-this.OL[0])C1.Au8(aClip,[Ep,RJ],[Ep,RJ+((B=this.M)[3]-B[1])],Ap9,Ap9,aBlend);
for(Ep=(this.Abi[0]+RI)+this.OL[0];Ep<(RI+((B=this.M)[2]-B[0]));Ep=Ep+this.OL[0]
)C1.Au8(aClip,[Ep,RJ],[Ep,RJ+((B=this.M)[3]-B[1])],Ap9,Ap9,aBlend);}if(!this.EZ)
return;var JF=this.EZ.AlK;if(!!JF){XN=(RI+this.Abi[0])+(JF.P7*this.Asi[0]);XO=(RJ+
this.Abi[1])+(JF.P8*this.Asi[1]);JF=JF.Ah;}while(!!JF){AAY=(RI+this.Abi[0])+(JF.
P7*this.Asi[0]);AAZ=(RJ+this.Abi[1])+(JF.P8*this.Asi[1]);var Kd=AAY-XN;var Ke=AAZ-
XO;var I5=Math.sqrt((Kd*Kd)+(Ke*Ke));if(!!I5){Kd=Kd/I5;Ke=Ke/I5;}if(!!this.Arn)C1.
AhR(aClip,this.Arn,0,XN-(Ke*AlT),XO+(Kd*AlT),1,XN+(Ke*AlT),XO-(Kd*AlT),1,AAY+(Ke
*AlT),AAZ-(Kd*AlT),1,AAY-(Ke*AlT),AAZ+(Kd*AlT),1,[0,0,this.Arn.FrameSize[0],this.
Arn.FrameSize[1]],Apt,Apt,Apt,Apt,aBlend,true);if((this.AmM>0)&&!!this.Px)C1.AhR(
aClip,this.Px,this.AqG,XN-RH,XO-RH,1,XN+RH,XO-RH,1,XN+RH,XO+RH,1,XN-RH,XO+RH,1,[
0,0,this.Px.FrameSize[0],this.Px.FrameSize[1]],Ao6,Ao6,Ao6,Ao6,aBlend,true);XN=AAY;
XO=AAZ;JF=JF.Ah;}if((this.AmM>0)&&!!this.Px)C1.AhR(aClip,this.Px,this.AqG,XN-RH,
XO-RH,1,XN+RH,XO-RH,1,XN+RH,XO+RH,1,XN-RH,XO+RH,1,[0,0,this.Px.FrameSize[0],this.
Px.FrameSize[1]],this.AmL,this.AmL,this.AmL,this.AmL,aBlend,true);},AeZ:function(
E){var B;this.EZ=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATu:function(
E){var B;if(E===this.Aro)return;this.Aro=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATv:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arp=E;this.Bi([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmN:function(E){var B;if(E===this.AmL)return;
this.AmL=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATj:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmM=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmJ:
function(E){var B;if(A.aaX(E,this.Abi))return;this.Abi=E;this.Bi([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bn3:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asi))return;this.Asi=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bmx:function(E){if(E===this.A5R)return;this.A5R=E;this.Background.L(E);
},Bnk:function(E){var B;if(E===this.ADJ)return;this.ADJ=E;this.Bi([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Boo:function(E){var B;if(E===this.AHm)return;this.AHm=E;
this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnA:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OL))return;this.OL=E;this.Bi([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATh:function(E){var B;if(E===this.Px)return;this.
Px=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATi:function(E){var B;if(E<0)
E=0;this.AqG=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DS;this.H(E6);this.Background.A1(0x3F);this.Background.H(Hr);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arn=A.aaL(C.ARJ);this.Px=
A.aaL(C.ACQ);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arn)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Px)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACx={AlK:null,AAo:
null,A0:0,AEs:10,Yp:function(){this.AlK=null;this.AAo=null;this.A0=0;},Aqe:function(
aX,aY){var JF=null;if((this.AEs>0)&&(this.A0===this.AEs)){JF=this.AlK;this.AlK=JF.
Ah;JF.Ah=null;this.A0=this.A0-1;}else JF=A._NewObject(C.A6i,0);JF.P7=aX;JF.P8=aY;
if(!this.AlK){this.AlK=JF;this.AAo=JF;this.A0=1;}else{this.AAo.Ah=JF;this.AAo=JF;
this.A0=this.A0+1;}},AwW:function(E){if(E<1)E=1;this.AEs=E;},_Init:function(aArg
){this.__proto__=C.ACx;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SS={WW:null,Agr:null,N$:null,AGl:270,AGF:1,Kr:function(C1,aClip,aOffset
,Ck,aBlend){var Vu;var Bdy;Vu=0;Bdy=this.AGl;while(Vu<0)Vu=Vu+360;while(Vu>=360)
Vu=Vu-360;var RI=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RJ=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kr.call(this,C1,aClip,aOffset,Ck,aBlend);if(!!this.
N$&&(this.N$.AHb>0)){var Hi=this.N$.K4;while(!!Hi){var FE=(Hi.A6/this.N$.AHb)*Bdy;
this.BdE(C1,aClip,RI,RJ,Vu,FE,this.AGF,0,Hi.AQ,Ck,aBlend);Vu=Vu+FE;if(Vu>=360)Vu=
Vu-360;Hi=Hi.Ah;}}else this.BdE(C1,aClip,RI,RJ,Vu,this.AGl,this.AGF,0,0xFF800000
,Ck,aBlend);},Bn2:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGl)return;
this.AGl=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Boc:function(E){var B;if(
E===this.WW)return;this.WW=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Boa:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGF)return;this.AGF=E;this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BdE:function(C1,aClip,aX,aY,aStartAngle
,Xq,Alo,A1i,aColor,Ck,aBlend){var B;var JP;var JG;var Agk;var Agl;var Agm;var Agn;
var Bf9;var Bf_;var Al6;var Al7;var LI;var B4=aColor;var Kk=(((Ck+1)*this.G9)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kk<256)B4=(B4&0x00FFFFFF)|((((((B4>>24
)&0xFF)*Kk)>>8)&0xFF)<<24);if(!this.WW)return;var BZ=this.WW.FrameSize[0];var BL=
this.WW.FrameSize[1];var I7=0;if(Xq>=360){aStartAngle=0;Xq=360;}if(A1i>0){var BdA=
aStartAngle+(Xq/2);JP=Math.sin(BdA*A.k$);JG=Math.cos(BdA*A.k$);aX=aX+((A1i*JP)|0
);aY=aY-((A1i*JG)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I7=I7+90;
}if(!this.Agr||!A.aaX(this.Agr.FrameSize,this.WW.FrameSize)){this.Agr=A._NewObject(
A.Graphics.Canvas,0);this.Agr.ArR(this.WW.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xq)<90)){JP=Math.sin(Xq*A.k$);JG=Math.cos(Xq*A.k$);Agk=(-BZ*JG)+(BL*JP);Agl=(-BL
*JG)-(BZ*JP);Agm=BL*JP;Agn=-BL*JG;Al6=-BZ*JG;Al7=-BZ*JP;this.Agr.Avl([0,0,BZ,BL]
,[0,0,this.Agr.FrameSize[0],this.Agr.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agr.AhR([0,0,BZ,BL],this.WW,0,Agk,Agl+BL,1,Agm,Agn+BL,1,
0,BL,1,Al6,Al7+BL,1,[0,0,BZ,BL],B4,B4,B4,B4,true,true);JP=Math.sin((aStartAngle+
I7)*A.k$)*Alo;JG=Math.cos((aStartAngle+I7)*A.k$)*Alo;Agk=BL*JP;Agl=-BL*JG;Agm=(BZ
*JG)+(BL*JP);Agn=(-BL*JG)+(BZ*JP);Bf9=BZ*JG;Bf_=BZ*JP;C1.AhR(aClip,this.Agr,0,Agk+
aX,Agl+aY,1,Agm+aX,Agn+aY,1,Bf9+aX,Bf_+aY,1,aX,aY,1,[0,0,BZ,BL],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JP=Math.sin(((90+I7)+
aStartAngle)*A.k$)*Alo;JG=Math.cos(((90+I7)+aStartAngle)*A.k$)*Alo;Agk=(-BZ*JG)+(
BL*JP);Agl=(-BL*JG)-(BZ*JP);Agm=BL*JP;Agn=-BL*JG;Al6=-BZ*JG;Al7=-BZ*JP;if(!I7)LI=[
aX,-10000,10000,aY];else if(I7===90)LI=[aX,aY,10000,10000];else if(I7===180)LI=[-
10000,aY,aX,10000];else LI=[-10000,-10000,aX,aY];C1.AhR(A.lb(aClip,LI),this.WW,0
,Agk+aX,Agl+aY,1,Agm+aX,Agn+aY,1,aX,aY,1,Al6+aX,Al7+aY,1,[0,0,BZ,BL],B4,B4,B4,B4
,aBlend,true);I7=I7+90;if(I7>=360)I7=I7-360;Xq=Xq-(90-aStartAngle);}while(Xq>=90
){JP=Math.sin((90+I7)*A.k$)*Alo;JG=Math.cos((90+I7)*A.k$)*Alo;Agk=(-BZ*JG)+(BL*JP
);Agl=(-BL*JG)-(BZ*JP);Agm=BL*JP;Agn=-BL*JG;Al6=-BZ*JG;Al7=-BZ*JP;if(!I7)LI=[aX,-
10000,10000,aY];else if(I7===90)LI=[aX,aY,10000,10000];else if(I7===180)LI=[-10000
,aY,aX,10000];else LI=[-10000,-10000,aX,aY];C1.AhR(A.lb(aClip,LI),this.WW,0,Agk+
aX,Agl+aY,1,Agm+aX,Agn+aY,1,aX,aY,1,Al6+aX,Al7+aY,1,[0,0,BZ,BL],B4,B4,B4,B4,aBlend
,true);I7=I7+90;if(I7>=360)I7=I7-360;Xq=Xq-90;}JP=Math.sin((Xq+I7)*A.k$)*Alo;JG=
Math.cos((Xq+I7)*A.k$)*Alo;Agk=(-BZ*JG)+(BL*JP);Agl=(-BL*JG)-(BZ*JP);Agm=BL*JP;Agn=-
BL*JG;Al6=-BZ*JG;Al7=-BZ*JP;if(!I7)LI=[aX,-10000,10000,aY];else if(I7===90)LI=[aX
,aY,10000,10000];else if(I7===180)LI=[-10000,aY,aX,10000];else LI=[-10000,-10000
,aX,aY];C1.AhR(A.lb(aClip,LI),this.WW,0,Agk+aX,Agl+aY,1,Agm+aX,Agn+aY,1,aX,aY,1,
Al6+aX,Al7+aY,1,[0,0,BZ,BL],B4,B4,B4,B4,aBlend,true);}},Acb:function(E){var B;this.
N$=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SS;this.H(I0);this.WW=A.aaL(C.
AUa);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WW)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AUa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A6:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUC={K4:null,M4:null,A0:10,AHb:0,OA:function(A9,aColor){var Hi;
Hi=A._NewObject(C.Record,0);Hi.A6=A9;Hi.AQ=aColor;if(!this.K4){this.K4=Hi;this.M4=
Hi;this.A0=1;}else{this.M4.Ah=Hi;this.M4=Hi;this.A0=this.A0+1;}this.AHb=this.AHb+
A9;},_Init:function(aArg){this.__proto__=C.AUC;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AUb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DS.__proto__=A.Core.P;C.SS.__proto__=A.Core.P;};C._ReInit=function(
){};C.DJ=function(D){var B;if((B=C.ARJ[0]._this)&&(B._cycle!=D))B._Done(C.ARJ[0].
_this=null);if((B=C.AUa[0]._this)&&(B._cycle!=D))B._Done(C.AUa[0]._this=null);if((
B=C.AUb[0]._this)&&(B._cycle!=D))B._Done(C.AUb[0]._this=null);if((B=C.ACQ[0]._this
)&&(B._cycle!=D))B._Done(C.ACQ[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */