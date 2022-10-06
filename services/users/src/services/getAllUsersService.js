'use strict';

const getAllUsersService = async () => {
  const users = [
    {
      id: '864c8856-387d-4a62-b9c4-7f39eb0ba604',
      name: 'bogdan_729',
      password: 'Bogdan1965*',
      email: 'bogdan@exapmle.com',
    },
    {
      id: '692d608b-4da4-45f5-8ab7-6a4cd09db4ac',
      name: 'danil_19',
      password: 'DanilB000*',
      email: 'danya@exapmle.com',
    },
    {
      id: 'd1d31b65-5131-4d5b-bf94-65ab1edf16b3',
      name: 'Vazilko_f-end',
      password: 'Vasya2002*',
      email: 'vasya@exapmle.com',
    },
  ];
  return users;
};

module.exports = getAllUsersService;
