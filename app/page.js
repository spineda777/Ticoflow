"use client";

import React, { useState } from 'react';
import { 
  MapPin, 
  Palmtree, 
  Map, 
  Users, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  Compass
} from 'lucide-react';

export default function TicoFlowTurismo() {
  const [step, setStep] = useState(1);
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    { id: 1, name: "Tour Volcán Poás", price: "$45", duration: "6 horas", icon: <Compass className="w-5 h-5" /> },
    { id: 2, name: "Cataratas La Paz", price: "$60", duration: "8 horas", icon: <MapPin className="w-5 h-5" /> },
    { id: 3, name: "Aventura Tortuguero", price: "$120", duration: "2 días", icon: <Palmtree className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-sky-50 font-sans text-slate-900">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <Map className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-black text-slate-800 tracking-tight">TICOFLOW <span className="text-green-600">TRAVEL</span></h1>
        </div>
      </nav>

      <main className="max-w-md mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Reserva tu Experiencia</h2>
          <p className="text-slate-500 mt-2 font-medium">Costa Rica 🇨🇷 Pura Vida</p>
        </header>

        <div className="bg-white rounded-[2rem] shadow-2xl shadow-sky-200 border border-white overflow-hidden">
          {step === 1 && (
            <div className="p-8 space-y-4">
              <p className="text-green-600 font-bold text-xs uppercase tracking-widest mb-4">Paso 1: Elige tu destino</p>
              {tours.map((t) => (
                <button 
                  key={t.id}
                  onClick={() => { setSelectedTour(t); setStep(2); }}
                  className="w-full text-left p-5 rounded-2xl border-2 border-slate-50 hover:border-green-500 hover:bg-green-50 transition-all flex justify-between items-center group shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-green-100 group-hover:text-green-600">
                      {t.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-lg">{t.name}</p>
                      <p className="text-xs text-slate-400 font-medium">{t.duration}</p>
                    </div>
                  </div>
                  <p className="font-black text-green-700 text-lg">{t.price}</p>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="p-8 space-y-6">
              <button onClick={() => setStep(1)} className="text-sm text-green-600 font-bold">← Volver a tours</button>
              <h3 className="font-extrabold text-2xl text-slate-800">Tus datos</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Nombre completo" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none font-medium focus:ring-2 focus:ring-green-500" />
                <input type="email" placeholder="Correo electrónico" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none font-medium focus:ring-2 focus:ring-green-500" />
                <button 
                  onClick={() => setStep(3)}
                  className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-700 shadow-xl shadow-green-100 flex items-center justify-center gap-2"
                >
                  Reservar Ahora <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-green-600 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900">¡Recibido!</h3>
              <p className="text-slate-500">Nos pondremos en contacto para confirmar tu aventura en el <strong>{selectedTour?.name}</strong>.</p>
              <button onClick={() => setStep(1)} className="text-green-600 font-bold hover:underline">Ver otros tours</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
