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
var Cg=[100,100];var BF="Trying to remove a fader from a task, which is actually running";
var E7="The fader doesn\'t belong to this task";var Hr="Trying to add a fader to a task, which is actually running";
var I1="The fader belongs already to a task";
C.E1={M$:null,timer:null,Qy:null,SL:null,Ahr:null,Tq:0,Ajb:0,Vi:0,Pg:0,AAb:0.001,
Qu:0,Ee:0,Dy:0,AOe:0.5,A55:3,Axx:3,AuR:0.5,V5:3,AVD:0,AVC:0,J1:0,Py:1000,PH:0,Wa:
0,AhT:0,Bw:false,AkZ:false,AUN:false,Aqb:false,ALC:false,Mn:function(G){var B;if(
!this.timer)return;if(!this.Ajb){if(this.AUN)this.Ajb=-1;else this.Ajb=1;this.Tq=
this.Ajb;this.Dy=this.timer.Bq;this.Ee=0;this.Qu=-1;}var KK;if((this.Ajb>0)&&(this.
Tq>0))KK=this.BCr();else if((this.Ajb<0)&&(this.Tq<0))KK=this.BCu();else if(this.
Ajb>0)KK=this.BCs();else KK=this.BCt();if(KK){this.As(false);(B=this.Qy)?B[1].call(
B[0],this):null;(B=this.SL)?B[1].call(B[0],this):null;}},AK8:function(AN){var B;
if(!this.M$&&(((this.AhT===19)||(this.AhT===20))||(this.AhT===21))){var AJK=this.
A55+1;var BzK=Math.sqrt(this.AOe);var RT=0.5;var O;this.M$=A._NewObject(C.AHa,0);
this.M$.Pp.Set(0,1);this.M$.Alv.Set(0,1);for(O=1;O<AJK;O=O+1){this.M$.Pp.Set(O,this.
M$.Pp.Get(O-1)*BzK);this.M$.Alv.Set(O,this.M$.Alv.Get(O-1)*this.AOe);RT=RT+this.
M$.Pp.Get(O);}var BAF=1/RT;this.M$.Pp.Set(0,0.5);RT=0;for(O=0;O<AJK;O=O+1){this.
M$.Pp.Set(O,this.M$.Pp.Get(O)*BAF);RT=RT+this.M$.Pp.Get(O);}this.M$.Pp.Set(AJK,this.
M$.Pp.Get(AJK)+(1-RT));}if(this.AkZ){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
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
AN=((AN*AN)*AN)-((AN*this.AuR)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuR)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuR)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuR)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axx)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axx)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axx)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axx)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var BC=this.M$;var O=0;var GI=0;var La=BC.Pp.
Get(0);var D$=1-AN;while(D$>La){O=O+1;GI=La;La=La+BC.Pp.Get(O);}AN=(D$-GI)/(La-GI
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=BC.Alv.Get(O)*(1-(AN*AN));}}break;case 20:{
var BC=this.M$;var O=0;var GI=0;var La=BC.Pp.Get(0);while(AN>La){O=O+1;GI=La;La=
La+BC.Pp.Get(O);}AN=(AN-GI)/(La-GI);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(BC.Alv.
Get(O)*(1-(AN*AN)));}}break;case 21:{var BC=this.M$;var O=0;var GI=0;var La=BC.Pp.
Get(0);var LT=AN*2;var D$=LT-1;if(LT<1)D$=-D$;while(D$>La){O=O+1;GI=La;La=La+BC.
Pp.Get(O);}D$=(D$-GI)/(La-GI);if(!O)D$=D$*D$;else{D$=(2*D$)-1;D$=1-(BC.Alv.Get(O
)*(1-(D$*D$)));}if(LT<1)AN=0.5*(1-D$);else AN=0.5*(1+D$);}break;default:if(this.
Aqb){var LT=AN;var AAA=1-LT;AN=((AAA*LT)*(this.Pg+1))+(LT*LT);}else if(this.ALC){
var LT=AN;var AAA=1-LT;var BdM=LT*LT;var BAW=AAA*AAA;AN=(((BAW*LT)*(this.Pg+1))+((
AAA*BdM)*(this.Vi+2)))+(BdM*LT);}}this.AuV(AN);(B=this.Ahr)?B[1].call(B[0],this):
null;},BCu:function(){var Av=(this.timer.Bq-this.Dy)|0;if(Av<0)Av=-Av;var LO=this.
Wa;var Oz=this.Wa+this.Py;var Hh=this.PH+this.Py;var KK=false;var Ef=this.Qu;if(
!this.Ee&&(Av>=Oz)){this.Ee=1;Av=Av-Oz;this.Dy=this.Dy+Oz;}if((this.Ee>0)&&(Av>=
Hh)){var Ii=(Av/Hh)|0;this.Ee=this.Ee+Ii;Av=Av-(Ii*Hh);this.Dy=this.Dy+(Ii*Hh);}
if((this.Ee>2)&&!this.J1)this.Ee=1;if(this.Ee>0)LO=this.PH;if((this.Ee>=this.J1)&&(
this.J1>0)){KK=true;Ef=0;}else if(Av>=LO)Ef=1-((Av-LO)*this.AAb);else if(Ef>=0)Ef=
0;if(Ef!==this.Qu){if(Ef<0)Ef=0;if(Ef>1)Ef=1;}if(Ef!==this.Qu){this.Qu=Ef;this.AK8(
Ef);}return KK;},BCt:function(){var Av=(this.Dy-this.timer.Bq)|0;var LO=this.Wa;
var Oz=this.Wa+this.Py;var Hh=this.PH+this.Py;var KK=false;var Ef=this.Qu;if((this.
Ee>1)&&(Av<0)){var Ii=(((-Av+Hh)-1)/Hh)|0;if((this.Ee-Ii)<=0)Ii=this.Ee-1;this.Ee=
this.Ee-Ii;Av=Av+(Ii*Hh);this.Dy=this.Dy+(Ii*Hh);}if(((this.Ee===1)&&(Av<0))&&(this.
J1>0)){this.Ee=0;Av=Av+Oz;this.Dy=this.Dy+Oz;}if(((this.Ee===1)&&(Av<0))&&!this.
J1){var Ii=(((-Av+Hh)-1)/Hh)|0;Av=Av+(Ii*Hh);this.Dy=this.Dy+(Ii*Hh);}if(this.Ee>
0)LO=this.PH;if(Av<0){KK=true;Ef=1;}else if(Av>=LO)Ef=1-((Av-LO)*this.AAb);else if(
Ef>=0)Ef=1;if(Ef!==this.Qu){if(Ef<0)Ef=0;if(Ef>1)Ef=1;}if(Ef!==this.Qu){this.Qu=
Ef;this.AK8(Ef);}return KK;},BCs:function(){var Av=(this.Dy-this.timer.Bq)|0;var
LO=this.Wa;var Oz=this.Wa+this.Py;var Hh=this.PH+this.Py;var KK=false;var Ef=this.
Qu;if((this.Ee>1)&&(Av<0)){var Ii=(((-Av+Hh)-1)/Hh)|0;if((this.Ee-Ii)<=0)Ii=this.
Ee-1;this.Ee=this.Ee-Ii;Av=Av+(Ii*Hh);this.Dy=this.Dy+(Ii*Hh);}if(((this.Ee===1)&&(
Av<0))&&(this.J1>0)){this.Ee=0;Av=Av+Oz;this.Dy=this.Dy+Oz;}if(((this.Ee===1)&&(
Av<0))&&!this.J1){var Ii=(((-Av+Hh)-1)/Hh)|0;Av=Av+(Ii*Hh);this.Dy=this.Dy+(Ii*Hh
);}if(this.Ee>0)LO=this.PH;if(Av<0){KK=true;Ef=0;}else if(Av>=LO)Ef=(Av-LO)*this.
AAb;else if(Ef>=0)Ef=0;if(Ef!==this.Qu){if(Ef<0)Ef=0;if(Ef>1)Ef=1;}if(Ef!==this.
Qu){this.Qu=Ef;this.AK8(Ef);}return KK;},BCr:function(){var Av=(this.timer.Bq-this.
Dy)|0;if(Av<0)Av=-Av;var LO=this.Wa;var Oz=this.Wa+this.Py;var Hh=this.PH+this.Py;
var KK=false;var Ef=this.Qu;if(!this.Ee&&(Av>=Oz)){this.Ee=1;Av=Av-Oz;this.Dy=this.
Dy+Oz;}if((this.Ee>0)&&(Av>=Hh)){var Ii=(Av/Hh)|0;this.Ee=this.Ee+Ii;Av=Av-(Ii*Hh
);this.Dy=this.Dy+(Ii*Hh);}if((this.Ee>2)&&!this.J1)this.Ee=1;if(this.Ee>0)LO=this.
PH;if((this.Ee>=this.J1)&&(this.J1>0)){KK=true;Ef=1;}else if(Av>=LO)Ef=(Av-LO)*this.
AAb;else if(Ef>=0)Ef=1;if(Ef!==this.Qu){if(Ef<0)Ef=0;if(Ef>1)Ef=1;}if(Ef!==this.
Qu){this.Qu=Ef;this.AK8(Ef);}return KK;},Aff:function(E){if(this.AUN===E)return;
this.AUN=E;if(!this.Bw||!this.Ajb)return;if(E)this.Tq=-1;else this.Tq=1;this.Dy=(
this.timer.Avx()*2)-this.Dy;},AFm:function(E){if(E<0)E=0;if(E>1)E=1;this.AOe=E;}
,AFd:function(E){if(E<1)E=1;if(E>10)E=10;this.A55=E;this.M$=null;},AFN:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axx=E;},AE8:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuR=E;},AwP:function(E){if(E<1)E=1;if(E>100)E=100;this.V5=E;},AF4:function(
E){if(this.AVD===E)return;this.AVD=E;if(this.AhT===26){this.Vi=E;this.Aqb=(this.
Pg===this.Vi)&&!!this.Pg;this.ALC=!this.Aqb&&(this.Pg!==this.Vi);}},AF3:function(
E){if(this.AVC===E)return;this.AVC=E;if(this.AhT===26){this.Pg=E;this.Aqb=(this.
Pg===this.Vi)&&!!this.Pg;this.ALC=!this.Aqb&&(this.Pg!==this.Vi);}},WQ:function(
E){if(this.AhT===E)return;this.AhT=E;this.M$=null;switch(E){case 24:{this.Pg=-1.1;
this.Vi=1.1;}break;case 22:{this.Pg=-1;this.Vi=-2;}break;case 23:{this.Pg=2;this.
Vi=1;}break;case 25:{this.Pg=1.1;this.Vi=-1.1;}break;case 0:{this.Pg=0;this.Vi=0;
}break;default:{this.Pg=this.AVC;this.Vi=this.AVD;}}this.Aqb=(this.Pg===this.Vi)&&
!!this.Pg;this.ALC=!this.Aqb&&(this.Pg!==this.Vi);},HP:function(E){if(E<0)E=0;this.
J1=E;},Fq:function(E){if(E<15)E=15;this.Py=E;this.AAb=1/E;},Ux:function(E){if(E<
0)E=0;this.PH=E;},AkB:function(E){if(E<0)E=0;this.Wa=E;},As:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mn],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeo);A.zV([this,this.Mn],this.timer
,0);this.Ajb=0;A.pe([this,this.Mn],this);}},AuV:function(Aax){},An4:function(G){
this.As(false);},An2:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.E1;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M$)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gp={Q:null,A6:0,B4:255,Cy:0,AuV:function(Aax
){var F;this.A6=this.Cy+(Math.round((this.B4-this.Cy)*Aax)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A6));},_Init:function(aArg){C.E1._Init.call(this,aArg);this.
__proto__=C.Gp;},_Mark:function(D){var B;C.E1._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AGm={
Q:null,A6:A.wf,B4:Cg,Cy:A.wf,AuV:function(Aax){var F;var Eq=this.Cy[0];var Di=this.
Cy[1];Eq=Eq+(Math.round((this.B4[0]-Eq)*Aax)|0);Di=Di+(Math.round((this.B4[1]-Di
)*Aax)|0);this.A6=[Eq,Di];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A6));},_Init:
function(aArg){C.E1._Init.call(this,aArg);this.__proto__=C.AGm;},_Mark:function(
D){var B;C.E1._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANy={Q:null,A6:0,B4:0xFFFFFFFF,Cy:0,AuV:
function(Aax){var F;var Po=this.Cy&0xFF;var AaG=(this.Cy>>8)&0xFF;var AlB=(this.
Cy>>16)&0xFF;var Alu=(this.Cy>>24)&0xFF;Po=Po+((((this.B4&0xFF)-Po)*Aax)|0);AaG=
AaG+(((((this.B4>>8)&0xFF)-AaG)*Aax)|0);AlB=AlB+(((((this.B4>>16)&0xFF)-AlB)*Aax
)|0);Alu=Alu+(((((this.B4>>24)&0xFF)-Alu)*Aax)|0);if(Po<0)Po=0;if(Po>255)Po=255;
if(AaG<0)AaG=0;if(AaG>255)AaG=255;if(AlB<0)AlB=0;if(AlB>255)AlB=255;if(Alu<0)Alu=
0;if(Alu>255)Alu=255;this.A6=(Po&0xFF)|((AaG&0xFF)<<8)|((AlB&0xFF)<<16)|((Alu&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A6));},_Init:function(aArg){C.E1.
_Init.call(this,aArg);this.__proto__=C.ANy;},_Mark:function(D){var B;C.E1._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.Nh={A6:0,B4:1,Cy:0,AuV:function(Aax){this.A6=this.Cy+((
this.B4-this.Cy)*Aax);},_Init:function(aArg){C.E1._Init.call(this,aArg);this.__proto__=
C.Nh;},_className:"Effects::FloatEffect"};C.TP={timer:null,Q:null,Ee:0,Dy:0,J1:0
,Py:1000,PH:1000,Wa:0,Bw:false,Cy:false,B4:true,Mn:function(G){var F;if(!this.timer
)return;if(this.Ee<0){this.Dy=this.timer.Bq;this.Ee=0;}var Av=(this.timer.Bq-this.
Dy)|0;var Oz=this.Wa+this.Py;var Hh=this.PH+this.Py;var LO=this.Wa;var Js=this.Ee;
if(!Js&&(Av>=Oz)){Js=1;Av=Av-Oz;}if((Js>0)&&(Av>=Hh)){var Ii=(Av/Hh)|0;Av=Av-(Ii
*Hh);Js=Js+Ii;}if((Js>2)&&!this.J1)Js=1;if(Js!==this.Ee){this.Dy=this.timer.Bq-(((
B=Av)<0)?B+0x100000000:B);this.Ee=Js;}if(Js>0)LO=this.PH;var KK=(Js>=this.J1)&&(
this.J1>0);if(!!this.Q){if(!KK&&(Av>=LO))(F=this.Q,F[2].call(F[0],this.Cy));if(KK||((
Av<LO)&&(Js>0)))(F=this.Q,F[2].call(F[0],this.B4));}if(KK)this.As(false);},HP:function(
E){if(E<0)E=0;this.J1=E;},Fq:function(E){if(E<100)E=100;this.Py=E;},Ux:function(
E){if(E<0)E=0;this.PH=E;},AkB:function(E){if(E<0)E=0;this.Wa=E;},As:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mn],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeo);A.zV([this,this.Mn
],this.timer,0);this.Ee=-1;}},An4:function(G){this.As(false);},An2:function(G){if(
this.Bw)this.As(false);this.As(true);},_Init:function(aArg){this.__proto__=C.TP;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.MC={Pq:null,AI:null,Ah:null,Ab:null,P:null,AKK:null,A3I:null,Akq:null,Du:true,
Bw:true,AcQ:true,Ajn:false,Ajx:true,ZO:true,Q$:true,My:function(){if(!!this.Pq)this.
Pq.My();},AvX:function(){return true;},Zv:function(){},ST:function(){this.My();}
,_Init:function(aArg){this.__proto__=C.MC;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pq)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKK)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3I)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsX={Asn:A.wf,M4:false,AvX:function(){return this.M4;},Zv:function(
){if(!this.Du&&!!this.P.Ab)this.P.Z(false);if((!this.Du&&this.Q$)&&!!this.P.Ab)this.
P.Ab.HQ(this.P);if(!this.Bw)this.P.As(false);},ST:function(){if(this.Bw)this.P.As(
true);if((this.Du||this.Ajn)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Du&&this.ZO)this.P.Ab.ZN(this.P);if(this.Du&&this.Ajx)this.P.Ab.Ba(this.P);
if(this.Du&&!this.AcQ)this.P.H(A.abJ(this.P.M,this.Asn));if(this.Du){this.P.C0(255
);this.P.Z(true);}if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Ba(null);this.M4=true;
this.My();},_Init:function(aArg){C.MC._Init.call(this,aArg);this.__proto__=C.AsX;
},_className:"Effects::VisibilityFader"};C.Axt={E1:null,M4:false,Aqe:false,AvX:function(
){return this.M4;},Zv:function(){if(this.Du)this.P.C0(this.E1.B4);if(!this.Du&&!
this.P.G9)this.P.Z(false);if((!this.Du&&this.Q$)&&!!this.P.Ab)this.P.Ab.HQ(this.
P);if(!this.Bw)this.P.As(false);},ST:function(){var B;if(this.AcQ){if(this.P.Fp(
)&&!!this.P.Ab)this.E1.Cy=this.P.G9;else this.E1.Cy=0;}var AAe=((!this.P.Ab||!this.
P.G9)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AAf=((!this.Du&&((!this.P.Ab||!this.P.Fp())||this.Q$
))||!this.E1.B4)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AAe&&AAf){this.E1.Cy=0;this.E1.B4=0;}this.Aqe=this.P.ASK(
);if(this.Bw)this.P.As(true);if((this.Du||this.Ajn)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZO)this.P.Ab.ZN(this.P);if(this.Du&&this.Ajx
)this.P.Ab.Ba(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.
Du&&!this.P.Fp()){this.P.C0(this.E1.Cy);this.P.Z(true);}if(!this.Du&&((!this.P.Ab||
!this.P.Fp())||!this.P.G9)){this.M4=true;this.My();return;}if(!this.Du&&(this.E1.
Cy===this.E1.B4))this.P.C0(this.E1.Cy);if(this.P.G9===this.E1.B4){this.M4=true;this.
My();return;}if(this.E1.Cy===this.E1.B4){this.M4=true;this.My();return;}if(!this.
E1.J1)this.E1.HP(1);this.E1.Q=[B=this.P,B.Awr,B.A0O];this.E1.Aff(false);this.E1.
AkZ=false;this.E1.SL=[this,this.AiR];this.E1.Ahr=null;this.E1.As(true);},AiR:function(
G){this.M4=true;this.My();},_Init:function(aArg){C.MC._Init.call(this,aArg);C.Gp.
_Init.call(this.E1={I:this},0);this.__proto__=C.Axt;},_Done:function(){this.__proto__=
C.MC;this.E1._Done();C.MC._Done.call(this);},_ReInit:function(){C.MC._ReInit.call(
this);this.E1._ReInit();},_Mark:function(D){var B;C.MC._Mark.call(this,D);if((B=
this.E1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Afh={
Cq:null,Eb:null,Aec:false,M4:false,Aqe:false,AvX:function(){return this.M4;},Zv:
function(){if(this.Du){this.P.C0(this.Cq.B4);this.P.H(A.abJ(this.P.M,this.Eb.B4)
);}if(!this.Du&&!this.P.G9)this.P.Z(false);if((!this.Du&&this.Q$)&&!!this.P.Ab)this.
P.Ab.HQ(this.P);if(this.Aec)this.P.ArR(this.Aqe);if(!this.Bw)this.P.As(false);},
ST:function(){var B;if(this.AcQ){if(this.P.Fp()&&!!this.P.Ab)this.Cq.Cy=this.P.G9;
else this.Cq.Cy=0;this.Eb.Cy=this.P.M.slice(0,2);}var AAe=((!this.P.Ab||!this.P.
G9)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AAf=((!this.Du&&((!this.P.Ab||!this.P.Fp())||this.Q$
))||!this.Cq.B4)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.Eb.B4
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAe&&AAf){
this.Cq.Cy=0;this.Cq.B4=0;this.Eb.Cy=this.Eb.B4;}this.Aqe=this.P.ASK();if(this.Bw
)this.P.As(true);if((this.Du||this.Ajn)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Du&&this.ZO)this.P.Ab.ZN(this.P);if(this.Du&&this.Ajx)this.P.Ab.Ba(
this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.Du&&!this.P.
Fp()){this.P.H(A.abJ(this.P.M,this.Eb.Cy));this.P.C0(this.Cq.Cy);this.P.Z(true);
}if(!this.Du&&((!this.P.Ab||!this.P.Fp())||!this.P.G9)){this.M4=true;this.My();return;
}if(!this.Du&&A.aaX(this.Eb.Cy,this.Eb.B4))this.P.H(A.abJ(this.P.M,this.Eb.Cy));
if(!this.Du&&(this.Cq.Cy===this.Cq.B4))this.P.C0(this.Cq.Cy);if((this.P.G9===this.
Cq.B4)&&A.aaX(this.P.M.slice(0,2),this.Eb.B4)){this.M4=true;this.My();return;}if((
this.Cq.Cy===this.Cq.B4)&&A.aaX(this.Eb.Cy,this.Eb.B4)){this.M4=true;this.My();return;
}if(!this.Cq.J1)this.Cq.HP(1);if(!this.Eb.J1)this.Eb.HP(1);if(this.Aec)this.P.ArR(
true);this.Eb.Q=null;this.Eb.Aff(false);this.Eb.AkZ=false;this.Eb.SL=[this,this.
AiR];this.Eb.Ahr=[this,this.AAI];this.Cq.Q=[B=this.P,B.Awr,B.A0O];this.Cq.Aff(false
);this.Cq.AkZ=false;this.Cq.SL=[this,this.AiR];this.Cq.Ahr=null;this.Eb.As(!A.aaX(
this.Eb.Cy,this.Eb.B4));this.Cq.As(this.Cq.Cy!==this.Cq.B4);},AiR:function(G){this.
M4=!this.Cq.Bw&&!this.Eb.Bw;this.My();},AAI:function(G){this.P.H(A.abJ(this.P.M,
this.Eb.A6));},_Init:function(aArg){C.MC._Init.call(this,aArg);C.Gp._Init.call(this.
Cq={I:this},0);C.AGm._Init.call(this.Eb={I:this},0);this.__proto__=C.Afh;},_Done:
function(){this.__proto__=C.MC;this.Cq._Done();this.Eb._Done();C.MC._Done.call(this
);},_ReInit:function(){C.MC._ReInit.call(this);this.Cq._ReInit();this.Eb._ReInit(
);},_Mark:function(D){var B;C.MC._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsY={AdS:null,Cq:null,G$:null,Wt:null,FW:null,UD:A.wf,AkL:A.wf,M4:false,Aqe:
false,AvX:function(){return this.M4;},Zv:function(){if(this.Du){this.P.C0(this.Cq.
B4);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.UD));this.P.Z(true);}if(
!this.Du&&!this.Cq.B4){this.P.C0(0);this.P.Z(false);}if(((!this.Du&&(this.Cq.B4>
0))&&!!this.P.Ab)&&!this.Q$){this.P.C0(this.Cq.B4);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.UD));this.P.Z(true);}if((!this.Du&&this.Q$)&&!!this.P.Ab)
this.P.Ab.HQ(this.P);this.P.ArR(this.Aqe);if(!!this.AdS)this.Ab.HQ(this.AdS);if(
!this.Bw)this.P.As(false);},ST:function(){var B;if(this.AcQ){if(this.P.Fp()&&!!this.
P.Ab)this.Cq.Cy=this.P.G9;else this.Cq.Cy=0;this.AkL=A.aaI(this.P.M);}var AAe=((
!this.P.Ab||!this.P.G9)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AAf=((!this.Du&&((!this.P.Ab||!this.
P.Fp())||this.Q$))||!this.Cq.B4)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.UD),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAe&&
AAf){this.Cq.Cy=0;this.Cq.B4=0;this.AkL=this.UD;this.Wt.A8a();}this.Aqe=this.P.ASK(
);if(this.Bw)this.P.As(true);if((this.Du||this.Ajn)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZO)this.P.Ab.ZN(this.P);if(this.Du&&this.Ajx
)this.P.Ab.Ba(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.
Du&&!this.P.Fp())this.P.C0(this.Cq.Cy);if((!this.Du&&A.aaX(this.AkL,this.UD))&&this.
Wt.AD_())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkL));if(!this.Du&&(
this.Cq.Cy===this.Cq.B4))this.P.C0(this.Cq.Cy);if(!this.Du&&((!this.P.Ab||!this.
P.Fp())||!this.P.G9)){this.M4=true;this.My();return;}if(((this.Du&&(this.P.G9===
this.Cq.B4))&&A.aaX(A.aaI(this.P.M),this.UD))&&this.P.Fp()){this.M4=true;this.My(
);return;}if(((!this.Du&&(this.P.G9===this.Cq.B4))&&A.aaX(A.aaI(this.P.M),this.UD
))&&this.Wt.AD_()){this.M4=true;this.My();return;}if(((this.Cq.Cy===this.Cq.B4)&&
A.aaX(this.AkL,this.UD))&&this.Wt.AD_()){this.M4=true;this.My();return;}this.P.ArR(
true);this.P.Z(false);this.AdS=A._NewObject(A.acg.AV5,0);this.AdS.Bnm(this.P);this.
AdS.C0(this.Cq.Cy);this.AdS.Boi(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AMj(this.AdS,this.P);if(!this.Cq.J1)this.Cq.HP(1);if(!this.G$.J1)this.G$.HP(
1);this.G$.Aff(false);this.G$.AkZ=false;this.G$.SL=[this,this.AiR];this.G$.Ahr=[
this,this.AAI];if(this.Du){this.G$.Cy=0;this.G$.B4=1;}else{this.G$.Cy=1;this.G$.
B4=0;}this.Cq.Q=[B=this.AdS,B.Awr,B.C0];this.Cq.Aff(false);this.Cq.AkZ=false;this.
Cq.SL=[this,this.AiR];this.Cq.Ahr=null;this.G$.As(!A.aaX(this.AkL,this.UD)||!this.
Wt.AD_());this.Cq.As(this.Cq.Cy!==this.Cq.B4);},AiR:function(G){this.M4=!this.Cq.
Bw&&!this.G$.Bw;this.My();},AAI:function(G){var B;var ABy=A.abe(this.UD,this.AkL
);if(!this.Du)ABy=[-ABy[0],-ABy[1]];this.FW.A8a();this.FW.Ag0=this.Wt.Ag0;this.FW.
BqI(ABy[0],ABy[1],0);this.FW.Bkg(this.Wt,this.FW,this.G$.A6);if(this.Du)this.AdS.
BaG(this.AkL,this.FW);else this.AdS.BaG(this.UD,this.FW);},_Init:function(aArg){
C.MC._Init.call(this,aArg);C.Gp._Init.call(this.Cq={I:this},0);C.Nh._Init.call(this.
G$={I:this},0);A.Graphics.Ax9._Init.call(this.Wt={I:this},0);A.Graphics.Ax9._Init.
call(this.FW={I:this},0);this.__proto__=C.AsY;},_Done:function(){this.__proto__=
C.MC;this.Cq._Done();this.G$._Done();this.Wt._Done();this.FW._Done();C.MC._Done.
call(this);},_ReInit:function(){C.MC._ReInit.call(this);this.Cq._ReInit();this.G$.
_ReInit();this.Wt._ReInit();this.FW._ReInit();},_Mark:function(D){var B;C.MC._Mark.
call(this,D);if((B=this.AdS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rj={Sk:function(){return null;},Sj:function(
){return null;},Aei:function(){return this.Sk();},Aeh:function(){return this.Sj(
);},_Init:function(aArg){this.__proto__=C.Rj;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AVd={Sk:function(){var Ao=A._NewObject(C.AsX,0);Ao.Du=true;Ao.Bw=true;Ao.Ajx=
false;Ao.ZO=true;Ao.AcQ=false;Ao.Akq=[this,this.ApO];return Ao;},Sj:function(){var
Ao=A._NewObject(C.AsX,0);Ao.Du=false;Ao.Bw=false;Ao.Q$=true;return Ao;},Aei:function(
){var Ao=C.Rj.Aei.call(this);Ao.ZO=false;Ao.Bw=true;return Ao;},Aeh:function(){var
Ao=A._NewObject(C.AsX,0);Ao.Du=false;Ao.Bw=true;Ao.Ajn=true;Ao.Q$=false;return Ao;
},ApO:function(G){var B;var Ao=(C.AsX.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C7[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C7[1]/2)|0)];Ao.Asn=pos;},_Init:function(aArg){C.Rj._Init.
call(this,aArg);this.__proto__=C.AVd;},_className:"Effects::ShowHideTransition"};
C.Aes={ACR:500,Sk:function(){var Ao=A._NewObject(C.Afh,0);Ao.Du=true;Ao.Bw=true;
Ao.Ajx=false;Ao.ZO=true;Ao.AcQ=true;Ao.Aec=false;Ao.Akq=[this,this.ApO];Ao.Cq.Fq(
this.ACR);Ao.Cq.Cy=0;Ao.Cq.B4=255;Ao.Eb.Fq(this.ACR);Ao.Eb.WQ(23);return Ao;},Sj:
function(){var Ao=A._NewObject(C.Axt,0);Ao.Du=false;Ao.Bw=false;Ao.Q$=true;Ao.AcQ=
true;Ao.E1.Cy=255;Ao.E1.B4=0;Ao.E1.Fq(this.ACR);return Ao;},Aei:function(){var Ao=
C.Rj.Aei.call(this);Ao.ZO=false;Ao.Bw=true;return Ao;},Aeh:function(){var Ao=C.Rj.
Aeh.call(this);Ao.Ajn=true;Ao.Q$=false;Ao.Bw=true;return Ao;},ApO:function(G){var
B;var Ao=(C.Afh.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C7[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C7[1]/2)|0)];Ao.Eb.B4=pos;if(((!Ao.P.Ab||!Ao.P.Fp())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rj._Init.call(this,aArg);this.__proto__=C.Aes;
},_className:"Effects::FadeInOutTransition"};C.AGY={Kn:0x12,Au9:0,Aec:false,Sk:function(
){var Ao=A._NewObject(C.Afh,0);Ao.Du=true;Ao.Bw=true;Ao.Ajx=false;Ao.ZO=true;Ao.
AcQ=true;Ao.Aec=this.Aec;Ao.Akq=[this,this.ApO];Ao.Cq.Fq(500);Ao.Cq.AkB(0);Ao.Cq.
Cy=0;Ao.Cq.B4=255;Ao.Eb.Fq(500);Ao.Eb.WQ(23);Ao.Eb.AF3(0);Ao.Eb.AF4(0);Ao.Eb.AwP(
3);Ao.Eb.AE8(0.5);Ao.Eb.AFN(3);Ao.Eb.AFd(3);Ao.Eb.AFm(0.5);return Ao;},Sj:function(
){var Ao=A._NewObject(C.Afh,0);Ao.Du=false;Ao.Bw=false;Ao.Q$=true;Ao.AcQ=true;Ao.
Aec=this.Aec;Ao.Akq=[this,this.A3T];Ao.Cq.Cy=255;Ao.Cq.B4=0;Ao.Cq.Fq(500);Ao.Cq.
AkB(0);Ao.Eb.Fq(500);Ao.Eb.WQ(23);Ao.Eb.AF3(0);Ao.Eb.AF4(0);Ao.Eb.AwP(3);Ao.Eb.AE8(
0.5);Ao.Eb.AFN(3);Ao.Eb.AFd(3);Ao.Eb.AFm(0.5);return Ao;},Aei:function(){var Ao=
C.Rj.Aei.call(this);Ao.ZO=false;Ao.Bw=true;return Ao;},Aeh:function(){var Ao=C.Rj.
Aeh.call(this);Ao.Ajn=true;Ao.Q$=false;Ao.Bw=true;return Ao;},ApO:function(G){var
B;var Ao=(C.Afh.isPrototypeOf(G)?G:null);var Bu=this.Kn;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C7[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C7[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C7[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C7[1]/2)|0)];Ao.Eb.B4=pos;if(((!Ao.P.Ab||!Ao.P.Fp())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HF=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Au9){case 5:pos=[pos[0],-C7[1]];break;case 3:{
pos=[pos[0],-C7[1]];pos=[HF[0],pos[1]];}break;case 8:pos=[-C7[0],-C7[1]];break;case
2:pos=[HF[0],pos[1]];break;case 7:pos=[-C7[0],pos[1]];break;case 4:pos=[pos[0],HF[
1]];break;case 1:{pos=[pos[0],HF[1]];pos=[HF[0],pos[1]];}break;case 6:{pos=[pos[
0],HF[1]];pos=[-C7[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A3T:
function(G){var B;var Ao=(C.Afh.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HF=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Au9){case 5:pos=[pos[0],HF[1]];break;case 3:{pos=[pos[0],HF[1]];pos=[-
C7[0],pos[1]];}break;case 8:{pos=[pos[0],HF[1]];pos=[HF[0],pos[1]];}break;case 2:
pos=[-C7[0],pos[1]];break;case 7:pos=[HF[0],pos[1]];break;case 4:pos=[pos[0],-C7[
1]];break;case 1:pos=[-C7[0],-C7[1]];break;case 6:{pos=[pos[0],-C7[1]];pos=[HF[0
],pos[1]];}break;default:;}Ao.Eb.B4=pos;},_Init:function(aArg){C.Rj._Init.call(this
,aArg);this.__proto__=C.AGY;},_className:"Effects::SlideTransition"};C.Afo={Sk:function(
){var Ao=A._NewObject(C.AsY,0);Ao.Du=true;Ao.Bw=true;Ao.Ajx=false;Ao.ZO=true;Ao.
AcQ=true;Ao.Akq=[this,this.ApO];Ao.Cq.Fq(500);Ao.Cq.AkB(0);Ao.Cq.Cy=0;Ao.Cq.B4=255;
Ao.G$.Fq(500);Ao.G$.WQ(23);Ao.G$.AF3(0);Ao.G$.AF4(0);Ao.G$.AwP(3);Ao.G$.AE8(0.5);
Ao.G$.AFN(3);Ao.G$.AFd(3);Ao.G$.AFm(0.5);Ao.Wt.Afn(0.5,0.5,1);return Ao;},Sj:function(
){var Ao=A._NewObject(C.AsY,0);Ao.Du=false;Ao.Bw=false;Ao.Q$=true;Ao.AcQ=true;Ao.
Akq=[this,this.A3T];Ao.Cq.Cy=255;Ao.Cq.B4=0;Ao.Cq.Fq(500);Ao.Cq.AkB(0);Ao.G$.Fq(
500);Ao.G$.WQ(23);Ao.G$.AF3(0);Ao.G$.AF4(0);Ao.G$.AwP(3);Ao.G$.AE8(0.5);Ao.G$.AFN(
3);Ao.G$.AFd(3);Ao.G$.AFm(0.5);Ao.Wt.Afn(0.5,0.5,1);return Ao;},Aei:function(){var
Ao=C.Rj.Aei.call(this);Ao.ZO=false;Ao.Bw=true;return Ao;},Aeh:function(){var Ao=
C.Rj.Aeh.call(this);Ao.Ajn=true;Ao.Q$=false;Ao.Bw=true;return Ao;},ApO:function(
G){var B;var Ao=(C.AsY.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C7[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C7[1]/2)|0)];Ao.UD=A.abf(pos,[(C7[0]/2)|0,(C7[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fp())||!Ao.P.G9)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.UD,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A3T:function(G){var Ao=(C.AsY.isPrototypeOf(G)?G:null);Ao.
UD=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rj._Init.call(this,aArg);this.__proto__=
C.Afo;},_className:"Effects::ScaleTransition"};C.AhT={BFj:0,BF0:1,BF2:2,BF1:3,BEL:
4,BEN:5,BEM:6,BGx:7,BGz:8,BGy:9,BEf:10,BEh:11,BEg:12,BDX:13,BDZ:14,BDY:15,BEC:16
,BEE:17,BED:18,BD8:19,BD_:20,BD9:21,BEB:22,BEP:23,BEA:24,BEQ:25,BEm:26};C.BEu={A5x:
0x1,A5w:0x2,A5y:0x4,A5B:0x8,A5A:0x10,A5z:0x20};C.AOd={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AOd;},_className:"Effects::EffectTimerClass"};C.
Aeo={_Init:function(){C.AOd._Init.call(this,0);this.PZ(15);this.As(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AHa={Pp:A.abi(12,0
,null),Alv:A.abi(12,0,null),_Init:function(aArg){(this.Pp=[]).__proto__=C.AHa.Pp;(
this.Alv=[]).__proto__=C.AHa.Alv;this.__proto__=C.AHa;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACY={Ca:null,B$:null,A8O:function(AtD){var Ao=this.B$;while(
!!Ao){Ao.Zv();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B$;while(!!Ao){A.pe(Ao.A3I
,Ao);Ao=Ao.Ah;}},A8N:function(AtD){var Ao=this.B$;while(!!Ao){A.pe(Ao.AKK,Ao);Ao=
Ao.Ah;}this.B$=null;this.Ca=null;},ST:function(AtD){var B;if(!this.B$)this.My();
var Ao=this.B$;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApT=null;Ao=Ao.
Ah;}Ao=this.B$;while(!!Ao){(B=Ao.Akq)?B[1].call(B[0],Ao):null;Ao.ST();Ao=Ao.Ah;}
},My:function(){var Ao=this.B$;while(!!Ao&&Ao.AvX())Ao=Ao.Ah;if(!Ao)A.Core.Ak0.My.
call(this);},Bpc:function(FV){if(!FV)return;if(this.ARr())throw new Error(BF);if(
FV.Pq!==this)throw new Error(E7);if(!!FV.Ah)FV.Ah.AI=FV.AI;else this.Ca=FV.AI;if(
!!FV.AI)FV.AI.Ah=FV.Ah;else this.B$=FV.Ah;FV.Pq=null;FV.Ah=null;FV.AI=null;if(!!
FV.P)FV.P.ApT=null;A.pe(FV.AKK,FV);if(!this.B$)this.AmG();},A5r:function(FV){if(
!FV)return;if(this.ARr())throw new Error(Hr);if(!!FV.Pq)throw new Error(I1);FV.AI=
this.Ca;FV.Ah=null;if(!!this.Ca)this.Ca.Ah=FV;else this.B$=FV;this.Ca=FV;FV.Pq=this;
},_Init:function(aArg){A.Core.Ak0._Init.call(this,aArg);this.__proto__=C.ACY;},_Mark:
function(D){var B;A.Core.Ak0._Mark.call(this,D);if((B=this.Ca)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsI={_Init:function(){C.AVd._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gp.__proto__=C.E1;C.AGm.__proto__=C.E1;C.ANy.__proto__=C.E1;
C.Nh.__proto__=C.E1;C.AsX.__proto__=C.MC;C.Axt.__proto__=C.MC;C.Afh.__proto__=C.
MC;C.AsY.__proto__=C.MC;C.AVd.__proto__=C.Rj;C.Aes.__proto__=C.Rj;C.AGY.__proto__=
C.Rj;C.Afo.__proto__=C.Rj;C.AOd.__proto__=A.Core.Timer;C.ACY.__proto__=A.Core.Ak0;
};C._ReInit=function(){var B;if((B=C.Aeo._this))B._ReInit(),C.Aeo._ReInit.call(B
);if((B=C.AsI._this))B._ReInit(),C.AsI._ReInit.call(B);};C.DJ=function(D){var B;
if((B=C.Aeo._this)&&(B._cycle!=D))B._Done(C.Aeo._this=null);if((B=C.AsI._this)&&(
B._cycle!=D))B._Done(C.AsI._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */