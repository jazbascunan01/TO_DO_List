import { useEffect, useState } from 'react';

function Settings() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="page">
      <h2>Configuración</h2>
      <label>
        <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
        Modo oscuro
      </label>
    </div>
  );
}
export default Settings;