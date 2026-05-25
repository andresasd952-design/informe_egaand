import React from 'react';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Encabezado Principal */}
      <header className="bg-slate-900 text-white p-6 shadow-lg border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Informe de Ciberseguridad: Caso Capcom
          </h1>
          <p className="text-slate-300 mt-2 text-sm md:text-base">
            Análisis Legal, Técnico y Responsabilidades Corporativas
          </p>
        </div>
      </header>

      {/* Contenedor Principal */}
      <main className="flex-grow max-w-6xl mx-auto p-4 md:p-8 mt-4 w-full">
        <div className="bg-white rounded-xl shadow-md p-6 min-h-[500px] border border-gray-200 flex items-center justify-center">
          <p className="text-gray-400 font-medium">
            Cargando módulos del informe...
          </p>
        </div>
      </main>

      {/* Pie de Página */}
      <footer className="bg-slate-900 text-slate-400 py-4 border-t border-slate-800 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>&copy; 2026 - Proyecto de Ingeniería</p>
          <p>
            Hecho por <span className="font-semibold text-slate-200">Andrés</span> |{' '}
            <a
              href="https://github.com/andresasd952-design" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-medium"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;