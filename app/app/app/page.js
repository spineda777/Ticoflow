"use client";

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle, ChevronRight, Menu } from 'lucide-react';

export default function TicoFlow() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, name: "Corte de Cabello", price: "₡10,000", duration: "45 min" },
    { id: 2, name: "Barba Completa", price: "₡7,000", duration: "30 min" },
    { id: 3, name: "Combo Tico (Corte + Barba)", price: "₡15,000", duration: "75 min" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-black text-blue-600 tracking-tighter">TICOFLOW</h1>
        <Menu className="text-slate-400" />
      </nav>

      <main className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800">Reserva tu espacio</h2>
          <p className="text-slate-500 mt-2">Fácil, rápido y pura vida 🇨🇷</p>
        </div>

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
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">{s.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-blue-600 text-lg">{s.price}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="text-green-600 w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">¡Cita agendada!</h3>
                <p className="text-slate-500 mt-2 leading-relaxed">
                  Has reservado <strong>{selectedService?.name}</strong>. <br/>
                  Te enviamos un comprobante por SMS.
                </p>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors"
              >
                Listo, gracias
              </button>
            </div>
          )}
        </div>

        <p className="text-center mt-8 text-slate-400 text-sm font-medium">
          TicoFlow MVP © 2026
        </p>
      </main>
    </div>
  );
}
