import { useState } from 'react'
import Tarjeta from "./Tarjeta.jsx"
import "./App.css"

function App () {
  return (
    <div className='contenedor-de-tarjetas'>

      <Tarjeta 
      nombre="Juan"
      profesion="Desarrolador Web"
      imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwERTKUebkEM-hAP0Yw_x0MV-fzl7Ia8kBSIcqu-TKg&s=10"
      descripcion="Estoy aprendiendo React"
      />

      <Tarjeta 
      nombre="Jorge"
      profesion="Diseñador gráfico"
      imagen="https://cdni.iconscout.com/illustration/premium/thumb/disenador-grafico-masculino-illustration-svg-download-png-8027561.png"
      descripcion="Voy por el segundo año de carrera"  />

      <Tarjeta 
      nombre="Eugenia"
      profesion="Programadora"
      imagen="https://img.magnific.com/vector-gratis/linda-chica-hacker-operando-laptop-dibujos-animados-vector-icono-ilustracion-personas-tecnologia-aislada-plana_138676-9487.jpg?semt=ais_hybrid&w=740&q=80"  
      descripcion="Me desarrollo en Python principalmente"
      />
    </div>

  )
}

export default App
