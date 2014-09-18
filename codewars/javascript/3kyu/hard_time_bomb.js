Object.keys(GLOBAL).some(function(key) {
  return key.match(/boom/) ? !!(Bomb.CutTheWire(GLOBAL[key])) : false;
});
