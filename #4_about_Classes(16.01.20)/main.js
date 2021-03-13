function Pending(item, dataSize = 5) {
	this.item = item;
	this.dataSize = dataSize;
	this._start = null;
	this._end = null;
  }
  
  Pending.prototype.getVisualPart = function() {
	return this.getLoop(this.getStart() || 0, this.getEnd() || this.dataSize);
  }
  
  Pending.prototype.getFirstPart = function() {
	return this.getLoop(0, this.dataSize);
  }
  
  Pending.prototype.getLastPart = function() {
	return this.getLoop(this.item.length - this.dataSize, this.item.length);
  }
  
  Pending.prototype.previouslPart = function() {
	return this.getLoop(this.getStart() + 1 - this.dataSize, this.getEnd() + 1 - this.dataSize);
  }
  
  Pending.prototype.nextPart = function() {
	return this.getLoop(this.getStart() - 1 + this.dataSize, this.getEnd() - 1 + this.dataSize);
  }
  
  Pending.prototype.getLoop = function(start, end) {
	let fooArray = [];
	this.setStart(start);
	this.setEnd(end);
	this._start = this.getStart();
	this._end = this.getEnd();
	for(let i = this.getStart(); i < this.getEnd(); i += 1) {
	  fooArray.push(this.item[i]);
	}
	return fooArray;
  }
  
  Pending.prototype.setStart = function(start) {
	this._start = start;
  }
  
  Pending.prototype.getStart = function() {
	return this._start;
  }
  
  Pending.prototype.setEnd = function(end) {
	this._end = end;
  }
  
  Pending.prototype.getEnd = function() {
	return this._end;
  }
  
  let p = new Pending("1234567890123456789".split(""));
  
  console.log(p.getFirstPart());
  console.log(p.getLastPart());
  console.log(p.getVisualPart());
  console.log(p.previouslPart());
  console.log(p.getFirstPart());
  console.log(p.nextPart());