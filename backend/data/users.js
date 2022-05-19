import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Munneb Shafi',
    email: 'f190959@nu.edu.pk',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Swera Shafique',
    email: 'f190924@nu.edu.pk',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sabeeh Shahid',
    email: 'f190955@nu.edu.pk',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
