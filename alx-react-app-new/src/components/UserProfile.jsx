import React from 'react'; 

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '20px', backgroundColor: '#f9f9f9', boxShadow: '3px 3px 5px #ddd' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px', marginBottom: '5px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: '16px', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;