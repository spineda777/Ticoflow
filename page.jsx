
export default function Home() {
  return (
    <main style={{fontFamily:"Arial",padding:"40px"}}>
      <h1>TicoFlow MVP</h1>
      <p>Sistema de reservas para negocios en Costa Rica.</p>

      <h2>Demo de reservas</h2>
      <ul>
        <li>10:00 AM - Reservado</li>
        <li>11:00 AM - Disponible</li>
        <li>12:00 PM - Reservado</li>
      </ul>

      <button style={{padding:"10px 20px",fontSize:"16px"}}>
        Crear Reserva
      </button>
    </main>
  )
}
