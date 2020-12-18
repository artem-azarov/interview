// function composeDto(user, customData, customPermissions) {
//   const defaultPermissions = ['access_dashboard', 'access_profile'];
//   return {};
// }

// describe('composeDto()', () => {
//   it('should return proper DTO', () => {
//     const user = {
//       id: 123,
//       username: 'john_smith'
//     };

//     const customData = {
//       active: 'false',
//       email: 'john@gmail.com',
//       birthday: '1990-11-11'
//     };

//     const customPermissions = ['access_settings', 'access_feed'];

//     const expectedDto = {
//       id: 123,
//       username: 'john_smith',
//       email: 'john@gmail.com',
//       birthdate: '1990-11-11',
//       active: false,
//       permissions: [
//         'auth:access:dashboard',
//         'auth:access:profile',
//         'auth:access:settings',
//         'auth:access:feed'
//       ]
//     };

//     expect(composeDto(user, customData, customPermissions)).toEqual(
//       expectedDto
//     );
//   });
// });
