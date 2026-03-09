"use client";
import React, { useState, useEffect } from "react";
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts";
import { 
  Calendar, Clock, Users, ChevronRight, CheckCircle, 
  MapPin, Palmtree, Compass, Navigation, Menu, Star, Search
} from "lucide-react";

// TICOFLOW BRAND TOKENS
const BRAND = {
  green: "#5CC831",
  teal: "#1DAF8E",
  blue: "#1565C0",
  bg: "#060D16",
  surface: "#0B1420",
  text: "#E8F5E9",
  muted: "#90A4AE",
  grad: "linear-gradient(135deg, #5CC831 0%, #1DAF8E 100%)",
  gradBtn: "linear-gradient(135deg, #6CD93E 0%, #1DAF8E 100%)"
};

export default function TicoFlowMVP() {
  const [step, setStep] = useState(1);
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    { id: 1, name: "Volcán Poás & Doka", price: "$45", duration: "6h", rating: 4.9 },
    { id: 2, name: "Cataratas La Paz", price: "$65", duration: "8h", rating: 4.8 },
    { id: 3, name: "Manuel Antonio Day", price: "$95", duration: "12h", rating: 5.0 }
  ];

  return (
    <div style={{ backgroundColor: BRAND.bg, minHeight: '100-vh', color: BRAND.text, fontFamily: 'sans-serif' }}>
      {/* Header con Logo Colibrí */}
      <nav style={{ padding: '20px', borderBottom: `1px solid rgba(29,175,142,0.1)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: BRAND.grad, padding: '8px', borderRadius: '12px' }}>
            <Navigation size={24} color="white" />
          </div>
          <span style={{ fontWeight: 900, fontSize: '22px', letterSpacing: '-1px' }}>TICOFLOW</span>
        </div>
      </nav>

      <main style={{ maxWidth: '450px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '10px' }}>Explora el Paraíso</h2>
          <p style={{ color: BRAND.muted }}>Reserva tu próxima aventura en Costa Rica 🇨🇷</p>
        </div>

        {/* Contenedor del Flow */}
        <div style={{ background: BRAND.surface, borderRadius: '32px', padding: '30px', border: `1px solid ${BRAND.border}` }}>
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {tours.map(t => (
                <button 
                  key={t.id}
                  onClick={() => { setSelectedTour(t); setStep(2); }}
                  style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    padding: '20px', 
                    borderRadius: '20px',
                    color: BRAND.text,
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{t.name}</span>
                    <span style={{ color: BRAND.green, fontWeight: 900 }}>{t.price}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: BRAND.muted }}>{t.duration} • ⭐ {t.rating}</div>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ marginBottom: '20px' }}>
                <CheckCircle size={60} color={BRAND.green} style={{ margin: '0 auto' }} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800 }}>¡Excelente elección!</h3>
              <p style={{ color: BRAND.muted, margin: '15px 0' }}>Preparando tu viaje a {selectedTour?.name}</p>
              <button 
                onClick={() => setStep(1)}
                style={{ background: BRAND.gradBtn, border: 'none', padding: '15px 30px', borderRadius: '15px', color: 'white', fontWeight: 'bold' }}
              >
                Confirmar y Continuar
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
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
