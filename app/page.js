"use client";

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle, ChevronRight, Menu } from 'lucide-react';

export default function TicoFlow() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const services = [
    { id: 1, name: "Corte de Cabello", price: "₡10,000", duration: "45 min" },
    { id: 2, name: "Barba Completa", price: "₡7,000", duration: "30 min" },
    { id: 3, name: "Combo Tico (Corte + Barba)", price: "₡15,000", duration: "75 min" }
  ];

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-black text-blue-600 tracking-tighter">TICOFLOW</h1>
        <Menu className="text-slate-400 cursor-pointer" />
      </nav>

      <main className="max-w-md mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800">Reserva tu cita</h2>
          <p className="text-slate-500 mt-2 italic">Sistema de reservas · Costa Rica 🇨🇷</p>
        </header>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          
          {step === 1 && (
            <div className="p-6 space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                Selecciona un servicio
              </h3>
              {services.map((s) => (
                <button 
                  key={s.id}
                  onClick={() => { setSelectedService(s); setStep(2); }}
                  className="w-full text-left p-5 rounded-2xl border-2 border-slate-50 hover:border-blue-500 hover:bg-blue-50 transition-all flex justify-between items-center group"
                >
                  <div>
                    <p className="font-bold text-slate-700 group-hover:text-blue-700">{s.name}</p>
                    <p className="text-xs text-slate-400 font-medium mt-1">{s.duration}</p>
                  </div>
                  <p className="font-black text-blue-600 text-lg">{s.price}</p>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="p-6 space-y-4">
              <button onClick={() => setStep(1)} className="text-sm text-blue-600 font-bold mb-2">← Volver</button>
              <h3 className="font-bold text-lg flex items-center gap-2 mb-4 text-slate-800">
                <Clock className="w-5 h-5 text-blue-500" /> Elige la hora
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {times.map((t) => (
                  <button 
                    key={t}
                    onClick={() => { setSelectedTime(t); setStep(3); }}
                    className="p-4 rounded-xl border-2 border-slate-50 font-bold text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-center"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-6 space-y-6">
              <button onClick={() => setStep(2)} className="text-sm text-blue-600 font-bold">← Volver</button>
              <h3 className="font-bold text-lg text-slate-800">Tus datos de contacto</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Tu nombre" className="w-full px-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium" />
                <input type="tel" placeholder="Tu teléfono" className="w-full px-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium" />
                <button 
                  onClick={() => setStep(4)}
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-lg transition-all active:scale-95"
                >
                  Confirmar Cita
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="p-10 text-center space-y-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-green-600 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">¡Todo listo!</h3>
              <p className="text-slate-500 mt-2">Reserva confirmada para {selectedService?.name}.</p>
              <button onClick={() => setStep(1)} className="text-blue-600 font-black hover:underline">Hacer otra reserva</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
