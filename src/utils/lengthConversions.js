export const LENGTH_COVERSIONS = {
  KilometersToMeters: x => 1000 * x,
  KilometersToCentimeters: x => 1000 * 100 * x,
  KilometersToKilometers: x => x,
  MetersToKilometers: x => x / 1000,
  MetersToCentimeters: x => x * 100,
  MetersToMeters: x => x,
  CentimetersToMeters: x => x / 100,
  CentimetersToKilometers: x => x / 100000,
  CentimetersToCentimeters: x => x
};
