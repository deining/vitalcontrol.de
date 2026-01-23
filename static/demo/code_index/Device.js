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
var Cf="ERROR: Cannot add criterion, it is already in the list.";var BD="ERROR: BatteryChargeState is read only";
var E6="ERROR: UpdateChargeActive is read only";var Hq="ERROR: ScanState is read only.";
var I0="ERROR: MeasureState is read only.";var Iv="ERROR: Temperature value is read only";
var O9="ERROR: UpdateDataTable called for Undefined data table.";var P_="ERROR: UpdateDataTable called for unknown data table id=";
var P$="ERROR: SyncState is read only.";var CR="ERROR: ScanTransponder is read only.";
var Fc="ERROR: Body weight value is read only";var L8="ERROR: Predicted temperature value is read only";
var Qa="ERROR: TransferProgress is read only";var J9="ERROR: TransferTarget is read only";
var Oh="ERROR: unhandled assessment.";var Qb="Unhandled enum BodyTemperature: ";
var MR="AU";var Te="AT";var UW="BE";var Z8="BA";var W$="BG";var Iw="CA";var UX="CN";
var Z9="TW";var UY="HR";var Z_="CY";var Xa="CZ";var Z$="DK";var Aaa="EE";var UZ=
"FI";var Xb="FR";var O_="DE";var Aab="GR";var Oi="HU";var Rn="IE";var Xc="IT";var
Xd="JP";var Tf="LV";var Xe="LT";var Aac="LU";var Xf="MT";var Xg="NL";var Xh="NO";
var Xi="PL";var Xj="PT";var Aad="RO";var Tg="RU";var Aae="SK";var AfB="SI";var Aaf=
"ES";var Xk="SE";var Aag="CH";var Xl="TR";var AhS="UA";var K2="UK";var AcL="US";
var JE=".";var AhT="-";var Aoc="ERROR: Unhandled mass unit: ";var Oj=" ";var Xm=
"Unhandled gender";var Aod="Unhandled animal type";var AfC="Unhandled Device::MassUnit.";
var AhU="Unhandled Device::AnimalListContent.";var AcM="Avid";var Aah="Ordicam / IER SA";
var Ax4="Agrident";var Ax5="Datamars";var Ax6="Allflex";var Ax7="Texas Instruments";
var Ak_="Nedap";var AsX="Digital Angel";var Ax8="null";var Ax9="[ ";var O$=", ";
var Ro=" ]";var Ax_="Unhandled language";var U0="Unhandled Device::AnimalListAction.";
var AsY="Temperature unit conversion not supported: ";var Ax$="->";var Aya="=";var
Ak$=">";var Ayb="<";var AfD="!=";var Aoe="WARNING: Unhandled operator.";var I1="Unknown birth type";
var Aof="Unhandled country: ";var AsZ="Unhandled Device::Action: ";var AcN="ERROR: Cannot start transaction";
var As0="ERROR: Table is null, cannot load row (";var As1=")";var As2="Table Id mismatch!";
var Aog="ERROR: Row index (";var As3=") out of bounds [0,";var Ala="]";var Ayc="ERROR: Table is full. Item limit: ";
var Ayd="Device::ScanTransponder not set";var Aye="Unhandled TransponderType.";var
As4="Unhandled ScanState.";var Ayf="Could not load animal with transponder";var Pa=
"Birth type";var Ayg="Time calving";var AWe="Pend. reg. notice";var AWf="Perished";
var AWg="Rating temp.";var AWh="Location";var AHw=" mother";var AHx="Reason leaving";
var AfE="Time alarm";var Aoh="Time first weighing";var AWi="Time control";var AHy=
"Time temp.";var Alb="Time watch";var AHz="Time weighing";var AHA="Assessment";var
AWj="Time rating";var AWk="ERROR: Unhandled AnimalTable filter field:";var AHB="Field ";
var AWl="ERROR: Unhandled RatingTable filter field:";var AcO="ERROR: Unhandled table ";
var AWm=" filter fields.";var AWn=" [";var AWo="WARNING: Unhandled filter criterion type.";
var AWp="0";var As5="No table specified";var AHC="Invalid animal id generation method: ";
var AHD="Unhandled AnimalIdGenerationMethod: ";var Ayh="Invalid gender: ";var AHE=
"Invalid ear tag number assignment mode: ";var Ayi=";";var AWq="Invalid animal creation error code: ";
var AWr="Invalid EartagNrAssignmentMode: ";var AWs="Unsupported exponent: ";var AWt=
"Unknown whereabouts type: ";var AHF="Unhandled Gender: ";var AWu="Unhandled AnimalIdAutoGenerationMethod: ";
var MS="\n";var Ayj="\n\n";var AWv="Bootloader:\nV\xA0";var AWw="Middleware:\nV\xA0";
var AWx="GUI:\nV\xA0";var AWy="Mainboard: ";var AWz="Torchboard: ";var AHG="Operator not supported.";
var AWA="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayk="Unhandled mass deregistration criterion: ";
var AWB="Could not load animal with naisId";var As6="Unhandled enum value ";var Ayl=
"UNDEFINED";var AWC="Boot";var AHH="Charge";var AWD="ChargeWarning";var AHI="ControlledPowerOff";
var AHJ="DeviceMain";var AHK="DeviceService";var AWE="DeviceInfo";var AHL="DeviceDataManagement";
var AWF="DeviceAnimalDataMenu";var AWG="DeviceDeviceDataMenu";var Rp="DeviceCheck";
var U1="Home";var AWH="Settings";var AWI="DateTimeSettings";var AWJ="UnitsSettings";
var AWK="DataAcquisitionSettings";var AWL="RegistrationAutomaticSettings";var AWM=
"RegistrationPresettingsSettings";var AWN="TransponderAssignmentSettings";var AhV=
"TransponderUnlinkSettings";var AHM="TemperatureSettings";var AWO="WeightGainSettings";
var AWP="DeviceSettings";var AHN="RegistrationSettings";var AHO="InitializationSettings";
var Aym="PremisesSettings";var Qc="Sleep";var AWQ="Sync";var AWR="EditAnimalData";
var AWS="EditAnimalDataNaisId";var As7="AnimalList";var AWT="AnimalListFilter";var
AWU="AlarmListFilter";var AWV="WatchListFilter";var AWW="AnimalActionActions";var
AWX="AnimalActionTemperature";var AWY="TemperatureMeasurement";var As8="AnimalActionWeighing";
var AWZ="AnimalActionRate";var AW0="AnimalActionUnregister";var AW1="AnimalActionPerished";
var AW2="AnimalActionNewBornCare";var AW3="AlarmList";var AW4="ControlMeasure";var
AW5="ControlList";var AW6="RangeTest";var AW7="ListsMain";var AW8="ListsIdManagement";
var AHP="WatchList";var Alc="EvaluationMenuMain";var AW9="EvaluationMenuWeights";
var AW_="EvaluationLosses";var AW$="EvaluationRatings";var Ayn="EvaluationTemperatures";
var Ald="EvaluationWeights";var AhW="EvaluationWeightsRecent";var Ayo="EvaluationBirthWeights";
var Aoi="AnimalEvaluationFilter";var AhX="NewMenu";var AXa="NewAnimals";var Ayp=
"NewAnimalManualData";var AHQ="MassRecording";var AfF="NewAnimalTransponderData";
var AHR="NewAnimalLoss";var Aai="AutoActionScanScreen";var Ale="ManualActionScanScreen";
var Aoj="SetTransponderScreen";var AXb="SetSaveTransponderScreen";var AXc="NewAnimalSetTransponderScreen";
var AXd="NewAnimalsSetTransponderScreen";var AXe="NewAnimalCalvingDataScreen";var
AXf="WeightListScreen";var As9="AnimalSingleInfoScreen";var AHS="AnimalMultiInfoScreen";
var AHT="AnimalRegistrationDetails";var AXg="FreshCowListScreen";var AXh="FreshCowListFilterScreen";
var AXi="DryCowListScreen";var AXj="DryCowListFilterScreen";var AXk="NoTransponderListScreen";
var AXl="NoTransponderListFilterScreen";var AXm="YoungNoTransponderListScreen";var
AXn="YoungNoTransponderListFilterScreen";var AXo="NoNaisIdListScreen";var AXp="NoNaisIdListFilterScreen";
var AXq="RegistrationsListScreen";var Ayq="RegistrationsListFilterScreen";var AHU=
"ActionListScreen";var AHV="ActionListFilterScreen";var AHW="UpdateScreen";var AHX=
"MotherScanScreen";var AHY="SetSaveNaisIdScreen";var AHZ="PurchasedAnimalsList";
var AXr="TextInput";var AXs="AnimalActions";var AXt="Unhandled display mode: ";var
AXu="None";var AXv="Actions Settings";var AXw="Auto Action";var AXx="Menu Item Settings";
var Ayr="Rating Type";var AH0="Weighing settings";var AXy="Options";var AH1="AnimalSearch";
var AhY="AnimalSearchUnfiltered";var U2="AnimalSearchDriedOff";var AXz="MeasurementReady";
var Aaj="AnimalMultiInfoMenu";var AXA="MassRecordingDefaults";var AXB="MassRecordingFields";
var Alf="MassRecordingMenu";var AfG="BirthRegistrationsListMenu";var AhZ="Unhandled overlay menu: ";
var Aok="Error";var Ays="Idle";var Pb="IdScanned";var AXC="NotFound";var AH2="Progress";
var AH3="Unhandled scan state: ";var AXD="Prediction";var Ayt="Ready";var AH4="Unhandled measure state: ";
var AXE="Unhandled temperature unit: ";var AXF="Unhandled species: ";var AXG="Bosanski";
var AXH="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXI="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";
var AXJ="Hrvatski";var AXK="\u010Ce\u0161tina";var AXL="Dansk";var AH5="English";
var AXM="Nederlands";var AH6="Eesti";var AH7="Suomalainen";var Ayu="Fran\xE7ais";
var AXN="Deutsch";var AXO="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AXP="Magyar";var AXQ="Italiano";var AXR="\u65E5\u672C\u8A9E";var AXS="Latvie\u0161u";
var AXT="Lietuvi\u0161kas";var AXU="Norsk";var Aol="Polski";var As_="Portugu\xEAs";
var AH8="Rom\xE2n\u0103";var AXV="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var
AXW="Sloven\u0161\u010Dina";var AXX="Espa\xF1ol";var AXY="Svenska";var AXZ="T\xFCrk\xE7e";
var AX0="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";var
AH9="Unhandled language: ";var AX1="BS";var AX2="ZH";var AX3="CS";var AX4="DA";var
AX5="EN";var AX6="ET";var AX7="EL";var AX8="JA";var AH_="SL";var AX9="SV";var AX_=
"Unhandled gender: ";var AH$="Unhandled birth type: ";var AIa="Exporting";var AIb=
"ImportFinish";var AIc="ImportStart";var Ayv="Importing";var Ayw="Init";var AId=
"Unhandled sync state: ";var AIe="Unhandled rating attribute: ";var AIf="Unhandled assessment: ";
var Ayx="Illegal boolean value: ";var Ayy="Unhandled popup ID:";var AX$="Unknown";
var AYa="Severe Error";var AYb="ErrorsDeviceDriverCheck";var AYc="Enter Sleep";var
AYd="About";var AYe="InfoSoftwareVersions";var AYf="InfoHardwareVersions";var AYg=
"InfoSerial";var AYh="ShutDown";var AYi="SuccessDataSync";var AYj="SuccessResetFactory";
var AYk="SuccessResetSettings";var Ayz="SuccessResetAnimalData";var AYl="SuccessCreateBackup";
var AYm="SuccessRestoreBackup";var AyA="CreateBackupInProgress";var As$="RestoreBackupInProgress";
var U3="FailedCreateBackup";var Ata="FailedRestoreBackup";var AYn="TechnicalDetails";
var AYo="WarningDataSync";var AYp="WarningFactory";var AIg="WarningResetAnimalData";
var AYq="WarningResetDeviceData";var AIh="WarningRestart";var AYr="WarningAutoAction";
var AYs="WarningAutoActionNotApplicable";var AYt="WarningNoMenuItem";var Atb="WarningEnterDemoMode";
var AYu="NoAnimalsRegistered";var AYv="MaxNumAnimalsReached";var AIi="MaxNumRatingsReached";
var AYw="MaxNumCalfDeregistrationsReached";var AYx="MissingTransponder";var AYy=
"EarTagNumberTooShort";var AYz="NoValidCountryCode";var AcP="WarningOutdatedAnimalWeight";
var AYA="WarningOutdatedAnimalWeights";var AYB="WarningWeightEvaluationSingular";
var AYC="WarningWeightEvaluationPlural";var AYD="ScanError";var AIj="ScanNotFound";
var AYE="ScannedAnimalNotFound";var AYF="ScannedTransponderNotFound";var AYG="ScannedNaisIdNotFound";
var AYH="AnimalNotFound";var AYI="SuccessUnregister";var AYJ="SuccessUnregisterPerished";
var AIk="SuccessCreationNewAnimal";var AYK="SuccessCreationNewAnimals";var AYL="AnimalCreationInProgress";
var AYM="EvaluationInProgress";var AIl="DataSyncInProgress";var AIm="AddedToAlarm";
var AYN="RemovedFromAlarm";var AYO="AddedToWatch";var AYP="RemovedFromWatch";var
AYQ="AddedToDryOff";var Rq="RemovedFromDryOff";var Atc="AnimalIdAlreadyExists";var
AIn="AnimalIdAlreadyExistsContinuable";var AIo="MissingAnimalId";var Aom="MissingAnimalIdMother";
var Aon="MissingEartagNumber";var AyB="MissingTransponderId";var AYR="TransponderAlreadyRegistered";
var AIp="TransponderAlreadyRegisteredContinuable";var AYS="TransponderAlreadyRegisteredCapturable";
var AYT="HelpAnimalInfoRating";var AYU="WarningReassignTransponder";var AYV="CannotReassignNaisId";
var AYW="WarningResetToDefaultValue";var AYX="WarningResetThresholds";var AYY="WarningResetTempThresholds";
var AYZ="UpdateFirmware";var AY0="UpdateFirmwareBatteryLow";var AY1="ConfirmFirmwareUpdated";
var AY2="ConfirmBootloaderUpdated";var AY3="QuestionAddAnotherCalfMultiples";var
AY4="RemovedAllBirthNoticesPending";var AY5="RemovedAllPurchasedNoticePending";var
AY6="RemovedFromBirthNoticePending";var AY7="RemovedFromPurchasedNoticePending";
var AY8="SuccessClearAnimalLoss";var Aoo="RemovedAnimalBirth";var AIq="RemovedAnimalPurchased";
var AY9="WarningNoActionsForAnimalLoss";var AIr="SuccessLinkTransponder";var AIs=
"SuccessChangeTransponder";var AcQ="SuccessUnlinkTransponder";var AIt="SuccessLinkNaisId";
var AY_="WarningDataExportHitBirthFailed";var AIu="SuccessDataExportHitBirth";var
AY$="SuccessDataExportHitBirthDownload";var AyC="SuccessDataExportHitBirthResetAdvice";
var AZa="WarningDataExportPurchasedFailed";var AZb="SuccessDataExportPurchased";
var AyD="SuccessDataExportPurchasedDownload";var AZc="SuccessDataExportPurchasedResetAdvice";
var AZd="WarningDataExportAnimalsFailed";var AZe="SuccessDataExportAnimalsRatings";
var AIv="SuccessDataExportAnimalsDownload";var Aop="WarningNoPremisesID";var AIw=
"WarningNoFlashDrivePresent";var AZf="WarningNoBackupPathPresent";var AIx="WarningNoBackupFilePresent";
var AIy="DemoFunctionNotAvailable";var Alg="WarningImpreciseTimeSetting";var AZg=
"ConfirmationRestoreBackup";var Aoq="ConfirmationMassDeregistration";var AZh="SuccessMassDeregistration";
var AIz="WarningParsedDateInFutureInvalid";var AIA="WarningParsingDateFailed";var
AZi="WarningParsingNaisIdFailed";var AZj="WarningParsingShortNaisIdWithoutPremisesId";
var AIB="DataExportInProgress";var AZk="BarcodeScannerConnectedSwitchScreen";var
AZl="BarcodeScannerDisconnectedSwitchScreen";var AZm="AnimalId";var AZn="FarmId";
var AZo="GroupId";var AZp="PersonId";var AZq="Unhandled transponder type: ";var AZr=
"FDX";var AZs="HDX";var AZt="HDX (Urban)";var AZu="Unhandled transponder protocol: ";
var AZv="Illegal RatingMode: ";var AZw="Unhandled mass unit: ";var AZx="Max array size is 10";
var AyE="Index out of bounds";var Aak="ERROR: Received more integers than expected!";
var AIC="Unhandled double scan action :";var AyF="Illegal WeightRecordingMode: ";
var AZy="Illegal WeightRecordingScope: ";var AZz="AnimalDataGenderType";var AZA=
"AnimalDataShortNaisId";var AZB="Rating";var AZC="Temperature";var AZD="Weight";
var Atd="Alarm infos";var Ate="Control infos";var Atf="Watch infos";var Atg="Fresh cow infos";
var AyG="No transponder infos";var Aor="Dry cow info";var AZE="No nais id infos";
var AZF="Birth registrations infos";var AZG="Purchased registrations infos";var AZH=
"Young no transponder infos";var AZI="Unhandled animal list content:";var AZJ="Illegal AutoRegistrationMode: ";
var AZK="Illegal FactoryResetScope: ";var Aos="??";var AZL="Illegal EaseOfDelivery: ";
var AZM="Illegal Whereabouts: ";var AZN="Illegal breed: ";var AZO="Unisex";var AZP=
"Illegal animalIdGenerationMethod: ";var AZQ="Ascending";var AZR="Descending";var
AyH="Illegal directionOfCountingName: ";var AID="Unhandled direction of counting: ";
var Alh="Unhandled German state: ";var AyI="SH";var AZS="HH";var AZT="NI";var AZU=
"HB";var AIE="NW";var AZV="HE";var AZW="RP";var AZX="BW";var AZY="BY";var AZZ="BB";
var AZ0="MV";var AZ1="SN";var AZ2="ST";var AIF="TH";var AZ3="One Range Male Female";
var AZ4="Two Ranges Male Female";var AIG="Illegal EartagAssignmentMode: ";var AZ5=
"Unhandled code set value ";var AIH="Implement in derived class";var AZ6="Illegal HIT-Code: ";
var AZ7="Illegal ReasonOfLeaving: ";var AyJ="Illegal code: ";var AZ8="Undefined";
var Ath="Illegal DeviceComponent: ";var AZ9="Unhandled Device::MotherSelectionFilterMode: ";
var AZ_="Illegal Device::TimespanDays: ";var Ati="Not connected";var AyK="Host";
var AyL="Device";var AZ$="Device CDC";var A0a="Host MSC";var A0b="Host HID";var AII=
"Host CDC";var AIJ="Illegal animalIdAutoGenerationMethod: ";var Ali="Unhandled month: ";
var A0c="Illegal transponderAssignmentIdChangeMethod: ";var A0d="Unhandled animal table field: ";
var A0e="Unhandled list view scope: ";var A0f="1 ";var AyM="100 ";var Atj="10 ";
var AIK="Unhandled weight value precision: ";
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
B9:null,B_:null,CX:function(AH){if(!AH)return;var Aw=this.B9;while(!!Aw){if(Aw===
AH)throw new Error(Cf);Aw=Aw.Ah;}AH.AI=this.B_;if(!!this.B_)this.B_.Ah=AH;this.B_=
AH;if(!this.B9)this.B9=AH;},AON:function(){return this.B9;},AOS:function(Bcg){if(
!!Bcg)return Bcg.Ah;return null;},DM:function(AJc,Eb){var Aw=this.B9;while(!!Aw){
if(Aw.EJ===AJc){if(Eb===1)return Aw;else if(Aw.Operator===Eb)return Aw;}Aw=Aw.Ah;
}return null;},Nw:function(AH){var Aw=this.B9;while(!!Aw){if(Aw===AH){if(!!Aw.AI
)Aw.AI.Ah=Aw.Ah;if(!!Aw.Ah)Aw.Ah.AI=Aw.AI;if(this.B9===Aw)this.B9=Aw.Ah;if(this.
B_===Aw)this.B_=Aw.AI;Aw.Ah=null;Aw.AI=null;return;}Aw=Aw.Ah;}},E9:function(){var
Be=A._NewObject(C.Filter,0);var Aw=this.B9;while(!!Aw){Be.CX(Aw.Abm());Aw=Aw.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AI:null,EJ:-1,Operator:
1,YN:false,Abm:function(){return null;},E9:function(AH){if(!AH)return;this.EJ=AH.
EJ;this.Operator=AH.Operator;this.YN=AH.YN;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A6:0,Abm:function(){var Aw=A._NewObject(C.Int32FilterCriterion
,0);Aw.E9(this);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var
Aw=(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:
function(Bc,Eb,A9,Qf){this.EJ=Bc;this.Operator=Eb;this.A6=A9;this.YN=Qf;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEx:0,AEw:0,Av1:0,OX:0,OY:null,SE:null,Q2:null,S5:null,R5:null,P4:null,Gg:null,An:
null,Bt:null,AnM:null,Pt:null,AuE:A.jV,AutoActions:A.jV,ABX:A.jV,AG6:A.jV,AG7:A.
jV,AhG:A.jV,AHq:A.jV,AHr:A.jV,ABY:A.jV,AHp:A.jV,AHu:A.jV,ABQ:A.jV,ABR:A.jV,ASh:A.
jV,ASm:A.jV,AWb:A.jV,Aa8:100,Lz:0,AM6:75,AcF:3600,AUl:0,A3:5,AF:0,K0:50000,Pp:0,
AGm:0,AdR:0,Aq4:0,Aq3:0,AR6:1,AR5:1,AjR:0,AR7:1,AxP:0,Afr:0,AqQ:10,AU9:5,AvW:60,
AvU:0,An4:0,OR:1,WhereAbouts:0,Ak1:0,AxH:3,ACU:0,Agx:1,AbW:0,Aqp:0,AN3:11,Breed:
0,EartagNrAssignmentMode:0,Au3:0,ACN:0,ACM:0,In:5,ABP:2,Aqr:0,AOF:2,AVY:0,D9:0,AMe:
0,Kn:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,Im:3,AUk:false,AMZ:false,AeO:true,ARS:false
,Aqb:true,AqR:false,AmP:true,HF:false,AVA:false,AmQ:false,AVW:false,AsR:false,AEv:
false,AmC:false,UpdateActiveScreen:function(AJ){if(this.Im===AJ)return;this.Im=AJ;
A.abo([this,this.AEJ,this.Bbp],0);},Zr:function(E){if(this.K&&this.K.Zr)return this.
K.Zr.apply(this,arguments);else return C.DeviceClass.Bu4.apply(this,arguments);}
,Bu4:function(E){},Bbp:function(Aq){this.Zr(Aq);},UpdateBatteryChargeState:function(
AJ){if(this.Aa8===AJ)return;this.Aa8=AJ;A.abo([this,this.Av7,this.AyS],0);},Awt:
function(E){if(this.K&&this.K.Awt)return this.K.Awt.apply(this,arguments);else return C.
DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){A.ab5("%s",BD);},AyS:function(
Aq){this.Awt(Aq);},UpdateChargeActive:function(AJ){if(this.AmC===AJ)return;this.
AmC=AJ;A.abo([this,this.Av_,this.AyT],0);},AFe:function(E){if(this.K&&this.K.AFe
)return this.K.AFe.apply(this,arguments);else return C.DeviceClass.Bvk.apply(this
,arguments);},Bvk:function(E){A.ab5("%s",E6);},AyT:function(Aq){this.AFe(Aq);},UpdateScanState:
function(AJ){var B;if(this.ScanState===AJ)return;this.ScanState=AJ;A.abo([this,this.
ASU,this.A0I],0);A._GetAutoObject(C.Helper).BBs(this);},Ar3:function(E){if(this.
K&&this.K.Ar3)return this.K.Ar3.apply(this,arguments);else return C.DeviceClass.
Bv1.apply(this,arguments);},Bv1:function(E){A.ab5("%s",Hq);},A0I:function(Aq){this.
Ar3(Aq);},UpdateMeasureState:function(AJ){if(this.MeasureState===AJ)return;this.
MeasureState=AJ;A.abo([this,this.AER,this.AIY],0);},AwS:function(E){if(this.K&&this.
K.AwS)return this.K.AwS.apply(this,arguments);else return C.DeviceClass.BvI.apply(
this,arguments);},BvI:function(E){A.ab5("%s",I0);},AIY:function(Aq){this.AwS(Aq);
},UpdateTempValue:function(AJ){if(this.Lz===AJ)return;this.Lz=AJ;A.abo([this,this.
AEV,this.AI0],0);},Aw6:function(E){if(this.K&&this.K.Aw6)return this.K.Aw6.apply(
this,arguments);else return C.DeviceClass.Bv7.apply(this,arguments);},Bv7:function(
E){A.ab5("%s",Iv);},AI0:function(Aq){this.Aw6(Aq);},AnB:function(E){if(this.K&&this.
K.AnB)return this.K.AnB.apply(this,arguments);else return C.DeviceClass.BvC.apply(
this,arguments);},BvC:function(E){},BbF:function(Aq){this.AnB(Aq);},Aw7:function(
E){if(this.K&&this.K.Aw7)return this.K.Aw7.apply(this,arguments);else return C.DeviceClass.
Bv8.apply(this,arguments);},Bv8:function(E){},Atm:function(Aq){this.Aw7(Aq);},AFc:
function(E){if(this.K&&this.K.AFc)return this.K.AFc.apply(this,arguments);else return C.
DeviceClass.Bvj.apply(this,arguments);},Bvj:function(E){},Bbx:function(Aq){this.
AFc(Aq);},AFJ:function(E){if(this.K&&this.K.AFJ)return this.K.AFJ.apply(this,arguments
);else return C.DeviceClass.BvK.apply(this,arguments);},BvK:function(E){},A0C:function(
Aq){this.AFJ(Aq);},UpdateMonitoring:function(AJ){if(this.AEv===AJ)return;this.AEv=
AJ;A.abo([this,this.ASL,this.A0C],0);},UpdateDataTable:function(Bci){var B;switch(
Bci){case 0:A.pe([B=this.An,B.Anm],this);break;case 1:A.pe([B=this.Bt,B.Anm],this
);break;case 3:A.pe([B=this.Pt,B.Anm],this);break;case 2:A.ab5("%s",O9);break;default:
A.ab5("%s%e",P_,Bci);}},AxG:function(){if(this.K&&this.K.AxG)return this.K.AxG.apply(
this,arguments);else return C.DeviceClass.BwG.apply(this,arguments);},BwG:function(
){},AhK:function(){if(this.K&&this.K.AhK)return this.K.AhK.apply(this,arguments);
else return C.DeviceClass.BwJ.apply(this,arguments);},BwJ:function(){},AhH:function(
){if(this.K&&this.K.AhH)return this.K.AhH.apply(this,arguments);else return C.DeviceClass.
BwH.apply(this,arguments);},BwH:function(){},AnY:function(){if(this.K&&this.K.AnY
)return this.K.AnY.apply(this,arguments);else return C.DeviceClass.BwK.apply(this
,arguments);},BwK:function(){},UpdateLanguage:function(AJ){if(this.Language===AJ
)return;this.Language=AJ;switch(AJ){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(
2);break;case 6:A._SetLanguage(3);break;case 25:A._SetLanguage(25);break;case 11:
A._SetLanguage(4);break;case 17:A._SetLanguage(5);break;case 10:A._SetLanguage(6
);break;case 12:A._SetLanguage(7);break;case 5:A._SetLanguage(8);break;case 3:A.
_SetLanguage(9);break;case 1:A._SetLanguage(10);break;case 8:A._SetLanguage(11);
break;case 18:A._SetLanguage(12);break;case 4:A._SetLanguage(13);break;case 19:A.
_SetLanguage(14);break;case 20:A._SetLanguage(15);break;case 26:A._SetLanguage(26
);break;case 15:A._SetLanguage(16);break;case 21:A._SetLanguage(17);break;case 22:
A._SetLanguage(18);break;case 23:A._SetLanguage(19);break;case 9:A._SetLanguage(
20);break;case 27:A._SetLanguage(27);break;case 2:A._SetLanguage(21);break;case 24:
A._SetLanguage(22);break;case 7:A._SetLanguage(23);break;case 16:A._SetLanguage(
24);break;default:A._SetLanguage(0);}A.abo([this,this.A8$,this.BbF],0);},UpdateTemperatureUnit:
function(AJ){if(this.TemperatureUnit===AJ)return;this.TemperatureUnit=AJ;A.abo([
this,this.ArA,this.Atm],0);},UpdateBrightness:function(AJ){if(this.AM6===AJ)return;
this.AM6=AJ;A.abo([this,this.A8V,this.Bbx],0);},SetSystemTime:function(Ah7){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BwE.apply(this,arguments);},BwE:function(Ah7){},Axz:function(){if(this.
K&&this.K.Axz)return this.K.Axz.apply(this,arguments);else return C.DeviceClass.
Bbd.apply(this,arguments);},Bbd:function(){},AGz:function(){if(this.K&&this.K.AGz
)return this.K.AGz.apply(this,arguments);else return C.DeviceClass.Bbb.apply(this
,arguments);},Bbb:function(){},Bo6:function(){},UpdateOverlayMenu:function(AJ){if(
this.OverlayMenu===AJ)return;this.OverlayMenu=AJ;A.abo([this,this.Awk,this.Ay0],
0);},Dv:function(E){if(this.K&&this.K.Dv)return this.K.Dv.apply(this,arguments);
else return C.DeviceClass.BvV.apply(this,arguments);},BvV:function(E){},Ay0:function(
Aq){this.Dv(Aq);},Axc:function(E){if(this.K&&this.K.Axc)return this.K.Axc.apply(
this,arguments);else return C.DeviceClass.Bwg.apply(this,arguments);},Bwg:function(
E){},BbR:function(Aq){this.Axc(Aq);},UpdateUnderTemp:function(AJ){if(this.AcF===
AJ)return;this.AcF=AJ;A.abo([this,this.A9E,this.BbR],0);},UpdateSyncState:function(
AJ){if(this.SyncState===AJ)return;this.SyncState=AJ;A.abo([this,this.ASW,this.A0K
],0);},Ab_:function(E){if(this.K&&this.K.Ab_)return this.K.Ab_.apply(this,arguments
);else return C.DeviceClass.Bv6.apply(this,arguments);},Bv6:function(E){A.ab5("%s"
,P$);},A0K:function(Aq){this.Ab_(Aq);},ADh:function(){if(this.K&&this.K.ADh)return this.
K.ADh.apply(this,arguments);else return C.DeviceClass.BuW.apply(this,arguments);
},BuW:function(){return A.jV;},UpdatePopup:function(K3,A1u,A1p,A1x){this.AZ(K3,A1u
,A1p,A1x,[this,this.BA_]);},PopupStateChanged:function(K3,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Bwt.apply(this,arguments);},Bwt:function(K3,Ae){},AF_:function(E){if(
this.K&&this.K.AF_)return this.K.AF_.apply(this,arguments);else return C.DeviceClass.
Bwi.apply(this,arguments);},Bwi:function(E){},BbS:function(Aq){this.AF_(Aq);},UpdateVibrationOnKeypressEnabled:
function(AJ){if(this.AsR===AJ)return;this.AsR=AJ;A.abo([this,this.A9F,this.BbS],
0);},Ae_:function(E){if(this.K&&this.K.Ae_)return this.K.Ae_.apply(this,arguments
);else return C.DeviceClass.Bwh.apply(this,arguments);},Bwh:function(E){},AI1:function(
Aq){this.Ae_(Aq);},UpdateVibrationOn:function(BcL){if(this.AVW===BcL)return;this.
AVW=BcL;A.abo([this,this.AEW,this.AI1],0);},AZ:function(K3,A1u,A1p,A1x,A1q){var Agn=
A._NewObject(C.PopupContext,0);Agn.Id=K3;Agn.Show=A1u;Agn.AkE=A1p;Agn.Ak0=A1x;Agn.
AGf=A1q;this.AnM.Trigger(Agn,false);},BA_:function(G){var Ar=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar)this.PopupStateChanged(Ar.Id,Ar.PopupState);},Aw2:function(E){
if(this.K&&this.K.Aw2)return this.K.Aw2.apply(this,arguments);else return C.DeviceClass.
Bv0.apply(this,arguments);},Bv0:function(E){},A0H:function(Aq){this.Aw2(Aq);},UpdateRatingMode:
function(AJ){if(this.RatingMode===AJ)return;this.RatingMode=AJ;A.abo([this,this.
AST,this.A0H],0);},Ae0:function(E){if(this.K&&this.K.Ae0)return this.K.Ae0.apply(
this,arguments);else return C.DeviceClass.Bvu.apply(this,arguments);},Bvu:function(
E){},Atl:function(Aq){this.Ae0(Aq);},UpdateFlashLightOn:function(Bcr){if(this.AmQ===
Bcr)return;this.AmQ=Bcr;A.abo([this,this.Arx,this.Atl],0);},Uw:function(E){if(this.
K&&this.K.Uw)return this.K.Uw.apply(this,arguments);else return C.DeviceClass.Bv$.
apply(this,arguments);},Bv$:function(E){},A0L:function(Aq){this.Uw(Aq);},UpdateTopLightOn:
function(BcG){if(this.AVA===BcG)return;this.AVA=BcG;A.abo([this,this.ASY,this.A0L
],0);},WJ:function(E){if(this.K&&this.K.WJ)return this.K.WJ.apply(this,arguments
);else return C.DeviceClass.BvZ.apply(this,arguments);},BvZ:function(E){},BwX:function(
Aq){this.WJ(Aq);},UpdateRGBTopLight:function(BcB){if(this.AUl===BcB)return;this.
AUl=BcB;A.abo([this,this.BlL,this.BwX],0);},Awr:function(E){if(this.K&&this.K.Awr
)return this.K.Awr.apply(this,arguments);else return C.DeviceClass.Bvc.apply(this
,arguments);},Bvc:function(E){},BwQ:function(Aq){this.Awr(Aq);},UpdateAutoRegistrationMode:
function(Bce){if(this.AutoRegistrationMode===Bce)return;this.AutoRegistrationMode=
Bce;A.abo([this,this.Bla,this.BwQ],0);},Ar4:function(E){if(this.K&&this.K.Ar4)return this.
K.Ar4.apply(this,arguments);else return C.DeviceClass.Bv2.apply(this,arguments);
},Bv2:function(E){A.ab5("%s",CR);},A0J:function(Aq){this.Ar4(Aq);},UpdateScanTransponder:
function(K3,BcI,BcH){if(((this.OY.Id===K3)&&(this.OY.TransponderType===BcI))&&(this.
OY.TransponderProtocol===BcH))return;this.OY.OnSetId(K3);this.OY.ATY(BcI);this.OY.
ATX(BcH);A.abo([this,this.ASV,this.A0J],0);},OS:function(E){if(this.K&&this.K.OS
)return this.K.OS.apply(this,arguments);else return C.DeviceClass.Bvm.apply(this
,arguments);},Bvm:function(E){},U5:function(Aq){this.OS(Aq);},UpdateDigitsID:function(
Bcm){if(this.A3===Bcm)return;this.A3=Bcm;A.abo([this,this.Ul,this.U5],0);},PW:function(
E){if(this.K&&this.K.PW)return this.K.PW.apply(this,arguments);else return C.DeviceClass.
BvU.apply(this,arguments);},BvU:function(E){},U6:function(Aq){this.PW(Aq);},UpdateOffsetID:
function(Bcx){if(this.AF===Bcx)return;this.AF=Bcx;A.abo([this,this.Un,this.U6],0
);},AGc:function(E){if(this.K&&this.K.AGc)return this.K.AGc.apply(this,arguments
);else return C.DeviceClass.Bwp.apply(this,arguments);},Bwp:function(E){A.ab5("%s"
,Fc);},AI2:function(Aq){this.AGc(Aq);},UpdateWeightValue:function(AJ){if(this.K0===
AJ)return;this.K0=AJ;A.abo([this,this.AEX,this.AI2],0);},AwP:function(E){if(this.
K&&this.K.AwP)return this.K.AwP.apply(this,arguments);else return C.DeviceClass.
BvF.apply(this,arguments);},BvF:function(E){},A0B:function(Aq){this.AwP(Aq);},UpdateMassUnit:
function(AJ){if(this.MassUnit===AJ)return;this.MassUnit=AJ;A.abo([this,this.ASK,
this.A0B],0);},ArE:function(E){if(this.K&&this.K.ArE)return this.K.ArE.apply(this
,arguments);else return C.DeviceClass.Ba9.apply(this,arguments);},Ba9:function(E
){},Bbm:function(Aq){this.ArE(Aq);},ArF:function(E){if(this.K&&this.K.ArF)return this.
K.ArF.apply(this,arguments);else return C.DeviceClass.Ba_.apply(this,arguments);
},Ba_:function(E){},A0w:function(Aq){this.ArF(Aq);},UpdateActiveActions:function(
AJ){if(this.Pp===AJ)return;this.Pp=AJ;A.abo([this,this.A8F,this.Bbm],0);},UpdateActiveActionsOrder:
function(AJ){if(this.AuE===AJ)return;this.AuE=AJ;A.abo([this,this.ASx,this.A0w],
0);},Akq:function(E){if(this.K&&this.K.Akq)return this.K.Akq.apply(this,arguments
);else return C.DeviceClass.Ba$.apply(this,arguments);},Ba$:function(E){},Bbu:function(
Aq){this.Akq(Aq);},UpdateAutoActions:function(AJ){if(this.AutoActions===AJ)return;
this.AutoActions=AJ;A.abo([this,this.A8Q,this.Bbu],0);},AGZ:function(){if(this.K&&
this.K.AGZ)return this.K.AGZ.apply(this,arguments);else return C.DeviceClass.BwI.
apply(this,arguments);},BwI:function(){},AsH:function(){if(this.K&&this.K.AsH)return this.
K.AsH.apply(this,arguments);else return C.DeviceClass.BwM.apply(this,arguments);
},BwM:function(){},EC:function(E){if(this.K&&this.K.EC)return this.K.EC.apply(this
,arguments);else return C.DeviceClass.Bu$.apply(this,arguments);},Bu$:function(E
){},BwP:function(Aq){this.EC(Aq);},UpdateAnimalType:function(Eo){if(this.AnimalType===
Eo)return;this.AnimalType=Eo;A.abo([this,this.PV,this.BwP],0);},Axd:function(E){
if(this.K&&this.K.Axd)return this.K.Axd.apply(this,arguments);else return C.DeviceClass.
Bwn.apply(this,arguments);},Bwn:function(E){},BbX:function(Aq){this.Axd(Aq);},UpdateWeightRecordingMode:
function(BcN){if(this.WeightRecordingMode===BcN)return;this.WeightRecordingMode=
BcN;A.abo([this,this.A9N,this.BbX],0);},AFO:function(E){if(this.K&&this.K.AFO)return this.
K.AFO.apply(this,arguments);else return C.DeviceClass.BvW.apply(this,arguments);
},BvW:function(E){A.ab5("%s",L8);},A0F:function(Aq){this.AFO(Aq);},UpdatePredictedTempValue:
function(AJ){if(this.AGm===AJ)return;this.AGm=AJ;A.abo([this,this.ASQ,this.A0F],
0);},SV:function(Mc){if(this.K&&this.K.SV)return this.K.SV.apply(this,arguments);
else return C.DeviceClass.BwD.apply(this,arguments);},BwD:function(Mc){},AFj:function(
E){if(this.K&&this.K.AFj)return this.K.AFj.apply(this,arguments);else return C.DeviceClass.
Bvl.apply(this,arguments);},Bvl:function(E){},AIV:function(Aq){this.AFj(Aq);},UpdateDemoMode:
function(AJ){if(this.HF===AJ)return;this.HF=AJ;A.abo([this,this.AEO,this.AIV],0);
},AE3:function(E){if(this.K&&this.K.AE3)return this.K.AE3.apply(this,arguments);
else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(E){},Bbq:function(
Aq){this.AE3(Aq);},UpdateAgeRegistration:function(Bcw){if(this.AdR===Bcw)return;
this.AdR=Bcw;A.abo([this,this.A8K,this.Bbq],0);},Axe:function(E){if(this.K&&this.
K.Axe)return this.K.Axe.apply(this,arguments);else return C.DeviceClass.Bwo.apply(
this,arguments);},Bwo:function(E){},BbY:function(Aq){this.Axe(Aq);},UpdateWeightRecordingScope:
function(BcC){if(this.WeightRecordingScope===BcC)return;this.WeightRecordingScope=
BcC;A.abo([this,this.A9O,this.BbY],0);},J0:function(E){if(this.K&&this.K.J0)return this.
K.J0.apply(this,arguments);else return C.DeviceClass.Bvy.apply(this,arguments);}
,Bvy:function(E){},A0A:function(Aq){this.J0(Aq);},UpdateGender:function(L$){if(this.
Gender===L$)return;this.Gender=L$;A.abo([this,this.WE,this.A0A],0);},ArT:function(
E){if(this.K&&this.K.ArT)return this.K.ArT.apply(this,arguments);else return C.DeviceClass.
BvA.apply(this,arguments);},BvA:function(E){},AyW:function(Aq){this.ArT(Aq);},UpdateIDLastUsedMale:
function(Rr){if(this.Aq4===Rr)return;this.Aq4=Rr;A.abo([this,this.Awd,this.AyW],
0);},ArS:function(E){if(this.K&&this.K.ArS)return this.K.ArS.apply(this,arguments
);else return C.DeviceClass.Bvz.apply(this,arguments);},Bvz:function(E){},AyV:function(
Aq){this.ArS(Aq);},UpdateIDLastUsedFemale:function(Rr){if(this.Aq3===Rr)return;this.
Aq3=Rr;A.abo([this,this.Awc,this.AyV],0);},Zs:function(E){if(this.K&&this.K.Zs)return this.
K.Zs.apply(this,arguments);else return C.DeviceClass.Bu_.apply(this,arguments);}
,Bu_:function(E){},AIT:function(Aq){this.Zs(Aq);},UpdateAnimalListContent:function(
AJ){if(this.Kn===AJ)return;this.Kn=AJ;A.abo([this,this.AEL,this.AIT],0);},AE5:function(
E){if(this.K&&this.K.AE5)return this.K.AE5.apply(this,arguments);else return C.DeviceClass.
Bu6.apply(this,arguments);},Bu6:function(E){},Bbr:function(Aq){this.AE5(Aq);},UpdateAlarmListAction:
function(AJ){if(this.AMe===AJ)return;this.AMe=AJ;A.abo([this,this.A8M,this.Bbr],
0);},AFm:function(E){if(this.K&&this.K.AFm)return this.K.AFm.apply(this,arguments
);else return C.DeviceClass.Bvt.apply(this,arguments);},Bvt:function(E){},BbA:function(
Aq){this.AFm(Aq);},UpdateFlashLightInMeasureState:function(Bcs){if(this.AmP===Bcs
)return;this.AmP=Bcs;A.abo([this,this.A8Z,this.BbA],0);},AeV:function(E){if(this.
K&&this.K.AeV)return this.K.AeV.apply(this,arguments);else return C.DeviceClass.
Bu9.apply(this,arguments);},Bu9:function(E){},AIS:function(Aq){this.AeV(Aq);},UpdateAnimalInfoContent:
function(AJ){if(this.D9===AJ)return;this.D9=AJ;A.abo([this,this.AEK,this.AIS],0);
},AGb:function(E){if(this.K&&this.K.AGb)return this.K.AGb.apply(this,arguments);
else return C.DeviceClass.Bwj.apply(this,arguments);},Bwj:function(E){},BbT:function(
Aq){this.AGb(Aq);},UpdateWatchListAction:function(AJ){if(this.AVY===AJ)return;this.
AVY=AJ;A.abo([this,this.A9J,this.BbT],0);},AFo:function(E){if(this.K&&this.K.AFo
)return this.K.AFo.apply(this,arguments);else return C.DeviceClass.Bvv.apply(this
,arguments);},Bvv:function(E){},BbC:function(Aq){this.AFo(Aq);},UpdateFreshCowListAction:
function(AJ){if(this.AOF===AJ)return;this.AOF=AJ;A.abo([this,this.A81,this.BbC],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.Bwv.apply(this
,arguments);},Bwv:function(G){},BGQ:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.Bwx.apply(this,arguments);},Bwx:function(
G){},BGS:function(s){this.ResetAutoActions(s);},Awp:function(E){if(this.K&&this.
K.Awp)return this.K.Awp.apply(this,arguments);else return C.DeviceClass.Bva.apply(
this,arguments);},Bva:function(E){},Bbs:function(Aq){this.Awp(Aq);},Ar7:function(
E){if(this.K&&this.K.Ar7)return this.K.Ar7.apply(this,arguments);else return C.DeviceClass.
Bv9.apply(this,arguments);},Bv9:function(E){},BbO:function(Aq){this.Ar7(Aq);},Ar8:
function(E){if(this.K&&this.K.Ar8)return this.K.Ar8.apply(this,arguments);else return C.
DeviceClass.Bv_.apply(this,arguments);},Bv_:function(E){},BbP:function(Aq){this.
Ar8(Aq);},Ass:function(G){if(this.K&&this.K.Ass)return this.K.Ass.apply(this,arguments
);else return C.DeviceClass.BwA.apply(this,arguments);},BwA:function(G){},BGV:function(
s){this.Ass(s);},UpdateTemperaturesLowString:function(AJ){if(this.AG7===AJ)return;
this.AG7=AJ;A.abo([this,this.A9A,this.BbP],0);},UpdateTemperaturesHighString:function(
AJ){if(this.AG6===AJ)return;this.AG6=AJ;A.abo([this,this.A9z,this.BbO],0);},UpdateAnimalTypesString:
function(AJ){if(this.ABX===AJ)return;this.ABX=AJ;A.abo([this,this.A8O,this.Bbs],
0);},AwJ:function(E){if(this.K&&this.K.AwJ)return this.K.AwJ.apply(this,arguments
);else return C.DeviceClass.Bvx.apply(this,arguments);},Bvx:function(E){},BbE:function(
Aq){this.AwJ(Aq);},UpdateFreshCowsHideMeasured:function(AJ){if(this.AqR===AJ)return;
this.AqR=AJ;A.abo([this,this.A83,this.BbE],0);},ArZ:function(E){if(this.K&&this.
K.ArZ)return this.K.ArZ.apply(this,arguments);else return C.DeviceClass.BvQ.apply(
this,arguments);},BvQ:function(E){},BbJ:function(Aq){this.ArZ(Aq);},UpdateNaisIdLastUsedMale:
function(Qg){if(this.AEx===Qg)return;this.AEx=Qg;A.abo([this,this.A9h,this.BbJ],
0);},ArY:function(E){if(this.K&&this.K.ArY)return this.K.ArY.apply(this,arguments
);else return C.DeviceClass.BvP.apply(this,arguments);},BvP:function(E){},BbI:function(
Aq){this.ArY(Aq);},UpdateNaisIdLastUsedFemale:function(Qg){if(this.AEw===Qg)return;
this.AEw=Qg;A.abo([this,this.A9g,this.BbI],0);},AwW:function(E){if(this.K&&this.
K.AwW)return this.K.AwW.apply(this,arguments);else return C.DeviceClass.BvN.apply(
this,arguments);},BvN:function(E){},AyY:function(Aq){this.AwW(Aq);},UpdateNaisIdIncrementMale:
function(Alr){if(this.AR6===Alr)return;this.AR6=Alr;A.abo([this,this.Awh,this.AyY
],0);},AwV:function(E){if(this.K&&this.K.AwV)return this.K.AwV.apply(this,arguments
);else return C.DeviceClass.BvM.apply(this,arguments);},BvM:function(E){},AyX:function(
Aq){this.AwV(Aq);},UpdateNaisIdIncrementFemale:function(Alr){if(this.AR5===Alr)return;
this.AR5=Alr;A.abo([this,this.Awg,this.AyX],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bbe.apply(this,arguments);},Bbe:function(){},Anv:function(E
){if(this.K&&this.K.Anv)return this.K.Anv.apply(this,arguments);else return C.DeviceClass.
Bvg.apply(this,arguments);},Bvg:function(E){},Bbw:function(Aq){this.Anv(Aq);},UpdateBootloaderMessage:
function(AJ){if(this.Aqr===AJ)return;this.Aqr=AJ;A.abo([this,this.A8U,this.Bbw],
0);},AE0:function(E){if(this.K&&this.K.AE0)return this.K.AE0.apply(this,arguments
);else return C.DeviceClass.Bu0.apply(this,arguments);},Bu0:function(E){},Bbk:function(
Aq){this.AE0(Aq);},UpdateActionListAction:function(AJ){if(this.ABP===AJ)return;this.
ABP=AJ;A.abo([this,this.A8D,this.Bbk],0);},Awn:function(E){if(this.K&&this.K.Awn
)return this.K.Awn.apply(this,arguments);else return C.DeviceClass.Bu1.apply(this
,arguments);},Bu1:function(E){},Bbl:function(Aq){this.Awn(Aq);},UpdateActionListHideMeasured:
function(AJ){if(this.Aqb===AJ)return;this.Aqb=AJ;A.abo([this,this.A8E,this.Bbl],
0);},Uq:function(E){if(this.K&&this.K.Uq)return this.K.Uq.apply(this,arguments);
else return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:function(E){},Aou:function(
Aq){this.Uq(Aq);},UpdateAnimalIdGenerationMethod:function(BcS){if(this.In===BcS)
return;this.In=BcS;A.abo([this,this.Ano,this.Aou],0);},AwB:function(E){if(this.K&&
this.K.AwB)return this.K.AwB.apply(this,arguments);else return C.DeviceClass.Bvn.
apply(this,arguments);},Bvn:function(E){},A0y:function(Aq){this.AwB(Aq);},UpdateDirectionOfCountingFemale:
function(All){if(this.ACM===All)return;this.ACM=All;A.abo([this,this.ASD,this.A0y
],0);},AwC:function(E){if(this.K&&this.K.AwC)return this.K.AwC.apply(this,arguments
);else return C.DeviceClass.Bvo.apply(this,arguments);},Bvo:function(E){},A0z:function(
Aq){this.AwC(Aq);},UpdateDirectionOfCountingMale:function(All){if(this.ACN===All
)return;this.ACN=All;A.abo([this,this.ASE,this.A0z],0);},AwD:function(E){if(this.
K&&this.K.AwD)return this.K.AwD.apply(this,arguments);else return C.DeviceClass.
Bvp.apply(this,arguments);},Bvp:function(E){},AIW:function(Aq){this.AwD(Aq);},UpdateDirectionOfCountingUnisex:
function(All){if(this.Au3===All)return;this.Au3=All;A.abo([this,this.AEP,this.AIW
],0);},ArU:function(E){if(this.K&&this.K.ArU)return this.K.ArU.apply(this,arguments
);else return C.DeviceClass.BvB.apply(this,arguments);},BvB:function(E){},Aov:function(
Aq){this.ArU(Aq);},UpdateIDLastUsedUnisex:function(Rr){if(this.AjR===Rr)return;this.
AjR=Rr;A.abo([this,this.Anr,this.Aov],0);},Ar0:function(E){if(this.K&&this.K.Ar0
)return this.K.Ar0.apply(this,arguments);else return C.DeviceClass.BvR.apply(this
,arguments);},BvR:function(E){},A0D:function(Aq){this.Ar0(Aq);},UpdateNaisIdLastUsedUnisex:
function(Qg){if(this.Av1===Qg)return;this.Av1=Qg;A.abo([this,this.ASM,this.A0D],
0);},AwX:function(E){if(this.K&&this.K.AwX)return this.K.AwX.apply(this,arguments
);else return C.DeviceClass.BvO.apply(this,arguments);},BvO:function(E){},AyZ:function(
Aq){this.AwX(Aq);},UpdateNaisIdIncrementUnisex:function(Alr){if(this.AR7===Alr)return;
this.AR7=Alr;A.abo([this,this.Awi,this.AyZ],0);},Aks:function(E){if(this.K&&this.
K.Aks)return this.K.Aks.apply(this,arguments);else return C.DeviceClass.Bvr.apply(
this,arguments);},Bvr:function(E){},AyU:function(Aq){this.Aks(Aq);},UpdateEartagNrAssignmentMode:
function(Alm){if(this.EartagNrAssignmentMode===Alm)return;this.EartagNrAssignmentMode=
Alm;A.abo([this,this.Awb,this.AyU],0);},N7:function(E){if(this.K&&this.K.N7)return this.
K.N7.apply(this,arguments);else return C.DeviceClass.Bvi.apply(this,arguments);}
,Bvi:function(E){},BwS:function(Aq){this.N7(Aq);},UpdateBreed:function(AcX){if(this.
Breed===AcX)return;this.Breed=AcX;A.abo([this,this.Av9,this.BwS],0);},AFH:function(
E){if(this.K&&this.K.AFH)return this.K.AFH.apply(this,arguments);else return C.DeviceClass.
BvJ.apply(this,arguments);},BvJ:function(E){},BwV:function(Aq){this.AFH(Aq);},UpdateMiddlewareVersions:
function(Qi,A1l,A1m,A1t,A1a){this.SE.OnSetTimestamp(Qi);this.SE.AFC(A1l);this.SE.
AFI(A1m);this.SE.AFS(A1t);this.SE.AFi(A1a);A.abo([this,this.BlF,this.BwV],0);},AFB:
function(E){if(this.K&&this.K.AFB)return this.K.AFB.apply(this,arguments);else return C.
DeviceClass.BvD.apply(this,arguments);},BvD:function(E){},BwU:function(Aq){this.
AFB(Aq);},UpdateMainboardVersions:function(Qi,A1j,A1k,A1i,A1z,A1A,A1y){this.Q2.OnSetTimestamp(
Qi);this.Q2.AFz(A1j);this.Q2.AFA(A1k);this.Q2.AFy(A1i);this.Q2.AF6(A1z);this.Q2.
AF7(A1A);this.Q2.AF5(A1y);A.abo([this,this.BlD,this.BwU],0);},AF8:function(E){if(
this.K&&this.K.AF8)return this.K.AF8.apply(this,arguments);else return C.DeviceClass.
Bwa.apply(this,arguments);},Bwa:function(E){},Bw1:function(Aq){this.AF8(Aq);},UpdateTorchboardVersions:
function(Qi,A1j,A1k,A1i,A1z,A1A,A1y){this.S5.OnSetTimestamp(Qi);this.S5.AFz(A1j);
this.S5.AFA(A1k);this.S5.AFy(A1i);this.S5.AF6(A1z);this.S5.AF7(A1A);this.S5.AF5(
A1y);A.abo([this,this.Bl3,this.Bw1],0);},AE_:function(E){if(this.K&&this.K.AE_)return this.
K.AE_.apply(this,arguments);else return C.DeviceClass.Bvh.apply(this,arguments);
},Bvh:function(E){},BwR:function(Aq){this.AE_(Aq);},UpdateBootloaderVersions:function(
Qi,A1l,A1m,A1t,A1a){this.R5.OnSetTimestamp(Qi);this.R5.AFC(A1l);this.R5.AFI(A1m);
this.R5.AFS(A1t);this.R5.AFi(A1a);A.abo([this,this.Bld,this.BwR],0);},AFk:function(
E){if(this.K&&this.K.AFk)return this.K.AFk.apply(this,arguments);else return C.DeviceClass.
Bvq.apply(this,arguments);},Bvq:function(E){},Bbz:function(Aq){this.AFk(Aq);},UpdateDryCowListAction:
function(AJ){if(this.AN3===AJ)return;this.AN3=AJ;A.abo([this,this.A8X,this.Bbz],
0);},AJL:function(A1b){if(this.K&&this.K.AJL)return this.K.AJL.apply(this,arguments
);else return C.DeviceClass.Bxb.apply(this,arguments);},Bxb:function(A1b){return false;
},AE8:function(E){if(this.K&&this.K.AE8)return this.K.AE8.apply(this,arguments);
else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(E){},AIU:function(
Aq){this.AE8(Aq);},UpdateBirthListView:function(AJ){if(this.Aqp===AJ)return;this.
Aqp=AJ;A.abo([this,this.AEM,this.AIU],0);},BatchResetBirthNoticePending:function(
){var O;var AiV=0;var Adh=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOJ();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B8();O++){A._GetAutoObject(C.Helper).GQ(O);A._GetAutoObject(C.Helper
).W.Ae4(false);A._GetAutoObject(C.Helper).W.Cr(A._GetAutoObject(C.Device).An);AiV++;
}A._GetAutoObject(C.Device).An.Bk(Adh);return AiV;},UpdateTransferProgress:function(
AJ){if(this.AxP===AJ)return;this.AxP=AJ;A.abo([this,this.ASZ,this.A0M],0);},AF9:
function(E){if(this.K&&this.K.AF9)return this.K.AF9.apply(this,arguments);else return C.
DeviceClass.Bwb.apply(this,arguments);},Bwb:function(E){A.ab5("%s",Qa);},A0M:function(
Aq){this.AF9(Aq);},UpdateTransferTarget:function(AJ){if(this.Afr===AJ)return;this.
Afr=AJ;A.abo([this,this.A9D,this.BbQ],0);},Ar9:function(E){if(this.K&&this.K.Ar9
)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.Bwc.apply(this
,arguments);},Bwc:function(E){A.ab5("%s",J9);},BbQ:function(Aq){this.Ar9(Aq);},AsG:
function(){if(this.K&&this.K.AsG)return this.K.AsG.apply(this,arguments);else return C.
DeviceClass.BwL.apply(this,arguments);},BwL:function(){},Aw1:function(E){if(this.
K&&this.K.Aw1)return this.K.Aw1.apply(this,arguments);else return C.DeviceClass.
BvX.apply(this,arguments);},BvX:function(E){},A0G:function(Aq){this.Aw1(Aq);},UpdatePremisesID:
function(Rr){if(this.OX===Rr)return;this.OX=Rr;A.abo([this,this.ASR,this.A0G],0);
},AwU:function(E){if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments);
else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},AIZ:function(
Aq){this.AwU(Aq);},UpdateMotherSelectionDriedOffFilter:function(AJ){if(this.AbW===
AJ)return;this.AbW=AJ;A.abo([this,this.AET,this.AIZ],0);},AFp:function(E){if(this.
K&&this.K.AFp)return this.K.AFp.apply(this,arguments);else return C.DeviceClass.
Bvw.apply(this,arguments);},Bvw:function(E){},BbD:function(Aq){this.AFp(Aq);},UpdateFreshCowSpan:
function(AJ){if(this.AqQ===AJ)return;this.AqQ=AJ;A.abo([this,this.A82,this.BbD],
0);},UpdateUSBDevice:function(BcJ,BcK,BcA){if(((this.P4.Z3===BcJ)&&(this.P4.AsQ===
BcK))&&(this.P4.Asj===BcA))return;this.P4.ATZ(BcJ);this.P4.AT1(BcK);this.P4.ATB(
BcA);A.abo([this,this.Uo,this.U8],0);},Axb:function(E){if(this.K&&this.K.Axb)return this.
K.Axb.apply(this,arguments);else return C.DeviceClass.Bwf.apply(this,arguments);
},Bwf:function(E){A.ab5("%s",E6);},U8:function(Aq){this.Axb(Aq);},AxF:function(){
if(this.K&&this.K.AxF)return this.K.AxF.apply(this,arguments);else return C.DeviceClass.
BwF.apply(this,arguments);},BwF:function(){},Arh:function(){if(this.K&&this.K.Arh
)return this.K.Arh.apply(this,arguments);else return C.DeviceClass.BuZ.apply(this
,arguments);},BuZ:function(){return false;},AqB:function(){if(this.K&&this.K.AqB
)return this.K.AqB.apply(this,arguments);else return C.DeviceClass.BuU.apply(this
,arguments);},BuU:function(){},AFV:function(E){if(this.K&&this.K.AFV)return this.
K.AFV.apply(this,arguments);else return C.DeviceClass.Bv3.apply(this,arguments);
},Bv3:function(E){},BwY:function(Aq){this.AFV(Aq);},UpdateSerialNumber:function(
AJ){if(this.AhG===AJ)return;this.AhG=AJ;A.abo([this,this.BlS,this.BwY],0);},Awo:
function(E){if(this.K&&this.K.Awo)return this.K.Awo.apply(this,arguments);else return C.
DeviceClass.Bu7.apply(this,arguments);},Bu7:function(E){},A0x:function(Aq){this.
Awo(Aq);},UpdateAnimalIdAutoGenerationMethod:function(BcR){if(this.Agx===BcR)return;
this.Agx=BcR;A.abo([this,this.ASy,this.A0x],0);},ACA:function(){return false;},AGA:
function(){return false;},AFX:function(E){if(this.K&&this.K.AFX)return this.K.AFX.
apply(this,arguments);else return C.DeviceClass.Bv4.apply(this,arguments);},Bv4:
function(E){},BbN:function(Aq){this.AFX(Aq);},UpdateShutdownTimer:function(AJ){if(
this.AU9===AJ)return;this.AU9=AJ;A.abo([this,this.A9w,this.BbN],0);},Ast:function(
G){if(this.K&&this.K.Ast)return this.K.Ast.apply(this,arguments);else return C.DeviceClass.
BwB.apply(this,arguments);},BwB:function(G){},BGW:function(s){this.Ast(s);},Asa:
function(E){if(this.K&&this.K.Asa)return this.K.Asa.apply(this,arguments);else return C.
DeviceClass.Bwl.apply(this,arguments);},Bwl:function(E){},BbV:function(Aq){this.
Asa(Aq);},Asb:function(E){if(this.K&&this.K.Asb)return this.K.Asb.apply(this,arguments
);else return C.DeviceClass.Bwm.apply(this,arguments);},Bwm:function(E){},BbW:function(
Aq){this.Asb(Aq);},UpdateWeightGainsLowString:function(AJ){if(this.AHr===AJ)return;
this.AHr=AJ;A.abo([this,this.A9M,this.BbW],0);},UpdateWeightGainsHighString:function(
AJ){if(this.AHq===AJ)return;this.AHq=AJ;A.abo([this,this.A9L,this.BbV],0);},Awq:
function(E){if(this.K&&this.K.Awq)return this.K.Awq.apply(this,arguments);else return C.
DeviceClass.Bvb.apply(this,arguments);},Bvb:function(E){},Bbt:function(Aq){this.
Awq(Aq);},UpdateAnimalTypesWeightGainsString:function(AJ){if(this.ABY===AJ)return;
this.ABY=AJ;A.abo([this,this.A8P,this.Bbt],0);},Ar$:function(E){if(this.K&&this.
K.Ar$)return this.K.Ar$.apply(this,arguments);else return C.DeviceClass.Bwk.apply(
this,arguments);},Bwk:function(E){},BbU:function(Aq){this.Ar$(Aq);},Asc:function(
E){if(this.K&&this.K.Asc)return this.K.Asc.apply(this,arguments);else return C.DeviceClass.
Bwq.apply(this,arguments);},Bwq:function(E){},BbZ:function(Aq){this.Asc(Aq);},UpdateWeightValueBirthString:
function(AJ){if(this.AHu===AJ)return;this.AHu=AJ;A.abo([this,this.A9P,this.BbZ],
0);},UpdateWeightGainsAverageString:function(AJ){if(this.AHp===AJ)return;this.AHp=
AJ;A.abo([this,this.A9K,this.BbU],0);},AwE:function(E){if(this.K&&this.K.AwE)return this.
K.AwE.apply(this,arguments);else return C.DeviceClass.Bvs.apply(this,arguments);
},Bvs:function(E){},BwT:function(Aq){this.AwE(Aq);},UpdateEvaluationAnimalType:function(
Eo){if(this.ACU===Eo)return;this.ACU=Eo;A.abo([this,this.Bln,this.BwT],0);},UpdateStartScreen:
function(AJ){if(this.AxH===AJ)return;this.AxH=AJ;A.abo([this,this.BlT,this.BwZ],
0);},Aw5:function(E){if(this.K&&this.K.Aw5)return this.K.Aw5.apply(this,arguments
);else return C.DeviceClass.Bv5.apply(this,arguments);},Bv5:function(E){},BwZ:function(
Aq){this.Aw5(Aq);},AD_:function(){if(this.K&&this.K.AD_)return this.K.AD_.apply(
this,arguments);else return C.DeviceClass.BuX.apply(this,arguments);},BuX:function(
){return 1;},AD$:function(){if(this.K&&this.K.AD$)return this.K.AD$.apply(this,arguments
);else return C.DeviceClass.BuY.apply(this,arguments);},BuY:function(){return 1;
},GetCommitCount:function(){return 2218;},GetCommitEpoch:function(){return 1747383260;
},GetCommitHash:function(){return A.kR.Bib;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 13;},AFG:
function(E){if(this.K&&this.K.AFG)return this.K.AFG.apply(this,arguments);else return C.
DeviceClass.BvH.apply(this,arguments);},BvH:function(E){},BbH:function(Aq){this.
AFG(Aq);},UpdateMaximumAgeNewOnFarm:function(AJ){if(this.AvW===AJ)return;this.AvW=
AJ;A.abo([this,this.A9f,this.BbH],0);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.
K.Aw$.apply(this,arguments);else return C.DeviceClass.Bwd.apply(this,arguments);
},Bwd:function(E){},A0N:function(Aq){this.Aw$(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Azc){if(this.Ak1===Azc)return;this.Ak1=Azc;A.abo([this,this.AS0,this.A0N
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiV=0;var Adh=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).Avr();A._GetAutoObject(C.Device
).An.Bk(Be);for(O=0;O<A._GetAutoObject(C.Device).An.B8();O++){A._GetAutoObject(C.
Helper).GQ(O);A._GetAutoObject(C.Helper).W.Ae4(false);A._GetAutoObject(C.Helper).
W.Cr(A._GetAutoObject(C.Device).An);AiV++;}A._GetAutoObject(C.Device).An.Bk(Adh);
return AiV;},BnG:function(E){},UpdateMassRecordingAutomatic:function(AJ){if(this.
ARS===AJ)return;this.ARS=AJ;A.abo([this,this.BlE,this.BnG],0);},Nt:function(E){if(
this.K&&this.K.Nt)return this.K.Nt.apply(this,arguments);else return C.DeviceClass.
Bwr.apply(this,arguments);},Bwr:function(E){},Bw2:function(Aq){this.Nt(Aq);},UpdateWhereAbouts:
function(AfN){if(this.WhereAbouts===AfN)return;this.WhereAbouts=AfN;A.abo([this,
this.Awl,this.Bw2],0);},ArH:function(E){if(this.K&&this.K.ArH)return this.K.ArH.
apply(this,arguments);else return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:
function(E){},Bbn:function(Aq){this.ArH(Aq);},ArI:function(E){if(this.K&&this.K.
ArI)return this.K.ArI.apply(this,arguments);else return C.DeviceClass.Bu3.apply(
this,arguments);},Bu3:function(E){},Bbo:function(Aq){this.ArI(Aq);},UpdateActiveMassRecordingFields:
function(AJ){if(this.ABQ===AJ)return;this.ABQ=AJ;A.abo([this,this.A8G,this.Bbn],
0);},UpdateActiveMassRecordingFieldsOrder:function(AJ){if(this.ABR===AJ)return;this.
ABR=AJ;A.abo([this,this.A8H,this.Bbo],0);},Asq:function(G){if(this.K&&this.K.Asq
)return this.K.Asq.apply(this,arguments);else return C.DeviceClass.Bww.apply(this
,arguments);},Bww:function(G){},BGR:function(s){this.Asq(s);},AFE:function(E){if(
this.K&&this.K.AFE)return this.K.AFE.apply(this,arguments);else return C.DeviceClass.
BvE.apply(this,arguments);},BvE:function(E){},AIX:function(Aq){this.AFE(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AJ){if(this.AeO===AJ)return;this.AeO=AJ;A.abo([this,this.AEQ,this.AIX],
0);},AFD:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AJ){if(this.AvU===AJ)return;this.AvU=AJ;A.abo([this,this.A9d,this.AFD],
0);},X5:function(){if(this.K&&this.K.X5)return this.K.X5.apply(this,arguments);else
return C.DeviceClass.BuS.apply(this,arguments);},BuS:function(){return false;},Aqm:
function(){if(this.K&&this.K.Aqm)return this.K.Aqm.apply(this,arguments);else return C.
DeviceClass.BuR.apply(this,arguments);},BuR:function(){return false;},Aql:function(
){if(this.K&&this.K.Aql)return this.K.Aql.apply(this,arguments);else return C.DeviceClass.
BuQ.apply(this,arguments);},BuQ:function(){return false;},Aqn:function(){if(this.
K&&this.K.Aqn)return this.K.Aqn.apply(this,arguments);else return C.DeviceClass.
BuT.apply(this,arguments);},BuT:function(){return false;},AwR:function(E){if(this.
K&&this.K.AwR)return this.K.AwR.apply(this,arguments);else return C.DeviceClass.
BvG.apply(this,arguments);},BvG:function(E){},BbG:function(Aq){this.AwR(Aq);},UpdateMaxWeightValuePrecision:
function(AJ){if(this.OR===AJ)return;this.OR=AJ;A.abo([this,this.A9e,this.BbG],0);
},AwY:function(E){if(this.K&&this.K.AwY)return this.K.AwY.apply(this,arguments);
else return C.DeviceClass.BvS.apply(this,arguments);},BvS:function(E){},BbK:function(
Aq){this.AwY(Aq);},UpdateNoNaisIdListActions:function(AJ){if(this.ASh===AJ)return;
this.ASh=AJ;A.abo([this,this.A9i,this.BbK],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.Bwy.apply(this,arguments);},Bwy:
function(G){},BGT:function(s){this.ResetNoNaisIdListActions(s);},AwZ:function(E){
if(this.K&&this.K.AwZ)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.
BvT.apply(this,arguments);},BvT:function(E){},BbL:function(Aq){this.AwZ(Aq);},UpdateNoTransponderListActions:
function(AJ){if(this.ASm===AJ)return;this.ASm=AJ;A.abo([this,this.A9j,this.BbL],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.Bwz.apply(this,arguments);},Bwz:function(G){},BGU:function(s){this.ResetNoTransponderListActions(
s);},Axg:function(E){if(this.K&&this.K.Axg)return this.K.Axg.apply(this,arguments
);else return C.DeviceClass.Bws.apply(this,arguments);},Bws:function(E){},Bb0:function(
Aq){this.Axg(Aq);},UpdateYoungNoTransponderListActions:function(AJ){if(this.AWb===
AJ)return;this.AWb=AJ;A.abo([this,this.A9R,this.Bb0],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BwC.apply(this,arguments);},BwC:
function(G){},BGX:function(s){this.ResetYoungNoTransponderListActions(s);},Axa:function(
E){if(this.K&&this.K.Axa)return this.K.Axa.apply(this,arguments);else return C.DeviceClass.
Bwe.apply(this,arguments);},Bwe:function(E){},A0O:function(Aq){this.Axa(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Azc){if(this.An4===Azc)return;this.An4=Azc;A.abo([this,this.AS1,this.A0O
],0);},Asp:function(AoA,AJi){if(this.K&&this.K.Asp)return this.K.Asp.apply(this,
arguments);else return C.DeviceClass.Bwu.apply(this,arguments);},Bwu:function(AoA
,AJi){this.Gg.FD();this.Gg.AgK=AoA;this.Gg.AU8=AJi;this.Gg.E4(1);A._GetAutoObject(
C.Device).AZ(110,true,A.jV,0,[this,this.BAS]);},BAS:function(G){var Ar=(C.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([this,this.BCw],this
);},BCw:function(G){this.Gg.E4(2);this.AxF();A._GetAutoObject(C.Device).AZ(110,false
,A.jV,0,null);},AE9:function(E){if(this.K&&this.K.AE9)return this.K.AE9.apply(this
,arguments);else return C.DeviceClass.Bvf.apply(this,arguments);},Bvf:function(E
){},Bbv:function(Aq){this.AE9(Aq);},UpdateBirthRegistrationsListResetOnExport:function(
AJ){if(this.AMZ===AJ)return;this.AMZ=AJ;A.abo([this,this.A8S,this.Bbv],0);},AFP:
function(E){if(this.K&&this.K.AFP)return this.K.AFP.apply(this,arguments);else return C.
DeviceClass.BvY.apply(this,arguments);},BvY:function(E){},BbM:function(Aq){this.
AFP(Aq);},UpdatePurchasedListResetOnExport:function(AJ){if(this.AUk===AJ)return;
this.AUk=AJ;A.abo([this,this.A9l,this.BbM],0);},Bo4:function(){},AEJ:function(){
return this.Im;},Av7:function(){return this.Aa8;},Av_:function(){return this.AmC;
},ASU:function(){return this.ScanState;},AER:function(){return this.MeasureState;
},AEV:function(){return this.Lz;},A8$:function(){return this.Language;},ArA:function(
){return this.TemperatureUnit;},A8V:function(){return this.AM6;},ASL:function(){
return this.AEv;},Awk:function(){return this.OverlayMenu;},A9E:function(){return this.
AcF;},ASW:function(){return this.SyncState;},A9F:function(){return this.AsR;},AEW:
function(){return this.AVW;},AST:function(){return this.RatingMode;},Arx:function(
){return this.AmQ;},ASY:function(){return this.AVA;},BlL:function(){return this.
AUl;},Bla:function(){return this.AutoRegistrationMode;},ASV:function(){return this.
OY;},Ul:function(){return this.A3;},Un:function(){return this.AF;},AEX:function(
){return this.K0;},ASK:function(){return this.MassUnit;},A8F:function(){return this.
Pp;},ASx:function(){return this.AuE;},A8Q:function(){return this.AutoActions;},PV:
function(){return this.AnimalType;},A9N:function(){return this.WeightRecordingMode;
},ASQ:function(){return this.AGm;},AEO:function(){return this.HF;},A8K:function(
){return this.AdR;},A9O:function(){return this.WeightRecordingScope;},WE:function(
){return this.Gender;},Awd:function(){return this.Aq4;},Awc:function(){return this.
Aq3;},AEL:function(){return this.Kn;},A8M:function(){return this.AMe;},A8Z:function(
){return this.AmP;},AEK:function(){return this.D9;},A9J:function(){return this.AVY;
},A81:function(){return this.AOF;},A8O:function(){return this.ABX;},A9z:function(
){return this.AG6;},A9A:function(){return this.AG7;},A83:function(){return this.
AqR;},A9h:function(){return this.AEx;},A9g:function(){return this.AEw;},Awh:function(
){return this.AR6;},Awg:function(){return this.AR5;},A8U:function(){return this.
Aqr;},A8D:function(){return this.ABP;},A8E:function(){return this.Aqb;},Ano:function(
){return this.In;},ASD:function(){return this.ACM;},ASE:function(){return this.ACN;
},AEP:function(){return this.Au3;},Anr:function(){return this.AjR;},ASM:function(
){return this.Av1;},Awi:function(){return this.AR7;},Awb:function(){return this.
EartagNrAssignmentMode;},Av9:function(){return this.Breed;},BlF:function(){return this.
SE;},BlD:function(){return this.Q2;},Bl3:function(){return this.S5;},Bld:function(
){return this.R5;},A8X:function(){return this.AN3;},AEM:function(){return this.Aqp;
},ASZ:function(){return this.AxP;},A9D:function(){return this.Afr;},ASR:function(
){return this.OX;},AET:function(){return this.AbW;},A82:function(){return this.AqQ;
},Uo:function(){return this.P4;},BlS:function(){return this.AhG;},ASy:function(){
return this.Agx;},A9w:function(){return this.AU9;},A9L:function(){return this.AHq;
},A9M:function(){return this.AHr;},A8P:function(){return this.ABY;},A9K:function(
){return this.AHp;},A9P:function(){return this.AHu;},Bln:function(){return this.
ACU;},BlT:function(){return this.AxH;},A9f:function(){return this.AvW;},AS0:function(
){return this.Ak1;},BlE:function(){return this.ARS;},Awl:function(){return this.
WhereAbouts;},A8G:function(){return this.ABQ;},A8H:function(){return this.ABR;},
AEQ:function(){return this.AeO;},A9d:function(){return this.AvU;},A9e:function(){
return this.OR;},A9i:function(){return this.ASh;},A9j:function(){return this.ASm;
},A9R:function(){return this.AWb;},AS1:function(){return this.An4;},A8S:function(
){return this.AMZ;},A9l:function(){return this.AUk;},_Init:function(aArg){C.Table.
_Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this},0);A.Core.A$5.
_Init.call(this.AnM={I:this},0);C.Table._Init.call(this.Pt={I:this},0);this.__proto__=
C.DeviceClass;this.An.OnSetId(0);this.Bt.OnSetId(1);this.Pt.OnSetId(3);this.OY=A.
_NewObject(C.Transponder,0);this.SE=A._NewObject(C.AxE,0);this.Q2=A._NewObject(C.
Avu,0);this.S5=A._NewObject(C.Avu,0);this.R5=A._NewObject(C.AxE,0);this.P4=A._NewObject(
C.AVR,0);this.Gg=A._NewObject(C.VX,0);var J_=this._variants();if(J_){this.K={};J_.
_Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.K._Done.call(this
);this.__proto__=null;this.An._Done();this.Bt._Done();this.AnM._Done();this.Pt._Done(
);A.h7--;},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();this.AnM._ReInit(
);this.Pt._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
if((B=this.OY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SE)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Q2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
S5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R5)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.P4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gg)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bt
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.DeviceClass.
_variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Device::DeviceClass"
};C.Device={_Init:function(){C.DeviceClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ScreenType={UNDEFINED:0,Sleep:
1,Boot:2,Home:3,Charge:4,Sync:5,Settings:6,EditAnimalData:7,AnimalList:8,AnimalListFilter:
9,AnimalActionTemperature:10,AnimalActionRate:11,AlarmList:12,ControlMeasure:13,
ControlList:14,RangeTest:15,DateTimeSettings:16,TemperatureSettings:17,DeviceSettings:
18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:21,UnitsSettings:22
,WeightGainSettings:23,AnimalActionActions:24,EvaluationMenuMain:25,NewAnimals:26
,MassRecordingScreen:27,NewAnimalManualData:28,AnimalActionUnregister:29,AnimalActionNewbornCare:
30,NewAnimalTransponderData:31,SetTransponderScreen:32,WeightListScreen:33,AutoActionScanScreen:
34,ManualActionScanScreen:35,AnimalSingleInfoScreen:36,InitializationSettings:37
,ControlledPowerOff:38,ChargeWarning:39,AlarmListFilter:40,WatchListFilter:41,DataAcquisitionSettings:
42,FreshCowList:43,FreshCowListFilter:44,SetSaveTransponderScreen:45,NoTransponderList:
46,NoTransponderListFilter:47,AnimalActionPerished:48,NewAnimalSetTransponderScreen:
49,AnimalMultiInfoScreen:50,ActionList:51,ActionListFilter:52,Update:53,NewAnimalCalvingData:
54,NewAnimalsSetTransponderScreen:55,EvaluationTemperatures:56,EvaluationWeights:
57,EvaluationRatings:58,EvaluationLosses:59,TemperatureMeasurement:60,DryCowList:
61,DryCowListFilter:62,DeviceMain:63,DeviceService:64,DeviceCheck:65,EvaluationMenuWeights:
66,EvaluationBirthWeights:67,EvaluationWeightsRecent:68,ListsMain:69,ListsIdManagement:
70,NoNaisIdList:71,NoNaisIdListFilter:72,RegistrationsListFilter:73,BirthRegistrationsList:
74,AnimalRegistrationDetails:75,PremisesSettings:76,NewMenu:77,NewAnimalLoss:78,
MotherScanScreen:79,SetSaveNaisIdScreen:80,EditAnimalDataNaisId:81,DeviceInfo:82
,DeviceDatamanagement:83,AnimalEvaluationFilter:84,YoungNoTransponderList:85,YoungNoTransponderListFilter:
86,RegistrationPresettingsSettings:87,RegistrationAutomaticSettings:88,TransponderAssignmentSettings:
89,PurchasedAnimalsList:90,TextInput:91,DeviceAnimalDataMenu:92,DeviceDeviceDataMenu:
93,AnimalActions:94,TransponderUnlinkSettings:95,LAST:96};C.Operator={Equal:0,None:
1,Greater:2,Less:3,Contains:4,Unequal:5};C.MeasureState={Idle:0,Progress:1,Prediction:
2,Ready:3,Error:4,LAST:5};C.StringFilterCriterion={A6:A.jV,Abm:function(){var Aw=
A._NewObject(C.StringFilterCriterion,0);Aw.E9(this);return Aw;},E9:function(AH){
C.FilterCriterion.E9.call(this,AH);var Aw=(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},_Init:function(aArg){C.FilterCriterion._Init.
call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CE:function(Ad,Bc){if(this.K&&this.K.CE)return this.K.CE.apply(this,arguments
);else return C.ITable.CE.apply(this,arguments);},H6:function(Ad,Bc){if(this.K&&
this.K.H6)return this.K.H6.apply(this,arguments);else return C.ITable.H6.apply(this
,arguments);},OnSetId:function(E){if(this.K&&this.K.OnSetId)return this.K.OnSetId.
apply(this,arguments);else return C.ITable.OnSetId.apply(this,arguments);},B8:function(
){if(this.K&&this.K.B8)return this.K.B8.apply(this,arguments);else return C.ITable.
B8.apply(this,arguments);},Bk:function(E){if(this.K&&this.K.Bk)return this.K.Bk.
apply(this,arguments);else return C.ITable.Bk.apply(this,arguments);},V5:function(
Ad,Bc){if(this.K&&this.K.V5)return this.K.V5.apply(this,arguments);else return C.
ITable.V5.apply(this,arguments);},So:function(Ad,Bc){if(this.K&&this.K.So)return this.
K.So.apply(this,arguments);else return C.ITable.So.apply(this,arguments);},QE:function(
){if(this.K&&this.K.QE)return this.K.QE.apply(this,arguments);else return C.ITable.
QE.apply(this,arguments);},QI:function(AoM){if(this.K&&this.K.QI)return this.K.QI.
apply(this,arguments);else return C.ITable.QI.apply(this,arguments);},AbG:function(
){if(this.K&&this.K.AbG)return this.K.AbG.apply(this,arguments);else return C.ITable.
AbG.apply(this,arguments);},ZN:function(Ad,Bc,Dw){if(this.K&&this.K.ZN)return this.
K.ZN.apply(this,arguments);else return C.ITable.ZN.apply(this,arguments);},HR:function(
Ad,Bc,Dw){if(this.K&&this.K.HR)return this.K.HR.apply(this,arguments);else return C.
ITable.HR.apply(this,arguments);},ZM:function(Ad,Bc,Dw){if(this.K&&this.K.ZM)return this.
K.ZM.apply(this,arguments);else return C.ITable.ZM.apply(this,arguments);},Ob:function(
Ad,Bc,Dw){if(this.K&&this.K.Ob)return this.K.Ob.apply(this,arguments);else return C.
ITable.Ob.apply(this,arguments);},LY:function(aColumn,A9){if(this.K&&this.K.LY)return this.
K.LY.apply(this,arguments);else return C.ITable.LY.apply(this,arguments);},KS:function(
Ad,Bc){if(this.K&&this.K.KS)return this.K.KS.apply(this,arguments);else return C.
ITable.KS.apply(this,arguments);},UE:function(Ad,Bc,Dw){if(this.K&&this.K.UE)return this.
K.UE.apply(this,arguments);else return C.ITable.UE.apply(this,arguments);},Aer:function(
aColumn,A9){if(this.K&&this.K.Aer)return this.K.Aer.apply(this,arguments);else return C.
ITable.Aer.apply(this,arguments);},FD:function(){if(this.K&&this.K.FD)return this.
K.FD.apply(this,arguments);else return C.ITable.FD.apply(this,arguments);},AjH:function(
aColumn,A9){if(this.K&&this.K.AjH)return this.K.AjH.apply(this,arguments);else return C.
ITable.AjH.apply(this,arguments);},Aek:function(aColumn,A9){if(this.K&&this.K.Aek
)return this.K.Aek.apply(this,arguments);else return C.ITable.Aek.apply(this,arguments
);},HK:function(){if(this.K&&this.K.HK)return this.K.HK.apply(this,arguments);else
return C.ITable.HK.apply(this,arguments);},QL:function(){if(this.K&&this.K.QL)return this.
K.QL.apply(this,arguments);else return C.ITable.QL.apply(this,arguments);},_Init:
function(aArg){C.ITable._Init.call(this,aArg);this.__proto__=C.Table;var J_=this.
_variants();if(J_){this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(this.
K)this.K._Done.call(this);this.__proto__=C.ITable;C.ITable._Done.call(this);},_ReInit:
function(){C.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){C.ITable._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:function(
){return A.acq.Table._variants();},K:null,_className:"Device::Table"};C.TableId={
Animal:0,Rating:1,Undefined:2,CalfDeregistrations:3};C.ScanState={Idle:0,Progress:
1,IdScanned:2,NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:
2,Respiratory:3,Faeces:4};C.ConverterClass={Na:null,AkY:function(AoK){var Bdq;var
Auq=this.AVq(AoK/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bdq=A.abk(Auq
,0,1);return Bdq;},Bad:function(NA){if(NA<=0)return 0;else if(NA<=1)return 5;else
if(NA<=2)return 3;else if(NA<=4)return 2;else if(NA<=6)return 1;else if(NA<=8)return 4;
else return 0;},Ad0:function(NA){var a=0;switch(NA){case 3:a=2;break;case 2:a=4;
break;case 1:a=6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:
A.ab5("%s",Oh);}return a;},AsI:function(Eo,Rv){var NC=A._GetAutoObject(C.Converter
).Ajk(Rv,Eo);switch(NC){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;
default:throw new Error(Qb+NC.toFixed());}},AhO:function(){var B;var D8=A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(C.Helper).Du());D8.AnA(0);D8.AnD(0);D8.
AnG(0);return((B=(D8.JY()|0))<0)?B+0x100000000:B;},Bif:function(Ato){var CN;switch(
Ato){case 36:CN=MR;break;case 40:CN=Te;break;case 56:CN=UW;break;case 70:CN=Z8;break;
case 100:CN=W$;break;case 124:CN=Iw;break;case 156:CN=UX;break;case 158:CN=Z9;break;
case 191:CN=UY;break;case 196:CN=Z_;break;case 203:CN=Xa;break;case 208:CN=Z$;break;
case 233:CN=Aaa;break;case 246:CN=UZ;break;case 250:CN=Xb;break;case 276:CN=O_;break;
case 300:CN=Aab;break;case 348:CN=Oi;break;case 372:CN=Rn;break;case 380:CN=Xc;break;
case 392:CN=Xd;break;case 428:CN=Tf;break;case 440:CN=Xe;break;case 442:CN=Aac;break;
case 470:CN=Xf;break;case 528:CN=Xg;break;case 578:CN=Xh;break;case 616:CN=Xi;break;
case 620:CN=Xj;break;case 642:CN=Aad;break;case 643:CN=Tg;break;case 703:CN=Aae;
break;case 705:CN=AfB;break;case 724:CN=Aaf;break;case 752:CN=Xk;break;case 756:
CN=Aag;break;case 792:CN=Xl;break;case 804:CN=AhS;break;case 826:CN=K2;break;case
840:CN=AcL;break;default:CN=Ato.toFixed();}return CN;},Ak7:function(MX){var Aau;
if((MX<10000)&&(A._GetAutoObject(C.Device).OR===2))Aau=2;else if((MX<100000)&&!!
A._GetAutoObject(C.Device).OR)Aau=1;else Aau=0;return this.Td(MX,Aau,false);},Ax2:
function(MX,Aau){return this.Td(MX,Aau,false);},Td:function(MX,Aau,BAl){var B;var
AlE=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(BAl)AlE=A.abl(MX,
0,0);else{var BeO=MX<0;if(Aau<3)MX=MX+(((BeO?-1:1)*5)*(Math.pow(10,2-Aau)|0));AlE=(((((
B=MX)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(Aau>0)AlE=AlE+(JE+A.abV(
A.abl((((B=MX)>-2147483648)?Math.abs(B):B)%1000,3,10),Aau));if(BeO)AlE=AhT+AlE;}
break;case 1:AlE=A.abk(MX/453.592,0,Aau);break;default:A.ab5("%s%s",Aoc,A._GetAutoObject(
C.Device).MassUnit.toFixed());}return AlE;},Rj:function(Iz){var A4S=Iz.toFixed();
var Bg6=A4S.length;if((Bg6>=14)&&(Bg6<=15)){var A2H=this.AxS(Iz);var Bza=A._GetAutoObject(
C.Converter).Bif(A2H);A4S=(Bza+Oj)+A.abm(A._GetAutoObject(C.Helper).V1(Iz,0,12),
12,10);}return A4S;},AmT:function(L$){switch(L$){case 0:return A.aaL(A.ach.AQE);
case 1:return A.aaL(A.ach.ADR);case 2:return A.aaL(A.ach.ADV);default:{A.ab5("%s%e"
,Xm,L$);return null;}}},A5u:function(ByI){switch(ByI){case 0:return A.aaL(A.ach.
AvC);case 1:return A.aaL(A.ach.ADN);case 2:return A.aaL(A.ach.AQx);default:throw new
Error(Aod);}},AdY:function(AJs){switch(AJs){case 0:case 14:return A.aaL(A.ach.AjS
);case 2:return A.aaL(A.ach.Ara);case 1:return A.aaL(A.ach.Ag3);case 3:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.AD1);case 1:return A.
aaL(A.ach.AD2);default:throw new Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed(
));}break;case 4:return A.aaL(A.ach.APV);case 5:return A.aaL(A.ach.APW);case 6:return A.
aaL(A.ach.AP1);case 7:return A.aaL(A.ach.APh);case 8:case 13:return A.aaL(A.ach.
APo);case 9:return A.aaL(A.ach.ADo);case 10:return A.aaL(A.ach.APn);case 12:return A.
aaL(A.ach.APp);case 11:return A.aaL(A.ach.AP7);default:throw new Error(AhU+AJs.toFixed(
));}},BhH:function(Azg){switch(Azg){case 0:return A.aaL(A.ach.AQw);case 3:return A.
aaL(A.ach.Ara);case 1:return A.aaL(A.ach.Ag3);case 2:return A._GetAutoObject(A.acj.
DU).BdP();default:throw new Error(AhU+Azg.toFixed());}},Bie:function(Ato){switch(
Ato){case 977:return AcM;case 978:return Aah;case 980:return Ax4;case 981:return Ax5;
case 982:return Ax6;case 983:return Ax7;case 984:return Ak_;case 985:return AsX;
default:return A.aaR(A.acf.Unknown);}},Biz:function(AcZ){switch(AcZ){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},Bqw:function(Iz){if(!Iz)return-1;return(
Iz%100000000)|0;},Bjb:function(AoJ,aFilter){var B;if(!aFilter)return Ax8;var Apb=
Ax9;var Aw=aFilter.AON();while(!!Aw){Apb=Apb+A._GetAutoObject(C.Helper).A66(AoJ,
Aw);Aw=aFilter.AOS(Aw);if(!!Aw)Apb=Apb+O$;}Apb=Apb+Ro;return Apb;},A7M:function(
Bct){var HT=0;switch(Bct){case 14:HT=2;break;case 13:HT=4;break;case 6:HT=36;break;
case 25:HT=17;break;case 11:HT=9;break;case 17:HT=11;break;case 0:HT=39;break;case
10:HT=26;break;case 12:HT=12;break;case 5:HT=14;break;case 3:HT=15;break;case 1:
HT=10;break;case 8:HT=16;break;case 18:HT=18;break;case 4:HT=20;break;case 19:HT=
21;break;case 20:HT=24;break;case 26:HT=22;break;case 15:HT=27;break;case 21:HT=
28;break;case 22:HT=29;break;case 23:HT=30;break;case 9:HT=31;break;case 27:HT=33;
break;case 2:HT=13;break;case 24:HT=32;break;case 7:HT=35;break;case 16:HT=37;break;
default:A.ab5("%s%e",Ax_,Bct);}return HT;},BhG:function(Azg){switch(Azg){case 0:
return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AfC+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;default:throw new Error(AhU+Azg.toFixed());
}},Ajo:function(AoU){switch(AoU){case 0:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.APS);case 1:return A.aaL(A.ach.APR);default:throw new
Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 1:return A.
aaL(A.ach.AQu);case 9:return A.aaL(A.ach.APO);case 4:return A.aaL(A.ach.AQR);case
6:return A.aaL(A.ach.AQS);case 8:return A.aaL(A.ach.AP2);case 2:return A.aaL(A.ach.
AQW);case 3:return A.aaL(A.ach.AQQ);case 7:return A.aaL(A.ach.AQX);case 5:return A.
aaL(A.ach.AQY);case 10:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.
aaL(A.ach.AQ5);case 1:return A.aaL(A.ach.AQ4);default:throw new Error(AfC+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;case 11:return A.aaL(A.ach.AP8);case 12:return A.
aaL(A.ach.AQy);case 16:return A.aaL(A.ach.AQz);case 19:case 13:case 14:case 18:case
15:case 17:return A.aaL(A.aci.TR);default:throw new Error(U0+AoU.toFixed());}},AND:
function(Ato){switch(Ato){case 40:return 1;case 56:return 3;case 70:return 2;case
100:return 4;case 124:return 5;case 156:return 7;case 158:return 36;case 191:return 17;
case 196:return 8;case 203:return 9;case 208:return 11;case 233:return 12;case 246:
return 14;case 250:return 15;case 276:return 10;case 300:return 16;case 348:return 18;
case 372:return 19;case 380:return 20;case 392:return 21;case 428:return 24;case
440:return 22;case 442:return 23;case 470:return 25;case 528:return 26;case 578:
return 27;case 616:return 28;case 620:return 29;case 642:return 30;case 643:return 31;
case 703:return 34;case 705:return 33;case 724:return 13;case 752:return 32;case
756:return 6;case 792:return 35;case 804:return 37;case 826:return 38;case 840:return 39;
default:return 0;}},S8:function(Iz){var A2H=this.AxS(Iz);return this.AND(A2H);},
AxS:function(Iz){return A._GetAutoObject(C.Helper).V1(Iz,12,3)|0;},Baw:function(
AoO,Eo){if(AoO<A._GetAutoObject(C.Helper).ADk(Eo))return 1;else if(AoO<A._GetAutoObject(
C.Helper).ADj(Eo))return 2;else return 3;},AC8:function(Byl){switch(Byl){case 1:
return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:
return 6;case 7:return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:
return 11;case 12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;
case 16:return 16;default:return 0;}},AVq:function(A9,AJk,AJl){if(AJk===AJl)return A9;
if(!AJk&&(AJl===1)){var result=((A9*9)/5)+32;return result;}if((AJk===1)&&!AJl){
var result=((A9-32)*5)/9;return result;}throw new Error(((AsY+AJk.toFixed())+Ax$
)+AJl.toFixed());},A6P:function(Eb){switch(Eb){case 0:return Aya;case 1:return A.
jV;case 2:return Ak$;case 3:return Ayb;case 4:return A.aaR(A.acf.Contains);case 5:
return AfD;default:{A.ab5("%s%e",Aoe,Eb);return A.jV;}}},A5T:function(AcX){return this.
Na.Aej(AcX);},BjW:function(AcX){return this.Na.AmE(AcX);},BhY:function(Atn){var AAz=
0;switch(Atn){case 0:AAz=1;break;case 1:AAz=2;break;case 2:AAz=3;break;case 3:AAz=
4;break;default:A.ab5("%s%e",I1,Atn);}return AAz;},Ajk:function(A06,Eo){if(A06>=
A._GetAutoObject(C.Helper).A61(Eo))return 3;else if(A06>=A._GetAutoObject(C.Helper
).AC9(Eo))return 2;else if(A06<A._GetAutoObject(C.Device).AcF)return 0;else return 1;
},Aqy:function(HT){var BN=-1;switch(HT){case 0:BN=0;break;case 1:BN=40;break;case
2:BN=70;break;case 3:BN=56;break;case 4:BN=100;break;case 5:BN=124;break;case 6:
BN=756;break;case 7:BN=156;break;case 8:BN=196;break;case 9:BN=203;break;case 10:
BN=276;break;case 11:BN=208;break;case 12:BN=233;break;case 13:BN=724;break;case
14:BN=246;break;case 15:BN=250;break;case 16:BN=300;break;case 17:BN=191;break;case
18:BN=348;break;case 19:BN=372;break;case 20:BN=380;break;case 21:BN=392;break;case
22:BN=440;break;case 23:BN=442;break;case 24:BN=428;break;case 25:BN=470;break;case
26:BN=528;break;case 27:BN=578;break;case 28:BN=616;break;case 29:BN=620;break;case
30:BN=642;break;case 31:BN=643;break;case 32:BN=752;break;case 33:BN=705;break;case
34:BN=703;break;case 35:BN=792;break;case 36:BN=158;break;case 37:BN=804;break;case
38:BN=826;break;case 39:BN=840;break;default:throw new Error(Aof+HT.toFixed());}
return BN;},Bab:function(Iz){return A._GetAutoObject(C.Helper).V1(Iz,8,2)|0;},AVG:
function(Iz){var BAg=this.Bab(Iz);return this.AC8(BAg);},AL8:function(Eh){var Rx=
19;switch(Eh){case 0:break;case 4:Rx=7;break;case 32:case 2048:Rx=9;break;case 4096:
Rx=11;break;case 32768:Rx=14;break;case 524288:Rx=18;break;case 65536:Rx=15;break;
case 128:Rx=17;break;case 16:Rx=1;break;case 16384:Rx=12;break;case 1024:Rx=8;break;
case 2:Rx=3;break;case 131072:Rx=16;break;case 1:Rx=2;break;case 8:Rx=5;break;case
256:Rx=10;break;default:throw new Error(AsZ+Eh.toFixed());}return Rx;},Baa:function(
Iz){return A._GetAutoObject(C.Helper).V1(Iz,10,2)|0;},_Init:function(aArg){C.Na.
_Init.call(this.Na={I:this},0);this.__proto__=C.ConverterClass;A.h7++;},_Done:function(
){this.__proto__=null;this.Na._Done();A.h7--;},_ReInit:function(){this.Na._ReInit(
);},_Mark:function(D){var B;if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::ConverterClass"};C.Converter={_Init:function(){C.ConverterClass._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
MinLowTemperature=3000;C.MaxHighTemperature=5000;C.TemperatureStep=10;C.RatingTableFields={
Id:0,AnimalId:1,FeedAssessment:2,AppearanceAssessment:3,RespiratoryAssessment:4,
FaecesAssessment:5,Timestamp:6,Temperature:7,BodyWeight:8,RatingTemperature:9};C.
Animal={TransponderId:0,NaisId:0,NaisIdMother:0,Id:-1,VisualId:0,GroupId:0,DateOfBirth:
0,LocationId:0,LastTemperature:0,TimestampLastControl:0,TimestampLastWatch:0,TimestampExpirationFeverAlarm:
0,TimestampAlarm:0,LastBodyWeight:0,TimestampLastWeighing:0,FirstBodyWeight:0,TimestampFirstWeighing:
0,FirstBodyWeightId:0,DateOfLastCalving:0,LactationNumber:0,TimestampLastTemperature:
0,TimestampLastAssessment:0,ReasonOfLeaving:0,WhereAbouts:0,EaseOfDelivery:0,Breed:
0,AnimalType:0,LastRatingTemperature:0,WorstAssessment:0,BirthType:0,Gender:2,IsDry:
false,IsRegistrationNoticePending:false,IsPerished:false,IsFever:false,IsWatch:false
,IsRegistered:false,IsControl:false,IsAlarm:false,Fl:function(Ad,AL){var II=C.Row.
Fl.call(this,Ad,AL);if(II&&!!AL){this.OnSetId(AL.CE(Ad,0));this.SO(AL.CE(Ad,1));
this.Ab5(AL.CE(Ad,2));this.AnC(AL.CE(Ad,3));this.Q6(AL.Hv(Ad,4));this.J0(AL.AOP(
Ad,7));this.Akr(AL.Bjt(Ad,6));this.EC(AL.AmU(Ad,14));this.PY(AL.KS(Ad,22));this.
Nr(AL.KS(Ad,26));this.Axf(AL.Ja(Ad,13));this.Ae1(AL.H6(Ad,8));this.Aw8(AL.Hv(Ad,
15));this.ATS(AL.Hv(Ad,31));this.Ae7(AL.A7e(Ad,5));this.ATp(AL.Ja(Ad,17));this.Uu(
AL.H6(Ad,11));this.ATR(AL.Hv(Ad,16));this.ATU(AL.Hv(Ad,30));this.Akx(AL.H6(Ad,9)
);this.Ae5(AL.H6(Ad,12));this.ATT(AL.Hv(Ad,20));this.Aw_(AL.Hv(Ad,21));this.Ae3(
AL.H6(Ad,10));this.AwM(AL.H6(Ad,27));this.AFx(AL.ADf(Ad,18));this.AF1(AL.Hv(Ad,19
));this.AwH(AL.ADf(Ad,23));this.Aw9(AL.Hv(Ad,24));this.ATh(AL.CE(Ad,25));this.Awy(
AL.Hv(Ad,28));this.AwN(AL.CE(Ad,29));this.ArV(AL.H6(Ad,38));this.N7(AL.Bju(Ad,32
));this.Akt(AL.Bjz(Ad,33));this.AnE(AL.KS(Ad,35));this.Nt(AL.AOX(Ad,34));this.Ae4(
AL.H6(Ad,37));this.AFQ(AL.BjI(Ad,36));}return II;},Cr:function(AL){var II=C.Row.
Cr.call(this,AL);if(II&&!!AL){var Mm=AL.QE();if(Mm<0)A.ab5("%s",AcN);else{var AAd=
this.Arg();if(AAd)this.CQ=AL.AbG();else AL.HR(this.CQ,0,this.Id);AL.HR(this.CQ,1
,this.VisualId);AL.HR(this.CQ,2,this.GroupId);AL.HR(this.CQ,3,this.LocationId);AL.
Acn(this.CQ,4,this.DateOfBirth);AL.Bpq(this.CQ,7,this.Gender);AL.Bpm(this.CQ,6,this.
BirthType);AL.Bpk(this.CQ,14,this.AnimalType);AL.UE(this.CQ,22,this.TransponderId
);AL.UE(this.CQ,26,this.NaisId);AL.AkP(this.CQ,13,this.WorstAssessment);AL.Ob(this.
CQ,8,this.IsAlarm);AL.Acn(this.CQ,15,this.TimestampAlarm);AL.Ob(this.CQ,11,this.
IsFever);AL.Acn(this.CQ,16,this.TimestampExpirationFeverAlarm);AL.Ob(this.CQ,9,this.
IsControl);AL.Ob(this.CQ,12,this.IsWatch);AL.Acn(this.CQ,20,this.TimestampLastControl
);AL.Acn(this.CQ,21,this.TimestampLastWatch);AL.Ob(this.CQ,10,this.IsRegistered);
AL.Ob(this.CQ,27,this.IsPerished);AL.Acn(this.CQ,28,this.DateOfLastCalving);AL.HR(
this.CQ,29,this.LactationNumber);AL.Ob(this.CQ,38,this.IsDry);AL.Bpo(this.CQ,32,
this.Breed);AL.Bpp(this.CQ,33,this.EaseOfDelivery);AL.UE(this.CQ,35,this.NaisIdMother
);AL.Bpv(this.CQ,34,this.WhereAbouts);AL.Ob(this.CQ,37,this.IsRegistrationNoticePending
);AL.Bpu(this.CQ,36,this.ReasonOfLeaving);II=AL.QI(Mm);if(AAd&&II)this.OnSetId(AL.
CE(this.CQ,0));}}return II;},G7:function(){C.Row.G7.call(this);this.OnSetId(-2);
this.Ae3(true);},FD:function(){C.Row.FD.call(this);this.OnSetId(-1);this.SO(0);this.
Ab5(0);this.AnC(0);this.Q6(0);this.J0(A._GetAutoObject(C.Device).Gender);this.Akr(
0);this.EC(A._GetAutoObject(C.Device).AnimalType);this.PY(0);this.Nr(0);this.Axf(
0);this.Ae1(false);this.Aw8(0);this.ATS(0);this.Ae7(0);this.ATp(0);this.Uu(false
);this.ATU(0);this.ATR(0);this.Akx(false);this.Ae5(false);this.ATT(0);this.Aw_(0
);this.Ae3(false);this.AwM(false);this.AFx(0);this.AF1(0);this.AwH(0);this.Aw9(0
);this.ATh(-1);this.Awy(0);this.AwN(0);this.ArV(false);this.N7(0);this.Akt(0);this.
AnE(0);this.Nt(0);this.Ae4(false);this.AFQ(0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Um,this.OnSetId],0);},SO:function(E){if(this.
VisualId===E)return;this.VisualId=E;A.abo([this,this.ArC,this.SO],0);},Ab5:function(
E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.Blu,this.Ab5],0);}
,Q6:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;A.abo([this,this.
Av$,this.Q6],0);},J0:function(E){if(this.Gender===E)return;this.Gender=E;A.abo([
this,this.WE,this.J0],0);},Akr:function(E){if(this.BirthType===E)return;this.BirthType=
E;A.abo([this,this.ASB,this.Akr],0);},AnC:function(E){if(this.LocationId===E)return;
this.LocationId=E;A.abo([this,this.A9c,this.AnC],0);},Ae7:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.abo([this,this.A9b,this.Ae7],0);},Ae1:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.abo([this,this.A85,this.Ae1],0);}
,Akx:function(E){if(this.IsControl===E)return;this.IsControl=E;A.abo([this,this.
Blw,this.Akx],0);},Ae3:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.abo([this,this.Blz,this.Ae3],0);},Ae5:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.abo([this,this.A89,this.Ae5],0);},Axf:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.abo([this,this.A9Q,this.Axf],0);},Uu:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.abo([this,this.A86,this.Uu],0);},
ATT:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.abo([this,this.Bl0,this.ATT],0);},Aw_:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.abo([this,this.Bl2,this.Aw_],0);},ATp:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.abo([
this,this.BlC,this.ATp],0);},ATR:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.abo([this,this.BlY,this.ATR],0);
},Aw8:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.abo([
this,this.BlX,this.Aw8],0);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.abo([this,this.PV,this.EC],0);},AFx:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.abo([this,this.A9a,this.AFx],0);},AF1:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.abo([this,this.A9C
,this.AF1],0);},PY:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.ArB,this.PY],0);},RS:function(){return A._GetAutoObject(C.Helper
).Me(this.DateOfBirth,A._GetAutoObject(C.Helper).Du());},AwH:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASG,this.AwH]
,0);},Aw9:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASX,this.Aw9],0);},Arf:function(){var Pf=A._NewObject(A.Core.
Bs,0);Pf.Initialize(this.DateOfBirth);var A2t=A._NewObject(A.Core.Bs,0);A2t.Initialize(
this.TimestampFirstWeighing);if(((Pf.Year===A2t.Year)&&(Pf.Ab1()===A2t.Ab1()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhR:function(AJd){var AaD;
var Auv;if(this.TimestampLastWeighing>0){Auv=this.TimestampLastWeighing;AaD=this.
LastBodyWeight;}else{Auv=this.DateOfBirth;AaD=A._GetAutoObject(C.Helper).Abt(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhR(AaD,Auv,AJd,this.AnimalType);
},ATh:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Blt,this.ATh],0);},AnT:function(BcQ){this.Ae1(BcQ);if(BcQ){if(!
this.TimestampAlarm)this.Aw8(A._GetAutoObject(C.Helper).Du());}else this.Aw8(0);
},Nr:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Ans,this.
Nr],0);},AGN:function(BcM){this.Ae5(BcM);if(BcM){if(!this.TimestampLastWatch)this.
Aw_(A._GetAutoObject(C.Helper).Du());}else this.Aw_(0);},Awy:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Blj,this.
Awy],0);},AwN:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BlB,this.AwN],0);},AwM:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Bly,this.AwM],0);},ATU:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bl1,this.ATU],0);},ATS:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BlZ,this.ATS],0);},N7:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av9,this.N7],0);},Akt:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASF,this.Akt],0);},Nt:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awl,this.Nt
],0);},AnE:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASN,this.AnE],0);},AFQ:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BlN,this.AFQ],0);},Ae4:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BlA,this.Ae4],0);},ArV:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Blx,this.ArV],0);},Um:function(){return this.Id;},ArC:function(
){return this.VisualId;},Blu:function(){return this.GroupId;},Av$:function(){return this.
DateOfBirth;},WE:function(){return this.Gender;},ASB:function(){return this.BirthType;
},A9c:function(){return this.LocationId;},A9b:function(){return this.LastTemperature;
},A85:function(){return this.IsAlarm;},Blw:function(){return this.IsControl;},Blz:
function(){return this.IsRegistered;},A89:function(){return this.IsWatch;},A9Q:function(
){return this.WorstAssessment;},A86:function(){return this.IsFever;},Bl0:function(
){return this.TimestampLastControl;},Bl2:function(){return this.TimestampLastWatch;
},BlC:function(){return this.LastRatingTemperature;},BlY:function(){return this.
TimestampExpirationFeverAlarm;},BlX:function(){return this.TimestampAlarm;},PV:function(
){return this.AnimalType;},A9a:function(){return this.LastBodyWeight;},A9C:function(
){return this.TimestampLastWeighing;},ArB:function(){return this.TransponderId;}
,ASG:function(){return this.FirstBodyWeight;},ASX:function(){return this.TimestampFirstWeighing;
},Blt:function(){return this.FirstBodyWeightId;},Ans:function(){return this.NaisId;
},Blj:function(){return this.DateOfLastCalving;},BlB:function(){return this.LactationNumber;
},Bly:function(){return this.IsPerished;},Bl1:function(){return this.TimestampLastTemperature;
},BlZ:function(){return this.TimestampLastAssessment;},Av9:function(){return this.
Breed;},ASF:function(){return this.EaseOfDelivery;},Awl:function(){return this.WhereAbouts;
},ASN:function(){return this.NaisIdMother;},BlN:function(){return this.ReasonOfLeaving;
},BlA:function(){return this.IsRegistrationNoticePending;},Blx:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CQ:-1,TableId:2,Fl:function(
Ad,AL){if(!AL){A.ab5("%s",(As0+this.CQ.toFixed())+As1);return false;}else if(AL.
Id!==this.TableId)throw new Error(As2);else if((Ad<0)||(Ad>=AL.B8())){A.ab5("%s"
,(((Aog+this.CQ.toFixed())+As3)+AL.B8().toFixed())+Ala);return false;}this.CQ=Ad;
return true;},Cr:function(AL){if(!AL){A.ab5("%s",(As0+this.CQ.toFixed())+As1);return false;
}else if(AL.Id!==this.TableId)throw new Error(As2);else if(this.Arg()&&AL.Ll()){
A.ab5("%s",Ayc+AL.HK().toFixed());return false;}else if(!this.Arg()&&((this.CQ<0
)||(this.CQ>=AL.B8()))){A.ab5("%s",(((Aog+this.CQ.toFixed())+As3)+AL.B8().toFixed(
))+Ala);return false;}return true;},G7:function(){this.FD();this.CQ=-1;},Arg:function(
){return this.CQ===-1;},FD:function(){this.CQ=-2;},AqX:function(){return this.CQ
!==-2;},A9q:function(){return this.CQ;},A_Q:function(E){this.CQ=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:-1,AnimalId:-1,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,Fl:function(Ad,AL){var II=C.Row.Fl.call(this
,Ad,AL);if(II&&!!AL){this.OnSetId(AL.CE(Ad,0));this.OnSetAnimalId(AL.CE(Ad,1));this.
OnSetTimestamp(AL.Hv(Ad,6));this.OnSetFeed(AL.Ja(Ad,2));this.OnSetAppearance(AL.
Ja(Ad,3));this.OnSetRespiratory(AL.Ja(Ad,4));this.OnSetFaeces(AL.Ja(Ad,5));this.
OnSetTemperature(AL.A7e(Ad,7));this.OnSetBodyWeight(AL.ADf(Ad,8));this.OnSetRatingTemperature(
AL.Ja(Ad,9));}return II;},Cr:function(AL){if(this.K&&this.K.Cr)return this.K.Cr.
apply(this,arguments);else return C.Rating.Bbc.apply(this,arguments);},Bbc:function(
AL){var II=C.Row.Cr.call(this,AL);if((II&&!!AL)&&(AL.Id===1)){var Mm=AL.QE();if(
Mm<0)A.ab5("%s",AcN);else{var AAd=this.Arg();if(AAd)this.CQ=AL.AbG();else AL.HR(
this.CQ,0,this.Id);AL.HR(this.CQ,1,this.AnimalId);AL.Acn(this.CQ,6,this.Timestamp
);AL.AkP(this.CQ,2,this.Feed);AL.AkP(this.CQ,3,this.Appearance);AL.AkP(this.CQ,4
,this.Respiratory);AL.AkP(this.CQ,5,this.Faeces);AL.A$M(this.CQ,7,this.Temperature
);AL.AUS(this.CQ,8,this.BodyWeight);AL.AkP(this.CQ,9,this.RatingTemperature);II=
AL.QI(Mm);if(AAd&&II)this.OnSetId(AL.CE(this.CQ,0));var Rz=A._GetAutoObject(C.Device
).An;var Ad=A._GetAutoObject(C.Device).An.LY(0,this.AnimalId);if(Ad>=0){var Cz=A.
_NewObject(C.Animal,0);Cz.Fl(Ad,Rz);if(this.Temperature>0)Cz.Uu(A._GetAutoObject(
C.Helper).A7G(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AGt(this
)){var Os=A._GetAutoObject(C.Helper).ARh(this);Cz.Akx(Os);Cz.AnT(Os);}else if(this.
Temperature>0){var Os=(A._GetAutoObject(C.Helper).ARh(this)||(Cz.WorstAssessment===
2))||(Cz.WorstAssessment===1);Cz.Akx(Os);Cz.AnT(Os);}else{var Os=A._GetAutoObject(
C.Helper).ARh(this)||Cz.IsFever;Cz.Akx(Os);Cz.AnT(Os);}Cz.Cr(Rz);}}}return II;},
G7:function(){C.Row.G7.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).
Du());this.OnSetId(-2);},FD:function(){C.Row.FD.call(this);this.OnSetTimestamp(0
);this.OnSetId(-1);this.OnSetAnimalId(-1);this.OnSetFeed(0);this.OnSetAppearance(
0);this.OnSetRespiratory(0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(
0);this.OnSetRatingTemperature(0);},OnSetTemperature:function(E){if(this.Temperature===
E)return;this.Temperature=E;A.abo([this,this.BlW,this.OnSetTemperature],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Um,this.OnSetId],0);
},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this
,this.Bk9,this.OnSetAnimalId],0);},OnSetFeed:function(E){if(this.Feed===E)return;
this.Feed=E;A.abo([this,this.Blq,this.OnSetFeed],0);},OnSetAppearance:function(E
){if(this.Appearance===E)return;this.Appearance=E;A.abo([this,this.Bk_,this.OnSetAppearance
],0);},OnSetRespiratory:function(E){if(this.Respiratory===E)return;this.Respiratory=
E;A.abo([this,this.BlO,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.
Faeces===E)return;this.Faeces=E;A.abo([this,this.Blo,this.OnSetFaeces],0);},OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A9B,this.
OnSetTimestamp],0);},Bpl:function(NB,A9){switch(NB){case 2:this.OnSetAppearance(
A9);break;case 1:this.OnSetFeed(A9);break;case 4:this.OnSetFaeces(A9);break;case
3:this.OnSetRespiratory(A9);break;default:;}},Bjr:function(NB){switch(NB){case 2:
return this.Appearance;case 1:return this.Feed;case 4:return this.Faeces;case 3:
return this.Respiratory;default:return 0;}},OnSetRatingTemperature:function(E){if(
this.RatingTemperature===E)return;this.RatingTemperature=E;A.abo([this,this.BlM,
this.OnSetRatingTemperature],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===
E)return;this.BodyWeight=E;A.abo([this,this.Blc,this.OnSetBodyWeight],0);},BlW:function(
){return this.Temperature;},Um:function(){return this.Id;},Bk9:function(){return this.
AnimalId;},Blq:function(){return this.Feed;},Bk_:function(){return this.Appearance;
},BlO:function(){return this.Respiratory;},Blo:function(){return this.Faeces;},A9B:
function(){return this.Timestamp;},BlM:function(){return this.RatingTemperature;
},Blc:function(){return this.BodyWeight;},_Init:function(aArg){C.Row._Init.call(
this,aArg);this.__proto__=C.Rating;this.TableId=1;var J_=this._variants();if(J_){
this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(
this);this.__proto__=C.Row;C.Row._Done.call(this);},_ReInit:function(){C.Row._ReInit.
call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.Row._Mark.call(
this,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.Rating._variants(
);},K:null,_className:"Device::Rating"};C.HelperClass={UD:null,AhD:null,AUL:null
,AUM:null,W:null,Av:null,KM:null,SZ:null,AdZ:null,UK:null,UJ:null,Aem:null,Afy:null
,Afx:null,Afw:null,Afz:null,AgD:null,AG2:0,Init:function(aArg){A.pe([this,this.AUd
],this);},AkA:function(E){this.UD=E;A.abo([this,this.Arz,this.AkA],0);},AFT:function(
E){this.AhD=E;A.abo([this,this.A9r,this.AFT],0);},BBs:function(G){switch(A._GetAutoObject(
C.Device).ScanState){case 2:{var Aux=A._GetAutoObject(C.Device).OY;if(!Aux)throw new
Error(Ayd);switch(Aux.TransponderType){case 1:this.AkA(Aux);break;case 2:this.ATI(
Aux);break;case 3:this.AFT(Aux);break;case 4:this.ATJ(Aux);break;case 0:break;default:
throw new Error(Aye);}}break;case 4:A._GetAutoObject(C.Device).AZ(11,true,A.jV,2000
,null);break;case 3:A._GetAutoObject(C.Device).AZ(12,true,A.jV,2000,null);break;
case 0:case 1:break;default:throw new Error(As4);}},AkM:function(){this.AkA(null
);this.ATI(null);this.AFT(null);this.ATJ(null);},AFY:function(E){if(this.K&&this.
K.AFY)return this.K.AFY.apply(this,arguments);else return C.HelperClass.Bba.apply(
this,arguments);},Bba:function(E){A.abo([this,this.U4,this.U7],0);A._GetAutoObject(
C.Device).SetSystemTime(E);},U7:function(Aq){this.AFY(Aq);},Du:function(){if(this.
K&&this.K.Du)return this.K.Du.apply(this,arguments);else return C.HelperClass.Ba8.
apply(this,arguments);},Ba8:function(){var B;return((B=(this.Av.BdN()|0))<0)?B+0x100000000:
B;},U4:function(){return this.Du();},Asr:function(){A._GetAutoObject(C.Device).SV(-
1);this.W.FD();A.we(this.W,0);},A7W:function(Iz){if(!Iz){A.ab5("%s%U",Ayf,Iz);return false;
}var Bj=A._GetAutoObject(C.Device).An.Aer(22,Iz);return this.GQ(Bj);},AmV:function(
AoJ,AJc){switch(AoJ){case 0:{var Apa=AJc;switch(Apa){case 14:return A.aaR(A.acf.
Aft);case 6:return Pa;case 4:return A.aaR(A.acf.Aee);case 28:return Ayg;case 7:return A.
aaR(A.acf.Afo);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GM);case 37:
return AWe;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACu);case 38:
return A.aaR(A.acf.AN2);case 11:return A.aaR(A.acf.Fever);case 27:return AWf;case
10:return A.aaR(A.acf.BoY);case 12:return A.aaR(A.acf.Asd);case 29:return A.aaR(
A.acf.ARB);case 18:return A.aaR(A.acf.Weighing);case 17:return AWg;case 5:return A.
aaR(A.acf.Temperature);case 3:return AWh;case 26:return A.aaR(A.acf.Uj);case 35:
return A.aaR(A.acf.Uj)+AHw;case 36:return AHx;case 15:return AfE;case 24:return Aoh;
case 20:return AWi;case 30:return AHy;case 21:return Alb;case 19:return AHz;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GH);case 34:return A.
aaR(A.acf.Jm);case 13:return AHA;case 31:return AWj;default:{A.ab5("%s",AWk+Apa.
toFixed());return AHB+Apa.toFixed();}}}case 1:{var Apa=AJc;switch(Apa){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGs);case 8:return A.aaR(A.acf.Afv);
case 5:return A.aaR(A.acf.AGu);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGv);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AWl+Apa.toFixed());return AHB+Apa.toFixed();}}}default:A.ab5(
"%s",(AcO+AoJ.toFixed())+AWm);}return A.jV;},A66:function(AoJ,AH){var result=A.jV;
if(!!AH){result=this.AmV(AoJ,AH.EJ);result=((result+Oj)+A._GetAutoObject(C.Converter
).A6P(AH.Operator))+Oj;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A6.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A6;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A6)result=this.AmV(AoJ,AH.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var BzP=A._NewObject(C.GenderToString
,0);result=result+BzP.LA((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A6);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var ByK=A._NewObject(
C.AnimalTypeToString,0);result=result+ByK.LA((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A6);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var ByN=A._NewObject(C.AssesmentToString,0);result=result+ByN.LA((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A6.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Aw.A6)+AWn)+Aw.OI.toFixed())+O$)+Aw.Zo.toFixed())+Ala;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BDc=A._NewObject(C.WhereAboutsToString,0);result=
result+BDc.LA((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A6);}else
A.ab5("%s",AWo);}return result;},MO:function(aString,Bcy,BxZ){var result=A.jV;var
Bgk=false;var index=0;var Bx1=Bcy.length;while(!Bgk){var A4a=aString.indexOf(Bcy
,index);if(A4a!==-1){result=(result+A.abW(aString,index,A4a-index))+BxZ;index=A4a+
Bx1;}else{var BcD=aString.length;if(index<BcD)result=result+A.ab2(aString,BcD-index
);Bgk=true;}}return result;},ATI:function(E){this.AUL=E;A.abo([this,this.BlQ,this.
ATI],0);},ATJ:function(E){this.AUM=E;A.abo([this,this.BlR,this.ATJ],0);},Beb:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OY)&&(A._GetAutoObject(C.Device).OY.TransponderType===1);},AaH:function(G){if(
!this.W.Arg()&&(this.W.Id>=0))this.Bku(this.W.Id);},AC9:function(Eo){return A._GetAutoObject(
C.Helper).UK.Get(Eo);},A61:function(Eo){return A._GetAutoObject(C.Helper).UJ.Get(
Eo);},A7a:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UK.
MN){if(A._GetAutoObject(C.Helper).UK.Get(O)<min)min=A._GetAutoObject(C.Helper).UK.
Get(O);O=O+1;}return min;},AUd:function(G){A.zV([this,this.AaH],A._GetAutoObject(
C.Device).An,0);},ARh:function(D3){if(!D3)return false;var Bj7=(((this.Az$(D3.Faeces
)||this.Az$(D3.Feed))||this.Az$(D3.Appearance))||this.Az$(D3.Respiratory))||this.
Az$(D3.RatingTemperature);return Bj7||this.A7G(D3);},Az$:function(Bcc){return(Bcc===
2)||(Bcc===1);},A7G:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).AC9(A._GetAutoObject(C.Helper).W.AnimalType));},GQ:function(Mc){var A25=
false;if(Mc>=0){if(Mc!==this.W.CQ)A._GetAutoObject(C.Device).SV(Mc);A25=this.W.Fl(
Mc,A._GetAutoObject(C.Device).An);if(A25)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SV(-1);this.W.FD();A.we(this.W,0);}return A25;},AhM:function(Ah4){var B;
return(((B=(this.Av.BdN()|0))<0)?B+0x100000000:B)-this.AmH(Ah4);},AsG:function(){
var B;A.pe([B=this.KM,B.AnX],this);},BCD:function(G){A._GetAutoObject(C.Device).
AZ(16,false,AWp,0,null);A._GetAutoObject(C.Device).AZ(5,true,A.jV,0,null);},Bor:
function(G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5))this.AsG();},Bob:function(E){if(this.AG2===E)return;this.AG2=E;A._GetAutoObject(
C.Device).AZ(16,true,this.AG2.toFixed(),0,[this,this.Bor]);},Me:function(BxA,Byd
){var D8;var BgS=A._NewObject(A.Core.An3,0);var GF=A._NewObject(A.Core.Bs,0);var
K$=A._NewObject(A.Core.Bs,0);GF.Initialize(BxA);K$.Initialize(Byd);D8=K$.Biy(GF);
BgS.Initialize2(0,D8.ADI,D8.AEu,D8.AGG);if(GF.J(BgS).GK===GF.GK)return D8.Kp;else
return D8.Kp+1;},BCF:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},AK_:function(G){var BhI=A._GetAutoObject(C.Helper).AC9(A._GetAutoObject(C.Helper
).W.AnimalType);var BhF=A._GetAutoObject(C.Helper).A61(A._GetAutoObject(C.Helper
).W.AnimalType);var Agp=A.abz(BhI-100,BhF+100);this.Bdr(Agp);},AmH:function(Ah4){
return Ah4*86400;},Ak3:function(K3){var B;if(!!K3&&(K3<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).V1(K3,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A3&0xFF)|0;},AGt:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhR:function(A1g,BcF,AJd,Eo){var
B;var ApO;if((A1g<650000)&&(BcF<this.Du())){var Bc3=this.AgD.Avq(Eo);var Bc2=0;if(
Bc3>=0)Bc2=this.Afw.Get(Bc3);ApO=A1g+(this.Me(BcF,this.Du())*Bc2);if(AJd>0){var A2b=
this.ApN(AJd);ApO=(Math.trunc(((((B=ApO)<0)?B+0x10000000000000000:B)+Math.trunc(
A2b/2))/A2b)*A2b)|0;}if(ApO>650000)ApO=650000;}else ApO=A1g;return ApO;},ADl:function(
D3){var Aqa=A._GetAutoObject(C.Converter).Ad0(D3.Faeces);if(Aqa<A._GetAutoObject(
C.Converter).Ad0(D3.Feed))Aqa=A._GetAutoObject(C.Converter).Ad0(D3.Feed);if(Aqa<
A._GetAutoObject(C.Converter).Ad0(D3.Appearance))Aqa=A._GetAutoObject(C.Converter
).Ad0(D3.Appearance);if(Aqa<A._GetAutoObject(C.Converter).Ad0(D3.Respiratory))Aqa=
A._GetAutoObject(C.Converter).Ad0(D3.Respiratory);return A._GetAutoObject(C.Converter
).Bad(Aqa);},Axu:function(D3,NA){if(!!D3){D3.OnSetFaeces(NA);D3.OnSetFeed(NA);D3.
OnSetAppearance(NA);D3.OnSetRespiratory(NA);}},Bjp:function(AL,AJj,Ac5,Xt,AfJ){if(
!AL)throw new Error(As5);var Be=A._NewObject(C.Filter,0);var ApB=AL.Filter;var On=
A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A6=Ac5;Be.CX(On);
if(Xt>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=6;Oz.
A6=Xt;Be.CX(Oz);}if(AfJ>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=
3;Or.EJ=6;Or.A6=AfJ;Be.CX(Or);}AL.Bk(Be);var Md=A._NewObject(C.Int32ArrayWrapper
,0);Md.ZC(6);var O;for(O=0;O<Md.MN;O=O+1)Md.Set(O,0);var Vc;for(O=0;O<AL.B8();O=
O+1){Vc=AL.Ja(O,AJj);Md.Set(Vc,Md.Get(Vc)+1);}AL.Bk(ApB);return Md;},ZT:function(
Ah4){var B;var GF=A._NewObject(A.Core.Bs,0);var BgR=A._NewObject(A.Core.An3,0);GF.
Initialize(A._GetAutoObject(C.Converter).AhO());BgR.Initialize2(Ah4,0,0,0);GF=GF.
BpN(BgR);return((B=(GF.JY()|0))<0)?B+0x100000000:B;},A62:function(AL,Ac5,AfJ,Xt){
if(!AL)throw new Error(As5);var Be=A._NewObject(C.Filter,0);var ApB=AL.Filter;var
On=A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A6=Ac5;Be.CX(
On);if(Xt>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=
6;Oz.A6=Xt;Be.CX(Oz);}if(AfJ>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.
Operator=3;Or.EJ=6;Or.A6=AfJ;Be.CX(Or);}AL.Bk(Be);var Md=A._NewObject(C.Int32ArrayWrapper
,0);Md.ZC(6);var O;for(O=0;O<Md.MN;O=O+1)Md.Set(O,0);var Ao1=A._NewObject(C.Rating
,0);var A15;for(O=0;O<AL.B8();O=O+1){Ao1.Fl(O,AL);if(A._GetAutoObject(C.Helper).
AGt(Ao1)){A15=A._GetAutoObject(C.Helper).ADl(Ao1);Md.Set(A15,Md.Get(A15)+1);}}AL.
Bk(ApB);return Md;},A2C:function(AL,Ac5,Bzj){if(!AL)throw new Error(As5);var Be=
A._NewObject(C.Filter,0);var ApB=AL.Filter;var On=A._NewObject(C.Int32FilterCriterion
,0);On.Operator=0;On.EJ=1;On.A6=Ac5;Be.CX(On);var Xt=A._GetAutoObject(C.Converter
).AhO()+A._GetAutoObject(C.Helper).AmH(Bzj);var AfJ=Xt+A._GetAutoObject(C.Helper
).AmH(1);var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=6;Oz.
A6=Xt;Be.CX(Oz);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=3;Or.
EJ=6;Or.A6=AfJ;Be.CX(Or);AL.Bk(Be);var Ao1=A._NewObject(C.Rating,0);var Vc;var LV=
0;var O;for(O=0;O<AL.B8();O=O+1){Ao1.Fl(O,AL);if(A._GetAutoObject(C.Helper).AGt(
Ao1)){Vc=A._GetAutoObject(C.Helper).ADl(Ao1);if(A._GetAutoObject(C.Converter).Ad0(
Vc)>A._GetAutoObject(C.Converter).Ad0(LV))LV=Vc;}}AL.Bk(ApB);return LV;},Am4:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7J:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bjq:function(AL,AJj,Ac5,Xt
,AfJ){if(!AL)throw new Error(As5);var Be=A._NewObject(C.Filter,0);var ApB=AL.Filter;
var On=A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A6=Ac5;Be.
CX(On);if(Xt>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.
EJ=6;Oz.A6=Xt;Be.CX(Oz);}if(AfJ>0){var Or=A._NewObject(C.UInt32FilterCriterion,0
);Or.Operator=3;Or.EJ=6;Or.A6=AfJ;Be.CX(Or);}AL.Bk(Be);var Md=A._NewObject(C.Int32ArrayWrapper
,0);Md.ZC(6);var O;for(O=0;O<Md.MN;O=O+1)Md.Set(O,0);if(AL.B8()>0){var Vc=AL.Ja(
0,AJj);var ApT=AL.Hv(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApT);var
Ap$=Vc;var AKa=A._NewObject(A.Core.Bs,0);AKa.Initialize(Ac.JY());for(O=1;O<AL.B8(
);O=O+1){Vc=AL.Ja(O,AJj);ApT=AL.Hv(O,6);Ac.Initialize(ApT);if((Ac.Ab1()!==AKa.Ab1(
))||(Ac.Year!==AKa.Year)){Md.Set(Ap$,Md.Get(Ap$)+1);AKa.Initialize(Ac.JY());Ap$=
Vc;}else if(!!Vc&&(Vc<Ap$))Ap$=Vc;}Md.Set(Ap$,Md.Get(Ap$)+1);}AL.Bk(ApB);return Md;
},Aqo:function(L_){var B;var GF=A._NewObject(A.Core.Bs,0);GF.Initialize(L_);GF.AnA(
0);GF.AnD(0);GF.AnG(0);return((B=(GF.JY()|0))<0)?B+0x100000000:B;},AOd:function(
L_){var B;L_=L_+86400;var GF=A._NewObject(A.Core.Bs,0);GF.Initialize(L_);GF.AnA(
0);GF.AnD(0);GF.AnG(0);return((B=(GF.JY()|0))<0)?B+0x100000000:B;},Bjs:function(
BCB,Bzv,Amf,AlF){var Bdm=A._GetAutoObject(C.Helper).Me(BCB,Bzv);if(Bdm>0)return((
AlF-Amf)/Bdm)|0;return 0;},Bqo:function(BxB,Bye){var GF=A._NewObject(A.Core.Bs,0
);var K$=A._NewObject(A.Core.Bs,0);GF.Initialize(BxB);K$.Initialize(Bye);return(
GF.Year===K$.Year)&&(GF.Ab1()===K$.Ab1());},A68:function(){var Be=A._GetAutoObject(
C.Helper).MC();var Beq=A._NewObject(C.UInt32FilterCriterion,0);var Byn=A._GetAutoObject(
C.Helper).ZT(A._GetAutoObject(C.Device).AqQ)-1;Beq.Initialize(28,2,Byn,true);Be.
CX(Beq);var U_=A._NewObject(C.AnimalTypeFilterCriterion,0);U_.Initialize(14,0,1,
true);Be.CX(U_);if(A._GetAutoObject(C.Device).AqR){var AAo=A._NewObject(C.UInt32FilterCriterion
,0);var A2Z=A._GetAutoObject(C.Helper).Du()-21600;AAo.Initialize(30,3,A2Z,true);
Be.CX(AAo);}return Be;},Bo5:function(){var Mm=A._GetAutoObject(C.Device).An.QE();
if(Mm<=0)A.ab5("%s",AcN);else{A._GetAutoObject(C.Device).An.FD();A._GetAutoObject(
C.Device).An.QI(Mm);}Mm=A._GetAutoObject(C.Device).Bt.QE();if(Mm<=0)A.ab5("%s",AcN
);else{A._GetAutoObject(C.Device).Bt.FD();A._GetAutoObject(C.Device).Bt.QI(Mm);}
Mm=A._GetAutoObject(C.Device).Pt.QE();if(Mm<=0)A.ab5("%s",AcN);else{A._GetAutoObject(
C.Device).Pt.FD();A._GetAutoObject(C.Device).Pt.QI(Mm);}},Bku:function(Ac5){var Bj=
A._GetAutoObject(C.Device).An.LY(0,Ac5);return this.GQ(Bj);},ARp:function(Iz){var
Aiw=A._GetAutoObject(C.Device).An.Aek(22,Iz);return Aiw;},ADc:function(){var Be=
A._GetAutoObject(C.Helper).MC();var Ai$=A._NewObject(C.UInt64FilterCriterion,0);
Ai$.Initialize(22,0,0,true);Be.CX(Ai$);return Be;},AOM:function(AoU,Bzs,Qf){var Aar=-
1;switch(AoU){case 2:Aar=30;break;case 3:Aar=31;break;case 10:Aar=19;break;default:
A.ab5("%s%e",U0,AoU);}if(Aar<0)return null;var Adi=A._NewObject(C.UInt32FilterCriterion
,0);Adi.Initialize(Aar,3,A._GetAutoObject(C.Helper).Du()-Bzs,Qf);return Adi;},Bo1:
function(aFilter){var AH=aFilter.DM(30,3);if(!!AH)aFilter.Nw(AH);AH=aFilter.DM(31
,3);if(!!AH)aFilter.Nw(AH);AH=aFilter.DM(19,3);if(!!AH)aFilter.Nw(AH);},A1W:function(
AfT,Ay5,AL){if(AL.Ll())return 5;if(AfT.VisualId<=0)switch(Ay5){case 0:if(!AfT.NaisId
)return 1;break;case 1:if(!AfT.TransponderId)return 1;break;case 3:case 2:case 5:
case 4:return 1;default:throw new Error(AHC+Ay5.toFixed());}if((!AfT.NaisId&&!AfT.
TransponderId)&&A._GetAutoObject(C.Device).An.AjH(1,AfT.VisualId))return 2;if(!!
AfT.NaisId&&A._GetAutoObject(C.Helper).ARm(AfT.NaisId))return 3;if(!!AfT.TransponderId&&
A._GetAutoObject(C.Helper).ARp(AfT.TransponderId))return 4;return 0;},Aqf:function(
En){En.EC(A._GetAutoObject(C.Device).AnimalType);En.N7(A._GetAutoObject(C.Device
).Breed);En.Q6(A._GetAutoObject(C.Helper).Du()-A._GetAutoObject(C.Helper).AmH(A.
_GetAutoObject(C.Device).AdR));En.J0(A._GetAutoObject(C.Device).Gender);En.Nt(A.
_GetAutoObject(C.Device).WhereAbouts);},AMo:function(Rs,En){var FJ=0;switch(Rs){
case 0:FJ=A._GetAutoObject(C.Helper).Ak3(En.NaisId);break;case 1:FJ=A._GetAutoObject(
C.Helper).Ak3(En.TransponderId);break;case 3:FJ=A._GetAutoObject(C.Device).Aq3;break;
case 2:FJ=A._GetAutoObject(C.Device).Aq4;break;case 4:case 5:FJ=A._GetAutoObject(
C.Device).AjR;break;default:throw new Error(AHD+Rs.toFixed());}return FJ;},Bak:function(
Alm,L$,Bch,Bxm,BxU){var B;var Qt=null;var XE=null;switch(Alm){case 0:{Qt=[B=A._GetAutoObject(
C.Device),B.ASM,B.A0D];XE=[B=A._GetAutoObject(C.Device),B.Awi,B.AyZ];}break;case
1:switch(L$){case 1:{Qt=[B=A._GetAutoObject(C.Device),B.A9g,B.BbI];XE=[B=A._GetAutoObject(
C.Device),B.Awg,B.AyX];}break;case 0:{Qt=[B=A._GetAutoObject(C.Device),B.A9h,B.BbJ
];XE=[B=A._GetAutoObject(C.Device),B.Awh,B.AyY];}break;case 2:{Qt=[B=A._GetAutoObject(
C.Device),B.ASM,B.A0D];XE=[B=A._GetAutoObject(C.Device),B.Awi,B.AyZ];}break;default:
throw new Error(Ayh+L$.toFixed());}break;default:throw new Error(AHE+Alm.toFixed(
));}if(!!Qt&&!!XE){Qt[2].call(Qt[0],Bch);if(Bch>0){if((XE[1].call(XE[0])>0)&&(Bxm<
BxU))Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XE[1].call(XE[0]));else if(XE[1].call(XE[
0])<0)Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XE[1].call(XE[0]));}return Qt[1].call(Qt[
0]);}return 0;},AVM:function(En,Alm,Bxu){if(!En||(Bxu===true))return;switch(Alm){
case 0:En.Nr(A._GetAutoObject(C.Device).Av1);break;case 1:switch(En.Gender){case
0:En.Nr(A._GetAutoObject(C.Device).AEx);break;case 1:En.Nr(A._GetAutoObject(C.Device
).AEw);break;case 2:En.Nr(A._GetAutoObject(C.Device).Av1);break;default:throw new
Error(Ayh+En.Gender.toFixed());}break;default:throw new Error(AHE+Alm.toFixed());
}},Bj8:function(Rs,En){var result=false;switch(Rs){case 0:result=!!En.NaisId;break;
case 1:result=!!En.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHD+Rs.toFixed());}return result;},AKn:function(En
,Bca,Ay5,AtB,AfM){switch(Bca){case 2:if(AtB<=0)A._GetAutoObject(C.Device).AZ(21,
true,En.VisualId.toFixed(),0,AfM);else A._GetAutoObject(C.Device).AZ(48,true,(En.
VisualId.toFixed()+Ayi)+AtB.toFixed(),0,AfM);break;case 3:if(AtB<=0)A._GetAutoObject(
C.Device).AZ(21,true,A._GetAutoObject(C.Converter).Rj(En.NaisId),0,AfM);else A._GetAutoObject(
C.Device).AZ(48,true,(A._GetAutoObject(C.Converter).Rj(En.NaisId)+Ayi)+AtB.toFixed(
),0,AfM);break;case 4:if(AtB<=0)A._GetAutoObject(C.Device).AZ(25,true,A._GetAutoObject(
C.Converter).Rj(En.TransponderId),0,AfM);else A._GetAutoObject(C.Device).AZ(47,true
,(A._GetAutoObject(C.Converter).Rj(En.TransponderId)+Ayi)+AtB.toFixed(),0,AfM);break;
case 1:switch(Ay5){case 1:A._GetAutoObject(C.Device).AZ(42,true,A.jV,0,AfM);break;
case 0:A._GetAutoObject(C.Device).AZ(43,true,A.jV,0,AfM);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).AZ(22,true,A.jV,0,AfM);break;default:throw new
Error(AHC+Ay5.toFixed());}break;case 5:A._GetAutoObject(C.Device).AZ(41,true,A._GetAutoObject(
C.Device).An.HK().toFixed(),0,AfM);break;case 0:break;default:throw new Error(AWq+
Bca.toFixed());}},BdR:function(Bco,L$){var B;var AAs=null;switch(Bco){case 0:AAs=[
B=A._GetAutoObject(C.Device),B.Awi,B.AyZ];break;case 1:switch(L$){case 1:AAs=[B=
A._GetAutoObject(C.Device),B.Awg,B.AyX];break;case 0:AAs=[B=A._GetAutoObject(C.Device
),B.Awh,B.AyY];break;case 2:AAs=[B=A._GetAutoObject(C.Device),B.Awi,B.AyZ];break;
default:throw new Error(Ayh+L$.toFixed());}break;default:throw new Error(AWr+Bco.
toFixed());}return AAs;},A7i:function(Qi,Bx7){var AaR=A._NewObject(A.Core.Bs,0);
AaR.Initialize(Qi);var ABM=AaR.Year;var Bj=A._GetAutoObject(C.Device).Pt.LY(0,ABM
);var Vb=A._NewObject(C.CalfDeregistrations,0);if(Bj<0){if(A._GetAutoObject(C.Device
).Pt.Ll())A._GetAutoObject(C.Device).AZ(51,true,A._GetAutoObject(C.Device).Pt.HK(
).toFixed(),0,null);else{Vb.G7();Vb.AkC(ABM);}}else Vb.Fl(Bj,A._GetAutoObject(C.
Device).Pt);Vb.AwA(Vb.Deregistrations+1);if(Bx7)Vb.Awz(Vb.Deaths+1);Vb.Cr(A._GetAutoObject(
C.Device).Pt);},AMm:function(LV,AlO,AlG){var AKK=0;if((AlO&&(AlG===1))||(LV===1)
)AKK=1;else if((AlO&&(AlG===2))||(LV===2))AKK=2;else if(!!LV&&(LV!==5))AKK=LV;return AKK;
},Bdr:function(Bym){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SZ.
Cx=A._GetAutoObject(C.Device).AcF;this.SZ.B3=Bym;this.SZ.AnV(this);}},AC$:function(
){var Be=this.AOL();var Bef=A._NewObject(C.BoolFilterCriterion,0);Bef.Initialize(
38,0,true,true);Be.CX(Bef);return Be;},A6Z:function(Eh){var Be=A._GetAutoObject(
C.Helper).MC();if(A._GetAutoObject(C.Device).Aqb){var A2F=A._GetAutoObject(C.Helper
).AOM(Eh,21600,true);Be.CX(A2F);}return Be;},A7c:function(){var Be=A._GetAutoObject(
C.Helper).MC();var BeH=A._NewObject(C.UInt64FilterCriterion,0);BeH.Initialize(26
,0,0,true);Be.CX(BeH);return Be;},A7f:function(){var B;var Be=A._GetAutoObject(C.
Helper).MC();var AAy=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DM(34,3))?
B:null);if(!!AAy)Be.Nw(AAy);var Bf3=A._NewObject(C.BoolFilterCriterion,0);Bf3.Initialize(
37,0,true,true);Be.CX(Bf3);return Be;},V1:function(A9,Atu,A1h){var B;A9=Math.trunc(
A9/this.ApN(Atu));A9%=this.ApN(A1h);return A9;},ApN:function(Bcp){switch(Bcp){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AWs+Bcp.toFixed());}},MC:
function(){var Be=A._NewObject(C.Filter,0);var Bgo=A._NewObject(C.BoolFilterCriterion
,0);Bgo.Initialize(10,0,true,true);Be.CX(Bgo);var AAy=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAy.Initialize(34,3,6,true);Be.CX(AAy);return Be;},Are:function(aFilter){return!
this.ADd(aFilter);},ADd:function(aFilter){var Jp=0;var Aw=aFilter.AON();while(!!
Aw){if(Aw.YN===false)Jp++;Aw=aFilter.AOS(Aw);}return Jp;},AOL:function(){var Be=
this.MC();var U_=A._NewObject(C.AnimalTypeFilterCriterion,0);U_.Initialize(14,0,
1,true);Be.CX(U_);return Be;},ADi:function(){var B;var A4J;var Kb=this.BjK();A4J=(((
B=A._GetAutoObject(C.Converter).Aqy(Kb))<0)?B+0x10000000000000000:B)*this.ApN(12
);if((Kb===10)&&(A._GetAutoObject(C.Device).OX>0)){var BzQ=A._GetAutoObject(C.Helper
).V1(A._GetAutoObject(C.Device).OX,10,2)*this.ApN(8);A4J+=BzQ;}return A4J;},BjK:
function(){var Kb=0;if(A._GetAutoObject(C.Device).OX>0)Kb=A._GetAutoObject(C.Converter
).S8(A._GetAutoObject(C.Device).OX);if(!Kb)Kb=A._GetAutoObject(C.Converter).A7M(
A._GetAutoObject(C.Device).Language);return Kb;},ARm:function(Qg){var Aiw=A._GetAutoObject(
C.Device).An.Aek(26,Qg);return Aiw;},Aj3:function(AfN){switch(AfN){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AWt+AfN.toFixed());}},BhE:function(Rs,En){var FJ=0;switch(
Rs){case 1:FJ=A._GetAutoObject(C.Helper).Ak3(En.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)FJ=A._GetAutoObject(C.Device).
AjR;else switch(En.Gender){case 0:FJ=A._GetAutoObject(C.Device).Aq4;break;case 1:
FJ=A._GetAutoObject(C.Device).Aq3;break;case 2:FJ=A._GetAutoObject(C.Device).AjR;
break;default:throw new Error(AHF+En.Gender.toFixed());}break;default:throw new Error(
AWu+Rs.toFixed());}return FJ;},Bjf:function(){var B;var Az7=(((((((A.aaR(A.acf.AhG
)+A.aaR(A.acf.Colon))+MS)+A._GetAutoObject(C.Device).AhG)+Ayj)+A.aaR(A.acf.BoJ))+
A.aaR(A.acf.Colon))+MS)+A._GetAutoObject(A.acj.KQ).Bjd(((B=A._GetAutoObject(C.Device
).Q2.Timestamp)<0)?B+0x100000000:B);return Az7;},Bjg:function(){var B;var Az7=((((((((((((((((((((((((((((
AWv+A._GetAutoObject(C.Device).R5.AEo.toFixed())+JE)+A._GetAutoObject(C.Device).
R5.AEt.toFixed())+JE)+A._GetAutoObject(C.Device).R5.AGB.toFixed())+O$)+A._GetAutoObject(
C.Device).R5.ACB)+O$)+A._GetAutoObject(A.acj.KQ).AjJ(((B=A._GetAutoObject(C.Device
).R5.Timestamp)<0)?B+0x100000000:B))+MS)+AWw)+A._GetAutoObject(C.Device).SE.AEo.
toFixed())+JE)+A._GetAutoObject(C.Device).SE.AEt.toFixed())+JE)+A._GetAutoObject(
C.Device).SE.AGB.toFixed())+O$)+A._GetAutoObject(C.Device).SE.ACB)+O$)+A._GetAutoObject(
A.acj.KQ).AjJ(((B=A._GetAutoObject(C.Device).SE.Timestamp)<0)?B+0x100000000:B))+
MS)+AWx)+A._GetAutoObject(C.Helper).BjN())+O$)+A._GetAutoObject(C.Device).GetCommitHash(
))+O$)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O$)+A._GetAutoObject(
A.acj.KQ).AjJ(A._GetAutoObject(C.Device).GetCommitEpoch());return Az7;},Bje:function(
){var B;var Az7=(((((((((((((((((((((AWy+A._GetAutoObject(C.Device).Q2.ARO.toFixed(
))+JE)+A._GetAutoObject(C.Device).Q2.ARP.toFixed())+JE)+A._GetAutoObject(C.Device
).Q2.ARN.toFixed())+MS)+A.aaR(A.acf.A6S))+A.aaR(A.acf.Colon))+Oj)+A._GetAutoObject(
A.acj.KQ).AjJ(((B=A._GetAutoObject(C.Device).Q2.Timestamp)<0)?B+0x100000000:B))+
Ayj)+AWz)+A._GetAutoObject(C.Device).S5.AVC.toFixed())+JE)+A._GetAutoObject(C.Device
).S5.AVD.toFixed())+JE)+A._GetAutoObject(C.Device).S5.AVB.toFixed())+MS)+A.aaR(A.
acf.A6S))+A.aaR(A.acf.Colon))+Oj)+A._GetAutoObject(A.acj.KQ).AjJ(((B=A._GetAutoObject(
C.Device).S5.Timestamp)<0)?B+0x100000000:B);return Az7;},A7d:function(A1h){var B;
var O;var AA7=A.jV;for(O=1;O<=A1h;O=O+1)if(!!A.abz(0,2))AA7=AA7+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AA7=AA7+String.fromCharCode(A.abz(48,57)&0xFFFF);return AA7;
},Abt:function(Eo){var Azn=0;if(Eo===1)Eo=0;var Bc8=this.AgD.Avq(Eo);if(Bc8>=0)Azn=
this.Afz.Get(Bc8);return Azn;},ADk:function(Eo){var FX=0;var ABK=this.AgD.Avq(Eo
);if(ABK>=0)FX=this.Afy.Get(ABK);return FX;},ADj:function(Eo){var FX=0;var ABK=this.
AgD.Avq(Eo);if(ABK>=0)FX=this.Afx.Get(ABK);return FX;},A65:function(){var Be=this.
MC();var U_=A._NewObject(C.AnimalTypeFilterCriterion,0);U_.Initialize(14,0,A._GetAutoObject(
C.Device).ACU,true);Be.CX(U_);return Be;},ARq:function(K3){var BN=Math.trunc(K3/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).AND(BN))return 2;else return 3;},A7h:function(BAw){var Be=A._GetAutoObject(
C.Helper).ADc();var AfS=A._GetAutoObject(C.Helper).A60(3,BAw);AfS.YN=true;Be.CX(
AfS);return Be;},A60:function(Eb,Bb$){var Aw=A._NewObject(C.UInt32FilterCriterion
,0);Aw.EJ=4;switch(Eb){case 2:{Aw.Operator=3;Aw.A6=A._GetAutoObject(C.Helper).ZT(
Bb$);}break;case 3:{Aw.Operator=2;Aw.A6=A._GetAutoObject(C.Helper).ZT(Bb$-1);}break;
default:A.ab5("%s%e",AHG,Eb);}return Aw;},BjN:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+JE)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+JE)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A5r:function(
Rs,En){var FJ=0;switch(Rs){case 0:FJ=En.VisualId;break;case 2:FJ=A._GetAutoObject(
C.Helper).Ak3(En.TransponderId);break;case 3:if(En.NaisId>0)FJ=A._GetAutoObject(
C.Helper).Ak3(En.NaisId);else FJ=En.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)FJ=A._GetAutoObject(C.Device).AjR;else switch(En.
Gender){case 0:FJ=A._GetAutoObject(C.Device).Aq4;break;case 1:FJ=A._GetAutoObject(
C.Device).Aq3;break;case 2:FJ=A._GetAutoObject(C.Device).AjR;break;default:throw new
Error(AHF+En.Gender.toFixed());}break;default:throw new Error(AWA+Rs.toFixed());
}return FJ;},Bal:function(){var B;var I3=null;var Tn=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){I3=[B=A._GetAutoObject(C.Device),B.Anr,B.Aov];Tn=A._GetAutoObject(
C.Device).Au3;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{I3=[B=A.
_GetAutoObject(C.Device),B.Awc,B.AyV];Tn=A._GetAutoObject(C.Device).ACM;}break;case
0:{I3=[B=A._GetAutoObject(C.Device),B.Awd,B.AyW];Tn=A._GetAutoObject(C.Device).ACN;
}break;case 2:{I3=[B=A._GetAutoObject(C.Device),B.Anr,B.Aov];Tn=A._GetAutoObject(
C.Device).Au3;}break;default:;}if(!!I3)switch(Tn){case 1:I3[2].call(I3[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7K:function(Qg,En){return(En.NaisId!==Qg)&&this.
ARm(Qg);},Bkf:function(Iz,En){return(En.TransponderId!==Iz)&&this.ARp(Iz);},AOJ:
function(){var Be=A._GetAutoObject(C.Helper).A7f();var AAq=A._NewObject(C.UInt64FilterCriterion
,0);AAq.Initialize(35,5,0,true);Be.CX(AAq);return Be;},Avr:function(){var Be=A._GetAutoObject(
C.Helper).A7f();var AAq=A._NewObject(C.UInt64FilterCriterion,0);AAq.Initialize(35
,0,0,true);Be.CX(AAq);return Be;},J6:function(A0_,Ah3){A0_.Aj(Ah3);A0_.As(Ah3);A0_.
Z(Ah3);},ANx:function(Ah5){var B;var Aa;var A3i=false;var Xy=Ah5.TS(null,0x1);while(
!!Xy&&(((B=Xy)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xy)?Xy:null
);if(!!Aa){Aa.Bh(A3i);A3i=!A3i;}Xy=Ah5.TS(Xy,0x1);}},Bo3:function(Iz){var Xv=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A4p=A._GetAutoObject(
C.Device).An.Aer(22,Iz);var Cz=A._NewObject(C.Animal,0);Cz.Fl(A4p,A._GetAutoObject(
C.Device).An);Cz.PY(0);Cz.Cr(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xv);},A63:function(Att,Aoz){var Be=null;switch(Att){case 0:Be=this.Bjx(Aoz
);break;case 1:Be=this.ADc();break;default:throw new Error(Ayk+Att.toFixed());}return Be;
},Bjx:function(Bxg){var Be=A._GetAutoObject(C.Helper).MC();var AfS=this.A60(2,Bxg
);Be.CX(AfS);return Be;},ByM:function(Att,Aoz){var Xv=A._GetAutoObject(C.Device).
An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A63(Att,Aoz));var CB=A._GetAutoObject(
C.Device).An.B8();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).GQ(O);A.
_GetAutoObject(C.Helper).W.Ae3(false);A._GetAutoObject(C.Helper).W.Cr(A._GetAutoObject(
C.Device).An);}A._GetAutoObject(C.Device).An.Bk(Xv);},Bjy:function(Att,Aoz){var Xv=
A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A63(Att
,Aoz));var Gi=A._GetAutoObject(C.Device).An.B8();A._GetAutoObject(C.Device).An.Bk(
Xv);return Gi;},A6$:function(AL){var Xv=AL.Filter;AL.Bk(this.Avr());var O;var A2_=
4294967295;for(O=0;O<AL.B8();O++){var Pf=AL.Hv(O,4);if(Pf<A2_)A2_=Pf;}AL.Bk(Xv);
return A._GetAutoObject(C.Helper).Me(A2_,A._GetAutoObject(C.Helper).Du());},ARo:
function(){if(A._GetAutoObject(C.Device).P4.Z3!==6)return false;if((A._GetAutoObject(
C.Device).P4.AsQ===1529)&&(A._GetAutoObject(C.Device).P4.Asj===16900))return true;
return false;},Bkv:function(Qg){if(!Qg){A.ab5("%s%U",AWB,Qg);return false;}var Bj=
A._GetAutoObject(C.Device).An.Aer(26,Qg);return this.GQ(Bj);},Arz:function(){return this.
UD;},A9r:function(){return this.AhD;},BlQ:function(){return this.AUL;},BlR:function(
){return this.AUM;},BlU:function(){return this.AG2;},_Init:function(aArg){C.AmM.
_Init.call(this,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);A.acl.Gn._Init.call(this.KM={I:this},0);A.acl.Gn._Init.call(
this.SZ={I:this},0);C.AMI._Init.call(this.AdZ={I:this},0);C.AVs._Init.call(this.
UK={I:this},0);C.AVr._Init.call(this.UJ={I:this},0);C.TM._Init.call(this.Aem={I:
this},0);C.AV8._Init.call(this.Afy={I:this},0);C.AV7._Init.call(this.Afx={I:this
},0);C.AV6._Init.call(this.Afw={I:this},0);C.AV_._Init.call(this.Afz={I:this},0);
C.AMJ._Init.call(this.AgD={I:this},0);this.__proto__=C.HelperClass;var B;this.KM.
HO(1);this.KM.Fp(3000);this.KM.B3=100;this.SZ.AwF(10);this.SZ.WK(5);this.SZ.HO(1
);this.SZ.Fp(4000);this.Aem.B3=false;this.Aem.Cx=true;this.Aem.HO(1);this.Aem.Fp(
100);this.KM.SG=[this,this.BCD];this.KM.Q=[this,this.BlU,this.Bob];this.SZ.SG=[this
,this.BCF];this.SZ.Q=[B=A._GetAutoObject(C.Device),B.AEV,B.AI0];this.Aem.Q=[B=A.
_GetAutoObject(C.Device),B.AEW,B.AI1];this.Init(aArg);var J_=this._variants();if(
J_){this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AmM;this.W._Done();this.Av._Done();this.KM._Done();this.
SZ._Done();this.AdZ._Done();this.UK._Done();this.UJ._Done();this.Aem._Done();this.
Afy._Done();this.Afx._Done();this.Afw._Done();this.Afz._Done();this.AgD._Done();
C.AmM._Done.call(this);},_ReInit:function(){C.AmM._ReInit.call(this);this.W._ReInit(
);this.Av._ReInit();this.KM._ReInit();this.SZ._ReInit();this.AdZ._ReInit();this.
UK._ReInit();this.UJ._ReInit();this.Aem._ReInit();this.Afy._ReInit();this.Afx._ReInit(
);this.Afw._ReInit();this.Afz._ReInit();this.AgD._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AmM._Mark.call(this,D);if((B=this.UD)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AhD)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AUL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUM)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aem)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afy)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acq.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A6:false
,Abm:function(){var Aw=A._NewObject(C.BoolFilterCriterion,0);Aw.E9(this);return Aw;
},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Eb,A9,
Qf){this.EJ=Bc;this.Operator=Eb;this.A6=A9;this.YN=Qf;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A6:0,Abm:function(
){var Aw=A._NewObject(C.UInt32FilterCriterion,0);Aw.E9(this);return Aw;},E9:function(
AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.UInt32FilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Eb,A9,Qf){this.EJ=Bc;
this.Operator=Eb;this.A6=A9;this.YN=Qf;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,BirthRegistrationsListMenu:16
,LAST:17};C.EnumToString={BT:function(A7){throw new Error(As6+A7.toFixed());},LA:
function(A7){return this.BT(A7);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BT:function(
A7){var AJ1=A7;var BC;switch(AJ1){case 3:BC=A.aaR(A.acf.Avx);break;case 34:BC=A.
aaR(A.acf.TB);break;case 35:BC=A.aaR(A.acf.Vz);break;case 43:BC=A.aaR(A.acf.AOI);
break;default:BC=this.Bqp(A7);}return BC;},Bqp:function(A7){var AJ1=A7;var BC=A.
jV;switch(AJ1){case 0:BC=Ayl;break;case 2:BC=AWC;break;case 4:BC=AHH;break;case 39:
BC=AWD;break;case 38:BC=AHI;break;case 63:BC=AHJ;break;case 64:BC=AHK;break;case
82:BC=AWE;break;case 83:BC=AHL;break;case 92:BC=AWF;break;case 93:BC=AWG;break;case
65:BC=Rp;break;case 3:BC=U1;break;case 6:BC=AWH;break;case 16:BC=AWI;break;case 22:
BC=AWJ;break;case 42:BC=AWK;break;case 88:BC=AWL;break;case 87:BC=AWM;break;case
89:BC=AWN;break;case 95:BC=AhV;break;case 17:BC=AHM;break;case 23:BC=AWO;break;case
18:BC=AWP;break;case 19:BC=AHN;break;case 37:BC=AHO;break;case 76:BC=Aym;break;case
1:BC=Qc;break;case 5:BC=AWQ;break;case 7:BC=AWR;break;case 81:BC=AWS;break;case 8:
BC=As7;break;case 9:BC=AWT;break;case 40:BC=AWU;break;case 41:BC=AWV;break;case 24:
BC=AWW;break;case 10:BC=AWX;break;case 60:BC=AWY;break;case 21:BC=As8;break;case
11:BC=AWZ;break;case 29:BC=AW0;break;case 48:BC=AW1;break;case 30:BC=AW2;break;case
12:BC=AW3;break;case 13:BC=AW4;break;case 14:BC=AW5;break;case 15:BC=AW6;break;case
69:BC=AW7;break;case 70:BC=AW8;break;case 20:BC=AHP;break;case 25:BC=Alc;break;case
66:BC=AW9;break;case 59:BC=AW_;break;case 58:BC=AW$;break;case 56:BC=Ayn;break;case
57:BC=Ald;break;case 68:BC=AhW;break;case 67:BC=Ayo;break;case 84:BC=Aoi;break;case
77:BC=AhX;break;case 26:BC=AXa;break;case 28:BC=Ayp;break;case 27:BC=AHQ;break;case
31:BC=AfF;break;case 78:BC=AHR;break;case 34:BC=Aai;break;case 35:BC=Ale;break;case
32:BC=Aoj;break;case 45:BC=AXb;break;case 49:BC=AXc;break;case 55:BC=AXd;break;case
54:BC=AXe;break;case 33:BC=AXf;break;case 36:BC=As9;break;case 50:BC=AHS;break;case
75:BC=AHT;break;case 43:BC=AXg;break;case 44:BC=AXh;break;case 61:BC=AXi;break;case
62:BC=AXj;break;case 46:BC=AXk;break;case 47:BC=AXl;break;case 85:BC=AXm;break;case
86:BC=AXn;break;case 71:BC=AXo;break;case 72:BC=AXp;break;case 74:BC=AXq;break;case
73:BC=Ayq;break;case 51:BC=AHU;break;case 52:BC=AHV;break;case 53:BC=AHW;break;case
79:BC=AHX;break;case 80:BC=AHY;break;case 90:BC=AHZ;break;case 91:BC=AXr;break;case
94:BC=AXs;break;default:throw new Error(AXt+AJ1.toFixed());}return BC;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BT:function(A7){
var BfX=A7;var Pi=A.jV;switch(BfX){case 0:Pi=AXu;break;case 1:Pi=U1;break;case 8:
Pi=AXv;break;case 2:Pi=AXw;break;case 3:Pi=AXx;break;case 4:Pi=Ayr;break;case 5:
Pi=AH0;break;case 6:Pi=AXy;break;case 7:Pi=AH1;break;case 11:Pi=AhY;break;case 12:
Pi=U2;break;case 9:Pi=AXz;break;case 10:Pi=Aaj;break;case 14:Pi=AXA;break;case 15:
Pi=AXB;break;case 13:Pi=Alf;break;case 16:Pi=AfG;break;default:throw new Error(AhZ+
BfX.toFixed());}return Pi;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BT:function(A7){var Bgw=A7;var Bp=A.jV;switch(Bgw){case 4:
Bp=Aok;break;case 0:Bp=Ays;break;case 2:Bp=Pb;break;case 3:Bp=AXC;break;case 1:Bp=
AH2;break;default:throw new Error(AH3+Bgw.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BT:function(A7){
var BeB=A7;var Bp=A.jV;switch(BeB){case 4:Bp=Aok;break;case 0:Bp=Ays;break;case 2:
Bp=AXD;break;case 1:Bp=AH2;break;case 3:Bp=Ayt;break;default:throw new Error(AH4+
BeB.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BT:
function(A7){var BgW=A7;var Ap4=A.jV;switch(BgW){case 0:Ap4=A.aaR(A.acf.BqG);break;
case 1:Ap4=A.aaR(A.acf.BqH);break;default:throw new Error(AXE+BgW.toFixed());}return Ap4;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BT:function(A7){var AK$=A7;var type=
A.jV;switch(AK$){case 0:type=A.aaR(A.acf.Bh4);break;case 1:type=A.aaR(A.acf.Big);
break;case 2:type=A.aaR(A.acf.Bkn);break;default:throw new Error(AXF+AK$.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,Danish:17,Hungarian:18,Japanese:19,Latvian:20,Polish:21,Portuguese:
22,Romanian:23,Swedish:24,Croatian:25,Lithuanian:26,Slovenian:27,LAST:28};C.LanguageToString={
BT:function(A7){var AAk=A7;var I4=A.jV;switch(AAk){case 14:I4=AXG;break;case 13:
I4=AXH;break;case 6:I4=AXI;break;case 25:I4=AXJ;break;case 11:I4=AXK;break;case 17:
I4=AXL;break;case 0:I4=AH5;break;case 10:I4=AXM;break;case 12:I4=AH6;break;case 5:
I4=AH7;break;case 3:I4=Ayu;break;case 1:I4=AXN;break;case 8:I4=AXO;break;case 18:
I4=AXP;break;case 4:I4=AXQ;break;case 19:I4=AXR;break;case 20:I4=AXS;break;case 26:
I4=AXT;break;case 15:I4=AXU;break;case 21:I4=Aol;break;case 22:I4=As_;break;case
23:I4=AH8;break;case 9:I4=AXV;break;case 27:I4=AXW;break;case 2:I4=AXX;break;case
24:I4=AXY;break;case 7:I4=AXZ;break;case 16:I4=AX0;break;default:throw new Error(
AH9+AAk.toFixed());}return I4;},LA:function(A7){var AAk=A7;var CN=A.jV;switch(AAk
){case 14:CN=AX1;break;case 13:CN=W$;break;case 6:CN=AX2;break;case 25:CN=UY;break;
case 11:CN=AX3;break;case 17:CN=AX4;break;case 0:CN=AX5;break;case 10:CN=Xg;break;
case 12:CN=AX6;break;case 5:CN=UZ;break;case 3:CN=Xb;break;case 1:CN=O_;break;case
8:CN=AX7;break;case 18:CN=Oi;break;case 4:CN=Xc;break;case 19:CN=AX8;break;case 20:
CN=Tf;break;case 26:CN=Xe;break;case 15:CN=Xh;break;case 21:CN=Xi;break;case 22:
CN=Xj;break;case 23:CN=Aad;break;case 9:CN=Tg;break;case 27:CN=AH_;break;case 2:
CN=Aaf;break;case 24:CN=AX9;break;case 7:CN=Xl;break;case 16:CN=K2;break;default:
throw new Error(AH9+AAk.toFixed());}return CN;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BT:function(A7){var AtT=A7;var AKg=A.jV;
switch(AtT){case 0:AKg=A.aaR(A.acf.Male);break;case 1:AKg=A.aaR(A.acf.Female);break;
case 2:AKg=A.aaR(A.acf.Unknown);break;default:throw new Error(AX_+AtT.toFixed());
}return AKg;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BT:
function(A7){var type=A7;var AfW=A.jV;switch(type){case 0:AfW=A.aaR(A.acf.BpE);break;
case 1:AfW=A.aaR(A.acf.BqC);break;case 2:AfW=A.aaR(A.acf.Triplets);break;case 3:
AfW=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AH$+type.toFixed());}
return AfW;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BT:function(A7){var BgQ=A7;var Bp=A.jV;switch(BgQ){case 7:
Bp=Aok;break;case 0:Bp=Ays;break;case 6:Bp=Ayt;break;case 2:Bp=AIa;break;case 5:
Bp=AIb;break;case 3:Bp=AIc;break;case 4:Bp=Ayv;break;case 1:Bp=Ayw;break;default:
throw new Error(AId+BgQ.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BT:function(A7){var AA8=A7;switch(AA8){case 0:return A.
jV;case 1:return A.aaR(A.acf.BoQ);case 4:return A.aaR(A.acf.BoP);case 3:return A.
aaR(A.acf.BoR);case 2:return A.aaR(A.acf.BoO);default:throw new Error(AIe+AA8.toFixed(
));}},LA:function(A7){var AA8=A7;switch(AA8){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGu);case 3:return A.aaR(A.acf.AGv);case
2:return A.aaR(A.acf.AGs);default:throw new Error(AIe+AA8.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BT:function(
A7){var Alv=A7;var Azu=A.jV;switch(Alv){case 0:case 5:Azu=A.jV;break;case 3:Azu=
A.aaR(A.acj.BpK);break;case 2:Azu=A.aaR(A.acj.BpM);break;case 1:Azu=A.aaR(A.acj.
BpL);break;default:throw new Error(AIf+Alv.toFixed());}return Azu;},_Init:function(
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
116,ScannedNaisIdNotFound:117,LAST:118};C.PopupState={Queued:0,Unknown:1,Displayed:
2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:
7,ClosedWithNo:8,Opened:9};C.PopupContext={AGf:null,AkE:A.jV,Ak0:0,PopupState:1,
Id:0,Show:false,BnV:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AGf)(B=this.AGf)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AGf)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BT:function(A7){switch(A7){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return Ayx+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.PopupIdToString={BT:function(A7){var AdC=A7;var At=A.
jV;var AJZ;AJZ=A.aaR(A.acf.Bq0)+MS;switch(AdC){case 0:At=A.aaR(A.acf.Unknown);break;
case 1:At=A.aaR(A.acf.SevereError);break;case 58:At=A.aaR(A.acf.Bi4);break;case 2:
At=A.aaR(A.acf.Bi2);break;case 3:At=A.aaR(A.acf.BqM);break;case 77:At=A._GetAutoObject(
C.Helper).Bjg();break;case 78:At=A._GetAutoObject(C.Helper).Bje();break;case 79:
At=A._GetAutoObject(C.Helper).Bjf();break;case 9:At=A.aaR(A.acf.Brc);break;case 5:
At=A.aaR(A.acf.SuccessDataSync);break;case 8:At=A.aaR(A.acf.SuccessResetFactorySettings
);break;case 116:At=A.aaR(A.acf.Bp4);break;case 34:At=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:At=A._GetAutoObject(C.Device).ADh();break;case 82:At=A.aaR(A.acf.
Bi6);break;case 83:At=A.aaR(A.acf.Bi7);break;case 80:At=A.aaR(A.acf.BpW);break;case
81:At=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:At=A.aaR(A.acf.BhR);break;
case 92:At=A.aaR(A.acf.Bo7);break;case 4:At=A.aaR(A.acf.WarningDataSync);break;case
7:At=A.aaR(A.acf.Bra);break;case 33:At=A.aaR(A.acf.WarningResetAnimalData);break;
case 115:At=A.aaR(A.acf.WarningResetDeviceData);break;case 6:At=A.aaR(A.acf.WarningRestart
);break;case 27:At=A.aaR(A.acf.WarningNoActionDefined);break;case 64:At=A.aaR(A.
acf.WarningActionNotApplicable);break;case 28:At=A.aaR(A.acf.WarningNoMenuItemVisible
);break;case 29:At=A.aaR(A.acf.WarningEnterPresentationMode);break;case 30:At=A.
aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:At=((AJZ+A.aaR(A.acf.ARW))+MS
)+A.aaR(A.acf.BkB);break;case 50:At=((AJZ+A.aaR(A.acf.ARW))+MS)+A.aaR(A.acf.BkD);
break;case 51:At=((AJZ+A.aaR(A.acf.ARW))+MS)+A.aaR(A.acf.BkC);break;case 42:At=A.
aaR(A.acf.Bq_);break;case 45:At=A.aaR(A.acf.Bq4);break;case 46:At=A.aaR(A.acf.WarningNoValidCountryCode
);break;case 57:At=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:At=A.aaR(
A.acf.WarningOutdatedAnimalWeights);break;case 53:At=A.aaR(A.acf.WarningWeightEvaluationSingular
);break;case 56:At=A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:At=A.
aaR(A.acf.ScanError);break;case 12:At=A.aaR(A.acf.ScanNotFound);break;case 13:At=
A.aaR(A.acf.BhJ);break;case 36:At=A.aaR(A.acf.Bqx);break;case 117:At=A.aaR(A.acf.
Bre);break;case 14:At=A.aaR(A.acf.AnimalNotFound);break;case 15:At=A.aaR(A.acf.SuccessUnregister
);break;case 35:At=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:At=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:At=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:At=A.aaR(A.acf.Bij);break;case 49:At=A.aaR(A.acf.EvaluationInProgress
);break;case 16:At=A.aaR(A.acf.Bio);break;case 17:At=A.aaR(A.acf.BpO);break;case
18:At=A.aaR(A.acf.Bp2);break;case 19:At=A.aaR(A.acf.BpP);break;case 20:At=A.aaR(
A.acf.Bp3);break;case 54:At=A.aaR(A.acf.BpX);break;case 55:At=A.aaR(A.acf.Bp0);break;
case 21:At=A.aaR(A.acf.Bap);break;case 48:At=(A.aaR(A.acf.Bap)+MS)+A.aaR(A.acf.A59
);break;case 22:At=A.aaR(A.acf.Bq6);break;case 63:At=A.aaR(A.acf.Bq7);break;case
85:At=A.aaR(A.acf.Bq9);break;case 43:At=A.aaR(A.acf.Bq8);break;case 25:At=A.aaR(
A.acf.A$_);break;case 47:At=(A.aaR(A.acf.A$_)+MS)+A.aaR(A.acf.A59);break;case 107:
At=A.aaR(A.acf.BqI);break;case 31:{var BAf=(((((((((((((((((((A.aaR(A.acf.Bia)+Ayj
)+A.aaR(A.acf.ANz))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bic))+MS)+A.aaR(A.acf.AOy
))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bja))+MS)+A.aaR(A.acf.AUv))+A.aaR(A.acf.Colon
))+Oj)+A.aaR(A.acf.BoT))+MS)+A.aaR(A.acf.AUu))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.
BoS);At=BAf;}break;case 32:At=A.aaR(A.acf.Bqy);break;case 69:At=A.aaR(A.acf.BkO);
break;case 44:At=A.aaR(A.acf.Brb);break;case 37:At=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:At=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:At=A.aaR(
A.acf.BoK);break;case 76:At=(A.aaR(A.acf.A5M)+MS)+A.aaR(A.acf.AUx);break;case 40:
At=A.aaR(A.acf.BpY);break;case 75:At=A.aaR(A.acf.BpQ);break;case 59:At=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:At=A.aaR(A.acf.BpS);break;case 96:
At=A.aaR(A.acf.BpT);break;case 60:At=A.aaR(A.acf.BpU);break;case 98:At=A.aaR(A.acf.
BpV);break;case 61:At=A.aaR(A.acf.Bp5);break;case 104:At=A.aaR(A.acf.Bp6);break;
case 65:At=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:At=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:At=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:At=A.aaR(A.
acf.BpR);break;case 86:At=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:At=
A.aaR(A.acf.BpZ);break;case 70:At=A.aaR(A.acf.Bi8);break;case 71:At=A.aaR(A.acf.
A$2);break;case 72:At=A.aaR(A.acf.Bp9);break;case 113:At=(A.aaR(A.acf.A$2)+MS)+A.
aaR(A.acf.A70);break;case 97:At=A.aaR(A.acf.Bi_);break;case 100:At=(A.aaR(A.acf.
A$3)+MS)+A.aaR(A.acf.A$o);break;case 114:At=(A.aaR(A.acf.A$3)+MS)+A.aaR(A.acf.A70
);break;case 99:At=A.aaR(A.acf.Bp_);break;case 88:At=A.aaR(A.acf.Bi9);break;case
89:At=A.aaR(A.acf.Bp7);break;case 90:At=A.aaR(A.acf.Bp8);break;case 73:At=A.aaR(
A.acf.WarningNoPremisesID);break;case 74:At=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:At=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:At=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:At=A.aaR(A.acf.Bjn);break;case 87:
At=A.aaR(A.acf.Brf);break;case 95:At=A.aaR(A.acf.Bq3);break;case 108:At=A.aaR(A.
acf.Bq5);break;case 109:At=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
At=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:At=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:At=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:At=A.
aaR(A.acf.Bq$);break;case 110:At=A.aaR(A.acf.Bh3);break;case 111:At=A.aaR(A.acf.
Bpg);break;case 112:At=A.aaR(A.acf.Bph);break;default:throw new Error(Ayy+AdC.toFixed(
));}return At;},LA:function(A7){var AdC=A7;var At=A.jV;switch(AdC){case 0:At=AX$;
break;case 1:At=AYa;break;case 58:At=AYb;break;case 2:At=AYc;break;case 3:At=AYd;
break;case 77:At=AYe;break;case 78:At=AYf;break;case 79:At=AYg;break;case 9:At=AYh;
break;case 5:At=AYi;break;case 8:At=AYj;break;case 116:At=AYk;break;case 34:At=Ayz;
break;case 80:At=AYl;break;case 81:At=AYm;break;case 91:At=AyA;break;case 92:At=
As$;break;case 82:At=U3;break;case 83:At=Ata;break;case 10:At=AYn;break;case 4:At=
AYo;break;case 7:At=AYp;break;case 33:At=AIg;break;case 115:At=AYq;break;case 6:
At=AIh;break;case 27:At=AYr;break;case 64:At=AYs;break;case 28:At=AYt;break;case
29:At=Atb;break;case 30:At=AYu;break;case 41:At=AYv;break;case 50:At=AIi;break;case
51:At=AYw;break;case 42:At=AYx;break;case 45:At=AYy;break;case 46:At=AYz;break;case
57:At=AcP;break;case 52:At=AYA;break;case 53:At=AYB;break;case 56:At=AYC;break;case
11:At=AYD;break;case 12:At=AIj;break;case 13:At=AYE;break;case 36:At=AYF;break;case
117:At=AYG;break;case 14:At=AYH;break;case 15:At=AYI;break;case 35:At=AYJ;break;
case 26:At=AIk;break;case 23:At=AYK;break;case 24:At=AYL;break;case 49:At=AYM;break;
case 16:At=AIl;break;case 17:At=AIm;break;case 18:At=AYN;break;case 19:At=AYO;break;
case 20:At=AYP;break;case 54:At=AYQ;break;case 55:At=Rq;break;case 21:At=Atc;break;
case 48:At=AIn;break;case 22:At=AIo;break;case 63:At=Aom;break;case 43:At=Aon;break;
case 85:At=AyB;break;case 25:At=AYR;break;case 47:At=AIp;break;case 107:At=AYS;break;
case 31:At=AYT;break;case 32:At=AYU;break;case 69:At=AYV;break;case 44:At=AYW;break;
case 37:At=AYX;break;case 38:At=AYY;break;case 39:At=AYZ;break;case 76:At=AY0;break;
case 40:At=AY1;break;case 75:At=AY2;break;case 59:At=AY3;break;case 62:At=AY4;break;
case 96:At=AY5;break;case 60:At=AY6;break;case 98:At=AY7;break;case 65:At=AY8;break;
case 61:At=Aoo;break;case 104:At=AIq;break;case 66:At=AY9;break;case 67:At=AIr;break;
case 106:At=AIs;break;case 86:At=AcQ;break;case 68:At=AIt;break;case 70:At=AY_;break;
case 71:At=AIu;break;case 72:At=AY$;break;case 113:At=AyC;break;case 97:At=AZa;break;
case 100:At=AZb;break;case 99:At=AyD;break;case 114:At=AZc;break;case 88:At=AZd;
break;case 89:At=AZe;break;case 90:At=AIv;break;case 73:At=Aop;break;case 74:At=
AIw;break;case 94:At=AZf;break;case 93:At=AIx;break;case 84:At=AIy;break;case 87:
At=Alg;break;case 95:At=AZg;break;case 108:At=Aoq;break;case 109:At=AZh;break;case
102:At=AIz;break;case 101:At=AIA;break;case 103:At=AZi;break;case 105:At=AZj;break;
case 110:At=AIB;break;case 111:At=AZk;break;case 112:At=AZl;break;default:throw new
Error(Ayy+AdC.toFixed());}return At;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"
};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={
UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={
UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={BT:function(
A7){var Bg9=A7;var type=A.jV;switch(Bg9){case 1:type=AZm;break;case 2:type=AZn;break;
case 3:type=AZo;break;case 4:type=AZp;break;case 0:type=Ayl;break;default:throw new
Error(AZq+Bg9.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={BT:function(A7){var Bg7=A7;var AA5=A.jV;switch(
Bg7){case 1:AA5=AZr;break;case 2:AA5=AZs;break;case 3:AA5=AZt;break;case 0:AA5=Ayl;
break;default:throw new Error(AZu+Bg7.toFixed());}return AA5;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,ATY:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.abo([this,this.Bl6,this.ATY],0);},ATX:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.abo([this,this.Bl5,this.ATX],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Um,this.OnSetId],0);
},AOV:function(){return A._GetAutoObject(C.Converter).Bqw(this.Id);},Bjv:function(
){return A._GetAutoObject(C.Converter).AxS(this.Id);},Bl6:function(){return this.
TransponderType;},Bl5:function(){return this.TransponderProtocol;},Um:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={BT:function(A7){var
Vk=A7;var NF=A.jV;switch(Vk){case 0:NF=A.aaR(A.acf.Basic);break;case 1:NF=A.aaR(
A.acf.Extended);break;default:throw new Error(AZv+Vk.toFixed());}return NF;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={BT:function(A7){var
Bex=A7;var Ap4=A.jV;switch(Bex){case 0:Ap4=A.aaR(A.acf.Bkl);break;case 1:Ap4=A.aaR(
A.acf.Pound);break;default:throw new Error(AZw+Bex.toFixed());}return Ap4;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={MN:10,Array:A.abi(10,0,null),ZC:function(
E){if(this.MN===E)return;if(E>10)throw new Error(AZx);this.MN=E;},Set:function(aIndex
,AJ){if((aIndex<0)||(aIndex>=this.MN))throw new Error(AyE);this.Array.Set(aIndex
,AJ);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.MN))throw new Error(AyE
);return this.Array.Get(aIndex);},AmW:function(){var Qz=0;var O;for(O=0;O<this.MN;
O=O+1)Qz=Qz+this.Get(O);return Qz;},toString:function(){var A3g=this.Array.Get(0
).toFixed();var O;for(O=1;O<this.MN;O=O+1)A3g=(A3g+O$)+this.Array.Get(O).toFixed(
);return A3g;},Fl:function(aString){var HA=aString.indexOf(String.fromCharCode(0x2C
),0);var A14=A.jV;var O=0;while(O<10){if(aString===A.jV)this.Array.Set(O,0);else{
if(HA===-1){A14=aString;aString=A.jV;}else{A14=A.abV(aString,HA);aString=A.ab1(aString
,0,HA+1);}this.Array.Set(O,A.wz(A14,0,10));HA=aString.indexOf(String.fromCharCode(
0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",Aak);},Cr:function(){},FD:function(
){var O;for(O=0;O<this.MN;O=O+1)this.Set(O,0);},Avq:function(A9){var O=0;while(O<
this.MN){if(this.Array.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=
0;var max=-1;while(O<this.MN){if(this.Array.Get(O)>max)max=this.Array.Get(O);O=O+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={BT:function(A7){var AzP=A7;var E8=A.jV;switch(AzP){case 4:E8=
A.aaR(A.acf.Alarm);break;case 256:E8=A.aaR(A.acf.Weighing);break;case 128:E8=A.aaR(
A.acf.A6E);break;case 16:E8=A.aaR(A.acf.AMp);break;case 1:E8=A.aaR(A.acf.Temperature
);break;case 32:E8=A.aaR(A.acf.AnimalLoss);break;case 2:E8=A.aaR(A.acf.Rating);break;
case 8:E8=A.aaR(A.acf.Asd);break;case 64:E8=A.aaR(A.acf.Unregister);break;case 512:
E8=A.aaR(A.acf.ASe);break;case 1024:E8=A.aaR(A.acf.LinkTransponder);break;case 262144:
E8=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E8=A.aaR(A.acf.TB);break;case 4096:
E8=A.aaR(A.acf.Calving);break;case 8192:E8=A.aaR(A.acf.DryOff);break;case 16384:
E8=A.aaR(A.acf.A7T);break;case 32768:E8=A.aaR(A.acf.ACm);break;case 524288:E8=A.
aaR(A.acf.ACo);break;case 65536:E8=A.aaR(A.acf.Delete);break;case 131072:E8=A.aaR(
A.acf.A7U);break;case 0:E8=A.aaR(A.acf.A8g);break;default:throw new Error(AIC+AzP.
toFixed());}return E8;},LA:function(A7){var AzP=A7;var E8=A.jV;switch(AzP){case 4:
E8=A.aaR(A.acf.Alarm);break;case 256:E8=A.aaR(A.acf.Weighing);break;case 128:E8=
A.aaR(A.acf.A6E);break;case 16:E8=A.aaR(A.acf.AMp);break;case 1:E8=A.aaR(A.acf.Temperature
);break;case 32:E8=A.aaR(A.acf.AnimalLoss);break;case 2:E8=A.aaR(A.acf.Rating);break;
case 8:E8=A.aaR(A.acf.Asd);break;case 64:E8=A.aaR(A.acf.Unregister);break;case 512:
E8=A.aaR(A.acf.ASe);break;case 1024:E8=A.aaR(A.acf.LinkTransponder);break;case 262144:
E8=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E8=A.aaR(A.acf.TB);break;case 4096:
E8=A.aaR(A.acf.Calving);break;case 8192:E8=A.aaR(A.acf.DryOff);break;case 32768:
E8=A.aaR(A.acf.ACm);break;case 524288:E8=A.aaR(A.acf.ACo);break;case 65536:E8=A.
aaR(A.acf.Delete);break;case 16384:case 131072:E8=A.aaR(A.acf.Bks);break;case 0:
E8=A.aaR(A.acf.A8g);break;default:throw new Error(AIC+AzP.toFixed());}return E8;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ActionToString;
},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.
ITable={Filter:null,Id:2,CE:function(Ad,Bc){return 0;},Anm:function(G){A.we(this
,0);A.pe([this,this.DX],this);},H6:function(Ad,Bc){return false;},Hv:function(Ad
,Bc){return this.So(Ad,Bc);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
},B8:function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=
E;A.abo([this,this.Fn,this.Fr],0);},Fr:function(Aq){this.Bk(Aq);},Ja:function(Ad
,Bc){var BBU=this.V5(Ad,Bc);return A._GetAutoObject(C.Converter).Bad(BBU);},V5:function(
Ad,Bc){return 0;},So:function(Ad,Bc){return 0;},A7e:function(Ad,Bc){return this.
CE(Ad,Bc);},QE:function(){var Mm=0;var BCE=this.Id;return Mm;},QI:function(AoM){
var II=0;var BCE=this.Id;return II===1;},AbG:function(){return-1;},ZN:function(Ad
,Bc,Dw){return false;},HR:function(Ad,Bc,Dw){return false;},ZM:function(Ad,Bc,Dw
){return false;},Ob:function(Ad,Bc,Dw){return false;},Acn:function(Ad,Bc,Dw){return this.
ZM(Ad,Bc,Dw);},AkP:function(Ad,Bc,Dw){var BBV=A._GetAutoObject(C.Converter).Ad0(
Dw);return this.ZN(Ad,Bc,BBV);},A$M:function(Ad,Bc,Dw){return this.HR(Ad,Bc,Dw);
},AOP:function(Ad,Bc){return this.CE(Ad,Bc);},Bjt:function(Ad,Bc){return this.CE(
Ad,Bc);},Bpq:function(Ad,Bc,Dw){return this.HR(Ad,Bc,Dw);},Bpm:function(Ad,Bc,Dw
){return this.HR(Ad,Bc,Dw);},LY:function(aColumn,A9){return-1;},AmU:function(Ad,
Bc){return this.CE(Ad,Bc);},Bpk:function(Ad,Bc,Dw){return this.HR(Ad,Bc,Dw);},ADf:
function(Ad,Bc){return this.CE(Ad,Bc);},AUS:function(Ad,Bc,MX){return this.HR(Ad
,Bc,MX);},DX:function(G){this.ByV();},ByV:function(){return-1;},KS:function(Ad,Bc
){return 0;},UE:function(Ad,Bc,Dw){return false;},Aer:function(aColumn,A9){return-
1;},FD:function(){return false;},Bju:function(Ad,Bc){var BBW=this.CE(Ad,Bc);return A.
_GetAutoObject(C.Converter).BjW(BBW);},Bjz:function(Ad,Bc){return this.CE(Ad,Bc);
},AOX:function(Ad,Bc){return this.CE(Ad,Bc);},Bpo:function(Ad,Bc,Dw){var BBX=A._GetAutoObject(
C.Converter).A5T(Dw);return this.HR(Ad,Bc,BBX);},Bpp:function(Ad,Bc,Dw){return this.
HR(Ad,Bc,Dw);},Bpv:function(Ad,Bc,Dw){return this.HR(Ad,Bc,Dw);},AjH:function(aColumn
,A9){return false;},Aek:function(aColumn,A9){return false;},BjI:function(Ad,Bc){
return this.CE(Ad,Bc);},Bpu:function(Ad,Bc,Dw){return this.HR(Ad,Bc,Dw);},Ll:function(
){return this.QL()>=this.HK();},HK:function(){return 0;},QL:function(){return 0;
},Fn:function(){return this.Filter;},_Init:function(aArg){this.__proto__=C.ITable;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::ITable"};C.MaxAutoActionsCount=4;C.WeightRecordingMode={Automatic:0,Manual:
1,LAST:2};C.WeightRecordingModeToString={BT:function(A7){var Vk=A7;var NF=A.jV;switch(
Vk){case 0:NF=A.aaR(A.acf.Automatic);break;case 1:NF=A.aaR(A.acf.Manual);break;default:
throw new Error(AyF+Vk.toFixed());}return NF;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.WeightRecordingModeToString;},_className:
"Device::WeightRecordingModeToString"};C.BooleanToAutoOnOff={BT:function(A7){switch(
A7){case 0:return A.aaR(A.acf.Off);case 1:return A.aaR(A.acf.Aa6);default:return Ayx+
A7.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BooleanToAutoOnOff;},_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;
C.WeightRecordingScope={CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:
2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={BT:function(A7){var
Bgx=A7;var ABi=A.jV;switch(Bgx){case 0:ABi=A.aaR(A.acf.Bil);break;case 1:ABi=A.aaR(
A.acf.BhZ);break;case 2:ABi=A.aaR(A.acf.BhV);break;case 3:ABi=A.aaR(A.acf.BkV);break;
default:throw new Error(AZy+Bgx.toFixed());}return ABi;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kn={A5q:0,Temperature:1,Rating:2,Afv:3,BDh:
4,BDY:5,BGJ:6,BEC:7,BFm:8,BEa:9,BFk:10,BFN:11,BFO:12,BGO:13,BDs:14,LAST:15};C.AnimalListContentToString={
BT:function(A7){var BcX=A7;var Ry=A.jV;switch(BcX){case 0:Ry=AZz;break;case 14:Ry=
AZA;break;case 2:Ry=AZB;break;case 1:Ry=AZC;break;case 3:Ry=AZD;break;case 4:Ry=
Atd;break;case 5:Ry=Ate;break;case 6:Ry=Atf;break;case 7:Ry=Atg;break;case 8:Ry=
AyG;break;case 9:Ry=Aor;break;case 10:Ry=AZE;break;case 11:Ry=AZF;break;case 12:
Ry=AZG;break;case 13:Ry=AZH;break;default:throw new Error(AZI+BcX.toFixed());}return Ry;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A6:0,
Abm:function(){var Aw=A._NewObject(C.GenderFilterCriterion,0);Aw.E9(this);return Aw;
},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A6:0,Abm:function(){var Aw=A._NewObject(C.AnimalTypeFilterCriterion
,0);Aw.E9(this);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var
Aw=(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;
},Initialize:function(Bc,Eb,A9,Qf){this.EJ=Bc;this.Operator=Eb;this.A6=A9;this.YN=
Qf;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BDu={AuD:0,BDt:1,BE8:2,A$t:3,A51:4,BGo:5,BDX:6,BGn:7,LinkTransponder:8,TB:9,
Weighing:10,Calving:11,LinkNaisId:12,BFM:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18,UNDEFINED:19};C.AutoRegistrationModeToString={
BT:function(A7){var Vk=A7;var NF=A.jV;switch(Vk){case 0:NF=A.aaR(A.acf.Bid);break;
case 1:NF=A.aaR(A.acf.Bj0);break;case 2:NF=A.aaR(A.acf.Off);break;default:throw new
Error(AZJ+Vk.toFixed());}return NF;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A6:0,Abm:function(){var Aw=A._NewObject(C.AssessmentFilterCriterion,0);Aw.E9(this
);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Eb,A9,
Qf){this.EJ=Bc;this.Operator=Eb;this.A6=A9;this.YN=Qf;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdT:0,Temperature:1,Afv:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,DeviceDataOnly:
2,LAST:3};C.FactoryResetScopeToString={BT:function(A7){switch(A7){case 0:return A.
aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);case 2:
return A.aaR(A.acf.DeviceDataOnly);default:return AZK+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.FactoryResetScopeToString;
},_className:"Device::FactoryResetScopeToString"};C.AVs={Cr:function(){A._GetAutoObject(
C.Device).Ar8(this.toString());},Init:function(aArg){var B;A.zX([this,this.BfE],[
B=A._GetAutoObject(C.Device),B.A9A,B.BbP],0);this.BfE(this);},BfE:function(G){this.
Fl(A._GetAutoObject(C.Device).AG7);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper.
_Init.call(this,aArg);this.__proto__=C.AVs;this.ZC(3);this.Init(aArg);},_className:
"Device::TemperaturesLowClass"};C.AVr={Init:function(aArg){var B;A.zX([this,this.
BfC],[B=A._GetAutoObject(C.Device),B.A9z,B.BbO],0);this.BfC(this);},Cr:function(
){A._GetAutoObject(C.Device).Ar7(this.toString());},BfC:function(G){this.Fl(A._GetAutoObject(
C.Device).AG6);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(
this,aArg);this.__proto__=C.AVr;this.ZC(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"
};C.AMI={Init:function(aArg){var B;A.zX([this,this.Be8],[B=A._GetAutoObject(C.Device
),B.A8O,B.Bbs],0);this.Be8(this);},Be8:function(G){this.Fl(A._GetAutoObject(C.Device
).ABX);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMI;this.ZC(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A6:0,Abm:function(){var Aw=A._NewObject(C.UInt64FilterCriterion
,0);Aw.E9(this);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var
Aw=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:
function(Bc,Eb,A9,Qf){this.EJ=Bc;this.Operator=Eb;this.A6=A9;this.YN=Qf;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BT:function(A7){switch(A7){case 0:return A.aaR(A.acf.Akj);case 1:return A.aaR(A.
acf.BhC);default:return Ayx+A7.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C8={UNDEFINED:0,AT:1,BA:2,BE:3,BDz:
4,BDO:5,BDP:6,BDQ:7,BDR:8,BDS:9,BD2:10,BD3:11,BEb:12,BEc:13,BEr:14,FR:15,GR:16,BED:
17,BEE:18,BEL:19,BEM:20,BER:21,BES:22,BET:23,BEU:24,BE0:25,BFc:26,BFd:27,BFs:28,
BFt:29,BFK:30,BFL:31,BF3:32,BF4:33,BF5:34,BGh:35,BGi:36,BGC:37,Bae:38,BGD:39,LAST:
40};C.CountryToString={BT:function(A7){var Kb=A7;var FG=A.jV;switch(Kb){case 1:FG=
A.aaR(A.acm.BhN);break;case 2:FG=A.aaR(A.acm.Bh0);break;case 3:FG=A.aaR(A.acm.BhU
);break;case 4:FG=A.aaR(A.acm.Bh2);break;case 5:FG=A.aaR(A.acm.Bh5);break;case 6:
FG=A.aaR(A.acm.Bqc);break;case 7:FG=A.aaR(A.acm.Bh8);break;case 8:FG=A.aaR(A.acm.
Bim);break;case 9:FG=A.aaR(A.acm.Bin);break;case 10:FG=A.aaR(A.acm.Bjo);break;case
11:FG=A.aaR(A.acm.Biu);break;case 12:FG=A.aaR(A.acm.Bi5);break;case 13:FG=A.aaR(
A.acm.BpH);break;case 14:FG=A.aaR(A.acm.Bjc);break;case 15:FG=A.aaR(A.acm.Bjk);break;
case 16:FG=A.aaR(A.acm.BjR);break;case 17:FG=A.aaR(A.acm.Bik);break;case 18:FG=A.
aaR(A.acm.BjX);break;case 19:FG=A.aaR(A.acm.Bj6);break;case 20:FG=A.aaR(A.acm.Bkg
);break;case 21:FG=A.aaR(A.acm.Bki);break;case 22:FG=A.aaR(A.acm.Bkt);break;case
23:FG=A.aaR(A.acm.Bkx);break;case 24:FG=A.aaR(A.acm.Bkq);break;case 25:FG=A.aaR(
A.acm.Bkz);break;case 26:FG=A.aaR(A.acm.BkP);break;case 27:FG=A.aaR(A.acm.BkW);break;
case 28:FG=A.aaR(A.acm.BoD);break;case 29:FG=A.aaR(A.acm.BoE);break;case 30:FG=A.
aaR(A.acm.Bo8);break;case 31:FG=A.aaR(A.acm.Bo_);break;case 32:FG=A.aaR(A.acm.Bqb
);break;case 33:FG=A.aaR(A.acm.BpG);break;case 34:FG=A.aaR(A.acm.BpF);break;case
35:FG=A.aaR(A.acm.BqB);break;case 36:FG=A.aaR(A.acm.Bql);break;case 37:FG=A.aaR(
A.acm.BqF);break;case 38:FG=A.aaR(A.acm.Bae);break;case 39:FG=A.aaR(A.acm.BqE);break;
case 0:FG=Aos;break;default:throw new Error(Aof+Kb.toFixed());}return FG;},LA:function(
A7){var Kb=A7;var BN=A.jV;switch(Kb){case 1:BN=Te;break;case 2:BN=Z8;break;case 3:
BN=UW;break;case 4:BN=W$;break;case 5:BN=Iw;break;case 6:BN=Aag;break;case 7:BN=
UX;break;case 8:BN=Z_;break;case 9:BN=Xa;break;case 10:BN=O_;break;case 11:BN=Z$;
break;case 12:BN=Aaa;break;case 13:BN=Aaf;break;case 14:BN=UZ;break;case 15:BN=Xb;
break;case 16:BN=Aab;break;case 17:BN=UY;break;case 18:BN=Oi;break;case 19:BN=Rn;
break;case 20:BN=Xc;break;case 21:BN=Xd;break;case 22:BN=Xe;break;case 23:BN=Aac;
break;case 24:BN=Tf;break;case 25:BN=Xf;break;case 26:BN=Xg;break;case 27:BN=Xh;
break;case 28:BN=Xi;break;case 29:BN=Xj;break;case 30:BN=Aad;break;case 31:BN=Tg;
break;case 32:BN=Xk;break;case 33:BN=AfB;break;case 34:BN=Aae;break;case 35:BN=Xl;
break;case 36:BN=Z9;break;case 37:BN=AhS;break;case 38:BN=K2;break;case 39:BN=AcL;
break;case 0:BN=Aos;break;default:throw new Error(Aof+Kb.toFixed());}return BN;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BT:function(A7){var Bdv=
A7;var AtN=A.jV;switch(Bdv){case 0:AtN=A.aaR(A.acf.Unspecified);break;case 1:AtN=
A.aaR(A.acf.Easy);break;case 2:AtN=A.aaR(A.acf.Moderate);break;case 3:AtN=A.aaR(
A.acf.Difficult);break;case 4:AtN=A.aaR(A.acf.Surgery);break;default:throw new Error(
AZL+Bdv.toFixed());}return AtN;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BT:function(A7){var Bhq=A7;var AaU=A.jV;switch(
Bhq){case 0:AaU=A.aaR(A.acf.Unknown);break;case 1:AaU=A.aaR(A.acf.BqO);break;case
2:AaU=A.aaR(A.acf.BqN);break;case 3:AaU=A.aaR(A.acf.BqW);break;case 4:AaU=A.aaR(
A.acf.BqV);break;case 5:AaU=A.aaR(A.acf.BqT);break;case 6:AaU=A.aaR(A.acf.BqQ);break;
case 7:AaU=A.aaR(A.acf.BqS);break;case 8:AaU=A.aaR(A.acf.BqR);break;case 9:AaU=A.
aaR(A.acf.BqP);break;case 10:AaU=A.aaR(A.acf.BqU);break;default:throw new Error(
AZM+Bhq.toFixed());}return AaU;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BT:function(A7){var Bv=A7;var BK=
A.jV;switch(Bv){case 0:BK=A.aaR(A.acf.Unknown);break;case 1:BK=A.aaR(A.ack.SBT);
break;case 2:BK=A.aaR(A.ack.RBT);break;case 3:BK=A.aaR(A.ack.JER);break;case 4:BK=
A.aaR(A.ack.BV);break;case 5:BK=A.aaR(A.ack.RVA);break;case 6:BK=A.aaR(A.ack.RV);
break;case 7:BK=A.aaR(A.ack.RDN);break;case 8:BK=A.aaR(A.ack.DSN);break;case 9:BK=
A.aaR(A.ack.FL);break;case 10:BK=A.aaR(A.ack.GV);break;case 11:BK=A.aaR(A.ack.PIN
);break;case 12:BK=A.aaR(A.ack.HIN);break;case 13:BK=A.aaR(A.ack.MW);break;case 14:
BK=A.aaR(A.ack.VW);break;case 15:BK=A.aaR(A.ack.LMP);break;case 16:BK=A.aaR(A.ack.
DBV);break;case 17:BK=A.aaR(A.ack.AS);break;case 18:BK=A.aaR(A.ack.VR);break;case
19:BK=A.aaR(A.ack.CHA);break;case 20:BK=A.aaR(A.ack.LIM);break;case 21:BK=A.aaR(
A.ack.WBB);break;case 22:BK=A.aaR(A.ack.BA);break;case 23:BK=A.aaR(A.ack.MA);break;
case 24:BK=A.aaR(A.ack.SAL);break;case 25:BK=A.aaR(A.ack.MON);break;case 26:BK=A.
aaR(A.ack.AU);break;case 27:BK=A.aaR(A.ack.PIE);break;case 28:BK=A.aaR(A.ack.CHI
);break;case 29:BK=A.aaR(A.ack.ROM);break;case 30:BK=A.aaR(A.ack.MAR);break;case
31:BK=A.aaR(A.ack.WP);break;case 32:BK=A.aaR(A.ack.BB);break;case 33:BK=A.aaR(A.
ack.DA);break;case 34:BK=A.aaR(A.ack.AA);break;case 35:BK=A.aaR(A.ack.HE);break;
case 36:BK=A.aaR(A.ack.SH);break;case 37:BK=A.aaR(A.ack.HLD);break;case 38:BK=A.
aaR(A.ack.WB);break;case 39:BK=A.aaR(A.ack.GAL);break;case 40:BK=A.aaR(A.ack.LR);
break;case 41:BK=A.aaR(A.ack.BGA);break;case 42:BK=A.aaR(A.ack.LG);break;case 43:
BK=A.aaR(A.ack.BRA);break;case 44:BK=A.aaR(A.ack.NOR);break;case 45:BK=A.aaR(A.ack.
UST);break;case 46:BK=A.aaR(A.ack.ZEB);break;case 47:BK=A.aaR(A.ack.GRV);break;case
48:BK=A.aaR(A.ack.DEX);break;case 49:BK=A.aaR(A.ack.WGA);break;case 50:BK=A.aaR(
A.ack.LH);break;case 51:BK=A.aaR(A.ack.SD);break;case 52:BK=A.aaR(A.ack.FR);break;
case 53:BK=A.aaR(A.ack.TUX);break;case 54:BK=A.aaR(A.ack.TLM);break;case 55:BK=A.
aaR(A.ack.FLF);break;case 56:BK=A.aaR(A.ack.UCK);break;case 57:BK=A.aaR(A.ack.BLA
);break;case 58:BK=A.aaR(A.ack.WIT);break;case 59:BK=A.aaR(A.ack.LAK);break;case
60:BK=A.aaR(A.ack.RHV);break;case 61:BK=A.aaR(A.ack.AT);break;case 62:BK=A.aaR(A.
ack.GR);break;case 63:BK=A.aaR(A.ack.PIF);break;case 64:BK=A.aaR(A.ack.PS);break;
case 65:BK=A.aaR(A.ack.GVF);break;case 66:BK=A.aaR(A.ack.BVF);break;case 67:BK=A.
aaR(A.ack.RBF);break;case 68:BK=A.aaR(A.ack.HWF);break;case 69:BK=A.aaR(A.ack.MWF
);break;case 70:BK=A.aaR(A.ack.VWF);break;case 71:BK=A.aaR(A.ack.LPF);break;case
72:BK=A.aaR(A.ack.BRN);break;case 73:BK=A.aaR(A.ack.BAZ);break;case 74:BK=A.aaR(
A.ack.AO);break;case 75:BK=A.aaR(A.ack.BE);break;case 76:BK=A.aaR(A.ack.WL);break;
case 77:BK=A.aaR(A.ack.BIS);break;case 78:BK=A.aaR(A.ack.YAK);break;case 79:BK=A.
aaR(A.ack.SON);break;case 80:BK=A.aaR(A.ack.TAU);break;case 81:BK=A.aaR(A.ack.IND
);break;case 82:BK=A.aaR(A.ack.TIN);break;case 83:BK=A.aaR(A.ack.WAG);break;case
84:BK=A.aaR(A.ack.XFF);break;case 85:BK=A.aaR(A.ack.XFM);break;case 86:BK=A.aaR(
A.ack.XMM);break;case 87:BK=A.aaR(A.ack.EVO);break;case 88:BK=A.aaR(A.ack.BLH);break;
case 89:BK=A.aaR(A.ack.TLH);break;case 90:BK=A.aaR(A.ack.MGR);break;case 91:BK=A.
aaR(A.ack.WSH);break;case 92:BK=A.aaR(A.ack.MUR);break;case 93:BK=A.aaR(A.ack.EBS
);break;case 94:BK=A.aaR(A.ack.ERI);break;case 95:BK=A.aaR(A.ack.PAR);break;case
96:BK=A.aaR(A.ack.XZF);break;case 97:BK=A.aaR(A.ack.XZM);break;case 98:BK=A.aaR(
A.ack.XZZ);break;default:throw new Error(AZN+Bv.toFixed());}return BK;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.TM={timer:null,Q:null,Ec:0,Dx:0,JX:0,Pw:1000,PF:1000,
Bw:false,Cx:false,B3:true,Ml:function(G){var F;if(!this.timer)return;if(this.Ec<
0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.Dx)|0;var Ox=this.
Pw;var Hg=this.PF+this.Pw;var LK=0;var Jp=this.Ec;if(!Jp&&(Av>=Ox)){Jp=1;Av=Av-Ox;
}if((Jp>0)&&(Av>=Hg)){var Ii=(Av/Hg)|0;Av=Av-(Ii*Hg);Jp=Jp+Ii;}if((Jp>2)&&!this.
JX)Jp=1;if(Jp!==this.Ec){this.Dx=this.timer.Bs-(((B=Av)<0)?B+0x100000000:B);this.
Ec=Jp;}if(Jp>0)LK=this.PF;var KI=(Jp>=this.JX)&&(this.JX>0);if(!!this.Q){if((!KI&&(
Av>=LK))&&((F=this.Q,F[1].call(F[0]))!==this.Cx))(F=this.Q,F[2].call(F[0],this.Cx
));if((KI||((Av<LK)&&(Jp>0)))&&((F=this.Q,F[1].call(F[0]))!==this.B3))(F=this.Q,
F[2].call(F[0],this.B3));}if(KI)this.As(false);},HO:function(E){if(E<0)E=0;this.
JX=E;},Fp:function(E){if(E<100)E=100;this.Pw=E;},Ut:function(E){if(E<0)E=0;this.
PF=E;},As:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([
this,this.Ml],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
acl.Aeh);A.zV([this,this.Ml],this.timer,0);this.Ec=-1;}},_Init:function(aArg){this.
__proto__=C.TM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.In={AnimalId:0,TransponderId:1,BE3:2,BE2:3,BE6:4,BE5:5};C.Au2={BDx:0,BD6:1};
C.AnimalIdGenerationMethodToString={BT:function(A7){var Alt=A7;var AoV=A.jV;switch(
Alt){case 0:AoV=A.aaR(A.acf.Uj);break;case 1:AoV=A.aaR(A.acf.Transponder);break;
case 3:AoV=(A.aaR(A.acf.Manual)+Oj)+A.aaR(A.acf.Male);break;case 2:AoV=(A.aaR(A.
acf.Manual)+Oj)+A.aaR(A.acf.Female);break;case 4:AoV=(A.aaR(A.acf.Manual)+Oj)+A.
aaR(A.acf.Unknown);break;case 5:AoV=(A.aaR(A.acf.Manual)+Oj)+AZO;break;default:throw new
Error(AZP+Alt.toFixed());}return AoV;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={BT:function(A7){var AzO=A7;var A1$=A.jV;switch(
AzO){case 0:A1$=AZQ;break;case 1:A1$=AZR;break;default:throw new Error(AyH+AzO.toFixed(
));}return A1$;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={AsK:function(A7){throw new Error(As6+A7.toFixed());},AsL:function(
A7){throw new Error(As6+A7.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Aeg={AsK:function(A7){return A.
aaL(A.ach.AVf);},AsL:function(A7){var AzO=A7;var RI=-1;switch(AzO){case 0:RI=3;break;
case 1:RI=2;break;default:throw new Error(AID+AzO.toFixed());}return RI;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Aeg;},_className:
"Device::DirectionOfCountingToIcon"};C.AdX={AsK:function(A7){return A.aaL(A.ach.
AVd);},AsL:function(A7){var Alt=A7;var RI=-1;switch(Alt){case 0:RI=0;break;case 1:
RI=6;break;case 3:RI=4;break;case 2:RI=5;break;case 4:RI=2;break;case 5:RI=3;break;
default:throw new Error(AID+Alt.toFixed());}return RI;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdX;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.PB={UNDEFINED:0,SH:1,AO0:2,AR0:3,AOZ:4,A8b:5,HE:6,A$r:7,A5H:8,AMT:9,AUH:10,BE:
11,BB:12,A7Z:13,AUI:14,AUJ:15,AVk:16};C.GermanStateToString={BT:function(A7){var
Bp=A7;var GE=A.jV;switch(Bp){case 1:GE=A.aaR(A.acp.SH);break;case 2:GE=A.aaR(A.acp.
AO0);break;case 3:GE=A.aaR(A.acp.AR0);break;case 4:GE=A.aaR(A.acp.AOZ);break;case
5:GE=A.aaR(A.acp.A8b);break;case 6:GE=A.aaR(A.acp.HE);break;case 7:GE=A.aaR(A.acp.
A$r);break;case 8:GE=A.aaR(A.acp.A5H);break;case 9:GE=A.aaR(A.acp.AMT);break;case
10:GE=A.aaR(A.acp.AUH);break;case 11:GE=A.aaR(A.acp.BE);break;case 12:GE=A.aaR(A.
acp.BB);break;case 13:GE=A.aaR(A.acp.A7Z);break;case 14:GE=A.aaR(A.acp.AUI);break;
case 15:GE=A.aaR(A.acp.AUJ);break;case 16:GE=A.aaR(A.acp.AVk);break;case 0:GE=Aos;
break;default:throw new Error(Alh+Bp.toFixed());}return GE;},LA:function(A7){var
Bp=A7;var GE=A.jV;switch(Bp){case 1:GE=A.aaR(A.acp.Bo$);break;case 2:GE=A.aaR(A.
acp.AO0);break;case 3:GE=A.aaR(A.acp.AR0);break;case 4:GE=A.aaR(A.acp.AOZ);break;
case 5:GE=A.aaR(A.acp.BkM);break;case 6:GE=A.aaR(A.acp.HE);break;case 7:GE=A.aaR(
A.acp.BoN);break;case 8:GE=A.aaR(A.acp.BhQ);break;case 9:GE=A.aaR(A.acp.AMT);break;
case 10:GE=A.aaR(A.acp.AUH);break;case 11:GE=A.aaR(A.acp.BE);break;case 12:GE=A.
aaR(A.acp.BB);break;case 13:GE=A.aaR(A.acp.Bky);break;case 14:GE=A.aaR(A.acp.AUI
);break;case 15:GE=A.aaR(A.acp.AUJ);break;case 16:GE=A.aaR(A.acp.AVk);break;case
0:GE=Aos;break;default:throw new Error(Alh+Bp.toFixed());}return GE;},Bqq:function(
A7){var Bp=A7;var Gj=-1;switch(Bp){case 0:Gj=0;break;case 1:Gj=1;break;case 2:Gj=
2;break;case 3:Gj=3;break;case 4:Gj=4;break;case 5:Gj=5;break;case 6:Gj=6;break;
case 7:Gj=7;break;case 8:Gj=8;break;case 9:Gj=9;break;case 10:Gj=10;break;case 11:
Gj=11;break;case 12:Gj=12;break;case 13:Gj=13;break;case 14:Gj=14;break;case 15:
Gj=15;break;case 16:Gj=16;break;default:throw new Error(Alh+Bp.toFixed());}return Gj;
},Bqr:function(A7){var Bp=A7;var Gj=A.jV;switch(Bp){case 1:Gj=AyI;break;case 2:Gj=
AZS;break;case 3:Gj=AZT;break;case 4:Gj=AZU;break;case 5:Gj=AIE;break;case 6:Gj=
AZV;break;case 7:Gj=AZW;break;case 8:Gj=AZX;break;case 9:Gj=AZY;break;case 10:Gj=
AH_;break;case 11:Gj=UW;break;case 12:Gj=AZZ;break;case 13:Gj=AZ0;break;case 14:
Gj=AZ1;break;case 15:Gj=AZ2;break;case 16:Gj=AIF;break;case 0:Gj=Aos;break;default:
throw new Error(Alh+Bp.toFixed());}return Gj;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
LA:function(A7){var Vk=A7;var NF=A.jV;switch(Vk){case 0:NF=AZ3;break;case 1:NF=AZ4;
break;default:throw new Error(AIG+Vk.toFixed());}return NF;},BT:function(A7){var
Vk=A7;var NF=A.jV;switch(Vk){case 0:NF=A.aaR(A.acf.Bow);break;case 1:NF=A.aaR(A.
acf.BqD);break;default:throw new Error(AIG+Vk.toFixed());}return NF;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BDq={BFi:0,BE_:1,BEl:2,
BEm:3,BEn:4,BGj:5};C.EnumToCodeset={AmE:function(Ah2){throw new Error(AZ5+Ah2.toFixed(
));},Aej:function(A7){throw new Error(As6+A7.toFixed());},AqT:function(){A.ab5("%s"
,AIH);return 0;},H7:function(){A.ab5("%s",AIH);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.Na={AmE:function(Ah2){var Bv;switch(Ah2){case 1:Bv=1;break;case 2:Bv=2;break;
case 3:Bv=3;break;case 4:Bv=4;break;case 5:Bv=5;break;case 6:Bv=6;break;case 9:Bv=
7;break;case 10:Bv=8;break;case 11:Bv=9;break;case 12:Bv=10;break;case 13:Bv=11;
break;case 14:Bv=12;break;case 15:Bv=13;break;case 16:Bv=14;break;case 17:Bv=15;
break;case 18:Bv=16;break;case 19:Bv=17;break;case 20:Bv=18;break;case 21:Bv=19;
break;case 22:Bv=20;break;case 23:Bv=21;break;case 24:Bv=22;break;case 25:Bv=23;
break;case 26:Bv=24;break;case 27:Bv=25;break;case 28:Bv=26;break;case 31:Bv=27;
break;case 32:Bv=28;break;case 33:Bv=29;break;case 34:Bv=30;break;case 35:Bv=31;
break;case 36:Bv=32;break;case 41:Bv=33;break;case 42:Bv=34;break;case 43:Bv=35;
break;case 44:Bv=36;break;case 45:Bv=37;break;case 46:Bv=38;break;case 47:Bv=39;
break;case 48:Bv=40;break;case 49:Bv=41;break;case 50:Bv=42;break;case 51:Bv=43;
break;case 52:Bv=44;break;case 53:Bv=45;break;case 54:Bv=46;break;case 55:Bv=47;
break;case 56:Bv=48;break;case 57:Bv=49;break;case 58:Bv=50;break;case 59:Bv=51;
break;case 60:Bv=52;break;case 61:Bv=53;break;case 65:Bv=54;break;case 66:Bv=55;
break;case 67:Bv=56;break;case 68:Bv=57;break;case 69:Bv=58;break;case 70:Bv=59;
break;case 71:Bv=60;break;case 72:Bv=61;break;case 73:Bv=62;break;case 74:Bv=63;
break;case 75:Bv=64;break;case 76:Bv=65;break;case 77:Bv=66;break;case 78:Bv=67;
break;case 79:Bv=68;break;case 80:Bv=69;break;case 81:Bv=70;break;case 82:Bv=71;
break;case 83:Bv=72;break;case 84:Bv=73;break;case 85:Bv=74;break;case 86:Bv=75;
break;case 87:Bv=76;break;case 88:Bv=77;break;case 89:Bv=78;break;case 90:Bv=79;
break;case 91:Bv=80;break;case 92:Bv=81;break;case 93:Bv=82;break;case 94:Bv=83;
break;case 97:Bv=84;break;case 98:Bv=85;break;case 99:Bv=86;break;case 100:Bv=87;
break;case 101:Bv=88;break;case 102:Bv=89;break;case 103:Bv=90;break;case 104:Bv=
91;break;case 105:Bv=92;break;case 106:Bv=93;break;case 107:Bv=94;break;case 108:
Bv=95;break;case 109:Bv=96;break;case 110:Bv=97;break;case 111:Bv=98;break;default:
Bv=0;}return Bv;},Aej:function(A7){var Bv=A7;var BM=0;switch(Bv){case 0:BM=0;break;
case 1:BM=1;break;case 2:BM=2;break;case 3:BM=3;break;case 4:BM=4;break;case 5:BM=
5;break;case 6:BM=6;break;case 7:BM=9;break;case 8:BM=10;break;case 9:BM=11;break;
case 10:BM=12;break;case 11:BM=13;break;case 12:BM=14;break;case 13:BM=15;break;
case 14:BM=16;break;case 15:BM=17;break;case 16:BM=18;break;case 17:BM=19;break;
case 18:BM=20;break;case 19:BM=21;break;case 20:BM=22;break;case 21:BM=23;break;
case 22:BM=24;break;case 23:BM=25;break;case 24:BM=26;break;case 25:BM=27;break;
case 26:BM=28;break;case 27:BM=31;break;case 28:BM=32;break;case 29:BM=33;break;
case 30:BM=34;break;case 31:BM=35;break;case 32:BM=36;break;case 33:BM=41;break;
case 34:BM=42;break;case 35:BM=43;break;case 36:BM=44;break;case 37:BM=45;break;
case 38:BM=46;break;case 39:BM=47;break;case 40:BM=48;break;case 41:BM=49;break;
case 42:BM=50;break;case 43:BM=51;break;case 44:BM=52;break;case 45:BM=53;break;
case 46:BM=54;break;case 47:BM=55;break;case 48:BM=56;break;case 49:BM=57;break;
case 50:BM=58;break;case 51:BM=59;break;case 52:BM=60;break;case 53:BM=61;break;
case 54:BM=65;break;case 55:BM=66;break;case 56:BM=67;break;case 57:BM=68;break;
case 58:BM=69;break;case 59:BM=70;break;case 60:BM=71;break;case 61:BM=72;break;
case 62:BM=73;break;case 63:BM=74;break;case 64:BM=75;break;case 65:BM=76;break;
case 66:BM=77;break;case 67:BM=78;break;case 68:BM=79;break;case 69:BM=80;break;
case 70:BM=81;break;case 71:BM=82;break;case 72:BM=83;break;case 73:BM=84;break;
case 74:BM=85;break;case 75:BM=86;break;case 76:BM=87;break;case 77:BM=88;break;
case 78:BM=89;break;case 79:BM=90;break;case 80:BM=91;break;case 81:BM=92;break;
case 82:BM=93;break;case 83:BM=94;break;case 84:BM=97;break;case 85:BM=98;break;
case 86:BM=99;break;case 87:BM=100;break;case 88:BM=101;break;case 89:BM=102;break;
case 90:BM=103;break;case 91:BM=104;break;case 92:BM=105;break;case 93:BM=106;break;
case 94:BM=107;break;case 95:BM=108;break;case 96:BM=109;break;case 97:BM=110;break;
case 98:BM=111;break;default:throw new Error(AZ6+Bv.toFixed());}return BM;},AqT:
function(){return 0;},H7:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.Na;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$Y:1,RS:2,A$k:3,A7B:4,BFr:5,Baf:6,A79:7,A50:8,A$g:
9,A77:10,A54:11,BFH:12,BFI:13,LAST:14};C.ReasonOfLeavingToString={BT:function(A7
){var AdD=A7;var Tv=A.jV;switch(AdD){case 0:Tv=A.aaR(A.acf.Unknown);break;case 1:
Tv=A.aaR(A.acf.A$Y);break;case 2:Tv=A.aaR(A.acf.RS);break;case 3:Tv=A.aaR(A.acf.
A$k);break;case 4:Tv=A.aaR(A.acf.A7B);break;case 5:Tv=A.aaR(A.acf.Box);break;case
6:Tv=A.aaR(A.acf.Baf);break;case 7:Tv=A.aaR(A.acf.A79);break;case 8:Tv=A.aaR(A.acf.
A50);break;case 9:Tv=A.aaR(A.acf.A$g);break;case 10:Tv=A.aaR(A.acf.A77);break;case
11:Tv=A.aaR(A.acf.A54);break;case 12:Tv=A.aaR(A.acf.BoI);break;case 13:Tv=A.aaR(
A.acf.BoH);break;default:throw new Error(AZ7+AdD.toFixed());}return Tv;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahy={AmE:function(Ah2){var Pl;
switch(Ah2){case 1:Pl=1;break;case 2:Pl=2;break;case 3:Pl=3;break;case 4:Pl=4;break;
case 5:Pl=5;break;case 6:Pl=6;break;case 7:Pl=7;break;case 8:Pl=8;break;case 9:Pl=
9;break;case 10:Pl=10;break;case 11:Pl=11;break;case 12:Pl=12;break;case 13:Pl=13;
break;default:Pl=0;}return Pl;},Aej:function(A7){var Pl=A7;var Jo=0;switch(Pl){case
0:Jo=0;break;case 2:Jo=2;break;case 8:Jo=8;break;case 11:Jo=11;break;case 4:Jo=4;
break;case 10:Jo=10;break;case 7:Jo=7;break;case 5:Jo=5;break;case 9:Jo=9;break;
case 3:Jo=3;break;case 12:Jo=12;break;case 13:Jo=13;break;case 1:Jo=1;break;case
6:Jo=6;break;default:throw new Error(AyJ+Pl.toFixed());}return Jo;},AqT:function(
){return 0;},H7:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahy;},_className:"Device::ReasonOfLeavingToCodeset"
};C.K1={AmE:function(Ah2){var Lc;switch(Ah2){case 1:Lc=1;break;case 2:Lc=2;break;
case 3:Lc=3;break;case 4:Lc=4;break;case 5:Lc=5;break;case 6:Lc=6;break;case 7:Lc=
7;break;case 8:Lc=8;break;case 9:Lc=9;break;case 10:Lc=10;break;default:Lc=0;}return Lc;
},Aej:function(A7){var Lc=A7;var Jo=0;switch(Lc){case 0:Jo=0;break;case 2:Jo=2;break;
case 1:Jo=1;break;case 9:Jo=9;break;case 6:Jo=6;break;case 8:Jo=8;break;case 7:Jo=
7;break;case 5:Jo=5;break;case 10:Jo=10;break;case 4:Jo=4;break;case 3:Jo=3;break;
default:throw new Error(AyJ+Lc.toFixed());}return Jo;},AqT:function(){return 0;}
,H7:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.K1;},_className:"Device::WhereAboutsToCodeset"};C.AmM={_Init:
function(aArg){this.__proto__=C.AmM;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:-1,Fl:function(Ad,AL){var II=C.Row.Fl.call(this,
Ad,AL);if(II&&!!AL){this.AkC(AL.CE(Ad,0));this.AwA(AL.CE(Ad,1));this.Awz(AL.CE(Ad
,2));}return II;},Cr:function(AL){var II=C.Row.Cr.call(this,AL);if(II&&!!AL){var
Mm=AL.QE();if(Mm<0)A.ab5("%s",AcN);else{if(this.Arg())this.CQ=AL.AbG();AL.HR(this.
CQ,0,this.Year);AL.HR(this.CQ,1,this.Deregistrations);AL.HR(this.CQ,2,this.Deaths
);AL.QI(Mm);}}return II;},G7:function(){C.Row.G7.call(this);this.AkC(-2);},FD:function(
){C.Row.FD.call(this);this.AkC(-1);this.AwA(0);this.Awz(0);},AwA:function(E){if(
this.Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Blm,this.
AwA],0);},Awz:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.
Blk,this.Awz],0);},AkC:function(E){if(this.Year===E)return;this.Year=E;A.abo([this
,this.ArD,this.AkC],0);},Blm:function(){return this.Deregistrations;},Blk:function(
){return this.Deaths;},ArD:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=3;},
_className:"Device::CalfDeregistrations"};C.Au0={Undefined:0,Display:1,A$q:2,A$D:
3,Bay:4,BEF:5,BFU:6,BGu:7,BE1:8,BDT:9,BDf:10,A6Y:11,A$s:12,BGF:13,A8a:14,BGI:15};
C.DeviceComponentToString={BT:function(A7){var Bdo=A7;var Qn=A.jV;switch(Bdo){case
0:Qn=AZ8;break;case 10:Qn=A.aaR(A.acf.Bhr);break;case 9:Qn=A.aaR(A.acf.Bh7);break;
case 1:Qn=A.aaR(A.acf.BiV);break;case 11:Qn=A.aaR(A.acf.A6Y);break;case 5:Qn=A.aaR(
A.acf.BqX);break;case 8:Qn=A.aaR(A.acf.BiX);break;case 14:Qn=A.aaR(A.acf.A8a);break;
case 2:Qn=A.aaR(A.acf.A$q);break;case 12:Qn=A.aaR(A.acf.A$s);break;case 6:Qn=A.aaR(
A.acf.BoM);break;case 3:Qn=A.aaR(A.acf.A$D);break;case 7:Qn=A.aaR(A.acf.BiY);break;
case 13:Qn=A.aaR(A.acf.Bix);break;case 15:Qn=A.aaR(A.acf.Bq1);break;case 4:Qn=A.
aaR(A.acf.Bay);break;default:throw new Error(Ath+Bdo.toFixed());}return Qn;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgQ={AmE:function(Ah2){return Ah2;
},Aej:function(A7){return A7;},AqT:function(){return 0;},H7:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgQ;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeT={AsK:function(A7){return A.
aaL(A.ach.AQa);},AsL:function(A7){var BdA=A7;var RI=-1;switch(BdA){case 0:RI=0;break;
case 1:RI=1;break;case 2:RI=2;break;default:throw new Error(AZ9+BdA.toFixed());}
return RI;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeT;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A6:0,Abm:function(){var Aw=A._NewObject(C.WhereAboutsFilterCriterion,0);Aw.E9(this
);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Eb,A9,
Qf){this.EJ=Bc;this.Operator=Eb;this.A6=A9;this.YN=Qf;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BFb={AN2:0,BD0:1,APL:2,LAST:
3};C.BGl={GK:0,AV1:1,Hk:2,Year:3,LAST:4};C.TimespanDaysToString={BT:function(A7){
var BgZ=A7;var ABv=A.jV;switch(BgZ){case 0:ABv=A.aaR(A.acf.A6f);break;case 1:ABv=
A.aaR(A.acf.AV1);break;case 2:ABv=A.aaR(A.acf.Hk);break;case 3:ABv=A.aaR(A.acf.Year
);break;default:throw new Error(AZ_+BgZ.toFixed());}return ABv;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Z3={BFo:0,BD7:1,BEH:2,BEK:3,BEJ:4
,BD8:5,BEI:6,LAST:7};C.USBStateToString={BT:function(A7){var Bhl=A7;var Bp=A.jV;
switch(Bhl){case 0:Bp=Ati;break;case 2:Bp=AyK;break;case 1:Bp=AyL;break;case 5:Bp=
AZ$;break;case 3:Bp=A0a;break;case 4:Bp=A0b;break;case 6:Bp=AII;break;default:throw new
Error(AH3+Bhl.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgK={BEG:0,BDr:1,BFJ:2};C.AxE={ACB:A.jV,Timestamp:0,AEo:0,AEt:0,AGB:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFC:function(E){if(this.
AEo===E)return;this.AEo=E;},AFI:function(E){if(this.AEt===E)return;this.AEt=E;},
AFS:function(E){if(this.AGB===E)return;this.AGB=E;},AFi:function(E){if(this.ACB===
E)return;this.ACB=E;},_Init:function(aArg){this.__proto__=C.AxE;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.Avu={Timestamp:0,ARO:0,ARP:0,AVC:0,AVD:0
,AVB:0,ARN:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFz:function(E){if(this.ARO===E)return;this.ARO=E;},AFA:function(E){if(this.
ARP===E)return;this.ARP=E;},AF6:function(E){if(this.AVC===E)return;this.AVC=E;},
AF7:function(E){if(this.AVD===E)return;this.AVD=E;},AF5:function(E){if(this.AVB===
E)return;this.AVB=E;},AFy:function(E){if(this.ARN===E)return;this.ARN=E;},_Init:
function(aArg){this.__proto__=C.Avu;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqr={Undefined:0,BEw:1,BDF:2};C.Agx={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BT:function(A7){var BcV=A7;var A1F=A.jV;switch(BcV){case 0:A1F=A.aaR(A.acf.A58);
break;case 1:A1F=A.aaR(A.acf.A6m);break;default:throw new Error(AIJ+BcV.toFixed(
));}return A1F;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hk={A5R:0,AEd:1,ACY:2,AEp:3,ABZ:4,AEr:5,AEf:6,AEe:7,AB6:8,AGJ:9,AEE:10,AEC:11
,ACJ:12,LAST:13};C.MonthToString={BT:function(A7){var BeD=A7;var XI=A.jV;switch(
BeD){case 1:XI=A.aaR(A.act.AEd);break;case 2:XI=A.aaR(A.act.ACY);break;case 3:XI=
A.aaR(A.act.AEp);break;case 4:XI=A.aaR(A.act.ABZ);break;case 5:XI=A.aaR(A.act.AEr
);break;case 6:XI=A.aaR(A.act.AEf);break;case 7:XI=A.aaR(A.act.AEe);break;case 8:
XI=A.aaR(A.act.AB6);break;case 9:XI=A.aaR(A.act.AGJ);break;case 10:XI=A.aaR(A.act.
AEE);break;case 11:XI=A.aaR(A.act.AEC);break;case 12:XI=A.aaR(A.act.ACJ);break;default:
throw new Error(Ali+BeD.toFixed());}return XI;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.VX={FileName:A.jV,AGD:0,EN:0,AgK:0,AU8:false,FD:function(){this.E4(0);this.AgK=
1;this.FileName=A.jV;this.AGD=0;this.AU8=false;},E4:function(E){if(this.EN===E)return;
this.EN=E;A.abo([this,this.SJ,this.E4],0);},SJ:function(){return this.EN;},_Init:
function(aArg){this.__proto__=C.VX;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AV8={Init:function(aArg){var B;A.zX([this,this.BfR],[B=A._GetAutoObject(C.Device
),B.A9M,B.BbW],0);this.BfR(this);},Cr:function(){A._GetAutoObject(C.Device).Asb(
this.toString());},BfR:function(G){this.Fl(A._GetAutoObject(C.Device).AHr);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AV8;this.ZC(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AV7={
Init:function(aArg){var B;A.zX([this,this.BfP],[B=A._GetAutoObject(C.Device),B.A9L
,B.BbV],0);this.BfP(this);},Cr:function(){A._GetAutoObject(C.Device).Asa(this.toString(
));},BfP:function(G){this.Fl(A._GetAutoObject(C.Device).AHq);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV7;this.
ZC(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AV_={Init:function(
aArg){var B;A.zX([this,this.BfT],[B=A._GetAutoObject(C.Device),B.A9P,B.BbZ],0);this.
BfT(this);},Cr:function(){A._GetAutoObject(C.Device).Asc(this.toString());},BfT:
function(G){this.Fl(A._GetAutoObject(C.Device).AHu);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV_;this.ZC(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AV6={Init:function(
aArg){var B;A.zX([this,this.BfN],[B=A._GetAutoObject(C.Device),B.A9K,B.BbU],0);this.
BfN(this);},Cr:function(){A._GetAutoObject(C.Device).Ar$(this.toString());},BfN:
function(G){this.Fl(A._GetAutoObject(C.Device).AHp);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV6;this.ZC(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMJ={Init:function(
aArg){var B;A.zX([this,this.Be9],[B=A._GetAutoObject(C.Device),B.A8P,B.Bbt],0);this.
Be9(this);},Be9:function(G){this.Fl(A._GetAutoObject(C.Device).ABY);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMJ;this.ZC(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BFe={BFh:0,BE7:1,BDZ:2,BGG:3,Unknown:4};C.BDD={None:0,BFp:1,BFj:2,BFf:3,BFg:
4};C.BGz={A8p:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BT:function(A7){var Bg4=A7;var ABx=A.jV;switch(Bg4){case 0:ABx=A.aaR(A.acf.A8p);
break;case 1:ABx=A.aaR(A.acf.A58);break;case 2:ABx=A.aaR(A.acf.A6m);break;case 3:
ABx=A.aaR(A.acf.Biv);break;default:throw new Error(A0c+Bg4.toFixed());}return ABx;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A$h={Bf2:function(
AoG){var Js=A.ab0(A.abV(AoG,15),0,10);var Kb=A._GetAutoObject(C.Converter).S8(Js
);if(!!Kb){if(Kb===10){if((((AoG.length!==16)||!A._GetAutoObject(A.acj.VJ).AVS(AoG
))||!!A._GetAutoObject(C.Converter).Baa(Js))||!A._GetAutoObject(C.Converter).AVG(
Js))return 0;else return Js;}else return Js;}else{Kb=A._GetAutoObject(C.Converter
).S8(A._GetAutoObject(C.Device).OX);if(!!Kb&&(Kb===10)){if(!A._GetAutoObject(A.acj.
VJ).AVS(AoG))return 0;if(AoG.length===12){var BcU=A.ab0(A.abV(AoG,10),0,10);var AKh=
A._GetAutoObject(C.Converter).AVG(BcU);if((BcU>0)&&!!AKh)return(A._GetAutoObject(
C.Converter).Aqy(Kb)*1000000000000)+A.ab0(A.abV(AoG,10),0,10);}}}return 0;},Bf1:
function(JI){if(!((JI.length===8)||((JI.length===10)&&A._GetAutoObject(A.acj.VJ).
AVS(JI))))return 0;var AAZ=A._NewObject(A.Core.Bs,0);var A4l=false;var A4q=A.abW(
JI,4,4);var AtU=A.wz(A4q,0,10);if((AtU<2000)||(AtU>2100)){A4q=A.abV(JI,4);AtU=A.
wz(A4q,0,10);A4l=true;}if((AtU<2000)||(AtU>2100))return 0;AAZ.Year=AtU;var AK3;var
Az6;if(A4l){AK3=A.abW(JI,4,2);Az6=A.wz(AK3,0,10);}else{AK3=A.abW(JI,2,2);Az6=A.wz(
AK3,0,10);}if((Az6<1)||(Az6>12))return 0;AAZ.Uv(Az6);var AK2;var Az5;if(A4l){AK2=
A.abW(JI,6,2);Az5=A.wz(AK2,0,10);}else{AK2=A.abV(JI,2);Az5=A.wz(AK2,0,10);}if((Az5<
1)||(Az5>AAZ.Zq()))return 0;AAZ.Lu(Az5);return AAZ.JY();},_Init:function(aArg){this.
__proto__=C.A$h;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::ParserClass"};C.AkF={_Init:function(
){C.A$h._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BT:function(A7){var Aar=A7;var MZ=A.jV;
switch(Aar){case 14:MZ=A.aaR(A.acf.Aft);break;case 32:MZ=A.aaR(A.acf.Breed);break;
case 4:MZ=A.aaR(A.acf.Aee);break;case 28:MZ=A.aaR(A.acf.A5W);break;case 33:MZ=A.
aaR(A.acf.AgH);break;case 23:MZ=A.aaR(A.acf.KO);break;case 7:MZ=A.aaR(A.acf.Afo);
break;case 2:MZ=A.aaR(A.acf.P);break;case 0:MZ=A.aaR(A.acf.GM);break;case 8:MZ=A.
aaR(A.acf.Alarm);break;case 9:MZ=A.aaR(A.acf.ACu);break;case 38:MZ=A.aaR(A.acf.BiW
);break;case 11:MZ=A.aaR(A.acf.Fever);break;case 29:MZ=A.aaR(A.acf.ARB);break;case
18:MZ=A.aaR(A.acf.Nc);break;case 26:MZ=A.aaR(A.acf.Uj);break;case 22:MZ=A.aaR(A.
acf.Transponder);break;case 1:MZ=A.aaR(A.acf.GH);break;case 34:MZ=A.aaR(A.acf.Jm
);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:case 5:case 3:case
35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:
MZ=A.jV;break;default:throw new Error(A0d+A7.toFixed());}return MZ;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.AEm={Bf:0,BGd:1,LAST:2};C.ListViewScopeToString={
BT:function(A7){var BAs=A7;var A24=A.jV;switch(BAs){case 0:A24=A.aaR(A.acf.Bf);break;
case 1:A24=A.aaR(A.acf.BpD);break;default:throw new Error(A0e+A7.toFixed());}return A24;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHt={BG9:0,BG8:1,BG7:2,LAST:3};C.
WeightValuePrecisionToString={BT:function(A7){var BDb=A7;var ALE=A.jV;switch(BDb
){case 0:ALE=A0f+A.aaR(A.acf.AAi);break;case 1:ALE=AyM+A.aaR(A.acf.AiB);break;case
2:ALE=Atj+A.aaR(A.acf.AiB);break;default:throw new Error(AIK+A7.toFixed());}return ALE;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgC={BT:function(A7){var AK$=
A7;if(AK$===1)return A.aaR(A.acf.BjT);else return C.AnimalTypeToString.BT.call(this
,A7);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgC;},_className:"Device::AnimalTypeToStringHeifer"};C.Wo={RS:0,BFl:1,LAST:2};
C.MassDeregistrationCriterionToString={BT:function(A7){var BAv=A7;var A29=A.jV;switch(
BAv){case 0:A29=A.aaR(A.acf.BkZ);break;case 1:A29=A.aaR(A.acf.ASl);break;default:
throw new Error(Ayk+A7.toFixed());}return A29;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A6:
A.jV,Zo:0,OI:0,Abm:function(){var Aw=A._NewObject(C.UInt64PartialFilterCriterion
,0);Aw.E9(this);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var
Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw){this.A6=Aw.
A6;this.Zo=Aw.Zo;this.OI=Aw.OI;}},Initialize:function(Bc,Eb,A9,Atu,AJa,Qf){this.
EJ=Bc;this.Operator=Eb;this.A6=A9;this.YN=Qf;this.Zo=Atu;this.OI=AJa;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BD4={Idle:0,BFQ:1,BF1:2,BGg:3,Error:4};C.AVR={Asj:0,AsQ:0,Z3:0,ATZ:function(
E){if(this.Z3===E)return;this.Z3=E;A.abo([this,this.Bl7,this.ATZ],0);},AT1:function(
E){if(this.AsQ===E)return;this.AsQ=E;A.abo([this,this.Bl9,this.AT1],0);},ATB:function(
E){if(this.Asj===E)return;this.Asj=E;A.abo([this,this.BlJ,this.ATB],0);},Bl7:function(
){return this.Z3;},Bl9:function(){return this.AsQ;},BlJ:function(){return this.Asj;
},_Init:function(aArg){this.__proto__=C.AVR;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmM;C.BoolFilterCriterion.__proto__=
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
C.AVs.__proto__=C.Int32ArrayWrapper;C.AVr.__proto__=C.Int32ArrayWrapper;C.AMI.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aeg.__proto__=C.EnumToIcon;
C.AdX.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.Na.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahy.__proto__=C.EnumToCodeset;C.K1.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgQ.__proto__=C.EnumToCodeset;C.AeT.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AV8.__proto__=C.Int32ArrayWrapper;C.AV7.
__proto__=C.Int32ArrayWrapper;C.AV_.__proto__=C.Int32ArrayWrapper;C.AV6.__proto__=
C.Int32ArrayWrapper;C.AMJ.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgC.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AkF._this))B._ReInit(
),C.AkF._ReInit.call(B);};C.DI=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AkF._this)&&(B._cycle!=D))B._Done(C.AkF._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */