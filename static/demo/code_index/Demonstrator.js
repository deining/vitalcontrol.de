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
var Cf=[0,0,370,60];var BD=[360,0,370,60];var E6=[0,0,370,710];var Hq="Unknown animalType";
var I0=[58,10,120,50];var Iv=[0,0,60,60];var O9=[120,0,360,60];var P_="\u2015";var
P$=[0,0,240,60];var CR=[0,0,40,60];var Fc=[100,0,130,60];var L8=[43,0,100,60];var
Qa=[125,0,240,60];var J9=[0,0];var Oh=[100,0];var Qb=[100,60];var MR=[0,60];var Te=[
107,0];var UW=[240,0];var Z8=[240,60];var W$=[107,60];var Iw="%d.%m.%Y";var UX="Unhandled date unit: ";
var Z9=[0,0,200,180];var UY=[36,0,200,30];var Z_=[0,30,160,60];var Xa="Text";var
Z$=[0,70,40,110];var Aaa=[44,70,156,110];var UZ=[160,70,200,110];var Xb=[7,2,27,
25];var O_=[0,30,170,180];var Aab=[170,34,190,57];var Oi=[0,0,40,40];var Rn=[0,40
];var Xc=[40,40];var Xd=[40,0];var Tf=[0,0,370,100];var Xe=[20,0,290,60];var Aac=[
0,60,370,100];var Xf="Cap";var Xg=[20,0,370,60];var Xh=[310,0,370,60];var Xi=[370
,0];var Xj=[370,60];var Aad="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Tg=".";var Aae=[0,0,170
,150];var AfB=[0,59,170,90];var Aaf=[110,0,170,150];var Xk=[0,30];var Aag=[50,0,
100,150];var Xl=[0,0,40,150];var AhS=[0,0,370,240];var K2=[0,60,370,710];var AcL=[
0,0,370,300];var JE=[0,60,370,300];var AhT=[0,60,370,120];var Aoc=[0,120,370,180
];var Oj=[0,180,370,240];var Xm=[0,240,370,300];var Aod=[370,120];var AfC=[0,120
];var AhU=[370,180];var AcM=[0,180];var Aah=[370,240];var Ax4=[0,240];var Ax5=[370
,300];var Ax6=[0,300];var Ax7=[0,0,50,60];var Ak_=[50,0,100,60];var AsX="Unhandled scan type";
var Ax8=[3,11,253,51];var Ax9=[57,0];var O$=[57,60];var Ro=[100,10,370,50];var Ax_=
"276000901234567";var U0=[3,10,57,50];var AsY=[3,11,55,50];var Ax$="Unhandled temperature unit";
var Aya=[110,0,260,60];var Ak$=[235,10,370,50];var Ayb="39.5";var AfD=[0,0,270,40
];var Aoe=[270,0];var I1=[270,40];var Aof=[150,0,170,40];var AsZ=[205,10,207,30];
var AcN=[0,0,370,40];var As0=[50,0,320,40];var As1=" ";var As2=[135,23];var Aog=[
135,0];var As3=[100,0,370,60];var Ala="Error: Nullpointer Exception";var Ayc="Unknown Date Piecker Unit Index: ";
var Ayd="0";var Aye="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AM7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVV={Aec:null,AX:null,AR:null,Background:null,Ib:null,AD:null,IX:null,Dn:
null,Ln:null,A76:null,A8v:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IX.H(A.abP(this.IX.M,this.AD.OW));this.IX.H([].concat(this.IX.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IF=((Ae&0x40)===0x40
);if(IF&&(this.AD.Gt<0))this.AD.GT(0);},N8:function(E){if(this.Ln===E)return;this.
Ln=E;this.AD.N8(E);},BnI:function(E){var B;if(this.A76===E)return;if(!!this.Aec){
this.HP(this.Aec);this.Aec=null;}if(!!E){this.Aec=(C.FC.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aec.A_D([this,this.Ako]);this.Aec.A_E([this,this.Akp]);this.Aec.
BnO(null);this.J(this.Aec,0);this.AD.A_K((B=this.Aec.M)[3]-B[1]);}else this.AD.A_K(
0);this.IX.H(A.abP(this.IX.M,this.AD.OW));A.pe([this,this.Fh],this);this.A76=E;}
,Hm:function(G){var B;var Gh=this.AD.G5;var Aa=(C.A$.isPrototypeOf(B=this.AD.Ci)?
B:null);if(!Aa)return;Aa.Zu(this.AX);Aa.Ch(Gh);Aa.Zy(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GN]));},Zu:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ch],this.AX,0);A.z$([this,this.An7],[B=this.AX,B.Fn
,B.Fr],0);}this.AX=E;if(!!E){A.zV([this,this.Ch],E,0);A.zX([this,this.An7],[E,E.
Fn,E.Fr],0);}A.pe([this,this.Ch],this);A.pe([this,this.An7],this);},Ch:function(
G){if(!!this.AX){this.AD.JC(this.AX.B8());this.AD.AbH(0,this.AD.A0-1);}else this.
AD.JC(0);if(this.A8v!==this.AD.A0){this.AD.ABT(null,null);this.A8v=this.AD.A0;}A.
pe([this,this.Fh],this);},Akp:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOT(
))[3]-B[1]));},Ako:function(G){this.H(A.abI(this.M,180));},A9S:function(G){var JH=(
A.Core.BF.isPrototypeOf(G)?G:null);var Gh=this.AD.Gt;if(JH.CO===4)Gh=Gh-1;else if(
JH.CO===5)Gh=Gh+1;else if((JH.Dy>=0x30)&&(JH.Dy<=0x39))A._GetAutoObject(A.aco.AgL
).Ez(JH.Dy);else if(JH.CO===45)A._GetAutoObject(A.aco.AgL).Delete();else JH.Mx=true;
if((Gh<0)||(Gh>=this.AD.A0))return;this.AD.GT(Gh);this.Bzw(Gh,true);},Bzl:function(
G){var Aa=(C.A$.isPrototypeOf(G)?G:null);this.AD.GT(Aa.Hr);},Bzw:function(G$,Ac0
){var B;if((G$<0)||(G$>=this.AD.A0))return;var Az=this.AD.AqS(G$,G$);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOT())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOT())[3]-B[1]))-((B=this.AD.BjF())[3]-B[1]));var LS=A.lb(Az,Bd);if((!
Ac0&&!((LS[0]>=LS[2])||(LS[1]>=LS[3])))||(Ac0&&A.aaY(LS,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GN;this.
AD.Gc(this.AD.Br-Bq);},An7:function(G){this.AD.GT(-1);},Fh:function(G){var B;this.
IX.MH(this.AD.GN*this.AD.A0);this.IX.MJ(((B=this.AD.M)[3]-B[1])-this.AD.OW);this.
IX.MI(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);A.Core.Ib._Init.call(this.Ib={I:this},
0);A.Core.CL._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IX={I:this},
0);A.Core.BF._Init.call(this.Dn={I:this},0);this.__proto__=C.AVV;this.H(Cf);this.
Background.A1(0x3);this.Background.H(Cf);this.Ib.A1(0x3F);this.Ib.H(Cf);this.AD.
A1(0x3F);this.AD.H(Cf);this.AD.Ae6(60);this.AD.JC(0);this.AD.N8(this.Ln);this.IX.
A1(0x3A);this.IX.H(BD);this.IX.L(0xFF808080);this.J(this.Background,0);this.J(this.
Ib,0);this.J(this.AD,0);this.J(this.IX,0);this.AD.Em=[this,this.Fh];this.AD.Hm=[
this,this.Hm];this.AD.Aw4(this.Ib);this.AR=[this,this.Bzl];this.Dn.BG=[this,this.
A9S];this.Dn.D1=[this,this.A9S];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.Ib._Done();this.AD._Done();this.IX._Done();this.Dn._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.Ib._ReInit();this.AD._ReInit();this.IX._ReInit();
this.Dn._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aec)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUP={GJ:null,AK:null,BW:null,Init:function(aArg){var B;A.zX([this,this.GG],[
B=A._GetAutoObject(A.aco.GL),B.A9v,B.A_U],0);A.pe([this,this.GG],this);},Ab4:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HP(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Ba(E);this.AhA(E,this.BW);this.Am();},GG:function(G){var B;if(
!!A._GetAutoObject(A.aco.GL).Asy)this.Ab4((C.AhF.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.GL).Asy,0))?B:null));else this.Ab4(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.BW.
_Init.call(this.BW={I:this},0);this.__proto__=C.AUP;this.H(E6);this.AK.A1(0x3F);
this.AK.H(E6);this.BW.H(E6);this.BW.L(0xFF000000);this.J(this.AK,0);this.J(this.
BW,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AK._Done();
this.BW._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AK._ReInit();this.BW._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMx={ABy:0,Js:0,Background:null,V:null
,Ajl:null,AdV:null,XU:null,AdW:null,Mr:null,Mn:0,LM:false,KL:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.A$.Ai.call(this,Ae);var He=((Ae&0x10)===0x10
);var Fu=((Ae&0x20)===0x20);var IF=((Ae&0x40)===0x40);if(!He){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mr.As(false);this.Mr.Z(false);}else if(IF){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mr.As(true);this.Mr.Z(true);}else
if(Fu){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mr.As(true);this.
Mr.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mr.As(false
);this.Mr.Z(false);}if(!this.KL&&Fu)A._GetAutoObject(A.aco.GL).A_R(this.ABy);this.
Mr.BnK(this.Js>0);this.Mr.Boc(this.ABy>0);this.V.R(this.Mn.toFixed());this.LM=He;
this.KL=Fu;},Ch:function(Ad){if(!this.AX){this.XU.Ax(A.aaL(A.ach.Aey));this.AdV.
L(A.jb.Afu);return;}this.Hr=Ad;if(!!this.AX){this.Js=this.AX.KS(Ad,26);this.ABy=
this.AX.KS(Ad,22);this.Mn=this.AX.CE(Ad,1);var AlO=this.AX.H6(Ad,11);var AlG=this.
AX.Ja(Ad,17);var LV=this.AX.Ja(Ad,13);var Ig=this.AX.AmU(Ad,14);var Xu=A._GetAutoObject(
A.Device.Helper).AMm(LV,AlO,AlG);switch(Ig){case 0:this.XU.Ax(A.aaL(A.ach.Aey));
break;case 1:this.XU.Ax(A.aaL(A.ach.AvD));break;case 2:this.XU.Ax(A.aaL(A.ach.AvG
));break;default:A.ab5("%s%e",Hq,Ig);}this.AdW.Ax(this.XU.Al);this.AdV.L(A._GetAutoObject(
A.acj.Assessment).Qr(Xu));this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajl={I:this},0);A.acg.Ap._Init.call(this.AdV={
I:this},0);A.acg.Ap._Init.call(this.XU={I:this},0);A.acg.Ap._Init.call(this.AdW={
I:this},0);C.Mr._Init.call(this.Mr={I:this},0);this.__proto__=C.AMx;this.Background.
A1(0x3F);this.Background.H(Cf);this.V.A1(0x3F);this.V.H(I0);this.V.R(A.aaR(A.acf.
GM));this.V.A4(0x11);this.V.L(0xFF000000);this.Ajl.H(Iv);this.Ajl.L(A.jb.Text);this.
AdV.H(Iv);this.AdV.L(A.jb.E1);this.XU.H(Iv);this.AdW.H(Iv);this.AdW.L(A.jb.Text);
this.AdW.Cw(1);this.Mr.A1(0x3);this.Mr.H(O9);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajl,0);this.J(this.AdV,0);this.J(this.XU,0);this.J(this.AdW,0);
this.J(this.Mr,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cl(A.
aaL(A.fl.Bg));this.Ajl.Ax(A.aaL(C.AHv));this.AdV.Ax(A.aaL(C.AWa));this.XU.Ax(A.aaL(
A.ach.Aey));this.AdW.Ax(A.aaL(A.ach.Aey));},_Done:function(){this.__proto__=C.A$;
this.Background._Done();this.V._Done();this.Ajl._Done();this.AdV._Done();this.XU.
_Done();this.AdW._Done();this.Mr._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajl._ReInit(
);this.AdV._ReInit();this.XU._ReInit();this.AdW._ReInit();this.Mr._ReInit();this.
V.R(A.aaR(A.acf.GM));this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cl(
A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mr={UC:null,WR:null,AkW:null,Nx:null
,Oe:null,ZL:null,Acx:null,Av0:false,AxQ:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IF=((Ae&0x40)===0x40);if(IF){this.Nx.L(A.
jb.Bm);this.Oe.L(A.jb.Bm);}else{this.Nx.L(A.jb.Text);this.Oe.L(A.jb.Text);}if(this.
AxQ){this.Nx.R(A.aaR(A.acf.Bpd));if(this.Av0){this.UC.Ax(A.aaL(C.AxR));this.WR.Ax(
A.aaL(C.AxR));}else{this.UC.Ax(A.aaL(C.Asv));this.WR.Ax(A.aaL(C.Asv));}}else if(
this.Av0){this.UC.Ax(A.aaL(C.ACQ));this.WR.Ax(A.aaL(C.ACQ));this.Nx.R(P_);}var A4t=
this.AxQ||this.Av0;this.UC.Z(A4t);this.WR.Z(A4t);this.Nx.Z(A4t);this.ZL.As(this.
AxQ);},Boc:function(E){if(this.AxQ===E)return;this.AxQ=E;this.Am();},BnK:function(
E){if(this.Av0===E)return;this.Av0=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.UC={I:this},0);A.acg.Ap._Init.call(this.
WR={I:this},0);A.acg.Ap._Init.call(this.AkW={I:this},0);A.kR.CG._Init.call(this.
Nx={I:this},0);A.kR.CG._Init.call(this.Oe={I:this},0);A.Core.Bn._Init.call(this.
ZL={I:this},0);A.Core.Bn._Init.call(this.Acx={I:this},0);this.__proto__=C.Mr;var
B;this.H(P$);this.UC.A1(0x6);this.UC.H(CR);this.UC.L(A.jb.CU);this.UC.Cw(1);this.
WR.A1(0x6);this.WR.H(CR);this.WR.L(A.jb.Text);this.AkW.A1(0xE);this.AkW.H(Fc);this.
Nx.A1(0x7);this.Nx.H(L8);this.Nx.A4(0x11);this.Nx.L(0xFF000000);this.Oe.A1(0x3);
this.Oe.H(Qa);this.Oe.R(A.aaR(A.acf.Temperature));this.Oe.A4(0x11);this.Oe.L(0xFF000000
);this.ZL.A1(0x3);this.ZL.J1(J9);this.ZL.Kz(Oh);this.ZL.DD(Qb);this.ZL.DN(MR);this.
Acx.A1(0x3);this.Acx.J1(Te);this.Acx.Kz(UW);this.Acx.DD(Z8);this.Acx.DN(W$);this.
J(this.UC,0);this.J(this.WR,0);this.J(this.AkW,0);this.J(this.Nx,0);this.J(this.
Oe,0);this.J(this.ZL,0);this.J(this.Acx,0);this.UC.Ax(A.aaL(C.Asv));this.WR.Ax(A.
aaL(C.Asv));this.AkW.Ax(A.aaL(C.AVm));this.Nx.S(A.aaL(A.fl.Af));this.Nx.AY(A.aaL(
A.fl.Ak));this.Nx.Cl(A.aaL(A.fl.Bg));this.Oe.S(A.aaL(A.fl.Af));this.Oe.AY(A.aaL(
A.fl.Ak));this.Oe.Cl(A.aaL(A.fl.Bg));this.ZL.Ls=[B=A._GetAutoObject(A.aco.GL),B.
BfA];this.Acx.Ls=[B=A._GetAutoObject(A.aco.GL),B.Bfl];},_Done:function(){this.__proto__=
A.Core.P;this.UC._Done();this.WR._Done();this.AkW._Done();this.Nx._Done();this.Oe.
_Done();this.ZL._Done();this.Acx._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.UC._ReInit();this.WR._ReInit();this.AkW._ReInit(
);this.Nx._ReInit();this.Oe._ReInit();this.ZL._ReInit();this.Acx._ReInit();this.
Oe.R(A.aaR(A.acf.Temperature));this.Nx.S(A.aaL(A.fl.Af));this.Nx.AY(A.aaL(A.fl.Ak
));this.Nx.Cl(A.aaL(A.fl.Bg));this.Oe.S(A.aaL(A.fl.Af));this.Oe.AY(A.aaL(A.fl.Ak
));this.Oe.Cl(A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yv={CP:function(){this.Am();
},Ai:function(Ae){C.Ard.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8C:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgL).Ez(D5.Dy);},A8A:function(G){A._GetAutoObject(
A.aco.AgL).Delete();},_Init:function(aArg){C.Ard._Init.call(this,aArg);this.__proto__=
C.Yv;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Ard._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abh={Dl:null,Yo:null,Sh:null,Yp:
null,DT:null,YK:null,AmG:null,Av:null,Pg:null,Nd:null,Abg:null,FZ:0,AvL:0,AGj:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sh.R(this.Av.Format(Iw));if(this.
AGj){this.Sh.Z(false);this.YK.Z(false);this.DT.Z(false);this.Yp.Z(false);this.Pg.
As(true);this.Pg.Z(true);this.Nd.Cw(2);this.Nd.ATz(2);this.Nd.H(A.abM(this.Nd.M,
this.Pg.M[2]));}else{this.Sh.Z(true);this.YK.Z(true);this.DT.Z(true);this.Yp.Z(true
);this.Pg.As(false);this.Pg.Z(false);this.Nd.Cw(3);this.Nd.ATz(3);this.Nd.H(A.abM(
this.Nd.M,this.Sh.M[2]));}},BBe:function(G){this.BnR(!this.AGj);},Ady:function(G
){var F;if(!!this.Dl)this.Ur((F=this.Dl,F[1].call(F[0])));},Ab8:function(E){if(A.
aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Ady],this.Dl,0);this.Dl=E;if(
!!E)A.zX([this,this.Ady],E,0);if(!!E)A.pe([this,this.Ady],this);},Ur:function(E){
if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.FZ);this.BCi(this);this.
Am();},AiE:function(G){var B;var F;var BP=this.FZ;var Ai_=this.Abg.C6(this.AvL);
this.AJr(Ai_);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Ur(((
B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FZ));A.abo(this.Dl,0);}},Aip:function(G){var B;var F;var BP=
this.FZ;var Ai_=this.Abg.C6(this.AvL);this.ALc(Ai_);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Ur(((B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(
this.FZ!==BP){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FZ));A.abo(this.Dl,0);
}},Bnn:function(E){if(this.AvL===E)return;this.AvL=E;},BnR:function(E){if(this.AGj===
E)return;this.AGj=E;this.Am();},BBQ:function(G){var B;var F;var BP=this.FZ;this.
Av.Lu(this.Pg.AEN());this.Av.Uv(this.Pg.AES());this.Av.Year=this.Pg.ArD();this.Ur(((
B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FZ));A.abo(this.Dl,0);}},BCi:function(G){this.Pg.Lu(this.Av.
GK);this.Pg.Uv(this.Av.Hk);this.Pg.AkC(this.Av.Year);},AJr:function(Azb){var B;switch(
Azb){case 0:if(this.Av.GK<this.Av.Zq())this.Av.Lu(this.Av.GK+1);else{this.Av.Lu(
1);this.AJr(2);}break;case 1:if((this.Av.GK+7)<=this.Av.Zq())this.Av.Lu(this.Av.
GK+7);else{this.Av.Lu((7-this.Av.Zq())+this.Av.GK);this.AJr(2);}break;case 2:if(
this.Av.Hk<12)this.Av.Uv(this.Av.Hk+1);else{this.Av.Uv(1);this.AJr(3);}break;case
3:this.Av.Year++;break;default:throw new Error(UX+Azb.toFixed());}},ALc:function(
Azb){var B;switch(Azb){case 0:if(this.Av.GK>1)this.Av.Lu(this.Av.GK-1);else{this.
ALc(2);this.Av.Lu(this.Av.Zq());}break;case 1:if((this.Av.GK-7)>0)this.Av.Lu(this.
Av.GK-7);else{this.ALc(2);this.Av.Lu(this.Av.Zq()-(7-this.Av.GK));}break;case 2:
if(this.Av.Hk>1)this.Av.Uv(this.Av.Hk-1);else{this.Av.Uv(12);this.ALc(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(UX+Azb.toFixed());}},Blv:function(
){return this.AvL;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yo={I:this},0);A.acg.Text._Init.call(this.Sh={I:this},0);C.AvB._Init.
call(this.Yp={I:this},0);A.acr.DT._Init.call(this.DT={I:this},0);C.AvB._Init.call(
this.YK={I:this},0);A.acg.Ap._Init.call(this.AmG={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);C.ANL._Init.call(this.Pg={I:this},0);C.AvB._Init.call(this.Nd={
I:this},0);C.Abg._Init.call(this.Abg={I:this},0);this.__proto__=C.Abh;this.H(Z9);
this.Yo.H(UY);this.Yo.A4(0x11);this.Yo.R(A.aaR(A.acf.Date));this.Yo.L(0xFF000000
);this.Sh.H(Z_);this.Sh.A4(0x11);this.Sh.R(Xa);this.Sh.L(0xFF000000);this.Yp.H(Z$
);this.Yp.A_t(200);this.DT.H(Aaa);this.DT.ArW(120);this.DT.GN=30;this.DT.ATa(A.jb.
CU);this.DT.A96(A.jb.CU);this.DT.A9$(A.jb.CU);this.DT.ATb(A.jb.Text);this.DT.A_a(
A.jb.Text);this.DT.A97(A.jb.AV);this.DT.A_b(A.jb.Bm);this.DT.A9_(A.jb.AV);this.DT.
A99(A.jb.Text);this.YK.H(UZ);this.YK.A_t(200);this.AmG.H(Xb);this.Pg.H(O_);this.
Nd.H(Aab);this.Nd.Cw(3);this.Nd.ATz(3);this.Nd.L(A.jb.Text);this.J(this.Yo,0);this.
J(this.Sh,0);this.J(this.Yp,0);this.J(this.DT,0);this.J(this.YK,0);this.J(this.AmG
,0);this.J(this.Pg,0);this.J(this.Nd,0);this.Yo.S(A.aaL(A.fl.Ak));this.Sh.S(A.aaL(
A.fl.EK));this.Yp.AR=[this,this.Aip];this.Yp.DC(A.aaL(C.AM7));this.Yp.ATA(A.aaL(
C.AM8));this.DT.Au([this,this.Blv,this.Bnn]);this.DT.A_h(this.Abg);this.DT.ArO(A.
aaL(A.fl.Ak));this.DT.AwI(A.aaL(A.fl.Ak));this.YK.AR=[this,this.AiE];this.YK.DC(
A.aaL(C.AM9));this.YK.ATA(A.aaL(C.AM_));this.AmG.Ax(A.aaL(C.AQb));this.Pg.Dj=[this
,this.BBQ];this.Nd.AR=[this,this.BBe];this.Nd.DC(A.aaL(A.ach.Ajr));this.Nd.ATA(A.
aaL(A.ach.Ajr));},_Done:function(){this.__proto__=A.Core.P;this.Yo._Done();this.
Sh._Done();this.Yp._Done();this.DT._Done();this.YK._Done();this.AmG._Done();this.
Av._Done();this.Pg._Done();this.Nd._Done();this.Abg._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yo._ReInit();this.Sh.
_ReInit();this.Yp._ReInit();this.DT._ReInit();this.YK._ReInit();this.AmG._ReInit(
);this.Av._ReInit();this.Pg._ReInit();this.Nd._ReInit();this.Abg._ReInit();this.
Yo.R(A.aaR(A.acf.Date));this.Yo.S(A.aaL(A.fl.Ak));this.Sh.S(A.aaL(A.fl.EK));this.
DT.ArO(A.aaL(A.fl.Ak));this.DT.AwI(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvB={C9:null,Axo:null,AN1:null,AR:null,Bo:null,Dn:null,CT:null,Hw:null,YD:null
,APM:0,TW:0,AUi:0,AQ:0xFFFFFFFF,A2G:false,LM:false,KL:false,Qv:false,Ai:function(
Ae){var B;A.acn.Ahw.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===
0x20);var GD=this.CT.Down&&this.CT.YM;if(!He)this.Hw.Ax(this.AN1);else if(GD){this.
Hw.Ax(this.Axo);this.Hw.Cw(this.AUi);}else{this.Hw.Ax(this.C9);this.Hw.Cw(this.TW
);}this.Hw.L(this.AQ);this.LM=He;this.KL=Fu;this.Qv=GD;},Qu:function(G){this.Am(
);A.pe(this.AR,this);},AiO:function(G){if(this.CT.Down)return;if(this.Dn.Acj)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Bfi:function(G){this.Am();},AAP:function(G){if(!this.CT.YM)return;if(this.CT.NQ
)return;if((this.YD.VK<=0)||(this.CT.Jx<this.YD.VK)){if(this.CT.Jx>=this.Bo.VK)A.
pe(this.AR,this);else this.Bo.As(true);}this.YD.As(false);},AAO:function(G){this.
YD.As(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}},DC:function(E
){if(this.C9===E)return;this.C9=E;this.Am();},ATA:function(E){if(this.Axo===E)return;
this.Axo=E;this.Am();},A3F:function(G){if(!this.CT.YM)return;if(this.CT.NQ)return;
if((this.APM>=0)&&this.A2G){this.A2G=false;this.YD.As(true);A.pe(this.AR,this);}
},A_t:function(E){if(this.APM===E)return;this.APM=E;this.YD.WI(E);},BAI:function(
G){this.A2G=true;},Cw:function(E){if(this.TW===E)return;this.TW=E;this.Am();},ATz:
function(E){if(this.AUi===E)return;this.AUi=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Ahw._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Dn={
I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);A.acg.Ap._Init.call(this.Hw={
I:this},0);A.Core.Timer._Init.call(this.YD={I:this},0);this.__proto__=C.AvB;this.
H(Oi);this.Bo.PX(0);this.Bo.WI(50);this.Dn.Filter=149;this.CT.A1(0x3F);this.CT.J1(
Rn);this.CT.Kz(Xc);this.CT.DD(Xd);this.CT.DN(J9);this.CT.Afe=0xF;this.CT.AFF(100
);this.Hw.A1(0x3F);this.Hw.H(Oi);this.Hw.A4(0x12);this.YD.PX(0);this.J(this.CT,0
);this.J(this.Hw,0);this.Bo.MK=[this,this.Qu];this.Dn.BG=[this,this.AiO];this.CT.
AEY=[this,this.Bfi];this.CT.Av6=[this,this.Bfi];this.CT.D1=[this,this.A3F];this.
CT.Ls=[this,this.AAP];this.CT.BG=[this,this.AAO];this.Hw.Ax(A.aaL(A.aci.TR));this.
C9=A.aaL(A.aci.TR);this.Axo=A.aaL(A.aci.TR);this.AN1=A.aaL(A.aci.TR);this.YD.MK=[
this,this.BAI];},_Done:function(){this.__proto__=A.acn.Ahw;this.Bo._Done();this.
Dn._Done();this.CT._Done();this.Hw._Done();this.YD._Done();A.acn.Ahw._Done.call(
this);},_ReInit:function(){A.acn.Ahw._ReInit.call(this);this.Bo._ReInit();this.Dn.
_ReInit();this.CT._ReInit();this.Hw._ReInit();this.YD._ReInit();},_Mark:function(
D){var B;A.acn.Ahw._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AML={PC:null,V:null,Aeq:null,_Init:function(aArg){
C.FC._Init.call(this,aArg);A.acg.AK._Init.call(this.PC={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aeq._Init.call(this.Aeq={I:this},0);this.__proto__=C.AML;
this.H(Tf);this.PC.A1(0x1D);this.PC.H(Cf);this.PC.L(0xFFE6E6E6);this.V.A1(0x1D);
this.V.H(Xe);this.V.A4(0x11);this.V.R(A.aaR(A.acf.A5v));this.V.L(0xFF000000);this.
Aeq.H(Aac);this.J(this.PC,0);this.J(this.V,0);this.J(this.Aeq,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.PC._Done();this.V._Done();
this.Aeq._Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this
);this.PC._ReInit();this.V._ReInit();this.Aeq._ReInit();this.V.R(A.aaR(A.acf.A5v
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aeq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuB={PC:null,V:null,AeS:null,AeQ:null,Bn:null,DL:Xf,Ahk:false,Ai:function(Ae
){C.FC.Ai.call(this,Ae);if(this.Ahk){this.AeQ.Z(true);this.AeS.Z(false);}else{this.
AeQ.Z(false);this.AeS.Z(true);}},BBC:function(G){if(this.Ahk)A.pe(this.Ako,this);
else A.pe(this.Akp,this);this.ArX(!this.Ahk);},T:function(E){if(this.DL===E)return;
this.DL=E;this.V.R(E);},ArX:function(E){if(this.Ahk===E)return;this.Ahk=E;this.Am(
);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.acg.AK._Init.call(this.PC={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeS={
I:this},0);A.acg.Ap._Init.call(this.AeQ={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuB;this.H(Cf);this.PC.A1(0x1D);this.PC.H(Cf);this.PC.
L(0xFFE6E6E6);this.V.A1(0x1D);this.V.H(Xg);this.V.A4(0x11);this.V.R(Xf);this.V.L(
0xFF000000);this.AeS.H(Xh);this.AeS.Z(false);this.AeQ.A1(0x3A);this.AeQ.H(Xh);this.
Bn.J1(J9);this.Bn.Kz(Xi);this.Bn.DD(Xj);this.Bn.DN(MR);this.J(this.PC,0);this.J(
this.V,0);this.J(this.AeS,0);this.J(this.AeQ,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeS.Ax(A.aaL(C.AMO));this.AeQ.Ax(A.aaL(C.Ajq));this.Bn.Ls=[this,this.
BBC];},_Done:function(){this.__proto__=C.FC;this.PC._Done();this.V._Done();this.
AeS._Done();this.AeQ._Done();this.Bn._Done();C.FC._Done.call(this);},_ReInit:function(
){C.FC._ReInit.call(this);this.PC._ReInit();this.V._ReInit();this.AeS._ReInit();
this.AeQ._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FC._Mark.call(this,D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.A$={AX:null,AR:null,
CT:null,Hr:-1,Zu:function(E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.
ab5("%s",Aad);},Zy:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAP:function(
G){if(!this.CT.YM)return;if(this.CT.NQ)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.A$;this.H(Cf);this.CT.A1(0x3F);this.CT.J1(MR);this.CT.Kz(Xj);this.CT.
DD(Xi);this.CT.DN(J9);this.CT.Afe=0xF;this.CT.AFF(100);this.J(this.CT,0);this.CT.
Ls=[this,this.AAP];},_Done:function(){this.__proto__=A.Core.P;this.CT._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CT.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FC={ASt:null,Akp:null,Ako:null,BnO:function(E){if(A.aa0(this.ASt,E))return;this.
ASt=E;},A_E:function(E){if(A.aa0(this.Akp,E))return;this.Akp=E;},A_D:function(E){
if(A.aa0(this.Ako,E))return;this.Ako=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FC;this.H(Cf);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ako)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANL={Dj:null
,Aa9:null,W3:null,W2:null,W1:null,Nn:null,Nm:null,KV:null,LM:false,KL:false,BCs:
false,Ai:function(Ae){var B;A.acn.Ahu.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);
var Fu=((Ae&0x20)===0x20);var Bej=(this.W1.ZP||this.W2.ZP)||this.W3.ZP;if(Bej)this.
Aa9.L(A.jb.Text);else this.Aa9.L(A.jb.Bb);this.LM=He;this.KL=Fu;this.BCs=Bej;},AAK:
function(G){this.Am();if((!this.W1.ZP&&!this.W2.ZP)&&!this.W3.ZP){var Vg=this.AKi(
this.AES(),this.ArD());var Add=this.AEN();this.KV.JC(Vg);if(Add>Vg)this.Lu(Vg);A.
pe(this.Dj,this);}},A30:function(G){this.Am();},Bmc:function(G){var B;var Gh=this.
Nn.G5;var CA=(A.acg.Text.isPrototypeOf(B=this.Nn.Ci)?B:null);if(!CA)return;CA.R(
A.abl(Gh+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(
CA.M,[(B=this.Nn.M)[2]-B[0],this.Nn.GN]));},Bmb:function(G){var B;var Gh=this.Nm.
G5;var CA=(A.acg.Text.isPrototypeOf(B=this.Nm.Ci)?B:null);if(!CA)return;CA.R(A.abl(
Gh+1,2,10)+Tg);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(CA.M,[(
B=this.Nm.M)[2]-B[0],this.Nm.GN]));},Bl$:function(G){var B;var Gh=this.KV.G5;var
CA=(A.acg.Text.isPrototypeOf(B=this.KV.Ci)?B:null);if(!CA)return;CA.R(A.abl(Gh+1
,2,10)+Tg);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A4(0x12);CA.H(A.abK(CA.M,[(B=
this.KV.M)[2]-B[0],this.KV.GN]));},ArD:function(){return 1900+((((-this.Nn.Br/this.
Nn.GN)|0)+2)%200);},AkC:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nn.Gc(((
E-1900)-2)*-this.Nn.GN);var Vg=this.AKi(this.AES(),E);this.KV.JC(Vg);if(this.AEN(
)>Vg)this.Lu(Vg);},AES:function(){return 1+((((-this.Nm.Br/this.Nm.GN)|0)+2)%12);
},Uv:function(E){if(E<1)E=1;if(E>12)E=12;this.Nm.Gc(((E-1)-2)*-this.Nm.GN);var Vg=
this.AKi(E,this.ArD());this.KV.JC(Vg);if(this.AEN()>Vg)this.Lu(Vg);},AEN:function(
){return 1+((((-this.KV.Br/this.KV.GN)|0)+2)%this.KV.A0);},Lu:function(E){var Vg=
this.AKi(this.AES(),this.ArD());if(E<1)E=1;if(E>Vg)E=Vg;this.KV.Gc(((E-2)-1)*-this.
KV.GN);},AKi:function(AfL,Ac4){if(AfL===2){if(!(Ac4%4)&&(!!(Ac4%100)||!(Ac4%400)
))return 29;else return 28;}else if((((AfL===4)||(AfL===6))||(AfL===9))||(AfL===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahu._Init.call(this,aArg
);A.acg.BW._Init.call(this.Aa9={I:this},0);A.Core.Ib._Init.call(this.W3={I:this}
,0);A.Core.Ib._Init.call(this.W2={I:this},0);A.Core.Ib._Init.call(this.W1={I:this
},0);A.Core.CL._Init.call(this.Nn={I:this},0);A.Core.CL._Init.call(this.Nm={I:this
},0);A.Core.CL._Init.call(this.KV={I:this},0);this.__proto__=C.ANL;this.H(Aae);this.
Aa9.H(AfB);this.Aa9.Nu(3);this.Aa9.L(0xFFE1E1E1);this.Aa9.Z(true);this.W3.H(Aaf);
this.W3.ATN(Xk);this.W3.ATi(0.2);this.W2.H(Aag);this.W2.ATN(Xk);this.W2.ATi(0.2);
this.W1.H(Xl);this.W1.ATN(Xk);this.W1.ATi(0.2);this.Nn.H(Aaf);this.Nn.ATg(true);
this.Nn.Gc(60);this.Nn.Ae6(30);this.Nn.JC(200);this.Nm.H(Aag);this.Nm.ATg(true);
this.Nm.Gc(60);this.Nm.Ae6(30);this.Nm.JC(12);this.KV.H(Xl);this.KV.ATg(true);this.
KV.Gc(60);this.KV.Ae6(30);this.KV.JC(31);this.J(this.Aa9,0);this.J(this.W3,0);this.
J(this.W2,0);this.J(this.W1,0);this.J(this.Nn,0);this.J(this.Nm,0);this.J(this.KV
,0);this.W3.Zp=[this,this.AAK];this.W3.SP=[this,this.A30];this.W2.Zp=[this,this.
AAK];this.W2.SP=[this,this.A30];this.W1.Zp=[this,this.AAK];this.W1.SP=[this,this.
A30];this.Nn.Hm=[this,this.Bmc];this.Nn.Aw4(this.W3);this.Nm.Hm=[this,this.Bmb];
this.Nm.Aw4(this.W2);this.KV.Hm=[this,this.Bl$];this.KV.Aw4(this.W1);},_Done:function(
){this.__proto__=A.acn.Ahu;this.Aa9._Done();this.W3._Done();this.W2._Done();this.
W1._Done();this.Nn._Done();this.Nm._Done();this.KV._Done();A.acn.Ahu._Done.call(
this);},_ReInit:function(){A.acn.Ahu._ReInit.call(this);this.Aa9._ReInit();this.
W3._ReInit();this.W2._ReInit();this.W1._ReInit();this.Nn._ReInit();this.Nm._ReInit(
);this.KV._ReInit();},_Mark:function(D){var B;A.acn.Ahu._Mark.call(this,D);if((B=
this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AWa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhF={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhF;this.H(E6);},_className:"Demonstrator::SelectionAreaContent"};C.AME={Y:null
,VA:null,TG:null,BB4:function(G){var B;this.TG.H(A.abI(this.TG.M,((B=this.M)[3]-
B[1])-((B=this.VA.M)[3]-B[1])));},_Init:function(aArg){C.AhF._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AL9._Init.call(this.VA={I:this},0);C.
AVV._Init.call(this.TG={I:this},0);this.__proto__=C.AME;this.Y.A1(0x3F);this.Y.H(
E6);this.Y.JZ(1);this.VA.H(AhS);this.VA.Aj(true);this.VA.ArX(false);this.TG.A1(0x3
);this.TG.H(K2);this.TG.Aj(true);this.TG.N8(C.AMx);this.TG.BnI(C.AML);this.J(this.
Y,0);this.J(this.VA,0);this.J(this.TG,0);this.Ba(this.TG);this.Y.Em=[this,this.BB4
];this.TG.Zu(A._GetAutoObject(A.aco.Aqe));},_Done:function(){this.__proto__=C.AhF;
this.Y._Done();this.VA._Done();this.TG._Done();C.AhF._Done.call(this);},_ReInit:
function(){C.AhF._ReInit.call(this);this.Y._ReInit();this.VA._ReInit();this.TG._ReInit(
);},_Mark:function(D){var B;C.AhF._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.VA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.VA={
_Init:function(aArg){C.AuB._Init.call(this,aArg);this.__proto__=C.VA;this.T(A.aaR(
A.acf.A6n));},_ReInit:function(){C.AuB._ReInit.call(this);this.T(A.aaR(A.acf.A6n
));},_className:"Demonstrator::ActionsHeader"};C.AL9={Background:null,XT:null,Y:
null,Acw:null,ZK:null,ZJ:null,Acv:null,Aj_:null,Aj$:null,Aka:null,Akb:null,Akc:null
,Ahk:false,Init:function(aArg){var B;A.zX([this,this.AKI],[B=A._GetAutoObject(A.
aco.GL),B.AEU,B.Ar5],0);A.pe([this,this.AKI],this);},Akp:function(G){this.ArX(true
);},Ako:function(G){this.ArX(false);},ArX:function(E){if(this.Ahk===E)return;this.
Ahk=E;this.XT.ArX(E);A.pe([this,this.BfK],this);},AKI:function(G){var BCa=A._GetAutoObject(
A.aco.GL).Afi===2;A._GetAutoObject(A.Device.Helper).J6(this.ZJ,BCa);},BfK:function(
G){var B;if(this.Ahk)this.H(A.abI(this.M,(B=this.XT.M)[3]-B[1]));else this.H(A.abI(
this.M,((B=this.XT.M)[3]-B[1])+((B=this.Y.Dc(0x401))[3]-B[1])));},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.VA._Init.call(this.XT={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);
C.Acw._Init.call(this.Acw={I:this},0);C.ZK._Init.call(this.ZK={I:this},0);C.ZJ._Init.
call(this.ZJ={I:this},0);C.Acv._Init.call(this.Acv={I:this},0);A.acg.C7._Init.call(
this.Aj_={I:this},0);A.acg.C7._Init.call(this.Aj$={I:this},0);A.acg.C7._Init.call(
this.Aka={I:this},0);A.acg.C7._Init.call(this.Akb={I:this},0);A.acg.C7._Init.call(
this.Akc={I:this},0);this.__proto__=C.AL9;var B;this.H(AcL);this.Background.A1(0x3F
);this.Background.H(AcL);this.XT.A1(0x1D);this.XT.H(Cf);this.Y.H(JE);this.Y.JZ(1
);this.Acw.H(AhT);this.Acw.Aj(true);this.ZK.H(Aoc);this.ZK.Aj(true);this.ZJ.H(Oj
);this.ZJ.Aj(true);this.Acv.H(Xm);this.Acv.Aj(true);this.Aj_.DD(Xj);this.Aj_.DN(
MR);this.Aj_.L(A.jb.Bb);this.Aj$.DD(Aod);this.Aj$.DN(AfC);this.Aj$.L(A.jb.Bb);this.
Aka.DD(AhU);this.Aka.DN(AcM);this.Aka.L(A.jb.Bb);this.Akb.DD(Aah);this.Akb.DN(Ax4
);this.Akb.L(A.jb.Bb);this.Akc.DD(Ax5);this.Akc.DN(Ax6);this.Akc.L(A.jb.Bb);this.
J(this.Background,0);this.J(this.XT,0);this.J(this.Y,0);this.J(this.Acw,0);this.
J(this.ZK,0);this.J(this.ZJ,0);this.J(this.Acv,0);this.J(this.Aj_,0);this.J(this.
Aj$,0);this.J(this.Aka,0);this.J(this.Akb,0);this.J(this.Akc,0);this.XT.A_E([this
,this.Akp]);this.XT.A_D([this,this.Ako]);this.Y.Em=[this,this.BfK];this.ZK.Bn3([
B=A._GetAutoObject(A.aco.GL),B.AEU,B.Ar5]);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();this.XT._Done();this.Y._Done();this.Acw.
_Done();this.ZK._Done();this.ZJ._Done();this.Acv._Done();this.Aj_._Done();this.Aj$.
_Done();this.Aka._Done();this.Akb._Done();this.Akc._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
XT._ReInit();this.Y._ReInit();this.Acw._ReInit();this.ZK._ReInit();this.ZJ._ReInit(
);this.Acv._ReInit();this.Aj_._ReInit();this.Aj$._ReInit();this.Aka._ReInit();this.
Akb._ReInit();this.Akc._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aj_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsMenu"};C.Ju={YH:null,Ag8:null,Bn:null,C7:null,Af_:function(
G){},A0X:function(s){this.Af_(s);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.YH={I:this},0);A.acg.Ap._Init.call(this.Ag8={I:this
},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.C7._Init.call(this.C7={I:this
},0);this.__proto__=C.Ju;this.H(Cf);this.YH.H(Ax7);this.YH.L(A.jb.Text);this.Ag8.
H(Ak_);this.Ag8.L(A.jb.Text);this.Ag8.Cw(0);this.Bn.J1(J9);this.Bn.Kz(Oh);this.Bn.
DD(Qb);this.Bn.DN(MR);this.C7.DD(Qb);this.C7.DN(Oh);this.C7.L(A.jb.Bb);this.J(this.
YH,0);this.J(this.Ag8,0);this.J(this.Bn,0);this.J(this.C7,0);this.YH.Ax(A.aaL(A.
aci.TR));this.Ag8.Ax(A.aaL(A.aci.AT_));this.Bn.BG=[this,this.A0X];},_Done:function(
){this.__proto__=A.Core.P;this.YH._Done();this.Ag8._Done();this.Bn._Done();this.
C7._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.YH._ReInit();this.Ag8._ReInit();this.Bn._ReInit();this.C7._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.YH)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsItem"};C.ZK={Afj:null,DT:null,YG:null,BW:null,Ni:null,AhB:
null,ANF:0,Init:function(aArg){A.pe([this,this.Hf],this);},Af_:function(G){var ID=
A.ab0(this.YG.String,0,10);var Il=false;switch(A._GetAutoObject(A.aco.GL).Afi){case
2:if(A._GetAutoObject(A.acq.WV).AB9)Il=A._GetAutoObject(A.aco.GL).BCp(ID);break;
case 0:case 1:Il=A._GetAutoObject(A.aco.GL).BgK(ID);break;default:A.ab5("%s%e",AsX
,A._GetAutoObject(A.aco.GL).Afi);}if(Il){ID=ID+1;this.YG.R(ID.toFixed());}},BBI:
function(G){var AJo=null;var AKy=0;switch(A._GetAutoObject(A.aco.GL).Afi){case 2:{
AJo=A.aaL(A.ach.Aq5);AKy=276;}break;case 0:{AJo=A.aaL(A.ach.AjU);AKy=900;}break;
case 1:{AJo=A.aaL(C.AxR);AKy=276;}break;default:A.ab5("%s%e",AsX,A._GetAutoObject(
A.aco.GL).Afi);}this.YG.R(((AKy*1000000000000)+(A.abY(this.YG.String,0,10)%1000000000000
)).toFixed());this.YH.Ax(AJo);},Hf:function(G){var F;if(!!this.Afj)this.ATc((F=this.
Afj,F[1].call(F[0])));A.pe([this,this.BBI],this);A.we(this,0);},Bn3:function(E){
if(A.aaZ(this.Afj,E))return;if(!!this.Afj)A.z$([this,this.Hf],this.Afj,0);this.Afj=
E;if(!!E)A.zX([this,this.Hf],this.Afj,0);if(!!E)A.pe([this,this.Hf],this);},ATc:
function(E){var F;if(this.ANF===E)return;this.ANF=E;if(!!this.Afj)(F=this.Afj,F[
2].call(F[0],E));A.abo([this,this.A8W,this.ATc],0);},A8W:function(){return this.
ANF;},_Init:function(aArg){C.Ju._Init.call(this,aArg);A.acr.DT._Init.call(this.DT={
I:this},0);C.Akk._Init.call(this.YG={I:this},0);A.acg.BW._Init.call(this.BW={I:this
},0);A.acg.Ap._Init.call(this.Ni={I:this},0);C.AhB._Init.call(this.AhB={I:this},
0);this.__proto__=C.ZK;this.DT.H(Ax8);this.DT.ArW(120);this.DT.GN=30;this.DT.ATa(
A.jb.Ri);this.DT.A96(A.jb.CU);this.DT.A9$(A.jb.CU);this.DT.ATb(A.jb.Ri);this.DT.
A_a(A.jb.Text);this.DT.A97(A.jb.AV);this.DT.A_b(A.jb.Bm);this.DT.A9_(A.jb.AV);this.
DT.A99(A.jb.Ri);this.Bn.J1(Ax9);this.Bn.DN(O$);this.YG.H(Ro);this.YG.R(Ax_);this.
YG.L(A.jb.Text);this.BW.H(U0);this.BW.Nu(2);this.BW.L(A.jb.Text);this.Ni.H(AsY);
this.Ni.L(A.jb.Text);this.Ni.A4(0xC);this.Ni.Cw(3);this.J(this.DT,-2);this.J(this.
YG,-1);this.J(this.BW,0);this.J(this.Ni,0);this.DT.Au([this,this.A8W,this.ATc]);
this.DT.A_h(this.AhB);this.DT.ArO(A.aaL(A.fl.Bg));this.DT.AwI(A.aaL(A.fl.Bg));this.
Ni.Ax(A.aaL(A.ach.Ajr));this.Init(aArg);},_Done:function(){this.__proto__=C.Ju;this.
DT._Done();this.YG._Done();this.BW._Done();this.Ni._Done();this.AhB._Done();C.Ju.
_Done.call(this);},_ReInit:function(){C.Ju._ReInit.call(this);this.DT._ReInit();
this.YG._ReInit();this.BW._ReInit();this.Ni._ReInit();this.AhB._ReInit();this.DT.
ArO(A.aaL(A.fl.Bg));this.DT.AwI(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.Ju._Mark.
call(this,D);if((B=this.Afj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ni)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AhB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acw={UN:null,O0:null,A4N:0,Init:function(aArg){var B;A.zX([this,this.BBk],[B=
A._GetAutoObject(A.aco.GL),B.ASS,B.ATG],0);A.zX([this,this.AAS],[B=A._GetAutoObject(
A.Device.Device),B.ArA,B.Atm],0);A.pe([this,this.AAS],this);},Ai:function(Ae){C.
Ju.Ai.call(this,Ae);this.O0.Z(!A._GetAutoObject(A.aco.GL).Axp);},Af_:function(G){
var B;A._GetAutoObject(A.aco.GL).Bfl(this);},AAS:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4N){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.O0.R(A.abk(A._GetAutoObject(A.aco.GL).WZ/100,0,1)
);break;case 1:{var Auq=A._GetAutoObject(A.Device.Converter).AVq(A._GetAutoObject(
A.aco.GL).WZ/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.O0.R(
A.abk(Auq,0,1));}break;default:A.ab5("%s%e",Ax$,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4N=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BA5:function(G){var B;var Agp=A.abX(this.O0.String,0);Agp=A._GetAutoObject(A.Device.
Converter).AVq(Agp,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agp*=100;
A._GetAutoObject(A.aco.GL).AFZ(Math.round(Agp)|0);},BBk:function(G){this.Am();},
_Init:function(aArg){C.Ju._Init.call(this,aArg);A.acs.UN._Init.call(this.UN={I:this
},0);C.O0._Init.call(this.O0={I:this},0);this.__proto__=C.Acw;var B;this.UN.H(Aya
);this.UN.A_x(A.aaR(A.acf.A5C));this.O0.H(Ak$);this.O0.R(Ayb);this.O0.L(A.jb.Text
);this.O0.BmB(true);this.A4N=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UN,0);this.J(this.O0,0);this.YH.Ax(A.aaL(A.ach.Ag3));this.UN.Au([B=A._GetAutoObject(
A.aco.GL),B.ASS,B.ATG]);this.UN.OnSetAppearance(A._GetAutoObject(A.acx.AuV));this.
O0.Dj=[this,this.BA5];this.Init(aArg);},_Done:function(){this.__proto__=C.Ju;this.
UN._Done();this.O0._Done();C.Ju._Done.call(this);},_ReInit:function(){C.Ju._ReInit.
call(this);this.UN._ReInit();this.O0._ReInit();this.UN.A_x(A.aaR(A.acf.A5C));},_Mark:
function(D){var B;C.Ju._Mark.call(this,D);if((B=this.UN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Ard={Q:null,BW:null,Bn:null,AgI:null,Am6:null,Am5:null,Arj:null,Text:null,Ho:
null,Ap:null,CY:null,Ari:null,Ark:null,Apd:false,Bl:function(aSize){this.Ho.H(A.
abK(this.Ho.M,aSize));this.BW.Axw(1);this.BW.Jy(0,40);this.BW.Fi(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BW.Fi(0,20,20,12.5,12.5,90,270,10);this.BW.VT(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IF=((Ae&0x40)===0x40);if(
IF){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgI.As(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgI.As(false
);this.CY.Z(false);this.Ap.Z(true);}this.Apd=IF;},Af_:function(G){var B;if(!((this.
U&0x80)===0x80))this.Ip().AMX(this);},A8C:function(G){},Bbi:function(s){this.A8C(
s);},BkK:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CY.H(A.abM(this.CY.M,A.aaI(this.Text.M)[0]));else{this.CY.H(A.abM(this.CY.M
,this.Text.AOU(0)[2]+2));this.CY.H(A.abO(this.CY.M,this.Text.AOU(0)[1]));this.CY.
H(A.abI(this.CY.M,(B=this.Text.AOU(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8A:function(G){},Bbh:function(s){this.A8A(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hf],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Hf],E,0);if(!!E)A.pe([this,this.Hf],this);}
,Hf:function(G){this.Am();},Bme:function(G){var B;if(((this.U&0x80)===0x80))this.
Ip().ACT(this);},Bft:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hz._Init.call(this.BW={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TM._Init.call(this.AgI={I:this},0);A.Core.BF._Init.call(this.Am6={
I:this},0);A.Core.BF._Init.call(this.Am5={I:this},0);A.Core.BF._Init.call(this.Arj={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ho._Init.call(this.
Ho={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AK._Init.call(this.
CY={I:this},0);A.Core.BF._Init.call(this.Ari={I:this},0);A.Core.BF._Init.call(this.
Ark={I:this},0);this.__proto__=C.Ard;var B;this.H(AfD);this.Bn.A1(0x3F);this.Bn.
J1(J9);this.Bn.Kz(Aoe);this.Bn.DD(I1);this.Bn.DN(Rn);this.AgI.Fp(530);this.AgI.Ut(
530);this.Am6.Filter=143;this.Am5.Filter=45;this.Arj.Filter=1;this.Text.A1(0x3F);
this.Text.H(AfD);this.Text.Je(true);this.Text.A4(0x12);this.Text.L(0xFFB3B3B3);this.
Ho.H(AfD);this.Ho.L(0xFFB3B3B3);this.Ho.Nu(1);this.Ap.H(Aof);this.CY.H(AsZ);this.
CY.L(0xFFB3B3B3);this.CY.Z(false);this.Ari.Filter=138;this.Ark.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Ho,0);this.J(this.Ap,0);this.J(this.CY
,0);this.Bn.Ls=[this,this.Af_];this.AgI.Q=[B=this.CY,B.Fo,B.Z];this.Am6.BG=[this
,this.Bbi];this.Am6.D1=[this,this.Bbi];this.Am5.BG=[this,this.Bbh];this.Am5.D1=[
this,this.Bbh];this.Arj.BG=[this,this.Bme];this.Text.Q7([this,this.BkK]);this.Text.
S(A.aaL(A.fl.Ak));this.Ho.Zz(this.BW);this.Ap.Ax(null);this.Ari.BG=[this,this.Bft
];this.Ark.BG=[this,this.Bft];},_Done:function(){this.__proto__=A.Core.P;this.BW.
_Done();this.Bn._Done();this.AgI._Done();this.Am6._Done();this.Am5._Done();this.
Arj._Done();this.Text._Done();this.Ho._Done();this.Ap._Done();this.CY._Done();this.
Ari._Done();this.Ark._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BW._ReInit();this.Bn._ReInit();this.AgI._ReInit();this.
Am6._ReInit();this.Am5._ReInit();this.Arj._ReInit();this.Text._ReInit();this.Ho.
_ReInit();this.Ap._ReInit();this.CY._ReInit();this.Ari._ReInit();this.Ark._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am6)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ho)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ari)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ark)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aeq={Background:null,Yv:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);C.Yv._Init.call(this.Yv={I:this
},0);this.__proto__=C.Aeq;var B;this.H(AcN);this.Background.H(AcN);this.Yv.A1(0x1D
);this.Yv.H(As0);this.J(this.Background,0);this.J(this.Yv,0);this.Yv.Au([B=A._GetAutoObject(
A.aco.AgL),B.A9s,B.AFU]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yv._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yv._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.O0={Init:function(aArg){var B;A.zX([this,this.AAS],[B=A._GetAutoObject(A.Device.
Device),B.ArA,B.Atm],0);A.pe([this,this.AAS],this);},Ai:function(Ae){var B;C.Akk.
Ai.call(this,Ae);var IF=((this.U&0x40)===0x40);if(!IF&&(this.String.length>0))this.
Text.R(((this.String+As1)+A._GetAutoObject(A.acj.Temperature).AlL())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAS:function(G){this.Am();},_Init:function(aArg
){C.Akk._Init.call(this,aArg);this.__proto__=C.O0;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akk={B7:null,Dj:null,I2:null,Cq:null,AmD:null,Sj:null,HG:null,Bn:null,Text:null
,CY:null,Aqw:null,Asf:null,BW:null,Ho:null,Arw:null,Aq1:null,AqJ:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvV:15,ANN:false,LE:false,Bl:function(aSize){this.Ho.H(A.abK(
this.Ho.M,aSize));this.BW.Axw(1);this.BW.Jy(0,40);this.BW.Fi(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BW.Fi(0,20,20,12.5,12.5,90,270,10);this.BW.VT(0);},Ai:function(
Ae){var B;A.acn.Ji.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.I2.As(true);else{
this.I2.As(false);this.CY.Z(false);}},A4X:function(G){var B;var Bd=this.Text.M;var
NG=0;var NH=0;if(this.CY.Et[0]<Bd[0])NG=Bd[0]-this.CY.Et[0];if(this.CY.Et[0]>Bd[
2])NG=Bd[2]-this.CY.Et[0];if(this.CY.Et[1]<Bd[1])NH=Bd[1]-this.CY.Et[1];if(this.
CY.ED[1]>Bd[3])NH=Bd[3]-this.CY.ED[1];if(!!NG||!!NH)this.Text.Gc(A.abf(this.Text.
Br,[NG,NH]));NG=this.Text.Br[0];NH=this.Text.Br[1];var C5=[(B=this.Text.Dc())[2]-
B[0],B[3]-B[1]];if(C5[0]<=((B=this.Text.M)[2]-B[0]))NG=0;if(C5[1]<=((B=this.Text.
M)[3]-B[1]))NH=0;this.Text.Gc([NG,NH]);},Aml:function(G){if(!this.B7)return;var A4n=
this.Text.AG1(this.D6);var pos=this.Text.Aff(A4n);this.CY.DN(A.abe(pos,[0,this.B7.
Ascent]));this.CY.DD(A.abf(pos,[0,this.B7.Descent]));if(this.I2.Bw){this.I2.As(false
);this.I2.As(true);}if(this.LE){A.pe([this,this.A4X],this);this.LE=false;}},AAO:
function(G){if(!this.A7k(0x80))this.Ip().AMX(this);var EH=this.Text.AUc(this.Bn.
H4);var Vl=this.Text.AnQ(EH);if(Vl!==this.D6){this.D6=Vl;A.pe([this,this.Aml],this
);this.LE=true;}},AAH:function(G){if(!this.B7)return;var EH=this.Text.AG1(this.D6
);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnQ(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ADg(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnQ(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vl=
this.Text.AnQ(EH);if(Vl!==this.D6){this.D6=Vl;A.pe([this,this.Aml],this);this.LE=
true;}},Bfc:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LE=true;A.pe(this.Dj,this);},AAI:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LE=true;A.pe(
this.Dj,this);},Bfh:function(G){if(this.String.length>=this.AvV)return;var Bzn=this.
HG.Dy;var Auo=String.fromCharCode(Bzn);this.R(A.abU(this.String,Auo,this.D6));this.
D6=this.D6+Auo.length;this.LE=true;A.pe(this.Dj,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LE=true;this.Text.Gc(J9);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CY.L(E);this.Ho.L(E);},S:function(E){if(this.
B7===E)return;this.B7=E;this.Text.S(E);this.LE=true;this.Text.Gc(J9);},Bfu:function(
G){if(this.ANN===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvV)return;this.R(A.abU(this.String,Tg,this.
D6));this.D6=this.D6+1;this.LE=true;A.pe(this.Dj,this);},Bb5:function(s){this.Bfu(
s);},BmB:function(E){if(this.ANN===E)return;this.ANN=E;if(E===false){var Bgb=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bgb>=0)this.R(A.abV(this.String,Bgb
));}this.LE=true;this.Text.Gc(J9);},BnH:function(E){if(this.AvV===E)return;this.
AvV=E;this.R(A.abV(this.String,E));this.LE=true;this.Text.Gc(J9);},BBb:function(
G){if(this.A7k(0x80)){this.Ip().ACT(this);this.Cs(0x10,0x0);}this.Am();},BA1:function(
G){var Vl=this.String.length;if(Vl!==this.D6){this.D6=Vl;A.pe([this,this.Aml],this
);this.LE=true;}},BA4:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Aml],this
);this.LE=true;}},_Init:function(aArg){A.acn.Ji._Init.call(this,aArg);A.acl.TM._Init.
call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.BF._Init.
call(this.AmD={I:this},0);A.Core.BF._Init.call(this.Sj={I:this},0);A.Core.BF._Init.
call(this.HG={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C7._Init.call(this.CY={I:this},0);A.Core.BF._Init.
call(this.Aqw={I:this},0);A.Core.BF._Init.call(this.Asf={I:this},0);A.Graphics.Hz.
_Init.call(this.BW={I:this},0);A.acg.Ho._Init.call(this.Ho={I:this},0);A.Core.BF.
_Init.call(this.Arw={I:this},0);A.Core.BF._Init.call(this.Aq1={I:this},0);A.Core.
BF._Init.call(this.AqJ={I:this},0);this.__proto__=C.Akk;var B;this.H(AfD);this.I2.
B3=false;this.I2.Cx=true;this.I2.Fp(500);this.I2.Ut(500);this.Cq.Filter=147;this.
AmD.Filter=45;this.Sj.Filter=44;this.HG.Filter=143;this.Bn.A1(0x3F);this.Bn.J1(Rn
);this.Bn.Kz(I1);this.Bn.DD(Aoe);this.Bn.DN(J9);this.Bn.AFF(3);this.Text.A1(0x3F
);this.Text.H(AfD);this.Text.Lv(false);this.Text.A4(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CY.DD(As2);this.CY.DN(Aog);this.CY.A__(2);this.CY.A_9(2);
this.CY.L(0xFFB3B3B3);this.CY.Z(false);this.Aqw.Filter=138;this.Asf.Filter=137;this.
Ho.H(AfD);this.Ho.L(0xFFB3B3B3);this.Ho.Nu(1);this.Arw.Filter=1;this.Aq1.Filter=
41;this.AqJ.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CY,0);this.
J(this.Ho,0);this.I2.Q=[B=this.CY,B.Fo,B.Z];this.Cq.BG=[this,this.AAH];this.Cq.D1=[
this,this.AAH];this.AmD.BG=[this,this.Bfc];this.AmD.D1=[this,this.Bfc];this.Sj.BG=[
this,this.AAI];this.Sj.D1=[this,this.AAI];this.HG.BG=[this,this.Bfh];this.HG.D1=[
this,this.Bfh];this.Bn.BG=[this,this.AAO];this.Text.Q7([this,this.Aml]);this.Text.
S(A.aaL(A.fl.Ak));this.B7=A.aaL(A.fl.Ak);this.Aqw.BG=[this,this.Bb5];this.Asf.BG=[
this,this.Bb5];this.Ho.Zz(this.BW);this.Arw.BG=[this,this.BBb];this.Aq1.BG=[this
,this.BA4];this.AqJ.BG=[this,this.BA1];},_Done:function(){this.__proto__=A.acn.Ji;
this.I2._Done();this.Cq._Done();this.AmD._Done();this.Sj._Done();this.HG._Done();
this.Bn._Done();this.Text._Done();this.CY._Done();this.Aqw._Done();this.Asf._Done(
);this.BW._Done();this.Ho._Done();this.Arw._Done();this.Aq1._Done();this.AqJ._Done(
);A.acn.Ji._Done.call(this);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.
I2._ReInit();this.Cq._ReInit();this.AmD._ReInit();this.Sj._ReInit();this.HG._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CY._ReInit();this.Aqw._ReInit();this.
Asf._ReInit();this.BW._ReInit();this.Ho._ReInit();this.Arw._ReInit();this.Aq1._ReInit(
);this.AqJ._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Ji._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Asf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ho)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqJ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Acv={LabelDataSync:
null,Af_:function(G){var B;A.pe([B=A._GetAutoObject(A.acq.WV),B.BCA],this);},_Init:
function(aArg){C.Ju._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Acv;this.LabelDataSync.H(As3);this.LabelDataSync.R(A.
aaR(A.acf.A6c));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YH.Ax(A.aaL(C.AVh));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.AY(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Ju;this.LabelDataSync._Done();
C.Ju._Done.call(this);},_ReInit:function(){C.Ju._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A6c));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ju._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVh={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abg={TimespanDaysToString:null,Avs:
function(aIndex){if(this.AqU()>aIndex)return this.TimespanDaysToString.BT(aIndex
);A.ab5("%s",Ala);return A.jV;},AqU:function(){return 4;},C6:function(aIndex){var
Ai_=0;switch(aIndex){case 0:Ai_=0;break;case 1:Ai_=1;break;case 2:Ai_=2;break;case
3:Ai_=3;break;default:throw new Error(Ayc+aIndex.toFixed());}return Ai_;},_Init:
function(aArg){A.acr.VU._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abg;},_Done:function(
){this.__proto__=A.acr.VU;this.TimespanDaysToString._Done();A.acr.VU._Done.call(
this);},_ReInit:function(){A.acr.VU._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acr.VU._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGm={GK:0,AV1:1,Hk:2,Year:3};C.ACQ={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxR={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZJ={Aef:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Du());var A16=Av.Format(Iw);this.Aef.R(A16);},
Af_:function(G){var B;var JI=this.Aef.String;var O;O=JI.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){JI=A.ab1(JI,O,1);O=JI.indexOf(String.fromCharCode(0x2E),O);
}JI=JI+Ayd;JI=JI+A._GetAutoObject(A.acj.VJ).ADb(JI).toFixed();var A16=A._GetAutoObject(
A.Device.AkF).Bf1(JI);A._GetAutoObject(A.aco.GL).BCq(((B=(A16|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Ju._Init.call(this,aArg);C.ANK._Init.call(this.Aef={
I:this},0);this.__proto__=C.ZJ;this.Aef.H(Ro);this.Aef.L(A.jb.Text);this.Aef.BnH(
10);this.J(this.Aef,-1);this.YH.Ax(A.aaL(A.ach.Aq5));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ju;this.Aef._Done();C.Ju._Done.call(this);},_ReInit:function(
){C.Ju._ReInit.call(this);this.Aef._ReInit();},_Mark:function(D){var B;C.Ju._Mark.
call(this,D);if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Afi={BGB:0,BGw:1,VJ:2,LAST:3};C.AhB={AhC:null,Avs:function(aIndex){if(this.AqU(
)>aIndex)return this.AhC.BT(aIndex);A.ab5("%s",Ala);return A.jV;},AqU:function(){
return 3;},_Init:function(aArg){A.acr.VU._Init.call(this,aArg);C.AhC._Init.call(
this.AhC={I:this},0);this.__proto__=C.AhB;},_Done:function(){this.__proto__=A.acr.
VU;this.AhC._Done();A.acr.VU._Done.call(this);},_ReInit:function(){A.acr.VU._ReInit.
call(this);this.AhC._ReInit();},_Mark:function(D){var B;A.acr.VU._Mark.call(this
,D);if((B=this.AhC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhC={BT:function(A7){var Bdu=A7;var AK5=A.jV;switch(Bdu){case 2:AK5=A.aaR(A.
acf.VJ);break;case 0:AK5=A.aaR(A.acf.Transponder);break;case 1:AK5=A.aaR(A.acf.Bi0
);break;default:throw new Error(Aye+Bdu.toFixed());}return AK5;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhC;},_className:
"Demonstrator::ScanTypeToString"};C.ANK={Bfu:function(G){var Bgc=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bgc++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bgc>=2)return;if(this.String.length>=this.AvV)return;
this.R(A.abU(this.String,Tg,this.D6));this.D6=this.D6+1;this.LE=true;A.pe(this.Dj
,this);},_Init:function(aArg){C.Akk._Init.call(this,aArg);this.__proto__=C.ANK;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVV.__proto__=A.acn.Menu;C.AUP.__proto__=A.Core.P;C.AMx.__proto__=
C.A$;C.Mr.__proto__=A.Core.P;C.Yv.__proto__=C.Ard;C.Abh.__proto__=A.Core.P;C.AvB.
__proto__=A.acn.Ahw;C.AML.__proto__=C.FC;C.AuB.__proto__=C.FC;C.A$.__proto__=A.Core.
P;C.FC.__proto__=A.Core.P;C.ANL.__proto__=A.acn.Ahu;C.AhF.__proto__=A.Core.P;C.AME.
__proto__=C.AhF;C.VA.__proto__=C.AuB;C.AL9.__proto__=A.Core.P;C.Ju.__proto__=A.Core.
P;C.ZK.__proto__=C.Ju;C.Acw.__proto__=C.Ju;C.Ard.__proto__=A.Core.P;C.Aeq.__proto__=
A.Core.P;C.O0.__proto__=C.Akk;C.Akk.__proto__=A.acn.Ji;C.Acv.__proto__=C.Ju;C.Abg.
__proto__=A.acr.VU;C.ZJ.__proto__=C.Ju;C.AhB.__proto__=A.acr.VU;C.AhC.__proto__=
A.Device.EnumToString;C.ANK.__proto__=C.Akk;};C._ReInit=function(){};C.DI=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM7[0]._this)&&(B._cycle!=D))B._Done(C.AM7[0]._this=null);if((B=C.
AM8[0]._this)&&(B._cycle!=D))B._Done(C.AM8[0]._this=null);if((B=C.AM9[0]._this)&&(
B._cycle!=D))B._Done(C.AM9[0]._this=null);if((B=C.AM_[0]._this)&&(B._cycle!=D))B.
_Done(C.AM_[0]._this=null);if((B=C.AQb[0]._this)&&(B._cycle!=D))B._Done(C.AQb[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARY[0]._this)&&(B._cycle!=D))B._Done(C.ARY[0]._this=null);if((B=C.Ajq[
0]._this)&&(B._cycle!=D))B._Done(C.Ajq[0]._this=null);if((B=C.AMO[0]._this)&&(B.
_cycle!=D))B._Done(C.AMO[0]._this=null);if((B=C.Asv[0]._this)&&(B._cycle!=D))B._Done(
C.Asv[0]._this=null);if((B=C.AVm[0]._this)&&(B._cycle!=D))B._Done(C.AVm[0]._this=
null);if((B=C.AHv[0]._this)&&(B._cycle!=D))B._Done(C.AHv[0]._this=null);if((B=C.
AWa[0]._this)&&(B._cycle!=D))B._Done(C.AWa[0]._this=null);if((B=C.AVh[0]._this)&&(
B._cycle!=D))B._Done(C.AVh[0]._this=null);if((B=C.ACQ[0]._this)&&(B._cycle!=D))B.
_Done(C.ACQ[0]._this=null);if((B=C.AxR[0]._this)&&(B._cycle!=D))B._Done(C.AxR[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */