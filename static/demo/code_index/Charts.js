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
var Cf=[10,10];var BD=[80,50];var E6=[0,0,360,240];var Hq=[0,0,370,270];var I0=[0
,0,260,240];
C.A5$={Ah:null,P7:0,P8:0,_Init:function(aArg){this.__proto__=C.A5$;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arm:null,Py:null,Background:null,Arn:0xFFFFFFFF,Aro:3,AmK:0xFFFFFFFF
,AmL:0,Abe:A.wf,Ash:Cf,A5I:0xFF000000,ADH:0xFF6E0E0C,AHl:0xFF6E0E0C,OL:BD,AqF:0,
Kr:function(C0,aClip,aOffset,Cj,aBlend){var B;var XK=0;var XL=0;var AAW=0;var AAX=
0;var RG=this.M[0]+aOffset[0];var RH=this.M[1]+aOffset[1];var Ao5=this.AmK;var Aps=
this.Arn;var Apo=this.ADH;var Ap8=this.AHl;var AlS=this.Aro/2;var RF=this.AmL/2;
var Kk=(((Cj+1)*this.G8)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kk<256){Ao5=(
Ao5&0x00FFFFFF)|((((((Ao5>>24)&0xFF)*Kk)>>8)&0xFF)<<24);Aps=(Aps&0x00FFFFFF)|((((((
Aps>>24)&0xFF)*Kk)>>8)&0xFF)<<24);Apo=(Apo&0x00FFFFFF)|((((((Apo>>24)&0xFF)*Kk)>>
8)&0xFF)<<24);Ap8=(Ap8&0x00FFFFFF)|((((((Ap8>>24)&0xFF)*Kk)>>8)&0xFF)<<24);}A.Core.
P.Kr.call(this,C0,aClip,aOffset,Cj,aBlend);if(((this.ADH>>24)&0xFF)>0){var Dh;for(
Dh=this.Abe[1]+RH;Dh>=RH;Dh=Dh-this.OL[1])C0.Au4(aClip,[RG,Dh],[RG+((B=this.M)[2
]-B[0]),Dh],Apo,Apo,aBlend);for(Dh=(this.Abe[1]+RH)+this.OL[1];Dh<(RH+((B=this.M
)[3]-B[1]));Dh=Dh+this.OL[1])C0.Au4(aClip,[RG,Dh],[RG+((B=this.M)[2]-B[0]),Dh],Apo
,Apo,aBlend);}if(((this.AHl>>24)&0xFF)>0){var Ep;for(Ep=this.Abe[0]+RG;Ep>=RG;Ep=
Ep-this.OL[0])C0.Au4(aClip,[Ep,RH],[Ep,RH+((B=this.M)[3]-B[1])],Ap8,Ap8,aBlend);
for(Ep=(this.Abe[0]+RG)+this.OL[0];Ep<(RG+((B=this.M)[2]-B[0]));Ep=Ep+this.OL[0]
)C0.Au4(aClip,[Ep,RH],[Ep,RH+((B=this.M)[3]-B[1])],Ap8,Ap8,aBlend);}if(!this.EZ)
return;var JF=this.EZ.AlJ;if(!!JF){XK=(RG+this.Abe[0])+(JF.P7*this.Ash[0]);XL=(RH+
this.Abe[1])+(JF.P8*this.Ash[1]);JF=JF.Ah;}while(!!JF){AAW=(RG+this.Abe[0])+(JF.
P7*this.Ash[0]);AAX=(RH+this.Abe[1])+(JF.P8*this.Ash[1]);var Kd=AAW-XK;var Ke=AAX-
XL;var I5=Math.sqrt((Kd*Kd)+(Ke*Ke));if(!!I5){Kd=Kd/I5;Ke=Ke/I5;}if(!!this.Arm)C0.
AhQ(aClip,this.Arm,0,XK-(Ke*AlS),XL+(Kd*AlS),1,XK+(Ke*AlS),XL-(Kd*AlS),1,AAW+(Ke
*AlS),AAX-(Kd*AlS),1,AAW-(Ke*AlS),AAX+(Kd*AlS),1,[0,0,this.Arm.FrameSize[0],this.
Arm.FrameSize[1]],Aps,Aps,Aps,Aps,aBlend,true);if((this.AmL>0)&&!!this.Py)C0.AhQ(
aClip,this.Py,this.AqF,XK-RF,XL-RF,1,XK+RF,XL-RF,1,XK+RF,XL+RF,1,XK-RF,XL+RF,1,[
0,0,this.Py.FrameSize[0],this.Py.FrameSize[1]],Ao5,Ao5,Ao5,Ao5,aBlend,true);XK=AAW;
XL=AAX;JF=JF.Ah;}if((this.AmL>0)&&!!this.Py)C0.AhQ(aClip,this.Py,this.AqF,XK-RF,
XL-RF,1,XK+RF,XL-RF,1,XK+RF,XL+RF,1,XK-RF,XL+RF,1,[0,0,this.Py.FrameSize[0],this.
Py.FrameSize[1]],this.AmK,this.AmK,this.AmK,this.AmK,aBlend,true);},AeY:function(
E){var B;this.EZ=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATq:function(
E){var B;if(E===this.Arn)return;this.Arn=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATr:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Aro=E;this.Bi([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmD:function(E){var B;if(E===this.AmK)return;
this.AmK=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATf:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmL=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bmz:
function(E){var B;if(A.aaX(E,this.Abe))return;this.Abe=E;this.Bi([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BnT:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Ash))return;this.Ash=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bmn:function(E){if(E===this.A5I)return;this.A5I=E;this.Background.L(E);
},Bna:function(E){var B;if(E===this.ADH)return;this.ADH=E;this.Bi([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Boe:function(E){var B;if(E===this.AHl)return;this.AHl=E;
this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Anz:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OL))return;this.OL=E;this.Bi([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATd:function(E){var B;if(E===this.Py)return;this.
Py=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATe:function(E){var B;if(E<0)
E=0;this.AqF=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E6);this.Background.A1(0x3F);this.Background.H(Hq);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arm=A.aaL(C.ARF);this.Py=
A.aaL(C.ACO);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arm)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Py)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACv={AlJ:null,AAm:
null,A0:0,AEq:10,Ym:function(){this.AlJ=null;this.AAm=null;this.A0=0;},Aqd:function(
aX,aY){var JF=null;if((this.AEq>0)&&(this.A0===this.AEq)){JF=this.AlJ;this.AlJ=JF.
Ah;JF.Ah=null;this.A0=this.A0-1;}else JF=A._NewObject(C.A5$,0);JF.P7=aX;JF.P8=aY;
if(!this.AlJ){this.AlJ=JF;this.AAm=JF;this.A0=1;}else{this.AAm.Ah=JF;this.AAm=JF;
this.A0=this.A0+1;}},AwQ:function(E){if(E<1)E=1;this.AEq=E;},_Init:function(aArg
){this.__proto__=C.ACv;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlJ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SQ={WT:null,Agq:null,N$:null,AGk:270,AGE:1,Kr:function(C0,aClip,aOffset
,Cj,aBlend){var Vr;var Bdn;Vr=0;Bdn=this.AGk;while(Vr<0)Vr=Vr+360;while(Vr>=360)
Vr=Vr-360;var RG=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RH=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kr.call(this,C0,aClip,aOffset,Cj,aBlend);if(!!this.
N$&&(this.N$.AHa>0)){var Hh=this.N$.K5;while(!!Hh){var FE=(Hh.A6/this.N$.AHa)*Bdn;
this.Bdt(C0,aClip,RG,RH,Vr,FE,this.AGE,0,Hh.AQ,Cj,aBlend);Vr=Vr+FE;if(Vr>=360)Vr=
Vr-360;Hh=Hh.Ah;}}else this.Bdt(C0,aClip,RG,RH,Vr,this.AGk,this.AGE,0,0xFF800000
,Cj,aBlend);},BnS:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGk)return;
this.AGk=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bn4:function(E){var B;if(
E===this.WT)return;this.WT=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bn2:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGE)return;this.AGE=E;this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bdt:function(C0,aClip,aX,aY,aStartAngle
,Xn,Aln,A1c,aColor,Cj,aBlend){var B;var JO;var JG;var Agj;var Agk;var Agl;var Agm;
var BfY;var BfZ;var Al5;var Al6;var LF;var B4=aColor;var Kk=(((Cj+1)*this.G8)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kk<256)B4=(B4&0x00FFFFFF)|((((((B4>>24
)&0xFF)*Kk)>>8)&0xFF)<<24);if(!this.WT)return;var BZ=this.WT.FrameSize[0];var BL=
this.WT.FrameSize[1];var I7=0;if(Xn>=360){aStartAngle=0;Xn=360;}if(A1c>0){var Bdp=
aStartAngle+(Xn/2);JO=Math.sin(Bdp*A.k$);JG=Math.cos(Bdp*A.k$);aX=aX+((A1c*JO)|0
);aY=aY-((A1c*JG)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I7=I7+90;
}if(!this.Agq||!A.aaX(this.Agq.FrameSize,this.WT.FrameSize)){this.Agq=A._NewObject(
A.Graphics.Canvas,0);this.Agq.ArQ(this.WT.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xn)<90)){JO=Math.sin(Xn*A.k$);JG=Math.cos(Xn*A.k$);Agj=(-BZ*JG)+(BL*JO);Agk=(-BL
*JG)-(BZ*JO);Agl=BL*JO;Agm=-BL*JG;Al5=-BZ*JG;Al6=-BZ*JO;this.Agq.Avh([0,0,BZ,BL]
,[0,0,this.Agq.FrameSize[0],this.Agq.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agq.AhQ([0,0,BZ,BL],this.WT,0,Agj,Agk+BL,1,Agl,Agm+BL,1,
0,BL,1,Al5,Al6+BL,1,[0,0,BZ,BL],B4,B4,B4,B4,true,true);JO=Math.sin((aStartAngle+
I7)*A.k$)*Aln;JG=Math.cos((aStartAngle+I7)*A.k$)*Aln;Agj=BL*JO;Agk=-BL*JG;Agl=(BZ
*JG)+(BL*JO);Agm=(-BL*JG)+(BZ*JO);BfY=BZ*JG;BfZ=BZ*JO;C0.AhQ(aClip,this.Agq,0,Agj+
aX,Agk+aY,1,Agl+aX,Agm+aY,1,BfY+aX,BfZ+aY,1,aX,aY,1,[0,0,BZ,BL],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JO=Math.sin(((90+I7)+
aStartAngle)*A.k$)*Aln;JG=Math.cos(((90+I7)+aStartAngle)*A.k$)*Aln;Agj=(-BZ*JG)+(
BL*JO);Agk=(-BL*JG)-(BZ*JO);Agl=BL*JO;Agm=-BL*JG;Al5=-BZ*JG;Al6=-BZ*JO;if(!I7)LF=[
aX,-10000,10000,aY];else if(I7===90)LF=[aX,aY,10000,10000];else if(I7===180)LF=[-
10000,aY,aX,10000];else LF=[-10000,-10000,aX,aY];C0.AhQ(A.lb(aClip,LF),this.WT,0
,Agj+aX,Agk+aY,1,Agl+aX,Agm+aY,1,aX,aY,1,Al5+aX,Al6+aY,1,[0,0,BZ,BL],B4,B4,B4,B4
,aBlend,true);I7=I7+90;if(I7>=360)I7=I7-360;Xn=Xn-(90-aStartAngle);}while(Xn>=90
){JO=Math.sin((90+I7)*A.k$)*Aln;JG=Math.cos((90+I7)*A.k$)*Aln;Agj=(-BZ*JG)+(BL*JO
);Agk=(-BL*JG)-(BZ*JO);Agl=BL*JO;Agm=-BL*JG;Al5=-BZ*JG;Al6=-BZ*JO;if(!I7)LF=[aX,-
10000,10000,aY];else if(I7===90)LF=[aX,aY,10000,10000];else if(I7===180)LF=[-10000
,aY,aX,10000];else LF=[-10000,-10000,aX,aY];C0.AhQ(A.lb(aClip,LF),this.WT,0,Agj+
aX,Agk+aY,1,Agl+aX,Agm+aY,1,aX,aY,1,Al5+aX,Al6+aY,1,[0,0,BZ,BL],B4,B4,B4,B4,aBlend
,true);I7=I7+90;if(I7>=360)I7=I7-360;Xn=Xn-90;}JO=Math.sin((Xn+I7)*A.k$)*Aln;JG=
Math.cos((Xn+I7)*A.k$)*Aln;Agj=(-BZ*JG)+(BL*JO);Agk=(-BL*JG)-(BZ*JO);Agl=BL*JO;Agm=-
BL*JG;Al5=-BZ*JG;Al6=-BZ*JO;if(!I7)LF=[aX,-10000,10000,aY];else if(I7===90)LF=[aX
,aY,10000,10000];else if(I7===180)LF=[-10000,aY,aX,10000];else LF=[-10000,-10000
,aX,aY];C0.AhQ(A.lb(aClip,LF),this.WT,0,Agj+aX,Agk+aY,1,Agl+aX,Agm+aY,1,aX,aY,1,
Al5+aX,Al6+aY,1,[0,0,BZ,BL],B4,B4,B4,B4,aBlend,true);}},Ab9:function(E){var B;this.
N$=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SQ;this.H(I0);this.WT=A.aaL(C.
AT8);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WT)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AT8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A6:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUy={K5:null,M4:null,A0:10,AHa:0,OA:function(A9,aColor){var Hh;
Hh=A._NewObject(C.Record,0);Hh.A6=A9;Hh.AQ=aColor;if(!this.K5){this.K5=Hh;this.M4=
Hh;this.A0=1;}else{this.M4.Ah=Hh;this.M4=Hh;this.A0=this.A0+1;}this.AHa=this.AHa+
A9;},_Init:function(aArg){this.__proto__=C.AUy;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AT9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SQ.__proto__=A.Core.P;};C._ReInit=function(
){};C.DI=function(D){var B;if((B=C.ARF[0]._this)&&(B._cycle!=D))B._Done(C.ARF[0].
_this=null);if((B=C.AT8[0]._this)&&(B._cycle!=D))B._Done(C.AT8[0]._this=null);if((
B=C.AT9[0]._this)&&(B._cycle!=D))B._Done(C.AT9[0]._this=null);if((B=C.ACO[0]._this
)&&(B._cycle!=D))B._Done(C.ACO[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */