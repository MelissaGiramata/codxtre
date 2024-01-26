// pages/index.js
import Link from 'next/link';

const Index = () => {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center', border: '1px solid #ccc', borderRadius: '5px', marginTop: '20px' }}>
      <h2 style={{ color: '#001f3f', fontSize: '24px' }}>Welcome to Your App</h2>
      <p>Please choose an option:</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <Link href="/login">
          {/* <a style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#001f3f', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Login</a> */}
        </Link>
        <Link href="/signup">
          {/* <a style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#4caf50', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Signup</a> */}
        </Link>
      </div>
    </div>
  );
};

export default Index;
