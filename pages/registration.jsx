// import { useState } from 'react';
// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';

// dotenv.config();

// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform form submission logic here
//     submitForm();
//     // Show to console log, can delete
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };
  
// const submitForm = async () => {
//   try {
//     const client = await MongoClient.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     const db = client.db();
//     const usersCollection = db.collection('users'); // Update your collection name here
//     const newUser = { // This is your collection structure
//       name,
//       email,
//       password,
//     };
//     await usersCollection.insertOne(newUser); // Insert to the collection
//     console.log('User inserted successfully');
//     client.close();
//   } catch (error) {
//     console.log('Error inserting user:', error);
//   }
// };

//   return (
//     <div>
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;