// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
// import { CustomCursor } from './components/CustomCursor';
// import { Model3D } from './components/Model3D';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-cyber-dark to-cyber-darker transition-colors">
        {/* <CustomCursor /> */}
        <Sidebar />
        <div className="pl-16">
          <Header />
          {/* <div className="fixed top-0 right-0 w-1/3 h-screen pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Model3D />
              </Suspense>
            </Canvas>
          </div> */}
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App; // Make sure this is a default export
