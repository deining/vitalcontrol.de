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
);if(index.acr)throw new Error("The unit file 'DropDown.js' included twice!");index.
acr=(function(){var A=index;var C={};
var Cf="Text";var BD=[0,0,100,24];var E6=[0,0,100,1];var Hq=[0,0];var I0=[0,0,100
,120];var Iv=[100,0];var O9=[100,120];var P_=[0,120];var P$=[90,0,100,60];var CR=[
0,0,0,0];var Fc=[0,0,240,40];var L8=[240,0];var Qa=[240,40];var J9=[0,40];var Oh=[
210,0,240,40];var Qb=[0,0,240,50];var MR=[240,50];var Te=[0,50];
C.VU={Avs:function(aIndex){return A.jV;},AqU:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VU;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACC={
B7:null,Background:null,Text:null,Bb:null,V:Cf,LW:0xFF000000,A5J:0xFF454545,A$9:
0,KW:0,Km:0x12,Jh:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jh[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jh[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jh[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jh[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5J
);this.Text.L(this.A$9);}else{this.Background.L(this.LW);this.Text.L(this.KW);}}
,Bmr:function(E){this.V=E;this.Text.R(E);},WH:function(E){this.LW=E;this.Background.
L(E);},S:function(E){this.B7=E;this.Text.S(E);},A4:function(E){this.Km=E;this.Text.
A4(E);},Hn:function(E){if(A.aaY(this.Jh,E))return;this.Jh=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AK._Init.call(this.Bb={I:this}
,0);this.__proto__=C.ACC;this.H(BD);this.Background.A1(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.A1(0x3F);this.Text.H(BD);this.Text.R(Cf
);this.Text.L(0xFFFFFFFF);this.Bb.A1(0x1D);this.Bb.H(E6);this.Bb.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bb,0);this.Text.S(A.aaL(A.fl.
Ak));this.B7=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bb._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bb._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANG={AEG:null,A9T:null,CL:null,Ib:null,Bn:null,BW:null,IX:
null,Gt:0,A0:0,GN:0,AbP:0,ACS:false,A3F:function(G){if(this.Bn.Jx>100){var Gh=this.
CL.A6_(this.Bn.H4);if(Gh<0)return;this.CL.GT(Gh);this.CL.HI(Gh,true,null,null);}
},BBn:function(G){var B;if(!this.Bn.NQ){var Gh=this.CL.A6_(this.Bn.H4);if(Gh<0)return;
this.CL.GT(Gh);this.CL.HI(Gh,true,null,null);(B=this.AEG)?B[1].call(B[0],this):null;
}},AAK:function(G){this.Bn.As(true);},BnN:function(E){if(A.aa0(this.AEG,E))return;
this.AEG=E;},GT:function(E){this.Gt=E;this.CL.GT(E);},FO:function(){return this.
CL.Gt;},BAY:function(G){if(this.ACS){var Hb=A.abe(this.Bn.H4,this.Bn.NZ);if((Hb[
1]>8)||(Hb[1]<-8)){this.Ip().ANQ(this.Ib,Hq);this.Bn.As(false);}}},JC:function(E
){this.A0=E;this.CL.JC(E);},BnP:function(E){this.A9T=E;this.CL.Hm=E;},Ae6:function(
E){this.GN=E;this.CL.Ae6(E);},ASJ:function(){return this.CL.GN;},BmH:function(E){
if(this.ACS===E)return;this.ACS=E;},Ary:function(){return this.CL.A0;},ArW:function(
E){if(this.AbP===E)return;this.AbP=E;},BBu:function(G){},Adx:function(G){var B;var
Vt=this.CL.M;var AtE=this.CL.AqS(0,this.CL.A0-1);var y1=(((Vt[1]-AtE[1])*(Vt[3]-
Vt[1]))/(AtE[3]-AtE[1]))|0;var y2=(((Vt[3]-AtE[1])*(Vt[3]-Vt[1]))/(AtE[3]-AtE[1]
))|0;if(y1<0)y1=0;if(y2>(Vt[3]-Vt[1]))y2=Vt[3]-Vt[1];this.IX.H([Vt[2]-10,y1+Vt[1
],Vt[2],y2+Vt[1]]);this.IX.Z(this.ACS);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CL._Init.call(this.CL={I:this},0);A.Core.Ib._Init.call(this.Ib={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BW._Init.call(this.BW={
I:this},0);A.acg.AK._Init.call(this.IX={I:this},0);this.__proto__=C.ANG;this.H(I0
);this.CL.A1(0x3F);this.CL.H(I0);this.CL.GT(0);this.CL.JC(5);this.CL.N8(C.ACC);this.
Ib.A1(0x3F);this.Ib.H(I0);this.Ib.AGV=false;this.Ib.A$C=false;this.Bn.A1(0x3F);this.
Bn.J1(Hq);this.Bn.Kz(Iv);this.Bn.DD(O9);this.Bn.DN(P_);this.BW.A1(0x3F);this.BW.
H(I0);this.BW.L(A.jb.Text);this.IX.H(P$);this.IX.L(0xFF000000);this.J(this.CL,0);
this.J(this.Ib,0);this.J(this.Bn,0);this.J(this.BW,0);this.J(this.IX,0);this.CL.
Em=[this,this.Adx];this.CL.Aw4(this.Ib);this.Ib.AGe=[this,this.BBu];this.Ib.Zp=[
this,this.AAK];this.Bn.ASu=[this,this.BAY];this.Bn.D1=[this,this.A3F];this.Bn.Ls=[
this,this.BBn];},_Done:function(){this.__proto__=A.Core.P;this.CL._Done();this.Ib.
_Done();this.Bn._Done();this.BW._Done();this.IX._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CL._ReInit();this.Ib._ReInit(
);this.Bn._ReInit();this.BW._ReInit();this.IX._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9T)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IX)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,AC3:null,Avn:null,AbO:null,Q:null,Ad2:null,Jz:null,Bn:null
,HN:null,AbF:null,AbP:100,GN:20,BcO:A.wg,A56:0xFF252528,ANn:0xFF252528,ANs:0xFFF1EEEA
,A57:0xFFFAFFFE,ANv:0xFFF8FDFF,ANo:0xFF0008C1,AzI:0,ANw:0xFF7EFEFF,ANP:-1,ACs:0xFF000000
,Bh_:0xFFFAFFFE,Bh$:0,CP:function(){this.Bj4(this);},Init:function(aArg){this.ATa(
this.A56);this.ArO(this.AC3);this.ATb(this.A57);},Kr:function(C0,aClip,aOffset,Cj
,aBlend){A.Core.P.Kr.call(this,C0,aClip,aOffset,Cj,aBlend);if(!A.aaY(this.BcO,this.
M)){this.BcO=this.M;A.pe([this,this.ByE],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Jz.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jz.H([].
concat(this.Jz.M[0],this.Jz.M.slice(1,4)));this.Jz.H(A.abN(this.Jz.M,this.Jz.M[2
]-((B=this.AbF.M)[2]-B[0])));this.Jz.H(A.abP(this.Jz.M,this.Jz.M[1]));this.Jz.H([
].concat(this.Jz.M.slice(0,3),this.Jz.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C4],E,0);if(!!E)A.pe([this,this.C4],this);},A_h:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BgF],this);},Bma:function(G){var B;if(!this.AD)return;
var Gh=this.AD.CL.G5;var AaC=(C.ACC.isPrototypeOf(B=this.AD.CL.Ci)?B:null);if(!!
AaC){if(this.Data.AqU()>Gh){AaC.Bmr(this.Data.Avs(Gh));AaC.WH(this.ANn);AaC.A5J=
this.ANo;AaC.A$9=this.ANw;AaC.S(this.Avn);AaC.KW=this.ANv;AaC.A4(0x12);AaC.Bb.L(
this.ANs);AaC.Hn(CR);}AaC.H(A.abK(AaC.M,[(B=this.AD.CL.M)[2]-B[0],this.AD.CL.GN]
));}},BAF:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FO()));
A.abo(this.Q,0);}A.pe([this,this.A4D],this);},A4D:function(G){if(!this.AD){this.
Bzf(this);if(!this.AD)return;this.HN.Cx=0;this.HN.B3=this.AD.AbP;this.AD.As(true
);}else{this.HN.Cx=this.AD.AbP;this.HN.B3=0;this.AD.As(false);}this.HN.As(true);
this.AD.BmH(this.AbP<(this.AD.ASJ()*this.AD.Ary()));},Bzf:function(G){var B;if(!
this.Data)return;this.AbO=A._NewObject(C.AOm,0);this.AD=A._NewObject(C.ANG,0);this.
AD.BnP([this,this.Bma]);this.AD.BnN([this,this.BAF]);this.AD.Ae6(this.GN);this.AD.
JC(this.Data.AqU());this.AD.IX.L(this.ACs);if(this.AbP>(this.AD.ASJ()*this.AD.Ary(
)))this.ArW(this.AD.ASJ()*this.AD.Ary());this.AD.ArW(this.AbP);this.AD.Ib.F$=[0,
this.AbP];this.AD.H(this.M);this.AD.As(false);this.AD.GT(this.AzI);var IH=this.Ip(
);if(!!IH){this.AbO.H([0,0,(B=IH.M)[2]-B[0],B[3]-B[1]]);this.AbO.At4=[this,this.
A4D];this.AbO.J(this.AD,0);IH.J(this.AbO,0);IH.ZH(this.AbO);IH.AMX(this.AbO);}},
ArW:function(E){if(this.AbP===E)return;this.AbP=E;if(this.ANP<0)this.ANP=E;},AAG:
function(G){var B;if(!this.AD||!this.Ip())return;var AJn=this.BzR(this);this.AD.
H([].concat(AJn[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJn[2]));this.
AD.H(A.abP(this.AD.M,AJn[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJn[3]+this.
HN.A6));if((this.AD.M[3]>this.Ip().M[3])&&(this.AD.M[3]!==((B=this.Ip().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Ip().M[3]));if((this.AD.M[1]<
this.Ip().M[1])&&(this.AD.M[3]!==((B=this.Ip().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Ip().M[1]));},BgF:function(G){this.Jz.R(this.Data.Avs(this.AzI));},AiN:
function(G){if((!this.AD||!this.AbO)||!this.Ip())return;if(!this.AD.A8Y()){this.
Ip().ACT(this.AbO);this.Ip().HP(this.AbO);this.AD=null;}},ByE:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArO:function(E){this.AC3=E;this.Jz.S(E);},AwI:function(E){if(
this.Avn===E)return;this.Avn=E;},ATa:function(E){this.A56=E;this.Ad2.L(E);},A96:
function(E){if(this.ANn===E)return;this.ANn=E;},A9$:function(E){if(this.ANs===E)
return;this.ANs=E;},ATb:function(E){this.A57=E;this.Jz.L(E);},A_a:function(E){if(
this.ANv===E)return;this.ANv=E;},A97:function(E){if(this.ANo===E)return;this.ANo=
E;},C4:function(G){var F;if(!!this.Q){this.AzI=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GT(this.AzI);this.BgF(this);}},BzR:function(AoL){var B;var B1=AoL;var
AJm=AoL.M;var Aze=Hq;while(!!B1){var Aas=B1.FF;if(!B1.Ab&&(B1!==AoL)){B1.Bi(AJm);
return A.abh([0,0,(B=AoL.M)[2]-B[0],B[3]-B[1]],Aze);}if(!!Aas){if(((B=Aas.QP)[0]>=
B[2])||(B[1]>=B[3])){A.we(B1,0);A.we(Aas,0);}Aas.QP=A.wC(Aas.QP,AJm);}if(!((B1.U&
0x1)===0x1))return A.abh([0,0,(B=AoL.M)[2]-B[0],B[3]-B[1]],Aze);if(B1===AoL)AJm=
A.lb(A.abh(AJm,B1.M.slice(0,2)),B1.M);Aze=A.abf(Aze,B1.M.slice(0,2));B1=B1.Ab;}return A.
abh([0,0,(B=AoL.M)[2]-B[0],B[3]-B[1]],Aze);},A_b:function(E){if(this.ANw===E)return;
this.ANw=E;},Bj4:function(G){this.ArW(this.ANP);if(!!this.AD&&!!this.AD.CL)this.
AD.CL.AbH(0,this.AD.CL.A0);if(!!this.Data)this.Jz.R(this.Data.Avs(this.AzI));},A9_:
function(E){if(this.ACs===E)return;this.ACs=E;if(!!this.AD)this.AD.IX.L(this.ACs
);},A99:function(E){this.Bh_=E;this.AbF.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NY._Init.call(this.Ad2={I:this},0);A.acg.Text._Init.call(this.
Jz={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gn._Init.call(this.
HN={I:this},0);A.acg.Ap._Init.call(this.AbF={I:this},0);this.__proto__=C.DT;this.
H(Fc);this.Ad2.A1(0x3F);this.Ad2.H(Fc);this.Ad2.L(0xFF252528);this.Jz.A1(0x3F);this.
Jz.H(Fc);this.Jz.R(A.jV);this.Bn.A1(0x3F);this.Bn.J1(Hq);this.Bn.Kz(L8);this.Bn.
DD(Qa);this.Bn.DN(J9);this.HN.HO(1);this.HN.Fp(250);this.AbF.A1(0x3A);this.AbF.H(
Oh);this.AbF.Cw(1);this.Bh$=A.jb.Text;this.J(this.Ad2,0);this.J(this.Jz,0);this.
J(this.Bn,0);this.J(this.AbF,0);this.Ad2.Ax(A.aaL(A.acw.AHv));this.Jz.S(A.aaL(A.
fl.Af));this.Bn.Ls=[this,this.A4D];this.HN.SG=[this,this.AiN];this.HN.Ahl=[this,
this.AAG];this.AC3=A.aaL(A.fl.Af);this.Avn=A.aaL(A.fl.Ak);this.AbF.Ax(A.aaL(A.aci.
AR9));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad2._Done(
);this.Jz._Done();this.Bn._Done();this.HN._Done();this.AbF._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad2._ReInit();this.
Jz._ReInit();this.Bn._ReInit();this.HN._ReInit();this.AbF._ReInit();this.Jz.S(A.
aaL(A.fl.Af));this.ArO(A.aaL(A.fl.Af));this.AwI(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AC3
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avn)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOm={At4:null,Bn:null,Bg3:function(G){var
B;(B=this.At4)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOm;this.H(
Qb);this.Bn.A1(0x3F);this.Bn.J1(Hq);this.Bn.Kz(L8);this.Bn.DD(MR);this.Bn.DN(Te);
this.J(this.Bn,0);this.Bn.Av6=[this,this.Bg3];this.Bn.BG=[this,this.Bg3];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.At4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACC.__proto__=A.Core.P;C.ANG.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOm.__proto__=A.Core.P;};C._ReInit=function(){};C.DI=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */