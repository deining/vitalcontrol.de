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
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var A=index;var C={};
var Cg="ERROR: Cannot add criterion, it is already in the list.";var BF="ERROR: BatteryChargeState is read only";
var E7="ERROR: UpdateChargeActive is read only";var Hr="ERROR: ScanState is read only.";
var I1="ERROR: MeasureState is read only.";var Iw="ERROR: Temperature value is read only";
var O$="ERROR: UpdateDataTable called for Undefined data table.";var Qa="ERROR: UpdateDataTable called for unknown data table id=";
var Qb="ERROR: SyncState is read only.";var CJ="ERROR: ScanTransponder is read only.";
var Fd="ERROR: Body weight value is read only";var LD="ERROR: Predicted temperature value is read only";
var Qc="ERROR: TransferProgress is read only";var J$="ERROR: TransferTarget is read only";
var Oj="ERROR: unhandled assessment.";var Qd="Unhandled enum BodyTemperature: ";
var MU="AU";var Ti="AT";var UZ="BE";var Aad="BA";var Xe="BG";var Ix="CA";var U0=
"CN";var Aae="TW";var U1="HR";var Aaf="CY";var Xf="CZ";var Aag="DK";var Aah="EE";
var U2="FI";var Xg="FR";var Pa="DE";var Aai="GR";var Ol="HU";var Rp="IE";var Xh=
"IT";var Xi="JP";var U3="LV";var Xj="LT";var Aaj="LU";var Xk="MT";var U4="NL";var
Xl="NO";var Xm="PL";var Xn="PT";var Rq="RO";var Tj="RU";var Aak="SK";var AfH="SI";
var Aal="ES";var Xo="SE";var Aam="CH";var Aan="TR";var AhY="UA";var K4="UK";var Aao=
"US";var LE=".";var AhZ="-";var Alb="ERROR: Unhandled mass unit: ";var Om=" ";var
Xp="Unhandled gender";var Aok="Unhandled animal type";var AfI="Unhandled Device::MassUnit.";
var Ah0="Unhandled Device::AnimalListContent.";var AcU="Avid";var Aap="Ordicam / IER SA";
var Ayb="Agrident";var Ayc="Datamars";var Ayd="Allflex";var Aye="Texas Instruments";
var Alc="Nedap";var As2="Digital Angel";var Ayf="null";var Ayg="[ ";var Pb=", ";
var Rr=" ]";var Ayh="Unhandled language";var U5="Unhandled Device::AnimalListAction.";
var As3="Temperature unit conversion not supported: ";var Ayi="->";var Ayj="=";var
Ald=">";var Ayk="<";var AfJ="!=";var Aol="WARNING: Unhandled operator.";var I2="Unknown birth type";
var Aom="Unhandled country: ";var As4="Unhandled Device::Action: ";var AcV="ERROR: Cannot start transaction";
var As5="ERROR: Table is null, cannot load row (";var As6=")";var As7="Table Id mismatch!";
var Aon="ERROR: Row index (";var As8=") out of bounds [0,";var Ale="]";var Ayl="ERROR: Table is full. Item limit: ";
var Aym="Device::ScanTransponder not set";var Ayn="Unhandled TransponderType.";var
As9="Unhandled ScanState.";var Ayo="Could not load animal with transponder";var Pc=
"Birth type";var Ayp="Time calving";var AWm="Pend. reg. notice";var AWn="Perished";
var AWo="Rating temp.";var AWp="Location";var AHy=" mother";var AHz="Reason leaving";
var AfK="Time alarm";var Aoo="Time first weighing";var AWq="Time control";var AHA=
"Time temp.";var Alf="Time watch";var AHB="Time weighing";var AHC="Assessment";var
AWr="Time rating";var AWs="ERROR: Unhandled AnimalTable filter field:";var AHD="Field ";
var AWt="ERROR: Unhandled RatingTable filter field:";var AcW="ERROR: Unhandled table ";
var AWu=" filter fields.";var AWv=" [";var AWw="WARNING: Unhandled filter criterion type.";
var AWx="0";var As_="No table specified";var AHE="Invalid animal id generation method: ";
var AHF="Unhandled AnimalIdGenerationMethod: ";var Ayq="Invalid gender: ";var AHG=
"Invalid ear tag number assignment mode: ";var Ayr=";";var AWy="Invalid animal creation error code: ";
var AWz="Invalid EartagNrAssignmentMode: ";var AWA="Unsupported exponent: ";var AWB=
"Unknown whereabouts type: ";var AHH="Unhandled Gender: ";var AWC="Unhandled AnimalIdAutoGenerationMethod: ";
var MV="\n";var Ays="\n\n";var AWD="Bootloader:\nV\xA0";var AWE="Middleware:\nV\xA0";
var AWF="GUI:\nV\xA0";var AWG="Mainboard: ";var AWH="Torchboard: ";var AHI="Operator not supported.";
var AWI="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayt="Unhandled mass deregistration criterion: ";
var AWJ="Could not load animal with naisId";var As$="Unhandled enum value ";var Ayu=
"UNDEFINED";var AWK="Boot";var AHJ="Charge";var AWL="ChargeWarning";var AHK="ControlledPowerOff";
var AHL="DeviceMain";var AHM="DeviceService";var AWM="DeviceInfo";var AHN="DeviceDataManagement";
var AWN="DeviceAnimalDataMenu";var AWO="DeviceDeviceDataMenu";var Rs="DeviceCheck";
var U6="Home";var AWP="Settings";var AWQ="DateTimeSettings";var AWR="UnitsSettings";
var AWS="DataAcquisitionSettings";var AWT="RegistrationAutomaticSettings";var AWU=
"RegistrationPresettingsSettings";var AWV="TransponderAssignmentSettings";var Ah1=
"TransponderUnlinkSettings";var AHO="TemperatureSettings";var AWW="WeightGainSettings";
var AWX="DeviceSettings";var AHP="RegistrationSettings";var AHQ="InitializationSettings";
var Ayv="PremisesSettings";var Qe="Sleep";var AWY="Sync";var AWZ="EditAnimalData";
var AW0="EditAnimalDataNaisId";var Ata="AnimalList";var AW1="AnimalListFilter";var
AW2="AlarmListFilter";var AW3="WatchListFilter";var AW4="AnimalActionActions";var
AW5="AnimalActionTemperature";var AW6="TemperatureMeasurement";var Atb="AnimalActionWeighing";
var AW7="AnimalActionRate";var AW8="AnimalActionUnregister";var AW9="AnimalActionPerished";
var AW_="AnimalActionNewBornCare";var AW$="AlarmList";var AXa="ControlMeasure";var
AXb="ControlList";var AXc="RangeTest";var AXd="ListsMain";var AXe="ListsIdManagement";
var AHR="WatchList";var Alg="EvaluationMenuMain";var AXf="EvaluationMenuWeights";
var AXg="EvaluationLosses";var AXh="EvaluationRatings";var Ayw="EvaluationTemperatures";
var Alh="EvaluationWeights";var Ali="EvaluationWeightsRecent";var Ayx="EvaluationBirthWeights";
var Aop="AnimalEvaluationFilter";var Ah2="NewMenu";var AXi="NewAnimals";var AHS=
"NewAnimalManualData";var Ayy="MassRecording";var AHT="NewAnimalTransponderData";
var AfL="NewAnimalLoss";var AHU="AutoActionScanScreen";var Aaq="ManualActionScanScreen";
var Alj="SetTransponderScreen";var Aoq="SetSaveTransponderScreen";var AXj="NewAnimalSetTransponderScreen";
var AXk="NewAnimalsSetTransponderScreen";var AXl="NewAnimalCalvingDataScreen";var
AXm="WeightListScreen";var AXn="AnimalSingleInfoScreen";var Atc="AnimalMultiInfoScreen";
var AHV="AnimalRegistrationDetails";var AHW="FreshCowListScreen";var AXo="FreshCowListFilterScreen";
var AXp="DryCowListScreen";var AXq="DryCowListFilterScreen";var AXr="NoTransponderListScreen";
var AXs="NoTransponderListFilterScreen";var AXt="YoungNoTransponderListScreen";var
AXu="YoungNoTransponderListFilterScreen";var AXv="NoNaisIdListScreen";var AXw="NoNaisIdListFilterScreen";
var AXx="RegistrationsListScreen";var AXy="RegistrationsListFilterScreen";var Ayz=
"ActionListScreen";var AHX="ActionListFilterScreen";var AHY="UpdateScreen";var AHZ=
"MotherScanScreen";var AH0="SetSaveNaisIdScreen";var AH1="PurchasedAnimalsList";
var AH2="TextInput";var AXz="AnimalActions";var AXA="Unhandled display mode: ";var
AXB="None";var AXC="Actions Settings";var AXD="Auto Action";var AXE="Menu Item Settings";
var AXF="Rating Type";var AyA="Weighing settings";var AH3="Options";var AXG="AnimalSearch";
var AH4="AnimalSearchUnfiltered";var Ah3="AnimalSearchDriedOff";var U7="MeasurementReady";
var AXH="AnimalMultiInfoMenu";var Aar="MassRecordingDefaults";var AXI="MassRecordingFields";
var AXJ="MassRecordingMenu";var Alk="BirthRegistrationsListMenu";var AfM="Unhandled overlay menu: ";
var AcX="Error";var Aor="Idle";var AXK="IdScanned";var Pd="NotFound";var AH5="Progress";
var AH6="Unhandled scan state: ";var AXL="Prediction";var AH7="Ready";var AH8="Unhandled measure state: ";
var AH9="Unhandled temperature unit: ";var AXM="Unhandled species: ";var AXN="Bosanski";
var AXO="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXP="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";
var AXQ="Hrvatski";var AXR="\u010Ce\u0161tina";var AXS="Dansk";var AXT="English";
var AH_="Nederlands";var AXU="Eesti";var AH$="Suomalainen";var AIa="Fran\xE7ais";
var AyB="Deutsch";var AXV="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AXW="Magyar";var AXX="Italiano";var AXY="\u65E5\u672C\u8A9E";var AXZ="Latvie\u0161u";
var AX0="Lietuvi\u0161kas";var AX1="Norsk";var AX2="Polski";var Aos="Portugu\xEAs";
var Atd="Rom\xE2n\u0103";var AIb="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var
AX3="Sloven\u0161\u010Dina";var AX4="Espa\xF1ol";var AX5="Svenska";var AX6="T\xFCrk\xE7e";
var AX7="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";var
AIc="Unhandled language: ";var AX8="BS";var AX9="ZH";var AX_="CS";var AX$="DA";var
AYa="EN";var AYb="ET";var AYc="EL";var AYd="JA";var AId="SL";var AYe="SV";var AYf=
"Unhandled gender: ";var AYg="Unhandled birth type: ";var AIe="Exporting";var AIf=
"ImportFinish";var AIg="ImportStart";var AIh="Importing";var AyC="Init";var AyD=
"Unhandled sync state: ";var AyE="Unhandled rating attribute: ";var AYh="Unhandled assessment: ";
var Ate="Illegal boolean value: ";var AIi="Unhandled popup ID:";var AIj="Unknown";
var AYi="Severe Error";var AYj="ErrorsDeviceDriverCheck";var AYk="Enter Sleep";var
AYl="About";var AYm="InfoSoftwareVersions";var AYn="InfoHardwareVersions";var AYo=
"InfoSerial";var AYp="ShutDown";var AYq="SuccessDataSync";var AYr="SuccessResetFactory";
var AYs="SuccessResetSettings";var AYt="SuccessResetAnimalData";var AyF="SuccessCreateBackup";
var AYu="SuccessRestoreBackup";var AYv="CreateBackupInProgress";var AyG="RestoreBackupInProgress";
var Atf="FailedCreateBackup";var U8="FailedRestoreBackup";var Atg="TechnicalDetails";
var AYw="WarningDataSync";var AYx="WarningFactory";var AYy="WarningResetAnimalData";
var AIk="WarningResetDeviceData";var AYz="WarningRestart";var AIl="WarningAutoAction";
var AYA="WarningAutoActionNotApplicable";var AYB="WarningNoMenuItem";var Ath="WarningEnterDemoMode";
var AYC="NoAnimalsRegistered";var AYD="MaxNumAnimalsReached";var AIm="MaxNumRatingsReached";
var AYE="MaxNumCalfDeregistrationsReached";var AYF="MissingTransponder";var AYG=
"EarTagNumberTooShort";var AYH="NoValidCountryCode";var AcY="WarningOutdatedAnimalWeight";
var AYI="WarningOutdatedAnimalWeights";var AYJ="WarningWeightEvaluationSingular";
var AYK="WarningWeightEvaluationPlural";var AYL="ScanError";var AIn="ScanNotFound";
var AYM="ScannedAnimalNotFound";var AYN="ScannedTransponderNotFound";var AYO="ScannedNaisIdNotFound";
var AYP="AnimalNotFound";var AYQ="SuccessUnregister";var AYR="SuccessUnregisterPerished";
var AIo="SuccessCreationNewAnimal";var AYS="SuccessCreationNewAnimals";var AYT="AnimalCreationInProgress";
var AYU="EvaluationInProgress";var AIp="DataSyncInProgress";var AIq="AddedToAlarm";
var AYV="RemovedFromAlarm";var AYW="AddedToWatch";var AYX="RemovedFromWatch";var
AYY="AddedToDryOff";var Rt="RemovedFromDryOff";var Ati="AnimalIdAlreadyExists";var
AIr="AnimalIdAlreadyExistsContinuable";var AIs="MissingAnimalId";var Aot="MissingAnimalIdMother";
var Aou="MissingEartagNumber";var AyH="MissingTransponderId";var AYZ="TransponderAlreadyRegistered";
var AIt="TransponderAlreadyRegisteredContinuable";var AY0="TransponderAlreadyRegisteredCapturable";
var AY1="HelpAnimalInfoRating";var AY2="WarningReassignTransponder";var AY3="CannotReassignNaisId";
var AY4="WarningResetToDefaultValue";var AY5="WarningResetThresholds";var AY6="WarningResetTempThresholds";
var AY7="UpdateFirmware";var AY8="UpdateFirmwareBatteryLow";var AY9="ConfirmFirmwareUpdated";
var AY_="ConfirmBootloaderUpdated";var AY$="QuestionAddAnotherCalfMultiples";var
AZa="RemovedAllBirthNoticesPending";var AZb="RemovedAllPurchasedNoticePending";var
AZc="RemovedFromBirthNoticePending";var AZd="RemovedFromPurchasedNoticePending";
var AZe="SuccessClearAnimalLoss";var Aov="RemovedAnimalBirth";var AIu="RemovedAnimalPurchased";
var AZf="WarningNoActionsForAnimalLoss";var AIv="SuccessLinkTransponder";var AIw=
"SuccessChangeTransponder";var AcZ="SuccessUnlinkTransponder";var AIx="SuccessLinkNaisId";
var AZg="WarningDataExportHitBirthFailed";var AIy="SuccessDataExportHitBirth";var
AZh="SuccessDataExportHitBirthDownload";var AyI="SuccessDataExportHitBirthResetAdvice";
var AZi="WarningDataExportPurchasedFailed";var AZj="SuccessDataExportPurchased";
var AyJ="SuccessDataExportPurchasedDownload";var AZk="SuccessDataExportPurchasedResetAdvice";
var AZl="WarningDataExportAnimalsFailed";var AZm="SuccessDataExportAnimalsRatings";
var AIz="SuccessDataExportAnimalsDownload";var Aow="WarningNoPremisesID";var AIA=
"WarningNoPremisesCountry";var AZn="WarningNoFlashDrivePresent";var AIB="WarningNoBackupPathPresent";
var AIC="WarningNoBackupFilePresent";var All="DemoFunctionNotAvailable";var AZo=
"WarningImpreciseTimeSetting";var Aox="ConfirmationRestoreBackup";var AZp="ConfirmationMassDeregistration";
var AID="SuccessMassDeregistration";var AIE="WarningParsedDateInFutureInvalid";var
AZq="WarningParsingDateFailed";var AZr="WarningParsingNaisIdFailed";var AIF="WarningParsingShortNaisIdWithoutPremisesId";
var AZs="DataExportInProgress";var AZt="BarcodeScannerConnectedSwitchScreen";var
AZu="BarcodeScannerDisconnectedSwitchScreen";var AZv="AnimalId";var AZw="FarmId";
var AZx="GroupId";var AZy="PersonId";var AZz="Unhandled transponder type: ";var AZA=
"FDX";var AZB="HDX";var AZC="HDX (Urban)";var AZD="Unhandled transponder protocol: ";
var AZE="Illegal RatingMode: ";var AZF="Unhandled mass unit: ";var AIG="Max array size is 10";
var Xq="Index out of bounds";var AZG="ERROR: Received more integers than expected!";
var Atj="Unhandled double scan action :";var AZH="Illegal WeightRecordingMode: ";
var AZI="Illegal WeightRecordingScope: ";var AZJ="AnimalDataGenderType";var AZK=
"AnimalDataShortNaisId";var AZL="Rating";var AZM="Temperature";var Atk="Weight";
var Atl="Alarm infos";var Atm="Control infos";var Atn="Watch infos";var AyK="Fresh cow infos";
var Aoy="No transponder infos";var AZN="Dry cow info";var AZO="No nais id infos";
var AZP="Birth registrations infos";var AZQ="Purchased registrations infos";var AZR=
"Young no transponder infos";var AZS="Unhandled animal list content:";var AZT="Illegal AutoRegistrationMode: ";
var AZU="Illegal FactoryResetScope: ";var AIH="??";var AZV="Illegal EaseOfDelivery: ";
var AZW="Illegal Whereabouts: ";var AZX="Illegal breed: ";var AZY="Unisex";var AZZ=
"Illegal animalIdGenerationMethod: ";var AZ0="Ascending";var AyL="Descending";var
AZ1="Illegal directionOfCountingName: ";var Ato="Unhandled direction of counting: ";
var Alm="Unhandled German state: ";var AZ2="SH";var AZ3="HH";var AZ4="NI";var AII=
"HB";var AZ5="NW";var AZ6="HE";var AZ7="RP";var AZ8="BW";var AZ9="BY";var AZ_="BB";
var AZ$="MV";var A0a="SN";var AIJ="ST";var A0b="TH";var A0c="One Range Male Female";
var A0d="Two Ranges Male Female";var AIK="Illegal EartagAssignmentMode: ";var A0e=
"Unhandled code set value ";var AIL="Implement in derived class";var A0f="Illegal HIT-Code: ";
var AIM="Illegal ReasonOfLeaving: ";var AIN="Illegal code: ";var Atp="Undefined";
var A0g="Illegal DeviceComponent: ";var A0h="Unhandled Device::MotherSelectionFilterMode: ";
var Atq="Illegal Device::TimespanDays: ";var AyM="Not connected";var AyN="Host";
var A0i="Device";var A0j="Device CDC";var A0k="Host MSC";var AIO="Host HID";var AIP=
"Host CDC";var Aln="Illegal animalIdAutoGenerationMethod: ";var A0l="Unhandled month: ";
var A0m="Illegal transponderAssignmentIdChangeMethod: ";var A0n="Unhandled animal table field: ";
var A0o="Unhandled list view scope: ";var AyO="1 ";var Atr="100 ";var AIQ="10 ";
var AIR="Unhandled weight value precision: ";
C.Action={UNDEFINED:0,TempMeasurement:1,Rating:2,Alarm:4,Watch:8,History:16,AnimalLoss:
32,Unregister:64,Edit:128,Weighing:256,FirstFeeding:512,LinkTransponder:1024,AutoActions:
2048,Calving:4096,DryOff:8192,LinkNaisId:16384,ClearBirthNoticePending:32768,DeleteAnimal:
65536,ScanNaisId:131072,UnlinkTransponder:262144,ClearPurchaseNoticePending:524288
};C.AnimalTableFields={Id:0,VisualId:1,GroupId:2,LocationId:3,DateOfBirth:4,LastTemperature:
5,BirthType:6,Gender:7,IsAlarm:8,IsControl:9,IsRegistered:10,IsFever:11,IsWatch:
12,WorstAssessment:13,AnimalType:14,TimestampAlarm:15,TimestampExpirationFeverAlarm:
16,LastRatingTemperature:17,LastBodyWeight:18,TimestampLastWeighing:19,TimestampLastControl:
20,TimestampLastWatch:21,TransponderId:22,FirstBodyWeight:23,TimestampFirstWeighing:
24,FirstBodyWeightId:25,NaisId:26,IsPerished:27,DateOfLastCalving:28,LactationNumber:
29,TimestampLastTemperature:30,TimestampLastAssessment:31,Breed:32,EaseOfDelivery:
33,WhereAbouts:34,NaisIdMother:35,ReasonOfLeaving:36,IsRegistrationNoticePending:
37,IsDry:38};C.Assessment={None:0,Red:1,Yellow:2,Green:3,Blue:4,Gray:5};C.Filter={
B$:null,Ca:null,CY:function(AH){if(!AH)return;var Aw=this.B$;while(!!Aw){if(Aw===
AH)throw new Error(Cg);Aw=Aw.Ah;}AH.AI=this.Ca;if(!!this.Ca)this.Ca.Ah=AH;this.Ca=
AH;if(!this.B$)this.B$=AH;},AOV:function(){return this.B$;},AO0:function(Bcw){if(
!!Bcw)return Bcw.Ah;return null;},DN:function(AJi,Ed){var Aw=this.B$;while(!!Aw){
if(Aw.EK===AJi){if(Ed===1)return Aw;else if(Aw.Operator===Ed)return Aw;}Aw=Aw.Ah;
}return null;},Nz:function(AH){var Aw=this.B$;while(!!Aw){if(Aw===AH){if(!!Aw.AI
)Aw.AI.Ah=Aw.Ah;if(!!Aw.Ah)Aw.Ah.AI=Aw.AI;if(this.B$===Aw)this.B$=Aw.Ah;if(this.
Ca===Aw)this.Ca=Aw.AI;Aw.Ah=null;Aw.AI=null;return;}Aw=Aw.Ah;}},E_:function(){var
Be=A._NewObject(C.Filter,0);var Aw=this.B$;while(!!Aw){Be.CY(Aw.Abt());Aw=Aw.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ca)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AI:null,EK:-1,Operator:
1,YS:false,Abt:function(){return null;},E_:function(AH){if(!AH)return;this.EK=AH.
EK;this.Operator=AH.Operator;this.YS=AH.YS;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A6:0,Abt:function(){var Aw=A._NewObject(C.Int32FilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var
Aw=(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:
function(Bc,Ed,A9,Qh){this.EK=Bc;this.Operator=Ed;this.A6=A9;this.YS=Qh;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEz:0,AEy:0,Av8:0,P1:0,O0:null,SJ:null,Q4:null,S9:null,R9:null,P6:null,FX:null,An:
null,Bt:null,AnT:null,Pv:null,AuM:A.jV,AutoActions:A.jV,ABZ:A.jV,AG8:A.jV,AG9:A.
jV,AhM:A.jV,AHs:A.jV,AHt:A.jV,AB0:A.jV,AHr:A.jV,AHw:A.jV,ABS:A.jV,ABT:A.jV,ASp:A.
jV,ASu:A.jV,AWj:A.jV,Abd:100,LB:0,ANb:75,AcO:3600,AUt:0,A3:5,AF:0,K2:50000,Pr:0,
AGn:0,AdY:0,Aq$:0,Aq_:0,ASc:1,ASb:1,AjV:0,ASd:1,AxZ:0,Afx:0,AqX:10,AVf:5,Av4:60,
Av2:0,B7:0,An$:0,OT:1,WhereAbouts:0,Ak6:0,AxR:3,ACW:0,AgD:1,Ab3:0,Aqw:0,AN$:11,Breed:
0,EartagNrAssignmentMode:0,Au$:0,ACP:0,ACO:0,In:5,ABR:2,Aqy:0,AON:2,AV6:0,Ea:0,AMl:
0,Ko:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,Im:3,IsRegistrationNoticePending:false,AUs:
false,AM6:false,AeV:true,AR0:false,Aqi:true,AqY:false,AmV:true,HG:false,AVI:false
,AmW:false,AV4:false,AsW:false,AEx:false,AmI:false,UpdateActiveScreen:function(AJ
){if(this.Im===AJ)return;this.Im=AJ;A.abo([this,this.AEL,this.BbD],0);},Zx:function(
E){if(this.K&&this.K.Zx)return this.K.Zx.apply(this,arguments);else return C.DeviceClass.
Bvi.apply(this,arguments);},Bvi:function(E){},BbD:function(Aq){this.Zx(Aq);},UpdateBatteryChargeState:
function(AJ){if(this.Abd===AJ)return;this.Abd=AJ;A.abo([this,this.Awc,this.AyV],
0);},AwB:function(E){if(this.K&&this.K.AwB)return this.K.AwB.apply(this,arguments
);else return C.DeviceClass.Bvt.apply(this,arguments);},Bvt:function(E){A.ab5("%s"
,BF);},AyV:function(Aq){this.AwB(Aq);},UpdateChargeActive:function(AJ){if(this.AmI===
AJ)return;this.AmI=AJ;A.abo([this,this.Awf,this.AyW],0);},AFg:function(E){if(this.
K&&this.K.AFg)return this.K.AFg.apply(this,arguments);else return C.DeviceClass.
BvA.apply(this,arguments);},BvA:function(E){A.ab5("%s",E7);},AyW:function(Aq){this.
AFg(Aq);},UpdateScanState:function(AJ){var B;if(this.ScanState===AJ)return;this.
ScanState=AJ;A.abo([this,this.AS2,this.A0S],0);A._GetAutoObject(C.Helper).BBP(this
);},Ar8:function(E){if(this.K&&this.K.Ar8)return this.K.Ar8.apply(this,arguments
);else return C.DeviceClass.Bwh.apply(this,arguments);},Bwh:function(E){A.ab5("%s"
,Hr);},A0S:function(Aq){this.Ar8(Aq);},UpdateMeasureState:function(AJ){if(this.MeasureState===
AJ)return;this.MeasureState=AJ;A.abo([this,this.AET,this.AI4],0);},Aw2:function(
E){if(this.K&&this.K.Aw2)return this.K.Aw2.apply(this,arguments);else return C.DeviceClass.
Bv0.apply(this,arguments);},Bv0:function(E){A.ab5("%s",I1);},AI4:function(Aq){this.
Aw2(Aq);},UpdateTempValue:function(AJ){if(this.LB===AJ)return;this.LB=AJ;A.abo([
this,this.AEX,this.AI6],0);},Axe:function(E){if(this.K&&this.K.Axe)return this.K.
Axe.apply(this,arguments);else return C.DeviceClass.Bwn.apply(this,arguments);},
Bwn:function(E){A.ab5("%s",Iw);},AI6:function(Aq){this.Axe(Aq);},AnI:function(E){
if(this.K&&this.K.AnI)return this.K.AnI.apply(this,arguments);else return C.DeviceClass.
BvU.apply(this,arguments);},BvU:function(E){},BbV:function(Aq){this.AnI(Aq);},Axf:
function(E){if(this.K&&this.K.Axf)return this.K.Axf.apply(this,arguments);else return C.
DeviceClass.Bwo.apply(this,arguments);},Bwo:function(E){},Atu:function(Aq){this.
Axf(Aq);},AFe:function(E){if(this.K&&this.K.AFe)return this.K.AFe.apply(this,arguments
);else return C.DeviceClass.Bvz.apply(this,arguments);},Bvz:function(E){},BbL:function(
Aq){this.AFe(Aq);},AFK:function(E){if(this.K&&this.K.AFK)return this.K.AFK.apply(
this,arguments);else return C.DeviceClass.Bv2.apply(this,arguments);},Bv2:function(
E){},A0M:function(Aq){this.AFK(Aq);},UpdateMonitoring:function(AJ){if(this.AEx===
AJ)return;this.AEx=AJ;A.abo([this,this.AST,this.A0M],0);},UpdateDataTable:function(
Bcy){var B;switch(Bcy){case 0:A.pe([B=this.An,B.Ans],this);break;case 1:A.pe([B=
this.Bt,B.Ans],this);break;case 3:A.pe([B=this.Pv,B.Ans],this);break;case 2:A.ab5(
"%s",O$);break;default:A.ab5("%s%e",Qa,Bcy);}},AxQ:function(){if(this.K&&this.K.
AxQ)return this.K.AxQ.apply(this,arguments);else return C.DeviceClass.BwY.apply(
this,arguments);},BwY:function(){},AhQ:function(){if(this.K&&this.K.AhQ)return this.
K.AhQ.apply(this,arguments);else return C.DeviceClass.Bw1.apply(this,arguments);
},Bw1:function(){},AhN:function(){if(this.K&&this.K.AhN)return this.K.AhN.apply(
this,arguments);else return C.DeviceClass.BwZ.apply(this,arguments);},BwZ:function(
){},An5:function(){if(this.K&&this.K.An5)return this.K.An5.apply(this,arguments);
else return C.DeviceClass.Bw2.apply(this,arguments);},Bw2:function(){},UpdateLanguage:
function(AJ){if(this.Language===AJ)return;this.Language=AJ;switch(AJ){case 14:A.
_SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(3);break;
case 25:A._SetLanguage(25);break;case 11:A._SetLanguage(4);break;case 17:A._SetLanguage(
5);break;case 10:A._SetLanguage(6);break;case 12:A._SetLanguage(7);break;case 5:
A._SetLanguage(8);break;case 3:A._SetLanguage(9);break;case 1:A._SetLanguage(10);
break;case 8:A._SetLanguage(11);break;case 18:A._SetLanguage(12);break;case 4:A.
_SetLanguage(13);break;case 19:A._SetLanguage(14);break;case 20:A._SetLanguage(15
);break;case 26:A._SetLanguage(26);break;case 15:A._SetLanguage(16);break;case 21:
A._SetLanguage(17);break;case 22:A._SetLanguage(18);break;case 23:A._SetLanguage(
19);break;case 9:A._SetLanguage(20);break;case 27:A._SetLanguage(27);break;case 2:
A._SetLanguage(21);break;case 24:A._SetLanguage(22);break;case 7:A._SetLanguage(
23);break;case 16:A._SetLanguage(24);break;default:A._SetLanguage(0);}A.abo([this
,this.A9p,this.BbV],0);},UpdateTemperatureUnit:function(AJ){if(this.TemperatureUnit===
AJ)return;this.TemperatureUnit=AJ;A.abo([this,this.ArI,this.Atu],0);},UpdateBrightness:
function(AJ){if(this.ANb===AJ)return;this.ANb=AJ;A.abo([this,this.A8_,this.BbL],
0);},SetSystemTime:function(Ah$){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.
apply(this,arguments);else return C.DeviceClass.BwW.apply(this,arguments);},BwW:
function(Ah$){},AxJ:function(){if(this.K&&this.K.AxJ)return this.K.AxJ.apply(this
,arguments);else return C.DeviceClass.Bbr.apply(this,arguments);},Bbr:function(){
},AGB:function(){if(this.K&&this.K.AGB)return this.K.AGB.apply(this,arguments);else
return C.DeviceClass.Bbp.apply(this,arguments);},Bbp:function(){},Bpi:function(){
},UpdateOverlayMenu:function(AJ){if(this.OverlayMenu===AJ)return;this.OverlayMenu=
AJ;A.abo([this,this.Aws,this.Ay3],0);},Dw:function(E){if(this.K&&this.K.Dw)return this.
K.Dw.apply(this,arguments);else return C.DeviceClass.Bwb.apply(this,arguments);}
,Bwb:function(E){},Ay3:function(Aq){this.Dw(Aq);},Axm:function(E){if(this.K&&this.
K.Axm)return this.K.Axm.apply(this,arguments);else return C.DeviceClass.Bwy.apply(
this,arguments);},Bwy:function(E){},Bb7:function(Aq){this.Axm(Aq);},UpdateUnderTemp:
function(AJ){if(this.AcO===AJ)return;this.AcO=AJ;A.abo([this,this.A9U,this.Bb7],
0);},UpdateSyncState:function(AJ){if(this.SyncState===AJ)return;this.SyncState=AJ;
A.abo([this,this.AS4,this.A0U],0);},Acf:function(E){if(this.K&&this.K.Acf)return this.
K.Acf.apply(this,arguments);else return C.DeviceClass.Bwm.apply(this,arguments);
},Bwm:function(E){A.ab5("%s",Qb);},A0U:function(Aq){this.Acf(Aq);},ADj:function(
){if(this.K&&this.K.ADj)return this.K.ADj.apply(this,arguments);else return C.DeviceClass.
Bva.apply(this,arguments);},Bva:function(){return A.jV;},UpdatePopup:function(Jp
,A1E,A1z,A1H){this.AZ(Jp,A1E,A1z,A1H,[this,this.BBv]);},PopupStateChanged:function(
Jp,Ae){if(this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(
this,arguments);else return C.DeviceClass.BwL.apply(this,arguments);},BwL:function(
Jp,Ae){},AF$:function(E){if(this.K&&this.K.AF$)return this.K.AF$.apply(this,arguments
);else return C.DeviceClass.BwA.apply(this,arguments);},BwA:function(E){},Bb8:function(
Aq){this.AF$(Aq);},UpdateVibrationOnKeypressEnabled:function(AJ){if(this.AsW===AJ
)return;this.AsW=AJ;A.abo([this,this.A9V,this.Bb8],0);},Afg:function(E){if(this.
K&&this.K.Afg)return this.K.Afg.apply(this,arguments);else return C.DeviceClass.
Bwz.apply(this,arguments);},Bwz:function(E){},AI7:function(Aq){this.Afg(Aq);},UpdateVibrationOn:
function(Bc1){if(this.AV4===Bc1)return;this.AV4=Bc1;A.abo([this,this.AEY,this.AI7
],0);},AZ:function(Jp,A1E,A1z,A1H,A1A){var Agt=A._NewObject(C.PopupContext,0);Agt.
Id=Jp;Agt.Show=A1E;Agt.AkI=A1z;Agt.Ak5=A1H;Agt.AGg=A1A;this.AnT.Trigger(Agt,false
);},BBv:function(G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar)this.
PopupStateChanged(Ar.Id,Ar.PopupState);},Axa:function(E){if(this.K&&this.K.Axa)return this.
K.Axa.apply(this,arguments);else return C.DeviceClass.Bwg.apply(this,arguments);
},Bwg:function(E){},A0R:function(Aq){this.Axa(Aq);},UpdateRatingMode:function(AJ
){if(this.RatingMode===AJ)return;this.RatingMode=AJ;A.abo([this,this.AS1,this.A0R
],0);},Ae8:function(E){if(this.K&&this.K.Ae8)return this.K.Ae8.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},Att:function(
Aq){this.Ae8(Aq);},UpdateFlashLightOn:function(BcH){if(this.AmW===BcH)return;this.
AmW=BcH;A.abo([this,this.ArF,this.Att],0);},UA:function(E){if(this.K&&this.K.UA)
return this.K.UA.apply(this,arguments);else return C.DeviceClass.Bwr.apply(this,
arguments);},Bwr:function(E){},A0V:function(Aq){this.UA(Aq);},UpdateTopLightOn:function(
BcW){if(this.AVI===BcW)return;this.AVI=BcW;A.abo([this,this.AS6,this.A0V],0);},WO:
function(E){if(this.K&&this.K.WO)return this.K.WO.apply(this,arguments);else return C.
DeviceClass.Bwf.apply(this,arguments);},Bwf:function(E){},Bxd:function(Aq){this.
WO(Aq);},UpdateRGBTopLight:function(BcR){if(this.AUt===BcR)return;this.AUt=BcR;A.
abo([this,this.BlZ,this.Bxd],0);},Awz:function(E){if(this.K&&this.K.Awz)return this.
K.Awz.apply(this,arguments);else return C.DeviceClass.Bvs.apply(this,arguments);
},Bvs:function(E){},Bw8:function(Aq){this.Awz(Aq);},UpdateAutoRegistrationMode:function(
Bcu){if(this.AutoRegistrationMode===Bcu)return;this.AutoRegistrationMode=Bcu;A.abo([
this,this.Blp,this.Bw8],0);},Ar9:function(E){if(this.K&&this.K.Ar9)return this.K.
Ar9.apply(this,arguments);else return C.DeviceClass.Bwi.apply(this,arguments);},
Bwi:function(E){A.ab5("%s",CJ);},A0T:function(Aq){this.Ar9(Aq);},UpdateScanTransponder:
function(Jp,BcY,BcX){if(((this.O0.Id===Jp)&&(this.O0.TransponderType===BcY))&&(this.
O0.TransponderProtocol===BcX))return;this.O0.OnSetId(Jp);this.O0.AT6(BcY);this.O0.
AT5(BcX);A.abo([this,this.AS3,this.A0T],0);},OU:function(E){if(this.K&&this.K.OU
)return this.K.OU.apply(this,arguments);else return C.DeviceClass.BvD.apply(this
,arguments);},BvD:function(E){},U_:function(Aq){this.OU(Aq);},UpdateDigitsID:function(
BcC){if(this.A3===BcC)return;this.A3=BcC;A.abo([this,this.Uq,this.U_],0);},PY:function(
E){if(this.K&&this.K.PY)return this.K.PY.apply(this,arguments);else return C.DeviceClass.
Bwa.apply(this,arguments);},Bwa:function(E){},U$:function(Aq){this.PY(Aq);},UpdateOffsetID:
function(BcN){if(this.AF===BcN)return;this.AF=BcN;A.abo([this,this.Us,this.U$],0
);},AGd:function(E){if(this.K&&this.K.AGd)return this.K.AGd.apply(this,arguments
);else return C.DeviceClass.BwH.apply(this,arguments);},BwH:function(E){A.ab5("%s"
,Fd);},AI8:function(Aq){this.AGd(Aq);},UpdateWeightValue:function(AJ){if(this.K2===
AJ)return;this.K2=AJ;A.abo([this,this.AEZ,this.AI8],0);},AwZ:function(E){if(this.
K&&this.K.AwZ)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.
BvX.apply(this,arguments);},BvX:function(E){},A0L:function(Aq){this.AwZ(Aq);},UpdateMassUnit:
function(AJ){if(this.MassUnit===AJ)return;this.MassUnit=AJ;A.abo([this,this.ASS,
this.A0L],0);},ArL:function(E){if(this.K&&this.K.ArL)return this.K.ArL.apply(this
,arguments);else return C.DeviceClass.Bbl.apply(this,arguments);},Bbl:function(E
){},BbA:function(Aq){this.ArL(Aq);},ArM:function(E){if(this.K&&this.K.ArM)return this.
K.ArM.apply(this,arguments);else return C.DeviceClass.Bbm.apply(this,arguments);
},Bbm:function(E){},A0G:function(Aq){this.ArM(Aq);},UpdateActiveActions:function(
AJ){if(this.Pr===AJ)return;this.Pr=AJ;A.abo([this,this.A8U,this.BbA],0);},UpdateActiveActionsOrder:
function(AJ){if(this.AuM===AJ)return;this.AuM=AJ;A.abo([this,this.ASF,this.A0G],
0);},Akt:function(E){if(this.K&&this.K.Akt)return this.K.Akt.apply(this,arguments
);else return C.DeviceClass.Bbn.apply(this,arguments);},Bbn:function(E){},BbI:function(
Aq){this.Akt(Aq);},UpdateAutoActions:function(AJ){if(this.AutoActions===AJ)return;
this.AutoActions=AJ;A.abo([this,this.A85,this.BbI],0);},AG1:function(){if(this.K&&
this.K.AG1)return this.K.AG1.apply(this,arguments);else return C.DeviceClass.Bw0.
apply(this,arguments);},Bw0:function(){},AsL:function(){if(this.K&&this.K.AsL)return this.
K.AsL.apply(this,arguments);else return C.DeviceClass.Bw4.apply(this,arguments);
},Bw4:function(){},ED:function(E){if(this.K&&this.K.ED)return this.K.ED.apply(this
,arguments);else return C.DeviceClass.Bvp.apply(this,arguments);},Bvp:function(E
){},Bw7:function(Aq){this.ED(Aq);},UpdateAnimalType:function(Ep){if(this.AnimalType===
Ep)return;this.AnimalType=Ep;A.abo([this,this.PX,this.Bw7],0);},Axn:function(E){
if(this.K&&this.K.Axn)return this.K.Axn.apply(this,arguments);else return C.DeviceClass.
BwF.apply(this,arguments);},BwF:function(E){},Bcb:function(Aq){this.Axn(Aq);},UpdateWeightRecordingMode:
function(Bc3){if(this.WeightRecordingMode===Bc3)return;this.WeightRecordingMode=
Bc3;A.abo([this,this.A93,this.Bcb],0);},AFP:function(E){if(this.K&&this.K.AFP)return this.
K.AFP.apply(this,arguments);else return C.DeviceClass.Bwc.apply(this,arguments);
},Bwc:function(E){A.ab5("%s",LD);},A0P:function(Aq){this.AFP(Aq);},UpdatePredictedTempValue:
function(AJ){if(this.AGn===AJ)return;this.AGn=AJ;A.abo([this,this.ASY,this.A0P],
0);},SZ:function(Me){if(this.K&&this.K.SZ)return this.K.SZ.apply(this,arguments);
else return C.DeviceClass.BwV.apply(this,arguments);},BwV:function(Me){},AFk:function(
E){if(this.K&&this.K.AFk)return this.K.AFk.apply(this,arguments);else return C.DeviceClass.
BvC.apply(this,arguments);},BvC:function(E){},AI1:function(Aq){this.AFk(Aq);},UpdateDemoMode:
function(AJ){if(this.HG===AJ)return;this.HG=AJ;A.abo([this,this.AEQ,this.AI1],0);
},AE5:function(E){if(this.K&&this.K.AE5)return this.K.AE5.apply(this,arguments);
else return C.DeviceClass.Bvj.apply(this,arguments);},Bvj:function(E){},BbE:function(
Aq){this.AE5(Aq);},UpdateAgeRegistration:function(BcM){if(this.AdY===BcM)return;
this.AdY=BcM;A.abo([this,this.A8Z,this.BbE],0);},Axo:function(E){if(this.K&&this.
K.Axo)return this.K.Axo.apply(this,arguments);else return C.DeviceClass.BwG.apply(
this,arguments);},BwG:function(E){},Bcc:function(Aq){this.Axo(Aq);},UpdateWeightRecordingScope:
function(BcS){if(this.WeightRecordingScope===BcS)return;this.WeightRecordingScope=
BcS;A.abo([this,this.A94,this.Bcc],0);},J4:function(E){if(this.K&&this.K.J4)return this.
K.J4.apply(this,arguments);else return C.DeviceClass.BvP.apply(this,arguments);}
,BvP:function(E){},A0K:function(Aq){this.J4(Aq);},UpdateGender:function(Mb){if(this.
Gender===Mb)return;this.Gender=Mb;A.abo([this,this.WI,this.A0K],0);},ArY:function(
E){if(this.K&&this.K.ArY)return this.K.ArY.apply(this,arguments);else return C.DeviceClass.
BvR.apply(this,arguments);},BvR:function(E){},AyZ:function(Aq){this.ArY(Aq);},UpdateIDLastUsedMale:
function(Ru){if(this.Aq$===Ru)return;this.Aq$=Ru;A.abo([this,this.Awk,this.AyZ],
0);},ArX:function(E){if(this.K&&this.K.ArX)return this.K.ArX.apply(this,arguments
);else return C.DeviceClass.BvQ.apply(this,arguments);},BvQ:function(E){},AyY:function(
Aq){this.ArX(Aq);},UpdateIDLastUsedFemale:function(Ru){if(this.Aq_===Ru)return;this.
Aq_=Ru;A.abo([this,this.Awj,this.AyY],0);},Zy:function(E){if(this.K&&this.K.Zy)return this.
K.Zy.apply(this,arguments);else return C.DeviceClass.Bvo.apply(this,arguments);}
,Bvo:function(E){},AIZ:function(Aq){this.Zy(Aq);},UpdateAnimalListContent:function(
AJ){if(this.Ko===AJ)return;this.Ko=AJ;A.abo([this,this.AEN,this.AIZ],0);},AE7:function(
E){if(this.K&&this.K.AE7)return this.K.AE7.apply(this,arguments);else return C.DeviceClass.
Bvk.apply(this,arguments);},Bvk:function(E){},BbF:function(Aq){this.AE7(Aq);},UpdateAlarmListAction:
function(AJ){if(this.AMl===AJ)return;this.AMl=AJ;A.abo([this,this.A81,this.BbF],
0);},AFn:function(E){if(this.K&&this.K.AFn)return this.K.AFn.apply(this,arguments
);else return C.DeviceClass.BvK.apply(this,arguments);},BvK:function(E){},BbP:function(
Aq){this.AFn(Aq);},UpdateFlashLightInMeasureState:function(BcI){if(this.AmV===BcI
)return;this.AmV=BcI;A.abo([this,this.A9d,this.BbP],0);},Ae3:function(E){if(this.
K&&this.K.Ae3)return this.K.Ae3.apply(this,arguments);else return C.DeviceClass.
Bvn.apply(this,arguments);},Bvn:function(E){},AIY:function(Aq){this.Ae3(Aq);},UpdateAnimalInfoContent:
function(AJ){if(this.Ea===AJ)return;this.Ea=AJ;A.abo([this,this.AEM,this.AIY],0);
},AGc:function(E){if(this.K&&this.K.AGc)return this.K.AGc.apply(this,arguments);
else return C.DeviceClass.BwB.apply(this,arguments);},BwB:function(E){},Bb9:function(
Aq){this.AGc(Aq);},UpdateWatchListAction:function(AJ){if(this.AV6===AJ)return;this.
AV6=AJ;A.abo([this,this.A9Z,this.Bb9],0);},AFp:function(E){if(this.K&&this.K.AFp
)return this.K.AFp.apply(this,arguments);else return C.DeviceClass.BvM.apply(this
,arguments);},BvM:function(E){},BbR:function(Aq){this.AFp(Aq);},UpdateFreshCowListAction:
function(AJ){if(this.AON===AJ)return;this.AON=AJ;A.abo([this,this.A9f,this.BbR],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.BwN.apply(this
,arguments);},BwN:function(G){},BHb:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.BwP.apply(this,arguments);},BwP:function(
G){},BHd:function(s){this.ResetAutoActions(s);},Awx:function(E){if(this.K&&this.
K.Awx)return this.K.Awx.apply(this,arguments);else return C.DeviceClass.Bvq.apply(
this,arguments);},Bvq:function(E){},BbG:function(Aq){this.Awx(Aq);},Asa:function(
E){if(this.K&&this.K.Asa)return this.K.Asa.apply(this,arguments);else return C.DeviceClass.
Bwp.apply(this,arguments);},Bwp:function(E){},Bb4:function(Aq){this.Asa(Aq);},Asb:
function(E){if(this.K&&this.K.Asb)return this.K.Asb.apply(this,arguments);else return C.
DeviceClass.Bwq.apply(this,arguments);},Bwq:function(E){},Bb5:function(Aq){this.
Asb(Aq);},Asx:function(G){if(this.K&&this.K.Asx)return this.K.Asx.apply(this,arguments
);else return C.DeviceClass.BwS.apply(this,arguments);},BwS:function(G){},BHg:function(
s){this.Asx(s);},UpdateTemperaturesLowString:function(AJ){if(this.AG9===AJ)return;
this.AG9=AJ;A.abo([this,this.A9Q,this.Bb5],0);},UpdateTemperaturesHighString:function(
AJ){if(this.AG8===AJ)return;this.AG8=AJ;A.abo([this,this.A9P,this.Bb4],0);},UpdateAnimalTypesString:
function(AJ){if(this.ABZ===AJ)return;this.ABZ=AJ;A.abo([this,this.A83,this.BbG],
0);},AwT:function(E){if(this.K&&this.K.AwT)return this.K.AwT.apply(this,arguments
);else return C.DeviceClass.BvO.apply(this,arguments);},BvO:function(E){},BbT:function(
Aq){this.AwT(Aq);},UpdateFreshCowsHideMeasured:function(AJ){if(this.AqY===AJ)return;
this.AqY=AJ;A.abo([this,this.A9h,this.BbT],0);},Ar4:function(E){if(this.K&&this.
K.Ar4)return this.K.Ar4.apply(this,arguments);else return C.DeviceClass.Bv8.apply(
this,arguments);},Bv8:function(E){},BbZ:function(Aq){this.Ar4(Aq);},UpdateNaisIdLastUsedMale:
function(Qi){if(this.AEz===Qi)return;this.AEz=Qi;A.abo([this,this.A9x,this.BbZ],
0);},Ar3:function(E){if(this.K&&this.K.Ar3)return this.K.Ar3.apply(this,arguments
);else return C.DeviceClass.Bv7.apply(this,arguments);},Bv7:function(E){},BbY:function(
Aq){this.Ar3(Aq);},UpdateNaisIdLastUsedFemale:function(Qi){if(this.AEy===Qi)return;
this.AEy=Qi;A.abo([this,this.A9w,this.BbY],0);},Aw6:function(E){if(this.K&&this.
K.Aw6)return this.K.Aw6.apply(this,arguments);else return C.DeviceClass.Bv5.apply(
this,arguments);},Bv5:function(E){},Ay1:function(Aq){this.Aw6(Aq);},UpdateNaisIdIncrementMale:
function(Alw){if(this.ASc===Alw)return;this.ASc=Alw;A.abo([this,this.Awp,this.Ay1
],0);},Aw5:function(E){if(this.K&&this.K.Aw5)return this.K.Aw5.apply(this,arguments
);else return C.DeviceClass.Bv4.apply(this,arguments);},Bv4:function(E){},Ay0:function(
Aq){this.Aw5(Aq);},UpdateNaisIdIncrementFemale:function(Alw){if(this.ASb===Alw)return;
this.ASb=Alw;A.abo([this,this.Awo,this.Ay0],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bbs.apply(this,arguments);},Bbs:function(){},AnC:function(E
){if(this.K&&this.K.AnC)return this.K.AnC.apply(this,arguments);else return C.DeviceClass.
Bvw.apply(this,arguments);},Bvw:function(E){},BbK:function(Aq){this.AnC(Aq);},UpdateBootloaderMessage:
function(AJ){if(this.Aqy===AJ)return;this.Aqy=AJ;A.abo([this,this.A89,this.BbK],
0);},AE2:function(E){if(this.K&&this.K.AE2)return this.K.AE2.apply(this,arguments
);else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(E){},Bby:function(
Aq){this.AE2(Aq);},UpdateActionListAction:function(AJ){if(this.ABR===AJ)return;this.
ABR=AJ;A.abo([this,this.A8S,this.Bby],0);},Awv:function(E){if(this.K&&this.K.Awv
)return this.K.Awv.apply(this,arguments);else return C.DeviceClass.Bvf.apply(this
,arguments);},Bvf:function(E){},Bbz:function(Aq){this.Awv(Aq);},UpdateActionListHideMeasured:
function(AJ){if(this.Aqi===AJ)return;this.Aqi=AJ;A.abo([this,this.A8T,this.Bbz],
0);},Uu:function(E){if(this.K&&this.K.Uu)return this.K.Uu.apply(this,arguments);
else return C.DeviceClass.Bvm.apply(this,arguments);},Bvm:function(E){},AoA:function(
Aq){this.Uu(Aq);},UpdateAnimalIdGenerationMethod:function(Bc8){if(this.In===Bc8)
return;this.In=Bc8;A.abo([this,this.Anu,this.AoA],0);},AwL:function(E){if(this.K&&
this.K.AwL)return this.K.AwL.apply(this,arguments);else return C.DeviceClass.BvE.
apply(this,arguments);},BvE:function(E){},A0I:function(Aq){this.AwL(Aq);},UpdateDirectionOfCountingFemale:
function(Alq){if(this.ACO===Alq)return;this.ACO=Alq;A.abo([this,this.ASL,this.A0I
],0);},AwM:function(E){if(this.K&&this.K.AwM)return this.K.AwM.apply(this,arguments
);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(E){},A0J:function(
Aq){this.AwM(Aq);},UpdateDirectionOfCountingMale:function(Alq){if(this.ACP===Alq
)return;this.ACP=Alq;A.abo([this,this.ASM,this.A0J],0);},AwN:function(E){if(this.
K&&this.K.AwN)return this.K.AwN.apply(this,arguments);else return C.DeviceClass.
BvG.apply(this,arguments);},BvG:function(E){},AI2:function(Aq){this.AwN(Aq);},UpdateDirectionOfCountingUnisex:
function(Alq){if(this.Au$===Alq)return;this.Au$=Alq;A.abo([this,this.AER,this.AI2
],0);},ArZ:function(E){if(this.K&&this.K.ArZ)return this.K.ArZ.apply(this,arguments
);else return C.DeviceClass.BvS.apply(this,arguments);},BvS:function(E){},AoB:function(
Aq){this.ArZ(Aq);},UpdateIDLastUsedUnisex:function(Ru){if(this.AjV===Ru)return;this.
AjV=Ru;A.abo([this,this.Anx,this.AoB],0);},Ar5:function(E){if(this.K&&this.K.Ar5
)return this.K.Ar5.apply(this,arguments);else return C.DeviceClass.Bv9.apply(this
,arguments);},Bv9:function(E){},A0N:function(Aq){this.Ar5(Aq);},UpdateNaisIdLastUsedUnisex:
function(Qi){if(this.Av8===Qi)return;this.Av8=Qi;A.abo([this,this.ASU,this.A0N],
0);},Aw7:function(E){if(this.K&&this.K.Aw7)return this.K.Aw7.apply(this,arguments
);else return C.DeviceClass.Bv6.apply(this,arguments);},Bv6:function(E){},Ay2:function(
Aq){this.Aw7(Aq);},UpdateNaisIdIncrementUnisex:function(Alw){if(this.ASd===Alw)return;
this.ASd=Alw;A.abo([this,this.Awq,this.Ay2],0);},Akv:function(E){if(this.K&&this.
K.Akv)return this.K.Akv.apply(this,arguments);else return C.DeviceClass.BvI.apply(
this,arguments);},BvI:function(E){},AyX:function(Aq){this.Akv(Aq);},UpdateEartagNrAssignmentMode:
function(Alr){if(this.EartagNrAssignmentMode===Alr)return;this.EartagNrAssignmentMode=
Alr;A.abo([this,this.Awi,this.AyX],0);},N9:function(E){if(this.K&&this.K.N9)return this.
K.N9.apply(this,arguments);else return C.DeviceClass.Bvy.apply(this,arguments);}
,Bvy:function(E){},Bw_:function(Aq){this.N9(Aq);},UpdateBreed:function(Ac6){if(this.
Breed===Ac6)return;this.Breed=Ac6;A.abo([this,this.Awe,this.Bw_],0);},AFI:function(
E){if(this.K&&this.K.AFI)return this.K.AFI.apply(this,arguments);else return C.DeviceClass.
Bv1.apply(this,arguments);},Bv1:function(E){},Bxb:function(Aq){this.AFI(Aq);},UpdateMiddlewareVersions:
function(Qk,A1v,A1w,A1D,A1k){this.SJ.OnSetTimestamp(Qk);this.SJ.AFD(A1v);this.SJ.
AFJ(A1w);this.SJ.AFT(A1D);this.SJ.AFj(A1k);A.abo([this,this.BlT,this.Bxb],0);},AFC:
function(E){if(this.K&&this.K.AFC)return this.K.AFC.apply(this,arguments);else return C.
DeviceClass.BvV.apply(this,arguments);},BvV:function(E){},Bxa:function(Aq){this.
AFC(Aq);},UpdateMainboardVersions:function(Qk,A1t,A1u,A1s,A1J,A1K,A1I){this.Q4.OnSetTimestamp(
Qk);this.Q4.AFA(A1t);this.Q4.AFB(A1u);this.Q4.AFz(A1s);this.Q4.AF7(A1J);this.Q4.
AF8(A1K);this.Q4.AF6(A1I);A.abo([this,this.BlR,this.Bxa],0);},AF9:function(E){if(
this.K&&this.K.AF9)return this.K.AF9.apply(this,arguments);else return C.DeviceClass.
Bws.apply(this,arguments);},Bws:function(E){},Bxh:function(Aq){this.AF9(Aq);},UpdateTorchboardVersions:
function(Qk,A1t,A1u,A1s,A1J,A1K,A1I){this.S9.OnSetTimestamp(Qk);this.S9.AFA(A1t);
this.S9.AFB(A1u);this.S9.AFz(A1s);this.S9.AF7(A1J);this.S9.AF8(A1K);this.S9.AF6(
A1I);A.abo([this,this.Bmf,this.Bxh],0);},AFa:function(E){if(this.K&&this.K.AFa)return this.
K.AFa.apply(this,arguments);else return C.DeviceClass.Bvx.apply(this,arguments);
},Bvx:function(E){},Bw9:function(Aq){this.AFa(Aq);},UpdateBootloaderVersions:function(
Qk,A1v,A1w,A1D,A1k){this.R9.OnSetTimestamp(Qk);this.R9.AFD(A1v);this.R9.AFJ(A1w);
this.R9.AFT(A1D);this.R9.AFj(A1k);A.abo([this,this.Bls,this.Bw9],0);},AFl:function(
E){if(this.K&&this.K.AFl)return this.K.AFl.apply(this,arguments);else return C.DeviceClass.
BvH.apply(this,arguments);},BvH:function(E){},BbO:function(Aq){this.AFl(Aq);},UpdateDryCowListAction:
function(AJ){if(this.AN$===AJ)return;this.AN$=AJ;A.abo([this,this.A9b,this.BbO],
0);},AJS:function(A1l){if(this.K&&this.K.AJS)return this.K.AJS.apply(this,arguments
);else return C.DeviceClass.Bxt.apply(this,arguments);},Bxt:function(A1l){return false;
},AE_:function(E){if(this.K&&this.K.AE_)return this.K.AE_.apply(this,arguments);
else return C.DeviceClass.Bvu.apply(this,arguments);},Bvu:function(E){},AI0:function(
Aq){this.AE_(Aq);},UpdateBirthListView:function(AJ){if(this.Aqw===AJ)return;this.
Aqw=AJ;A.abo([this,this.AEO,this.AI0],0);},BatchResetBirthNoticePending:function(
){var O;var AiZ=0;var Ado=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOR();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B_();O++){A._GetAutoObject(C.Helper).GT(O);A._GetAutoObject(C.Helper
).W.OV(false);A._GetAutoObject(C.Helper).W.Cs(A._GetAutoObject(C.Device).An);AiZ++;
}A._GetAutoObject(C.Device).An.Bk(Ado);return AiZ;},UpdateTransferProgress:function(
AJ){if(this.AxZ===AJ)return;this.AxZ=AJ;A.abo([this,this.AS7,this.A0W],0);},AF_:
function(E){if(this.K&&this.K.AF_)return this.K.AF_.apply(this,arguments);else return C.
DeviceClass.Bwt.apply(this,arguments);},Bwt:function(E){A.ab5("%s",Qc);},A0W:function(
Aq){this.AF_(Aq);},UpdateTransferTarget:function(AJ){if(this.Afx===AJ)return;this.
Afx=AJ;A.abo([this,this.A9T,this.Bb6],0);},Asc:function(E){if(this.K&&this.K.Asc
)return this.K.Asc.apply(this,arguments);else return C.DeviceClass.Bwu.apply(this
,arguments);},Bwu:function(E){A.ab5("%s",J$);},Bb6:function(Aq){this.Asc(Aq);},AsK:
function(){if(this.K&&this.K.AsK)return this.K.AsK.apply(this,arguments);else return C.
DeviceClass.Bw3.apply(this,arguments);},Bw3:function(){},Aw$:function(E){if(this.
K&&this.K.Aw$)return this.K.Aw$.apply(this,arguments);else return C.DeviceClass.
Bwd.apply(this,arguments);},Bwd:function(E){},A0Q:function(Aq){this.Aw$(Aq);},UpdatePremisesID:
function(Ru){if(this.P1===Ru)return;this.P1=Ru;A.abo([this,this.ASZ,this.A0Q],0);
},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);
else return C.DeviceClass.Bv3.apply(this,arguments);},Bv3:function(E){},AI5:function(
Aq){this.Aw4(Aq);},UpdateMotherSelectionDriedOffFilter:function(AJ){if(this.Ab3===
AJ)return;this.Ab3=AJ;A.abo([this,this.AEV,this.AI5],0);},AFq:function(E){if(this.
K&&this.K.AFq)return this.K.AFq.apply(this,arguments);else return C.DeviceClass.
BvN.apply(this,arguments);},BvN:function(E){},BbS:function(Aq){this.AFq(Aq);},UpdateFreshCowSpan:
function(AJ){if(this.AqX===AJ)return;this.AqX=AJ;A.abo([this,this.A9g,this.BbS],
0);},UpdateUSBDevice:function(BcZ,Bc0,BcQ){if(((this.P6.Z_===BcZ)&&(this.P6.AsV===
Bc0))&&(this.P6.Aso===BcQ))return;this.P6.AT7(BcZ);this.P6.AT9(Bc0);this.P6.ATJ(
BcQ);A.abo([this,this.Ut,this.Vb],0);},Axl:function(E){if(this.K&&this.K.Axl)return this.
K.Axl.apply(this,arguments);else return C.DeviceClass.Bwx.apply(this,arguments);
},Bwx:function(E){A.ab5("%s",E7);},Vb:function(Aq){this.Axl(Aq);},AxP:function(){
if(this.K&&this.K.AxP)return this.K.AxP.apply(this,arguments);else return C.DeviceClass.
BwX.apply(this,arguments);},BwX:function(){},Aro:function(){if(this.K&&this.K.Aro
)return this.K.Aro.apply(this,arguments);else return C.DeviceClass.Bvd.apply(this
,arguments);},Bvd:function(){return false;},AqI:function(){if(this.K&&this.K.AqI
)return this.K.AqI.apply(this,arguments);else return C.DeviceClass.Bu_.apply(this
,arguments);},Bu_:function(){},AFW:function(E){if(this.K&&this.K.AFW)return this.
K.AFW.apply(this,arguments);else return C.DeviceClass.Bwj.apply(this,arguments);
},Bwj:function(E){},Bxe:function(Aq){this.AFW(Aq);},UpdateSerialNumber:function(
AJ){if(this.AhM===AJ)return;this.AhM=AJ;A.abo([this,this.Bl6,this.Bxe],0);},Aww:
function(E){if(this.K&&this.K.Aww)return this.K.Aww.apply(this,arguments);else return C.
DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){},A0H:function(Aq){this.
Aww(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bc7){if(this.AgD===Bc7)return;
this.AgD=Bc7;A.abo([this,this.ASG,this.A0H],0);},ACC:function(){return false;},AGC:
function(){return false;},AFY:function(E){if(this.K&&this.K.AFY)return this.K.AFY.
apply(this,arguments);else return C.DeviceClass.Bwk.apply(this,arguments);},Bwk:
function(E){},Bb3:function(Aq){this.AFY(Aq);},UpdateShutdownTimer:function(AJ){if(
this.AVf===AJ)return;this.AVf=AJ;A.abo([this,this.A9M,this.Bb3],0);},Asy:function(
G){if(this.K&&this.K.Asy)return this.K.Asy.apply(this,arguments);else return C.DeviceClass.
BwT.apply(this,arguments);},BwT:function(G){},BHh:function(s){this.Asy(s);},Asf:
function(E){if(this.K&&this.K.Asf)return this.K.Asf.apply(this,arguments);else return C.
DeviceClass.BwD.apply(this,arguments);},BwD:function(E){},Bb$:function(Aq){this.
Asf(Aq);},Asg:function(E){if(this.K&&this.K.Asg)return this.K.Asg.apply(this,arguments
);else return C.DeviceClass.BwE.apply(this,arguments);},BwE:function(E){},Bca:function(
Aq){this.Asg(Aq);},UpdateWeightGainsLowString:function(AJ){if(this.AHt===AJ)return;
this.AHt=AJ;A.abo([this,this.A92,this.Bca],0);},UpdateWeightGainsHighString:function(
AJ){if(this.AHs===AJ)return;this.AHs=AJ;A.abo([this,this.A91,this.Bb$],0);},Awy:
function(E){if(this.K&&this.K.Awy)return this.K.Awy.apply(this,arguments);else return C.
DeviceClass.Bvr.apply(this,arguments);},Bvr:function(E){},BbH:function(Aq){this.
Awy(Aq);},UpdateAnimalTypesWeightGainsString:function(AJ){if(this.AB0===AJ)return;
this.AB0=AJ;A.abo([this,this.A84,this.BbH],0);},Ase:function(E){if(this.K&&this.
K.Ase)return this.K.Ase.apply(this,arguments);else return C.DeviceClass.BwC.apply(
this,arguments);},BwC:function(E){},Bb_:function(Aq){this.Ase(Aq);},Ash:function(
E){if(this.K&&this.K.Ash)return this.K.Ash.apply(this,arguments);else return C.DeviceClass.
BwI.apply(this,arguments);},BwI:function(E){},Bcd:function(Aq){this.Ash(Aq);},UpdateWeightValueBirthString:
function(AJ){if(this.AHw===AJ)return;this.AHw=AJ;A.abo([this,this.A95,this.Bcd],
0);},UpdateWeightGainsAverageString:function(AJ){if(this.AHr===AJ)return;this.AHr=
AJ;A.abo([this,this.A90,this.Bb_],0);},AwO:function(E){if(this.K&&this.K.AwO)return this.
K.AwO.apply(this,arguments);else return C.DeviceClass.BvJ.apply(this,arguments);
},BvJ:function(E){},Bw$:function(Aq){this.AwO(Aq);},UpdateEvaluationAnimalType:function(
Ep){if(this.ACW===Ep)return;this.ACW=Ep;A.abo([this,this.BlC,this.Bw$],0);},UpdateStartScreen:
function(AJ){if(this.AxR===AJ)return;this.AxR=AJ;A.abo([this,this.Bl7,this.Bxf],
0);},Axd:function(E){if(this.K&&this.K.Axd)return this.K.Axd.apply(this,arguments
);else return C.DeviceClass.Bwl.apply(this,arguments);},Bwl:function(E){},Bxf:function(
Aq){this.Axd(Aq);},AEa:function(){if(this.K&&this.K.AEa)return this.K.AEa.apply(
this,arguments);else return C.DeviceClass.Bvb.apply(this,arguments);},Bvb:function(
){return 1;},AEb:function(){if(this.K&&this.K.AEb)return this.K.AEb.apply(this,arguments
);else return C.DeviceClass.Bvc.apply(this,arguments);},Bvc:function(){return 1;
},GetCommitCount:function(){return 2227;},GetCommitEpoch:function(){return 1770993065;
},GetCommitHash:function(){return A.kR.Bir;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 13;},AFH:
function(E){if(this.K&&this.K.AFH)return this.K.AFH.apply(this,arguments);else return C.
DeviceClass.BvZ.apply(this,arguments);},BvZ:function(E){},BbX:function(Aq){this.
AFH(Aq);},UpdateMaximumAgeNewOnFarm:function(AJ){if(this.Av4===AJ)return;this.Av4=
AJ;A.abo([this,this.A9v,this.BbX],0);},Axj:function(E){if(this.K&&this.K.Axj)return this.
K.Axj.apply(this,arguments);else return C.DeviceClass.Bwv.apply(this,arguments);
},Bwv:function(E){},A0X:function(Aq){this.Axj(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Aze){if(this.Ak6===Aze)return;this.Ak6=Aze;A.abo([this,this.AS8,this.A0X
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiZ=0;var Ado=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).Avz();A._GetAutoObject(C.Device
).An.Bk(Be);for(O=0;O<A._GetAutoObject(C.Device).An.B_();O++){A._GetAutoObject(C.
Helper).GT(O);A._GetAutoObject(C.Helper).W.OV(false);A._GetAutoObject(C.Helper).
W.Cs(A._GetAutoObject(C.Device).An);AiZ++;}A._GetAutoObject(C.Device).An.Bk(Ado);
return AiZ;},BnU:function(E){},UpdateMassRecordingAutomatic:function(AJ){if(this.
AR0===AJ)return;this.AR0=AJ;A.abo([this,this.BlS,this.BnU],0);},Nw:function(E){if(
this.K&&this.K.Nw)return this.K.Nw.apply(this,arguments);else return C.DeviceClass.
BwJ.apply(this,arguments);},BwJ:function(E){},Bxi:function(Aq){this.Nw(Aq);},UpdateWhereAbouts:
function(AfT){if(this.WhereAbouts===AfT)return;this.WhereAbouts=AfT;A.abo([this,
this.Awt,this.Bxi],0);},ArO:function(E){if(this.K&&this.K.ArO)return this.K.ArO.
apply(this,arguments);else return C.DeviceClass.Bvg.apply(this,arguments);},Bvg:
function(E){},BbB:function(Aq){this.ArO(Aq);},ArP:function(E){if(this.K&&this.K.
ArP)return this.K.ArP.apply(this,arguments);else return C.DeviceClass.Bvh.apply(
this,arguments);},Bvh:function(E){},BbC:function(Aq){this.ArP(Aq);},UpdateActiveMassRecordingFields:
function(AJ){if(this.ABS===AJ)return;this.ABS=AJ;A.abo([this,this.A8V,this.BbB],
0);},UpdateActiveMassRecordingFieldsOrder:function(AJ){if(this.ABT===AJ)return;this.
ABT=AJ;A.abo([this,this.A8W,this.BbC],0);},Asv:function(G){if(this.K&&this.K.Asv
)return this.K.Asv.apply(this,arguments);else return C.DeviceClass.BwO.apply(this
,arguments);},BwO:function(G){},BHc:function(s){this.Asv(s);},AFF:function(E){if(
this.K&&this.K.AFF)return this.K.AFF.apply(this,arguments);else return C.DeviceClass.
BvW.apply(this,arguments);},BvW:function(E){},AI3:function(Aq){this.AFF(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AJ){if(this.AeV===AJ)return;this.AeV=AJ;A.abo([this,this.AES,this.AI3],
0);},AFE:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AJ){if(this.Av2===AJ)return;this.Av2=AJ;A.abo([this,this.A9t,this.AFE],
0);},X_:function(){if(this.K&&this.K.X_)return this.K.X_.apply(this,arguments);else
return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:function(){return false;},Aqt:
function(){if(this.K&&this.K.Aqt)return this.K.Aqt.apply(this,arguments);else return C.
DeviceClass.Bu7.apply(this,arguments);},Bu7:function(){return false;},Aqs:function(
){if(this.K&&this.K.Aqs)return this.K.Aqs.apply(this,arguments);else return C.DeviceClass.
Bu6.apply(this,arguments);},Bu6:function(){return false;},Aqu:function(){if(this.
K&&this.K.Aqu)return this.K.Aqu.apply(this,arguments);else return C.DeviceClass.
Bu9.apply(this,arguments);},Bu9:function(){return false;},Aw1:function(E){if(this.
K&&this.K.Aw1)return this.K.Aw1.apply(this,arguments);else return C.DeviceClass.
BvY.apply(this,arguments);},BvY:function(E){},BbW:function(Aq){this.Aw1(Aq);},UpdateMaxWeightValuePrecision:
function(AJ){if(this.OT===AJ)return;this.OT=AJ;A.abo([this,this.A9u,this.BbW],0);
},Aw8:function(E){if(this.K&&this.K.Aw8)return this.K.Aw8.apply(this,arguments);
else return C.DeviceClass.Bv_.apply(this,arguments);},Bv_:function(E){},Bb0:function(
Aq){this.Aw8(Aq);},UpdateNoNaisIdListActions:function(AJ){if(this.ASp===AJ)return;
this.ASp=AJ;A.abo([this,this.A9y,this.Bb0],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BwQ.apply(this,arguments);},BwQ:
function(G){},BHe:function(s){this.ResetNoNaisIdListActions(s);},Aw9:function(E){
if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments);else return C.DeviceClass.
Bv$.apply(this,arguments);},Bv$:function(E){},Bb1:function(Aq){this.Aw9(Aq);},UpdateNoTransponderListActions:
function(AJ){if(this.ASu===AJ)return;this.ASu=AJ;A.abo([this,this.A9z,this.Bb1],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BwR.apply(this,arguments);},BwR:function(G){},BHf:function(s){this.ResetNoTransponderListActions(
s);},Axq:function(E){if(this.K&&this.K.Axq)return this.K.Axq.apply(this,arguments
);else return C.DeviceClass.BwK.apply(this,arguments);},BwK:function(E){},Bce:function(
Aq){this.Axq(Aq);},UpdateYoungNoTransponderListActions:function(AJ){if(this.AWj===
AJ)return;this.AWj=AJ;A.abo([this,this.A97,this.Bce],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BwU.apply(this,arguments);},BwU:
function(G){},BHi:function(s){this.ResetYoungNoTransponderListActions(s);},Axk:function(
E){if(this.K&&this.K.Axk)return this.K.Axk.apply(this,arguments);else return C.DeviceClass.
Bww.apply(this,arguments);},Bww:function(E){},A0Y:function(Aq){this.Axk(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Aze){if(this.An$===Aze)return;this.An$=Aze;A.abo([this,this.AS9,this.A0Y
],0);},Asu:function(FU,AoG,AJp){if(this.K&&this.K.Asu)return this.K.Asu.apply(this
,arguments);else return C.DeviceClass.BwM.apply(this,arguments);},BwM:function(FU
,AoG,AJp){this.FX.FE();this.FX.B7=FU;this.FX.AgQ=AoG;this.FX.AVe=AJp;this.FX.E5(
1);A._GetAutoObject(C.Device).AZ(110,true,A.jV,0,[this,this.BBe]);},BBe:function(
G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))
A.aaS([this,this.BCT],this);},BCT:function(G){this.FX.E5(2);this.AxP();A._GetAutoObject(
C.Device).AZ(110,false,A.jV,0,null);},AE$:function(E){if(this.K&&this.K.AE$)return this.
K.AE$.apply(this,arguments);else return C.DeviceClass.Bvv.apply(this,arguments);
},Bvv:function(E){},BbJ:function(Aq){this.AE$(Aq);},UpdateBirthRegistrationsListResetOnExport:
function(AJ){if(this.AM6===AJ)return;this.AM6=AJ;A.abo([this,this.A87,this.BbJ],
0);},AFQ:function(E){if(this.K&&this.K.AFQ)return this.K.AFQ.apply(this,arguments
);else return C.DeviceClass.Bwe.apply(this,arguments);},Bwe:function(E){},Bb2:function(
Aq){this.AFQ(Aq);},UpdatePurchasedListResetOnExport:function(AJ){if(this.AUs===AJ
)return;this.AUs=AJ;A.abo([this,this.A9B,this.Bb2],0);},Bpg:function(){},AwG:function(
E){if(this.K&&this.K.AwG)return this.K.AwG.apply(this,arguments);else return C.DeviceClass.
BvB.apply(this,arguments);},BvB:function(E){},BbM:function(Aq){this.AwG(Aq);},UpdateCountry:
function(FU){if(this.B7===FU)return;this.B7=FU;A.abo([this,this.A8$,this.BbM],0);
},OV:function(E){if(this.K&&this.K.OV)return this.K.OV.apply(this,arguments);else
return C.DeviceClass.BvT.apply(this,arguments);},BvT:function(E){},BbU:function(
Aq){this.OV(Aq);},UpdateIsRegistrationNoticePending:function(AJj){if(this.IsRegistrationNoticePending===
AJj)return;this.IsRegistrationNoticePending=AJj;A.abo([this,this.Awn,this.BbU],0
);},AEL:function(){return this.Im;},Awc:function(){return this.Abd;},Awf:function(
){return this.AmI;},AS2:function(){return this.ScanState;},AET:function(){return this.
MeasureState;},AEX:function(){return this.LB;},A9p:function(){return this.Language;
},ArI:function(){return this.TemperatureUnit;},A8_:function(){return this.ANb;},
AST:function(){return this.AEx;},Aws:function(){return this.OverlayMenu;},A9U:function(
){return this.AcO;},AS4:function(){return this.SyncState;},A9V:function(){return this.
AsW;},AEY:function(){return this.AV4;},AS1:function(){return this.RatingMode;},ArF:
function(){return this.AmW;},AS6:function(){return this.AVI;},BlZ:function(){return this.
AUt;},Blp:function(){return this.AutoRegistrationMode;},AS3:function(){return this.
O0;},Uq:function(){return this.A3;},Us:function(){return this.AF;},AEZ:function(
){return this.K2;},ASS:function(){return this.MassUnit;},A8U:function(){return this.
Pr;},ASF:function(){return this.AuM;},A85:function(){return this.AutoActions;},PX:
function(){return this.AnimalType;},A93:function(){return this.WeightRecordingMode;
},ASY:function(){return this.AGn;},AEQ:function(){return this.HG;},A8Z:function(
){return this.AdY;},A94:function(){return this.WeightRecordingScope;},WI:function(
){return this.Gender;},Awk:function(){return this.Aq$;},Awj:function(){return this.
Aq_;},AEN:function(){return this.Ko;},A81:function(){return this.AMl;},A9d:function(
){return this.AmV;},AEM:function(){return this.Ea;},A9Z:function(){return this.AV6;
},A9f:function(){return this.AON;},A83:function(){return this.ABZ;},A9P:function(
){return this.AG8;},A9Q:function(){return this.AG9;},A9h:function(){return this.
AqY;},A9x:function(){return this.AEz;},A9w:function(){return this.AEy;},Awp:function(
){return this.ASc;},Awo:function(){return this.ASb;},A89:function(){return this.
Aqy;},A8S:function(){return this.ABR;},A8T:function(){return this.Aqi;},Anu:function(
){return this.In;},ASL:function(){return this.ACO;},ASM:function(){return this.ACP;
},AER:function(){return this.Au$;},Anx:function(){return this.AjV;},ASU:function(
){return this.Av8;},Awq:function(){return this.ASd;},Awi:function(){return this.
EartagNrAssignmentMode;},Awe:function(){return this.Breed;},BlT:function(){return this.
SJ;},BlR:function(){return this.Q4;},Bmf:function(){return this.S9;},Bls:function(
){return this.R9;},A9b:function(){return this.AN$;},AEO:function(){return this.Aqw;
},AS7:function(){return this.AxZ;},A9T:function(){return this.Afx;},ASZ:function(
){return this.P1;},AEV:function(){return this.Ab3;},A9g:function(){return this.AqX;
},Ut:function(){return this.P6;},Bl6:function(){return this.AhM;},ASG:function(){
return this.AgD;},A9M:function(){return this.AVf;},A91:function(){return this.AHs;
},A92:function(){return this.AHt;},A84:function(){return this.AB0;},A90:function(
){return this.AHr;},A95:function(){return this.AHw;},BlC:function(){return this.
ACW;},Bl7:function(){return this.AxR;},A9v:function(){return this.Av4;},AS8:function(
){return this.Ak6;},BlS:function(){return this.AR0;},Awt:function(){return this.
WhereAbouts;},A8V:function(){return this.ABS;},A8W:function(){return this.ABT;},
AES:function(){return this.AeV;},A9t:function(){return this.Av2;},A9u:function(){
return this.OT;},A9y:function(){return this.ASp;},A9z:function(){return this.ASu;
},A97:function(){return this.AWj;},AS9:function(){return this.An$;},A87:function(
){return this.AM6;},A9B:function(){return this.AUs;},A8$:function(){return this.
B7;},Awn:function(){return this.IsRegistrationNoticePending;},_Init:function(aArg
){C.Table._Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this},0);
A.Core.Baj._Init.call(this.AnT={I:this},0);C.Table._Init.call(this.Pv={I:this},0
);this.__proto__=C.DeviceClass;this.An.OnSetId(0);this.Bt.OnSetId(1);this.Pv.OnSetId(
3);this.O0=A._NewObject(C.Transponder,0);this.SJ=A._NewObject(C.AxO,0);this.Q4=A.
_NewObject(C.AvC,0);this.S9=A._NewObject(C.AvC,0);this.R9=A._NewObject(C.AxO,0);
this.P6=A._NewObject(C.AVZ,0);this.FX=A._NewObject(C.V2,0);var Ka=this._variants(
);if(Ka){this.K={};Ka._Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K
)this.K._Done.call(this);this.__proto__=null;this.An._Done();this.Bt._Done();this.
AnT._Done();this.Pv._Done();A.h7--;},_ReInit:function(){this.An._ReInit();this.Bt.
_ReInit();this.AnT._ReInit();this.Pv._ReInit();if(this.K)this.K._ReInit.call(this
);},_Mark:function(D){var B;if((B=this.O0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.SJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q4)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.S9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R9)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.P6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.FX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(
B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(
){return A.acq.DeviceClass._variants();},K:null,I:null,_cycle:0,_observers:null,
_className:"Device::DeviceClass"};C.Device={_Init:function(){C.DeviceClass._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.ScreenType={UNDEFINED:0,Sleep:1,Boot:2,Home:3,Charge:4,Sync:5,Settings:6,EditAnimalData:
7,AnimalList:8,AnimalListFilter:9,AnimalActionTemperature:10,AnimalActionRate:11
,AlarmList:12,ControlMeasure:13,ControlList:14,RangeTest:15,DateTimeSettings:16,
TemperatureSettings:17,DeviceSettings:18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:
21,UnitsSettings:22,WeightGainSettings:23,AnimalActionActions:24,EvaluationMenuMain:
25,NewAnimals:26,MassRecordingScreen:27,NewAnimalManualData:28,AnimalActionUnregister:
29,AnimalActionNewbornCare:30,NewAnimalTransponderData:31,SetTransponderScreen:32
,WeightListScreen:33,AutoActionScanScreen:34,ManualActionScanScreen:35,AnimalSingleInfoScreen:
36,InitializationSettings:37,ControlledPowerOff:38,ChargeWarning:39,AlarmListFilter:
40,WatchListFilter:41,DataAcquisitionSettings:42,FreshCowList:43,FreshCowListFilter:
44,SetSaveTransponderScreen:45,NoTransponderList:46,NoTransponderListFilter:47,AnimalActionPerished:
48,NewAnimalSetTransponderScreen:49,AnimalMultiInfoScreen:50,ActionList:51,ActionListFilter:
52,Update:53,NewAnimalCalvingData:54,NewAnimalsSetTransponderScreen:55,EvaluationTemperatures:
56,EvaluationWeights:57,EvaluationRatings:58,EvaluationLosses:59,TemperatureMeasurement:
60,DryCowList:61,DryCowListFilter:62,DeviceMain:63,DeviceService:64,DeviceCheck:
65,EvaluationMenuWeights:66,EvaluationBirthWeights:67,EvaluationWeightsRecent:68
,ListsMain:69,ListsIdManagement:70,NoNaisIdList:71,NoNaisIdListFilter:72,RegistrationsListFilter:
73,BirthRegistrationsList:74,AnimalRegistrationDetails:75,PremisesSettings:76,NewMenu:
77,NewAnimalLoss:78,MotherScanScreen:79,SetSaveNaisIdScreen:80,EditAnimalDataNaisId:
81,DeviceInfo:82,DeviceDatamanagement:83,AnimalEvaluationFilter:84,YoungNoTransponderList:
85,YoungNoTransponderListFilter:86,RegistrationPresettingsSettings:87,RegistrationAutomaticSettings:
88,TransponderAssignmentSettings:89,PurchasedAnimalsList:90,TextInput:91,DeviceAnimalDataMenu:
92,DeviceDeviceDataMenu:93,AnimalActions:94,TransponderUnlinkSettings:95,LAST:96
};C.Operator={Equal:0,None:1,Greater:2,Less:3,Contains:4,Unequal:5};C.MeasureState={
Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:5};C.StringFilterCriterion={
A6:A.jV,Abt:function(){var Aw=A._NewObject(C.StringFilterCriterion,0);Aw.E_(this
);return Aw;},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var Aw=(C.StringFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CE:function(Ad,Bc){if(this.K&&this.K.CE)return this.K.CE.apply(this,arguments
);else return C.ITable.CE.apply(this,arguments);},H6:function(Ad,Bc){if(this.K&&
this.K.H6)return this.K.H6.apply(this,arguments);else return C.ITable.H6.apply(this
,arguments);},OnSetId:function(E){if(this.K&&this.K.OnSetId)return this.K.OnSetId.
apply(this,arguments);else return C.ITable.OnSetId.apply(this,arguments);},B_:function(
){if(this.K&&this.K.B_)return this.K.B_.apply(this,arguments);else return C.ITable.
B_.apply(this,arguments);},Bk:function(E){if(this.K&&this.K.Bk)return this.K.Bk.
apply(this,arguments);else return C.ITable.Bk.apply(this,arguments);},V9:function(
Ad,Bc){if(this.K&&this.K.V9)return this.K.V9.apply(this,arguments);else return C.
ITable.V9.apply(this,arguments);},Ss:function(Ad,Bc){if(this.K&&this.K.Ss)return this.
K.Ss.apply(this,arguments);else return C.ITable.Ss.apply(this,arguments);},QG:function(
){if(this.K&&this.K.QG)return this.K.QG.apply(this,arguments);else return C.ITable.
QG.apply(this,arguments);},QK:function(AoT){if(this.K&&this.K.QK)return this.K.QK.
apply(this,arguments);else return C.ITable.QK.apply(this,arguments);},AbN:function(
){if(this.K&&this.K.AbN)return this.K.AbN.apply(this,arguments);else return C.ITable.
AbN.apply(this,arguments);},ZT:function(Ad,Bc,Dx){if(this.K&&this.K.ZT)return this.
K.ZT.apply(this,arguments);else return C.ITable.ZT.apply(this,arguments);},HS:function(
Ad,Bc,Dx){if(this.K&&this.K.HS)return this.K.HS.apply(this,arguments);else return C.
ITable.HS.apply(this,arguments);},ZS:function(Ad,Bc,Dx){if(this.K&&this.K.ZS)return this.
K.ZS.apply(this,arguments);else return C.ITable.ZS.apply(this,arguments);},Od:function(
Ad,Bc,Dx){if(this.K&&this.K.Od)return this.K.Od.apply(this,arguments);else return C.
ITable.Od.apply(this,arguments);},L3:function(aColumn,A9){if(this.K&&this.K.L3)return this.
K.L3.apply(this,arguments);else return C.ITable.L3.apply(this,arguments);},KU:function(
Ad,Bc){if(this.K&&this.K.KU)return this.K.KU.apply(this,arguments);else return C.
ITable.KU.apply(this,arguments);},UH:function(Ad,Bc,Dx){if(this.K&&this.K.UH)return this.
K.UH.apply(this,arguments);else return C.ITable.UH.apply(this,arguments);},Aey:function(
aColumn,A9){if(this.K&&this.K.Aey)return this.K.Aey.apply(this,arguments);else return C.
ITable.Aey.apply(this,arguments);},FE:function(){if(this.K&&this.K.FE)return this.
K.FE.apply(this,arguments);else return C.ITable.FE.apply(this,arguments);},AjL:function(
aColumn,A9){if(this.K&&this.K.AjL)return this.K.AjL.apply(this,arguments);else return C.
ITable.AjL.apply(this,arguments);},Aer:function(aColumn,A9){if(this.K&&this.K.Aer
)return this.K.Aer.apply(this,arguments);else return C.ITable.Aer.apply(this,arguments
);},HL:function(){if(this.K&&this.K.HL)return this.K.HL.apply(this,arguments);else
return C.ITable.HL.apply(this,arguments);},QN:function(){if(this.K&&this.K.QN)return this.
K.QN.apply(this,arguments);else return C.ITable.QN.apply(this,arguments);},_Init:
function(aArg){C.ITable._Init.call(this,aArg);this.__proto__=C.Table;var Ka=this.
_variants();if(Ka){this.K={};Ka._Init.call(this,aArg);}},_Done:function(){if(this.
K)this.K._Done.call(this);this.__proto__=C.ITable;C.ITable._Done.call(this);},_ReInit:
function(){C.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){C.ITable._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:function(
){return A.acq.Table._variants();},K:null,_className:"Device::Table"};C.TableId={
Animal:0,Rating:1,Undefined:2,CalfDeregistrations:3};C.ScanState={Idle:0,Progress:
1,IdScanned:2,NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:
2,Respiratory:3,Faeces:4};C.ConverterClass={Nc:null,Ak3:function(AoR){var BdG;var
Auy=this.AVy(AoR/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BdG=A.abk(Auy
,0,1);return BdG;},Bat:function(ND){if(ND<=0)return 0;else if(ND<=1)return 5;else
if(ND<=2)return 3;else if(ND<=4)return 2;else if(ND<=6)return 1;else if(ND<=8)return 4;
else return 0;},Ad7:function(ND){var a=0;switch(ND){case 3:a=2;break;case 2:a=4;
break;case 1:a=6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:
A.ab5("%s",Oj);}return a;},AsM:function(Ep,Ry){var NF=A._GetAutoObject(C.Converter
).Ajo(Ry,Ep);switch(NF){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;
default:throw new Error(Qd+NF.toFixed());}},AhU:function(){var B;var D$=A._NewObject(
A.Core.Bq,0).Initialize(A._GetAutoObject(C.Helper).Dr());D$.AnH(0);D$.AnK(0);D$.
AnN(0);return((B=(D$.J2()|0))<0)?B+0x100000000:B;},A6o:function(Atw){var CO;switch(
Atw){case 36:CO=MU;break;case 40:CO=Ti;break;case 56:CO=UZ;break;case 70:CO=Aad;
break;case 100:CO=Xe;break;case 124:CO=Ix;break;case 156:CO=U0;break;case 158:CO=
Aae;break;case 191:CO=U1;break;case 196:CO=Aaf;break;case 203:CO=Xf;break;case 208:
CO=Aag;break;case 233:CO=Aah;break;case 246:CO=U2;break;case 250:CO=Xg;break;case
276:CO=Pa;break;case 300:CO=Aai;break;case 348:CO=Ol;break;case 372:CO=Rp;break;
case 380:CO=Xh;break;case 392:CO=Xi;break;case 428:CO=U3;break;case 440:CO=Xj;break;
case 442:CO=Aaj;break;case 470:CO=Xk;break;case 528:CO=U4;break;case 578:CO=Xl;break;
case 616:CO=Xm;break;case 620:CO=Xn;break;case 642:CO=Rq;break;case 643:CO=Tj;break;
case 703:CO=Aak;break;case 705:CO=AfH;break;case 724:CO=Aal;break;case 752:CO=Xo;
break;case 756:CO=Aam;break;case 792:CO=Aan;break;case 804:CO=AhY;break;case 826:
CO=K4;break;case 840:CO=Aao;break;default:CO=Atw.toFixed();}return CO;},Ak_:function(
M0){var AaB;if((M0<10000)&&(A._GetAutoObject(C.Device).OT===2))AaB=2;else if((M0<
100000)&&!!A._GetAutoObject(C.Device).OT)AaB=1;else AaB=0;return this.Th(M0,AaB,
false);},Ax$:function(M0,AaB){return this.Th(M0,AaB,false);},Th:function(M0,AaB,
BAI){var B;var AlJ=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(BAI
)AlJ=A.abl(M0,0,0);else{var Be5=M0<0;if(AaB<3)M0=M0+(((Be5?-1:1)*5)*(Math.pow(10
,2-AaB)|0));AlJ=(((((B=M0)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(AaB>
0)AlJ=AlJ+(LE+A.abV(A.abl((((B=M0)>-2147483648)?Math.abs(B):B)%1000,3,10),AaB));
if(Be5)AlJ=AhZ+AlJ;}break;case 1:AlJ=A.abk(M0/453.592,0,AaB);break;default:A.ab5(
"%s%s",Alb,A._GetAutoObject(C.Device).MassUnit.toFixed());}return AlJ;},Rl:function(
IA){var A45=IA.toFixed();var Bhk=A45.length;if((Bhk>=14)&&(Bhk<=15)){var Az7=this.
AsT(IA);var A1_=A._GetAutoObject(C.Converter).A6o(Az7);A45=(A1_+Om)+A.abm(A._GetAutoObject(
C.Helper).TW(IA,0,12),12,10);}return A45;},AmZ:function(Mb){switch(Mb){case 0:return A.
aaL(A.ach.AQM);case 1:return A.aaL(A.ach.ADT);case 2:return A.aaL(A.ach.ADX);default:{
A.ab5("%s%e",Xp,Mb);return null;}}},A5H:function(ByZ){switch(ByZ){case 0:return A.
aaL(A.ach.AvK);case 1:return A.aaL(A.ach.ADP);case 2:return A.aaL(A.ach.AQF);default:
throw new Error(Aok);}},Ad5:function(AJz){switch(AJz){case 0:case 14:return A.aaL(
A.ach.AjW);case 2:return A.aaL(A.ach.Arh);case 1:return A.aaL(A.ach.Ag9);case 3:
switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.AD3);case 1:
return A.aaL(A.ach.AD4);default:throw new Error(AfI+A._GetAutoObject(C.Device).MassUnit.
toFixed());}break;case 4:return A.aaL(A.ach.AP3);case 5:return A.aaL(A.ach.AP4);
case 6:return A.aaL(A.ach.AP9);case 7:return A.aaL(A.ach.APp);case 8:case 13:return A.
aaL(A.ach.APw);case 9:return A.aaL(A.ach.ADq);case 10:return A.aaL(A.ach.APv);case
12:return A.aaL(A.ach.APx);case 11:return A.aaL(A.ach.AQd);default:throw new Error(
Ah0+AJz.toFixed());}},BhX:function(Azi){switch(Azi){case 0:return A.aaL(A.ach.AQE
);case 3:return A.aaL(A.ach.Arh);case 1:return A.aaL(A.ach.Ag9);case 2:return A.
_GetAutoObject(A.acj.DV).Bd5();default:throw new Error(Ah0+Azi.toFixed());}},Biu:
function(Atw){switch(Atw){case 977:return AcU;case 978:return Aap;case 980:return Ayb;
case 981:return Ayc;case 982:return Ayd;case 983:return Aye;case 984:return Alc;
case 985:return As2;default:return A.aaR(A.acf.Unknown);}},BiO:function(Ac7){switch(
Ac7){case 1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;
case 5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;
case 9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},BqK:function(IA
){if(!IA)return-1;return(IA%100000000)|0;},Bjq:function(AoQ,aFilter){var B;if(!aFilter
)return Ayf;var Api=Ayg;var Aw=aFilter.AOV();while(!!Aw){Api=Api+A._GetAutoObject(
C.Helper).A7j(AoQ,Aw);Aw=aFilter.AO0(Aw);if(!!Aw)Api=Api+Pb;}Api=Api+Rr;return Api;
},A71:function(BcJ){var FU=0;switch(BcJ){case 14:FU=2;break;case 13:FU=4;break;case
6:FU=36;break;case 25:FU=17;break;case 11:FU=9;break;case 17:FU=11;break;case 0:
FU=39;break;case 10:FU=26;break;case 12:FU=12;break;case 5:FU=14;break;case 3:FU=
15;break;case 1:FU=10;break;case 8:FU=16;break;case 18:FU=18;break;case 4:FU=20;
break;case 19:FU=21;break;case 20:FU=24;break;case 26:FU=22;break;case 15:FU=27;
break;case 21:FU=28;break;case 22:FU=29;break;case 23:FU=30;break;case 9:FU=31;break;
case 27:FU=33;break;case 2:FU=13;break;case 24:FU=32;break;case 7:FU=35;break;case
16:FU=37;break;default:A.ab5("%s%e",Ayh,BcJ);}return FU;},BhW:function(Azi){switch(
Azi){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AfI+
A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new Error(Ah0+
Azi.toFixed());}},Ajs:function(Ao1){switch(Ao1){case 0:switch(A._GetAutoObject(C.
Device).MassUnit){case 0:return A.aaL(A.ach.AP0);case 1:return A.aaL(A.ach.APZ);
default:throw new Error(AfI+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 1:return A.aaL(A.ach.AQC);case 9:return A.aaL(A.ach.APW);case 4:return A.aaL(
A.ach.AQZ);case 6:return A.aaL(A.ach.AQ0);case 8:return A.aaL(A.ach.AP_);case 2:
return A.aaL(A.ach.AQ4);case 3:return A.aaL(A.ach.AQY);case 7:return A.aaL(A.ach.
AQ5);case 5:return A.aaL(A.ach.AQ6);case 10:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.ARb);case 1:return A.aaL(A.ach.ARa);default:throw new
Error(AfI+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
aaL(A.ach.AQe);case 12:return A.aaL(A.ach.AQG);case 16:return A.aaL(A.ach.AQH);case
19:case 13:case 14:case 18:case 15:case 17:return A.aaL(A.aci.TU);default:throw new
Error(U5+Ao1.toFixed());}},ANK:function(Atw){switch(Atw){case 40:return 1;case 56:
return 3;case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;
case 158:return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:
return 11;case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;
case 300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case
392:return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:
return 25;case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;
case 642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case
724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},Ta:function(IA){var Az7=
this.AsT(IA);return this.ANK(Az7);},AsT:function(IA){return A._GetAutoObject(C.Helper
).TW(IA,12,3)|0;},BaM:function(AoV,Ep){if(AoV<A._GetAutoObject(C.Helper).ADm(Ep)
)return 1;else if(AoV<A._GetAutoObject(C.Helper).ADl(Ep))return 2;else return 3;
},AC_:function(ByC){switch(ByC){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},AVy:function(
A9,AJr,AJs){if(AJr===AJs)return A9;if(!AJr&&(AJs===1)){var result=((A9*9)/5)+32;
return result;}if((AJr===1)&&!AJs){var result=((A9-32)*5)/9;return result;}throw new
Error(((As3+AJr.toFixed())+Ayi)+AJs.toFixed());},A64:function(Ed){switch(Ed){case
0:return Ayj;case 1:return A.jV;case 2:return Ald;case 3:return Ayk;case 4:return A.
aaR(A.acf.Contains);case 5:return AfJ;default:{A.ab5("%s%e",Aol,Ed);return A.jV;
}}},A56:function(Ac6){return this.Nc.Aeq(Ac6);},Bj$:function(Ac6){return this.Nc.
AmK(Ac6);},Bic:function(Atv){var AAC=0;switch(Atv){case 0:AAC=1;break;case 1:AAC=
2;break;case 2:AAC=3;break;case 3:AAC=4;break;default:A.ab5("%s%e",I2,Atv);}return AAC;
},Ajo:function(A1e,Ep){if(A1e>=A._GetAutoObject(C.Helper).A7e(Ep))return 3;else if(
A1e>=A._GetAutoObject(C.Helper).AC$(Ep))return 2;else if(A1e<A._GetAutoObject(C.
Device).AcO)return 0;else return 1;},AqF:function(FU){var BO=-1;switch(FU){case 0:
BO=0;break;case 1:BO=40;break;case 2:BO=70;break;case 3:BO=56;break;case 4:BO=100;
break;case 5:BO=124;break;case 6:BO=756;break;case 7:BO=156;break;case 8:BO=196;
break;case 9:BO=203;break;case 10:BO=276;break;case 11:BO=208;break;case 12:BO=233;
break;case 13:BO=724;break;case 14:BO=246;break;case 15:BO=250;break;case 16:BO=
300;break;case 17:BO=191;break;case 18:BO=348;break;case 19:BO=372;break;case 20:
BO=380;break;case 21:BO=392;break;case 22:BO=440;break;case 23:BO=442;break;case
24:BO=428;break;case 25:BO=470;break;case 26:BO=528;break;case 27:BO=578;break;case
28:BO=616;break;case 29:BO=620;break;case 30:BO=642;break;case 31:BO=643;break;case
32:BO=752;break;case 33:BO=705;break;case 34:BO=703;break;case 35:BO=792;break;case
36:BO=158;break;case 37:BO=804;break;case 38:BO=826;break;case 39:BO=840;break;default:
throw new Error(Aom+FU.toFixed());}return BO;},Bar:function(IA){return A._GetAutoObject(
C.Helper).TW(IA,8,2)|0;},AVO:function(IA){var BAD=this.Bar(IA);return this.AC_(BAD
);},AMd:function(Ej){var RA=19;switch(Ej){case 0:break;case 4:RA=7;break;case 32:
case 2048:RA=9;break;case 4096:RA=11;break;case 32768:RA=14;break;case 524288:RA=
18;break;case 65536:RA=15;break;case 128:RA=17;break;case 16:RA=1;break;case 16384:
RA=12;break;case 1024:RA=8;break;case 2:RA=3;break;case 131072:RA=16;break;case 1:
RA=2;break;case 8:RA=5;break;case 256:RA=10;break;default:throw new Error(As4+Ej.
toFixed());}return RA;},Baq:function(IA){return A._GetAutoObject(C.Helper).TW(IA
,10,2)|0;},_Init:function(aArg){C.Nc._Init.call(this.Nc={I:this},0);this.__proto__=
C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;this.Nc._Done();A.
h7--;},_ReInit:function(){this.Nc._ReInit();},_Mark:function(D){var B;if((B=this.
Nc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"};C.Converter={
_Init:function(){C.ConverterClass._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.MinLowTemperature=3000;C.MaxHighTemperature=
5000;C.TemperatureStep=10;C.RatingTableFields={Id:0,AnimalId:1,FeedAssessment:2,
AppearanceAssessment:3,RespiratoryAssessment:4,FaecesAssessment:5,Timestamp:6,Temperature:
7,BodyWeight:8,RatingTemperature:9};C.Animal={TransponderId:0,NaisId:0,NaisIdMother:
0,Id:-1,VisualId:0,GroupId:0,DateOfBirth:0,LocationId:0,LastTemperature:0,TimestampLastControl:
0,TimestampLastWatch:0,TimestampExpirationFeverAlarm:0,TimestampAlarm:0,LastBodyWeight:
0,TimestampLastWeighing:0,FirstBodyWeight:0,TimestampFirstWeighing:0,FirstBodyWeightId:
0,DateOfLastCalving:0,LactationNumber:0,TimestampLastTemperature:0,TimestampLastAssessment:
0,ReasonOfLeaving:0,WhereAbouts:0,EaseOfDelivery:0,Breed:0,AnimalType:0,LastRatingTemperature:
0,WorstAssessment:0,BirthType:0,Gender:2,IsDry:false,IsRegistrationNoticePending:
false,IsPerished:false,IsFever:false,IsWatch:false,IsRegistered:false,IsControl:
false,IsAlarm:false,Fm:function(Ad,AL){var IJ=C.Row.Fm.call(this,Ad,AL);if(IJ&&!
!AL){this.OnSetId(AL.CE(Ad,0));this.SS(AL.CE(Ad,1));this.Aca(AL.CE(Ad,2));this.AnJ(
AL.CE(Ad,3));this.Q8(AL.Hw(Ad,4));this.J4(AL.AOX(Ad,7));this.Aku(AL.BjI(Ad,6));this.
ED(AL.Am0(Ad,14));this.Nv(AL.KU(Ad,22));this.Nt(AL.KU(Ad,26));this.Axp(AL.Jb(Ad,
13));this.Ae9(AL.H6(Ad,8));this.Axg(AL.Hw(Ad,15));this.AT0(AL.Hw(Ad,31));this.Afc(
AL.A7t(Ad,5));this.ATx(AL.Jb(Ad,17));this.Uy(AL.H6(Ad,11));this.ATZ(AL.Hw(Ad,16)
);this.AT2(AL.Hw(Ad,30));this.AkC(AL.H6(Ad,9));this.Afa(AL.H6(Ad,12));this.AT1(AL.
Hw(Ad,20));this.Axi(AL.Hw(Ad,21));this.Ae$(AL.H6(Ad,10));this.AwW(AL.H6(Ad,27));
this.AFy(AL.ADh(Ad,18));this.AF2(AL.Hw(Ad,19));this.AwR(AL.ADh(Ad,23));this.Axh(
AL.Hw(Ad,24));this.ATp(AL.CE(Ad,25));this.AwI(AL.Hw(Ad,28));this.AwX(AL.CE(Ad,29
));this.Ar0(AL.H6(Ad,38));this.N9(AL.BjJ(Ad,32));this.Akw(AL.BjO(Ad,33));this.AnL(
AL.KU(Ad,35));this.Nw(AL.AO5(Ad,34));this.OV(AL.H6(Ad,37));this.AFR(AL.BjX(Ad,36
));}return IJ;},Cs:function(AL){var IJ=C.Row.Cs.call(this,AL);if(IJ&&!!AL){var Mo=
AL.QG();if(Mo<0)A.ab5("%s",AcV);else{var AAg=this.Arn();if(AAg)this.CR=AL.AbN();
else AL.HS(this.CR,0,this.Id);AL.HS(this.CR,1,this.VisualId);AL.HS(this.CR,2,this.
GroupId);AL.HS(this.CR,3,this.LocationId);AL.Acv(this.CR,4,this.DateOfBirth);AL.
BpE(this.CR,7,this.Gender);AL.BpA(this.CR,6,this.BirthType);AL.Bpy(this.CR,14,this.
AnimalType);AL.UH(this.CR,22,this.TransponderId);AL.UH(this.CR,26,this.NaisId);AL.
AkU(this.CR,13,this.WorstAssessment);AL.Od(this.CR,8,this.IsAlarm);AL.Acv(this.CR
,15,this.TimestampAlarm);AL.Od(this.CR,11,this.IsFever);AL.Acv(this.CR,16,this.TimestampExpirationFeverAlarm
);AL.Od(this.CR,9,this.IsControl);AL.Od(this.CR,12,this.IsWatch);AL.Acv(this.CR,
20,this.TimestampLastControl);AL.Acv(this.CR,21,this.TimestampLastWatch);AL.Od(this.
CR,10,this.IsRegistered);AL.Od(this.CR,27,this.IsPerished);AL.Acv(this.CR,28,this.
DateOfLastCalving);AL.HS(this.CR,29,this.LactationNumber);AL.Od(this.CR,38,this.
IsDry);AL.BpC(this.CR,32,this.Breed);AL.BpD(this.CR,33,this.EaseOfDelivery);AL.UH(
this.CR,35,this.NaisIdMother);AL.BpJ(this.CR,34,this.WhereAbouts);AL.Od(this.CR,
37,this.IsRegistrationNoticePending);AL.BpI(this.CR,36,this.ReasonOfLeaving);IJ=
AL.QK(Mo);if(AAg&&IJ)this.OnSetId(AL.CE(this.CR,0));}}return IJ;},G8:function(){
C.Row.G8.call(this);this.OnSetId(-2);this.Ae$(true);},FE:function(){C.Row.FE.call(
this);this.OnSetId(-1);this.SS(0);this.Aca(0);this.AnJ(0);this.Q8(0);this.J4(A._GetAutoObject(
C.Device).Gender);this.Aku(0);this.ED(A._GetAutoObject(C.Device).AnimalType);this.
Nv(0);this.Nt(0);this.Axp(0);this.Ae9(false);this.Axg(0);this.AT0(0);this.Afc(0);
this.ATx(0);this.Uy(false);this.AT2(0);this.ATZ(0);this.AkC(false);this.Afa(false
);this.AT1(0);this.Axi(0);this.Ae$(false);this.AwW(false);this.AFy(0);this.AF2(0
);this.AwR(0);this.Axh(0);this.ATp(-1);this.AwI(0);this.AwX(0);this.Ar0(false);this.
N9(0);this.Akw(0);this.AnL(0);this.Nw(0);this.OV(false);this.AFR(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Ur,this.OnSetId],0);},SS:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.ArJ,this.SS],0);
},Aca:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.BlJ
,this.Aca],0);},Q8:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Awg,this.Q8],0);},J4:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.WI,this.J4],0);},Aku:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASJ,this.Aku],0);},AnJ:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A9s,this.AnJ],0);}
,Afc:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A9r,this.Afc],0);},Ae9:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A9j,this.Ae9],0);},AkC:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BlL,this.AkC],0);},Ae$:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BlO,this.Ae$],0);},Afa:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A9n,this.Afa],0);},Axp:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A96,this.Axp],0);},Uy:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A9k,this.Uy],0);},AT1:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Bmc,this.AT1],0);},Axi:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bme,this.Axi],0);},ATx:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BlQ,this.ATx],0);},ATZ:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Bma,this.ATZ],0);},Axg:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Bl$,this.Axg],0);},ED:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PX,this.ED],0);},AFy:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A9q,
this.AFy],0);},AF2:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A9S,this.AF2],0);},Nv:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.AnA,this.Nv],0);},RX:function(){return A._GetAutoObject(
C.Helper).Mg(this.DateOfBirth,A._GetAutoObject(C.Helper).Dr());},AwR:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASO,this.
AwR],0);},Axh:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.AS5,this.Axh],0);},Arm:function(){var Ph=A._NewObject(A.Core.
Bq,0);Ph.Initialize(this.DateOfBirth);var A2F=A._NewObject(A.Core.Bq,0);A2F.Initialize(
this.TimestampFirstWeighing);if(((Ph.Year===A2F.Year)&&(Ph.Ab8()===A2F.Ab8()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhX:function(AJk){var AaK;
var AuD;if(this.TimestampLastWeighing>0){AuD=this.TimestampLastWeighing;AaK=this.
LastBodyWeight;}else{AuD=this.DateOfBirth;AaK=A._GetAutoObject(C.Helper).AbA(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhX(AaK,AuD,AJk,this.AnimalType);
},ATp:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BlI,this.ATp],0);},An0:function(Bc6){this.Ae9(Bc6);if(Bc6){if(!
this.TimestampAlarm)this.Axg(A._GetAutoObject(C.Helper).Dr());}else this.Axg(0);
},Nt:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Any,this.
Nt],0);},AGP:function(Bc2){this.Afa(Bc2);if(Bc2){if(!this.TimestampLastWatch)this.
Axi(A._GetAutoObject(C.Helper).Dr());}else this.Axi(0);},AwI:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bly,this.
AwI],0);},AwX:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BlP,this.AwX],0);},AwW:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BlN,this.AwW],0);},AT2:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bmd,this.AT2],0);},AT0:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bmb,this.AT0],0);},N9:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Awe,this.N9],0);},Akw:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASN,this.Akw],0);},Nw:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awt,this.Nw
],0);},AnL:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASV,this.AnL],0);},AFR:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.Bl1,this.AFR],0);},OV:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Awn,this.OV],0);},Ar0:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BlM,this.Ar0],0);},Ur:function(){return this.Id;},ArJ:function(
){return this.VisualId;},BlJ:function(){return this.GroupId;},Awg:function(){return this.
DateOfBirth;},WI:function(){return this.Gender;},ASJ:function(){return this.BirthType;
},A9s:function(){return this.LocationId;},A9r:function(){return this.LastTemperature;
},A9j:function(){return this.IsAlarm;},BlL:function(){return this.IsControl;},BlO:
function(){return this.IsRegistered;},A9n:function(){return this.IsWatch;},A96:function(
){return this.WorstAssessment;},A9k:function(){return this.IsFever;},Bmc:function(
){return this.TimestampLastControl;},Bme:function(){return this.TimestampLastWatch;
},BlQ:function(){return this.LastRatingTemperature;},Bma:function(){return this.
TimestampExpirationFeverAlarm;},Bl$:function(){return this.TimestampAlarm;},PX:function(
){return this.AnimalType;},A9q:function(){return this.LastBodyWeight;},A9S:function(
){return this.TimestampLastWeighing;},AnA:function(){return this.TransponderId;}
,ASO:function(){return this.FirstBodyWeight;},AS5:function(){return this.TimestampFirstWeighing;
},BlI:function(){return this.FirstBodyWeightId;},Any:function(){return this.NaisId;
},Bly:function(){return this.DateOfLastCalving;},BlP:function(){return this.LactationNumber;
},BlN:function(){return this.IsPerished;},Bmd:function(){return this.TimestampLastTemperature;
},Bmb:function(){return this.TimestampLastAssessment;},Awe:function(){return this.
Breed;},ASN:function(){return this.EaseOfDelivery;},Awt:function(){return this.WhereAbouts;
},ASV:function(){return this.NaisIdMother;},Bl1:function(){return this.ReasonOfLeaving;
},Awn:function(){return this.IsRegistrationNoticePending;},BlM:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CR:-1,TableId:2,Fm:function(
Ad,AL){if(!AL){A.ab5("%s",(As5+this.CR.toFixed())+As6);return false;}else if(AL.
Id!==this.TableId)throw new Error(As7);else if((Ad<0)||(Ad>=AL.B_())){A.ab5("%s"
,(((Aon+this.CR.toFixed())+As8)+AL.B_().toFixed())+Ale);return false;}this.CR=Ad;
return true;},Cs:function(AL){if(!AL){A.ab5("%s",(As5+this.CR.toFixed())+As6);return false;
}else if(AL.Id!==this.TableId)throw new Error(As7);else if(this.Arn()&&AL.Lm()){
A.ab5("%s",Ayl+AL.HL().toFixed());return false;}else if(!this.Arn()&&((this.CR<0
)||(this.CR>=AL.B_()))){A.ab5("%s",(((Aon+this.CR.toFixed())+As8)+AL.B_().toFixed(
))+Ale);return false;}return true;},G8:function(){this.FE();this.CR=-1;},Arn:function(
){return this.CR===-1;},FE:function(){this.CR=-2;},Aq4:function(){return this.CR
!==-2;},A9G:function(){return this.CR;},A_6:function(E){this.CR=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:-1,AnimalId:-1,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,Fm:function(Ad,AL){var IJ=C.Row.Fm.call(this
,Ad,AL);if(IJ&&!!AL){this.OnSetId(AL.CE(Ad,0));this.OnSetAnimalId(AL.CE(Ad,1));this.
OnSetTimestamp(AL.Hw(Ad,6));this.OnSetFeed(AL.Jb(Ad,2));this.OnSetAppearance(AL.
Jb(Ad,3));this.OnSetRespiratory(AL.Jb(Ad,4));this.OnSetFaeces(AL.Jb(Ad,5));this.
OnSetTemperature(AL.A7t(Ad,7));this.OnSetBodyWeight(AL.ADh(Ad,8));this.OnSetRatingTemperature(
AL.Jb(Ad,9));}return IJ;},Cs:function(AL){if(this.K&&this.K.Cs)return this.K.Cs.
apply(this,arguments);else return C.Rating.Bbq.apply(this,arguments);},Bbq:function(
AL){var IJ=C.Row.Cs.call(this,AL);if((IJ&&!!AL)&&(AL.Id===1)){var Mo=AL.QG();if(
Mo<0)A.ab5("%s",AcV);else{var AAg=this.Arn();if(AAg)this.CR=AL.AbN();else AL.HS(
this.CR,0,this.Id);AL.HS(this.CR,1,this.AnimalId);AL.Acv(this.CR,6,this.Timestamp
);AL.AkU(this.CR,2,this.Feed);AL.AkU(this.CR,3,this.Appearance);AL.AkU(this.CR,4
,this.Respiratory);AL.AkU(this.CR,5,this.Faeces);AL.A$2(this.CR,7,this.Temperature
);AL.AU0(this.CR,8,this.BodyWeight);AL.AkU(this.CR,9,this.RatingTemperature);IJ=
AL.QK(Mo);if(AAg&&IJ)this.OnSetId(AL.CE(this.CR,0));var RC=A._GetAutoObject(C.Device
).An;var Ad=A._GetAutoObject(C.Device).An.L3(0,this.AnimalId);if(Ad>=0){var CU=A.
_NewObject(C.Animal,0);CU.Fm(Ad,RC);if(this.Temperature>0)CU.Uy(A._GetAutoObject(
C.Helper).A7V(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AGv(this
)){var Ou=A._GetAutoObject(C.Helper).ARp(this);CU.AkC(Ou);CU.An0(Ou);}else if(this.
Temperature>0){var Ou=(A._GetAutoObject(C.Helper).ARp(this)||(CU.WorstAssessment===
2))||(CU.WorstAssessment===1);CU.AkC(Ou);CU.An0(Ou);}else{var Ou=A._GetAutoObject(
C.Helper).ARp(this)||CU.IsFever;CU.AkC(Ou);CU.An0(Ou);}CU.Cs(RC);}}}return IJ;},
G8:function(){C.Row.G8.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).
Dr());this.OnSetId(-2);},FE:function(){C.Row.FE.call(this);this.OnSetTimestamp(0
);this.OnSetId(-1);this.OnSetAnimalId(-1);this.OnSetFeed(0);this.OnSetAppearance(
0);this.OnSetRespiratory(0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(
0);this.OnSetRatingTemperature(0);},OnSetTemperature:function(E){if(this.Temperature===
E)return;this.Temperature=E;A.abo([this,this.Bl_,this.OnSetTemperature],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Ur,this.OnSetId],0);
},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this
,this.Blm,this.OnSetAnimalId],0);},OnSetFeed:function(E){if(this.Feed===E)return;
this.Feed=E;A.abo([this,this.BlF,this.OnSetFeed],0);},OnSetAppearance:function(E
){if(this.Appearance===E)return;this.Appearance=E;A.abo([this,this.Bln,this.OnSetAppearance
],0);},OnSetRespiratory:function(E){if(this.Respiratory===E)return;this.Respiratory=
E;A.abo([this,this.Bl2,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.
Faeces===E)return;this.Faeces=E;A.abo([this,this.BlD,this.OnSetFaeces],0);},OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A9R,this.
OnSetTimestamp],0);},Bpz:function(NE,A9){switch(NE){case 2:this.OnSetAppearance(
A9);break;case 1:this.OnSetFeed(A9);break;case 4:this.OnSetFaeces(A9);break;case
3:this.OnSetRespiratory(A9);break;default:;}},BjG:function(NE){switch(NE){case 2:
return this.Appearance;case 1:return this.Feed;case 4:return this.Faeces;case 3:
return this.Respiratory;default:return 0;}},OnSetRatingTemperature:function(E){if(
this.RatingTemperature===E)return;this.RatingTemperature=E;A.abo([this,this.Bl0,
this.OnSetRatingTemperature],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===
E)return;this.BodyWeight=E;A.abo([this,this.Blr,this.OnSetBodyWeight],0);},Bl_:function(
){return this.Temperature;},Ur:function(){return this.Id;},Blm:function(){return this.
AnimalId;},BlF:function(){return this.Feed;},Bln:function(){return this.Appearance;
},Bl2:function(){return this.Respiratory;},BlD:function(){return this.Faeces;},A9R:
function(){return this.Timestamp;},Bl0:function(){return this.RatingTemperature;
},Blr:function(){return this.BodyWeight;},_Init:function(aArg){C.Row._Init.call(
this,aArg);this.__proto__=C.Rating;this.TableId=1;var Ka=this._variants();if(Ka){
this.K={};Ka._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(
this);this.__proto__=C.Row;C.Row._Done.call(this);},_ReInit:function(){C.Row._ReInit.
call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.Row._Mark.call(
this,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.Rating._variants(
);},K:null,_className:"Device::Rating"};C.HelperClass={WW:null,AhJ:null,AUT:null
,AUU:null,W:null,Av:null,KO:null,S3:null,Ad6:null,UN:null,UM:null,Aet:null,AfE:null
,AfD:null,AfC:null,AfF:null,AgJ:null,AG4:0,Init:function(aArg){A.pe([this,this.AUl
],this);},AkE:function(E){this.WW=E;A.abo([this,this.ArH,this.AkE],0);},AFU:function(
E){this.AhJ=E;A.abo([this,this.A9H,this.AFU],0);},BBP:function(G){switch(A._GetAutoObject(
C.Device).ScanState){case 2:{var AuF=A._GetAutoObject(C.Device).O0;if(!AuF)throw new
Error(Aym);switch(AuF.TransponderType){case 1:this.AkE(AuF);break;case 2:this.ATQ(
AuF);break;case 3:this.AFU(AuF);break;case 4:this.ATR(AuF);break;case 0:break;default:
throw new Error(Ayn);}}break;case 4:A._GetAutoObject(C.Device).AZ(11,true,A.jV,2000
,null);break;case 3:A._GetAutoObject(C.Device).AZ(12,true,A.jV,2000,null);break;
case 0:case 1:break;default:throw new Error(As9);}},AkQ:function(){this.AkE(null
);this.ATQ(null);this.AFU(null);this.ATR(null);},AFZ:function(E){if(this.K&&this.
K.AFZ)return this.K.AFZ.apply(this,arguments);else return C.HelperClass.Bbo.apply(
this,arguments);},Bbo:function(E){A.abo([this,this.U9,this.Va],0);A._GetAutoObject(
C.Device).SetSystemTime(E);},Va:function(Aq){this.AFZ(Aq);},Dr:function(){if(this.
K&&this.K.Dr)return this.K.Dr.apply(this,arguments);else return C.HelperClass.Bbk.
apply(this,arguments);},Bbk:function(){var B;return((B=(this.Av.Bd3()|0))<0)?B+0x100000000:
B;},U9:function(){return this.Dr();},Asw:function(){A._GetAutoObject(C.Device).SZ(-
1);this.W.FE();A.we(this.W,0);},A7$:function(IA){if(!IA){A.ab5("%s%U",Ayo,IA);return false;
}var Bj=A._GetAutoObject(C.Device).An.Aey(22,IA);return this.GT(Bj);},Am1:function(
AoQ,AJi){switch(AoQ){case 0:{var Aph=AJi;switch(Aph){case 14:return A.aaR(A.acf.
Afz);case 6:return Pc;case 4:return A.aaR(A.acf.Ael);case 28:return Ayp;case 7:return A.
aaR(A.acf.Afu);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GP);case 37:
return AWm;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACw);case 38:
return A.aaR(A.acf.AN_);case 11:return A.aaR(A.acf.Fever);case 27:return AWn;case
10:return A.aaR(A.acf.Bpa);case 12:return A.aaR(A.acf.Asi);case 29:return A.aaR(
A.acf.ARJ);case 18:return A.aaR(A.acf.Weighing);case 17:return AWo;case 5:return A.
aaR(A.acf.Temperature);case 3:return AWp;case 26:return A.aaR(A.acf.Un);case 35:
return A.aaR(A.acf.Un)+AHy;case 36:return AHz;case 15:return AfK;case 24:return Aoo;
case 20:return AWq;case 30:return AHA;case 21:return Alf;case 19:return AHB;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GK);case 34:return A.
aaR(A.acf.Jo);case 13:return AHC;case 31:return AWr;default:{A.ab5("%s",AWs+Aph.
toFixed());return AHD+Aph.toFixed();}}}case 1:{var Aph=AJi;switch(Aph){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGu);case 8:return A.aaR(A.acf.AfB);
case 5:return A.aaR(A.acf.AGw);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGx);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bq);
default:{A.ab5("%s",AWt+Aph.toFixed());return AHD+Aph.toFixed();}}}default:A.ab5(
"%s",(AcW+AoQ.toFixed())+AWu);}return A.jV;},A7j:function(AoQ,AH){var result=A.jV;
if(!!AH){result=this.Am1(AoQ,AH.EK);result=((result+Om)+A._GetAutoObject(C.Converter
).A64(AH.Operator))+Om;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A6.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A6;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A6)result=this.Am1(AoQ,AH.EK);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var Bz_=A._NewObject(C.GenderToString
,0);result=result+Bz_.LC((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A6);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var By1=A._NewObject(
C.AnimalTypeToString,0);result=result+By1.LC((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A6);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var By4=A._NewObject(C.AssesmentToString,0);result=result+By4.LC((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A6.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Aw.A6)+AWv)+Aw.OK.toFixed())+Pb)+Aw.Zu.toFixed())+Ale;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BDz=A._NewObject(C.WhereAboutsToString,0);result=
result+BDz.LC((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A6);}else
A.ab5("%s",AWw);}return result;},MR:function(aString,BcO,Bye){var result=A.jV;var
BgA=false;var index=0;var Byg=BcO.length;while(!BgA){var A4n=aString.indexOf(BcO
,index);if(A4n!==-1){result=(result+A.abW(aString,index,A4n-index))+Bye;index=A4n+
Byg;}else{var BcT=aString.length;if(index<BcT)result=result+A.ab2(aString,BcT-index
);BgA=true;}}return result;},ATQ:function(E){this.AUT=E;A.abo([this,this.Bl4,this.
ATQ],0);},ATR:function(E){this.AUU=E;A.abo([this,this.Bl5,this.ATR],0);},Bes:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).O0)&&(A._GetAutoObject(C.Device).O0.TransponderType===1);},AaO:function(G){if(
!this.W.Arn()&&(this.W.Id>=0))this.BkJ(this.W.Id);},AC$:function(Ep){return A._GetAutoObject(
C.Helper).UN.Get(Ep);},A7e:function(Ep){return A._GetAutoObject(C.Helper).UM.Get(
Ep);},A7p:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UN.
MQ){if(A._GetAutoObject(C.Helper).UN.Get(O)<min)min=A._GetAutoObject(C.Helper).UN.
Get(O);O=O+1;}return min;},AUl:function(G){A.zV([this,this.AaO],A._GetAutoObject(
C.Device).An,0);},ARp:function(D6){if(!D6)return false;var Bkk=(((this.AAc(D6.Faeces
)||this.AAc(D6.Feed))||this.AAc(D6.Appearance))||this.AAc(D6.Respiratory))||this.
AAc(D6.RatingTemperature);return Bkk||this.A7V(D6);},AAc:function(Bcs){return(Bcs===
2)||(Bcs===1);},A7V:function(D6){return!!D6&&(D6.Temperature>A._GetAutoObject(C.
Helper).AC$(A._GetAutoObject(C.Helper).W.AnimalType));},GT:function(Me){var A3f=
false;if(Me>=0){if(Me!==this.W.CR)A._GetAutoObject(C.Device).SZ(Me);A3f=this.W.Fm(
Me,A._GetAutoObject(C.Device).An);if(A3f)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SZ(-1);this.W.FE();A.we(this.W,0);}return A3f;},AhS:function(Ah8){var B;
return(((B=(this.Av.Bd3()|0))<0)?B+0x100000000:B)-this.AmN(Ah8);},AsK:function(){
var B;A.pe([B=this.KO,B.An4],this);},BC0:function(G){A._GetAutoObject(C.Device).
AZ(16,false,AWx,0,null);A._GetAutoObject(C.Device).AZ(5,true,A.jV,0,null);},BoF:
function(G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5))this.AsK();},Bop:function(E){if(this.AG4===E)return;this.AG4=E;A._GetAutoObject(
C.Device).AZ(16,true,this.AG4.toFixed(),0,[this,this.BoF]);},Mg:function(BxS,Byu
){var D$;var Bg8=A._NewObject(A.Core.An_,0);var GI=A._NewObject(A.Core.Bq,0);var
La=A._NewObject(A.Core.Bq,0);GI.Initialize(BxS);La.Initialize(Byu);D$=La.BiN(GI);
Bg8.Initialize2(0,D$.ADK,D$.AEw,D$.AGI);if(GI.J(Bg8).GN===GI.GN)return D$.Kq;else
return D$.Kq+1;},BC2:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},ALf:function(G){var BhY=A._GetAutoObject(C.Helper).AC$(A._GetAutoObject(C.Helper
).W.AnimalType);var BhV=A._GetAutoObject(C.Helper).A7e(A._GetAutoObject(C.Helper
).W.AnimalType);var Agv=A.abz(BhY-100,BhV+100);this.BdH(Agv);},AmN:function(Ah8){
return Ah8*86400;},Aoa:function(Jp){var B;if(!!Jp&&(Jp<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).TW(Jp,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A3&0xFF)|0;},AGv:function(D6){if(!D6)return false;return((!!D6.Faeces||
!!D6.Feed)||!!D6.Appearance)||!!D6.Respiratory;},AhX:function(A1q,BcV,AJk,Ep){var
B;var ApV;if((A1q<650000)&&(BcV<this.Dr())){var Bdh=this.AgJ.Avy(Ep);var Bdg=0;if(
Bdh>=0)Bdg=this.AfC.Get(Bdh);ApV=A1q+(this.Mg(BcV,this.Dr())*Bdg);if(AJk>0){var A2n=
this.ApU(AJk);ApV=(Math.trunc(((((B=ApV)<0)?B+0x10000000000000000:B)+Math.trunc(
A2n/2))/A2n)*A2n)|0;}if(ApV>650000)ApV=650000;}else ApV=A1q;return ApV;},ADn:function(
D6){var Aqh=A._GetAutoObject(C.Converter).Ad7(D6.Faeces);if(Aqh<A._GetAutoObject(
C.Converter).Ad7(D6.Feed))Aqh=A._GetAutoObject(C.Converter).Ad7(D6.Feed);if(Aqh<
A._GetAutoObject(C.Converter).Ad7(D6.Appearance))Aqh=A._GetAutoObject(C.Converter
).Ad7(D6.Appearance);if(Aqh<A._GetAutoObject(C.Converter).Ad7(D6.Respiratory))Aqh=
A._GetAutoObject(C.Converter).Ad7(D6.Respiratory);return A._GetAutoObject(C.Converter
).Bat(Aqh);},AxE:function(D6,ND){if(!!D6){D6.OnSetFaeces(ND);D6.OnSetFeed(ND);D6.
OnSetAppearance(ND);D6.OnSetRespiratory(ND);}},BjE:function(AL,AJq,Adb,Xy,AfP){if(
!AL)throw new Error(As_);var Be=A._NewObject(C.Filter,0);var ApI=AL.Filter;var Op=
A._NewObject(C.Int32FilterCriterion,0);Op.Operator=0;Op.EK=1;Op.A6=Adb;Be.CY(Op);
if(Xy>0){var OB=A._NewObject(C.UInt32FilterCriterion,0);OB.Operator=2;OB.EK=6;OB.
A6=Xy;Be.CY(OB);}if(AfP>0){var Ot=A._NewObject(C.UInt32FilterCriterion,0);Ot.Operator=
3;Ot.EK=6;Ot.A6=AfP;Be.CY(Ot);}AL.Bk(Be);var Mf=A._NewObject(C.Int32ArrayWrapper
,0);Mf.ZI(6);var O;for(O=0;O<Mf.MQ;O=O+1)Mf.Set(O,0);var Vh;for(O=0;O<AL.B_();O=
O+1){Vh=AL.Jb(O,AJq);Mf.Set(Vh,Mf.Get(Vh)+1);}AL.Bk(ApI);return Mf;},Z0:function(
Ah8){var B;var GI=A._NewObject(A.Core.Bq,0);var Bg7=A._NewObject(A.Core.An_,0);GI.
Initialize(A._GetAutoObject(C.Converter).AhU());Bg7.Initialize2(Ah8,0,0,0);GI=GI.
Bp1(Bg7);return((B=(GI.J2()|0))<0)?B+0x100000000:B;},A7f:function(AL,Adb,AfP,Xy){
if(!AL)throw new Error(As_);var Be=A._NewObject(C.Filter,0);var ApI=AL.Filter;var
Op=A._NewObject(C.Int32FilterCriterion,0);Op.Operator=0;Op.EK=1;Op.A6=Adb;Be.CY(
Op);if(Xy>0){var OB=A._NewObject(C.UInt32FilterCriterion,0);OB.Operator=2;OB.EK=
6;OB.A6=Xy;Be.CY(OB);}if(AfP>0){var Ot=A._NewObject(C.UInt32FilterCriterion,0);Ot.
Operator=3;Ot.EK=6;Ot.A6=AfP;Be.CY(Ot);}AL.Bk(Be);var Mf=A._NewObject(C.Int32ArrayWrapper
,0);Mf.ZI(6);var O;for(O=0;O<Mf.MQ;O=O+1)Mf.Set(O,0);var Ao8=A._NewObject(C.Rating
,0);var A2f;for(O=0;O<AL.B_();O=O+1){Ao8.Fm(O,AL);if(A._GetAutoObject(C.Helper).
AGv(Ao8)){A2f=A._GetAutoObject(C.Helper).ADn(Ao8);Mf.Set(A2f,Mf.Get(A2f)+1);}}AL.
Bk(ApI);return Mf;},A2O:function(AL,Adb,Bzz){if(!AL)throw new Error(As_);var Be=
A._NewObject(C.Filter,0);var ApI=AL.Filter;var Op=A._NewObject(C.Int32FilterCriterion
,0);Op.Operator=0;Op.EK=1;Op.A6=Adb;Be.CY(Op);var Xy=A._GetAutoObject(C.Converter
).AhU()+A._GetAutoObject(C.Helper).AmN(Bzz);var AfP=Xy+A._GetAutoObject(C.Helper
).AmN(1);var OB=A._NewObject(C.UInt32FilterCriterion,0);OB.Operator=2;OB.EK=6;OB.
A6=Xy;Be.CY(OB);var Ot=A._NewObject(C.UInt32FilterCriterion,0);Ot.Operator=3;Ot.
EK=6;Ot.A6=AfP;Be.CY(Ot);AL.Bk(Be);var Ao8=A._NewObject(C.Rating,0);var Vh;var L0=
0;var O;for(O=0;O<AL.B_();O=O+1){Ao8.Fm(O,AL);if(A._GetAutoObject(C.Helper).AGv(
Ao8)){Vh=A._GetAutoObject(C.Helper).ADn(Ao8);if(A._GetAutoObject(C.Converter).Ad7(
Vh)>A._GetAutoObject(C.Converter).Ad7(L0))L0=Vh;}}AL.Bk(ApI);return L0;},Am_:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7Y:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BjF:function(AL,AJq,Adb,Xy
,AfP){if(!AL)throw new Error(As_);var Be=A._NewObject(C.Filter,0);var ApI=AL.Filter;
var Op=A._NewObject(C.Int32FilterCriterion,0);Op.Operator=0;Op.EK=1;Op.A6=Adb;Be.
CY(Op);if(Xy>0){var OB=A._NewObject(C.UInt32FilterCriterion,0);OB.Operator=2;OB.
EK=6;OB.A6=Xy;Be.CY(OB);}if(AfP>0){var Ot=A._NewObject(C.UInt32FilterCriterion,0
);Ot.Operator=3;Ot.EK=6;Ot.A6=AfP;Be.CY(Ot);}AL.Bk(Be);var Mf=A._NewObject(C.Int32ArrayWrapper
,0);Mf.ZI(6);var O;for(O=0;O<Mf.MQ;O=O+1)Mf.Set(O,0);if(AL.B_()>0){var Vh=AL.Jb(
0,AJq);var Ap0=AL.Hw(O,6);var Ac=A._NewObject(A.Core.Bq,0);Ac.Initialize(Ap0);var
Aqg=Vh;var AKh=A._NewObject(A.Core.Bq,0);AKh.Initialize(Ac.J2());for(O=1;O<AL.B_(
);O=O+1){Vh=AL.Jb(O,AJq);Ap0=AL.Hw(O,6);Ac.Initialize(Ap0);if((Ac.Ab8()!==AKh.Ab8(
))||(Ac.Year!==AKh.Year)){Mf.Set(Aqg,Mf.Get(Aqg)+1);AKh.Initialize(Ac.J2());Aqg=
Vh;}else if(!!Vh&&(Vh<Aqg))Aqg=Vh;}Mf.Set(Aqg,Mf.Get(Aqg)+1);}AL.Bk(ApI);return Mf;
},Aqv:function(Ma){var B;var GI=A._NewObject(A.Core.Bq,0);GI.Initialize(Ma);GI.AnH(
0);GI.AnK(0);GI.AnN(0);return((B=(GI.J2()|0))<0)?B+0x100000000:B;},AOl:function(
Ma){var B;Ma=Ma+86400;var GI=A._NewObject(A.Core.Bq,0);GI.Initialize(Ma);GI.AnH(
0);GI.AnK(0);GI.AnN(0);return((B=(GI.J2()|0))<0)?B+0x100000000:B;},BjH:function(
BCY,BzL,Aml,AlK){var BdC=A._GetAutoObject(C.Helper).Mg(BCY,BzL);if(BdC>0)return((
AlK-Aml)/BdC)|0;return 0;},BqC:function(BxT,Byv){var GI=A._NewObject(A.Core.Bq,0
);var La=A._NewObject(A.Core.Bq,0);GI.Initialize(BxT);La.Initialize(Byv);return(
GI.Year===La.Year)&&(GI.Ab8()===La.Ab8());},A7l:function(){var Be=A._GetAutoObject(
C.Helper).ME();var BeH=A._NewObject(C.UInt32FilterCriterion,0);var ByE=A._GetAutoObject(
C.Helper).Z0(A._GetAutoObject(C.Device).AqX)-1;BeH.Initialize(28,2,ByE,true);Be.
CY(BeH);var Vd=A._NewObject(C.AnimalTypeFilterCriterion,0);Vd.Initialize(14,0,1,
true);Be.CY(Vd);if(A._GetAutoObject(C.Device).AqY){var AAr=A._NewObject(C.UInt32FilterCriterion
,0);var A2$=A._GetAutoObject(C.Helper).Dr()-21600;AAr.Initialize(30,3,A2$,true);
Be.CY(AAr);}return Be;},Bph:function(){var Mo=A._GetAutoObject(C.Device).An.QG();
if(Mo<=0)A.ab5("%s",AcV);else{A._GetAutoObject(C.Device).An.FE();A._GetAutoObject(
C.Device).An.QK(Mo);}Mo=A._GetAutoObject(C.Device).Bt.QG();if(Mo<=0)A.ab5("%s",AcV
);else{A._GetAutoObject(C.Device).Bt.FE();A._GetAutoObject(C.Device).Bt.QK(Mo);}
Mo=A._GetAutoObject(C.Device).Pv.QG();if(Mo<=0)A.ab5("%s",AcV);else{A._GetAutoObject(
C.Device).Pv.FE();A._GetAutoObject(C.Device).Pv.QK(Mo);}},BkJ:function(Adb){var Bj=
A._GetAutoObject(C.Device).An.L3(0,Adb);return this.GT(Bj);},ARx:function(IA){var
AiA=A._GetAutoObject(C.Device).An.Aer(22,IA);return AiA;},ADe:function(){var Be=
A._GetAutoObject(C.Helper).ME();var Ajd=A._NewObject(C.UInt64FilterCriterion,0);
Ajd.Initialize(22,0,0,true);Be.CY(Ajd);return Be;},AOU:function(Ao1,BzI,Qh){var Aay=-
1;switch(Ao1){case 2:Aay=30;break;case 3:Aay=31;break;case 10:Aay=19;break;default:
A.ab5("%s%e",U5,Ao1);}if(Aay<0)return null;var Adp=A._NewObject(C.UInt32FilterCriterion
,0);Adp.Initialize(Aay,3,A._GetAutoObject(C.Helper).Dr()-BzI,Qh);return Adp;},Bpd:
function(aFilter){var AH=aFilter.DN(30,3);if(!!AH)aFilter.Nz(AH);AH=aFilter.DN(31
,3);if(!!AH)aFilter.Nz(AH);AH=aFilter.DN(19,3);if(!!AH)aFilter.Nz(AH);},A16:function(
AfZ,Ay8,AL){if(AL.Lm())return 5;if(AfZ.VisualId<=0)switch(Ay8){case 0:if(!AfZ.NaisId
)return 1;break;case 1:if(!AfZ.TransponderId)return 1;break;case 3:case 2:case 5:
case 4:return 1;default:throw new Error(AHE+Ay8.toFixed());}if((!AfZ.NaisId&&!AfZ.
TransponderId)&&A._GetAutoObject(C.Device).An.AjL(1,AfZ.VisualId))return 2;if(!!
AfZ.NaisId&&A._GetAutoObject(C.Helper).ARu(AfZ.NaisId))return 3;if(!!AfZ.TransponderId&&
A._GetAutoObject(C.Helper).ARx(AfZ.TransponderId))return 4;return 0;},Aqm:function(
C1){C1.ED(A._GetAutoObject(C.Device).AnimalType);C1.N9(A._GetAutoObject(C.Device
).Breed);C1.Q8(A._GetAutoObject(C.Helper).Dr()-A._GetAutoObject(C.Helper).AmN(A.
_GetAutoObject(C.Device).AdY));C1.J4(A._GetAutoObject(C.Device).Gender);C1.Nw(A.
_GetAutoObject(C.Device).WhereAbouts);C1.OV(A._GetAutoObject(C.Device).IsRegistrationNoticePending
);},AMv:function(Rv,C1){var FM=0;switch(Rv){case 0:FM=A._GetAutoObject(C.Helper).
Aoa(C1.NaisId);break;case 1:FM=A._GetAutoObject(C.Helper).Aoa(C1.TransponderId);
break;case 3:FM=A._GetAutoObject(C.Device).Aq_;break;case 2:FM=A._GetAutoObject(
C.Device).Aq$;break;case 4:case 5:FM=A._GetAutoObject(C.Device).AjV;break;default:
throw new Error(AHF+Rv.toFixed());}return FM;},BaA:function(Alr,Mb,Bcx,BxE,Bx$){
var B;var Qv=null;var XJ=null;switch(Alr){case 0:{Qv=[B=A._GetAutoObject(C.Device
),B.ASU,B.A0N];XJ=[B=A._GetAutoObject(C.Device),B.Awq,B.Ay2];}break;case 1:switch(
Mb){case 1:{Qv=[B=A._GetAutoObject(C.Device),B.A9w,B.BbY];XJ=[B=A._GetAutoObject(
C.Device),B.Awo,B.Ay0];}break;case 0:{Qv=[B=A._GetAutoObject(C.Device),B.A9x,B.BbZ
];XJ=[B=A._GetAutoObject(C.Device),B.Awp,B.Ay1];}break;case 2:{Qv=[B=A._GetAutoObject(
C.Device),B.ASU,B.A0N];XJ=[B=A._GetAutoObject(C.Device),B.Awq,B.Ay2];}break;default:
throw new Error(Ayq+Mb.toFixed());}break;default:throw new Error(AHG+Alr.toFixed(
));}if(!!Qv&&!!XJ){Qv[2].call(Qv[0],Bcx);if(Bcx>0){if((XJ[1].call(XJ[0])>0)&&(BxE<
Bx$))Qv[2].call(Qv[0],Qv[1].call(Qv[0])+XJ[1].call(XJ[0]));else if(XJ[1].call(XJ[
0])<0)Qv[2].call(Qv[0],Qv[1].call(Qv[0])+XJ[1].call(XJ[0]));}return Qv[1].call(Qv[
0]);}return 0;},AVU:function(C1,Alr,BxM){if(!C1||(BxM===true))return;switch(Alr){
case 0:C1.Nt(A._GetAutoObject(C.Device).Av8);break;case 1:switch(C1.Gender){case
0:C1.Nt(A._GetAutoObject(C.Device).AEz);break;case 1:C1.Nt(A._GetAutoObject(C.Device
).AEy);break;case 2:C1.Nt(A._GetAutoObject(C.Device).Av8);break;default:throw new
Error(Ayq+C1.Gender.toFixed());}break;default:throw new Error(AHG+Alr.toFixed());
}},Bkl:function(Rv,C1){var result=false;switch(Rv){case 0:result=!!C1.NaisId;break;
case 1:result=!!C1.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHF+Rv.toFixed());}return result;},AKu:function(C1
,Bcq,Ay8,AtJ,AfS){switch(Bcq){case 2:if(AtJ<=0)A._GetAutoObject(C.Device).AZ(21,
true,C1.VisualId.toFixed(),0,AfS);else A._GetAutoObject(C.Device).AZ(48,true,(C1.
VisualId.toFixed()+Ayr)+AtJ.toFixed(),0,AfS);break;case 3:if(AtJ<=0)A._GetAutoObject(
C.Device).AZ(21,true,A._GetAutoObject(C.Converter).Rl(C1.NaisId),0,AfS);else A._GetAutoObject(
C.Device).AZ(48,true,(A._GetAutoObject(C.Converter).Rl(C1.NaisId)+Ayr)+AtJ.toFixed(
),0,AfS);break;case 4:if(AtJ<=0)A._GetAutoObject(C.Device).AZ(25,true,A._GetAutoObject(
C.Converter).Rl(C1.TransponderId),0,AfS);else A._GetAutoObject(C.Device).AZ(47,true
,(A._GetAutoObject(C.Converter).Rl(C1.TransponderId)+Ayr)+AtJ.toFixed(),0,AfS);break;
case 1:switch(Ay8){case 1:A._GetAutoObject(C.Device).AZ(42,true,A.jV,0,AfS);break;
case 0:A._GetAutoObject(C.Device).AZ(43,true,A.jV,0,AfS);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).AZ(22,true,A.jV,0,AfS);break;default:throw new
Error(AHE+Ay8.toFixed());}break;case 5:A._GetAutoObject(C.Device).AZ(41,true,A._GetAutoObject(
C.Device).An.HL().toFixed(),0,AfS);break;case 0:break;default:throw new Error(AWy+
Bcq.toFixed());}},Bd7:function(BcE,Mb){var B;var AAv=null;switch(BcE){case 0:AAv=[
B=A._GetAutoObject(C.Device),B.Awq,B.Ay2];break;case 1:switch(Mb){case 1:AAv=[B=
A._GetAutoObject(C.Device),B.Awo,B.Ay0];break;case 0:AAv=[B=A._GetAutoObject(C.Device
),B.Awp,B.Ay1];break;case 2:AAv=[B=A._GetAutoObject(C.Device),B.Awq,B.Ay2];break;
default:throw new Error(Ayq+Mb.toFixed());}break;default:throw new Error(AWz+BcE.
toFixed());}return AAv;},A7x:function(Qk,Bym){var AaY=A._NewObject(A.Core.Bq,0);
AaY.Initialize(Qk);var ABO=AaY.Year;var Bj=A._GetAutoObject(C.Device).Pv.L3(0,ABO
);var Vg=A._NewObject(C.CalfDeregistrations,0);if(Bj<0){if(A._GetAutoObject(C.Device
).Pv.Lm())A._GetAutoObject(C.Device).AZ(51,true,A._GetAutoObject(C.Device).Pv.HL(
).toFixed(),0,null);else{Vg.G8();Vg.AkG(ABO);}}else Vg.Fm(Bj,A._GetAutoObject(C.
Device).Pv);Vg.AwK(Vg.Deregistrations+1);if(Bym)Vg.AwJ(Vg.Deaths+1);Vg.Cs(A._GetAutoObject(
C.Device).Pv);},AMt:function(L0,AlT,AlL){var AKR=0;if((AlT&&(AlL===1))||(L0===1)
)AKR=1;else if((AlT&&(AlL===2))||(L0===2))AKR=2;else if(!!L0&&(L0!==5))AKR=L0;return AKR;
},BdH:function(ByD){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.S3.
Cy=A._GetAutoObject(C.Device).AcO;this.S3.B4=ByD;this.S3.An2(this);}},ADb:function(
){var Be=this.AOT();var Bew=A._NewObject(C.BoolFilterCriterion,0);Bew.Initialize(
38,0,true,true);Be.CY(Bew);return Be;},A7c:function(Ej){var Be=A._GetAutoObject(
C.Helper).ME();if(A._GetAutoObject(C.Device).Aqi){var A2R=A._GetAutoObject(C.Helper
).AOU(Ej,21600,true);Be.CY(A2R);}return Be;},A7r:function(){var Be=A._GetAutoObject(
C.Helper).ME();var BeY=A._NewObject(C.UInt64FilterCriterion,0);BeY.Initialize(26
,0,0,true);Be.CY(BeY);return Be;},A7u:function(){var B;var Be=A._GetAutoObject(C.
Helper).ME();var AAB=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DN(34,3))?
B:null);if(!!AAB)Be.Nz(AAB);var Bgh=A._NewObject(C.BoolFilterCriterion,0);Bgh.Initialize(
37,0,true,true);Be.CY(Bgh);return Be;},TW:function(A9,AtC,A1r){var B;A9=Math.trunc(
A9/this.ApU(AtC));A9%=this.ApU(A1r);return A9;},ApU:function(BcF){switch(BcF){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AWA+BcF.toFixed());}},ME:
function(){var Be=A._NewObject(C.Filter,0);var BgE=A._NewObject(C.BoolFilterCriterion
,0);BgE.Initialize(10,0,true,true);Be.CY(BgE);var AAB=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAB.Initialize(34,3,6,true);Be.CY(AAB);return Be;},Arl:function(aFilter){return!
this.ADf(aFilter);},ADf:function(aFilter){var Js=0;var Aw=aFilter.AOV();while(!!
Aw){if(Aw.YS===false)Js++;Aw=aFilter.AO0(Aw);}return Js;},AOT:function(){var Be=
this.ME();var Vd=A._NewObject(C.AnimalTypeFilterCriterion,0);Vd.Initialize(14,0,
1,true);Be.CY(Vd);return Be;},ADk:function(){var B;var A4W;var JK=this.BjZ();A4W=(((
B=A._GetAutoObject(C.Converter).AqF(JK))<0)?B+0x10000000000000000:B)*this.ApU(12
);if((JK===10)&&(A._GetAutoObject(C.Device).P1>0)){var Bz$=A._GetAutoObject(C.Helper
).TW(A._GetAutoObject(C.Device).P1,10,2)*this.ApU(8);A4W+=Bz$;}return A4W;},BjZ:
function(){var JK=0;if(!!A._GetAutoObject(C.Device).B7)JK=A._GetAutoObject(C.Device
).B7;else if(A._GetAutoObject(C.Device).P1>0)JK=A._GetAutoObject(C.Converter).Ta(
A._GetAutoObject(C.Device).P1);if(!JK)JK=A._GetAutoObject(C.Converter).A71(A._GetAutoObject(
C.Device).Language);return JK;},ARu:function(Qi){var AiA=A._GetAutoObject(C.Device
).An.Aer(26,Qi);return AiA;},Aj7:function(AfT){switch(AfT){case 0:case 1:case 2:
case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AWB+AfT.toFixed());}},BhU:function(Rv,C1){var FM=0;switch(
Rv){case 1:FM=A._GetAutoObject(C.Helper).Aoa(C1.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)FM=A._GetAutoObject(C.Device).
AjV;else switch(C1.Gender){case 0:FM=A._GetAutoObject(C.Device).Aq$;break;case 1:
FM=A._GetAutoObject(C.Device).Aq_;break;case 2:FM=A._GetAutoObject(C.Device).AjV;
break;default:throw new Error(AHH+C1.Gender.toFixed());}break;default:throw new Error(
AWC+Rv.toFixed());}return FM;},Bju:function(){var B;var Az_=(((((((A.aaR(A.acf.AhM
)+A.aaR(A.acf.Colon))+MV)+A._GetAutoObject(C.Device).AhM)+Ays)+A.aaR(A.acf.BoX))+
A.aaR(A.acf.Colon))+MV)+A._GetAutoObject(A.acj.KS).Bjs(((B=A._GetAutoObject(C.Device
).Q4.Timestamp)<0)?B+0x100000000:B);return Az_;},Bjv:function(){var B;var Az_=((((((((((((((((((((((((((((
AWD+A._GetAutoObject(C.Device).R9.AEq.toFixed())+LE)+A._GetAutoObject(C.Device).
R9.AEv.toFixed())+LE)+A._GetAutoObject(C.Device).R9.AGD.toFixed())+Pb)+A._GetAutoObject(
C.Device).R9.ACD)+Pb)+A._GetAutoObject(A.acj.KS).AjN(((B=A._GetAutoObject(C.Device
).R9.Timestamp)<0)?B+0x100000000:B))+MV)+AWE)+A._GetAutoObject(C.Device).SJ.AEq.
toFixed())+LE)+A._GetAutoObject(C.Device).SJ.AEv.toFixed())+LE)+A._GetAutoObject(
C.Device).SJ.AGD.toFixed())+Pb)+A._GetAutoObject(C.Device).SJ.ACD)+Pb)+A._GetAutoObject(
A.acj.KS).AjN(((B=A._GetAutoObject(C.Device).SJ.Timestamp)<0)?B+0x100000000:B))+
MV)+AWF)+A._GetAutoObject(C.Helper).Bj2())+Pb)+A._GetAutoObject(C.Device).GetCommitHash(
))+Pb)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+Pb)+A._GetAutoObject(
A.acj.KS).AjN(A._GetAutoObject(C.Device).GetCommitEpoch());return Az_;},Bjt:function(
){var B;var Az_=(((((((((((((((((((((AWG+A._GetAutoObject(C.Device).Q4.ARW.toFixed(
))+LE)+A._GetAutoObject(C.Device).Q4.ARX.toFixed())+LE)+A._GetAutoObject(C.Device
).Q4.ARV.toFixed())+MV)+A.aaR(A.acf.A67))+A.aaR(A.acf.Colon))+Om)+A._GetAutoObject(
A.acj.KS).AjN(((B=A._GetAutoObject(C.Device).Q4.Timestamp)<0)?B+0x100000000:B))+
Ays)+AWH)+A._GetAutoObject(C.Device).S9.AVK.toFixed())+LE)+A._GetAutoObject(C.Device
).S9.AVL.toFixed())+LE)+A._GetAutoObject(C.Device).S9.AVJ.toFixed())+MV)+A.aaR(A.
acf.A67))+A.aaR(A.acf.Colon))+Om)+A._GetAutoObject(A.acj.KS).AjN(((B=A._GetAutoObject(
C.Device).S9.Timestamp)<0)?B+0x100000000:B);return Az_;},A7s:function(A1r){var B;
var O;var AA9=A.jV;for(O=1;O<=A1r;O=O+1)if(!!A.abz(0,2))AA9=AA9+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AA9=AA9+String.fromCharCode(A.abz(48,57)&0xFFFF);return AA9;
},AbA:function(Ep){var Azp=0;if(Ep===1)Ep=0;var Bdm=this.AgJ.Avy(Ep);if(Bdm>=0)Azp=
this.AfF.Get(Bdm);return Azp;},ADm:function(Ep){var F$=0;var ABM=this.AgJ.Avy(Ep
);if(ABM>=0)F$=this.AfE.Get(ABM);return F$;},ADl:function(Ep){var F$=0;var ABM=this.
AgJ.Avy(Ep);if(ABM>=0)F$=this.AfD.Get(ABM);return F$;},A7i:function(){var Be=this.
ME();var Vd=A._NewObject(C.AnimalTypeFilterCriterion,0);Vd.Initialize(14,0,A._GetAutoObject(
C.Device).ACW,true);Be.CY(Vd);return Be;},ARy:function(Jp){var BO=Math.trunc(Jp/
1000000000000)|0;if(!BO)return 0;else if(BO>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANK(BO))return 2;else return 3;},A7w:function(BAT){var Be=A._GetAutoObject(
C.Helper).ADe();var AfY=A._GetAutoObject(C.Helper).A7d(3,BAT);AfY.YS=true;Be.CY(
AfY);return Be;},A7d:function(Ed,Bcp){var Aw=A._NewObject(C.UInt32FilterCriterion
,0);Aw.EK=4;switch(Ed){case 2:{Aw.Operator=3;Aw.A6=A._GetAutoObject(C.Helper).Z0(
Bcp);}break;case 3:{Aw.Operator=2;Aw.A6=A._GetAutoObject(C.Helper).Z0(Bcp-1);}break;
default:A.ab5("%s%e",AHI,Ed);}return Aw;},Bj2:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+LE)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+LE)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A5E:function(
Rv,C1){var FM=0;switch(Rv){case 0:FM=C1.VisualId;break;case 2:FM=A._GetAutoObject(
C.Helper).Aoa(C1.TransponderId);break;case 3:if(C1.NaisId>0)FM=A._GetAutoObject(
C.Helper).Aoa(C1.NaisId);else FM=C1.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)FM=A._GetAutoObject(C.Device).AjV;else switch(C1.
Gender){case 0:FM=A._GetAutoObject(C.Device).Aq$;break;case 1:FM=A._GetAutoObject(
C.Device).Aq_;break;case 2:FM=A._GetAutoObject(C.Device).AjV;break;default:throw new
Error(AHH+C1.Gender.toFixed());}break;default:throw new Error(AWI+Rv.toFixed());
}return FM;},BaB:function(){var B;var I4=null;var Tq=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){I4=[B=A._GetAutoObject(C.Device),B.Anx,B.AoB];Tq=A._GetAutoObject(
C.Device).Au$;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{I4=[B=A.
_GetAutoObject(C.Device),B.Awj,B.AyY];Tq=A._GetAutoObject(C.Device).ACO;}break;case
0:{I4=[B=A._GetAutoObject(C.Device),B.Awk,B.AyZ];Tq=A._GetAutoObject(C.Device).ACP;
}break;case 2:{I4=[B=A._GetAutoObject(C.Device),B.Anx,B.AoB];Tq=A._GetAutoObject(
C.Device).Au$;}break;default:;}if(!!I4)switch(Tq){case 1:I4[2].call(I4[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:I4[2].call(I4[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7Z:function(Qi,C1){return(C1.NaisId!==Qi)&&this.
ARu(Qi);},Bku:function(IA,C1){return(C1.TransponderId!==IA)&&this.ARx(IA);},AOR:
function(){var Be=A._GetAutoObject(C.Helper).A7u();var AAt=A._NewObject(C.UInt64FilterCriterion
,0);AAt.Initialize(35,5,0,true);Be.CY(AAt);return Be;},Avz:function(){var Be=A._GetAutoObject(
C.Helper).A7u();var AAt=A._NewObject(C.UInt64FilterCriterion,0);AAt.Initialize(35
,0,0,true);Be.CY(AAt);return Be;},JG:function(A1i,Ah7){A1i.Ai(Ah7);A1i.As(Ah7);A1i.
Z(Ah7);},ANE:function(Ah9){var B;var Aa;var A3u=false;var XD=Ah9.TX(null,0x1);while(
!!XD&&(((B=XD)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Cp.isPrototypeOf(XD)?XD:null
);if(!!Aa){Aa.Bh(A3u);A3u=!A3u;}XD=Ah9.TX(XD,0x1);}},Bpf:function(IA){var XA=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A4C=A._GetAutoObject(
C.Device).An.Aey(22,IA);var CU=A._NewObject(C.Animal,0);CU.Fm(A4C,A._GetAutoObject(
C.Device).An);CU.Nv(0);CU.Cs(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(XA);},A7g:function(AtB,AoF){var Be=null;switch(AtB){case 0:Be=this.BjM(AoF
);break;case 1:Be=this.ADe();break;default:throw new Error(Ayt+AtB.toFixed());}return Be;
},BjM:function(Bxy){var Be=A._GetAutoObject(C.Helper).ME();var AfY=this.A7d(2,Bxy
);Be.CY(AfY);return Be;},By3:function(AtB,AoF){var XA=A._GetAutoObject(C.Device).
An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A7g(AtB,AoF));var CB=A._GetAutoObject(
C.Device).An.B_();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).GT(O);A.
_GetAutoObject(C.Helper).W.Ae$(false);A._GetAutoObject(C.Helper).W.Cs(A._GetAutoObject(
C.Device).An);}A._GetAutoObject(C.Device).An.Bk(XA);},BjN:function(AtB,AoF){var XA=
A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A7g(AtB
,AoF));var Gl=A._GetAutoObject(C.Device).An.B_();A._GetAutoObject(C.Device).An.Bk(
XA);return Gl;},A7o:function(AL){var XA=AL.Filter;AL.Bk(this.Avz());var O;var A3k=
4294967295;for(O=0;O<AL.B_();O++){var Ph=AL.Hw(O,4);if(Ph<A3k)A3k=Ph;}AL.Bk(XA);
return A._GetAutoObject(C.Helper).Mg(A3k,A._GetAutoObject(C.Helper).Dr());},ARw:
function(){if(A._GetAutoObject(C.Device).P6.Z_!==6)return false;if((A._GetAutoObject(
C.Device).P6.AsV===1529)&&(A._GetAutoObject(C.Device).P6.Aso===16900))return true;
return false;},BkK:function(Qi){if(!Qi){A.ab5("%s%U",AWJ,Qi);return false;}var Bj=
A._GetAutoObject(C.Device).An.Aey(26,Qi);return this.GT(Bj);},ArH:function(){return this.
WW;},A9H:function(){return this.AhJ;},Bl4:function(){return this.AUT;},Bl5:function(
){return this.AUU;},Bl8:function(){return this.AG4;},_Init:function(aArg){C.AmS.
_Init.call(this,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.Bq._Init.call(
this.Av={I:this},0);A.acl.Gp._Init.call(this.KO={I:this},0);A.acl.Gp._Init.call(
this.S3={I:this},0);C.AMP._Init.call(this.Ad6={I:this},0);C.AVA._Init.call(this.
UN={I:this},0);C.AVz._Init.call(this.UM={I:this},0);C.TP._Init.call(this.Aet={I:
this},0);C.AWe._Init.call(this.AfE={I:this},0);C.AWd._Init.call(this.AfD={I:this
},0);C.AWc._Init.call(this.AfC={I:this},0);C.AWg._Init.call(this.AfF={I:this},0);
C.AMQ._Init.call(this.AgJ={I:this},0);this.__proto__=C.HelperClass;var B;this.KO.
HP(1);this.KO.Fq(3000);this.KO.B4=100;this.S3.AwP(10);this.S3.WQ(5);this.S3.HP(1
);this.S3.Fq(4000);this.Aet.B4=false;this.Aet.Cy=true;this.Aet.HP(1);this.Aet.Fq(
100);this.KO.SL=[this,this.BC0];this.KO.Q=[this,this.Bl8,this.Bop];this.S3.SL=[this
,this.BC2];this.S3.Q=[B=A._GetAutoObject(C.Device),B.AEX,B.AI6];this.Aet.Q=[B=A.
_GetAutoObject(C.Device),B.AEY,B.AI7];this.Init(aArg);var Ka=this._variants();if(
Ka){this.K={};Ka._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AmS;this.W._Done();this.Av._Done();this.KO._Done();this.
S3._Done();this.Ad6._Done();this.UN._Done();this.UM._Done();this.Aet._Done();this.
AfE._Done();this.AfD._Done();this.AfC._Done();this.AfF._Done();this.AgJ._Done();
C.AmS._Done.call(this);},_ReInit:function(){C.AmS._ReInit.call(this);this.W._ReInit(
);this.Av._ReInit();this.KO._ReInit();this.S3._ReInit();this.Ad6._ReInit();this.
UN._ReInit();this.UM._ReInit();this.Aet._ReInit();this.AfE._ReInit();this.AfD._ReInit(
);this.AfC._ReInit();this.AfF._ReInit();this.AgJ._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AmS._Mark.call(this,D);if((B=this.WW)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AhJ)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AUT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUU)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.S3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AfD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfF)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgJ)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acq.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A6:false
,Abt:function(){var Aw=A._NewObject(C.BoolFilterCriterion,0);Aw.E_(this);return Aw;
},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var Aw=(C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Ed,A9,
Qh){this.EK=Bc;this.Operator=Ed;this.A6=A9;this.YS=Qh;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A6:0,Abt:function(
){var Aw=A._NewObject(C.UInt32FilterCriterion,0);Aw.E_(this);return Aw;},E_:function(
AH){C.FilterCriterion.E_.call(this,AH);var Aw=(C.UInt32FilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Ed,A9,Qh){this.EK=Bc;
this.Operator=Ed;this.A6=A9;this.YS=Qh;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,BirthRegistrationsListMenu:16
,LAST:17};C.EnumToString={BU:function(A7){throw new Error(As$+A7.toFixed());},LC:
function(A7){return this.BU(A7);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BU:function(
A7){var AJ8=A7;var BD;switch(AJ8){case 3:BD=A.aaR(A.acf.AvF);break;case 34:BD=A.
aaR(A.acf.TE);break;case 35:BD=A.aaR(A.acf.VE);break;case 43:BD=A.aaR(A.acf.AOQ);
break;default:BD=this.BqD(A7);}return BD;},BqD:function(A7){var AJ8=A7;var BD=A.
jV;switch(AJ8){case 0:BD=Ayu;break;case 2:BD=AWK;break;case 4:BD=AHJ;break;case 39:
BD=AWL;break;case 38:BD=AHK;break;case 63:BD=AHL;break;case 64:BD=AHM;break;case
82:BD=AWM;break;case 83:BD=AHN;break;case 92:BD=AWN;break;case 93:BD=AWO;break;case
65:BD=Rs;break;case 3:BD=U6;break;case 6:BD=AWP;break;case 16:BD=AWQ;break;case 22:
BD=AWR;break;case 42:BD=AWS;break;case 88:BD=AWT;break;case 87:BD=AWU;break;case
89:BD=AWV;break;case 95:BD=Ah1;break;case 17:BD=AHO;break;case 23:BD=AWW;break;case
18:BD=AWX;break;case 19:BD=AHP;break;case 37:BD=AHQ;break;case 76:BD=Ayv;break;case
1:BD=Qe;break;case 5:BD=AWY;break;case 7:BD=AWZ;break;case 81:BD=AW0;break;case 8:
BD=Ata;break;case 9:BD=AW1;break;case 40:BD=AW2;break;case 41:BD=AW3;break;case 24:
BD=AW4;break;case 10:BD=AW5;break;case 60:BD=AW6;break;case 21:BD=Atb;break;case
11:BD=AW7;break;case 29:BD=AW8;break;case 48:BD=AW9;break;case 30:BD=AW_;break;case
12:BD=AW$;break;case 13:BD=AXa;break;case 14:BD=AXb;break;case 15:BD=AXc;break;case
69:BD=AXd;break;case 70:BD=AXe;break;case 20:BD=AHR;break;case 25:BD=Alg;break;case
66:BD=AXf;break;case 59:BD=AXg;break;case 58:BD=AXh;break;case 56:BD=Ayw;break;case
57:BD=Alh;break;case 68:BD=Ali;break;case 67:BD=Ayx;break;case 84:BD=Aop;break;case
77:BD=Ah2;break;case 26:BD=AXi;break;case 28:BD=AHS;break;case 27:BD=Ayy;break;case
31:BD=AHT;break;case 78:BD=AfL;break;case 34:BD=AHU;break;case 35:BD=Aaq;break;case
32:BD=Alj;break;case 45:BD=Aoq;break;case 49:BD=AXj;break;case 55:BD=AXk;break;case
54:BD=AXl;break;case 33:BD=AXm;break;case 36:BD=AXn;break;case 50:BD=Atc;break;case
75:BD=AHV;break;case 43:BD=AHW;break;case 44:BD=AXo;break;case 61:BD=AXp;break;case
62:BD=AXq;break;case 46:BD=AXr;break;case 47:BD=AXs;break;case 85:BD=AXt;break;case
86:BD=AXu;break;case 71:BD=AXv;break;case 72:BD=AXw;break;case 74:BD=AXx;break;case
73:BD=AXy;break;case 51:BD=Ayz;break;case 52:BD=AHX;break;case 53:BD=AHY;break;case
79:BD=AHZ;break;case 80:BD=AH0;break;case 90:BD=AH1;break;case 91:BD=AH2;break;case
94:BD=AXz;break;default:throw new Error(AXA+AJ8.toFixed());}return BD;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BU:function(A7){
var Bgb=A7;var Pk=A.jV;switch(Bgb){case 0:Pk=AXB;break;case 1:Pk=U6;break;case 8:
Pk=AXC;break;case 2:Pk=AXD;break;case 3:Pk=AXE;break;case 4:Pk=AXF;break;case 5:
Pk=AyA;break;case 6:Pk=AH3;break;case 7:Pk=AXG;break;case 11:Pk=AH4;break;case 12:
Pk=Ah3;break;case 9:Pk=U7;break;case 10:Pk=AXH;break;case 14:Pk=Aar;break;case 15:
Pk=AXI;break;case 13:Pk=AXJ;break;case 16:Pk=Alk;break;default:throw new Error(AfM+
Bgb.toFixed());}return Pk;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BU:function(A7){var BgM=A7;var Bp=A.jV;switch(BgM){case 4:
Bp=AcX;break;case 0:Bp=Aor;break;case 2:Bp=AXK;break;case 3:Bp=Pd;break;case 1:Bp=
AH5;break;default:throw new Error(AH6+BgM.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BU:function(A7){
var BeS=A7;var Bp=A.jV;switch(BeS){case 4:Bp=AcX;break;case 0:Bp=Aor;break;case 2:
Bp=AXL;break;case 1:Bp=AH5;break;case 3:Bp=AH7;break;default:throw new Error(AH8+
BeS.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BU:
function(A7){var Bha=A7;var Ap$=A.jV;switch(Bha){case 0:Ap$=A.aaR(A.acf.BqU);break;
case 1:Ap$=A.aaR(A.acf.BqV);break;default:throw new Error(AH9+Bha.toFixed());}return Ap$;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BU:function(A7){var ALg=A7;var type=
A.jV;switch(ALg){case 0:type=A.aaR(A.acf.Bii);break;case 1:type=A.aaR(A.acf.Biv);
break;case 2:type=A.aaR(A.acf.BkC);break;default:throw new Error(AXM+ALg.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,Danish:17,Hungarian:18,Japanese:19,Latvian:20,Polish:21,Portuguese:
22,Romanian:23,Swedish:24,Croatian:25,Lithuanian:26,Slovenian:27,LAST:28};C.LanguageToString={
BU:function(A7){var AAn=A7;var I5=A.jV;switch(AAn){case 14:I5=AXN;break;case 13:
I5=AXO;break;case 6:I5=AXP;break;case 25:I5=AXQ;break;case 11:I5=AXR;break;case 17:
I5=AXS;break;case 0:I5=AXT;break;case 10:I5=AH_;break;case 12:I5=AXU;break;case 5:
I5=AH$;break;case 3:I5=AIa;break;case 1:I5=AyB;break;case 8:I5=AXV;break;case 18:
I5=AXW;break;case 4:I5=AXX;break;case 19:I5=AXY;break;case 20:I5=AXZ;break;case 26:
I5=AX0;break;case 15:I5=AX1;break;case 21:I5=AX2;break;case 22:I5=Aos;break;case
23:I5=Atd;break;case 9:I5=AIb;break;case 27:I5=AX3;break;case 2:I5=AX4;break;case
24:I5=AX5;break;case 7:I5=AX6;break;case 16:I5=AX7;break;default:throw new Error(
AIc+AAn.toFixed());}return I5;},LC:function(A7){var AAn=A7;var CO=A.jV;switch(AAn
){case 14:CO=AX8;break;case 13:CO=Xe;break;case 6:CO=AX9;break;case 25:CO=U1;break;
case 11:CO=AX_;break;case 17:CO=AX$;break;case 0:CO=AYa;break;case 10:CO=U4;break;
case 12:CO=AYb;break;case 5:CO=U2;break;case 3:CO=Xg;break;case 1:CO=Pa;break;case
8:CO=AYc;break;case 18:CO=Ol;break;case 4:CO=Xh;break;case 19:CO=AYd;break;case 20:
CO=U3;break;case 26:CO=Xj;break;case 15:CO=Xl;break;case 21:CO=Xm;break;case 22:
CO=Xn;break;case 23:CO=Rq;break;case 9:CO=Tj;break;case 27:CO=AId;break;case 2:CO=
Aal;break;case 24:CO=AYe;break;case 7:CO=Aan;break;case 16:CO=K4;break;default:throw new
Error(AIc+AAn.toFixed());}return CO;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BU:function(A7){var At1=A7;var AKn=A.jV;
switch(At1){case 0:AKn=A.aaR(A.acf.Male);break;case 1:AKn=A.aaR(A.acf.Female);break;
case 2:AKn=A.aaR(A.acf.Unknown);break;default:throw new Error(AYf+At1.toFixed());
}return AKn;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BU:
function(A7){var type=A7;var Af2=A.jV;switch(type){case 0:Af2=A.aaR(A.acf.BpS);break;
case 1:Af2=A.aaR(A.acf.BqQ);break;case 2:Af2=A.aaR(A.acf.Triplets);break;case 3:
Af2=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AYg+type.toFixed());}
return Af2;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BU:function(A7){var Bg6=A7;var Bp=A.jV;switch(Bg6){case 7:
Bp=AcX;break;case 0:Bp=Aor;break;case 6:Bp=AH7;break;case 2:Bp=AIe;break;case 5:
Bp=AIf;break;case 3:Bp=AIg;break;case 4:Bp=AIh;break;case 1:Bp=AyC;break;default:
throw new Error(AyD+Bg6.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BU:function(A7){var AA_=A7;switch(AA_){case 0:return A.
jV;case 1:return A.aaR(A.acf.Bo4);case 4:return A.aaR(A.acf.Bo3);case 3:return A.
aaR(A.acf.Bo5);case 2:return A.aaR(A.acf.Bo2);default:throw new Error(AyE+AA_.toFixed(
));}},LC:function(A7){var AA_=A7;switch(AA_){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGw);case 3:return A.aaR(A.acf.AGx);case
2:return A.aaR(A.acf.AGu);default:throw new Error(AyE+AA_.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BU:function(
A7){var AlA=A7;var Azw=A.jV;switch(AlA){case 0:case 5:Azw=A.jV;break;case 3:Azw=
A.aaR(A.acj.BpY);break;case 2:Azw=A.aaR(A.acj.Bp0);break;case 1:Azw=A.aaR(A.acj.
BpZ);break;default:throw new Error(AYh+AlA.toFixed());}return Azw;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AssesmentToString;},
_className:"Device::AssesmentToString"};C.PopupId={Unknown:0,SevereError:1,EnterSleep:
2,About:3,WarningDataSync:4,SuccessDataSync:5,WarningRestart:6,WarningFactorySettings:
7,SuccessResetFactorySettings:8,ShutDown:9,TechnicalDetails:10,ScanError:11,ScanNotFound:
12,ScannedAnimalNotFound:13,AnimalNotFound:14,SuccessUnregister:15,DataSynchInProgress:
16,AddedToAlarm:17,RemovedFromAlarm:18,AddedToWatch:19,RemovedFromWatch:20,AnimalIdAlreadyExists:
21,MissingAnimalId:22,SuccessCreationNewAnimals:23,AnimalCreationInProgress:24,TransponderAlreadyRegistered:
25,SuccessCreationNewAnimal:26,WarningNoActionDefined:27,WarningNoMenuItemVisible:
28,WarningEnterPresentationMode:29,WarningNoAnimalsRegistered:30,HelpAnimalInfoRating:
31,WarningReassignTransponder:32,WarningResetAnimalData:33,SuccessResetAnimalData:
34,SuccessUnregisterPerished:35,ScannedTransponderNotFound:36,WarningResetWeightSettings:
37,WarningResetTempThresholds:38,UpdateFirmware:39,ConfirmFirmwareUpdated:40,WarningMaxNumAnimalsReached:
41,MissingTransponder:42,MissingEartagNumber:43,WarningResetToDefault:44,WarningEartagNumberTooShort:
45,WarningNoValidCountryCode:46,TransponderAlreadyRegisteredContinuable:47,AnimalIdAlreadyExistsContinuable:
48,EvaluationInProgress:49,WarningMaxNumRatingsReached:50,WarningMaxNumCalfDeregistrationsReached:
51,WarningOutdatedAnimalWeights:52,WarningWeightEvaluationSingular:53,AddedToDryOff:
54,RemovedFromDryOff:55,WarningWeightEvaluationPlural:56,WarningOutdatedAnimalWeight:
57,ErrorsDeviceDriverCheck:58,QuestionAddAnotherCalfMultiples:59,RemovedFromBirthNoticePending:
60,RemovedAnimalBirth:61,RemovedAllBirthNoticesPending:62,MissingAnimalIdMother:
63,WarningActionNotApplicable:64,SuccessClearAnimalLoss:65,WarningNoActionsForAnimalLoss:
66,SuccessLinkTransponder:67,SuccessLinkNaisId:68,CannotReassignNaisId:69,WarningDataExportHitBirthFailed:
70,SuccessDataExportHitBirth:71,SuccessDataExportHitBirthDownload:72,WarningNoPremisesID:
73,WarningNoFlashDrivePresent:74,ConfirmBootloaderUpdated:75,UpdateFirmwareBatteryLow:
76,InfoSoftwareVersions:77,InfoHardwareVersions:78,InfoSerial:79,SuccessCreateBackup:
80,SuccessRestoreBackup:81,FailedCreateBackup:82,FailedRestoreBackup:83,DemoFunctionNotAvailable:
84,MissingTransponderId:85,SuccessUnlinkTransponder:86,WarningImpreciseTimeSetting:
87,WarningDataExportAnimalsFailed:88,SuccessDataExportAnimalsRatings:89,SuccessDataExportAnimalsDownload:
90,CreateBackupInProgress:91,RestoreBackupInProgress:92,WarningNoBackupFilePresent:
93,WarningNoBackupPathPresent:94,ConfirmationRestoreBackup:95,RemovedAllPurchasedNoticesPending:
96,WarningDataExportPurchasedFailed:97,RemovedFromPurchasedNoticePending:98,SuccessDataExportPurchasedDownload:
99,SuccessDataExportPurchased:100,WarningParsingDateFailed:101,WarningParsedDateInFutureInvalid:
102,WarningParsingNaisIdFailed:103,RemovedAnimalPurchased:104,WarningParsingShortNaisIdWithoutPremisesId:
105,SuccessChangeTransponder:106,TransponderAlreadyRegisteredCapturable:107,ConfirmationMassDeregistration:
108,SuccessMassDeregistration:109,DataExportInProgress:110,BarcodeScannerConnectedSwitchScreen:
111,BarcodeScannerDisconnectedSwitchScreen:112,SuccessDataExportHitBirthResetAdvice:
113,SuccessDataExportPurchasedResetAdvice:114,WarningResetDeviceData:115,SuccessResetSettings:
116,ScannedNaisIdNotFound:117,WarningNoPremisesCountry:118,LAST:119};C.PopupState={
Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:
5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:8,Opened:9};C.PopupContext={
AGg:null,AkI:A.jV,Ak5:0,PopupState:1,Id:0,Show:false,Bn9:function(E){var B;if(this.
PopupState===E)return;this.PopupState=E;if(!!this.AGg)(B=this.AGg)?B[1].call(B[0
],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.AGg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::PopupContext"
};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={BU:function(A7){switch(A7){case
0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.Yes);default:return Ate+A7.toFixed(
);}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.
BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.PopupIdToString={BU:function(
A7){var AdJ=A7;var At=A.jV;var AJ6;AJ6=A.aaR(A.acf.Brc)+MV;switch(AdJ){case 0:At=
A.aaR(A.acf.Unknown);break;case 1:At=A.aaR(A.acf.SevereError);break;case 58:At=A.
aaR(A.acf.Bjh);break;case 2:At=A.aaR(A.acf.Bjf);break;case 3:At=A.aaR(A.acf.Bq0);
break;case 77:At=A._GetAutoObject(C.Helper).Bjv();break;case 78:At=A._GetAutoObject(
C.Helper).Bjt();break;case 79:At=A._GetAutoObject(C.Helper).Bju();break;case 9:At=
A.aaR(A.acf.Brq);break;case 5:At=A.aaR(A.acf.SuccessDataSync);break;case 8:At=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 116:At=A.aaR(A.acf.Bqg);break;
case 34:At=A.aaR(A.acf.SuccessResetAnimalData);break;case 10:At=A._GetAutoObject(
C.Device).ADj();break;case 82:At=A.aaR(A.acf.Bjj);break;case 83:At=A.aaR(A.acf.Bjk
);break;case 80:At=A.aaR(A.acf.Bp_);break;case 81:At=A.aaR(A.acf.SuccessRestoreBackup
);break;case 91:At=A.aaR(A.acf.Bh7);break;case 92:At=A.aaR(A.acf.Bpj);break;case
4:At=A.aaR(A.acf.WarningDataSync);break;case 7:At=A.aaR(A.acf.Bro);break;case 33:
At=A.aaR(A.acf.WarningResetAnimalData);break;case 115:At=A.aaR(A.acf.WarningResetDeviceData
);break;case 6:At=A.aaR(A.acf.WarningRestart);break;case 27:At=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:At=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:At=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:At=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:At=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:At=((AJ6+
A.aaR(A.acf.AR4))+MV)+A.aaR(A.acf.BkQ);break;case 50:At=((AJ6+A.aaR(A.acf.AR4))+
MV)+A.aaR(A.acf.BkS);break;case 51:At=((AJ6+A.aaR(A.acf.AR4))+MV)+A.aaR(A.acf.BkR
);break;case 42:At=A.aaR(A.acf.Brm);break;case 45:At=A.aaR(A.acf.Brg);break;case
46:At=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:At=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:At=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:At=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:At=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:At=A.aaR(A.acf.ScanError);break;case 12:At=A.aaR(A.acf.ScanNotFound
);break;case 13:At=A.aaR(A.acf.BhZ);break;case 36:At=A.aaR(A.acf.BqL);break;case
117:At=A.aaR(A.acf.Brs);break;case 14:At=A.aaR(A.acf.AnimalNotFound);break;case 15:
At=A.aaR(A.acf.SuccessUnregister);break;case 35:At=A.aaR(A.acf.SuccessUnregisterPerished
);break;case 26:At=A.aaR(A.acf.SuccessCreationNewAnimal);break;case 23:At=A.aaR(
A.acf.SuccessCreationNewAnimals);break;case 24:At=A.aaR(A.acf.Biy);break;case 49:
At=A.aaR(A.acf.EvaluationInProgress);break;case 16:At=A.aaR(A.acf.BiD);break;case
17:At=A.aaR(A.acf.Bp2);break;case 18:At=A.aaR(A.acf.Bqe);break;case 19:At=A.aaR(
A.acf.Bp3);break;case 20:At=A.aaR(A.acf.Bqf);break;case 54:At=A.aaR(A.acf.Bp$);break;
case 55:At=A.aaR(A.acf.Bqc);break;case 21:At=A.aaR(A.acf.BaF);break;case 48:At=(
A.aaR(A.acf.BaF)+MV)+A.aaR(A.acf.A6k);break;case 22:At=A.aaR(A.acf.Bri);break;case
63:At=A.aaR(A.acf.Brj);break;case 85:At=A.aaR(A.acf.Brl);break;case 43:At=A.aaR(
A.acf.Brk);break;case 25:At=A.aaR(A.acf.Bao);break;case 47:At=(A.aaR(A.acf.Bao)+
MV)+A.aaR(A.acf.A6k);break;case 107:At=A.aaR(A.acf.BqW);break;case 31:{var BAC=(((((((((((((((((((
A.aaR(A.acf.Biq)+Ays)+A.aaR(A.acf.ANG))+A.aaR(A.acf.Colon))+Om)+A.aaR(A.acf.Bis)
)+MV)+A.aaR(A.acf.AOG))+A.aaR(A.acf.Colon))+Om)+A.aaR(A.acf.Bjp))+MV)+A.aaR(A.acf.
AUD))+A.aaR(A.acf.Colon))+Om)+A.aaR(A.acf.Bo7))+MV)+A.aaR(A.acf.AUC))+A.aaR(A.acf.
Colon))+Om)+A.aaR(A.acf.Bo6);At=BAC;}break;case 32:At=A.aaR(A.acf.BqM);break;case
69:At=A.aaR(A.acf.Bk3);break;case 44:At=A.aaR(A.acf.Brp);break;case 37:At=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:At=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:At=A.aaR(A.acf.BoY);break;case 76:At=(A.aaR(A.acf.A5Z)+MV)+A.aaR(
A.acf.AUF);break;case 40:At=A.aaR(A.acf.Bqa);break;case 75:At=A.aaR(A.acf.Bp4);break;
case 59:At=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:At=A.aaR(A.
acf.Bp6);break;case 96:At=A.aaR(A.acf.Bp7);break;case 60:At=A.aaR(A.acf.Bp8);break;
case 98:At=A.aaR(A.acf.Bp9);break;case 61:At=A.aaR(A.acf.Bqh);break;case 104:At=
A.aaR(A.acf.Bqi);break;case 65:At=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:At=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:At=A.aaR(A.acf.SuccessLinkTransponder
);break;case 106:At=A.aaR(A.acf.Bp5);break;case 86:At=A.aaR(A.acf.SuccessUnlinkTransponder
);break;case 68:At=A.aaR(A.acf.Bqb);break;case 70:At=A.aaR(A.acf.Bjl);break;case
71:At=A.aaR(A.acf.Bag);break;case 72:At=A.aaR(A.acf.Bql);break;case 113:At=(A.aaR(
A.acf.Bag)+MV)+A.aaR(A.acf.A8d);break;case 97:At=A.aaR(A.acf.Bjn);break;case 100:
At=(A.aaR(A.acf.Bah)+MV)+A.aaR(A.acf.A$E);break;case 114:At=(A.aaR(A.acf.Bah)+MV
)+A.aaR(A.acf.A8d);break;case 99:At=A.aaR(A.acf.Bqm);break;case 88:At=A.aaR(A.acf.
Bjm);break;case 89:At=A.aaR(A.acf.Bqj);break;case 90:At=A.aaR(A.acf.Bqk);break;case
73:At=A.aaR(A.acf.WarningNoPremisesID);break;case 118:At=A.aaR(A.acf.WarningNoPremisesCountry
);break;case 74:At=A.aaR(A.acf.WarningNoFlashDrivePresent);break;case 94:At=A.aaR(
A.acf.WarningNoBackupPathPresent);break;case 93:At=A.aaR(A.acf.WarningNoBackupFilePresent
);break;case 84:At=A.aaR(A.acf.BjC);break;case 87:At=A.aaR(A.acf.Brt);break;case
95:At=A.aaR(A.acf.Brf);break;case 108:At=A.aaR(A.acf.Brh);break;case 109:At=A.aaR(
A.acf.SuccessMassDeregistration);break;case 102:At=A.aaR(A.acf.WarningParsedDateInFutureInvalid
);break;case 101:At=A.aaR(A.acf.WarningParsingDateFailed);break;case 103:At=A.aaR(
A.acf.WarningParsingNaisIdFailed);break;case 105:At=A.aaR(A.acf.Brn);break;case 110:
At=A.aaR(A.acf.Bih);break;case 111:At=A.aaR(A.acf.Bpu);break;case 112:At=A.aaR(A.
acf.Bpv);break;default:throw new Error(AIi+AdJ.toFixed());}return At;},LC:function(
A7){var AdJ=A7;var At=A.jV;switch(AdJ){case 0:At=AIj;break;case 1:At=AYi;break;case
58:At=AYj;break;case 2:At=AYk;break;case 3:At=AYl;break;case 77:At=AYm;break;case
78:At=AYn;break;case 79:At=AYo;break;case 9:At=AYp;break;case 5:At=AYq;break;case
8:At=AYr;break;case 116:At=AYs;break;case 34:At=AYt;break;case 80:At=AyF;break;case
81:At=AYu;break;case 91:At=AYv;break;case 92:At=AyG;break;case 82:At=Atf;break;case
83:At=U8;break;case 10:At=Atg;break;case 4:At=AYw;break;case 7:At=AYx;break;case
33:At=AYy;break;case 115:At=AIk;break;case 6:At=AYz;break;case 27:At=AIl;break;case
64:At=AYA;break;case 28:At=AYB;break;case 29:At=Ath;break;case 30:At=AYC;break;case
41:At=AYD;break;case 50:At=AIm;break;case 51:At=AYE;break;case 42:At=AYF;break;case
45:At=AYG;break;case 46:At=AYH;break;case 57:At=AcY;break;case 52:At=AYI;break;case
53:At=AYJ;break;case 56:At=AYK;break;case 11:At=AYL;break;case 12:At=AIn;break;case
13:At=AYM;break;case 36:At=AYN;break;case 117:At=AYO;break;case 14:At=AYP;break;
case 15:At=AYQ;break;case 35:At=AYR;break;case 26:At=AIo;break;case 23:At=AYS;break;
case 24:At=AYT;break;case 49:At=AYU;break;case 16:At=AIp;break;case 17:At=AIq;break;
case 18:At=AYV;break;case 19:At=AYW;break;case 20:At=AYX;break;case 54:At=AYY;break;
case 55:At=Rt;break;case 21:At=Ati;break;case 48:At=AIr;break;case 22:At=AIs;break;
case 63:At=Aot;break;case 43:At=Aou;break;case 85:At=AyH;break;case 25:At=AYZ;break;
case 47:At=AIt;break;case 107:At=AY0;break;case 31:At=AY1;break;case 32:At=AY2;break;
case 69:At=AY3;break;case 44:At=AY4;break;case 37:At=AY5;break;case 38:At=AY6;break;
case 39:At=AY7;break;case 76:At=AY8;break;case 40:At=AY9;break;case 75:At=AY_;break;
case 59:At=AY$;break;case 62:At=AZa;break;case 96:At=AZb;break;case 60:At=AZc;break;
case 98:At=AZd;break;case 65:At=AZe;break;case 61:At=Aov;break;case 104:At=AIu;break;
case 66:At=AZf;break;case 67:At=AIv;break;case 106:At=AIw;break;case 86:At=AcZ;break;
case 68:At=AIx;break;case 70:At=AZg;break;case 71:At=AIy;break;case 72:At=AZh;break;
case 113:At=AyI;break;case 97:At=AZi;break;case 100:At=AZj;break;case 99:At=AyJ;
break;case 114:At=AZk;break;case 88:At=AZl;break;case 89:At=AZm;break;case 90:At=
AIz;break;case 73:At=Aow;break;case 118:At=AIA;break;case 74:At=AZn;break;case 94:
At=AIB;break;case 93:At=AIC;break;case 84:At=All;break;case 87:At=AZo;break;case
95:At=Aox;break;case 108:At=AZp;break;case 109:At=AID;break;case 102:At=AIE;break;
case 101:At=AZq;break;case 103:At=AZr;break;case 105:At=AIF;break;case 110:At=AZs;
break;case 111:At=AZt;break;case 112:At=AZu;break;default:throw new Error(AIi+AdJ.
toFixed());}return At;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"};C.PopupParamSeparator=
";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:
1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1
,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={BU:function(A7){var Bhn=A7;
var type=A.jV;switch(Bhn){case 1:type=AZv;break;case 2:type=AZw;break;case 3:type=
AZx;break;case 4:type=AZy;break;case 0:type=Ayu;break;default:throw new Error(AZz+
Bhn.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={BU:function(A7){var Bhl=A7;var AA7=A.jV;switch(
Bhl){case 1:AA7=AZA;break;case 2:AA7=AZB;break;case 3:AA7=AZC;break;case 0:AA7=Ayu;
break;default:throw new Error(AZD+Bhl.toFixed());}return AA7;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,AT6:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.abo([this,this.Bmi,this.AT6],0);},AT5:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.abo([this,this.Bmh,this.AT5],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Ur,this.OnSetId],0);
},AO3:function(){return A._GetAutoObject(C.Converter).BqK(this.Id);},BjK:function(
){return A._GetAutoObject(C.Converter).AsT(this.Id);},Bmi:function(){return this.
TransponderType;},Bmh:function(){return this.TransponderProtocol;},Ur:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={BU:function(A7){var
Vp=A7;var NI=A.jV;switch(Vp){case 0:NI=A.aaR(A.acf.Basic);break;case 1:NI=A.aaR(
A.acf.Extended);break;default:throw new Error(AZE+Vp.toFixed());}return NI;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={BU:function(A7){var
BeO=A7;var Ap$=A.jV;switch(BeO){case 0:Ap$=A.aaR(A.acf.BkA);break;case 1:Ap$=A.aaR(
A.acf.Pound);break;default:throw new Error(AZF+BeO.toFixed());}return Ap$;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={MQ:10,Array:A.abi(10,0,null),ZI:function(
E){if(this.MQ===E)return;if(E>10)throw new Error(AIG);this.MQ=E;},Set:function(aIndex
,AJ){if((aIndex<0)||(aIndex>=this.MQ))throw new Error(Xq);this.Array.Set(aIndex,
AJ);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.MQ))throw new Error(Xq);
return this.Array.Get(aIndex);},Am2:function(){var QB=0;var O;for(O=0;O<this.MQ;
O=O+1)QB=QB+this.Get(O);return QB;},toString:function(){var A3s=this.Array.Get(0
).toFixed();var O;for(O=1;O<this.MQ;O=O+1)A3s=(A3s+Pb)+this.Array.Get(O).toFixed(
);return A3s;},Fm:function(aString){var HB=aString.indexOf(String.fromCharCode(0x2C
),0);var A2e=A.jV;var O=0;while(O<10){if(aString===A.jV)this.Array.Set(O,0);else{
if(HB===-1){A2e=aString;aString=A.jV;}else{A2e=A.abV(aString,HB);aString=A.ab1(aString
,0,HB+1);}this.Array.Set(O,A.wz(A2e,0,10));HB=aString.indexOf(String.fromCharCode(
0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AZG);},Cs:function(){},FE:function(
){var O;for(O=0;O<this.MQ;O=O+1)this.Set(O,0);},Avy:function(A9){var O=0;while(O<
this.MQ){if(this.Array.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=
0;var max=-1;while(O<this.MQ){if(this.Array.Get(O)>max)max=this.Array.Get(O);O=O+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={BU:function(A7){var AzR=A7;var E9=A.jV;switch(AzR){case 4:E9=
A.aaR(A.acf.Alarm);break;case 256:E9=A.aaR(A.acf.Weighing);break;case 128:E9=A.aaR(
A.acf.A6T);break;case 16:E9=A.aaR(A.acf.AMw);break;case 1:E9=A.aaR(A.acf.Temperature
);break;case 32:E9=A.aaR(A.acf.AnimalLoss);break;case 2:E9=A.aaR(A.acf.Rating);break;
case 8:E9=A.aaR(A.acf.Asi);break;case 64:E9=A.aaR(A.acf.Unregister);break;case 512:
E9=A.aaR(A.acf.ASm);break;case 1024:E9=A.aaR(A.acf.LinkTransponder);break;case 262144:
E9=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E9=A.aaR(A.acf.TE);break;case 4096:
E9=A.aaR(A.acf.Calving);break;case 8192:E9=A.aaR(A.acf.DryOff);break;case 16384:
E9=A.aaR(A.acf.A78);break;case 32768:E9=A.aaR(A.acf.ACo);break;case 524288:E9=A.
aaR(A.acf.ACq);break;case 65536:E9=A.aaR(A.acf.Delete);break;case 131072:E9=A.aaR(
A.acf.A79);break;case 0:E9=A.aaR(A.acf.A8v);break;default:throw new Error(Atj+AzR.
toFixed());}return E9;},LC:function(A7){var AzR=A7;var E9=A.jV;switch(AzR){case 4:
E9=A.aaR(A.acf.Alarm);break;case 256:E9=A.aaR(A.acf.Weighing);break;case 128:E9=
A.aaR(A.acf.A6T);break;case 16:E9=A.aaR(A.acf.AMw);break;case 1:E9=A.aaR(A.acf.Temperature
);break;case 32:E9=A.aaR(A.acf.AnimalLoss);break;case 2:E9=A.aaR(A.acf.Rating);break;
case 8:E9=A.aaR(A.acf.Asi);break;case 64:E9=A.aaR(A.acf.Unregister);break;case 512:
E9=A.aaR(A.acf.ASm);break;case 1024:E9=A.aaR(A.acf.LinkTransponder);break;case 262144:
E9=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E9=A.aaR(A.acf.TE);break;case 4096:
E9=A.aaR(A.acf.Calving);break;case 8192:E9=A.aaR(A.acf.DryOff);break;case 32768:
E9=A.aaR(A.acf.ACo);break;case 524288:E9=A.aaR(A.acf.ACq);break;case 65536:E9=A.
aaR(A.acf.Delete);break;case 16384:case 131072:E9=A.aaR(A.acf.BkH);break;case 0:
E9=A.aaR(A.acf.A8v);break;default:throw new Error(Atj+AzR.toFixed());}return E9;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ActionToString;
},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.
ITable={Filter:null,Id:2,CE:function(Ad,Bc){return 0;},Ans:function(G){A.we(this
,0);A.pe([this,this.DY],this);},H6:function(Ad,Bc){return false;},Hw:function(Ad
,Bc){return this.Ss(Ad,Bc);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
},B_:function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=
E;A.abo([this,this.Fo,this.Fs],0);},Fs:function(Aq){this.Bk(Aq);},Jb:function(Ad
,Bc){var BCf=this.V9(Ad,Bc);return A._GetAutoObject(C.Converter).Bat(BCf);},V9:function(
Ad,Bc){return 0;},Ss:function(Ad,Bc){return 0;},A7t:function(Ad,Bc){return this.
CE(Ad,Bc);},QG:function(){var Mo=0;var BC1=this.Id;return Mo;},QK:function(AoT){
var IJ=0;var BC1=this.Id;return IJ===1;},AbN:function(){return-1;},ZT:function(Ad
,Bc,Dx){return false;},HS:function(Ad,Bc,Dx){return false;},ZS:function(Ad,Bc,Dx
){return false;},Od:function(Ad,Bc,Dx){return false;},Acv:function(Ad,Bc,Dx){return this.
ZS(Ad,Bc,Dx);},AkU:function(Ad,Bc,Dx){var BCg=A._GetAutoObject(C.Converter).Ad7(
Dx);return this.ZT(Ad,Bc,BCg);},A$2:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);
},AOX:function(Ad,Bc){return this.CE(Ad,Bc);},BjI:function(Ad,Bc){return this.CE(
Ad,Bc);},BpE:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);},BpA:function(Ad,Bc,Dx
){return this.HS(Ad,Bc,Dx);},L3:function(aColumn,A9){return-1;},Am0:function(Ad,
Bc){return this.CE(Ad,Bc);},Bpy:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);},ADh:
function(Ad,Bc){return this.CE(Ad,Bc);},AU0:function(Ad,Bc,M0){return this.HS(Ad
,Bc,M0);},DY:function(G){this.Bza();},Bza:function(){return-1;},KU:function(Ad,Bc
){return 0;},UH:function(Ad,Bc,Dx){return false;},Aey:function(aColumn,A9){return-
1;},FE:function(){return false;},BjJ:function(Ad,Bc){var BCh=this.CE(Ad,Bc);return A.
_GetAutoObject(C.Converter).Bj$(BCh);},BjO:function(Ad,Bc){return this.CE(Ad,Bc);
},AO5:function(Ad,Bc){return this.CE(Ad,Bc);},BpC:function(Ad,Bc,Dx){var BCi=A._GetAutoObject(
C.Converter).A56(Dx);return this.HS(Ad,Bc,BCi);},BpD:function(Ad,Bc,Dx){return this.
HS(Ad,Bc,Dx);},BpJ:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);},AjL:function(aColumn
,A9){return false;},Aer:function(aColumn,A9){return false;},BjX:function(Ad,Bc){
return this.CE(Ad,Bc);},BpI:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);},Lm:function(
){return this.QN()>=this.HL();},HL:function(){return 0;},QN:function(){return 0;
},Fo:function(){return this.Filter;},_Init:function(aArg){this.__proto__=C.ITable;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::ITable"};C.MaxAutoActionsCount=4;C.WeightRecordingMode={Automatic:0,Manual:
1,LAST:2};C.WeightRecordingModeToString={BU:function(A7){var Vp=A7;var NI=A.jV;switch(
Vp){case 0:NI=A.aaR(A.acf.Automatic);break;case 1:NI=A.aaR(A.acf.Manual);break;default:
throw new Error(AZH+Vp.toFixed());}return NI;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.WeightRecordingModeToString;},_className:
"Device::WeightRecordingModeToString"};C.BooleanToAutoOnOff={BU:function(A7){switch(
A7){case 0:return A.aaR(A.acf.Off);case 1:return A.aaR(A.acf.Abb);default:return Ate+
A7.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BooleanToAutoOnOff;},_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;
C.WeightRecordingScope={CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:
2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={BU:function(A7){var
BgN=A7;var ABk=A.jV;switch(BgN){case 0:ABk=A.aaR(A.acf.BiA);break;case 1:ABk=A.aaR(
A.acf.Bid);break;case 2:ABk=A.aaR(A.acf.Bh$);break;case 3:ABk=A.aaR(A.acf.Bk_);break;
default:throw new Error(AZI+BgN.toFixed());}return ABk;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Ko={A5D:0,Temperature:1,Rating:2,AfB:3,BDE:
4,BEj:5,BG6:6,BEZ:7,BFJ:8,BEx:9,BFH:10,BF_:11,BF$:12,BG$:13,BDP:14,LAST:15};C.AnimalListContentToString={
BU:function(A7){var Bdb=A7;var RB=A.jV;switch(Bdb){case 0:RB=AZJ;break;case 14:RB=
AZK;break;case 2:RB=AZL;break;case 1:RB=AZM;break;case 3:RB=Atk;break;case 4:RB=
Atl;break;case 5:RB=Atm;break;case 6:RB=Atn;break;case 7:RB=AyK;break;case 8:RB=
Aoy;break;case 9:RB=AZN;break;case 10:RB=AZO;break;case 11:RB=AZP;break;case 12:
RB=AZQ;break;case 13:RB=AZR;break;default:throw new Error(AZS+Bdb.toFixed());}return RB;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A6:0,
Abt:function(){var Aw=A._NewObject(C.GenderFilterCriterion,0);Aw.E_(this);return Aw;
},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var Aw=(C.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A6:0,Abt:function(){var Aw=A._NewObject(C.AnimalTypeFilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var
Aw=(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;
},Initialize:function(Bc,Ed,A9,Qh){this.EK=Bc;this.Operator=Ed;this.A6=A9;this.YS=
Qh;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BDR={AuL:0,BDQ:1,BFt:2,A$J:3,A6c:4,BGM:5,BEi:6,BGL:7,LinkTransponder:8,TE:9,
Weighing:10,Calving:11,LinkNaisId:12,BF9:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18,UNDEFINED:19};C.AutoRegistrationModeToString={
BU:function(A7){var Vp=A7;var NI=A.jV;switch(Vp){case 0:NI=A.aaR(A.acf.Bit);break;
case 1:NI=A.aaR(A.acf.Bkd);break;case 2:NI=A.aaR(A.acf.Off);break;default:throw new
Error(AZT+Vp.toFixed());}return NI;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A6:0,Abt:function(){var Aw=A._NewObject(C.AssessmentFilterCriterion,0);Aw.E_(this
);return Aw;},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var Aw=(C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Ed,A9,
Qh){this.EK=Bc;this.Operator=Ed;this.A6=A9;this.YS=Qh;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.Ea={Ad0:0,Temperature:1,AfB:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,DeviceDataOnly:
2,LAST:3};C.FactoryResetScopeToString={BU:function(A7){switch(A7){case 0:return A.
aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);case 2:
return A.aaR(A.acf.DeviceDataOnly);default:return AZU+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.FactoryResetScopeToString;
},_className:"Device::FactoryResetScopeToString"};C.AVA={Cs:function(){A._GetAutoObject(
C.Device).Asb(this.toString());},Init:function(aArg){var B;A.zX([this,this.BfU],[
B=A._GetAutoObject(C.Device),B.A9Q,B.Bb5],0);this.BfU(this);},BfU:function(G){this.
Fm(A._GetAutoObject(C.Device).AG9);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper.
_Init.call(this,aArg);this.__proto__=C.AVA;this.ZI(3);this.Init(aArg);},_className:
"Device::TemperaturesLowClass"};C.AVz={Init:function(aArg){var B;A.zX([this,this.
BfS],[B=A._GetAutoObject(C.Device),B.A9P,B.Bb4],0);this.BfS(this);},Cs:function(
){A._GetAutoObject(C.Device).Asa(this.toString());},BfS:function(G){this.Fm(A._GetAutoObject(
C.Device).AG8);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(
this,aArg);this.__proto__=C.AVz;this.ZI(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"
};C.AMP={Init:function(aArg){var B;A.zX([this,this.Bfn],[B=A._GetAutoObject(C.Device
),B.A83,B.BbG],0);this.Bfn(this);},Bfn:function(G){this.Fm(A._GetAutoObject(C.Device
).ABZ);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMP;this.ZI(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A6:0,Abt:function(){var Aw=A._NewObject(C.UInt64FilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var
Aw=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:
function(Bc,Ed,A9,Qh){this.EK=Bc;this.Operator=Ed;this.A6=A9;this.YS=Qh;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BU:function(A7){switch(A7){case 0:return A.aaR(A.acf.Ae2);case 1:return A.aaR(A.
acf.BhS);default:return Ate+A7.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.B7={UNDEFINED:0,AT:1,BA:2,BE:3,BDW:
4,BD$:5,BEa:6,BEb:7,BEc:8,BEd:9,BEn:10,BEo:11,BEy:12,BEz:13,BEO:14,FR:15,GR:16,BE0:
17,BE1:18,BE8:19,BE9:20,BFc:21,BFd:22,BFe:23,BFf:24,BFl:25,BFz:26,BFA:27,BFP:28,
BFQ:29,BF7:30,BF8:31,BGo:32,BGp:33,BGq:34,BGF:35,BGG:36,BGZ:37,Bau:38,BG0:39,LAST:
40};C.CountryToString={BU:function(A7){var JK=A7;var FI=A.jV;switch(JK){case 1:FI=
A.aaR(A.acm.Bh3);break;case 2:FI=A.aaR(A.acm.Bie);break;case 3:FI=A.aaR(A.acm.Bh_
);break;case 4:FI=A.aaR(A.acm.Big);break;case 5:FI=A.aaR(A.acm.Bij);break;case 6:
FI=A.aaR(A.acm.Bqq);break;case 7:FI=A.aaR(A.acm.Bim);break;case 8:FI=A.aaR(A.acm.
BiB);break;case 9:FI=A.aaR(A.acm.BiC);break;case 10:FI=A.aaR(A.acm.BjD);break;case
11:FI=A.aaR(A.acm.BiJ);break;case 12:FI=A.aaR(A.acm.Bji);break;case 13:FI=A.aaR(
A.acm.BpV);break;case 14:FI=A.aaR(A.acm.Bjr);break;case 15:FI=A.aaR(A.acm.Bjz);break;
case 16:FI=A.aaR(A.acm.Bj6);break;case 17:FI=A.aaR(A.acm.Biz);break;case 18:FI=A.
aaR(A.acm.Bka);break;case 19:FI=A.aaR(A.acm.Bkj);break;case 20:FI=A.aaR(A.acm.Bkv
);break;case 21:FI=A.aaR(A.acm.Bkx);break;case 22:FI=A.aaR(A.acm.BkI);break;case
23:FI=A.aaR(A.acm.BkM);break;case 24:FI=A.aaR(A.acm.BkF);break;case 25:FI=A.aaR(
A.acm.BkO);break;case 26:FI=A.aaR(A.acm.Bk4);break;case 27:FI=A.aaR(A.acm.Bk$);break;
case 28:FI=A.aaR(A.acm.BoR);break;case 29:FI=A.aaR(A.acm.BoS);break;case 30:FI=A.
aaR(A.acm.Bpk);break;case 31:FI=A.aaR(A.acm.Bpm);break;case 32:FI=A.aaR(A.acm.Bqp
);break;case 33:FI=A.aaR(A.acm.BpU);break;case 34:FI=A.aaR(A.acm.BpT);break;case
35:FI=A.aaR(A.acm.BqP);break;case 36:FI=A.aaR(A.acm.Bqz);break;case 37:FI=A.aaR(
A.acm.BqT);break;case 38:FI=A.aaR(A.acm.Bau);break;case 39:FI=A.aaR(A.acm.BqS);break;
case 0:FI=A.aaR(A.acf.Unknown);break;default:throw new Error(Aom+JK.toFixed());}
return FI;},LC:function(A7){var JK=A7;var BO=A.jV;switch(JK){case 1:BO=Ti;break;
case 2:BO=Aad;break;case 3:BO=UZ;break;case 4:BO=Xe;break;case 5:BO=Ix;break;case
6:BO=Aam;break;case 7:BO=U0;break;case 8:BO=Aaf;break;case 9:BO=Xf;break;case 10:
BO=Pa;break;case 11:BO=Aag;break;case 12:BO=Aah;break;case 13:BO=Aal;break;case 14:
BO=U2;break;case 15:BO=Xg;break;case 16:BO=Aai;break;case 17:BO=U1;break;case 18:
BO=Ol;break;case 19:BO=Rp;break;case 20:BO=Xh;break;case 21:BO=Xi;break;case 22:
BO=Xj;break;case 23:BO=Aaj;break;case 24:BO=U3;break;case 25:BO=Xk;break;case 26:
BO=U4;break;case 27:BO=Xl;break;case 28:BO=Xm;break;case 29:BO=Xn;break;case 30:
BO=Rq;break;case 31:BO=Tj;break;case 32:BO=Xo;break;case 33:BO=AfH;break;case 34:
BO=Aak;break;case 35:BO=Aan;break;case 36:BO=Aae;break;case 37:BO=AhY;break;case
38:BO=K4;break;case 39:BO=Aao;break;case 0:BO=AIH;break;default:throw new Error(
Aom+JK.toFixed());}return BO;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"};
C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5};
C.EaseOfDeliveryToString={BU:function(A7){var BdL=A7;var AtV=A.jV;switch(BdL){case
0:AtV=A.aaR(A.acf.Unspecified);break;case 1:AtV=A.aaR(A.acf.Easy);break;case 2:AtV=
A.aaR(A.acf.Moderate);break;case 3:AtV=A.aaR(A.acf.Difficult);break;case 4:AtV=A.
aaR(A.acf.Surgery);break;default:throw new Error(AZV+BdL.toFixed());}return AtV;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;
},_className:"Device::EaseOfDeliveryToString"};C.WhereAbouts={UNB:0,EZU:1,EMA:2,
VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:10,LAST:11};C.WhereAboutsToString={
BU:function(A7){var BhG=A7;var Aa1=A.jV;switch(BhG){case 0:Aa1=A.aaR(A.acf.Unknown
);break;case 1:Aa1=A.aaR(A.acf.Bq2);break;case 2:Aa1=A.aaR(A.acf.Bq1);break;case
3:Aa1=A.aaR(A.acf.Bq_);break;case 4:Aa1=A.aaR(A.acf.Bq9);break;case 5:Aa1=A.aaR(
A.acf.Bq7);break;case 6:Aa1=A.aaR(A.acf.Bq4);break;case 7:Aa1=A.aaR(A.acf.Bq6);break;
case 8:Aa1=A.aaR(A.acf.Bq5);break;case 9:Aa1=A.aaR(A.acf.Bq3);break;case 10:Aa1=
A.aaR(A.acf.Bq8);break;default:throw new Error(AZW+BhG.toFixed());}return Aa1;},
_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WhereAboutsToString;
},_className:"Device::WhereAboutsToString"};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3
,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,
AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:
29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:
42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:
54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:
66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:
78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,
MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={
BU:function(A7){var Bv=A7;var BL=A.jV;switch(Bv){case 0:BL=A.aaR(A.acf.Unknown);
break;case 1:BL=A.aaR(A.ack.SBT);break;case 2:BL=A.aaR(A.ack.RBT);break;case 3:BL=
A.aaR(A.ack.JER);break;case 4:BL=A.aaR(A.ack.BV);break;case 5:BL=A.aaR(A.ack.RVA
);break;case 6:BL=A.aaR(A.ack.RV);break;case 7:BL=A.aaR(A.ack.RDN);break;case 8:
BL=A.aaR(A.ack.DSN);break;case 9:BL=A.aaR(A.ack.FL);break;case 10:BL=A.aaR(A.ack.
GV);break;case 11:BL=A.aaR(A.ack.PIN);break;case 12:BL=A.aaR(A.ack.HIN);break;case
13:BL=A.aaR(A.ack.MW);break;case 14:BL=A.aaR(A.ack.VW);break;case 15:BL=A.aaR(A.
ack.LMP);break;case 16:BL=A.aaR(A.ack.DBV);break;case 17:BL=A.aaR(A.ack.AS);break;
case 18:BL=A.aaR(A.ack.VR);break;case 19:BL=A.aaR(A.ack.CHA);break;case 20:BL=A.
aaR(A.ack.LIM);break;case 21:BL=A.aaR(A.ack.WBB);break;case 22:BL=A.aaR(A.ack.BA
);break;case 23:BL=A.aaR(A.ack.MA);break;case 24:BL=A.aaR(A.ack.SAL);break;case 25:
BL=A.aaR(A.ack.MON);break;case 26:BL=A.aaR(A.ack.AU);break;case 27:BL=A.aaR(A.ack.
PIE);break;case 28:BL=A.aaR(A.ack.CHI);break;case 29:BL=A.aaR(A.ack.ROM);break;case
30:BL=A.aaR(A.ack.MAR);break;case 31:BL=A.aaR(A.ack.WP);break;case 32:BL=A.aaR(A.
ack.BB);break;case 33:BL=A.aaR(A.ack.DA);break;case 34:BL=A.aaR(A.ack.AA);break;
case 35:BL=A.aaR(A.ack.HE);break;case 36:BL=A.aaR(A.ack.SH);break;case 37:BL=A.aaR(
A.ack.HLD);break;case 38:BL=A.aaR(A.ack.WB);break;case 39:BL=A.aaR(A.ack.GAL);break;
case 40:BL=A.aaR(A.ack.LR);break;case 41:BL=A.aaR(A.ack.BGA);break;case 42:BL=A.
aaR(A.ack.LG);break;case 43:BL=A.aaR(A.ack.BRA);break;case 44:BL=A.aaR(A.ack.NOR
);break;case 45:BL=A.aaR(A.ack.UST);break;case 46:BL=A.aaR(A.ack.ZEB);break;case
47:BL=A.aaR(A.ack.GRV);break;case 48:BL=A.aaR(A.ack.DEX);break;case 49:BL=A.aaR(
A.ack.WGA);break;case 50:BL=A.aaR(A.ack.LH);break;case 51:BL=A.aaR(A.ack.SD);break;
case 52:BL=A.aaR(A.ack.FR);break;case 53:BL=A.aaR(A.ack.TUX);break;case 54:BL=A.
aaR(A.ack.TLM);break;case 55:BL=A.aaR(A.ack.FLF);break;case 56:BL=A.aaR(A.ack.UCK
);break;case 57:BL=A.aaR(A.ack.BLA);break;case 58:BL=A.aaR(A.ack.WIT);break;case
59:BL=A.aaR(A.ack.LAK);break;case 60:BL=A.aaR(A.ack.RHV);break;case 61:BL=A.aaR(
A.ack.AT);break;case 62:BL=A.aaR(A.ack.GR);break;case 63:BL=A.aaR(A.ack.PIF);break;
case 64:BL=A.aaR(A.ack.PS);break;case 65:BL=A.aaR(A.ack.GVF);break;case 66:BL=A.
aaR(A.ack.BVF);break;case 67:BL=A.aaR(A.ack.RBF);break;case 68:BL=A.aaR(A.ack.HWF
);break;case 69:BL=A.aaR(A.ack.MWF);break;case 70:BL=A.aaR(A.ack.VWF);break;case
71:BL=A.aaR(A.ack.LPF);break;case 72:BL=A.aaR(A.ack.BRN);break;case 73:BL=A.aaR(
A.ack.BAZ);break;case 74:BL=A.aaR(A.ack.AO);break;case 75:BL=A.aaR(A.ack.BE);break;
case 76:BL=A.aaR(A.ack.WL);break;case 77:BL=A.aaR(A.ack.BIS);break;case 78:BL=A.
aaR(A.ack.YAK);break;case 79:BL=A.aaR(A.ack.SON);break;case 80:BL=A.aaR(A.ack.TAU
);break;case 81:BL=A.aaR(A.ack.IND);break;case 82:BL=A.aaR(A.ack.TIN);break;case
83:BL=A.aaR(A.ack.WAG);break;case 84:BL=A.aaR(A.ack.XFF);break;case 85:BL=A.aaR(
A.ack.XFM);break;case 86:BL=A.aaR(A.ack.XMM);break;case 87:BL=A.aaR(A.ack.EVO);break;
case 88:BL=A.aaR(A.ack.BLH);break;case 89:BL=A.aaR(A.ack.TLH);break;case 90:BL=A.
aaR(A.ack.MGR);break;case 91:BL=A.aaR(A.ack.WSH);break;case 92:BL=A.aaR(A.ack.MUR
);break;case 93:BL=A.aaR(A.ack.EBS);break;case 94:BL=A.aaR(A.ack.ERI);break;case
95:BL=A.aaR(A.ack.PAR);break;case 96:BL=A.aaR(A.ack.XZF);break;case 97:BL=A.aaR(
A.ack.XZM);break;case 98:BL=A.aaR(A.ack.XZZ);break;default:throw new Error(AZX+Bv.
toFixed());}return BL;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.TP={timer:
null,Q:null,Ee:0,Dy:0,J1:0,Py:1000,PH:1000,Bw:false,Cy:false,B4:true,Mn:function(
G){var F;if(!this.timer)return;if(this.Ee<0){this.Dy=this.timer.Bq;this.Ee=0;}var
Av=(this.timer.Bq-this.Dy)|0;var Oz=this.Py;var Hh=this.PH+this.Py;var LO=0;var Js=
this.Ee;if(!Js&&(Av>=Oz)){Js=1;Av=Av-Oz;}if((Js>0)&&(Av>=Hh)){var Ii=(Av/Hh)|0;Av=
Av-(Ii*Hh);Js=Js+Ii;}if((Js>2)&&!this.J1)Js=1;if(Js!==this.Ee){this.Dy=this.timer.
Bq-(((B=Av)<0)?B+0x100000000:B);this.Ee=Js;}if(Js>0)LO=this.PH;var KK=(Js>=this.
J1)&&(this.J1>0);if(!!this.Q){if((!KK&&(Av>=LO))&&((F=this.Q,F[1].call(F[0]))!==
this.Cy))(F=this.Q,F[2].call(F[0],this.Cy));if((KK||((Av<LO)&&(Js>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B4))(F=this.Q,F[2].call(F[0],this.B4));}if(KK)this.As(
false);},HP:function(E){if(E<0)E=0;this.J1=E;},Fq:function(E){if(E<100)E=100;this.
Py=E;},Ux:function(E){if(E<0)E=0;this.PH=E;},As:function(E){if(this.Bw===E)return;
this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mn],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.Aeo);A.zV([this,this.Mn],this.timer,0);
this.Ee=-1;}},_Init:function(aArg){this.__proto__=C.TP;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.In={AnimalId:0,TransponderId:
1,BFo:2,BFn:3,BFr:4,BFq:5};C.Au_={BDU:0,BEr:1};C.AnimalIdGenerationMethodToString={
BU:function(A7){var Aly=A7;var Ao2=A.jV;switch(Aly){case 0:Ao2=A.aaR(A.acf.Un);break;
case 1:Ao2=A.aaR(A.acf.Transponder);break;case 3:Ao2=(A.aaR(A.acf.Manual)+Om)+A.
aaR(A.acf.Male);break;case 2:Ao2=(A.aaR(A.acf.Manual)+Om)+A.aaR(A.acf.Female);break;
case 4:Ao2=(A.aaR(A.acf.Manual)+Om)+A.aaR(A.acf.Unknown);break;case 5:Ao2=(A.aaR(
A.acf.Manual)+Om)+AZY;break;default:throw new Error(AZZ+Aly.toFixed());}return Ao2;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BU:function(A7){var AzQ=A7;var A2l=A.jV;switch(AzQ){case 0:A2l=AZ0;break;case 1:
A2l=AyL;break;default:throw new Error(AZ1+AzQ.toFixed());}return A2l;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsO:function(A7
){throw new Error(As$+A7.toFixed());},AsP:function(A7){throw new Error(As$+A7.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aen={AsO:function(A7){return A.aaL(A.ach.AVn);},AsP:function(
A7){var AzQ=A7;var RM=-1;switch(AzQ){case 0:RM=3;break;case 1:RM=2;break;default:
throw new Error(Ato+AzQ.toFixed());}return RM;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aen;},_className:"Device::DirectionOfCountingToIcon"
};C.Ad4={AsO:function(A7){return A.aaL(A.ach.AVl);},AsP:function(A7){var Aly=A7;
var RM=-1;switch(Aly){case 0:RM=0;break;case 1:RM=6;break;case 3:RM=4;break;case
2:RM=5;break;case 4:RM=2;break;case 5:RM=3;break;default:throw new Error(Ato+Aly.
toFixed());}return RM;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.Ad4;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.PD={
UNDEFINED:0,SH:1,AO8:2,AR8:3,AO7:4,A8q:5,HE:6,A$H:7,A5U:8,AM0:9,AUP:10,BE:11,BB:
12,A8c:13,AUQ:14,AUR:15,AVs:16};C.GermanStateToString={BU:function(A7){var Bp=A7;
var GH=A.jV;switch(Bp){case 1:GH=A.aaR(A.acp.SH);break;case 2:GH=A.aaR(A.acp.AO8
);break;case 3:GH=A.aaR(A.acp.AR8);break;case 4:GH=A.aaR(A.acp.AO7);break;case 5:
GH=A.aaR(A.acp.A8q);break;case 6:GH=A.aaR(A.acp.HE);break;case 7:GH=A.aaR(A.acp.
A$H);break;case 8:GH=A.aaR(A.acp.A5U);break;case 9:GH=A.aaR(A.acp.AM0);break;case
10:GH=A.aaR(A.acp.AUP);break;case 11:GH=A.aaR(A.acp.BE);break;case 12:GH=A.aaR(A.
acp.BB);break;case 13:GH=A.aaR(A.acp.A8c);break;case 14:GH=A.aaR(A.acp.AUQ);break;
case 15:GH=A.aaR(A.acp.AUR);break;case 16:GH=A.aaR(A.acp.AVs);break;case 0:GH=A.
aaR(A.acf.Unknown);break;default:throw new Error(Alm+Bp.toFixed());}return GH;},
LC:function(A7){var Bp=A7;var GH=A.jV;switch(Bp){case 1:GH=A.aaR(A.acp.Bpn);break;
case 2:GH=A.aaR(A.acp.AO8);break;case 3:GH=A.aaR(A.acp.AR8);break;case 4:GH=A.aaR(
A.acp.AO7);break;case 5:GH=A.aaR(A.acp.Bk1);break;case 6:GH=A.aaR(A.acp.HE);break;
case 7:GH=A.aaR(A.acp.Bo1);break;case 8:GH=A.aaR(A.acp.Bh6);break;case 9:GH=A.aaR(
A.acp.AM0);break;case 10:GH=A.aaR(A.acp.AUP);break;case 11:GH=A.aaR(A.acp.BE);break;
case 12:GH=A.aaR(A.acp.BB);break;case 13:GH=A.aaR(A.acp.BkN);break;case 14:GH=A.
aaR(A.acp.AUQ);break;case 15:GH=A.aaR(A.acp.AUR);break;case 16:GH=A.aaR(A.acp.AVs
);break;case 0:GH=A.aaR(A.acf.Unknown);break;default:throw new Error(Alm+Bp.toFixed(
));}return GH;},BqE:function(A7){var Bp=A7;var Gm=-1;switch(Bp){case 0:Gm=0;break;
case 1:Gm=1;break;case 2:Gm=2;break;case 3:Gm=3;break;case 4:Gm=4;break;case 5:Gm=
5;break;case 6:Gm=6;break;case 7:Gm=7;break;case 8:Gm=8;break;case 9:Gm=9;break;
case 10:Gm=10;break;case 11:Gm=11;break;case 12:Gm=12;break;case 13:Gm=13;break;
case 14:Gm=14;break;case 15:Gm=15;break;case 16:Gm=16;break;default:throw new Error(
Alm+Bp.toFixed());}return Gm;},BqF:function(A7){var Bp=A7;var Gm=A.jV;switch(Bp){
case 1:Gm=AZ2;break;case 2:Gm=AZ3;break;case 3:Gm=AZ4;break;case 4:Gm=AII;break;
case 5:Gm=AZ5;break;case 6:Gm=AZ6;break;case 7:Gm=AZ7;break;case 8:Gm=AZ8;break;
case 9:Gm=AZ9;break;case 10:Gm=AId;break;case 11:Gm=UZ;break;case 12:Gm=AZ_;break;
case 13:Gm=AZ$;break;case 14:Gm=A0a;break;case 15:Gm=AIJ;break;case 16:Gm=A0b;break;
case 0:Gm=AIH;break;default:throw new Error(Alm+Bp.toFixed());}return Gm;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={LC:function(A7){var
Vp=A7;var NI=A.jV;switch(Vp){case 0:NI=A0c;break;case 1:NI=A0d;break;default:throw new
Error(AIK+Vp.toFixed());}return NI;},BU:function(A7){var Vp=A7;var NI=A.jV;switch(
Vp){case 0:NI=A.aaR(A.acf.BoK);break;case 1:NI=A.aaR(A.acf.BqR);break;default:throw new
Error(AIK+Vp.toFixed());}return NI;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.BDN={BFF:0,BFv:1,BEI:2,BEJ:3,BEK:4,BGH:5};C.EnumToCodeset={AmK:function(Ah6){
throw new Error(A0e+Ah6.toFixed());},Aeq:function(A7){throw new Error(As$+A7.toFixed(
));},Aq0:function(){A.ab5("%s",AIL);return 0;},H7:function(){A.ab5("%s",AIL);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.Nc={AmK:function(Ah6){var Bv;switch(Ah6){case 1:Bv=1;
break;case 2:Bv=2;break;case 3:Bv=3;break;case 4:Bv=4;break;case 5:Bv=5;break;case
6:Bv=6;break;case 9:Bv=7;break;case 10:Bv=8;break;case 11:Bv=9;break;case 12:Bv=
10;break;case 13:Bv=11;break;case 14:Bv=12;break;case 15:Bv=13;break;case 16:Bv=
14;break;case 17:Bv=15;break;case 18:Bv=16;break;case 19:Bv=17;break;case 20:Bv=
18;break;case 21:Bv=19;break;case 22:Bv=20;break;case 23:Bv=21;break;case 24:Bv=
22;break;case 25:Bv=23;break;case 26:Bv=24;break;case 27:Bv=25;break;case 28:Bv=
26;break;case 31:Bv=27;break;case 32:Bv=28;break;case 33:Bv=29;break;case 34:Bv=
30;break;case 35:Bv=31;break;case 36:Bv=32;break;case 41:Bv=33;break;case 42:Bv=
34;break;case 43:Bv=35;break;case 44:Bv=36;break;case 45:Bv=37;break;case 46:Bv=
38;break;case 47:Bv=39;break;case 48:Bv=40;break;case 49:Bv=41;break;case 50:Bv=
42;break;case 51:Bv=43;break;case 52:Bv=44;break;case 53:Bv=45;break;case 54:Bv=
46;break;case 55:Bv=47;break;case 56:Bv=48;break;case 57:Bv=49;break;case 58:Bv=
50;break;case 59:Bv=51;break;case 60:Bv=52;break;case 61:Bv=53;break;case 65:Bv=
54;break;case 66:Bv=55;break;case 67:Bv=56;break;case 68:Bv=57;break;case 69:Bv=
58;break;case 70:Bv=59;break;case 71:Bv=60;break;case 72:Bv=61;break;case 73:Bv=
62;break;case 74:Bv=63;break;case 75:Bv=64;break;case 76:Bv=65;break;case 77:Bv=
66;break;case 78:Bv=67;break;case 79:Bv=68;break;case 80:Bv=69;break;case 81:Bv=
70;break;case 82:Bv=71;break;case 83:Bv=72;break;case 84:Bv=73;break;case 85:Bv=
74;break;case 86:Bv=75;break;case 87:Bv=76;break;case 88:Bv=77;break;case 89:Bv=
78;break;case 90:Bv=79;break;case 91:Bv=80;break;case 92:Bv=81;break;case 93:Bv=
82;break;case 94:Bv=83;break;case 97:Bv=84;break;case 98:Bv=85;break;case 99:Bv=
86;break;case 100:Bv=87;break;case 101:Bv=88;break;case 102:Bv=89;break;case 103:
Bv=90;break;case 104:Bv=91;break;case 105:Bv=92;break;case 106:Bv=93;break;case 107:
Bv=94;break;case 108:Bv=95;break;case 109:Bv=96;break;case 110:Bv=97;break;case 111:
Bv=98;break;default:Bv=0;}return Bv;},Aeq:function(A7){var Bv=A7;var BN=0;switch(
Bv){case 0:BN=0;break;case 1:BN=1;break;case 2:BN=2;break;case 3:BN=3;break;case
4:BN=4;break;case 5:BN=5;break;case 6:BN=6;break;case 7:BN=9;break;case 8:BN=10;
break;case 9:BN=11;break;case 10:BN=12;break;case 11:BN=13;break;case 12:BN=14;break;
case 13:BN=15;break;case 14:BN=16;break;case 15:BN=17;break;case 16:BN=18;break;
case 17:BN=19;break;case 18:BN=20;break;case 19:BN=21;break;case 20:BN=22;break;
case 21:BN=23;break;case 22:BN=24;break;case 23:BN=25;break;case 24:BN=26;break;
case 25:BN=27;break;case 26:BN=28;break;case 27:BN=31;break;case 28:BN=32;break;
case 29:BN=33;break;case 30:BN=34;break;case 31:BN=35;break;case 32:BN=36;break;
case 33:BN=41;break;case 34:BN=42;break;case 35:BN=43;break;case 36:BN=44;break;
case 37:BN=45;break;case 38:BN=46;break;case 39:BN=47;break;case 40:BN=48;break;
case 41:BN=49;break;case 42:BN=50;break;case 43:BN=51;break;case 44:BN=52;break;
case 45:BN=53;break;case 46:BN=54;break;case 47:BN=55;break;case 48:BN=56;break;
case 49:BN=57;break;case 50:BN=58;break;case 51:BN=59;break;case 52:BN=60;break;
case 53:BN=61;break;case 54:BN=65;break;case 55:BN=66;break;case 56:BN=67;break;
case 57:BN=68;break;case 58:BN=69;break;case 59:BN=70;break;case 60:BN=71;break;
case 61:BN=72;break;case 62:BN=73;break;case 63:BN=74;break;case 64:BN=75;break;
case 65:BN=76;break;case 66:BN=77;break;case 67:BN=78;break;case 68:BN=79;break;
case 69:BN=80;break;case 70:BN=81;break;case 71:BN=82;break;case 72:BN=83;break;
case 73:BN=84;break;case 74:BN=85;break;case 75:BN=86;break;case 76:BN=87;break;
case 77:BN=88;break;case 78:BN=89;break;case 79:BN=90;break;case 80:BN=91;break;
case 81:BN=92;break;case 82:BN=93;break;case 83:BN=94;break;case 84:BN=97;break;
case 85:BN=98;break;case 86:BN=99;break;case 87:BN=100;break;case 88:BN=101;break;
case 89:BN=102;break;case 90:BN=103;break;case 91:BN=104;break;case 92:BN=105;break;
case 93:BN=106;break;case 94:BN=107;break;case 95:BN=108;break;case 96:BN=109;break;
case 97:BN=110;break;case 98:BN=111;break;default:throw new Error(A0f+Bv.toFixed(
));}return BN;},Aq0:function(){return 0;},H7:function(){return 111;},_Init:function(
aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.Nc;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,Bac:1,RX:2,A$A:3,A7Q:4,BFO:5,Bav:6,A8m:7,A6b:8,A$w:
9,A8k:10,A6f:11,BF4:12,BF5:13,LAST:14};C.ReasonOfLeavingToString={BU:function(A7
){var AdK=A7;var Ty=A.jV;switch(AdK){case 0:Ty=A.aaR(A.acf.Unknown);break;case 1:
Ty=A.aaR(A.acf.Bac);break;case 2:Ty=A.aaR(A.acf.RX);break;case 3:Ty=A.aaR(A.acf.
A$A);break;case 4:Ty=A.aaR(A.acf.A7Q);break;case 5:Ty=A.aaR(A.acf.BoL);break;case
6:Ty=A.aaR(A.acf.Bav);break;case 7:Ty=A.aaR(A.acf.A8m);break;case 8:Ty=A.aaR(A.acf.
A6b);break;case 9:Ty=A.aaR(A.acf.A$w);break;case 10:Ty=A.aaR(A.acf.A8k);break;case
11:Ty=A.aaR(A.acf.A6f);break;case 12:Ty=A.aaR(A.acf.BoW);break;case 13:Ty=A.aaR(
A.acf.BoV);break;default:throw new Error(AIM+AdK.toFixed());}return Ty;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.AhE={AmK:function(Ah6){var Pn;
switch(Ah6){case 1:Pn=1;break;case 2:Pn=2;break;case 3:Pn=3;break;case 4:Pn=4;break;
case 5:Pn=5;break;case 6:Pn=6;break;case 7:Pn=7;break;case 8:Pn=8;break;case 9:Pn=
9;break;case 10:Pn=10;break;case 11:Pn=11;break;case 12:Pn=12;break;case 13:Pn=13;
break;default:Pn=0;}return Pn;},Aeq:function(A7){var Pn=A7;var Jr=0;switch(Pn){case
0:Jr=0;break;case 2:Jr=2;break;case 8:Jr=8;break;case 11:Jr=11;break;case 4:Jr=4;
break;case 10:Jr=10;break;case 7:Jr=7;break;case 5:Jr=5;break;case 9:Jr=9;break;
case 3:Jr=3;break;case 12:Jr=12;break;case 13:Jr=13;break;case 1:Jr=1;break;case
6:Jr=6;break;default:throw new Error(AIN+Pn.toFixed());}return Jr;},Aq0:function(
){return 0;},H7:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AhE;},_className:"Device::ReasonOfLeavingToCodeset"
};C.K3={AmK:function(Ah6){var Ld;switch(Ah6){case 1:Ld=1;break;case 2:Ld=2;break;
case 3:Ld=3;break;case 4:Ld=4;break;case 5:Ld=5;break;case 6:Ld=6;break;case 7:Ld=
7;break;case 8:Ld=8;break;case 9:Ld=9;break;case 10:Ld=10;break;default:Ld=0;}return Ld;
},Aeq:function(A7){var Ld=A7;var Jr=0;switch(Ld){case 0:Jr=0;break;case 2:Jr=2;break;
case 1:Jr=1;break;case 9:Jr=9;break;case 6:Jr=6;break;case 8:Jr=8;break;case 7:Jr=
7;break;case 5:Jr=5;break;case 10:Jr=10;break;case 4:Jr=4;break;case 3:Jr=3;break;
default:throw new Error(AIN+Ld.toFixed());}return Jr;},Aq0:function(){return 0;}
,H7:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.K3;},_className:"Device::WhereAboutsToCodeset"};C.AmS={_Init:
function(aArg){this.__proto__=C.AmS;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:-1,Fm:function(Ad,AL){var IJ=C.Row.Fm.call(this,
Ad,AL);if(IJ&&!!AL){this.AkG(AL.CE(Ad,0));this.AwK(AL.CE(Ad,1));this.AwJ(AL.CE(Ad
,2));}return IJ;},Cs:function(AL){var IJ=C.Row.Cs.call(this,AL);if(IJ&&!!AL){var
Mo=AL.QG();if(Mo<0)A.ab5("%s",AcV);else{if(this.Arn())this.CR=AL.AbN();AL.HS(this.
CR,0,this.Year);AL.HS(this.CR,1,this.Deregistrations);AL.HS(this.CR,2,this.Deaths
);AL.QK(Mo);}}return IJ;},G8:function(){C.Row.G8.call(this);this.AkG(-2);},FE:function(
){C.Row.FE.call(this);this.AkG(-1);this.AwK(0);this.AwJ(0);},AwK:function(E){if(
this.Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.BlB,this.
AwK],0);},AwJ:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.
Blz,this.AwJ],0);},AkG:function(E){if(this.Year===E)return;this.Year=E;A.abo([this
,this.ArK,this.AkG],0);},BlB:function(){return this.Deregistrations;},Blz:function(
){return this.Deaths;},ArK:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=3;},
_className:"Device::CalfDeregistrations"};C.Au8={Undefined:0,Display:1,A$G:2,A$T:
3,BaO:4,BE2:5,BGf:6,BGS:7,BFm:8,BEe:9,BDC:10,A7b:11,A$I:12,BG2:13,A8p:14,BG5:15};
C.DeviceComponentToString={BU:function(A7){var BdE=A7;var Qp=A.jV;switch(BdE){case
0:Qp=Atp;break;case 10:Qp=A.aaR(A.acf.BhH);break;case 9:Qp=A.aaR(A.acf.Bil);break;
case 1:Qp=A.aaR(A.acf.Bi_);break;case 11:Qp=A.aaR(A.acf.A7b);break;case 5:Qp=A.aaR(
A.acf.Bq$);break;case 8:Qp=A.aaR(A.acf.Bja);break;case 14:Qp=A.aaR(A.acf.A8p);break;
case 2:Qp=A.aaR(A.acf.A$G);break;case 12:Qp=A.aaR(A.acf.A$I);break;case 6:Qp=A.aaR(
A.acf.Bo0);break;case 3:Qp=A.aaR(A.acf.A$T);break;case 7:Qp=A.aaR(A.acf.Bjb);break;
case 13:Qp=A.aaR(A.acf.BiM);break;case 15:Qp=A.aaR(A.acf.Brd);break;case 4:Qp=A.
aaR(A.acf.BaO);break;default:throw new Error(A0g+BdE.toFixed());}return Qp;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgW={AmK:function(Ah6){return Ah6;
},Aeq:function(A7){return A7;},Aq0:function(){return 0;},H7:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgW;
},_className:"Device::EaseOfDeliveryToCodeset"};C.Ae0={AsO:function(A7){return A.
aaL(A.ach.AQi);},AsP:function(A7){var BdQ=A7;var RM=-1;switch(BdQ){case 0:RM=0;break;
case 1:RM=1;break;case 2:RM=2;break;default:throw new Error(A0h+BdQ.toFixed());}
return RM;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.Ae0;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A6:0,Abt:function(){var Aw=A._NewObject(C.WhereAboutsFilterCriterion,0);Aw.E_(this
);return Aw;},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var Aw=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Ed,A9,
Qh){this.EK=Bc;this.Operator=Ed;this.A6=A9;this.YS=Qh;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BFy={AN_:0,BEl:1,APT:2,LAST:
3};C.BGJ={GN:0,AV9:1,Hl:2,Year:3,LAST:4};C.TimespanDaysToString={BU:function(A7){
var Bhd=A7;var ABx=A.jV;switch(Bhd){case 0:ABx=A.aaR(A.acf.A6u);break;case 1:ABx=
A.aaR(A.acf.AV9);break;case 2:ABx=A.aaR(A.acf.Hl);break;case 3:ABx=A.aaR(A.acf.Year
);break;default:throw new Error(Atq+Bhd.toFixed());}return ABx;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Z_={BFL:0,BEs:1,BE4:2,BE7:3,BE6:4
,BEt:5,BE5:6,LAST:7};C.USBStateToString={BU:function(A7){var BhB=A7;var Bp=A.jV;
switch(BhB){case 0:Bp=AyM;break;case 2:Bp=AyN;break;case 1:Bp=A0i;break;case 5:Bp=
A0j;break;case 3:Bp=A0k;break;case 4:Bp=AIO;break;case 6:Bp=AIP;break;default:throw new
Error(AH6+BhB.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgQ={BE3:0,BDO:1,BF6:2};C.AxO={ACD:A.jV,Timestamp:0,AEq:0,AEv:0,AGD:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFD:function(E){if(this.
AEq===E)return;this.AEq=E;},AFJ:function(E){if(this.AEv===E)return;this.AEv=E;},
AFT:function(E){if(this.AGD===E)return;this.AGD=E;},AFj:function(E){if(this.ACD===
E)return;this.ACD=E;},_Init:function(aArg){this.__proto__=C.AxO;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.AvC={Timestamp:0,ARW:0,ARX:0,AVK:0,AVL:0
,AVJ:0,ARV:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFA:function(E){if(this.ARW===E)return;this.ARW=E;},AFB:function(E){if(this.
ARX===E)return;this.ARX=E;},AF7:function(E){if(this.AVK===E)return;this.AVK=E;},
AF8:function(E){if(this.AVL===E)return;this.AVL=E;},AF6:function(E){if(this.AVJ===
E)return;this.AVJ=E;},AFz:function(E){if(this.ARV===E)return;this.ARV=E;},_Init:
function(aArg){this.__proto__=C.AvC;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqy={Undefined:0,BET:1,BD2:2};C.AgD={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BU:function(A7){var Bc$=A7;var A1P=A.jV;switch(Bc$){case 0:A1P=A.aaR(A.acf.A6j);
break;case 1:A1P=A.aaR(A.acf.A6B);break;default:throw new Error(Aln+Bc$.toFixed(
));}return A1P;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hl={A54:0,AEf:1,AC0:2,AEr:3,AB1:4,AEt:5,AEh:6,AEg:7,AB8:8,AGL:9,AEG:10,AEE:11
,ACL:12,LAST:13};C.MonthToString={BU:function(A7){var BeU=A7;var XN=A.jV;switch(
BeU){case 1:XN=A.aaR(A.act.AEf);break;case 2:XN=A.aaR(A.act.AC0);break;case 3:XN=
A.aaR(A.act.AEr);break;case 4:XN=A.aaR(A.act.AB1);break;case 5:XN=A.aaR(A.act.AEt
);break;case 6:XN=A.aaR(A.act.AEh);break;case 7:XN=A.aaR(A.act.AEg);break;case 8:
XN=A.aaR(A.act.AB8);break;case 9:XN=A.aaR(A.act.AGL);break;case 10:XN=A.aaR(A.act.
AEG);break;case 11:XN=A.aaR(A.act.AEE);break;case 12:XN=A.aaR(A.act.ACL);break;default:
throw new Error(A0l+BeU.toFixed());}return XN;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.V2={FileName:A.jV,AGF:0,B7:0,EW:0,AgQ:0,AVe:false,FE:function(){this.E5(0);this.
AgQ=1;this.FileName=A.jV;this.AGF=0;this.AVe=false;this.B7=0;},E5:function(E){if(
this.EW===E)return;this.EW=E;A.abo([this,this.SN,this.E5],0);},SN:function(){return this.
EW;},_Init:function(aArg){this.__proto__=C.V2;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AWe={Init:function(aArg){var B;A.zX([this,this.Bf7],[B=A._GetAutoObject(C.Device
),B.A92,B.Bca],0);this.Bf7(this);},Cs:function(){A._GetAutoObject(C.Device).Asg(
this.toString());},Bf7:function(G){this.Fm(A._GetAutoObject(C.Device).AHt);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AWe;this.ZI(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AWd={
Init:function(aArg){var B;A.zX([this,this.Bf5],[B=A._GetAutoObject(C.Device),B.A91
,B.Bb$],0);this.Bf5(this);},Cs:function(){A._GetAutoObject(C.Device).Asf(this.toString(
));},Bf5:function(G){this.Fm(A._GetAutoObject(C.Device).AHs);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWd;this.
ZI(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AWg={Init:function(
aArg){var B;A.zX([this,this.Bf9],[B=A._GetAutoObject(C.Device),B.A95,B.Bcd],0);this.
Bf9(this);},Cs:function(){A._GetAutoObject(C.Device).Ash(this.toString());},Bf9:
function(G){this.Fm(A._GetAutoObject(C.Device).AHw);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWg;this.ZI(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AWc={Init:function(
aArg){var B;A.zX([this,this.Bf3],[B=A._GetAutoObject(C.Device),B.A90,B.Bb_],0);this.
Bf3(this);},Cs:function(){A._GetAutoObject(C.Device).Ase(this.toString());},Bf3:
function(G){this.Fm(A._GetAutoObject(C.Device).AHr);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWc;this.ZI(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMQ={Init:function(
aArg){var B;A.zX([this,this.Bfo],[B=A._GetAutoObject(C.Device),B.A84,B.BbH],0);this.
Bfo(this);},Bfo:function(G){this.Fm(A._GetAutoObject(C.Device).AB0);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMQ;this.ZI(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BFB={BFE:0,BFs:1,BEk:2,BG3:3,Unknown:4};C.BD0={None:0,BFM:1,BFG:2,BFC:3,BFD:
4};C.BGX={A8E:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BU:function(A7){var Bhi=A7;var ABz=A.jV;switch(Bhi){case 0:ABz=A.aaR(A.acf.A8E);
break;case 1:ABz=A.aaR(A.acf.A6j);break;case 2:ABz=A.aaR(A.acf.A6B);break;case 3:
ABz=A.aaR(A.acf.BiK);break;default:throw new Error(A0m+Bhi.toFixed());}return ABz;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A$x={Bgg:function(
AoN){var Jv=A.ab0(A.abV(AoN,15),0,10);var JK=A._GetAutoObject(C.Converter).Ta(Jv
);if(!!JK){if(JK===10){if((((AoN.length!==16)||!A._GetAutoObject(A.acj.VO).AV0(AoN
))||!!A._GetAutoObject(C.Converter).Baq(Jv))||!A._GetAutoObject(C.Converter).AVO(
Jv))return 0;else return Jv;}else return Jv;}else{JK=A._GetAutoObject(C.Converter
).Ta(A._GetAutoObject(C.Device).P1);if(!!JK&&(JK===10)){if(!A._GetAutoObject(A.acj.
VO).AV0(AoN))return 0;if(AoN.length===12){var Bc_=A.ab0(A.abV(AoN,10),0,10);var AKo=
A._GetAutoObject(C.Converter).AVO(Bc_);if((Bc_>0)&&!!AKo)return(A._GetAutoObject(
C.Converter).AqF(JK)*1000000000000)+A.ab0(A.abV(AoN,10),0,10);}}}return 0;},Bgf:
function(JM){if(!((JM.length===8)||((JM.length===10)&&A._GetAutoObject(A.acj.VO).
AV0(JM))))return 0;var AA1=A._NewObject(A.Core.Bq,0);var A4y=false;var A4D=A.abW(
JM,4,4);var At2=A.wz(A4D,0,10);if((At2<2000)||(At2>2100)){A4D=A.abV(JM,4);At2=A.
wz(A4D,0,10);A4y=true;}if((At2<2000)||(At2>2100))return 0;AA1.Year=At2;var AK_;var
Az9;if(A4y){AK_=A.abW(JM,4,2);Az9=A.wz(AK_,0,10);}else{AK_=A.abW(JM,2,2);Az9=A.wz(
AK_,0,10);}if((Az9<1)||(Az9>12))return 0;AA1.Uz(Az9);var AK9;var Az8;if(A4y){AK9=
A.abW(JM,6,2);Az8=A.wz(AK9,0,10);}else{AK9=A.abV(JM,2);Az8=A.wz(AK9,0,10);}if((Az8<
1)||(Az8>AA1.Zw()))return 0;AA1.Lw(Az8);return AA1.J2();},_Init:function(aArg){this.
__proto__=C.A$x;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::ParserClass"};C.AkJ={_Init:function(
){C.A$x._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BU:function(A7){var Aay=A7;var M2=A.jV;
switch(Aay){case 14:M2=A.aaR(A.acf.Afz);break;case 32:M2=A.aaR(A.acf.Breed);break;
case 4:M2=A.aaR(A.acf.Ael);break;case 28:M2=A.aaR(A.acf.A59);break;case 33:M2=A.
aaR(A.acf.AgN);break;case 23:M2=A.aaR(A.acf.KQ);break;case 7:M2=A.aaR(A.acf.Afu);
break;case 2:M2=A.aaR(A.acf.P);break;case 0:M2=A.aaR(A.acf.GP);break;case 8:M2=A.
aaR(A.acf.Alarm);break;case 9:M2=A.aaR(A.acf.ACw);break;case 38:M2=A.aaR(A.acf.Bi$
);break;case 11:M2=A.aaR(A.acf.Fever);break;case 29:M2=A.aaR(A.acf.ARJ);break;case
18:M2=A.aaR(A.acf.Ne);break;case 26:M2=A.aaR(A.acf.Un);break;case 22:M2=A.aaR(A.
acf.AcK);break;case 1:M2=A.aaR(A.acf.GK);break;case 34:M2=A.aaR(A.acf.Jo);break;
case 6:case 25:case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case
36:case 15:case 16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:M2=A.
jV;break;default:throw new Error(A0n+A7.toFixed());}return M2;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.AEo={Bf:0,BGB:1,LAST:2};C.ListViewScopeToString={
BU:function(A7){var BAP=A7;var A3e=A.jV;switch(BAP){case 0:A3e=A.aaR(A.acf.Bf);break;
case 1:A3e=A.aaR(A.acf.BpR);break;default:throw new Error(A0o+A7.toFixed());}return A3e;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHv={BHu:0,BHt:1,BHs:2,LAST:3};C.
WeightValuePrecisionToString={BU:function(A7){var BDy=A7;var ALL=A.jV;switch(BDy
){case 0:ALL=AyO+A.aaR(A.acf.AAl);break;case 1:ALL=Atr+A.aaR(A.acf.AiF);break;case
2:ALL=AIQ+A.aaR(A.acf.AiF);break;default:throw new Error(AIR+A7.toFixed());}return ALL;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgI={BU:function(A7){var ALg=
A7;if(ALg===1)return A.aaR(A.acf.Bj8);else return C.AnimalTypeToString.BU.call(this
,A7);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgI;},_className:"Device::AnimalTypeToStringHeifer"};C.Ws={RX:0,BFI:1,LAST:2};
C.MassDeregistrationCriterionToString={BU:function(A7){var BAS=A7;var A3j=A.jV;switch(
BAS){case 0:A3j=A.aaR(A.acf.Blc);break;case 1:A3j=A.aaR(A.acf.ASt);break;default:
throw new Error(Ayt+A7.toFixed());}return A3j;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A6:
A.jV,Zu:0,OK:0,Abt:function(){var Aw=A._NewObject(C.UInt64PartialFilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AH){C.FilterCriterion.E_.call(this,AH);var
Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw){this.A6=Aw.
A6;this.Zu=Aw.Zu;this.OK=Aw.OK;}},Initialize:function(Bc,Ed,A9,AtC,AJg,Qh){this.
EK=Bc;this.Operator=Ed;this.A6=A9;this.YS=Qh;this.Zu=AtC;this.OK=AJg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BEp={Idle:0,BGb:1,BGm:2,BGE:3,Error:4};C.AVZ={Aso:0,AsV:0,Z_:0,AT7:function(
E){if(this.Z_===E)return;this.Z_=E;A.abo([this,this.Bmj,this.AT7],0);},AT9:function(
E){if(this.AsV===E)return;this.AsV=E;A.abo([this,this.Bml,this.AT9],0);},ATJ:function(
E){if(this.Aso===E)return;this.Aso=E;A.abo([this,this.BlX,this.ATJ],0);},Bmj:function(
){return this.Z_;},Bml:function(){return this.AsV;},BlX:function(){return this.Aso;
},_Init:function(aArg){this.__proto__=C.AVZ;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmS;C.BoolFilterCriterion.__proto__=
C.FilterCriterion;C.UInt32FilterCriterion.__proto__=C.FilterCriterion;C.ScreenTypeToString.
__proto__=C.EnumToString;C.OverlayMenuToString.__proto__=C.EnumToString;C.ScanStateToString.
__proto__=C.EnumToString;C.MeasureStateToString.__proto__=C.EnumToString;C.TemperatureUnitToString.
__proto__=C.EnumToString;C.AnimalTypeToString.__proto__=C.EnumToString;C.LanguageToString.
__proto__=C.EnumToString;C.GenderToString.__proto__=C.EnumToString;C.BirthTypeToString.
__proto__=C.EnumToString;C.SyncStateToString.__proto__=C.EnumToString;C.RatedAttributeToString.
__proto__=C.EnumToString;C.AssesmentToString.__proto__=C.EnumToString;C.BooleanToYesNo.
__proto__=C.EnumToString;C.PopupIdToString.__proto__=C.EnumToString;C.TransponderTypeToString.
__proto__=C.EnumToString;C.TransponderProtocolToString.__proto__=C.EnumToString;
C.RatingModeToString.__proto__=C.EnumToString;C.MassUnitToString.__proto__=C.EnumToString;
C.ActionToString.__proto__=C.EnumToString;C.WeightRecordingModeToString.__proto__=
C.EnumToString;C.BooleanToAutoOnOff.__proto__=C.EnumToString;C.WeightRecordingScopeToString.
__proto__=C.EnumToString;C.AnimalListContentToString.__proto__=C.EnumToString;C.
GenderFilterCriterion.__proto__=C.FilterCriterion;C.AnimalTypeFilterCriterion.__proto__=
C.FilterCriterion;C.AutoRegistrationModeToString.__proto__=C.EnumToString;C.AssessmentFilterCriterion.
__proto__=C.FilterCriterion;C.FactoryResetScopeToString.__proto__=C.EnumToString;
C.AVA.__proto__=C.Int32ArrayWrapper;C.AVz.__proto__=C.Int32ArrayWrapper;C.AMP.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aen.__proto__=C.EnumToIcon;
C.Ad4.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.Nc.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AhE.__proto__=C.EnumToCodeset;C.K3.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgW.__proto__=C.EnumToCodeset;C.Ae0.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AWe.__proto__=C.Int32ArrayWrapper;C.AWd.
__proto__=C.Int32ArrayWrapper;C.AWg.__proto__=C.Int32ArrayWrapper;C.AWc.__proto__=
C.Int32ArrayWrapper;C.AMQ.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgI.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AkJ._this))B._ReInit(
),C.AkJ._ReInit.call(B);};C.DJ=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AkJ._this)&&(B._cycle!=D))B._Done(C.AkJ._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */