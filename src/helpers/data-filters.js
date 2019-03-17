const stringDataFilter = (value) => {

  if(
    typeof value !== 'undefined' &&
    value !== undefined &&
    value !== null &&
    value !== 'undefined' &&
    typeof value === 'string' && value.trim().length > 0){
    return value;
  }
  else{
    return null;
  }
};

export default stringDataFilter;