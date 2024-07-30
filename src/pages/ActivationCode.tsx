import React, { useState, useRef } from 'react';
import axios from 'axios';

const ActivationCode: React.FC = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1); 
    setCode(newCode);

 
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData('text');
    if (pasteData.length <= 6) {
      const newCode = pasteData.split('').slice(0, 6);
      setCode(newCode);
      inputsRef.current[newCode.length - 1]?.focus();
    }
    e.preventDefault();
  };


  const handleSubmit = async () => {
    const activationCode = code.join('');
    const token = localStorage.getItem('authToken');
  
    if (!token) {
      setError('Token bulunamadı, lütfen giriş yapın.');
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.get(
        `http://localhost:8088/api/v1/auth/activate-account`,
        {
          params: { token: activationCode }
        }
      );
  
      console.log('Full API Response:', response);
      console.log('Response Data:', response.data);
      console.log('New Token:', response.data.token); // Eğer `token` burada varsa
  
      const newToken = response.data.token;
      if (newToken) {
        localStorage.setItem('authToken', newToken);
        alert('Aktivasyon başarılı: ' + response.data.message);
      } else {
        setError('Yeni token alınamadı.');
      }
    } catch (err) {
      console.error('Activation error:', err);
      setError('Aktivasyon başarısız, lütfen kodu kontrol edin.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../src/assets/img/manzara.jpg')" }}>
      <h2 className="text-3xl font-bold mb-6 text-white">Enter Activation Code</h2>
      <div className="flex space-x-2">
        {code.map((num, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={num}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => (inputsRef.current[index] = el)}
            className="w-12 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <button
        type="button"
        className="mt-6 px-4 py-2 bg-fuchsia-400 text-white rounded hover:bg-fuchsia-500 focus:outline-none font-medium hover:font-semibold"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default ActivationCode;
