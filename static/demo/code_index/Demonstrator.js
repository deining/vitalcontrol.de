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
);if(index.acw)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.acw=(function(){var A=index;var C={};
var Cg=[0,0,370,60];var BD=[360,0,370,60];var E6=[0,0,370,710];var Hr="Unknown animalType";
var I0=[58,10,120,50];var Iv=[0,0,60,60];var O8=[120,0,360,60];var P_="\u2015";var
P$=[0,0,240,60];var CR=[0,0,40,60];var Fc=[100,0,130,60];var LA=[43,0,100,60];var
Qa=[125,0,240,60];var J_=[0,0];var Oh=[100,0];var Qb=[100,60];var MR=[0,60];var Tg=[
107,0];var UX=[240,0];var Aaa=[240,60];var Xc=[107,60];var Iw="%d.%m.%Y";var UY=
"Unhandled date unit: ";var Aab=[0,0,200,180];var UZ=[36,0,200,30];var Aac=[0,30
,160,60];var Xd="Text";var Aad=[0,70,40,110];var Aae=[44,70,156,110];var U0=[160
,70,200,110];var Xe=[7,2,27,25];var O9=[0,30,170,180];var Aaf=[170,34,190,57];var
Oi=[0,0,40,40];var Rn=[0,40];var Xf=[40,40];var Xg=[40,0];var U1=[0,0,370,100];var
Xh=[20,0,290,60];var Aag=[0,60,370,100];var Xi="Cap";var U2=[20,0,370,60];var Xj=[
310,0,370,60];var Xk=[370,0];var Xl=[370,60];var Ro="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Th=".";var Aah=[0,0,170
,150];var AfC=[0,59,170,90];var Aai=[110,0,170,150];var Xm=[0,30];var Aaj=[50,0,
100,150];var Aak=[0,0,40,150];var AhT=[0,0,370,240];var K2=[0,60,370,710];var Aal=[
0,0,370,300];var LB=[0,60,370,300];var AhU=[0,60,370,120];var Ak9=[0,120,370,180
];var Oj=[0,180,370,240];var Xn=[0,240,370,300];var Aoe=[370,120];var AfD=[0,120
];var AhV=[370,180];var AcP=[0,180];var Aam=[370,240];var Ax9=[0,240];var Ax_=[370
,300];var Ax$=[0,300];var Aya=[0,0,50,60];var Ak_=[50,0,100,60];var AsZ="Unhandled scan type";
var Ayb=[3,11,253,51];var Ayc=[57,0];var O_=[57,60];var Rp=[100,10,370,50];var Ayd=
"276000901234567";var U3=[3,10,57,50];var As0=[3,11,55,50];var Aye="Unhandled temperature unit";
var Ayf=[110,0,260,60];var Ak$=[235,10,370,50];var Ayg="39.5";var AfE=[0,0,270,40
];var Aof=[270,0];var I1=[270,40];var Aog=[150,0,170,40];var As1=[205,10,207,30];
var AcQ=[0,0,370,40];var As2=[50,0,320,40];var As3=" ";var As4=[135,23];var Aoh=[
135,0];var As5=[100,0,370,60];var Ala="Error: Nullpointer Exception";var Ayh="Unknown Date Piecker Unit Index: ";
var Ayi="0";var Ayj="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AM_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.AR2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVZ={Aed:null,AX:null,AR:null,Background:null,Ib:null,AD:null,IX:null,Do:
null,Lm:null,A8f:null,A8G:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IX.H(A.abP(this.IX.M,this.AD.OW));this.IX.H([].concat(this.IX.M.slice(0,3),aSize[
1]));},Aj:function(Ae){var B;A.acn.Menu.Aj.call(this,Ae);var IF=((Ae&0x40)===0x40
);if(IF&&(this.AD.Gu<0))this.AD.GU(0);},N8:function(E){if(this.Lm===E)return;this.
Lm=E;this.AD.N8(E);},BnS:function(E){var B;if(this.A8f===E)return;if(!!this.Aed){
this.HQ(this.Aed);this.Aed=null;}if(!!E){this.Aed=(C.FC.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aed.A_P([this,this.Ako]);this.Aed.A_Q([this,this.Akp]);this.Aed.
BnY(null);this.J(this.Aed,0);this.AD.A_W((B=this.Aed.M)[3]-B[1]);}else this.AD.A_W(
0);this.IX.H(A.abP(this.IX.M,this.AD.OW));A.pe([this,this.Fh],this);this.A8f=E;}
,Hn:function(G){var B;var Gj=this.AD.G6;var Aa=(C.A$.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zy(this.AX);Aa.Ci(Gj);Aa.ZC(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GP]));},Zy:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ci],this.AX,0);A.z$([this,this.An9],[B=this.AX,B.Fn
,B.Fr],0);}this.AX=E;if(!!E){A.zV([this,this.Ci],E,0);A.zX([this,this.An9],[E,E.
Fn,E.Fr],0);}A.pe([this,this.Ci],this);A.pe([this,this.An9],this);},Ci:function(
G){if(!!this.AX){this.AD.JD(this.AX.B9());this.AD.AbL(0,this.AD.A0-1);}else this.
AD.JD(0);if(this.A8G!==this.AD.A0){this.AD.ABV(null,null);this.A8G=this.AD.A0;}A.
pe([this,this.Fh],this);},Akp:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOX(
))[3]-B[1]));},Ako:function(G){this.H(A.abI(this.M,180));},A94:function(G){var JI=(
A.Core.BF.isPrototypeOf(G)?G:null);var Gj=this.AD.Gu;if(JI.CO===4)Gj=Gj-1;else if(
JI.CO===5)Gj=Gj+1;else if((JI.Dz>=0x30)&&(JI.Dz<=0x39))A._GetAutoObject(A.aco.AgM
).Ez(JI.Dz);else if(JI.CO===45)A._GetAutoObject(A.aco.AgM).Delete();else JI.Mx=true;
if((Gj<0)||(Gj>=this.AD.A0))return;this.AD.GU(Gj);this.BzG(Gj,true);},Bzv:function(
G){var Aa=(C.A$.isPrototypeOf(G)?G:null);this.AD.GU(Aa.Hs);},BzG:function(Ha,Ac2
){var B;if((Ha<0)||(Ha>=this.AD.A0))return;var Az=this.AD.AqT(Ha,Ha);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOX())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOX())[3]-B[1]))-((B=this.AD.BjP())[3]-B[1]));var LT=A.lb(Az,Bd);if((!
Ac2&&!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac2&&A.aaY(LT,Az)))return;var Br=0;if(
Az[3]>Bd[3])Br=Az[3]-Bd[3];if(Br>(Az[1]-Bd[1]))Br=(Az[3]-Bd[1])-this.AD.GP;this.
AD.Gf(this.AD.Bs-Br);},An9:function(G){this.AD.GU(-1);},Fh:function(G){var B;this.
IX.MH(this.AD.GP*this.AD.A0);this.IX.MJ(((B=this.AD.M)[3]-B[1])-this.AD.OW);this.
IX.MI(-this.AD.Bs);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);A.Core.Ib._Init.call(this.Ib={I:this},
0);A.Core.CL._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IX={I:this},
0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=C.AVZ;this.H(Cg);this.
Background.A1(0x3);this.Background.H(Cg);this.Ib.A1(0x3F);this.Ib.H(Cg);this.AD.
A1(0x3F);this.AD.H(Cg);this.AD.Ae7(60);this.AD.JD(0);this.AD.N8(this.Lm);this.IX.
A1(0x3A);this.IX.H(BD);this.IX.L(0xFF808080);this.J(this.Background,0);this.J(this.
Ib,0);this.J(this.AD,0);this.J(this.IX,0);this.AD.En=[this,this.Fh];this.AD.Hn=[
this,this.Hn];this.AD.Aw_(this.Ib);this.AR=[this,this.Bzv];this.Do.BG=[this,this.
A94];this.Do.D2=[this,this.A94];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.Ib._Done();this.AD._Done();this.IX._Done();this.Do._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.Ib._ReInit();this.AD._ReInit();this.IX._ReInit();
this.Do._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aed)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUT={GL:null,AK:null,BX:null,Init:function(aArg){var B;A.zX([this,this.GI],[
B=A._GetAutoObject(A.aco.GN),B.A9H,B.A_6],0);A.pe([this,this.GI],this);},Ab8:function(
E){if(this.GL===E)return;if(!!this.GL)this.HQ(this.GL);this.GL=E;if(!!this.GL)this.
J(this.GL,0);this.Ba(E);this.AhB(E,this.BX);this.Am();},GI:function(G){var B;if(
!!A._GetAutoObject(A.aco.GN).Asz)this.Ab8((C.AhG.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.GN).Asz,0))?B:null));else this.Ab8(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.BX.
_Init.call(this.BX={I:this},0);this.__proto__=C.AUT;this.H(E6);this.AK.A1(0x3F);
this.AK.H(E6);this.BX.H(E6);this.BX.L(0xFF000000);this.J(this.AK,0);this.J(this.
BX,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AK._Done();
this.BX._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AK._ReInit();this.BX._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMA={ABA:0,Jt:0,Background:null,V:null
,Ajl:null,AdW:null,XX:null,AdX:null,Mr:null,Mn:0,LN:false,KL:false,CP:function(){
this.Am();},Aj:function(Ae){var B;C.A$.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var Fu=((Ae&0x20)===0x20);var IF=((Ae&0x40)===0x40);if(!Hf){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mr.As(false);this.Mr.Z(false);}else if(IF){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mr.As(true);this.Mr.Z(true);}else
if(Fu){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mr.As(true);this.
Mr.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mr.As(false
);this.Mr.Z(false);}if(!this.KL&&Fu)A._GetAutoObject(A.aco.GN).A_3(this.ABA);this.
Mr.BnU(this.Jt>0);this.Mr.Bom(this.ABA>0);this.V.R(this.Mn.toFixed());this.LN=Hf;
this.KL=Fu;},Ci:function(Ad){if(!this.AX){this.XX.Ax(A.aaL(A.ach.Aez));this.AdW.
L(A.jb.Afv);return;}this.Hs=Ad;if(!!this.AX){this.Jt=this.AX.KS(Ad,26);this.ABA=
this.AX.KS(Ad,22);this.Mn=this.AX.CE(Ad,1);var AlP=this.AX.H6(Ad,11);var AlH=this.
AX.Ja(Ad,17);var LW=this.AX.Ja(Ad,13);var Ig=this.AX.AmV(Ad,14);var Xx=A._GetAutoObject(
A.Device.Helper).AMp(LW,AlP,AlH);switch(Ig){case 0:this.XX.Ax(A.aaL(A.ach.Aez));
break;case 1:this.XX.Ax(A.aaL(A.ach.AvH));break;case 2:this.XX.Ax(A.aaL(A.ach.AvK
));break;default:A.ab5("%s%e",Hr,Ig);}this.AdX.Ax(this.XX.Al);this.AdW.L(A._GetAutoObject(
A.acj.Assessment).Qr(Xx));this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajl={I:this},0);A.acg.Ap._Init.call(this.AdW={
I:this},0);A.acg.Ap._Init.call(this.XX={I:this},0);A.acg.Ap._Init.call(this.AdX={
I:this},0);C.Mr._Init.call(this.Mr={I:this},0);this.__proto__=C.AMA;this.Background.
A1(0x3F);this.Background.H(Cg);this.V.A1(0x3F);this.V.H(I0);this.V.R(A.aaR(A.acf.
GO));this.V.A4(0x11);this.V.L(0xFF000000);this.Ajl.H(Iv);this.Ajl.L(A.jb.Text);this.
AdW.H(Iv);this.AdW.L(A.jb.E1);this.XX.H(Iv);this.AdX.H(Iv);this.AdX.L(A.jb.Text);
this.AdX.Cx(1);this.Mr.A1(0x3);this.Mr.H(O8);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajl,0);this.J(this.AdW,0);this.J(this.XX,0);this.J(this.AdX,0);
this.J(this.Mr,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.
aaL(A.fl.Bg));this.Ajl.Ax(A.aaL(C.AHw));this.AdW.Ax(A.aaL(C.AWe));this.XX.Ax(A.aaL(
A.ach.Aez));this.AdX.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=C.A$;
this.Background._Done();this.V._Done();this.Ajl._Done();this.AdW._Done();this.XX.
_Done();this.AdX._Done();this.Mr._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajl._ReInit(
);this.AdW._ReInit();this.XX._ReInit();this.AdX._ReInit();this.Mr._ReInit();this.
V.R(A.aaR(A.acf.GO));this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(
A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mr={UE:null,WT:null,AkW:null,Nx:null
,Oe:null,ZP:null,AcB:null,Av4:false,AxW:false,CP:function(){this.Am();},Aj:function(
Ae){var B;A.Core.P.Aj.call(this,Ae);var IF=((Ae&0x40)===0x40);if(IF){this.Nx.L(A.
jb.Bm);this.Oe.L(A.jb.Bm);}else{this.Nx.L(A.jb.Text);this.Oe.L(A.jb.Text);}if(this.
AxW){this.Nx.R(A.aaR(A.acf.Bpn));if(this.Av4){this.UE.Ax(A.aaL(C.AxX));this.WT.Ax(
A.aaL(C.AxX));}else{this.UE.Ax(A.aaL(C.Asw));this.WT.Ax(A.aaL(C.Asw));}}else if(
this.Av4){this.UE.Ax(A.aaL(C.ACS));this.WT.Ax(A.aaL(C.ACS));this.Nx.R(P_);}var A4C=
this.AxW||this.Av4;this.UE.Z(A4C);this.WT.Z(A4C);this.Nx.Z(A4C);this.ZP.As(this.
AxW);},Bom:function(E){if(this.AxW===E)return;this.AxW=E;this.Am();},BnU:function(
E){if(this.Av4===E)return;this.Av4=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.UE={I:this},0);A.acg.Ap._Init.call(this.
WT={I:this},0);A.acg.Ap._Init.call(this.AkW={I:this},0);A.kR.CG._Init.call(this.
Nx={I:this},0);A.kR.CG._Init.call(this.Oe={I:this},0);A.Core.Bn._Init.call(this.
ZP={I:this},0);A.Core.Bn._Init.call(this.AcB={I:this},0);this.__proto__=C.Mr;var
B;this.H(P$);this.UE.A1(0x6);this.UE.H(CR);this.UE.L(A.jb.CV);this.UE.Cx(1);this.
WT.A1(0x6);this.WT.H(CR);this.WT.L(A.jb.Text);this.AkW.A1(0xE);this.AkW.H(Fc);this.
Nx.A1(0x7);this.Nx.H(LA);this.Nx.A4(0x11);this.Nx.L(0xFF000000);this.Oe.A1(0x3);
this.Oe.H(Qa);this.Oe.R(A.aaR(A.acf.Temperature));this.Oe.A4(0x11);this.Oe.L(0xFF000000
);this.ZP.A1(0x3);this.ZP.J2(J_);this.ZP.Kz(Oh);this.ZP.DE(Qb);this.ZP.DO(MR);this.
AcB.A1(0x3);this.AcB.J2(Tg);this.AcB.Kz(UX);this.AcB.DE(Aaa);this.AcB.DO(Xc);this.
J(this.UE,0);this.J(this.WT,0);this.J(this.AkW,0);this.J(this.Nx,0);this.J(this.
Oe,0);this.J(this.ZP,0);this.J(this.AcB,0);this.UE.Ax(A.aaL(C.Asw));this.WT.Ax(A.
aaL(C.Asw));this.AkW.Ax(A.aaL(C.AVq));this.Nx.S(A.aaL(A.fl.Af));this.Nx.AY(A.aaL(
A.fl.Ak));this.Nx.Cm(A.aaL(A.fl.Bg));this.Oe.S(A.aaL(A.fl.Af));this.Oe.AY(A.aaL(
A.fl.Ak));this.Oe.Cm(A.aaL(A.fl.Bg));this.ZP.Lr=[B=A._GetAutoObject(A.aco.GN),B.
BfL];this.AcB.Lr=[B=A._GetAutoObject(A.aco.GN),B.Bfx];},_Done:function(){this.__proto__=
A.Core.P;this.UE._Done();this.WT._Done();this.AkW._Done();this.Nx._Done();this.Oe.
_Done();this.ZP._Done();this.AcB._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.UE._ReInit();this.WT._ReInit();this.AkW._ReInit(
);this.Nx._ReInit();this.Oe._ReInit();this.ZP._ReInit();this.AcB._ReInit();this.
Oe.R(A.aaR(A.acf.Temperature));this.Nx.S(A.aaL(A.fl.Af));this.Nx.AY(A.aaL(A.fl.Ak
));this.Nx.Cm(A.aaL(A.fl.Bg));this.Oe.S(A.aaL(A.fl.Af));this.Oe.AY(A.aaL(A.fl.Ak
));this.Oe.Cm(A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yy={CP:function(){this.Am();
},Aj:function(Ae){C.Are.Aj.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8N:function(G){var D6=(A.Core.BF.isPrototypeOf(G)?G:null
);if(!!D6)A._GetAutoObject(A.aco.AgM).Ez(D6.Dz);},A8L:function(G){A._GetAutoObject(
A.aco.AgM).Delete();},_Init:function(aArg){C.Are._Init.call(this,aArg);this.__proto__=
C.Yy;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Are._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abl={Dm:null,Yr:null,Sj:null,Ys:
null,DU:null,YN:null,AmH:null,Av:null,Pf:null,Nd:null,Abk:null,F_:0,AvP:0,AGk:false
,Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.Sj.R(this.Av.Format(Iw));if(this.
AGk){this.Sj.Z(false);this.YN.Z(false);this.DU.Z(false);this.Ys.Z(false);this.Pf.
As(true);this.Pf.Z(true);this.Nd.Cx(2);this.Nd.ATD(2);this.Nd.H(A.abM(this.Nd.M,
this.Pf.M[2]));}else{this.Sj.Z(true);this.YN.Z(true);this.DU.Z(true);this.Ys.Z(true
);this.Pf.As(false);this.Pf.Z(false);this.Nd.Cx(3);this.Nd.ATD(3);this.Nd.H(A.abM(
this.Nd.M,this.Sj.M[2]));}},BBv:function(G){this.Bn1(!this.AGk);},Adz:function(G
){var F;if(!!this.Dm)this.Ut((F=this.Dm,F[1].call(F[0])));},Aca:function(E){if(A.
aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.Adz],this.Dm,0);this.Dm=E;if(
!!E)A.zX([this,this.Adz],E,0);if(!!E)A.pe([this,this.Adz],this);},Ut:function(E){
if(this.F_===E)return;this.F_=E;this.Av.Initialize(this.F_);this.BCz(this);this.
Am();},AiE:function(G){var B;var F;var BP=this.F_;var Ai_=this.Abk.C8(this.AvP);
this.AJu(Ai_);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Ut(((
B=(this.Av.JZ()|0))<0)?B+0x100000000:B);if(this.F_!==BP){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.F_));A.abo(this.Dm,0);}},Aip:function(G){var B;var F;var BP=
this.F_;var Ai_=this.Abk.C8(this.AvP);this.ALf(Ai_);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Ut(((B=(this.Av.JZ()|0))<0)?B+0x100000000:B);if(
this.F_!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.F_));A.abo(this.Dm,0);
}},Bnx:function(E){if(this.AvP===E)return;this.AvP=E;},Bn1:function(E){if(this.AGk===
E)return;this.AGk=E;this.Am();},BB7:function(G){var B;var F;var BP=this.F_;this.
Av.Lt(this.Pf.AEP());this.Av.Ux(this.Pf.AEU());this.Av.Year=this.Pf.ArE();this.Ut(((
B=(this.Av.JZ()|0))<0)?B+0x100000000:B);if(this.F_!==BP){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.F_));A.abo(this.Dm,0);}},BCz:function(G){this.Pf.Lt(this.Av.
GM);this.Pf.Ux(this.Av.Hl);this.Pf.AkC(this.Av.Year);},AJu:function(Azc){var B;switch(
Azc){case 0:if(this.Av.GM<this.Av.Zu())this.Av.Lt(this.Av.GM+1);else{this.Av.Lt(
1);this.AJu(2);}break;case 1:if((this.Av.GM+7)<=this.Av.Zu())this.Av.Lt(this.Av.
GM+7);else{this.Av.Lt((7-this.Av.Zu())+this.Av.GM);this.AJu(2);}break;case 2:if(
this.Av.Hl<12)this.Av.Ux(this.Av.Hl+1);else{this.Av.Ux(1);this.AJu(3);}break;case
3:this.Av.Year++;break;default:throw new Error(UY+Azc.toFixed());}},ALf:function(
Azc){var B;switch(Azc){case 0:if(this.Av.GM>1)this.Av.Lt(this.Av.GM-1);else{this.
ALf(2);this.Av.Lt(this.Av.Zu());}break;case 1:if((this.Av.GM-7)>0)this.Av.Lt(this.
Av.GM-7);else{this.ALf(2);this.Av.Lt(this.Av.Zu()-(7-this.Av.GM));}break;case 2:
if(this.Av.Hl>1)this.Av.Ux(this.Av.Hl-1);else{this.Av.Ux(12);this.ALf(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(UY+Azc.toFixed());}},BlF:function(
){return this.AvP;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yr={I:this},0);A.acg.Text._Init.call(this.Sj={I:this},0);C.AvF._Init.
call(this.Ys={I:this},0);A.acr.DU._Init.call(this.DU={I:this},0);C.AvF._Init.call(
this.YN={I:this},0);A.acg.Ap._Init.call(this.AmH={I:this},0);A.Core.Bq._Init.call(
this.Av={I:this},0);C.ANP._Init.call(this.Pf={I:this},0);C.AvF._Init.call(this.Nd={
I:this},0);C.Abk._Init.call(this.Abk={I:this},0);this.__proto__=C.Abl;this.H(Aab
);this.Yr.H(UZ);this.Yr.A4(0x11);this.Yr.R(A.aaR(A.acf.Date));this.Yr.L(0xFF000000
);this.Sj.H(Aac);this.Sj.A4(0x11);this.Sj.R(Xd);this.Sj.L(0xFF000000);this.Ys.H(
Aad);this.Ys.A_F(200);this.DU.H(Aae);this.DU.ArX(120);this.DU.GP=30;this.DU.ATe(
A.jb.CV);this.DU.A_g(A.jb.CV);this.DU.A_l(A.jb.CV);this.DU.ATf(A.jb.Text);this.DU.
A_m(A.jb.Text);this.DU.A_h(A.jb.AV);this.DU.A_n(A.jb.Bm);this.DU.A_k(A.jb.AV);this.
DU.A_j(A.jb.Text);this.YN.H(U0);this.YN.A_F(200);this.AmH.H(Xe);this.Pf.H(O9);this.
Nd.H(Aaf);this.Nd.Cx(3);this.Nd.ATD(3);this.Nd.L(A.jb.Text);this.J(this.Yr,0);this.
J(this.Sj,0);this.J(this.Ys,0);this.J(this.DU,0);this.J(this.YN,0);this.J(this.AmH
,0);this.J(this.Pf,0);this.J(this.Nd,0);this.Yr.S(A.aaL(A.fl.Ak));this.Sj.S(A.aaL(
A.fl.EK));this.Ys.AR=[this,this.Aip];this.Ys.DD(A.aaL(C.AM_));this.Ys.ATE(A.aaL(
C.AM$));this.DU.Au([this,this.BlF,this.Bnx]);this.DU.A_t(this.Abk);this.DU.ArP(A.
aaL(A.fl.Ak));this.DU.AwO(A.aaL(A.fl.Ak));this.YN.AR=[this,this.AiE];this.YN.DD(
A.aaL(C.ANa));this.YN.ATE(A.aaL(C.ANb));this.AmH.Ax(A.aaL(C.AQf));this.Pf.Dk=[this
,this.BB7];this.Nd.AR=[this,this.BBv];this.Nd.DD(A.aaL(A.ach.Ajr));this.Nd.ATE(A.
aaL(A.ach.Ajr));},_Done:function(){this.__proto__=A.Core.P;this.Yr._Done();this.
Sj._Done();this.Ys._Done();this.DU._Done();this.YN._Done();this.AmH._Done();this.
Av._Done();this.Pf._Done();this.Nd._Done();this.Abk._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yr._ReInit();this.Sj.
_ReInit();this.Ys._ReInit();this.DU._ReInit();this.YN._ReInit();this.AmH._ReInit(
);this.Av._ReInit();this.Pf._ReInit();this.Nd._ReInit();this.Abk._ReInit();this.
Yr.R(A.aaR(A.acf.Date));this.Yr.S(A.aaL(A.fl.Ak));this.Sj.S(A.aaL(A.fl.EK));this.
DU.ArP(A.aaL(A.fl.Ak));this.DU.AwO(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pf
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvF={C_:null,Axu:null,AN5:null,AR:null,Bo:null,Do:null,CT:null,Hx:null,YG:null
,APQ:0,TY:0,AUm:0,AQ:0xFFFFFFFF,A2O:false,LN:false,KL:false,Qv:false,Aj:function(
Ae){var B;A.acn.Ahx.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===
0x20);var GF=this.CT.Down&&this.CT.YP;if(!Hf)this.Hx.Ax(this.AN5);else if(GF){this.
Hx.Ax(this.Axu);this.Hx.Cx(this.AUm);}else{this.Hx.Ax(this.C_);this.Hx.Cx(this.TY
);}this.Hx.L(this.AQ);this.LN=Hf;this.KL=Fu;this.Qv=GF;},Qu:function(G){this.Am(
);A.pe(this.AR,this);},AiO:function(G){if(this.CT.Down)return;if(this.Do.Acn)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Bfu:function(G){this.Am();},AAR:function(G){if(!this.CT.YP)return;if(this.CT.NQ
)return;if((this.YG.VN<=0)||(this.CT.Jy<this.YG.VN)){if(this.CT.Jy>=this.Bo.VN)A.
pe(this.AR,this);else this.Bo.As(true);}this.YG.As(false);},AAQ:function(G){this.
YG.As(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}},DD:function(E
){if(this.C_===E)return;this.C_=E;this.Am();},ATE:function(E){if(this.Axu===E)return;
this.Axu=E;this.Am();},A3N:function(G){if(!this.CT.YP)return;if(this.CT.NQ)return;
if((this.APQ>=0)&&this.A2O){this.A2O=false;this.YG.As(true);A.pe(this.AR,this);}
},A_F:function(E){if(this.APQ===E)return;this.APQ=E;this.YG.WK(E);},BA0:function(
G){this.A2O=true;},Cx:function(E){if(this.TY===E)return;this.TY=E;this.Am();},ATD:
function(E){if(this.AUm===E)return;this.AUm=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Ahx._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Do={
I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);A.acg.Ap._Init.call(this.Hx={
I:this},0);A.Core.Timer._Init.call(this.YG={I:this},0);this.__proto__=C.AvF;this.
H(Oi);this.Bo.PW(0);this.Bo.WK(50);this.Do.Filter=149;this.CT.A1(0x3F);this.CT.J2(
Rn);this.CT.Kz(Xf);this.CT.DE(Xg);this.CT.DO(J_);this.CT.Aff=0xF;this.CT.AFG(100
);this.Hx.A1(0x3F);this.Hx.H(Oi);this.Hx.A4(0x12);this.YG.PW(0);this.J(this.CT,0
);this.J(this.Hx,0);this.Bo.MK=[this,this.Qu];this.Do.BG=[this,this.AiO];this.CT.
AE0=[this,this.Bfu];this.CT.Av_=[this,this.Bfu];this.CT.D2=[this,this.A3N];this.
CT.Lr=[this,this.AAR];this.CT.BG=[this,this.AAQ];this.Hx.Ax(A.aaL(A.aci.TS));this.
C_=A.aaL(A.aci.TS);this.Axu=A.aaL(A.aci.TS);this.AN5=A.aaL(A.aci.TS);this.YG.MK=[
this,this.BA0];},_Done:function(){this.__proto__=A.acn.Ahx;this.Bo._Done();this.
Do._Done();this.CT._Done();this.Hx._Done();this.YG._Done();A.acn.Ahx._Done.call(
this);},_ReInit:function(){A.acn.Ahx._ReInit.call(this);this.Bo._ReInit();this.Do.
_ReInit();this.CT._ReInit();this.Hx._ReInit();this.YG._ReInit();},_Mark:function(
D){var B;A.acn.Ahx._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMO={PB:null,V:null,Aer:null,_Init:function(aArg){
C.FC._Init.call(this,aArg);A.acg.AK._Init.call(this.PB={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aer._Init.call(this.Aer={I:this},0);this.__proto__=C.AMO;
this.H(U1);this.PB.A1(0x1D);this.PB.H(Cg);this.PB.L(0xFFE6E6E6);this.V.A1(0x1D);
this.V.H(Xh);this.V.A4(0x11);this.V.R(A.aaR(A.acf.A5E));this.V.L(0xFF000000);this.
Aer.H(Aag);this.J(this.PB,0);this.J(this.V,0);this.J(this.Aer,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.PB._Done();this.V._Done();
this.Aer._Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this
);this.PB._ReInit();this.V._ReInit();this.Aer._ReInit();this.V.R(A.aaR(A.acf.A5E
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.PB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuF={PB:null,V:null,AeT:null,AeR:null,Bn:null,DM:Xi,Ahl:false,Aj:function(Ae
){C.FC.Aj.call(this,Ae);if(this.Ahl){this.AeR.Z(true);this.AeT.Z(false);}else{this.
AeR.Z(false);this.AeT.Z(true);}},BBT:function(G){if(this.Ahl)A.pe(this.Ako,this);
else A.pe(this.Akp,this);this.ArY(!this.Ahl);},T:function(E){if(this.DM===E)return;
this.DM=E;this.V.R(E);},ArY:function(E){if(this.Ahl===E)return;this.Ahl=E;this.Am(
);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.acg.AK._Init.call(this.PB={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeT={
I:this},0);A.acg.Ap._Init.call(this.AeR={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuF;this.H(Cg);this.PB.A1(0x1D);this.PB.H(Cg);this.PB.
L(0xFFE6E6E6);this.V.A1(0x1D);this.V.H(U2);this.V.A4(0x11);this.V.R(Xi);this.V.L(
0xFF000000);this.AeT.H(Xj);this.AeT.Z(false);this.AeR.A1(0x3A);this.AeR.H(Xj);this.
Bn.J2(J_);this.Bn.Kz(Xk);this.Bn.DE(Xl);this.Bn.DO(MR);this.J(this.PB,0);this.J(
this.V,0);this.J(this.AeT,0);this.J(this.AeR,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeT.Ax(A.aaL(C.AMR));this.AeR.Ax(A.aaL(C.Ajq));this.Bn.Lr=[this,this.
BBT];},_Done:function(){this.__proto__=C.FC;this.PB._Done();this.V._Done();this.
AeT._Done();this.AeR._Done();this.Bn._Done();C.FC._Done.call(this);},_ReInit:function(
){C.FC._ReInit.call(this);this.PB._ReInit();this.V._ReInit();this.AeT._ReInit();
this.AeR._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FC._Mark.call(this,D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.A$={AX:null,AR:null,
CT:null,Hs:-1,Zy:function(E){if(this.AX===E)return;this.AX=E;},Ci:function(Ad){A.
ab5("%s",Ro);},ZC:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAR:function(
G){if(!this.CT.YP)return;if(this.CT.NQ)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.A$;this.H(Cg);this.CT.A1(0x3F);this.CT.J2(MR);this.CT.Kz(Xl);this.CT.
DE(Xk);this.CT.DO(J_);this.CT.Aff=0xF;this.CT.AFG(100);this.J(this.CT,0);this.CT.
Lr=[this,this.AAR];},_Done:function(){this.__proto__=A.Core.P;this.CT._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CT.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FC={ASx:null,Akp:null,Ako:null,BnY:function(E){if(A.aa0(this.ASx,E))return;this.
ASx=E;},A_Q:function(E){if(A.aa0(this.Akp,E))return;this.Akp=E;},A_P:function(E){
if(A.aa0(this.Ako,E))return;this.Ako=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FC;this.H(Cg);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ako)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANP={Dk:null
,Abb:null,W6:null,W5:null,W4:null,Nn:null,Nm:null,KV:null,LN:false,KL:false,BCJ:
false,Aj:function(Ae){var B;A.acn.Ahv.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);
var Fu=((Ae&0x20)===0x20);var Bev=(this.W4.ZT||this.W5.ZT)||this.W6.ZT;if(Bev)this.
Abb.L(A.jb.Text);else this.Abb.L(A.jb.Bb);this.LN=Hf;this.KL=Fu;this.BCJ=Bev;},AAM:
function(G){this.Am();if((!this.W4.ZT&&!this.W5.ZT)&&!this.W6.ZT){var Vj=this.AKl(
this.AEU(),this.ArE());var Ade=this.AEP();this.KV.JD(Vj);if(Ade>Vj)this.Lt(Vj);A.
pe(this.Dk,this);}},A39:function(G){this.Am();},Bmm:function(G){var B;var Gj=this.
Nn.G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Nn.Cj)?B:null);if(!CA)return;CA.R(
A.abl(Gj+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(
CA.M,[(B=this.Nn.M)[2]-B[0],this.Nn.GP]));},Bml:function(G){var B;var Gj=this.Nm.
G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Nm.Cj)?B:null);if(!CA)return;CA.R(A.abl(
Gj+1,2,10)+Th);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(CA.M,[(
B=this.Nm.M)[2]-B[0],this.Nm.GP]));},Bmj:function(G){var B;var Gj=this.KV.G6;var
CA=(A.acg.Text.isPrototypeOf(B=this.KV.Cj)?B:null);if(!CA)return;CA.R(A.abl(Gj+1
,2,10)+Th);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(CA.M,[(B=
this.KV.M)[2]-B[0],this.KV.GP]));},ArE:function(){return 1900+((((-this.Nn.Bs/this.
Nn.GP)|0)+2)%200);},AkC:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nn.Gf(((
E-1900)-2)*-this.Nn.GP);var Vj=this.AKl(this.AEU(),E);this.KV.JD(Vj);if(this.AEP(
)>Vj)this.Lt(Vj);},AEU:function(){return 1+((((-this.Nm.Bs/this.Nm.GP)|0)+2)%12);
},Ux:function(E){if(E<1)E=1;if(E>12)E=12;this.Nm.Gf(((E-1)-2)*-this.Nm.GP);var Vj=
this.AKl(E,this.ArE());this.KV.JD(Vj);if(this.AEP()>Vj)this.Lt(Vj);},AEP:function(
){return 1+((((-this.KV.Bs/this.KV.GP)|0)+2)%this.KV.A0);},Lt:function(E){var Vj=
this.AKl(this.AEU(),this.ArE());if(E<1)E=1;if(E>Vj)E=Vj;this.KV.Gf(((E-2)-1)*-this.
KV.GP);},AKl:function(AfM,Ac6){if(AfM===2){if(!(Ac6%4)&&(!!(Ac6%100)||!(Ac6%400)
))return 29;else return 28;}else if((((AfM===4)||(AfM===6))||(AfM===9))||(AfM===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahv._Init.call(this,aArg
);A.acg.BX._Init.call(this.Abb={I:this},0);A.Core.Ib._Init.call(this.W6={I:this}
,0);A.Core.Ib._Init.call(this.W5={I:this},0);A.Core.Ib._Init.call(this.W4={I:this
},0);A.Core.CL._Init.call(this.Nn={I:this},0);A.Core.CL._Init.call(this.Nm={I:this
},0);A.Core.CL._Init.call(this.KV={I:this},0);this.__proto__=C.ANP;this.H(Aah);this.
Abb.H(AfC);this.Abb.Nu(3);this.Abb.L(0xFFE1E1E1);this.Abb.Z(true);this.W6.H(Aai);
this.W6.ATR(Xm);this.W6.ATm(0.2);this.W5.H(Aaj);this.W5.ATR(Xm);this.W5.ATm(0.2);
this.W4.H(Aak);this.W4.ATR(Xm);this.W4.ATm(0.2);this.Nn.H(Aai);this.Nn.ATk(true);
this.Nn.Gf(60);this.Nn.Ae7(30);this.Nn.JD(200);this.Nm.H(Aaj);this.Nm.ATk(true);
this.Nm.Gf(60);this.Nm.Ae7(30);this.Nm.JD(12);this.KV.H(Aak);this.KV.ATk(true);this.
KV.Gf(60);this.KV.Ae7(30);this.KV.JD(31);this.J(this.Abb,0);this.J(this.W6,0);this.
J(this.W5,0);this.J(this.W4,0);this.J(this.Nn,0);this.J(this.Nm,0);this.J(this.KV
,0);this.W6.Zt=[this,this.AAM];this.W6.SR=[this,this.A39];this.W5.Zt=[this,this.
AAM];this.W5.SR=[this,this.A39];this.W4.Zt=[this,this.AAM];this.W4.SR=[this,this.
A39];this.Nn.Hn=[this,this.Bmm];this.Nn.Aw_(this.W6);this.Nm.Hn=[this,this.Bml];
this.Nm.Aw_(this.W5);this.KV.Hn=[this,this.Bmj];this.KV.Aw_(this.W4);},_Done:function(
){this.__proto__=A.acn.Ahv;this.Abb._Done();this.W6._Done();this.W5._Done();this.
W4._Done();this.Nn._Done();this.Nm._Done();this.KV._Done();A.acn.Ahv._Done.call(
this);},_ReInit:function(){A.acn.Ahv._ReInit.call(this);this.Abb._ReInit();this.
W6._ReInit();this.W5._ReInit();this.W4._ReInit();this.Nn._ReInit();this.Nm._ReInit(
);this.KV._ReInit();},_Mark:function(D){var B;A.acn.Ahv._Mark.call(this,D);if((B=
this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AWe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhG={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhG;this.H(E6);},_className:"Demonstrator::SelectionAreaContent"};C.AMH={Y:null
,VD:null,TH:null,BCj:function(G){var B;this.TH.H(A.abI(this.TH.M,((B=this.M)[3]-
B[1])-((B=this.VD.M)[3]-B[1])));},_Init:function(aArg){C.AhG._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AMa._Init.call(this.VD={I:this},0);C.
AVZ._Init.call(this.TH={I:this},0);this.__proto__=C.AMH;this.Y.A1(0x3F);this.Y.H(
E6);this.Y.J0(1);this.VD.H(AhT);this.VD.Ai(true);this.VD.ArY(false);this.TH.A1(0x3
);this.TH.H(K2);this.TH.Ai(true);this.TH.N8(C.AMA);this.TH.BnS(C.AMO);this.J(this.
Y,0);this.J(this.VD,0);this.J(this.TH,0);this.Ba(this.TH);this.Y.En=[this,this.BCj
];this.TH.Zy(A._GetAutoObject(A.aco.Aqf));},_Done:function(){this.__proto__=C.AhG;
this.Y._Done();this.VD._Done();this.TH._Done();C.AhG._Done.call(this);},_ReInit:
function(){C.AhG._ReInit.call(this);this.Y._ReInit();this.VD._ReInit();this.TH._ReInit(
);},_Mark:function(D){var B;C.AhG._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.VD={
_Init:function(aArg){C.AuF._Init.call(this,aArg);this.__proto__=C.VD;this.T(A.aaR(
A.acf.A6y));},_ReInit:function(){C.AuF._ReInit.call(this);this.T(A.aaR(A.acf.A6y
));},_className:"Demonstrator::ActionsHeader"};C.AMa={Background:null,XW:null,Y:
null,AcA:null,ZO:null,ZN:null,Acz:null,Aj_:null,Aj$:null,Aka:null,Akb:null,Akc:null
,Ahl:false,Init:function(aArg){var B;A.zX([this,this.AKL],[B=A._GetAutoObject(A.
aco.GN),B.AEW,B.Ar6],0);A.pe([this,this.AKL],this);},Akp:function(G){this.ArY(true
);},Ako:function(G){this.ArY(false);},ArY:function(E){if(this.Ahl===E)return;this.
Ahl=E;this.XW.ArY(E);A.pe([this,this.BfV],this);},AKL:function(G){var BCr=A._GetAutoObject(
A.aco.GN).Afj===2;A._GetAutoObject(A.Device.Helper).J7(this.ZN,BCr);},BfV:function(
G){var B;if(this.Ahl)this.H(A.abI(this.M,(B=this.XW.M)[3]-B[1]));else this.H(A.abI(
this.M,((B=this.XW.M)[3]-B[1])+((B=this.Y.Dd(0x401))[3]-B[1])));},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.VD._Init.call(this.XW={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);
C.AcA._Init.call(this.AcA={I:this},0);C.ZO._Init.call(this.ZO={I:this},0);C.ZN._Init.
call(this.ZN={I:this},0);C.Acz._Init.call(this.Acz={I:this},0);A.acg.C9._Init.call(
this.Aj_={I:this},0);A.acg.C9._Init.call(this.Aj$={I:this},0);A.acg.C9._Init.call(
this.Aka={I:this},0);A.acg.C9._Init.call(this.Akb={I:this},0);A.acg.C9._Init.call(
this.Akc={I:this},0);this.__proto__=C.AMa;var B;this.H(Aal);this.Background.A1(0x3F
);this.Background.H(Aal);this.XW.A1(0x1D);this.XW.H(Cg);this.Y.H(LB);this.Y.J0(1
);this.AcA.H(AhU);this.AcA.Ai(true);this.ZO.H(Ak9);this.ZO.Ai(true);this.ZN.H(Oj
);this.ZN.Ai(true);this.Acz.H(Xn);this.Acz.Ai(true);this.Aj_.DE(Xl);this.Aj_.DO(
MR);this.Aj_.L(A.jb.Bb);this.Aj$.DE(Aoe);this.Aj$.DO(AfD);this.Aj$.L(A.jb.Bb);this.
Aka.DE(AhV);this.Aka.DO(AcP);this.Aka.L(A.jb.Bb);this.Akb.DE(Aam);this.Akb.DO(Ax9
);this.Akb.L(A.jb.Bb);this.Akc.DE(Ax_);this.Akc.DO(Ax$);this.Akc.L(A.jb.Bb);this.
J(this.Background,0);this.J(this.XW,0);this.J(this.Y,0);this.J(this.AcA,0);this.
J(this.ZO,0);this.J(this.ZN,0);this.J(this.Acz,0);this.J(this.Aj_,0);this.J(this.
Aj$,0);this.J(this.Aka,0);this.J(this.Akb,0);this.J(this.Akc,0);this.XW.A_Q([this
,this.Akp]);this.XW.A_P([this,this.Ako]);this.Y.En=[this,this.BfV];this.ZO.Bob([
B=A._GetAutoObject(A.aco.GN),B.AEW,B.Ar6]);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();this.XW._Done();this.Y._Done();this.AcA.
_Done();this.ZO._Done();this.ZN._Done();this.Acz._Done();this.Aj_._Done();this.Aj$.
_Done();this.Aka._Done();this.Akb._Done();this.Akc._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
XW._ReInit();this.Y._ReInit();this.AcA._ReInit();this.ZO._ReInit();this.ZN._ReInit(
);this.Acz._ReInit();this.Aj_._ReInit();this.Aj$._ReInit();this.Aka._ReInit();this.
Akb._ReInit();this.Akc._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aj_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsMenu"};C.Jv={YK:null,Ag9:null,Bn:null,C9:null,Af$:function(
G){},A03:function(s){this.Af$(s);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.YK={I:this},0);A.acg.Ap._Init.call(this.Ag9={I:this
},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.C9._Init.call(this.C9={I:this
},0);this.__proto__=C.Jv;this.H(Cg);this.YK.H(Aya);this.YK.L(A.jb.Text);this.Ag9.
H(Ak_);this.Ag9.L(A.jb.Text);this.Ag9.Cx(0);this.Bn.J2(J_);this.Bn.Kz(Oh);this.Bn.
DE(Qb);this.Bn.DO(MR);this.C9.DE(Qb);this.C9.DO(Oh);this.C9.L(A.jb.Bb);this.J(this.
YK,0);this.J(this.Ag9,0);this.J(this.Bn,0);this.J(this.C9,0);this.YK.Ax(A.aaL(A.
aci.TS));this.Ag9.Ax(A.aaL(A.aci.AUc));this.Bn.BG=[this,this.A03];},_Done:function(
){this.__proto__=A.Core.P;this.YK._Done();this.Ag9._Done();this.Bn._Done();this.
C9._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.YK._ReInit();this.Ag9._ReInit();this.Bn._ReInit();this.C9._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.YK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsItem"};C.ZO={Afk:null,DU:null,YJ:null,BX:null,Ni:null,AhC:
null,ANJ:0,Init:function(aArg){A.pe([this,this.Hg],this);},Af$:function(G){var ID=
A.ab0(this.YJ.String,0,10);var Il=false;switch(A._GetAutoObject(A.aco.GN).Afj){case
2:if(A._GetAutoObject(A.acq.WY).AB$)Il=A._GetAutoObject(A.aco.GN).BCG(ID);break;
case 0:case 1:Il=A._GetAutoObject(A.aco.GN).BgV(ID);break;default:A.ab5("%s%e",AsZ
,A._GetAutoObject(A.aco.GN).Afj);}if(Il){ID=ID+1;this.YJ.R(ID.toFixed());}},BBZ:
function(G){var AJr=null;var AKB=0;switch(A._GetAutoObject(A.aco.GN).Afj){case 2:{
AJr=A.aaL(A.ach.Aq6);AKB=276;}break;case 0:{AJr=A.aaL(A.ach.AjU);AKB=900;}break;
case 1:{AJr=A.aaL(C.AxX);AKB=276;}break;default:A.ab5("%s%e",AsZ,A._GetAutoObject(
A.aco.GN).Afj);}this.YJ.R(((AKB*1000000000000)+(A.abY(this.YJ.String,0,10)%1000000000000
)).toFixed());this.YK.Ax(AJr);},Hg:function(G){var F;if(!!this.Afk)this.ATg((F=this.
Afk,F[1].call(F[0])));A.pe([this,this.BBZ],this);A.we(this,0);},Bob:function(E){
if(A.aaZ(this.Afk,E))return;if(!!this.Afk)A.z$([this,this.Hg],this.Afk,0);this.Afk=
E;if(!!E)A.zX([this,this.Hg],this.Afk,0);if(!!E)A.pe([this,this.Hg],this);},ATg:
function(E){var F;if(this.ANJ===E)return;this.ANJ=E;if(!!this.Afk)(F=this.Afk,F[
2].call(F[0],E));A.abo([this,this.A88,this.ATg],0);},A88:function(){return this.
ANJ;},_Init:function(aArg){C.Jv._Init.call(this,aArg);A.acr.DU._Init.call(this.DU={
I:this},0);C.Akk._Init.call(this.YJ={I:this},0);A.acg.BX._Init.call(this.BX={I:this
},0);A.acg.Ap._Init.call(this.Ni={I:this},0);C.AhC._Init.call(this.AhC={I:this},
0);this.__proto__=C.ZO;this.DU.H(Ayb);this.DU.ArX(120);this.DU.GP=30;this.DU.ATe(
A.jb.Ri);this.DU.A_g(A.jb.CV);this.DU.A_l(A.jb.CV);this.DU.ATf(A.jb.Ri);this.DU.
A_m(A.jb.Text);this.DU.A_h(A.jb.AV);this.DU.A_n(A.jb.Bm);this.DU.A_k(A.jb.AV);this.
DU.A_j(A.jb.Ri);this.Bn.J2(Ayc);this.Bn.DO(O_);this.YJ.H(Rp);this.YJ.R(Ayd);this.
YJ.L(A.jb.Text);this.BX.H(U3);this.BX.Nu(2);this.BX.L(A.jb.Text);this.Ni.H(As0);
this.Ni.L(A.jb.Text);this.Ni.A4(0xC);this.Ni.Cx(3);this.J(this.DU,-2);this.J(this.
YJ,-1);this.J(this.BX,0);this.J(this.Ni,0);this.DU.Au([this,this.A88,this.ATg]);
this.DU.A_t(this.AhC);this.DU.ArP(A.aaL(A.fl.Bg));this.DU.AwO(A.aaL(A.fl.Bg));this.
Ni.Ax(A.aaL(A.ach.Ajr));this.Init(aArg);},_Done:function(){this.__proto__=C.Jv;this.
DU._Done();this.YJ._Done();this.BX._Done();this.Ni._Done();this.AhC._Done();C.Jv.
_Done.call(this);},_ReInit:function(){C.Jv._ReInit.call(this);this.DU._ReInit();
this.YJ._ReInit();this.BX._ReInit();this.Ni._ReInit();this.AhC._ReInit();this.DU.
ArP(A.aaL(A.fl.Bg));this.DU.AwO(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.Afk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ni)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AhC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.AcA={UO:null,OZ:null,A4W:0,Init:function(aArg){var B;A.zX([this,this.BBB],[B=
A._GetAutoObject(A.aco.GN),B.ASW,B.ATK],0);A.zX([this,this.AAU],[B=A._GetAutoObject(
A.Device.Device),B.ArB,B.Atq],0);A.pe([this,this.AAU],this);},Aj:function(Ae){C.
Jv.Aj.call(this,Ae);this.OZ.Z(!A._GetAutoObject(A.aco.GN).Axv);},Af$:function(G){
var B;A._GetAutoObject(A.aco.GN).Bfx(this);},AAU:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4W){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OZ.R(A.abk(A._GetAutoObject(A.aco.GN).W2/100,0,1)
);break;case 1:{var Auu=A._GetAutoObject(A.Device.Converter).AVu(A._GetAutoObject(
A.aco.GN).W2/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OZ.R(
A.abk(Auu,0,1));}break;default:A.ab5("%s%e",Aye,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4W=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BBk:function(G){var B;var Agq=A.abX(this.OZ.String,0);Agq=A._GetAutoObject(A.Device.
Converter).AVu(Agq,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agq*=100;
A._GetAutoObject(A.aco.GN).AF0(Math.round(Agq)|0);},BBB:function(G){this.Am();},
_Init:function(aArg){C.Jv._Init.call(this,aArg);A.acs.UO._Init.call(this.UO={I:this
},0);C.OZ._Init.call(this.OZ={I:this},0);this.__proto__=C.AcA;var B;this.UO.H(Ayf
);this.UO.A_J(A.aaR(A.acf.A5L));this.OZ.H(Ak$);this.OZ.R(Ayg);this.OZ.L(A.jb.Text
);this.OZ.BmL(true);this.A4W=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UO,0);this.J(this.OZ,0);this.YK.Ax(A.aaL(A.ach.Ag4));this.UO.Au([B=A._GetAutoObject(
A.aco.GN),B.ASW,B.ATK]);this.UO.OnSetAppearance(A._GetAutoObject(A.acx.AuZ));this.
OZ.Dk=[this,this.BBk];this.Init(aArg);},_Done:function(){this.__proto__=C.Jv;this.
UO._Done();this.OZ._Done();C.Jv._Done.call(this);},_ReInit:function(){C.Jv._ReInit.
call(this);this.UO._ReInit();this.OZ._ReInit();this.UO.A_J(A.aaR(A.acf.A5L));},_Mark:
function(D){var B;C.Jv._Mark.call(this,D);if((B=this.UO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Are={Q:null,BX:null,Bn:null,AgJ:null,Am7:null,Am6:null,Ark:null,Text:null,Hp:
null,Ap:null,CZ:null,Arj:null,Arl:null,Ape:false,Bl:function(aSize){this.Hp.H(A.
abK(this.Hp.M,aSize));this.BX.AxC(1);this.BX.Jz(0,40);this.BX.Fi(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BX.Fi(0,20,20,12.5,12.5,90,270,10);this.BX.VX(0);},Aj:
function(Ae){var B;var F;A.Core.P.Aj.call(this,Ae);var IF=((Ae&0x40)===0x40);if(
IF){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgJ.As(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgJ.As(false
);this.CZ.Z(false);this.Ap.Z(true);}this.Ape=IF;},Af$:function(G){var B;if(!((this.
U&0x80)===0x80))this.Ip().AM0(this);},A8N:function(G){},Bbs:function(s){this.A8N(
s);},BkU:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CZ.H(A.abM(this.CZ.M,A.aaI(this.Text.M)[0]));else{this.CZ.H(A.abM(this.CZ.M
,this.Text.AOY(0)[2]+2));this.CZ.H(A.abO(this.CZ.M,this.Text.AOY(0)[1]));this.CZ.
H(A.abI(this.CZ.M,(B=this.Text.AOY(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8L:function(G){},Bbr:function(s){this.A8L(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);}
,Hg:function(G){this.Am();},Bmo:function(G){var B;if(((this.U&0x80)===0x80))this.
Ip().ACV(this);},BfE:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.HA._Init.call(this.BX={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TN._Init.call(this.AgJ={I:this},0);A.Core.BF._Init.call(this.Am7={
I:this},0);A.Core.BF._Init.call(this.Am6={I:this},0);A.Core.BF._Init.call(this.Ark={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hp._Init.call(this.
Hp={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AK._Init.call(this.
CZ={I:this},0);A.Core.BF._Init.call(this.Arj={I:this},0);A.Core.BF._Init.call(this.
Arl={I:this},0);this.__proto__=C.Are;var B;this.H(AfE);this.Bn.A1(0x3F);this.Bn.
J2(J_);this.Bn.Kz(Aof);this.Bn.DE(I1);this.Bn.DO(Rn);this.AgJ.Fp(530);this.AgJ.Uv(
530);this.Am7.Filter=143;this.Am6.Filter=45;this.Ark.Filter=1;this.Text.A1(0x3F);
this.Text.H(AfE);this.Text.Je(true);this.Text.A4(0x12);this.Text.L(0xFFB3B3B3);this.
Hp.H(AfE);this.Hp.L(0xFFB3B3B3);this.Hp.Nu(1);this.Ap.H(Aog);this.CZ.H(As1);this.
CZ.L(0xFFB3B3B3);this.CZ.Z(false);this.Arj.Filter=138;this.Arl.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hp,0);this.J(this.Ap,0);this.J(this.CZ
,0);this.Bn.Lr=[this,this.Af$];this.AgJ.Q=[B=this.CZ,B.Fo,B.Z];this.Am7.BG=[this
,this.Bbs];this.Am7.D2=[this,this.Bbs];this.Am6.BG=[this,this.Bbr];this.Am6.D2=[
this,this.Bbr];this.Ark.BG=[this,this.Bmo];this.Text.Q7([this,this.BkU]);this.Text.
S(A.aaL(A.fl.Ak));this.Hp.ZD(this.BX);this.Ap.Ax(null);this.Arj.BG=[this,this.BfE
];this.Arl.BG=[this,this.BfE];},_Done:function(){this.__proto__=A.Core.P;this.BX.
_Done();this.Bn._Done();this.AgJ._Done();this.Am7._Done();this.Am6._Done();this.
Ark._Done();this.Text._Done();this.Hp._Done();this.Ap._Done();this.CZ._Done();this.
Arj._Done();this.Arl._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BX._ReInit();this.Bn._ReInit();this.AgJ._ReInit();this.
Am7._ReInit();this.Am6._ReInit();this.Ark._ReInit();this.Text._ReInit();this.Hp.
_ReInit();this.Ap._ReInit();this.CZ._ReInit();this.Arj._ReInit();this.Arl._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am7)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ark)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arj)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aer={Background:null,Yy:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);C.Yy._Init.call(this.Yy={I:this
},0);this.__proto__=C.Aer;var B;this.H(AcQ);this.Background.H(AcQ);this.Yy.A1(0x1D
);this.Yy.H(As2);this.J(this.Background,0);this.J(this.Yy,0);this.Yy.Au([B=A._GetAutoObject(
A.aco.AgM),B.A9E,B.AFV]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yy._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yy._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OZ={Init:function(aArg){var B;A.zX([this,this.AAU],[B=A._GetAutoObject(A.Device.
Device),B.ArB,B.Atq],0);A.pe([this,this.AAU],this);},Aj:function(Ae){var B;C.Akk.
Aj.call(this,Ae);var IF=((this.U&0x40)===0x40);if(!IF&&(this.String.length>0))this.
Text.R(((this.String+As3)+A._GetAutoObject(A.acj.Temperature).AlM())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D7>this.String.
length)this.D7=this.String.length;},AAU:function(G){this.Am();},_Init:function(aArg
){C.Akk._Init.call(this,aArg);this.__proto__=C.OZ;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akk={B8:null,Dk:null,I2:null,Cr:null,AmE:null,Sl:null,HH:null,Bn:null,Text:null
,CZ:null,Aqx:null,Asg:null,BX:null,Hp:null,Arx:null,Aq2:null,AqK:null,String:A.jV
,D7:0,AQ:0xFFB3B3B3,AvZ:15,ANR:false,LF:false,Bl:function(aSize){this.Hp.H(A.abK(
this.Hp.M,aSize));this.BX.AxC(1);this.BX.Jz(0,40);this.BX.Fi(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BX.Fi(0,20,20,12.5,12.5,90,270,10);this.BX.VX(0);},Aj:function(
Ae){var B;A.acn.Ji.Aj.call(this,Ae);if(((Ae&0x40)===0x40))this.I2.As(true);else{
this.I2.As(false);this.CZ.Z(false);}},A46:function(G){var B;var Bd=this.Text.M;var
NG=0;var NH=0;if(this.CZ.Et[0]<Bd[0])NG=Bd[0]-this.CZ.Et[0];if(this.CZ.Et[0]>Bd[
2])NG=Bd[2]-this.CZ.Et[0];if(this.CZ.Et[1]<Bd[1])NH=Bd[1]-this.CZ.Et[1];if(this.
CZ.ED[1]>Bd[3])NH=Bd[3]-this.CZ.ED[1];if(!!NG||!!NH)this.Text.Gf(A.abf(this.Text.
Bs,[NG,NH]));NG=this.Text.Bs[0];NH=this.Text.Bs[1];var C7=[(B=this.Text.Dd())[2]-
B[0],B[3]-B[1]];if(C7[0]<=((B=this.Text.M)[2]-B[0]))NG=0;if(C7[1]<=((B=this.Text.
M)[3]-B[1]))NH=0;this.Text.Gf([NG,NH]);},Amm:function(G){if(!this.B8)return;var A4w=
this.Text.AG2(this.D7);var pos=this.Text.Afg(A4w);this.CZ.DO(A.abe(pos,[0,this.B8.
Ascent]));this.CZ.DE(A.abf(pos,[0,this.B8.Descent]));if(this.I2.Bw){this.I2.As(false
);this.I2.As(true);}if(this.LF){A.pe([this,this.A46],this);this.LF=false;}},AAQ:
function(G){if(!this.A7v(0x80))this.Ip().AM0(this);var EH=this.Text.AUg(this.Bn.
H4);var Vo=this.Text.AnR(EH);if(Vo!==this.D7){this.D7=Vo;A.pe([this,this.Amm],this
);this.LF=true;}},AAJ:function(G){if(!this.B8)return;var EH=this.Text.AG2(this.D7
);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnR(EH)===this.D7){EH=[EH[0
],EH[1]-1];EH=[this.Text.ADi(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnR(EH)===this.D7){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vo=
this.Text.AnR(EH);if(Vo!==this.D7){this.D7=Vo;A.pe([this,this.Amm],this);this.LF=
true;}},Bfo:function(G){if(!this.D7)return;this.R(A.ab1(this.String,this.D7-1,1)
);this.D7=this.D7-1;this.LF=true;A.pe(this.Dk,this);},AAK:function(G){if(this.D7>=
this.String.length)return;this.R(A.ab1(this.String,this.D7,1));this.LF=true;A.pe(
this.Dk,this);},Bft:function(G){if(this.String.length>=this.AvZ)return;var Bzx=this.
HH.Dz;var Aus=String.fromCharCode(Bzx);this.R(A.abU(this.String,Aus,this.D7));this.
D7=this.D7+Aus.length;this.LF=true;A.pe(this.Dk,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D7>(E.length+1))this.D7=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LF=true;this.Text.Gf(J_);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CZ.L(E);this.Hp.L(E);},S:function(E){if(this.
B8===E)return;this.B8=E;this.Text.S(E);this.LF=true;this.Text.Gf(J_);},BfF:function(
G){if(this.ANR===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvZ)return;this.R(A.abU(this.String,Th,this.
D7));this.D7=this.D7+1;this.LF=true;A.pe(this.Dk,this);},Bce:function(s){this.BfF(
s);},BmL:function(E){if(this.ANR===E)return;this.ANR=E;if(E===false){var Bgm=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bgm>=0)this.R(A.abV(this.String,Bgm
));}this.LF=true;this.Text.Gf(J_);},BnR:function(E){if(this.AvZ===E)return;this.
AvZ=E;this.R(A.abV(this.String,E));this.LF=true;this.Text.Gf(J_);},BBs:function(
G){if(this.A7v(0x80)){this.Ip().ACV(this);this.Ct(0x10,0x0);}this.Am();},BBg:function(
G){var Vo=this.String.length;if(Vo!==this.D7){this.D7=Vo;A.pe([this,this.Amm],this
);this.LF=true;}},BBj:function(G){if(!!this.D7){this.D7=0;A.pe([this,this.Amm],this
);this.LF=true;}},_Init:function(aArg){A.acn.Ji._Init.call(this,aArg);A.acl.TN._Init.
call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cr={I:this},0);A.Core.BF._Init.
call(this.AmE={I:this},0);A.Core.BF._Init.call(this.Sl={I:this},0);A.Core.BF._Init.
call(this.HH={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C9._Init.call(this.CZ={I:this},0);A.Core.BF._Init.
call(this.Aqx={I:this},0);A.Core.BF._Init.call(this.Asg={I:this},0);A.Graphics.HA.
_Init.call(this.BX={I:this},0);A.acg.Hp._Init.call(this.Hp={I:this},0);A.Core.BF.
_Init.call(this.Arx={I:this},0);A.Core.BF._Init.call(this.Aq2={I:this},0);A.Core.
BF._Init.call(this.AqK={I:this},0);this.__proto__=C.Akk;var B;this.H(AfE);this.I2.
B3=false;this.I2.Cy=true;this.I2.Fp(500);this.I2.Uv(500);this.Cr.Filter=147;this.
AmE.Filter=45;this.Sl.Filter=44;this.HH.Filter=143;this.Bn.A1(0x3F);this.Bn.J2(Rn
);this.Bn.Kz(I1);this.Bn.DE(Aof);this.Bn.DO(J_);this.Bn.AFG(3);this.Text.A1(0x3F
);this.Text.H(AfE);this.Text.Lu(false);this.Text.A4(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CZ.DE(As4);this.CZ.DO(Aoh);this.CZ.A$k(2);this.CZ.A$j(2);
this.CZ.L(0xFFB3B3B3);this.CZ.Z(false);this.Aqx.Filter=138;this.Asg.Filter=137;this.
Hp.H(AfE);this.Hp.L(0xFFB3B3B3);this.Hp.Nu(1);this.Arx.Filter=1;this.Aq2.Filter=
41;this.AqK.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CZ,0);this.
J(this.Hp,0);this.I2.Q=[B=this.CZ,B.Fo,B.Z];this.Cr.BG=[this,this.AAJ];this.Cr.D2=[
this,this.AAJ];this.AmE.BG=[this,this.Bfo];this.AmE.D2=[this,this.Bfo];this.Sl.BG=[
this,this.AAK];this.Sl.D2=[this,this.AAK];this.HH.BG=[this,this.Bft];this.HH.D2=[
this,this.Bft];this.Bn.BG=[this,this.AAQ];this.Text.Q7([this,this.Amm]);this.Text.
S(A.aaL(A.fl.Ak));this.B8=A.aaL(A.fl.Ak);this.Aqx.BG=[this,this.Bce];this.Asg.BG=[
this,this.Bce];this.Hp.ZD(this.BX);this.Arx.BG=[this,this.BBs];this.Aq2.BG=[this
,this.BBj];this.AqK.BG=[this,this.BBg];},_Done:function(){this.__proto__=A.acn.Ji;
this.I2._Done();this.Cr._Done();this.AmE._Done();this.Sl._Done();this.HH._Done();
this.Bn._Done();this.Text._Done();this.CZ._Done();this.Aqx._Done();this.Asg._Done(
);this.BX._Done();this.Hp._Done();this.Arx._Done();this.Aq2._Done();this.AqK._Done(
);A.acn.Ji._Done.call(this);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.
I2._ReInit();this.Cr._ReInit();this.AmE._ReInit();this.Sl._ReInit();this.HH._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CZ._ReInit();this.Aqx._ReInit();this.
Asg._ReInit();this.BX._ReInit();this.Hp._ReInit();this.Arx._ReInit();this.Aq2._ReInit(
);this.AqK._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Ji._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Asg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arx)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Acz={LabelDataSync:
null,Af$:function(G){var B;A.pe([B=A._GetAutoObject(A.acq.WY),B.BCR],this);},_Init:
function(aArg){C.Jv._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Acz;this.LabelDataSync.H(As5);this.LabelDataSync.R(A.
aaR(A.acf.A6n));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YK.Ax(A.aaL(C.AVl));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.AY(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jv;this.LabelDataSync._Done();
C.Jv._Done.call(this);},_ReInit:function(){C.Jv._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A6n));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVl={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abk={TimespanDaysToString:null,Avw:
function(aIndex){if(this.AqV()>aIndex)return this.TimespanDaysToString.BT(aIndex
);A.ab5("%s",Ala);return A.jV;},AqV:function(){return 4;},C8:function(aIndex){var
Ai_=0;switch(aIndex){case 0:Ai_=0;break;case 1:Ai_=1;break;case 2:Ai_=2;break;case
3:Ai_=3;break;default:throw new Error(Ayh+aIndex.toFixed());}return Ai_;},_Init:
function(aArg){A.acr.VY._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abk;},_Done:function(
){this.__proto__=A.acr.VY;this.TimespanDaysToString._Done();A.acr.VY._Done.call(
this);},_ReInit:function(){A.acr.VY._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acr.VY._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGE={GM:0,AV5:1,Hl:2,Year:3};C.ACS={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxX={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZN={Aeg:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bq,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Dr());var A2c=Av.Format(Iw);this.Aeg.R(A2c);},
Af$:function(G){var B;var JJ=this.Aeg.String;var O;O=JJ.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){JJ=A.ab1(JJ,O,1);O=JJ.indexOf(String.fromCharCode(0x2E),O);
}JJ=JJ+Ayi;JJ=JJ+A._GetAutoObject(A.acj.VM).ADd(JJ).toFixed();var A2c=A._GetAutoObject(
A.Device.AkF).Bga(JJ);A._GetAutoObject(A.aco.GN).BCH(((B=(A2c|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jv._Init.call(this,aArg);C.ANO._Init.call(this.Aeg={
I:this},0);this.__proto__=C.ZN;this.Aeg.H(Rp);this.Aeg.L(A.jb.Text);this.Aeg.BnR(
10);this.J(this.Aeg,-1);this.YK.Ax(A.aaL(A.ach.Aq6));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jv;this.Aeg._Done();C.Jv._Done.call(this);},_ReInit:function(
){C.Jv._ReInit.call(this);this.Aeg._ReInit();},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.Aeg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Afj={BGS:0,BGO:1,VM:2,LAST:3};C.AhC={AhD:null,Avw:function(aIndex){if(this.AqV(
)>aIndex)return this.AhD.BT(aIndex);A.ab5("%s",Ala);return A.jV;},AqV:function(){
return 3;},_Init:function(aArg){A.acr.VY._Init.call(this,aArg);C.AhD._Init.call(
this.AhD={I:this},0);this.__proto__=C.AhC;},_Done:function(){this.__proto__=A.acr.
VY;this.AhD._Done();A.acr.VY._Done.call(this);},_ReInit:function(){A.acr.VY._ReInit.
call(this);this.AhD._ReInit();},_Mark:function(D){var B;A.acr.VY._Mark.call(this
,D);if((B=this.AhD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhD={BT:function(A7){var BdF=A7;var AK8=A.jV;switch(BdF){case 2:AK8=A.aaR(A.
acf.VM);break;case 0:AK8=A.aaR(A.acf.Transponder);break;case 1:AK8=A.aaR(A.acf.Bi_
);break;default:throw new Error(Ayj+BdF.toFixed());}return AK8;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhD;},_className:
"Demonstrator::ScanTypeToString"};C.ANO={BfF:function(G){var Bgn=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bgn++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bgn>=2)return;if(this.String.length>=this.AvZ)return;
this.R(A.abU(this.String,Th,this.D7));this.D7=this.D7+1;this.LF=true;A.pe(this.Dk
,this);},_Init:function(aArg){C.Akk._Init.call(this,aArg);this.__proto__=C.ANO;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVZ.__proto__=A.acn.Menu;C.AUT.__proto__=A.Core.P;C.AMA.__proto__=
C.A$;C.Mr.__proto__=A.Core.P;C.Yy.__proto__=C.Are;C.Abl.__proto__=A.Core.P;C.AvF.
__proto__=A.acn.Ahx;C.AMO.__proto__=C.FC;C.AuF.__proto__=C.FC;C.A$.__proto__=A.Core.
P;C.FC.__proto__=A.Core.P;C.ANP.__proto__=A.acn.Ahv;C.AhG.__proto__=A.Core.P;C.AMH.
__proto__=C.AhG;C.VD.__proto__=C.AuF;C.AMa.__proto__=A.Core.P;C.Jv.__proto__=A.Core.
P;C.ZO.__proto__=C.Jv;C.AcA.__proto__=C.Jv;C.Are.__proto__=A.Core.P;C.Aer.__proto__=
A.Core.P;C.OZ.__proto__=C.Akk;C.Akk.__proto__=A.acn.Ji;C.Acz.__proto__=C.Jv;C.Abk.
__proto__=A.acr.VY;C.ZN.__proto__=C.Jv;C.AhC.__proto__=A.acr.VY;C.AhD.__proto__=
A.Device.EnumToString;C.ANO.__proto__=C.Akk;};C._ReInit=function(){};C.DJ=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM_[0]._this)&&(B._cycle!=D))B._Done(C.AM_[0]._this=null);if((B=C.
AM$[0]._this)&&(B._cycle!=D))B._Done(C.AM$[0]._this=null);if((B=C.ANa[0]._this)&&(
B._cycle!=D))B._Done(C.ANa[0]._this=null);if((B=C.ANb[0]._this)&&(B._cycle!=D))B.
_Done(C.ANb[0]._this=null);if((B=C.AQf[0]._this)&&(B._cycle!=D))B._Done(C.AQf[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.AR2[0]._this)&&(B._cycle!=D))B._Done(C.AR2[0]._this=null);if((B=C.Ajq[
0]._this)&&(B._cycle!=D))B._Done(C.Ajq[0]._this=null);if((B=C.AMR[0]._this)&&(B.
_cycle!=D))B._Done(C.AMR[0]._this=null);if((B=C.Asw[0]._this)&&(B._cycle!=D))B._Done(
C.Asw[0]._this=null);if((B=C.AVq[0]._this)&&(B._cycle!=D))B._Done(C.AVq[0]._this=
null);if((B=C.AHw[0]._this)&&(B._cycle!=D))B._Done(C.AHw[0]._this=null);if((B=C.
AWe[0]._this)&&(B._cycle!=D))B._Done(C.AWe[0]._this=null);if((B=C.AVl[0]._this)&&(
B._cycle!=D))B._Done(C.AVl[0]._this=null);if((B=C.ACS[0]._this)&&(B._cycle!=D))B.
_Done(C.ACS[0]._this=null);if((B=C.AxX[0]._this)&&(B._cycle!=D))B._Done(C.AxX[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */