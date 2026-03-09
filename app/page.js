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
