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
var Cg=[100,100];var BD="Trying to remove a fader from a task, which is actually running";
var E6="The fader doesn\'t belong to this task";var Hr="Trying to add a fader to a task, which is actually running";
var I0="The fader belongs already to a task";
C.E0={M9:null,timer:null,Qw:null,SJ:null,Ahm:null,To:0,Ai9:0,Vg:0,Pd:0,AAa:0.001,
Qs:0,Ed:0,Dy:0,AOa:0.5,A51:3,Axt:3,AuN:0.5,V3:3,AVz:0,AVy:0,JY:0,Pv:1000,PE:0,V_:
0,AhO:0,Bw:false,AkU:false,AUJ:false,Ap7:false,ALy:false,Ml:function(G){var B;if(
!this.timer)return;if(!this.Ai9){if(this.AUJ)this.Ai9=-1;else this.Ai9=1;this.To=
this.Ai9;this.Dy=this.timer.Bq;this.Ed=0;this.Qs=-1;}var KI;if((this.Ai9>0)&&(this.
To>0))KI=this.BCl();else if((this.Ai9<0)&&(this.To<0))KI=this.BCo();else if(this.
Ai9>0)KI=this.BCm();else KI=this.BCn();if(KI){this.As(false);(B=this.Qw)?B[1].call(
B[0],this):null;(B=this.SJ)?B[1].call(B[0],this):null;}},AK4:function(AN){var B;
if(!this.M9&&(((this.AhO===19)||(this.AhO===20))||(this.AhO===21))){var AJG=this.
A51+1;var BzE=Math.sqrt(this.AOa);var RR=0.5;var O;this.M9=A._NewObject(C.AG$,0);
this.M9.Pm.Set(0,1);this.M9.Alr.Set(0,1);for(O=1;O<AJG;O=O+1){this.M9.Pm.Set(O,this.
M9.Pm.Get(O-1)*BzE);this.M9.Alr.Set(O,this.M9.Alr.Get(O-1)*this.AOa);RR=RR+this.
M9.Pm.Get(O);}var BAz=1/RR;this.M9.Pm.Set(0,0.5);RR=0;for(O=0;O<AJG;O=O+1){this.
M9.Pm.Set(O,this.M9.Pm.Get(O)*BAz);RR=RR+this.M9.Pm.Get(O);}this.M9.Pm.Set(AJG,this.
M9.Pm.Get(AJG)+(1-RR));}if(this.AkU){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhO){case 1:AN=Math.pow(AN,this.V3);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.V3);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.V3)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.V3))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.V3*AN)-1)/(Math.
pow(2.718,this.V3)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.V3*AN)-1)
/(Math.pow(2.718,this.V3)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.V3*AN)-1)/(Math.pow(2.718,this.V3)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.V3*AN)-1)/(Math.pow(2.718,this.V3)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuN)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuN)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuN)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuN)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axt)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axt)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axt)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axt)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.M9;var O=0;var GH=0;var K_=Bz.Pm.
Get(0);var D9=1-AN;while(D9>K_){O=O+1;GH=K_;K_=K_+Bz.Pm.Get(O);}AN=(D9-GH)/(K_-GH
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.Alr.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.M9;var O=0;var GH=0;var K_=Bz.Pm.Get(0);while(AN>K_){O=O+1;GH=K_;K_=
K_+Bz.Pm.Get(O);}AN=(AN-GH)/(K_-GH);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.Alr.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.M9;var O=0;var GH=0;var K_=Bz.Pm.
Get(0);var LP=AN*2;var D9=LP-1;if(LP<1)D9=-D9;while(D9>K_){O=O+1;GH=K_;K_=K_+Bz.
Pm.Get(O);}D9=(D9-GH)/(K_-GH);if(!O)D9=D9*D9;else{D9=(2*D9)-1;D9=1-(Bz.Alr.Get(O
)*(1-(D9*D9)));}if(LP<1)AN=0.5*(1-D9);else AN=0.5*(1+D9);}break;default:if(this.
Ap7){var LP=AN;var AAz=1-LP;AN=((AAz*LP)*(this.Pd+1))+(LP*LP);}else if(this.ALy){
var LP=AN;var AAz=1-LP;var BdH=LP*LP;var BAQ=AAz*AAz;AN=(((BAQ*LP)*(this.Pd+1))+((
AAz*BdH)*(this.Vg+2)))+(BdH*LP);}}this.AuR(AN);(B=this.Ahm)?B[1].call(B[0],this):
null;},BCo:function(){var Av=(this.timer.Bq-this.Dy)|0;if(Av<0)Av=-Av;var LL=this.
V_;var Ox=this.V_+this.Pv;var Hh=this.PE+this.Pv;var KI=false;var Ee=this.Qs;if(
!this.Ed&&(Av>=Ox)){this.Ed=1;Av=Av-Ox;this.Dy=this.Dy+Ox;}if((this.Ed>0)&&(Av>=
Hh)){var Ii=(Av/Hh)|0;this.Ed=this.Ed+Ii;Av=Av-(Ii*Hh);this.Dy=this.Dy+(Ii*Hh);}
if((this.Ed>2)&&!this.JY)this.Ed=1;if(this.Ed>0)LL=this.PE;if((this.Ed>=this.JY)&&(
this.JY>0)){KI=true;Ee=0;}else if(Av>=LL)Ee=1-((Av-LL)*this.AAa);else if(Ee>=0)Ee=
0;if(Ee!==this.Qs){if(Ee<0)Ee=0;if(Ee>1)Ee=1;}if(Ee!==this.Qs){this.Qs=Ee;this.AK4(
Ee);}return KI;},BCn:function(){var Av=(this.Dy-this.timer.Bq)|0;var LL=this.V_;
var Ox=this.V_+this.Pv;var Hh=this.PE+this.Pv;var KI=false;var Ee=this.Qs;if((this.
Ed>1)&&(Av<0)){var Ii=(((-Av+Hh)-1)/Hh)|0;if((this.Ed-Ii)<=0)Ii=this.Ed-1;this.Ed=
this.Ed-Ii;Av=Av+(Ii*Hh);this.Dy=this.Dy+(Ii*Hh);}if(((this.Ed===1)&&(Av<0))&&(this.
JY>0)){this.Ed=0;Av=Av+Ox;this.Dy=this.Dy+Ox;}if(((this.Ed===1)&&(Av<0))&&!this.
JY){var Ii=(((-Av+Hh)-1)/Hh)|0;Av=Av+(Ii*Hh);this.Dy=this.Dy+(Ii*Hh);}if(this.Ed>
0)LL=this.PE;if(Av<0){KI=true;Ee=1;}else if(Av>=LL)Ee=1-((Av-LL)*this.AAa);else if(
Ee>=0)Ee=1;if(Ee!==this.Qs){if(Ee<0)Ee=0;if(Ee>1)Ee=1;}if(Ee!==this.Qs){this.Qs=
Ee;this.AK4(Ee);}return KI;},BCm:function(){var Av=(this.Dy-this.timer.Bq)|0;var
LL=this.V_;var Ox=this.V_+this.Pv;var Hh=this.PE+this.Pv;var KI=false;var Ee=this.
Qs;if((this.Ed>1)&&(Av<0)){var Ii=(((-Av+Hh)-1)/Hh)|0;if((this.Ed-Ii)<=0)Ii=this.
Ed-1;this.Ed=this.Ed-Ii;Av=Av+(Ii*Hh);this.Dy=this.Dy+(Ii*Hh);}if(((this.Ed===1)&&(
Av<0))&&(this.JY>0)){this.Ed=0;Av=Av+Ox;this.Dy=this.Dy+Ox;}if(((this.Ed===1)&&(
Av<0))&&!this.JY){var Ii=(((-Av+Hh)-1)/Hh)|0;Av=Av+(Ii*Hh);this.Dy=this.Dy+(Ii*Hh
);}if(this.Ed>0)LL=this.PE;if(Av<0){KI=true;Ee=0;}else if(Av>=LL)Ee=(Av-LL)*this.
AAa;else if(Ee>=0)Ee=0;if(Ee!==this.Qs){if(Ee<0)Ee=0;if(Ee>1)Ee=1;}if(Ee!==this.
Qs){this.Qs=Ee;this.AK4(Ee);}return KI;},BCl:function(){var Av=(this.timer.Bq-this.
Dy)|0;if(Av<0)Av=-Av;var LL=this.V_;var Ox=this.V_+this.Pv;var Hh=this.PE+this.Pv;
var KI=false;var Ee=this.Qs;if(!this.Ed&&(Av>=Ox)){this.Ed=1;Av=Av-Ox;this.Dy=this.
Dy+Ox;}if((this.Ed>0)&&(Av>=Hh)){var Ii=(Av/Hh)|0;this.Ed=this.Ed+Ii;Av=Av-(Ii*Hh
);this.Dy=this.Dy+(Ii*Hh);}if((this.Ed>2)&&!this.JY)this.Ed=1;if(this.Ed>0)LL=this.
PE;if((this.Ed>=this.JY)&&(this.JY>0)){KI=true;Ee=1;}else if(Av>=LL)Ee=(Av-LL)*this.
AAa;else if(Ee>=0)Ee=1;if(Ee!==this.Qs){if(Ee<0)Ee=0;if(Ee>1)Ee=1;}if(Ee!==this.
Qs){this.Qs=Ee;this.AK4(Ee);}return KI;},Ae_:function(E){if(this.AUJ===E)return;
this.AUJ=E;if(!this.Bw||!this.Ai9)return;if(E)this.To=-1;else this.To=1;this.Dy=(
this.timer.Avt()*2)-this.Dy;},AFm:function(E){if(E<0)E=0;if(E>1)E=1;this.AOa=E;}
,AFd:function(E){if(E<1)E=1;if(E>10)E=10;this.A51=E;this.M9=null;},AFN:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axt=E;},AE8:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuN=E;},AwL:function(E){if(E<1)E=1;if(E>100)E=100;this.V3=E;},AF4:function(
E){if(this.AVz===E)return;this.AVz=E;if(this.AhO===26){this.Vg=E;this.Ap7=(this.
Pd===this.Vg)&&!!this.Pd;this.ALy=!this.Ap7&&(this.Pd!==this.Vg);}},AF3:function(
E){if(this.AVy===E)return;this.AVy=E;if(this.AhO===26){this.Pd=E;this.Ap7=(this.
Pd===this.Vg)&&!!this.Pd;this.ALy=!this.Ap7&&(this.Pd!==this.Vg);}},WN:function(
E){if(this.AhO===E)return;this.AhO=E;this.M9=null;switch(E){case 24:{this.Pd=-1.1;
this.Vg=1.1;}break;case 22:{this.Pd=-1;this.Vg=-2;}break;case 23:{this.Pd=2;this.
Vg=1;}break;case 25:{this.Pd=1.1;this.Vg=-1.1;}break;case 0:{this.Pd=0;this.Vg=0;
}break;default:{this.Pd=this.AVy;this.Vg=this.AVz;}}this.Ap7=(this.Pd===this.Vg)&&
!!this.Pd;this.ALy=!this.Ap7&&(this.Pd!==this.Vg);},HP:function(E){if(E<0)E=0;this.
JY=E;},Fp:function(E){if(E<15)E=15;this.Pv=E;this.AAa=1/E;},Uv:function(E){if(E<
0)E=0;this.PE=E;},Akw:function(E){if(E<0)E=0;this.V_=E;},As:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Ml],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aei);A.zV([this,this.Ml],this.timer
,0);this.Ai9=0;A.pe([this,this.Ml],this);}},AuR:function(Aau){},AnY:function(G){
this.As(false);},AnW:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SJ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Go={Q:null,A6:0,B3:255,Cy:0,AuR:function(Aau
){var F;this.A6=this.Cy+(Math.round((this.B3-this.Cy)*Aau)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A6));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Go;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AGm={
Q:null,A6:A.wf,B3:Cg,Cy:A.wf,AuR:function(Aau){var F;var Ep=this.Cy[0];var Di=this.
Cy[1];Ep=Ep+(Math.round((this.B3[0]-Ep)*Aau)|0);Di=Di+(Math.round((this.B3[1]-Di
)*Aau)|0);this.A6=[Ep,Di];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A6));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AGm;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANu={Q:null,A6:0,B3:0xFFFFFFFF,Cy:0,AuR:
function(Aau){var F;var Pl=this.Cy&0xFF;var AaD=(this.Cy>>8)&0xFF;var Alx=(this.
Cy>>16)&0xFF;var Alq=(this.Cy>>24)&0xFF;Pl=Pl+((((this.B3&0xFF)-Pl)*Aau)|0);AaD=
AaD+(((((this.B3>>8)&0xFF)-AaD)*Aau)|0);Alx=Alx+(((((this.B3>>16)&0xFF)-Alx)*Aau
)|0);Alq=Alq+(((((this.B3>>24)&0xFF)-Alq)*Aau)|0);if(Pl<0)Pl=0;if(Pl>255)Pl=255;
if(AaD<0)AaD=0;if(AaD>255)AaD=255;if(Alx<0)Alx=0;if(Alx>255)Alx=255;if(Alq<0)Alq=
0;if(Alq>255)Alq=255;this.A6=(Pl&0xFF)|((AaD&0xFF)<<8)|((Alx&0xFF)<<16)|((Alq&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A6));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANu;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.Nf={A6:0,B3:1,Cy:0,AuR:function(Aau){this.A6=this.Cy+((
this.B3-this.Cy)*Aau);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.Nf;},_className:"Effects::FloatEffect"};C.TN={timer:null,Q:null,Ed:0,Dy:0,JY:0
,Pv:1000,PE:1000,V_:0,Bw:false,Cy:false,B3:true,Ml:function(G){var F;if(!this.timer
)return;if(this.Ed<0){this.Dy=this.timer.Bq;this.Ed=0;}var Av=(this.timer.Bq-this.
Dy)|0;var Ox=this.V_+this.Pv;var Hh=this.PE+this.Pv;var LL=this.V_;var Jq=this.Ed;
if(!Jq&&(Av>=Ox)){Jq=1;Av=Av-Ox;}if((Jq>0)&&(Av>=Hh)){var Ii=(Av/Hh)|0;Av=Av-(Ii
*Hh);Jq=Jq+Ii;}if((Jq>2)&&!this.JY)Jq=1;if(Jq!==this.Ed){this.Dy=this.timer.Bq-(((
B=Av)<0)?B+0x100000000:B);this.Ed=Jq;}if(Jq>0)LL=this.PE;var KI=(Jq>=this.JY)&&(
this.JY>0);if(!!this.Q){if(!KI&&(Av>=LL))(F=this.Q,F[2].call(F[0],this.Cy));if(KI||((
Av<LL)&&(Jq>0)))(F=this.Q,F[2].call(F[0],this.B3));}if(KI)this.As(false);},HP:function(
E){if(E<0)E=0;this.JY=E;},Fp:function(E){if(E<100)E=100;this.Pv=E;},Uv:function(
E){if(E<0)E=0;this.PE=E;},Akw:function(E){if(E<0)E=0;this.V_=E;},As:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Ml],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aei);A.zV([this,this.Ml
],this.timer,0);this.Ed=-1;}},AnY:function(G){this.As(false);},AnW:function(G){if(
this.Bw)this.As(false);this.As(true);},_Init:function(aArg){this.__proto__=C.TN;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mz={Pn:null,AI:null,Ah:null,Ab:null,P:null,AKG:null,A3E:null,Akn:null,Du:true,
Bw:true,AcL:true,Ajj:false,Ajt:true,ZM:true,Q9:true,Mw:function(){if(!!this.Pn)this.
Pn.Mw();},AvT:function(){return true;},Zt:function(){},SR:function(){this.Mw();}
,_Init:function(aArg){this.__proto__=C.Mz;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pn)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKG)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3E)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsU={Asj:A.wf,M2:false,AvT:function(){return this.M2;},Zt:function(
){if(!this.Du&&!!this.P.Ab)this.P.Z(false);if((!this.Du&&this.Q9)&&!!this.P.Ab)this.
P.Ab.HQ(this.P);if(!this.Bw)this.P.As(false);},SR:function(){if(this.Bw)this.P.As(
true);if((this.Du||this.Ajj)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Du&&this.ZM)this.P.Ab.ZL(this.P);if(this.Du&&this.Ajt)this.P.Ab.Ba(this.P);
if(this.Du&&!this.AcL)this.P.H(A.abJ(this.P.M,this.Asj));if(this.Du){this.P.C0(255
);this.P.Z(true);}if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Ba(null);this.M2=true;
this.Mw();},_Init:function(aArg){C.Mz._Init.call(this,aArg);this.__proto__=C.AsU;
},_className:"Effects::VisibilityFader"};C.Axp={E0:null,M2:false,Ap_:false,AvT:function(
){return this.M2;},Zt:function(){if(this.Du)this.P.C0(this.E0.B3);if(!this.Du&&!
this.P.G9)this.P.Z(false);if((!this.Du&&this.Q9)&&!!this.P.Ab)this.P.Ab.HQ(this.
P);if(!this.Bw)this.P.As(false);},SR:function(){var B;if(this.AcL){if(this.P.Fo(
)&&!!this.P.Ab)this.E0.Cy=this.P.G9;else this.E0.Cy=0;}var AAd=((!this.P.Ab||!this.
P.G9)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AAe=((!this.Du&&((!this.P.Ab||!this.P.Fo())||this.Q9
))||!this.E0.B3)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AAd&&AAe){this.E0.Cy=0;this.E0.B3=0;}this.Ap_=this.P.ASG(
);if(this.Bw)this.P.As(true);if((this.Du||this.Ajj)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZM)this.P.Ab.ZL(this.P);if(this.Du&&this.Ajt
)this.P.Ab.Ba(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.
Du&&!this.P.Fo()){this.P.C0(this.E0.Cy);this.P.Z(true);}if(!this.Du&&((!this.P.Ab||
!this.P.Fo())||!this.P.G9)){this.M2=true;this.Mw();return;}if(!this.Du&&(this.E0.
Cy===this.E0.B3))this.P.C0(this.E0.Cy);if(this.P.G9===this.E0.B3){this.M2=true;this.
Mw();return;}if(this.E0.Cy===this.E0.B3){this.M2=true;this.Mw();return;}if(!this.
E0.JY)this.E0.HP(1);this.E0.Q=[B=this.P,B.Awn,B.A0K];this.E0.Ae_(false);this.E0.
AkU=false;this.E0.SJ=[this,this.AiN];this.E0.Ahm=null;this.E0.As(true);},AiN:function(
G){this.M2=true;this.Mw();},_Init:function(aArg){C.Mz._Init.call(this,aArg);C.Go.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axp;},_Done:function(){this.__proto__=
C.Mz;this.E0._Done();C.Mz._Done.call(this);},_ReInit:function(){C.Mz._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mz._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Afa={
Cq:null,Ea:null,Ad8:false,M2:false,Ap_:false,AvT:function(){return this.M2;},Zt:
function(){if(this.Du){this.P.C0(this.Cq.B3);this.P.H(A.abJ(this.P.M,this.Ea.B3)
);}if(!this.Du&&!this.P.G9)this.P.Z(false);if((!this.Du&&this.Q9)&&!!this.P.Ab)this.
P.Ab.HQ(this.P);if(this.Ad8)this.P.ArL(this.Ap_);if(!this.Bw)this.P.As(false);},
SR:function(){var B;if(this.AcL){if(this.P.Fo()&&!!this.P.Ab)this.Cq.Cy=this.P.G9;
else this.Cq.Cy=0;this.Ea.Cy=this.P.M.slice(0,2);}var AAd=((!this.P.Ab||!this.P.
G9)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AAe=((!this.Du&&((!this.P.Ab||!this.P.Fo())||this.Q9
))||!this.Cq.B3)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.Ea.B3
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAd&&AAe){
this.Cq.Cy=0;this.Cq.B3=0;this.Ea.Cy=this.Ea.B3;}this.Ap_=this.P.ASG();if(this.Bw
)this.P.As(true);if((this.Du||this.Ajj)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Du&&this.ZM)this.P.Ab.ZL(this.P);if(this.Du&&this.Ajt)this.P.Ab.Ba(
this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.Du&&!this.P.
Fo()){this.P.H(A.abJ(this.P.M,this.Ea.Cy));this.P.C0(this.Cq.Cy);this.P.Z(true);
}if(!this.Du&&((!this.P.Ab||!this.P.Fo())||!this.P.G9)){this.M2=true;this.Mw();return;
}if(!this.Du&&A.aaX(this.Ea.Cy,this.Ea.B3))this.P.H(A.abJ(this.P.M,this.Ea.Cy));
if(!this.Du&&(this.Cq.Cy===this.Cq.B3))this.P.C0(this.Cq.Cy);if((this.P.G9===this.
Cq.B3)&&A.aaX(this.P.M.slice(0,2),this.Ea.B3)){this.M2=true;this.Mw();return;}if((
this.Cq.Cy===this.Cq.B3)&&A.aaX(this.Ea.Cy,this.Ea.B3)){this.M2=true;this.Mw();return;
}if(!this.Cq.JY)this.Cq.HP(1);if(!this.Ea.JY)this.Ea.HP(1);if(this.Ad8)this.P.ArL(
true);this.Ea.Q=null;this.Ea.Ae_(false);this.Ea.AkU=false;this.Ea.SJ=[this,this.
AiN];this.Ea.Ahm=[this,this.AAI];this.Cq.Q=[B=this.P,B.Awn,B.A0K];this.Cq.Ae_(false
);this.Cq.AkU=false;this.Cq.SJ=[this,this.AiN];this.Cq.Ahm=null;this.Ea.As(!A.aaX(
this.Ea.Cy,this.Ea.B3));this.Cq.As(this.Cq.Cy!==this.Cq.B3);},AiN:function(G){this.
M2=!this.Cq.Bw&&!this.Ea.Bw;this.Mw();},AAI:function(G){this.P.H(A.abJ(this.P.M,
this.Ea.A6));},_Init:function(aArg){C.Mz._Init.call(this,aArg);C.Go._Init.call(this.
Cq={I:this},0);C.AGm._Init.call(this.Ea={I:this},0);this.__proto__=C.Afa;},_Done:
function(){this.__proto__=C.Mz;this.Cq._Done();this.Ea._Done();C.Mz._Done.call(this
);},_ReInit:function(){C.Mz._ReInit.call(this);this.Cq._ReInit();this.Ea._ReInit(
);},_Mark:function(D){var B;C.Mz._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsV={AdM:null,Cq:null,G$:null,Wr:null,FT:null,UB:A.wf,AkH:A.wf,M2:false,Ap_:
false,AvT:function(){return this.M2;},Zt:function(){if(this.Du){this.P.C0(this.Cq.
B3);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.UB));this.P.Z(true);}if(
!this.Du&&!this.Cq.B3){this.P.C0(0);this.P.Z(false);}if(((!this.Du&&(this.Cq.B3>
0))&&!!this.P.Ab)&&!this.Q9){this.P.C0(this.Cq.B3);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.UB));this.P.Z(true);}if((!this.Du&&this.Q9)&&!!this.P.Ab)
this.P.Ab.HQ(this.P);this.P.ArL(this.Ap_);if(!!this.AdM)this.Ab.HQ(this.AdM);if(
!this.Bw)this.P.As(false);},SR:function(){var B;if(this.AcL){if(this.P.Fo()&&!!this.
P.Ab)this.Cq.Cy=this.P.G9;else this.Cq.Cy=0;this.AkH=A.aaI(this.P.M);}var AAd=((
!this.P.Ab||!this.P.G9)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AAe=((!this.Du&&((!this.P.Ab||!this.
P.Fo())||this.Q9))||!this.Cq.B3)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.UB),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAd&&
AAe){this.Cq.Cy=0;this.Cq.B3=0;this.AkH=this.UB;this.Wr.A78();}this.Ap_=this.P.ASG(
);if(this.Bw)this.P.As(true);if((this.Du||this.Ajj)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZM)this.P.Ab.ZL(this.P);if(this.Du&&this.Ajt
)this.P.Ab.Ba(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Ba(null);if(this.
Du&&!this.P.Fo())this.P.C0(this.Cq.Cy);if((!this.Du&&A.aaX(this.AkH,this.UB))&&this.
Wr.AD_())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkH));if(!this.Du&&(
this.Cq.Cy===this.Cq.B3))this.P.C0(this.Cq.Cy);if(!this.Du&&((!this.P.Ab||!this.
P.Fo())||!this.P.G9)){this.M2=true;this.Mw();return;}if(((this.Du&&(this.P.G9===
this.Cq.B3))&&A.aaX(A.aaI(this.P.M),this.UB))&&this.P.Fo()){this.M2=true;this.Mw(
);return;}if(((!this.Du&&(this.P.G9===this.Cq.B3))&&A.aaX(A.aaI(this.P.M),this.UB
))&&this.Wr.AD_()){this.M2=true;this.Mw();return;}if(((this.Cq.Cy===this.Cq.B3)&&
A.aaX(this.AkH,this.UB))&&this.Wr.AD_()){this.M2=true;this.Mw();return;}this.P.ArL(
true);this.P.Z(false);this.AdM=A._NewObject(A.acg.AV1,0);this.AdM.Bni(this.P);this.
AdM.C0(this.Cq.Cy);this.AdM.Boe(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AMf(this.AdM,this.P);if(!this.Cq.JY)this.Cq.HP(1);if(!this.G$.JY)this.G$.HP(
1);this.G$.Ae_(false);this.G$.AkU=false;this.G$.SJ=[this,this.AiN];this.G$.Ahm=[
this,this.AAI];if(this.Du){this.G$.Cy=0;this.G$.B3=1;}else{this.G$.Cy=1;this.G$.
B3=0;}this.Cq.Q=[B=this.AdM,B.Awn,B.C0];this.Cq.Ae_(false);this.Cq.AkU=false;this.
Cq.SJ=[this,this.AiN];this.Cq.Ahm=null;this.G$.As(!A.aaX(this.AkH,this.UB)||!this.
Wr.AD_());this.Cq.As(this.Cq.Cy!==this.Cq.B3);},AiN:function(G){this.M2=!this.Cq.
Bw&&!this.G$.Bw;this.Mw();},AAI:function(G){var B;var ABy=A.abe(this.UB,this.AkH
);if(!this.Du)ABy=[-ABy[0],-ABy[1]];this.FT.A78();this.FT.AgV=this.Wr.AgV;this.FT.
BqE(ABy[0],ABy[1],0);this.FT.Bkb(this.Wr,this.FT,this.G$.A6);if(this.Du)this.AdM.
BaC(this.AkH,this.FT);else this.AdM.BaC(this.UB,this.FT);},_Init:function(aArg){
C.Mz._Init.call(this,aArg);C.Go._Init.call(this.Cq={I:this},0);C.Nf._Init.call(this.
G$={I:this},0);A.Graphics.Ax5._Init.call(this.Wr={I:this},0);A.Graphics.Ax5._Init.
call(this.FT={I:this},0);this.__proto__=C.AsV;},_Done:function(){this.__proto__=
C.Mz;this.Cq._Done();this.G$._Done();this.Wr._Done();this.FT._Done();C.Mz._Done.
call(this);},_ReInit:function(){C.Mz._ReInit.call(this);this.Cq._ReInit();this.G$.
_ReInit();this.Wr._ReInit();this.FT._ReInit();},_Mark:function(D){var B;C.Mz._Mark.
call(this,D);if((B=this.AdM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FT)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rh={Si:function(){return null;},Sh:function(
){return null;},Aec:function(){return this.Si();},Aeb:function(){return this.Sh(
);},_Init:function(aArg){this.__proto__=C.Rh;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AU$={Si:function(){var Ao=A._NewObject(C.AsU,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=
false;Ao.ZM=true;Ao.AcL=false;Ao.Akn=[this,this.ApI];return Ao;},Sh:function(){var
Ao=A._NewObject(C.AsU,0);Ao.Du=false;Ao.Bw=false;Ao.Q9=true;return Ao;},Aec:function(
){var Ao=C.Rh.Aec.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aeb:function(){var
Ao=A._NewObject(C.AsU,0);Ao.Du=false;Ao.Bw=true;Ao.Ajj=true;Ao.Q9=false;return Ao;
},ApI:function(G){var B;var Ao=(C.AsU.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C7[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C7[1]/2)|0)];Ao.Asj=pos;},_Init:function(aArg){C.Rh._Init.
call(this,aArg);this.__proto__=C.AU$;},_className:"Effects::ShowHideTransition"};
C.Aem={ACR:500,Si:function(){var Ao=A._NewObject(C.Afa,0);Ao.Du=true;Ao.Bw=true;
Ao.Ajt=false;Ao.ZM=true;Ao.AcL=true;Ao.Ad8=false;Ao.Akn=[this,this.ApI];Ao.Cq.Fp(
this.ACR);Ao.Cq.Cy=0;Ao.Cq.B3=255;Ao.Ea.Fp(this.ACR);Ao.Ea.WN(23);return Ao;},Sh:
function(){var Ao=A._NewObject(C.Axp,0);Ao.Du=false;Ao.Bw=false;Ao.Q9=true;Ao.AcL=
true;Ao.E0.Cy=255;Ao.E0.B3=0;Ao.E0.Fp(this.ACR);return Ao;},Aec:function(){var Ao=
C.Rh.Aec.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aeb:function(){var Ao=C.Rh.
Aeb.call(this);Ao.Ajj=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApI:function(G){var
B;var Ao=(C.Afa.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C7[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C7[1]/2)|0)];Ao.Ea.B3=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=C.Aem;
},_className:"Effects::FadeInOutTransition"};C.AGX={Km:0x12,Au5:0,Ad8:false,Si:function(
){var Ao=A._NewObject(C.Afa,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZM=true;Ao.
AcL=true;Ao.Ad8=this.Ad8;Ao.Akn=[this,this.ApI];Ao.Cq.Fp(500);Ao.Cq.Akw(0);Ao.Cq.
Cy=0;Ao.Cq.B3=255;Ao.Ea.Fp(500);Ao.Ea.WN(23);Ao.Ea.AF3(0);Ao.Ea.AF4(0);Ao.Ea.AwL(
3);Ao.Ea.AE8(0.5);Ao.Ea.AFN(3);Ao.Ea.AFd(3);Ao.Ea.AFm(0.5);return Ao;},Sh:function(
){var Ao=A._NewObject(C.Afa,0);Ao.Du=false;Ao.Bw=false;Ao.Q9=true;Ao.AcL=true;Ao.
Ad8=this.Ad8;Ao.Akn=[this,this.A3P];Ao.Cq.Cy=255;Ao.Cq.B3=0;Ao.Cq.Fp(500);Ao.Cq.
Akw(0);Ao.Ea.Fp(500);Ao.Ea.WN(23);Ao.Ea.AF3(0);Ao.Ea.AF4(0);Ao.Ea.AwL(3);Ao.Ea.AE8(
0.5);Ao.Ea.AFN(3);Ao.Ea.AFd(3);Ao.Ea.AFm(0.5);return Ao;},Aec:function(){var Ao=
C.Rh.Aec.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aeb:function(){var Ao=C.Rh.
Aeb.call(this);Ao.Ajj=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApI:function(G){var
B;var Ao=(C.Afa.isPrototypeOf(G)?G:null);var Bu=this.Km;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C7[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C7[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C7[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C7[1]/2)|0)];Ao.Ea.B3=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HF=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Au5){case 5:pos=[pos[0],-C7[1]];break;case 3:{
pos=[pos[0],-C7[1]];pos=[HF[0],pos[1]];}break;case 8:pos=[-C7[0],-C7[1]];break;case
2:pos=[HF[0],pos[1]];break;case 7:pos=[-C7[0],pos[1]];break;case 4:pos=[pos[0],HF[
1]];break;case 1:{pos=[pos[0],HF[1]];pos=[HF[0],pos[1]];}break;case 6:{pos=[pos[
0],HF[1]];pos=[-C7[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A3P:
function(G){var B;var Ao=(C.Afa.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HF=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Au5){case 5:pos=[pos[0],HF[1]];break;case 3:{pos=[pos[0],HF[1]];pos=[-
C7[0],pos[1]];}break;case 8:{pos=[pos[0],HF[1]];pos=[HF[0],pos[1]];}break;case 2:
pos=[-C7[0],pos[1]];break;case 7:pos=[HF[0],pos[1]];break;case 4:pos=[pos[0],-C7[
1]];break;case 1:pos=[-C7[0],-C7[1]];break;case 6:{pos=[pos[0],-C7[1]];pos=[HF[0
],pos[1]];}break;default:;}Ao.Ea.B3=pos;},_Init:function(aArg){C.Rh._Init.call(this
,aArg);this.__proto__=C.AGX;},_className:"Effects::SlideTransition"};C.Afi={Si:function(
){var Ao=A._NewObject(C.AsV,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZM=true;Ao.
AcL=true;Ao.Akn=[this,this.ApI];Ao.Cq.Fp(500);Ao.Cq.Akw(0);Ao.Cq.Cy=0;Ao.Cq.B3=255;
Ao.G$.Fp(500);Ao.G$.WN(23);Ao.G$.AF3(0);Ao.G$.AF4(0);Ao.G$.AwL(3);Ao.G$.AE8(0.5);
Ao.G$.AFN(3);Ao.G$.AFd(3);Ao.G$.AFm(0.5);Ao.Wr.Afh(0.5,0.5,1);return Ao;},Sh:function(
){var Ao=A._NewObject(C.AsV,0);Ao.Du=false;Ao.Bw=false;Ao.Q9=true;Ao.AcL=true;Ao.
Akn=[this,this.A3P];Ao.Cq.Cy=255;Ao.Cq.B3=0;Ao.Cq.Fp(500);Ao.Cq.Akw(0);Ao.G$.Fp(
500);Ao.G$.WN(23);Ao.G$.AF3(0);Ao.G$.AF4(0);Ao.G$.AwL(3);Ao.G$.AE8(0.5);Ao.G$.AFN(
3);Ao.G$.AFd(3);Ao.G$.AFm(0.5);Ao.Wr.Afh(0.5,0.5,1);return Ao;},Aec:function(){var
Ao=C.Rh.Aec.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aeb:function(){var Ao=
C.Rh.Aeb.call(this);Ao.Ajj=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApI:function(
G){var B;var Ao=(C.AsV.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C7=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C7[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C7[1]/2)|0)];Ao.UB=A.abf(pos,[(C7[0]/2)|0,(C7[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fo())||!Ao.P.G9)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.UB,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A3P:function(G){var Ao=(C.AsV.isPrototypeOf(G)?G:null);Ao.
UB=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=
C.Afi;},_className:"Effects::ScaleTransition"};C.AhO={BFd:0,BFU:1,BFW:2,BFV:3,BEF:
4,BEH:5,BEG:6,BGr:7,BGt:8,BGs:9,BD$:10,BEb:11,BEa:12,BDR:13,BDT:14,BDS:15,BEw:16
,BEy:17,BEx:18,BD2:19,BD4:20,BD3:21,BEv:22,BEJ:23,BEu:24,BEK:25,BEg:26};C.BEo={A5t:
0x1,A5s:0x2,A5u:0x4,A5x:0x8,A5w:0x10,A5v:0x20};C.AN$={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AN$;},_className:"Effects::EffectTimerClass"};C.
Aei={_Init:function(){C.AN$._Init.call(this,0);this.PW(15);this.As(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AG$={Pm:A.abi(12,0
,null),Alr:A.abi(12,0,null),_Init:function(aArg){(this.Pm=[]).__proto__=C.AG$.Pm;(
this.Alr=[]).__proto__=C.AG$.Alr;this.__proto__=C.AG$;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACY={B$:null,B_:null,A8K:function(Atz){var Ao=this.B_;while(
!!Ao){Ao.Zt();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B_;while(!!Ao){A.pe(Ao.A3E
,Ao);Ao=Ao.Ah;}},A8J:function(Atz){var Ao=this.B_;while(!!Ao){A.pe(Ao.AKG,Ao);Ao=
Ao.Ah;}this.B_=null;this.B$=null;},SR:function(Atz){var B;if(!this.B_)this.Mw();
var Ao=this.B_;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApN=null;Ao=Ao.
Ah;}Ao=this.B_;while(!!Ao){(B=Ao.Akn)?B[1].call(B[0],Ao):null;Ao.SR();Ao=Ao.Ah;}
},Mw:function(){var Ao=this.B_;while(!!Ao&&Ao.AvT())Ao=Ao.Ah;if(!Ao)A.Core.AkV.Mw.
call(this);},Bo_:function(FS){if(!FS)return;if(this.ARn())throw new Error(BD);if(
FS.Pn!==this)throw new Error(E6);if(!!FS.Ah)FS.Ah.AI=FS.AI;else this.B$=FS.AI;if(
!!FS.AI)FS.AI.Ah=FS.Ah;else this.B_=FS.Ah;FS.Pn=null;FS.Ah=null;FS.AI=null;if(!!
FS.P)FS.P.ApN=null;A.pe(FS.AKG,FS);if(!this.B_)this.AmB();},A5n:function(FS){if(
!FS)return;if(this.ARn())throw new Error(Hr);if(!!FS.Pn)throw new Error(I0);FS.AI=
this.B$;FS.Ah=null;if(!!this.B$)this.B$.Ah=FS;else this.B_=FS;this.B$=FS;FS.Pn=this;
},_Init:function(aArg){A.Core.AkV._Init.call(this,aArg);this.__proto__=C.ACY;},_Mark:
function(D){var B;A.Core.AkV._Mark.call(this,D);if((B=this.B$)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsF={_Init:function(){C.AU$._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Go.__proto__=C.E0;C.AGm.__proto__=C.E0;C.ANu.__proto__=C.E0;
C.Nf.__proto__=C.E0;C.AsU.__proto__=C.Mz;C.Axp.__proto__=C.Mz;C.Afa.__proto__=C.
Mz;C.AsV.__proto__=C.Mz;C.AU$.__proto__=C.Rh;C.Aem.__proto__=C.Rh;C.AGX.__proto__=
C.Rh;C.Afi.__proto__=C.Rh;C.AN$.__proto__=A.Core.Timer;C.ACY.__proto__=A.Core.AkV;
};C._ReInit=function(){var B;if((B=C.Aei._this))B._ReInit(),C.Aei._ReInit.call(B
);if((B=C.AsF._this))B._ReInit(),C.AsF._ReInit.call(B);};C.DJ=function(D){var B;
if((B=C.Aei._this)&&(B._cycle!=D))B._Done(C.Aei._this=null);if((B=C.AsF._this)&&(
B._cycle!=D))B._Done(C.AsF._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */