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
);if(index.acl)throw new Error("The unit file 'Effects.js' included twice!");index.
acl=(function(){var A=index;var C={};
var Cf=[100,100];var BD="Trying to remove a fader from a task, which is actually running";
var E6="The fader doesn\'t belong to this task";var Hq="Trying to add a fader to a task, which is actually running";
var I0="The fader belongs already to a task";
C.E0={M9:null,timer:null,Qw:null,SG:null,Ahl:null,Tn:0,Ai9:0,Vd:0,Pe:0,Az_:0.001,
Qs:0,Ec:0,Dx:0,AN8:0.5,A5S:3,Axn:3,AuJ:0.5,V0:3,AVv:0,AVu:0,JX:0,Pw:1000,PF:0,V8:
0,AhN:0,Bw:false,AkU:false,AUF:false,Ap6:false,ALv:false,Ml:function(G){var B;if(
!this.timer)return;if(!this.Ai9){if(this.AUF)this.Ai9=-1;else this.Ai9=1;this.Tn=
this.Ai9;this.Dx=this.timer.Bs;this.Ec=0;this.Qs=-1;}var KI;if((this.Ai9>0)&&(this.
Tn>0))KI=this.BB6();else if((this.Ai9<0)&&(this.Tn<0))KI=this.BB9();else if(this.
Ai9>0)KI=this.BB7();else KI=this.BB8();if(KI){this.As(false);(B=this.Qw)?B[1].call(
B[0],this):null;(B=this.SG)?B[1].call(B[0],this):null;}},AK1:function(AN){var B;
if(!this.M9&&(((this.AhN===19)||(this.AhN===20))||(this.AhN===21))){var AJD=this.
A5S+1;var Bzu=Math.sqrt(this.AN8);var RP=0.5;var O;this.M9=A._NewObject(C.AG_,0);
this.M9.Pn.Set(0,1);this.M9.Alq.Set(0,1);for(O=1;O<AJD;O=O+1){this.M9.Pn.Set(O,this.
M9.Pn.Get(O-1)*Bzu);this.M9.Alq.Set(O,this.M9.Alq.Get(O-1)*this.AN8);RP=RP+this.
M9.Pn.Get(O);}var BAi=1/RP;this.M9.Pn.Set(0,0.5);RP=0;for(O=0;O<AJD;O=O+1){this.
M9.Pn.Set(O,this.M9.Pn.Get(O)*BAi);RP=RP+this.M9.Pn.Get(O);}this.M9.Pn.Set(AJD,this.
M9.Pn.Get(AJD)+(1-RP));}if(this.AkU){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhN){case 1:AN=Math.pow(AN,this.V0);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.V0);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.V0)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.V0))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.V0*AN)-1)/(Math.
pow(2.718,this.V0)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.V0*AN)-1)
/(Math.pow(2.718,this.V0)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.V0*AN)-1)/(Math.pow(2.718,this.V0)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.V0*AN)-1)/(Math.pow(2.718,this.V0)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuJ)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuJ)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuJ)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuJ)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axn)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axn)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axn)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axn)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.M9;var O=0;var GF=0;var K$=Bz.Pn.
Get(0);var D8=1-AN;while(D8>K$){O=O+1;GF=K$;K$=K$+Bz.Pn.Get(O);}AN=(D8-GF)/(K$-GF
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.Alq.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.M9;var O=0;var GF=0;var K$=Bz.Pn.Get(0);while(AN>K$){O=O+1;GF=K$;K$=
K$+Bz.Pn.Get(O);}AN=(AN-GF)/(K$-GF);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.Alq.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.M9;var O=0;var GF=0;var K$=Bz.Pn.
Get(0);var LO=AN*2;var D8=LO-1;if(LO<1)D8=-D8;while(D8>K$){O=O+1;GF=K$;K$=K$+Bz.
Pn.Get(O);}D8=(D8-GF)/(K$-GF);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(Bz.Alq.Get(O
)*(1-(D8*D8)));}if(LO<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap6){var LO=AN;var AAx=1-LO;AN=((AAx*LO)*(this.Pe+1))+(LO*LO);}else if(this.ALv){
var LO=AN;var AAx=1-LO;var Bdw=LO*LO;var BAz=AAx*AAx;AN=(((BAz*LO)*(this.Pe+1))+((
AAx*Bdw)*(this.Vd+2)))+(Bdw*LO);}}this.AuN(AN);(B=this.Ahl)?B[1].call(B[0],this):
null;},BB9:function(){var Av=(this.timer.Bs-this.Dx)|0;if(Av<0)Av=-Av;var LK=this.
V8;var Ox=this.V8+this.Pw;var Hg=this.PF+this.Pw;var KI=false;var Ed=this.Qs;if(
!this.Ec&&(Av>=Ox)){this.Ec=1;Av=Av-Ox;this.Dx=this.Dx+Ox;}if((this.Ec>0)&&(Av>=
Hg)){var Ii=(Av/Hg)|0;this.Ec=this.Ec+Ii;Av=Av-(Ii*Hg);this.Dx=this.Dx+(Ii*Hg);}
if((this.Ec>2)&&!this.JX)this.Ec=1;if(this.Ec>0)LK=this.PF;if((this.Ec>=this.JX)&&(
this.JX>0)){KI=true;Ed=0;}else if(Av>=LK)Ed=1-((Av-LK)*this.Az_);else if(Ed>=0)Ed=
0;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qs){this.Qs=Ed;this.AK1(
Ed);}return KI;},BB8:function(){var Av=(this.Dx-this.timer.Bs)|0;var LK=this.V8;
var Ox=this.V8+this.Pw;var Hg=this.PF+this.Pw;var KI=false;var Ed=this.Qs;if((this.
Ec>1)&&(Av<0)){var Ii=(((-Av+Hg)-1)/Hg)|0;if((this.Ec-Ii)<=0)Ii=this.Ec-1;this.Ec=
this.Ec-Ii;Av=Av+(Ii*Hg);this.Dx=this.Dx+(Ii*Hg);}if(((this.Ec===1)&&(Av<0))&&(this.
JX>0)){this.Ec=0;Av=Av+Ox;this.Dx=this.Dx+Ox;}if(((this.Ec===1)&&(Av<0))&&!this.
JX){var Ii=(((-Av+Hg)-1)/Hg)|0;Av=Av+(Ii*Hg);this.Dx=this.Dx+(Ii*Hg);}if(this.Ec>
0)LK=this.PF;if(Av<0){KI=true;Ed=1;}else if(Av>=LK)Ed=1-((Av-LK)*this.Az_);else if(
Ed>=0)Ed=1;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qs){this.Qs=
Ed;this.AK1(Ed);}return KI;},BB7:function(){var Av=(this.Dx-this.timer.Bs)|0;var
LK=this.V8;var Ox=this.V8+this.Pw;var Hg=this.PF+this.Pw;var KI=false;var Ed=this.
Qs;if((this.Ec>1)&&(Av<0)){var Ii=(((-Av+Hg)-1)/Hg)|0;if((this.Ec-Ii)<=0)Ii=this.
Ec-1;this.Ec=this.Ec-Ii;Av=Av+(Ii*Hg);this.Dx=this.Dx+(Ii*Hg);}if(((this.Ec===1)&&(
Av<0))&&(this.JX>0)){this.Ec=0;Av=Av+Ox;this.Dx=this.Dx+Ox;}if(((this.Ec===1)&&(
Av<0))&&!this.JX){var Ii=(((-Av+Hg)-1)/Hg)|0;Av=Av+(Ii*Hg);this.Dx=this.Dx+(Ii*Hg
);}if(this.Ec>0)LK=this.PF;if(Av<0){KI=true;Ed=0;}else if(Av>=LK)Ed=(Av-LK)*this.
Az_;else if(Ed>=0)Ed=0;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qs){this.Qs=Ed;this.AK1(Ed);}return KI;},BB6:function(){var Av=(this.timer.Bs-this.
Dx)|0;if(Av<0)Av=-Av;var LK=this.V8;var Ox=this.V8+this.Pw;var Hg=this.PF+this.Pw;
var KI=false;var Ed=this.Qs;if(!this.Ec&&(Av>=Ox)){this.Ec=1;Av=Av-Ox;this.Dx=this.
Dx+Ox;}if((this.Ec>0)&&(Av>=Hg)){var Ii=(Av/Hg)|0;this.Ec=this.Ec+Ii;Av=Av-(Ii*Hg
);this.Dx=this.Dx+(Ii*Hg);}if((this.Ec>2)&&!this.JX)this.Ec=1;if(this.Ec>0)LK=this.
PF;if((this.Ec>=this.JX)&&(this.JX>0)){KI=true;Ed=1;}else if(Av>=LK)Ed=(Av-LK)*this.
Az_;else if(Ed>=0)Ed=1;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qs){this.Qs=Ed;this.AK1(Ed);}return KI;},Ae9:function(E){if(this.AUF===E)return;
this.AUF=E;if(!this.Bw||!this.Ai9)return;if(E)this.Tn=-1;else this.Tn=1;this.Dx=(
this.timer.Avp()*2)-this.Dx;},AFl:function(E){if(E<0)E=0;if(E>1)E=1;this.AN8=E;}
,AFb:function(E){if(E<1)E=1;if(E>10)E=10;this.A5S=E;this.M9=null;},AFM:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axn=E;},AE6:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuJ=E;},AwF:function(E){if(E<1)E=1;if(E>100)E=100;this.V0=E;},AF3:function(
E){if(this.AVv===E)return;this.AVv=E;if(this.AhN===26){this.Vd=E;this.Ap6=(this.
Pe===this.Vd)&&!!this.Pe;this.ALv=!this.Ap6&&(this.Pe!==this.Vd);}},AF2:function(
E){if(this.AVu===E)return;this.AVu=E;if(this.AhN===26){this.Pe=E;this.Ap6=(this.
Pe===this.Vd)&&!!this.Pe;this.ALv=!this.Ap6&&(this.Pe!==this.Vd);}},WK:function(
E){if(this.AhN===E)return;this.AhN=E;this.M9=null;switch(E){case 24:{this.Pe=-1.1;
this.Vd=1.1;}break;case 22:{this.Pe=-1;this.Vd=-2;}break;case 23:{this.Pe=2;this.
Vd=1;}break;case 25:{this.Pe=1.1;this.Vd=-1.1;}break;case 0:{this.Pe=0;this.Vd=0;
}break;default:{this.Pe=this.AVu;this.Vd=this.AVv;}}this.Ap6=(this.Pe===this.Vd)&&
!!this.Pe;this.ALv=!this.Ap6&&(this.Pe!==this.Vd);},HO:function(E){if(E<0)E=0;this.
JX=E;},Fp:function(E){if(E<15)E=15;this.Pw=E;this.Az_=1/E;},Ut:function(E){if(E<
0)E=0;this.PF=E;},Akw:function(E){if(E<0)E=0;this.V8=E;},As:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Ml],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeh);A.zV([this,this.Ml],this.timer
,0);this.Ai9=0;A.pe([this,this.Ml],this);}},AuN:function(Aaq){},AnX:function(G){
this.As(false);},AnV:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SG)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gn={Q:null,A6:0,B3:255,Cx:0,AuN:function(Aaq
){var F;this.A6=this.Cx+(Math.round((this.B3-this.Cx)*Aaq)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A6));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gn;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AGl={
Q:null,A6:A.wf,B3:Cf,Cx:A.wf,AuN:function(Aaq){var F;var Ep=this.Cx[0];var Dh=this.
Cx[1];Ep=Ep+(Math.round((this.B3[0]-Ep)*Aaq)|0);Dh=Dh+(Math.round((this.B3[1]-Dh
)*Aaq)|0);this.A6=[Ep,Dh];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A6));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AGl;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANr={Q:null,A6:0,B3:0xFFFFFFFF,Cx:0,AuN:
function(Aaq){var F;var Pm=this.Cx&0xFF;var Aaz=(this.Cx>>8)&0xFF;var Alw=(this.
Cx>>16)&0xFF;var Alp=(this.Cx>>24)&0xFF;Pm=Pm+((((this.B3&0xFF)-Pm)*Aaq)|0);Aaz=
Aaz+(((((this.B3>>8)&0xFF)-Aaz)*Aaq)|0);Alw=Alw+(((((this.B3>>16)&0xFF)-Alw)*Aaq
)|0);Alp=Alp+(((((this.B3>>24)&0xFF)-Alp)*Aaq)|0);if(Pm<0)Pm=0;if(Pm>255)Pm=255;
if(Aaz<0)Aaz=0;if(Aaz>255)Aaz=255;if(Alw<0)Alw=0;if(Alw>255)Alw=255;if(Alp<0)Alp=
0;if(Alp>255)Alp=255;this.A6=(Pm&0xFF)|((Aaz&0xFF)<<8)|((Alw&0xFF)<<16)|((Alp&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A6));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANr;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.Nf={A6:0,B3:1,Cx:0,AuN:function(Aaq){this.A6=this.Cx+((
this.B3-this.Cx)*Aaq);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.Nf;},_className:"Effects::FloatEffect"};C.TM={timer:null,Q:null,Ec:0,Dx:0,JX:0
,Pw:1000,PF:1000,V8:0,Bw:false,Cx:false,B3:true,Ml:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.
Dx)|0;var Ox=this.V8+this.Pw;var Hg=this.PF+this.Pw;var LK=this.V8;var Jp=this.Ec;
if(!Jp&&(Av>=Ox)){Jp=1;Av=Av-Ox;}if((Jp>0)&&(Av>=Hg)){var Ii=(Av/Hg)|0;Av=Av-(Ii
*Hg);Jp=Jp+Ii;}if((Jp>2)&&!this.JX)Jp=1;if(Jp!==this.Ec){this.Dx=this.timer.Bs-(((
B=Av)<0)?B+0x100000000:B);this.Ec=Jp;}if(Jp>0)LK=this.PF;var KI=(Jp>=this.JX)&&(
this.JX>0);if(!!this.Q){if(!KI&&(Av>=LK))(F=this.Q,F[2].call(F[0],this.Cx));if(KI||((
Av<LK)&&(Jp>0)))(F=this.Q,F[2].call(F[0],this.B3));}if(KI)this.As(false);},HO:function(
E){if(E<0)E=0;this.JX=E;},Fp:function(E){if(E<100)E=100;this.Pw=E;},Ut:function(
E){if(E<0)E=0;this.PF=E;},Akw:function(E){if(E<0)E=0;this.V8=E;},As:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Ml],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeh);A.zV([this,this.Ml
],this.timer,0);this.Ec=-1;}},AnX:function(G){this.As(false);},AnV:function(G){if(
this.Bw)this.As(false);this.As(true);},_Init:function(aArg){this.__proto__=C.TM;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mz={Po:null,AI:null,Ah:null,Ab:null,P:null,AKD:null,A3w:null,Akn:null,Ds:true,
Bw:true,AcH:true,Ajj:false,Ajt:true,ZI:true,Q9:true,Mw:function(){if(!!this.Po)this.
Po.Mw();},AvP:function(){return true;},Zp:function(){},SP:function(){this.Mw();}
,_Init:function(aArg){this.__proto__=C.Mz;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Po)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKD)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3w)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsS={Asi:A.wf,M2:false,AvP:function(){return this.M2;},Zp:function(
){if(!this.Ds&&!!this.P.Ab)this.P.Z(false);if((!this.Ds&&this.Q9)&&!!this.P.Ab)this.
P.Ab.HP(this.P);if(!this.Bw)this.P.As(false);},SP:function(){if(this.Bw)this.P.As(
true);if((this.Ds||this.Ajj)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Ds&&this.ZI)this.P.Ab.ZH(this.P);if(this.Ds&&this.Ajt)this.P.Ab.Ba(this.P);
if(this.Ds&&!this.AcH)this.P.H(A.abJ(this.P.M,this.Asi));if(this.Ds){this.P.CZ(255
);this.P.Z(true);}if(!this.Ds&&(this.Ab.AV===this.P))this.Ab.Ba(null);this.M2=true;
this.Mw();},_Init:function(aArg){C.Mz._Init.call(this,aArg);this.__proto__=C.AsS;
},_className:"Effects::VisibilityFader"};C.Axj={E0:null,M2:false,Ap9:false,AvP:function(
){return this.M2;},Zp:function(){if(this.Ds)this.P.CZ(this.E0.B3);if(!this.Ds&&!
this.P.G8)this.P.Z(false);if((!this.Ds&&this.Q9)&&!!this.P.Ab)this.P.Ab.HP(this.
P);if(!this.Bw)this.P.As(false);},SP:function(){var B;if(this.AcH){if(this.P.Fo(
)&&!!this.P.Ab)this.E0.Cx=this.P.G8;else this.E0.Cx=0;}var AAb=((!this.P.Ab||!this.
P.G8)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AAc=((!this.Ds&&((!this.P.Ab||!this.P.Fo())||this.Q9
))||!this.E0.B3)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AAb&&AAc){this.E0.Cx=0;this.E0.B3=0;}this.Ap9=this.P.ASC(
);if(this.Bw)this.P.As(true);if((this.Ds||this.Ajj)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Ds&&this.ZI)this.P.Ab.ZH(this.P);if(this.Ds&&this.Ajt
)this.P.Ab.Ba(this.P);if(!this.Ds&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.
Ds&&!this.P.Fo()){this.P.CZ(this.E0.Cx);this.P.Z(true);}if(!this.Ds&&((!this.P.Ab||
!this.P.Fo())||!this.P.G8)){this.M2=true;this.Mw();return;}if(!this.Ds&&(this.E0.
Cx===this.E0.B3))this.P.CZ(this.E0.Cx);if(this.P.G8===this.E0.B3){this.M2=true;this.
Mw();return;}if(this.E0.Cx===this.E0.B3){this.M2=true;this.Mw();return;}if(!this.
E0.JX)this.E0.HO(1);this.E0.Q=[B=this.P,B.Awj,B.A0E];this.E0.Ae9(false);this.E0.
AkU=false;this.E0.SG=[this,this.AiN];this.E0.Ahl=null;this.E0.As(true);},AiN:function(
G){this.M2=true;this.Mw();},_Init:function(aArg){C.Mz._Init.call(this,aArg);C.Gn.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axj;},_Done:function(){this.__proto__=
C.Mz;this.E0._Done();C.Mz._Done.call(this);},_ReInit:function(){C.Mz._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mz._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae$={
Cp:null,D$:null,Ad7:false,M2:false,Ap9:false,AvP:function(){return this.M2;},Zp:
function(){if(this.Ds){this.P.CZ(this.Cp.B3);this.P.H(A.abJ(this.P.M,this.D$.B3)
);}if(!this.Ds&&!this.P.G8)this.P.Z(false);if((!this.Ds&&this.Q9)&&!!this.P.Ab)this.
P.Ab.HP(this.P);if(this.Ad7)this.P.ArK(this.Ap9);if(!this.Bw)this.P.As(false);},
SP:function(){var B;if(this.AcH){if(this.P.Fo()&&!!this.P.Ab)this.Cp.Cx=this.P.G8;
else this.Cp.Cx=0;this.D$.Cx=this.P.M.slice(0,2);}var AAb=((!this.P.Ab||!this.P.
G8)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AAc=((!this.Ds&&((!this.P.Ab||!this.P.Fo())||this.Q9
))||!this.Cp.B3)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B3
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAb&&AAc){
this.Cp.Cx=0;this.Cp.B3=0;this.D$.Cx=this.D$.B3;}this.Ap9=this.P.ASC();if(this.Bw
)this.P.As(true);if((this.Ds||this.Ajj)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Ds&&this.ZI)this.P.Ab.ZH(this.P);if(this.Ds&&this.Ajt)this.P.Ab.Ba(
this.P);if(!this.Ds&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.Ds&&!this.P.
Fo()){this.P.H(A.abJ(this.P.M,this.D$.Cx));this.P.CZ(this.Cp.Cx);this.P.Z(true);
}if(!this.Ds&&((!this.P.Ab||!this.P.Fo())||!this.P.G8)){this.M2=true;this.Mw();return;
}if(!this.Ds&&A.aaX(this.D$.Cx,this.D$.B3))this.P.H(A.abJ(this.P.M,this.D$.Cx));
if(!this.Ds&&(this.Cp.Cx===this.Cp.B3))this.P.CZ(this.Cp.Cx);if((this.P.G8===this.
Cp.B3)&&A.aaX(this.P.M.slice(0,2),this.D$.B3)){this.M2=true;this.Mw();return;}if((
this.Cp.Cx===this.Cp.B3)&&A.aaX(this.D$.Cx,this.D$.B3)){this.M2=true;this.Mw();return;
}if(!this.Cp.JX)this.Cp.HO(1);if(!this.D$.JX)this.D$.HO(1);if(this.Ad7)this.P.ArK(
true);this.D$.Q=null;this.D$.Ae9(false);this.D$.AkU=false;this.D$.SG=[this,this.
AiN];this.D$.Ahl=[this,this.AAG];this.Cp.Q=[B=this.P,B.Awj,B.A0E];this.Cp.Ae9(false
);this.Cp.AkU=false;this.Cp.SG=[this,this.AiN];this.Cp.Ahl=null;this.D$.As(!A.aaX(
this.D$.Cx,this.D$.B3));this.Cp.As(this.Cp.Cx!==this.Cp.B3);},AiN:function(G){this.
M2=!this.Cp.Bw&&!this.D$.Bw;this.Mw();},AAG:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A6));},_Init:function(aArg){C.Mz._Init.call(this,aArg);C.Gn._Init.call(this.
Cp={I:this},0);C.AGl._Init.call(this.D$={I:this},0);this.__proto__=C.Ae$;},_Done:
function(){this.__proto__=C.Mz;this.Cp._Done();this.D$._Done();C.Mz._Done.call(this
);},_ReInit:function(){C.Mz._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mz._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsT={AdL:null,Cp:null,G_:null,Wp:null,FS:null,Uz:A.wf,AkH:A.wf,M2:false,Ap9:
false,AvP:function(){return this.M2;},Zp:function(){if(this.Ds){this.P.CZ(this.Cp.
B3);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Uz));this.P.Z(true);}if(
!this.Ds&&!this.Cp.B3){this.P.CZ(0);this.P.Z(false);}if(((!this.Ds&&(this.Cp.B3>
0))&&!!this.P.Ab)&&!this.Q9){this.P.CZ(this.Cp.B3);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Uz));this.P.Z(true);}if((!this.Ds&&this.Q9)&&!!this.P.Ab)
this.P.Ab.HP(this.P);this.P.ArK(this.Ap9);if(!!this.AdL)this.Ab.HP(this.AdL);if(
!this.Bw)this.P.As(false);},SP:function(){var B;if(this.AcH){if(this.P.Fo()&&!!this.
P.Ab)this.Cp.Cx=this.P.G8;else this.Cp.Cx=0;this.AkH=A.aaI(this.P.M);}var AAb=((
!this.P.Ab||!this.P.G8)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AAc=((!this.Ds&&((!this.P.Ab||!this.
P.Fo())||this.Q9))||!this.Cp.B3)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Uz),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAb&&
AAc){this.Cp.Cx=0;this.Cp.B3=0;this.AkH=this.Uz;this.Wp.A7X();}this.Ap9=this.P.ASC(
);if(this.Bw)this.P.As(true);if((this.Ds||this.Ajj)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Ds&&this.ZI)this.P.Ab.ZH(this.P);if(this.Ds&&this.Ajt
)this.P.Ab.Ba(this.P);if(!this.Ds&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.
Ds&&!this.P.Fo())this.P.CZ(this.Cp.Cx);if((!this.Ds&&A.aaX(this.AkH,this.Uz))&&this.
Wp.AD8())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkH));if(!this.Ds&&(
this.Cp.Cx===this.Cp.B3))this.P.CZ(this.Cp.Cx);if(!this.Ds&&((!this.P.Ab||!this.
P.Fo())||!this.P.G8)){this.M2=true;this.Mw();return;}if(((this.Ds&&(this.P.G8===
this.Cp.B3))&&A.aaX(A.aaI(this.P.M),this.Uz))&&this.P.Fo()){this.M2=true;this.Mw(
);return;}if(((!this.Ds&&(this.P.G8===this.Cp.B3))&&A.aaX(A.aaI(this.P.M),this.Uz
))&&this.Wp.AD8()){this.M2=true;this.Mw();return;}if(((this.Cp.Cx===this.Cp.B3)&&
A.aaX(this.AkH,this.Uz))&&this.Wp.AD8()){this.M2=true;this.Mw();return;}this.P.ArK(
true);this.P.Z(false);this.AdL=A._NewObject(A.acg.AVX,0);this.AdL.Bm_(this.P);this.
AdL.CZ(this.Cp.Cx);this.AdL.Bn6(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AMc(this.AdL,this.P);if(!this.Cp.JX)this.Cp.HO(1);if(!this.G_.JX)this.G_.HO(
1);this.G_.Ae9(false);this.G_.AkU=false;this.G_.SG=[this,this.AiN];this.G_.Ahl=[
this,this.AAG];if(this.Ds){this.G_.Cx=0;this.G_.B3=1;}else{this.G_.Cx=1;this.G_.
B3=0;}this.Cp.Q=[B=this.AdL,B.Awj,B.CZ];this.Cp.Ae9(false);this.Cp.AkU=false;this.
Cp.SG=[this,this.AiN];this.Cp.Ahl=null;this.G_.As(!A.aaX(this.AkH,this.Uz)||!this.
Wp.AD8());this.Cp.As(this.Cp.Cx!==this.Cp.B3);},AiN:function(G){this.M2=!this.Cp.
Bw&&!this.G_.Bw;this.Mw();},AAG:function(G){var B;var ABw=A.abe(this.Uz,this.AkH
);if(!this.Ds)ABw=[-ABw[0],-ABw[1]];this.FS.A7X();this.FS.AgU=this.Wp.AgU;this.FS.
Bqu(ABw[0],ABw[1],0);this.FS.Bj3(this.Wp,this.FS,this.G_.A6);if(this.Ds)this.AdL.
Baq(this.AkH,this.FS);else this.AdL.Baq(this.Uz,this.FS);},_Init:function(aArg){
C.Mz._Init.call(this,aArg);C.Gn._Init.call(this.Cp={I:this},0);C.Nf._Init.call(this.
G_={I:this},0);A.Graphics.Ax0._Init.call(this.Wp={I:this},0);A.Graphics.Ax0._Init.
call(this.FS={I:this},0);this.__proto__=C.AsT;},_Done:function(){this.__proto__=
C.Mz;this.Cp._Done();this.G_._Done();this.Wp._Done();this.FS._Done();C.Mz._Done.
call(this);},_ReInit:function(){C.Mz._ReInit.call(this);this.Cp._ReInit();this.G_.
_ReInit();this.Wp._ReInit();this.FS._ReInit();},_Mark:function(D){var B;C.Mz._Mark.
call(this,D);if((B=this.AdL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rh={Sg:function(){return null;},Sf:function(
){return null;},Aeb:function(){return this.Sg();},Aea:function(){return this.Sf(
);},_Init:function(aArg){this.__proto__=C.Rh;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AU7={Sg:function(){var Ao=A._NewObject(C.AsS,0);Ao.Ds=true;Ao.Bw=true;Ao.Ajt=
false;Ao.ZI=true;Ao.AcH=false;Ao.Akn=[this,this.ApH];return Ao;},Sf:function(){var
Ao=A._NewObject(C.AsS,0);Ao.Ds=false;Ao.Bw=false;Ao.Q9=true;return Ao;},Aeb:function(
){var Ao=C.Rh.Aeb.call(this);Ao.ZI=false;Ao.Bw=true;return Ao;},Aea:function(){var
Ao=A._NewObject(C.AsS,0);Ao.Ds=false;Ao.Bw=true;Ao.Ajj=true;Ao.Q9=false;return Ao;
},ApH:function(G){var B;var Ao=(C.AsS.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C5[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C5[1]/2)|0)];Ao.Asi=pos;},_Init:function(aArg){C.Rh._Init.
call(this,aArg);this.__proto__=C.AU7;},_className:"Effects::ShowHideTransition"};
C.Ael={ACP:500,Sg:function(){var Ao=A._NewObject(C.Ae$,0);Ao.Ds=true;Ao.Bw=true;
Ao.Ajt=false;Ao.ZI=true;Ao.AcH=true;Ao.Ad7=false;Ao.Akn=[this,this.ApH];Ao.Cp.Fp(
this.ACP);Ao.Cp.Cx=0;Ao.Cp.B3=255;Ao.D$.Fp(this.ACP);Ao.D$.WK(23);return Ao;},Sf:
function(){var Ao=A._NewObject(C.Axj,0);Ao.Ds=false;Ao.Bw=false;Ao.Q9=true;Ao.AcH=
true;Ao.E0.Cx=255;Ao.E0.B3=0;Ao.E0.Fp(this.ACP);return Ao;},Aeb:function(){var Ao=
C.Rh.Aeb.call(this);Ao.ZI=false;Ao.Bw=true;return Ao;},Aea:function(){var Ao=C.Rh.
Aea.call(this);Ao.Ajj=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApH:function(G){var
B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C5[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C5[1]/2)|0)];Ao.D$.B3=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G8)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=C.Ael;
},_className:"Effects::FadeInOutTransition"};C.AGW={Km:0x12,Au1:0,Ad7:false,Sg:function(
){var Ao=A._NewObject(C.Ae$,0);Ao.Ds=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZI=true;Ao.
AcH=true;Ao.Ad7=this.Ad7;Ao.Akn=[this,this.ApH];Ao.Cp.Fp(500);Ao.Cp.Akw(0);Ao.Cp.
Cx=0;Ao.Cp.B3=255;Ao.D$.Fp(500);Ao.D$.WK(23);Ao.D$.AF2(0);Ao.D$.AF3(0);Ao.D$.AwF(
3);Ao.D$.AE6(0.5);Ao.D$.AFM(3);Ao.D$.AFb(3);Ao.D$.AFl(0.5);return Ao;},Sf:function(
){var Ao=A._NewObject(C.Ae$,0);Ao.Ds=false;Ao.Bw=false;Ao.Q9=true;Ao.AcH=true;Ao.
Ad7=this.Ad7;Ao.Akn=[this,this.A3H];Ao.Cp.Cx=255;Ao.Cp.B3=0;Ao.Cp.Fp(500);Ao.Cp.
Akw(0);Ao.D$.Fp(500);Ao.D$.WK(23);Ao.D$.AF2(0);Ao.D$.AF3(0);Ao.D$.AwF(3);Ao.D$.AE6(
0.5);Ao.D$.AFM(3);Ao.D$.AFb(3);Ao.D$.AFl(0.5);return Ao;},Aeb:function(){var Ao=
C.Rh.Aeb.call(this);Ao.ZI=false;Ao.Bw=true;return Ao;},Aea:function(){var Ao=C.Rh.
Aea.call(this);Ao.Ajj=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApH:function(G){var
B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var Bu=this.Km;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C5[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C5[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C5[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C5[1]/2)|0)];Ao.D$.B3=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G8)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HD=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Au1){case 5:pos=[pos[0],-C5[1]];break;case 3:{
pos=[pos[0],-C5[1]];pos=[HD[0],pos[1]];}break;case 8:pos=[-C5[0],-C5[1]];break;case
2:pos=[HD[0],pos[1]];break;case 7:pos=[-C5[0],pos[1]];break;case 4:pos=[pos[0],HD[
1]];break;case 1:{pos=[pos[0],HD[1]];pos=[HD[0],pos[1]];}break;case 6:{pos=[pos[
0],HD[1]];pos=[-C5[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A3H:
function(G){var B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HD=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Au1){case 5:pos=[pos[0],HD[1]];break;case 3:{pos=[pos[0],HD[1]];pos=[-
C5[0],pos[1]];}break;case 8:{pos=[pos[0],HD[1]];pos=[HD[0],pos[1]];}break;case 2:
pos=[-C5[0],pos[1]];break;case 7:pos=[HD[0],pos[1]];break;case 4:pos=[pos[0],-C5[
1]];break;case 1:pos=[-C5[0],-C5[1]];break;case 6:{pos=[pos[0],-C5[1]];pos=[HD[0
],pos[1]];}break;default:;}Ao.D$.B3=pos;},_Init:function(aArg){C.Rh._Init.call(this
,aArg);this.__proto__=C.AGW;},_className:"Effects::SlideTransition"};C.Afh={Sg:function(
){var Ao=A._NewObject(C.AsT,0);Ao.Ds=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZI=true;Ao.
AcH=true;Ao.Akn=[this,this.ApH];Ao.Cp.Fp(500);Ao.Cp.Akw(0);Ao.Cp.Cx=0;Ao.Cp.B3=255;
Ao.G_.Fp(500);Ao.G_.WK(23);Ao.G_.AF2(0);Ao.G_.AF3(0);Ao.G_.AwF(3);Ao.G_.AE6(0.5);
Ao.G_.AFM(3);Ao.G_.AFb(3);Ao.G_.AFl(0.5);Ao.Wp.Afg(0.5,0.5,1);return Ao;},Sf:function(
){var Ao=A._NewObject(C.AsT,0);Ao.Ds=false;Ao.Bw=false;Ao.Q9=true;Ao.AcH=true;Ao.
Akn=[this,this.A3H];Ao.Cp.Cx=255;Ao.Cp.B3=0;Ao.Cp.Fp(500);Ao.Cp.Akw(0);Ao.G_.Fp(
500);Ao.G_.WK(23);Ao.G_.AF2(0);Ao.G_.AF3(0);Ao.G_.AwF(3);Ao.G_.AE6(0.5);Ao.G_.AFM(
3);Ao.G_.AFb(3);Ao.G_.AFl(0.5);Ao.Wp.Afg(0.5,0.5,1);return Ao;},Aeb:function(){var
Ao=C.Rh.Aeb.call(this);Ao.ZI=false;Ao.Bw=true;return Ao;},Aea:function(){var Ao=
C.Rh.Aea.call(this);Ao.Ajj=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApH:function(
G){var B;var Ao=(C.AsT.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C5[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C5[1]/2)|0)];Ao.Uz=A.abf(pos,[(C5[0]/2)|0,(C5[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fo())||!Ao.P.G8)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Uz,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A3H:function(G){var Ao=(C.AsT.isPrototypeOf(G)?G:null);Ao.
Uz=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=
C.Afh;},_className:"Effects::ScaleTransition"};C.AhN={BEY:0,BFD:1,BFF:2,BFE:3,BEo:
4,BEq:5,BEp:6,BGa:7,BGc:8,BGb:9,BDU:10,BDW:11,BDV:12,BDA:13,BDC:14,BDB:15,BEf:16
,BEh:17,BEg:18,BDL:19,BDN:20,BDM:21,BEe:22,BEs:23,BEd:24,BEt:25,BD1:26};C.BD9={A5k:
0x1,A5j:0x2,A5l:0x4,A5o:0x8,A5n:0x10,A5m:0x20};C.AN7={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AN7;},_className:"Effects::EffectTimerClass"};C.
Aeh={_Init:function(){C.AN7._Init.call(this,0);this.PX(15);this.As(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AG_={Pn:A.abi(12,0
,null),Alq:A.abi(12,0,null),_Init:function(aArg){(this.Pn=[]).__proto__=C.AG_.Pn;(
this.Alq=[]).__proto__=C.AG_.Alq;this.__proto__=C.AG_;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACW={B_:null,B9:null,A8z:function(Atv){var Ao=this.B9;while(
!!Ao){Ao.Zp();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B9;while(!!Ao){A.pe(Ao.A3w
,Ao);Ao=Ao.Ah;}},A8y:function(Atv){var Ao=this.B9;while(!!Ao){A.pe(Ao.AKD,Ao);Ao=
Ao.Ah;}this.B9=null;this.B_=null;},SP:function(Atv){var B;if(!this.B9)this.Mw();
var Ao=this.B9;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApM=null;Ao=Ao.
Ah;}Ao=this.B9;while(!!Ao){(B=Ao.Akn)?B[1].call(B[0],Ao):null;Ao.SP();Ao=Ao.Ah;}
},Mw:function(){var Ao=this.B9;while(!!Ao&&Ao.AvP())Ao=Ao.Ah;if(!Ao)A.Core.AkV.Mw.
call(this);},Bo0:function(FQ){if(!FQ)return;if(this.ARj())throw new Error(BD);if(
FQ.Po!==this)throw new Error(E6);if(!!FQ.Ah)FQ.Ah.AI=FQ.AI;else this.B_=FQ.AI;if(
!!FQ.AI)FQ.AI.Ah=FQ.Ah;else this.B9=FQ.Ah;FQ.Po=null;FQ.Ah=null;FQ.AI=null;if(!!
FQ.P)FQ.P.ApM=null;A.pe(FQ.AKD,FQ);if(!this.B9)this.AmA();},A5e:function(FQ){if(
!FQ)return;if(this.ARj())throw new Error(Hq);if(!!FQ.Po)throw new Error(I0);FQ.AI=
this.B_;FQ.Ah=null;if(!!this.B_)this.B_.Ah=FQ;else this.B9=FQ;this.B_=FQ;FQ.Po=this;
},_Init:function(aArg){A.Core.AkV._Init.call(this,aArg);this.__proto__=C.ACW;},_Mark:
function(D){var B;A.Core.AkV._Mark.call(this,D);if((B=this.B_)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsE={_Init:function(){C.AU7._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gn.__proto__=C.E0;C.AGl.__proto__=C.E0;C.ANr.__proto__=C.E0;
C.Nf.__proto__=C.E0;C.AsS.__proto__=C.Mz;C.Axj.__proto__=C.Mz;C.Ae$.__proto__=C.
Mz;C.AsT.__proto__=C.Mz;C.AU7.__proto__=C.Rh;C.Ael.__proto__=C.Rh;C.AGW.__proto__=
C.Rh;C.Afh.__proto__=C.Rh;C.AN7.__proto__=A.Core.Timer;C.ACW.__proto__=A.Core.AkV;
};C._ReInit=function(){var B;if((B=C.Aeh._this))B._ReInit(),C.Aeh._ReInit.call(B
);if((B=C.AsE._this))B._ReInit(),C.AsE._ReInit.call(B);};C.DI=function(D){var B;
if((B=C.Aeh._this)&&(B._cycle!=D))B._Done(C.Aeh._this=null);if((B=C.AsE._this)&&(
B._cycle!=D))B._Done(C.AsE._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */