function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = (value === undefined ? 2 : value);

  this.canMergeWithAny  = (value >= -1 && value <= 1);
  this.isEraser         = (value === 0);
  this.isCorrupted      = (value < 0 || value === 1 ||
                           (value & (value - 1)) !== 0);

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};
