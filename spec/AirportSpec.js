use 'strict';

describe('Airport:', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('landing planes:', function() {
    it('does not return undefined', function() {
      expect(airport.land(plane)).not.toBe(undefined);
    });
  });

  it('has no planes by default', function() {
    expect(airport.hangar.toEqual([]);
  });
});