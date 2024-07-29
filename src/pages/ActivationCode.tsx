import React, { useState, useRef } from 'react';

const ActivationCode: React.FC = () => {
  const [code, setCode] = useState(Array(6).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

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
    if (pasteData.length === 6) {
      const newCode = pasteData.split('').slice(0, 6);
      setCode(newCode);
      inputsRef.current[5]?.focus();
    }
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../src/assets/img/manzara.jpg')" }} >
       


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
      <button
        type="button"
        className="mt-6 px-4 py-2 bg-fuchsia-400 text-white rounded hover:bg-fuchsia-500 focus:outline-none font-medium hover:font-semibold"
        onClick={() => alert(`Activation code entered: ${code.join('')}`)}
      >
        Submit
      </button>
    </div>
  );
};

export default ActivationCode;
