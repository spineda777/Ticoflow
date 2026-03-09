"use client";

import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle, 
  ChevronRight, 
  Menu,
  Scissors,
  Star,
  MapPin
} from 'lucide-react';

export default function TicoFlow() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const services = [
    { id: 1, name: "Corte de Cabello", price: "₡10,000", duration: "45 min", icon: <Scissors className="w-5 h-5" /> },
    { id: 2, name: "Barba Completa", price: "₡7,000", duration: "30 min", icon: <User className="w-5 h-5" /> },
    { id: 3, name: "Combo Tico (Corte + Barba)", price: "₡15,000", duration: "75 min", icon: <Star className="w-5 h-5" /> }
  ];

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Scissors className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-black text-slate-800 tracking-tighter">TICOFLOW</h1>
        </div>
        <Menu className="text-slate-400 cursor-pointer" />
      </nav>

      <main className="max-w-md mx-auto px-4 py-8">
        {/* Header con ubicación */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center gap-1 text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">
            <MapPin className="w-3 h-3" /> San José, Costa Rica
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Reserva tu cita</h2>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100 border border-slate-100 overflow-hidden">
          {/* PASO 1: SERVICIOS */}
          {step === 1 && (
            <div className="p-8 space-y-4">
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">Paso 1: Elige tu estilo</p>
              {services.map((s) => (
                <button 
                  key={s.id}
                  onClick={() => { setSelectedService(s); setStep(2); }}
                  className="w-full text-left p-5 rounded-2xl border-2 border-slate-50 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex justify-between items-center group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-lg">{s.name}</p>
                      <p className="text-xs text-slate-400 font-medium">{s.duration}</p>
                    </div>
                  </div>
                  <p className="font-black text-blue-600 text-lg">{s.price}</p>
                </button>
              ))}
            </div>
          )}

          {/* PASO 2: HORARIOS */}
          {step === 2 && (
            <div className="p-8 space-y-4">
              <button onClick={() => setStep(1)} className="text-sm text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                ← Volver a servicios
              </button>
              <h3 className="font-extrabold text-2xl text-slate-800 mt-4 mb-6">Selecciona la hora</h3>
              <div className="grid grid-cols-2 gap-3">
                {times.map((t) => (
                  <button 
                    key={t}
                    onClick={() => { setSelectedTime(t); setStep(3); }}
                    className="p-4 rounded-2xl border-2 border-slate-50 font-bold text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-center shadow-sm"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PASO 3: CONFIRMACIÓN */}
          {step === 3 && (
            <div className="p-8 space-y-6">
              <button onClick={() => setStep(2)} className="text-sm text-blue-600 font-bold">← Cambiar hora</button>
              <h3 className="font-extrabold text-2xl text-slate-800">Casi listo</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resumen:</p>
                  <p className="font-bold text-slate-700">{selectedService?.name} • {selectedTime}</p>
                </div>
                <input type="text" placeholder="Tu nombre completo" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium text-slate-800 placeholder:text-slate-300" />
                <input type="tel" placeholder="WhatsApp (8888-8888)" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium text-slate-800 placeholder:text-slate-300" />
                <button 
                  onClick={() => setStep(4)}
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Confirmar Reserva <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* PASO 4: ÉXITO */}
          {step === 4 && (
            <div className="p-12 text-center space-y-6 bg-white">
              <div className="relative">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="text-green-600 w-12 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900">¡Reservado!</h3>
                <p className="text-slate-500 leading-relaxed">
                  Te esperamos para tu <strong>{selectedService?.name}</strong>. Se ha enviado un recordatorio a tu WhatsApp.
                </p>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-colors"
              >
                Volver al inicio
              </button>
            </div>
          )}
        </div>

        <p className="text-center mt-12 text-slate-400 text-[10px] font-black tracking-[0.3em] uppercase">
          TicoFlow • Barber Tech 2026
        </p>
      </main>
    </div>
  );
}
