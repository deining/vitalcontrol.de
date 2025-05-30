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
var E8="The fader doesn\'t belong to this task";var Hs="Trying to add a fader to a task, which is actually running";
var I0="The fader belongs already to a task";
C.E0={M9:null,timer:null,QA:null,SJ:null,Ahr:null,Ts:0,Ajc:0,Vj:0,Pg:0,AAe:0.001,
Qw:0,Ec:0,Dx:0,AOi:0.5,A52:3,Axx:3,AuS:0.5,V5:3,AVG:0,AVF:0,JX:0,Pz:1000,PJ:0,Wc:
0,AhT:0,Bw:false,Ak0:false,AUQ:false,Aqe:false,ALH:false,Mm:function(G){var B;if(
!this.timer)return;if(!this.Ajc){if(this.AUQ)this.Ajc=-1;else this.Ajc=1;this.Ts=
this.Ajc;this.Dx=this.timer.Bs;this.Ec=0;this.Qw=-1;}var KJ;if((this.Ajc>0)&&(this.
Ts>0))KJ=this.BCh();else if((this.Ajc<0)&&(this.Ts<0))KJ=this.BCk();else if(this.
Ajc>0)KJ=this.BCi();else KJ=this.BCj();if(KJ){this.As(false);(B=this.QA)?B[1].call(
B[0],this):null;(B=this.SJ)?B[1].call(B[0],this):null;}},ALb:function(AN){var B;
if(!this.M9&&(((this.AhT===19)||(this.AhT===20))||(this.AhT===21))){var AJO=this.
A52+1;var BzH=Math.sqrt(this.AOi);var RR=0.5;var O;this.M9=A._NewObject(C.AHh,0);
this.M9.Pq.Set(0,1);this.M9.Alw.Set(0,1);for(O=1;O<AJO;O=O+1){this.M9.Pq.Set(O,this.
M9.Pq.Get(O-1)*BzH);this.M9.Alw.Set(O,this.M9.Alw.Get(O-1)*this.AOi);RR=RR+this.
M9.Pq.Get(O);}var BAv=1/RR;this.M9.Pq.Set(0,0.5);RR=0;for(O=0;O<AJO;O=O+1){this.
M9.Pq.Set(O,this.M9.Pq.Get(O)*BAv);RR=RR+this.M9.Pq.Get(O);}this.M9.Pq.Set(AJO,this.
M9.Pq.Get(AJO)+(1-RR));}if(this.Ak0){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhT){case 1:AN=Math.pow(AN,this.V5);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.V5);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.V5)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.V5))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.V5*AN)-1)/(Math.
pow(2.718,this.V5)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.V5*AN)-1)
/(Math.pow(2.718,this.V5)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.V5*AN)-1)/(Math.pow(2.718,this.V5)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.V5*AN)-1)/(Math.pow(2.718,this.V5)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuS)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuS)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuS)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuS)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axx)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axx)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axx)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axx)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.M9;var O=0;var GG=0;var K$=Bz.Pq.
Get(0);var D8=1-AN;while(D8>K$){O=O+1;GG=K$;K$=K$+Bz.Pq.Get(O);}AN=(D8-GG)/(K$-GG
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.Alw.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.M9;var O=0;var GG=0;var K$=Bz.Pq.Get(0);while(AN>K$){O=O+1;GG=K$;K$=
K$+Bz.Pq.Get(O);}AN=(AN-GG)/(K$-GG);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.Alw.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.M9;var O=0;var GG=0;var K$=Bz.Pq.
Get(0);var LP=AN*2;var D8=LP-1;if(LP<1)D8=-D8;while(D8>K$){O=O+1;GG=K$;K$=K$+Bz.
Pq.Get(O);}D8=(D8-GG)/(K$-GG);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(Bz.Alw.Get(O
)*(1-(D8*D8)));}if(LP<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Aqe){var LP=AN;var AAE=1-LP;AN=((AAE*LP)*(this.Pg+1))+(LP*LP);}else if(this.ALH){
var LP=AN;var AAE=1-LP;var BdG=LP*LP;var BAM=AAE*AAE;AN=(((BAM*LP)*(this.Pg+1))+((
AAE*BdG)*(this.Vj+2)))+(BdG*LP);}}this.AuX(AN);(B=this.Ahr)?B[1].call(B[0],this):
null;},BCk:function(){var Av=(this.timer.Bs-this.Dx)|0;if(Av<0)Av=-Av;var LL=this.
Wc;var Ox=this.Wc+this.Pz;var Hh=this.PJ+this.Pz;var KJ=false;var Ed=this.Qw;if(
!this.Ec&&(Av>=Ox)){this.Ec=1;Av=Av-Ox;this.Dx=this.Dx+Ox;}if((this.Ec>0)&&(Av>=
Hh)){var Ij=(Av/Hh)|0;this.Ec=this.Ec+Ij;Av=Av-(Ij*Hh);this.Dx=this.Dx+(Ij*Hh);}
if((this.Ec>2)&&!this.JX)this.Ec=1;if(this.Ec>0)LL=this.PJ;if((this.Ec>=this.JX)&&(
this.JX>0)){KJ=true;Ed=0;}else if(Av>=LL)Ed=1-((Av-LL)*this.AAe);else if(Ed>=0)Ed=
0;if(Ed!==this.Qw){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qw){this.Qw=Ed;this.ALb(
Ed);}return KJ;},BCj:function(){var Av=(this.Dx-this.timer.Bs)|0;var LL=this.Wc;
var Ox=this.Wc+this.Pz;var Hh=this.PJ+this.Pz;var KJ=false;var Ed=this.Qw;if((this.
Ec>1)&&(Av<0)){var Ij=(((-Av+Hh)-1)/Hh)|0;if((this.Ec-Ij)<=0)Ij=this.Ec-1;this.Ec=
this.Ec-Ij;Av=Av+(Ij*Hh);this.Dx=this.Dx+(Ij*Hh);}if(((this.Ec===1)&&(Av<0))&&(this.
JX>0)){this.Ec=0;Av=Av+Ox;this.Dx=this.Dx+Ox;}if(((this.Ec===1)&&(Av<0))&&!this.
JX){var Ij=(((-Av+Hh)-1)/Hh)|0;Av=Av+(Ij*Hh);this.Dx=this.Dx+(Ij*Hh);}if(this.Ec>
0)LL=this.PJ;if(Av<0){KJ=true;Ed=1;}else if(Av>=LL)Ed=1-((Av-LL)*this.AAe);else if(
Ed>=0)Ed=1;if(Ed!==this.Qw){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qw){this.Qw=
Ed;this.ALb(Ed);}return KJ;},BCi:function(){var Av=(this.Dx-this.timer.Bs)|0;var
LL=this.Wc;var Ox=this.Wc+this.Pz;var Hh=this.PJ+this.Pz;var KJ=false;var Ed=this.
Qw;if((this.Ec>1)&&(Av<0)){var Ij=(((-Av+Hh)-1)/Hh)|0;if((this.Ec-Ij)<=0)Ij=this.
Ec-1;this.Ec=this.Ec-Ij;Av=Av+(Ij*Hh);this.Dx=this.Dx+(Ij*Hh);}if(((this.Ec===1)&&(
Av<0))&&(this.JX>0)){this.Ec=0;Av=Av+Ox;this.Dx=this.Dx+Ox;}if(((this.Ec===1)&&(
Av<0))&&!this.JX){var Ij=(((-Av+Hh)-1)/Hh)|0;Av=Av+(Ij*Hh);this.Dx=this.Dx+(Ij*Hh
);}if(this.Ec>0)LL=this.PJ;if(Av<0){KJ=true;Ed=0;}else if(Av>=LL)Ed=(Av-LL)*this.
AAe;else if(Ed>=0)Ed=0;if(Ed!==this.Qw){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qw){this.Qw=Ed;this.ALb(Ed);}return KJ;},BCh:function(){var Av=(this.timer.Bs-this.
Dx)|0;if(Av<0)Av=-Av;var LL=this.Wc;var Ox=this.Wc+this.Pz;var Hh=this.PJ+this.Pz;
var KJ=false;var Ed=this.Qw;if(!this.Ec&&(Av>=Ox)){this.Ec=1;Av=Av-Ox;this.Dx=this.
Dx+Ox;}if((this.Ec>0)&&(Av>=Hh)){var Ij=(Av/Hh)|0;this.Ec=this.Ec+Ij;Av=Av-(Ij*Hh
);this.Dx=this.Dx+(Ij*Hh);}if((this.Ec>2)&&!this.JX)this.Ec=1;if(this.Ec>0)LL=this.
PJ;if((this.Ec>=this.JX)&&(this.JX>0)){KJ=true;Ed=1;}else if(Av>=LL)Ed=(Av-LL)*this.
AAe;else if(Ed>=0)Ed=1;if(Ed!==this.Qw){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qw){this.Qw=Ed;this.ALb(Ed);}return KJ;},Afc:function(E){if(this.AUQ===E)return;
this.AUQ=E;if(!this.Bw||!this.Ajc)return;if(E)this.Ts=-1;else this.Ts=1;this.Dx=(
this.timer.Avz()*2)-this.Dx;},AFs:function(E){if(E<0)E=0;if(E>1)E=1;this.AOi=E;}
,AFi:function(E){if(E<1)E=1;if(E>10)E=10;this.A52=E;this.M9=null;},AFU:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axx=E;},AFb:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuS=E;},AwP:function(E){if(E<1)E=1;if(E>100)E=100;this.V5=E;},AF$:function(
E){if(this.AVG===E)return;this.AVG=E;if(this.AhT===26){this.Vj=E;this.Aqe=(this.
Pg===this.Vj)&&!!this.Pg;this.ALH=!this.Aqe&&(this.Pg!==this.Vj);}},AF_:function(
E){if(this.AVF===E)return;this.AVF=E;if(this.AhT===26){this.Pg=E;this.Aqe=(this.
Pg===this.Vj)&&!!this.Pg;this.ALH=!this.Aqe&&(this.Pg!==this.Vj);}},WS:function(
E){if(this.AhT===E)return;this.AhT=E;this.M9=null;switch(E){case 24:{this.Pg=-1.1;
this.Vj=1.1;}break;case 22:{this.Pg=-1;this.Vj=-2;}break;case 23:{this.Pg=2;this.
Vj=1;}break;case 25:{this.Pg=1.1;this.Vj=-1.1;}break;case 0:{this.Pg=0;this.Vj=0;
}break;default:{this.Pg=this.AVF;this.Vj=this.AVG;}}this.Aqe=(this.Pg===this.Vj)&&
!!this.Pg;this.ALH=!this.Aqe&&(this.Pg!==this.Vj);},HQ:function(E){if(E<0)E=0;this.
JX=E;},Fr:function(E){if(E<15)E=15;this.Pz=E;this.AAe=1/E;},Uy:function(E){if(E<
0)E=0;this.PJ=E;},AkC:function(E){if(E<0)E=0;this.Wc=E;},As:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mm],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aem);A.zV([this,this.Mm],this.timer
,0);this.Ajc=0;A.pe([this,this.Mm],this);}},AuX:function(Aav){},An4:function(G){
this.As(false);},An2:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.QA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SJ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gn={Q:null,A5:0,B3:255,Cx:0,AuX:function(Aav
){var F;this.A5=this.Cx+(Math.round((this.B3-this.Cx)*Aav)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gn;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AGu={
Q:null,A5:A.wf,B3:Cf,Cx:A.wf,AuX:function(Aav){var F;var Ep=this.Cx[0];var Di=this.
Cx[1];Ep=Ep+(Math.round((this.B3[0]-Ep)*Aav)|0);Di=Di+(Math.round((this.B3[1]-Di
)*Aav)|0);this.A5=[Ep,Di];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AGu;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.AND={Q:null,A5:0,B3:0xFFFFFFFF,Cx:0,AuX:
function(Aav){var F;var Po=this.Cx&0xFF;var AaG=(this.Cx>>8)&0xFF;var AlC=(this.
Cx>>16)&0xFF;var Alv=(this.Cx>>24)&0xFF;Po=Po+((((this.B3&0xFF)-Po)*Aav)|0);AaG=
AaG+(((((this.B3>>8)&0xFF)-AaG)*Aav)|0);AlC=AlC+(((((this.B3>>16)&0xFF)-AlC)*Aav
)|0);Alv=Alv+(((((this.B3>>24)&0xFF)-Alv)*Aav)|0);if(Po<0)Po=0;if(Po>255)Po=255;
if(AaG<0)AaG=0;if(AaG>255)AaG=255;if(AlC<0)AlC=0;if(AlC>255)AlC=255;if(Alv<0)Alv=
0;if(Alv>255)Alv=255;this.A5=(Po&0xFF)|((AaG&0xFF)<<8)|((AlC&0xFF)<<16)|((Alv&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.AND;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.Nf={A5:0,B3:1,Cx:0,AuX:function(Aav){this.A5=this.Cx+((
this.B3-this.Cx)*Aav);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.Nf;},_className:"Effects::FloatEffect"};C.TR={timer:null,Q:null,Ec:0,Dx:0,JX:0
,Pz:1000,PJ:1000,Wc:0,Bw:false,Cx:false,B3:true,Mm:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.
Dx)|0;var Ox=this.Wc+this.Pz;var Hh=this.PJ+this.Pz;var LL=this.Wc;var Jp=this.Ec;
if(!Jp&&(Av>=Ox)){Jp=1;Av=Av-Ox;}if((Jp>0)&&(Av>=Hh)){var Ij=(Av/Hh)|0;Av=Av-(Ij
*Hh);Jp=Jp+Ij;}if((Jp>2)&&!this.JX)Jp=1;if(Jp!==this.Ec){this.Dx=this.timer.Bs-(((
B=Av)<0)?B+0x100000000:B);this.Ec=Jp;}if(Jp>0)LL=this.PJ;var KJ=(Jp>=this.JX)&&(
this.JX>0);if(!!this.Q){if(!KJ&&(Av>=LL))(F=this.Q,F[2].call(F[0],this.Cx));if(KJ||((
Av<LL)&&(Jp>0)))(F=this.Q,F[2].call(F[0],this.B3));}if(KJ)this.As(false);},HQ:function(
E){if(E<0)E=0;this.JX=E;},Fr:function(E){if(E<100)E=100;this.Pz=E;},Uy:function(
E){if(E<0)E=0;this.PJ=E;},AkC:function(E){if(E<0)E=0;this.Wc=E;},As:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mm],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aem);A.zV([this,this.Mm
],this.timer,0);this.Ec=-1;}},An4:function(G){this.As(false);},An2:function(G){if(
this.Bw)this.As(false);this.As(true);},_Init:function(aArg){this.__proto__=C.TR;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mz={Pr:null,AJ:null,Ah:null,Ab:null,P:null,AKP:null,A3G:null,Akt:null,Dt:true,
Bw:true,AcO:true,Ajo:false,Ajy:true,ZM:true,Ra:true,Mw:function(){if(!!this.Pr)this.
Pr.Mw();},AvZ:function(){return true;},Zt:function(){},SR:function(){this.Mw();}
,_Init:function(aArg){this.__proto__=C.Mz;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pr)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKP)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3G)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.As1={Asr:A.wf,M2:false,AvZ:function(){return this.M2;},Zt:function(
){if(!this.Dt&&!!this.P.Ab)this.P.Z(false);if((!this.Dt&&this.Ra)&&!!this.P.Ab)this.
P.Ab.HR(this.P);if(!this.Bw)this.P.As(false);},SR:function(){if(this.Bw)this.P.As(
true);if((this.Dt||this.Ajo)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Dt&&this.ZM)this.P.Ab.ZL(this.P);if(this.Dt&&this.Ajy)this.P.Ab.Bb(this.P);
if(this.Dt&&!this.AcO)this.P.H(A.abJ(this.P.M,this.Asr));if(this.Dt){this.P.CZ(255
);this.P.Z(true);}if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.M2=true;
this.Mw();},_Init:function(aArg){C.Mz._Init.call(this,aArg);this.__proto__=C.As1;
},_className:"Effects::VisibilityFader"};C.Axt={E0:null,M2:false,Aqh:false,AvZ:function(
){return this.M2;},Zt:function(){if(this.Dt)this.P.CZ(this.E0.B3);if(!this.Dt&&!
this.P.G9)this.P.Z(false);if((!this.Dt&&this.Ra)&&!!this.P.Ab)this.P.Ab.HR(this.
P);if(!this.Bw)this.P.As(false);},SR:function(){var B;if(this.AcO){if(this.P.Fq(
)&&!!this.P.Ab)this.E0.Cx=this.P.G9;else this.E0.Cx=0;}var AAh=((!this.P.Ab||!this.
P.G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AAi=((!this.Dt&&((!this.P.Ab||!this.P.Fq())||this.Ra
))||!this.E0.B3)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AAh&&AAi){this.E0.Cx=0;this.E0.B3=0;}this.Aqh=this.P.ASO(
);if(this.Bw)this.P.As(true);if((this.Dt||this.Ajo)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZM)this.P.Ab.ZL(this.P);if(this.Dt&&this.Ajy
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fq()){this.P.CZ(this.E0.Cx);this.P.Z(true);}if(!this.Dt&&((!this.P.Ab||
!this.P.Fq())||!this.P.G9)){this.M2=true;this.Mw();return;}if(!this.Dt&&(this.E0.
Cx===this.E0.B3))this.P.CZ(this.E0.Cx);if(this.P.G9===this.E0.B3){this.M2=true;this.
Mw();return;}if(this.E0.Cx===this.E0.B3){this.M2=true;this.Mw();return;}if(!this.
E0.JX)this.E0.HQ(1);this.E0.Q=[B=this.P,B.Awt,B.A0O];this.E0.Afc(false);this.E0.
Ak0=false;this.E0.SJ=[this,this.AiS];this.E0.Ahr=null;this.E0.As(true);},AiS:function(
G){this.M2=true;this.Mw();},_Init:function(aArg){C.Mz._Init.call(this,aArg);C.Gn.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axt;},_Done:function(){this.__proto__=
C.Mz;this.E0._Done();C.Mz._Done.call(this);},_ReInit:function(){C.Mz._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mz._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Afe={
Cq:null,D$:null,Aea:false,M2:false,Aqh:false,AvZ:function(){return this.M2;},Zt:
function(){if(this.Dt){this.P.CZ(this.Cq.B3);this.P.H(A.abJ(this.P.M,this.D$.B3)
);}if(!this.Dt&&!this.P.G9)this.P.Z(false);if((!this.Dt&&this.Ra)&&!!this.P.Ab)this.
P.Ab.HR(this.P);if(this.Aea)this.P.ArT(this.Aqh);if(!this.Bw)this.P.As(false);},
SR:function(){var B;if(this.AcO){if(this.P.Fq()&&!!this.P.Ab)this.Cq.Cx=this.P.G9;
else this.Cq.Cx=0;this.D$.Cx=this.P.M.slice(0,2);}var AAh=((!this.P.Ab||!this.P.
G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AAi=((!this.Dt&&((!this.P.Ab||!this.P.Fq())||this.Ra
))||!this.Cq.B3)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B3
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAh&&AAi){
this.Cq.Cx=0;this.Cq.B3=0;this.D$.Cx=this.D$.B3;}this.Aqh=this.P.ASO();if(this.Bw
)this.P.As(true);if((this.Dt||this.Ajo)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Dt&&this.ZM)this.P.Ab.ZL(this.P);if(this.Dt&&this.Ajy)this.P.Ab.Bb(
this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Dt&&!this.P.
Fq()){this.P.H(A.abJ(this.P.M,this.D$.Cx));this.P.CZ(this.Cq.Cx);this.P.Z(true);
}if(!this.Dt&&((!this.P.Ab||!this.P.Fq())||!this.P.G9)){this.M2=true;this.Mw();return;
}if(!this.Dt&&A.aaX(this.D$.Cx,this.D$.B3))this.P.H(A.abJ(this.P.M,this.D$.Cx));
if(!this.Dt&&(this.Cq.Cx===this.Cq.B3))this.P.CZ(this.Cq.Cx);if((this.P.G9===this.
Cq.B3)&&A.aaX(this.P.M.slice(0,2),this.D$.B3)){this.M2=true;this.Mw();return;}if((
this.Cq.Cx===this.Cq.B3)&&A.aaX(this.D$.Cx,this.D$.B3)){this.M2=true;this.Mw();return;
}if(!this.Cq.JX)this.Cq.HQ(1);if(!this.D$.JX)this.D$.HQ(1);if(this.Aea)this.P.ArT(
true);this.D$.Q=null;this.D$.Afc(false);this.D$.Ak0=false;this.D$.SJ=[this,this.
AiS];this.D$.Ahr=[this,this.AAN];this.Cq.Q=[B=this.P,B.Awt,B.A0O];this.Cq.Afc(false
);this.Cq.Ak0=false;this.Cq.SJ=[this,this.AiS];this.Cq.Ahr=null;this.D$.As(!A.aaX(
this.D$.Cx,this.D$.B3));this.Cq.As(this.Cq.Cx!==this.Cq.B3);},AiS:function(G){this.
M2=!this.Cq.Bw&&!this.D$.Bw;this.Mw();},AAN:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A5));},_Init:function(aArg){C.Mz._Init.call(this,aArg);C.Gn._Init.call(this.
Cq={I:this},0);C.AGu._Init.call(this.D$={I:this},0);this.__proto__=C.Afe;},_Done:
function(){this.__proto__=C.Mz;this.Cq._Done();this.D$._Done();C.Mz._Done.call(this
);},_ReInit:function(){C.Mz._ReInit.call(this);this.Cq._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mz._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.As2={AdQ:null,Cq:null,G$:null,Wv:null,FS:null,UE:A.wf,AkN:A.wf,M2:false,Aqh:
false,AvZ:function(){return this.M2;},Zt:function(){if(this.Dt){this.P.CZ(this.Cq.
B3);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.UE));this.P.Z(true);}if(
!this.Dt&&!this.Cq.B3){this.P.CZ(0);this.P.Z(false);}if(((!this.Dt&&(this.Cq.B3>
0))&&!!this.P.Ab)&&!this.Ra){this.P.CZ(this.Cq.B3);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.UE));this.P.Z(true);}if((!this.Dt&&this.Ra)&&!!this.P.Ab)
this.P.Ab.HR(this.P);this.P.ArT(this.Aqh);if(!!this.AdQ)this.Ab.HR(this.AdQ);if(
!this.Bw)this.P.As(false);},SR:function(){var B;if(this.AcO){if(this.P.Fq()&&!!this.
P.Ab)this.Cq.Cx=this.P.G9;else this.Cq.Cx=0;this.AkN=A.aaI(this.P.M);}var AAh=((
!this.P.Ab||!this.P.G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AAi=((!this.Dt&&((!this.P.Ab||!this.
P.Fq())||this.Ra))||!this.Cq.B3)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.UE),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAh&&
AAi){this.Cq.Cx=0;this.Cq.B3=0;this.AkN=this.UE;this.Wv.A77();}this.Aqh=this.P.ASO(
);if(this.Bw)this.P.As(true);if((this.Dt||this.Ajo)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZM)this.P.Ab.ZL(this.P);if(this.Dt&&this.Ajy
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fq())this.P.CZ(this.Cq.Cx);if((!this.Dt&&A.aaX(this.AkN,this.UE))&&this.
Wv.AEd())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkN));if(!this.Dt&&(
this.Cq.Cx===this.Cq.B3))this.P.CZ(this.Cq.Cx);if(!this.Dt&&((!this.P.Ab||!this.
P.Fq())||!this.P.G9)){this.M2=true;this.Mw();return;}if(((this.Dt&&(this.P.G9===
this.Cq.B3))&&A.aaX(A.aaI(this.P.M),this.UE))&&this.P.Fq()){this.M2=true;this.Mw(
);return;}if(((!this.Dt&&(this.P.G9===this.Cq.B3))&&A.aaX(A.aaI(this.P.M),this.UE
))&&this.Wv.AEd()){this.M2=true;this.Mw();return;}if(((this.Cq.Cx===this.Cq.B3)&&
A.aaX(this.AkN,this.UE))&&this.Wv.AEd()){this.M2=true;this.Mw();return;}this.P.ArT(
true);this.P.Z(false);this.AdQ=A._NewObject(A.acg.AV8,0);this.AdQ.Bni(this.P);this.
AdQ.CZ(this.Cq.Cx);this.AdQ.Boe(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AMo(this.AdQ,this.P);if(!this.Cq.JX)this.Cq.HQ(1);if(!this.G$.JX)this.G$.HQ(
1);this.G$.Afc(false);this.G$.Ak0=false;this.G$.SJ=[this,this.AiS];this.G$.Ahr=[
this,this.AAN];if(this.Dt){this.G$.Cx=0;this.G$.B3=1;}else{this.G$.Cx=1;this.G$.
B3=0;}this.Cq.Q=[B=this.AdQ,B.Awt,B.CZ];this.Cq.Afc(false);this.Cq.Ak0=false;this.
Cq.SJ=[this,this.AiS];this.Cq.Ahr=null;this.G$.As(!A.aaX(this.AkN,this.UE)||!this.
Wv.AEd());this.Cq.As(this.Cq.Cx!==this.Cq.B3);},AiS:function(G){this.M2=!this.Cq.
Bw&&!this.G$.Bw;this.Mw();},AAN:function(G){var B;var ABD=A.abe(this.UE,this.AkN
);if(!this.Dt)ABD=[-ABD[0],-ABD[1]];this.FS.A77();this.FS.Ag0=this.Wv.Ag0;this.FS.
BqE(ABD[0],ABD[1],0);this.FS.Bka(this.Wv,this.FS,this.G$.A5);if(this.Dt)this.AdQ.
BaA(this.AkN,this.FS);else this.AdQ.BaA(this.UE,this.FS);},_Init:function(aArg){
C.Mz._Init.call(this,aArg);C.Gn._Init.call(this.Cq={I:this},0);C.Nf._Init.call(this.
G$={I:this},0);A.Graphics.Ax_._Init.call(this.Wv={I:this},0);A.Graphics.Ax_._Init.
call(this.FS={I:this},0);this.__proto__=C.As2;},_Done:function(){this.__proto__=
C.Mz;this.Cq._Done();this.G$._Done();this.Wv._Done();this.FS._Done();C.Mz._Done.
call(this);},_ReInit:function(){C.Mz._ReInit.call(this);this.Cq._ReInit();this.G$.
_ReInit();this.Wv._ReInit();this.FS._ReInit();},_Mark:function(D){var B;C.Mz._Mark.
call(this,D);if((B=this.AdQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rk={Si:function(){return null;},Sh:function(
){return null;},Aeg:function(){return this.Si();},Aef:function(){return this.Sh(
);},_Init:function(aArg){this.__proto__=C.Rk;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AVg={Si:function(){var Ao=A._NewObject(C.As1,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajy=
false;Ao.ZM=true;Ao.AcO=false;Ao.Akt=[this,this.ApR];return Ao;},Sh:function(){var
Ao=A._NewObject(C.As1,0);Ao.Dt=false;Ao.Bw=false;Ao.Ra=true;return Ao;},Aeg:function(
){var Ao=C.Rk.Aeg.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aef:function(){var
Ao=A._NewObject(C.As1,0);Ao.Dt=false;Ao.Bw=true;Ao.Ajo=true;Ao.Ra=false;return Ao;
},ApR:function(G){var B;var Ao=(C.As1.isPrototypeOf(G)?G:null);var Be=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Be.slice(
0,2);pos=[(Be[0]+(((Be[2]-Be[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Be[1]+(((
Be[3]-Be[1])/2)|0))-((C6[1]/2)|0)];Ao.Asr=pos;},_Init:function(aArg){C.Rk._Init.
call(this,aArg);this.__proto__=C.AVg;},_className:"Effects::ShowHideTransition"};
C.Aeq={ACW:500,Si:function(){var Ao=A._NewObject(C.Afe,0);Ao.Dt=true;Ao.Bw=true;
Ao.Ajy=false;Ao.ZM=true;Ao.AcO=true;Ao.Aea=false;Ao.Akt=[this,this.ApR];Ao.Cq.Fr(
this.ACW);Ao.Cq.Cx=0;Ao.Cq.B3=255;Ao.D$.Fr(this.ACW);Ao.D$.WS(23);return Ao;},Sh:
function(){var Ao=A._NewObject(C.Axt,0);Ao.Dt=false;Ao.Bw=false;Ao.Ra=true;Ao.AcO=
true;Ao.E0.Cx=255;Ao.E0.B3=0;Ao.E0.Fr(this.ACW);return Ao;},Aeg:function(){var Ao=
C.Rk.Aeg.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aef:function(){var Ao=C.Rk.
Aef.call(this);Ao.Ajo=true;Ao.Ra=false;Ao.Bw=true;return Ao;},ApR:function(G){var
B;var Ao=(C.Afe.isPrototypeOf(G)?G:null);var Be=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Be.slice(0,2);pos=[(Be[0]+(((Be[
2]-Be[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Be[1]+(((Be[3]-Be[1])/2)|0))-((
C6[1]/2)|0)];Ao.D$.B3=pos;if(((!Ao.P.Ab||!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rk._Init.call(this,aArg);this.__proto__=C.Aeq;
},_className:"Effects::FadeInOutTransition"};C.AG5={Kn:0x12,Au$:0,Aea:false,Si:function(
){var Ao=A._NewObject(C.Afe,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajy=false;Ao.ZM=true;Ao.
AcO=true;Ao.Aea=this.Aea;Ao.Akt=[this,this.ApR];Ao.Cq.Fr(500);Ao.Cq.AkC(0);Ao.Cq.
Cx=0;Ao.Cq.B3=255;Ao.D$.Fr(500);Ao.D$.WS(23);Ao.D$.AF_(0);Ao.D$.AF$(0);Ao.D$.AwP(
3);Ao.D$.AFb(0.5);Ao.D$.AFU(3);Ao.D$.AFi(3);Ao.D$.AFs(0.5);return Ao;},Sh:function(
){var Ao=A._NewObject(C.Afe,0);Ao.Dt=false;Ao.Bw=false;Ao.Ra=true;Ao.AcO=true;Ao.
Aea=this.Aea;Ao.Akt=[this,this.A3R];Ao.Cq.Cx=255;Ao.Cq.B3=0;Ao.Cq.Fr(500);Ao.Cq.
AkC(0);Ao.D$.Fr(500);Ao.D$.WS(23);Ao.D$.AF_(0);Ao.D$.AF$(0);Ao.D$.AwP(3);Ao.D$.AFb(
0.5);Ao.D$.AFU(3);Ao.D$.AFi(3);Ao.D$.AFs(0.5);return Ao;},Aeg:function(){var Ao=
C.Rk.Aeg.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aef:function(){var Ao=C.Rk.
Aef.call(this);Ao.Ajo=true;Ao.Ra=false;Ao.Bw=true;return Ao;},ApR:function(G){var
B;var Ao=(C.Afe.isPrototypeOf(G)?G:null);var Bu=this.Kn;var Be=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Be.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Be[2]-C6[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Be[0]+(((
Be[2]-Be[0])/2)|0))-((C6[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Be[3
]-C6[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Be[1]+(((Be[3]-Be[1])/2)|0))-((
C6[1]/2)|0)];Ao.D$.B3=pos;if(((!Ao.P.Ab||!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HF=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Au$){case 5:pos=[pos[0],-C6[1]];break;case 3:{
pos=[pos[0],-C6[1]];pos=[HF[0],pos[1]];}break;case 8:pos=[-C6[0],-C6[1]];break;case
2:pos=[HF[0],pos[1]];break;case 7:pos=[-C6[0],pos[1]];break;case 4:pos=[pos[0],HF[
1]];break;case 1:{pos=[pos[0],HF[1]];pos=[HF[0],pos[1]];}break;case 6:{pos=[pos[
0],HF[1]];pos=[-C6[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A3R:
function(G){var B;var Ao=(C.Afe.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HF=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Au$){case 5:pos=[pos[0],HF[1]];break;case 3:{pos=[pos[0],HF[1]];pos=[-
C6[0],pos[1]];}break;case 8:{pos=[pos[0],HF[1]];pos=[HF[0],pos[1]];}break;case 2:
pos=[-C6[0],pos[1]];break;case 7:pos=[HF[0],pos[1]];break;case 4:pos=[pos[0],-C6[
1]];break;case 1:pos=[-C6[0],-C6[1]];break;case 6:{pos=[pos[0],-C6[1]];pos=[HF[0
],pos[1]];}break;default:;}Ao.D$.B3=pos;},_Init:function(aArg){C.Rk._Init.call(this
,aArg);this.__proto__=C.AG5;},_className:"Effects::SlideTransition"};C.Afm={Si:function(
){var Ao=A._NewObject(C.As2,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajy=false;Ao.ZM=true;Ao.
AcO=true;Ao.Akt=[this,this.ApR];Ao.Cq.Fr(500);Ao.Cq.AkC(0);Ao.Cq.Cx=0;Ao.Cq.B3=255;
Ao.G$.Fr(500);Ao.G$.WS(23);Ao.G$.AF_(0);Ao.G$.AF$(0);Ao.G$.AwP(3);Ao.G$.AFb(0.5);
Ao.G$.AFU(3);Ao.G$.AFi(3);Ao.G$.AFs(0.5);Ao.Wv.Afl(0.5,0.5,1);return Ao;},Sh:function(
){var Ao=A._NewObject(C.As2,0);Ao.Dt=false;Ao.Bw=false;Ao.Ra=true;Ao.AcO=true;Ao.
Akt=[this,this.A3R];Ao.Cq.Cx=255;Ao.Cq.B3=0;Ao.Cq.Fr(500);Ao.Cq.AkC(0);Ao.G$.Fr(
500);Ao.G$.WS(23);Ao.G$.AF_(0);Ao.G$.AF$(0);Ao.G$.AwP(3);Ao.G$.AFb(0.5);Ao.G$.AFU(
3);Ao.G$.AFi(3);Ao.G$.AFs(0.5);Ao.Wv.Afl(0.5,0.5,1);return Ao;},Aeg:function(){var
Ao=C.Rk.Aeg.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aef:function(){var Ao=
C.Rk.Aef.call(this);Ao.Ajo=true;Ao.Ra=false;Ao.Bw=true;return Ao;},ApR:function(
G){var B;var Ao=(C.As2.isPrototypeOf(G)?G:null);var Be=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Be.slice(0,2);pos=[(Be[
0]+(((Be[2]-Be[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Be[1]+(((Be[3]-Be[1
])/2)|0))-((C6[1]/2)|0)];Ao.UE=A.abf(pos,[(C6[0]/2)|0,(C6[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.UE,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A3R:function(G){var Ao=(C.As2.isPrototypeOf(G)?G:null);Ao.
UE=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rk._Init.call(this,aArg);this.__proto__=
C.Afm;},_className:"Effects::ScaleTransition"};C.AhT={BE$:0,BFQ:1,BFS:2,BFR:3,BEB:
4,BED:5,BEC:6,BGn:7,BGp:8,BGo:9,BD7:10,BD9:11,BD8:12,BDN:13,BDP:14,BDO:15,BEs:16
,BEu:17,BEt:18,BDY:19,BD0:20,BDZ:21,BEr:22,BEF:23,BEq:24,BEG:25,BEc:26};C.BEk={A5u:
0x1,A5t:0x2,A5v:0x4,A5y:0x8,A5x:0x10,A5w:0x20};C.AOh={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AOh;},_className:"Effects::EffectTimerClass"};C.
Aem={_Init:function(){C.AOh._Init.call(this,0);this.P0(15);this.As(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AHh={Pq:A.abi(12,0
,null),Alw:A.abi(12,0,null),_Init:function(aArg){(this.Pq=[]).__proto__=C.AHh.Pq;(
this.Alw=[]).__proto__=C.AHh.Alw;this.__proto__=C.AHh;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.AC3={B_:null,B9:null,A8J:function(AtE){var Ao=this.B9;while(
!!Ao){Ao.Zt();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B9;while(!!Ao){A.pe(Ao.A3G
,Ao);Ao=Ao.Ah;}},A8I:function(AtE){var Ao=this.B9;while(!!Ao){A.pe(Ao.AKP,Ao);Ao=
Ao.Ah;}this.B9=null;this.B_=null;},SR:function(AtE){var B;if(!this.B9)this.Mw();
var Ao=this.B9;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApW=null;Ao=Ao.
Ah;}Ao=this.B9;while(!!Ao){(B=Ao.Akt)?B[1].call(B[0],Ao):null;Ao.SR();Ao=Ao.Ah;}
},Mw:function(){var Ao=this.B9;while(!!Ao&&Ao.AvZ())Ao=Ao.Ah;if(!Ao)A.Core.Ak1.Mw.
call(this);},Bo_:function(FQ){if(!FQ)return;if(this.ARv())throw new Error(BD);if(
FQ.Pr!==this)throw new Error(E8);if(!!FQ.Ah)FQ.Ah.AJ=FQ.AJ;else this.B_=FQ.AJ;if(
!!FQ.AJ)FQ.AJ.Ah=FQ.Ah;else this.B9=FQ.Ah;FQ.Pr=null;FQ.Ah=null;FQ.AJ=null;if(!!
FQ.P)FQ.P.ApW=null;A.pe(FQ.AKP,FQ);if(!this.B9)this.AmH();},A5o:function(FQ){if(
!FQ)return;if(this.ARv())throw new Error(Hs);if(!!FQ.Pr)throw new Error(I0);FQ.AJ=
this.B_;FQ.Ah=null;if(!!this.B_)this.B_.Ah=FQ;else this.B9=FQ;this.B_=FQ;FQ.Pr=this;
},_Init:function(aArg){A.Core.Ak1._Init.call(this,aArg);this.__proto__=C.AC3;},_Mark:
function(D){var B;A.Core.Ak1._Mark.call(this,D);if((B=this.B_)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsN={_Init:function(){C.AVg._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gn.__proto__=C.E0;C.AGu.__proto__=C.E0;C.AND.__proto__=C.E0;
C.Nf.__proto__=C.E0;C.As1.__proto__=C.Mz;C.Axt.__proto__=C.Mz;C.Afe.__proto__=C.
Mz;C.As2.__proto__=C.Mz;C.AVg.__proto__=C.Rk;C.Aeq.__proto__=C.Rk;C.AG5.__proto__=
C.Rk;C.Afm.__proto__=C.Rk;C.AOh.__proto__=A.Core.Timer;C.AC3.__proto__=A.Core.Ak1;
};C._ReInit=function(){var B;if((B=C.Aem._this))B._ReInit(),C.Aem._ReInit.call(B
);if((B=C.AsN._this))B._ReInit(),C.AsN._ReInit.call(B);};C.DI=function(D){var B;
if((B=C.Aem._this)&&(B._cycle!=D))B._Done(C.Aem._this=null);if((B=C.AsN._this)&&(
B._cycle!=D))B._Done(C.AsN._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */