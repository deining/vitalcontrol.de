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
var Cg="Text";var BF=[0,0,100,24];var E7=[0,0,100,1];var Hr=[0,0];var I1=[0,0,100
,120];var Iw=[100,0];var O$=[100,120];var Qa=[0,120];var Qb=[90,0,100,60];var CJ=[
0,0,0,0];var Fd=[0,0,240,40];var LD=[240,0];var Qc=[240,40];var J$=[0,40];var Oj=[
210,0,240,40];var Qd=[0,0,240,50];var MU=[240,50];var Ti=[0,50];
C.V0={AvA:function(aIndex){return A.jV;},Aq1:function(){return 0;},_Init:function(
aArg){this.__proto__=C.V0;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACE={
B9:null,Background:null,Text:null,Bb:null,V:Cg,L1:0xFF000000,A5W:0xFF454545,Ban:
0,KY:0,Kn:0x12,Jj:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jj[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jj[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jj[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jj[3]));},Aj:function(Ae){
var B;A.Core.P.Aj.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5W
);this.Text.L(this.Ban);}else{this.Background.L(this.L1);this.Text.L(this.KY);}}
,BmF:function(E){this.V=E;this.Text.R(E);},WM:function(E){this.L1=E;this.Background.
L(E);},S:function(E){this.B9=E;this.Text.S(E);},A4:function(E){this.Kn=E;this.Text.
A4(E);},Ho:function(E){if(A.aaY(this.Jj,E))return;this.Jj=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AK._Init.call(this.Bb={I:this}
,0);this.__proto__=C.ACE;this.H(BF);this.Background.A1(0x3F);this.Background.H(BF
);this.Background.L(0xBE000000);this.Text.A1(0x3F);this.Text.H(BF);this.Text.R(Cg
);this.Text.L(0xFFFFFFFF);this.Bb.A1(0x1D);this.Bb.H(E7);this.Bb.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bb,0);this.Text.S(A.aaL(A.fl.
Ak));this.B9=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bb._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bb._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANO={AEI:null,A99:null,CM:null,Ib:null,Bn:null,BY:null,IY:
null,Gv:0,A0:0,GQ:0,AbW:0,ACU:false,A3R:function(G){if(this.Bn.JA>100){var Gk=this.
CM.A7n(this.Bn.H4);if(Gk<0)return;this.CM.GU(Gk);this.CM.HJ(Gk,true,null,null);}
},BBK:function(G){var B;if(!this.Bn.NT){var Gk=this.CM.A7n(this.Bn.H4);if(Gk<0)return;
this.CM.GU(Gk);this.CM.HJ(Gk,true,null,null);(B=this.AEI)?B[1].call(B[0],this):null;
}},AAM:function(G){this.Bn.As(true);},Bn1:function(E){if(A.aa0(this.AEI,E))return;
this.AEI=E;},GU:function(E){this.Gv=E;this.CM.GU(E);},FQ:function(){return this.
CM.Gv;},BBk:function(G){if(this.ACU){var Hc=A.abe(this.Bn.H4,this.Bn.N2);if((Hc[
1]>8)||(Hc[1]<-8)){this.Ip().ANY(this.Ib,Hr);this.Bn.As(false);}}},JF:function(E
){this.A0=E;this.CM.JF(E);},Bn3:function(E){this.A99=E;this.CM.Hn=E;},Afb:function(
E){this.GQ=E;this.CM.Afb(E);},ASR:function(){return this.CM.GQ;},BmV:function(E){
if(this.ACU===E)return;this.ACU=E;},ArG:function(){return this.CM.A0;},Ar1:function(
E){if(this.AbW===E)return;this.AbW=E;},BBR:function(G){},AdE:function(G){var B;var
Vy=this.CM.M;var AtM=this.CM.AqZ(0,this.CM.A0-1);var y1=(((Vy[1]-AtM[1])*(Vy[3]-
Vy[1]))/(AtM[3]-AtM[1]))|0;var y2=(((Vy[3]-AtM[1])*(Vy[3]-Vy[1]))/(AtM[3]-AtM[1]
))|0;if(y1<0)y1=0;if(y2>(Vy[3]-Vy[1]))y2=Vy[3]-Vy[1];this.IY.H([Vy[2]-10,y1+Vy[1
],Vy[2],y2+Vy[1]]);this.IY.Z(this.ACU);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.Ib._Init.call(this.Ib={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BY._Init.call(this.BY={
I:this},0);A.acg.AK._Init.call(this.IY={I:this},0);this.__proto__=C.ANO;this.H(I1
);this.CM.A1(0x3F);this.CM.H(I1);this.CM.GU(0);this.CM.JF(5);this.CM.N_(C.ACE);this.
Ib.A1(0x3F);this.Ib.H(I1);this.Ib.AGX=false;this.Ib.A$S=false;this.Bn.A1(0x3F);this.
Bn.J5(Hr);this.Bn.KB(Iw);this.Bn.DE(O$);this.Bn.DO(Qa);this.BY.A1(0x3F);this.BY.
H(I1);this.BY.L(A.jb.Text);this.IY.H(Qb);this.IY.L(0xFF000000);this.J(this.CM,0);
this.J(this.Ib,0);this.J(this.Bn,0);this.J(this.BY,0);this.J(this.IY,0);this.CM.
Eo=[this,this.AdE];this.CM.Axc(this.Ib);this.Ib.AGf=[this,this.BBR];this.Ib.Zv=[
this,this.AAM];this.Bn.ASC=[this,this.BBk];this.Bn.D3=[this,this.A3R];this.Bn.Lt=[
this,this.BBK];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.Ib.
_Done();this.Bn._Done();this.BY._Done();this.IY._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.Ib._ReInit(
);this.Bn._ReInit();this.BY._ReInit();this.IY._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A99)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IY)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DU={Data:null,AD:null,AC5:null,Avv:null,AbV:null,Q:null,Ad9:null,JC:null,Bn:null
,HO:null,AbM:null,AbW:100,GQ:20,Bc4:A.wg,A6h:0xFF252528,ANu:0xFF252528,ANz:0xFFF1EEEA
,A6i:0xFFFAFFFE,ANC:0xFFF8FDFF,ANv:0xFF0008C1,AzK:0,AND:0xFF7EFEFF,ANX:-1,ACu:0xFF000000
,Bio:0xFFFAFFFE,Bip:0,CQ:function(){this.Bkh(this);},Init:function(aArg){this.ATi(
this.A6h);this.ArT(this.AC5);this.ATj(this.A6i);},Ks:function(C2,aClip,aOffset,Ck
,aBlend){A.Core.P.Ks.call(this,C2,aClip,aOffset,Ck,aBlend);if(!A.aaY(this.Bc4,this.
M)){this.Bc4=this.M;A.pe([this,this.ByV],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.JC.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.JC.H([].
concat(this.JC.M[0],this.JC.M.slice(1,4)));this.JC.H(A.abN(this.JC.M,this.JC.M[2
]-((B=this.AbM.M)[2]-B[0])));this.JC.H(A.abP(this.JC.M,this.JC.M[1]));this.JC.H([
].concat(this.JC.M.slice(0,3),this.JC.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C6],E,0);if(!!E)A.pe([this,this.C6],this);},A_x:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BgV],this);},Bmo:function(G){var B;if(!this.AD)return;
var Gk=this.AD.CM.G6;var AaJ=(C.ACE.isPrototypeOf(B=this.AD.CM.Cj)?B:null);if(!!
AaJ){if(this.Data.Aq1()>Gk){AaJ.BmF(this.Data.AvA(Gk));AaJ.WM(this.ANu);AaJ.A5W=
this.ANv;AaJ.Ban=this.AND;AaJ.S(this.Avv);AaJ.KY=this.ANC;AaJ.A4(0x12);AaJ.Bb.L(
this.ANz);AaJ.Ho(CJ);}AaJ.H(A.abK(AaJ.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GQ]
));}},BA3:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FQ()));
A.abo(this.Q,0);}A.pe([this,this.A4Q],this);},A4Q:function(G){if(!this.AD){this.
Bzv(this);if(!this.AD)return;this.HO.Cy=0;this.HO.B4=this.AD.AbW;this.AD.As(true
);}else{this.HO.Cy=this.AD.AbW;this.HO.B4=0;this.AD.As(false);}this.HO.As(true);
this.AD.BmV(this.AbW<(this.AD.ASR()*this.AD.ArG()));},Bzv:function(G){var B;if(!
this.Data)return;this.AbV=A._NewObject(C.AOu,0);this.AD=A._NewObject(C.ANO,0);this.
AD.Bn3([this,this.Bmo]);this.AD.Bn1([this,this.BA3]);this.AD.Afb(this.GQ);this.AD.
JF(this.Data.Aq1());this.AD.IY.L(this.ACu);if(this.AbW>(this.AD.ASR()*this.AD.ArG(
)))this.Ar1(this.AD.ASR()*this.AD.ArG());this.AD.Ar1(this.AbW);this.AD.Ib.Gf=[0,
this.AbW];this.AD.H(this.M);this.AD.As(false);this.AD.GU(this.AzK);var II=this.Ip(
);if(!!II){this.AbV.H([0,0,(B=II.M)[2]-B[0],B[3]-B[1]]);this.AbV.Aua=[this,this.
A4Q];this.AbV.J(this.AD,0);II.J(this.AbV,0);II.ZN(this.AbV);II.AM4(this.AbV);}},
Ar1:function(E){if(this.AbW===E)return;this.AbW=E;if(this.ANX<0)this.ANX=E;},AAI:
function(G){var B;if(!this.AD||!this.Ip())return;var AJu=this.BAa(this);this.AD.
H([].concat(AJu[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJu[2]));this.
AD.H(A.abP(this.AD.M,AJu[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJu[3]+this.
HO.A6));if((this.AD.M[3]>this.Ip().M[3])&&(this.AD.M[3]!==((B=this.Ip().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Ip().M[3]));if((this.AD.M[1]<
this.Ip().M[1])&&(this.AD.M[3]!==((B=this.Ip().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Ip().M[1]));},BgV:function(G){this.JC.R(this.Data.AvA(this.AzK));},AiR:
function(G){if((!this.AD||!this.AbV)||!this.Ip())return;if(!this.AD.A9c()){this.
Ip().ACV(this.AbV);this.Ip().HQ(this.AbV);this.AD=null;}},ByV:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArT:function(E){this.AC5=E;this.JC.S(E);},AwS:function(E){if(
this.Avv===E)return;this.Avv=E;},ATi:function(E){this.A6h=E;this.Ad9.L(E);},A_k:
function(E){if(this.ANu===E)return;this.ANu=E;},A_p:function(E){if(this.ANz===E)
return;this.ANz=E;},ATj:function(E){this.A6i=E;this.JC.L(E);},A_q:function(E){if(
this.ANC===E)return;this.ANC=E;},A_l:function(E){if(this.ANv===E)return;this.ANv=
E;},C6:function(G){var F;if(!!this.Q){this.AzK=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GU(this.AzK);this.BgV(this);}},BAa:function(AoS){var B;var B2=AoS;var
AJt=AoS.M;var Azg=Hr;while(!!B2){var Aaz=B2.FH;if(!B2.Ab&&(B2!==AoS)){B2.Bi(AJt);
return A.abh([0,0,(B=AoS.M)[2]-B[0],B[3]-B[1]],Azg);}if(!!Aaz){if(((B=Aaz.QR)[0]>=
B[2])||(B[1]>=B[3])){A.we(B2,0);A.we(Aaz,0);}Aaz.QR=A.wC(Aaz.QR,AJt);}if(!((B2.U&
0x1)===0x1))return A.abh([0,0,(B=AoS.M)[2]-B[0],B[3]-B[1]],Azg);if(B2===AoS)AJt=
A.lb(A.abh(AJt,B2.M.slice(0,2)),B2.M);Azg=A.abf(Azg,B2.M.slice(0,2));B2=B2.Ab;}return A.
abh([0,0,(B=AoS.M)[2]-B[0],B[3]-B[1]],Azg);},A_r:function(E){if(this.AND===E)return;
this.AND=E;},Bkh:function(G){this.Ar1(this.ANX);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbO(0,this.AD.CM.A0);if(!!this.Data)this.JC.R(this.Data.AvA(this.AzK));},A_o:
function(E){if(this.ACu===E)return;this.ACu=E;if(!!this.AD)this.AD.IY.L(this.ACu
);},A_n:function(E){this.Bio=E;this.AbM.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.N1._Init.call(this.Ad9={I:this},0);A.acg.Text._Init.call(this.
JC={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gp._Init.call(this.
HO={I:this},0);A.acg.Ap._Init.call(this.AbM={I:this},0);this.__proto__=C.DU;this.
H(Fd);this.Ad9.A1(0x3F);this.Ad9.H(Fd);this.Ad9.L(0xFF252528);this.JC.A1(0x3F);this.
JC.H(Fd);this.JC.R(A.jV);this.Bn.A1(0x3F);this.Bn.J5(Hr);this.Bn.KB(LD);this.Bn.
DE(Qc);this.Bn.DO(J$);this.HO.HP(1);this.HO.Fq(250);this.AbM.A1(0x3A);this.AbM.H(
Oj);this.AbM.Cx(1);this.Bip=A.jb.Text;this.J(this.Ad9,0);this.J(this.JC,0);this.
J(this.Bn,0);this.J(this.AbM,0);this.Ad9.Ax(A.aaL(A.acw.AHx));this.JC.S(A.aaL(A.
fl.Af));this.Bn.Lt=[this,this.A4Q];this.HO.SL=[this,this.AiR];this.HO.Ahr=[this,
this.AAI];this.AC5=A.aaL(A.fl.Af);this.Avv=A.aaL(A.fl.Ak);this.AbM.Ax(A.aaL(A.aci.
ASf));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad9._Done(
);this.JC._Done();this.Bn._Done();this.HO._Done();this.AbM._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad9._ReInit();this.
JC._ReInit();this.Bn._ReInit();this.HO._ReInit();this.AbM._ReInit();this.JC.S(A.
aaL(A.fl.Af));this.ArT(A.aaL(A.fl.Af));this.AwS(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AC5
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avv)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOu={Aua:null,Bn:null,Bhh:function(G){var
B;(B=this.Aua)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOu;this.H(
Qd);this.Bn.A1(0x3F);this.Bn.J5(Hr);this.Bn.KB(LD);this.Bn.DE(MU);this.Bn.DO(Ti);
this.J(this.Bn,0);this.Bn.Awb=[this,this.Bhh];this.Bn.BH=[this,this.Bhh];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Aua)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACE.__proto__=A.Core.P;C.ANO.__proto__=A.Core.P;C.DU.__proto__=
A.Core.P;C.AOu.__proto__=A.Core.P;};C._ReInit=function(){};C.DJ=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */