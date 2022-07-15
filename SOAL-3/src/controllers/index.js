const arrayOfObject = [
  {
    nama: 'Smith',
    hobi: 'Self Service'
  },
  {
    nama: 'Dio',
    hobi: 'Design Grafis'
  },
  {
    nama: 'Agung',
    hobi: 'Bermain Game'
  }
];

exports.getPeople = async (req, res) =>{
  try {
    let result = [];
    let status = 200;
    
    const yourFieldByName = 'Agung'; // Change this one
    result = arrayOfObject.findIndex(people => people.nama === yourFieldByName);
    if(result < 0) {
      result = 'The name is doesn\'t exist!';
      status = 404; // this status code for data not found
    }

    res.status(status).send({
      status: 'success',
      result: [arrayOfObject[result]]
    })

  } catch (error) {

    res.status(500).send({
      status: 'failed',
      message: error.message
    });

  }
}