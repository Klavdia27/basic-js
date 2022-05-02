const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  if(!(date instanceof Date)) {
    throw Error('Invalid date!');
  }

  if(Object.getOwnPropertyNames(date).length > 0){
    throw Error('Invalid date!');
  }
 
  const mounth = date.getMonth();

	if (mounth > 1 && mounth < 5) return 'spring';
	
	if (mounth > 4 && mounth < 8) return 'summer';

  if ( mounth > 7 && mounth < 11) return 'autumn'; 
	
	if (mounth === 1 || mounth === 2 || mounth ===12 ) return 'winter';
}

module.exports = {
  getSeason
};
