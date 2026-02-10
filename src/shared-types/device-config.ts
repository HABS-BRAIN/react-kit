//currently unused
/**
 * This enum should exactly match with IXNMuseDataPacketType.h of SDK
 */
export enum MuseDataPacketType {
  Accelerometer = 0,
  Gyro,
  Eeg,
  DroppedAccelerometer,
  DroppedEeg,
  Quantization,
  Battery,
  DrlRef,
  AlphaAbsolute,
  BetaAbsolute,
  DeltaAbsolute,
  ThetaAbsolute,
  GammaAbsolute,
  AlphaRelative,
  BetaRelative,
  DeltaRelative,
  ThetaRelative,
  GammaRelative,
  AlphaScore,
  BetaScore,
  DeltaScore,
  ThetaScore,
  GammaScore,
  IsGood,
  Hsi,
  HsiPrecision,
  Artifacts,
  Magnetometer,
  Pressure,
  Temperature,
  UltraViolet,
  NotchFilteredEeg,
  VarianceEeg,
  VarianceNotchFilteredEeg,
  Ppg,
  IsPpgGood,
  IsHeartGood,
  Thermistor,
  IsThermistorGood,
  AvgBodyTemperature,
  CloudComputed,
  Optics,
}

/**
 * This enum should exactly match with IXNMusePreset.h of SDK
 */
export enum MusePreset {
  Preset10 = 0,
  Preset12,
  Preset14,
  Preset20,
  Preset21,
  Preset22,
  Preset23,
  PresetAb,
  PresetAd,
  Preset31,
  Preset32,
  Preset50,
  Preset51,
  Preset52,
  Preset53,
  Preset54,
  Preset55,
  Preset60,
  Preset61,
  Preset63,
  Preset1021,
  Preset1022,
  Preset1023,
  Preset1024,
  Preset1025,
  Preset1026,
  Preset1027,
  Preset1028,
  Preset1029,
  Preset102A,
  Preset1031,
  Preset1032,
  Preset1033,
  Preset1034,
  Preset1035,
  Preset1036,
  Preset1041,
  Preset1042,
  Preset1043,
  Preset1044,
  Preset1045,
  Preset1046,
}

export interface MuseConfig {
  preset: MusePreset
  enabledDataTypes: MuseDataPacketType[]
}

export const MuseSubscriptionOptions = Object.entries(MuseDataPacketType)
  .filter(([key, value]) => isNaN(Number(key)))
  .map(([key, value]) => ({
    label: key,
    value: value as number,
  }))

export const MusePresetOptions = Object.entries(MusePreset)
  .filter(([key, value]) => isNaN(Number(key)))
  .map(([key, value]) => ({
    label: key,
    value: value as number,
  }))