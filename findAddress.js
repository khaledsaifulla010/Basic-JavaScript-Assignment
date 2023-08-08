function findAddress(obj) {
    const street = obj.street;
    const house = obj.house;
    const society = obj.society;
    
    return ` ${street}, ${house}, ${society}`;
  }
  
  const givenAddress = {
    street: '10',
    house:'15A',
    society: 'Earth Perfect'
  };
  const missingAddress1 = {
    street: '10',
    house: '__',
    society: 'Earth Perfect'
  }
  const missingAddress2 = {
    street: '10',
    house: '__',
    society: '__'
  }
  const findAddressResult = findAddress(givenAddress);
  console.log(findAddressResult); 

  const missingAddressResult1 = findAddress(missingAddress1);
  console.log(missingAddressResult1); 

  const missingAddressResult2 = findAddress(missingAddress2);
  console.log(missingAddressResult2);