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
);if(index.acq)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.acq=(function(){var A=index;var C={};
var Cg="ERROR: access to null Bool data in column [";var BD="]";var E6="Access to inexistent column index: ";
var Hr=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I0="Unsupported filter criterion class";var
Iv="Operator not handled:";var O8="1,8";var P_="INFO: Device.StartScan() called.";
var P$="INFO: Device.StopScan() called.";var CR="V0.";var Fc=".";var LA="\n";var
Qa="Temp: ";var J_="Battery: ";var Oh="%%";var Qb="Selected animal with row index";
var MR="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Tg="1,2";var UX="0,1,2";var Aaa="3900,3950,4000";var Xc="4050,4100,4150";var Iw=
"Read only";var UY="Unknown data export type: ";var Aab="Unhandled Device::DataExportType: ";
var UZ="0,2,1";var Aac="650,150,700";var Xd="800,200,900";var Aad="800,200,850";
var Aae="40000,4000,0";var U0="32,7,34,18,23,14";var Xe="16384";var O9="1,1024";
var Aaf="Simulate Scan";var Oi="text/csv";var Rn="hit-geburt-%d-%m-%Y_%H-%M.csv";
var Xf="animals-%d-%m-%Y_%H-%M.csv";var Xg="zugang-%d-%m-%Y_%H-%M.csv";var U1="ERROR: Cannot start transaction";
var Xh="Nested transactions are not allowed.";var Aag="Transaction not opened.";
var Xi="Wrong transaction ID.";var U2="Unhandled TableId:";var Xj="Maximum number of rows reached.";
var Xk="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var Xl=
"Severe: filter set when inserting row into table: ";var Ro="Warning: DeviceSimulation::TableData not in transaction";
var Th="ERROR: Row not found with index [";var Aah="] while Rows Count = ";var AfC=
"ERROR: trying to access an inexistent row with Index=";var Aai="Invalid Device::SyncState";
var Xm="Forwarding to home screen after 500 milliseconds ...";var Aaj="Forwarding to home screen canceled...";
var Aak=[0,58,240,208];var AhT="VitalControl\nstarting up \u2026";var K2="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Aal="%d.%m.%Y";var LB="1";var AhU="2";var Ak9="Unknown gender: ";var Oj="M";
var Xn="F";var Aoe="?";var AfD="%Y-%m-%d";var AhV="2;1;";var AcP="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";
C.Table={Hv:null,Init:function(aArg){var K=this.K;A.zV([this,this.Ann],K.Hv,0);},
CE:function(Ad,Bc){var K=this.K;return K.Hv.CE(Ad,Bc);},H6:function(Ad,Bc){var K=
this.K;return K.Hv.H6(Ad,Bc);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;
this.Id=E;K.Hv.OnSetId(E);},B9:function(){var K=this.K;return K.Hv.B9();},Bk:function(
E){var K=this.K;A.Device.ITable.Bk.call(this,E);K.Hv.Bk(E);},V7:function(Ad,Bc){
var K=this.K;return K.Hv.V7(Ad,Bc);},Sq:function(Ad,Bc){var K=this.K;return K.Hv.
Sq(Ad,Bc);},QE:function(){var K=this.K;return K.Hv.QE();},QI:function(AoN){var K=
this.K;return K.Hv.QI(AoN);},AbK:function(){var K=this.K;return K.Hv.AbK();},ZR:
function(Ad,Bc,Dx){var K=this.K;return K.Hv.ZR(Ad,Bc,Dx);},HS:function(Ad,Bc,Dx){
var K=this.K;return K.Hv.HS(Ad,Bc,Dx);},ZQ:function(Ad,Bc,Dx){var K=this.K;return K.
Hv.ZQ(Ad,Bc,Dx);},Ob:function(Ad,Bc,Dx){var K=this.K;return K.Hv.Ob(Ad,Bc,Dx);},
LZ:function(aColumn,A9){var K=this.K;return K.Hv.LZ(aColumn,A9);},KS:function(Ad
,Bc){var K=this.K;return K.Hv.KS(Ad,Bc);},UF:function(Ad,Bc,Dx){var K=this.K;return K.
Hv.UF(Ad,Bc,Dx);},Aes:function(aColumn,A9){var K=this.K;return K.Hv.Aes(aColumn,
A9);},FD:function(){var K=this.K;return K.Hv.FD();},AjH:function(aColumn,A9){var
K=this.K;return K.Hv.AjH(aColumn,A9);},Ael:function(aColumn,A9){var K=this.K;return K.
Hv.Ael(aColumn,A9);},HL:function(){var K=this.K;return K.Hv.HL();},QL:function(){
var K=this.K;return K.Hv.QL();},_Init:function(aArg){var K=this.K;C.Hv._Init.call(
K.Hv={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Hv._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.Hv._ReInit();},_Mark:function(D){var B;if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGD={Vi:A.abi(42,null,null),CE:function(aColumn){var B;this.Ac8(aColumn);var Aq=(
C.AD8.isPrototypeOf(B=this.Vi.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;
},BjT:function(aColumn){var B;this.Ac8(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Vi.Get(aColumn))?B:null);if(!!Aq)return A.jV;return A.jV;},H6:function(aColumn
){var B;this.Ac8(aColumn);var Aq=(C.ACc.isPrototypeOf(B=this.Vi.Get(aColumn))?B:
null);if(!!Aq)return Aq.A6;else A.ab5("%s",(Cg+aColumn.toFixed())+BD);return false;
},HS:function(aColumn,A9){this.Ac8(aColumn);var Aq=A._NewObject(C.AD8,0);Aq.A6=A9;
this.Vi.Set(aColumn,Aq);return true;},Ob:function(aColumn,A9){this.Ac8(aColumn);
var Aq=A._NewObject(C.ACc,0);Aq.A6=A9;this.Vi.Set(aColumn,Aq);return true;},Ac8:
function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((E6+aColumn.toFixed(
))+Hr);},Bkl:function(AH){if(!!(A.Device.Int32FilterCriterion.isPrototypeOf(AH)?
AH:null))return this.AJR(this.CE(AH.EJ),AH.Operator,(A.Device.Int32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.UInt32FilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Bzd(this.Sq(AH.EJ),AH.Operator,(A.Device.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Bzc(this.BjT(AH.EJ),AH.Operator,(A.Device.StringFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Bzb(this.H6(AH.EJ),AH.Operator,(A.Device.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJR(this.CE(AH.EJ),AH.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJR(this.CE(AH.EJ),AH.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Bzg(this.V7(AH.EJ),AH.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A6)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Bze(this.KS(AH.EJ),AH.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Bzf(this.KS(AH.EJ),AH.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null).A6,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null).Zs&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AH)?AH:null).OI&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJR(this.CE(AH.EJ),AH.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else throw new Error(I0);},AJR:function(Fs,Ec,GC){
switch(Ec){case 0:return Fs===GC;case 2:return Fs>GC;case 3:return Fs<GC;case 4:
return Fs.toFixed().indexOf(GC.toFixed(),0)>=0;case 5:return Fs!==GC;default:throw new
Error(Iv+Ec.toFixed());}},Bzc:function(Fs,Ec,GC){switch(Ec){case 0:return Fs===GC;
case 2:return Fs>GC;case 3:return Fs<GC;case 4:{A.ab5("%s%e%s%i",Fs,Ec,GC,Fs.indexOf(
GC,0));return Fs.indexOf(GC,0)>=0;}case 5:return Fs!==GC;default:throw new Error(
Iv+Ec.toFixed());}},Bzb:function(Fs,Ec,GC){switch(Ec){case 0:return Fs===GC;case
2:case 3:case 4:return false;case 5:return Fs!==GC;default:throw new Error(Iv+Ec.
toFixed());}},V7:function(aColumn){var B;this.Ac8(aColumn);var Aq=(C.AHg.isPrototypeOf(
B=this.Vi.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;},ZR:function(aColumn
,A9){this.Ac8(aColumn);var Aq=A._NewObject(C.AHg,0);Aq.A6=A9;this.Vi.Set(aColumn
,Aq);return true;},Bzg:function(Fs,Ec,GC){switch(Ec){case 0:return Fs===GC;case 2:
return Fs>GC;case 3:return Fs<GC;case 4:return Fs.toFixed().indexOf(GC.toFixed()
,0)>=0;case 5:return Fs!==GC;default:throw new Error(Iv+Ec.toFixed());}},Sq:function(
aColumn){var B;this.Ac8(aColumn);var Aq=(C.AHe.isPrototypeOf(B=this.Vi.Get(aColumn
))?B:null);if(!!Aq)return Aq.A6;return 0;},ZQ:function(aColumn,A9){this.Ac8(aColumn
);var Aq=A._NewObject(C.AHe,0);Aq.A6=A9;this.Vi.Set(aColumn,Aq);return true;},Bzd:
function(Fs,Ec,GC){switch(Ec){case 0:return Fs===GC;case 2:return Fs>GC;case 3:return Fs<
GC;case 4:return Fs.toFixed().indexOf(GC.toFixed(),0)>=0;case 5:return Fs!==GC;default:
throw new Error(Iv+Ec.toFixed());}},KS:function(aColumn){var B;this.Ac8(aColumn);
var Aq=(C.AHf.isPrototypeOf(B=this.Vi.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;
return 0;},UF:function(aColumn,A9){this.Ac8(aColumn);var Aq=A._NewObject(C.AHf,0
);Aq.A6=A9;this.Vi.Set(aColumn,Aq);return true;},Bze:function(Fs,Ec,GC){switch(Ec
){case 0:return Fs===GC;case 2:return Fs>GC;case 3:return Fs<GC;case 4:return Fs.
toFixed().indexOf(GC.toFixed(),0)>=0;case 5:return Fs!==GC;default:throw new Error(
Iv+Ec.toFixed());}},Bzf:function(Fs,Ec,GC,Aty,AJd){var AK7=Fs.toFixed();AK7=A.ab2(
A.abV(AK7,AK7.length-Aty),AJd);Fs=Math.trunc(Fs/A._GetAutoObject(A.Device.Helper
).ApO(Aty))%A._GetAutoObject(A.Device.Helper).ApO(AJd);var ALz=A.ab0(GC,0,10);switch(
Ec){case 0:return Fs===ALz;case 2:return Fs>ALz;case 3:return Fs<ALz;case 4:return AK7.
indexOf(GC,0)>=0;case 5:return Fs!==ALz;default:throw new Error(Iv+Ec.toFixed());
}},_Init:function(aArg){(this.Vi=[]).__proto__=C.AGD.Vi;this.__proto__=C.AGD;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Vi,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.WA={_Init:function(
aArg){this.__proto__=C.WA;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.AD8={A6:0,_Init:function(aArg){C.WA._Init.call(this,aArg);this.__proto__=C.AD8;
},_className:"DeviceSimulation::Int32"};C.String={_Init:function(aArg){C.WA._Init.
call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"};
C.ACc={A6:false,_Init:function(aArg){C.WA._Init.call(this,aArg);this.__proto__=C.
ACc;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Auq:null,Ai0:null,AaW:
null,CP:function(){var K=this.K;K.A$0.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zv(3);A.zX([this,K.BgU],[B=K.Auq,B.A9J,B.ATP],0);this.UpdateAutoActions(
O8);K.A$0.call(this,this);this.Ast(this);this.Asu(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asr(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=28;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnC(languageValue);A.pe([this
,K.AUh],this);},Zv:function(E){this.UpdateActiveScreen(E);},Awx:function(E){this.
UpdateBatteryChargeState(E);},AFg:function(E){this.UpdateChargeActive(E);},Ar4:function(
E){this.UpdateScanState(E);},AwY:function(E){this.UpdateMeasureState(E);},Axa:function(
E){this.UpdateTempValue(E);},AnC:function(E){this.UpdateLanguage(E);},Axb:function(
E){this.UpdateTemperatureUnit(E);},AFe:function(E){this.UpdateBrightness(E);},AFK:
function(E){this.UpdateMonitoring(E);},AxM:function(){var B;if(A._GetAutoObject(
C.UG).AxG){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).ALb(this
);}},AhL:function(){var B;A._GetAutoObject(A.Device.Helper).S1.AnY(this);this.UpdateMeasureState(
0);},AhI:function(){var K=this.K;A.ab5("%s",P_);this.UpdateScanState(1);A.pe([this
,K.BgU],this);},AnZ:function(){var K=this.K;var B;A.ab5("%s",P$);K.Ai0.AnY(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah7){},AxF:function(){A.Device.
DeviceClass.Bbn.call(this);this.Zv(1);},AGA:function(){A.Device.DeviceClass.Bbl.
call(this);this.Zv(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Axi:function(
E){this.UpdateUnderTemp(E);},Acc:function(E){this.UpdateSyncState(E);},ADj:function(
){var aString;aString=((((((((((CR+A.abz(0,9).toFixed())+Fc)+A.abz(0,9).toFixed(
))+LA)+Qa)+A.abz(30,90).toFixed())+A.aaR(A.acf.AG4))+LA)+J_)+A.abz(1,100).toFixed(
))+Oh;return aString;},PopupStateChanged:function(Jn,Ae){var Ago=A._NewObject(C.
PopupContext,0);Ago.Id=Jn;Ago.EV=Ae;this.AnN.Trigger(Ago,false);},AF$:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae$:function(E){this.UpdateVibrationOn(
E);},Aw8:function(E){this.UpdateRatingMode(E);},Ae1:function(E){this.UpdateFlashLightOn(
E);},Uy:function(E){this.UpdateTopLightOn(E);},WM:function(E){this.UpdateRGBTopLight(
E);},Awv:function(E){this.UpdateAutoRegistrationMode(E);},Ar5:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OS:function(E){this.UpdateDigitsID(
E);},PV:function(E){this.UpdateOffsetID(E);},AGd:function(E){this.UpdateWeightValue(
E);},AwV:function(E){this.UpdateMassUnit(E);},ArF:function(E){A.Device.DeviceClass.
Bbh.call(this,E);this.UpdateActiveActions(E);},ArG:function(E){A.Device.DeviceClass.
Bbi.call(this,E);this.UpdateActiveActionsOrder(E);},Akq:function(E){A.Device.DeviceClass.
Bbj.call(this,E);this.UpdateAutoActions(E);},AG0:function(){var K=this.K;this.UpdateMeasureState(
1);K.BCI.call(this,this);},AsI:function(){var K=this.K;var B;K.AaW.AnY(this);this.
UpdateMeasureState(0);},EC:function(E){this.UpdateAnimalType(E);},Axj:function(E
){this.UpdateWeightRecordingMode(E);},AFP:function(E){this.UpdatePredictedTempValue(
E);},SX:function(Mc){A.ab5("%s%i",Qb,Mc);},AFk:function(E){this.UpdateDemoMode(E
);},AE5:function(E){this.UpdateAgeRegistration(E);},Axk:function(E){this.UpdateWeightRecordingScope(
E);},J1:function(E){this.UpdateGender(E);},ArU:function(E){this.UpdateIDLastUsedMale(
E);},ArT:function(E){this.UpdateIDLastUsedFemale(E);},Zw:function(E){this.UpdateAnimalListContent(
E);},AE7:function(E){this.UpdateAlarmListAction(E);},AFn:function(E){this.UpdateFlashLightInMeasureState(
E);},AeW:function(E){this.UpdateAnimalInfoContent(E);},AGc:function(E){this.UpdateWatchListAction(
E);},AFp:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArF(15359);this.ArG(MR);},ResetAutoActions:function(G){this.Akq(Tg);},Awt:
function(E){this.UpdateAnimalTypesString(E);},Ar8:function(E){this.UpdateTemperaturesHighString(
E);},Ar9:function(E){this.UpdateTemperaturesLowString(E);},Ast:function(G){this.
Awt(UX);this.Ar9(Aaa);this.Ar8(Xc);this.Axi(3600);},AwP:function(E){this.UpdateFreshCowsHideMeasured(
E);},Ar0:function(E){this.UpdateNaisIdLastUsedMale(E);},ArZ:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Aw2:function(E){this.UpdateNaisIdIncrementMale(E);},Aw1:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bbo.call(this);A._GetAutoObject(
A.kR.A5).Cd(53);},Anw:function(E){this.UpdateBootloaderMessage(E);},AE2:function(
E){this.UpdateActionListAction(E);},Awr:function(E){this.UpdateActionListHideMeasured(
E);},Us:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwH:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwI:function(E){this.UpdateDirectionOfCountingMale(
E);},AwJ:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArV:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar1:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Aw3:function(E){this.UpdateNaisIdIncrementUnisex(E);},Aks:function(E){this.UpdateEartagNrAssignmentMode(
E);},N7:function(E){this.UpdateBreed(E);},AFI:function(E){throw new Error(Iw);},
AFC:function(E){throw new Error(Iw);},AF9:function(E){throw new Error(Iw);},AFa:
function(E){throw new Error(Iw);},AFl:function(E){this.UpdateDryCowListAction(E);
},AJO:function(A1h){var Qz;switch(A1h){case 15:Qz=false;break;default:Qz=true;}return Qz;
},AE_:function(E){this.UpdateBirthListView(E);},AF_:function(E){this.UpdateTransferProgress(
E);},Ar_:function(E){this.UpdateTransferTarget(E);},AsH:function(){var B;A.pe([B=
A._GetAutoObject(C.WY),B.BgY],this);},Aw7:function(E){this.UpdatePremisesID(E);}
,Aw0:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AFq:function(E){this.
UpdateFreshCowSpan(E);},Axh:function(E){this.UpdateUSBDevice(E.Z7,E.AsS,E.Ask);}
,AxL:function(){var K=this.K;var B;var A19=A._NewObject(C.A6l,0);this.FU.FileName=
K.BjG.call(this,this.FU.AgL);switch(this.FU.AgL){case 0:A19.Bzo((C.V0.isPrototypeOf(
B=this.FU)?B:null));break;case 1:A19.Bzl((C.V0.isPrototypeOf(B=this.FU)?B:null));
break;case 2:A19.Bzq((C.V0.isPrototypeOf(B=this.FU)?B:null));break;default:throw new
Error(UY+this.FU.AgL.toFixed());}},Ari:function(){return true;},AqC:function(){var
K=this.K;switch(this.FU.AgL){case 0:A._GetAutoObject(A.Device.Device).AZ(72,true
,A.jV,0,[this,K.A3J]);break;case 1:A._GetAutoObject(A.Device.Device).AZ(90,true,
A.jV,0,[this,K.A3J]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(99,true,A.
jV,0,[this,K.A3J]);break;default:throw new Error(Aab+this.FU.AgL.toFixed());}},AFW:
function(E){throw new Error(Iw);},Aws:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AFY:function(E){this.UpdateShutdownTimer(E);},Asu:function(G){this.Awu(UZ);
this.Asc(Aac);this.Asb(Xd);this.Asa(Aad);this.Asd(Aae);},Asb:function(E){this.UpdateWeightGainsHighString(
E);},Asc:function(E){this.UpdateWeightGainsLowString(E);},Awu:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Asa:function(E){this.UpdateWeightGainsAverageString(E);},Asd:function(E){this.
UpdateWeightValueBirthString(E);},AwK:function(E){this.UpdateEvaluationAnimalType(
E);},Aw$:function(E){this.UpdateStartScreen(E);},AEa:function(){return 1;},AEb:function(
){return 1;},AFH:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Axf:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nt:function(E){this.UpdateWhereAbouts(
E);},ArI:function(E){this.UpdateActiveMassRecordingFields(E);},ArJ:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asr:function(G){this.ArI(A.jV);this.ArJ(
U0);},AFF:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},X8:function(
){A._GetAutoObject(C.WY).Aww(true);return true;},Aqn:function(){var B;A._GetAutoObject(
C.WY).Aqn(this);return true;},Aqm:function(){var B;A.pe([B=A._GetAutoObject(C.WY
),B.Aqm],this);return true;},Aqo:function(){var B;A.pe([B=A._GetAutoObject(C.WY)
,B.Bh3],this);return true;},AwX:function(E){this.UpdateMaxWeightValuePrecision(E
);},Aw4:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Aw4(Xe);},Aw5:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Aw5(O9);},Axm:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axm(O9);},Axg:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asq:function(FQ,AoA,AJl){this.FU.FD();this.FU.B6=FQ;this.FU.AgL=AoA;this.FU.AVa=
AJl;this.FU.E4(1);this.FU.E4(2);this.AxL();},AE$:function(E){this.UpdateBirthRegistrationsListResetOnExport(
E);},AFQ:function(E){this.UpdatePurchasedListResetOnExport(E);},AwC:function(E){
this.UpdateCountry(E);},BCs:function(G){switch(this.Im){case 34:case 35:case 32:
case 45:case 49:case 55:case 80:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(
2);}break;case 15:break;default:this.UpdateScanState(4);}},BgU:function(G){var K=
this.K;var B;if((this.ScanState===1)&&K.Auq.AGV)K.Ai0.AnW(this);A.ab5("%s",Aaf);
},BCI:function(G){var K=this.K;var B;if((this.MeasureState===1)&&K.Auq.AxG)K.AaW.
AnW(this);},BDp:function(G){this.UpdateMeasureState(3);},AUh:function(G){var K=this.
K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.ALb],[B=K.Auq,B.A9K,B.ATQ],0
);this.R7.AFj(A._GetAutoObject(A.Device.Helper).A7o(8));this.SG.AFj(A._GetAutoObject(
A.Device.Helper).A7o(8));},A$0:function(G){var AzX=A._NewObject(A.Device.AxK,0);
AzX.OnSetTimestamp(1770735487);AzX.AFD(1);AzX.AFJ(0);AzX.AFT(0);this.SG=AzX;var Azs=
A._NewObject(A.Device.AxK,0);Azs.OnSetTimestamp(1770735487);Azs.AFD(1);Azs.AFJ(0
);Azs.AFT(6);this.R7=Azs;var AlU=A._NewObject(A.Device.Avy,0);AlU.AFA(1);AlU.AFB(
0);AlU.AFz(0);AlU.AF7(1);AlU.AF8(0);AlU.AF6(0);AlU.OnSetTimestamp(1770735487);this.
Q2=AlU;var Aml=A._NewObject(A.Device.Avy,0);Aml.AFA(1);Aml.AFB(0);Aml.AFz(0);Aml.
AF7(1);Aml.AF8(0);Aml.AF6(0);Aml.OnSetTimestamp(1770735487);this.S7=Aml;this.AhH=
A.aaR(A.acf.Unknown);},A3J:function(G){var K=this.K;var B;var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;if(Ar.PopupState===7){K.BzK.call(this,this.
FU.FileName,Oi,(C.V0.isPrototypeOf(B=this.FU)?B:null).Au$);this.FU.FD();}else if(
Ar.PopupState===8)this.FU.FD();},BjG:function(AoA){var AJ9=A.jV;var Ac=A._NewObject(
A.Core.Bq,0);Ac.Initialize(A._GetAutoObject(A.Device.Helper).Dr());switch(AoA){case
0:AJ9=Ac.Format(Rn);break;case 1:AJ9=Ac.Format(Xf);break;case 2:AJ9=Ac.Format(Xg
);break;default:throw new Error(UY+AoA.toFixed());}return AJ9;},BzK:function(aFilename
,aMimeType,aContent){{var bb=new Blob([aContent],{type:aMimeType});var a=document.
createElement('a');a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.
click();}},_Init:function(aArg){var K=this.K;A.acl.Go._Init.call(K.Ai0={I:this},
0);A.acl.Go._Init.call(K.AaW={I:this},0);K.__proto__=C.DeviceClass;this.Awx(100);
this.AnC(1);this.ArU(200);this.ArT(100);this.Ar0(276000912345678);this.ArZ(276000923456789
);this.ArV(500);this.Ar1(276000901234567);this.N7(1);K.Ai0.HP(1);K.Ai0.Fp(1000);
K.AaW.WN(0);K.AaW.HP(1);K.AaW.Fp(750);K.AaW.B3=50000;this.FU=A._NewObject(C.V0,0
);K.Ai0.SJ=[this,K.BCs];K.Auq=A._GetAutoObject(C.UG);K.AaW.SJ=[this,K.BDp];K.AaW.
Q=[this,this.AEZ,this.AI5];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai0._Done();K.AaW._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai0._ReInit();K.AaW._ReInit();K.CP.call(this);},_Mark:function(D){
var B;if((B=this.Auq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaW)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AHg={A6:0,_Init:function(aArg){C.WA._Init.call(this,aArg);this.__proto__=C.AHg;
},_className:"DeviceSimulation::UInt8"};C.AHe={A6:0,_Init:function(aArg){C.WA._Init.
call(this,aArg);this.__proto__=C.AHe;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A4U:0,AFZ:function(E){var K=this.K;K.A4U=K.A4U+(E-this.Dr());A.Device.
HelperClass.Bbk.call(this,E);},Dr:function(){var K=this.K;return A.Device.HelperClass.
Bbg.call(this)+K.A4U;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$6={AxG:true,AGV:false,ATP:function(E){if(this.AGV===E)return;this.AGV=E;A.
abo([this,this.A9J,this.ATP],0);},A9J:function(){return this.AGV;},ATQ:function(
E){if(this.AxG===E)return;this.AxG=E;A.abo([this,this.A9K,this.ATQ],0);},A9K:function(
){return this.AxG;},_Init:function(aArg){this.__proto__=C.A$6;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UG={_Init:function(){C.A$6._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UG._variants();
},_this:null};C.PopupContext={EV:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cs:function(
AL){var II=A.Device.Rating.Bbm.call(this,AL);if(II){var RA=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LZ(0,this.AnimalId);if(Ad
!==-1){var Mm=RA.QE();if(Mm<=0)A.ab5("%s",U1);else{var CU=A._NewObject(A.Device.
Animal,0);CU.Fl(Ad,RA);if((this.Temperature>0)&&(CU.TimestampLastTemperature<this.
Timestamp)){RA.A$Y(Ad,5,this.Temperature);RA.AkP(Ad,17,this.RatingTemperature);RA.
Acr(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(CU.TimestampLastWeighing<=this.
Timestamp){RA.AUW(Ad,18,this.BodyWeight);RA.Acr(Ad,19,this.Timestamp);}if(!CU.TimestampFirstWeighing||(
CU.TimestampFirstWeighing>=this.Timestamp)){RA.AUW(Ad,23,this.BodyWeight);RA.Acr(
Ad,24,this.Timestamp);RA.HS(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGu(this)){var LW=A._GetAutoObject(A.Device.Helper).ADn(this);RA.AkP(Ad,13,LW);
RA.Acr(Ad,31,this.Timestamp);}RA.QI(Mm);}}}return II;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.S0={Gk:A.abi(512,null,null),RQ:0,AJD:
0,ALj:0,A4X:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKS:0,A4o:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BeL:512,A1S:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1,12:1,13:
1,14:1}),AiD:false,CE:function(Ad,Bc){var Bj=this.YA(Ad);if(!!Bj)return Bj.CE(Bc
);return 0;},H6:function(Ad,Bc){var Bj=this.YA(Ad);if(!!Bj)return Bj.H6(Bc);return false;
},V7:function(Ad,Bc){var Bj=this.YA(Ad);if(!!Bj)return Bj.V7(Bc);return 0;},Sq:function(
Ad,Bc){var Bj=this.YA(Ad);if(!!Bj)return Bj.Sq(Bc);return 0;},QE:function(){if(this.
AiD)throw new Error(Xh);this.AiD=true;return 12345;},QI:function(AoN){if(!this.AiD
)throw new Error(Aag);if(AoN!==12345)throw new Error(Xi);this.AiD=false;return true;
},AbK:function(){return this.A5q(A._NewObject(C.AGD,0));},ZR:function(Ad,Bc,Dx){
var Bj=this.YA(Ad);if(!!Bj)return Bj.ZR(Bc,Dx);return false;},HS:function(Ad,Bc,
Dx){var Bj=this.YA(Ad);if(!!Bj)return Bj.HS(Bc,Dx);return false;},ZQ:function(Ad
,Bc,Dx){var Bj=this.YA(Ad);if(!!Bj)return Bj.ZQ(Bc,Dx);return false;},Ob:function(
Ad,Bc,Dx){var Bj=this.YA(Ad);if(!!Bj)return Bj.Ob(Bc,Dx);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bdq();switch(this.Id){case 0:{this.
BeL=256;A.pe([this,this.Bxf],this);}break;case 1:A.pe([this,this.Bxh],this);break;
case 3:A.pe([this,this.Bxg],this);break;case 2:break;default:throw new Error(U2+
this.Id.toFixed());}},B9:function(){return this.RQ;},KS:function(Ad,Bc){var Bj=this.
YA(Ad);if(!!Bj)return Bj.KS(Bc);return 0;},UF:function(Ad,Bc,Dx){var Bj=this.YA(
Ad);if(!!Bj)return Bj.UF(Bc,Dx);return false;},FD:function(){this.Bdq();return true;
},A5q:function(Ad){if(this.RQ>=512)throw new Error(Xj);this.Gk.Set(this.RQ,Ad);this.
RQ=this.RQ+1;switch(this.Id){case 0:case 1:this.HS(this.RQ-1,0,this.RQ-1);break;
default:;}A.pe([this,this.Ann],this);return this.RQ-1;},YA:function(aIndex){if((
aIndex<0)||(aIndex>=512))return null;return this.Gk.Get(aIndex);},Bdq:function(){
var O;for(O=0;O<512;O=O+1)this.Gk.Set(O,null);this.RQ=0;this.AJD=0;this.AKS=0;this.
ALj=0;A.pe([this,this.Ann],this);},AKm:function(){this.AJD=(this.AJD+1)%15;return this.
A1S.Get(this.AJD);},A2I:function(){this.ALj=(this.ALj+1)%10;return this.A4X.Get(
this.ALj);},AJ_:function(G){if(this.K&&this.K.AJ_)return this.K.AJ_.apply(this,arguments
);else return C.S0.Bxn.apply(this,arguments);},Bxn:function(G){var B;var Os=true;
this.A2(276000312310001,10,1,A._GetAutoObject(A.Device.Helper).AhN(12),0,1,true,
true,false,true,39000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.
Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(12310020,20,12,A._GetAutoObject(
A.Device.Helper).AhN(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0
,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312310021,10,1,A._GetAutoObject(A.Device.Helper).AhN(9),0,0,
true,false,false,true,37200,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310022
,20,2,A._GetAutoObject(A.Device.Helper).AhN(830),0,1,false,false,false,true,41200
,A._GetAutoObject(A.Device.Helper).AhN(1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310023
,20,2,A._GetAutoObject(A.Device.Helper).AhN(1200),0,1,false,false,false,true,43500
,A._GetAutoObject(A.Device.Helper).AhN(8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310026
,20,2,A._GetAutoObject(A.Device.Helper).AhN(8),0,0,true,false,false,true,34000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);var O;var Bg6=0;for(O=1;O<=7;O=O+1){Bg6=3680+(20*O);Os=Bg6>
3800;this.A2(276000312310050+(((B=O)<0)?B+0x10000000000000000:B),30+(O%3),3,A._GetAutoObject(
A.Device.Helper).AhN(7-O),0,1,Os,false,false,true,36000+(O*900),0,0,false,0,true
,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.
Device).AF);}},Bxf:function(s){this.AJ_(s);},AKa:function(G){if(this.K&&this.K.AKa
)return this.K.AKa.apply(this,arguments);else return C.S0.Bxp.apply(this,arguments
);},Bxp:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Dr();var O;Ac=Ac-2678400;
var Aiy;var BdI;for(O=0;O<32;O=O+1){var A2s=this.Bz$();for(;A2s>0;A2s=A2s-1){Aiy=
this.A2I();BdI=A._GetAutoObject(A.Device.Converter).AsJ(0,Aiy);this.AG(Ac,12310020
,Aiy,BdI,this.AKm(),this.AKm(),this.AKm(),this.AKm(),0);}Ac=Ac+86400;}Ac=Ac-86400;
this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-86400,276000312310001,0,0,0,0,
0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,51000);Aiy=this.A2I();this.AG(
Ac,276000312310001,Aiy,A._GetAutoObject(A.Device.Converter).AsJ(0,Aiy),1,3,3,3,0
);Aiy=this.A2I();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(A.Device.
Converter).AsJ(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aiy,A._GetAutoObject(
A.Device.Converter).AsJ(1,Aiy),2,3,3,3,0);},Bxh:function(s){this.AKa(s);},A2:function(
Jn,BxO,Bx4,Bcu,Atr,L$,BxV,Bx0,BxX,BxY,MX,Bxz,Bx2,BxW,Eo,BxZ,Ac0,AJe,AfO,Bx9,BAu,
BAv,BxE,Bx$){var CU=A._NewObject(A.Device.Animal,0);CU.G8();CU.Axl(0);CU.Ae8(0);
CU.Uw(false);CU.Akx(false);if(BAv)CU.PX(Jn);if(BAu)CU.Nr(Jn);CU.SQ(A._GetAutoObject(
A.Device.Helper).TT(Jn,Bx$&0xFF,BxE&0xFF)|0);CU.Ab9(BxO);CU.AnD(Bx4);CU.Q6(Bcu);
CU.Akr(Atr);CU.J1(L$);CU.AnU(BxV);CU.AGO(Bx0);CU.Ae4(BxY);CU.Uw(BxX);CU.ArW(BxW);
CU.AwT(Bx2);CU.AwE(Bxz);CU.EC(Eo);CU.Ae5(BxZ);CU.N7(Ac0);CU.Akt(AJe);CU.Nt(AfO);
CU.AnF(Bx9);CU.Cs(this);if(MX>0)A._GetAutoObject(C.Asl).AG(Bcu,Jn,0,0,0,0,0,0,MX
);},AG:function(L_,AcY,AoL,Byi,BxI,BxJ,Bxs,Byk,Bxu){var B2=A._NewObject(A.Device.
Rating,0);B2.G8();var Bc_=A._GetAutoObject(C.Amx).AOE(26,AcY);if(Bc_>=0)B2.OnSetAnimalId(
A._GetAutoObject(C.Amx).CE(Bc_,0));else A.ab5("%s%U",Xk,AcY);B2.OnSetTimestamp(L_
);B2.OnSetTemperature(AoL);B2.OnSetRatingTemperature(Byi);B2.OnSetFaeces(BxI);B2.
OnSetFeed(BxJ);B2.OnSetAppearance(Bxs);B2.OnSetRespiratory(Byk);B2.OnSetBodyWeight(
Bxu);B2.Cs(this);},A61:function(aColumn,A9){var O;for(O=0;O<this.RQ;O=O+1)if(this.
Gk.Get(O).CE(aColumn)===A9)return O;return-1;},Bz$:function(){this.AKS=(this.AKS+
1)%10;return this.A4o.Get(this.AKS);},HL:function(){return this.BeL;},AOE:function(
aColumn,A9){var O;for(O=0;O<this.RQ;O=O+1)if(this.Gk.Get(O).KS(aColumn)===A9)return O;
return-1;},AJ$:function(G){if(this.K&&this.K.AJ$)return this.K.AJ$.apply(this,arguments
);else return C.S0.Bxo.apply(this,arguments);},Bxo:function(G){this.AaE(2016,216
,6);this.AaE(2017,217,7);this.AaE(2018,218,8);this.AaE(2019,219,9);this.AaE(2020
,220,10);this.AaE(2021,221,11);},Bxg:function(s){this.AJ$(s);},AaE:function(Ac6,
BxD,BxC){var Ve=A._NewObject(A.Device.CalfDeregistrations,0);Ve.G8();Ve.AkC(Ac6);
Ve.AwG(BxD);Ve.AwF(BxC);Ve.Cs(this);},_Init:function(aArg){A.Device.ITable._Init.
call(this,aArg);(this.Gk=[]).__proto__=C.S0.Gk;(this.A4X=[]).__proto__=C.S0.A4X;(
this.A4o=[]).__proto__=C.S0.A4o;(this.A1S=[]).__proto__=C.S0.A1S;this.__proto__=
C.S0;var J$=this._variants();if(J$){this.K={};J$._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=A.Device.ITable;A.Device.
ITable._Done.call(this);},_ReInit:function(){A.Device.ITable._ReInit.call(this);
if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Device.ITable._Mark.
call(this,D);A.aa6(this.Gk,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.S0._variants();},K:null,_className:"DeviceSimulation::TableData"};C.Amx={_Init:
function(){C.S0._Init.call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Asl={_Init:function(){C.S0._Init.call(this
,0);this.OnSetId(1);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Hv={AlJ:A.abi(512,null,null),FK:null,Apd:0,CE:function(Ad,Bc){var Bj=this.
Af6(Ad);if(!!Bj)return Bj.CE(Bc);return 0;},H6:function(Ad,Bc){var Bj=this.Af6(Ad
);if(!!Bj)return Bj.H6(Bc);return false;},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;switch(this.Id){case 0:this.AT6(A._GetAutoObject(C.Amx));break;case 1:
this.AT6(A._GetAutoObject(C.Asl));break;case 3:this.AT6(A._GetAutoObject(C.AuY));
break;case 2:break;default:throw new Error(U2+this.Id.toFixed());}},B9:function(
){if(!!this.Filter)return this.Apd;else if(!!this.FK)return this.FK.RQ;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1Q(this);},V7:function(Ad
,Bc){var Bj=this.Af6(Ad);if(!!Bj)return Bj.V7(Bc);return 0;},Sq:function(Ad,Bc){
var Bj=this.Af6(Ad);if(!!Bj)return Bj.Sq(Bc);return 0;},QE:function(){if(!!this.
FK)return this.FK.QE();return-1;},QI:function(AoN){var II=false;if(!!this.FK)II=
this.FK.QI(AoN);if(II)A.pe([this,this.A1Q],this);return II;},AbK:function(){if(!
!this.Filter)throw new Error(Xl+A._GetAutoObject(A.Device.Converter).Bjl(this.Id
,this.Filter));if(!!this.FK)return this.FK.A5q(A._NewObject(C.AGD,0));return-1;}
,ZR:function(Ad,Bc,Dx){if(!this.FK.AiD)throw new Error(Ro);var Bj=this.Af6(Ad);if(
!!Bj)return Bj.ZR(Bc,Dx);return false;},HS:function(Ad,Bc,Dx){if(!this.FK.AiD)throw new
Error(Ro);var Bj=this.Af6(Ad);if(!!Bj)return Bj.HS(Bc,Dx);return false;},ZQ:function(
Ad,Bc,Dx){if(!this.FK.AiD)throw new Error(Ro);var Bj=this.Af6(Ad);if(!!Bj)return Bj.
ZQ(Bc,Dx);return false;},Ob:function(Ad,Bc,Dx){if(!this.FK.AiD)throw new Error(Ro
);var Bj=this.Af6(Ad);if(!!Bj)return Bj.Ob(Bc,Dx);return false;},LZ:function(aColumn
,A9){if(!!this.Filter){var O;for(O=0;O<this.Apd;O=O+1)if(this.AlJ.Get(O).CE(aColumn
)===A9)return O;return-1;}else if(!!this.FK)return this.FK.A61(aColumn,A9);return-
1;},KS:function(Ad,Bc){var Bj=this.Af6(Ad);if(!!Bj)return Bj.KS(Bc);return 0;},UF:
function(Ad,Bc,Dx){if(!this.FK.AiD)throw new Error(Ro);var Bj=this.Af6(Ad);if(!!
Bj)return Bj.UF(Bc,Dx);return false;},Aes:function(aColumn,A9){if(!!this.Filter){
var O;for(O=0;O<this.Apd;O=O+1)if(this.AlJ.Get(O).KS(aColumn)===A9)return O;return-
1;}else if(!!this.FK)return this.FK.AOE(aColumn,A9);return-1;},FD:function(){if(
!!this.FK)return this.FK.FD();return false;},AjH:function(aColumn,A9){if(!!this.
FK)return this.FK.A61(aColumn,A9)>=0;return false;},Ael:function(aColumn,A9){if(
!!this.FK)return this.FK.AOE(aColumn,A9)>=0;return false;},HL:function(){if(!!this.
FK)return this.FK.HL();return 0;},QL:function(){if(!!this.FK)return this.FK.RQ;return 0;
},A1Q:function(G){this.A14();if(!!this.Filter&&!!this.FK){var O;for(O=0;O<this.FK.
B9();O=O+1){var A2w=true;var Aw=this.Filter.AOR();var Bj=this.FK.YA(O);if(!!Bj)while(
A2w&&!!Aw){A2w=Bj.Bkl(Aw);Aw=this.Filter.AOW(Aw);}else A.ab5("%s",((Th+O.toFixed(
))+Aah)+this.FK.B9().toFixed());if(A2w){this.AlJ.Set(this.Apd,this.FK.Gk.Get(O));
this.Apd=this.Apd+1;}}}A.pe([this,this.Ann],this);},A14:function(){var O;for(O=0;
O<512;O=O+1)this.AlJ.Set(O,null);this.Apd=0;},AT6:function(E){if(this.FK===E)return;
if(!!this.FK)A.z9([this,this.A4V],this.FK,0);this.FK=E;if(!!this.FK){A.zV([this,
this.A4V],this.FK,0);A.pe([this,this.A4V],this);}},A4V:function(G){A.pe([this,this.
A1Q],this);},Af6:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=512)
)return null;else return this.AlJ.Get(aIndex);}else if(!!this.FK)return this.FK.
YA(aIndex);A.ab5("%s",AfC+aIndex.toFixed());return null;},_Init:function(aArg){A.
Device.ITable._Init.call(this,aArg);(this.AlJ=[]).__proto__=C.Hv.AlJ;this.__proto__=
C.Hv;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.AlJ
,D);if((B=this.FK)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A$7={KM:null,AdI:null,OE:null,AMX:false,AB$:true,A4O:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).Acc(1);this.
AdI.As(true);}break;case 1:{A._GetAutoObject(A.Device.Device).Acc(2);A._GetAutoObject(
A.Device.Device).Ar_(A._GetAutoObject(A.Device.Device).An.QL());this.KM.Fp(A._GetAutoObject(
A.Device.Device).Afs*50);this.KM.B3=A._GetAutoObject(A.Device.Device).Afs;this.KM.
As(true);}break;case 2:{A._GetAutoObject(A.Device.Device).Acc(3);this.AdI.As(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).Acc(4);A._GetAutoObject(A.Device.
Device).Ar_(A._GetAutoObject(A.Device.Device).An.QL());this.KM.Fp(A._GetAutoObject(
A.Device.Device).Afs*50);this.KM.B3=A._GetAutoObject(A.Device.Device).Afs;this.KM.
As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Acc(5);this.AdI.As(true
);}break;case 5:A.pe([this,this.BgY],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",Aai,A._GetAutoObject(A.Device.Device).SyncState);}},BBO:function(G){this.
AdI.As(false);A.pe([this,this.A4O],this);},BCR:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).Acc(0);A.pe([this,this.A4O],this);}break;default:;}},BgY:function(G){this.AdI.
As(false);this.KM.As(false);A._GetAutoObject(A.Device.Device).Acc(0);},Aww:function(
E){if(this.AB$===E)return;this.AB$=E;A.abo([this,this.Bll,this.Aww],0);},Aqm:function(
G){var B;this.OE.Cy=true;this.OE.B3=false;this.OE.Fp(100);this.OE.HP(1);this.OE.
Q=[this,this.ASE,this.ATb];A.pe([B=this.OE,B.AnW],this);},Bh3:function(G){var B;
this.OE.Cy=true;this.OE.B3=false;this.OE.Fp(400);this.OE.Uv(200);this.OE.HP(3);this.
OE.Q=[this,this.ASE,this.ATb];this.Aww(false);A.pe([B=this.OE,B.AnW],this);},ATb:
function(E){if(this.AMX===E)return;this.AMX=E;A.abo([this,this.ASE,this.ATb],0);
},Aqn:function(G){var B;this.OE.AnY(this);this.Aww(false);},ByD:function(XJ){var
ALx=A._NewObject(A.Device.AVV,0);if(XJ){ALx.AT3(6);ALx.ATF(16900);ALx.AT5(1529);
}A._GetAutoObject(A.Device.Device).Axh(ALx);this.Aww(XJ);},Bll:function(){return this.
AB$;},ASE:function(){return this.AMX;},_Init:function(aArg){A.acl.Go._Init.call(
this.KM={I:this},0);A.Core.Timer._Init.call(this.AdI={I:this},0);A.acl.TN._Init.
call(this.OE={I:this},0);this.__proto__=C.A$7;var B;this.KM.HP(1);this.AdI.PW(2000
);this.KM.SJ=[this,this.A4O];this.KM.Q=[B=A._GetAutoObject(A.Device.Device),B.AS3
,B.A0S];this.AdI.MK=[this,this.BBO];A.h7++;},_Done:function(){this.__proto__=null;
this.KM._Done();this.AdI._Done();this.OE._Done();A.h7--;},_ReInit:function(){this.
KM._ReInit();this.AdI._ReInit();this.OE._ReInit();},_Mark:function(D){var B;if((
B=this.KM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.WY={_Init:function(){C.A$7._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AHf={A6:0,_Init:function(aArg){C.WA._Init.
call(this,aArg);this.__proto__=C.AHf;},_className:"DeviceSimulation::UInt64"};C.
AuY={_Init:function(){C.S0._Init.call(this,0);this.OnSetId(3);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Dv:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
BI.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X9={Ad7:null,CC:function(G){var K=this.K;A.ab5("%s",Xm);K.Ad7.As(true);},E3:
function(G){var K=this.K;if(K.Ad7.Bw===true){K.Ad7.As(false);A.ab5("%s",Aaj);}},
Blc:function(G){var K=this.K;K.Ad7.As(false);A._GetAutoObject(A.kR.A5).Acd(A._GetAutoObject(
A.Device.Device).AxN);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad7={I:this},0);K.__proto__=C.X9;this.AeO.H(Aak);K.Ad7.PW(1500);this.UH.R(AhT);
this.UH.Z(true);this.AeO.Ax(A.aaL(A.ach.ARP));K.Ad7.MK=[this,K.Blc];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad7._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad7._ReInit();},_Mark:function(D){var B;if((B=this.Ad7)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.V0={Au$:A.jV,FD:function(){A.Device.V0.FD.call(this);this.Au$=A.jV;},_Init:function(
aArg){A.Device.V0._Init.call(this,aArg);this.__proto__=C.V0;},_className:"DeviceSimulation::DataExportContext"
};C.A6l={Bzo:function(Xp){var B;var RE;var CU=A._NewObject(A.Device.Animal,0);var
O;var Amc=0;RE=K2;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){CU.Fl(
O,A._GetAutoObject(A.Device.Device).An);if(CU.IsRegistrationNoticePending&&(CU.NaisId>
0)){RE=RE+this.BzO(CU);Amc++;}}Xp.Au$=RE;Xp.AGE=Amc;Xp.E4(3);},Apg:function(Rs){
if(!Rs)return A.jV;return Rs.toFixed();},A2E:function(AoB){var Av=A._NewObject(A.
Core.Bq,0);Av.Initialize(AoB);return Av.Format(Aal);},BdR:function(Ac0){if(!Ac0)
return A.jV;return A._GetAutoObject(A.Device.Converter).A52(Ac0).toFixed();},BdQ:
function(L$){var result=A.jV;switch(L$){case 0:result=LB;break;case 1:result=AhU;
break;case 2:result=A.jV;break;default:A.ab5("%s",Ak9+L$.toFixed());}return result;
},BzR:function(AJe){if(!AJe)return A.jV;return AJe.toFixed();},BdS:function(AfO){
if(!AfO)return A.jV;return AfO.toFixed();},BzV:function(Atr){return(Atr+1).toFixed(
);},Bzl:function(Xp){var B;var RE=A.jV;var CU=A._NewObject(A.Device.Animal,0);var
O;var Amc=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){var Azo=A.jV;
if(CU.Arg())Azo=this.BzZ(CU.FirstBodyWeight);CU.Fl(O,A._GetAutoObject(A.Device.Device
).An);RE=RE+(((((((((((this.Apg(CU.NaisId)+String.fromCharCode(0x3B))+this.BzT(CU.
VisualId))+String.fromCharCode(0x3B))+this.Apg(CU.TransponderId))+String.fromCharCode(
0x3B))+this.BzP(CU.DateOfBirth))+String.fromCharCode(0x3B))+this.BzY(CU.Gender))+
String.fromCharCode(0x3B))+Azo)+LA);Amc++;}Xp.Au$=RE;Xp.AGE=Amc;Xp.E4(3);},BzT:function(
Rs){return Rs.toFixed();},BzY:function(L$){var result=A.jV;switch(L$){case 0:result=
Oj;break;case 1:result=Xn;break;case 2:result=Aoe;break;default:A.ab5("%s",Ak9+L$.
toFixed());}return result;},BzZ:function(MX){if(MX<=0)return A.jV;return A._GetAutoObject(
A.Device.Converter).Ak6(MX);},BzP:function(AoB){var Av=A._NewObject(A.Core.Bq,0);
Av.Initialize(AoB);return Av.Format(AfD);},Bzq:function(Xp){var B;var RE;var CU=
A._NewObject(A.Device.Animal,0);var O;var Amc=0;switch(Xp.B6){case 1:RE=this.BAa(
);break;default:RE=this.BAb();}for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9(
);O++){CU.Fl(O,A._GetAutoObject(A.Device.Device).An);if(CU.IsRegistrationNoticePending&&(
CU.NaisId>0)){switch(Xp.B6){case 1:RE=RE+this.BzW(CU);break;default:RE=RE+this.BzX(
CU);}Amc++;}}Xp.Au$=RE;Xp.AGE=Amc;Xp.E4(3);},BzX:function(C5){return((((((((((((
this.Apg(C5.NaisId)+String.fromCharCode(0x3B))+this.A2E(A._GetAutoObject(A.Device.
Helper).Dr()))+String.fromCharCode(0x3B))+this.A2E(C5.DateOfBirth))+String.fromCharCode(
0x3B))+this.BdQ(C5.Gender))+String.fromCharCode(0x3B))+this.BdS(C5.WhereAbouts))+
String.fromCharCode(0x3B))+this.BdR(C5.Breed))+String.fromCharCode(0x3B))+this.Apg(
A._GetAutoObject(A.Device.Device).PZ))+LA;},BzO:function(C5){return((((((((((((((((
this.Apg(A._GetAutoObject(A.Device.Device).PZ)+String.fromCharCode(0x3B))+this.Apg(
C5.NaisId))+String.fromCharCode(0x3B))+this.A2E(C5.DateOfBirth))+String.fromCharCode(
0x3B))+this.BdR(C5.Breed))+String.fromCharCode(0x3B))+this.BdQ(C5.Gender))+String.
fromCharCode(0x3B))+this.BzR(C5.EaseOfDelivery))+String.fromCharCode(0x3B))+this.
BdS(C5.WhereAbouts))+String.fromCharCode(0x3B))+this.BzV(C5.BirthType))+String.fromCharCode(
0x3B))+this.Apg(C5.NaisIdMother))+LA;},BzW:function(C5){return(((AhV+this.BzS(C5.
NaisId))+String.fromCharCode(0x3B))+this.BzQ(A._GetAutoObject(A.Device.Helper).Dr(
)))+LA;},BzQ:function(AoB){var Av=A._NewObject(A.Core.Bq,0);Av.Initialize(AoB);return Av.
Format(Aal);},BzS:function(Jn){var A2P=Jn.toFixed();var Beh=A2P.length;if((Beh>=
14)&&(Beh<=15)){var Az6=A._GetAutoObject(A.Device.Converter).AsQ(Jn);var A16=A._GetAutoObject(
A.Device.Converter).A6k(Az6);A2P=A16+A._GetAutoObject(A.Device.Helper).TT(Jn,0,12
).toFixed();}return A2P;},BAb:function(){return AcP;},BAa:function(){return A.jV;
},_Init:function(aArg){this.__proto__=C.A6l;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::CsvDataExporter"
};
C._Init=function(){C.AD8.__proto__=C.WA;C.String.__proto__=C.WA;C.ACc.__proto__=C.
WA;C.AHg.__proto__=C.WA;C.AHe.__proto__=C.WA;C.S0.__proto__=A.Device.ITable;C.Hv.
__proto__=A.Device.ITable;C.AHf.__proto__=C.WA;C.V0.__proto__=A.Device.V0;};C._ReInit=
function(){var B;if((B=C.UG._this))B._ReInit(),C.UG._ReInit.call(B);if((B=C.Amx.
_this))B._ReInit(),C.Amx._ReInit.call(B);if((B=C.Asl._this))B._ReInit(),C.Asl._ReInit.
call(B);if((B=C.WY._this))B._ReInit(),C.WY._ReInit.call(B);if((B=C.AuY._this))B.
_ReInit(),C.AuY._ReInit.call(B);};C.DJ=function(D){var B;if((B=C.UG._this)&&(B._cycle
!=D))B._Done(C.UG._this=null);if((B=C.Amx._this)&&(B._cycle!=D))B._Done(C.Amx._this=
null);if((B=C.Asl._this)&&(B._cycle!=D))B._Done(C.Asl._this=null);if((B=C.WY._this
)&&(B._cycle!=D))B._Done(C.WY._this=null);if((B=C.AuY._this)&&(B._cycle!=D))B._Done(
C.AuY._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */