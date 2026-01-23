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
var Cf="ERROR: access to null Bool data in column [";var BD="]";var E6="Access to inexistent column index: ";
var Hq=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I0="Unsupported filter criterion class";var
Iv="Operator not handled:";var O9="1,8";var P_="INFO: Device.StartScan() called.";
var P$="INFO: Device.StopScan() called.";var CR="V0.";var Fc=".";var L8="\n";var
Qa="Temp: ";var J9="Battery: ";var Oh="%%";var Qb="Selected animal with row index";
var MR="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Te="1,2";var UW="0,1,2";var Z8="3900,3950,4000";var W$="4050,4100,4150";var Iw="Read only";
var UX="Unknown data export type: ";var Z9="Unhandled Device::DataExportType: ";
var UY="0,2,1";var Z_="650,150,700";var Xa="800,200,900";var Z$="800,200,850";var
Aaa="40000,4000,0";var UZ="32,7,34,18,23,14";var Xb="16384";var O_="1,1024";var Aab=
"Simulate Scan";var Oi="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Rn="%d.%m.%Y";var Xc="1";var Xd="2";var Tf="Unknown gender: ";var Xe="text/csv";
var Aac="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Xf="hit-geburt-%d-%m-%Y_%H-%M.csv";var Xg="animals-%d-%m-%Y_%H-%M.csv";var Xh=
"zugang-%d-%m-%Y_%H-%M.csv";var Xi="M";var Xj="F";var Aad="?";var Tg="%Y-%m-%d";
var Aae="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var AfB="ERROR: Cannot start transaction";
var Aaf="Nested transactions are not allowed.";var Xk="Transaction not opened.";
var Aag="Wrong transaction ID.";var Xl="Unhandled TableId:";var AhS="Maximum number of rows reached.";
var K2="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var AcL=
"Severe: filter set when inserting row into table: ";var JE="Warning: DeviceSimulation::TableData not in transaction";
var AhT="ERROR: Row not found with index [";var Aoc="] while Rows Count = ";var Oj=
"ERROR: trying to access an inexistent row with Index=";var Xm="Invalid Device::SyncState";
var Aod="Forwarding to home screen after 500 milliseconds ...";var AfC="Forwarding to home screen canceled...";
var AhU=[0,58,240,208];var AcM="VitalControl\nstarting up \u2026";
C.Table={Hu:null,Init:function(aArg){var K=this.K;A.zV([this,this.Anm],K.Hu,0);},
CE:function(Ad,Bc){var K=this.K;return K.Hu.CE(Ad,Bc);},H6:function(Ad,Bc){var K=
this.K;return K.Hu.H6(Ad,Bc);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;
this.Id=E;K.Hu.OnSetId(E);},B8:function(){var K=this.K;return K.Hu.B8();},Bk:function(
E){var K=this.K;A.Device.ITable.Bk.call(this,E);K.Hu.Bk(E);},V5:function(Ad,Bc){
var K=this.K;return K.Hu.V5(Ad,Bc);},So:function(Ad,Bc){var K=this.K;return K.Hu.
So(Ad,Bc);},QE:function(){var K=this.K;return K.Hu.QE();},QI:function(AoM){var K=
this.K;return K.Hu.QI(AoM);},AbG:function(){var K=this.K;return K.Hu.AbG();},ZN:
function(Ad,Bc,Dw){var K=this.K;return K.Hu.ZN(Ad,Bc,Dw);},HR:function(Ad,Bc,Dw){
var K=this.K;return K.Hu.HR(Ad,Bc,Dw);},ZM:function(Ad,Bc,Dw){var K=this.K;return K.
Hu.ZM(Ad,Bc,Dw);},Ob:function(Ad,Bc,Dw){var K=this.K;return K.Hu.Ob(Ad,Bc,Dw);},
LY:function(aColumn,A9){var K=this.K;return K.Hu.LY(aColumn,A9);},KS:function(Ad
,Bc){var K=this.K;return K.Hu.KS(Ad,Bc);},UE:function(Ad,Bc,Dw){var K=this.K;return K.
Hu.UE(Ad,Bc,Dw);},Aer:function(aColumn,A9){var K=this.K;return K.Hu.Aer(aColumn,
A9);},FD:function(){var K=this.K;return K.Hu.FD();},AjH:function(aColumn,A9){var
K=this.K;return K.Hu.AjH(aColumn,A9);},Aek:function(aColumn,A9){var K=this.K;return K.
Hu.Aek(aColumn,A9);},HK:function(){var K=this.K;return K.Hu.HK();},QL:function(){
var K=this.K;return K.Hu.QL();},_Init:function(aArg){var K=this.K;C.Hu._Init.call(
K.Hu={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Hu._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.Hu._ReInit();},_Mark:function(D){var B;if((B=this.Hu)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGC={Vf:A.abi(42,null,null),CE:function(aColumn){var B;this.Ac6(aColumn);var Aq=(
C.AD6.isPrototypeOf(B=this.Vf.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;
},BjJ:function(aColumn){var B;this.Ac6(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Vf.Get(aColumn))?B:null);if(!!Aq)return A.jV;return A.jV;},H6:function(aColumn
){var B;this.Ac6(aColumn);var Aq=(C.ACa.isPrototypeOf(B=this.Vf.Get(aColumn))?B:
null);if(!!Aq)return Aq.A6;else A.ab5("%s",(Cf+aColumn.toFixed())+BD);return false;
},HR:function(aColumn,A9){this.Ac6(aColumn);var Aq=A._NewObject(C.AD6,0);Aq.A6=A9;
this.Vf.Set(aColumn,Aq);return true;},Ob:function(aColumn,A9){this.Ac6(aColumn);
var Aq=A._NewObject(C.ACa,0);Aq.A6=A9;this.Vf.Set(aColumn,Aq);return true;},Ac6:
function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((E6+aColumn.toFixed(
))+Hq);},Bkb:function(AH){if(!!(A.Device.Int32FilterCriterion.isPrototypeOf(AH)?
AH:null))return this.AJO(this.CE(AH.EJ),AH.Operator,(A.Device.Int32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.UInt32FilterCriterion.isPrototypeOf(
AH)?AH:null))return this.By4(this.So(AH.EJ),AH.Operator,(A.Device.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.By3(this.BjJ(AH.EJ),AH.Operator,(A.Device.StringFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.By2(this.H6(AH.EJ),AH.Operator,(A.Device.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJO(this.CE(AH.EJ),AH.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJO(this.CE(AH.EJ),AH.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.By7(this.V5(AH.EJ),AH.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A6)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.By5(this.KS(AH.EJ),AH.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.By6(this.KS(AH.EJ),AH.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null).A6,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null).Zo&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AH)?AH:null).OI&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJO(this.CE(AH.EJ),AH.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else throw new Error(I0);},AJO:function(Fs,Eb,GA){
switch(Eb){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<GA;case 4:
return Fs.toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:throw new
Error(Iv+Eb.toFixed());}},By3:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;
case 2:return Fs>GA;case 3:return Fs<GA;case 4:{A.ab5("%s%e%s%i",Fs,Eb,GA,Fs.indexOf(
GA,0));return Fs.indexOf(GA,0)>=0;}case 5:return Fs!==GA;default:throw new Error(
Iv+Eb.toFixed());}},By2:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case
2:case 3:case 4:return false;case 5:return Fs!==GA;default:throw new Error(Iv+Eb.
toFixed());}},V5:function(aColumn){var B;this.Ac6(aColumn);var Aq=(C.AHf.isPrototypeOf(
B=this.Vf.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;},ZN:function(aColumn
,A9){this.Ac6(aColumn);var Aq=A._NewObject(C.AHf,0);Aq.A6=A9;this.Vf.Set(aColumn
,Aq);return true;},By7:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case 2:
return Fs>GA;case 3:return Fs<GA;case 4:return Fs.toFixed().indexOf(GA.toFixed()
,0)>=0;case 5:return Fs!==GA;default:throw new Error(Iv+Eb.toFixed());}},So:function(
aColumn){var B;this.Ac6(aColumn);var Aq=(C.AHd.isPrototypeOf(B=this.Vf.Get(aColumn
))?B:null);if(!!Aq)return Aq.A6;return 0;},ZM:function(aColumn,A9){this.Ac6(aColumn
);var Aq=A._NewObject(C.AHd,0);Aq.A6=A9;this.Vf.Set(aColumn,Aq);return true;},By4:
function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<
GA;case 4:return Fs.toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:
throw new Error(Iv+Eb.toFixed());}},KS:function(aColumn){var B;this.Ac6(aColumn);
var Aq=(C.AHe.isPrototypeOf(B=this.Vf.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;
return 0;},UE:function(aColumn,A9){this.Ac6(aColumn);var Aq=A._NewObject(C.AHe,0
);Aq.A6=A9;this.Vf.Set(aColumn,Aq);return true;},By5:function(Fs,Eb,GA){switch(Eb
){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<GA;case 4:return Fs.
toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:throw new Error(
Iv+Eb.toFixed());}},By6:function(Fs,Eb,GA,Atu,AJa){var AK4=Fs.toFixed();AK4=A.ab2(
A.abV(AK4,AK4.length-Atu),AJa);Fs=Math.trunc(Fs/A._GetAutoObject(A.Device.Helper
).ApN(Atu))%A._GetAutoObject(A.Device.Helper).ApN(AJa);var ALw=A.ab0(GA,0,10);switch(
Eb){case 0:return Fs===ALw;case 2:return Fs>ALw;case 3:return Fs<ALw;case 4:return AK4.
indexOf(GA,0)>=0;case 5:return Fs!==ALw;default:throw new Error(Iv+Eb.toFixed());
}},_Init:function(aArg){(this.Vf=[]).__proto__=C.AGC.Vf;this.__proto__=C.AGC;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Vf,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wy={_Init:function(
aArg){this.__proto__=C.Wy;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.AD6={A6:0,_Init:function(aArg){C.Wy._Init.call(this,aArg);this.__proto__=C.AD6;
},_className:"DeviceSimulation::Int32"};C.String={_Init:function(aArg){C.Wy._Init.
call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"};
C.ACa={A6:false,_Init:function(aArg){C.Wy._Init.call(this,aArg);this.__proto__=C.
ACa;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aum:null,Ai0:null,AaS:
null,CP:function(){var K=this.K;K.A$O.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zr(3);A.zX([this,K.BgJ],[B=K.Aum,B.A9x,B.ATL],0);this.UpdateAutoActions(
O9);K.A$O.call(this,this);this.Ass(this);this.Ast(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asq(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=28;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnB(languageValue);A.pe([this
,K.AUd],this);},Zr:function(E){this.UpdateActiveScreen(E);},Awt:function(E){this.
UpdateBatteryChargeState(E);},AFe:function(E){this.UpdateChargeActive(E);},Ar3:function(
E){this.UpdateScanState(E);},AwS:function(E){this.UpdateMeasureState(E);},Aw6:function(
E){this.UpdateTempValue(E);},AnB:function(E){this.UpdateLanguage(E);},Aw7:function(
E){this.UpdateTemperatureUnit(E);},AFc:function(E){this.UpdateBrightness(E);},AFJ:
function(E){this.UpdateMonitoring(E);},AxG:function(){var B;if(A._GetAutoObject(
C.UF).AxA){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AK_(this
);}},AhK:function(){var B;A._GetAutoObject(A.Device.Helper).SZ.AnX(this);this.UpdateMeasureState(
0);},AhH:function(){var K=this.K;A.ab5("%s",P_);this.UpdateScanState(1);A.pe([this
,K.BgJ],this);},AnY:function(){var K=this.K;var B;A.ab5("%s",P$);K.Ai0.AnX(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah7){},Axz:function(){A.Device.
DeviceClass.Bbd.call(this);this.Zr(1);},AGz:function(){A.Device.DeviceClass.Bbb.
call(this);this.Zr(2);},Dv:function(E){this.UpdateOverlayMenu(E);},Axc:function(
E){this.UpdateUnderTemp(E);},Ab_:function(E){this.UpdateSyncState(E);},ADh:function(
){var aString;aString=((((((((((CR+A.abz(0,9).toFixed())+Fc)+A.abz(0,9).toFixed(
))+L8)+Qa)+A.abz(30,90).toFixed())+A.aaR(A.acf.AG3))+L8)+J9)+A.abz(1,100).toFixed(
))+Oh;return aString;},PopupStateChanged:function(K3,Ae){var Agn=A._NewObject(C.
PopupContext,0);Agn.Id=K3;Agn.EN=Ae;this.AnM.Trigger(Agn,false);},AF_:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae_:function(E){this.UpdateVibrationOn(
E);},Aw2:function(E){this.UpdateRatingMode(E);},Ae0:function(E){this.UpdateFlashLightOn(
E);},Uw:function(E){this.UpdateTopLightOn(E);},WJ:function(E){this.UpdateRGBTopLight(
E);},Awr:function(E){this.UpdateAutoRegistrationMode(E);},Ar4:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OS:function(E){this.UpdateDigitsID(
E);},PW:function(E){this.UpdateOffsetID(E);},AGc:function(E){this.UpdateWeightValue(
E);},AwP:function(E){this.UpdateMassUnit(E);},ArE:function(E){A.Device.DeviceClass.
Ba9.call(this,E);this.UpdateActiveActions(E);},ArF:function(E){A.Device.DeviceClass.
Ba_.call(this,E);this.UpdateActiveActionsOrder(E);},Akq:function(E){A.Device.DeviceClass.
Ba$.call(this,E);this.UpdateAutoActions(E);},AGZ:function(){var K=this.K;this.UpdateMeasureState(
1);K.BCr.call(this,this);},AsH:function(){var K=this.K;var B;K.AaS.AnX(this);this.
UpdateMeasureState(0);},EC:function(E){this.UpdateAnimalType(E);},Axd:function(E
){this.UpdateWeightRecordingMode(E);},AFO:function(E){this.UpdatePredictedTempValue(
E);},SV:function(Mc){A.ab5("%s%i",Qb,Mc);},AFj:function(E){this.UpdateDemoMode(E
);},AE3:function(E){this.UpdateAgeRegistration(E);},Axe:function(E){this.UpdateWeightRecordingScope(
E);},J0:function(E){this.UpdateGender(E);},ArT:function(E){this.UpdateIDLastUsedMale(
E);},ArS:function(E){this.UpdateIDLastUsedFemale(E);},Zs:function(E){this.UpdateAnimalListContent(
E);},AE5:function(E){this.UpdateAlarmListAction(E);},AFm:function(E){this.UpdateFlashLightInMeasureState(
E);},AeV:function(E){this.UpdateAnimalInfoContent(E);},AGb:function(E){this.UpdateWatchListAction(
E);},AFo:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArE(15359);this.ArF(MR);},ResetAutoActions:function(G){this.Akq(Te);},Awp:
function(E){this.UpdateAnimalTypesString(E);},Ar7:function(E){this.UpdateTemperaturesHighString(
E);},Ar8:function(E){this.UpdateTemperaturesLowString(E);},Ass:function(G){this.
Awp(UW);this.Ar8(Z8);this.Ar7(W$);this.Axc(3600);},AwJ:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArZ:function(E){this.UpdateNaisIdLastUsedMale(E);},ArY:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwW:function(E){this.UpdateNaisIdIncrementMale(E);},AwV:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bbe.call(this);A._GetAutoObject(
A.kR.A5).Cb(53);},Anv:function(E){this.UpdateBootloaderMessage(E);},AE0:function(
E){this.UpdateActionListAction(E);},Awn:function(E){this.UpdateActionListHideMeasured(
E);},Uq:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwB:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwC:function(E){this.UpdateDirectionOfCountingMale(
E);},AwD:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArU:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar0:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwX:function(E){this.UpdateNaisIdIncrementUnisex(E);},Aks:function(E){this.UpdateEartagNrAssignmentMode(
E);},N7:function(E){this.UpdateBreed(E);},AFH:function(E){throw new Error(Iw);},
AFB:function(E){throw new Error(Iw);},AF8:function(E){throw new Error(Iw);},AE_:
function(E){throw new Error(Iw);},AFk:function(E){this.UpdateDryCowListAction(E);
},AJL:function(A1b){var Qz;switch(A1b){case 15:Qz=false;break;default:Qz=true;}return Qz;
},AE8:function(E){this.UpdateBirthListView(E);},AF9:function(E){this.UpdateTransferProgress(
E);},Ar9:function(E){this.UpdateTransferTarget(E);},AsG:function(){var B;A.pe([B=
A._GetAutoObject(C.WV),B.BgN],this);},Aw1:function(E){this.UpdatePremisesID(E);}
,AwU:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AFp:function(E){this.
UpdateFreshCowSpan(E);},Axb:function(E){this.UpdateUSBDevice(E.Z3,E.AsQ,E.Asj);}
,AxF:function(){var K=this.K;var B;this.Gg.FileName=K.Bjw.call(this,this.Gg.AgK);
switch(this.Gg.AgK){case 0:K.Bze.call(this,(C.VX.isPrototypeOf(B=this.Gg)?B:null
));break;case 1:K.Bzb.call(this,(C.VX.isPrototypeOf(B=this.Gg)?B:null));break;case
2:K.Bzg.call(this,(C.VX.isPrototypeOf(B=this.Gg)?B:null));break;default:throw new
Error(UX+this.Gg.AgK.toFixed());}},Arh:function(){return true;},AqB:function(){var
K=this.K;switch(this.Gg.AgK){case 0:A._GetAutoObject(A.Device.Device).AZ(72,true
,A.jV,0,[this,K.A3B]);break;case 1:A._GetAutoObject(A.Device.Device).AZ(90,true,
A.jV,0,[this,K.A3B]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(99,true,A.
jV,0,[this,K.A3B]);break;default:throw new Error(Z9+this.Gg.AgK.toFixed());}},AFV:
function(E){throw new Error(Iw);},Awo:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AFX:function(E){this.UpdateShutdownTimer(E);},Ast:function(G){this.Awq(UY);
this.Asb(Z_);this.Asa(Xa);this.Ar$(Z$);this.Asc(Aaa);},Asa:function(E){this.UpdateWeightGainsHighString(
E);},Asb:function(E){this.UpdateWeightGainsLowString(E);},Awq:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ar$:function(E){this.UpdateWeightGainsAverageString(E);},Asc:function(E){this.
UpdateWeightValueBirthString(E);},AwE:function(E){this.UpdateEvaluationAnimalType(
E);},Aw5:function(E){this.UpdateStartScreen(E);},AD_:function(){return 1;},AD$:function(
){return 1;},AFG:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Aw$:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nt:function(E){this.UpdateWhereAbouts(
E);},ArH:function(E){this.UpdateActiveMassRecordingFields(E);},ArI:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asq:function(G){this.ArH(A.jV);this.ArI(
UZ);},AFE:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},X5:function(
){A._GetAutoObject(C.WV).Aws(true);return true;},Aqm:function(){var B;A._GetAutoObject(
C.WV).Aqm(this);return true;},Aql:function(){var B;A.pe([B=A._GetAutoObject(C.WV
),B.Aql],this);return true;},Aqn:function(){var B;A.pe([B=A._GetAutoObject(C.WV)
,B.BhS],this);return true;},AwR:function(E){this.UpdateMaxWeightValuePrecision(E
);},AwY:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwY(Xb);},AwZ:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwZ(O_);},Axg:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axg(O_);},Axa:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asp:function(AoA,AJi){this.Gg.FD();this.Gg.AgK=AoA;this.Gg.AU8=AJi;this.Gg.E4(
1);this.Gg.E4(2);this.AxF();},AE9:function(E){this.UpdateBirthRegistrationsListResetOnExport(
E);},AFP:function(E){this.UpdatePurchasedListResetOnExport(E);},BCb:function(G){
switch(this.Im){case 34:case 35:case 32:case 45:case 49:case 55:case 80:{this.UpdateScanTransponder(
12310020,1,0);this.UpdateScanState(2);}break;case 15:break;default:this.UpdateScanState(
4);}},BgJ:function(G){var K=this.K;var B;if((this.ScanState===1)&&K.Aum.AGU)K.Ai0.
AnV(this);A.ab5("%s",Aab);},BCr:function(G){var K=this.K;var B;if((this.MeasureState===
1)&&K.Aum.AxA)K.AaS.AnV(this);},BC_:function(G){this.UpdateMeasureState(3);},AUd:
function(G){var K=this.K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AK_],[
B=K.Aum,B.A9y,B.ATM],0);this.R5.AFi(A._GetAutoObject(A.Device.Helper).A7d(8));this.
SE.AFi(A._GetAutoObject(A.Device.Helper).A7d(8));},A$O:function(G){var AzW=A._NewObject(
A.Device.AxE,0);AzW.OnSetTimestamp(1747383260);AzW.AFC(1);AzW.AFI(0);AzW.AFS(0);
this.SE=AzW;var Azr=A._NewObject(A.Device.AxE,0);Azr.OnSetTimestamp(1747383260);
Azr.AFC(1);Azr.AFI(0);Azr.AFS(6);this.R5=Azr;var AlT=A._NewObject(A.Device.Avu,0
);AlT.AFz(1);AlT.AFA(0);AlT.AFy(0);AlT.AF6(1);AlT.AF7(0);AlT.AF5(0);AlT.OnSetTimestamp(
1747383260);this.Q2=AlT;var Amk=A._NewObject(A.Device.Avu,0);Amk.AFz(1);Amk.AFA(
0);Amk.AFy(0);Amk.AF6(1);Amk.AF7(0);Amk.AF5(0);Amk.OnSetTimestamp(1747383260);this.
S5=Amk;this.AhG=A.aaR(A.acf.Unknown);},BzA:function(aFilename,aMimeType,aContent
){{var bb=new Blob([aContent],{type:aMimeType});var a=document.createElement('a'
);a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.click();}},Bze:function(
AcY){var K=this.K;var B;var Ada=Oi;var Cz=A._NewObject(A.Device.Animal,0);var O;
var Amb=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B8();O++){Cz.Fl(O,A._GetAutoObject(
A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.NaisId>0)){Ada=Ada+(((((((((((((((((
K.Apf.call(this,A._GetAutoObject(A.Device.Device).OX)+String.fromCharCode(0x3B))+
K.Apf.call(this,Cz.NaisId))+String.fromCharCode(0x3B))+K.A2w.call(this,Cz.DateOfBirth
))+String.fromCharCode(0x3B))+K.BdG.call(this,Cz.Breed))+String.fromCharCode(0x3B
))+K.BdF.call(this,Cz.Gender))+String.fromCharCode(0x3B))+K.BzF.call(this,Cz.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BdH.call(this,Cz.WhereAbouts))+String.fromCharCode(
0x3B))+K.BzI.call(this,Cz.BirthType))+String.fromCharCode(0x3B))+K.Apf.call(this
,Cz.NaisIdMother))+L8);Amb++;}}AcY.Au7=Ada;AcY.AGD=Amb;AcY.E4(3);},Apf:function(
Rr){if(!Rr)return A.jV;return Rr.toFixed();},A2w:function(Ay7){var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(Ay7);return Av.Format(Rn);},BdG:function(AcX){if(!AcX
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5T(AcX).toFixed();},BdF:
function(L$){var result=A.jV;switch(L$){case 0:result=Xc;break;case 1:result=Xd;
break;case 2:result=A.jV;break;default:A.ab5("%s",Tf+L$.toFixed());}return result;
},BzF:function(AJb){if(!AJb)return A.jV;return AJb.toFixed();},BdH:function(AfN){
if(!AfN)return A.jV;return AfN.toFixed();},BzI:function(Atn){return(Atn+1).toFixed(
);},A3B:function(G){var K=this.K;var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!Ar)return;if(Ar.PopupState===7){K.BzA.call(this,this.Gg.FileName,
Xe,(C.VX.isPrototypeOf(B=this.Gg)?B:null).Au7);this.Gg.FD();}else if(Ar.PopupState===
8)this.Gg.FD();},Bzb:function(AcY){var K=this.K;var B;var Ada=Aac;var Cz=A._NewObject(
A.Device.Animal,0);var O;var Amb=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B8();O++){var Azn=A.jV;if(Cz.Arf())Azn=K.BzK.call(this,Cz.FirstBodyWeight);Cz.Fl(
O,A._GetAutoObject(A.Device.Device).An);Ada=Ada+(((((((((((K.Apf.call(this,Cz.NaisId
)+String.fromCharCode(0x3B))+K.BzG.call(this,Cz.VisualId))+String.fromCharCode(0x3B
))+K.Apf.call(this,Cz.TransponderId))+String.fromCharCode(0x3B))+K.BzE.call(this
,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BzJ.call(this,Cz.Gender))+String.
fromCharCode(0x3B))+Azn)+L8);Amb++;}AcY.Au7=Ada;AcY.AGD=Amb;AcY.E4(3);},Bjw:function(
AoA){var AJ6=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Du());switch(AoA){case 0:AJ6=Ac.Format(Xf);break;case 1:AJ6=Ac.
Format(Xg);break;case 2:AJ6=Ac.Format(Xh);break;default:throw new Error(UX+AoA.toFixed(
));}return AJ6;},BzG:function(Rr){return Rr.toFixed();},BzJ:function(L$){var result=
A.jV;switch(L$){case 0:result=Xi;break;case 1:result=Xj;break;case 2:result=Aad;
break;default:A.ab5("%s",Tf+L$.toFixed());}return result;},BzK:function(MX){if(MX<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak7(MX);},BzE:function(
Ay7){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(Ay7);return Av.Format(Tg);},
Bzg:function(AcY){var K=this.K;var B;var Ada=Aae;var Cz=A._NewObject(A.Device.Animal
,0);var O;var Amb=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B8();O++){Cz.
Fl(O,A._GetAutoObject(A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.
NaisId>0)){Ada=Ada+(((((((((((((K.Apf.call(this,Cz.NaisId)+String.fromCharCode(0x3B
))+K.A2w.call(this,A._GetAutoObject(A.Device.Helper).Du()))+String.fromCharCode(
0x3B))+K.A2w.call(this,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BdF.call(this
,Cz.Gender))+String.fromCharCode(0x3B))+K.BdH.call(this,Cz.WhereAbouts))+String.
fromCharCode(0x3B))+K.BdG.call(this,Cz.Breed))+String.fromCharCode(0x3B))+K.Apf.
call(this,A._GetAutoObject(A.Device.Device).OX))+L8);Amb++;}}AcY.Au7=Ada;AcY.AGD=
Amb;AcY.E4(3);},_Init:function(aArg){var K=this.K;A.acl.Gn._Init.call(K.Ai0={I:this
},0);A.acl.Gn._Init.call(K.AaS={I:this},0);K.__proto__=C.DeviceClass;this.Awt(100
);this.AnB(1);this.ArT(200);this.ArS(100);this.ArZ(276000912345678);this.ArY(276000923456789
);this.ArU(500);this.Ar0(276000901234567);this.N7(1);K.Ai0.HO(1);K.Ai0.Fp(1000);
K.AaS.WK(0);K.AaS.HO(1);K.AaS.Fp(750);K.AaS.B3=50000;this.Gg=A._NewObject(C.VX,0
);K.Ai0.SG=[this,K.BCb];K.Aum=A._GetAutoObject(C.UF);K.AaS.SG=[this,K.BC_];K.AaS.
Q=[this,this.AEX,this.AI2];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai0._Done();K.AaS._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai0._ReInit();K.AaS._ReInit();K.CP.call(this);},_Mark:function(D){
var B;if((B=this.Aum)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AHf={A6:0,_Init:function(aArg){C.Wy._Init.call(this,aArg);this.__proto__=C.AHf;
},_className:"DeviceSimulation::UInt8"};C.AHd={A6:0,_Init:function(aArg){C.Wy._Init.
call(this,aArg);this.__proto__=C.AHd;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A4L:0,AFY:function(E){var K=this.K;K.A4L=K.A4L+(E-this.Du());A.Device.
HelperClass.Bba.call(this,E);},Du:function(){var K=this.K;return A.Device.HelperClass.
Ba8.call(this)+K.A4L;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$U={AxA:true,AGU:false,ATL:function(E){if(this.AGU===E)return;this.AGU=E;A.
abo([this,this.A9x,this.ATL],0);},A9x:function(){return this.AGU;},ATM:function(
E){if(this.AxA===E)return;this.AxA=E;A.abo([this,this.A9y,this.ATM],0);},A9y:function(
){return this.AxA;},_Init:function(aArg){this.__proto__=C.A$U;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UF={_Init:function(){C.A$U._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UF._variants();
},_this:null};C.PopupContext={EN:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cr:function(
AL){var II=A.Device.Rating.Bbc.call(this,AL);if(II){var Rz=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LY(0,this.AnimalId);if(Ad
!==-1){var Mm=Rz.QE();if(Mm<=0)A.ab5("%s",AfB);else{var Cz=A._NewObject(A.Device.
Animal,0);Cz.Fl(Ad,Rz);if((this.Temperature>0)&&(Cz.TimestampLastTemperature<this.
Timestamp)){Rz.A$M(Ad,5,this.Temperature);Rz.AkP(Ad,17,this.RatingTemperature);Rz.
Acn(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cz.TimestampLastWeighing<=this.
Timestamp){Rz.AUS(Ad,18,this.BodyWeight);Rz.Acn(Ad,19,this.Timestamp);}if(!Cz.TimestampFirstWeighing||(
Cz.TimestampFirstWeighing>=this.Timestamp)){Rz.AUS(Ad,23,this.BodyWeight);Rz.Acn(
Ad,24,this.Timestamp);Rz.HR(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGt(this)){var LV=A._GetAutoObject(A.Device.Helper).ADl(this);Rz.AkP(Ad,13,LV);
Rz.Acn(Ad,31,this.Timestamp);}Rz.QI(Mm);}}}return II;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.SY={Gi:A.abi(512,null,null),RO:0,AJA:
0,ALg:0,A4O:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKP:0,A4f:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Bez:512,A1M:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1,12:1,13:
1,14:1}),AiD:false,CE:function(Ad,Bc){var Bj=this.Yx(Ad);if(!!Bj)return Bj.CE(Bc
);return 0;},H6:function(Ad,Bc){var Bj=this.Yx(Ad);if(!!Bj)return Bj.H6(Bc);return false;
},V5:function(Ad,Bc){var Bj=this.Yx(Ad);if(!!Bj)return Bj.V5(Bc);return 0;},So:function(
Ad,Bc){var Bj=this.Yx(Ad);if(!!Bj)return Bj.So(Bc);return 0;},QE:function(){if(this.
AiD)throw new Error(Aaf);this.AiD=true;return 12345;},QI:function(AoM){if(!this.
AiD)throw new Error(Xk);if(AoM!==12345)throw new Error(Aag);this.AiD=false;return true;
},AbG:function(){return this.A5h(A._NewObject(C.AGC,0));},ZN:function(Ad,Bc,Dw){
var Bj=this.Yx(Ad);if(!!Bj)return Bj.ZN(Bc,Dw);return false;},HR:function(Ad,Bc,
Dw){var Bj=this.Yx(Ad);if(!!Bj)return Bj.HR(Bc,Dw);return false;},ZM:function(Ad
,Bc,Dw){var Bj=this.Yx(Ad);if(!!Bj)return Bj.ZM(Bc,Dw);return false;},Ob:function(
Ad,Bc,Dw){var Bj=this.Yx(Ad);if(!!Bj)return Bj.Ob(Bc,Dw);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bdf();switch(this.Id){case 0:{this.
Bez=256;A.pe([this,this.Bw6],this);}break;case 1:A.pe([this,this.Bw8],this);break;
case 3:A.pe([this,this.Bw7],this);break;case 2:break;default:throw new Error(Xl+
this.Id.toFixed());}},B8:function(){return this.RO;},KS:function(Ad,Bc){var Bj=this.
Yx(Ad);if(!!Bj)return Bj.KS(Bc);return 0;},UE:function(Ad,Bc,Dw){var Bj=this.Yx(
Ad);if(!!Bj)return Bj.UE(Bc,Dw);return false;},FD:function(){this.Bdf();return true;
},A5h:function(Ad){if(this.RO>=512)throw new Error(AhS);this.Gi.Set(this.RO,Ad);
this.RO=this.RO+1;switch(this.Id){case 0:case 1:this.HR(this.RO-1,0,this.RO-1);break;
default:;}A.pe([this,this.Anm],this);return this.RO-1;},Yx:function(aIndex){if((
aIndex<0)||(aIndex>=512))return null;return this.Gi.Get(aIndex);},Bdf:function(){
var O;for(O=0;O<512;O=O+1)this.Gi.Set(O,null);this.RO=0;this.AJA=0;this.AKP=0;this.
ALg=0;A.pe([this,this.Anm],this);},AKj:function(){this.AJA=(this.AJA+1)%15;return this.
A1M.Get(this.AJA);},A2A:function(){this.ALg=(this.ALg+1)%10;return this.A4O.Get(
this.ALg);},AJ7:function(G){if(this.K&&this.K.AJ7)return this.K.AJ7.apply(this,arguments
);else return C.SY.Bxc.apply(this,arguments);},Bxc:function(G){var B;var Os=true;
this.A2(276000312310001,10,1,A._GetAutoObject(A.Device.Helper).AhM(12),0,1,true,
true,false,true,39000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.
Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(12310020,20,12,A._GetAutoObject(
A.Device.Helper).AhM(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0
,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312310021,10,1,A._GetAutoObject(A.Device.Helper).AhM(9),0,0,
true,false,false,true,37200,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310022
,20,2,A._GetAutoObject(A.Device.Helper).AhM(830),0,1,false,false,false,true,41200
,A._GetAutoObject(A.Device.Helper).AhM(1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310023
,20,2,A._GetAutoObject(A.Device.Helper).AhM(1200),0,1,false,false,false,true,43500
,A._GetAutoObject(A.Device.Helper).AhM(8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310026
,20,2,A._GetAutoObject(A.Device.Helper).AhM(8),0,0,true,false,false,true,34000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);var O;var BgV=0;for(O=1;O<=7;O=O+1){BgV=3680+(20*O);Os=BgV>
3800;this.A2(276000312310050+(((B=O)<0)?B+0x10000000000000000:B),30+(O%3),3,A._GetAutoObject(
A.Device.Helper).AhM(7-O),0,1,Os,false,false,true,36000+(O*900),0,0,false,0,true
,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.
Device).AF);}},Bw6:function(s){this.AJ7(s);},AJ9:function(G){if(this.K&&this.K.AJ9
)return this.K.AJ9.apply(this,arguments);else return C.SY.Bxe.apply(this,arguments
);},Bxe:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Du();var O;Ac=Ac-2678400;
var Aiy;var Bdx;for(O=0;O<32;O=O+1){var A2k=this.BzW();for(;A2k>0;A2k=A2k-1){Aiy=
this.A2A();Bdx=A._GetAutoObject(A.Device.Converter).AsI(0,Aiy);this.AG(Ac,12310020
,Aiy,Bdx,this.AKj(),this.AKj(),this.AKj(),this.AKj(),0);}Ac=Ac+86400;}Ac=Ac-86400;
this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-86400,276000312310001,0,0,0,0,
0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,51000);Aiy=this.A2A();this.AG(
Ac,276000312310001,Aiy,A._GetAutoObject(A.Device.Converter).AsI(0,Aiy),1,3,3,3,0
);Aiy=this.A2A();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(A.Device.
Converter).AsI(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aiy,A._GetAutoObject(
A.Device.Converter).AsI(1,Aiy),2,3,3,3,0);},Bw8:function(s){this.AJ9(s);},A2:function(
K3,BxD,BxT,Bcj,Atn,L$,BxK,BxP,BxM,BxN,MX,Bxo,BxR,BxL,Eo,BxO,AcX,AJb,AfN,BxY,BAd,
BAe,Bxt,Bx0){var Cz=A._NewObject(A.Device.Animal,0);Cz.G7();Cz.Axf(0);Cz.Ae7(0);
Cz.Uu(false);Cz.Akx(false);if(BAe)Cz.PY(K3);if(BAd)Cz.Nr(K3);Cz.SO(A._GetAutoObject(
A.Device.Helper).V1(K3,Bx0&0xFF,Bxt&0xFF)|0);Cz.Ab5(BxD);Cz.AnC(BxT);Cz.Q6(Bcj);
Cz.Akr(Atn);Cz.J0(L$);Cz.AnT(BxK);Cz.AGN(BxP);Cz.Ae3(BxN);Cz.Uu(BxM);Cz.ArV(BxL);
Cz.AwN(BxR);Cz.Awy(Bxo);Cz.EC(Eo);Cz.Ae4(BxO);Cz.N7(AcX);Cz.Akt(AJb);Cz.Nt(AfN);
Cz.AnE(BxY);Cz.Cr(this);if(MX>0)A._GetAutoObject(C.Ask).AG(Bcj,K3,0,0,0,0,0,0,MX
);},AG:function(L_,AcV,AoK,Bx9,Bxx,Bxy,Bxh,Bx$,Bxj){var B2=A._NewObject(A.Device.
Rating,0);B2.G7();var BcZ=A._GetAutoObject(C.Amw).AOA(26,AcV);if(BcZ>=0)B2.OnSetAnimalId(
A._GetAutoObject(C.Amw).CE(BcZ,0));else A.ab5("%s%U",K2,AcV);B2.OnSetTimestamp(L_
);B2.OnSetTemperature(AoK);B2.OnSetRatingTemperature(Bx9);B2.OnSetFaeces(Bxx);B2.
OnSetFeed(Bxy);B2.OnSetAppearance(Bxh);B2.OnSetRespiratory(Bx$);B2.OnSetBodyWeight(
Bxj);B2.Cr(this);},A6Q:function(aColumn,A9){var O;for(O=0;O<this.RO;O=O+1)if(this.
Gi.Get(O).CE(aColumn)===A9)return O;return-1;},BzW:function(){this.AKP=(this.AKP+
1)%10;return this.A4f.Get(this.AKP);},HK:function(){return this.Bez;},AOA:function(
aColumn,A9){var O;for(O=0;O<this.RO;O=O+1)if(this.Gi.Get(O).KS(aColumn)===A9)return O;
return-1;},AJ8:function(G){if(this.K&&this.K.AJ8)return this.K.AJ8.apply(this,arguments
);else return C.SY.Bxd.apply(this,arguments);},Bxd:function(G){this.AaA(2016,216
,6);this.AaA(2017,217,7);this.AaA(2018,218,8);this.AaA(2019,219,9);this.AaA(2020
,220,10);this.AaA(2021,221,11);},Bw7:function(s){this.AJ8(s);},AaA:function(Ac4,
Bxs,Bxr){var Vb=A._NewObject(A.Device.CalfDeregistrations,0);Vb.G7();Vb.AkC(Ac4);
Vb.AwA(Bxs);Vb.Awz(Bxr);Vb.Cr(this);},_Init:function(aArg){A.Device.ITable._Init.
call(this,aArg);(this.Gi=[]).__proto__=C.SY.Gi;(this.A4O=[]).__proto__=C.SY.A4O;(
this.A4f=[]).__proto__=C.SY.A4f;(this.A1M=[]).__proto__=C.SY.A1M;this.__proto__=
C.SY;var J_=this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=A.Device.ITable;A.Device.
ITable._Done.call(this);},_ReInit:function(){A.Device.ITable._ReInit.call(this);
if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Device.ITable._Mark.
call(this,D);A.aa6(this.Gi,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.SY._variants();},K:null,_className:"DeviceSimulation::TableData"};C.Amw={_Init:
function(){C.SY._Init.call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ask={_Init:function(){C.SY._Init.call(this
,0);this.OnSetId(1);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Hu={AlI:A.abi(512,null,null),FK:null,Apc:0,CE:function(Ad,Bc){var Bj=this.
Af5(Ad);if(!!Bj)return Bj.CE(Bc);return 0;},H6:function(Ad,Bc){var Bj=this.Af5(Ad
);if(!!Bj)return Bj.H6(Bc);return false;},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;switch(this.Id){case 0:this.AT2(A._GetAutoObject(C.Amw));break;case 1:
this.AT2(A._GetAutoObject(C.Ask));break;case 3:this.AT2(A._GetAutoObject(C.AuU));
break;case 2:break;default:throw new Error(Xl+this.Id.toFixed());}},B8:function(
){if(!!this.Filter)return this.Apc;else if(!!this.FK)return this.FK.RO;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1K(this);},V5:function(Ad
,Bc){var Bj=this.Af5(Ad);if(!!Bj)return Bj.V5(Bc);return 0;},So:function(Ad,Bc){
var Bj=this.Af5(Ad);if(!!Bj)return Bj.So(Bc);return 0;},QE:function(){if(!!this.
FK)return this.FK.QE();return-1;},QI:function(AoM){var II=false;if(!!this.FK)II=
this.FK.QI(AoM);if(II)A.pe([this,this.A1K],this);return II;},AbG:function(){if(!
!this.Filter)throw new Error(AcL+A._GetAutoObject(A.Device.Converter).Bjb(this.Id
,this.Filter));if(!!this.FK)return this.FK.A5h(A._NewObject(C.AGC,0));return-1;}
,ZN:function(Ad,Bc,Dw){if(!this.FK.AiD)throw new Error(JE);var Bj=this.Af5(Ad);if(
!!Bj)return Bj.ZN(Bc,Dw);return false;},HR:function(Ad,Bc,Dw){if(!this.FK.AiD)throw new
Error(JE);var Bj=this.Af5(Ad);if(!!Bj)return Bj.HR(Bc,Dw);return false;},ZM:function(
Ad,Bc,Dw){if(!this.FK.AiD)throw new Error(JE);var Bj=this.Af5(Ad);if(!!Bj)return Bj.
ZM(Bc,Dw);return false;},Ob:function(Ad,Bc,Dw){if(!this.FK.AiD)throw new Error(JE
);var Bj=this.Af5(Ad);if(!!Bj)return Bj.Ob(Bc,Dw);return false;},LY:function(aColumn
,A9){if(!!this.Filter){var O;for(O=0;O<this.Apc;O=O+1)if(this.AlI.Get(O).CE(aColumn
)===A9)return O;return-1;}else if(!!this.FK)return this.FK.A6Q(aColumn,A9);return-
1;},KS:function(Ad,Bc){var Bj=this.Af5(Ad);if(!!Bj)return Bj.KS(Bc);return 0;},UE:
function(Ad,Bc,Dw){if(!this.FK.AiD)throw new Error(JE);var Bj=this.Af5(Ad);if(!!
Bj)return Bj.UE(Bc,Dw);return false;},Aer:function(aColumn,A9){if(!!this.Filter){
var O;for(O=0;O<this.Apc;O=O+1)if(this.AlI.Get(O).KS(aColumn)===A9)return O;return-
1;}else if(!!this.FK)return this.FK.AOA(aColumn,A9);return-1;},FD:function(){if(
!!this.FK)return this.FK.FD();return false;},AjH:function(aColumn,A9){if(!!this.
FK)return this.FK.A6Q(aColumn,A9)>=0;return false;},Aek:function(aColumn,A9){if(
!!this.FK)return this.FK.AOA(aColumn,A9)>=0;return false;},HK:function(){if(!!this.
FK)return this.FK.HK();return 0;},QL:function(){if(!!this.FK)return this.FK.RO;return 0;
},A1K:function(G){this.A1Y();if(!!this.Filter&&!!this.FK){var O;for(O=0;O<this.FK.
B8();O=O+1){var A2o=true;var Aw=this.Filter.AON();var Bj=this.FK.Yx(O);if(!!Bj)while(
A2o&&!!Aw){A2o=Bj.Bkb(Aw);Aw=this.Filter.AOS(Aw);}else A.ab5("%s",((AhT+O.toFixed(
))+Aoc)+this.FK.B8().toFixed());if(A2o){this.AlI.Set(this.Apc,this.FK.Gi.Get(O));
this.Apc=this.Apc+1;}}}A.pe([this,this.Anm],this);},A1Y:function(){var O;for(O=0;
O<512;O=O+1)this.AlI.Set(O,null);this.Apc=0;},AT2:function(E){if(this.FK===E)return;
if(!!this.FK)A.z9([this,this.A4M],this.FK,0);this.FK=E;if(!!this.FK){A.zV([this,
this.A4M],this.FK,0);A.pe([this,this.A4M],this);}},A4M:function(G){A.pe([this,this.
A1K],this);},Af5:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=512)
)return null;else return this.AlI.Get(aIndex);}else if(!!this.FK)return this.FK.
Yx(aIndex);A.ab5("%s",Oj+aIndex.toFixed());return null;},_Init:function(aArg){A.
Device.ITable._Init.call(this,aArg);(this.AlI=[]).__proto__=C.Hu.AlI;this.__proto__=
C.Hu;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.AlI
,D);if((B=this.FK)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A$V={KM:null,AdH:null,OE:null,AMU:false,AB9:true,A4F:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).Ab_(1);this.
AdH.As(true);}break;case 1:{A._GetAutoObject(A.Device.Device).Ab_(2);A._GetAutoObject(
A.Device.Device).Ar9(A._GetAutoObject(A.Device.Device).An.QL());this.KM.Fp(A._GetAutoObject(
A.Device.Device).Afr*50);this.KM.B3=A._GetAutoObject(A.Device.Device).Afr;this.KM.
As(true);}break;case 2:{A._GetAutoObject(A.Device.Device).Ab_(3);this.AdH.As(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).Ab_(4);A._GetAutoObject(A.Device.
Device).Ar9(A._GetAutoObject(A.Device.Device).An.QL());this.KM.Fp(A._GetAutoObject(
A.Device.Device).Afr*50);this.KM.B3=A._GetAutoObject(A.Device.Device).Afr;this.KM.
As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Ab_(5);this.AdH.As(true
);}break;case 5:A.pe([this,this.BgN],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",Xm,A._GetAutoObject(A.Device.Device).SyncState);}},BBx:function(G){this.AdH.
As(false);A.pe([this,this.A4F],this);},BCA:function(G){switch(A._GetAutoObject(A.
Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).Ab_(0);A.pe([this,this.A4F],this);}break;default:;}},BgN:function(G){this.AdH.
As(false);this.KM.As(false);A._GetAutoObject(A.Device.Device).Ab_(0);},Aws:function(
E){if(this.AB9===E)return;this.AB9=E;A.abo([this,this.Blb,this.Aws],0);},Aql:function(
G){var B;this.OE.Cx=true;this.OE.B3=false;this.OE.Fp(100);this.OE.HO(1);this.OE.
Q=[this,this.ASA,this.AS9];A.pe([B=this.OE,B.AnV],this);},BhS:function(G){var B;
this.OE.Cx=true;this.OE.B3=false;this.OE.Fp(400);this.OE.Ut(200);this.OE.HO(3);this.
OE.Q=[this,this.ASA,this.AS9];this.Aws(false);A.pe([B=this.OE,B.AnV],this);},AS9:
function(E){if(this.AMU===E)return;this.AMU=E;A.abo([this,this.ASA,this.AS9],0);
},Aqm:function(G){var B;this.OE.AnX(this);this.Aws(false);},Bys:function(XG){var
ALu=A._NewObject(A.Device.AVR,0);if(XG){ALu.ATZ(6);ALu.ATB(16900);ALu.AT1(1529);
}A._GetAutoObject(A.Device.Device).Axb(ALu);this.Aws(XG);},Blb:function(){return this.
AB9;},ASA:function(){return this.AMU;},_Init:function(aArg){A.acl.Gn._Init.call(
this.KM={I:this},0);A.Core.Timer._Init.call(this.AdH={I:this},0);A.acl.TM._Init.
call(this.OE={I:this},0);this.__proto__=C.A$V;var B;this.KM.HO(1);this.AdH.PX(2000
);this.KM.SG=[this,this.A4F];this.KM.Q=[B=A._GetAutoObject(A.Device.Device),B.ASZ
,B.A0M];this.AdH.MK=[this,this.BBx];A.h7++;},_Done:function(){this.__proto__=null;
this.KM._Done();this.AdH._Done();this.OE._Done();A.h7--;},_ReInit:function(){this.
KM._ReInit();this.AdH._ReInit();this.OE._ReInit();},_Mark:function(D){var B;if((
B=this.KM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.WV={_Init:function(){C.A$V._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AHe={A6:0,_Init:function(aArg){C.Wy._Init.
call(this,aArg);this.__proto__=C.AHe;},_className:"DeviceSimulation::UInt64"};C.
AuU={_Init:function(){C.SY._Init.call(this,0);this.OnSetId(3);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Dt:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
BI.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X6={Ad6:null,CC:function(G){var K=this.K;A.ab5("%s",Aod);K.Ad6.As(true);},E3:
function(G){var K=this.K;if(K.Ad6.Bw===true){K.Ad6.As(false);A.ab5("%s",AfC);}},
Bk4:function(G){var K=this.K;K.Ad6.As(false);A._GetAutoObject(A.kR.A5).Ab$(A._GetAutoObject(
A.Device.Device).AxH);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad6={I:this},0);K.__proto__=C.X6;this.AeN.H(AhU);K.Ad6.PX(1500);this.UG.R(AcM);
this.UG.Z(true);this.AeN.Ax(A.aaL(A.ach.ARL));K.Ad6.MK=[this,K.Bk4];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad6._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad6._ReInit();},_Mark:function(D){var B;if((B=this.Ad6)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.VX={Au7:A.jV,FD:function(){A.Device.VX.FD.call(this);this.Au7=A.jV;},_Init:function(
aArg){A.Device.VX._Init.call(this,aArg);this.__proto__=C.VX;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.AD6.__proto__=C.Wy;C.String.__proto__=C.Wy;C.ACa.__proto__=C.
Wy;C.AHf.__proto__=C.Wy;C.AHd.__proto__=C.Wy;C.SY.__proto__=A.Device.ITable;C.Hu.
__proto__=A.Device.ITable;C.AHe.__proto__=C.Wy;C.VX.__proto__=A.Device.VX;};C._ReInit=
function(){var B;if((B=C.UF._this))B._ReInit(),C.UF._ReInit.call(B);if((B=C.Amw.
_this))B._ReInit(),C.Amw._ReInit.call(B);if((B=C.Ask._this))B._ReInit(),C.Ask._ReInit.
call(B);if((B=C.WV._this))B._ReInit(),C.WV._ReInit.call(B);if((B=C.AuU._this))B.
_ReInit(),C.AuU._ReInit.call(B);};C.DI=function(D){var B;if((B=C.UF._this)&&(B._cycle
!=D))B._Done(C.UF._this=null);if((B=C.Amw._this)&&(B._cycle!=D))B._Done(C.Amw._this=
null);if((B=C.Ask._this)&&(B._cycle!=D))B._Done(C.Ask._this=null);if((B=C.WV._this
)&&(B._cycle!=D))B._Done(C.WV._this=null);if((B=C.AuU._this)&&(B._cycle!=D))B._Done(
C.AuU._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */