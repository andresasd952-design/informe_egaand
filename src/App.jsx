import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import doc01 from '../docs_egaand/01_resumen_egaand.md?raw';
import doc02 from '../docs_egaand/02_marco_egaand.md?raw';
import doc03 from '../docs_egaand/03_delitos_egaand.md?raw';
import doc04 from '../docs_egaand/04_comparacion_egaand.md?raw';
import doc05 from '../docs_egaand/05_responsabilidades_egaand.md?raw';
import doc06 from '../docs_egaand/06_datos_egaand.md?raw';
import doc07 from '../docs_egaand/07_conclusiones_egaand.md?raw';
import doc08 from '../docs_egaand/08_prompts_egaand.md?raw';

// Agregamos la propiedad 'path' a cada sección para crear las URLs
const secciones = [
  { id: 1, path: "/resumen", titulo: "1. Resumen Ejecutivo", contenido: doc01 },
  { id: 2, path: "/marco-legal", titulo: "2. Marco Legal", contenido: doc02 },
  { id: 3, path: "/delitos", titulo: "3. Delitos Tipificados", contenido: doc03 },
  { id: 4, path: "/comparacion", titulo: "4. Cuadro Comparativo", contenido: doc04 },
  { id: 5, path: "/responsabilidades", titulo: "5. Responsabilidades", contenido: doc05 },
  { id: 6, path: "/datos", titulo: "6. Datos Exfiltrados", contenido: doc06 },
  { id: 7, path: "/conclusiones", titulo: "7. Conclusiones", contenido: doc07 },
  { id: 8, path: "/prompts", titulo: "8. Ingeniería de Prompts", contenido: doc08 }
];

// Separamos el lector de Markdown en su propio componente para mantener el código limpio
const VisorMarkdown = ({ contenido }) => (
  <div className="prose-custom">
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({node, ...props}) => <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-700 border-b-2 border-indigo-100 pb-4" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-800 flex items-center gap-2" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-900" {...props} />,
        p: ({node, ...props}) => <p className="mb-6 text-slate-600 leading-relaxed text-lg text-justify" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc marker:text-indigo-500 pl-6 mb-6 text-slate-600 space-y-3 text-lg" {...props} />,
        li: ({node, ...props}) => <li className="pl-2" {...props} />,
        strong: ({node, ...props}) => <strong className="font-bold text-slate-900 bg-indigo-50 px-1 rounded" {...props} />,
        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-indigo-500 bg-indigo-50/50 p-6 my-8 rounded-r-2xl italic text-slate-700 shadow-sm" {...props} />,
        table: ({node, ...props}) => <div className="overflow-x-auto my-10 shadow-lg rounded-xl border border-slate-200"><table className="min-w-full text-left border-collapse bg-white" {...props} /></div>,
        th: ({node, ...props}) => <th className="bg-slate-50 border-b border-slate-200 p-5 font-bold text-slate-800 uppercase text-xs tracking-wider" {...props} />,
        td: ({node, ...props}) => <td className="border-b border-slate-100 p-5 text-slate-600 hover:bg-slate-50 transition-colors" {...props} />,
        code: ({node, inline, ...props}) => inline ? <code className="bg-slate-100 text-indigo-600 px-1.5 py-0.5 rounded font-mono text-sm" {...props} /> : <code className="block bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-sm overflow-x-auto my-6 shadow-inner" {...props} />
      }}
    >
      {contenido}
    </ReactMarkdown>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900">
        
        {/* Encabezado Premium */}
        <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white pt-8 pb-10 px-6 shadow-2xl border-b-[6px] border-indigo-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 drop-shadow-sm">
                Informe de Ciberseguridad
              </h1>
              <p className="text-indigo-200 mt-3 text-base md:text-lg font-medium tracking-wide">
                Análisis del Caso Capcom & Cumplimiento Normativo
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wider text-indigo-50">SISTEMA EN LÍNEA</span>
            </div>
          </div>
        </header>

        {/* Contenedor Principal */}
        <main className="flex-grow max-w-7xl mx-auto p-4 md:p-8 mt-6 w-full flex flex-col md:flex-row gap-8">
          
          {/* Panel Lateral (Menú de Rutas) */}
          <aside className="w-full md:w-1/4 md:sticky md:top-8 h-fit">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-5 border border-slate-100">
              <h2 className="text-xs font-bold uppercase tracking-widest mb-5 text-indigo-500 border-b-2 border-indigo-100 pb-3">
                Índice de Contenidos
              </h2>
              <nav className="flex flex-col gap-2">
                {secciones.map((sec) => (
                  <NavLink
                    key={sec.id}
                    to={sec.path}
                    className={({ isActive }) =>
                      `text-left px-5 py-3.5 rounded-xl transition-all duration-300 text-sm font-semibold flex items-center gap-3 ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-200 transform translate-x-1'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600 hover:translate-x-1'
                      }`
                    }
                  >
                    {sec.titulo}
                  </NavLink>
                ))}
              </nav>
            </div>
          </aside>

          {/* Panel Central (Sistema de Rutas) */}
          <section className="w-full md:w-3/4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 min-h-[700px]">
            <Routes>
              {/* Ruta por defecto que redirige a la primera página */}
              <Route path="/" element={<Navigate to="/resumen" replace />} />
              
              {/* Generamos una ruta real para cada sección */}
              {secciones.map((sec) => (
                <Route 
                  key={sec.id} 
                  path={sec.path} 
                  element={<VisorMarkdown contenido={sec.contenido} />} 
                />
              ))}
            </Routes>
          </section>

        </main>

        {/* Pie de Página Minimalista */}
        <footer className="bg-white border-t border-slate-200 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
            <p>&copy; 2026 - Proyecto de Ingeniería y Análisis Normativo</p>
            <div className="flex items-center gap-2">
              <p>Hecho por <span className="font-bold text-slate-800">Andrés</span></p>
              <span>•</span>
              <a
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors flex items-center gap-1"
              >
                Ver Repositorio
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;