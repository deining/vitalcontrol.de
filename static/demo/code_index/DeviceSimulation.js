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
var Cg="ERROR: access to null Bool data in column [";var BF="]";var E7="Access to inexistent column index: ";
var Hr=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I1="Unsupported filter criterion class";var
Iw="Operator not handled:";var O$="1,8";var Qa="INFO: Device.StartScan() called.";
var Qb="INFO: Device.StopScan() called.";var CJ="V0.";var Fd=".";var LD="\n";var
Qc="Temp: ";var J$="Battery: ";var Oj="%%";var Qd="Selected animal with row index";
var MU="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Ti="1,2";var UZ="0,1,2";var Aad="3900,3950,4050";var Xe="4000,4050,4150";var Ix=
"Read only";var U0="Unknown data export type: ";var Aae="Unhandled Device::DataExportType: ";
var U1="0,2,1";var Aaf="650,150,700";var Xf="800,200,900";var Aag="800,200,850";
var Aah="40000,4000,0";var U2="32,7,34,18,23,14,22";var Xg="16384";var Pa="1,1024";
var Aai="Simulate Scan";var Ol="text/csv";var Rp="hit-geburt-%d-%m-%Y_%H-%M.csv";
var Xh="animals-%d-%m-%Y_%H-%M.csv";var Xi="zugang-%d-%m-%Y_%H-%M.csv";var U3="ERROR: Cannot start transaction";
var Xj="Nested transactions are not allowed.";var Aaj="Transaction not opened.";
var Xk="Wrong transaction ID.";var U4="Unhandled TableId:";var Xl="Maximum number of rows reached.";
var Xm="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var Xn=
"Severe: filter set when inserting row into table: ";var Rq="Warning: DeviceSimulation::TableData not in transaction";
var Tj="ERROR: Row not found with index [";var Aak="] while Rows Count = ";var AfH=
"ERROR: trying to access an inexistent row with Index=";var Aal="Invalid Device::SyncState";
var Xo="Forwarding to home screen after 500 milliseconds ...";var Aam="Forwarding to home screen canceled...";
var Aan=[0,58,240,208];var AhY="VitalControl\nstarting up \u2026";var K4="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Aao="%d.%m.%Y";var LE="1";var AhZ="2";var Alb="Unknown gender: ";var Om="M";
var Xp="F";var Aok="?";var AfI="%Y-%m-%d";var Ah0="2;1;";var AcU="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";
C.Table={Hv:null,Init:function(aArg){var K=this.K;A.zV([this,this.Ans],K.Hv,0);},
CE:function(Ad,Bc){var K=this.K;return K.Hv.CE(Ad,Bc);},H6:function(Ad,Bc){var K=
this.K;return K.Hv.H6(Ad,Bc);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;
this.Id=E;K.Hv.OnSetId(E);},B_:function(){var K=this.K;return K.Hv.B_();},Bk:function(
E){var K=this.K;A.Device.ITable.Bk.call(this,E);K.Hv.Bk(E);},V9:function(Ad,Bc){
var K=this.K;return K.Hv.V9(Ad,Bc);},Ss:function(Ad,Bc){var K=this.K;return K.Hv.
Ss(Ad,Bc);},QG:function(){var K=this.K;return K.Hv.QG();},QK:function(AoT){var K=
this.K;return K.Hv.QK(AoT);},AbN:function(){var K=this.K;return K.Hv.AbN();},ZT:
function(Ad,Bc,Dx){var K=this.K;return K.Hv.ZT(Ad,Bc,Dx);},HS:function(Ad,Bc,Dx){
var K=this.K;return K.Hv.HS(Ad,Bc,Dx);},ZS:function(Ad,Bc,Dx){var K=this.K;return K.
Hv.ZS(Ad,Bc,Dx);},Od:function(Ad,Bc,Dx){var K=this.K;return K.Hv.Od(Ad,Bc,Dx);},
L3:function(aColumn,A9){var K=this.K;return K.Hv.L3(aColumn,A9);},KU:function(Ad
,Bc){var K=this.K;return K.Hv.KU(Ad,Bc);},UH:function(Ad,Bc,Dx){var K=this.K;return K.
Hv.UH(Ad,Bc,Dx);},Aey:function(aColumn,A9){var K=this.K;return K.Hv.Aey(aColumn,
A9);},FE:function(){var K=this.K;return K.Hv.FE();},AjL:function(aColumn,A9){var
K=this.K;return K.Hv.AjL(aColumn,A9);},Aer:function(aColumn,A9){var K=this.K;return K.
Hv.Aer(aColumn,A9);},HL:function(){var K=this.K;return K.Hv.HL();},QN:function(){
var K=this.K;return K.Hv.QN();},_Init:function(aArg){var K=this.K;C.Hv._Init.call(
K.Hv={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Hv._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.Hv._ReInit();},_Mark:function(D){var B;if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGE={Vk:A.abi(42,null,null),CE:function(aColumn){var B;this.Adc(aColumn);var Aq=(
C.AD8.isPrototypeOf(B=this.Vk.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;
},BjY:function(aColumn){var B;this.Adc(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Vk.Get(aColumn))?B:null);if(!!Aq)return A.jV;return A.jV;},H6:function(aColumn
){var B;this.Adc(aColumn);var Aq=(C.ACc.isPrototypeOf(B=this.Vk.Get(aColumn))?B:
null);if(!!Aq)return Aq.A6;else A.ab5("%s",(Cg+aColumn.toFixed())+BF);return false;
},HS:function(aColumn,A9){this.Adc(aColumn);var Aq=A._NewObject(C.AD8,0);Aq.A6=A9;
this.Vk.Set(aColumn,Aq);return true;},Od:function(aColumn,A9){this.Adc(aColumn);
var Aq=A._NewObject(C.ACc,0);Aq.A6=A9;this.Vk.Set(aColumn,Aq);return true;},Adc:
function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((E7+aColumn.toFixed(
))+Hr);},Bkq:function(AH){if(!!(A.Device.Int32FilterCriterion.isPrototypeOf(AH)?
AH:null))return this.AJV(this.CE(AH.EK),AH.Operator,(A.Device.Int32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.UInt32FilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Bzj(this.Ss(AH.EK),AH.Operator,(A.Device.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Bzi(this.BjY(AH.EK),AH.Operator,(A.Device.StringFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Bzh(this.H6(AH.EK),AH.Operator,(A.Device.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJV(this.CE(AH.EK),AH.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJV(this.CE(AH.EK),AH.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Bzm(this.V9(AH.EK),AH.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A6)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Bzk(this.KU(AH.EK),AH.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A6);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Bzl(this.KU(AH.EK),AH.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null).A6,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null).Zu&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AH)?AH:null).OK&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJV(this.CE(AH.EK),AH.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);else throw new Error(I1);},AJV:function(Ft,Ed,GD){
switch(Ed){case 0:return Ft===GD;case 2:return Ft>GD;case 3:return Ft<GD;case 4:
return Ft.toFixed().indexOf(GD.toFixed(),0)>=0;case 5:return Ft!==GD;default:throw new
Error(Iw+Ed.toFixed());}},Bzi:function(Ft,Ed,GD){switch(Ed){case 0:return Ft===GD;
case 2:return Ft>GD;case 3:return Ft<GD;case 4:{A.ab5("%s%e%s%i",Ft,Ed,GD,Ft.indexOf(
GD,0));return Ft.indexOf(GD,0)>=0;}case 5:return Ft!==GD;default:throw new Error(
Iw+Ed.toFixed());}},Bzh:function(Ft,Ed,GD){switch(Ed){case 0:return Ft===GD;case
2:case 3:case 4:return false;case 5:return Ft!==GD;default:throw new Error(Iw+Ed.
toFixed());}},V9:function(aColumn){var B;this.Adc(aColumn);var Aq=(C.AHh.isPrototypeOf(
B=this.Vk.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;},ZT:function(aColumn
,A9){this.Adc(aColumn);var Aq=A._NewObject(C.AHh,0);Aq.A6=A9;this.Vk.Set(aColumn
,Aq);return true;},Bzm:function(Ft,Ed,GD){switch(Ed){case 0:return Ft===GD;case 2:
return Ft>GD;case 3:return Ft<GD;case 4:return Ft.toFixed().indexOf(GD.toFixed()
,0)>=0;case 5:return Ft!==GD;default:throw new Error(Iw+Ed.toFixed());}},Ss:function(
aColumn){var B;this.Adc(aColumn);var Aq=(C.AHf.isPrototypeOf(B=this.Vk.Get(aColumn
))?B:null);if(!!Aq)return Aq.A6;return 0;},ZS:function(aColumn,A9){this.Adc(aColumn
);var Aq=A._NewObject(C.AHf,0);Aq.A6=A9;this.Vk.Set(aColumn,Aq);return true;},Bzj:
function(Ft,Ed,GD){switch(Ed){case 0:return Ft===GD;case 2:return Ft>GD;case 3:return Ft<
GD;case 4:return Ft.toFixed().indexOf(GD.toFixed(),0)>=0;case 5:return Ft!==GD;default:
throw new Error(Iw+Ed.toFixed());}},KU:function(aColumn){var B;this.Adc(aColumn);
var Aq=(C.AHg.isPrototypeOf(B=this.Vk.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;
return 0;},UH:function(aColumn,A9){this.Adc(aColumn);var Aq=A._NewObject(C.AHg,0
);Aq.A6=A9;this.Vk.Set(aColumn,Aq);return true;},Bzk:function(Ft,Ed,GD){switch(Ed
){case 0:return Ft===GD;case 2:return Ft>GD;case 3:return Ft<GD;case 4:return Ft.
toFixed().indexOf(GD.toFixed(),0)>=0;case 5:return Ft!==GD;default:throw new Error(
Iw+Ed.toFixed());}},Bzl:function(Ft,Ed,GD,AtC,AJg){var AK$=Ft.toFixed();AK$=A.ab2(
A.abV(AK$,AK$.length-AtC),AJg);Ft=Math.trunc(Ft/A._GetAutoObject(A.Device.Helper
).ApU(AtC))%A._GetAutoObject(A.Device.Helper).ApU(AJg);var ALD=A.ab0(GD,0,10);switch(
Ed){case 0:return Ft===ALD;case 2:return Ft>ALD;case 3:return Ft<ALD;case 4:return AK$.
indexOf(GD,0)>=0;case 5:return Ft!==ALD;default:throw new Error(Iw+Ed.toFixed());
}},_Init:function(aArg){(this.Vk=[]).__proto__=C.AGE.Vk;this.__proto__=C.AGE;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Vk,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.WD={_Init:function(
aArg){this.__proto__=C.WD;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.AD8={A6:0,_Init:function(aArg){C.WD._Init.call(this,aArg);this.__proto__=C.AD8;
},_className:"DeviceSimulation::Int32"};C.String={_Init:function(aArg){C.WD._Init.
call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"};
C.ACc={A6:false,_Init:function(aArg){C.WD._Init.call(this,aArg);this.__proto__=C.
ACc;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Auu:null,Ai4:null,AaZ:
null,CQ:function(){var K=this.K;K.A$4.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zx(3);A.zX([this,K.BgZ],[B=K.Auu,B.A9N,B.ATT],0);this.UpdateAutoActions(
O$);K.A$4.call(this,this);this.Asx(this);this.Asy(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asv(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=28;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnI(languageValue);A.pe([this
,K.AUl],this);},Zx:function(E){this.UpdateActiveScreen(E);},AwB:function(E){this.
UpdateBatteryChargeState(E);},AFg:function(E){this.UpdateChargeActive(E);},Ar8:function(
E){this.UpdateScanState(E);},Aw2:function(E){this.UpdateMeasureState(E);},Axe:function(
E){this.UpdateTempValue(E);},AnI:function(E){this.UpdateLanguage(E);},Axf:function(
E){this.UpdateTemperatureUnit(E);},AFe:function(E){this.UpdateBrightness(E);},AFK:
function(E){this.UpdateMonitoring(E);},AxQ:function(){var B;if(A._GetAutoObject(
C.UI).AxK){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).ALf(this
);}},AhQ:function(){var B;A._GetAutoObject(A.Device.Helper).S3.An4(this);this.UpdateMeasureState(
0);},AhN:function(){var K=this.K;A.ab5("%s",Qa);this.UpdateScanState(1);A.pe([this
,K.BgZ],this);},An5:function(){var K=this.K;var B;A.ab5("%s",Qb);K.Ai4.An4(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah$){},AxJ:function(){A.Device.
DeviceClass.Bbr.call(this);this.Zx(1);},AGB:function(){A.Device.DeviceClass.Bbp.
call(this);this.Zx(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Axm:function(
E){this.UpdateUnderTemp(E);},Acf:function(E){this.UpdateSyncState(E);},ADj:function(
){var aString;aString=((((((((((CJ+A.abz(0,9).toFixed())+Fd)+A.abz(0,9).toFixed(
))+LD)+Qc)+A.abz(30,90).toFixed())+A.aaR(A.acf.AG5))+LD)+J$)+A.abz(1,100).toFixed(
))+Oj;return aString;},PopupStateChanged:function(Jp,Ae){var Agt=A._NewObject(C.
PopupContext,0);Agt.Id=Jp;Agt.EW=Ae;this.AnT.Trigger(Agt,false);},AF$:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Afg:function(E){this.UpdateVibrationOn(
E);},Axa:function(E){this.UpdateRatingMode(E);},Ae8:function(E){this.UpdateFlashLightOn(
E);},UA:function(E){this.UpdateTopLightOn(E);},WO:function(E){this.UpdateRGBTopLight(
E);},Awz:function(E){this.UpdateAutoRegistrationMode(E);},Ar9:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OU:function(E){this.UpdateDigitsID(
E);},PY:function(E){this.UpdateOffsetID(E);},AGd:function(E){this.UpdateWeightValue(
E);},AwZ:function(E){this.UpdateMassUnit(E);},ArL:function(E){A.Device.DeviceClass.
Bbl.call(this,E);this.UpdateActiveActions(E);},ArM:function(E){A.Device.DeviceClass.
Bbm.call(this,E);this.UpdateActiveActionsOrder(E);},Akt:function(E){A.Device.DeviceClass.
Bbn.call(this,E);this.UpdateAutoActions(E);},AG1:function(){var K=this.K;this.UpdateMeasureState(
1);K.BCO.call(this,this);},AsL:function(){var K=this.K;var B;K.AaZ.An4(this);this.
UpdateMeasureState(0);},ED:function(E){this.UpdateAnimalType(E);},Axn:function(E
){this.UpdateWeightRecordingMode(E);},AFP:function(E){this.UpdatePredictedTempValue(
E);},SZ:function(Me){A.ab5("%s%i",Qd,Me);},AFk:function(E){this.UpdateDemoMode(E
);},AE5:function(E){this.UpdateAgeRegistration(E);},Axo:function(E){this.UpdateWeightRecordingScope(
E);},J4:function(E){this.UpdateGender(E);},ArY:function(E){this.UpdateIDLastUsedMale(
E);},ArX:function(E){this.UpdateIDLastUsedFemale(E);},Zy:function(E){this.UpdateAnimalListContent(
E);},AE7:function(E){this.UpdateAlarmListAction(E);},AFn:function(E){this.UpdateFlashLightInMeasureState(
E);},Ae3:function(E){this.UpdateAnimalInfoContent(E);},AGc:function(E){this.UpdateWatchListAction(
E);},AFp:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArL(15359);this.ArM(MU);},ResetAutoActions:function(G){this.Akt(Ti);},Awx:
function(E){this.UpdateAnimalTypesString(E);},Asa:function(E){this.UpdateTemperaturesHighString(
E);},Asb:function(E){this.UpdateTemperaturesLowString(E);},Asx:function(G){this.
Awx(UZ);this.Asb(Aad);this.Asa(Xe);this.Axm(3800);},AwT:function(E){this.UpdateFreshCowsHideMeasured(
E);},Ar4:function(E){this.UpdateNaisIdLastUsedMale(E);},Ar3:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Aw6:function(E){this.UpdateNaisIdIncrementMale(E);},Aw5:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bbs.call(this);A._GetAutoObject(
A.kR.A5).Cc(53);},AnC:function(E){this.UpdateBootloaderMessage(E);},AE2:function(
E){this.UpdateActionListAction(E);},Awv:function(E){this.UpdateActionListHideMeasured(
E);},Uu:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwL:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwM:function(E){this.UpdateDirectionOfCountingMale(
E);},AwN:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArZ:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar5:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Aw7:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akv:function(E){this.UpdateEartagNrAssignmentMode(
E);},N9:function(E){this.UpdateBreed(E);},AFI:function(E){throw new Error(Ix);},
AFC:function(E){throw new Error(Ix);},AF9:function(E){throw new Error(Ix);},AFa:
function(E){throw new Error(Ix);},AFl:function(E){this.UpdateDryCowListAction(E);
},AJS:function(A1l){var QB;switch(A1l){case 15:QB=false;break;default:QB=true;}return QB;
},AE_:function(E){this.UpdateBirthListView(E);},AF_:function(E){this.UpdateTransferProgress(
E);},Asc:function(E){this.UpdateTransferTarget(E);},AsK:function(){var B;A.pe([B=
A._GetAutoObject(C.W0),B.Bg3],this);},Aw$:function(E){this.UpdatePremisesID(E);}
,Aw4:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AFq:function(E){this.
UpdateFreshCowSpan(E);},Axl:function(E){this.UpdateUSBDevice(E.Z_,E.AsV,E.Aso);}
,AxP:function(){var K=this.K;var B;var A2b=A._NewObject(C.A6p,0);this.FX.FileName=
K.BjL.call(this,this.FX.AgQ);switch(this.FX.AgQ){case 0:A2b.Bzu((C.V2.isPrototypeOf(
B=this.FX)?B:null));break;case 1:A2b.Bzr((C.V2.isPrototypeOf(B=this.FX)?B:null));
break;case 2:A2b.Bzw((C.V2.isPrototypeOf(B=this.FX)?B:null));break;default:throw new
Error(U0+this.FX.AgQ.toFixed());}},Aro:function(){return true;},AqI:function(){var
K=this.K;switch(this.FX.AgQ){case 0:A._GetAutoObject(A.Device.Device).AZ(72,true
,A.jV,0,[this,K.A3N]);break;case 1:A._GetAutoObject(A.Device.Device).AZ(90,true,
A.jV,0,[this,K.A3N]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(99,true,A.
jV,0,[this,K.A3N]);break;default:throw new Error(Aae+this.FX.AgQ.toFixed());}},AFW:
function(E){throw new Error(Ix);},Aww:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AFY:function(E){this.UpdateShutdownTimer(E);},Asy:function(G){this.Awy(U1);
this.Asg(Aaf);this.Asf(Xf);this.Ase(Aag);this.Ash(Aah);},Asf:function(E){this.UpdateWeightGainsHighString(
E);},Asg:function(E){this.UpdateWeightGainsLowString(E);},Awy:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ase:function(E){this.UpdateWeightGainsAverageString(E);},Ash:function(E){this.
UpdateWeightValueBirthString(E);},AwO:function(E){this.UpdateEvaluationAnimalType(
E);},Axd:function(E){this.UpdateStartScreen(E);},AEa:function(){return 1;},AEb:function(
){return 1;},AFH:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Axj:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nw:function(E){this.UpdateWhereAbouts(
E);},ArO:function(E){this.UpdateActiveMassRecordingFields(E);},ArP:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asv:function(G){this.ArO(A.jV);this.ArP(
U2);},AFF:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},X_:function(
){A._GetAutoObject(C.W0).AwA(true);return true;},Aqt:function(){var B;A._GetAutoObject(
C.W0).Aqt(this);return true;},Aqs:function(){var B;A.pe([B=A._GetAutoObject(C.W0
),B.Aqs],this);return true;},Aqu:function(){var B;A.pe([B=A._GetAutoObject(C.W0)
,B.Bh8],this);return true;},Aw1:function(E){this.UpdateMaxWeightValuePrecision(E
);},Aw8:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Aw8(Xg);},Aw9:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Aw9(Pa);},Axq:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axq(Pa);},Axk:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asu:function(FU,AoG,AJp){this.FX.FE();this.FX.B7=FU;this.FX.AgQ=AoG;this.FX.AVe=
AJp;this.FX.E5(1);this.FX.E5(2);this.AxP();},AE$:function(E){this.UpdateBirthRegistrationsListResetOnExport(
E);},AFQ:function(E){this.UpdatePurchasedListResetOnExport(E);},AwG:function(E){
this.UpdateCountry(E);},OV:function(E){this.UpdateIsRegistrationNoticePending(E);
},BCy:function(G){switch(this.Im){case 34:case 35:case 32:case 45:case 49:case 55:
case 80:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},BgZ:function(G){var K=this.K;var
B;if((this.ScanState===1)&&K.Auu.AGW)K.Ai4.An2(this);A.ab5("%s",Aai);},BCO:function(
G){var K=this.K;var B;if((this.MeasureState===1)&&K.Auu.AxK)K.AaZ.An2(this);},BDv:
function(G){this.UpdateMeasureState(3);},AUl:function(G){var K=this.K;var B;A.zX([
B=A._GetAutoObject(A.Device.Helper),B.ALf],[B=K.Auu,B.A9O,B.ATU],0);this.R9.AFj(
A._GetAutoObject(A.Device.Helper).A7s(8));this.SJ.AFj(A._GetAutoObject(A.Device.
Helper).A7s(8));},A$4:function(G){var AzY=A._NewObject(A.Device.AxO,0);AzY.OnSetTimestamp(
1770993065);AzY.AFD(1);AzY.AFJ(0);AzY.AFT(0);this.SJ=AzY;var Azt=A._NewObject(A.
Device.AxO,0);Azt.OnSetTimestamp(1770993065);Azt.AFD(1);Azt.AFJ(0);Azt.AFT(6);this.
R9=Azt;var AlY=A._NewObject(A.Device.AvC,0);AlY.AFA(1);AlY.AFB(0);AlY.AFz(0);AlY.
AF7(1);AlY.AF8(0);AlY.AF6(0);AlY.OnSetTimestamp(1770993065);this.Q4=AlY;var Amq=
A._NewObject(A.Device.AvC,0);Amq.AFA(1);Amq.AFB(0);Amq.AFz(0);Amq.AF7(1);Amq.AF8(
0);Amq.AF6(0);Amq.OnSetTimestamp(1770993065);this.S9=Amq;this.AhM=A.aaR(A.acf.Unknown
);},A3N:function(G){var K=this.K;var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!Ar)return;if(Ar.PopupState===7){K.BzQ.call(this,this.FX.FileName,
Ol,(C.V2.isPrototypeOf(B=this.FX)?B:null).Avd);this.FX.FE();}else if(Ar.PopupState===
8)this.FX.FE();},BjL:function(AoG){var AKb=A.jV;var Ac=A._NewObject(A.Core.Bq,0);
Ac.Initialize(A._GetAutoObject(A.Device.Helper).Dr());switch(AoG){case 0:AKb=Ac.
Format(Rp);break;case 1:AKb=Ac.Format(Xh);break;case 2:AKb=Ac.Format(Xi);break;default:
throw new Error(U0+AoG.toFixed());}return AKb;},BzQ:function(aFilename,aMimeType
,aContent){{var bb=new Blob([aContent],{type:aMimeType});var a=document.createElement(
'a');a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.click();}},_Init:
function(aArg){var K=this.K;A.acl.Gp._Init.call(K.Ai4={I:this},0);A.acl.Gp._Init.
call(K.AaZ={I:this},0);K.__proto__=C.DeviceClass;this.AwB(100);this.AnI(1);this.
ArY(200);this.ArX(100);this.Ar4(276000912345678);this.Ar3(276000923456789);this.
ArZ(500);this.Ar5(276000901234567);this.N9(1);K.Ai4.HP(1);K.Ai4.Fq(1000);K.AaZ.WQ(
0);K.AaZ.HP(1);K.AaZ.Fq(750);K.AaZ.B4=50000;this.FX=A._NewObject(C.V2,0);K.Ai4.SL=[
this,K.BCy];K.Auu=A._GetAutoObject(C.UI);K.AaZ.SL=[this,K.BDv];K.AaZ.Q=[this,this.
AEZ,this.AI8];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=
null;K.Ai4._Done();K.AaZ._Done();A.h7--;},_ReInit:function(){var K=this.K;K.Ai4.
_ReInit();K.AaZ._ReInit();K.CQ.call(this);},_Mark:function(D){var B;if((B=this.Auu
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(){return A.
aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"};C.AHh={
A6:0,_Init:function(aArg){C.WD._Init.call(this,aArg);this.__proto__=C.AHh;},_className:
"DeviceSimulation::UInt8"};C.AHf={A6:0,_Init:function(aArg){C.WD._Init.call(this
,aArg);this.__proto__=C.AHf;},_className:"DeviceSimulation::UInt32"};C.HelperClass={
A4Y:0,AFZ:function(E){var K=this.K;K.A4Y=K.A4Y+(E-this.Dr());A.Device.HelperClass.
Bbo.call(this,E);},Dr:function(){var K=this.K;return A.Device.HelperClass.Bbk.call(
this)+K.A4Y;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;A.h7++;
},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$_={AxK:true,AGW:false,ATT:function(E){if(this.AGW===E)return;this.AGW=E;A.
abo([this,this.A9N,this.ATT],0);},A9N:function(){return this.AGW;},ATU:function(
E){if(this.AxK===E)return;this.AxK=E;A.abo([this,this.A9O,this.ATU],0);},A9O:function(
){return this.AxK;},_Init:function(aArg){this.__proto__=C.A$_;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UI={_Init:function(){C.A$_._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UI._variants();
},_this:null};C.PopupContext={EW:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cs:function(
AL){var IJ=A.Device.Rating.Bbq.call(this,AL);if(IJ){var RC=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.L3(0,this.AnimalId);if(Ad
!==-1){var Mo=RC.QG();if(Mo<=0)A.ab5("%s",U3);else{var CU=A._NewObject(A.Device.
Animal,0);CU.Fm(Ad,RC);if((this.Temperature>0)&&(CU.TimestampLastTemperature<this.
Timestamp)){RC.A$2(Ad,5,this.Temperature);RC.AkU(Ad,17,this.RatingTemperature);RC.
Acv(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(CU.TimestampLastWeighing<=this.
Timestamp){RC.AU0(Ad,18,this.BodyWeight);RC.Acv(Ad,19,this.Timestamp);}if(!CU.TimestampFirstWeighing||(
CU.TimestampFirstWeighing>=this.Timestamp)){RC.AU0(Ad,23,this.BodyWeight);RC.Acv(
Ad,24,this.Timestamp);RC.HS(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGv(this)){var L0=A._GetAutoObject(A.Device.Helper).ADn(this);RC.AkU(Ad,13,L0);
RC.Acv(Ad,31,this.Timestamp);}RC.QK(Mo);}}}return IJ;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.S2={Gl:A.abi(512,null,null),RS:0,AJH:
0,ALn:0,A41:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKW:0,A4s:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BeQ:512,A1W:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1,12:1,13:
1,14:1}),AiH:false,CE:function(Ad,Bc){var Bj=this.YC(Ad);if(!!Bj)return Bj.CE(Bc
);return 0;},H6:function(Ad,Bc){var Bj=this.YC(Ad);if(!!Bj)return Bj.H6(Bc);return false;
},V9:function(Ad,Bc){var Bj=this.YC(Ad);if(!!Bj)return Bj.V9(Bc);return 0;},Ss:function(
Ad,Bc){var Bj=this.YC(Ad);if(!!Bj)return Bj.Ss(Bc);return 0;},QG:function(){if(this.
AiH)throw new Error(Xj);this.AiH=true;return 12345;},QK:function(AoT){if(!this.AiH
)throw new Error(Aaj);if(AoT!==12345)throw new Error(Xk);this.AiH=false;return true;
},AbN:function(){return this.A5u(A._NewObject(C.AGE,0));},ZT:function(Ad,Bc,Dx){
var Bj=this.YC(Ad);if(!!Bj)return Bj.ZT(Bc,Dx);return false;},HS:function(Ad,Bc,
Dx){var Bj=this.YC(Ad);if(!!Bj)return Bj.HS(Bc,Dx);return false;},ZS:function(Ad
,Bc,Dx){var Bj=this.YC(Ad);if(!!Bj)return Bj.ZS(Bc,Dx);return false;},Od:function(
Ad,Bc,Dx){var Bj=this.YC(Ad);if(!!Bj)return Bj.Od(Bc,Dx);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bdv();switch(this.Id){case 0:{this.
BeQ=256;A.pe([this,this.Bxm],this);}break;case 1:A.pe([this,this.Bxo],this);break;
case 3:A.pe([this,this.Bxn],this);break;case 2:break;default:throw new Error(U4+
this.Id.toFixed());}},B_:function(){return this.RS;},KU:function(Ad,Bc){var Bj=this.
YC(Ad);if(!!Bj)return Bj.KU(Bc);return 0;},UH:function(Ad,Bc,Dx){var Bj=this.YC(
Ad);if(!!Bj)return Bj.UH(Bc,Dx);return false;},FE:function(){this.Bdv();return true;
},A5u:function(Ad){if(this.RS>=512)throw new Error(Xl);this.Gl.Set(this.RS,Ad);this.
RS=this.RS+1;switch(this.Id){case 0:case 1:this.HS(this.RS-1,0,this.RS-1);break;
default:;}A.pe([this,this.Ans],this);return this.RS-1;},YC:function(aIndex){if((
aIndex<0)||(aIndex>=512))return null;return this.Gl.Get(aIndex);},Bdv:function(){
var O;for(O=0;O<512;O=O+1)this.Gl.Set(O,null);this.RS=0;this.AJH=0;this.AKW=0;this.
ALn=0;A.pe([this,this.Ans],this);},AKq:function(){this.AJH=(this.AJH+1)%15;return this.
A1W.Get(this.AJH);},A2M:function(){this.ALn=(this.ALn+1)%10;return this.A41.Get(
this.ALn);},AKc:function(G){if(this.K&&this.K.AKc)return this.K.AKc.apply(this,arguments
);else return C.S2.Bxu.apply(this,arguments);},Bxu:function(G){var B;var Ou=true;
this.A2(276000312310001,10,1,A._GetAutoObject(A.Device.Helper).AhS(12),0,1,true,
true,false,true,39000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.
Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(12310020,20,12,A._GetAutoObject(
A.Device.Helper).AhS(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0
,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312310021,10,1,A._GetAutoObject(A.Device.Helper).AhS(9),0,0,
true,false,false,true,37200,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310022
,20,2,A._GetAutoObject(A.Device.Helper).AhS(830),0,1,false,false,false,true,41200
,A._GetAutoObject(A.Device.Helper).AhS(1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310023
,20,2,A._GetAutoObject(A.Device.Helper).AhS(1200),0,1,false,false,false,true,43500
,A._GetAutoObject(A.Device.Helper).AhS(8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310026
,20,2,A._GetAutoObject(A.Device.Helper).AhS(8),0,0,true,false,false,true,34000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);var O;var Bg$=0;for(O=1;O<=7;O=O+1){Bg$=3680+(20*O);Ou=Bg$>
3800;this.A2(276000312310050+(((B=O)<0)?B+0x10000000000000000:B),30+(O%3),3,A._GetAutoObject(
A.Device.Helper).AhS(7-O),0,1,Ou,false,false,true,36000+(O*900),0,0,false,0,true
,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.
Device).AF);}},Bxm:function(s){this.AKc(s);},AKe:function(G){if(this.K&&this.K.AKe
)return this.K.AKe.apply(this,arguments);else return C.S2.Bxw.apply(this,arguments
);},Bxw:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Dr();var O;Ac=Ac-2678400;
var AiC;var BdN;for(O=0;O<32;O=O+1){var A2w=this.BAf();for(;A2w>0;A2w=A2w-1){AiC=
this.A2M();BdN=A._GetAutoObject(A.Device.Converter).AsM(0,AiC);this.AG(Ac,12310020
,AiC,BdN,this.AKq(),this.AKq(),this.AKq(),this.AKq(),0);}Ac=Ac+86400;}Ac=Ac-86400;
this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-86400,276000312310001,0,0,0,0,
0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,51000);AiC=this.A2M();this.AG(
Ac,276000312310001,AiC,A._GetAutoObject(A.Device.Converter).AsM(0,AiC),1,3,3,3,0
);AiC=this.A2M();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(A.Device.
Converter).AsM(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,AiC,A._GetAutoObject(
A.Device.Converter).AsM(1,AiC),2,3,3,3,0);},Bxo:function(s){this.AKe(s);},A2:function(
Jp,BxV,Bx_,Bcz,Atv,Mb,Bx2,Bx6,Bx4,Bx5,M0,BxG,Bx8,Bx3,Ep,AJj,Ac6,AJh,AfT,Byd,BAA,
BAB,BxL,Byf){var CU=A._NewObject(A.Device.Animal,0);CU.G8();CU.Axp(0);CU.Afc(0);
CU.Uy(false);CU.AkC(false);if(BAB)CU.Nv(Jp);if(BAA)CU.Nt(Jp);CU.SS(A._GetAutoObject(
A.Device.Helper).TW(Jp,Byf&0xFF,BxL&0xFF)|0);CU.Aca(BxV);CU.AnJ(Bx_);CU.Q8(Bcz);
CU.Aku(Atv);CU.J4(Mb);CU.An0(Bx2);CU.AGP(Bx6);CU.Ae$(Bx5);CU.Uy(Bx4);CU.Ar0(Bx3);
CU.AwX(Bx8);CU.AwI(BxG);CU.ED(Ep);CU.OV(AJj);CU.N9(Ac6);CU.Akw(AJh);CU.Nw(AfT);CU.
AnL(Byd);CU.Cs(this);if(M0>0)A._GetAutoObject(C.Asp).AG(Bcz,Jp,0,0,0,0,0,0,M0);}
,AG:function(Ma,Ac4,AoR,Byo,BxP,BxQ,Bxz,Byq,BxB){var B3=A._NewObject(A.Device.Rating
,0);B3.G8();var Bdd=A._GetAutoObject(C.AmC).AOI(26,Ac4);if(Bdd>=0)B3.OnSetAnimalId(
A._GetAutoObject(C.AmC).CE(Bdd,0));else A.ab5("%s%U",Xm,Ac4);B3.OnSetTimestamp(Ma
);B3.OnSetTemperature(AoR);B3.OnSetRatingTemperature(Byo);B3.OnSetFaeces(BxP);B3.
OnSetFeed(BxQ);B3.OnSetAppearance(Bxz);B3.OnSetRespiratory(Byq);B3.OnSetBodyWeight(
BxB);B3.Cs(this);},A65:function(aColumn,A9){var O;for(O=0;O<this.RS;O=O+1)if(this.
Gl.Get(O).CE(aColumn)===A9)return O;return-1;},BAf:function(){this.AKW=(this.AKW+
1)%10;return this.A4s.Get(this.AKW);},HL:function(){return this.BeQ;},AOI:function(
aColumn,A9){var O;for(O=0;O<this.RS;O=O+1)if(this.Gl.Get(O).KU(aColumn)===A9)return O;
return-1;},AKd:function(G){if(this.K&&this.K.AKd)return this.K.AKd.apply(this,arguments
);else return C.S2.Bxv.apply(this,arguments);},Bxv:function(G){this.AaH(2016,216
,6);this.AaH(2017,217,7);this.AaH(2018,218,8);this.AaH(2019,219,9);this.AaH(2020
,220,10);this.AaH(2021,221,11);},Bxn:function(s){this.AKd(s);},AaH:function(Ada,
BxK,BxJ){var Vg=A._NewObject(A.Device.CalfDeregistrations,0);Vg.G8();Vg.AkG(Ada);
Vg.AwK(BxK);Vg.AwJ(BxJ);Vg.Cs(this);},_Init:function(aArg){A.Device.ITable._Init.
call(this,aArg);(this.Gl=[]).__proto__=C.S2.Gl;(this.A41=[]).__proto__=C.S2.A41;(
this.A4s=[]).__proto__=C.S2.A4s;(this.A1W=[]).__proto__=C.S2.A1W;this.__proto__=
C.S2;var Ka=this._variants();if(Ka){this.K={};Ka._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=A.Device.ITable;A.Device.
ITable._Done.call(this);},_ReInit:function(){A.Device.ITable._ReInit.call(this);
if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Device.ITable._Mark.
call(this,D);A.aa6(this.Gl,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.S2._variants();},K:null,_className:"DeviceSimulation::TableData"};C.AmC={_Init:
function(){C.S2._Init.call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Asp={_Init:function(){C.S2._Init.call(this
,0);this.OnSetId(1);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Hv={AlN:A.abi(512,null,null),FN:null,Apj:0,CE:function(Ad,Bc){var Bj=this.
Af$(Ad);if(!!Bj)return Bj.CE(Bc);return 0;},H6:function(Ad,Bc){var Bj=this.Af$(Ad
);if(!!Bj)return Bj.H6(Bc);return false;},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;switch(this.Id){case 0:this.AT_(A._GetAutoObject(C.AmC));break;case 1:
this.AT_(A._GetAutoObject(C.Asp));break;case 3:this.AT_(A._GetAutoObject(C.Au2));
break;case 2:break;default:throw new Error(U4+this.Id.toFixed());}},B_:function(
){if(!!this.Filter)return this.Apj;else if(!!this.FN)return this.FN.RS;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1U(this);},V9:function(Ad
,Bc){var Bj=this.Af$(Ad);if(!!Bj)return Bj.V9(Bc);return 0;},Ss:function(Ad,Bc){
var Bj=this.Af$(Ad);if(!!Bj)return Bj.Ss(Bc);return 0;},QG:function(){if(!!this.
FN)return this.FN.QG();return-1;},QK:function(AoT){var IJ=false;if(!!this.FN)IJ=
this.FN.QK(AoT);if(IJ)A.pe([this,this.A1U],this);return IJ;},AbN:function(){if(!
!this.Filter)throw new Error(Xn+A._GetAutoObject(A.Device.Converter).Bjq(this.Id
,this.Filter));if(!!this.FN)return this.FN.A5u(A._NewObject(C.AGE,0));return-1;}
,ZT:function(Ad,Bc,Dx){if(!this.FN.AiH)throw new Error(Rq);var Bj=this.Af$(Ad);if(
!!Bj)return Bj.ZT(Bc,Dx);return false;},HS:function(Ad,Bc,Dx){if(!this.FN.AiH)throw new
Error(Rq);var Bj=this.Af$(Ad);if(!!Bj)return Bj.HS(Bc,Dx);return false;},ZS:function(
Ad,Bc,Dx){if(!this.FN.AiH)throw new Error(Rq);var Bj=this.Af$(Ad);if(!!Bj)return Bj.
ZS(Bc,Dx);return false;},Od:function(Ad,Bc,Dx){if(!this.FN.AiH)throw new Error(Rq
);var Bj=this.Af$(Ad);if(!!Bj)return Bj.Od(Bc,Dx);return false;},L3:function(aColumn
,A9){if(!!this.Filter){var O;for(O=0;O<this.Apj;O=O+1)if(this.AlN.Get(O).CE(aColumn
)===A9)return O;return-1;}else if(!!this.FN)return this.FN.A65(aColumn,A9);return-
1;},KU:function(Ad,Bc){var Bj=this.Af$(Ad);if(!!Bj)return Bj.KU(Bc);return 0;},UH:
function(Ad,Bc,Dx){if(!this.FN.AiH)throw new Error(Rq);var Bj=this.Af$(Ad);if(!!
Bj)return Bj.UH(Bc,Dx);return false;},Aey:function(aColumn,A9){if(!!this.Filter){
var O;for(O=0;O<this.Apj;O=O+1)if(this.AlN.Get(O).KU(aColumn)===A9)return O;return-
1;}else if(!!this.FN)return this.FN.AOI(aColumn,A9);return-1;},FE:function(){if(
!!this.FN)return this.FN.FE();return false;},AjL:function(aColumn,A9){if(!!this.
FN)return this.FN.A65(aColumn,A9)>=0;return false;},Aer:function(aColumn,A9){if(
!!this.FN)return this.FN.AOI(aColumn,A9)>=0;return false;},HL:function(){if(!!this.
FN)return this.FN.HL();return 0;},QN:function(){if(!!this.FN)return this.FN.RS;return 0;
},A1U:function(G){this.A18();if(!!this.Filter&&!!this.FN){var O;for(O=0;O<this.FN.
B_();O=O+1){var A2A=true;var Aw=this.Filter.AOV();var Bj=this.FN.YC(O);if(!!Bj)while(
A2A&&!!Aw){A2A=Bj.Bkq(Aw);Aw=this.Filter.AO0(Aw);}else A.ab5("%s",((Tj+O.toFixed(
))+Aak)+this.FN.B_().toFixed());if(A2A){this.AlN.Set(this.Apj,this.FN.Gl.Get(O));
this.Apj=this.Apj+1;}}}A.pe([this,this.Ans],this);},A18:function(){var O;for(O=0;
O<512;O=O+1)this.AlN.Set(O,null);this.Apj=0;},AT_:function(E){if(this.FN===E)return;
if(!!this.FN)A.z9([this,this.A4Z],this.FN,0);this.FN=E;if(!!this.FN){A.zV([this,
this.A4Z],this.FN,0);A.pe([this,this.A4Z],this);}},A4Z:function(G){A.pe([this,this.
A1U],this);},Af$:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=512)
)return null;else return this.AlN.Get(aIndex);}else if(!!this.FN)return this.FN.
YC(aIndex);A.ab5("%s",AfH+aIndex.toFixed());return null;},_Init:function(aArg){A.
Device.ITable._Init.call(this,aArg);(this.AlN=[]).__proto__=C.Hv.AlN;this.__proto__=
C.Hv;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.AlN
,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A$$={KO:null,AdO:null,OG:null,AM1:false,AB$:true,A4S:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).Acf(1);this.
AdO.As(true);}break;case 1:{A._GetAutoObject(A.Device.Device).Acf(2);A._GetAutoObject(
A.Device.Device).Asc(A._GetAutoObject(A.Device.Device).An.QN());this.KO.Fq(A._GetAutoObject(
A.Device.Device).Afx*50);this.KO.B4=A._GetAutoObject(A.Device.Device).Afx;this.KO.
As(true);}break;case 2:{A._GetAutoObject(A.Device.Device).Acf(3);this.AdO.As(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).Acf(4);A._GetAutoObject(A.Device.
Device).Asc(A._GetAutoObject(A.Device.Device).An.QN());this.KO.Fq(A._GetAutoObject(
A.Device.Device).Afx*50);this.KO.B4=A._GetAutoObject(A.Device.Device).Afx;this.KO.
As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Acf(5);this.AdO.As(true
);}break;case 5:A.pe([this,this.Bg3],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",Aal,A._GetAutoObject(A.Device.Device).SyncState);}},BBU:function(G){this.
AdO.As(false);A.pe([this,this.A4S],this);},BCX:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).Acf(0);A.pe([this,this.A4S],this);}break;default:;}},Bg3:function(G){this.AdO.
As(false);this.KO.As(false);A._GetAutoObject(A.Device.Device).Acf(0);},AwA:function(
E){if(this.AB$===E)return;this.AB$=E;A.abo([this,this.Blq,this.AwA],0);},Aqs:function(
G){var B;this.OG.Cy=true;this.OG.B4=false;this.OG.Fq(100);this.OG.HP(1);this.OG.
Q=[this,this.ASI,this.ATf];A.pe([B=this.OG,B.An2],this);},Bh8:function(G){var B;
this.OG.Cy=true;this.OG.B4=false;this.OG.Fq(400);this.OG.Ux(200);this.OG.HP(3);this.
OG.Q=[this,this.ASI,this.ATf];this.AwA(false);A.pe([B=this.OG,B.An2],this);},ATf:
function(E){if(this.AM1===E)return;this.AM1=E;A.abo([this,this.ASI,this.ATf],0);
},Aqt:function(G){var B;this.OG.An4(this);this.AwA(false);},ByJ:function(XL){var
ALB=A._NewObject(A.Device.AVZ,0);if(XL){ALB.AT7(6);ALB.ATJ(16900);ALB.AT9(1529);
}A._GetAutoObject(A.Device.Device).Axl(ALB);this.AwA(XL);},Blq:function(){return this.
AB$;},ASI:function(){return this.AM1;},_Init:function(aArg){A.acl.Gp._Init.call(
this.KO={I:this},0);A.Core.Timer._Init.call(this.AdO={I:this},0);A.acl.TP._Init.
call(this.OG={I:this},0);this.__proto__=C.A$$;var B;this.KO.HP(1);this.AdO.PZ(2000
);this.KO.SL=[this,this.A4S];this.KO.Q=[B=A._GetAutoObject(A.Device.Device),B.AS7
,B.A0W];this.AdO.MN=[this,this.BBU];A.h7++;},_Done:function(){this.__proto__=null;
this.KO._Done();this.AdO._Done();this.OG._Done();A.h7--;},_ReInit:function(){this.
KO._ReInit();this.AdO._ReInit();this.OG._ReInit();},_Mark:function(D){var B;if((
B=this.KO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.W0={_Init:function(){C.A$$._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AHg={A6:0,_Init:function(aArg){C.WD._Init.
call(this,aArg);this.__proto__=C.AHg;},_className:"DeviceSimulation::UInt64"};C.
Au2={_Init:function(){C.S2._Init.call(this,0);this.OnSetId(3);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Dv:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
BJ.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X$={Aeb:null,CC:function(G){var K=this.K;A.ab5("%s",Xo);K.Aeb.As(true);},E4:
function(G){var K=this.K;if(K.Aeb.Bw===true){K.Aeb.As(false);A.ab5("%s",Aam);}},
Blh:function(G){var K=this.K;K.Aeb.As(false);A._GetAutoObject(A.kR.A5).Acg(A._GetAutoObject(
A.Device.Device).AxR);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Aeb={I:this},0);K.__proto__=C.X$;this.AeU.H(Aan);K.Aeb.PZ(1500);this.UJ.R(AhY);
this.UJ.Z(true);this.AeU.Ax(A.aaL(A.ach.ART));K.Aeb.MN=[this,K.Blh];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Aeb._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Aeb._ReInit();},_Mark:function(D){var B;if((B=this.Aeb)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.V2={Avd:A.jV,FE:function(){A.Device.V2.FE.call(this);this.Avd=A.jV;},_Init:function(
aArg){A.Device.V2._Init.call(this,aArg);this.__proto__=C.V2;},_className:"DeviceSimulation::DataExportContext"
};C.A6p={Bzu:function(Xr){var B;var RG;var CU=A._NewObject(A.Device.Animal,0);var
O;var Amh=0;RG=K4;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B_();O++){CU.Fm(
O,A._GetAutoObject(A.Device.Device).An);if(CU.IsRegistrationNoticePending&&(CU.NaisId>
0)){RG=RG+this.BzU(CU);Amh++;}}Xr.Avd=RG;Xr.AGF=Amh;Xr.E5(3);},Apm:function(Ru){
if(!Ru)return A.jV;return Ru.toFixed();},A2I:function(AoH){var Av=A._NewObject(A.
Core.Bq,0);Av.Initialize(AoH);return Av.Format(Aao);},BdW:function(Ac6){if(!Ac6)
return A.jV;return A._GetAutoObject(A.Device.Converter).A56(Ac6).toFixed();},BdV:
function(Mb){var result=A.jV;switch(Mb){case 0:result=LE;break;case 1:result=AhZ;
break;case 2:result=A.jV;break;default:A.ab5("%s",Alb+Mb.toFixed());}return result;
},BzX:function(AJh){if(!AJh)return A.jV;return AJh.toFixed();},BdX:function(AfT){
if(!AfT)return A.jV;return AfT.toFixed();},Bz1:function(Atv){return(Atv+1).toFixed(
);},Bzr:function(Xr){var B;var RG=A.jV;var CU=A._NewObject(A.Device.Animal,0);var
O;var Amh=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B_();O++){var Azp=A.jV;
if(CU.Arm())Azp=this.Bz5(CU.FirstBodyWeight);CU.Fm(O,A._GetAutoObject(A.Device.Device
).An);RG=RG+(((((((((((this.Apm(CU.NaisId)+String.fromCharCode(0x3B))+this.BzZ(CU.
VisualId))+String.fromCharCode(0x3B))+this.Apm(CU.TransponderId))+String.fromCharCode(
0x3B))+this.BzV(CU.DateOfBirth))+String.fromCharCode(0x3B))+this.Bz4(CU.Gender))+
String.fromCharCode(0x3B))+Azp)+LD);Amh++;}Xr.Avd=RG;Xr.AGF=Amh;Xr.E5(3);},BzZ:function(
Ru){return Ru.toFixed();},Bz4:function(Mb){var result=A.jV;switch(Mb){case 0:result=
Om;break;case 1:result=Xp;break;case 2:result=Aok;break;default:A.ab5("%s",Alb+Mb.
toFixed());}return result;},Bz5:function(M0){if(M0<=0)return A.jV;return A._GetAutoObject(
A.Device.Converter).Ak_(M0);},BzV:function(AoH){var Av=A._NewObject(A.Core.Bq,0);
Av.Initialize(AoH);return Av.Format(AfI);},Bzw:function(Xr){var B;var RG;var CU=
A._NewObject(A.Device.Animal,0);var O;var Amh=0;switch(Xr.B7){case 1:RG=this.BAg(
);break;default:RG=this.BAh();}for(O=0;O<A._GetAutoObject(A.Device.Device).An.B_(
);O++){CU.Fm(O,A._GetAutoObject(A.Device.Device).An);if(CU.IsRegistrationNoticePending&&(
CU.NaisId>0)){switch(Xr.B7){case 1:RG=RG+this.Bz2(CU);break;default:RG=RG+this.Bz3(
CU);}Amh++;}}Xr.Avd=RG;Xr.AGF=Amh;Xr.E5(3);},Bz3:function(C1){return((((((((((((
this.Apm(C1.NaisId)+String.fromCharCode(0x3B))+this.A2I(A._GetAutoObject(A.Device.
Helper).Dr()))+String.fromCharCode(0x3B))+this.A2I(C1.DateOfBirth))+String.fromCharCode(
0x3B))+this.BdV(C1.Gender))+String.fromCharCode(0x3B))+this.BdX(C1.WhereAbouts))+
String.fromCharCode(0x3B))+this.BdW(C1.Breed))+String.fromCharCode(0x3B))+this.Apm(
A._GetAutoObject(A.Device.Device).P1))+LD;},BzU:function(C1){return((((((((((((((((
this.Apm(A._GetAutoObject(A.Device.Device).P1)+String.fromCharCode(0x3B))+this.Apm(
C1.NaisId))+String.fromCharCode(0x3B))+this.A2I(C1.DateOfBirth))+String.fromCharCode(
0x3B))+this.BdW(C1.Breed))+String.fromCharCode(0x3B))+this.BdV(C1.Gender))+String.
fromCharCode(0x3B))+this.BzX(C1.EaseOfDelivery))+String.fromCharCode(0x3B))+this.
BdX(C1.WhereAbouts))+String.fromCharCode(0x3B))+this.Bz1(C1.BirthType))+String.fromCharCode(
0x3B))+this.Apm(C1.NaisIdMother))+LD;},Bz2:function(C1){return(((Ah0+this.BzY(C1.
NaisId))+String.fromCharCode(0x3B))+this.BzW(A._GetAutoObject(A.Device.Helper).Dr(
)))+LD;},BzW:function(AoH){var Av=A._NewObject(A.Core.Bq,0);Av.Initialize(AoH);return Av.
Format(Aao);},BzY:function(Jp){var A2T=Jp.toFixed();var Bem=A2T.length;if((Bem>=
14)&&(Bem<=15)){var Az7=A._GetAutoObject(A.Device.Converter).AsT(Jp);var A1_=A._GetAutoObject(
A.Device.Converter).A6o(Az7);A2T=A1_+A._GetAutoObject(A.Device.Helper).TW(Jp,0,12
).toFixed();}return A2T;},BAh:function(){return AcU;},BAg:function(){return A.jV;
},_Init:function(aArg){this.__proto__=C.A6p;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::CsvDataExporter"
};
C._Init=function(){C.AD8.__proto__=C.WD;C.String.__proto__=C.WD;C.ACc.__proto__=C.
WD;C.AHh.__proto__=C.WD;C.AHf.__proto__=C.WD;C.S2.__proto__=A.Device.ITable;C.Hv.
__proto__=A.Device.ITable;C.AHg.__proto__=C.WD;C.V2.__proto__=A.Device.V2;};C._ReInit=
function(){var B;if((B=C.UI._this))B._ReInit(),C.UI._ReInit.call(B);if((B=C.AmC.
_this))B._ReInit(),C.AmC._ReInit.call(B);if((B=C.Asp._this))B._ReInit(),C.Asp._ReInit.
call(B);if((B=C.W0._this))B._ReInit(),C.W0._ReInit.call(B);if((B=C.Au2._this))B.
_ReInit(),C.Au2._ReInit.call(B);};C.DJ=function(D){var B;if((B=C.UI._this)&&(B._cycle
!=D))B._Done(C.UI._this=null);if((B=C.AmC._this)&&(B._cycle!=D))B._Done(C.AmC._this=
null);if((B=C.Asp._this)&&(B._cycle!=D))B._Done(C.Asp._this=null);if((B=C.W0._this
)&&(B._cycle!=D))B._Done(C.W0._this=null);if((B=C.Au2._this)&&(B._cycle!=D))B._Done(
C.Au2._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */