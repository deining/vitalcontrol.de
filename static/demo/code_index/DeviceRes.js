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
);if(index.acj)throw new Error("The unit file 'DeviceRes.js' included twice!");index.
acj=(function(){var A=index;var C={};
var Cg="Unhandled enum BodyTemperature: ";var BF="Unhandled BodyTemperatureValue: ";
var E7="ERROR: Unhandled temperature unit: ";var Hr="ERROR: unhandled assessment.";
var I1="%H:%M";var Iw="Invalid month";var O$="%";var Qa="Invalid format code";var
Qb=" %Y";var CJ="ERROR: Unhandled mass unit: ";
C.Bal={BAw:function(Ep,Ry){if((Ry>=A._GetAutoObject(A.Device.Helper).AC$(Ep))||(Ry<=
A._GetAutoObject(A.Device.Device).AcO))return 1;else return 0;},BAv:function(Ep,
Ry){var NF=A._GetAutoObject(A.Device.Converter).Ajo(Ry,Ep);switch(NF){case 3:return A.
aaR(A.acf.AvE);case 2:return A.aaR(A.acf.Bke);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BkL);default:throw new Error(Cg+NF.toFixed());}},BAn:function(
Ep,Ry){var NF=A._GetAutoObject(A.Device.Converter).Ajo(Ry,Ep);switch(NF){case 3:
return A.jb.Gn;case 2:return A.jb.Ia;case 1:return A.jb.E2;case 0:return A.jb.AfA;
default:throw new Error(BF+NF.toFixed());}},AlQ:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AG5);case 1:return A.
acf.Bqy;default:A.ab5("%s%s",E7,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},BAo:function(Ep,Ry){var NF=A._GetAutoObject(A.Device.Converter
).Ajo(Ry,Ep);switch(NF){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cg+NF.toFixed());}},BAq:function(Ep,Ry){var NF=A._GetAutoObject(
A.Device.Converter).Ajo(Ry,Ep);switch(NF){case 3:return A.jb.Gn;case 2:return A.
jb.Text;case 1:return A.jb.E2;case 0:return A.jb.AfA;default:throw new Error(BF+
NF.toFixed());}},BAr:function(Ep,Ry){var NF=A._GetAutoObject(A.Device.Converter).
Ajo(Ry,Ep);switch(NF){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cg+NF.toFixed());}},BAp:function(Ep,Ry
){var NF=A._GetAutoObject(A.Device.Converter).Ajo(Ry,Ep);switch(NF){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gn;default:throw new Error(Cg+NF.toFixed(
));}},_Init:function(aArg){this.__proto__=C.Bal;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.Bal._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A5M={Bd0:function(ND){var B5=
A.jb.Rk;switch(ND){case 3:B5=A.jb.E2;break;case 2:B5=A.jb.Ia;break;case 1:B5=A.jb.
Gn;break;case 4:B5=A.jb.AfA;break;case 0:case 5:B5=A.jb.Rk;break;default:A.ab5("%s"
,Hr);}return B5;},Qt:function(ND){var B5=A.jb.Rk;switch(ND){case 3:B5=A.jb.E2;break;
case 2:B5=A.jb.Ia;break;case 1:B5=A.jb.Gn;break;case 0:case 5:B5=A.jb.CL;break;case
4:B5=A.jb.AfA;break;default:A.ab5("%s%e",Hr,ND);}return B5;},XI:function(ND){var
B5=A.jb.Text;switch(ND){case 3:case 1:B5=A.jb.Bm;break;case 2:case 0:case 4:case
5:B5=A.jb.Text;break;default:A.ab5("%s",Hr);}return B5;},_Init:function(aArg){this.
__proto__=C.A5M;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A5M._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A6t={MonthToString:null,Bjw:function(Ma){if(!Ma)return A.
jV;else{var Av=A._NewObject(A.Core.Bq,0);Av.Initialize(Ma);return Av.Format(A.aaR(
A.acf.Bjy));}},AjN:function(Ma){if(!Ma)return A.jV;else{var Av=A._NewObject(A.Core.
Bq,0);Av.Initialize(Ma);return Av.Format(A.aaR(A.acf.Ag2));}},AC8:function(Ma){if(
!Ma)return A.jV;else{var Av=A._NewObject(A.Core.Bq,0);Av.Initialize(Ma);return Av.
Format(A.aaR(A.acf.Bjx));}},A6$:function(Ma){if(!Ma)return A.jV;else{var Av=A._NewObject(
A.Core.Bq,0);Av.Initialize(Ma);return Av.Format(I1);}},AC9:function(A1F,A1n,Iz){
var B;var Dy=A._NewObject(A.Core.Bq,0);var Qq=A._NewObject(A.Core.Bq,0);var Bde=
A1n<A1F;if(Bde){Dy.Initialize(A1n);Qq.Initialize(A1F);}else{Dy.Initialize(A1F);Qq.
Initialize(A1n);}var ABP=0;var ApC=0;var Qo=0;Qo+=(Qq.GN-Dy.GN);if(Qo<0){switch(
Qq.Hl){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qo+=31;break;case 5:case
7:case 10:case 12:Qo+=30;break;case 3:if(this.Bkr(Qq.Year))Qo+=29;else Qo+=28;break;
default:A.ab5("%s%i",Iw,Qq.Hl);}ApC--;}ApC+=(Qq.Hl-Dy.Hl);if(ApC<0){ApC+=12;ABP--;
}ABP+=(Qq.Year-Dy.Year);if(Bde){ABP=-ABP;ApC=-ApC;Qo=-Qo;}var index=Iz.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var BeE=Iz.charCodeAt(index+1)||0;Iz=A.ab1(
Iz,index,2);switch(BeE){case 0x64:Iz=A.abU(Iz,Qo.toFixed(),index);break;case 0x6D:
Iz=A.abU(Iz,ApC.toFixed(),index);break;case 0x79:case 0x59:Iz=A.abU(Iz,ABP.toFixed(
),index);break;case 0x25:Iz=A.abU(Iz,O$,index);break;default:A.ab5("%s%s",Qa,O$+
String.fromCharCode(BeE));}index=Iz.indexOf(String.fromCharCode(0x25),index+1);}
return Iz;},Bkr:function(Ada){if(!(Ada%4)&&!!(Ada%100))return true;if(!(Ada%400)
)return true;return false;},Bjs:function(Ma){if(!Ma)return A.jV;else{var Av=A._NewObject(
A.Core.Bq,0);Av.Initialize(Ma);return this.MonthToString.BU(Av.Hl)+Av.Format(Qb);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A6t;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KS={_Init:function(){C.A6t._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A8e={Af_:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AAl);case 1:return A.aaR(A.acf.A76);default:A.ab5("%s%s",CJ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},BAm:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AL6
);case 1:return A.aaL(A.ach.AL5);default:A.ab5("%s%s",CJ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Az2:function(AoV,Ep){if(AoV<A._GetAutoObject(
A.Device.Helper).ADm(Ep))return A.jb.Gn;else if(AoV<A._GetAutoObject(A.Device.Helper
).ADl(Ep))return A.jb.Ia;else return A.jb.E2;},Az4:function(AoV,Ep){if(AoV<A._GetAutoObject(
A.Device.Helper).ADm(Ep))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ADl(
Ep);return A.jb.Text;}},AaF:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.Bj5);case 1:return A.aaR(A.acf.BoT);default:
A.ab5("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},Az3:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bd$:function(Atx,GC){var Aqf;if(((Atx<10000)||((Atx===10000
)&&(GC===5)))&&(A._GetAutoObject(A.Device.Device).OT===2))Aqf=10;else if(((Atx<50000
)||((Atx===50000)&&(GC===5)))&&!!A._GetAutoObject(A.Device.Device).OT)Aqf=100;else
if(((Atx<100000)||((Atx===100000)&&(GC===5)))&&!!A._GetAutoObject(A.Device.Device
).OT)Aqf=500;else Aqf=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqf=(Aqf/2)|0;break;default:A.ab5("%s%s",CJ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqf;},Bd5:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AD3);case 1:return A.aaL(A.
ach.AD4);default:A.ab5("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AlE:function(BcB,ByB,BxO){if(!BcB)return 0;return Math.round((
BxO-ByB)/BcB)|0;},_Init:function(aArg){this.__proto__=C.A8e;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DV={_Init:function(){C.A8e._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BpY={3:"\u7DA0\u8272"
,0:"Green",8:"Vihre\xE4",9:"Vert",10:"Gr\xFCn",11:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,20:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",23:"Ye\u015Fil"};C.BpZ={3:"\u7D05\u8272"
,0:"Red",8:"Punainen",9:"Rouge",10:"Rot",11:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,20:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",23:"K\u0131rm\u0131z\u0131"};C.
Bp0={3:"\u9EC3\u8272",0:"Yellow",8:"Keltainen",9:"Jaune",10:"Gelb",11:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,20:"\u0416\u0451\u043B\u0442\u044B\u0439",23:"Sar\u0131"};C.A5X={ADd:function(AfO
){var B;if(!!!(AfO.length%2))return-1;var Bg4=0;var Bg5=0;var Aip;var O=0;for(;O<
AfO.length;O++){Aip=A.wz(A.abW(AfO,O,1),-1,10);if(Aip===-1)return-1;if(!!(O%2))Bg4+=
Aip;else Bg5+=Aip;}Aip=((3*Bg5)+Bg4)%10;if(!!Aip)Aip=10-Aip;return Aip;},AV0:function(
AfO){if(!AfO.length)return false;if(!!(AfO.length%2))return false;return A.wz(A.
abW(AfO,AfO.length-1,1),-2,10)===this.ADd(A.abV(AfO,AfO.length-1));},_Init:function(
aArg){this.__proto__=C.A5X;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VO={_Init:function(){C.A5X._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KS._this))B._ReInit(),C.KS._ReInit.call(B);if((B=C.DV._this
))B._ReInit(),C.DV._ReInit.call(B);if((B=C.VO._this))B._ReInit(),C.VO._ReInit.call(
B);};C.DJ=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KS._this)&&(B._cycle!=D))B._Done(C.KS._this=null);if((B=C.DV.
_this)&&(B._cycle!=D))B._Done(C.DV._this=null);if((B=C.VO._this)&&(B._cycle!=D))
B._Done(C.VO._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */