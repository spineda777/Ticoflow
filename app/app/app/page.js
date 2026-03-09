"use client";

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle, ChevronRight, Menu, X } from 'lucide-react';

export default function TicoFlowMVP() {
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
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">TicoFlow</h1>
          <Menu className="text-gray-500 cursor-pointer" />
        </div>
      </nav>

      <main className="max-w-xl mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold mb-2">Reserva tu cita</h2>
          <p className="text-gray-500 italic">Sistema de reservas para negocios en Costa Rica</p>
        </header>

        {/* Pasos del Proceso */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <ChevronRight className="text-blue-500" /> Selecciona un servicio
              </h3>
              {services.map((s) => (
                <button 
                  key={s.id}
                  onClick={() => { setSelectedService(s); setStep(2); }}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all flex justify-between items-center group"
                >
                  <div>
                    <p className="font-bold group-hover:text-blue-700">{s.name}</p>
                    <p className="text-sm text-gray-500">{s.duration}</p>
                  </div>
                  <p className="font-bold text-blue-600">{s.price}</p>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <button onClick={() => setStep(1)} className="text-sm text-blue-600 font-medium">← Volver</button>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="text-blue-500" /> Elige un horario
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {times.map((t) => (
                  <button 
                    key={t}
                    onClick={() => { setSelectedTime(t); setStep(3); }}
                    className="p-3 rounded-lg border text-center font-medium hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <button onClick={() => setStep(2)} className="text-sm text-blue-600 font-medium">← Volver</button>
              <h3 className="text-lg font-semibold">Tus datos de contacto</h3>
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input type="text" placeholder="Nombre completo" className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input type="tel" placeholder="Número de teléfono" className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <button 
                  onClick={() => setStep(4)}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200"
                >
                  Confirmar Reserva
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="py-10 text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold">¡Cita confirmada!</h3>
              <p className="text-gray-600 px-4">Hemos enviado los detalles a tu número. ¡Te esperamos en TicoFlow!</p>
              <div className="bg-gray-50 p-4 rounded-xl mx-4 text-left border border-dashed border-gray-300">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Resumen:</p>
                <p className="font-bold">{selectedService?.name}</p>
                <p>{selectedTime} - Hoy</p>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="text-blue-600 font-bold hover:underline"
              >
                Hacer otra reserva
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2026 TicoFlow MVP · Hecho en 🇨🇷
      </footer>
    </div>
  );
}
