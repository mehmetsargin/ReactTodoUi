import React, { useState } from 'react'
import "./App.css";
import Navbar from './Navbar';

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura Ode", tamamlandi: false },
  { id: 3, baslik: "Fiş Ode", tamamlandi: true }
];

function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");

  const addNew = title => {
    setListe([...liste, { id: Date.now(), baslik: title, tamamlandi: false }]); setYeniBaslik("");
  }

  const markCompleted = (id) => {
    setListe(liste.map(el =>
      el.id === id ? { ...el, tamamlandi: !el.tamamlandi } : el));
  }

  const clearCompleted = () => {
    setListe(liste.filter(item => !item.tamamlandi))
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className='App'>
        <br />
        <div className='ekleme_formu'>
          <input value={yeniBaslik} onChange={(e) => setYeniBaslik(e.target.value)} placeholder='listeye ekle' />
          <button onClick={() => addNew(yeniBaslik)}>Ekle</button>
        </div>
        <div className='liste'>
          {liste.map(item => (
            <div key={item.id} onClick={() => markCompleted(item.id)}
              className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
          ))}
        </div>
        <button onClick={() => clearCompleted()} className='temizle'>Tamamlananları Temizle</button>
      </div>
    </div>
  );
}

export default App
